import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/Breadcrumb'
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/mdx'
import { SITE_URL, AUTHOR_NAME, AUTHOR_URL, SITE_NAME } from '@/lib/constants'
import readingTime from 'reading-time'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const { frontmatter } = getPostBySlug(slug)
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      authors: [{ name: frontmatter.author }],
      alternates: { canonical: `${SITE_URL}/blog/${slug}` },
      openGraph: {
        type: 'article',
        url: `${SITE_URL}/blog/${slug}`,
        title: frontmatter.title,
        description: frontmatter.description,
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.dateModified,
        authors: [frontmatter.author],
        images: frontmatter.image
          ? [{ url: frontmatter.image, alt: frontmatter.imageAlt ?? frontmatter.title }]
          : undefined,
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  let frontmatter, content
  try {
    ;({ frontmatter, content } = getPostBySlug(slug))
  } catch {
    notFound()
  }

  const stats = readingTime(content)
  const readTime = `${Math.ceil(stats.minutes)} นาที`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    dateModified: frontmatter.dateModified,
    inLanguage: 'th',
    author: {
      '@type': 'Person',
      name: frontmatter.author,
      url: AUTHOR_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
    },
    image: frontmatter.image ?? `${SITE_URL}/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
    keywords: frontmatter.tags.join(', '),
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'บทความ', href: '/blog' },
            { label: frontmatter.title, href: `/blog/${slug}` },
          ]}
        />

        <header className="mt-8 mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">{frontmatter.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400 border-t border-gray-100 pt-4">
            <span>{frontmatter.author}</span>
            <span>·</span>
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{readTime}</span>
          </div>
        </header>

        <article className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={content} />
        </article>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-1">อัปเดตล่าสุด:</p>
          <time className="text-sm text-gray-700" dateTime={frontmatter.dateModified}>
            {new Date(frontmatter.dateModified).toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
    </>
  )
}
