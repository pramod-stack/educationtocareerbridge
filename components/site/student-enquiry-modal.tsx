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

/**
 * Global helper to trigger the enquiry modal for a specific course
 */
export function openCourseEnquiry(courseName: string, streamName?: string) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('open-course-enquiry', {
        detail: { courseName, streamName },
      })
    )
  }
}

export function StudentEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasDismissed, setHasDismissed] = useState(false)
  const [selectedCourseName, setSelectedCourseName] = useState<string>('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [currentEducation, setCurrentEducation] = useState('')
  const [targetStream, setTargetStream] = useState('Engineering & Technology')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // 1. Listen for custom course selection events ("if he select the course it should ask more info contact us")
  useEffect(() => {
    const handleCourseSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ courseName?: string; streamName?: string }>
      if (customEvent.detail?.courseName) {
        setSelectedCourseName(customEvent.detail.courseName)
      }
      if (customEvent.detail?.streamName) {
        setTargetStream(customEvent.detail.streamName)
      }
      setIsSubmitted(false)
      setError('')
      setIsOpen(true)
    }

    window.addEventListener('open-course-enquiry', handleCourseSelect)
    return () => window.removeEventListener('open-course-enquiry', handleCourseSelect)
  }, [])

  // 2. 5-Second popup trigger after viewer visits the website
  useEffect(() => {
    const submitted = localStorage.getItem('eb_enquiry_submitted')
    if (submitted) return

    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem('eb_enquiry_seen')
      if (!seen && !hasDismissed) {
        setIsOpen(true)
      }
    }, 5000)

    // Also support scroll trigger as fallback
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

      const section4 = document.getElementById('journey')
      let passedSection4 = false
      if (section4) {
        const rect = section4.getBoundingClientRect()
        if (rect.bottom < window.innerHeight * 0.7) {
          passedSection4 = true
        }
      }

      if ((scrollPercent > 35 || passedSection4) && !hasDismissed && !isOpen) {
        setIsOpen(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
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

    // Prepare WhatsApp message for Founder Manjunath PK
    const courseText = selectedCourseName ? `\n• Specific Course: ${selectedCourseName}` : ''
    const waMessage = encodeURIComponent(
      `Hello Education to Career Bridge!\n\nI want more info & admission guidance:\n• Name: ${name.trim()}\n• Contact: ${phone.trim()}\n• Current Education: ${currentEducation}\n• Interested Stream: ${targetStream}${courseText}\n\nPlease share Bangalore colleges fee matrix, scholarship eligibility and seat availability.`
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-primary/30 bg-card p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)] text-card-foreground my-auto [scrollbar-width:thin]">
        {/* Subtle Ambient Radial Highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/15 blur-3xl"
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card transition-colors z-20 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="size-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header Badge & Title */}
            <div className="flex items-center gap-2 mb-3">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-primary uppercase font-medium">
                {selectedCourseName ? 'Course Enquiry & Contact Us' : '5-Sec Welcome · Free Career Guidance'}
              </span>
            </div>

            <h3
              id="enquiry-modal-title"
              className="font-heading text-2xl sm:text-3xl font-normal text-foreground leading-tight"
            >
              {selectedCourseName
                ? `Get More Info & Contact Us for ${selectedCourseName}`
                : 'Find the Right Course & College in Bangalore.'}
            </h3>

            {selectedCourseName ? (
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                <Sparkles className="size-3.5" />
                <span>Selected Course: {selectedCourseName}</span>
              </div>
            ) : null}

            <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              Tell us your current study background. Founder Manjunath PK and our senior counsellors will share verified seat matrix, fee structures, and college comparisons.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {error && (
                <div className="p-3 rounded-xl border border-destructive/30 bg-destructive/10 text-xs text-destructive">
                  {error}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <User className="size-3.5 text-primary" />
                  <span>Your Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/90 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              {/* Contact Number Field */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <Phone className="size-3.5 text-primary" />
                  <span>WhatsApp / Contact Number *</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-mono text-muted-foreground">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-input bg-background/90 pl-12 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-mono"
                  />
                </div>
              </div>

              {/* Current Education Pursuing Field */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="size-3.5 text-primary" />
                  <span>Current Education Pursuing *</span>
                </label>
                <select
                  required
                  value={currentEducation}
                  onChange={(e) => setCurrentEducation(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/90 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="" disabled className="bg-card text-muted-foreground">
                    Select your current status...
                  </option>
                  {educationOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-card text-foreground">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Stream / Interested Field */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="size-3.5 text-primary" />
                  <span>Target Stream / Discipline</span>
                </label>
                <select
                  value={targetStream}
                  onChange={(e) => setTargetStream(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/90 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                >
                  {streamPreferences.map((stream) => (
                    <option key={stream} value={stream} className="bg-card text-foreground">
                      {stream}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-violet-hover transition-all shadow-[0_0_25px_rgba(128,82,255,0.4)] cursor-pointer"
                >
                  <span>{selectedCourseName ? 'Ask More Info & Contact Us' : 'Get Free Admission Guidance'}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>

              {/* Trust assurance & dismiss */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-teal" />
                  <span>100% Confidential · Zero Sales Pressure</span>
                </span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:text-foreground underline underline-offset-2 cursor-pointer"
                >
                  Ask me later
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="size-16 rounded-full bg-primary/15 border border-primary/40 text-primary mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(128,82,255,0.3)]">
              <CheckCircle2 className="size-8" />
            </div>

            <h3 className="font-heading text-2xl font-normal text-foreground">
              Thank You, {name}!
            </h3>

            <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
              We received your enquiry{selectedCourseName ? ` for ${selectedCourseName}` : ''}. Founder Manjunath PK is reviewing verified Bangalore college options for you.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/917795354043?text=${encodeURIComponent(
                  `Hi Education Bridge, I submitted an enquiry for ${currentEducation}${
                    selectedCourseName ? ` regarding ${selectedCourseName}` : ''
                  }.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-medium text-white bg-primary hover:bg-violet-hover transition-all"
              >
                <MessageCircle className="size-4" />
                <span>Continue on WhatsApp (+91 77953 54043)</span>
              </a>

              <button
                onClick={handleClose}
                className="py-2.5 text-xs text-muted-foreground hover:text-foreground font-mono cursor-pointer"
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
