"use client"

import { useEffect, useState } from "react"
import type { TocEntry } from "@/lib/toc"

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (intersections) => {
        for (const entry of intersections) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 }
    )

    for (const { id } of entries) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [entries])

  if (entries.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="space-y-1">
      <p className="mb-3 text-xs uppercase tracking-wider text-pf-text-faint">
        On this page
      </p>
      {entries.map((entry) => (
        <a
          key={entry.id}
          href={`#${entry.id}`}
          className={`block text-sm transition-colors ${
            entry.level === 3 ? "pl-4" : entry.level === 4 ? "pl-8" : ""
          } ${
            activeId === entry.id
              ? "text-pf-accent"
              : "text-pf-text-muted hover:text-pf-text-primary"
          }`}
        >
          {entry.text}
        </a>
      ))}
    </nav>
  )
}
