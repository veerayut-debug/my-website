import Link from 'next/link'
import { SITE_NAME } from '@/lib/constants'

const navLinks = [
  { href: '/blog', label: 'บทความ' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'เกี่ยวกับเรา' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-brand-700 hover:text-brand-600 transition-colors">
          <span className="bg-brand-600 text-white px-2 py-0.5 rounded text-sm font-semibold">SEO</span>
          <span>ไทย</span>
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
