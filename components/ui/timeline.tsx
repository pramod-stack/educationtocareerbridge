"use client";

import React, {
  type CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Building,
  GraduationCap,
  Home,
  Code2,
  Briefcase,
  Trophy,
  ArrowRight,
  PhoneCall,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

export type Month = keyof typeof monthOrder;

export type JourneyItem = {
  id: string;
  year: string;
  month: Month;
  content: string;
  stageBadge?: string;
  phase?: string;
  deliverable?: string;
  icon?: React.ElementType;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  topItems?: JourneyItem[];
  bottomItems?: JourneyItem[];
  duration?: number;
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );
}

export const defaultTopJourneyData: JourneyItem[] = [
  {
    id: "stage-1",
    year: "Stage 01",
    month: "March",
    stageBadge: "Stage 01 · Profiling",
    phase: "Cognitive Assessment",
    content: "Scientific aptitude, personality mapping & 90-minute psychometric evaluation to identify genuine strengths.",
    deliverable: "Deliverable: Cognitive Blueprint & 3 Feasible Streams",
    icon: Brain,
  },
  {
    id: "stage-3",
    year: "Stage 03",
    month: "April",
    stageBadge: "Stage 03 · Admission",
    phase: "Zero-Capitation Entry",
    content: "Transparent application filing, counselling quota navigation, merit scholarships & verified fee paperwork.",
    deliverable: "Deliverable: Formal Admission & Zero Surprise Fees",
    icon: GraduationCap,
  },
  {
    id: "stage-5",
    year: "Stage 05",
    month: "November",
    stageBadge: "Stage 05 · Skills",
    phase: "Academic Years 1 & 2",
    content: "Semester-by-semester industry roadmaps, certifications, hackathons & verifiable GitHub proof of work.",
    deliverable: "Deliverable: Industry-Ready Tech & Skill Stack",
    icon: Code2,
  },
  {
    id: "stage-7",
    year: "Stage 07",
    month: "September",
    stageBadge: "Stage 07 · Placement",
    phase: "Career Launch",
    content: "Campus placement selection, multi-offer evaluation, salary negotiation & first 90-days corporate onboarding.",
    deliverable: "Deliverable: First High-Growth Job Offer & Alumni Network",
    icon: Trophy,
  },
];

export const defaultBottomJourneyData: JourneyItem[] = [
  {
    id: "stage-2",
    year: "Stage 02",
    month: "July",
    stageBadge: "Stage 02 · Verification",
    phase: "College Due Diligence",
    content: "Independent audit of real median placements, laboratory equipment, faculty retention & return on investment.",
    deliverable: "Deliverable: Audited Fact-Sheet vs Brochure Claims",
    icon: Building,
  },
  {
    id: "stage-4",
    year: "Stage 04",
    month: "May",
    stageBadge: "Stage 04 · Living",
    phase: "Campus Transition",
    content: "Physical hostel inspection, hygienic dining audits, neighborhood safety checks & local guardian support in Bengaluru.",
    deliverable: "Deliverable: Inspected Accommodation & Local Emergency Contact",
    icon: Home,
  },
  {
    id: "stage-6",
    year: "Stage 06",
    month: "October",
    stageBadge: "Stage 06 · Internships",
    phase: "Pre-Placement Years 3 & 4",
    content: "Corporate referrals, resume architecture, algorithmic mocks & executive communication coaching.",
    deliverable: "Deliverable: Minimum 1 Tier-1 Corporate Internship",
    icon: Briefcase,
  },
];

export default function Timeline({
  title = "One Partner. Every Stage.",
  periodLabel = "Class 10 — First Job Placement",
  textColor = "var(--color-foreground, #ffffff)",
  mutedTextColor = "var(--color-muted-foreground, #94a3b8)",
  activeColor = "#00c2ff",
  backgroundColor = "var(--color-background, #000000)",
  imageUrl = "/images/parents-counselling.png",
  imageAlt = "Education Bridge counsellor mentoring student and parents",
  topItems = defaultTopJourneyData,
  bottomItems = defaultBottomJourneyData,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = wholeSliderRef.current;
    const progressBar = progressBarRef.current;

    if (!section || !slider) return;

    if (reducedMotion) {
      if (progressBar) progressBar.style.width = "100%";
      return;
    }

    // Measure exact scroll amount dynamically
    const computeDistance = () => {
      const scrollWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;
      return Math.max(0, scrollWidth - viewportWidth + 80);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${computeDistance()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
      defaults: { ease: "none" },
    });

    tl.to(slider, {
      x: () => -computeDistance(),
      ease: "none",
    });

    if (progressBar) {
      tl.to(
        progressBar,
        {
          width: "100%",
          ease: "none",
        },
        0
      );
    }

    const refreshHandler = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", refreshHandler);
    return () => {
      window.removeEventListener("resize", refreshHandler);
    };
  }, { dependencies: [reducedMotion], scope: sectionRef });

  // Interleave milestones: Stage 01 (top), Stage 02 (bottom), Stage 03 (top), ...
  const interleavedMilestones = [
    { item: topItems[0], position: "top" as const, index: 1 },
    { item: bottomItems[0], position: "bottom" as const, index: 2 },
    { item: topItems[1], position: "top" as const, index: 3 },
    { item: bottomItems[1], position: "bottom" as const, index: 4 },
    { item: topItems[2], position: "top" as const, index: 5 },
    { item: bottomItems[2], position: "bottom" as const, index: 6 },
    { item: topItems[3], position: "top" as const, index: 7 },
  ];

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative w-full overflow-hidden bg-black border-t border-b border-white/[0.08]"
      style={sectionStyle}
    >
      {/* Viewport Frame with vertical centering */}
      <div className="h-screen w-full flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-8 relative overflow-hidden">
        {/* Subtle background ambient radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,194,255,0.08),transparent_70%)]"
        />

        {/* Top Header Row within the pinned frame */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#00C2FF] animate-pulse" />
              <span className="text-[12px] font-mono tracking-[0.2em] text-[#00C2FF] uppercase font-medium">
                One Partner · Every Stage
              </span>
            </div>
            <h2 className="mt-1 font-heading text-2xl sm:text-4xl text-white font-normal tracking-tight">
              {title}
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <span className="font-mono text-xs text-[#56D8E7] tracking-wider uppercase">
              {periodLabel}
            </span>
            <span className="text-xs text-[#94A3B8] font-light mt-0.5 flex items-center gap-1.5">
              <span>Scroll down to navigate trajectory</span>
              <ArrowRight className="size-3 text-[#00C2FF]" />
            </span>
          </div>
        </div>

        {/* Central Scrolling Canvas & Track */}
        <div className="relative w-full flex-1 flex items-center overflow-visible">
          {/* Main Horizontal Track Slider */}
          <div
            ref={wholeSliderRef}
            className="flex items-center gap-6 sm:gap-10 shrink-0 will-change-transform pr-16"
          >
            {/* 00. Anchor Lead Card */}
            <div className="w-[300px] sm:w-[360px] h-[440px] shrink-0 rounded-2xl border border-white/10 bg-[#070e17] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between relative group">
              <div className="relative h-1/2 w-full overflow-hidden">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  draggable={false}
                  className="h-full w-full object-cover filter contrast-[1.05] brightness-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e17] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider bg-black/70 backdrop-blur-md text-[#56D8E7] border border-white/10">
                  Continuous Stewardship
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl text-white font-normal leading-snug">
                    The journey doesn’t end at admission. Neither do we.
                  </h3>
                  <p className="mt-2 text-[13px] text-[#94A3B8] font-light leading-relaxed">
                    Most consultancies disappear once fees are collected. We architect your roadmap through college academics, internships, and final campus placement.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#00C2FF]">
                  <span>7 Milestone Stages</span>
                  <span className="flex items-center gap-1 text-[#94A3B8]">
                    Explore track <ArrowRight className="size-3 text-[#00C2FF]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Central Timeline Axis & Interleaved Milestone Cards */}
            <div className="relative h-[440px] flex items-center shrink-0">
              {/* Continuous Centerline Track across all milestones */}
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/[0.12] z-0"
              >
                {/* Active Progress Gradient Overlay */}
                <div
                  ref={progressBarRef}
                  className="h-full bg-gradient-to-r from-[#00C2FF] via-[#56D8E7] to-[#8052FF] shadow-[0_0_12px_rgba(0,194,255,0.8)] w-[15%]"
                />
              </div>

              {/* Milestone Columns */}
              <div className="relative z-10 flex items-center gap-8 sm:gap-12">
                {interleavedMilestones.map(({ item, position, index }) => {
                  if (!item) return null;
                  const Icon = item.icon || Sparkles;
                  const isTop = position === "top";

                  return (
                    <div
                      key={item.id}
                      className="relative w-[300px] sm:w-[330px] h-[440px] shrink-0 flex flex-col items-center justify-center select-none"
                    >
                      {/* TOP HALF: Card if top, empty if bottom */}
                      <div className="h-[190px] w-full flex flex-col justify-end">
                        {isTop && (
                          <div className="w-full rounded-2xl border border-white/10 bg-[#070e17]/90 backdrop-blur-md p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:border-[#00C2FF]/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider text-[#00C2FF] bg-[#00C2FF]/10 border border-[#00C2FF]/20">
                                <span className="size-1.5 rounded-full bg-[#00C2FF]" />
                                {item.stageBadge || `Stage 0${index}`}
                              </span>
                              <Icon className="size-4 text-[#56D8E7] opacity-80 group-hover:scale-110 transition-transform" />
                            </div>

                            <h4 className="mt-2.5 font-heading text-[16px] sm:text-[17px] font-normal text-white tracking-tight line-clamp-1">
                              {item.phase || item.year}
                            </h4>
                            <p className="mt-1 text-[12.5px] leading-relaxed text-[#94A3B8] font-light line-clamp-2">
                              {item.content}
                            </p>

                            {item.deliverable && (
                              <div className="mt-2.5 pt-2 border-t border-white/[0.06] text-[10.5px] font-mono text-[#56D8E7] truncate">
                                {item.deliverable}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* CENTER CONNECTOR & NODE */}
                      <div className="relative h-[60px] w-full flex items-center justify-center">
                        {/* Stem Line to Card */}
                        {isTop ? (
                          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[2px] h-[26px] bg-gradient-to-t from-[#00C2FF] to-[#00C2FF]/20" />
                        ) : (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[2px] h-[26px] bg-gradient-to-b from-[#00C2FF] to-[#00C2FF]/20" />
                        )}

                        {/* Central Glowing Milestone Dot */}
                        <div
                          className="relative z-20 size-6 rounded-full border-2 border-[#00C2FF] bg-[#070e17] flex items-center justify-center shadow-[0_0_16px_rgba(0,194,255,0.8)] cursor-pointer group"
                          title={item.phase}
                        >
                          <div className="size-2 rounded-full bg-[#00C2FF] transition-transform duration-300 group-hover:scale-125" />
                        </div>
                      </div>

                      {/* BOTTOM HALF: Card if bottom, empty if top */}
                      <div className="h-[190px] w-full flex flex-col justify-start">
                        {!isTop && (
                          <div className="w-full rounded-2xl border border-white/10 bg-[#070e17]/90 backdrop-blur-md p-4 sm:p-5 shadow-[0_12px_36px_rgba(0,0,0,0.6)] hover:border-[#00C2FF]/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider text-[#00C2FF] bg-[#00C2FF]/10 border border-[#00C2FF]/20">
                                <span className="size-1.5 rounded-full bg-[#00C2FF]" />
                                {item.stageBadge || `Stage 0${index}`}
                              </span>
                              <Icon className="size-4 text-[#56D8E7] opacity-80 group-hover:scale-110 transition-transform" />
                            </div>

                            <h4 className="mt-2.5 font-heading text-[16px] sm:text-[17px] font-normal text-white tracking-tight line-clamp-1">
                              {item.phase || item.year}
                            </h4>
                            <p className="mt-1 text-[12.5px] leading-relaxed text-[#94A3B8] font-light line-clamp-2">
                              {item.content}
                            </p>

                            {item.deliverable && (
                              <div className="mt-2.5 pt-2 border-t border-white/[0.06] text-[10.5px] font-mono text-[#56D8E7] truncate">
                                {item.deliverable}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* 08. Concluding Milestone & Direct CTA Card */}
                <div className="w-[300px] sm:w-[340px] h-[440px] shrink-0 rounded-2xl border border-[#00C2FF]/40 bg-gradient-to-b from-[#070e17] via-[#0A1624] to-[#04080e] p-6 shadow-[0_20px_50px_rgba(0,194,255,0.15)] flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#56D8E7] bg-[#00C2FF]/10 border border-[#00C2FF]/30">
                      Lifetime Partnership
                    </span>
                    <h3 className="mt-4 font-heading text-2xl text-white font-normal leading-snug">
                      Your career trajectory starts with one honest conversation.
                    </h3>
                    <p className="mt-2.5 text-[13px] text-[#94A3B8] font-light leading-relaxed">
                      Zero commissions, verified facts, and continuous guidance until your first day at work.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                    <a
                      href="https://wa.me/917795354043?text=Hi%20Education%20to%20Career%20Bridge%2C%20I%20would%20like%20guidance%20on%20my%20career%20and%20college%20options."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-black bg-[#00C2FF] hover:bg-[#56D8E7] transition-all shadow-[0_0_20px_rgba(0,194,255,0.4)]"
                    >
                      <PhoneCall className="size-4" />
                      <span>WhatsApp +91 77953 54043</span>
                    </a>
                    <a
                      href="#booking"
                      className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-mono text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/20 transition-all"
                    >
                      Book 45-Min Discovery Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status & Scroll Indicator */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-between text-xs text-[#94A3B8] font-mono pt-2 border-t border-white/[0.06]">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#00C2FF]" />
            <span>Continuous Guidance Across 7 Stages</span>
          </span>
          <span className="text-[#56D8E7]">Class 10 · Pre-Admission · Degree · Corporate Career</span>
        </div>
      </div>
    </section>
  );
}
