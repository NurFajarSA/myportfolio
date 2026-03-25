import { data } from "@/lib/data"
import { TextReveal } from "./text-reveal"

export function ContactSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 md:py-32">
      <TextReveal className="text-center">
        <p className="font-mono text-sm text-pf-accent mb-6">
          {"// connect.md"}
        </p>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-pf-text-primary leading-[1.1]">
          LET&apos;S BUILD
          <br />
          SOMETHING
        </h2>

        <a
          href={`mailto:${data.personal.email}`}
          className="mt-8 inline-block text-xl md:text-2xl text-pf-accent underline underline-offset-4 decoration-pf-accent/30 hover:decoration-pf-accent transition-colors"
        >
          {data.personal.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6">
          {data.personal.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-pf-text-subtle hover:text-pf-accent transition-colors"
            >
              <span className="text-pf-text-faint mr-1">→</span>
              {link.platform}
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-pf-text-ghost font-mono">
          © {new Date().getFullYear()} {data.personal.name}
        </p>
      </TextReveal>
    </section>
  )
}
