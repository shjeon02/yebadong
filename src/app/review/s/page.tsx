"use client"

import Link from "next/link"

const bands = [
  {
    name: "Saga",
    description: "캐나다 • Pomp Rock • Generation 13",
    path: "/review/s/saga",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
  },
  {
    name: "Sagrado",
    description: "브라질 • Sagrado Coracao Da Terra",
    path: "/review/s/sagrado",
    color: "bg-green-50 border-green-200 hover:bg-green-100"
  },
  {
    name: "Sahara",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/sahara",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
  },
  {
    name: "Salem Hill",
    description: "미국 • 네오 프로그레시브",
    path: "/review/s/salemhill",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
  },
  {
    name: "Samurai",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/samurai",
    color: "bg-red-50 border-red-200 hover:bg-red-100"
  },
  {
    name: "Sandrose",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/sandrose",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100"
  },
  {
    name: "SBB",
    description: "폴란드 • 프로그레시브 록",
    path: "/review/s/sbb",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
  },
  {
    name: "Schicke, Fuhrs, Frohling",
    description: "독일 • 키보드 트리오",
    path: "/review/s/schicke-fuhrs-frohling",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100"
  },
  {
    name: "Sebastian Hardie",
    description: "호주 • 프로그레시브 록",
    path: "/review/s/sebastian",
    color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
  },
  {
    name: "Shadow Gallery",
    description: "미국 • 네오 프로그레시브",
    path: "/review/s/shadow",
    color: "bg-slate-50 border-slate-200 hover:bg-slate-100"
  },
  {
    name: "Shylock",
    description: "프랑스 • 프로그레시브 록",
    path: "/review/s/shylock",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
  },
  {
    name: "Siddartha",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/siddartha",
    color: "bg-violet-50 border-violet-200 hover:bg-violet-100"
  },
  {
    name: "Sindelfingen",
    description: "독일 • Odgipig",
    path: "/review/s/sindelfingen",
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100"
  },
  {
    name: "Richard Sinclair",
    description: "영국 • Caravan 출신",
    path: "/review/s/sinclair",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100"
  },
  {
    name: "Sinkadus",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/sinkadus",
    color: "bg-lime-50 border-lime-200 hover:bg-lime-100"
  },
  {
    name: "Sintesis",
    description: "쿠바 • 프로그레시브 록",
    path: "/review/s/sintesis",
    color: "bg-sky-50 border-sky-200 hover:bg-sky-100"
  },
  {
    name: "Skaldowie",
    description: "폴란드 • Krywan",
    path: "/review/s/skaldowie",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
  },
  {
    name: "Sky",
    description: "영국 • 클래시컬 록",
    path: "/review/s/sky",
    color: "bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100"
  },
  {
    name: "Soft Machine",
    description: "영국 • 캔터베리 씬",
    path: "/review/s/soft-machine",
    color: "bg-stone-50 border-stone-200 hover:bg-stone-100"
  },
  {
    name: "Solar Project",
    description: "네덜란드 • 프로그레시브 록",
    path: "/review/s/solar-project",
    color: "bg-zinc-50 border-zinc-200 hover:bg-zinc-100"
  },
  {
    name: "Solaplexus",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/solaplexus",
    color: "bg-neutral-50 border-neutral-200 hover:bg-neutral-100"
  },
  {
    name: "Solaris",
    description: "헝가리 • 프로그레시브 록",
    path: "/review/s/solaris",
    color: "bg-gray-50 border-gray-200 hover:bg-gray-100"
  },
  {
    name: "Soluna",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/soluna",
    color: "bg-red-100 border-red-300 hover:bg-red-150"
  },
  {
    name: "Solution",
    description: "네덜란드 • 프로그레시브 록",
    path: "/review/s/solution",
    color: "bg-blue-100 border-blue-300 hover:bg-blue-150"
  },
  {
    name: "Spirogyra",
    description: "영국 • 포크 프로그레시브",
    path: "/review/s/spirogyra",
    color: "bg-green-100 border-green-300 hover:bg-green-150"
  },
  {
    name: "Spock's Beard",
    description: "미국 • 네오 프로그레시브",
    path: "/review/s/spocks-beard",
    color: "bg-yellow-100 border-yellow-300 hover:bg-yellow-150"
  },
  {
    name: "Spriguns",
    description: "영국 • 포크 록",
    path: "/review/s/spriguns",
    color: "bg-purple-100 border-purple-300 hover:bg-purple-150"
  },
  {
    name: "Stackridge",
    description: "영국 • 프로그레시브 팝",
    path: "/review/s/stackridge",
    color: "bg-amber-100 border-amber-300 hover:bg-amber-150"
  },
  {
    name: "Arturo Stalteri",
    description: "이탈리아 • 피아니스트",
    path: "/review/s/stalteri",
    color: "bg-teal-100 border-teal-300 hover:bg-teal-150"
  },
  {
    name: "Standarte",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/standarte",
    color: "bg-cyan-100 border-cyan-300 hover:bg-cyan-150"
  },
  {
    name: "Starsailor",
    description: "영국 • 얼터너티브 록",
    path: "/review/s/starsailor",
    color: "bg-slate-100 border-slate-300 hover:bg-slate-150"
  },
  {
    name: "Simon Steensland",
    description: "스웨덴 • 프로그레시브 록",
    path: "/review/s/steensland-simon",
    color: "bg-emerald-100 border-emerald-300 hover:bg-emerald-150"
  },
  {
    name: "Alan Stivell",
    description: "프랑스 • 셀틱 뮤직",
    path: "/review/s/stivell",
    color: "bg-violet-100 border-violet-300 hover:bg-violet-150"
  },
  {
    name: "Stern Combo Meissen",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/stern-combo",
    color: "bg-rose-100 border-rose-300 hover:bg-rose-150"
  },
  {
    name: "Still Life",
    description: "벨기에 • 프로그레시브 록",
    path: "/review/s/still-life",
    color: "bg-pink-100 border-pink-300 hover:bg-pink-150"
  },
  {
    name: "Stone Angel",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/stone-angel",
    color: "bg-lime-100 border-lime-300 hover:bg-lime-150"
  },
  {
    name: "Strangers On A Train",
    description: "영국 • 네오 프로그레시브",
    path: "/review/s/strangers-on-a-train",
    color: "bg-sky-100 border-sky-300 hover:bg-sky-150"
  },
  {
    name: "Strawbs",
    description: "영국 • 포크 프로그레시브",
    path: "/review/s/strawbs",
    color: "bg-indigo-100 border-indigo-300 hover:bg-indigo-150"
  },
  {
    name: "Stromboli",
    description: "독일 • 프로그레시브 록",
    path: "/review/s/stromboli",
    color: "bg-fuchsia-100 border-fuchsia-300 hover:bg-fuchsia-150"
  },
  {
    name: "Supertramp",
    description: "영국 • 프로그레시브 팝",
    path: "/review/s/supertramp",
    color: "bg-stone-100 border-stone-300 hover:bg-stone-150"
  },
  {
    name: "David Sylvian",
    description: "영국 • Japan 출신",
    path: "/review/s/david-sylvian",
    color: "bg-zinc-100 border-zinc-300 hover:bg-zinc-150"
  },
  {
    name: "Symphony X",
    description: "미국 • 프로그레시브 메탈",
    path: "/review/s/symphony-x",
    color: "bg-neutral-100 border-neutral-300 hover:bg-neutral-150"
  }
]

export default function SPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">S</h1>
            <p className="text-lg text-gray-600">
              Saga부터 Symphony X까지 - {bands.length}개 밴드
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
            <h2 className="text-xl font-semibold text-blue-800 mb-4">S 폴더 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-700">총 밴드 수</div>
                <div className="text-2xl font-bold text-blue-900">{bands.length}</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">영국/미국</div>
                <div className="text-2xl font-bold text-blue-900">15</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">독일</div>
                <div className="text-2xl font-bold text-blue-900">12</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">기타 국가</div>
                <div className="text-2xl font-bold text-blue-900">14</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">주목할 만한 밴드들</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Saga:</strong> 캐나다의 대표적인 Pomp Rock 밴드 - Generation 13 앨범 중심
              </div>
              <div>
                <strong>Sagrado Coracao Da Terra:</strong> 브라질 80년대 프로그레시브의 선두주자
              </div>
              <div>
                <strong>Soft Machine:</strong> 영국 캔터베리 씬의 핵심 밴드
              </div>
              <div>
                <strong>Spock's Beard:</strong> 90년대 미국 네오 프로그레시브의 대표주자
              </div>
              <div>
                <strong>Supertramp:</strong> 프로그레시브 팝의 거장들
              </div>
              <div>
                <strong>Symphony X:</strong> 프로그레시브 메탈의 선구자
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 전체 리뷰 목록으로
            </Link>
            <div className="text-gray-500 text-sm">
              S 폴더 - {bands.length}개 밴드 (변환 진행 중)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 