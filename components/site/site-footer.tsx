'use client'

import Link from 'next/link'
import { BrandLogo } from '@/components/site/brand-logo'
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

const navigationLinks = [
  { label: 'Career Discovery', href: '#careers' },
  { label: 'Stream Selection', href: '#journey' },
  { label: 'College Shortlisting', href: '#compare' },
  { label: 'Application Support', href: '#how-it-works' },
  { label: 'Parent Guidance', href: '#parents' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Book Counselling', href: '#book' },
]

export function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-white/[0.08] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 items-start">
          {/* Brand Col */}
          <div className="flex flex-col gap-6 max-w-md">
            <Link href="/" className="inline-block outline-none">
              <BrandLogo showSubtitle={true} />
            </Link>

            <p className="text-[15px] leading-relaxed text-[#9A9A9A] font-light">
              We guide students and their families through the high-stakes decisions that shape a career —
              from Class 10 assessment to undergraduate degree, college selection, internships, and initial corporate placement.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#9A9A9A] font-light">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-[#8052FF]" />
                <a href="tel:+917795354043" className="hover:text-white transition-colors font-mono">
                  +91 77953 54043
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="size-4 text-[#15846E]" />
                <a
                  href="https://wa.me/917795354043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#15846E] transition-colors"
                >
                  WhatsApp Career Helpline
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[#8052FF]" />
                <a href="mailto:mentors@educationtocareerbridge.com" className="hover:text-white transition-colors">
                  mentors@educationtocareerbridge.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-[#8052FF]" />
                <span>Bangalore, Karnataka · India</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] text-white/50 uppercase mb-6">
              Navigation &amp; Services
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3.5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9A9A9A] hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.015]">
              <span className="text-[11px] font-mono text-[#FFB829] uppercase tracking-wider block mb-1">
                Zero Commission Principle
              </span>
              <p className="text-xs text-[#9A9A9A] leading-relaxed font-light">
                No capitation kickbacks. No forced college partnerships. Our loyalty is exclusively to the student sitting across from us.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Copyright & Disclaimers */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9A9A]/80 font-light">
          <p>© {new Date().getFullYear()} Education Bridge. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Questions → Clarity → Direction → Career
          </p>
        </div>
      </div>
    </footer>
  )
}
