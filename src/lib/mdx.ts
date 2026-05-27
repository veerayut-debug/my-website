import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { PostMeta, Post, PostFrontmatter } from '@/types/blog'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx?$/, '')
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(getSlugFromFilename)
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllSlugs()
  const posts = slugs.map((slug) => {
    const { frontmatter, content } = getPostBySlug(slug)
    const stats = readingTime(content)
    return {
      ...frontmatter,
      slug,
      readingTime: `${Math.ceil(stats.minutes)} นาที`,
    } as PostMeta
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): { frontmatter: PostFrontmatter; content: string } {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    frontmatter: data as PostFrontmatter,
    content,
  }
}
