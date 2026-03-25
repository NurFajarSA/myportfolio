"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@workspace/ui/lib/utils"

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
