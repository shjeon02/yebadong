import Link from "next/link";

export default function AyreonPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Ayreon</h2>
        <p className="mb-2 whitespace-pre-line">네덜란드의 프로그레시브 메탈/록 프로젝트</p>
        <p className="mb-2 whitespace-pre-line">
Ayreon은 네덜란드의 음악가 Arjen Anthony Lucassen이 주도하는 
프로그레시브 메탈/록 프로젝트로, 1990년대 중반부터 시작된 
현대 프로그레시브 록의 대표주자이다.
        </p>
        <p className="mb-2 whitespace-pre-line">**특징**
- 네덜란드의 프로그레시브 메탈/록 프로젝트
- Arjen Anthony Lucassen 주도
- 컨셉 앨범과 록 오페라 전문
- 다양한 게스트 뮤지션들과의 협업</p>
        <p className="mb-2 whitespace-pre-line">**음악적 특징**
과학 소설적 스토리텔링을 바탕으로 한 컨셉 앨범과 
록 오페라를 전문으로 하며, 프로그레시브 록, 메탈, 
포크, 일렉트로니카 등 다양한 장르를 융합한 
독창적인 사운드를 선보인다.</p>
        <p className="mb-2 whitespace-pre-line">**대표작**
- The Final Experiment (1995)
- Into the Electric Castle (1998)
- The Human Equation (2004)
- 01011001 (2008)</p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 