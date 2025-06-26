import Link from "next/link";

export default function Analogy() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Analogy</h2>
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p className="mb-2 whitespace-pre-line">
Analogy는 독일 출신의 프로그레시브 록 밴드로, 1972년에 "Analogy"라는 앨범을 발표했습니다. 이 앨범은 여성 보컬과 실험적인 사운드, 그리고 변화무쌍한 전개가 특징입니다.

독일 록 특유의 실험성과 함께, 곡마다 다양한 악기와 사운드가 어우러져 독특한 분위기를 자아냅니다. 여성 보컬 프로그레시브 록을 좋아하는 분들에게 추천할 만한 앨범입니다.
        </p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 