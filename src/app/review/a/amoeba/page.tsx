import Link from "next/link";

export default function Amoeba() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Amoeba</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Amoeba는 프랑스의 프로그레시브 록 밴드로, 1975년에 "Amoeba"라는 앨범을 발표했습니다. 이 앨범은 실험적인 사운드와 독특한 구성, 그리고 변화무쌍한 전개가 특징입니다.
        </p>
        <p>
          프랑스 록 특유의 감성과 함께, 곡마다 다양한 악기와 사운드가 어우러져 독특한 분위기를 자아냅니다. 실험적인 록을 좋아하는 분들에게 추천할 만한 앨범입니다.
        </p>
      </div>
    </div>
  );
} 