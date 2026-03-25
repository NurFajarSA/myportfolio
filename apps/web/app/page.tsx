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
        <section className="py-24 md:py-32 px-6" aria-label="About">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-sm text-pf-accent mb-12">
              {"// soul.md"}
            </h2>

            <TextReveal>
              <p className="text-lg md:text-xl font-light leading-relaxed text-pf-text-body">
                {data.personal.summary}
              </p>
            </TextReveal>

            <TextReveal>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <article>
                  <p className="text-xs uppercase tracking-wider text-pf-text-faint mb-2">
                    Education
                  </p>
                  <p className="font-medium text-pf-text-secondary">
                    {data.education.institution}
                  </p>
                  <p className="text-sm text-pf-text-muted mt-1">
                    {data.education.degree}, {data.education.major}
                  </p>
                  <p className="text-sm text-pf-text-subtle mt-1">
                    <time className="font-mono">
                      {data.education.startDate} — {data.education.endDate}
                    </time>
                  </p>
                </article>

                <article>
                  <p className="text-xs uppercase tracking-wider text-pf-text-faint mb-2">
                    Leadership
                  </p>
                  <p className="font-medium text-pf-text-secondary">
                    {data.organization.name}
                  </p>
                  <p className="text-sm text-pf-text-muted mt-1">
                    {data.organization.role}
                  </p>
                  <p className="text-sm text-pf-text-subtle mt-1 font-mono">
                    {data.organization.period}
                  </p>
                  <p className="text-sm text-pf-text-subtle mt-2">
                    {data.organization.highlights[0]}
                  </p>
                </article>
              </div>
            </TextReveal>
          </div>
        </section>

        <Separator className="bg-pf-border-muted max-w-4xl mx-auto" />

        <MarqueeSkills />

        <Separator className="bg-pf-border-muted max-w-4xl mx-auto" />

        <ExperienceSection />

        <Separator className="bg-pf-border-muted max-w-4xl mx-auto" />

        <ProjectsSection />

        <Separator className="bg-pf-border-muted max-w-4xl mx-auto" />

        <ContactSection />
      </div>
    </PageShell>
  )
}
