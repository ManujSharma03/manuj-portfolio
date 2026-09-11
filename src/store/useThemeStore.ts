import { create } from 'zustand'

export type ThemeMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'mf_theme'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'dark'
}

interface ThemeStoreState {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeStoreState>((set) => ({
  mode: getInitialMode(),
  setMode: (mode) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, mode)
    }
    set({ mode })
  },
}))
