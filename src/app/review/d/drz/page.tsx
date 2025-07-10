"use client";
import Link from "next/link";

export default function DrZReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Dr.Z</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Progressive Rock, Dark Rock</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">영국</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">활동 시기</h3>
              <p className="text-gray-700">1969-1971</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">멤버</h3>
              <p className="text-gray-700">Keith Keys (키보드, 보컬)</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">주요 앨범</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-lg">Three Parts To My Soul</h3>
              <p className="text-gray-600">"Spiritus, Manes Et Umbra" (1971)</p>
              <div className="mt-2">
                <h4 className="font-medium mb-1">수록곡:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1. Evil Woman's Manly Child</li>
                  <li>2. Spiritus, Manes Et Umbra (11:50)</li>
                  <li>3. Summer For The Rose</li>
                  <li>4. Burn In Anger</li>
                  <li>5. Too Well Satisfied</li>
                  <li>6. In A Token Of Despair</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 키보드 중심의 다크한 프로그레시브 록</p>
            <p>• 종교적이고 철학적인 가사</p>
            <p>• 영혼을 세 부분으로 나누는 컨셉 (Spiritus, Manes, Umbra)</p>
            <p>• 괴기스럽고 퇴폐적인 보컬</p>
            <p>• 희귀하고 고가의 컬렉터 아이템</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">박준범</h3>
                <span className="text-sm text-gray-500">jbpark@chongju.chungbuk.ac.kr</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Dr.Z - 3 Parts To My Soul (1970)</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Genre:</strong> British Progressive/Dark Rock</p>
                  <p><strong>Active Period:</strong> 1969-1971</p>
                  <p><strong>Country:</strong> UK</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Track Listing</h4>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>Sky Pilot</li>
                  <li>I Can Hear The Grass Grow</li>
                  <li>Have Yourself A Time</li>
                  <li>The Immigrant</li>
                  <li>Baby Come Home</li>
                  <li>Tobias The Hump</li>
                </ol>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  Dr.Z는 1969년부터 1971년까지 활동한 영국의 프로그레시브/다크 록 밴드이다.
                  비록 짧은 활동 기간을 가졌지만, 이들이 남긴 유일한 앨범 "3 Parts To My Soul"은
                  70년대 초 영국 언더그라운드 록 씬의 독특한 분위기를 잘 보여주는 작품이다.
                </p>

                <div className="bg-yellow-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">철학적 개념: "영혼의 삼부작"</h4>
                  <p>
                    앨범 제목 "3 Parts To My Soul"은 단순한 표현이 아니라 깊은 철학적 의미를 담고 있다.
                    인간의 영혼을 세 부분으로 나누어 보는 관점으로, 이는 고대 그리스 철학에서부터
                    기독교 신학에 이르기까지 다양한 사상적 배경을 가지고 있다.
                  </p>
                  <div className="mt-2 text-sm">
                    <p><strong>1. Mind (정신):</strong> 이성과 사고의 영역</p>
                    <p><strong>2. Body (육체):</strong> 물질적이고 감각적인 영역</p>
                    <p><strong>3. Spirit (영혼):</strong> 초월적이고 신적인 영역</p>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">음악적 특징</h4>
                  <ul className="list-disc list-inside text-sm">
                    <li>어둡고 무거운 사운드로 당시 헤비록의 초기 형태를 보여줌</li>
                    <li>사이키델릭한 요소와 프로그레시브한 구성</li>
                    <li>철학적이고 내성적인 가사</li>
                    <li>오르간과 기타가 만들어내는 독특한 음색</li>
                  </ul>
                </div>

                <p>
                  특히 "Sky Pilot"과 "I Can Hear The Grass Grow"는 밴드의 대표곡으로,
                  당시 영국 록 씬의 실험정신을 잘 보여준다. 이 곡들에서는 전쟁에 대한
                  비판적 시각과 자연에 대한 신비주의적 접근이 독특하게 결합되어 있다.
                </p>

                <div className="bg-green-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">역사적 의의</h4>
                  <p>
                    Dr.Z는 비록 상업적 성공을 거두지는 못했지만, 70년대 초 영국 프로그레시브 록의
                    다양성을 보여주는 중요한 밴드 중 하나이다. 이들의 음악은 후에 Gothic Rock과
                    Post-Punk 장르에도 영향을 미쳤다고 평가된다.
                  </p>
                </div>

                <p>
                  "3 Parts To My Soul"은 당시의 시대정신과 철학적 사유를 음악으로 표현한
                  독특한 작품이다. 비록 재발매되지 않아 구하기 어려운 앨범이지만,
                  70년대 초 영국 록의 실험정신을 이해하는 데 중요한 자료가 된다.
                </p>

                <blockquote className="border-l-4 border-purple-300 pl-4 italic text-gray-700 mt-4">
                  "Dr.Z의 음악은 어둠 속에서 빛을 찾아가는 여행과 같다. 
                  영혼의 세 부분이 조화를 이루는 순간, 진정한 음악이 탄생한다."
                </blockquote>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - 박준범
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