import { ExternalLink, Code2 } from 'lucide-react'
import { projects } from '@/data/portfolio'

const statusColor: Record<string, string> = {
  Live: 'bg-emerald-400/20 text-emerald-300',
  'In progress': 'bg-amber-400/20 text-amber-300',
  Archived: 'surface-card text-muted',
}

export function ProjectsApp() {
  return (
    <div className="flex h-full flex-col gap-4 p-6 text-primary">
      {projects.map((project) => (
        <div key={project.id} className="surface-card rounded-lg border p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[15px] font-medium">{project.name}</h3>
              <p className="text-xs text-muted">{project.category}</p>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] ${statusColor[project.status]}`}
            >
              {project.status}
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-secondary">{project.purpose}</p>

          {project.limitations && (
            <p className="mt-1 text-xs text-muted">Limitations: {project.limitations}</p>
          )}

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="surface-card rounded-full px-2 py-0.5 text-[11px] text-secondary">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-3 flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-secondary transition-colors hover:text-primary"
              >
                <Code2 size={13} /> Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-secondary transition-colors hover:text-primary"
              >
                <ExternalLink size={13} /> Live demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
