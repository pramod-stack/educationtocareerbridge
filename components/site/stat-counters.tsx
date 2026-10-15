'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string
  sublabel: string
}

const stats: Stat[] = [
  {
    value: 2300,
    suffix: '+',
    label: 'Students & Families',
    sublabel: 'guided with clarity',
  },
  {
    value: 120,
    suffix: '+',
    label: 'Partner Colleges',
    sublabel: 'verified on campus',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    sublabel: 'post-admission survey',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Career Tracks',
    sublabel: 'mapped with demand data',
  },
]

function format(n: number) {
  return n >= 1000 ? n.toLocaleString('en-IN') : String(n)
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  return value
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const value = useCountUp(stat.value, active)
  return (
    <div className="flex flex-col gap-1.5 py-6 px-4 sm:px-8">
      <dd className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
        {format(value)}
        <span className="text-[#8052FF] ml-0.5">{stat.suffix}</span>
      </dd>
      <dt className="text-sm font-semibold text-foreground/90">{stat.label}</dt>
      <p className="text-xs text-muted-foreground font-normal">{stat.sublabel}</p>
    </div>
  )
}

export function StatCounters() {
  const ref = useRef<HTMLDListElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Immediately trigger if already in viewport
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setActive(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <dl
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border-y border-border bg-card/60 backdrop-blur-sm"
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </dl>
  )
}
