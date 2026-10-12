import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Sparkles, Building, Award, Users } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'
import { BrandLogo } from '@/components/site/brand-logo'

export const metadata: Metadata = {
  title: 'About Education Bridge — Career Architects, Not Admission Agents',
  description:
    'Learn why Education Bridge is India’s most trusted career guidance architecture firm. Founded in Bangalore to eliminate guesswork, admission broker traps, and student anxiety.',
  keywords: [
    'About Education Bridge',
    'career guidance Bangalore',
    'career architects India',
    'ethical college admission consultancy',
    'honest college guidance',
    'psychometric career testing Bangalore',
  ],
}

export default function AboutPage() {
  return (
    <div className="flex min-h-svh flex-col bg-black text-white selection:bg-[#8052FF] selection:text-white">
      <SiteHeader />

      <main className="flex-1 pt-32 sm:pt-40 pb-20">
        {/* Editorial Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB829]/30 bg-[#FFB829]/10 px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-[#FFB829] uppercase">
              <Sparkles className="size-3 text-[#FFB829]" />
              THE EDUCATION BRIDGE MANIFESTO
            </span>
          </FadeUp>

          <h1 className="sr-only">Career architects, not admission agents.</h1>
          <SplitLineReveal
            lines={[
              'Career architects.',
              <span key="not-agents" className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-[#8052FF]">
                Not admission agents.
              </span>,
            ]}
            className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white leading-[1.02]"
            lineClassName="leading-[1.05]"
            stagger={0.1}
          />

          <FadeUp delay={0.25}>
            <p className="mt-6 text-lg sm:text-xl text-[#F3F4F6] font-normal max-w-3xl mx-auto leading-relaxed">
              We started Education Bridge in Bangalore with one unshakeable conviction: a teenager’s future is too
              sacred to be brokered by admission sales commissions. We build rigorous, long-term career trajectories.
            </p>
          </FadeUp>
        </section>

        {/* The Fundamental Difference */}
        <section className="mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.1] bg-white/[0.02] p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono tracking-widest text-[#00C2FF] uppercase">
                THE INDUSTRY REALITY
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-normal text-white">
                How Career Architecture differs from traditional admission agents
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
              {/* Traditional Agent Trap */}
              <div className="pt-6 md:pt-0 md:pr-8">
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 block mb-4">
                  ✕ The Standard Admission Agent
                </span>
                <ul className="space-y-4 text-sm text-[#BDBDBD] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-mono mt-0.5">•</span>
                    <span>Recommends colleges that pay them the highest per-seat kickback, regardless of your child’s fit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-mono mt-0.5">•</span>
                    <span>Disappears the second the college fee receipt is signed and their commission is wired.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-mono mt-0.5">•</span>
                    <span>Quotes inflated management quota fees while hiding legitimate state merit or scholarship rounds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-mono mt-0.5">•</span>
                    <span>Zero understanding of 2026 AI industry demands, portfolio building, or recruiter requirements.</span>
                  </li>
                </ul>
              </div>

              {/* Education Bridge Standard */}
              <div className="pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00C2FF] block mb-4">
                  ✓ The Education Bridge Standard
                </span>
                <ul className="space-y-4 text-sm text-[#F1F5F9] font-normal">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#15846E] shrink-0 mt-0.5" />
                    <span>Scientific psychometric analysis of aptitude, cognitive velocity, and stress tolerance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#15846E] shrink-0 mt-0.5" />
                    <span>Honest campus audits: we verify hostel hygiene, faculty attrition, and true median packages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#15846E] shrink-0 mt-0.5" />
                    <span>We stay beside your child for all 4 years of college until their corporate offer letter is signed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#15846E] shrink-0 mt-0.5" />
                    <span>Complete fee transparency guarantee: zero hidden broker surcharges, ever.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Architecture */}
        <section className="mt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest text-[#8052FF] uppercase">
              OUR FOUNDATION
            </span>
            <h2 className="mt-2 font-heading text-3xl sm:text-5xl font-normal text-white">
              The four pillars behind every student trajectory
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: 'Data-Driven Fit',
                desc: 'We match student aptitude with market demand 4 years ahead, avoiding obsolete degree specializations.',
              },
              {
                icon: Building,
                title: 'Campus Reality Audits',
                desc: 'We inspect colleges in person—auditing lab equipment, faculty qualifications, and recruiter tie-ups.',
              },
              {
                icon: Award,
                title: 'Scholarship Unlocks',
                desc: 'We identify institutional, merit, and sports fee waivers that save families lakhs in tuition costs.',
              },
              {
                icon: Users,
                title: 'Placement Cohort',
                desc: 'Active senior mentor pairing, resume workshops, and direct mock assessments through campus drives.',
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="size-10 rounded-xl bg-[#8052FF]/10 border border-[#8052FF]/30 flex items-center justify-center mb-4">
                  <pillar.icon className="size-5 text-[#8052FF]" />
                </div>
                <h3 className="font-heading text-lg font-normal text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#BDBDBD] font-light leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mt-28 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[#8052FF]/30 bg-gradient-to-b from-[#8052FF]/15 to-transparent p-10 sm:p-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal">
              Speak directly with an Education Architect
            </h2>
            <p className="mt-4 text-base text-[#F3F4F6] font-normal max-w-xl mx-auto leading-relaxed">
              Book a no-pressure, 45-minute consultation for you and your child. We review marks, psychometric fit,
              and realistic college options.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-[#8052FF] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_25px_rgba(128,82,255,0.5)] hover:bg-[#6e3df0] transition-colors"
              >
                Book Free Counselling Session
              </Link>
              <a
                href="tel:+917795354043"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm text-white hover:border-white/40 transition-colors"
              >
                <Phone className="size-4 text-[#8052FF]" />
                <span>Call Helpline: 7795354043</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
