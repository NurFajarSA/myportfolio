import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-svh bg-pf-bg text-pf-text-primary">
      <header className="sticky top-0 z-50 border-b border-pf-border-muted bg-pf-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-mono text-sm text-pf-text-subtle transition-colors hover:text-pf-accent"
            >
              ~/nurfajar
            </Link>
            <Link
              href="/blog"
              className="font-mono text-sm text-pf-text-subtle transition-colors hover:text-pf-accent"
            >
              {"// posts.md"}
            </Link>
          </div>
          <ThemeToggle className="border-pf-border bg-pf-surface text-pf-text-primary hover:bg-pf-muted" />
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
