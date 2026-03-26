import type { Metadata } from "next"
import Link from "next/link"
import { blogs } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog — Nur Fajar Sayyidul Ayyam",
  description:
    "Thoughts on engineering, projects, and building things that matter.",
}

export default function BlogPage() {
  const posts = blogs
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 font-mono text-sm text-pf-accent">
          {"// posts.md"}
        </h1>
        <p className="mb-12 text-2xl font-bold text-pf-text-primary md:text-3xl">
          Blog
        </p>

        {posts.length === 0 ? (
          <p className="font-mono text-sm text-pf-text-muted">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/${post.slug}`} className="block">
                  <time className="font-mono text-xs text-pf-text-faint">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mt-1 text-lg font-semibold text-pf-text-primary transition-colors group-hover:text-pf-accent">
                    {post.title}
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm text-pf-text-muted">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-2 flex gap-2">
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
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
