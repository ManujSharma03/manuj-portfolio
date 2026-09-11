'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Lock, ArrowRight } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { wallpaper } from '@/lib/theme'
import { Avatar } from '@/components/Avatar'

interface LoginScreenProps {
  onUnlock: () => void
}

export function LoginScreen({ onUnlock }: LoginScreenProps) {
  const [now, setNow] = useState<Date | null>(null)
  const [showPasswordField, setShowPasswordField] = useState(false)
  const [password, setPassword] = useState('')
  const [avatarError, setAvatarError] = useState(false)

  useEffect(() => {
    setNow(new Date())
    const interval = setInterval(() => setNow(new Date()), 1000 * 30)
    return () => clearInterval(interval)
  }, [])

  const timeString = now
    ? now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
    : ''
  const dateString = now
    ? now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
    : ''

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onUnlock()
  }

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: wallpaper }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-[76px] font-light leading-none" suppressHydrationWarning>
          {timeString}
        </p>
        <p className="mt-1 text-lg text-white/70" suppressHydrationWarning>
          {dateString}
        </p>

        <div className="mt-14 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setShowPasswordField(true)}
            className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/20 transition-transform hover:scale-105"
          >
            {profile.avatarUrl && !avatarError ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <Avatar size={96} />
            )}
          </button>
          <p className="text-base text-white/90">{profile.name}</p>

          {showPasswordField ? (
            <motion.form
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="mt-2 flex items-center gap-2"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2">
                <Lock size={13} className="text-white/40" />
                <input
                  autoFocus
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-40 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                aria-label="Unlock"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <ArrowRight size={15} />
              </button>
            </motion.form>
          ) : (
            <p className="mt-1 text-xs text-white/40">Click your avatar to continue</p>
          )}

          {showPasswordField && (
            <p className="mt-1 text-[11px] text-white/30">
              This is a portfolio — any password works.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
