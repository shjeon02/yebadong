"use client";
import Link from "next/link";

export default function KReviewPage() {
  const bands = [
    { name: "Kaizen", slug: "kaizen", description: "브라질의 심포닉 락 그룹 - Gargula 앨범" },
    { name: "Kansas", slug: "kansas", description: "미국의 70년대 프로그레시브 록의 대표 밴드" },
    { name: "Kayak", slug: "kayak", description: "네덜란드의 서정파 아트록 그룹 - See See The Sun" },
    { name: "Kebnekajse", slug: "kebnekajse", description: "스웨덴의 프로그레시브 록 밴드" },
    { name: "Kenso", slug: "kenso", description: "일본을 대표하는 프로그레시브/퓨전 록 밴드" },
    { name: "Kerrs Pink", slug: "kerrs-pink", description: "노르웨이의 기타 중심 아트록 그룹" },
    { name: "King Crimson", slug: "king-crimson", description: "영국 프로그레시브 록의 전설적인 밴드" },
    { name: "Emma Kirkby", slug: "emma-kirkby", description: "영국의 클래식 소프라노 가수" },
    { name: "Klaatu", slug: "klaatu", description: "캐나다의 신비로운 스페이스 록 그룹 - Hope 앨범" },
    { name: "Koenji Hyakkei", slug: "koenji-hyakkei", description: "일본의 프로그레시브 록 밴드" },
    { name: "Kolinda", slug: "kolinda", description: "크로아티아의 전통 음악 그룹" },
    { name: "Korai Orom", slug: "korai-orom", description: "헝가리의 프로그레시브 록 밴드" },
    { name: "Kraan", slug: "kraan", description: "독일의 크라우트록/재즈록 밴드" },
    { name: "Kultivator", slug: "kultivator", description: "스웨덴의 프로그레시브 록 밴드" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">K 밴드 리뷰</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => (
          <div key={band.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Link href={`/review/k/${band.slug}`}>
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