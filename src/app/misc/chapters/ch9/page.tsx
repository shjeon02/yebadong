import Link from 'next/link'

export default function Chapter9Page() {
  return (
    <div className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-4">
            9. 1976년 이후의 프로그레시브 락 (Progressive Rock after 1976)
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
          <h2 className="text-xl font-semibold mb-4 text-[#0000AA]">📑 Chapter 9 개요</h2>
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              이 장에서는 1976년 이후 프로그레시브 락의 변화와 발전을 다룹니다:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">⚡ 펑크의 충격</h3>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• Sex Pistols와 The Clash의 등장</li>
                  <li>• &quot;공룡 음악&quot; 비판</li>
                  <li>• 단순함과 직접성의 추구</li>
                  <li>• 프로그레시브 락의 위기</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">🌊 뉴 웨이브의 영향</h3>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• 신서사이저 팝의 부상</li>
                  <li>• 간결한 곡 구조로의 회귀</li>
                  <li>• 전자 음악의 발전</li>
                  <li>• 새로운 미학의 등장</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">🔄 적응과 변화</h3>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Genesis의 팝 전향</li>
                  <li>• Yes의 해체와 재결합</li>
                  <li>• Pink Floyd의 지속적 성공</li>
                  <li>• 새로운 세대 밴드들</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">🎸 네오 프로그레시브</h3>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Marillion의 성공</li>
                  <li>• IQ, Pendragon, Twelfth Night</li>
                  <li>• 전통의 계승과 현대적 해석</li>
                  <li>• 1980년대 부활</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">🌍 글로벌 확산</h3>
              <div className="text-sm text-orange-700 space-y-2">
                <p>1980년대 이후 프로그레시브 락의 전 세계적 확산:</p>
                <ul className="text-xs space-y-1 ml-4">
                  <li>• <strong>미국:</strong> Dream Theater, Tool, Queensrÿche</li>
                  <li>• <strong>독일:</strong> Helloween, Blind Guardian (프로그레시브 메탈)</li>
                  <li>• <strong>이탈리아:</strong> Banco del Mutuo Soccorso, PFM의 지속</li>
                  <li>• <strong>일본:</strong> 독특한 프로그레시브 록 씬 발전</li>
                  <li>• <strong>북유럽:</strong> 심포닉 메탈과의 결합</li>
                </ul>
              </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-6">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">🔮 미래 전망</h3>
              <div className="text-sm text-teal-700 space-y-2">
                <p>Macan이 1997년 시점에서 내다본 프로그레시브 락의 미래:</p>
                <ul className="text-xs space-y-1 ml-4">
                  <li>• 디지털 기술의 영향</li>
                  <li>• 새로운 세대의 접근법</li>
                  <li>• 장르 경계의 해체</li>
                  <li>• 지속적인 실험 정신</li>
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
              <strong>원문 내용:</strong> 프로그레시브 락의 쇠퇴와 부활, 그리고 1990년대까지의 
              발전 과정을 상세히 분석합니다. 특히 펑크와 뉴 웨이브의 충격, 네오 프로그레시브의 등장을 다룹니다.
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
              href="/misc/chapters/ch8" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              ← Chapter 8
            </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            Chapter 9 / 9 (미번역)
          </div>
          
          <div className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
            마지막 장
          </div>
        </div>
      </div>
    </div>
  )
}
