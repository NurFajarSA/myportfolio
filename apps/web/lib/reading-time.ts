const WORDS_PER_MINUTE = 200

export function getReadingTime(raw: string): string {
  // Strip frontmatter
  const content = raw.replace(/^---[\s\S]*?---/, "")
  // Strip MDX/JSX tags
  const text = content.replace(/<[^>]*>/g, " ").replace(/[{}()<>[\]=;:'"`,.|&!?\\\/]/g, " ")
  const words = text.split(/\s+/).filter((w) => w.length > 1).length
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
  return `${minutes} min read`
}
