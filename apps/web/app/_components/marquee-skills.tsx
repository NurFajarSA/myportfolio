import { data } from "@/lib/data"

export function MarqueeSkills() {
  const allSkills = data.skills.flatMap((cat) => cat.skills)
  const skillText = allSkills.join("  ·  ")
  const doubled = `${skillText}  ·  ${skillText}  ·  `

  return (
    <div className="py-16 md:py-20 border-y border-pf-border-muted overflow-hidden select-none">
      <p className="font-mono text-sm text-pf-accent mb-8 px-6 max-w-4xl mx-auto">
        {"// skills.md"}
      </p>

      {/* Row 1 — left to right */}
      <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-pf-accent/80">
          {doubled}
        </span>
      </div>

      {/* Row 2 — right to left */}
      <div
        className="whitespace-nowrap animate-[marquee_30s_linear_infinite] mt-4"
        style={{ animationDirection: "reverse" }}
      >
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-pf-text-ghost">
          {doubled}
        </span>
      </div>
    </div>
  )
}
