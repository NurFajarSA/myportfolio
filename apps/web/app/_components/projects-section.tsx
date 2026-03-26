import Link from "next/link"
import { data } from "@/lib/data"
import { blogs } from "@/lib/content"
import { TextReveal } from "./text-reveal"

export function ProjectsSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-mono text-sm text-pf-accent">
          {"// builds.md"}
        </h2>

        <div className="space-y-20">
          {data.projects.map((proj, i) => {
            const isEven = i % 2 === 1
            const blogPost = blogs.find((b) => b.projectId === proj.id && b.published)
            return (
              <TextReveal key={proj.id}>
                <article
                  className={`flex flex-col items-start gap-6 md:flex-row md:gap-12 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}
                >
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-6xl font-black text-pf-text-watermark select-none md:text-7xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pf-text-primary">
                      {blogPost ? (
                        <Link
                          href={`/${blogPost.slug}`}
                          className="transition-colors hover:text-pf-accent"
                        >
                          {proj.name} ↗
                        </Link>
                      ) : (
                        proj.name
                      )}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-pf-text-muted">
                      {proj.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-4 space-y-1">
                      {proj.highlights.map((h, j) => (
                        <li
                          key={j}
                          className={`text-sm text-pf-text-subtle ${isEven ? "md:mr-0 md:ml-auto" : ""}`}
                        >
                          <span className="text-pf-text-faint">—</span> {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}
                    >
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-pf-muted/50 px-2 py-0.5 font-mono text-xs text-pf-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TextReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
