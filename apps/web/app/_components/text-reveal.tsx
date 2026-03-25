"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@workspace/ui/lib/utils"

export function TextReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  )
}
