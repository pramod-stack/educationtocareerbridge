'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Building2,
  Cpu,
  HeartPulse,
  Landmark,
  Leaf,
  LineChart,
  type LucideIcon,
  Palette,
  Plane,
  Scale,
  Shield,
  Shirt,
  Sparkles,
  Stethoscope,
  UtensilsCrossed,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { DrawLine, FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

type Career = {
  id: string
  icon: LucideIcon
  name: string
  entry: string
  demand: 'Very high' | 'High' | 'Steady'
  roles: string
  routes: string
  skills: string
}

const careers: Career[] = [
  {
    id: 'ai',
    icon: Brain,
    name: 'Artificial Intelligence',
    entry: '₹6 – 14 LPA',
    demand: 'Very high',
    roles: 'ML Engineer, AI Product Developer, MLOps, Computer Vision Researcher',
    routes: 'B.Tech CSE with AI/ML, Data Science degrees + production portfolio projects',
    skills: 'Python, PyTorch, Transformers, Model Optimization, Vector Databases',
  },
  {
    id: 'engg',
    icon: Cpu,
    name: 'Engineering & Computing',
    entry: '₹4 – 9 LPA',
    demand: 'Very high',
    roles: 'Software Architect, Embedded Systems, VLSI Design, Cloud Infrastructure',
    routes: 'B.E. / B.Tech after PUC (PCM) or lateral entry to 2nd year after polytechnic diploma',
    skills: 'Data Structures, System Design, C++, Linux, Cloud Architecture',
  },
  {
    id: 'med',
    icon: Stethoscope,
    name: 'Medicine & Clinical',
    entry: '₹6 – 12 LPA',
    demand: 'Very high',
    roles: 'MBBS, BDS, BAMS, Super-specialisation, Healthcare Administration',
    routes: 'NEET-UG qualifying pathway with strategic all-India & state quota counselling',
    skills: 'Clinical Diagnosis, Patient Care, Medical Research, Pharmacology',
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'Nursing & Allied Health',
    entry: '₹3 – 7 LPA',
    demand: 'Very high',
    roles: 'Critical Care Nursing, Physiotherapy, Medical Imaging, Lab Technology',
    routes: 'B.Sc Allied Health Sciences / GNM routes, high global demand in UK, Gulf & Germany',
    skills: 'Diagnostic Imaging, Patient Rehabilitation, Pathology, Hospital Protocols',
  },
  {
    id: 'cyber',
    icon: Shield,
    name: 'Cybersecurity',
    entry: '₹5 – 12 LPA',
    demand: 'Very high',
    routes: 'CSE-Cybersecurity specialization, CEH / CompTIA certs, lab-heavy colleges',
    roles: 'SOC Analyst, Penetration Tester, Incident Responder, Cloud Security Architect',
    skills: 'Network Protocols, Ethical Hacking, SIEM, Threat Modeling, Cryptography',
  },
  {
    id: 'ds',
    icon: LineChart,
    name: 'Data Science & Quant',
    entry: '₹5 – 12 LPA',
    demand: 'Very high',
    roles: 'Data Analyst, BI Developer, Quantitative Researcher, Analytics Consultant',
    routes: 'Statistics / Computer Science base + proof of project execution and SQL tooling',
    skills: 'SQL, Python, PowerBI, Statistical Inference, Predictive Modeling',
  },
  {
    id: 'mgmt',
    icon: Building2,
    name: 'Management & Venture',
    entry: '₹4 – 10 LPA',
    demand: 'High',
    roles: 'Brand Marketing, Corporate Finance, Operations Manager, Strategy Consultant',
    routes: 'BBA / BMS followed by corporate work experience into tier-1 MBA',
    skills: 'Financial Modeling, Operations, Strategic Communication, Team Leadership',
  },
  {
    id: 'law',
    icon: Scale,
    name: 'Law & Corporate Governance',
    entry: '₹4 – 12 LPA',
    demand: 'High',
    roles: 'Corporate Counsel, M&A Associate, Intellectual Property, Regulatory Compliance',
    routes: '5-year integrated B.A. LL.B / B.B.A. LL.B through CLAT, AILET and State Entrances',
    skills: 'Legal Drafting, Contract Analysis, Statutory Interpretation, Negotiation',
  },
  {
    id: 'design',
    icon: Palette,
    name: 'Design & Interaction',
    entry: '₹3.5 – 9 LPA',
    demand: 'High',
    roles: 'UI/UX Designer, Industrial Product Design, VFX Artist, Motion Graphics',
    routes: 'B.Des / Animation degrees with rigorous portfolio review (UCEED / NID / Private)',
    skills: 'Figma, Design Systems, Typography, 3D Modeling, User Research',
  },
  {
    id: 'fashion',
    icon: Shirt,
    name: 'Fashion & Styling',
    entry: '₹3 – 7 LPA',
    demand: 'Steady',
    roles: 'Fashion Designer, Apparel Merchandiser, Celebrity Stylist, Retail Buyer',
    routes: 'B.Des Fashion / Textile Technology through NIFT and accredited design institutes',
    skills: 'Textile Science, Pattern Making, Trend Forecasting, Visual Merchandising',
  },
  {
    id: 'hosp',
    icon: UtensilsCrossed,
    name: 'Hospitality & Culinary',
    entry: '₹3 – 8 LPA',
    demand: 'High',
    roles: 'Hotel Operations, F&B Director, Cruise Hospitality, Luxury Event Management',
    routes: 'BHM (Bachelor of Hotel Management) and diplomas with 5-star hotel tie-ups',
    skills: 'Guest Relations, Revenue Management, Culinary Arts, International Standards',
  },
  {
    id: 'aviation',
    icon: Plane,
    name: 'Aviation & Aerospace',
    entry: '₹4 – 10 LPA',
    demand: 'High',
    roles: 'Commercial Pilot, Cabin Crew Lead, Air Traffic Control, Aircraft Maintenance (AME)',
    routes: 'Aeronautical Engineering / DGCA-approved flight schools and AME institutes',
    skills: 'Aerodynamics, Flight Regulations, Crew Resource Management, Navigation',
  },
  {
    id: 'comm',
    icon: Landmark,
    name: 'Commerce & High Finance',
    entry: '₹3.5 – 9 LPA',
    demand: 'High',
    roles: 'Chartered Accountant, Investment Banker, Wealth Manager, Risk Analyst',
    routes: 'B.Com / BAF coupled with CA, ACCA, CFA or US CMA professional credentials',
    skills: 'Accounting Standards, Corporate Taxation, Equity Valuation, Financial Auditing',
  },
  {
    id: 'agri',
    icon: Leaf,
    name: 'Agriculture & Food Tech',
    entry: '₹3 – 7 LPA',
    demand: 'Steady',
    roles: 'Agri-Business Manager, Food Quality Inspector, Soil Specialist, Precision Farming',
    routes: 'B.Sc Agriculture / Food Technology through ICAR or state farm universities',
    skills: 'Crop Genetics, Post-Harvest Tech, Supply Chain, Agri-Commodity Trading',
  },
]

export function Careers() {
  const [selectedId, setSelectedId] = useState<string>('ai')
  const current = careers.find((c) => c.id === selectedId) || careers[0]
  const Icon = current.icon

  return (
    <section id="careers" className="bg-black py-28 sm:py-36 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
              Career Intelligence
            </span>
          </FadeUp>

          <h2 className="sr-only">100+ career paths. Demystified in plain language.</h2>
          <SplitLineReveal
            lines={[
              '100+ career paths.',
              <span key="demystified" className="text-[#9A9A9A]">Demystified in plain language.</span>,
            ]}
            className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
            lineClassName="leading-[1.05]"
            stagger={0.08}
          />

          <FadeUp delay={0.25}>
            <p className="mt-5 text-[17px] text-[#9A9A9A] leading-relaxed font-light">
              Select any industry to inspect verified entry salaries, realistic day-to-day job roles,
              future demand curves, and the exact academic roadmap.
            </p>
          </FadeUp>
        </div>

        {/* Interactive Typography & Readout Split Layout (Refero Philosophy) */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Left Column: Interactive Typography List */}
          <div>
            <DrawLine />
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {careers.map((career) => {
                const isSelected = career.id === selectedId
                return (
                  <button
                    key={career.id}
                    type="button"
                    onClick={() => setSelectedId(career.id)}
                    className="group flex items-center justify-between py-4 sm:py-5 px-3 text-left transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#8052FF]"
                  >
                    <span
                      className={cn(
                        'font-heading text-xl sm:text-2xl lg:text-[1.75rem] font-normal tracking-tight transition-all duration-300',
                        isSelected
                          ? 'text-[#8052FF] translate-x-2'
                          : 'text-white/70 group-hover:text-white group-hover:translate-x-1'
                      )}
                    >
                      {career.name}
                    </span>

                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'text-xs font-mono px-2.5 py-0.5 rounded-full border transition-colors',
                          career.demand === 'Very high'
                            ? 'border-[#15846E]/40 text-[#15846E] bg-[#15846E]/10'
                            : career.demand === 'High'
                              ? 'border-[#8052FF]/30 text-[#a584ff] bg-[#8052FF]/5'
                              : 'border-white/10 text-[#9A9A9A]'
                        )}
                      >
                        {career.demand}
                      </span>
                      <ArrowRight
                        className={cn(
                          'size-4 transition-all duration-300',
                          isSelected
                            ? 'text-[#8052FF] translate-x-1 opacity-100'
                            : 'text-[#9A9A9A] opacity-30 group-hover:opacity-100 group-hover:translate-x-1'
                        )}
                      />
                    </div>
                  </button>
                )
              })}
            </div>
            <DrawLine />
          </div>

          {/* Right Column: Sticky Editorial Career Dossier Panel with AnimatePresence */}
          <div className="lg:sticky lg:top-32 rounded-3xl border border-white/[0.1] bg-white/[0.02] p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 rounded-2xl bg-[#8052FF]/10 border border-[#8052FF]/30 flex items-center justify-center text-[#8052FF]">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-normal text-white">
                        {current.name}
                      </h3>
                      <span className="text-xs font-mono text-[#9A9A9A]">
                        CAREER PROFILE BRIEF
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[11px] font-mono text-[#9A9A9A] uppercase">
                      Growth Outlook
                    </span>
                    <span className="text-xs font-medium text-[#15846E] flex items-center gap-1 mt-0.5">
                      <TrendingUp className="size-3" />
                      {current.demand} Demand
                    </span>
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div className="mt-8 space-y-6 divide-y divide-white/[0.08]">
                  <div className="pt-2">
                    <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase block">
                      Expected Entry Salary Band
                    </span>
                    <span className="font-heading text-3xl font-normal text-[#FFB829] mt-1 block">
                      {current.entry}
                    </span>
                    <span className="text-xs text-[#9A9A9A] font-light">
                      Average initial starting CTC based on campus placement audits
                    </span>
                  </div>

                  <div className="pt-6">
                    <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase block">
                      Primary Roles In Demand
                    </span>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#BDBDBD] font-light">
                      {current.roles}
                    </p>
                  </div>

                  <div className="pt-6">
                    <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase block">
                      Recommended Academic Route
                    </span>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#BDBDBD] font-light">
                      {current.routes}
                    </p>
                  </div>

                  <div className="pt-6">
                    <span className="text-xs font-mono tracking-wider text-[#9A9A9A] uppercase block">
                      Key Capabilities Evaluated By Employers
                    </span>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#BDBDBD] font-light">
                      {current.skills}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <a
                    href="#book"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8052FF] py-3 text-sm font-medium text-white hover:bg-[#6e3df0] shadow-[0_0_20px_rgba(128,82,255,0.3)] transition-all"
                  >
                    <span>Find My Fit in {current.name}</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footnote note */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-[#9A9A9A] font-light">
            <Sparkles className="size-4 text-[#FFB829]" />
            <span>
              Also covered: pharmacy, ITI &amp; diploma lateral routes, government services,
              international study, and professional certifications.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
