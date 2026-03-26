import { defineConfig, defineCollection, s } from "velite"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

const blogs = defineCollection({
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    title: s.string().max(120),
    slug: s.path(),
    description: s.string().max(300),
    date: s.isodate(),
    tags: s.array(s.string()).default([]),
    projectId: s.string().optional(),
    published: s.boolean().default(true),
    body: s.mdx(),
  }),
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blogs },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        { theme: { dark: "github-dark", light: "github-light" } },
      ],
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
})
