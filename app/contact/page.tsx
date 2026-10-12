import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock, Sparkles, ShieldCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { BookingCta } from '@/components/site/booking-cta'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

export const metadata: Metadata = {
  title: 'Contact Us — Education Bridge Career Architects | Bangalore',
  description:
    'Book an in-person or online career counselling appointment with Education Bridge in Bangalore. Call our primary helpline at 7795354043 or message us on WhatsApp.',
  keywords: [
    'contact Education Bridge Bangalore',
    'career counsellor phone number Bangalore',
    'Education to Career Bridge address',
    'book career consultation Bangalore',
  ],
}

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-black text-white selection:bg-[#8052FF] selection:text-white">
      <SiteHeader />

      <main className="flex-1 pt-32 sm:pt-40 pb-20">
        {/* Editorial Hero */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 px-4 py-1.5 text-xs font-mono tracking-[0.2em] text-[#00C2FF] uppercase">
              <Sparkles className="size-3 text-[#00C2FF]" />
              DIRECT ARCHITECT HELPLINE
            </span>
          </FadeUp>

          <h1 className="sr-only">Contact Education Bridge in Bangalore.</h1>
          <SplitLineReveal
            lines={[
              'Speak with an architect.',
              <span key="no-bot" className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00C2FF] to-[#8052FF]">
                Real counsellors, no sales pressure.
              </span>,
            ]}
            className="mt-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white leading-[1.02]"
            lineClassName="leading-[1.05]"
            stagger={0.1}
          />

          <FadeUp delay={0.25}>
            <p className="mt-6 text-lg sm:text-xl text-[#F3F4F6] font-normal max-w-3xl mx-auto leading-relaxed">
              Whether you are a student feeling overwhelmed by options or a parent wanting unbiased financial clarity,
              we are one phone call or WhatsApp message away.
            </p>
          </FadeUp>
        </section>

        {/* Contact Information Cards */}
        <section className="mt-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Phone */}
            <a
              href="tel:+917795354043"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 hover:border-[#8052FF]/40 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="size-10 rounded-xl bg-[#8052FF]/10 border border-[#8052FF]/30 flex items-center justify-center mb-4 text-[#8052FF] group-hover:scale-110 transition-transform">
                <Phone className="size-5" />
              </div>
              <span className="text-xs font-mono text-[#9A9A9A] uppercase block">Direct Phone</span>
              <span className="font-heading text-lg text-white font-normal mt-1 block">+91 77953 54043</span>
              <span className="text-xs text-[#00C2FF] mt-2 block font-mono">Available 9 AM – 8 PM IST</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917795354043?text=Hi%20Education%20Bridge%2C%20I%20would%20like%20to%20book%20a%20career%20counselling%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 hover:border-[#15846E]/40 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="size-10 rounded-xl bg-[#15846E]/10 border border-[#15846E]/30 flex items-center justify-center mb-4 text-[#15846E] group-hover:scale-110 transition-transform">
                <MessageCircle className="size-5" />
              </div>
              <span className="text-xs font-mono text-[#9A9A9A] uppercase block">WhatsApp Dispatch</span>
              <span className="font-heading text-lg text-white font-normal mt-1 block">Chat with Mentors</span>
              <span className="text-xs text-[#15846E] mt-2 block font-mono">Instant Response →</span>
            </a>

            {/* Email */}
            <a
              href="mailto:mentors@educationtocareerbridge.com"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="size-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Mail className="size-5" />
              </div>
              <span className="text-xs font-mono text-[#9A9A9A] uppercase block">Official Email</span>
              <span className="font-heading text-sm text-white font-normal mt-1 block truncate">
                mentors@educationtocareerbridge.com
              </span>
              <span className="text-xs text-[#9A9A9A] mt-2 block font-mono">Detailed Inquiries</span>
            </a>

            {/* Location */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6">
              <div className="size-10 rounded-xl bg-[#FFB829]/10 border border-[#FFB829]/30 flex items-center justify-center mb-4 text-[#FFB829]">
                <MapPin className="size-5" />
              </div>
              <span className="text-xs font-mono text-[#9A9A9A] uppercase block">Headquarters</span>
              <span className="font-heading text-lg text-white font-normal mt-1 block">Bangalore, India</span>
              <span className="text-xs text-[#FFB829] mt-2 block font-mono">In-Person & Pan-India Video</span>
            </div>
          </div>

          {/* Integrated Interactive Booking Form */}
          <BookingCta />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
