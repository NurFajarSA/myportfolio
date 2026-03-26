import { ImageResponse } from "next/og"
import { data } from "@/lib/data"

export const alt = "Nur Fajar Sayyidul Ayyam — Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
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
      {/* Top — branding */}
      <div
        style={{
          fontSize: 16,
          color: "#525252",
          fontFamily: "monospace",
        }}
      >
        {"// human.md"}
      </div>

      {/* Middle — main content */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fafafa",
          }}
        >
          {data.personal.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 24,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#34d399",
            }}
          />
          <span
            style={{
              fontSize: 28,
              color: "#34d399",
              fontWeight: 500,
            }}
          >
            {data.personal.title}
          </span>
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a3a3a3",
            marginTop: 12,
          }}
        >
          {data.personal.location}
        </div>
      </div>

      {/* Bottom — url */}
      <div
        style={{
          fontSize: 18,
          color: "#525252",
          fontFamily: "monospace",
        }}
      >
        nurfajar.com
      </div>
    </div>,
    { ...size }
  )
}
