import { data } from "@/lib/data"
import { TextReveal } from "./text-reveal"

export function ContactSection() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24 md:py-32">
      <TextReveal className="text-center">
        <p className="mb-6 font-mono text-sm text-pf-accent">
          {"// connect.md"}
        </p>

        <h2 className="text-4xl leading-[1.1] font-bold tracking-tight text-pf-text-primary md:text-6xl lg:text-7xl">
          LET&apos;S BUILD
          <br />
          SOMETHING
        </h2>

        <a
          href={`mailto:${data.personal.email}`}
          className="mt-8 inline-block text-xl text-pf-accent underline decoration-pf-accent/30 underline-offset-4 transition-colors hover:decoration-pf-accent md:text-2xl"
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
              className="text-sm text-pf-text-subtle transition-colors hover:text-pf-accent"
            >
              <span className="mr-1 text-pf-text-faint">→</span>
              {link.platform}
            </a>
          ))}
        </div>

        <p className="mt-16 font-mono text-xs text-pf-text-ghost">
          © {new Date().getFullYear()} {data.personal.name}
        </p>
      </TextReveal>
    </section>
  )
}
