'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { BrandLogo } from '@/components/site/brand-logo'
import { cn } from '@/lib/utils'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/colleges', label: 'Colleges' },
  { href: '/careers', label: 'Careers' },
  { href: '/#simulator', label: 'Simulator' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <a
          href="/"
          className="group flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#8052FF]"
        >
          <BrandLogo />
        </a>

        {/* Center: Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-1.5 text-[13.5px] font-normal text-[#9A9A9A] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTAs */}
        <div className="hidden items-center gap-4 sm:flex">
          {/* Quick Phone Call */}
          <a
            href="tel:+917795354043"
            className="flex items-center gap-2 text-[13px] text-[#9A9A9A] transition-colors hover:text-white"
            title="Call career helpline"
          >
            <Phone className="size-3.5 text-[#8052FF]" />
            <span className="font-mono">7795354043</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/917795354043"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/[0.08] text-[#9A9A9A] hover:text-[#15846E] hover:border-[#15846E]/40 transition-colors"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="size-4" />
          </a>

          {/* Primary CTA: Signature Violet Pill */}
          <a
            href="#book"
            className="relative inline-flex items-center justify-center rounded-full bg-[#8052FF] px-5 py-2.5 text-[13.5px] font-medium text-white transition-all duration-300 hover:bg-[#6e3df0] shadow-[0_0_24px_rgba(128,82,255,0.4)] hover:shadow-[0_0_32px_rgba(128,82,255,0.65)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book Free Counselling</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid size-10 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
        </button>
      </div>

      {/* Mobile Full-Screen Editorial Overlay */}
      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[68px] z-40 flex flex-col justify-between bg-black px-6 py-8 border-t border-white/[0.08] lg:hidden overflow-y-auto animate-in fade-in duration-200"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#9A9A9A] uppercase mb-2">
              Navigation
            </span>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2 text-2xl font-heading font-normal text-white hover:text-[#8052FF] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="size-4 text-[#9A9A9A]" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-col gap-4">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-[#8052FF] py-3.5 text-center text-sm font-medium text-white shadow-[0_0_25px_rgba(128,82,255,0.4)]"
            >
              Book Free Career Counselling
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+917795354043"
                className="flex items-center justify-center gap-2 rounded-full border border-white/[0.12] py-3 text-xs text-white hover:bg-white/[0.05]"
              >
                <Phone className="size-3.5 text-[#8052FF]" />
                Call 7795354043
              </a>
              <a
                href="https://wa.me/917795354043"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/[0.12] py-3 text-xs text-white hover:bg-white/[0.05]"
              >
                <MessageCircle className="size-3.5 text-[#15846E]" />
                WhatsApp
              </a>
            </div>

            <p className="text-center text-[11px] text-[#9A9A9A] font-light mt-2">
              Free 45-min session · Kannada, English & Hindi · No pressure
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
