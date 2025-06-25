import Link from "next/link";

export default function AlusaFallax() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Alusa Fallax</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김웅규, ledzep1, 92.7]</p>
        <p>
          이태리의 Alusa Fallax는 1974년에 "Intorno Alla Mia Cattiva Educazione"라는 앨범을 발표한 그룹입니다. 이 앨범은 이태리 프로그레시브 록의 숨은 명작으로 평가받고 있습니다.
        </p>
        <p>
          클래식과 록의 조화, 서정적인 멜로디, 그리고 복잡한 구조가 어우러진 이 앨범은 이태리 특유의 감성과 함께 높은 완성도를 자랑합니다. 특히 플루트와 키보드의 조화가 인상적이며, 곡마다 변화무쌍한 전개가 돋보입니다.
        </p>
        <p>
          이 앨범은 이태리 록을 좋아하는 분들에게 강력히 추천할 만한 작품입니다.
        </p>
      </div>
    </div>
  );
} 