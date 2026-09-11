import { Trophy } from 'lucide-react'
import { achievements } from '@/data/portfolio'

export function AchievementsApp() {
  return (
    <div className="flex h-full flex-col gap-3 p-6 text-primary">
      {achievements.map((item) => (
        <div key={item.id} className="surface-card flex items-start gap-3 rounded-lg border p-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">
            <Trophy size={15} />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <span className="text-xs text-muted">{item.year}</span>
            </div>
            <p className="text-xs text-secondary">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
