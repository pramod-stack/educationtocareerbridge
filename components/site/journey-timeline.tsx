'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  BedDouble,
  BookOpenCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Compass,
  FileCheck2,
  HelpCircle,
  Rocket,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const milestones = [
  {
    index: '01',
    icon: HelpCircle,
    title: 'Career confusion',
    stage: 'Where most students start',
    summary: 'Listening before diagnosing.',
    detail:
      'You have marks, opinions from relatives, and 40 browser tabs open. We begin with a calm listening session — no sales pitch, no college pushing, no pressure.',
    deliverables: [
      'Unbiased listening session',
      'Mapping current anxieties & expectations',
      'Initial stream feasibility review',
    ],
  },
  {
    index: '02',
    icon: ClipboardCheck,
    title: 'Career assessment',
    stage: 'Step 1 · Scientific Evaluation',
    summary: 'Aptitude, personality, and work style.',
    detail:
      'A structured 90-minute psychometric assessment maps your cognitive aptitude, natural interest patterns, personality traits, and work-style preferences against 100+ modern industry pathways.',
    deliverables: [
      'Comprehensive psychometric report',
      'Top 3 aligned career families',
      'Strengths vs blind spots analysis',
    ],
  },
  {
    index: '03',
    icon: Compass,
    title: 'Career counselling',
    stage: 'Step 2 · One-on-One Strategy',
    summary: 'The human conversation that decides.',
    detail:
      'A detailed one-on-one session with a senior career counsellor. We interpret the assessment report alongside your academics, family financial plan, geographical preferences, and long-term career ambition.',
    deliverables: [
      'Personalized Career Blueprint',
      'Parent-student alignment discussion',
      '10-year industry demand outlook',
    ],
  },
  {
    index: '04',
    icon: BookOpenCheck,
    title: 'Course selection',
    stage: 'Step 3 · Curriculum & Specialisation',
    summary: 'Degree specialisations with proven hiring.',
    detail:
      'We shortlist 2 to 3 high-demand courses with real hiring records for the 2030 economy — whether core engineering, AI/DS, medical sciences, corporate law, or high finance.',
    deliverables: [
      'Curriculum depth comparison',
      'Expected salary bands at entry & 5 years',
      'Eligibility & entrance requirements',
    ],
  },
  {
    index: '05',
    icon: Building2,
    title: 'College recommendation',
    stage: 'Step 4 · Campus Verification',
    summary: 'Campus-verified data over brochure promises.',
    detail:
      'We compare shortlisted colleges on audited placement sheets, faculty PhD ratios, laboratory infrastructure, hostel cleanliness, food quality, safety, total 4-year fees, and actual ROI.',
    deliverables: [
      'Side-by-side comparative matrix',
      'Verified placement sheets (last 3 batches)',
      'Campus visit feedback & alumni notes',
    ],
  },
  {
    index: '06',
    icon: FileCheck2,
    title: 'Admission support',
    stage: 'Step 5 · Application & Documentation',
    summary: 'Zero stress paperwork handled end-to-end.',
    detail:
      'From documentation verification, counselling rounds tracking, application forms, scholarship filings, to fee guidance and education loan assistance — we handle the bureaucracy for you.',
    deliverables: [
      'Complete document verification checklist',
      'Round-by-round seat allocation alerts',
      'Direct education loan file preparation',
    ],
  },
  {
    index: '07',
    icon: BedDouble,
    title: 'Accommodation & relocation',
    stage: 'Step 6 · Living & Safety',
    summary: 'Settling into a new city with confidence.',
    detail:
      'Hostel or verified PG selection, food menu checks, daily transport routes, city orientation, local emergency contacts, and connection to a peer student community so no student feels isolated.',
    deliverables: [
      'Campus hostel & PG quality audits',
      'Warden contacts & emergency network',
      'City orientation & peer support group',
    ],
  },
  {
    index: '08',
    icon: Award,
    title: 'College success',
    stage: 'Step 7 · Academic & Skill Mentorship',
    summary: 'The crucial undergraduate years.',
    detail:
      'Regular semester check-ins, skill development roadmaps, communication coaching, technical certifications, and LinkedIn optimization so your resume has substance long before final year.',
    deliverables: [
      'Semester-wise skill progression',
      'Professional communication training',
      'Portfolio & project review sessions',
    ],
  },
  {
    index: '09',
    icon: Rocket,
    title: 'Internship',
    stage: 'Step 8 · Proof of Work',
    summary: 'Industry exposure before graduation.',
    detail:
      'Internship assistance and industry mentorship to help you land practical work experience. When you graduate, your resume shows proven execution, not just course theory.',
    deliverables: [
      'Corporate network internship alerts',
      'Cold outreach & portfolio guidance',
      'Industry mentor pairing',
    ],
  },
  {
    index: '10',
    icon: Briefcase,
    title: 'Placement preparation',
    stage: 'Step 9 · Interview to Offer',
    summary: 'Cracking campus and off-campus drives.',
    detail:
      'Targeted resume tailoring, mock technical and HR interviews with rigorous feedback, aptitude test prep, off-campus drive alerts, and salary negotiation coaching.',
    deliverables: [
      'Rigorous mock interview rounds',
      'Salary band negotiation support',
      'Exclusive off-campus drive referrals',
    ],
  },
  {
    index: '11',
    icon: TrendingUp,
    title: 'Dream job & growth',
    stage: 'The finish line that matters',
    summary: 'Staying with you into the first job.',
    detail:
      'Your first offer letter is where traditional consultancies leave. We stay with you through your first ninety days on the job, probation review, and early promotion planning.',
    deliverables: [
      'First-90-days corporate transition coaching',
      'Offer letter review & onboarding guidance',
      'Lifelong alumni & mentorship network',
    ],
  },
]

export function JourneyTimeline() {
  const [active, setActive] = useState(2) // Default to Career Counselling (Step 2)
  const current = milestones[active]

  return (
    <section id="journey" className="relative bg-black py-28 sm:py-36 border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient radial violet lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(128,82,255,0.12),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
              One Partner · Every Stage
            </span>
          </FadeUp>

          <h2 className="sr-only">The journey doesn&apos;t end at admission. Neither do we.</h2>
          <SplitLineReveal
            lines={[
              'The journey doesn’t end',
              'at admission.',
              <span key="neither" className="text-[#9A9A9A]">Neither do we.</span>,
            ]}
            className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
            lineClassName="leading-[1.05]"
            stagger={0.08}
          />

          <FadeUp delay={0.25}>
            <p className="mt-5 text-[17px] text-[#9A9A9A] leading-relaxed font-light">
              Most consultancies disappear the day college fees are paid. Follow the interactive path below to see how
              Education Bridge architects your trajectory from Class 10 until your first job offer and beyond.
            </p>
          </FadeUp>
        </div>

        {/* Signature Interactive Flowing Path Track */}
        <div className="mt-16 pt-4 pb-2">
          {/* Progress bar info */}
          <div className="flex items-center justify-between text-xs font-mono text-[#E2E8F0] mb-6">
            <span className="text-[#00C2FF] font-medium">MILESTONE {current.index} OF 11</span>
            <span className="text-white font-medium bg-white/[0.06] border border-white/10 px-3.5 py-1 rounded-full shadow-sm">
              {Math.round(((active + 1) / milestones.length) * 100)}% JOURNEY COMPLETE
            </span>
          </div>

          {/* Smooth Scrollable Flowing Track */}
          <div className="overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul
              className="flex items-start min-w-max px-2 py-2"
              role="tablist"
              aria-label="Journey milestones"
            >
              {milestones.map((m, idx) => {
                const Icon = m.icon
                const isActive = idx === active
                const isCompleted = idx < active

                return (
                  <li key={m.index} className="relative shrink-0 w-28 sm:w-32 flex flex-col items-center">
                    {/* Seamless Connecting Line Segment to Next Node */}
                    {idx < milestones.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute top-[28px] left-1/2 w-full h-[2px] -translate-y-1/2 z-0 pointer-events-none"
                      >
                        {/* Base gray path */}
                        <div className="absolute inset-0 bg-white/[0.15]" />
                        {/* Active illuminated path */}
                        <div
                          className={cn(
                            'absolute inset-0 bg-gradient-to-r from-[#8052FF] via-[#a584ff] to-[#00C2FF] shadow-[0_0_12px_rgba(128,82,255,0.9)] transition-all duration-500',
                            idx < active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 origin-left'
                          )}
                        />
                      </div>
                    )}

                    {/* Node Button */}
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(idx)}
                      className="group relative z-10 flex flex-col items-center text-center outline-none focus-visible:ring-2 focus-visible:ring-[#8052FF] rounded-2xl w-full transition-transform duration-300 hover:-translate-y-1"
                    >
                      {/* Opaque black backing wrapper so the line never cuts inside the circle */}
                      <div className="p-1 bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.95)]">
                        <div
                          className={cn(
                            'size-12 rounded-full flex items-center justify-center border transition-all duration-300',
                            isActive
                              ? 'border-[#8052FF] bg-[#8052FF] text-white shadow-[0_0_28px_rgba(128,82,255,0.85)] scale-110'
                              : isCompleted
                                ? 'border-[#15846E] bg-[#0c241e] text-[#15846E] shadow-[0_0_12px_rgba(21,132,110,0.4)]'
                                : 'border-white/20 bg-black text-[#A1A1AA] group-hover:border-white/50 group-hover:text-white'
                          )}
                        >
                          <Icon className="size-5" />
                        </div>
                      </div>

                      {/* Title & Stage */}
                      <div className="flex flex-col items-center leading-tight mt-2 px-1">
                        <span className="text-[10.5px] font-mono text-[#A1A1AA] font-medium">
                          {m.index}
                        </span>
                        <span
                          className={cn(
                            'text-[12.5px] font-normal tracking-tight mt-0.5 line-clamp-2 transition-colors',
                            isActive ? 'text-white font-medium' : 'text-[#D4D4D8] group-hover:text-white'
                          )}
                        >
                          {m.title}
                        </span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Large Editorial Detail Panel for Selected Milestone with AnimatePresence */}
        <div className="mt-10 rounded-3xl border border-white/[0.1] bg-white/[0.02] p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Subtle violet corner glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[#8052FF]/10 blur-3xl"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-3 py-1 rounded-full border border-[#8052FF]/40 bg-[#8052FF]/10 text-[#a584ff]">
                    {current.stage}
                  </span>
                  <span className="text-xs font-mono text-[#9A9A9A]">
                    MILESTONE {current.index}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-3xl sm:text-4xl font-normal text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="mt-2 text-base font-normal text-[#FFB829]">
                  {current.summary}
                </p>

                <p className="mt-5 text-[16px] leading-relaxed text-[#F3F4F6] font-normal max-w-xl">
                  {current.detail}
                </p>

                {/* Navigation buttons */}
                <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/[0.1]">
                  <button
                    type="button"
                    onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                    disabled={active === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-normal text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-white/[0.08] transition-colors"
                  >
                    <ChevronLeft className="size-4" />
                    <span>Previous Stage</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActive((prev) => Math.min(milestones.length - 1, prev + 1))}
                    disabled={active === milestones.length - 1}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-normal text-white disabled:opacity-30 disabled:pointer-events-none hover:bg-white/[0.08] transition-colors"
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="rounded-2xl border border-white/[0.1] bg-black/75 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <Sparkles className="size-4 text-[#FFB829]" />
                  <h4 className="text-sm font-heading font-medium uppercase tracking-wider text-white">
                    What Education Bridge Delivers
                  </h4>
                </div>

                <ul className="space-y-4">
                  {current.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="size-4 text-[#00C2FF] shrink-0 mt-1" />
                      <span className="text-[14.5px] leading-relaxed text-[#E2E8F0] font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-5 border-t border-white/[0.08]">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 text-xs text-[#8052FF] hover:underline"
                  >
                    <span>Speak with our counsellor about this milestone</span>
                    <ChevronRight className="size-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
