'use client'

import { useState } from 'react'
import { APPS } from '@/lib/apps'
import type { AppId } from '@/store/useWindowStore'
import { AboutApp } from '@/components/apps/AboutApp'
import { ProjectsApp } from '@/components/apps/ProjectsApp'
import { ExperienceApp } from '@/components/apps/ExperienceApp'
import { AchievementsApp } from '@/components/apps/AchievementsApp'
import { CertificationsApp } from '@/components/apps/CertificationsApp'
import { ResumeApp } from '@/components/apps/ResumeApp'
import { ContactApp } from '@/components/apps/ContactApp'
import { AssistantApp } from '@/components/apps/AssistantApp'
import { profile } from '@/data/portfolio'

const SECTION_ORDER: AppId[] = [
  'about',
  'projects',
  'experience',
  'achievements',
  'certifications',
  'resume',
  'contact',
  'assistant',
]

const CONTENT: Partial<Record<AppId, React.ComponentType>> = {
  about: AboutApp,
  projects: ProjectsApp,
  experience: ExperienceApp,
  achievements: AchievementsApp,
  certifications: CertificationsApp,
  resume: ResumeApp,
  contact: ContactApp,
  assistant: AssistantApp,
}

export function MobileView() {
  const [active, setActive] = useState<AppId>('about')
  const sections = APPS.filter((app) => SECTION_ORDER.includes(app.id))
  const ActiveContent = CONTENT[active]

  return (
    <div className="flex h-[100dvh] flex-col text-primary" style={{ backgroundColor: 'var(--app-bg)' }}>
      <header className="border-b border-[color:var(--border-subtle)] px-4 py-3">
        <h1 className="text-base font-medium">{profile.name}</h1>
        <p className="text-xs text-muted">{profile.role}</p>
      </header>

      <nav className="flex gap-1 overflow-x-auto border-b border-[color:var(--border-subtle)] px-3 py-2">
        {sections.map((app) => (
          <button
            key={app.id}
            onClick={() => setActive(app.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition-colors ${
              active === app.id ? 'bg-white text-black' : 'surface-card text-secondary'
            }`}
          >
            {app.title}
          </button>
        ))}
      </nav>

      <main className="flex-1 overflow-y-auto">{ActiveContent && <ActiveContent />}</main>
    </div>
  )
}
