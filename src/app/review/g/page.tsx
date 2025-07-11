"use client";
import Link from "next/link";

export default function GReviewPage() {
  const bands = [
    { name: "Peter Gabriel", slug: "peter-gabriel", description: "전 Genesis 보컬리스트의 솔로 프로젝트" },
    { name: "Galaxy-Lin", slug: "galaxy-lin", description: "프로그레시브 록 밴드" },
    { name: "Garmarna", slug: "garmarna", description: "스웨덴 포크 록 밴드" },
    { name: "Genesis", slug: "genesis", description: "영국 프로그레시브 록의 전설" },
    { name: "Genesis & Peter Gabriel", slug: "genesis-peter-gabriel", description: "Genesis와 Peter Gabriel 특집" },
    { name: "Gentle Giant", slug: "gentle-giant", description: "영국 프로그레시브 록의 거장" },
    { name: "Gerard/Ars Nova", slug: "gerard-ars-nova", description: "Keyboard Triangle 프로젝트" },
    { name: "Il Giardino Dei Semplici", slug: "il-giardino-dei-semplici", description: "이탈리아 프로그레시브 록" },
    { name: "I Giganti", slug: "i-giganti", description: "이탈리아 프로그레시브 록" },
    { name: "Gigi Pascal", slug: "gigi-pascal", description: "프로그레시브 록 아티스트" },
    { name: "Gnidrolog", slug: "gnidrolog", description: "영국 프로그레시브 록 밴드" },
    { name: "Goblin", slug: "goblin", description: "이탈리아 프로그레시브 록/사운드트랙" },
    { name: "Godspeed You! Black Emperor", slug: "godspeed-you-black-emperor", description: "캐나다 포스트 록 밴드" },
    { name: "Gong", slug: "gong", description: "영국/프랑스 사이키델릭 프로그레시브 록" },
    { name: "Gotic", slug: "gotic", description: "프로그레시브 록 밴드" },
    { name: "Gracious", slug: "gracious", description: "영국 프로그레시브 록 밴드" },
    { name: "Gravy Train", slug: "gravy-train", description: "영국 프로그레시브 록 밴드" },
    { name: "The Greatest Show on Earth", slug: "the-greatest-show-on-earth", description: "프로그레시브 록 밴드" },
    { name: "Gruppo 2001", slug: "gruppo-2001", description: "이탈리아 프로그레시브 록" },
    { name: "Gun", slug: "gun", description: "프로그레시브 록 밴드" },
    { name: "Guru Guru", slug: "guru-guru", description: "독일 크라우트록 밴드" }
  ];

  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">G</h1>
        
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            G로 시작하는 아티스트들의 리뷰 모음
          </p>
          <p className="text-sm text-gray-500 mt-2">
            총 {bands.length}개의 밴드
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bands.map((band) => (
            <Link 
              key={band.slug}
              href={`/review/g/${band.slug}`}
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