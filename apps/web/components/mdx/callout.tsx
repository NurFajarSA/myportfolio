import { cn } from "@workspace/ui/lib/utils"

const variants = {
  info: "border-pf-accent/30 bg-pf-accent/5",
  warning: "border-yellow-500/30 bg-yellow-500/5",
  tip: "border-emerald-500/30 bg-emerald-500/5",
} as const

interface CalloutProps {
  type?: keyof typeof variants
  children: React.ReactNode
}

export function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-2 p-4 text-sm text-pf-text-body",
        variants[type]
      )}
    >
      {children}
    </div>
  )
}
