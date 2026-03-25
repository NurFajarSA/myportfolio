import { ThemeToggle } from "@/components/theme-toggle"
import { MiniTerminal } from "./mini-terminal"
import { HeroContent } from "./hero-content"

export function SplitHero() {
  return (
    <section className="min-h-svh flex flex-col justify-center relative px-6">
      <div className="absolute top-6 right-6">
        <ThemeToggle className="border-pf-border bg-pf-surface text-pf-text-primary hover:bg-pf-muted" />
      </div>

      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-18 items-center">
        {/* Left — Interactive content */}
        <HeroContent />

        {/* Right — Mini terminal */}
        <div>
          <MiniTerminal />
        </div>
      </div>
    </section>
  )
}
