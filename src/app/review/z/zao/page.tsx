"use client";
import Link from "next/link";

export default function ZaoReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Zao</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">Oak-Man 장민수</span>
              <span className="ml-2 text-sm text-gray-600">jangms@mobi.etri.re.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">ZAO - Z=7L</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">앨범 정보</h4>
                    <ul className="space-y-1 text-xs">
                      <li><strong>원본:</strong> 1973, Vertigo, 6499 736, France</li>
                      <li><strong>재발매:</strong> Musea, FGBG 4081.AR, CD</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">밴드 탄생 배경</h4>
                    <p>
                      <strong>마그마(Magma)의 첫번째 자손</strong>, Zao는 1972년 <strong>Francois "Faton" Cahen</strong>과 
                      <strong>Yochk'o Seffer</strong>에 의해 결성됩니다.
                    </p>
                    <p className="mt-2">
                      이들은 마그마(Magma)의 데뷔 앨범 <em>Magma</em>(70년)와 두번째 앨범 <em>1001 Degres Centigrades</em>(71년)에 
                      참여한 후 그룹을 탈퇴합니다.
                    </p>
                    <p className="mt-2">
                      죠르지오 고멜스키(Georgio Gomelsky)가 마그마의 매니저가 되면서 마그마의 음악적 주도권이 
                      <strong>크리스티앙 반데(Christian Vander)</strong>에게 집중되어 버린 까닭이었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">초기 마그마의 특징</h4>
                    <p>
                      처음 두장의 앨범을 통해 나타난 마그마의 특징은 <strong>멤버들의 다양한 음악적 개성이 드러나는 자유분방한 재즈락</strong>이었습니다.
                    </p>
                    <p className="mt-2">
                      마그마는 각 멤버들이 나름대로의 음악적 아이디어를 그룹의 음악에 반영하고 또 다양한 실험을 할수 있는 
                      <strong>음악의 도장</strong>이었던 셈입니다.
                    </p>
                    <p className="mt-2">
                      이러한 특징은 특히 마그마의 데뷔 앨범에서 강하게 나타나는데, 앨범 전체적으로 다소 산만하고 음들이 흩어지는 듯한 인상을 받게 되면서도 
                      곡 하나하나에서 <strong>나이브한 고농도의 에너지</strong>를 감지할 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">Zao 결성</h4>
                    <p>
                      Cahen과 Seffer는 이러한 공동체적인 마그마 체제가 붕괴하고 반데의 독주가 계속되자 그룹을 탈퇴할 결심을 하게 됩니다.
                    </p>
                    <p className="mt-2">
                      이들은 마그마를 통해 습득한 음악적 에너지를 바탕으로 <strong>좀 더 자유 분방한 음악</strong>을 하고자 의기 투합합니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-orange-700 mb-1">멤버 구성</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Jean My Truong</strong> - 드럼 (Ergo Sum, Perception 출신)</li>
                        <li>• <strong>Joel Dugrenot</strong> - 베이스</li>
                        <li>• <strong>Jean-Yves Rigaud</strong> - 바이얼린</li>
                        <li>• <strong>Mauricia Platon</strong> - 흑인 여성 보컬리스트</li>
                        <li>• <strong>Francois Cahen</strong> - 피아노</li>
                        <li>• <strong>Yochk'o Seffer</strong> - 색소폰</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">음악적 특징</h4>
                    <p>
                      이들의 데뷔 앨범은 <strong>마그마의 음악적 영향력을 바탕으로 재즈의 즉흥성을 좀 더 도입한 음악</strong>을 담고 있습니다.
                    </p>
                    <p className="mt-2">
                      Seffer와 Cahen은 마그마의 '작곡된, 꽉찬' 음악보다는 즉흥적인 연주를 담을 수 있는 
                      <strong>'가능성을 내포한' 음악</strong>을 추구했던 것입니다.
                    </p>
                    <p className="mt-2">
                      앨범을 감상하는 동안 시종일관 마그마의 첫 앨범을 연상하게 되지만 불쑥 튀어나오는 즉흥성
                      - 특히 <strong>Cahen의 피아노 애들립</strong> - 이 Zao의 개성을 강하게 부각시킵니다.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 p-3 rounded">
                    <h4 className="font-medium text-indigo-800 mb-2">핵심 요소들</h4>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2 rounded">
                        <strong>Mauricia Platon의 스캣 보컬</strong>
                        <p className="mt-1">모든 곡에서 중심 악기의 역할을 담당. Klaus Blasquiz에 흑인 특유의 유연함을 섞어놓은 듯한 창법으로 Seffer의 색스와 같은 멜로디 또는 대위적인 멜로디를 구사하며 곡을 리드</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Yochk'o Seffer의 색소폰</strong>
                        <p className="mt-1">가장 Zeuhl적인 음색과 멜로디를 연출하는 Zao의 핵. 그의 음악적 바탕에 헝가리의 집시 음악이 깔려 있어 그가 구사하는 멜로디와 리듬을 이해하는 중요한 포인트</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>리듬 섹션과 화성</strong>
                        <p className="mt-1">Truong과 Dugrenot가 뿜어내는 다양하고 변칙적인 리듬의 역동성 + Cahen의 피아노와 Rigaud의 바이얼린이 공간을 적절히 메움</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border-l-2 border-gray-400">
                    <h4 className="font-medium text-gray-800 mb-2">최종 평가</h4>
                    <p>
                      초기 <strong>Zeuhl 사운드를 정의</strong>하는 Zao의 데뷔작 <em>Z=7L</em>은 
                      <em>Kawana</em>, <em>Shekina</em>와 함께 <strong>Zeuhl 매니아의 라이브러리에 반드시 포함되어야 할 필청 앨범</strong>입니다!
                    </p>
                    <p className="mt-2">
                      또한 고농도의 에너지를 함축하고 있는 역동적인, 원초적인, 최고수준의 프로록을 듣고자 하는 분들이 있다면 
                      이 앨범을 놓쳐서는 안되겠지요!!
                    </p>
                    <p className="mt-2 font-semibold">
                      그야말로 <strong>최고치의 음악적 옥탄가를 제공하는 명작</strong>입니다!!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Zao 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 프랑스</li>
                  <li><strong>장르:</strong> Zeuhl, 재즈락</li>
                  <li><strong>결성:</strong> 1972년</li>
                  <li><strong>핵심 멤버:</strong> Francois Cahen, Yochk'o Seffer</li>
                  <li><strong>별칭:</strong> 마그마의 첫 번째 자손</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>초기 Zeuhl 사운드 정의</li>
                  <li>재즈의 즉흥성 도입</li>
                  <li>마그마보다 자유분방함</li>
                  <li>헝가리 집시 음악 영향</li>
                  <li>고농도 에너지의 원초적 프로록</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">멤버 구성</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2 rounded">
                  <strong>Mauricia Platon</strong> - 보컬 (스캣)
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Yochk'o Seffer</strong> - 색소폰
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Francois "Faton" Cahen</strong> - 피아노
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Jean My Truong</strong> - 드럼
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Joel Dugrenot</strong> - 베이스
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Jean-Yves Rigaud</strong> - 바이얼린
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="bg-purple-100 p-2 rounded border-l-2 border-purple-400">
                <strong>Z=7L</strong> (1973) - 데뷔작, Zeuhl 필청 앨범
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 대상</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-purple-100 px-2 py-1 rounded">Zeuhl 매니아</span>
                <span className="bg-purple-100 px-2 py-1 rounded">마그마 팬</span>
                <span className="bg-purple-100 px-2 py-1 rounded">재즈락 애호가</span>
                <span className="bg-purple-100 px-2 py-1 rounded">고농도 에너지 추구자</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Zeuhl 필청 3작품</h4>
              <div className="text-xs space-y-1">
                <div className="bg-yellow-100 p-1 px-2 rounded">1. Zao - Z=7L</div>
                <div className="bg-yellow-100 p-1 px-2 rounded">2. Kawana</div>
                <div className="bg-yellow-100 p-1 px-2 rounded">3. Shekina</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/review/z" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Z 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 