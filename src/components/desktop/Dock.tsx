'use client'

import { motion } from 'framer-motion'
import { APPS } from '@/lib/apps'
import { useWindowStore } from '@/store/useWindowStore'

export function Dock() {
  const windows = useWindowStore((state) => state.windows)
  const openApp = useWindowStore((state) => state.openApp)
  const focusApp = useWindowStore((state) => state.focusApp)

  const dockApps = APPS.filter((app) => app.onDock)

  return (
    <div className="fixed bottom-3 left-1/2 z-40 -translate-x-1/2">
      <div
        className="flex items-end gap-2 rounded-2xl border px-3 py-2 shadow-xl backdrop-blur-2xl"
        style={{ backgroundColor: 'var(--dock-bg)', borderColor: 'var(--border-subtle)' }}
      >
        {dockApps.map((app) => {
          const win = windows[app.id]
          const Icon = app.icon
          return (
            <motion.button
              key={app.id}
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              onClick={() => {
                if (win.isOpen && win.isMinimized) {
                  focusApp(app.id)
                  useWindowStore.setState((s) => ({
                    windows: { ...s.windows, [app.id]: { ...s.windows[app.id], isMinimized: false } },
                  }))
                } else if (win.isOpen) {
                  focusApp(app.id)
                } else {
                  openApp(app.id)
                }
              }}
              className="group relative flex h-11 w-11 flex-col items-center justify-center rounded-xl bg-white/90 text-black shadow-md"
              aria-label={app.title}
            >
              <Icon size={20} strokeWidth={1.75} />
              <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                {app.title}
              </span>
              {win.isOpen && (
                <span className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-white" />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
