import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle2, AlertTriangle, ArrowRight, Phone, Sparkles, MapPin, Award } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

export const metadata: Metadata = {
  title: 'Top Colleges in Bangalore & India — Verified ROI & Placement Reality | Education Bridge',
  description:
    'Honest, campus-audited guide to top engineering, medical, and management colleges in Bangalore (RVCE, BMSCE, PES, MSRIT, St. John’s, Christ). True median CTC, hostel reviews, and admission quota tips.',
  keywords: [
    'Top engineering colleges in Bangalore',
    'RVCE vs BMSCE vs PES University',
    'Bangalore engineering college placements',
    'medical colleges Bangalore NEET cutoff',
    'honest college comparison Karnataka',
    'engineering admission guidance Bangalore',
  ],
}

const verifiedColleges = [
  {
    name: 'RV College of Engineering (RVCE)',
    location: 'Mysore Road, Bangalore',
    established: '1963',
    rating: 'Tier 1 Private (NAAC A+)',
    medianCTC: '₹14.5 LPA',
    highestCTC: '₹62.0 LPA',
    strengths: ['Premier tech recruiting hub', 'Extreme alumni density in top tech', 'Rigorous academic focus'],
    realityCheck:
      'High academic rigor and tight attendance policies. The campus experience is competitive, but placement access is unmatched across private institutions in South India.',
    counsellingRoutes: ['KCET (Top 800 rank for CSE)', 'COMEDK (Top 400 rank)', 'Institutional Quota'],
  },
  {
    name: 'BMS College of Engineering (BMSCE)',
    location: 'Basavanagudi, Bangalore',
    established: '1946',
    rating: 'Tier 1 Autonomous (NAAC A++)',
    medianCTC: '₹10.8 LPA',
    highestCTC: '₹50.0 LPA',
    strengths: ['Central Bangalore location', 'Rich 75+ year heritage', 'Balanced campus and sports life'],
    realityCheck:
      'Central Basavanagudi location makes commuting easy. Placements in CS/IS/EC are top tier, while core mechanical and civil placements mirror national market trends.',
    counsellingRoutes: ['KCET (Top 1,200 rank for CSE)', 'COMEDK (Top 1,000 rank)', 'Management Quota'],
  },
  {
    name: 'PES University (Ring Road Campus)',
    location: 'BSK 3rd Stage, Bangalore',
    established: '1988 (Deemed Univ 2013)',
    rating: 'Premier Deemed University',
    medianCTC: '₹12.2 LPA',
    highestCTC: '₹65.0 LPA',
    strengths: ['Modern industry curriculum', 'Massive hackathon culture', 'Direct Tier-1 US tech recruitment'],
    realityCheck:
      'Fast-paced trimester/semester evaluation with continuous grading. Best suited for students who thrive in dynamic, high-velocity environments.',
    counsellingRoutes: ['PESSAT Entrance Examination', 'KCET Quota (State merit)', 'Higher Fee Direct Seats'],
  },
  {
    name: 'Ramaiah Institute of Technology (MSRIT)',
    location: 'Mathikere, Bangalore',
    established: '1962',
    rating: 'Tier 1 Autonomous (NAAC A+)',
    medianCTC: '₹9.8 LPA',
    highestCTC: '₹50.0 LPA',
    strengths: ['Sprawling integrated campus', 'Excellent hospital/medical proximity', 'Strong corporate networking'],
    realityCheck:
      'Diverse student body from across India. Good mix of campus culture and academic rigor with strong placement records across tech and consulting.',
    counsellingRoutes: ['KCET (Top 1,600 rank for CSE)', 'COMEDK (Top 1,400 rank)', 'Institutional Admissions'],
  },
  {
    name: 'St. John’s Medical College',
    location: 'Koramangala, Bangalore',
    established: '1963',
    rating: 'National Top-15 Medical (NIRF)',
    medianCTC: '₹14.0 LPA (Clinical)',
    highestCTC: 'National Super-Specialty',
    strengths: ['1,350+ bed hospital', 'High clinical exposure & surgical volume', 'Noble service ethics'],
    realityCheck:
      'Mandatory rural bond service requirement. Exceptional patient footfall makes clinical doctors trained here highly respected globally.',
    counsellingRoutes: ['NEET UG (KEA Karnataka Counselling)', 'All-India Institutional Quota'],
  },
  {
    name: 'Christ (Deemed to be University)',
    location: 'Hosur Road / Central, Bangalore',
    established: '1969',
    rating: 'NAAC A+ Deemed University',
    medianCTC: '₹7.5 - ₹11.0 LPA',
    highestCTC: '₹22.0 LPA (Finance/Tech)',
    strengths: ['Strict professional grooming', 'Top national brand in BBA/Finance/Law', 'Vibrant global campus'],
    realityCheck:
      'Strict 85% attendance rule and formal dress code. Invaluable for students who want discipline, corporate presentation polish, and strong placement drives.',
    counsellingRoutes: ['Christ University Entrance Test (CUET)', 'Micro-presentation & Personal Interview'],
  },
]

export default function CollegesPage() {
  return (
    <div className="flex min-h-svh flex-col bg-black text-white selection:bg-[#8052FF] selection:text-white">
      <SiteHeader />

      <main className="flex-1 pt-32 sm:pt-40 pb-20">
        {/* Editorial Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FFB829]/30 bg-[#FFB829]/10 px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-[#FFB829] uppercase">
              <Sparkles className="size-3 text-[#FFB829]" />
              CAMPUS AUDITS & VERIFIED DATA
            </span>
          </FadeUp>

          <h1 className="sr-only">Top colleges in Bangalore and India. Honest ROI reports.</h1>
          <SplitLineReveal
            lines={[
              'The college reality guide.',
              <span key="no-pr" className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-[#8052FF]">
                What glossy brochures don’t show you.
              </span>,
            ]}
            className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white leading-[1.02]"
            lineClassName="leading-[1.05]"
            stagger={0.1}
          />

          <FadeUp delay={0.25}>
            <p className="mt-6 text-lg sm:text-xl text-[#F3F4F6] font-normal max-w-3xl mx-auto leading-relaxed">
              We inspect colleges with our own feet on the ground. Below is our campus-verified audit of premier
              institutions across Bangalore, including honest median salaries, real culture, and admission routes.
            </p>
          </FadeUp>
        </section>

        {/* College Directory Cards */}
        <section className="mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
          {verifiedColleges.map((col) => (
            <div
              key={col.name}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-8 sm:p-12 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00C2FF] bg-[#00C2FF]/10 px-3 py-1 rounded-full border border-[#00C2FF]/20">
                      <MapPin className="size-3" />
                      {col.location}
                    </span>
                    <span className="text-xs font-mono text-[#9A9A9A]">Est. {col.established}</span>
                    <span className="text-xs font-mono text-[#FFB829]">{col.rating}</span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4">
                    {col.name}
                  </h2>

                  {/* CTC Reality Strip */}
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono text-[#9A9A9A] uppercase block">True Median CTC</span>
                      <span className="font-heading text-2xl text-[#FFB829] font-normal">{col.medianCTC}</span>
                    </div>
                    <div className="h-8 w-px bg-white/[0.08]" />
                    <div>
                      <span className="text-xs font-mono text-[#9A9A9A] uppercase block">Peak Highest Package</span>
                      <span className="font-heading text-2xl text-white font-normal">{col.highestCTC}</span>
                    </div>
                  </div>

                  {/* Reality Check */}
                  <div className="rounded-2xl border border-white/[0.08] bg-black/60 p-5 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#FFB829] uppercase mb-2">
                      <AlertTriangle className="size-3.5" />
                      <span>The Unvarnished Reality Check</span>
                    </div>
                    <p className="text-sm text-[#F1F5F9] font-light leading-relaxed">{col.realityCheck}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Key Strengths */}
                  <div className="rounded-2xl border border-white/[0.06] bg-black/40 p-6">
                    <h3 className="text-xs font-mono tracking-widest text-[#00C2FF] uppercase mb-3">
                      Audited Campus Strengths
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#BDBDBD] font-light">
                      {col.strengths.map((str, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-[#15846E] shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Admission Routes */}
                  <div className="rounded-2xl border border-white/[0.06] bg-black/40 p-6">
                    <h3 className="text-xs font-mono tracking-widest text-[#8052FF] uppercase mb-3">
                      Admission & Counselling Pathways
                    </h3>
                    <div className="space-y-2">
                      {col.counsellingRoutes.map((route, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-xs font-mono text-white/90"
                        >
                          {route}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Custom College Audit CTA */}
        <section className="mt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[#FFB829]/30 bg-gradient-to-b from-[#FFB829]/10 to-transparent p-10 sm:p-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal">
              Evaluating a specific college or branch?
            </h2>
            <p className="mt-4 text-base text-[#F3F4F6] font-normal max-w-xl mx-auto leading-relaxed">
              Before paying any non-refundable deposit, speak with our counsellors. We will review the college’s
              real placement register, hostel condition, and total 4-year financial obligation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-[#8052FF] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_25px_rgba(128,82,255,0.5)] hover:bg-[#6e3df0] transition-colors"
              >
                Request College Audit Report
              </Link>
              <a
                href="tel:+917795354043"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm text-white hover:border-white/40 transition-colors"
              >
                <Phone className="size-4 text-[#8052FF]" />
                <span>Call 7795354043</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
