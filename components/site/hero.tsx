'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Star } from 'lucide-react'
import GatewayFlow from '@/components/ui/gateway-flow'
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
      className="relative w-full overflow-hidden bg-black min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 border-b border-white/[0.08]"
    >
      {/* 01. GatewayFlow Full-Width Absolute Background Animation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      >
        <GatewayFlow
          mode="dark"
          speed={0.9}
          density={1.3}
          size={1.15}
          opacity={1}
          className="h-full w-full pointer-events-none"
        />

        {/* Lightweight subtle gradient overlays so the flow fills and illuminates the whole hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,22,36,0.5)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* 02. Foreground Interactive Hero Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mx-auto max-w-4xl">
          {/* Eyebrow Pill */}
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-black/70 backdrop-blur-md px-4 py-1.5 text-[11px] sm:text-[12px] font-mono tracking-[0.2em] text-[#56D8E7] uppercase shadow-[0_0_24px_rgba(0,194,255,0.2)]">
              <Sparkles className="size-3 text-[#56D8E7]" aria-hidden="true" />
              GUIDE · SUPPORT · EMPOWER
            </span>
          </FadeUp>

          {/* Main Headline & Highlighted Statement */}
          <div className="space-y-3">
            <FadeUp delay={0.15}>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-normal tracking-[-0.035em] text-white leading-[1.04]">
                From Education to Opportunity.
              </h1>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.03em] leading-snug">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#56D8E7] to-[#00C2FF] drop-shadow-[0_0_30px_rgba(86,216,231,0.35)]">
                  Your Future Starts With the Right Guidance.
                </span>
              </p>
            </FadeUp>
          </div>

          {/* Supporting Paragraph */}
          <FadeUp delay={0.35}>
            <p className="text-[16px] sm:text-[19px] leading-relaxed text-[#CBD5E1] font-normal max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Choosing the right course, finding the right college, settling into a new city or
              preparing for your career — we&apos;re here to help you navigate every next step with
              greater confidence.
            </p>
          </FadeUp>

          {/* CTA Action Buttons */}
          <FadeUp delay={0.45} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* Primary CTA: Electric Cyan Pill with Restrained Glow */}
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0F9F9A] via-[#00C2FF] to-[#56D8E7] px-8 py-3.5 text-[15px] font-semibold text-black shadow-[0_0_35px_rgba(0,194,255,0.45)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,194,255,0.75)] hover:scale-[1.02] active:scale-100 outline-none focus-visible:ring-2 focus-visible:ring-[#56D8E7]"
              >
                <span>Explore Your Future</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Talk to Our Team (WhatsApp Direct) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-black/70 backdrop-blur-md px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#56D8E7] hover:bg-[#56D8E7]/10 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[#56D8E7]"
                title="Chat with our education counselling team on WhatsApp"
              >
                <MessageCircle className="size-4 text-[#56D8E7]" />
                <span>Talk to Our Team</span>
              </a>
            </div>
          </FadeUp>

          {/* Supporting Services Strip */}
          <FadeUp delay={0.55}>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-[13px] text-[#94A3B8] font-mono tracking-wide">
              {supportingServices.map((service, idx) => (
                <React.Fragment key={service}>
                  <span className="hover:text-white transition-colors">{service}</span>
                  {idx < supportingServices.length - 1 && (
                    <span className="text-[#00C2FF]/40" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeUp>

          {/* Social Proof & Trust Proof Pill */}
          <FadeUp delay={0.65} className="w-full">
            <div className="mt-4 border-t border-white/15 bg-black/60 backdrop-blur-md rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mx-auto max-w-2xl shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {['student-1', 'student-2', 'student-3'].map((img) => (
                    <Image
                      key={img}
                      src={`/images/${img}.png`}
                      alt="Student guided by Education Bridge"
                      width={32}
                      height={32}
                      className="size-8 rounded-full border-2 border-black object-cover"
                    />
                  ))}
                </div>
                <div className="flex flex-col leading-tight text-left">
                  <div className="flex items-center gap-0.5 text-[#FFD166]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-[12.5px] font-mono text-[#F1F5F9] font-medium mt-0.5">
                    4.9/5 from 2,300+ families
                  </span>
                </div>
              </div>

              <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-[#F1F5F9] font-normal">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-[#0F9F9A]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

        {/* Minimal Stat Counters */}
        <div className="mt-14 sm:mt-16 w-full">
          <StatCounters />
        </div>
      </div>
    </section>
  )
}
