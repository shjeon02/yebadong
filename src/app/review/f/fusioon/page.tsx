"use client";
import Link from "next/link";

export default function FusioonPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Fusioon</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 스페인
            </div>
            <div>
              <span className="font-semibold">장르:</span> 아방가르드 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">특징:</span> 퓨젼 기반 아방가르드 사운드
            </div>
            <div>
              <span className="font-semibold">발매:</span> BMG España에서 1, 2, 3집 재발매
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">광월인 (이동훈)</span>
                <span className="text-sm text-blue-600">meddle@nuri.net</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">3rd Album "Minorisa" - 스페인 아방가르드의 최고작</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  정말 오랬만에 들어보는 <strong>아방가르드 계열의 프로그</strong> 입니다. 최근 신세대 밴드들은 물론이고 아트록 황금기인 '70년대 초반에도 아방한 사운드를 들려줬던 밴드가 몇 안되었는데...
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">스페인 프로그레시브 록의 특색</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>재즈록, 헤비록 그리고 퓨젼이 주류인 스페인 계열의 그룹</strong>치고는 상당히 신선한 음을 들려준 fusioon의 1, 2, 3 집 모두가 작년에 bmg espana에서 발매되었습니다.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">최고작 "Minorisa" (3집)</h4>
                <p className="text-gray-700 leading-relaxed">
                  이들의 최고작이라고 할 수 있는 3집, <strong>minorisa</strong>는 <strong>퓨젼을 바탕으로한 아방가르드 사운드</strong>를 들려주고 있습니다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  또한 <strong>스웨덴의 Samla적인 유머</strong>도 이들의 음악에서 쉽게 찾아볼 수 있습니다.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">일본에서의 인정</h4>
                <p className="text-gray-700 leading-relaxed">
                  이미 일본에서는 <strong>83년도에 king records에서 발매가 될정도로 가치있는 작품</strong>입니다.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">음악적 특징</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>퓨젼 기반</strong>의 아방가르드 프로그레시브 록</li>
                  <li>• <strong>스웨덴 Samla Mammas Manna</strong> 스타일의 유머러스한 요소</li>
                  <li>• 스페인 프로그레시브 록 씬에서는 드문 <strong>아방가르드적 접근</strong></li>
                  <li>• 재즈록과 헤비록이 주류인 스페인에서 <strong>독특한 위치</strong>를 차지</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">발매 정보</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Fusioon의 1, 2, 3집 모두가 BMG España에서 재발매되었으며, 특히 3집 "Minorisa"는 이들의 최고작으로 평가받고 있다. 일본에서도 1983년 King Records를 통해 발매될 만큼 그 가치를 인정받았다.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">최종 평가</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>**a must**</strong> - 아방가르드 프로그레시브 록 애호가들에게는 반드시 들어야 할 앨범. 스페인 프로그레시브 록의 독특한 면모를 보여주는 중요한 작품이다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 