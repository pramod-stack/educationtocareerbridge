'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const STAGES = [
  { threshold: 0, text: 'Calibrating student psychometric benchmarks...' },
  { threshold: 28, text: 'Mapping 200+ degree pathways to live market demand...' },
  { threshold: 58, text: 'Auditing NAAC, NIRF & verified placement records...' },
  { threshold: 82, text: 'Architecting personalized career trajectory...' },
  { threshold: 98, text: 'Education to Career Bridge established.' },
]

export function SitePreloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState(STAGES[0].text)

  useEffect(() => {
    // Check if user already saw preloader in this session (optional, but keep it snappy)
    const hasSeen = sessionStorage.getItem('eb_preloader_seen')
    const duration = hasSeen ? 1200 : 2200 // slightly faster on repeat visits
    const startTime = performance.now()

    let animationFrameId: number

    const tick = (now: number) => {
      const elapsed = now - startTime
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100))
      
      // Smooth easing curve
      const eased = Math.min(100, Math.round(100 * Math.sin((rawProgress / 100) * (Math.PI / 2))))
      setProgress(eased)

      // Update status text
      const currentStage = [...STAGES].reverse().find((s) => eased >= s.threshold)
      if (currentStage) {
        setStatusText(currentStage.text)
      }

      if (rawProgress < 100) {
        animationFrameId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          sessionStorage.setItem('eb_preloader_seen', 'true')
          setLoading(false)
        }, 320)
      }
    }

    animationFrameId = requestAnimationFrame(tick)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black select-none overflow-hidden"
        >
          {/* Ambient Cosmic Radial Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(128,82,255,0.22),transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 inset-x-0 h-96 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(0,194,255,0.15),transparent_70%)]"
          />

          {/* Central Logo & Architectural Bridge Stage */}
          <div className="relative flex flex-col items-center px-6 max-w-lg w-full text-center">
            {/* Top Amber Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#FFB829]/30 bg-[#FFB829]/10 px-3.5 py-1 text-[11px] font-mono tracking-[0.2em] text-[#FFB829] uppercase mb-8"
            >
              <Sparkles className="size-3 text-[#FFB829]" />
              <span>CAREER ARCHITECTS</span>
            </motion.div>

            {/* Bridge Logo Artwork with Luminous Aura */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[932/281] flex items-center justify-center mb-6"
            >
              {/* Backlight Pulse */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8052FF]/30 via-[#00C2FF]/35 to-[#15846E]/30 blur-2xl -z-10 animate-pulse"
                style={{ animationDuration: '2.5s' }}
              />

              <Image
                src="/images/education-bridge-mark.png"
                alt="Education to Career Bridge"
                width={932}
                height={281}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,194,255,0.4)]"
              />
            </motion.div>

            {/* Synchronized Vector Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col items-center mt-2"
            >
              <div className="flex items-baseline gap-2 font-heading text-2xl sm:text-3xl tracking-[0.06em] uppercase text-white font-normal">
                <span>Education</span>
                <span className="text-[#00C2FF] font-semibold">To</span>
                <span>Career</span>
              </div>
              <span className="text-[12px] sm:text-[13px] tracking-[0.38em] font-mono text-[#9A9A9A] uppercase mt-1">
                Bridge
              </span>
            </motion.div>

            {/* Minimal Progress Bar & Milestone Status */}
            <div className="w-full max-w-xs mt-10 flex flex-col items-center gap-3">
              {/* Hairline Progress Track */}
              <div className="relative w-full h-[2px] rounded-full bg-white/[0.08] overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8052FF] via-[#00C2FF] to-[#FFB829]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Counter & Stage Text */}
              <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#9A9A9A]">
                <span className="truncate max-w-[210px] text-left text-white/70">
                  {statusText}
                </span>
                <span className="text-white font-medium pl-2">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Skip Option for Power Users */}
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setLoading(false)}
              className="mt-8 text-[11px] font-mono text-[#9A9A9A]/60 hover:text-white transition-colors uppercase tracking-[0.15em]"
            >
              Click anywhere to enter →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
