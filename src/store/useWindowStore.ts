import { create } from 'zustand'

export type AppId =
  | 'about'
  | 'projects'
  | 'experience'
  | 'achievements'
  | 'certifications'
  | 'resume'
  | 'contact'
  | 'finder'
  | 'assistant'

export interface WindowState {
  id: AppId
  isOpen: boolean
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  position: { x: number; y: number }
}

interface WindowStoreState {
  windows: Record<AppId, WindowState>
  topZIndex: number
  searchOpen: boolean
  openApp: (id: AppId) => void
  closeApp: (id: AppId) => void
  minimizeApp: (id: AppId) => void
  toggleMaximize: (id: AppId) => void
  focusApp: (id: AppId) => void
  setPosition: (id: AppId, position: { x: number; y: number }) => void
  toggleSearch: () => void
  setSearchOpen: (open: boolean) => void
}

const APP_IDS: AppId[] = [
  'about',
  'projects',
  'experience',
  'achievements',
  'certifications',
  'resume',
  'contact',
  'finder',
  'assistant',
]

const DEFAULT_OFFSETS: Record<AppId, { x: number; y: number }> = {
  about: { x: 80, y: 70 },
  projects: { x: 120, y: 100 },
  experience: { x: 160, y: 130 },
  achievements: { x: 100, y: 160 },
  certifications: { x: 140, y: 90 },
  resume: { x: 180, y: 120 },
  contact: { x: 90, y: 150 },
  finder: { x: 60, y: 60 },
  assistant: { x: 200, y: 80 },
}

function initialWindows(): Record<AppId, WindowState> {
  return APP_IDS.reduce((acc, id) => {
    acc[id] = {
      id,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      position: DEFAULT_OFFSETS[id],
    }
    return acc
  }, {} as Record<AppId, WindowState>)
}

export const useWindowStore = create<WindowStoreState>((set, get) => ({
  windows: initialWindows(),
  topZIndex: 1,
  searchOpen: false,

  openApp: (id) => {
    const nextZ = get().topZIndex + 1
    set((state) => ({
      topZIndex: nextZ,
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      },
    }))
  },

  closeApp: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false, isMaximized: false },
      },
    }))
  },

  minimizeApp: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: true },
      },
    }))
  },

  toggleMaximize: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMaximized: !state.windows[id].isMaximized },
      },
    }))
  },

  focusApp: (id) => {
    const nextZ = get().topZIndex + 1
    set((state) => ({
      topZIndex: nextZ,
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], zIndex: nextZ },
      },
    }))
  },

  setPosition: (id, position) => {
    set((state) => ({
      windows: { ...state.windows, [id]: { ...state.windows[id], position } },
    }))
  },

  toggleSearch: () => set((state) => ({ searchOpen: !state.searchOpen })),
  setSearchOpen: (open) => set({ searchOpen: open }),
}))
