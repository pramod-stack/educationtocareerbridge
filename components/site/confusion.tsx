'use client'

import {
  AlertTriangle,
  Banknote,
  Compass,
  Layers,
  MessageSquareWarning,
  Users,
  Briefcase,
} from 'lucide-react'
import { DrawLine, FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const problems = [
  {
    num: '01',
    icon: Layers,
    title: 'Too many courses',
    highlight: '2,000+ combinations',
    body: '2,000+ course combinations exist in India. Nobody explains which ones actually hire in 2026.',
  },
  {
    num: '02',
    icon: MessageSquareWarning,
    title: 'Wrong advice',
    highlight: 'Casual opinions',
    body: 'A cousin, a neighbour, and an outdated YouTube video end up deciding a 40-year career.',
  },
  {
    num: '03',
    icon: AlertTriangle,
    title: 'Fear of choosing wrong',
    highlight: 'Costly mistakes',
    body: 'One wrong seat costs two years of time, lakhs of rupees in tuition, and a lot of confidence.',
  },
  {
    num: '04',
    icon: Briefcase,
    title: 'Placement confusion',
    highlight: 'Unverified banners',
    body: '“100% placement” banners with zero verified batch data behind them. We ask for the audited sheets.',
  },
  {
    num: '05',
    icon: Banknote,
    title: 'Financial surprises',
    highlight: 'Hidden expenses',
    body: 'Tuition, hostel, mess, exam fees, loans, scholarships — the true 4-year cost is never on the brochure.',
  },
  {
    num: '06',
    icon: Compass,
    title: 'Lack of self-clarity',
    highlight: 'Marks vs Strengths',
    body: 'Students know their exam percentages. Very few know their cognitive strengths and work-style traits.',
  },
  {
    num: '07',
    icon: Users,
    title: 'Parental expectations',
    highlight: 'High pressure',
    body: 'Love and ambition get tangled with fear. We create a calm bridge where both sides understand each other.',
  },
]

export function Confusion() {
  return (
    <section className="bg-black py-28 sm:py-36 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-start">
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp delay={0}>
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
                The Reality
              </span>
            </FadeUp>

            <h2 className="sr-only">Choosing a career shouldn&apos;t feel like guesswork.</h2>
            <SplitLineReveal
              lines={[
                'Choosing a career',
                'shouldn’t feel like',
                'guesswork.',
              ]}
              className="mt-4 font-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] font-normal tracking-[-0.04em] text-white"
              lineClassName="leading-[1.05]"
              stagger={0.08}
            />

            <FadeUp delay={0.2}>
              <p className="mt-6 text-[17px] leading-relaxed text-[#9A9A9A] font-light">
                Choosing a career at 17 is the biggest financial and emotional decision most Indian families ever make.
                Yet it is almost always made in a hurry, driven by incomplete information and admission sales agents.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-8 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <p className="text-[15px] leading-relaxed text-white font-normal">
                  <span className="text-[#8052FF] font-medium">Education Bridge replaces confusion with clarity.</span>{' '}
                  We study your aptitude, skills, family finances, personality, academics and long-term aspirations
                  before we say a single college name.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Spacious Minimal Editorial Entries */}
          <div>
            <DrawLine />
            <div className="divide-y divide-white/[0.08]">
              {problems.map((problem, idx) => {
                return (
                  <FadeUp key={problem.num} delay={idx * 0.05} y={18}>
                    <div className="group py-8 sm:py-9 transition-colors duration-300 hover:bg-white/[0.015] px-2 sm:px-4">
                      <div className="flex items-start gap-5">
                        <span className="font-heading text-sm text-[#8052FF] font-mono mt-1">
                          {problem.num}
                        </span>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-heading text-xl sm:text-2xl font-normal text-white group-hover:text-[#8052FF] transition-colors">
                              {problem.title}
                            </h3>
                            <span className="text-[11px] font-mono tracking-wider text-[#9A9A9A] uppercase px-2.5 py-0.5 rounded-full border border-white/[0.08] bg-white/[0.02]">
                              {problem.highlight}
                            </span>
                          </div>

                          <p className="mt-3 text-[15px] sm:text-[15.5px] leading-relaxed text-[#9A9A9A] font-light">
                            {problem.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
            <DrawLine />
          </div>
        </div>
      </div>
    </section>
  )
}
