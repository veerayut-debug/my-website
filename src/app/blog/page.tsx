import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import BlogCard from '@/components/BlogCard'
import Breadcrumb from '@/components/Breadcrumb'
import { getAllPosts } from '@/lib/mdx'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'บทความ SEO, GEO และ AEO',
  description: 'รวมบทความภาษาไทยเกี่ยวกับ SEO, GEO, AEO, Structured Data และการทำให้ AI ดึงข้อมูลเว็บของคุณ',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { type: 'website', url: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'บทความ SEO, GEO และ AEO',
    description: 'รวมบทความภาษาไทยเกี่ยวกับ SEO, GEO, AEO และ Structured Data',
    url: `${SITE_URL}/blog`,
    inLanguage: 'th',
    isPartOf: { '@type': 'WebSite', url: SITE_URL },
  }

  return (
    <>
      <JsonLd data={collectionSchema} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={[{ label: 'หน้าแรก', href: '/' }, { label: 'บทความ', href: '/blog' }]} />
        <div className="mt-6 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">บทความทั้งหมด</h1>
          <p className="text-gray-600">
            ความรู้เกี่ยวกับ SEO, GEO, AEO และการ optimize เว็บสำหรับยุค AI
          </p>
        </div>
        {posts.length === 0 ? (
          <p className="text-gray-500">ยังไม่มีบทความ</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
