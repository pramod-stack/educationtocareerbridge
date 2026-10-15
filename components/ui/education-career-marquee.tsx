'use client'

import React from 'react'
import { Marquee } from '@/components/ui/marquee'
import { Compass, GraduationCap, ShieldCheck, TrendingUp, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'
import Timeline from '@/components/ui/timeline'

export type MarqueeItem = {
  text: string
  emphasis?: 'default' | 'violet' | 'amber'
}

const row1: MarqueeItem[] = [
  { text: 'Which career is right for me?', emphasis: 'violet' },
  { text: 'What should I choose after 10th?', emphasis: 'default' },
  { text: 'What should I choose after PUC?', emphasis: 'default' },
  { text: 'Which course matches my strengths?', emphasis: 'amber' },
  { text: 'Which college is actually worth the fees?', emphasis: 'default' },
  { text: 'How do I compare colleges honestly?', emphasis: 'default' },
  { text: 'What are the real placement opportunities?', emphasis: 'violet' },
  { text: 'Can I afford this college?', emphasis: 'default' },
  { text: 'Are scholarships available for my marks?', emphasis: 'amber' },
  { text: 'How to avoid losing a year in counselling?', emphasis: 'default' },
]

const row2: MarqueeItem[] = [
  { text: 'What career fits my personality?', emphasis: 'default' },
  { text: 'What are my options after commerce?', emphasis: 'default' },
  { text: 'What can I do after science?', emphasis: 'violet' },
  { text: 'Should I choose core engineering or IT?', emphasis: 'default' },
  { text: 'How can I build a career in AI?', emphasis: 'amber' },
  { text: 'Is cybersecurity right for me?', emphasis: 'default' },
  { text: 'What should parents consider before admission?', emphasis: 'violet' },
  { text: 'How do I avoid choosing the wrong course?', emphasis: 'default' },
  { text: 'Is nursing and allied health high demand abroad?', emphasis: 'default' },
  { text: 'Can I switch from diploma to engineering degree?', emphasis: 'amber' },
]

const row3: MarqueeItem[] = [
  { text: 'What happens after graduation?', emphasis: 'default' },
  { text: 'How can I prepare for placements from 1st year?', emphasis: 'violet' },
  { text: 'Does college brand guarantee a job?', emphasis: 'default' },
  { text: 'Is lateral entry recognized everywhere?', emphasis: 'amber' },
  { text: 'Can I change my stream after 1st semester?', emphasis: 'default' },
  { text: 'How to get education loans without collateral?', emphasis: 'default' },
  { text: 'What are the highest growth careers in 2030?', emphasis: 'violet' },
  { text: 'Should I repeat NEET or choose allied medical?', emphasis: 'default' },
  { text: 'How to know if a college is campus-verified?', emphasis: 'amber' },
  { text: 'What is the real median salary?', emphasis: 'default' },
]

const features = [
  {
    num: '01',
    title: 'Find Your Direction',
    description:
      'Understand your interests, strengths, academics, personality and aspirations before choosing a path.',
    icon: Compass,
    action: 'Discover profile',
    link: '#journey',
  },
  {
    num: '02',
    title: 'Choose With Evidence',
    description:
      'Compare courses and colleges using verified on-ground data rather than glossy brochure promises.',
    icon: GraduationCap,
    action: 'Compare data',
    link: '#compare',
  },
  {
    num: '03',
    title: 'Navigate Admission',
    description:
      'Structured end-to-end support across college applications, documentation, verification and scholarships.',
    icon: ShieldCheck,
    action: 'View support',
    link: '#how-it-works',
  },
  {
    num: '04',
    title: 'Go Beyond Admission',
    description:
      'Build industry-ready skills, pursue internships, prepare for placements and step into a high-growth career.',
    icon: TrendingUp,
    action: 'Explore track',
    link: '#careers',
  },
]

function QuestionPill({ item }: { item: MarqueeItem }) {
  const isViolet = item.emphasis === 'violet'
  const isAmber = item.emphasis === 'amber'

  return (
    <div
      className={cn(
        'inline-flex items-center px-4 py-2.5 rounded-full text-[13.5px] font-normal transition-all duration-300 select-none whitespace-nowrap cursor-default',
        isViolet
          ? 'border border-[#8052FF]/60 bg-[#8052FF]/10 text-[#8052FF] dark:text-[#a584ff] shadow-[0_0_16px_rgba(128,82,255,0.25)]'
          : isAmber
            ? 'border border-[#FFB829]/60 bg-[#FFB829]/10 text-[#d97706] dark:text-[#FFB829] shadow-[0_0_16px_rgba(255,184,41,0.2)]'
            : 'border border-border bg-card text-foreground/80 hover:border-foreground/30 hover:text-foreground'
      )}
    >
      <span className="mr-2 text-xs opacity-40">?</span>
      {item.text}
    </div>
  )
}

export function EducationCareerMarquee() {
  return (
    <>
      <section id="services" className="relative bg-background text-foreground py-24 sm:py-32 overflow-hidden border-t border-b border-border">
      {/* Editorial Headline */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#d97706] dark:text-[#FFB829] uppercase">
              The Questions That Shape A Career
            </span>
          </FadeUp>

          <h2 className="sr-only">Every student has questions. Few get clear answers.</h2>
          <SplitLineReveal
            lines={[
              'Every student has questions.',
              <span key="answers" className="text-muted-foreground">Few get clear answers.</span>,
            ]}
            className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-foreground leading-[1.05]"
            lineClassName="leading-[1.05]"
            stagger={0.08}
          />

          <FadeUp delay={0.25}>
            <p className="mt-5 text-[17px] sm:text-[18px] text-muted-foreground leading-relaxed font-light max-w-2xl">
              Career decisions become easier when the right questions are asked first.
              We turn uncertainty into an architectural roadmap.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* 3-Row Continuous Marquee with fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks blending into background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-48 bg-gradient-to-r from-background via-background/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-48 bg-gradient-to-l from-background via-background/80 to-transparent"
        />

        <div className="flex flex-col gap-3.5">
          {/* Row 1: Left to right (42s) - reverse */}
          <Marquee
            reverse
            repeat={4}
            className="[--duration:42s] [--gap:0.75rem] py-1"
          >
            {row1.map((item, idx) => (
              <QuestionPill key={`r1-${idx}`} item={item} />
            ))}
          </Marquee>

          {/* Row 2: Right to left (50s) */}
          <Marquee
            repeat={4}
            className="[--duration:50s] [--gap:0.75rem] py-1"
          >
            {row2.map((item, idx) => (
              <QuestionPill key={`r2-${idx}`} item={item} />
            ))}
          </Marquee>

          {/* Row 3: Left to right (46s) - reverse */}
          <Marquee
            reverse
            repeat={4}
            className="[--duration:46s] [--gap:0.75rem] py-1"
          >
            {row3.map((item, idx) => (
              <QuestionPill key={`r3-${idx}`} item={item} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>

    {/* One Partner Every Stage — Horizontal Pinned Journey Timeline */}
    <Timeline
      title="One Partner. Every Stage."
      periodLabel="Class 10 — First Job Placement"
      imageUrl="/images/parents-counselling.png"
      imageAlt="Education Bridge counsellor mentoring student and parents"
    />

    {/* Feature Grid following 21st.dev / Refero philosophy (no bulky cards, pristine spacing) */}
    <section className="bg-background py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border-y border-border">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.num}
                className="group flex flex-col justify-between py-10 sm:py-8 sm:px-6 lg:px-8 transition-colors duration-300 hover:bg-muted/30"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm text-muted-foreground tracking-wider">
                      {feature.num}
                    </span>
                    <Icon className="size-5 text-[#8052FF] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-6 font-heading text-[20px] font-normal tracking-tight text-foreground group-hover:text-[#8052FF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground font-light">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-border">
                  <a
                    href={feature.link}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-[#8052FF] transition-colors"
                  >
                    <span>{feature.action}</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  </>
  )
}
