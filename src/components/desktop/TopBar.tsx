'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Bell,
  Check,
  ChevronDown,
  GitBranch,
  Lock,
  Monitor,
  Moon,
  Search,
  Settings,
  Sun,
} from 'lucide-react'
import { profile } from '@/data/portfolio'
import { useWindowStore } from '@/store/useWindowStore'
import { useThemeStore, type ThemeMode } from '@/store/useThemeStore'
import { Avatar } from '@/components/Avatar'

export const TOP_BAR_HEIGHT = 44

interface TopBarProps {
  onLock: () => void
}

const THEME_OPTIONS: { mode: ThemeMode; label: string; icon: typeof Sun }[] = [
  { mode: 'light', label: 'Light', icon: Sun },
  { mode: 'dark', label: 'Dark', icon: Moon },
  { mode: 'system', label: 'System', icon: Monitor },
]

export function TopBar({ onLock }: TopBarProps) {
  const [now, setNow] = useState<Date | null>(null)
  const [accountOpen, setAccountOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const accountRef = useRef<HTMLDivElement>(null)
  const settingsRef = useRef<HTMLDivElement>(null)
  const toggleSearch = useWindowStore((state) => state.toggleSearch)
  const themeMode = useThemeStore((state) => state.mode)
  const setThemeMode = useThemeStore((state) => state.setMode)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 1000 * 30)
    return () => clearInterval(interval)
  }, [])

  // Close either menu on outside click.
  useEffect(() => {
    if (!accountOpen && !settingsOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (accountOpen && accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false)
      }
      if (settingsOpen && settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [accountOpen, settingsOpen])

  const timeString = now
    ? now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
    : ''

  return (
    <div
      style={{ height: TOP_BAR_HEIGHT, backgroundColor: 'var(--topbar-bg)' }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-b px-3 text-[13px] text-primary backdrop-blur-xl sm:px-4"
    >
      {/* Left: identity / breadcrumb, GitHub-style */}
      <div className="flex min-w-0 items-center gap-2">
        <Avatar size={22} className="shrink-0" />
        <span className="hidden truncate font-medium sm:inline">{profile.name}</span>
        <span className="hidden text-muted sm:inline">/</span>
        <span className="flex items-center gap-1 truncate text-secondary">
          portfolio
          <span className="surface-card hidden items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] text-muted sm:flex">
            <GitBranch size={11} />
            main
          </span>
        </span>
      </div>

      {/* Right: actions */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <button
          onClick={toggleSearch}
          aria-label="Search portfolio"
          className="surface-card-hover flex items-center gap-1.5 rounded-md px-2 py-1 text-secondary transition-colors hover:text-primary"
        >
          <Search size={14} />
          <span className="hidden md:inline text-xs">Search</span>
        </button>
        <button
          aria-label="Notifications"
          className="surface-card-hover rounded-md p-1.5 text-secondary transition-colors hover:text-primary"
        >
          <Bell size={14} />
        </button>

        {/* Settings dropdown — now functional, with theme switching */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={() => setSettingsOpen((open) => !open)}
            aria-label="Settings"
            aria-haspopup="menu"
            aria-expanded={settingsOpen}
            className="surface-card-hover rounded-md p-1.5 text-secondary transition-colors hover:text-primary"
          >
            <Settings size={14} />
          </button>

          {settingsOpen && (
            <div
              role="menu"
              className="surface-panel absolute right-0 top-[calc(100%+8px)] w-48 overflow-hidden rounded-lg border py-1 shadow-2xl backdrop-blur-xl"
            >
              <p className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wide text-muted">
                Appearance
              </p>
              {THEME_OPTIONS.map(({ mode, label, icon: Icon }) => (
                <button
                  key={mode}
                  role="menuitemradio"
                  aria-checked={themeMode === mode}
                  onClick={() => {
                    setThemeMode(mode)
                    setSettingsOpen(false)
                  }}
                  className="surface-card-hover flex w-full items-center justify-between px-3 py-2 text-left text-[13px] text-secondary transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={13} />
                    {label}
                  </span>
                  {themeMode === mode && <Check size={13} />}
                </button>
              ))}
            </div>
          )}
        </div>

        <span className="hidden text-muted lg:inline" suppressHydrationWarning>
          {timeString}
        </span>

        {/* Account dropdown */}
        <div className="relative ml-1" ref={accountRef}>
          <button
            onClick={() => setAccountOpen((open) => !open)}
            aria-haspopup="menu"
            aria-expanded={accountOpen}
            className="surface-card-hover flex items-center gap-1 rounded-full border py-0.5 pl-0.5 pr-2 transition-colors"
          >
            <Avatar size={20} />
            <ChevronDown
              size={12}
              className={`text-muted transition-transform duration-200 ${accountOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {accountOpen && (
            <div
              role="menu"
              className="surface-panel absolute right-0 top-[calc(100%+8px)] w-44 overflow-hidden rounded-lg border py-1 shadow-2xl backdrop-blur-xl"
            >
              <div className="border-b border-[color:var(--border-subtle)] px-3 py-2">
                <p className="truncate text-[13px] font-medium text-primary">{profile.name}</p>
                <p className="truncate text-[11px] text-muted">{profile.email}</p>
              </div>
              <button
                role="menuitem"
                onClick={() => {
                  setAccountOpen(false)
                  onLock()
                }}
                className="surface-card-hover flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] text-secondary transition-colors hover:text-primary"
              >
                <Lock size={13} />
                Lock Screen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
