'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`size-9 rounded-full border border-white/10 bg-white/5 ${className}`} />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative inline-flex size-9 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      aria-label={`Switch to ${isDark ? 'Day' : 'Night'} Mode`}
      title={`Switch to ${isDark ? 'Day' : 'Night'} Mode`}
    >
      {isDark ? (
        <Sun className="size-4 text-[#FFD166] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="size-4 text-[#8052FF] transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  )
}
