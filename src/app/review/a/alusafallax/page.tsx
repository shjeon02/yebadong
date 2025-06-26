import Link from "next/link";

export default function AlusaFallax() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Alusa Fallax</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">[김웅규, ledzep1, 92.7]</p>
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>이태리의 Alusa Fallax는 1974년에 "Intorno Alla Mia Cattiva Educazione"라는 앨범을 발표한 그룹입니다. 이 앨범은 이태리 프로그레시브 록의 숨은 명작으로 평가받고 있습니다.</p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">음악적 특징</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>클래식과 록의 조화</li>
              <li>서정적인 멜로디</li>
              <li>복잡한 구조</li>
              <li>이태리 특유의 감성</li>
              <li>높은 완성도</li>
            </ul>
          </div>

          <p>클래식과 록의 조화, 서정적인 멜로디, 그리고 복잡한 구조가 어우러진 이 앨범은 이태리 특유의 감성과 함께 높은 완성도를 자랑합니다. 특히 플루트와 키보드의 조화가 인상적이며, 곡마다 변화무쌍한 전개가 돋보입니다.</p>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="font-semibold text-center">추천</p>
            <p>이 앨범은 이태리 록을 좋아하는 분들에게 강력히 추천할 만한 작품입니다.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 