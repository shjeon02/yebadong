"use client"

import Link from "next/link"

const bands = [
  {
    name: "Wapassou",
    description: "프랑스 • 챔버 록",
    path: "/review/w/wapassou",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    info: "프랑스 전위 록의 숨은 보석"
  },
  {
    name: "Rick Wakeman",
    description: "영국 • 키보드 마스터",
    path: "/review/w/rickwakeman",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    info: "Yes 멤버의 솔로 걸작들"
  },
  {
    name: "Roger Waters",
    description: "영국 • 컨셉 록",
    path: "/review/w/rogerwaters",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    info: "Pink Floyd 멤버의 정치적 메시지"
  },
  {
    name: "Jeff Wayne",
    description: "영국 • 프로그레시브 록 오페라",
    path: "/review/w/jeffwayne",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
    info: "War of the Worlds 뮤지컬의 작곡가"
  },
  {
    name: "Whistler",
    description: "프로그레시브 록",
    path: "/review/w/whistler",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    info: "독특한 사운드의 인디 프로그레시브"
  },
  {
    name: "Rick Wright",
    description: "영국 • 키보드 마스터",
    path: "/review/w/rickwright",
    color: "bg-red-50 border-red-200 hover:bg-red-100",
    info: "Pink Floyd 멤버의 솔로 작품"
  },
  {
    name: "Robert Wyatt",
    description: "영국 • 캔터베리 록",
    path: "/review/w/robertwyatt",
    color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
    info: "Soft Machine 멤버의 아방가르드 록"
  }
]

export default function WPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">W</h1>
            <p className="text-lg text-gray-600">
              Wapassou부터 Robert Wyatt까지 - {bands.length}개 밴드
            </p>
          </div>

          {/* Bands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {bands.map((band) => (
              <Link
                key={band.name}
                href={band.path}
                className={`block p-6 rounded-lg border-2 transition-colors ${band.color}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

          {/* Featured Albums */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">W 폴더의 명작들</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Roger Waters - The Wall (1979):</strong> 
                Pink Floyd의 컨셉 앨범, 정치적 메시지와 록 오페라의 결합
              </div>
              <div>
                <strong>Rick Wakeman - The Six Wives of Henry VIII (1973):</strong> 
                키보드 마스터의 대표작, 클래식과 록의 융합
              </div>
              <div>
                <strong>Robert Wyatt - Rock Bottom (1974):</strong> 
                캔터베리 록의 명작, 아방가르드 록의 정점
              </div>
              <div>
                <strong>Jeff Wayne - War of the Worlds (1978):</strong> 
                프로그레시브 록 오페라의 걸작
              </div>
            </div>
          </div>

          {/* Roger Waters 특별 섹션 */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Roger Waters - Pink Floyd의 정치적 메시지</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Roger Waters</strong>는 Pink Floyd의 베이시스트이자 주요 작사가로 활동하며, 
                솔로 활동에서도 정치적 메시지와 사회 비판을 음악으로 표현한 아티스트입니다.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <strong>주요 솔로 앨범:</strong>
                  <ul className="list-disc list-inside mt-1 text-xs">
                    <li>Amused to Death (1992)</li>
                    <li>Radio K.A.O.S (1987)</li>
                    <li>In the Flesh (2000)</li>
                    <li>The Wall Live (투어)</li>
                  </ul>
                </div>
                <div>
                  <strong>주요 테마:</strong>
                  <ul className="list-disc list-inside mt-1 text-xs">
                    <li>반전 메시지</li>
                    <li>정치적 비판</li>
                    <li>사회 소외</li>
                    <li>미디어 비판</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Genre Distribution */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">장르별 분포</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>프로그레시브 록</span>
                <span className="font-medium">3개</span>
              </div>
              <div className="flex justify-between">
                <span>캔터베리 록</span>
                <span className="font-medium">1개</span>
              </div>
              <div className="flex justify-between">
                <span>챔버 록</span>
                <span className="font-medium">1개</span>
              </div>
              <div className="flex justify-between">
                <span>키보드 마스터</span>
                <span className="font-medium">2개</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">W 폴더 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-700">총 밴드 수</div>
                <div className="text-2xl font-bold text-gray-900">{bands.length}</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">영국</div>
                <div className="text-2xl font-bold text-gray-900">5</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">프랑스</div>
                <div className="text-2xl font-bold text-gray-900">1</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">기타</div>
                <div className="text-2xl font-bold text-gray-900">1</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 전체 리뷰 목록으로
            </Link>
            <div className="text-gray-500 text-sm">
              W 폴더 - {bands.length}개 밴드
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 