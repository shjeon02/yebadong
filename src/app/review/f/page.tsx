"use client";
import Link from "next/link";

export default function FReviewPage() {
  const bands = [
    { name: "Fabrizio De Andre", slug: "fabriziodeandre", description: "이탈리아 칸타우토레" },
    { name: "Maria Farantouri", slug: "mariafarantouri", description: "그리스 여성 가수" },
    { name: "Far East Family Band", slug: "fareastfamilyband", description: "일본 프로그레시브 록 밴드" },
    { name: "Faust", slug: "faust", description: "독일 크라우트록 밴드" },
    { name: "Fish", slug: "fish", description: "전 Marillion 보컬리스트" },
    { name: "Flamengo", slug: "flamengo", description: "체코슬로바키아 밴드" },
    { name: "Flied Egg", slug: "fliedegg", description: "일본 프로그레시브 록 밴드" },
    { name: "The Flower Kings", slug: "flowerkings", description: "스웨덴 프로그레시브 록 밴드" },
    { name: "Flyte", slug: "flyte", description: "프로그레시브 록 밴드" },
    { name: "Folque", slug: "folque", description: "노르웨이 포크 록 밴드" },
    { name: "Formula 3", slug: "formula3", description: "이탈리아 프로그레시브 록 밴드" },
    { name: "Food Brain", slug: "foodbrain", description: "일본 프로그레시브 록 밴드" },
    { name: "Freedom", slug: "freedom", description: "프로그레시브 록 밴드" },
    { name: "Edgar Froese", slug: "edgarfroese", description: "Tangerine Dream 리더" },
    { name: "Fusion Orchestra", slug: "fusionorchestra", description: "영국 프로그레시브 록 밴드" },
    { name: "Fusioon", slug: "fusioon", description: "스페인 프로그레시브 록 밴드" }
  ];

  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">F</h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            F로 시작하는 아티스트들의 리뷰 모음
          </p>
          <p className="text-sm text-gray-500 mt-2">
            총 {bands.length}개의 밴드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bands.map((band) => (
            <Link 
              key={band.slug}
              href={`/review/f/${band.slug}`}
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