import { data } from "@/lib/data"
import { TextReveal } from "./text-reveal"

export function ProjectsSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-pf-accent mb-12">
          {"// builds.md"}
        </h2>

        <div className="space-y-20">
          {data.projects.map((proj, i) => {
            const isEven = i % 2 === 1
            return (
              <TextReveal key={proj.id}>
                <article
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}
                >
                  {/* Number */}
                  <div className="shrink-0">
                    <span className="text-6xl md:text-7xl font-black text-pf-text-watermark select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pf-text-primary">
                      {proj.name}
                    </h3>
                    <p className="mt-3 text-sm text-pf-text-muted leading-relaxed">
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
                          className="bg-pf-muted/50 text-pf-accent px-2 py-0.5 rounded font-mono text-xs"
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
