'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  TrendingUp,
  Award,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Sliders,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal, DrawLine } from '@/components/ui/motion-text'

interface TrajectoryData {
  id: string
  stream: string
  degree: string
  duration: string
  entranceExams: string[]
  medianCTC: string
  topTierCTC: string
  growthVelocity: string
  recommendedColleges: string[]
  milestones: string[]
  recruiterClusters: string[]
  counselorInsight: string
}

const TRAJECTORIES: Record<string, TrajectoryData> = {
  pcm_ai: {
    id: 'pcm_ai',
    stream: 'Class 11-12 PCM / Computer Science',
    degree: 'B.Tech / B.E. in Artificial Intelligence & Data Systems',
    duration: '4 Years',
    entranceExams: ['JEE Main', 'KCET / COMEDK', 'BITSAT', 'VITEEE'],
    medianCTC: '₹14.2 LPA',
    topTierCTC: '₹38.0+ LPA',
    growthVelocity: '+32% YoY Demand in Bangalore & Hyderabad tech corridors',
    recommendedColleges: ['RV College of Engineering', 'BMS College of Engineering', 'PES University', 'MSRIT'],
    milestones: [
      'Year 1: Data Structures, Algorithms & Linux Architecture',
      'Year 2: Applied Machine Learning & Cloud Containerization (AWS/GCP)',
      'Year 3: Production LLM pipeline project + Tier-1 summer internship',
      'Year 4: Pre-placement offer (PPO) conversion & corporate joining',
    ],
    recruiterClusters: ['Google', 'Microsoft', 'NVIDIA', 'Amazon AWS', 'Uber Tech'],
    counselorInsight:
      'Crucial insight: College tier determines campus recruiter access, but proof-of-work GitHub portfolios determine compensation tier. We guide you through both.',
  },
  pcb_medicine: {
    id: 'pcb_medicine',
    stream: 'Class 11-12 PCB (Medical / Biology)',
    degree: 'MBBS / BDS / Allied Clinical Super-Specialty',
    duration: '5.5 Years (Inc. Internship)',
    entranceExams: ['NEET UG', 'State Medical Counselling'],
    medianCTC: '₹12.0 LPA (Resident)',
    topTierCTC: '₹30.0+ LPA (Post-MD/MS)',
    growthVelocity: 'Recession-proof demand across hospitals & private practice',
    recommendedColleges: ['St. John’s Medical College', 'MS Ramaiah Medical College', 'KMC Manipal', 'Vydehi Institute'],
    milestones: [
      'Year 1-2: Pre-clinical anatomy, biochemistry, physiology',
      'Year 3-4: Para-clinical pathology, pharmacology, hospital wards',
      'Year 5: Full clinical rotations & patient diagnostic exposure',
      'Year 5.5: Rotary compulsory internship & NEXT/NEET-PG strategy',
    ],
    recruiterClusters: ['Apollo Hospitals', 'Manipal Health Enterprises', 'Fortis', 'Narayana Health'],
    counselorInsight:
      'Beware of predatory private college fee structures. We conduct honest fee transparency audits and verify patient footfall before you commit.',
  },
  commerce_finance: {
    id: 'commerce_finance',
    stream: 'Commerce / Economics / Mathematics',
    degree: 'BBA Finance / B.Com Honours (ACCA/CFA Integrated)',
    duration: '3 - 4 Years',
    entranceExams: ['CUET UG', 'IPMAT', 'SET / NPAT', 'Christ University Entrance'],
    medianCTC: '₹9.8 LPA',
    topTierCTC: '₹22.5 LPA',
    growthVelocity: 'High-growth fintech, venture capital, and valuation hubs',
    recommendedColleges: ['Christ (Deemed to be University)', 'St. Joseph’s University', 'Symbiosis Pune', 'NMIMS'],
    milestones: [
      'Year 1: Financial Accounting & Microeconomic modeling',
      'Year 2: Corporate valuation, Excel financial modeling, CFA Level 1',
      'Year 3: Boutique private equity / Big-4 investment banking internship',
      'Year 4: Placement drive with international consulting firms',
    ],
    recruiterClusters: ['Goldman Sachs', 'Morgan Stanley', 'Deloitte Advisory', 'JPMorgan Chase'],
    counselorInsight:
      'Degrees without accredited professional certifications (like CFA/ACCA) struggle for high starting packages. We architect dual-advantage pathways.',
  },
  arts_design: {
    id: 'arts_design',
    stream: 'Arts / Humanities / Creative Stream',
    degree: 'B.Des in Interaction / Product & UX Architecture',
    duration: '4 Years',
    entranceExams: ['UCEED', 'NID DAT', 'NIFT', 'Private Design Portfolios'],
    medianCTC: '₹11.5 LPA',
    topTierCTC: '₹26.0 LPA',
    growthVelocity: 'Accelerating demand for AI-product and spatial design talent',
    recommendedColleges: ['NID Ahmedabad/Bengaluru', 'Srishti Institute', 'MIT Institute of Design', 'UID'],
    milestones: [
      'Year 1: Design thinking, visual typography & materials exploration',
      'Year 2: Human-computer interaction (HCI), Figma systems, wireframing',
      'Year 3: SaaS enterprise app case study & design studio internship',
      'Year 4: Degree showcase & UX placement offers',
    ],
    recruiterClusters: ['Cred', 'Razorpay', 'Swiggy Design', 'Microsoft Studio', 'Adobe'],
    counselorInsight:
      'In design, marks are irrelevant—your portfolio is your passport. We help students assemble industry-ready design case studies from semester two.',
  },
}

export function CareerSimulator() {
  const [activeKey, setActiveKey] = useState<string>('pcm_ai')
  const current = TRAJECTORIES[activeKey]

  return (
    <section id="simulator" className="relative py-28 sm:py-36 bg-black border-b border-white/[0.08] overflow-hidden">
      {/* Background Luminous Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#8052FF]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 px-3.5 py-1 text-[11.5px] font-mono tracking-[0.2em] text-[#00C2FF] uppercase">
              <Sliders className="size-3 text-[#00C2FF]" />
              INTERACTIVE TRAJECTORY SIMULATOR
            </span>
          </FadeUp>

          <h2 className="sr-only">Simulate your 4-year trajectory before spending a single rupee.</h2>
          <SplitLineReveal
            lines={[
              'Simulate your trajectory.',
              <span key="before-fee" className="text-[#9A9A9A]">Before spending a single rupee on tuition.</span>,
            ]}
            className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
            lineClassName="leading-[1.05]"
            stagger={0.08}
          />

          <FadeUp delay={0.2}>
            <p className="mt-5 text-[17px] text-[#9A9A9A] leading-relaxed font-light">
              Select your academic background below to simulate expected degree paths, realistic median starting packages,
              entrance requirements, and 4-year skill milestones.
            </p>
          </FadeUp>
        </div>

        {/* Academic Stream Selector Tabs */}
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { key: 'pcm_ai', label: 'Engineering & AI', stream: 'PCM / CS', color: '#8052FF' },
              { key: 'pcb_medicine', label: 'Medicine & Clinical', stream: 'PCB / Biology', color: '#15846E' },
              { key: 'commerce_finance', label: 'High Finance & VC', stream: 'Commerce / Math', color: '#FFB829' },
              { key: 'arts_design', label: 'UX & Product Design', stream: 'Creative / Arts', color: '#00C2FF' },
            ].map((tab) => {
              const isActive = activeKey === tab.key
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={cn(
                    'relative p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 outline-none',
                    isActive
                      ? 'border-white/30 bg-white/[0.05] shadow-[0_0_24px_rgba(128,82,255,0.18)]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/15'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-simulator-tab"
                      className="absolute inset-0 rounded-2xl border-2 border-[#8052FF]/60 pointer-events-none"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="block text-[11px] font-mono tracking-wider text-[#9A9A9A] uppercase mb-1">
                    {tab.stream}
                  </span>
                  <span className={cn('block font-heading text-base sm:text-lg font-normal transition-colors', isActive ? 'text-white' : 'text-white/80')}>
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Dynamic Simulation Dossier */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-10 lg:p-12"
          >
            {/* Top Overview Grid */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] pb-8 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#00C2FF] uppercase">
                  SIMULATION PROFILE: {current.stream}
                </span>
                <h3 className="mt-2 font-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                  {current.degree}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#9A9A9A] font-light leading-relaxed">
                  {current.growthVelocity}
                </p>

                {/* Key Metrics Strip */}
                <div className="mt-6 flex flex-wrap gap-4 sm:gap-8">
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-[#9A9A9A]">
                      Median Fresher CTC
                    </span>
                    <span className="block font-heading text-2xl sm:text-3xl text-[#FFB829] font-normal mt-0.5">
                      {current.medianCTC}
                    </span>
                  </div>
                  <div className="h-10 w-px bg-white/[0.08] hidden sm:block" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-[#9A9A9A]">
                      Top 10% Bracket CTC
                    </span>
                    <span className="block font-heading text-2xl sm:text-3xl text-white font-normal mt-0.5">
                      {current.topTierCTC}
                    </span>
                  </div>
                  <div className="h-10 w-px bg-white/[0.08] hidden sm:block" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase text-[#9A9A9A]">
                      Degree Length
                    </span>
                    <span className="block font-heading text-2xl sm:text-3xl text-[#00C2FF] font-normal mt-0.5">
                      {current.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Entrance Exams & Colleges */}
              <div className="flex flex-col justify-between gap-6 rounded-2xl bg-black/60 border border-white/[0.06] p-6">
                <div>
                  <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase block mb-3">
                    Target Entrance Exams
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {current.entranceExams.map((exam) => (
                      <span
                        key={exam}
                        className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 text-xs font-mono text-white/90"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase block mb-2">
                    Top Verified Colleges for this Trajectory
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#BDBDBD]">
                    {current.recommendedColleges.map((col) => (
                      <li key={col} className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="size-3 text-[#15846E] shrink-0" />
                        <span className="truncate">{col}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom 4-Year Milestone Breakdown & Recruiter Cluster */}
            <div className="mt-8 grid gap-8 lg:grid-cols-2 pt-2">
              <div>
                <h4 className="text-xs font-mono tracking-widest text-[#9A9A9A] uppercase mb-4">
                  4-Year Architectural Milestone Blueprint
                </h4>
                <div className="space-y-3">
                  {current.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#BDBDBD] font-light">
                      <div className="size-5 rounded-full bg-[#8052FF]/10 border border-[#8052FF]/30 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono text-[#8052FF]">
                        0{idx + 1}
                      </div>
                      <span className="leading-relaxed">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#9A9A9A] uppercase mb-4">
                    Active Hiring Recruiter Clusters
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.recruiterClusters.map((company) => (
                      <span
                        key={company}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3.5 py-1.5 text-xs text-white/80 font-normal"
                      >
                        {company}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#FFB829]/20 bg-[#FFB829]/5 p-4 text-xs text-[#FFB829] leading-relaxed">
                    <span className="font-semibold block mb-1">Architect’s Direct Audit:</span>
                    {current.counselorInsight}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8052FF] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#6e3df0] shadow-[0_0_24px_rgba(128,82,255,0.4)]"
                  >
                    <span>Audit My Child’s Fit For This Trajectory</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="https://wa.me/917795354043?text=Hi%20Education%20Bridge%2C%20I%20tested%20the%20career%20simulator%20and%20want%20to%20discuss%20pathways."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.02] px-5 py-3 text-sm text-[#BDBDBD] hover:text-white hover:border-white/25 transition-colors"
                  >
                    <PhoneCall className="size-3.5 text-[#15846E]" />
                    <span>WhatsApp Career Helpline</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
