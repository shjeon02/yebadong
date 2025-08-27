import Link from 'next/link'

export default function Chapter6Page() {
  return (
    <div className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-4">
            6. 관련 음악 양식들 (Related Styles)
          </h1>
          
          <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-6">
            <div className="text-red-600 font-semibold text-sm">
              ⚠️ WARNING! 저작권 안내
            </div>
            <p className="text-red-500 text-xs mt-2 italic">
              This page is a strict COPYRIGHT VIOLATION, constructed for PURE PRIVATE PURPOSE.<br/>
              Please DON&apos;T reproduce or distribute the contents of this page.
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

        {/* Book Introduction */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#0000AA]">📚 Rocking the Classics 소개</h2>
          <div className="text-sm text-yellow-800 space-y-2">
            <p>
              <strong>저자:</strong> Edward Macan (뮤직 컬리지 음악학 교수)<br/>
              <strong>출판:</strong> Oxford University Press (1997)<br/>
              <strong>주제:</strong> 영국 프로그레시브 록과 반문화 운동의 학술적 분석
            </p>
            <p className="text-xs">
              이 책은 1960년대 후반부터 1970년대 중반까지의 영국 프로그레시브 록을 히피 반문화 운동의 
              맥락에서 분석한 최초의 본격적인 학술서입니다.
            </p>
          </div>
        </div>

        {/* Table of Contents for Chapter 6 */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#0000AA]">📑 Chapter 6 목차</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <p className="font-medium text-[#0000AA]">주요 관련 양식들</p>
              <ul className="text-xs space-y-1 ml-4">
                <li>• 블루스와 프로그레시브 록</li>
                <li>• 포크 음악의 영향</li>
                <li>• 재즈와의 융합</li>
                <li>• 클래식 음악과의 관계</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-[#0000AA]">파생 장르들</p>
              <ul className="text-xs space-y-1 ml-4">
                <li>• 심포닉 록</li>
                <li>• 아트 록</li>
                <li>• 크라우트 록</li>
                <li>• 캔터베리 사운드</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            
            {/* Opening Quote */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <blockquote className="text-blue-800 italic">
                &quot;음악의 모든 분야에서 점점 더 아이디어들의 교환이 이루어지고 있다. 
                서로 다른 사람들이 만나게 될 것이다. 음악은 더욱 음악같아지고, 
                음악의 한 부분을 분류하는 것은 더욱 더 어려워지고 있다.&quot;
              </blockquote>
              <p className="text-xs text-blue-600 mt-2 text-right">
                - Frank Zappa
              </p>
            </div>

            {/* Introduction */}
            <p>
              1970년 경에 Lovin&apos; Spoonful의 Joe Butler에 의한 이러한 비평은 대중음악, 특히 1960년대 후반과 
              70년대 초반의 대중음악에 대한 분류들이 얼마나 제멋대로였는지를 암시한다. 클래식, 재즈, 포크, 락, 
              그리고 동양적인 음악 스타일들이 새롭고 통일된 형태로 흘러들어가려는 모든 지류였다는 것이 당시의 
              일반적인 믿음이었다.
            </p>

            <p>
              아마 그 세대의 주요한 전위(avant-garde) 음악 작곡가인, 적어도 Karlheinz Stockhausen와 같은 인물이 
              출현의 끝에 있는 범세계적인 음악에 관해 얘기했었다. 물론 그런 양식은 결코 나타나지 않았다. 
              1966-70년의 통일된 젊은 문화가 많은 별개의 소문화(subculture)들로 분열(分裂)되도록 운명지워졌었다.
            </p>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-sm text-red-700">
                <strong>음악 산업의 역할:</strong> 레코드 회사와 락 저널리스트들은 분류와 구분에 대한 그들의 고집으로써 
                이러한 이상의 사망(死亡)에 기여했다. 전자는 특정한 형태의 녹음된 산물과 함께 레코드 구매의 특정계층을 
                표적으로 하는 목적으로, 후자는 이데올로기적인 목적으로였다.
              </p>
            </div>

            <p>
              사실, 저널리스트들과 음악 산업 경영자들은 대중 음악의 굳어진 소분류들에 대한 환상(나중에는 진실이 된)을 
              만들어내는 일을 잘해 냈다. 즉, 이러한 사실 이후에 1960년대 말과 70년대 초의 음악을 접한 사람들이 
              Yes와 Black Sabbath - 또는 Pink Floyd와 Paul Simon, 또는 Nice와 Sammy Davis, Jr -가 한 무대를 
              나눠쓸 수 있었으리라고 믿기는 어려웠다.
            </p>

            <p>
              하지만 그들은 했었고, 이런 연유로 프로그레시브 락 연구에서 지금의 경우보다도 훨씬 더 서로 밀접한 관계를 
              가진 것으로 이해되었던 헤비 메틀, 재즈락, 그리고 포크락과 같은 음악양식을 무시하는 것은 매우 위험한 
              것이다. 그러면, 이 장에서 프로그레시브 락과 이와 어느 정도 겹치는 많은 쟝르들과의 관계를 검토할 것이다. 
              이런 식의 비교가 프로그레시브 락의 본질적인 특성을 보다 분명하게 밝혀줄 것이라고 믿는다.
            </p>

            {/* English Jazz-rock Fusion Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎷 영국 재즈락 퓨전 (English Jazz-rock Fusion)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  영국 재즈락 운동은 프로그레시브 락 운동과 거의 동시인 1960년대 후반기동안 일어났다. 
                  이 시기에 두 스타일간의 차이는 종종 뚜렷하지 않았다.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">🥁 Colosseum</h4>
                    <p className="text-sm text-blue-700">
                      재즈, 리듬앤블루스, 그리고 초기 프로그레시브 락 요소들을 혼합한 기교파 드러머 John Hiseman이 앞장선 5인조 밴드. 
                      <em>Those Who Are about to Die Salut You</em> LP는 John Coltrane과 Procol Harum의 개념적인 연결로 묘사됨.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🎹 Traffic</h4>
                    <p className="text-sm text-green-700">
                      재즈, 소울, 그리고 포크적 요소를 끌어냈던 오르간주자 Steve Winwood이 이끈 그룹. 
                      다양한 장르의 융합을 통한 독특한 사운드 개발.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">🎺 If</h4>
                    <p className="text-sm text-purple-700">
                      Chicago나 Blood, Sweat, and Tears 같은 미국 그룹들의 초기 음악과 유사한 
                      빅 밴드 &quot;재즈팝&quot; 퓨전을 개발했던 7인 앙상블.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">👑 King Crimson</h4>
                    <p className="text-sm text-red-700">
                      1969년 &quot;21st-century Schizoid Man&quot;에서 하드 밥과 프리 재즈 요소들을 
                      영국 락의 주류로 끌어내는 데 싹을 틔운 밴드.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  그러나, 1970년대 초에 두 가지 분명한 지류들이 영국 재즈락 씬에서 발전하고 있었다.
                </p>

                {/* Mahavishnu Orchestra Section */}
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">🎸 Mahavishnu Orchestra와 헤비 재즈락</h3>
                  <div className="text-sm text-orange-700 space-y-2">
                    <p>
                      우선, 놀라운 영국 기타리스트 John McLaughlin에 의해 주도된 다국적 그룹인 
                      Mahavishnu Orchestra에 의해 개척된 헤비 재즈락 퓨전이 있었다.
                    </p>
                    <p>
                      Mahavishnu Orchestra의 퓨전 스타일(&quot;재즈락&quot;이 언급될 때, 종종 사람들이 자동적으로 생각하는 것)은 
                      연주 중심의 상당히 전자적(락 악기편성 자체를 기초로)이고, 무서운 템포와 기교적인 솔로연주로 특정지어진다.
                    </p>
                    <p>
                      이 스타일은 특별히 1970년대 중반에 유행되었고, 영국에서 다음과 같은 음악을 통해서 나타났다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>Brand X:</strong> 영국의 대표적인 퓨전 밴드</li>
                      <li>• <strong>Colosseum II:</strong> Jon Hiseman의 또다른 밴드 (그 세대의 가장 무시못할 유러피언 드러머)</li>
                      <li>• <strong>Isotope:</strong> 영국 재즈락의 중요한 그룹</li>
                      <li>• <strong>Jeff Beck & Jan Hammer:</strong> 영국 기타리스트와 체코 키보디스트의 공동 작품</li>
                    </ul>
                  </div>
                </div>

                {/* Canterbury School Section */}
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">🏛️ 캔터베리 스쿨 (Canterbury School)</h3>
                  <div className="text-sm text-teal-700 space-y-3">
                    <p>
                      영국 퓨전 씬에 필적하는 것은, 캔터베리 스쿨(Canterbury school)이었는데, 
                      이는 1960년대 말의 캔터베리 언더그라운드로부터 발생한 더욱 독특한 영국 재즈락 스타일의 전달자들을 말한다.
                    </p>

                    <div className="bg-white p-3 rounded border border-teal-100">
                      <h4 className="font-semibold text-teal-700 mb-2">🌸 The Wilde Flowers (종자 밴드)</h4>
                      <p className="text-xs text-teal-600">
                        캔터베리 밴드의 종자(種子)인 the Wilde Flowers는 결코 앨범을 내지 않았지만, 
                        많은 멤버들이 캔터베리 씬의 가장 오래 지속된 두 단체에 기여했다.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      <div className="bg-white p-3 rounded border border-teal-100">
                        <h4 className="font-semibold text-teal-700 mb-1">🎹 Soft Machine</h4>
                        <ul className="text-xs text-teal-600 space-y-1">
                          <li>• William S. Burroughs의 포르노그래피적 SF 여행담에서 이름 유래</li>
                          <li>• 영국 재즈락 연주 방식 확립에 특히 영향</li>
                          <li>• <em>Third</em>와 <em>Fourth</em> 앨범 (1970-71)이 대표작</li>
                          <li>• 이상한 구조, 느긋한 템포, 밀도있고 복잡한 전개</li>
                          <li>• 싸이키델릭 유산과 전위적 전자음악에의 관심</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-teal-100">
                        <h4 className="font-semibold text-teal-700 mb-1">🚐 Caravan</h4>
                        <ul className="text-xs text-teal-600 space-y-1">
                          <li>• Soft Machine과 함께 캔터베리의 양대 산맥</li>
                          <li>• 1960년대 말 첫 앨범 발매</li>
                          <li>• 1980년대 초반까지 활동</li>
                          <li>• 팝송에의 강한 관심 유지</li>
                          <li>• 데뷔 앨범은 Yes, Genesis와 유사한 포크/락/클래식 퓨전</li>
                        </ul>
                      </div>
                    </div>

                    {/* Extended Canterbury Bands */}
                    <div className="bg-white p-3 rounded border border-teal-100 mt-3">
                      <h4 className="font-semibold text-teal-700 mb-2">🎵 확장된 캔터베리 패밀리</h4>
                      <div className="grid md:grid-cols-3 gap-2">
                        <div className="text-xs text-teal-600">
                          <p className="font-medium">직계 후손들:</p>
                          <ul className="space-y-1">
                            <li>• <strong>Gong</strong> - Daevid Allen</li>
                            <li>• <strong>Matching Mole</strong> - Robert Wyatt</li>
                            <li>• <strong>Soft Heap</strong> - Soft Machine 부산물</li>
                            <li>• <strong>Quiet Sun</strong></li>
                          </ul>
                        </div>
                        <div className="text-xs text-teal-600">
                          <p className="font-medium">키보드 중심:</p>
                          <ul className="space-y-1">
                            <li>• <strong>Egg</strong> - Dave Stewart</li>
                            <li>• <strong>Hatfield and the North</strong></li>
                            <li>• <strong>National Health</strong></li>
                            <li>• <strong>Gilgamesh</strong> - Alan Gowen</li>
                          </ul>
                        </div>
                        <div className="text-xs text-teal-600">
                          <p className="font-medium">특이 케이스:</p>
                          <ul className="space-y-1">
                            <li>• <strong>Henry Cow</strong> - 극도로 복잡</li>
                            <li>• <strong>Bruford</strong> - 후기 캔터베리</li>
                            <li>• <strong>Ian Carr's Nucleus</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Canterbury Style Evolution */}
                    <div className="bg-amber-50 p-3 rounded border border-amber-200 mt-3">
                      <h4 className="font-semibold text-amber-800 mb-2">📈 캔터베리 스타일의 진화</h4>
                      <div className="text-xs text-amber-700 space-y-2">
                        <p>
                          <strong>1960년대 말:</strong> 초기 캔터베리 밴드들은 서로 매우 다른 사운드를 가졌다. 
                          Soft Machine은 완전한 연주 밴드였지만, Caravan은 팝송 중심이었다.
                        </p>
                        <p>
                          <strong>1970년대 중반:</strong> 더욱 쉽게 인식할 수 있는 "캔터베리 스타일"이 나타났다. 
                          절충적이고 변덕스러운 하드퓨전, 프로그레시브 락, 그리고 캔터베리 유산의 융합.
                        </p>
                        <p>
                          <strong>특징:</strong> 탁월한 퓨전 연주, 복잡한 편곡, 심오한 합주 상호작용, 
                          전위적 전자음악 삽입부 강조.
                        </p>
                      </div>
                    </div>

                    {/* Dave Stewart Quote */}
                    <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-3">
                      <h4 className="font-semibold text-blue-800 mb-2">💬 Dave Stewart (Bruford 키보디스트)의 증언</h4>
                      <blockquote className="text-xs text-blue-700 italic">
                        "미국인에게, '락'이라는 말은 약간 다른 걸 의미하죠. 제가 락을 말할 때는, 비트 뮤직을 의미합니다. 
                        드럼을 사용하는 것이죠. 사람들은 Bruford를 재즈라고 합니다. 우리들에게는 그건 락입니다. 
                        우리들은 항상 재즈로 분류되는 것과 싸웁니다. 저는 재즈 뮤지션으로 분류되는 것을 싫어해요. 
                        저는 락 뮤지션이길 좋아하죠. 그것이 제가 항상 그래왔던 겁니다. 
                        제 의미는, 저는 별난 락 뮤지션이라는 겁니다."
                      </blockquote>
                    </div>
                  </div>
                </div>

                {/* Jazz-Rock vs Progressive Rock Analysis */}
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mt-6">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">🔍 재즈락 vs 프로그레시브 락 비교 분석</h3>
                  <div className="text-sm text-indigo-700 space-y-3">
                    <p>
                      영국 프로그레시브 락은 그 시대 다른 어떤 장르보다도 더 재즈락과 밀접하다 
                      (포크락의 가능한 예외를 가진다). 이것은 둘 다 그렇게 많은 공통된 양식상의 성향들을 가지기 때문이다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded border border-indigo-100">
                        <h4 className="font-semibold text-indigo-700 mb-2">🤝 공통점</h4>
                        <ul className="text-xs text-indigo-600 space-y-1">
                          <li>• <strong>긴 곡들:</strong> 10분 이상의 연주곡 선호</li>
                          <li>• <strong>박자상의 기교:</strong> 복잡한 리듬과 변박</li>
                          <li>• <strong>긴 독주:</strong> 반복된 오스티나토 위의 솔로</li>
                          <li>• <strong>기교적 연주:</strong> 높은 수준의 연주 실력 요구</li>
                          <li>• <strong>재즈 영향:</strong> 유아기에 재즈로부터 영향</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-indigo-100">
                        <h4 className="font-semibold text-indigo-700 mb-2">🎯 차이점</h4>
                        <ul className="text-xs text-indigo-600 space-y-1">
                          <li>• <strong>기교 강조:</strong> 재즈락이 더 강한 기교 중심</li>
                          <li>• <strong>클래식 영향:</strong> 프로그레시브 락이 더 강함</li>
                          <li>• <strong>서정적 선율:</strong> 재즈락은 중시하지 않음</li>
                          <li>• <strong>조밀함:</strong> 캔터베리 락의 특별한 조밀함</li>
                          <li>• <strong>화성법:</strong> 재즈락은 더 반음계적, 프로그는 더 선법적</li>
                        </ul>
                      </div>
                    </div>

                    {/* Harmonic Differences */}
                    <div className="bg-white p-3 rounded border border-indigo-100">
                      <h4 className="font-semibold text-indigo-700 mb-2">🎼 화성적 차이점</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="text-xs text-indigo-600">
                          <p className="font-medium">재즈락 화성법:</p>
                          <ul className="space-y-1">
                            <li>• 더욱 반음계적(chromatic)</li>
                            <li>• 풍부하고 복잡한 화성</li>
                            <li>• 9th, 11th, 13th 코드 활용</li>
                            <li>• 변화된 음표들과 함께</li>
                          </ul>
                        </div>
                        <div className="text-xs text-indigo-600">
                          <p className="font-medium">프로그레시브 락 화성법:</p>
                          <ul className="space-y-1">
                            <li>• 더욱 선법적(modal)</li>
                            <li>• 더욱 독점적으로 3화음적</li>
                            <li>• 일반적으로 더욱 엄격</li>
                            <li>• 교회 선법의 활용</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Musician Crossover */}
                    <div className="bg-white p-3 rounded border border-indigo-100">
                      <h4 className="font-semibold text-indigo-700 mb-2">🔄 뮤지션들의 교차 활동</h4>
                      <div className="text-xs text-indigo-600 space-y-2">
                        <p><strong>프로그레시브 → 재즈락:</strong></p>
                        <ul className="space-y-1 ml-4">
                          <li>• <strong>Bill Bruford</strong> (Yes, King Crimson → Bruford)</li>
                          <li>• <strong>Patrick Moraz</strong> (Yes, Moody Blues → 솔로 퓨전 앨범)</li>
                          <li>• <strong>Phil Collins</strong> (Genesis → Brand X 드러머)</li>
                          <li>• <strong>Nick Mason</strong> (Pink Floyd → Gong 프로듀서)</li>
                        </ul>
                        <p><strong>재즈락 → 프로그레시브:</strong></p>
                        <ul className="space-y-1 ml-4">
                          <li>• <strong>Allan Holdsworth</strong> (캔터베리 → U.K.)</li>
                          <li>• <strong>Richard Sinclair</strong> (Hatfield and the North → Camel)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Audience and Commercial Differences */}
                    <div className="bg-white p-3 rounded border border-indigo-100">
                      <h4 className="font-semibold text-indigo-700 mb-2">👥 청중과 상업적 차이</h4>
                      <div className="text-xs text-indigo-600 space-y-2">
                        <p>
                          <strong>프로그레시브 락:</strong> 거대한 청중, 연주회장과 스타디움 공연, 
                          사치스런 스테이지 쇼, 대서양 횡단 공연
                        </p>
                        <p>
                          <strong>재즈락/캔터베리:</strong> 상대적으로 작은 청중, 클럽과 작은 장소, 
                          제한된 해외 공연 기회, 단순한 무대 연출
                        </p>
                        <p className="italic">
                          예외: 초기 Soft Machine은 Mark Boyle의 혁신적인 라이트 쇼를 
                          프랑스와 암스테르담에서 선보였다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Jazz Influence in Progressive Rock */}
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mt-6">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-3">🎷 프로그레시브 락에서의 재즈 영향</h3>
                  <div className="text-sm text-emerald-700 space-y-3">
                    <p>
                      어떤 재즈에서 파생된 성향들은 전 프로그레시브 락 운동에 스며들었다. 
                      이러한 영향은 특정 악기나 연주법을 통해 구체적으로 나타났다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">🥁 리듬적 영향</h4>
                        <ul className="text-xs text-emerald-600 space-y-1">
                          <li>• <strong>절분된 리듬:</strong> 긴박한 전진적 운동감 창조</li>
                          <li>• <strong>아프리칸-아메리칸 리듬:</strong> 재즈 유산의 다른 표현</li>
                          <li>• <strong>유럽 박자와의 융합:</strong> 복합적 리듬 구성법</li>
                          <li>• <strong>복잡한 박자:</strong> 11, 13, 15화음의 활용</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-emerald-100">
                        <h4 className="font-semibold text-emerald-700 mb-2">🎵 선율적 영향</h4>
                        <ul className="text-xs text-emerald-600 space-y-1">
                          <li>• <strong>유니즌 연주:</strong> 들쑥날쑥한 선율적 악절</li>
                          <li>• <strong>5음계적 외형:</strong> 펜타토닉 스케일 활용</li>
                          <li>• <strong>평탄한 화음:</strong> 5화음과 7화음의 진행음 사용</li>
                          <li>• <strong>모달 접근:</strong> 재즈 선법의 차용</li>
                        </ul>
                      </div>
                    </div>

                    {/* Specific Examples */}
                    <div className="bg-white p-3 rounded border border-emerald-100">
                      <h4 className="font-semibold text-emerald-700 mb-2">🎯 구체적 사례들</h4>
                      <div className="text-xs text-emerald-600 space-y-2">
                        <p>
                          <strong>King Crimson - "21st-century Schizoid Man":</strong> 
                          Mingus 같은 중간 연주 부분에서 재즈 영향을 명확히 보여준다.
                        </p>
                        <p>
                          <strong>목관악기 그룹들:</strong> King Crimson, Gentle Giant, 
                          Van Der Graaf Generator, Jethro Tull에서 재즈적 요소가 가장 분명하다.
                        </p>
                        <p>
                          <strong>Ian Anderson (Jethro Tull):</strong> 
                          플륫 스타일의 많은 수법들이 재즈 플륫티스트 Roland Kirk를 본받았다.
                        </p>
                      </div>
                    </div>

                    {/* Free Jazz Influence */}
                    <div className="bg-white p-3 rounded border border-emerald-100">
                      <h4 className="font-semibold text-emerald-700 mb-2">🌪️ 프리 재즈의 영향</h4>
                      <div className="text-xs text-emerald-600 space-y-2">
                        <p>
                          몇몇 프로그레시브 락 밴드들(King Crimson, Van der Graaf Generator, Henry Cow)의 
                          색소폰 주자들은 1960년대 초반의 프리 재즈, 특히 Ornette Coleman의 영향을 받았다.
                        </p>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="italic">
                            <strong>Allan Moore의 분석:</strong> "프리 재즈의 생소함과 환상적인 요소들이 
                            기묘한 느낌을 강화시키기 위해 결합했다... 이런 상상으로 의지하는 것은 
                            오히려 임박한 운명의 '공포(gothic)'감에 얽매인다."
                          </p>
                        </div>
                        <ul className="space-y-1">
                          <li>• <strong>무조적 악절:</strong> 들쑥날쑥한 atonal한 분출</li>
                          <li>• <strong>구조적 연결점:</strong> 예리한 느슨함에의 열정</li>
                          <li>• <strong>환상적 요소:</strong> 기묘함과 gothic 감정 강화</li>
                        </ul>
                      </div>
                    </div>

                    {/* Technical Examples */}
                    <div className="bg-white p-3 rounded border border-emerald-100">
                      <h4 className="font-semibold text-emerald-700 mb-2">🔧 기술적 사례</h4>
                      <div className="text-xs text-emerald-600">
                        <p className="mb-2">
                          <strong>Hugh Hopper (Soft Machine 베이시스트)의 증언:</strong>
                        </p>
                        <blockquote className="italic bg-gray-50 p-2 rounded">
                          "Soft Machine의 Mike Ratledge는 'Slightly All the Time'과 
                          'Out-Bloody-Rageous'와 같은 잘 편곡된 곡들에 대해, 11, 13, 그리고 15화음들을 제안했어요. 
                          한 미국 뮤지션은 Ratledge의 악보에 대해 '당신들은 Einstein과 합쳤음에 틀림없다!'라고 덧붙였죠."
                      </blockquote>
                        <p className="mt-2">
                          심지어 Third 앨범에서 Hopper 자신의 곡 "Facelift"는 거의 7화음이다.
                        </p>
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                </div>

            {/* Heavy Metal Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🤘 헤비 메탈 (Heavy Metal)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  헤비 메탈은 1960년대 후반과 1970년대 초반에 프로그레시브 락과 거의 동시에 발전했다. 
                  두 장르는 초기에 상당한 교집합을 가지고 있었으며, 많은 밴드들이 두 스타일을 혼합했다.
                </p>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">🎸 초기 헤비 메탈의 프로그레시브 요소</h3>
                  <div className="text-sm text-red-700 space-y-2">
                    <p>
                      초기 헤비 메탈 밴드들 중 많은 수가 프로그레시브 락의 특징들을 보여주었다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>복잡한 구조:</strong> 다악장 형식, 긴 연주곡</li>
                      <li>• <strong>클래식 영향:</strong> 오케스트라적 편곡, 클래식 인용</li>
                      <li>• <strong>개념적 접근:</strong> 컨셉트 앨범, 서사적 가사</li>
                      <li>• <strong>기교적 연주:</strong> 복잡한 리듬, 고도의 연주 기술</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-black text-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">⚡ Black Sabbath</h4>
                    <p className="text-sm">
                      헤비 메탈의 창시자로 여겨지지만, 초기 작품들은 프로그레시브 락의 실험적 요소들을 포함했다. 
                      긴 연주곡과 다양한 음악적 분위기 변화가 특징.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">🌈 Deep Purple</h4>
                    <p className="text-sm text-purple-700">
                      클래식 음악과의 융합을 시도한 대표적 밴드. &quot;Concerto for Group and Orchestra&quot;는 
                      록과 클래식의 본격적인 결합을 보여준 작품.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">🎭 Uriah Heep</h4>
                    <p className="text-sm text-blue-700">
                      오르간과 멜로트론을 활용한 심포닉한 사운드로 프로그레시브 헤비 메탈의 
                      전형을 보여준 밴드. 판타지적 가사와 극적인 구성.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🔥 Led Zeppelin</h4>
                    <p className="text-sm text-green-700">
                      헤비 메탈과 프로그레시브 락의 경계를 넘나든 밴드. &quot;Stairway to Heaven&quot; 같은 
                      곡들은 두 장르의 완벽한 융합을 보여준다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Art Rock Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎨 아트 록 (Art Rock)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  아트 록은 프로그레시브 락과 가장 밀접한 관련이 있는 장르 중 하나이다. 
                  실제로 많은 경우 두 용어는 거의 동의어로 사용되기도 한다.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🎭 아트 록의 특징</h3>
                  <div className="text-sm text-purple-700 space-y-2">
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>예술적 야심:</strong> 단순한 오락을 넘어선 예술적 표현 추구</li>
                      <li>• <strong>실험적 접근:</strong> 전통적인 록 형식에서 벗어난 시도</li>
                      <li>• <strong>지적인 가사:</strong> 문학적, 철학적 내용</li>
                      <li>• <strong>시각적 요소:</strong> 앨범 커버, 무대 연출의 중요성</li>
                      <li>• <strong>다양한 영향:</strong> 클래식, 재즈, 전자음악 등의 융합</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-pink-50 p-4 rounded border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-2">🦢 Roxy Music</h4>
                    <p className="text-sm text-pink-700">
                      Brian Eno의 실험적 신서사이저와 Bryan Ferry의 세련된 보컬이 결합된 
                      아트 록의 대표주자. 글램 록과 아방가르드의 융합.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">🎪 Frank Zappa</h4>
                    <p className="text-sm text-yellow-700">
                      극도의 실험성과 풍자적 가사로 아트 록의 경계를 확장. 
                      클래식, 재즈, 록의 자유로운 혼합과 사회 비판적 메시지.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">🌟 David Bowie</h4>
                    <p className="text-sm text-blue-700">
                      페르소나의 변화와 실험적 음악으로 아트 록을 대중화. 
                      &quot;The Rise and Fall of Ziggy Stardust&quot;는 컨셉트 앨범의 걸작.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🎹 Brian Eno</h4>
                    <p className="text-sm text-green-700">
                      앰비언트 음악의 창시자이자 프로듀서로서 아트 록의 발전에 기여. 
                      &quot;Music for Airports&quot; 등으로 새로운 음악적 개념 제시.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Folk Rock Section */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🌿 포크 락 (Folk Rock)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  포크 락은 프로그레시브 락의 발전에 중요한 영향을 미쳤다. 특히 영국의 전통 음악과 
                  현대적 록 사운드의 융합은 많은 프로그레시브 밴드들에게 영감을 제공했다.
                </p>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🎻 영국 포크 록의 특징</h3>
                  <div className="text-sm text-green-700 space-y-2">
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>전통 악기:</strong> 만돌린, 플륫, 바이올린, 어쿠스틱 기타</li>
                      <li>• <strong>모달 선법:</strong> 중세 교회 선법의 사용</li>
                      <li>• <strong>서사적 가사:</strong> 전설, 신화, 역사적 이야기</li>
                      <li>• <strong>복잡한 리듬:</strong> 전통 춤곡의 불규칙한 박자</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-amber-50 p-4 rounded border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">🎭 Jethro Tull</h4>
                    <p className="text-sm text-amber-700">
                      Ian Anderson의 플륫과 포크적 요소가 프로그레시브 록과 결합. 
                      &quot;Songs from the Wood&quot;, &quot;Heavy Horses&quot; 등에서 영국 전통음악 탐구.
                    </p>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded border border-emerald-200">
                    <h4 className="font-semibold text-emerald-800 mb-2">🌳 Fairport Convention</h4>
                    <p className="text-sm text-emerald-700">
                      영국 전통 발라드를 전기 악기로 재해석한 선구자. 
                      Richard Thompson의 기타와 Sandy Denny의 보컬이 특징.
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded border border-teal-200">
                    <h4 className="font-semibold text-teal-800 mb-2">🏰 Pentangle</h4>
                    <p className="text-sm text-teal-700">
                      재즈와 포크의 정교한 융합. Bert Jansch와 John Renbourn의 
                      복잡한 기타 연주와 Jacqui McShee의 순수한 보컬.
                    </p>
                  </div>
                  
                  <div className="bg-lime-50 p-4 rounded border border-lime-200">
                    <h4 className="font-semibold text-lime-800 mb-2">🎸 Steeleye Span</h4>
                    <p className="text-sm text-lime-700">
                      전통 발라드를 록 편곡으로 재창조. 전기 기타와 전통적인 
                      보컬 하모니의 독특한 결합.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎯 결론: 프로그레시브 락의 독특한 특성</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p className="font-medium text-blue-800">
                  다양한 관련 장르들과의 비교를 통해 프로그레시브 락의 독특한 특성들이 더욱 명확해진다:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded border border-blue-100">
                    <h3 className="font-semibold text-blue-700 mb-2">🎼 음악적 특징</h3>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• <strong>구조적 복잡성:</strong> 다악장 형식, 소나타 형식의 적용</li>
                      <li>• <strong>클래식 영향:</strong> 재즈락보다 강한 고전음악적 요소</li>
                      <li>• <strong>심포닉 텍스처:</strong> 멜로트론, 오케스트라적 편곡</li>
                      <li>• <strong>모달 하모니:</strong> 포크락에서 차용한 교회 선법</li>
                      <li>• <strong>극적 대비:</strong> 어쿠스틱/전자, 조용함/강렬함의 병치</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-purple-100">
                    <h3 className="font-semibold text-purple-700 mb-2">🎭 개념적 특징</h3>
                    <ul className="text-xs text-purple-600 space-y-1">
                      <li>• <strong>컨셉트 앨범:</strong> 통일된 주제와 서사 구조</li>
                      <li>• <strong>철학적 가사:</strong> 진지하고 지적인 내용</li>
                      <li>• <strong>시각적 예술:</strong> 앨범 커버와 무대 연출의 중요성</li>
                      <li>• <strong>예술적 야심:</strong> 단순한 오락을 넘어선 예술 추구</li>
                      <li>• <strong>반문화적 메시지:</strong> 기존 사회에 대한 비판과 대안 제시</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-blue-700 mt-6 italic font-medium">
                  &quot;음악은 더욱 음악같아지고, 음악의 한 부분을 분류하는 것은 더욱 더 어려워지고 있다.&quot; 
                  - Frank Zappa의 이 말은 프로그레시브 락이 추구했던 음악적 통합의 이상을 잘 보여준다.
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
              href="/misc/chapters/ch5" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
              ← Chapter 5
          </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            Chapter 6 / 8
          </div>
          
          <Link 
            href="/misc/chapters/ch7" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Chapter 7 →
          </Link>
        </div>
      </div>
    </div>
  )
}