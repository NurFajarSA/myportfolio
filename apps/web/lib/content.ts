import blogsData from "../.velite/blogs.json"
import projectsData from "../.velite/projects.json"

export interface Blog {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  published: boolean
  body: string
}

export interface ProjectContent {
  title: string
  slug: string
  dataId: string
  description: string
  date: string
  published: boolean
  body: string
}

export const blogs: Blog[] = blogsData
export const projects: ProjectContent[] = projectsData
