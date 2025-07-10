"use client"

import Link from "next/link"

const bands = [
  {
    name: "Raccanandata",
    description: "이탈리아 재즈 록 • R.R.R.",
    path: "/review/r/raccanandata",
    color: "bg-red-50 border-red-200 hover:bg-red-100"
  },
  {
    name: "Ragnarok (Sweden)",
    description: "스웨덴 포크 프로그레시브",
    path: "/review/r/ragnarokswe",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
  },
  {
    name: "Ragnarok (New Zealand)",
    description: "뉴질랜드 심포닉 록",
    path: "/review/r/ragnaroknz",
    color: "bg-green-50 border-green-200 hover:bg-green-100"
  },
  {
    name: "Rainbow Theatre",
    description: "호주 심포닉 록",
    path: "/review/r/rainbowtheatre",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
  },
  {
    name: "Raw Material",
    description: "영국 재즈 록 • Neon",
    path: "/review/r/rawmaterial",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
  },
  {
    name: "Reale Accademia Di Musica",
    description: "이탈리아 프로그레시브",
    path: "/review/r/realeaccademia",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
  },
  {
    name: "Red Jasper",
    description: "영국 프로그레시브 • Medieval",
    path: "/review/r/redjasper",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100"
  },
  {
    name: "Renaissance",
    description: "영국 프로그레시브 • 애니 해슬램",
    path: "/review/r/renaissance",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100"
  },
  {
    name: "Il Rovescio Della Medaglia",
    description: "이탈리아 바로크 록 • Bach",
    path: "/review/r/rdm",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
  },
  {
    name: "RSC",
    description: "폴란드 프로그레시브 • Kansas",
    path: "/review/r/rsc",
    color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
  },
  {
    name: "Ruins",
    description: "일본 Zeuhl • Punk Zeuhl",
    path: "/review/r/ruins",
    color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
  },
  {
    name: "Rime of the Ancient Sampler",
    description: "영국 • Mellotron 추모 앨범",
    path: "/review/r/rimeoftheancientsampler",
    color: "bg-slate-50 border-slate-200 hover:bg-slate-100"
  },
  {
    name: "Rolling Stones",
    description: "영국 • Their Satanic Majesties Request",
    path: "/review/r/rollingstones",
    color: "bg-violet-50 border-violet-200 hover:bg-violet-100"
  },
  {
    name: "Romantic Warrior",
    description: "이탈리아 • Vinyl Magic Neo-Prog",
    path: "/review/r/romanticwarrior",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100"
  },
  {
    name: "Roxy Music",
    description: "영국 • 세련된 모더니티의 극치",
    path: "/review/r/roxymusic",
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100"
  },
  {
    name: "Ryuichi Sakamoto",
    description: "일본 • Jobim 트리뷰트",
    path: "/review/r/ryuichisakamoto",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
  }
]

export default function RPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">R</h1>
            <p className="text-lg text-gray-600">
              Renaissance부터 Ruins까지 - {bands.length}개 밴드
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
                <p className="text-sm text-gray-600">
                  {band.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Statistics */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">R 폴더 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-700">총 밴드 수</div>
                <div className="text-2xl font-bold text-blue-900">{bands.length}</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">이탈리아</div>
                <div className="text-2xl font-bold text-blue-900">4</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">영국</div>
                <div className="text-2xl font-bold text-blue-900">6</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">기타 국가</div>
                <div className="text-2xl font-bold text-blue-900">6</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">주목할 만한 밴드들</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Renaissance:</strong> 애니 해슬램의 천상의 목소리로 유명한 영국 프로그레시브의 대표주자
              </div>
              <div>
                <strong>Il Rovescio Della Medaglia:</strong> Bach의 평균율클라비어를 록으로 재해석한 이탈리아 바로크 록의 걸작
              </div>
              <div>
                <strong>Ruins:</strong> Tatsuya Yoshida의 "Punk Zeuhl" - Magma에서 영감을 받은 일본의 독창적 해석
              </div>
              <div>
                <strong>Ragnarok (두 밴드):</strong> 스웨덴과 뉴질랜드에서 각각 활동한 동명의 프로그레시브 밴드들
              </div>
              <div>
                <strong>Roxy Music:</strong> 브라이언 페리와 브라이언 이노의 만남 - 세련된 모더니티의 극치
              </div>
              <div>
                <strong>Rime of the Ancient Sampler:</strong> 17명의 영국 키보디스트들이 참여한 멜로트론 추모 프로젝트
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 전체 리뷰 목록으로
            </Link>
            <div className="text-gray-500 text-sm">
              R 폴더 - 16개 밴드 완료
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 