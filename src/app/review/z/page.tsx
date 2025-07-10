"use client";
import Link from "next/link";

const bands = [
  { name: "Zao", slug: "zao", description: "프랑스 Zeuhl 밴드, 마그마의 첫 번째 자손" },
  { name: "Frank Zappa", slug: "frankzappa", description: "미국의 실험적 프로그레시브 록 아티스트" }
];

export default function ReviewZBandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Z로 시작하는 프로그레시브 록 밴드 목록</h2>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            Z로 시작하는 아티스트들의 리뷰 모음
          </p>
          <p className="text-sm text-gray-500 mt-2">
            총 {bands.length}개의 밴드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bands.map((band) => (
            <Link 
              key={band.slug}
              href={`/review/z/${band.slug}`}
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