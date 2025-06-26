import Link from "next/link";

export default function Amadis() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Amadis</h2>
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p className="mb-2 whitespace-pre-line">
Amadis는 프랑스의 심포닉 록 밴드로, 1975년에 "Amadis"라는 앨범을 발표했습니다. 이 앨범은 클래식과 록의 조화, 그리고 서정적인 멜로디가 돋보이는 작품입니다.

특히 키보드와 기타의 조화, 그리고 곡마다 변화무쌍한 전개가 인상적입니다. 프랑스 록 특유의 감성과 함께 높은 완성도를 자랑합니다.

심포닉 록을 좋아하는 분들에게 추천할 만한 앨범입니다.
        </p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 