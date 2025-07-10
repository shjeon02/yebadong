"use client"

import Link from "next/link"

const bands = [
  {
    name: "Tai Phong",
    description: "프랑스 • 베트남계 심포닉 록",
    path: "/review/t/taiphong",
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
  },
  {
    name: "Talking Heads",
    description: "미국 • 아트 록 • 뉴웨이브",
    path: "/review/t/talkingheads", 
    color: "bg-green-50 border-green-200 hover:bg-green-100"
  },
  {
    name: "Tangerine Dream",
    description: "독일 • 일렉트로닉 뮤직",
    path: "/review/t/tangerinedream",
    color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
  },
  {
    name: "Tangle Edge",
    description: "프로그레시브 록",
    path: "/review/t/tangleedge",
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
  },
  {
    name: "Tarantula",
    description: "프로그레시브 록",
    path: "/review/t/tarantula",
    color: "bg-red-50 border-red-200 hover:bg-red-100"
  },
  {
    name: "T2",
    description: "영국 • 프로그레시브 록",
    path: "/review/t/t2",
    color: "bg-amber-50 border-amber-200 hover:bg-amber-100"
  },
  {
    name: "Tears For Fears",
    description: "영국 • 신시팝 • 뉴웨이브",
    path: "/review/t/tearsforfears",
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
  },
  {
    name: "Tempus Fugit",
    description: "프로그레시브 록",
    path: "/review/t/tempusfugit",
    color: "bg-teal-50 border-teal-200 hover:bg-teal-100"
  },
  {
    name: "Teru's Symphonia",
    description: "일본 • 심포닉 프로그레시브",
    path: "/review/t/terussymphonia",
    color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
  },
  {
    name: "Timescape",
    description: "프로그레시브 록",
    path: "/review/t/timescape",
    color: "bg-slate-50 border-slate-200 hover:bg-slate-100"
  },
  {
    name: "Tipographica",
    description: "프로그레시브 록",
    path: "/review/t/tipographica",
    color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
  },
  {
    name: "Umberto Tozzi",
    description: "이탈리아 • 팝 록",
    path: "/review/t/umbertotozzi",
    color: "bg-violet-50 border-violet-200 hover:bg-violet-100"
  },
  {
    name: "Trace",
    description: "네덜란드 • 프로그레시브 록",
    path: "/review/t/trace",
    color: "bg-rose-50 border-rose-200 hover:bg-rose-100"
  },
  {
    name: "Transatlantic",
    description: "미국 • 수퍼그룹 프로그레시브",
    path: "/review/t/transatlantic",
    color: "bg-pink-50 border-pink-200 hover:bg-pink-100"
  },
  {
    name: "The Trinity",
    description: "프로그레시브 록",
    path: "/review/t/thetrinity",
    color: "bg-lime-50 border-lime-200 hover:bg-lime-100"
  },
  {
    name: "Trip",
    description: "이탈리아 • 프로그레시브 록",
    path: "/review/t/trip",
    color: "bg-sky-50 border-sky-200 hover:bg-sky-100"
  },
  {
    name: "Il Trono Dei Ricordi",
    description: "이탈리아 • 프로그레시브 록",
    path: "/review/t/iltronodeiricordi",
    color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100"
  },
  {
    name: "Twelfth Night",
    description: "영국 • 네오 프로그레시브",
    path: "/review/t/twelfthnight",
    color: "bg-fuchsia-50 border-fuchsia-200 hover:bg-fuchsia-100"
  }
]

export default function TPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">T</h1>
            <p className="text-lg text-gray-600">
              Tai Phong부터 Twelfth Night까지 - {bands.length}개 밴드
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
            <h2 className="text-xl font-semibold text-blue-800 mb-4">T 폴더 통계</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-700">총 밴드 수</div>
                <div className="text-2xl font-bold text-blue-900">{bands.length}</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">영국/미국</div>
                <div className="text-2xl font-bold text-blue-900">6</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">유럽</div>
                <div className="text-2xl font-bold text-blue-900">8</div>
              </div>
              <div>
                <div className="font-medium text-blue-700">기타</div>
                <div className="text-2xl font-bold text-blue-900">4</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">주목할 만한 밴드들</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>Tai Phong:</strong> 베트남계 프랑스인 형제가 이끄는 심포닉 록 밴드
              </div>
              <div>
                <strong>Tangerine Dream:</strong> 독일 일렉트로닉 뮤직의 개척자들
              </div>
              <div>
                <strong>Transatlantic:</strong> Mike Portnoy, Neal Morse 등이 참여한 수퍼그룹
              </div>
              <div>
                <strong>Twelfth Night:</strong> 80년대 영국 네오 프로그레시브의 대표주자
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review" className="text-blue-600 hover:text-blue-800 font-medium">
              ← 전체 리뷰 목록으로
            </Link>
            <div className="text-gray-500 text-sm">
              T 폴더 - {bands.length}개 밴드
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 