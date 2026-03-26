import { ImageResponse } from "next/og"
import { blogs } from "@/lib/content"

export const alt = "Blog post"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function generateStaticParams() {
  return blogs
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug.replace("blog/", "") }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogs.find((p) => p.slug === `blog/${slug}`)

  const title = post?.title ?? "Blog"
  const description = post?.description ?? ""
  const date = post
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 16,
          color: "#525252",
          fontFamily: "monospace",
        }}
      >
        <span>{"// posts.md"}</span>
        <span>{date}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#fafafa",
            maxWidth: "90%",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a3a3a3",
            marginTop: 20,
            maxWidth: "80%",
            lineHeight: 1.4,
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 18,
          fontFamily: "monospace",
        }}
      >
        <span style={{ color: "#34d399" }}>Nur Fajar Sayyidul Ayyam</span>
        <span style={{ color: "#525252" }}>nurfajar.com</span>
      </div>
    </div>,
    { ...size }
  )
}
