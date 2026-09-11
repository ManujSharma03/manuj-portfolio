import { profile } from '@/data/portfolio'
import { Avatar } from '@/components/Avatar'

export function AboutApp() {
  return (
    <div className="flex h-full flex-col gap-5 p-6 text-primary">
      <div className="flex items-center gap-4">
        <Avatar size={64} className="shrink-0" />
        <div>
          <h2 className="text-lg font-medium">{profile.name}</h2>
          <p className="text-sm text-secondary">{profile.role}</p>
          <p className="text-sm text-muted">{profile.location}</p>
        </div>
      </div>

      <div className="space-y-3 text-sm leading-relaxed text-secondary">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div>
        <h3 className="mb-2 text-xs uppercase tracking-wide text-muted">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span key={skill} className="surface-card rounded-full border px-3 py-1 text-xs text-secondary">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xs uppercase tracking-wide text-muted">Education</h3>
        <div className="space-y-2">
          {profile.education.map((edu, i) => (
            <div key={i} className="text-sm">
              <p className="text-secondary">{edu.degree}</p>
              <p className="text-muted">
                {edu.school} · {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
