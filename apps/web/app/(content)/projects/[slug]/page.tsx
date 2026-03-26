import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects } from "@/lib/content"
import { data } from "@/lib/data"
import { MDXContent } from "@/lib/mdx"
import { extractToc } from "@/lib/toc"
import { TableOfContents } from "@/components/mdx/table-of-contents"
import { Breadcrumbs } from "@/components/breadcrumbs"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === `projects/${slug}` && p.published)
}

function getRawMdx(slug: string): string {
  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`)
  try {
    return fs.readFileSync(filePath, "utf-8")
  } catch {
    return ""
  }
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug.replace("projects/", "") }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const canonical = `https://nurfajar.com/${project.slug}`

  return {
    title: `${project.title} — Nur Fajar Sayyidul Ayyam`,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: canonical,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const content = getProjectBySlug(slug)
  if (!content) notFound()

  const raw = getRawMdx(slug)
  const toc = extractToc(raw)

  const projectData = data.projects.find((p) => p.id === content.dataId)
  const experience = projectData
    ? data.experience.find((e) => e.id === projectData.fromExperience)
    : null

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "~", href: "/" },
            { label: "projects" },
            { label: slug },
          ]}
        />

        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-pf-text-primary md:text-4xl">
            {content.title}
          </h1>
          <p className="mt-3 text-pf-text-muted">{content.description}</p>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_240px]">
          <MDXContent code={content.body} />

          <aside className="hidden space-y-8 self-start md:sticky md:top-20 md:block">
            {toc.length > 0 && <TableOfContents entries={toc} />}

            {projectData && (
              <>
                <div>
                  <p className="mb-3 text-xs uppercase tracking-wider text-pf-text-faint">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-pf-muted/50 px-2 py-1 font-mono text-xs text-pf-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-wider text-pf-text-faint">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {projectData.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-pf-text-muted"
                      >
                        <span className="mt-1 shrink-0 text-pf-accent">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {experience && (
              <div>
                <p className="mb-3 text-xs uppercase tracking-wider text-pf-text-faint">
                  Context
                </p>
                <p className="text-sm text-pf-text-muted">
                  Built at{" "}
                  <span className="font-medium text-pf-text-secondary">
                    {experience.company}
                  </span>
                </p>
                <p className="mt-1 font-mono text-xs text-pf-text-subtle">
                  {experience.startDate} — {experience.endDate}
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
