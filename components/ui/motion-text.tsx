'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: string | React.ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
  once?: boolean
}

// Refero / Dala Expo-Out easing curve: cubic-bezier(0.19, 1, 0.22, 1)
const REFERO_EASE = [0.19, 1, 0.22, 1] as const

/**
 * Editorial Text Wipe-Up animation inspired by Refero / Dala (charWipeUpIn / rotateWipeUpIn)
 * Masks text inside an overflow-hidden wrapper, sliding up with a delicate rotation and opacity.
 */
export function TextReveal({
  children,
  className,
  delay = 0,
  duration = 0.85,
  as = 'div',
  once = true,
}: TextRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-10% 0px' })

  const Component = as as any

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.div
        initial={{ y: '115%', opacity: 0, rotate: 1.5 }}
        animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : { y: '115%', opacity: 0, rotate: 1.5 }}
        transition={{
          duration,
          delay,
          ease: REFERO_EASE,
        }}
        style={{ willChange: 'transform, opacity' }}
      >
        <Component>{children}</Component>
      </motion.div>
    </div>
  )
}

/**
 * Split text into words/lines and animate each with staggered reveal
 */
export function SplitLineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
  immediate = false,
}: {
  lines: (string | React.ReactNode)[]
  className?: string
  lineClassName?: string
  delay?: number
  stagger?: number
  immediate?: boolean
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: immediate ? '150px 0px' : '-5% 0px' })
  const shouldAnimate = immediate ? true : isInView

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: '120%', opacity: 0, rotate: 1.8 }}
            animate={shouldAnimate ? { y: 0, opacity: 1, rotate: 0 } : { y: '120%', opacity: 0, rotate: 1.8 }}
            transition={{
              duration: 0.95,
              delay: delay + i * stagger,
              ease: REFERO_EASE,
            }}
            className={lineClassName}
            style={{ willChange: 'transform, opacity' }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}

/**
 * Scroll-triggered gentle fade up for paragraphs and elements
 */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: REFERO_EASE,
      }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Scroll-triggered hairline border animation that draws horizontally
 */
export function DrawLine({
  className,
  delay = 0,
  duration = 0.8,
}: {
  className?: string
  delay?: number
  duration?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{
        duration,
        delay,
        ease: REFERO_EASE,
      }}
      style={{ transformOrigin: 'left', willChange: 'transform' }}
      className={cn('h-px w-full bg-border', className)}
    />
  )
}
