'use client'

import { useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { TopBar, TOP_BAR_HEIGHT } from './TopBar'
import { LiveWallpaper } from './LiveWallpaper'
import { Dock } from './Dock'
import { DesktopIcon } from './DesktopIcon'
import { Window } from './Window'
import { SearchSpotlight } from './SearchSpotlight'
import { APPS } from '@/lib/apps'
import { AboutApp } from '@/components/apps/AboutApp'
import { ProjectsApp } from '@/components/apps/ProjectsApp'
import { ExperienceApp } from '@/components/apps/ExperienceApp'
import { AchievementsApp } from '@/components/apps/AchievementsApp'
import { CertificationsApp } from '@/components/apps/CertificationsApp'
import { ResumeApp } from '@/components/apps/ResumeApp'
import { ContactApp } from '@/components/apps/ContactApp'
import { FinderApp } from '@/components/apps/FinderApp'
import { AssistantApp } from '@/components/apps/AssistantApp'
import type { AppId } from '@/store/useWindowStore'

const CONTENT: Record<AppId, React.ComponentType> = {
  about: AboutApp,
  projects: ProjectsApp,
  experience: ExperienceApp,
  achievements: AchievementsApp,
  certifications: CertificationsApp,
  resume: ResumeApp,
  contact: ContactApp,
  finder: FinderApp,
  assistant: AssistantApp,
}

export function Desktop({ onLock }: { onLock: () => void }) {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const desktopIcons = APPS.filter((app) => app.onDesktop)

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a10]">
      <TopBar onLock={onLock} />

      {/* Everything below lives inside this container. Windows are
          clamped to its actual bounding box, so they can never be
          dragged under the top bar or off any edge of the viewport. */}
      <div
        ref={constraintsRef}
        className="absolute inset-x-0 bottom-0 overflow-hidden"
        style={{ top: TOP_BAR_HEIGHT }}
      >
        <LiveWallpaper />

        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {desktopIcons.map((app) => (
            <DesktopIcon key={app.id} app={app} />
          ))}
        </div>

        <AnimatePresence>
          {APPS.map((app) => {
            const Content = CONTENT[app.id]
            return (
              <Window key={app.id} id={app.id} constraintsRef={constraintsRef}>
                <Content />
              </Window>
            )
          })}
        </AnimatePresence>

        <SearchSpotlight />
      </div>

      <Dock />
    </div>
  )
}
