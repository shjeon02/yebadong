"use client";
import Link from "next/link";

export default function HReviewPage() {
  const bands = [
    { name: "H. Tamaki & SMT", slug: "h-tamaki-smt", description: "일본 클래식 프로그레시브 록" },
    { name: "H2O", slug: "h2o", description: "이탈리아 심포닉 프로그레시브 록" },
    { name: "Steve Hackett", slug: "steve-hackett", description: "전 Genesis 기타리스트의 솔로 프로젝트" },
    { name: "Haikara", slug: "haikara", description: "일본 프로그레시브 록 밴드" },
    { name: "Peter Hammill", slug: "peter-hammill", description: "Van der Graaf Generator 보컬리스트의 솔로 프로젝트" },
    { name: "Hannibal", slug: "hannibal", description: "프로그레시브 록 밴드" },
    { name: "Happy End", slug: "happy-end", description: "일본 포크 록 밴드" },
    { name: "Harmonium", slug: "harmonium", description: "캐나다 프로그레시브 포크 록" },
    { name: "Hatfield and the North", slug: "hatfield-and-the-north", description: "영국 캔터베리 씬 밴드" },
    { name: "Hawkwind", slug: "hawkwind", description: "영국 스페이스 록의 전설" },
    { name: "Heldon", slug: "heldon", description: "프랑스 일렉트로닉 록 밴드" },
    { name: "Anders Helmerson", slug: "anders-helmerson", description: "스웨덴 프로그레시브 록 뮤지션" },
    { name: "Henry Cow", slug: "henry-cow", description: "영국 아방가르드 록 밴드" },
    { name: "Hiro Yanagida", slug: "hiro-yanagida", description: "일본 프로그레시브 록 뮤지션" },
    { name: "Roger Hodgson", slug: "roger-hodgson", description: "Supertramp 멤버의 솔로 프로젝트" },
    { name: "Horizont", slug: "horizont", description: "프로그레시브 록 밴드" },
    { name: "Horslips", slug: "horslips", description: "아일랜드 켈틱 록 밴드" },
    { name: "Humus", slug: "humus", description: "프로그레시브 록 밴드" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">H 밴드 리뷰</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => (
          <div key={band.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Link href={`/review/h/${band.slug}`}>
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