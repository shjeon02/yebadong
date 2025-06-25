import Link from "next/link";

export default function Asia() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Asia</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Asia는 영국의 슈퍼그룹으로, 1980년대 초에 결성되어 "Asia"라는 앨범으로 데뷔했습니다. 이 밴드는 멜로딕 록과 프로그레시브 록의 조화가 특징입니다.
        </p>
        <p>
          대표곡으로는 "Heat of the Moment", "Only Time Will Tell" 등이 있으며, 멜로딕 록을 좋아하는 분들에게 추천할 만한 밴드입니다.
        </p>
      </div>
    </div>
  );
} 