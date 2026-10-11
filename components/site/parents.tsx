'use client'

import Image from 'next/image'
import {
  BadgeCheck,
  CalendarClock,
  Landmark,
  PhoneCall,
  ShieldCheck,
  Wallet,
  ArrowRight,
} from 'lucide-react'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const assurances = [
  {
    icon: BadgeCheck,
    title: 'College verification',
    body: 'We visit campuses, audit placement sheets, and verify university approvals before recommending a single seat.',
  },
  {
    icon: Wallet,
    title: 'Transparent financial planning',
    body: 'Total 4-year tuition, hostel fees, hidden expenses, scholarship filings, and realistic EMI planning — clearly documented.',
  },
  {
    icon: CalendarClock,
    title: 'Regular semester progress reports',
    body: 'We keep parents updated on attendance patterns, academic credits, skill acquisitions, and internship milestones.',
  },
  {
    icon: ShieldCheck,
    title: 'Hostel & student safety assurance',
    body: 'Hostel audits, mess food hygiene, warden contacts, local city orientation, and emergency response channels.',
  },
  {
    icon: Landmark,
    title: 'Loan & scholarship assistance',
    body: 'Direct documentation support for bank education loans and government or institutional merit scholarships.',
  },
  {
    icon: PhoneCall,
    title: 'A dedicated counsellor, not a call center',
    body: 'One named senior counsellor assigned to your family who remains reachable on WhatsApp and phone for the entire journey.',
  },
]

export function Parents() {
  return (
    <section id="parents" className="bg-black py-28 sm:py-36 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left Column: Dignified Image with Zero-Commission Trust Callout */}
          <FadeUp delay={0.1} duration={0.9} className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/[0.1] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/parents-counselling.png"
                alt="Parents and student in a career counselling session with an Education Bridge counsellor"
                width={1024}
                height={768}
                className="h-auto w-full object-cover filter contrast-[1.02] brightness-95"
              />
            </div>

            {/* Zero Commission Callout Badge */}
            <div className="mt-6 rounded-2xl border border-white/[0.12] bg-white/[0.03] backdrop-blur-md p-6 sm:absolute sm:-right-6 sm:-bottom-8 sm:mt-0 sm:max-w-[280px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl font-light text-[#FFB829]">
                  0
                </span>
                <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase">
                  Commissions
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-[#BDBDBD] font-light">
                Zero commissions from colleges influence our recommendation. Our advice is paid for by families, not by admission departments.
              </p>
            </div>
          </FadeUp>

          {/* Right Column: Serene Editorial Narrative & Assurance Points */}
          <div className="flex flex-col gap-8">
            <div>
              <FadeUp delay={0}>
                <span className="text-[12px] font-medium tracking-[0.2em] text-[#FFB829] uppercase">
                  Family Stewardship
                </span>
              </FadeUp>

              <h2 className="sr-only">For parents, clarity matters as much as ambition.</h2>
              <SplitLineReveal
                lines={[
                  'For parents, clarity',
                  'matters as much',
                  'as ambition.',
                ]}
                className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
                lineClassName="leading-[1.05]"
                stagger={0.08}
              />

              <FadeUp delay={0.25}>
                <p className="mt-5 text-[17px] leading-relaxed text-[#9A9A9A] font-light">
                  You want three fundamental things: a safe environment, honest placement figures, and an education you can afford without financial ruin.
                  We treat those as non-negotiables, and show you verified data behind every recommendation.
                </p>
              </FadeUp>
            </div>

            {/* 6 Assurance Pillars in quiet hairlines */}
            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              {assurances.map((item, idx) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={0.1 + idx * 0.05} y={15}>
                    <div className="flex flex-col gap-2 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
                      <div className="flex items-center gap-2.5">
                        <Icon className="size-4 text-[#8052FF]" />
                        <h3 className="font-heading text-[15px] font-normal text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13.5px] leading-relaxed text-[#9A9A9A] font-light">
                        {item.body}
                      </p>
                    </div>
                  </FadeUp>
                )
              })}
            </div>

            {/* Actions */}
            <FadeUp delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-white/[0.08]">
                <a
                  href="#book"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8052FF] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#6e3df0] shadow-[0_0_25px_rgba(128,82,255,0.4)] transition-all"
                >
                  <span>Book a Parent Consultation</span>
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm text-[#9A9A9A] hover:text-white transition-colors"
                >
                  Read Parent FAQs
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
