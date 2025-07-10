"use client"

import Link from "next/link"

const bands = [
  {
    name: "Yes",
    description: "영국 • 프로그레시브 록의 거장",
    path: "/review/y/yes",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    info: "Close to the Edge, The Yes Album 등 불멸의 명작들"
  },
  {
    name: "Yellow Magic Orchestra",
    description: "일본 • 일렉트로닉 팝",
    path: "/review/y/ymo",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
    info: "테크노팝의 선구자, YMO"
  },
  {
    name: "Young Marble Giants",
    description: "웨일스 • 포스트 펑크",
    path: "/review/y/youngmarblegiants",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    info: "미니멀한 포스트 펑크의 대표작"
  },
  {
    name: "Yatha Sidhra",
    description: "독일 • 사이키델릭 록",
    path: "/review/y/yathasidhra",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    info: "A Meditation Mass의 신비로운 사운드"
  },
  {
    name: "Youth",
    description: "벨기에 • 프로그레시브 록",
    path: "/review/y/youth",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    info: "벨기에 프로그레시브의 숨은 보석"
  }
]

export default function YPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Y</h1>
            <p className="text-lg text-gray-600">
              Yes부터 Youth까지 - {bands.length}개 밴드
            </p>
          </div>

          {/* Bands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bands.map((band) => (
              <Link
                key={band.name}
                href={band.path}
                className={`block p-6 rounded-lg border-2 transition-colors ${band.color}`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {band.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {band.description}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {band.info}
                </p>
              </Link>
            ))}
          </div>

          {/* Featured */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Y 폴더의 대표작들</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Yes - Close to the Edge (1972):</strong> 
                프로그레시브 록의 절대적 명작, 20분짜리 타이틀 트랙
              </div>
              <div>
                <strong>YMO - Yellow Magic Orchestra (1978):</strong> 
                일본 테크노팝의 출발점, 세계적 성공작
              </div>
              <div>
                <strong>Young Marble Giants - Colossal Youth (1980):</strong> 
                미니멀 포스트 펑크의 완벽한 데뷔작
              </div>
            </div>
          </div>

          {/* Yes 특별 섹션 */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">YES - 프로그레시브 록의 왕</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                1968년 결성된 Yes는 프로그레시브 록 장르를 대표하는 최고의 밴드 중 하나입니다. 
                Jon Anderson의 높은 음역의 보컬, Chris Squire의 멜로딕한 베이스, Steve Howe의 
                다채로운 기타, Rick Wakeman의 웅장한 키보드, Bill Bruford의 정교한 드럼이 
                만들어낸 음악은 지금까지도 많은 뮤지션들에게 영감을 주고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <strong>대표 앨범:</strong>
                  <ul className="list-disc list-inside mt-1 text-xs">
                    <li>The Yes Album (1971)</li>
                    <li>Fragile (1971)</li>
                    <li>Close to the Edge (1972)</li>
                    <li>Tales from Topographic Oceans (1973)</li>
                  </ul>
                </div>
                <div>
                  <strong>주요 멤버:</strong>
                  <ul className="list-disc list-inside mt-1 text-xs">
                    <li>Jon Anderson (보컬)</li>
                    <li>Chris Squire (베이스)</li>
                    <li>Steve Howe (기타)</li>
                    <li>Rick Wakeman (키보드)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Y 폴더 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-700">총 밴드 수</div>
                <div className="text-2xl font-bold text-gray-900">{bands.length}</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">영국</div>
                <div className="text-2xl font-bold text-gray-900">2</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">일본</div>
                <div className="text-2xl font-bold text-gray-900">1</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">기타</div>
                <div className="text-2xl font-bold text-gray-900">2</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 전체 리뷰 목록으로
            </Link>
            <div className="text-gray-500 text-sm">
              Y 폴더 - {bands.length}개 밴드
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 