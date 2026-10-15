'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const faqs = [
  {
    q: 'My marks are average. Do I still have good career options?',
    a: 'Yes — and this is the single biggest myth we correct every day. Marks decide which initial entrance cutoffs are easy; they do not dictate your career ceiling. We evaluate cognitive aptitude, innate strengths, and industry hiring trends, then architect high-ROI pathways including lateral entry, specialized applied degrees, and skill-led career tracks.',
    category: 'Career',
  },
  {
    q: 'How accurate is the psychometric assessment?',
    a: 'The assessment is a scientific baseline, not a computer verdict. It measures logical aptitude, interest patterns, working temperament, and emotional tendencies. A senior counsellor then interprets these findings alongside your academics, family budget, and aspirations in a 1-on-1 session — the human conversation is where the ultimate clarity happens.',
    category: 'Career',
  },
  {
    q: 'Can I change my career direction after I start my course?',
    a: 'Often yes. Many modern programmes offer interdisciplinary electives, minors, or an intentional pivot at the master’s / corporate entry stage. If you consult us early, we help you choose electives, certifications, and internships so a pivot costs you zero extra years.',
    category: 'Career',
  },
  {
    q: 'Do you charge students, or do colleges pay you commission?',
    a: 'Families pay for our guidance, which is exactly why our recommendations stay 100% objective and honest. We do not push a college because of a hidden kickback, and we will tell you bluntly when a more affordable or nearer institution is the superior choice for your child.',
    category: 'Admission',
  },
  {
    q: 'What is the real total cost of a 4-year degree?',
    a: 'Tuition is only part of it. We provide a transparent written estimate covering tuition, hostel accommodation, mess food, examination and lab fees, laptop requirements, and everyday living costs — and compare it against verified starting salary curves to compute realistic ROI.',
    category: 'Fees',
  },
  {
    q: 'How do you verify a college’s placement claims?',
    a: 'We demand official batch-wise placement sheets, check the percentage of students who were actually eligible and placed, focus on the median rather than an isolated outlier highest package, and speak directly with recent alumni. If a college refuses to furnish data, that silence itself is our answer.',
    category: 'Placement',
  },
  {
    q: 'Does your support truly continue until I secure a job?',
    a: 'Yes. Our methodology is built around your first offer letter, not your admission receipt. We maintain regular check-ins every semester, help with skill roadmaps, and stay alongside you through your initial ninety days in the corporate workforce.',
    category: 'Placement',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="bg-background text-foreground py-28 sm:py-36 border-b border-border transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 items-start">
          {/* Left Column: Sticky Editorial Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp delay={0}>
              <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
                Frequently Asked Questions
              </span>
            </FadeUp>

            <h2 className="sr-only">Straight answers. No sales language.</h2>
            <SplitLineReveal
              lines={[
                'Straight answers.',
                <span key="no-sales" className="text-muted-foreground">No sales language.</span>,
              ]}
              className="mt-4 font-heading text-4xl sm:text-5xl font-normal tracking-[-0.04em] text-foreground leading-[1.05]"
              lineClassName="leading-[1.05]"
              stagger={0.08}
            />

            <FadeUp delay={0.25}>
              <p className="mt-5 text-[17px] text-muted-foreground leading-relaxed font-light">
                If your question is not covered here, ask it freely during your initial counselling session.
                There is zero obligation to enroll afterwards.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="mt-8 pt-8 border-t border-border">
                <a
                  href="#book"
                  className="text-sm text-[#8052FF] hover:underline flex items-center gap-2 font-medium"
                >
                  <span>Ask our counsellors directly</span>
                  <span>→</span>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Horizontal Separators with Smooth Height Animation */}
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div key={i} className="py-6 sm:py-7">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-start justify-between gap-4 text-left outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        'font-heading text-lg sm:text-xl font-normal transition-colors duration-200',
                        isOpen ? 'text-[#8052FF]' : 'text-foreground/90 group-hover:text-foreground'
                      )}
                    >
                      {faq.q}
                    </span>
                    <span className="size-7 rounded-full border border-border flex items-center justify-center text-muted-foreground shrink-0 mt-0.5 group-hover:border-foreground/40 group-hover:text-foreground transition-colors">
                      {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                    </span>
                  </button>

                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out overflow-hidden',
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[15.5px] leading-relaxed text-muted-foreground font-light max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
