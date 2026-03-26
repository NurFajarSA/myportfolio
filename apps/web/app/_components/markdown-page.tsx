import { data } from "@/lib/data"
import { generateMarkdown } from "@/lib/generate-markdown"

function openMd() {
  const md = generateMarkdown()
  const blob = new Blob([md], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  window.open(url, "_blank")
}

function Ln({ children }: { children?: React.ReactNode }) {
  return <div className="min-h-6">{children}</div>
}

export function MarkdownPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-svh bg-pf-bg">
      {/* Top bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-pf-border-muted bg-pf-muted/80 px-6 py-3 backdrop-blur-sm">
        <span className="font-mono text-xs text-pf-text-subtle">human.md</span>
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="cursor-pointer font-mono text-xs text-pf-text-faint transition-colors hover:text-pf-accent"
          >
            ← render as html
          </button>
          <button
            onClick={openMd}
            className="cursor-pointer font-mono text-xs text-pf-text-faint transition-colors hover:text-pf-accent"
          >
            ↗ raw
          </button>
        </div>
      </div>

      {/* Markdown content */}
      <div className="mx-auto max-w-3xl px-6 py-12 font-mono text-sm leading-relaxed break-words text-pf-text-body">
        {/* Comment */}
        <Ln>
          <span className="text-pf-text-ghost italic">
            {"<!-- I'm not AI — I just think in .md -->"}
          </span>
        </Ln>
        <Ln />

        {/* Title */}
        <Ln>
          <span className="text-pf-accent"># </span>
          <span className="text-lg font-bold text-pf-text-primary">
            {data.personal.name}
          </span>
        </Ln>
        <Ln />

        {/* Subtitle */}
        <Ln>
          <span className="text-pf-accent">**</span>
          <span className="font-semibold text-pf-text-secondary">
            {data.personal.title}
          </span>
          <span className="text-pf-accent">**</span>
          <span className="text-pf-text-faint"> · </span>
          <span className="text-pf-text-muted">
            📍 {data.personal.location}
          </span>
        </Ln>
        <Ln />

        {/* Tagline */}
        <Ln>
          <span className="text-pf-text-faint">{">"} </span>
          <span className="italic">{data.personal.tagline}</span>
        </Ln>
        <Ln />

        <Ln>
          <span className="text-pf-text-ghost">---</span>
        </Ln>
        <Ln />

        {/* soul.md */}
        <Ln>
          <span className="text-pf-accent">## </span>
          <span className="font-bold text-pf-text-primary">soul.md</span>
        </Ln>
        <Ln />
        <Ln>{data.personal.summary}</Ln>
        <Ln />

        {/* Education */}
        <Ln>
          <span className="text-pf-accent">**</span>
          <span className="font-semibold text-pf-text-secondary">
            Education
          </span>
          <span className="text-pf-accent">**</span>
          <span className="text-pf-text-faint"> — </span>
          {data.education.institution}, {data.education.degree} in{" "}
          {data.education.major}
          <span className="text-pf-text-subtle">
            {" "}
            ({data.education.startDate} — {data.education.endDate})
          </span>
        </Ln>

        {/* Leadership */}
        <Ln>
          <span className="text-pf-accent">**</span>
          <span className="font-semibold text-pf-text-secondary">
            Leadership
          </span>
          <span className="text-pf-accent">**</span>
          <span className="text-pf-text-faint"> — </span>
          {data.organization.name}, {data.organization.role}
          <span className="text-pf-text-subtle">
            {" "}
            ({data.organization.period})
          </span>
        </Ln>
        <Ln />

        <Ln>
          <span className="text-pf-text-ghost">---</span>
        </Ln>
        <Ln />

        {/* skills.md */}
        <Ln>
          <span className="text-pf-accent">## </span>
          <span className="font-bold text-pf-text-primary">skills.md</span>
        </Ln>
        <Ln />
        {data.skills.map((cat) => (
          <Ln key={cat.category}>
            <span className="text-pf-accent">**</span>
            <span className="font-semibold text-pf-text-secondary">
              {cat.category}
            </span>
            <span className="text-pf-accent">**</span>
            <span className="text-pf-text-faint">: </span>
            {cat.skills.map((skill, i) => (
              <span key={skill}>
                {i > 0 && " "}
                <span className="text-pf-text-ghost">`</span>
                <span className="text-pf-accent">{skill}</span>
                <span className="text-pf-text-ghost">`</span>
              </span>
            ))}
          </Ln>
        ))}
        <Ln />

        <Ln>
          <span className="text-pf-text-ghost">---</span>
        </Ln>
        <Ln />

        {/* journey.md */}
        <Ln>
          <span className="text-pf-accent">## </span>
          <span className="font-bold text-pf-text-primary">journey.md</span>
        </Ln>

        {data.experience.map((exp) => (
          <div key={exp.id}>
            <Ln />
            <Ln>
              <span className="text-pf-accent">### </span>
              <span className="font-bold text-pf-text-primary">
                {exp.company}
              </span>
            </Ln>
            <Ln>
              <span className="text-pf-accent">**</span>
              <span className="font-semibold text-pf-text-secondary">
                {exp.role}
              </span>
              <span className="text-pf-accent">**</span>
              <span className="text-pf-text-faint"> · </span>
              <span className="text-pf-text-muted">
                {exp.type} · {exp.location}
              </span>
            </Ln>
            <Ln>
              <span className="text-pf-text-ghost">*</span>
              <span className="text-pf-text-subtle italic">
                {exp.startDate} — {exp.endDate}
              </span>
              <span className="text-pf-text-ghost">*</span>
            </Ln>
            <Ln />
            {exp.highlights.map((h, j) => (
              <Ln key={j}>
                <span className="text-pf-text-faint">- </span>
                {h}
              </Ln>
            ))}
            <Ln />
            <Ln>
              {exp.technologies.map((tech, i) => (
                <span key={tech}>
                  {i > 0 && " "}
                  <span className="text-pf-text-ghost">`</span>
                  <span className="text-pf-accent">{tech}</span>
                  <span className="text-pf-text-ghost">`</span>
                </span>
              ))}
            </Ln>
          </div>
        ))}
        <Ln />

        <Ln>
          <span className="text-pf-text-ghost">---</span>
        </Ln>
        <Ln />

        {/* builds.md */}
        <Ln>
          <span className="text-pf-accent">## </span>
          <span className="font-bold text-pf-text-primary">builds.md</span>
        </Ln>

        {data.projects.map((proj, i) => (
          <div key={proj.id}>
            <Ln />
            <Ln>
              <span className="text-pf-accent">### </span>
              <span className="font-bold text-pf-text-primary">
                {String(i + 1).padStart(2, "0")} — {proj.name}
              </span>
            </Ln>
            <Ln />
            <Ln>
              <span className="text-pf-text-faint">{">"} </span>
              <span className="italic">{proj.description}</span>
            </Ln>
            <Ln />
            {proj.highlights.map((h, j) => (
              <Ln key={j}>
                <span className="text-pf-text-faint">- </span>
                {h}
              </Ln>
            ))}
            <Ln />
            <Ln>
              {proj.technologies.map((tech, i) => (
                <span key={tech}>
                  {i > 0 && " "}
                  <span className="text-pf-text-ghost">`</span>
                  <span className="text-pf-accent">{tech}</span>
                  <span className="text-pf-text-ghost">`</span>
                </span>
              ))}
            </Ln>
          </div>
        ))}
        <Ln />

        <Ln>
          <span className="text-pf-text-ghost">---</span>
        </Ln>
        <Ln />

        {/* connect.md */}
        <Ln>
          <span className="text-pf-accent">## </span>
          <span className="font-bold text-pf-text-primary">connect.md</span>
        </Ln>
        <Ln />
        <Ln>
          <span className="text-pf-accent">### </span>
          <span className="font-bold text-pf-text-primary">
            LET&apos;S BUILD SOMETHING
          </span>
        </Ln>
        <Ln />
        <Ln>
          <span className="text-pf-text-muted">📧 </span>
          <span className="text-pf-accent">[</span>
          <span>{data.personal.email}</span>
          <span className="text-pf-accent">]</span>
          <span className="text-pf-text-subtle">
            (mailto:{data.personal.email})
          </span>
        </Ln>
        <Ln />
        {data.personal.socialLinks.map((link) => (
          <Ln key={link.platform}>
            <span className="text-pf-text-faint">- </span>
            <span className="text-pf-accent">[</span>
            <span>{link.platform}</span>
            <span className="text-pf-accent">]</span>
            <span className="text-pf-text-subtle">({link.url})</span>
          </Ln>
        ))}
        <Ln />

        <Ln>
          <span className="text-pf-text-ghost">---</span>
        </Ln>
        <Ln />

        {/* Footer */}
        <Ln>
          <span className="text-pf-text-ghost">*</span>
          <span className="text-pf-text-subtle italic">
            © {new Date().getFullYear()} {data.personal.name}
          </span>
          <span className="text-pf-text-ghost">*</span>
        </Ln>
      </div>
    </div>
  )
}
