import Link from "next/link";

export default function AnthonySchwartz() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Anthony Schwartz</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Anthony Schwartz는 미국의 프로그레시브 록 뮤지션으로, 실험적인 사운드와 독특한 음악 세계를 보여줍니다. 그의 음악은 다양한 악기와 전자음, 그리고 변화무쌍한 전개가 특징입니다.
        </p>
        <p>
          실험적이고 독창적인 록을 좋아하는 분들에게 추천할 만한 아티스트입니다.
        </p>
      </div>
    </div>
  );
} 