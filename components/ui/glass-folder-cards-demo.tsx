"use client"

import GlassFolder from "@/components/ui/glass-folder-cards"

/**
 * Three folders on a desk: milk glass over a long-exposure print with a
 * key that adds files, a plain archive with a menu, and smoked glass over red
 * ink. Hover one to lean its glass toward you, click it to open it.
 */
export default function GlassFolderCardsDemo() {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-16"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.13]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative grid max-w-[1180px] grid-cols-1 items-end justify-items-center gap-x-14 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        <GlassFolder label="Engineering" art="aurora" seed={3} appearDelay={0} />
        <GlassFolder
          label="Doctors & Healthcare"
          art="none"
          action="more"
          labelPlacement="top-left"
          appearDelay={140}
          files={[
            { name: "MBBS & Surgery", meta: "5.5 Yrs · NEET-UG", art: "dusk" },
            { name: "B.Sc Nursing", meta: "4 Yrs · KEA", art: "glacier" },
            { name: "Physiotherapy (BPT)", meta: "4.5 Yrs · Merit", art: "ember" },
            { name: "Operation Theatre Tech", meta: "3.5 Yrs · Allied Health" },
          ]}
          menu={[{ label: "View Fee Matrix" }, { label: "Contact Counsellor" }, { label: "Close Folder" }]}
        />
        <GlassFolder
          label="AI & Cybersecurity"
          meta="Next-Gen Tech"
          tone="dark"
          art="ember"
          seed={11}
          action="none"
          labelPlacement="top-right"
          appearDelay={280}
          files={[
            { name: "AI & Machine Learning", meta: "B.Tech · 4 Yrs", art: "verdant" },
            { name: "Data Science & Analytics", meta: "B.Sc · 3 Yrs", art: "dusk" },
            { name: "Cybersecurity & Forensics", meta: "B.Tech · 4 Yrs", art: "aurora" },
          ]}
        />
      </div>
      <p className="relative mt-14 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        Hover to lean · Click to open · Select course to enquire
      </p>
    </div>
  )
}
