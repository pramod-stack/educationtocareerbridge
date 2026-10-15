'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock, MessageCircle, Phone, ShieldCheck, Languages } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const stages = [
  'After 10th',
  'After PUC / 12th',
  'Diploma',
  'Degree / final year',
  'Parent enquiry',
]

const assurances = [
  { icon: Clock, text: '45-minute structured session' },
  { icon: ShieldCheck, text: 'Completely free · Zero sales obligation' },
  { icon: Languages, text: 'Available in Kannada, English & Hindi' },
]

export function BookingCta() {
  const [stage, setStage] = useState<string>('After PUC / 12th')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="book" className="relative bg-background text-foreground py-28 sm:py-36 border-b border-border overflow-hidden transition-colors duration-300">
      {/* Background ambient radial cosmic glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(128,82,255,0.18)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,184,41,0.08)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 items-start">
          {/* Left Column: Huge Editorial Closing Statement */}
          <div className="flex flex-col gap-8 max-w-xl">
            <div>
              <FadeUp delay={0}>
                <span className="text-[12px] font-medium tracking-[0.2em] text-[#FFB829] uppercase">
                  Take The First Step
                </span>
              </FadeUp>

              <h2 className="sr-only">Your dream career starts with one conversation.</h2>
              <SplitLineReveal
                lines={[
                  'Your dream career',
                  'starts with',
                  <span key="one-conv" className="text-[#8052FF]">one conversation.</span>,
                ]}
                className="mt-4 font-heading text-4xl sm:text-6xl lg:text-[4.2rem] font-normal tracking-[-0.04em] text-foreground leading-[1.02]"
                lineClassName="leading-[1.05]"
                stagger={0.08}
              />
            </div>

            <FadeUp delay={0.25}>
              <p className="text-[17px] sm:text-[18px] leading-relaxed text-muted-foreground font-light">
                Tell us where you are today. A senior counsellor will connect with you,
                understand your goals, and give you an actionable roadmap — even if you never enroll in a paid program.
              </p>
            </FadeUp>

            {/* Three Dignified Session Guarantees */}
            <ul className="space-y-4 pt-2">
              {assurances.map((item, idx) => {
                const Icon = item.icon
                return (
                  <li key={idx} className="flex items-center gap-3 text-[14.5px] text-foreground/90 font-light">
                    <div className="size-8 rounded-full border border-border bg-card/60 flex items-center justify-center text-[#8052FF] shrink-0">
                      <Icon className="size-4" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                )
              })}
            </ul>

            {/* Direct Contact Ghost Links */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-6">
              <a
                href="tel:+917795354043"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="size-4 text-[#8052FF]" />
                <span>Call Directly:</span>
                <span className="font-mono text-foreground font-medium">7795354043</span>
              </a>

              <a
                href="https://wa.me/917795354043"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#15846E] transition-colors"
              >
                <MessageCircle className="size-4 text-[#15846E]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pristine Minimalist Consultation Form */}
          <FadeUp delay={0.2} duration={0.9} className="rounded-3xl border border-border bg-card p-8 sm:p-10 backdrop-blur-xl shadow-xl text-card-foreground">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="size-16 rounded-full border border-[#15846E]/40 bg-[#15846E]/10 flex items-center justify-center text-[#15846E] mb-6">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="font-heading text-3xl font-normal text-foreground">
                  Consultation Request Received
                </h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground font-light max-w-sm">
                  Thank you, <span className="text-foreground font-medium">{formData.name || 'Student'}</span>. A senior counsellor will review your stage and contact you on{' '}
                  <span className="text-[#FFB829] font-mono">{formData.phone}</span> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-border px-6 py-2.5 text-xs text-foreground hover:bg-muted transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="student-name" className="block text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2">
                    Student Name *
                  </label>
                  <input
                    id="student-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-xl border border-input bg-background/90 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-[#8052FF] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="student-phone" className="block text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2">
                    Mobile Number *
                  </label>
                  <input
                    id="student-phone"
                    type="tel"
                    required
                    pattern="[0-9\s+]{10,15}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-input bg-background/90 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-[#8052FF] transition-colors font-mono"
                  />
                  <p className="mt-1 text-[11px] text-muted-foreground font-light">
                    We call once for your session. Zero spam or third-party marketing.
                  </p>
                </div>

                <div>
                  <label htmlFor="student-city" className="block text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2">
                    Your City *
                  </label>
                  <input
                    id="student-city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Bengaluru, Hubballi, Pune"
                    className="w-full rounded-xl border border-input bg-background/90 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-[#8052FF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-wider text-muted-foreground uppercase mb-2.5">
                    Current Academic Stage *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {stages.map((st) => {
                      const isSelected = stage === st
                      return (
                        <button
                          key={st}
                          type="button"
                          onClick={() => setStage(st)}
                          className={cn(
                            'rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200 outline-none cursor-pointer',
                            isSelected
                              ? 'border-[#8052FF] bg-[#8052FF]/20 text-foreground font-medium shadow-[0_0_12px_rgba(128,82,255,0.4)]'
                              : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                          )}
                        >
                          {st}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Single Filled Violet Primary CTA */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8052FF] py-4 text-[15px] font-medium text-white shadow-[0_0_30px_rgba(128,82,255,0.45)] hover:bg-[#6e3df0] hover:shadow-[0_0_45px_rgba(128,82,255,0.7)] transition-all duration-300 mt-2 cursor-pointer"
                >
                  <span>Book Free Career Counselling</span>
                  <ArrowRight className="size-4" />
                </button>

                <p className="text-center text-[11.5px] text-muted-foreground font-light">
                  By submitting, you consent to an honest 1-on-1 career consultation call.
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
