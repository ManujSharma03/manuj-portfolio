'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/portfolio'

interface WelcomeTransitionProps {
  onFinish: () => void
}

// Brief, polished identity reveal shown for a moment between unlocking and
// landing on the desktop — replaces the old cycling multi-language "Hello"
// screen with a single clean fade/blur-in of the user's name.
const DURATION_MS = 900

export function WelcomeTransition({ onFinish }: WelcomeTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, DURATION_MS)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-[44px] font-light text-white sm:text-[60px]"
      >
        Welcome
      </motion.p>
    </motion.div>
  )
}
