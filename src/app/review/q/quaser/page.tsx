"use client";
import Link from "next/link";

export default function QuaserReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Quaser</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-2">
              <span className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-medium">Neo-Zao 김남웅</span>
              <span className="ml-2 text-sm text-gray-600">nwkim@archer.postech.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-indigo-700 mb-2">Quaser의 약사</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">70년대 중반 일본 프로그레시브 락계의 황금기</h4>
                    <p>
                      70년대 중반의 일본의 프로그레시브 락계는 <strong>싸이키델릭한 음악에서 완전히 탈피</strong>하고 
                      저마다 다른 개성을 가진 밴드들이 동시 다발적으로 나왔던 <strong>일본 락계의 황금기</strong>였습니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-yellow-700 mb-1">당시 주요 밴드들</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>신월(Shingetsu), BiKyoRan, Green</strong> - 라이브 클럽 중심 활동</li>
                        <li>• <strong>Maria</strong> - 하드 프로그레시브의 창시자</li>
                        <li>• <strong>Prism, Sense of Wonder, Space Circus</strong> - Jazz Rock 밴드들</li>
                        <li>• <strong>Ain Soph, DaDa</strong> - '관서계' 음악적 특성의 원류</li>
                        <li>• <strong>Kigadomei</strong> - Novella의 Terutsugu Hirayama와 DaDa의 Konish Kenji가 결성</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">Quaser 초기 (1975년)</h4>
                    <p>
                      Quaser는 <strong>Matsuura Yoshikazu(Key)</strong>와 <strong>T. Morita(Vo. B. G)</strong>를 두축으로 
                      75년 결성된 3인조 밴드입니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-blue-700 mb-1">초기 활동</h5>
                      <ul className="text-xs space-y-1">
                        <li>• 당시 EL&P의 <em>Tarkus</em> 전곡, <em>Karn Evil</em> 전곡을 라이브에서 올림</li>
                        <li>• 40여분 가량의 오리지널 곡도 보유</li>
                        <li>• Matsura의 키보드 연주는 <strong>초절기교적인 수준</strong></li>
                        <li>• 도쿄의 파천황(Hatenko)와 함께 언더그라운드 신에서 높은 평가</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">4인조 시대 (1979년)</h4>
                    <p>
                      79년 Quaser는 드럼과 기타파트를 새로 맞아들여 4인조 편성이 되었고, 
                      Morita가 기타와 올건을 담당하게 되어 <strong>Matsuura와의 강력한 더블 올건 시스템</strong>을 가지게 되었습니다.
                    </p>
                    <p className="mt-2">
                      80년 Quaser는 <strong>알파 레코드사에 픽업</strong>되는 행운을 맞았으나 
                      디렉터의 음악방향 전환의 요구에 부응하지 않고 82년경 결국 해산을 맞이했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Quaser의 첫 앨범 "Out From Quaser"</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">부활의 배경</h4>
                    <p>
                      Quaser의 부활은 해산 이후 프로 록을 할 수 없는 상황을 비관, 음악계를 떠나있던 
                      <strong>Morita에 의해 이루어졌습니다</strong>.
                    </p>
                    <p className="mt-2">
                      앨범 한장 없이 사라져 간, 그러나 그 실력에 대한 전설이 회자되고 있던 시점이기에 
                      재결성은 매우 적절한 것이 아닌가 생각됩니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">앨범 구성</h4>
                    <p>
                      본 앨범에 실린 음악들은 4인조 시절 만들어졌던 2곡이 포함된 것을 제외하면 모두 신곡이고, 
                      본래의 리더였던 <strong>Matsuura가 참가를 하지 않았기</strong> 때문에 당시의 음악을 재현했다고 보기는 힘들 것 같군요.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-blue-700 mb-1">연주진</h5>
                      <ul className="text-xs space-y-1">
                        <li>• 모든 연주는 <strong>Morita</strong>에 의해 수행</li>
                        <li>• <strong>Yamamoto Yozox</strong>(Ain Soph) - 7곡에서 기타 연주</li>
                        <li>• <strong>Nobori Masatoshi</strong> - 샤쿠하치</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">음악적 특징</h4>
                    <p>
                      음악의 순도는 매우 높습니다. <strong>디지털 신서사이저가 주축</strong>이 된 음악이지만 
                      70년대의 음원을 모사하여 적절히 섞고 있습니다.
                    </p>
                    <p className="mt-2">
                      EL&P의 음악적 향취는 거의 없습니다. 오히려 <strong>재결성된 EL&P나 Enid의 느낌</strong>을 받을 수 있습니다.
                    </p>
                    <p className="mt-2">
                      전체적으로는 <strong>일본의 싸이버펑크 애니메이션의 매우 현대적인 부분과 신비한 느낌의 사극을 동시에 보는 느낌</strong>입니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">보컬과 가사</h4>
                    <p>
                      Morita의 보컬은 일본 특유의 중음위주의 보컬을 벗어나 <strong>저음이 많이 깔린 건조한 목소리</strong>입니다.
                    </p>
                    <p className="mt-2">
                      다른 가수들과 비교한다면 <strong>바이브레이션이 없는 Todd Rundgren</strong>과 
                      <strong>Farewell To Arms를 불러주는 Greg Lake</strong>에 근사하다고 생각합니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-red-700 mb-1">"일본주의의 경제" 가사 일부</h5>
                      <div className="text-xs italic">
                        <p>우리의 시장구조보다 더 좋은 것은 없다.</p>
                        <p>모든 의사결정은 민주적인 방식으로 처리된다.</p>
                        <p>이 사조에 역행하는 자, 징벌될 것이니..</p>
                        <p>다른 생각하는 자, 너는 유죄. 추방될 것이다.</p>
                        <p className="mt-1">무엇이 옳고 그른가는 우리가 결정한다.</p>
                        <p>불행한 일이지만 다른 나라의 이해는 없을 것이다.</p>
                        <p>우리의 구조를 파괴하려는 자, 죽을 것이다.</p>
                        <p>그들은 우리의 적, 우리가 너희를 지배할 것이다.</p>
                      </div>
                    </div>
                    <p className="mt-2">
                      가사는 <strong>철학적인 면과 암울한 미래를 그리는 내용</strong> 등이 겹쳐있고 
                      일본어 반 영어 반으로 구성되 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border-l-2 border-gray-400">
                    <h4 className="font-medium text-gray-800 mb-2">최종 평가</h4>
                    <p>
                      저의 개인적인 생각이라면 <strong>재결성된 EL&P의 음악을 훨씬 상회</strong>한다고 느껴집니다.
                    </p>
                    <p className="mt-2">
                      오랜 음악생활에서 묻어 나오는 관록(음원의 선택, 프로듀싱, 편곡능력등등..)등도 
                      거의 같은 레벨이라고 생각됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Quaser 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 일본</li>
                  <li><strong>결성:</strong> 1975년</li>
                  <li><strong>해산:</strong> 1982년</li>
                  <li><strong>재결성:</strong> 1993년</li>
                  <li><strong>스타일:</strong> EL&P 영향의 프로그레시브 록</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>초절기교적 키보드 연주</li>
                  <li>더블 올건 시스템 (4인조 시절)</li>
                  <li>현대적 + 신비한 일본적 정서</li>
                  <li>철학적이고 암울한 가사</li>
                  <li>높은 음악적 순도</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">멤버 구성</h4>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-2 rounded">
                  <strong>초기 3인조 (1975-1979)</strong>
                  <p>Matsuura Yoshikazu (Key), T. Morita (Vo, B, G), 드럼</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>4인조 시절 (1979-1982)</strong>
                  <p>더블 올건 시스템 (Matsuura + Morita)</p>
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>재결성 (1993)</strong>
                  <p>T. Morita (all), 게스트: Yozox (Ain Soph), Nobori Masatoshi</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="bg-indigo-100 p-3 rounded border-l-2 border-indigo-400">
                <strong>Out From Quaser</strong> (1993, Belle Antique 9449)
                <div className="mt-2 text-xs">
                  <p><strong>프로듀서:</strong> T. Morita and Yozox (Ain Soph)</p>
                  <p><strong>녹음:</strong> Wuaser Studio during Jan - Oct. '93</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">트랙 리스트</h4>
              <div className="text-xs space-y-1">
                <div className="bg-white p-1 px-2 rounded">1. 일본주의경제 - Japanomics (5:52)</div>
                <div className="bg-white p-1 px-2 rounded">2. Wait For Nothing (5:11)</div>
                <div className="bg-white p-1 px-2 rounded">3. Tales Ancient (5:17)</div>
                <div className="bg-white p-1 px-2 rounded">4. Amaderas (5:44)</div>
                <div className="bg-white p-1 px-2 rounded">5. Efficiency Game (5:03)</div>
                <div className="bg-white p-1 px-2 rounded">6. See The Light, Feel The Wind (6:48)</div>
                <div className="bg-white p-1 px-2 rounded">7. Awakening (5:37)</div>
                <div className="bg-white p-1 px-2 rounded">8. 착란 - Psycollapse (5:23)</div>
                <div className="bg-white p-1 px-2 rounded">9. Baby Sally (4:40)</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">특이사항</h4>
              <div className="text-xs space-y-1">
                <p>• 70년대 일본 프로그레시브 락 황금기의 전설적 밴드</p>
                <p>• EL&P의 전곡을 라이브로 연주할 정도의 실력</p>
                <p>• 앨범 없이 해산 후 10년 만에 재결성</p>
                <p>• 재결성된 EL&P보다 뛰어난 음악성 평가</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/review/q" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Q 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 