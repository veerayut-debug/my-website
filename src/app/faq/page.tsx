import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import Breadcrumb from '@/components/Breadcrumb'
import { faqData } from '@/lib/faq-data'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'FAQ — คำถามที่พบบ่อยเกี่ยวกับ SEO, GEO และ AEO',
  description:
    '11 คำถาม-คำตอบภาษาไทยเกี่ยวกับ SEO, GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) และการทำให้ AI ดึงข้อมูลเว็บของคุณ',
  alternates: { canonical: `${SITE_URL}/faq` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: 'คำถามที่พบบ่อยเกี่ยวกับ SEO, GEO และ AEO',
  url: `${SITE_URL}/faq`,
  inLanguage: 'th',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'FAQ', href: '/faq' },
          ]}
        />
        <div className="mt-6 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">คำถามที่พบบ่อย</h1>
          <p className="text-gray-600">
            {faqData.length} คำถาม-คำตอบเกี่ยวกับ SEO, GEO, AEO และการ optimize เว็บสำหรับ AI
          </p>
        </div>

        <FaqAccordion items={faqData} />

        <div className="mt-12 p-6 bg-brand-50 rounded-xl border border-brand-100">
          <h2 className="font-bold text-brand-900 mb-2">มีคำถามเพิ่มเติม?</h2>
          <p className="text-brand-700 text-sm leading-relaxed">
            อ่านบทความเชิงลึกเพิ่มเติมได้ที่{' '}
            <a href="/blog" className="underline hover:no-underline font-medium">
              หน้าบทความ
            </a>{' '}
            หรือตรวจสอบไฟล์{' '}
            <a href="/llms.txt" className="underline hover:no-underline font-medium font-mono">
              llms.txt
            </a>{' '}
            เพื่อดูข้อมูลสรุปสำหรับ AI
          </p>
        </div>
      </div>
    </>
  )
}
