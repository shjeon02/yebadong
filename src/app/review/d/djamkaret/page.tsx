"use client";
import Link from "next/link";

export default function DjamKaretReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Djam Karet</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Progressive Rock, Space Rock</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">미국</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 인스트루멘털 프로그레시브 록</p>
            <p>• 우주적이고 실험적인 사운드</p>
            <p>• 긴 구성의 대곡들</p>
            <p>• 앰비언트와 록의 융합</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-8">
            {/* Long Dal 리뷰 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Long Dal</h3>
                <span className="text-sm text-gray-500">longdal@korea.com</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Djam Karet - 일반 리뷰</h4>
                <p className="text-sm text-gray-600">American Space Rock</p>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  잼 카렛은 미국의 스페이스 록 밴드로, 70년대 영국의 스페이스 록 전통을
                  미국적으로 재해석한 독특한 사운드를 가지고 있다. Pink Floyd나 
                  Hawkwind의 영향을 받았지만, 그들만의 독창적인 색깔을 만들어냈다.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">음악적 특징</h4>
                  <ul className="list-disc list-inside text-sm">
                    <li>몽환적이고 대기적인 사운드</li>
                    <li>긴 인스트루멘탈 트랙들</li>
                    <li>신디사이저와 기타의 조화</li>
                    <li>점진적으로 발전하는 곡 구조</li>
                  </ul>
                </div>

                <p>
                  잼 카렛의 음악은 듣는 이를 우주적 명상 상태로 이끄는 힘이 있다.
                  반복적인 리듬과 텍스처 위에서 펼쳐지는 멜로디의 변화는
                  최면적이면서도 몰입감을 제공한다.
                </p>
              </div>
            </div>

            {/* Fish 리뷰 */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Fish (신인철)</h3>
                <span className="text-sm text-gray-500">icshin@chiak.kaist.ac.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  Djam Karet에 대해서는 몇 장의 앨범을 들어봤는데, 초기의
                  순수한 스페이스 록 스타일에서 점차 프로그레시브한 요소들을
                  가미하는 방향으로 발전해왔다고 볼 수 있습니다.
                </p>

                <div className="bg-yellow-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">발전 과정</h4>
                  <p>
                    초기 앨범들은 Pink Floyd의 "Meddle"이나 "Obscured by Clouds"
                    시기의 스타일을 연상시키는 몽환적인 인스트루멘탈 위주였지만,
                    후기로 갈수록 King Crimson이나 Yes 등의 복잡한 구성을
                    도입하기 시작했습니다.
                  </p>
                </div>

                <p>
                  특히 기타와 신디사이저의 상호 작용이 인상적인데, 전통적인
                  스페이스 록의 단조로움을 벗어나 다양한 음색의 실험을 시도하고
                  있어요. 때로는 Ozric Tentacles과 같은 psychedelic한 면모도
                  보여줍니다.
                </p>

                <div className="bg-green-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">추천 이유</h4>
                  <p>
                    스페이스 록을 좋아하는 분들에게는 분명 매력적인 밴드일 것입니다.
                    특히 긴 곡들을 집중해서 듣기 좋아하는 분들께 추천합니다.
                    배경 음악으로도 훌륭하고, 적극적인 감상용으로도 손색이 없어요.
                  </p>
                </div>
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