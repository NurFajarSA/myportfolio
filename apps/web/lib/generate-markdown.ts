import { data } from "./data"

export function generateMarkdown(): string {
  const lines: string[] = []

  lines.push(`# ${data.personal.name}`)
  lines.push("")
  lines.push(
    `**${data.personal.title}** · 📍 ${data.personal.location}`
  )
  lines.push("")
  lines.push(`> ${data.personal.tagline}`)
  lines.push("")
  lines.push("---")
  lines.push("")

  // soul.md
  lines.push("## soul.md")
  lines.push("")
  lines.push(data.personal.summary)
  lines.push("")
  lines.push(
    `**Education** — ${data.education.institution}, ${data.education.degree} in ${data.education.major} (${data.education.startDate} — ${data.education.endDate})`
  )
  lines.push(
    `**Leadership** — ${data.organization.name}, ${data.organization.role} (${data.organization.period})`
  )
  lines.push("")
  lines.push("---")
  lines.push("")

  // skills.md
  lines.push("## skills.md")
  lines.push("")
  for (const cat of data.skills) {
    lines.push(
      `**${cat.category}:** ${cat.skills.map((s) => `\`${s}\``).join(" ")}`
    )
  }
  lines.push("")
  lines.push("---")
  lines.push("")

  // journey.md
  lines.push("## journey.md")
  for (const exp of data.experience) {
    lines.push("")
    lines.push(`### ${exp.company}`)
    lines.push(`**${exp.role}** · ${exp.type} · ${exp.location}`)
    lines.push(`*${exp.startDate} — ${exp.endDate}*`)
    lines.push("")
    for (const h of exp.highlights) {
      lines.push(`- ${h}`)
    }
    lines.push("")
    lines.push(
      `**Tech:** ${exp.technologies.map((t) => `\`${t}\``).join(" ")}`
    )
  }
  lines.push("")
  lines.push("---")
  lines.push("")

  // builds.md
  lines.push("## builds.md")
  for (let i = 0; i < data.projects.length; i++) {
    const proj = data.projects[i]!
    lines.push("")
    lines.push(`### ${String(i + 1).padStart(2, "0")} — ${proj.name}`)
    lines.push("")
    lines.push(`> ${proj.description}`)
    lines.push("")
    for (const h of proj.highlights) {
      lines.push(`- ${h}`)
    }
    lines.push("")
    lines.push(
      `**Tech:** ${proj.technologies.map((t) => `\`${t}\``).join(" ")}`
    )
  }
  lines.push("")
  lines.push("---")
  lines.push("")

  // connect.md
  lines.push("## connect.md")
  lines.push("")
  lines.push("### LET'S BUILD SOMETHING")
  lines.push("")
  lines.push(
    `📧 [${data.personal.email}](mailto:${data.personal.email})`
  )
  lines.push("")
  for (const link of data.personal.socialLinks) {
    lines.push(`- [${link.platform}](${link.url})`)
  }
  lines.push("")
  lines.push("---")
  lines.push("")
  lines.push(`*© ${new Date().getFullYear()} ${data.personal.name}*`)
  lines.push("")

  return lines.join("\n")
}
