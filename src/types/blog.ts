export interface PostFrontmatter {
  title: string
  description: string
  date: string
  dateModified: string
  author: string
  tags: string[]
  image?: string
  imageAlt?: string
}

export interface PostMeta extends PostFrontmatter {
  slug: string
  readingTime: string
}

export interface Post extends PostMeta {
  content: string
}
