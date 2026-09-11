import {
  User,
  FolderGit2,
  Briefcase,
  Trophy,
  BadgeCheck,
  FileText,
  Mail,
  Folder,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import type { AppId } from '@/store/useWindowStore'

export interface AppMeta {
  id: AppId
  title: string
  icon: LucideIcon
  defaultSize: { width: number; height: number }
  onDock: boolean
  onDesktop: boolean
}

export const APPS: AppMeta[] = [
  {
    id: 'finder',
    title: 'Portfolio Explorer',
    icon: Folder,
    defaultSize: { width: 640, height: 440 },
    onDock: true,
    onDesktop: false,
  },
  {
    id: 'about',
    title: 'About Me',
    icon: User,
    defaultSize: { width: 560, height: 480 },
    onDock: true,
    onDesktop: true,
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: FolderGit2,
    defaultSize: { width: 680, height: 520 },
    onDock: true,
    onDesktop: true,
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    defaultSize: { width: 600, height: 480 },
    onDock: true,
    onDesktop: true,
  },
  {
    id: 'achievements',
    title: 'Achievements',
    icon: Trophy,
    defaultSize: { width: 560, height: 440 },
    onDock: false,
    onDesktop: true,
  },
  {
    id: 'certifications',
    title: 'Certifications',
    icon: BadgeCheck,
    defaultSize: { width: 560, height: 440 },
    onDock: false,
    onDesktop: true,
  },
  {
    id: 'resume',
    title: 'Resume',
    icon: FileText,
    defaultSize: { width: 620, height: 560 },
    onDock: true,
    onDesktop: true,
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    defaultSize: { width: 480, height: 400 },
    onDock: true,
    onDesktop: true,
  },
  {
    id: 'assistant',
    title: 'Ask Assistant',
    icon: Sparkles,
    defaultSize: { width: 420, height: 560 },
    onDock: true,
    onDesktop: false,
  },
]

export function getAppMeta(id: AppId): AppMeta {
  const meta = APPS.find((app) => app.id === id)
  if (!meta) throw new Error(`Unknown app id: ${id}`)
  return meta
}
