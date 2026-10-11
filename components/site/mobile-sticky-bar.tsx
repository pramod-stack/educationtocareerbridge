'use client'

import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 bg-black/90 backdrop-blur-xl border-t border-white/[0.12] sm:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2">
        <a
          href="tel:+917795354043"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-white/[0.15] bg-white/[0.05] text-xs font-normal text-white active:bg-white/[0.1]"
          title="Call Career Helpline"
        >
          <Phone className="size-3.5 text-[#8052FF]" />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/917795354043"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full border border-[#15846E]/40 bg-[#15846E]/10 text-xs font-normal text-white active:bg-[#15846E]/20"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="size-3.5 text-[#15846E]" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#book"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#8052FF] text-xs font-medium text-white shadow-[0_0_15px_rgba(128,82,255,0.4)] active:bg-[#6e3df0]"
        >
          <span>Book Free</span>
          <ArrowRight className="size-3" />
        </a>
      </div>
    </div>
  )
}
