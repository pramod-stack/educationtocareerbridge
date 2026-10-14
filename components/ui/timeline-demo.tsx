"use client";

import Timeline from "@/components/ui/timeline";

const settings = {
  textColor: "var(--color-foreground, #ffffff)",
  mutedTextColor: "var(--color-muted-foreground, #a1a1aa)",
  activeColor: "#00c2ff",
  backgroundColor: "var(--color-background, #0a0a0a)",
  duration: 1.4,
};

export default function TimelineDemo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  return (
    <main className="bg-background text-foreground">
      {/* Lead-in so the pinned timeline has somewhere to scroll in from. */}
      <section className="flex h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Education to Career Bridge
        </p>
        <h1 className="max-w-[18ch] text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          One Partner. Every Stage.
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Keep scrolling — the section pins, the track slides sideways, and each
          milestone draws its stem and reveals its copy as it reaches centre.
        </p>
        <span className="mt-2 animate-bounce text-muted-foreground">&darr;</span>
      </section>

      {/* Realistic usage: custom copy, a branded accent, tuned reveal speed. */}
      <Timeline
        title="One Partner. Every Stage."
        periodLabel="Class 10 — First Job Placement"
        backgroundColor={s.backgroundColor}
        textColor={s.textColor}
        mutedTextColor={s.mutedTextColor}
        activeColor={s.activeColor}
        imageUrl="/images/parents-counselling.png"
        imageAlt="Education Bridge counsellor mentoring student and parents"
        duration={s.duration}
      />

      <section className="flex h-screen items-center justify-center px-6 text-center text-sm text-muted-foreground">
        From the first assessment to final placement.
      </section>
    </main>
  );
}
