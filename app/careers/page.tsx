import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, TrendingUp, CheckCircle2, ArrowRight, Phone, Briefcase, GraduationCap } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

export const metadata: Metadata = {
  title: 'High-Demand Careers 2026–2030 — Trajectory Guides | Education Bridge',
  description:
    'Comprehensive career intelligence guide for students after Class 10 and 12 in India. Salary curves, entrance exam requirements, top recruiter clusters, and 4-year milestones.',
  keywords: [
    'career options after 12th science',
    'career options after 12th commerce',
    'high paying careers in India 2026',
    'AI and machine learning career scope',
    'B.Tech vs MBBS career comparison',
    'best degrees for high placements India',
  ],
}

const careerTracks = [
  {
    title: 'AI & Computational Intelligence',
    degree: 'B.Tech / B.E. Computer Science, AI & Data Systems',
    timeline: '4 Years',
    salaryMedian: '₹14.2 LPA',
    salaryTop: '₹38.0+ LPA',
    entrance: ['JEE Main', 'KCET', 'COMEDK', 'BITSAT'],
    keySkills: ['Data Structures & Algorithms', 'PyTorch / TensorFlow', 'Cloud Architecture (AWS/GCP)', 'LLM Fine-tuning'],
    employers: ['Google', 'Microsoft', 'NVIDIA', 'Amazon', 'Databricks'],
    verdict:
      'The single highest hiring velocity in India. College tier grants the interview slot; personal GitHub proof-of-work determines whether you enter the ₹20+ LPA bracket.',
  },
  {
    title: 'Clinical Medicine & Healthcare',
    degree: 'MBBS / BDS / Post-Graduate Clinical Super-Specialty',
    timeline: '5.5 Years + Residency',
    salaryMedian: '₹12.0 LPA (Resident)',
    salaryTop: '₹35.0+ LPA (Consultant)',
    entrance: ['NEET UG', 'State Medical Counselling'],
    keySkills: ['Clinical Diagnostics', 'Surgical Anatomy', 'Patient Management', 'Evidence-Based Medicine'],
    employers: ['Apollo Hospitals', 'Manipal Health', 'Fortis', 'Narayana Health'],
    verdict:
      'Recession-proof with lifelong respect and stability. Requires endurance and psychological resilience during preparation and residency years.',
  },
  {
    title: 'Investment Banking & High Finance',
    degree: 'BBA Finance / B.Com Honours + CFA / ACCA',
    timeline: '3 - 4 Years',
    salaryMedian: '₹10.5 LPA',
    salaryTop: '₹24.0+ LPA',
    entrance: ['CUET UG', 'IPMAT', 'Christ Entrance', 'SET Pune'],
    keySkills: ['Discounted Cash Flow (DCF)', 'Financial Statement Modeling', 'Equity Research', 'M&A Analytics'],
    employers: ['Goldman Sachs', 'Morgan Stanley', 'J.P. Morgan', 'Deloitte Advisory'],
    verdict:
      'High starting compensation for analytical minds. Success requires supplementing university classes with international credentials like CFA Level 1.',
  },
  {
    title: 'Product Architecture & UX Design',
    degree: 'B.Des in Interaction, Visual & Spatial Design',
    timeline: '4 Years',
    salaryMedian: '₹11.0 LPA',
    salaryTop: '₹26.0+ LPA',
    entrance: ['UCEED', 'NID DAT', 'NIFT', 'Private Portfolio Reviews'],
    keySkills: ['Figma Design Systems', 'User Research & Journey Mapping', 'Prototyping & Micro-interactions', 'Frontend Logic'],
    employers: ['Cred', 'Razorpay', 'Swiggy', 'Microsoft Design Studio', 'Atlassian'],
    verdict:
      'High growth fueled by India’s startup ecosystem. Marks do not matter; an exceptional design portfolio on Behance or personal domain is the only hiring criteria.',
  },
  {
    title: 'Semiconductor & VLSI Engineering',
    degree: 'B.Tech Electronics & Communication (ECE) / Microelectronics',
    timeline: '4 Years',
    salaryMedian: '₹13.5 LPA',
    salaryTop: '₹32.0+ LPA',
    entrance: ['JEE Main', 'KCET', 'COMEDK'],
    keySkills: ['Verilog / VHDL', 'Digital IC Design', 'FPGA Prototyping', 'Embedded C++ & RTOS'],
    employers: ['Intel', 'Qualcomm', 'Texas Instruments', 'AMD', 'Synopsys'],
    verdict:
      'Massive government subsidies and semiconductor fabrication plant investments in India have created acute shortages of specialized hardware design engineers.',
  },
  {
    title: 'Corporate Law & Tech Policy',
    degree: 'B.A. LL.B. / B.B.A. LL.B. (5-Year Integrated)',
    timeline: '5 Years',
    salaryMedian: '₹9.5 LPA',
    salaryTop: '₹22.0+ LPA',
    entrance: ['CLAT UG', 'AILET', 'SLAT Pune'],
    keySkills: ['Corporate Contract Drafting', 'Cross-Border Mergers & Acquisitions', 'Data Privacy Law (DPDP Act)', 'Arbitration'],
    employers: ['Shardul Amarchand Mangaldas', 'AZB & Partners', 'Trilegal', 'Khaitan & Co'],
    verdict:
      'Intellectual property and tech policy specializations offer exceptional starting salaries at national tier-1 corporate law firms.',
  },
]

export default function CareersPage() {
  return (
    <div className="flex min-h-svh flex-col bg-black text-white selection:bg-[#8052FF] selection:text-white">
      <SiteHeader />

      <main className="flex-1 pt-32 sm:pt-40 pb-20">
        {/* Editorial Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-[#00C2FF] uppercase">
              <Sparkles className="size-3 text-[#00C2FF]" />
              CAREER INTELLIGENCE DIRECTORY
            </span>
          </FadeUp>

          <h1 className="sr-only">High-demand career trajectories in India 2026-2030.</h1>
          <SplitLineReveal
            lines={[
              'Map the destination.',
              <span key="before-degree" className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-[#8052FF]">
                Before picking the degree.
              </span>,
            ]}
            className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white leading-[1.02]"
            lineClassName="leading-[1.05]"
            stagger={0.1}
          />

          <FadeUp delay={0.25}>
            <p className="mt-6 text-lg sm:text-xl text-[#F3F4F6] font-normal max-w-3xl mx-auto leading-relaxed">
              Choosing a degree without understanding its 2030 industry demand is the number one cause of graduate
              unemployment in India. Explore real package curves and employer requirements below.
            </p>
          </FadeUp>
        </section>

        {/* Career Tracks Grid */}
        <section className="mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
          {careerTracks.map((career) => (
            <div
              key={career.title}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.015] p-8 sm:p-12 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#00C2FF]">{career.timeline}</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-2">
                    {career.title}
                  </h2>
                  <p className="text-sm font-mono text-[#FFB829] mb-4">{career.degree}</p>

                  <p className="text-sm sm:text-base text-[#BDBDBD] font-light leading-relaxed mb-6">
                    {career.verdict}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono text-[#9A9A9A] uppercase block">Fresher Median CTC</span>
                      <span className="font-heading text-2xl text-[#FFB829] font-normal">{career.salaryMedian}</span>
                    </div>
                    <div className="h-8 w-px bg-white/[0.08]" />
                    <div>
                      <span className="text-xs font-mono text-[#9A9A9A] uppercase block">Top 10% Bracket</span>
                      <span className="font-heading text-2xl text-white font-normal">{career.salaryTop}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-xs font-mono text-[#9A9A9A] uppercase block mb-2">Target Entrance Exams</span>
                    <div className="flex flex-wrap gap-2">
                      {career.entrance.map((exam) => (
                        <span key={exam} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-white/90">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Core Required Skills */}
                  <div className="rounded-2xl border border-white/[0.06] bg-black/60 p-6">
                    <h3 className="text-xs font-mono tracking-widest text-[#00C2FF] uppercase mb-3">
                      High-Leverage Proof of Work
                    </h3>
                    <ul className="space-y-2 text-sm text-[#F1F5F9] font-normal">
                      {career.keySkills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-[#15846E] shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Recruiter Clusters */}
                  <div className="rounded-2xl border border-white/[0.06] bg-black/60 p-6">
                    <h3 className="text-xs font-mono tracking-widest text-[#8052FF] uppercase mb-3">
                      Active Hiring Recruiters
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {career.employers.map((emp) => (
                        <span key={emp} className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-white/80">
                          {emp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Simulator Callout */}
        <section className="mt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-[#8052FF]/30 bg-gradient-to-b from-[#8052FF]/15 to-transparent p-10 sm:p-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-normal">
              Test your profile in our Interactive Simulator
            </h2>
            <p className="mt-4 text-base text-[#F3F4F6] font-normal max-w-xl mx-auto leading-relaxed">
              Use our live trajectory calculator on the home page to test your PCM/PCB/Commerce scores and see
              realistic package projections.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#simulator"
                className="rounded-full bg-[#8052FF] px-8 py-3.5 text-sm font-medium text-white shadow-[0_0_25px_rgba(128,82,255,0.5)] hover:bg-[#6e3df0] transition-colors"
              >
                Launch Simulator Now
              </Link>
              <Link
                href="/#book"
                className="rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm text-white hover:border-white/40 transition-colors"
              >
                Book 1-on-1 Counselling
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
