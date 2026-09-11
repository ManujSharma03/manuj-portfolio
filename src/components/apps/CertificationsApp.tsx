import { BadgeCheck } from 'lucide-react'
import { certifications } from '@/data/portfolio'

export function CertificationsApp() {
  return (
    <div className="flex h-full flex-col gap-3 p-6 text-primary">
      {certifications.map((cert) => (
        <div key={cert.id} className="surface-card flex items-center gap-3 rounded-lg border p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">
            <BadgeCheck size={15} />
          </div>
          <div>
            <h3 className="text-sm font-medium">{cert.name}</h3>
            <p className="text-xs text-muted">
              {cert.issuer} · {cert.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
