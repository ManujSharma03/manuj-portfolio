'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { useWindowStore, type AppId } from '@/store/useWindowStore'
import {
  profile,
  projects,
  experience,
  achievements,
  certifications,
} from '@/data/portfolio'

interface SearchResult {
  id: string
  title: string
  subtitle: string
  appId: AppId
}

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [
    { id: 'about', title: profile.name, subtitle: 'About · ' + profile.role, appId: 'about' },
  ]

  projects.forEach((p) =>
    results.push({ id: p.id, title: p.name, subtitle: 'Project · ' + p.category, appId: 'projects' })
  )
  experience.forEach((e) =>
    results.push({
      id: e.id,
      title: e.title,
      subtitle: 'Experience · ' + e.organization,
      appId: 'experience',
    })
  )
  achievements.forEach((a) =>
    results.push({ id: a.id, title: a.title, subtitle: 'Achievement · ' + a.year, appId: 'achievements' })
  )
  certifications.forEach((c) =>
    results.push({ id: c.id, title: c.name, subtitle: 'Certification · ' + c.issuer, appId: 'certifications' })
  )
  results.push({ id: 'contact', title: 'Contact', subtitle: profile.email, appId: 'contact' })
  results.push({ id: 'resume', title: 'Resume', subtitle: 'Download PDF', appId: 'resume' })

  return results
}

export function SearchSpotlight() {
  const searchOpen = useWindowStore((state) => state.searchOpen)
  const setSearchOpen = useWindowStore((state) => state.setSearchOpen)
  const openApp = useWindowStore((state) => state.openApp)
  const [query, setQuery] = useState('')

  const index = useMemo(buildIndex, [])
  const results = useMemo(() => {
    if (!query.trim()) return index.slice(0, 6)
    const q = query.toLowerCase()
    return index.filter(
      (r) => r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)
    )
  }, [query, index])

  if (!searchOpen) return null

  const handleSelect = (appId: AppId) => {
    openApp(appId)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-32"
      onClick={() => setSearchOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="surface-panel w-full max-w-md rounded-xl border shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex items-center gap-2 border-b border-[color:var(--border-subtle)] px-4 py-3">
          <Search size={16} className="text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search this portfolio..."
            className="flex-1 bg-transparent text-sm text-primary placeholder:text-muted focus:outline-none"
          />
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="px-3 py-4 text-center text-sm text-muted">No results.</p>
          )}
          {results.map((result) => (
            <button
              key={result.id}
              onClick={() => handleSelect(result.appId)}
              className="surface-card-hover flex w-full flex-col items-start rounded-lg px-3 py-2 text-left"
            >
              <span className="text-sm text-primary">{result.title}</span>
              <span className="text-xs text-muted">{result.subtitle}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
