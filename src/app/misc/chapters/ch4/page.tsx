import Link from 'next/link'

export default function Chapter4Page() {
  return (
    <div className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-4">
            4. 프로그레시브 락 스타일: 가사 (The Progressive Rock Style: The Lyrics)
          </h1>
          
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-6">
            <div className="text-yellow-600 font-semibold text-sm">
              📝 미번역 장
            </div>
            <p className="text-yellow-500 text-xs mt-2 italic">
              This chapter has not been translated yet.<br/>
              해당 장은 아직 번역되지 않았습니다.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
            <p className="text-sm text-blue-700">
              📖 <strong>원서:</strong> Macan, Edward. <em>Rocking the Classics: English Progressive Rock and the Counterculture</em>
            </p>
            <p className="text-xs text-blue-600 mt-2">
              Oxford University Press, USA, 1997.
            </p>
          </div>
        </div>

        {/* Chapter Overview */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#0000AA]">📑 Chapter 4 개요</h2>
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              이 장에서는 프로그레시브 락의 가사적 특징들을 분석합니다:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">📚 문학적 영향</h3>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• J.R.R. Tolkien의 판타지 세계</li>
                  <li>• 윌리엄 블레이크의 시</li>
                  <li>• SF 문학의 영향</li>
                  <li>• 고전 신화와 전설</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🧠 철학적 주제</h3>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• 실존주의적 탐구</li>
                  <li>• 동양 철학과 신비주의</li>
                  <li>• 시간과 공간의 개념</li>
                  <li>• 인간 존재의 의미</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">🌍 사회적 비판</h3>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 현대 문명에 대한 비판</li>
                  <li>• 전쟁과 평화</li>
                  <li>• 환경 문제</li>
                  <li>• 기술 문명의 양면성</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">🎭 서사적 구조</h3>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• 컨셉트 앨범의 스토리텔링</li>
                  <li>• 영웅 서사의 구조</li>
                  <li>• 상징과 은유의 사용</li>
                  <li>• 다층적 의미 구조</li>
                </ul>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">🎵 주요 작품 예시</h3>
              <div className="text-sm text-teal-700 space-y-2">
                <ul className="text-xs space-y-1 ml-4">
                  <li>• <strong>Genesis &quot;The Lamb Lies Down on Broadway&quot;:</strong> 도시 생활의 소외와 정체성 탐구</li>
                  <li>• <strong>Pink Floyd &quot;The Wall&quot;:</strong> 개인적 트라우마와 사회적 고립</li>
                  <li>• <strong>Yes &quot;Tales from Topographic Oceans&quot;:</strong> 힌두 철학과 자연 숭배</li>
                  <li>• <strong>King Crimson &quot;In the Court of the Crimson King&quot;:</strong> 묵시록적 비전</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Translation Notice */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-red-800 mb-3">📋 번역 안내</h3>
          <div className="text-sm text-red-700 space-y-2">
            <p>
              이 장은 현재 번역되지 않은 상태입니다. 번역에 관심이 있으시다면 연락해 주시기 바랍니다.
            </p>
            <p className="text-xs">
              <strong>원문 내용:</strong> 프로그레시브 락 가사의 문학적, 철학적, 사회적 측면을 
              상세히 분석하며, 주요 작품들의 가사를 심층적으로 해석합니다.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex gap-2">
            <Link 
              href="/misc/chapters" 
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              ← 목차
            </Link>
            <Link 
              href="/misc/chapters/ch3" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              ← Chapter 3
            </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            Chapter 4 / 9 (미번역)
          </div>
          
          <Link 
            href="/misc/chapters/ch5" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Chapter 5 →
          </Link>
        </div>
      </div>
    </div>
  )
}
