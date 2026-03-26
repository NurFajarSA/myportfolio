import blogsData from "../.velite/blogs.json"

export interface Blog {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  projectId?: string
  published: boolean
  body: string
}

export const blogs: Blog[] = blogsData
