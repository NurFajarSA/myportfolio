import { data } from "@/lib/data"
import { FadeIn } from "./fade-in"

export function ExperienceSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 font-mono text-sm text-pf-accent">
          {"// journey.md"}
        </h2>

        <div className="space-y-16 border-l border-pf-border-muted pl-8">
          {data.experience.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 100}>
              <article className="relative">
                {/* Dot on timeline */}
                <div className="absolute top-1.5 -left-[calc(2rem+4.5px)] size-2 rounded-full bg-pf-accent" />

                {/* Date */}
                <p className="font-mono text-sm text-pf-accent">
                  <time>{exp.startDate}</time> — <time>{exp.endDate}</time>
                </p>

                {/* Company & Role */}
                <h3 className="mt-2 text-xl font-bold text-pf-text-primary">
                  {exp.company}
                </h3>
                <p className="text-sm text-pf-text-muted">
                  {exp.role}
                  <span className="mx-2 text-pf-text-faint">·</span>
                  {exp.type}
                  <span className="mx-2 text-pf-text-faint">·</span>
                  {exp.location}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-sm leading-relaxed text-pf-text-muted before:absolute before:left-0 before:text-pf-text-faint before:content-['›']"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-pf-muted/50 px-2 py-0.5 font-mono text-xs text-pf-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
