'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Star, CheckCircle2, GraduationCap, Building2 } from 'lucide-react'
import { StatCounters } from '@/components/site/stat-counters'
import { FadeUp } from '@/components/ui/motion-text'

const supportingServices = [
  'Career Guidance',
  'Course & College Support',
  'Admission Guidance',
  'Student Living Support',
  'Career Readiness & Opportunities',
]

const trustPoints = [
  'No admission pressure',
  'Honest college reports',
  'Support till placement',
]

export function Hero() {
  const whatsappUrl =
    'https://wa.me/917795354043?text=Hi%20Education%20Bridge%20team%2C%20I%20would%20like%20to%20get%20guidance%20on%20courses%2C%20colleges%20and%20career%20planning.'

  return (
    <section
      id="top"
      aria-label="Education to Career Bridge Hero"
      className="relative w-full overflow-hidden bg-background min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 border-b border-border transition-colors duration-300"
    >
      {/* Background Subtle Gradient Illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_15%,rgba(0,194,255,0.08),transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 w-96 h-96 rounded-full bg-[#8052FF]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#00C2FF]/10 blur-3xl"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* 2-Column Hero: Left Typography & Actions, Right Neat Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
            {/* Eyebrow Badge */}
            <FadeUp delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-card/80 backdrop-blur-md px-4 py-1.5 text-[11px] sm:text-[12px] font-mono tracking-[0.2em] text-[#00C2FF] uppercase shadow-[0_0_20px_rgba(0,194,255,0.12)]">
                <Sparkles className="size-3 text-[#00C2FF]" aria-hidden="true" />
                GUIDE · SUPPORT · EMPOWER · BENGALURU
              </span>
            </FadeUp>

            {/* Main Headlines */}
            <div className="space-y-3">
              <FadeUp delay={0.15}>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal tracking-[-0.035em] text-foreground leading-[1.06]">
                  From Education to Opportunity.
                </h1>
              </FadeUp>

              <FadeUp delay={0.25}>
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-light tracking-[-0.03em] leading-snug">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-[#56D8E7] to-[#00C2FF]">
                    Your Future Starts With the Right Guidance.
                  </span>
                </p>
              </FadeUp>
            </div>

            {/* Supporting Paragraph */}
            <FadeUp delay={0.35}>
              <p className="text-[16px] sm:text-[18px] leading-relaxed text-muted-foreground font-light max-w-2xl">
                Choosing the right course, finding the right college, settling into a new city or
                preparing for your career — we&apos;re here to help you navigate every next step with
                greater confidence and zero commission bias.
              </p>
            </FadeUp>

            {/* CTA Action Buttons */}
            <FadeUp delay={0.45} className="w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Primary CTA: Explore Courses */}
                <a
                  href="#courses-directory"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0F9F9A] via-[#00C2FF] to-[#56D8E7] px-8 py-3.5 text-[15px] font-semibold text-black shadow-[0_0_35px_rgba(0,194,255,0.35)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,194,255,0.65)] hover:scale-[1.02] active:scale-100 outline-none"
                >
                  <GraduationCap className="size-4" />
                  <span>Explore Courses & Colleges</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Secondary CTA: WhatsApp Direct */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur-md px-7 py-3.5 text-[15px] font-medium text-foreground transition-all duration-300 hover:border-[#56D8E7] hover:bg-[#56D8E7]/10 outline-none"
                  title="Chat with our education counselling team on WhatsApp"
                >
                  <MessageCircle className="size-4 text-[#56D8E7]" />
                  <span>WhatsApp Our Team</span>
                </a>
              </div>
            </FadeUp>

            {/* Supporting Services Strip */}
            <FadeUp delay={0.55}>
              <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-[13px] text-muted-foreground font-mono">
                {supportingServices.map((service, idx) => (
                  <React.Fragment key={service}>
                    <span className="hover:text-foreground transition-colors">{service}</span>
                    {idx < supportingServices.length - 1 && (
                      <span className="text-[#00C2FF]/40" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </FadeUp>

            {/* Trust Points */}
            <FadeUp delay={0.65}>
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-foreground/90 font-light">
                {trustPoints.map((point) => (
                  <span key={point} className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-4 text-[#00C2FF]" />
                    <span>{point}</span>
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Neat Photo Grid (5 Cols) */}
          <div className="lg:col-span-5 relative w-full">
            <FadeUp delay={0.25}>
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4 p-2 sm:p-3 rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Photo 1: Graduating Convocation Students */}
                <div className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 bg-slate-900 border border-white/[0.08]">
                  <Image
                    src="/images/whatsapp/campus_4.jpeg"
                    alt="Graduating convocation students in Bangalore"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-[#56D8E7] bg-black/70 border border-white/10 backdrop-blur-sm">
                      🎓 Convocation
                    </span>
                    <p className="text-white text-xs font-heading font-medium mt-1 truncate">
                      Bangalore Degree Graduates
                    </p>
                  </div>
                </div>

                {/* Photo 2: Medical & Science Laboratory Students */}
                <div className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 bg-slate-900 border border-white/[0.08]">
                  <Image
                    src="/images/whatsapp/campus_7.jpeg"
                    alt="Medical and pharmacy students in laboratory coats"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-[#00C2FF] bg-black/70 border border-white/10 backdrop-blur-sm">
                      🩺 Healthcare & Labs
                    </span>
                    <p className="text-white text-xs font-heading font-medium mt-1 truncate">
                      Medicine, Nursing & Pharma
                    </p>
                  </div>
                </div>

                {/* Photo 3: Transparent Parent Counselling Session */}
                <div className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 bg-slate-900 border border-white/[0.08]">
                  <Image
                    src="/images/parents-counselling.png"
                    alt="1-on-1 parent counselling and college selection"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-[#FFD166] bg-black/70 border border-white/10 backdrop-blur-sm">
                      🤝 1-on-1 Mentorship
                    </span>
                    <p className="text-white text-xs font-heading font-medium mt-1 truncate">
                      Transparent Parent Guidance
                    </p>
                  </div>
                </div>

                {/* Photo 4: Campus Basketball / Sports Life */}
                <div className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 bg-slate-900 border border-white/[0.08]">
                  <Image
                    src="/images/whatsapp/campus_3.jpeg"
                    alt="Campus sports and hostel student community in Bengaluru"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-[#8052FF] bg-black/70 border border-white/10 backdrop-blur-sm">
                      🏀 Campus Living
                    </span>
                    <p className="text-white text-xs font-heading font-medium mt-1 truncate">
                      Hostel & Safety Support
                    </p>
                  </div>
                </div>

                {/* Floating Central Trust Chip */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/95 backdrop-blur-md shadow-lg whitespace-nowrap">
                  <Building2 className="size-3.5 text-[#00C2FF]" />
                  <span className="text-xs font-mono text-foreground font-medium">
                    100+ Premier Bangalore Colleges
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Minimal Stat Counters */}
        <div className="mt-14 sm:mt-16 w-full">
          <StatCounters />
        </div>
      </div>
    </section>
  )
}
