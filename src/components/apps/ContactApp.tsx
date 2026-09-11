import { Code2, Link, Mail } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function ContactApp() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-6 text-primary">
      <div>
        <h2 className="text-lg font-medium">Let&apos;s talk</h2>
        <p className="mt-1 text-sm text-secondary">{profile.tagline}</p>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="surface-card surface-card-hover flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors"
        >
          <Mail size={16} className="text-secondary" />
          {profile.email}
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="surface-card surface-card-hover flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors"
        >
          <Code2 size={16} className="text-secondary" />
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="surface-card surface-card-hover flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-colors"
        >
          <Link size={16} className="text-secondary" />
          LinkedIn
        </a>
      </div>
    </div>
  )
}
