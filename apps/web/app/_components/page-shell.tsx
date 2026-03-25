"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { MarkdownPage } from "./markdown-page"

const ToggleContext = createContext<() => void>(() => {})

export const useToggleMarkdown = () => useContext(ToggleContext)

export function PageShell({ children }: { children: ReactNode }) {
  const [showMarkdown, setShowMarkdown] = useState(false)

  if (showMarkdown) {
    return (
      <MarkdownPage
        onBack={() => {
          setShowMarkdown(false)
          window.scrollTo(0, 0)
        }}
      />
    )
  }

  return (
    <ToggleContext value={() => {
      setShowMarkdown(true)
      window.scrollTo(0, 0)
    }}>
      {children}
    </ToggleContext>
  )
}
