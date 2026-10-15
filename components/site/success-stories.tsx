'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const stories = [
  {
    image: '/images/student-1.png',
    name: 'Rohit K.',
    from: 'PUC Science (68%) — “Take whatever BE seat is available”',
    before:
      'Family pushed for core mechanical engineering because of relative advice. Our scientific assessment showed exceptional logical reasoning and zero spatial interest in workshop mechanical roles.',
    after:
      'Pivoted to a B.Tech in CSE (Data Science). Mentored across 3 real-world analytics projects and communication coaching. Cleared six corporate interview rounds in final year.',
    course: 'B.Tech CSE (Data Science)',
    college: 'Aurora Institute of Technology',
    role: 'Data Analyst',
    package: '₹9.2 LPA',
  },
  {
    image: '/images/student-2.png',
    name: 'Ananya S.',
    from: 'After 12th Commerce — Torn between generic B.Com and BBA',
    before:
      'Was about to pay capitation fees at a private college 400 km away with unverified placement numbers, solely based on an acquaintance’s word.',
    after:
      'We conducted an objective ROI comparison of five campuses, helped her secure a 40% merit scholarship, and structured her track for a CA articleship in year two.',
    course: 'B.Com + CA Intermediate',
    college: 'Lakeside School of Business',
    role: 'Audit Associate',
    package: '₹7.5 LPA',
  },
  {
    image: '/images/student-3.png',
    name: 'Priya M.',
    from: 'Polytechnic Diploma holder — Assumed further paths were closed',
    before:
      'Believed that completing a 3-year diploma meant her higher education options were exhausted and she had to settle for basic administrative data entry.',
    after:
      'Guided into lateral entry for B.Sc Medical Imaging. Hostel security and local lodging personally audited by our team. Campus placed before final semester exams.',
    course: 'B.Sc Medical Imaging',
    college: 'Greenfield College of Health Sciences',
    role: 'Radiology Technologist',
    package: '₹6.1 LPA',
  },
]

export function SuccessStories() {
  const [index, setIndex] = useState(0)
  const story = stories[index]

  const go = (dir: -1 | 1) =>
    setIndex((prev) => (prev + dir + stories.length) % stories.length)

  return (
    <section id="stories" className="bg-background text-foreground py-28 sm:py-36 border-b border-border transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <FadeUp delay={0}>
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
                Student Trajectories
              </span>
            </FadeUp>

            <h2 className="sr-only">From confused to placed.</h2>
            <SplitLineReveal
              lines={[
                'From confused',
                'to placed.',
              ]}
              className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-foreground leading-[1.05]"
              lineClassName="leading-[1.05]"
              stagger={0.08}
            />

            <FadeUp delay={0.2}>
              <p className="mt-5 text-[17px] text-muted-foreground leading-relaxed font-light">
                Real journeys told with complete honesty — including the moments that almost went off course.
              </p>
            </FadeUp>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="size-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors shadow-sm"
              aria-label="Previous story"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="size-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent transition-colors shadow-sm"
              aria-label="Next story"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Editorial Story Layout with AnimatePresence */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card shadow-lg dark:shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Student Dossier Column */}
              <div className="flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-border p-8 sm:p-12 bg-muted/20">
                <div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={story.image}
                      alt={`Portrait of ${story.name}`}
                      width={64}
                      height={64}
                      className="size-16 rounded-full object-cover border border-border"
                    />
                    <div>
                      <h3 className="font-heading text-2xl font-normal text-foreground">
                        {story.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-light mt-0.5 max-w-xs">
                        {story.from}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase block">
                        Now Working As
                      </span>
                      <span className="font-heading text-xl font-normal text-foreground mt-1 block">
                        {story.role}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase block">
                        Starting CTC Package
                      </span>
                      <span className="font-heading text-3xl font-semibold text-amber-600 dark:text-[#FFB829] mt-1 block">
                        {story.package}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border text-xs text-muted-foreground flex items-center gap-2">
                  <Sparkles className="size-3.5 text-[#8052FF]" />
                  <span>Verified Education Bridge candidate record</span>
                </div>
              </div>

              {/* Before vs After Narrative Column */}
              <div className="flex flex-col justify-between p-8 sm:p-12 gap-8">
                <div className="space-y-6">
                  {/* Before */}
                  <div className="p-6 rounded-2xl border border-border bg-muted/40">
                    <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase block mb-2 font-medium">
                      Before Guidance · The Confusion
                    </span>
                    <p className="text-[15px] leading-relaxed text-foreground/80 font-light">
                      {story.before}
                    </p>
                  </div>

                  {/* After */}
                  <div className="p-6 rounded-2xl border border-[#8052FF]/30 bg-[#8052FF]/5 dark:bg-[#8052FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono tracking-wider text-[#8052FF] dark:text-[#a584ff] uppercase font-medium">
                        After Architecture · The Trajectory
                      </span>
                      <ArrowUpRight className="size-3 text-[#8052FF]" />
                    </div>
                    <p className="text-[15px] leading-relaxed text-foreground font-normal">
                      {story.after}
                    </p>
                  </div>
                </div>

                {/* Course & College metadata */}
                <div className="pt-6 border-t border-border grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground uppercase block">
                      Undergraduate Degree
                    </span>
                    <span className="text-sm font-medium text-foreground mt-1 block">
                      {story.course}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground uppercase block">
                      Institution
                    </span>
                    <span className="text-sm font-medium text-foreground mt-1 block">
                      {story.college}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Story Selector Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {stories.map((s, i) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show story of ${s.name}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-[#8052FF]' : 'w-4 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
