"use client";
import Link from "next/link";

export default function LReviewPage() {
  const bands = [
    { name: "Latte E Miele", slug: "latte-e-miele", description: "이탈리아의 심포닉 록 그룹 - Aquile E Scoiattoli, Papillon" },
    { name: "Landberk", slug: "landberk", description: "스웨덴의 프로그레시브 록 밴드" },
    { name: "Led Zeppelin", slug: "led-zeppelin", description: "영국의 전설적인 하드록/헤비메탈 밴드" },
    { name: "Lee, Sung Woo (이성우)", slug: "lee-sung-woo", description: "한국의 프로그레시브 록 뮤지션" },
    { name: "Leer, This Van", slug: "leer-this-van", description: "네덜란드의 키보디스트" },
    { name: "Le Orme", slug: "le-orme", description: "이탈리아의 프로그레시브 록 그룹" },
    { name: "Life", slug: "life", description: "영국의 프로그레시브 록 밴드" },
    { name: "Lizard", slug: "lizard", description: "프로그레시브 록 밴드" },
    { name: "Los Canarios", slug: "los-canarios", description: "스페인의 프로그레시브 록 그룹" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            L
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Latte E Miele부터 Los Canarios까지, L로 시작하는 프로그레시브 록 밴드들의 리뷰 모음
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bands.map((band) => (
            <Link 
              key={band.slug} 
              href={`/review/l/${band.slug}`}
              className="group block"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-200/50">
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors">
                  {band.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {band.description}
                </p>
                <div className="mt-4 flex items-center text-amber-600 text-sm font-medium">
                  리뷰 보기
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/review"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            리뷰 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 