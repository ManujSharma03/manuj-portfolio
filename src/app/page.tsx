'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LoginScreen } from '@/components/LoginScreen'
import { WelcomeTransition } from '@/components/WelcomeTransition'
import { Desktop } from '@/components/desktop/Desktop'
import { MobileView } from '@/components/MobileView'

type Stage = 'locked' | 'transitioning' | 'unlocked'

const SESSION_KEY = 'mf_unlocked'

export default function Home() {
  const [stage, setStage] = useState<Stage>('locked')

  // Skip the lock screen if already unlocked earlier in this browser tab session.
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setStage('unlocked')
    }
  }, [])

  const handleUnlock = () => setStage('transitioning')
  const handleTransitionFinish = () => {
    sessionStorage.setItem(SESSION_KEY, 'true')
    setStage('unlocked')
  }
  const handleLock = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setStage('locked')
  }

  return (
    <>
      <AnimatePresence>
        {stage === 'locked' && <LoginScreen key="login" onUnlock={handleUnlock} />}
        {stage === 'transitioning' && (
          <WelcomeTransition key="welcome" onFinish={handleTransitionFinish} />
        )}
      </AnimatePresence>

      {stage === 'unlocked' && (
        <>
          <div className="hidden md:block">
            <Desktop onLock={handleLock} />
          </div>
          <div className="md:hidden">
            <MobileView />
          </div>
        </>
      )}
    </>
  )
}
