import type { MetadataRoute } from "next"
import { blogs, projects } from "@/lib/content"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = blogs
    .filter((p) => p.published)
    .map((post) => ({
      url: `https://nurfajar.com/blog/${post.slug.replace("blog/", "")}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  const projectEntries = projects
    .filter((p) => p.published)
    .map((project) => ({
      url: `https://nurfajar.com/projects/${project.slug.replace("projects/", "")}`,
      lastModified: new Date(project.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [
    {
      url: "https://nurfajar.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://nurfajar.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
    ...projectEntries,
  ]
}
