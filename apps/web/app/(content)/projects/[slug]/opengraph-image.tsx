import { ImageResponse } from "next/og"
import { projects } from "@/lib/content"
import { data } from "@/lib/data"

export const alt = "Project"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function generateStaticParams() {
  return projects
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug.replace("projects/", "") }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === `projects/${slug}`)

  const title = project?.title ?? "Project"
  const description = project?.description ?? ""

  const projectData = project
    ? data.projects.find((p) => p.id === project.dataId)
    : null
  const techs = projectData?.technologies ?? []

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
          fontSize: 16,
          color: "#525252",
          fontFamily: "monospace",
        }}
      >
        {"// builds.md"}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#fafafa",
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
        {techs.length > 0 && (
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            {techs.map((tech) => (
              <div
                key={tech}
                style={{
                  fontSize: 14,
                  color: "#34d399",
                  backgroundColor: "#1a1a1a",
                  padding: "6px 14px",
                  borderRadius: 6,
                  fontFamily: "monospace",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        )}
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
