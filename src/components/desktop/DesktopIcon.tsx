'use client'

import type { AppMeta } from '@/lib/apps'
import { useWindowStore } from '@/store/useWindowStore'

interface DesktopIconProps {
  app: AppMeta
}

export function DesktopIcon({ app }: DesktopIconProps) {
  const openApp = useWindowStore((state) => state.openApp)
  const Icon = app.icon

  return (
    <button
      onDoubleClick={() => openApp(app.id)}
      className="flex w-20 flex-col items-center gap-1.5 rounded-lg p-2 text-center hover:bg-white/10 focus:bg-white/15 focus:outline-none"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-black shadow-md">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <span
        className="text-[12px] leading-tight text-white"
        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}
      >
        {app.title}
      </span>
    </button>
  )
}
