"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { data } from "@/lib/data"
import { useToggleMarkdown } from "./page-shell"

export function HeroContent() {
  const toggleMarkdown = useToggleMarkdown()

  return (
    <div>
      <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-pf-text-primary md:text-5xl lg:text-6xl">
        {data.personal.name}
      </h1>
      <div className="mt-4 space-y-1.5">
        <p className="text-lg font-medium text-pf-accent">
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
            className="text-sm text-pf-text-subtle transition-colors hover:text-pf-accent"
          >
            {link.platform}
          </a>
        ))}
      </div>
      <div className="mt-8 flex gap-4">
        <button
          onClick={toggleMarkdown}
          className="cursor-pointer font-mono text-xs text-pf-text-ghost transition-colors hover:text-pf-accent"
        >
          Are you AI? →
        </button>
        <Link
          href="/blog"
          className="font-mono text-xs text-pf-text-ghost transition-colors hover:text-pf-accent"
        >
          {"// posts.md →"}
        </Link>
      </div>
    </div>
  )
}
