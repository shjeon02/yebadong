"use client";
import Link from "next/link";

export default function EricDolphyReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Eric Dolphy</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Jazz, Avant-garde Jazz</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">미국</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">악기</h3>
              <p className="text-gray-700">Alto Sax, Bass Clarinet, Flute</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">활동 시기</h3>
              <p className="text-gray-700">1950년대-1960년대</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 아방가르드 재즈의 선구자</p>
            <p>• 혁신적인 연주 기법</p>
            <p>• 다양한 관악기 마스터</p>
            <p>• 프리 재즈의 발전에 기여</p>
            <p>• John Coltrane과의 협연으로 유명</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">김형석</h3>
                <span className="text-sm text-gray-500">hyskim@hotmail.com</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Eric Dolphy - 앨범 리뷰</h4>
                <p className="text-sm text-gray-600">American Avant-garde Jazz Saxophonist/Flutist</p>
              </div>

              <div className="prose prose-sm max-w-none">
                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Eric Dolphy - "Last Date"</h4>
                  <p>
                    에릭 돌피의 마지막 녹음 중 하나로 여겨지는 앨범입니다.
                    1964년 네덜란드에서의 공연을 담은 이 앨범은 그의 연주 스타일의
                    완성도를 보여주는 대표작 중 하나입니다.
                  </p>
                  <p className="mt-2">
                    특히 베이스 클라리넷 연주에서 보여주는 그의 독창적인 기법과
                    플루트에서의 확장된 테크닉은 당시로서는 매우 혁신적이었습니다.
                    자유로운 즉흥연주와 구조적 완성도가 절묘하게 균형을 이루고 있어요.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Eric Dolphy - "Far Cry"</h4>
                  <p>
                    1962년 녹음된 이 앨범은 돌피의 대표작 중 하나로 꼽힙니다.
                    Ron Carter의 베이스와 Roy Haynes의 드럼과 함께한 트리오 편성으로,
                    각 악기의 역할이 명확하면서도 상호 보완적입니다.
                  </p>
                  <p className="mt-2">
                    타이틀 트랙인 "Far Cry"에서는 돌피 특유의 angular한 멜로디와
                    복잡한 리듬 구조가 돋보입니다. 알토 색소폰으로 연주된 이 곡은
                    그의 compositional skill과 improvisational genius를 동시에
                    보여주는 걸작입니다.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">에릭 돌피의 음악적 유산</h4>
                  <p>
                    에릭 돌피는 아방가르드 재즈의 선구자로서, 전통적인 재즈의 경계를
                    확장한 혁신적인 연주자였습니다. 그의 음악은 자유분방하면서도
                    깊은 구조적 이해에 바탕을 둔 치밀함을 보여줍니다.
                  </p>
                  <ul className="list-disc list-inside text-sm mt-2">
                    <li>베이스 클라리넷의 새로운 가능성 개척</li>
                    <li>플루트의 확장된 연주 기법 개발</li>
                    <li>알토 색소폰의 혁신적 사용</li>
                    <li>자유로운 즉흥연주와 작곡의 조화</li>
                  </ul>
                </div>

                <p>
                  에릭 돌피의 음악은 듣는 이에게 끊임없는 도전을 제기합니다.
                  편안한 감상보다는 적극적인 집중을 요구하지만, 그만큼 깊은
                  음악적 만족감을 줍니다. 아방가르드 재즈에 관심이 있는 분들께
                  강력히 추천하는 음악가입니다.
                </p>

                <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-700 mt-4">
                  "돌피의 음악은 자유로움과 엄격함이 공존하는 독특한 세계입니다.
                  그의 연주를 듣노라면 재즈라는 장르의 무한한 가능성을 느끼게 됩니다."
                </blockquote>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - 김형석
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/d" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 