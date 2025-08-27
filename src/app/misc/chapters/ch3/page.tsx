import Link from 'next/link'

export default function Chapter3Page() {
  return (
    <div className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-4">
            3. 프로그레시브 락 스타일: 시각적 요소들 (The Progressive Rock Style: The Visuals)
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
          <h2 className="text-xl font-semibold mb-4 text-[#0000AA]">📑 Chapter 3 개요</h2>
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              이 장에서는 프로그레시브 락의 시각적 측면들을 다룹니다:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">🎨 앨범 커버 아트</h3>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• Roger Dean의 Yes 앨범 커버들</li>
                  <li>• Hipgnosis의 Pink Floyd 작업</li>
                  <li>• H.R. Giger의 ELP 작품</li>
                  <li>• 초현실주의와 판타지 아트의 영향</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🎭 무대 연출</h3>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Genesis의 극장적 퍼포먼스</li>
                  <li>• Pink Floyd의 라이트 쇼</li>
                  <li>• ELP의 거대한 무대 세트</li>
                  <li>• 의상과 캐릭터 연기</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">📺 뮤직 비디오</h3>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 초기 프로모션 필름들</li>
                  <li>• 컨셉추얼한 영상 미학</li>
                  <li>• 아트 필름과의 연결</li>
                  <li>• MTV 이전 시대의 실험</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">🏛️ 문화적 맥락</h3>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• 1960년대 사이키델릭 아트</li>
                  <li>• 반문화 운동의 시각 언어</li>
                  <li>• 고급 예술과 대중 예술의 융합</li>
                  <li>• 영국 미술 교육의 영향</li>
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
              <strong>원문 내용:</strong> 프로그레시브 락의 시각적 요소들에 대한 체계적 분석으로, 
              앨범 커버 아트, 무대 디자인, 의상, 조명 등을 다룹니다.
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
              href="/misc/chapters/ch2" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              ← Chapter 2
            </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            Chapter 3 / 9 (미번역)
          </div>
          
          <Link 
            href="/misc/chapters/ch4" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Chapter 4 →
          </Link>
        </div>
      </div>
    </div>
  )
}
