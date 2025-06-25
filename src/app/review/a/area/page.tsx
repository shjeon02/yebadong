import Link from "next/link";

export default function Area() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Area</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Area는 이탈리아의 재즈 록/아방가르드 록 밴드로, 1970년대에 활발히 활동했습니다. 이 밴드는 실험적인 사운드와 복잡한 구조, 그리고 강렬한 연주가 특징입니다.
        </p>
        <p>
          대표 앨범으로는 "Arbeit Macht Frei", "Crac!" 등이 있으며, 이탈리아 록의 실험성과 창의성을 잘 보여주는 밴드입니다. 아방가르드 록을 좋아하는 분들에게 추천할 만한 밴드입니다.
        </p>
      </div>
    </div>
  );
} 