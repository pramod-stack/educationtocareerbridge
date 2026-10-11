'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DrawLine, FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const chapters = [
  {
    num: '01',
    title: 'Understand you',
    tagline: 'Before advice, scientific assessment.',
    overview:
      'We study who you are before saying a single college name. Every student possesses distinct cognitive aptitudes, interest profiles, and working tendencies that determine career longevity.',
    points: [
      'Standardized psychometric assessment',
      'Cognitive aptitude & logical reasoning profiling',
      'Personal values and temperament mapping',
      'Academic reality check across past board results',
      'Frank family budget and ROI conversation',
      '10-year lifestyle and career goals alignment',
    ],
  },
  {
    num: '02',
    title: 'Discover opportunities',
    tagline: 'Pathways you never knew existed.',
    overview:
      'The Indian job market is shifting rapidly towards AI, specialization, and interdisciplinary roles. We unveil career fields that match your profile and have proven hiring demand.',
    points: [
      '100+ career trajectories demystified',
      'Emerging specialisations mapped for the 2030 market',
      'Realistic entry and 5-year salary curves',
      'Alternative lateral entry and diploma tracks',
      'Government examinations and global pathways',
      'Essential skill credentials and industry tooling',
    ],
  },
  {
    num: '03',
    title: 'Compare everything',
    tagline: 'No brochure claims. Only verified facts.',
    overview:
      'We never evaluate a college by its advertisement billboard. We examine real campus infrastructure, verified placement sheets, faculty stability, and actual living conditions.',
    points: [
      'Batch-wise placement % and median salary packages',
      'Laboratory infrastructure and research centers',
      'Campus safety protocols and distance calculations',
      'Hostel hygiene and verified student mess reviews',
      'Accreditation standing (NAAC / NBA / NIRF reality)',
      'Total 4-year tuition versus post-degree ROI',
    ],
  },
  {
    num: '04',
    title: 'Admission support',
    tagline: 'Paperwork handled, not delegated to you.',
    overview:
      'College admissions in India involve confusing counselling rounds, quotas, eligibility verification, and strict deadlines. We shoulder the operational burden for you.',
    points: [
      'Centralized and state quota seat monitoring',
      'Application filing, documentation, and compliance',
      'Institutional and government scholarship filings',
      'Education loan documentation and bank liaison',
      'Seat acceptance and fee schedule verification',
      'Local accommodation booking and hostel allotment',
    ],
  },
  {
    num: '05',
    title: 'College success',
    tagline: 'The years that decide your offer letter.',
    overview:
      'Getting admission is only day one. We stay alongside you through college semesters, helping you build skills, maintain focus, and build proof of work before recruiters arrive.',
    points: [
      'Semester-by-semester academic milestone planning',
      'Professional communication and English fluency training',
      'Modern project and portfolio building sessions',
      'LinkedIn profile and GitHub / design portfolio audit',
      'Summer internship applications and tracking',
      'Direct pairing with industry working professionals',
    ],
  },
  {
    num: '06',
    title: 'Placement & beyond',
    tagline: 'From undergraduate to high-growth professional.',
    overview:
      'We coach you through technical assessments, mock behavioral interviews, campus recruitment drives, and offer letter salary negotiations until you start your career.',
    points: [
      'Targeted mock interviews with detailed feedback',
      'Referrals through our corporate hiring network',
      'Off-campus recruitment drive notifications',
      'Offer letter evaluation and salary negotiations',
      'First-90-days corporate transition coaching',
      'Lifelong alumni community and career upgrade advisory',
    ],
  },
]

export function Process() {
  const [activeTab, setActiveTab] = useState(0)
  const current = chapters[activeTab]

  return (
    <section id="how-it-works" className="bg-black py-28 sm:py-36 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
              The Methodology
            </span>
          </FadeUp>

          <h2 className="sr-only">A six-stage method. Not a casual phone call.</h2>
          <SplitLineReveal
            lines={[
              'A six-stage method.',
              <span key="not-call" className="text-[#9A9A9A]">Not a casual phone call.</span>,
            ]}
            className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
            lineClassName="leading-[1.05]"
            stagger={0.08}
          />

          <FadeUp delay={0.25}>
            <p className="mt-5 text-[17px] text-[#9A9A9A] leading-relaxed font-light">
              Every student receives the same disciplined, architected methodology.
              The difference is the unique personal trajectory that emerges from it.
            </p>
          </FadeUp>
        </div>

        {/* Chapter Selection Strip */}
        <div className="mt-16">
          <DrawLine />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {chapters.map((chapter, idx) => {
              const isActive = idx === activeTab
              return (
                <button
                  key={chapter.num}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    'group py-6 px-4 text-left transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#8052FF]',
                    isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.015]'
                  )}
                >
                  <span
                    className={cn(
                      'font-heading text-3xl font-light tracking-tight transition-colors',
                      isActive ? 'text-[#8052FF]' : 'text-white/30 group-hover:text-white/60'
                    )}
                  >
                    {chapter.num}
                  </span>
                  <h3
                    className={cn(
                      'mt-2 text-sm font-normal tracking-tight line-clamp-1 transition-colors',
                      isActive ? 'text-white' : 'text-[#9A9A9A] group-hover:text-white'
                    )}
                  >
                    {chapter.title}
                  </h3>
                </button>
              )
            })}
          </div>
          <DrawLine />
        </div>

        {/* Selected Chapter Editorial Layout with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="mt-12 py-10 sm:py-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start"
          >
            {/* Chapter Display */}
            <div>
              <span className="font-heading text-7xl sm:text-8xl lg:text-9xl font-light text-[#8052FF]/30 select-none block leading-none">
                {current.num}
              </span>
              <h3 className="mt-4 font-heading text-3xl sm:text-4xl font-normal text-white">
                {current.title}
              </h3>
              <p className="mt-2 text-base text-[#FFB829] font-normal">
                {current.tagline}
              </p>
              <p className="mt-6 text-[16px] leading-relaxed text-[#9A9A9A] font-light max-w-md">
                {current.overview}
              </p>
            </div>

            {/* Chapter Specific Points */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-8 sm:p-10">
              <h4 className="text-xs font-mono tracking-[0.2em] text-[#9A9A9A] uppercase mb-6">
                Core Actions in Phase {current.num}
              </h4>

              <div className="grid gap-4 sm:grid-cols-2">
                {current.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-[#8052FF]/10 border border-[#8052FF]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3 text-[#8052FF]" />
                    </div>
                    <span className="text-[14.5px] leading-relaxed text-[#BDBDBD] font-light">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
