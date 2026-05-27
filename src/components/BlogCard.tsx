import Link from 'next/link'
import type { PostMeta } from '@/types/blog'

interface BlogCardProps {
  post: PostMeta
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-brand-300 transition-all group">
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-brand-600 transition-colors leading-snug">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {post.description}
      </p>
      <div className="flex items-center gap-4 text-xs text-gray-400">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span>{post.readingTime}</span>
      </div>
    </article>
  )
}
