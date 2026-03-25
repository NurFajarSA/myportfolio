"use client"

import { MapPin } from "lucide-react"
import { data } from "@/lib/data"
import { generateMarkdown } from "@/lib/generate-markdown"
import { useToggleMarkdown } from "./page-shell"

function openMd() {
  const md = generateMarkdown()
  const blob = new Blob([md], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  window.open(url, "_blank")
}

export function HeroContent() {
  const toggleMarkdown = useToggleMarkdown()

  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pf-text-primary leading-[1.1]">
        {data.personal.name}
      </h1>
      <div className="mt-4 space-y-1.5">
        <p className="text-lg text-pf-accent font-medium">
          {data.personal.title}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-pf-text-muted">
          <MapPin className="size-3.5" />
          {data.personal.location}
        </p>
      </div>
      <div className="mt-6 flex gap-4">
        {data.personal.socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-pf-text-subtle hover:text-pf-accent transition-colors"
          >
            {link.platform}
          </a>
        ))}
      </div>
      <div className="mt-8 flex gap-4">
        <button
          onClick={toggleMarkdown}
          className="text-xs font-mono text-pf-text-ghost hover:text-pf-accent transition-colors cursor-pointer"
        >
          Are you AI? →
        </button>
        {/* <button
          onClick={openMd}
          className="text-xs font-mono text-pf-text-ghost hover:text-pf-accent transition-colors cursor-pointer"
        >
          ↗ human.md
        </button> */}
      </div>
    </div>
  )
}
