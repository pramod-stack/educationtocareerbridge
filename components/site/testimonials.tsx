'use client'

import Image from 'next/image'
import { FadeUp, SplitLineReveal } from '@/components/ui/motion-text'

const testimonials = [
  {
    quote:
      'They spent two hours understanding my son before they mentioned a single college. That is when we knew this was completely different.',
    name: 'Suresh Rao',
    role: 'Parent · Hubballi',
    image: '/images/parent-1.png',
  },
  {
    quote:
      'I was ready to join a college just because my friends were going there. The comparison report changed my mind — and ultimately my starting salary.',
    name: 'Ananya S.',
    role: 'B.Com Graduate · Hyderabad',
    image: '/images/student-2.png',
  },
  {
    quote:
      'Students who come to our recruitment drives through Education Bridge arrive with genuine clarity and proof of work. Our interview conversion for them is noticeably higher.',
    name: 'Kavya Nair',
    role: 'Talent Acquisition Lead · IT Services',
    image: '/images/student-3.png',
  },
  {
    quote:
      'They helped with the education loan documents, the hostel visit, even the local bus route. My daughter never felt lost in a new city.',
    name: 'Meena & Prakash',
    role: 'Parents · Belagavi',
    image: '/images/parent-1.png',
  },
  {
    quote:
      'The mock interview rounds were harder than the real corporate interview. That is exactly what I needed in my final semester.',
    name: 'Rohit K.',
    role: 'Data Analyst · Bengaluru',
    image: '/images/student-1.png',
  },
  {
    quote:
      'Three years after admission they still call to check on my academic progress. No traditional consultancy does that.',
    name: 'Priya M.',
    role: 'Radiology Technologist · Mangaluru',
    image: '/images/student-3.png',
  },
]

export function Testimonials() {
  return (
    <section className="bg-black py-28 sm:py-36 border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <FadeUp delay={0}>
            <span className="text-[12px] font-medium tracking-[0.2em] text-[#8052FF] uppercase">
              Voices of Trust
            </span>
          </FadeUp>

          <h2 className="sr-only">4.9 out of 5. From the people who matter most.</h2>
          <SplitLineReveal
            lines={[
              '4.9 out of 5.',
              <span key="people" className="text-[#9A9A9A]">From the people who matter most.</span>,
            ]}
            className="mt-4 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]"
            lineClassName="leading-[1.05]"
            stagger={0.08}
          />

          <FadeUp delay={0.25}>
            <p className="mt-5 text-[17px] text-[#9A9A9A] leading-relaxed font-light">
              Verified feedback from students, parents, and hiring leaders across India.
            </p>
          </FadeUp>
        </div>

        {/* Editorial Quotes Grid with Huge Typography and Minimal Hairlines */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {testimonials.map((item, idx) => (
            <FadeUp key={idx} delay={0.1 + (idx % 3) * 0.08} y={20}>
              <div className="flex flex-col justify-between pt-6 border-t border-white/[0.12] group hover:border-[#8052FF]/50 transition-colors duration-300 h-full">
                {/* Huge Quote Typography */}
                <blockquote className="font-heading text-xl sm:text-2xl font-light text-white/90 leading-snug group-hover:text-white transition-colors">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                {/* Small Minimal Metadata Underneath */}
                <div className="mt-8 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={`Portrait of ${item.name}`}
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover border border-white/[0.2]"
                  />
                  <div className="flex flex-col">
                    <span className="font-heading text-sm font-normal text-white">
                      {item.name}
                    </span>
                    <span className="text-xs font-mono text-[#9A9A9A]">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
