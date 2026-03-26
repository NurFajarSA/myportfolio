import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { blogs } from "@/lib/content"
import { MDXContent } from "@/lib/mdx"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function getPostBySlug(slug: string) {
  return blogs.find((p) => p.slug === `blog/${slug}` && p.published)
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

  return {
    title: `${post.title} — Nur Fajar Sayyidul Ayyam`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

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
      <div className="mx-auto max-w-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="mb-12">
          <time className="font-mono text-xs text-pf-text-faint">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
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
      </div>
    </section>
  )
}
