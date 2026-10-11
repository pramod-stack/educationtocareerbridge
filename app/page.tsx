import { SitePreloader } from '@/components/ui/site-preloader'
import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { EducationCareerMarquee } from '@/components/ui/education-career-marquee'
import { Confusion } from '@/components/site/confusion'
import { JourneyTimeline } from '@/components/site/journey-timeline'
import { Process } from '@/components/site/process'
import { CareerSimulator } from '@/components/site/career-simulator'
import { CollegeCompare } from '@/components/site/college-compare'
import { Careers } from '@/components/site/careers'
import { Parents } from '@/components/site/parents'
import { SuccessStories } from '@/components/site/success-stories'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { BookingCta } from '@/components/site/booking-cta'
import { SiteFooter } from '@/components/site/site-footer'
import { MobileStickyBar } from '@/components/site/mobile-sticky-bar'
import { AmbientGlow } from '@/components/ui/ambient-glow'

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col bg-black text-white selection:bg-[#8052FF] selection:text-white relative">
      {/* 00. Cinematic Official Logo Preloader */}
      <SitePreloader />

      {/* Ambient Mouse Tracking Aura */}
      <AmbientGlow />

      {/* Floating Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* 01. Hero & Career Editorial Display */}
        <Hero />

        {/* 02. The Signature 21st.dev 3-Row Question Marquee & Feature Grid */}
        <EducationCareerMarquee />

        {/* 03. The Real Problem: Why Students Feel Lost */}
        <Confusion />

        {/* 04. Education Bridge 11-Stage Interactive Career Journey */}
        <JourneyTimeline />

        {/* 05. How Education Bridge Works: Six-Chapter Methodology */}
        <Process />

        {/* 06. Interactive 4-Year Trajectory Simulator */}
        <CareerSimulator />

        {/* 07. Product-Grade College Comparison Matrix */}
        <CollegeCompare />

        {/* 08. Career Intelligence Explorer: 100+ Trajectories */}
        <Careers />

        {/* 08. For Parents: Quiet Dignity & Financial Clarity */}
        <Parents />

        {/* 09. Editorial Success Stories: From Confused to Placed */}
        <SuccessStories />

        {/* 10. Testimonials: Oversized Editorial Quotes */}
        <Testimonials />

        {/* 11. Minimal FAQ: Straight Answers, No Sales Language */}
        <Faq />

        {/* 12. Final CTA: Free 45-Min Career Counselling Consultation */}
        <BookingCta />
      </main>

      {/* Editorial Footer */}
      <SiteFooter />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileStickyBar />
    </div>
  )
}
