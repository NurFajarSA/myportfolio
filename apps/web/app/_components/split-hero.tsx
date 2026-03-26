import { ThemeToggle } from "@/components/theme-toggle"
import { MiniTerminal } from "./mini-terminal"
import { HeroContent } from "./hero-content"

export function SplitHero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center px-6">
      <div className="absolute top-6 right-6">
        <ThemeToggle className="border-pf-border bg-pf-surface text-pf-text-primary hover:bg-pf-muted" />
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-18">
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
