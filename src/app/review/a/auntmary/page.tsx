import Link from "next/link";

export default function AuntMaryPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Aunt Mary</h2>
        <p className="mb-2 whitespace-pre-line">노르웨이의 프로그레시브 록 밴드</p>
        <p className="mb-2 whitespace-pre-line">
Aunt Mary는 노르웨이 출신의 프로그레시브 록 밴드로, 
1970년대 초에 활동한 스칸디나비아 프로그레시브 록의 대표주자이다.
        </p>
        <p className="mb-2 whitespace-pre-line">**특징**
- 노르웨이의 프로그레시브 록 밴드
- 1970년대 초 활동
- 스칸디나비아 프로그레시브 록의 선구자
- 북유럽 특유의 차가우면서도 서정적인 사운드</p>
        <p className="mb-2 whitespace-pre-line">**음악적 특징**
북유럽 특유의 차가우면서도 서정적인 사운드를 바탕으로 한 
프로그레시브 록을 연주했으며, 특히 키보드와 기타의 조화가 
인상적인 밴드였다. 스칸디나비아 프로그레시브 록의 
초기 형태를 보여주는 중요한 밴드이다.</p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 