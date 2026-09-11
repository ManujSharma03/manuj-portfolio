import { Download, FileText } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function ResumeApp() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-primary">
      <div className="surface-card flex h-16 w-16 items-center justify-center rounded-2xl">
        <FileText size={28} />
      </div>

      <div className="text-center">
        <p className="text-sm text-secondary">
          🔗Take a look at my resume below📄, or grab a copy to keep😊.
        </p>
      </div>
      <a
        href={profile.links.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-80"
      >
        <Download size={15} />
        Download resume
      </a>
    </div>
  )
}
