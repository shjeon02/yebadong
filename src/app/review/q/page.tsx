"use client";
import Link from "next/link";

const bands = [
  { name: "Quantum", slug: "quantum", description: "브라질의 따뜻하고 부드러운 프로그레시브 록 밴드" },
  { name: "Quaser", slug: "quaser", description: "일본의 EL&P 스타일 프로그레시브 록 밴드" },
  { name: "Quidam", slug: "quidam", description: "폴란드의 아름다운 심포닉 프로그레시브 록 밴드" },
  { name: "Quiet World", slug: "quietworld", description: "오케스트레이션이 포함된 심포닉 프로그레시브 록" },
  { name: "Quilapayun", slug: "quilapayun", description: "칠레의 정치적 메시지를 담은 포크/프로그레시브 그룹" }
];

export default function ReviewQBandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Q로 시작하는 프로그레시브 록 밴드 목록</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Q로 시작하는 아티스트들의 리뷰 모음
          </p>
          <p className="text-sm text-gray-500 mt-2">
            총 {bands.length}개의 밴드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bands.map((band) => (
            <Link 
              key={band.slug}
              href={`/review/q/${band.slug}`}
              className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
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