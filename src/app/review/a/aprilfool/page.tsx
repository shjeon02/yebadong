import Link from "next/link";

export default function AprilFool() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">April Fool</h2>
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p className="mb-2 whitespace-pre-line">
April Fool은 일본의 사이키델릭/프로그레시브 록 밴드로, 1969년에 "The April Fool"이라는 앨범을 발표했습니다. 이 앨범은 실험적인 사운드와 변화무쌍한 전개, 그리고 일본 록 특유의 감성이 돋보입니다.

일본 록의 실험성과 창의성을 좋아하는 분들에게 추천할 만한 밴드입니다.
        </p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 