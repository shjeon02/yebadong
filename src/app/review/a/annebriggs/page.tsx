import Link from "next/link";

export default function AnneBriggs() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Anne Briggs</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Anne Briggs는 영국의 포크 싱어송라이터로, 1971년에 "Anne Briggs"라는 앨범을 발표했습니다. 이 앨범은 순수한 포크 사운드와 아름다운 여성 보컬이 돋보이는 작품입니다.
        </p>
        <p>
          영국 포크 특유의 서정성과 함께, 곡마다 담백한 사운드와 진솔한 감성이 인상적입니다. 여성 보컬 포크를 좋아하는 분들에게 추천할 만한 앨범입니다.
        </p>
      </div>
    </div>
  );
} 