'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profile } from '@/data/portfolio'

// Original abstract gradient scene (blue/violet/magenta palette) — not a
// reproduction of any existing wallpaper artwork. Three soft blurred blobs
// drift slowly on their own and nudge gently toward the cursor for a subtle
// parallax feel, without being distracting.

export function LiveWallpaper() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.5 })

  const blobAX = useTransform(springX, (v) => v * 0.03)
  const blobAY = useTransform(springY, (v) => v * 0.03)
  const blobBX = useTransform(springX, (v) => v * -0.02)
  const blobBY = useTransform(springY, (v) => v * -0.02)
  const blobCX = useTransform(springX, (v) => v * 0.015)
  const blobCY = useTransform(springY, (v) => v * -0.015)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set(e.clientX - cx)
      mouseY.set(e.clientY - cy)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0a10] bg-cover bg-center" style={{ backgroundImage: "url('/wallpaper.jpg')" }}
>
      <motion.div
        style={{ x: blobAX, y: blobAY }}
        className="pointer-events-none absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full opacity-70 blur-[110px]"
      >
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-full rounded-full"
          style={{ background: 'radial-gradient(circle, #4338ca 0%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div
        style={{ x: blobBX, y: blobBY }}
        className="pointer-events-none absolute right-[-10%] top-1/4 h-[480px] w-[480px] rounded-full opacity-60 blur-[120px]"
      >
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-full rounded-full"
          style={{ background: 'radial-gradient(circle, #a21caf 0%, transparent 70%)' }}
        />
      </motion.div>

      <motion.div
        style={{ x: blobCX, y: blobCY }}
        className="pointer-events-none absolute bottom-[-15%] left-1/3 h-[560px] w-[560px] rounded-full opacity-50 blur-[130px]"
      >
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-full rounded-full"
          style={{ background: 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)' }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/25" />

      <div className="pointer-events-none relative z-0 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-[clamp(28px,5vw,56px)] font-medium tracking-tight text-white"
          style={{ textShadow: '0 2px 30px rgba(0,0,0,0.35)' }}
        >
          Hi, I am{' '}
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 14 }}
            className="pointer-events-auto inline-block cursor-default bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-sky-300 bg-clip-text font-semibold text-transparent transition-[filter] duration-300 hover:drop-shadow-[0_0_22px_rgba(192,132,252,0.55)]"
          >
            {profile.name}
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="mt-3 max-w-md text-sm text-white/60 sm:text-base"
        >
          {profile.tagline}
        </motion.p>
      </div>
    </div>
  )
}
