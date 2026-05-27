import Link from 'next/link'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">{SITE_NAME}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              แหล่งความรู้ภาษาไทยเกี่ยวกับ SEO, GEO และ AEO สำหรับให้ AI ดึงข้อมูลเว็บของคุณ
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3 text-sm">เนื้อหา</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/blog" className="hover:text-brand-600 transition-colors">บทความทั้งหมด</Link></li>
              <li><Link href="/faq" className="hover:text-brand-600 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-brand-600 transition-colors">เกี่ยวกับเรา</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-3 text-sm">สำหรับ AI</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="/llms.txt" className="hover:text-brand-600 transition-colors">
                  llms.txt
                </a>
              </li>
              <li>
                <a href="/llms-full.txt" className="hover:text-brand-600 transition-colors">
                  llms-full.txt
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-brand-600 transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="hover:text-brand-600 transition-colors">
                  robots.txt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {SITE_NAME} — เนื้อหาสำหรับ demo เท่านั้น
        </div>
      </div>
    </footer>
  )
}
