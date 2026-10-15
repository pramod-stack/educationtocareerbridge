'use client'

import React, { useState, useEffect } from 'react'
import {
  X,
  GraduationCap,
  Phone,
  User,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react'

const educationOptions = [
  '10th Standard / SSLC',
  '1st PUC / 11th Standard',
  '2nd PUC / 12th (Science - PCMB/PCMC)',
  '2nd PUC / 12th (Commerce)',
  '2nd PUC / 12th (Arts)',
  'Diploma / Polytechnic (Lateral Entry)',
  'Undergraduate Degree (B.Sc / B.Com / B.E / BCA)',
  'Other / Working Professional',
]

const streamPreferences = [
  'Engineering & Technology',
  'Doctors, Nursing & Allied Health',
  'Artificial Intelligence & Data Science',
  'Management (BBA / MBA)',
  'Commerce & Finance (B.Com / CA / ACCA)',
  'Law & Legal Studies (BA LL.B)',
  'Design & Animation',
  'Hospitality & Aviation',
  'Agriculture & Food Tech',
]

export function StudentEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [currentEducation, setCurrentEducation] = useState('')
  const [targetStream, setTargetStream] = useState('Engineering & Technology')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if user already submitted or dismissed in this session
    const seen = sessionStorage.getItem('eb_enquiry_seen')
    const submitted = localStorage.getItem('eb_enquiry_submitted')
    if (seen || submitted) {
      setHasDismissed(true)
      return
    }

    const handleScroll = () => {
      // Trigger after scrolling past approximately the 4th section (or around 32% scroll height)
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      // Also check if the 4th section element (journey timeline) has been scrolled past
      const section4 = document.getElementById('journey')
      let passedSection4 = false
      if (section4) {
        const rect = section4.getBoundingClientRect()
        // If bottom of section 4 has scrolled past the top half of viewport
        if (rect.bottom < window.innerHeight * 0.7) {
          passedSection4 = true
        }
      }

      if ((scrollPercent > 30 || passedSection4) && !hasDismissed && !isOpen) {
        setIsOpen(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasDismissed, isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setHasDismissed(true)
    sessionStorage.setItem('eb_enquiry_seen', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError('Please provide your name.')
      return
    }

    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.')
      return
    }

    if (!currentEducation) {
      setError('Please select your current education.')
      return
    }

    setError('')
    setIsSubmitted(true)
    localStorage.setItem('eb_enquiry_submitted', 'true')

    // Prepare WhatsApp message
    const waMessage = encodeURIComponent(
      `Hello Education to Career Bridge!\n\nI just filled the student enquiry form:\n• Name: ${name.trim()}\n• Contact: ${phone.trim()}\n• Current Education: ${currentEducation}\n• Interested Stream: ${targetStream}\n\nPlease share course, fee structure and admission guidance for Bangalore colleges.`
    )

    // Automatically prompt WhatsApp after short delay
    setTimeout(() => {
      window.open(`https://wa.me/917795354043?text=${waMessage}`, '_blank')
    }, 1200)
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-[#00C2FF]/30 bg-[#070e17] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,194,255,0.2)] text-white my-auto [scrollbar-width:thin]">
        {/* Subtle Ambient Radial Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[#00C2FF]/15 blur-3xl"
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header Badge & Title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="size-2 rounded-full bg-[#00C2FF] animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] uppercase font-medium">
                Free Academic &amp; Admission Counselling
              </span>
            </div>

            <h3
              id="enquiry-modal-title"
              className="font-heading text-2xl sm:text-3xl font-normal text-white leading-tight"
            >
              Find the Right Course &amp; College in Bangalore.
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Tell us your current study background. Founder Manjunath PK and our senior counsellors will help map verified colleges, quota seats, and fee structures.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {error && (
                <div className="p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-xs text-red-300">
                  {error}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <User className="size-3.5 text-[#00C2FF]" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#00C2FF] focus:outline-none focus:ring-1 focus:ring-[#00C2FF] transition-all"
                />
              </div>

              {/* Contact Number Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Phone className="size-3.5 text-[#00C2FF]" />
                  <span>WhatsApp / Contact Number *</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-mono text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 pl-12 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#00C2FF] focus:outline-none focus:ring-1 focus:ring-[#00C2FF] transition-all font-mono"
                  />
                </div>
              </div>

              {/* Current Education Pursuing Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="size-3.5 text-[#00C2FF]" />
                  <span>Current Education Pursuing *</span>
                </label>
                <select
                  required
                  value={currentEducation}
                  onChange={(e) => setCurrentEducation(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/80 px-4 py-3 text-sm text-white focus:border-[#00C2FF] focus:outline-none focus:ring-1 focus:ring-[#00C2FF] transition-all"
                >
                  <option value="" disabled className="bg-[#070e17] text-slate-400">
                    Select your current status...
                  </option>
                  {educationOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#070e17] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Stream / Interested Field */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="size-3.5 text-[#00C2FF]" />
                  <span>Target Stream / Course Interested In</span>
                </label>
                <select
                  value={targetStream}
                  onChange={(e) => setTargetStream(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black/80 px-4 py-3 text-sm text-white focus:border-[#00C2FF] focus:outline-none focus:ring-1 focus:ring-[#00C2FF] transition-all"
                >
                  {streamPreferences.map((stream) => (
                    <option key={stream} value={stream} className="bg-[#070e17] text-white">
                      {stream}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-[#0F9F9A] via-[#00C2FF] to-[#56D8E7] hover:opacity-95 transition-all shadow-[0_0_25px_rgba(0,194,255,0.4)] cursor-pointer"
                >
                  <span>Get Free Admission Guidance</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {/* Trust assurance & dismiss */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-[#0F9F9A]" />
                  <span>100% Confidential · Zero Sales Pressure</span>
                </span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:text-white underline underline-offset-2"
                >
                  Ask me later
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="size-16 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/40 text-[#00C2FF] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,194,255,0.3)]">
              <CheckCircle2 className="size-8" />
            </div>

            <h3 className="font-heading text-2xl font-normal text-white">
              Thank You, {name}!
            </h3>

            <p className="text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
              We received your details for <strong>{currentEducation}</strong>. Our senior counsellor Manjunath PK is reviewing verified Bangalore college options for you.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/917795354043?text=${encodeURIComponent(
                  `Hi Education Bridge, I submitted the enquiry form for ${currentEducation} interested in ${targetStream}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-medium text-black bg-[#00C2FF] hover:bg-[#56D8E7] transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Continue on WhatsApp (+91 77953 54043)</span>
              </a>

              <button
                onClick={handleClose}
                className="py-2.5 text-xs text-slate-400 hover:text-white font-mono"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
