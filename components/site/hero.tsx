'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react'
import HalftoneNebula, { NebulaParams } from '@/components/ui/halftone-nebula'
import { StatCounters } from '@/components/site/stat-counters'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const trustPoints = [
  'No admission pressure',
  'Honest college reports',
  'Support till placement',
]

const HERO_NEBULA_PARAMS: Partial<NebulaParams> = {
  voidColor: '#000000',
  hazeColor: '#0c0e2a',
  duskColor: '#1a1346',
  wineColor: '#2d186b',
  crimsonColor: '#8052ff', // Electric Iris
  hotColor: '#00c2ff',    // Luminous Cyan
  starColor: '#ffffff',
  planet: true,
  planetX: 0.78,
  planetY: 0.22,
  planetRadius: 0.075,
  sparkles: 8,
  vignette: 0.45,
  grain: 0.03,
}

export function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-black">
      {/* Interactive WebGL2 Halftone Nebula Sky */}
      <HalftoneNebula
        height="auto"
        preset="ultraviolet"
        params={HERO_NEBULA_PARAMS}
        className="pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Centered Editorial Display Content */}
          <div className="flex flex-col items-center text-center gap-8 mx-auto max-w-4xl">
            {/* Amber Eyebrow */}
            <FadeUp delay={0.02} className="pointer-events-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB829]/30 bg-black/70 backdrop-blur-md px-4 py-1.5 text-[11.5px] font-mono tracking-[0.16em] text-[#FFB829] uppercase shadow-[0_0_20px_rgba(255,184,41,0.15)]">
                <Sparkles className="size-3 text-[#FFB829]" aria-hidden="true" />
                FROM DREAMS TO DEGREES. FROM DEGREES TO CAREERS.
              </span>
            </FadeUp>

            {/* Kinetic Text Reveal Headline (charWipeUpIn / rotateWipeUpIn) */}
            <h1 className="sr-only">Don&apos;t leave your future to guesswork.</h1>
            <SplitLineReveal
              immediate
              lines={[
                "Don't leave your future to",
                <span key="guesswork" className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-[#8052FF]">
                  guesswork.
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 sm:bottom-2 -z-10 h-2 sm:h-3 rounded-full bg-[#8052FF]/50 blur-[4px]"
                  />
                </span>,
              ]}
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[5.8rem] leading-[0.98] font-normal tracking-[-0.04em] text-white"
              lineClassName="leading-[1.05]"
              delay={0.06}
              stagger={0.12}
            />

            {/* Supporting Copy */}
            <FadeUp delay={0.25}>
              <p className="text-[17px] sm:text-[20px] leading-relaxed text-[#F3F4F6] font-normal max-w-2xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                The right career decision starts long before admission. We help students understand themselves,
                discover the right paths, choose the right course and college, and build toward a career.
              </p>
            </FadeUp>

            {/* Actions: Primary Violet Pill & Secondary Ghost Link */}
            <FadeUp delay={0.35} className="pointer-events-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href="#book"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#8052FF] px-8 py-3.5 text-[15px] font-medium text-white shadow-[0_0_35px_rgba(128,82,255,0.5)] transition-all duration-300 hover:bg-[#6e3df0] hover:shadow-[0_0_50px_rgba(128,82,255,0.8)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Book Free Career Counselling</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#simulator"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-black/75 backdrop-blur-md px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#00C2FF] hover:bg-[#00C2FF]/10 hover:text-white"
                >
                  <span>Simulate 4-Yr Trajectory</span>
                </a>
              </div>
            </FadeUp>

            {/* Trust Proof */}
            <FadeUp delay={0.45} className="pointer-events-auto">
              <div className="pt-6 border-t border-white/20 bg-black/60 backdrop-blur-md rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 w-full max-w-2xl shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-2">
                    {['student-1', 'student-2', 'student-3'].map((img) => (
                      <Image
                        key={img}
                        src={`/images/${img}.png`}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-full border-2 border-black object-cover"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col leading-tight text-left">
                    <div className="flex items-center gap-0.5 text-[#FFB829]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-[12.5px] font-mono text-[#F1F5F9] font-medium mt-0.5">
                      4.9/5 from 2,300+ families
                    </span>
                  </div>
                </div>

                <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-[#F1F5F9] font-normal">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-1.5">
                      <ShieldCheck className="size-4 text-[#15846E]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

          {/* Minimal Stat Counters */}
          <div className="mt-20 sm:mt-24 pointer-events-auto">
            <StatCounters />
          </div>
        </div>
      </HalftoneNebula>
    </section>
  )
}
