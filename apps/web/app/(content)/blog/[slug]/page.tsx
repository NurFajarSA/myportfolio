import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blogs } from "@/lib/content"
import { MDXContent } from "@/lib/mdx"
import { extractToc } from "@/lib/toc"
import { getReadingTime } from "@/lib/reading-time"
import { TableOfContents } from "@/components/mdx/table-of-contents"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GiscusComments } from "@/components/giscus-comments"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function getPostBySlug(slug: string) {
  return blogs.find((p) => p.slug === `blog/${slug}` && p.published)
}

function getRawMdx(slug: string): string {
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`)
  try {
    return fs.readFileSync(filePath, "utf-8")
  } catch {
    return ""
  }
}

export async function generateStaticParams() {
  return blogs
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug.replace("blog/", "") }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const canonical = `https://nurfajar.com/${post.slug}`

  return {
    title: `${post.title} — Nur Fajar Sayyidul Ayyam`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: canonical,
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const raw = getRawMdx(slug)
  const toc = extractToc(raw)
  const readingTime = getReadingTime(raw)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Nur Fajar Sayyidul Ayyam",
      url: "https://nurfajar.com",
    },
    keywords: post.tags.join(", "),
  }

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumbs
          items={[
            { label: "~", href: "/" },
            { label: "blog", href: "/blog" },
            { label: slug },
          ]}
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_220px]">
          <div>
            <header className="mb-12">
              <div className="flex items-center gap-3 font-mono text-xs text-pf-text-faint">
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{readingTime}</span>
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-pf-text-primary md:text-4xl">
                {post.title}
              </h1>
              <p className="mt-3 text-pf-text-muted">{post.description}</p>
              {post.tags.length > 0 && (
                <div className="mt-4 flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-pf-muted/50 px-2 py-0.5 font-mono text-xs text-pf-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <MDXContent code={post.body} />
            <GiscusComments />
          </div>

          {toc.length > 0 && (
            <aside className="hidden md:block">
              <div className="sticky top-20">
                <TableOfContents entries={toc} />
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
