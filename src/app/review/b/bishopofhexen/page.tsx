"use client";
import Link from "next/link";

export default function BishopOfHexenReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Bishop of Hexen</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Israel</p>
              <p><strong>장르:</strong> Symphonic Metal, Progressive Metal</p>
              <p><strong>특징:</strong> 키보드 중심의 심포닉 메탈</p>
            </div>
            <div>
              <p><strong>레이블:</strong> Hammerheart Productions</p>
              <p><strong>음악적 성격:</strong> Majestic, Symphonic</p>
              <p><strong>발매:</strong> Hammerheart 4번째 발매작</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">김진석</h3>
            <p className="text-sm text-gray-600 mb-4">jindor@mmrnd.sec.samsung.co.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 퀴즈 섹션 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">음악계의 흥미로운 비교</h4>
                <div className="space-y-3">
                  <p className="font-mono text-center text-lg">
                    progressive : Si-Wan = metal : <strong>Hammerheart</strong>
                  </p>
                  
                  <p>
                    레코드점에서 메틀코너도 자주 둘러보셨다면 답을 아실 수 있을텐데요. 
                    정답은 바로 <strong>Hammerheart</strong>입니다.
                  </p>
                </div>
              </div>

              {/* Hammerheart 프로덕션 소개 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">Hammerheart 프로덕션</h4>
                <div className="space-y-3">
                  <p>
                    성시완씨가 70년대 프로그레시브 음반들을 라이센스하여 발매하는 시완레코드를 운영하고 있는 것처럼, 
                    <strong>시근배</strong>라는 분은 유럽을 중심으로 하여 활동중인 신진 메틀 밴드들의 음반을 라이센스하여 발매하는 
                    <strong>Hammerheart 프로덕션</strong>을 운영하고 있습니다.
                  </p>

                  <p>
                    시근배씨의 이름은 아트록지를 보면 몇번 나오죠. 아마 ARC 회원이셨던 모양입니다.
                  </p>

                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold mb-2">Hammerheart 발매 현황</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>1호:</strong> 핀란드 밴드</li>
                      <li><strong>2호:</strong> 리투아니아 밴드</li>
                      <li><strong>3호:</strong> 미국 밴드</li>
                      <li><strong>4호:</strong> Bishop of Hexen (이스라엘)</li>
                    </ul>
                  </div>

                  <p>
                    앨범을 발매할 레이블을 찾지 못해 곤란해하는 실력있고 유망한 메틀 밴드들에게 
                    <strong>좋은 등용문</strong>이 되고 있습니다. 해머하트는 이제 겨우 올해초까지 3장의 앨범을 발매했을 뿐이지만 
                    모두 큰 호평을 얻고 있죠.
                  </p>
                </div>
              </div>

              {/* Bishop of Hexen 분석 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">Bishop of Hexen 음악적 특징</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-l-4 border-orange-400">
                    <p className="font-bold text-orange-700 mb-2">평가</p>
                    <p>
                      최근에 새로이 내놓은 해머하트 레이블의 4탄 Bishop of Hexen은 
                      <strong>앞서 발표한 세장의 앨범들을 능가하는 걸작</strong>으로 평가받고 있으며 
                      프로그레시브 팬들에게도 큰 호감을 줄 심포닉 메틀을 구사하는 이스라엘 밴드입니다.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">음악적 구성</h5>
                    <p className="text-sm">
                      일렉트릭 기타의 비중을 축소하는 대신 <strong>처음부터 끝까지 물밀듯이 쏟아지는 키보드 사운드</strong>는 
                      매우 감동적입니다.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-bold text-blue-700 mb-2">다른 Hammerheart 발매작과의 차이점</h5>
                    <p className="text-sm">
                      1, 2, 3번은 블랙/데스 경향이 매우 강해서 그다지 호감을 갖지 못하실 것이라 생각되지만, 
                      시근배씨가 선호하는, 이른바 <strong>"majestic", "symphonic"</strong>이라는 형용어구가 딱 들어맞는 
                      BoH의 데뷰앨범만은 이야기가 다를겁니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 추천 및 마무리 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">추천 및 감상 정보</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <p className="font-bold text-green-700 mb-2">시청 정보</p>
                    <p className="text-sm">
                      용산 신나라에 가면 헤드폰으로 시청하실수 있도록 해놓았으니 한번 들어보세요.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="font-bold text-red-700">
                      실속없이 과대평가되는 프로그레시브 밴드들보다 훨씬 매력적입니다.
                    </p>
                  </div>

                  <p className="text-right italic text-gray-600">
                    김진석 드림
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 