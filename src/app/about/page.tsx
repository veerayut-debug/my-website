import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/Breadcrumb'
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา',
  description: `${SITE_NAME} — template เว็บไซต์ภาษาไทยที่ optimize สำหรับ SEO, GEO และ AEO เพื่อให้ AI ดึงข้อมูลและอ้างอิงได้`,
  alternates: { canonical: `${SITE_URL}/about` },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  url: `${SITE_URL}/about`,
  worksFor: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
  knowsAbout: ['SEO', 'GEO', 'AEO', 'Structured Data', 'Next.js', 'JSON-LD'],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'แหล่งความรู้ภาษาไทยเกี่ยวกับ SEO, GEO และ AEO สำหรับนักการตลาดดิจิทัล',
  foundingDate: '2024',
  knowsAbout: ['SEO', 'GEO', 'AEO', 'Structured Data', 'JSON-LD', 'Next.js'],
  inLanguage: 'th',
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={organizationSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'เกี่ยวกับเรา', href: '/about' },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">เกี่ยวกับ SEO ไทย</h1>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              <strong>SEO ไทย</strong> คือ demo template สำหรับนักพัฒนาและนักการตลาดดิจิทัลชาวไทยที่ต้องการสร้างเว็บไซต์ที่รองรับการค้นหาด้วย AI ในยุคใหม่
            </p>

            <h2>จุดประสงค์</h2>
            <p>
              เว็บไซต์นี้สร้างขึ้นเพื่อแสดง best practices ด้าน SEO, GEO (Generative Engine Optimization) และ AEO (Answer Engine Optimization) ในบริบทของภาษาไทย ช่วยให้ AI systems อย่าง ChatGPT, Claude, Perplexity และ Google AI Overviews ดึงข้อมูลและอ้างอิงเว็บไซต์ได้อย่างถูกต้อง
            </p>

            <h2>สิ่งที่ครอบคลุม</h2>
            <ul>
              <li>JSON-LD Structured Data ครบทุกประเภท (Organization, WebSite, Article, FAQPage, BreadcrumbList, Person)</li>
              <li>Next.js 14 App Router Metadata API สำหรับ Open Graph, Twitter Cards และ Canonical URLs</li>
              <li>robots.txt ที่ allow AI crawlers ทุกตัว (GPTBot, ClaudeBot, PerplexityBot ฯลฯ)</li>
              <li>llms.txt และ llms-full.txt ตามมาตรฐาน llmstxt.org</li>
              <li>การเขียนเนื้อหาแบบ AEO ที่ AI ดึงคำตอบได้ตรงๆ</li>
              <li>Blog ด้วย MDX พร้อม Article schema ครบถ้วน</li>
              <li>Dynamic sitemap.xml</li>
            </ul>

            <h2>วิธีใช้ Template นี้</h2>
            <ol>
              <li>แก้ไข <code>src/lib/constants.ts</code> ใส่ข้อมูลเว็บของคุณ (SITE_URL, SITE_NAME ฯลฯ)</li>
              <li>แทนที่เนื้อหาตัวอย่างใน <code>content/blog/</code> ด้วยบทความจริงของคุณ</li>
              <li>อัปเดต FAQ ใน <code>src/lib/faq-data.ts</code> ให้ตรงกับธุรกิจของคุณ</li>
              <li>อัปเดต <code>public/llms.txt</code> และ <code>public/llms-full.txt</code></li>
              <li>Deploy และตรวจสอบด้วย Google Rich Results Test</li>
            </ol>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'JSON-LD Schemas', value: '6+' },
            { label: 'AI Crawlers', value: '12' },
            { label: 'FAQ Items', value: '11' },
            { label: 'Sample Posts', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="text-2xl font-bold text-brand-600">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
