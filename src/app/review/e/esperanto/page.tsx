"use client";
import Link from "next/link";

export default function EsperantoPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Esperanto</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 영국 (다국적 연합)</li>
              <li><strong>장르:</strong> 프로그레시브 록, 록 오케스트라</li>
              <li><strong>활동 기간:</strong> 1973-1975</li>
              <li><strong>평가:</strong> 세계 최강의 록오케스트라</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Rock Orchestra (1973)</strong> - 데뷔작, 15인 편성</li>
              <li><strong>Danse Macabre (1974)</strong> - "The Duel" 수록</li>
              <li><strong>Last Tango (1975)</strong> - 최고작, 3집</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>두 대의 바이올린과 첼로 중심</li>
              <li>박력 넘치는 현악 파트</li>
              <li>다국적 멤버 구성</li>
              <li>클래식과 록의 융합</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Last Tango (1975) 멤버 구성</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li><strong>Raymond Vincent</strong> - Violin (벨기에, 리더)</li>
            <li><strong>Godfrey Simon</strong> - Violin (영국)</li>
            <li><strong>Timothy Kraemer</strong> - Cello</li>
            <li><strong>Tony Malisan</strong> - Drums (이탈리아)</li>
            <li><strong>Gino Malisan</strong> - Bass (이탈리아)</li>
            <li><strong>Bruno Libert</strong> - Keyboards (벨기에)</li>
            <li><strong>Roger Meakin</strong> - Vocals (3집 신규)</li>
            <li><strong>Kim Moore</strong> - Vocals (3집 신규, 여성)</li>
          </ul>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰: 유영재의 Last Tango 상세 분석 (97.05)</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>유영재 (espiritu@hitel.net, 97.05) from Island</strong>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">그룹명의 의미와 편성 변화</h4>
                <p>
                  폴란드의 의사 Zamenhof가 창안했다는 만국 공용어 에스페란토어를 그룹명으로 채택한 
                  영국 출신 밴드 Esperanto는 그룹명이 그러하듯이 구성 멤버들 역시 다국적 연합군(?)으로 짜여졌던 팀이다.
                </p>
                <p className="mt-2">
                  8인조 편성이라는 것만도 상당히 대식구라는 느낌이 드는데 실은 이들이 데뷰작을 발표했을때는 
                  무려 15인 편성의 그야말로 보기 드문 대그룹이었다. 그러다가 두번째 앨범부터 8인조로 재편성되었다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범별 특징</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Rock Orchestra (1973)</h5>
                    <p className="text-sm">데뷰작은 대그룹 편성으로 발표한 야심작이었다.</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">Danse Macabre (1974)</h5>
                    <p className="text-sm">
                      "The Duel"로 유명한 2집 "죽음의 무희"는 Brigette Du Doit이라는 게스트 여성 싱어를 참가시키고 있다. 
                      앨범의 하이라이트인 "결투"(The Duel)라는 곡제목에 걸맞게 앨범 재킷에는 복면을 쓴 두 사나이가 
                      서로 뒤엉켜 붙은채 채찍을 들고 결투(?)하는 그림이 담겨져 있다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Last Tango의 완성도</h4>
                <p>
                  Esperanto의 결정판으로 평가받고 있는 3집이자 마지막 앨범 Last Tango에서는 새로운 리드 보컬리스트로 
                  Roger Meakin이 들어오는데, 이것은 확실히 전화위복이 되었다. 약간의 퇴폐적인 재킷부터가 묘한 뉘앙스를 
                  풍기는 이 앨범에서 발휘되는 Roger의 냉혈적인 금속성의 보컬은 날카로운 현악 파트와 딱 맞아 떨어지는 것이었다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">곡별 상세 분석</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">"Eleanor Rigby" (Beatles 커버)</h5>
                    <p className="text-sm">
                      멀리서부터 들려오는 현란한 신디사이저 음향과 뒤이어 터져나오는 힘찬 드럼과 키보드 연주, 
                      그리고 사운드의 핵이라 할 수 있는 바이올린이 강한 비트로 울려퍼지면서 박진감 넘치는 사운드를 들려준다. 
                      가사만 제외한다면 비틀즈의 곡과는 전혀 다른 곡이다. Vanilla Fudge의 블루지한 리바이벌곡과는 
                      또다른 맛을 제공해주는 7분이 넘는 완벽한 재해석이다.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">"Still Life"</h5>
                    <p className="text-sm">
                      첫곡과 마찬가지로 인트로 부분의 연주가 상당히 오랫동안 지속된다. 약 3분여동안 각 악기 파트가 
                      돌아가면서 자신의 실력을 맘껏 과시하고 있으며 다소 즉흥적인 면도 보여주고 있다. 
                      Roger의 바이올린만큼이나 날카로운 보컬과 여성 싱어 Kim Moore의 어시스트가 어우러지며 절묘한 하모니를 이루어낸다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium">"The Rape"</h5>
                    <p className="text-sm">
                      제목에서부터 퇴폐적이라는 인상을 주는 곡. 바이올린 현을 뜯는 듯한 후반부의 연주는 앨범의 백미라고 할 수 있는데, 
                      점차 날카로와지는 현악 파트의 연주와 몽환적인 키보드, 그리고 비장감을 더해주는 백 오케스트레이션이 어우러진다. 
                      마침내 보컬의 절규와 함께 경찰 사이렌 소리가 울리면서 대미를 장식한다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium">"Last Tango" (타이틀 트랙)</h5>
                    <p className="text-sm">
                      3분이라는 짧은 시간동안 이들의 진면목을 유감없이 펼쳐보이는 곡이다. 피아노와 탱고 리듬을 시작으로 해서 
                      모든 악기가 총동원되어 어우러지는 탱고 연주, 특히 두대의 바이올린과 첼로로 구성된 현악 파트의 
                      박진감 넘치는 연주는 실로 압도적이다. 너무나도 시원하고 통쾌한 탱고록의 명곡을 창조해내었다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-4 text-red-800">음악사적 의의</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                Esperanto는 1970년대 프로그레시브 록에서 클래식 오케스트라와 록 음악의 융합을 시도한 
                대표적인 밴드 중 하나입니다. 특히 현악기 중심의 편성으로 "세계 최강의 록오케스트라"라는 
                평가를 받았습니다.
              </p>
              <p className="mb-4">
                다국적 멤버 구성을 통해 유럽 각국의 음악적 전통을 록 음악과 결합시켰으며, 
                특히 "Last Tango"에서는 탱고 리듬을 프로그레시브 록과 융합시키는 등 
                실험적인 시도를 보여주었습니다.
              </p>
              <p>
                비록 짧은 활동 기간(1973-1975)이었지만, 현악기를 중심으로 한 프로그레시브 록의 
                가능성을 보여준 중요한 밴드로 평가받고 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 