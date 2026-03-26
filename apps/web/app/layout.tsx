import type { Metadata } from "next"
import { Geist_Mono, Figtree } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nurfajar.com"),
  title: "Nur Fajar Sayyidul Ayyam — Full Stack Developer",
  description:
    "Full Stack Developer based in Jakarta, Indonesia. Nearly 2 years of experience building scalable information systems across enterprise, startup, and university environments using React, Next.js, Golang, and more.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Golang",
    "Jakarta",
    "Indonesia",
    "Nur Fajar",
  ],
  authors: [{ name: "Nur Fajar Sayyidul Ayyam" }],
  openGraph: {
    title: "Nur Fajar Sayyidul Ayyam — Full Stack Developer",
    description:
      "Building scalable systems across enterprise, startup & university environments.",
    type: "website",
    locale: "en_US",
    url: "https://nurfajar.com",
    siteName: "Nur Fajar Sayyidul Ayyam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Fajar Sayyidul Ayyam — Full Stack Developer",
    description:
      "Building scalable systems across enterprise, startup & university environments.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://nurfajar.com",
    types: {
      "application/rss+xml": "https://nurfajar.com/feed.xml",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
