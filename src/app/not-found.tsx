import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600 mb-8">
        죄송합니다. 요청하신 페이지가 존재하지 않습니다.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}