export interface TocEntry {
  id: string
  text: string
  level: number
}

export function extractToc(raw: string): TocEntry[] {
  // The raw MDX source has ## headings. Parse them out.
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const entries: TocEntry[] = []
  let match

  while ((match = headingRegex.exec(raw)) !== null) {
    const level = match[1]!.length // 2 = h2, 3 = h3, 4 = h4
    const text = match[2]!.trim()
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
    entries.push({ id, text, level })
  }

  return entries
}
