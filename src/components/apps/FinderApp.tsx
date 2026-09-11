import { APPS } from '@/lib/apps'
import { useWindowStore, type AppId } from '@/store/useWindowStore'

const FOLDER_IDS: AppId[] = [
  'about',
  'projects',
  'experience',
  'achievements',
  'certifications',
  'resume',
  'contact',
]

export function FinderApp() {
  const openApp = useWindowStore((state) => state.openApp)

  const folders = APPS.filter((app) => FOLDER_IDS.includes(app.id))

  return (
    <div className="grid h-full grid-cols-3 gap-4 p-6 content-start">
      {folders.map((app) => {
        const Icon = app.icon
        return (
          <button
            key={app.id}
            onDoubleClick={() => openApp(app.id)}
            className="surface-card-hover flex flex-col items-center gap-2 rounded-lg p-3 text-primary"
          >
            <div className="surface-card flex h-12 w-12 items-center justify-center rounded-xl">
              <Icon size={22} strokeWidth={1.5} />
            </div>
            <span className="text-center text-xs text-secondary">{app.title}</span>
          </button>
        )
      })}
    </div>
  )
}
