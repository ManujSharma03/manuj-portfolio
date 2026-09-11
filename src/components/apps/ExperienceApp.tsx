import { experience } from '@/data/portfolio'

export function ExperienceApp() {
  return (
    <div className="flex h-full flex-col gap-5 p-6 text-primary">
      {experience.map((item, i) => (
        <div key={item.id} className="relative pl-5">
          <span
            className="absolute left-0 top-1.5 h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--text-muted)' }}
          />
          {i < experience.length - 1 && (
            <span
              className="absolute left-[3px] top-4 h-full w-px"
              style={{ backgroundColor: 'var(--border-subtle)' }}
            />
          )}
          <h3 className="text-[15px] font-medium">{item.title}</h3>
          <p className="text-sm text-muted">
            {item.organization} · {item.period}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-secondary">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-muted">–</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
