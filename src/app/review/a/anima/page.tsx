import Link from "next/link";

export default function Anima() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Anima</h2>
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p className="mb-2 whitespace-pre-line">
          Anima는 독일의 실험적/아방가르드 록 밴드로, 1970년대에 활발히 활동했습니다. 이 밴드는 실험적인 사운드와 자유로운 즉흥 연주가 특징입니다.
        </p>
        <p className="mb-2 whitespace-pre-line">
          대표 앨범으로는 "Stürmischer Himmel", "Musik für Alle" 등이 있으며, 독일 아방가르드 록의 실험성과 창의성을 잘 보여주는 밴드입니다. 실험적 록을 좋아하는 분들에게 추천할 만한 밴드입니다.
        </p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 