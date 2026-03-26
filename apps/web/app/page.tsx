import { data } from "@/lib/data"
import { Separator } from "@workspace/ui/components/separator"
import { PageShell } from "./_components/page-shell"
import { SplitHero } from "./_components/split-hero"
import { TextReveal } from "./_components/text-reveal"
import { MarqueeSkills } from "./_components/marquee-skills"
import { ExperienceSection } from "./_components/experience-section"
import { ProjectsSection } from "./_components/projects-section"
import { ContactSection } from "./_components/contact-section"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.personal.name,
  jobTitle: data.personal.title,
  url: "https://nurfajar.com",
  email: data.personal.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: data.education.institution,
  },
  knowsAbout: data.skills.flatMap((s) => s.skills),
  sameAs: data.personal.socialLinks.map((l) => l.url),
}

export default function HomePage() {
  return (
    <PageShell>
      <div className="min-h-svh bg-pf-bg text-pf-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SplitHero />

        {/* // soul.md */}
        <section className="px-6 py-24 md:py-32" aria-label="About">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 font-mono text-sm text-pf-accent">
              {"// soul.md"}
            </h2>

            <TextReveal>
              <p className="text-lg leading-relaxed font-light text-pf-text-body md:text-xl">
                {data.personal.summary}
              </p>
            </TextReveal>

            <TextReveal>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <article>
                  <p className="mb-2 text-xs tracking-wider text-pf-text-faint uppercase">
                    Education
                  </p>
                  <p className="font-medium text-pf-text-secondary">
                    {data.education.institution}
                  </p>
                  <p className="mt-1 text-sm text-pf-text-muted">
                    {data.education.degree}, {data.education.major}
                  </p>
                  <p className="mt-1 text-sm text-pf-text-subtle">
                    <time className="font-mono">
                      {data.education.startDate} — {data.education.endDate}
                    </time>
                  </p>
                </article>

                <article>
                  <p className="mb-2 text-xs tracking-wider text-pf-text-faint uppercase">
                    Leadership
                  </p>
                  <p className="font-medium text-pf-text-secondary">
                    {data.organization.name}
                  </p>
                  <p className="mt-1 text-sm text-pf-text-muted">
                    {data.organization.role}
                  </p>
                  <p className="mt-1 font-mono text-sm text-pf-text-subtle">
                    {data.organization.period}
                  </p>
                  <p className="mt-2 text-sm text-pf-text-subtle">
                    {data.organization.highlights[0]}
                  </p>
                </article>
              </div>
            </TextReveal>
          </div>
        </section>

        <Separator className="mx-auto max-w-4xl bg-pf-border-muted" />

        <MarqueeSkills />

        <Separator className="mx-auto max-w-4xl bg-pf-border-muted" />

        <ExperienceSection />

        <Separator className="mx-auto max-w-4xl bg-pf-border-muted" />

        <ProjectsSection />

        <Separator className="mx-auto max-w-4xl bg-pf-border-muted" />

        <ContactSection />
      </div>
    </PageShell>
  )
}
