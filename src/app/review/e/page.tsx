"use client";
import Link from "next/link";

export default function EReviewPage() {
  const bands = [
    { name: "Earth and Fire", slug: "earthandfire", description: "네덜란드 프로그레시브 록 밴드" },
    { name: "Echolyn", slug: "echolyn", description: "미국 프로그레시브 록 밴드" },
    { name: "Edu e tom", slug: "eduetom", description: "브라질 밴드" },
    { name: "Eela Craig", slug: "eelacraig", description: "오스트리아 프로그레시브 록 밴드" },
    { name: "Ego Wrappin", slug: "egowrappin", description: "일본 밴드" },
    { name: "Elend", slug: "elend", description: "프랑스 다크 앰비언트 밴드" },
    { name: "Eloy", slug: "eloy", description: "독일 프로그레시브 록 밴드" },
    { name: "Emerson, Lake and Palmer", slug: "elp", description: "영국 프로그레시브 록 슈퍼그룹" },
    { name: "Emperor", slug: "emperor", description: "노르웨이 블랙 메탈 밴드" },
    { name: "England - Garden Shed", slug: "england-gardenshed", description: "영국 밴드" },
    { name: "Enid", slug: "enid", description: "영국 프로그레시브 록 밴드" },
    { name: "Esperanto", slug: "esperanto", description: "다국적 밴드" },
    { name: "Espiritu", slug: "espiritu", description: "필리핀 밴드" },
    { name: "Et Cetera", slug: "etcetera", description: "네덜란드 밴드" },
    { name: "Etron Fou Leloublan", slug: "etronfouleloublan", description: "프랑스 아방가르드 록 밴드" },
    { name: "Explorer's club", slug: "explorersclub", description: "미국 프로그레시브 록 밴드" }
  ];

  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">E</h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            E로 시작하는 아티스트들의 리뷰 모음
          </p>
          <p className="text-sm text-gray-500 mt-2">
            총 {bands.length}개의 밴드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bands.map((band) => (
            <Link 
              key={band.slug}
              href={`/review/e/${band.slug}`}
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