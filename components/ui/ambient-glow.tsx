'use client'

import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Ambient Cursor Glow:
 * Subtle radial violet aura following cursor motion across the pure black void canvas.
 * Adds tactile depth without breaking the minimal dark aesthetic.
 */
export function AmbientGlow() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Smooth trailing spring physics for fluid movement
  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseLeave = () => {
      mouseX.set(-1000)
      mouseY.set(-1000)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(128, 82, 255, 0.07), transparent 75%)`,
      }}
    />
  )
}
