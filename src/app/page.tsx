import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/mdx'
import { faqData } from '@/lib/faq-data'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  inLanguage: 'th',
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
}

const features = [
  {
    icon: '🔍',
    title: 'SEO พื้นฐานครบครัน',
    desc: 'Meta tags, Open Graph, Twitter Cards, Canonical URLs และ Sitemap ทั้งหมดใน Next.js App Router',
  },
  {
    icon: '🤖',
    title: 'GEO — AI Search Ready',
    desc: 'JSON-LD Structured Data ครบทุกหน้า, llms.txt, robots.txt ที่ allow AI crawlers ทุกตัว',
  },
  {
    icon: '💬',
    title: 'AEO — ตอบคำถาม AI',
    desc: 'FAQPage schema, เนื้อหาแบบ Q&A, หัวข้อเป็นคำถาม ให้ AI ดึงคำตอบได้ตรงๆ',
  },
  {
    icon: '📝',
    title: 'Blog + Article Schema',
    desc: 'บทความ MDX พร้อม Article JSON-LD ครบ: author, publisher, datePublished, image',
  },
  {
    icon: '⚡',
    title: 'Static Generation',
    desc: 'ทุกหน้า build เป็น static HTML — โหลดเร็ว Core Web Vitals ดี ทั้ง SEO และ UX',
  },
  {
    icon: '🇹🇭',
    title: 'ภาษาไทย + Sarabun Font',
    desc: 'font subset Thai+Latin, hreflang="th", locale="th_TH" ครบถ้วน',
  },
]

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)
  const previewFaqs = faqData.slice(0, 4)

  return (
    <>
      <JsonLd data={webPageSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span>Demo Template</span>
            <span>·</span>
            <span>Next.js 14 App Router</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
            สร้างเว็บไซต์ที่<br />
            <span className="text-brand-600">AI ดึงข้อมูลได้</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Template Next.js 14 ที่ optimize สำหรับ{' '}
            <strong>SEO, GEO และ AEO</strong> ให้ AI อย่าง ChatGPT, Claude,
            Perplexity ดึงข้อมูลและอ้างอิงเว็บของคุณ
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
            >
              อ่านบทความ
            </Link>
            <Link
              href="/faq"
              className="border border-brand-300 text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            ครอบคลุมทุกมิติของ SEO/GEO/AEO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-xl border border-gray-200 hover:border-brand-300 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">บทความล่าสุด</h2>
              <Link href="/blog" className="text-brand-600 font-medium text-sm hover:underline">
                ดูทั้งหมด →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">คำถามที่พบบ่อย</h2>
            <Link href="/faq" className="text-brand-600 font-medium text-sm hover:underline">
              ดูทั้งหมด →
            </Link>
          </div>
          <FaqAccordion items={previewFaqs} />
        </div>
      </section>

      {/* AI Files CTA */}
      <section className="py-12 px-4 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">ไฟล์สำหรับ AI Crawlers</h2>
          <p className="text-brand-200 text-sm mb-6">
            เว็บไซต์นี้มีไฟล์ครบสำหรับ AI indexing
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['/llms.txt', '/llms-full.txt', '/robots.txt', '/sitemap.xml'].map((file) => (
              <a
                key={file}
                href={file}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-mono transition-colors"
              >
                {file}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
