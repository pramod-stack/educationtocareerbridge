'use client'

import { useState } from 'react'
import { Check, Info, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

type College = {
  id: string
  name: string
  city: string
  tag: string
  fees: string
  placement: string
  avgPackage: string
  highest: string
  hostel: string
  food: string
  faculty: string
  labs: string
  scholarship: string
  distance: string
  naac: string
  nirf: string
  reviews: string
}

const colleges: College[] = [
  {
    id: 'aurora',
    name: 'Aurora Institute of Technology',
    city: 'Bengaluru',
    tag: 'Best for placements',
    fees: '₹1.85L / year',
    placement: '94%',
    avgPackage: '₹6.4 LPA',
    highest: '₹34 LPA',
    hostel: 'AC / non-AC, 2-sharing',
    food: 'Veg + non-veg, 4.3/5',
    faculty: '78% PhD holders',
    labs: 'AI, robotics, IoT',
    scholarship: 'Up to 40% on merit',
    distance: '12 km from airport',
    naac: 'A++',
    nirf: 'Rank 42 (Engg.)',
    reviews: '4.5/5 · 1,240 reviews',
  },
  {
    id: 'meridian',
    name: 'Meridian University',
    city: 'Pune',
    tag: 'Best all-rounder',
    fees: '₹2.40L / year',
    placement: '89%',
    avgPackage: '₹7.1 LPA',
    highest: '₹41 LPA',
    hostel: 'AC, 2 & 3-sharing',
    food: 'Multi-cuisine, 4.6/5',
    faculty: '84% PhD holders',
    labs: 'Cyber range, design studio',
    scholarship: 'Up to 30% + sports',
    distance: '9 km from city centre',
    naac: 'A++',
    nirf: 'Rank 28 (University)',
    reviews: '4.6/5 · 2,010 reviews',
  },
  {
    id: 'greenfield',
    name: 'Greenfield College of Health Sciences',
    city: 'Mangaluru',
    tag: 'Best for paramedical',
    fees: '₹1.20L / year',
    placement: '91%',
    avgPackage: '₹4.8 LPA',
    highest: '₹12 LPA',
    hostel: 'Non-AC, 3-sharing',
    food: 'Veg only, 4.1/5',
    faculty: '62% PhD holders',
    labs: 'Simulation & clinical',
    scholarship: 'Govt. + institutional',
    distance: '4 km from railway',
    naac: 'A+',
    nirf: 'Rank 61 (Medical)',
    reviews: '4.3/5 · 780 reviews',
  },
  {
    id: 'lakeside',
    name: 'Lakeside School of Business',
    city: 'Hyderabad',
    tag: 'Best ROI',
    fees: '₹1.60L / year',
    placement: '86%',
    avgPackage: '₹5.9 LPA',
    highest: '₹22 LPA',
    hostel: 'AC, 2-sharing',
    food: 'Multi-cuisine, 4.4/5',
    faculty: '70% PhD holders',
    labs: 'Bloomberg lab, analytics',
    scholarship: 'Up to 50% on merit',
    distance: '18 km from airport',
    naac: 'A',
    nirf: 'Rank 74 (Management)',
    reviews: '4.2/5 · 640 reviews',
  },
  {
    id: 'northgate',
    name: 'Northgate Institute of Design',
    city: 'Chennai',
    tag: 'Best for creative fields',
    fees: '₹2.10L / year',
    placement: '82%',
    avgPackage: '₹5.2 LPA',
    highest: '₹18 LPA',
    hostel: 'Studio-style, 2-sharing',
    food: 'Veg + non-veg, 4.0/5',
    faculty: 'Industry practitioners',
    labs: 'Fabrication, motion, VR',
    scholarship: 'Portfolio-based',
    distance: '7 km from city centre',
    naac: 'A',
    nirf: 'Emerging institute',
    reviews: '4.4/5 · 410 reviews',
  },
]

const rows: { key: keyof College; label: string; hint?: string }[] = [
  { key: 'fees', label: 'Annual fees' },
  { key: 'placement', label: 'Placement rate', hint: 'Verified from last 3 batches' },
  { key: 'avgPackage', label: 'Average package' },
  { key: 'highest', label: 'Highest package' },
  { key: 'hostel', label: 'Hostel' },
  { key: 'food', label: 'Food quality' },
  { key: 'faculty', label: 'Faculty' },
  { key: 'labs', label: 'Labs & infrastructure' },
  { key: 'scholarship', label: 'Scholarships' },
  { key: 'distance', label: 'Distance & travel' },
  { key: 'naac', label: 'NAAC grade' },
  { key: 'nirf', label: 'NIRF standing' },
  { key: 'reviews', label: 'Student reviews' },
]

export function CollegeCompare() {
  const [selected, setSelected] = useState<string[]>([
    'aurora',
    'meridian',
    'lakeside',
  ])

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.length === 1 ? prev : prev.filter((x) => x !== id)
      }
      if (prev.length === 3) return [...prev.slice(1), id]
      return [...prev, id]
    })
  }

  const chosen = colleges.filter((c) => selected.includes(c.id))

  return (
    <section id="compare" className="bg-black py-28 sm:py-36 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <FadeUp delay={0}>
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
                Product-Style Evaluation Matrix
              </span>
            </FadeUp>

            <h2 className="sr-only">Compare colleges the way parents actually think.</h2>
            <SplitLineReveal
              lines={[
                'Compare colleges the way',
                <span key="parents" className="text-[#9A9A9A]">parents actually think.</span>,
              ]}
              className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
              lineClassName="leading-[1.05]"
              stagger={0.08}
            />

            <FadeUp delay={0.25}>
              <p className="mt-5 text-[17px] text-[#9A9A9A] leading-relaxed font-light">
                Fees, placement records, hostel safety, food hygiene, faculty credentials, and realistic ROI — evaluated side by side.
                Select up to 3 colleges to compare.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.03] px-6 py-3 text-sm text-white hover:bg-white/[0.08] hover:border-white/30 transition-all self-start lg:self-auto"
            >
              Get a Personalized Shortlist
            </a>
          </FadeUp>
        </div>

        {/* College Toggle Selectors */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {colleges.map((college) => {
            const isOn = selected.includes(college.id)
            return (
              <button
                key={college.id}
                type="button"
                aria-pressed={isOn}
                onClick={() => toggle(college.id)}
                className={cn(
                  'flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-normal transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#8052FF]',
                  isOn
                    ? 'border-[#8052FF] bg-[#8052FF]/15 text-white shadow-[0_0_16px_rgba(128,82,255,0.3)]'
                    : 'border-white/[0.1] bg-white/[0.02] text-[#9A9A9A] hover:border-white/20 hover:text-white'
                )}
              >
                {isOn ? (
                  <Check className="size-3.5 text-[#8052FF]" aria-hidden="true" />
                ) : (
                  <Plus className="size-3.5 opacity-40" aria-hidden="true" />
                )}
                <span>{college.name}</span>
                <span className="text-xs opacity-50">({college.city})</span>
              </button>
            )
          })}
        </div>

        {/* Product Comparison Matrix Table */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-black/60 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          <div className="overflow-x-auto [scrollbar-width:thin]">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="w-[200px] py-5 pl-8 text-[11px] font-mono tracking-[0.16em] text-[#9A9A9A] uppercase">
                    Parameter
                  </th>
                  {chosen.map((c) => (
                    <th key={c.id} className="py-5 px-6 align-top">
                      <div className="flex flex-col gap-1">
                        <span className="font-heading text-[16px] font-normal text-white">
                          {c.name}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[12px] text-[#9A9A9A] font-light">
                            {c.city}
                          </span>
                          <span className="text-[10px] font-mono text-[#FFB829] border border-[#FFB829]/30 bg-[#FFB829]/10 px-2 py-0.5 rounded-full">
                            {c.tag}
                          </span>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {rows.map((row) => (
                  <tr
                    key={row.key}
                    className="transition-colors hover:bg-white/[0.015]"
                  >
                    <td className="py-4 pl-8 text-[13.5px] font-normal text-[#9A9A9A]">
                      <div className="flex items-center gap-1.5">
                        <span>{row.label}</span>
                        {row.hint && (
                          <span title={row.hint} className="text-[#8052FF]/70 cursor-help">
                            <Info className="size-3.5" />
                          </span>
                        )}
                      </div>
                    </td>
                    {chosen.map((c) => {
                      const isHighlight =
                        row.key === 'avgPackage' || row.key === 'highest' || row.key === 'placement'
                      return (
                        <td
                          key={c.id}
                          className={cn(
                            'py-4 px-6 text-[14px]',
                            isHighlight ? 'text-[#FFB829] font-mono font-medium' : 'text-[#BDBDBD] font-light'
                          )}
                        >
                          {c[row.key]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sample Data Disclaimer per rule 27 */}
          <div className="border-t border-white/[0.08] bg-white/[0.01] px-8 py-4 text-[12.5px] text-[#9A9A9A] font-light flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#FFB829]" />
            <span>
              Sample data shown for illustration. Your assigned counsellor shares campus-verified reports, including
              official placement sheets and audited hostel photos, before you commit to any application.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
