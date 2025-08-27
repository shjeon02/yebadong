import Link from 'next/link'

export default function Chapter7Page() {
  return (
    <div className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-4">
            7. 프로그레시브 락의 사회학 (A Sociology of Progressive Rock)
          </h1>
          
          <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-6">
            <div className="text-red-600 font-semibold text-sm">
              ⚠️ WARNING! 저작권 안내
            </div>
            <p className="text-red-500 text-xs mt-2 italic">
              This page is a strict COPYRIGHT VIOLATION, constructed for PURE PRIVATE PURPOSE.<br/>
              Please DON'T reproduce or distribute the contents of this page.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
            <p className="text-sm text-blue-700">
              📖 <strong>번역:</strong> Kim Seong Woo, libero (swkim@gaia.kaist.ac.kr)
            </p>
            <p className="text-xs text-blue-600 mt-2">
              from Macan, Edward. <em>Rocking the Classics: English Progressive Rock and the Counterculture</em>, 
              Oxford Univ. Press., USA, 1997.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            
            {/* Opening Quote */}
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <blockquote className="text-pink-800 italic">
                "Pink Floyd의 지도적인 사람들은 '노동자 계층 영웅들'이라고 결코 주제넘게 자처할 수 없었다(또는 하지 않았다). 
                그들의 배경은 부모들이 전적으로 구별된, 엄밀한 화이트칼라였다."
              </blockquote>
            </div>

            <p>
              프로그레시브 락은 결코 노동자 계층 스타일이 아니었고, 프로그레시브 락 뮤지션들은 결코 노동자 계층의 영웅들이 되려고 하지 않았다. 
              반대로, 프로그레시브 락은 보헤미안적인, 지식인 중류 계층의 생생한 표현이었다.
            </p>

            {/* Classical Music Relationship */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎼 클래식 음악과의 관계</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  한 그룹으로서 영국 프로그레시브 락 뮤지션들의 교육적인 배경들은 그들이 유럽 고전 음악 레파토리에 
                  익숙한 것을 설명하는 데 큰 도움이 된다는 것은 의심할 수 없으며, 이러한 배경들 없이 프로그레시브 락은 
                  발전되지 않았을 것이다.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🎹 John Wetton의 증언</h3>
                  <blockquote className="text-sm italic text-blue-700 border-l-4 border-blue-400 pl-4">
                    "저는 기본적으로 유럽인이고, 저의 배경은 스스로 매우 기하학적인 고전 음악으로부터 옵니다. 
                    우리가 영국에서 운이 좋은 것은 두 대륙 사이에 서 있다는 거라고 생각해요. 우리는 미국 R&B 블루스 음악 류의 
                    영향을 받고 또한 반면에 수천년의 고전 음악을 가집니다. 그리고, Beatles가 나타났고- 그들은 그 둘을 하나로 녹였죠. 
                    그들은 매우 단순하고 쉬운 미국 R&B를 받아들여, 유럽 멜로디와 화음들을 그 위에 놓았습니다."
                  </blockquote>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🎹 Keith Emerson의 증언</h3>
                  <blockquote className="text-sm italic text-green-700 border-l-4 border-green-400 pl-4">
                    "영국 락앤롤은 미국 흑인 소울 음악으로부터 탄생되었고, Beatles는 처음 그들의 스타일에 그것을 사용하였습니다. 
                    저의 관심은 또한, 매우 초기에는, 많은 블루 노트 레코딩들, Miles Davis를 들으며 마음속을 맴돌았습니다. 
                    저는 유럽의 영향들을 사용하기로 결정했으나, 이러한 곡들을 강화시키려고 즉흥성을 가진 재즈의 사고 방식을 사용했습니다."
                  </blockquote>
                </div>

                <p>
                  ELP의 Greg Lake가 언급했듯이, 이들 뮤지션들이 유럽 고전음악적인 유산을 끌어내는 것은 
                  미국 대중 뮤지션들이 자신들 출생지의 블루스, 재즈, 그리고 가스펠 유산들을 끌어내는 것만큼 자연스러웠다.
                </p>
              </div>
            </div>

            {/* Anglican Church Influence */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">⛪ 성공회 교회의 영향</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  프로그레시브 락 스타일의 형성에서 또다른 강력한 문화적인 힘은 성공회 교회였다. 
                  누구나 왜 프로그레시브 락 스타일이 미국보다는 오히려 잉글랜드에서 일어났는지를 이해하고 싶다면, 
                  적어도 그 쟝르에서 발휘된 성공회의 전통 합창의 분명한 영향력을 들여다 볼 필요가 있다고 믿는다.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">🎵 합창단 경험 뮤지션들</h4>
                    <ul className="text-xs text-purple-700 space-y-1">
                      <li>• <strong>John Wetton:</strong> 형이 합창단 지휘자이며 오르간 연주자</li>
                      <li>• <strong>Chris Squire (Yes):</strong> St. Andrew 성당 합창단 소년단원</li>
                      <li>• <strong>Peter Gabriel (Genesis):</strong> 10대에 합창단 소년단원</li>
                      <li>• <strong>Patrick Moraz:</strong> Bournemouth 지방 교회 오르간주자</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">🎹 교회 음악 영향</h4>
                    <ul className="text-xs text-amber-700 space-y-1">
                      <li>• <strong>Mike Ratledge:</strong> 캔터베리 대성당 오르간주자와 오르간 공부</li>
                      <li>• <strong>Robert Fripp:</strong> Orlando Gibbons의 17세기 성가 영향</li>
                      <li>• <strong>Keith Emerson:</strong> 성공회 배경</li>
                      <li>• <strong>Peter Hammill:</strong> Thomas Tallis 등 영국 르네상스 합창음악</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">💬 뮤지션들의 증언</h3>
                  <div className="space-y-3 text-sm text-teal-700">
                    <blockquote className="border-l-4 border-teal-400 pl-4 italic">
                      <strong>Chris Squire:</strong> "내가 그것[St. Andrew's에서 합창단 소년단원으로 활동한 것]으로부터 얻은 
                      음악의 실제적인 이해와 그로 향한 정신적인 느낌은 그것이 나와 함께 머무른 어떤 것이었다"
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-teal-400 pl-4 italic">
                      <strong>Peter Gabriel:</strong> "찬송은 Charterhouse에서 유일한 음악적인 순간이 되곤 했다. 
                      채플에서 오르간은 장대했고 연주는 굉장했고...훌륭했다. 모든 사람은 일어나서 소리질렀을 것이다. 
                      흑인 영가만큼 감동되었을 것이다. 그것은 정말 감정을 유발시켰고, 사람들은 그들이 세상의 꼭대기에 
                      있는 것 같은 느낌으로 채플을 나왔을 것이다"
                    </blockquote>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">🎼 성공회 음악의 영향</h3>
                  <p className="text-sm text-orange-700">
                    프로그레시브 락의 어떤 가장 주목할만한 점들이 적어도 부분적으로는 성공회 교회 음악의 영향으로부터 나왔다는 것을 
                    가정하는 것은 전혀 불합리하지 않다:
                  </p>
                  <ul className="text-xs text-orange-600 space-y-1 ml-4 mt-2">
                    <li>• <strong>선법적 화성</strong></li>
                    <li>• <strong>"파이프 오르간적" 울림들</strong></li>
                    <li>• <strong>준합창적인 보컬 편곡에의 강조</strong></li>
                    <li>• <strong>순수한 두성조(頭聲調, head tone)들과 조율된 창법의 선호</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Jazz Comparison */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎷 재즈와의 비교: "고전화" 현상</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  James Lincoln Collier은, 재즈의 역사에 대한 그의 조사에서, 대중 음악의 한 쟝르가 노동자 계층의 
                  흑인 뮤지션들로부터 탄생하고, 결과적으로 백인 사회에서의 어느 정도의 지위에 도달하고, 
                  그리고 중류층이며, 대학교육을 받은 뮤지션들의 관심을 끌게 되는 유형을 적었다.
                </p>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">🎼 "고전화" 과정</h3>
                  <div className="text-sm text-indigo-700 space-y-2">
                    <p>
                      이들 뮤지션들은 자의식적으로 유럽 고전음악적 전통의 구조적인, 그리고 음색적인 요소들을 
                      그 음악으로 통합하려고 시도했다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>1940년대:</strong> Stan Kenton과 Woody Herman의 "심포닉 재즈"</li>
                      <li>• <strong>1950년대:</strong> Dave Brubeck, Lennie Tristano, Modern Jazz Quartet의 쿨 재즈</li>
                      <li>• <strong>1960년대 후반:</strong> 프로그레시브 락의 등장</li>
                    </ul>
                    <p className="text-xs italic mt-2">
                      프로그레시브 락은 락 음악의 지성화와 "고전화"에 대한 쿨 재즈의 매우 비슷한 역할을 충족시킨다.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">🔮 미래 전망</h3>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p>
                      아마 누구나 대중 음악의 미래 스타일들이 또 이런 형태의 "고전화"를 칠 것인지를 궁금해할런지 모른다. 
                      나는 아니라고 대답하는 쪽이다.
                    </p>
                    <p className="text-xs">
                      고전 음악은 1960년대 초반 이래로 대중성에서 지속적인 감퇴를 겪고 있었다. 
                      미래의 대중 음악 형태들의 지성화는 유럽 고전 음악적 전통과의 융합과는 다른 형태를 가질 것이라고 상상해 본다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* American Reception */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🇺🇸 미국에서의 수용</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  프로그레시브 락이 미국에서 상업적으로 성공한 것은 흥미로운 사회학적 현상이다. 
                  영국의 중산층 지식인 문화에서 탄생한 음악이 어떻게 미국 청중들에게 받아들여졌는가?
                </p>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">📊 상업적 성공 지표</h3>
                  <div className="text-sm text-red-700 space-y-2">
                    <p>미국에서 프로그레시브 락의 성공은 다음과 같은 수치로 확인된다:</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>Pink Floyd "Dark Side of the Moon":</strong> Billboard 200에서 736주 연속 차트인</li>
                      <li>• <strong>Yes "Fragile":</strong> 미국에서 플래티넘 인증</li>
                      <li>• <strong>Genesis:</strong> 1970년대 중반부터 미국 투어에서 대형 경기장 매진</li>
                      <li>• <strong>ELP:</strong> 미국 록 페스티벌의 헤드라이너로 활동</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">🎓 미국 청중의 특성</h3>
                  <div className="text-sm text-blue-700 space-y-2">
                    <p>
                      미국에서 프로그레시브 락을 수용한 청중들은 영국과 유사한 사회적 배경을 가지고 있었다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>대학생 및 대졸자:</strong> 고등교육을 받은 중산층</li>
                      <li>• <strong>도시 거주자:</strong> 주로 동부와 서부 해안 지역</li>
                      <li>• <strong>문화적 엘리트:</strong> 클래식 음악에 대한 기본적 지식 보유</li>
                      <li>• <strong>반문화 참여자:</strong> 1960년대 히피 운동과 연결</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🎸 미국 프로그레시브 밴드들</h3>
                  <div className="text-sm text-green-700 space-y-2">
                    <p>영국 프로그레시브 락의 영향으로 미국에서도 유사한 밴드들이 등장했다:</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white p-3 rounded border border-green-100">
                        <h4 className="font-semibold text-green-700 mb-1">🎹 Kansas</h4>
                        <p className="text-xs text-green-600">
                          클래식 영향이 강한 미국 프로그레시브 록의 대표주자. 
                          바이올린과 키보드를 활용한 심포닉 사운드.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-green-100">
                        <h4 className="font-semibold text-green-700 mb-1">🥁 Rush</h4>
                        <p className="text-xs text-green-600">
                          캐나다 출신이지만 미국에서 큰 성공. 
                          복잡한 구조와 철학적 가사로 프로그레시브 정신 계승.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-green-100">
                        <h4 className="font-semibold text-green-700 mb-1">🎺 Chicago</h4>
                        <p className="text-xs text-green-600">
                          초기 작품에서 프로그레시브 요소와 재즈 융합을 시도. 
                          브라스 섹션을 활용한 독특한 사운드.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-green-100">
                        <h4 className="font-semibold text-green-700 mb-1">🎸 Styx</h4>
                        <p className="text-xs text-green-600">
                          시카고 출신으로 극장적 요소와 컨셉트 앨범으로 
                          미국식 프로그레시브 록 발전에 기여.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Impact */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🌍 문화적 영향과 유산</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🎭 반문화 운동과의 관계</h3>
                  <div className="text-sm text-purple-700 space-y-2">
                    <p>
                      프로그레시브 락은 1960년대 후반 반문화 운동의 음악적 표현이었다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>기존 질서에 대한 도전:</strong> 전통적인 팝송 구조의 파괴</li>
                      <li>• <strong>지적 탐구:</strong> 철학, 문학, 과학에 대한 관심</li>
                      <li>• <strong>영성 추구:</strong> 동양 철학과 신비주의적 요소</li>
                      <li>• <strong>예술적 통합:</strong> 음악, 시각예술, 문학의 융합</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">📚 교육적 영향</h3>
                  <div className="text-sm text-orange-700 space-y-2">
                    <p>
                      프로그레시브 락은 음악 교육에도 중요한 영향을 미쳤다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>음악 이론 교육:</strong> 복잡한 화성과 리듬 구조 학습</li>
                      <li>• <strong>장르 간 융합:</strong> 클래식과 대중음악의 경계 허물기</li>
                      <li>• <strong>창작 교육:</strong> 컨셉트 앨범과 프로그램 음악 개념</li>
                      <li>• <strong>연주 기법:</strong> 고도의 기술적 숙련도 요구</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">🔄 후대 장르에 미친 영향</h3>
                  <div className="text-sm text-teal-700 space-y-2">
                    <p>프로그레시브 락의 유산은 다양한 형태로 계승되었다:</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      <div>
                        <p><strong>1980년대:</strong></p>
                        <ul className="text-xs space-y-1 ml-2">
                          <li>• 네오 프로그레시브 (Marillion, IQ)</li>
                          <li>• 프로그레시브 메탈 (Dream Theater)</li>
                          <li>• 뉴 웨이브의 실험성</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>1990년대 이후:</strong></p>
                        <ul className="text-xs space-y-1 ml-2">
                          <li>• 포스트 록 (Godspeed You! Black Emperor)</li>
                          <li>• 매스 록 (Don Caballero)</li>
                          <li>• 프로그레시브 일렉트로니카</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎯 결론: 프로그레시브 락의 사회학적 의의</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p className="font-medium text-blue-800">
                  Edward Macan의 사회학적 분석을 통해 프로그레시브 락의 본질을 이해할 수 있다:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded border border-blue-100">
                    <h3 className="font-semibold text-blue-700 mb-2">🏛️ 계층적 특성</h3>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• <strong>중산층 지식인:</strong> 대학 교육을 받은 부르주아 계층</li>
                      <li>• <strong>문화적 자본:</strong> 클래식 음악에 대한 지식과 경험</li>
                      <li>• <strong>보헤미안 정신:</strong> 기존 질서에 대한 지적 반발</li>
                      <li>• <strong>영국적 특성:</strong> 성공회 전통과 유럽 문화 유산</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-purple-100">
                    <h3 className="font-semibold text-purple-700 mb-2">🌐 글로벌 확산</h3>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• <strong>미국 수용:</strong> 유사한 사회적 배경의 청중</li>
                      <li>• <strong>문화적 번역:</strong> 각국의 맥락에서 재해석</li>
                      <li>• <strong>교육적 영향:</strong> 음악 교육과 창작에 미친 영향</li>
                      <li>• <strong>지속적 유산:</strong> 현대 음악까지 이어지는 영향</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">🔮 역사적 의의</h3>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p>
                      프로그레시브 락은 단순한 음악 장르를 넘어서 1960년대 후반-1970년대 초반의 
                      사회문화적 변화를 반영하는 중요한 문화 현상이었다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4 mt-2">
                      <li>• <strong>고급/대중 문화의 융합:</strong> 문화적 위계질서에 대한 도전</li>
                      <li>• <strong>반문화 운동의 음악적 표현:</strong> 기존 사회에 대한 예술적 저항</li>
                      <li>• <strong>기술과 예술의 결합:</strong> 새로운 악기와 녹음 기술의 창조적 활용</li>
                      <li>• <strong>국제적 문화 교류:</strong> 영국에서 시작되어 전 세계로 확산</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">📖 학술적 기여</h3>
                  <div className="text-sm text-green-700 space-y-2">
                    <p>
                      Macan의 연구는 대중음악 연구에 중요한 기여를 했다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4 mt-2">
                      <li>• <strong>사회학적 접근:</strong> 음악을 사회적 맥락에서 분석</li>
                      <li>• <strong>계층 분석:</strong> 음악과 사회 계층의 관계 규명</li>
                      <li>• <strong>문화적 전승:</strong> 전통 음악과 현대 음악의 연결고리 탐구</li>
                      <li>• <strong>국제 비교:</strong> 영국과 미국의 수용 양상 비교</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-blue-700 mt-6 italic font-medium">
                  "프로그레시브 락은 보헤미안적인, 지식인 중류 계층의 생생한 표현이었다." 
                  - 이 한 문장이 프로그레시브 락의 사회학적 본질을 가장 잘 요약한다.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <div className="flex gap-2">
            <Link 
              href="/misc/chapters" 
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              ← 목차
            </Link>
            <Link 
              href="/misc/chapters/ch6" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              ← Chapter 6
            </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            Chapter 7 / 8
          </div>
          
          <Link 
            href="/misc/chapters/ch8" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Chapter 8 →
          </Link>
        </div>
      </div>
    </div>
  )
}

