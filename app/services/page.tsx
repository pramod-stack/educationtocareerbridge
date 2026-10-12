import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Phone, Sparkles, Cpu, Stethoscope, Briefcase, Palette, Shield } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

export const metadata: Metadata = {
  title: 'Our Services — Career Architecture & College Admissions | Education Bridge',
  description:
    'Comprehensive career counselling, engineering and medical admission guidance, honest college shortlisting, and 4-year placement coaching in Bangalore and across India.',
  keywords: [
    'career counselling services Bangalore',
    'engineering admission consultancy',
    'medical NEET admission guidance',
    'KCET counselling support',
    'COMEDK admission guidance',
    'college selection consultancy India',
  ],
}

const servicesList = [
  {
    num: '01',
    category: 'Assessment & Strategy',
    title: 'Psychometric Career Profiling',
    tagline: 'Scientific clarity on aptitude, cognitive strengths, and personality.',
    description:
      'Before shortlisting a single college, we conduct deep psychometric and cognitive testing. We evaluate numerical agility, spatial perception, creative inclination, and stress resilience to identify careers where your child will genuinely excel.',
    features: [
      'Comprehensive 42-parameter psychometric report',
      '1-on-1 parent and student trajectory debrief',
      'Mapping of aptitude against 2026-2030 job market demand',
      'Elimination of peer-pressure and herd-mentality choices',
    ],
  },
  {
    num: '02',
    category: 'Engineering & Computing',
    title: 'B.Tech & DeepTech Admission Architecture',
    tagline: 'From KCET, COMEDK, and JEE rounds to premier institutional seats.',
    description:
      'We guide engineering aspirants through every counselling round in Bangalore, Hyderabad, Pune, and Chennai. We analyze branches (AI/ML, CSE, Cybersecurity, ECE, Robotics) against recruiter visit records and institutional placement velocity.',
    features: [
      'Option entry list optimization for KCET & COMEDK',
      'Verification of Tier-1 vs Tier-2 engineering accreditation',
      'Honest branch choice: Core CSE vs Specialized AI/Data branches',
      'Institutional seat guidance with strict fee transparency',
    ],
  },
  {
    num: '03',
    category: 'Medical & Healthcare',
    title: 'Medical, Dental & Allied Clinical Strategy',
    tagline: 'NEET state quota counselling, deemed universities, and hospital audits.',
    description:
      'Navigating medical admissions in India requires extreme caution regarding predatory fee structures and hidden bond requirements. We verify clinical patient footfall, hospital bed strength, and post-degree residency pathways before you apply.',
    features: [
      'NEET state merit & all-India quota documentation',
      'Verified patient bed occupancy & clinical facility audits',
      'Allied Health Sciences (Perfusion, Radiology, Nursing) alternatives',
      'Fee schedule verification to protect family finances',
    ],
  },
  {
    num: '04',
    category: 'Management & Commerce',
    title: 'Executive, Venture & High Finance Trajectories',
    tagline: 'CUET, IPMAT, Christ, and international dual-degree admissions.',
    description:
      'High-paying corporate finance, consulting, and analytics careers require strategic undergraduate positioning. We assist students aiming for IPM programs (IIMs), Christ University, NMIMS, and global corporate finance pipelines.',
    features: [
      'IPMAT & CUET application strategy and timeline tracking',
      'Micro-presentation & interview coaching for top universities',
      'Dual certification integration (CFA / ACCA / Analytics)',
      'Corporate alumni mentorship in Bangalore and Mumbai',
    ],
  },
  {
    num: '05',
    category: 'College Years',
    title: '4-Year College to Placement Mentorship',
    tagline: 'We do not abandon your child after the admission receipt is signed.',
    description:
      'Degree admission is just day one. We coach students semester by semester through communication fluency, GitHub/design proof-of-work, internships, off-campus drives, and campus recruitment salary negotiations.',
    features: [
      'Yearly skills roadmap aligned with hiring requirements',
      'LinkedIn, GitHub, and professional portfolio audits',
      'Summer internship shortlisting and corporate referrals',
      'Mock coding and behavioral placement interview drills',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-svh flex-col bg-black text-white selection:bg-[#8052FF] selection:text-white">
      <SiteHeader />

      <main className="flex-1 pt-32 sm:pt-40 pb-20">
        {/* Editorial Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-[#00C2FF] uppercase">
              <Sparkles className="size-3 text-[#00C2FF]" />
              DISCIPLINED ADMISSION & CAREER PRACTICE
            </span>
          </FadeUp>

          <h1 className="sr-only">Our architectural services for students and families.</h1>
          <SplitLineReveal
            lines={[
              'Our architectural services.',
              <span key="method" className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-[#8052FF]">
                From first assessment to final placement.
              </span>,
            ]}
            className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white leading-[1.02]"
            lineClassName="leading-[1.05]"
            stagger={0.1}
          />

          <FadeUp delay={0.25}>
            <p className="mt-6 text-lg sm:text-xl text-[#F3F4F6] font-normal max-w-3xl mx-auto leading-relaxed">
              Every service we provide is designed around objective data, ethical transparency, and long-term
              career return on investment. Explore our core service capabilities below.
            </p>
          </FadeUp>
        </section>

        {/* Services Deep Dive */}
        <section className="mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          {servicesList.map((svc) => (
            <div
              key={svc.num}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-8 sm:p-12 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-heading text-3xl font-light text-[#8052FF]/60">{svc.num}</span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00C2FF]">{svc.category}</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-3">
                    {svc.title}
                  </h2>
                  <p className="text-base text-[#FFB829] font-normal mb-4">{svc.tagline}</p>
                  <p className="text-base text-[#BDBDBD] font-light leading-relaxed mb-6">{svc.description}</p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-black/60 p-6 sm:p-8">
                  <h3 className="text-xs font-mono tracking-widest text-white/90 uppercase mb-4">
                    Deliverables Included:
                  </h3>
                  <ul className="space-y-3 text-sm text-[#F1F5F9] font-normal">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-[#15846E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Free Consultation CTA */}
        <section className="mt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[#00C2FF]/30 bg-gradient-to-b from-[#00C2FF]/10 to-transparent p-10 sm:p-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal">
              Need personalized guidance for 2026 admissions?
            </h2>
            <p className="mt-4 text-base text-[#F3F4F6] font-normal max-w-xl mx-auto leading-relaxed">
              Our career architects are available for in-person appointments in Bangalore or high-resolution video
              consultations across India.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#book"
                className="rounded-full bg-[#8052FF] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_25px_rgba(128,82,255,0.5)] hover:bg-[#6e3df0] transition-colors"
              >
                Schedule Free 45-Min Session
              </Link>
              <a
                href="https://wa.me/917795354043"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm text-white hover:border-[#15846E] hover:text-[#15846E] transition-colors"
              >
                <span>WhatsApp Career Line</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
