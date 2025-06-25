import Link from "next/link";

export default function AntonioCarlosJobim() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Antonio Carlos Jobim</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Antonio Carlos Jobim은 브라질의 작곡가이자 피아니스트, 기타리스트로, 보사노바의 창시자 중 한 명입니다. 그의 음악은 서정적인 멜로디와 감미로운 리듬이 특징입니다.
        </p>
        <p>
          대표곡으로는 "The Girl from Ipanema", "Wave" 등이 있으며, 브라질 음악의 아름다움과 감성을 잘 담아낸 작품들입니다. 보사노바와 라틴 재즈를 좋아하는 분들에게 추천할 만한 아티스트입니다.
        </p>
      </div>
    </div>
  );
} 