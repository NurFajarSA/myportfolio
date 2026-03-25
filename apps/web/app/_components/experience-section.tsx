import { data } from "@/lib/data"
import { FadeIn } from "./fade-in"

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-pf-accent mb-12">
          {"// journey.md"}
        </h2>

        <div className="border-l border-pf-border-muted pl-8 space-y-16">
          {data.experience.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 100}>
              <article className="relative">
                {/* Dot on timeline */}
                <div className="absolute -left-[calc(2rem+4.5px)] top-1.5 size-2 rounded-full bg-pf-accent" />

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
                  <span className="text-pf-text-faint mx-2">·</span>
                  {exp.type}
                  <span className="text-pf-text-faint mx-2">·</span>
                  {exp.location}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-pf-text-muted leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-pf-text-faint"
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
                      className="bg-pf-muted/50 text-pf-accent px-2 py-0.5 rounded font-mono text-xs"
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
