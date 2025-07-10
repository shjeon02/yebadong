"use client";
import Link from "next/link";

const bands = [
  { name: "Van Der Graaf Generator", slug: "vandergraafgenerator", description: "영국의 독창적이고 복잡한 프로그레시브 록 밴드" },
  { name: "Vangelis", slug: "vangelis", description: "그리스의 신시사이저 대가, 영화음악으로도 유명" },
  { name: "Thijs Van Leer", slug: "thijsvanleer", description: "네덜란드 Focus의 키보디스트 겸 플루티스트" },
  { name: "Christian Vander", slug: "christianvander", description: "프랑스 Magma의 창시자이자 리더" },
  { name: "Raymod Vincent", slug: "raymondvincent", description: "독창적인 프로그레시브 록 아티스트" },
  { name: "Il Volo", slug: "ilvolo", description: "이탈리아의 프로그레시브 록 밴드" }
];

export default function ReviewVBandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">V로 시작하는 프로그레시브 록 밴드 목록</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            V로 시작하는 아티스트들의 리뷰 모음
          </p>
          <p className="text-sm text-gray-500 mt-2">
            총 {bands.length}개의 밴드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bands.map((band) => (
            <Link 
              key={band.slug}
              href={`/review/v/${band.slug}`}
              className="block p-6 bg-violet-50 border border-violet-200 rounded-lg hover:bg-violet-100 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-violet-800">
                {band.name}
              </h3>
              <p className="text-sm text-gray-600">
                {band.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/review" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            전체 리뷰로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 