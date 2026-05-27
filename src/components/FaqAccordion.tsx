'use client'

import { useState } from 'react'
import type { FaqItem } from '@/lib/faq-data'

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-gray-900 text-sm leading-snug">{item.question}</span>
            <span className="text-gray-400 shrink-0 text-lg leading-none">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 pt-1 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
