"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@workspace/ui/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className={cn("size-9", className)} />

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  )
}
