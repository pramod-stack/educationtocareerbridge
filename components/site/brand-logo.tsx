'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  className?: string
  markClassName?: string
  showSubtitle?: boolean
  variant?: 'horizontal' | 'compact' | 'badge'
}

export function BrandLogo({
  className,
  markClassName,
  showSubtitle = true,
  variant = 'horizontal',
}: BrandLogoProps) {
  if (variant === 'badge') {
    return (
      <div className={cn('relative inline-flex items-center gap-3 select-none group', className)}>
        <div className="relative h-12 w-auto aspect-[932/281] overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.02] p-1.5 shadow-[0_0_24px_rgba(128,82,255,0.2)] transition-all duration-300 group-hover:border-[#8052FF]/40 group-hover:shadow-[0_0_32px_rgba(128,82,255,0.35)]">
          <Image
            src="/images/education-bridge-mark.png"
            alt="Education to Career Bridge"
            width={932}
            height={281}
            priority
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-2.5 select-none group', className)}>
        <div className="relative h-8 w-auto aspect-[932/281] shrink-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/education-bridge-mark.png"
            alt="Education to Career Bridge"
            width={932}
            height={281}
            priority
            className={cn('h-full w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,194,255,0.25)]', markClassName)}
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-heading text-[15px] font-normal tracking-tight text-white">
            Education Bridge
          </span>
          {showSubtitle && (
            <span className="text-[9.5px] font-mono tracking-[0.2em] text-[#9A9A9A] uppercase mt-0.5">
              Career Architects
            </span>
          )}
        </div>
      </div>
    )
  }

  // Default Horizontal: Bridge artwork on left, crisp editorial wordmark on right
  return (
    <div className={cn('flex items-center gap-3.5 select-none group', className)}>
      {/* Official Architectural Bridge Mark */}
      <div className="relative h-9 sm:h-10 w-auto aspect-[932/281] shrink-0 transition-all duration-300 group-hover:scale-105">
        <Image
          src="/images/education-bridge-mark.png"
          alt="Education to Career Bridge"
          width={932}
          height={281}
          priority
          className={cn(
            'h-full w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,194,255,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_4px_20px_rgba(128,82,255,0.5)]',
            markClassName
          )}
        />
      </div>

      {/* Synchronized Vector Wordmark */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-baseline gap-1 text-[14px] sm:text-[15.5px] font-medium tracking-[0.04em] uppercase text-white">
          <span>Education</span>
          <span className="text-[#00C2FF] font-semibold text-[13px] sm:text-[14.5px]">To</span>
          <span>Career</span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] sm:text-[10.5px] tracking-[0.28em] font-mono text-[#9A9A9A] uppercase font-light">
            Bridge
          </span>
          {showSubtitle && (
            <>
              <span className="size-1 rounded-full bg-[#8052FF]" />
              <span className="text-[9.5px] tracking-[0.16em] font-mono text-[#8052FF] uppercase hidden sm:inline">
                Career Architects
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
