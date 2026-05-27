import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-3">ไม่พบหน้านี้</h2>
      <p className="text-gray-500 mb-8">หน้าที่คุณต้องการไม่มีอยู่ในระบบ</p>
      <Link
        href="/"
        className="bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
      >
        กลับหน้าแรก
      </Link>
    </div>
  )
}
