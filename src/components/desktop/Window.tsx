'use client'

import { type ReactNode, type RefObject, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Maximize2, Minus, X } from 'lucide-react'
import { useWindowStore, type AppId } from '@/store/useWindowStore'
import { getAppMeta } from '@/lib/apps'

interface WindowProps {
  id: AppId
  children: ReactNode
  constraintsRef: RefObject<HTMLDivElement | null>
}

const EDGE_MARGIN = 8

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max))
}

export function Window({ id, children, constraintsRef }: WindowProps) {
  const win = useWindowStore((state) => state.windows[id])
  const closeApp = useWindowStore((state) => state.closeApp)
  const minimizeApp = useWindowStore((state) => state.minimizeApp)
  const toggleMaximize = useWindowStore((state) => state.toggleMaximize)
  const focusApp = useWindowStore((state) => state.focusApp)
  const setPosition = useWindowStore((state) => state.setPosition)

  const meta = getAppMeta(id)
  const { width, height } = meta.defaultSize

  const titleBarRef = useRef<HTMLDivElement>(null)
  const dragState = useRef<{
    pointerId: number
    startClientX: number
    startClientY: number
    startPosX: number
    startPosY: number
  } | null>(null)

  // Clamp this window's position so it can never sit outside the current
  // desktop/container bounds — recomputed on mount and on every resize so
  // it stays correct at any viewport size.
  const clampToContainer = (x: number, y: number) => {
    const container = constraintsRef.current
    if (!container) return { x, y }
    const rect = container.getBoundingClientRect()
    const maxX = Math.max(EDGE_MARGIN, rect.width - width - EDGE_MARGIN)
    const maxY = Math.max(EDGE_MARGIN, rect.height - height - EDGE_MARGIN)
    return {
      x: clamp(x, EDGE_MARGIN, maxX),
      y: clamp(y, EDGE_MARGIN, maxY),
    }
  }

  useEffect(() => {
    if (!win.isOpen || win.isMaximized) return

    const reclamp = () => {
      const clamped = clampToContainer(win.position.x, win.position.y)
      if (clamped.x !== win.position.x || clamped.y !== win.position.y) {
        setPosition(id, clamped)
      }
    }

    reclamp()
    window.addEventListener('resize', reclamp)
    return () => window.removeEventListener('resize', reclamp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win.isOpen, win.isMaximized, width, height])

  if (!win.isOpen || win.isMinimized) return null

  const handlePointerDown = (e: React.PointerEvent) => {
    if (win.isMaximized) return
    const target = e.target as HTMLElement
    if (target.closest('[data-no-drag]')) return

    focusApp(id)
    titleBarRef.current?.setPointerCapture(e.pointerId)
    dragState.current = {
      pointerId: e.pointerId,
      startClientX: e.clientX,
      startClientY: e.clientY,
      startPosX: win.position.x,
      startPosY: win.position.y,
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    const drag = dragState.current
    if (!drag || drag.pointerId !== e.pointerId) return

    const deltaX = e.clientX - drag.startClientX
    const deltaY = e.clientY - drag.startClientY
    const next = clampToContainer(drag.startPosX + deltaX, drag.startPosY + deltaY)
    setPosition(id, next)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragState.current?.pointerId === e.pointerId) {
      titleBarRef.current?.releasePointerCapture(e.pointerId)
      dragState.current = null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      onPointerDownCapture={() => focusApp(id)}
      style={{
        position: 'absolute',
        top: win.isMaximized ? EDGE_MARGIN : win.position.y,
        left: win.isMaximized ? EDGE_MARGIN : win.position.x,
        width: win.isMaximized ? `calc(100% - ${EDGE_MARGIN * 2}px)` : width,
        height: win.isMaximized ? `calc(100% - ${EDGE_MARGIN * 2}px)` : height,
        maxWidth: `calc(100% - ${EDGE_MARGIN * 2}px)`,
        maxHeight: `calc(100% - ${EDGE_MARGIN * 2}px)`,
        zIndex: win.zIndex,
      }}
      className="surface-panel flex flex-col overflow-hidden rounded-xl border shadow-2xl backdrop-blur-xl"
    >
      <div
        ref={titleBarRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`surface-card flex h-10 shrink-0 items-center gap-2 border-b px-3 ${
          win.isMaximized ? '' : 'cursor-grab active:cursor-grabbing'
        }`}
      >
        <div className="group flex items-center gap-2" data-no-drag>
          <button
            aria-label="Close"
            onClick={() => closeApp(id)}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] transition-opacity hover:opacity-80"
          >
            <X
              size={8}
              strokeWidth={3}
              className="text-[#4d0000] opacity-0 transition-opacity group-hover:opacity-100"
            />
          </button>
          <button
            aria-label="Minimize"
            onClick={() => minimizeApp(id)}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e] transition-opacity hover:opacity-80"
          >
            <Minus
              size={8}
              strokeWidth={3}
              className="text-[#5a3d00] opacity-0 transition-opacity group-hover:opacity-100"
            />
          </button>
          <button
            aria-label="Maximize"
            onClick={() => toggleMaximize(id)}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840] transition-opacity hover:opacity-80"
          >
            <Maximize2
              size={7}
              strokeWidth={3}
              className="text-[#0a3d0f] opacity-0 transition-opacity group-hover:opacity-100"
            />
          </button>
        </div>
        <span className="ml-1 truncate text-[13px] text-secondary">{meta.title}</span>
      </div>

      <div className="flex-1 overflow-y-auto">{children}</div>
    </motion.div>
  )
}
