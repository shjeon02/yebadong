import Link from "next/link";

export default function AntonioVivaldi() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Antonio Vivaldi</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Antonio Vivaldi는 이탈리아의 바로크 시대 작곡가로, "사계"(Le quattro stagioni)로 가장 잘 알려져 있습니다. 그의 음악은 화려한 선율과 역동적인 리듬이 특징입니다.
        </p>
        <p>
          클래식 음악을 좋아하는 분들에게 추천할 만한 작곡가입니다.
        </p>
      </div>
    </div>
  );
} 