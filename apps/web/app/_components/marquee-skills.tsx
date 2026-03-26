import { data } from "@/lib/data"

export function MarqueeSkills() {
  const allSkills = data.skills.flatMap((cat) => cat.skills)
  const skillText = allSkills.join("  ·  ")
  const doubled = `${skillText}  ·  ${skillText}  ·  `

  return (
    <div className="overflow-hidden border-y border-pf-border-muted py-16 select-none md:py-20">
      <p className="mx-auto mb-8 max-w-4xl px-6 font-mono text-sm text-pf-accent">
        {"// skills.md"}
      </p>

      {/* Row 1 — left to right */}
      <div className="animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        <span className="text-xl font-bold tracking-wider text-pf-accent/80 uppercase md:text-2xl">
          {doubled}
        </span>
      </div>

      {/* Row 2 — right to left */}
      <div
        className="mt-4 animate-[marquee_30s_linear_infinite] whitespace-nowrap"
        style={{ animationDirection: "reverse" }}
      >
        <span className="text-xl font-bold tracking-wider text-pf-text-ghost uppercase md:text-2xl">
          {doubled}
        </span>
      </div>
    </div>
  )
}
