import Link from "next/link";

export default function AprilWine() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">April Wine</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          April Wine은 캐나다의 록 밴드로, 1970년대와 80년대에 활발히 활동했습니다. 이 밴드는 멜로딕 록과 하드 록을 아우르는 다양한 음악을 선보였습니다.
        </p>
        <p>
          대표곡으로는 "Just Between You and Me", "I Like to Rock" 등이 있으며, 캐나다 록의 전통과 감성을 잘 담아낸 밴드입니다. 멜로딕 록을 좋아하는 분들에게 추천할 만한 밴드입니다.
        </p>
      </div>
    </div>
  );
} 