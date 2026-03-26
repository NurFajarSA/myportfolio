"use client"

import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export function GiscusComments() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="mt-16 border-t border-pf-border-muted pt-12">
      <p className="mb-6 font-mono text-sm text-pf-accent">
        {"// comments.md"}
      </p>
      <Giscus
        repo="nurfajar/myportfolio"
        repoId=""
        category="Blog Comments"
        categoryId=""
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme === "dark" ? "dark_dimmed" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
