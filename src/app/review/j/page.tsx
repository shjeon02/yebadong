"use client";
import Link from "next/link";

export default function JReviewPage() {
  const bands = [
    { name: "J.E.T.", slug: "jet", description: "이탈리아 하드 프로그레시브 록의 명반 - Fede, Speranza, Carita" },
    { name: "Jackson Heights", slug: "jackson-heights", description: "Nice의 Lee Jackson이 결성한 대중적 음악 그룹" },
    { name: "Jadis", slug: "jadis", description: "Gary Chandler가 이끄는 네오 프로그레시브 밴드" },
    { name: "Jade Warrior", slug: "jade-warrior", description: "동양적 분위기의 재즈록을 연주하는 unique한 그룹" },
    { name: "Los Jaivas", slug: "los-jaivas", description: "칠레의 대표 그룹 - Pablo Neruda의 시에 곡을 붙인 작품" },
    { name: "Jody Grind", slug: "jody-grind", description: "Tim Hinkley를 주축으로 한 사이키 하드록 그룹" },
    { name: "Jon and Vangelis", slug: "jon-and-vangelis", description: "Yes의 Jon Anderson과 Vangelis의 협업 프로젝트" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">J 밴드 리뷰</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => (
          <div key={band.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <Link href={`/review/j/${band.slug}`}>
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