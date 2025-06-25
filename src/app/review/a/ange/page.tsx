import Link from "next/link";

export default function Ange() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Ange</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Ange는 프랑스의 대표적인 프로그레시브 록 밴드로, 1970년대에 활발히 활동했습니다. 이 밴드는 연극적인 무대 연출과 서정적인 멜로디, 그리고 프랑스어 가사가 특징입니다.
        </p>
        <p>
          대표 앨범으로는 "Au-delà du Délire", "Le Cimetière des Arlequins" 등이 있으며, 프랑스 프로그레시브 록의 정수를 보여주는 밴드입니다. 프랑스 록을 좋아하는 분들에게 추천할 만한 밴드입니다.
        </p>
      </div>
    </div>
  );
} 