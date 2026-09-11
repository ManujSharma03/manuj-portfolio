'use client'

import { useEffect } from 'react'
import { useThemeStore } from '@/store/useThemeStore'

// Applies the chosen theme to the whole document by toggling a `light`
// class on <html>. CSS variables in globals.css key off that class, so
// every themed surface (top bar, dock, windows, section content) updates
// together — no per-component theme logic needed.
export function ThemeEffect() {
  const mode = useThemeStore((state) => state.mode)

  useEffect(() => {
    const root = document.documentElement

    const applyResolvedTheme = () => {
      const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
      const isLight = mode === 'light' || (mode === 'system' && systemPrefersLight)
      root.classList.toggle('light', isLight)
    }

    applyResolvedTheme()

    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
      mediaQuery.addEventListener('change', applyResolvedTheme)
      return () => mediaQuery.removeEventListener('change', applyResolvedTheme)
    }
  }, [mode])

  return null
}
