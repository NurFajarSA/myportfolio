"use client"

import { useEffect, useState } from "react"
import { data } from "@/lib/data"

const lines = [
  { type: "command" as const, text: "cat persona.md" },
  { type: "output" as const, text: data.personal.name },
  { type: "output" as const, text: data.personal.title },
  { type: "output" as const, text: data.personal.location },
  { type: "empty" as const, text: "" },
  { type: "command" as const, text: "cat soul.md" },
  { type: "output" as const, text: data.personal.tagline },
]

export function MiniTerminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (visibleLines >= lines.length) {
      setDone(true)
      return
    }

    const line = lines[visibleLines]!

    if (line.type !== "command") {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1)
        setCurrentText("")
      }, line.type === "empty" ? 200 : 80)
      return () => clearTimeout(timer)
    }

    const fullText = line.text
    if (currentText.length < fullText.length) {
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 45)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1)
      setCurrentText("")
    }, 350)
    return () => clearTimeout(timer)
  }, [visibleLines, currentText])

  return (
    <div role="img" aria-label="Terminal showing developer profile" className="rounded-xl border border-pf-border bg-pf-surface overflow-hidden shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-pf-muted border-b border-pf-border">
        <div className="size-2.5 rounded-full bg-red-500" />
        <div className="size-2.5 rounded-full bg-yellow-500" />
        <div className="size-2.5 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] text-pf-text-subtle font-mono">
          nurfajar — ~/portfolio
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[180px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i}>
            {line.type === "command" && (
              <p>
                <span className="text-pf-accent">$</span>
                <span className="text-pf-text-body ml-2">{line.text}</span>
              </p>
            )}
            {line.type === "output" && (
              <p className="text-pf-text-muted">{line.text}</p>
            )}
            {line.type === "empty" && <p className="h-4" />}
          </div>
        ))}

        {/* Currently typing */}
        {!done && visibleLines < lines.length && lines[visibleLines]?.type === "command" && (
          <p>
            <span className="text-pf-accent">$</span>
            <span className="text-pf-text-body ml-2">{currentText}</span>
            <span className="inline-block w-1.5 h-4 bg-pf-accent animate-pulse ml-px align-middle" />
          </p>
        )}

        {/* Final cursor */}
        {done && (
          <p className="mt-1">
            <span className="text-pf-accent">$</span>
            <span className="inline-block w-1.5 h-4 bg-pf-accent animate-pulse ml-2 align-middle" />
          </p>
        )}
      </div>
    </div>
  )
}
