"use client";
import Link from "next/link";

export default function IReviewPage() {
  const bands = [
    { name: "I Dik Dik", slug: "i-dik-dik", description: "이탈리아 팝록 밴드 - Volando" },
    { name: "IQ", slug: "iq", description: "영국 네오 프로그레시브 록의 대표주자" },
    { name: "Iris", slug: "iris", description: "Marillion 멤버들의 사이드 프로젝트" },
    { name: "Island", slug: "island", description: "스위스 아방가르드 프로그레시브 록" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">I 밴드 리뷰</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => (
          <div key={band.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Link href={`/review/i/${band.slug}`}>
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                {band.name}
              </h2>
              <p className="text-gray-600">{band.description}</p>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/review" className="text-blue-600 hover:text-blue-800">
          ← 리뷰 메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 