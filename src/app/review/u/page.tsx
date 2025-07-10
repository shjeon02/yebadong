"use client"

import Link from "next/link"

const bands = [
  {
    name: "UK",
    description: "영국 • 수퍼그룹 프로그레시브",
    path: "/review/u/uk",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    info: "John Wetton, Bill Bruford, Eddie Jobson, Allan Holdsworth"
  },
  {
    name: "Univers Zero",
    description: "벨기에 • 챔버 록",
    path: "/review/u/universzero",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    info: "어두운 분위기의 아방가르드 록"
  },
  {
    name: "Urban Sax",
    description: "프랑스 • 색소폰 앙상블",
    path: "/review/u/urbansax",
    color: "bg-green-50 border-green-200 hover:bg-green-100",
    info: "Gilbert Artman이 이끄는 대규모 색소폰 그룹"
  }
]

export default function UPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">U</h1>
            <p className="text-lg text-gray-600">
              UK부터 Urban Sax까지 - {bands.length}개 밴드
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

          {/* Featured Album */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">주목할 만한 앨범</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>UK - UK (1978):</strong> 
                수퍼그룹의 데뷔작으로 프로그레시브 록 역사상 가장 완벽한 라인업 중 하나
              </div>
              <div>
                <strong>Univers Zero - 1313 (1979):</strong> 
                벨기에 아방가르드 록의 걸작, 어둡고 신비로운 분위기
              </div>
              <div>
                <strong>Urban Sax - Urban Sax (1977):</strong> 
                색소폰 앙상블의 실험적 음악, 대규모 편성의 압도적 사운드
              </div>
            </div>
          </div>

          {/* UK 멤버 소개 */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">UK 멤버 소개</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>John Wetton:</strong> 
                King Crimson 출신 베이시스트/보컬리스트, 후에 Asia 결성
              </div>
              <div>
                <strong>Bill Bruford:</strong> 
                Yes, King Crimson 출신 드러머, "물결 드러밍"으로 유명
              </div>
              <div>
                <strong>Eddie Jobson:</strong> 
                Roxy Music, Curved Air 출신 키보디스트/바이올리니스트
              </div>
              <div>
                <strong>Allan Holdsworth:</strong> 
                Soft Machine 출신 기타리스트, 매우 부드럽고 정교한 연주
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">U 폴더 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-gray-700">총 밴드 수</div>
                <div className="text-2xl font-bold text-gray-900">{bands.length}</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">영국</div>
                <div className="text-2xl font-bold text-gray-900">1</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">유럽</div>
                <div className="text-2xl font-bold text-gray-900">2</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">수퍼그룹</div>
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
              U 폴더 - {bands.length}개 밴드
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 