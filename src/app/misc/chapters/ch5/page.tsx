import Link from 'next/link';

export default function Chapter5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-2">
            Chapter 5. 네 개의 다른 프로그레시브 락 작품들
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            (Four Different Progressive Rock Pieces)
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Copyright Warning */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex items-center mb-2">
            <span className="text-red-600 font-bold text-lg">⚠️ WARNING!</span>
          </div>
          <p className="text-red-700 text-sm italic">
            This page is a strict COPYRIGHT VIOLATION, constructed for PURE PRIVATE PURPOSE. 
            Please DON'T reproduce or distribute the contents of this page.
          </p>
        </div>

        {/* Translator Info */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-8">
          <p className="text-blue-700 font-semibold mb-2">
            🔴 translated by <a href="http://cclab.kaist.ac.kr/~swkim" className="text-blue-600 underline">Kim Seong Woo</a>, libero
            (<a href="mailto:swkim@gaia.kaist.ac.kr" className="text-blue-600 underline">swkim@gaia.kaist.ac.kr</a>)
          </p>
          <div className="text-sm text-blue-800 mt-4 p-3 bg-blue-100 rounded">
            <p className="mb-2">
              지난달에 약속한 대로 에드워드 마칸 교수가 쓴 "Rocking the Classics"의 제 5장에 해당하는 부분을 올립니다. 
              실제 번역과정보다 수정하는 데 훨씬 더 많은 어려움을 겪을 정도로, 수많은 음악용어와 전문적인 지식을 요구하더군요.
            </p>
            <p className="text-xs text-blue-600">
              - libero - Seong-Woo Kim
            </p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-[#0000AA]">📖 목차 (Table of Contents)</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm">
            <li>
              <a href="#tarkus" className="text-blue-700 hover:underline font-medium">
                Emerson, Lake and Palmer: Tarkus (1971)
              </a>
              <div className="text-xs text-gray-600 ml-6 mt-1">다악장 조곡의 대표작 분석</div>
            </li>
            <li>
              <a href="#close-to-the-edge" className="text-blue-700 hover:underline font-medium">
                Yes: Close to the Edge (1972)
              </a>
              <div className="text-xs text-gray-600 ml-6 mt-1">소나타 형식에 근접한 정연한 구조</div>
            </li>
            <li>
              <a href="#firth-of-fifth" className="text-blue-700 hover:underline font-medium">
                Genesis: "Firth of Fifth" (1973)
              </a>
              <div className="text-xs text-gray-600 ml-6 mt-1">단악장 형식의 기악곡 분석</div>
            </li>
            <li>
              <a href="#wish-you-were-here" className="text-blue-700 hover:underline font-medium">
                Pink Floyd: Wish You Were Here (1975)
              </a>
              <div className="text-xs text-gray-600 ml-6 mt-1">컨셉트 앨범의 완성형</div>
            </li>
          </ol>
        </div>

        {/* Introduction */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#0000AA]">서론</h2>
          
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              지난 세 단원들에서, 필자는 프로그레시브 락의 음향(sonic), 시각(visual), 그리고 말(語句, verbal)의 요소들을 
              나누었는데 가능한 한 정확하게 각각의 일반적인 경향들을 정의하기 위한 것이었다. 물론, 그런 구분은 인위적이다; 
              서론에서 서술한 바와 같이, 동시대의 대중 음악 스타일들은 이들 요소들을 한데 묶어서 생각할 때만 완전히 이해될 수 있다.
            </p>

            <p>
              그러므로, 이 장에서 필자는 프로그레시브 락 시대의 네 개의 특별한 대표적인 작품들: ELP의 Tarkus (1971), 
              Yes의 Close to the Edge (1972), Genesis의 "Firth of Fifth" (1973), 그리고 Pink Floyd의 "Wish You Were Here" (1975) 을 
              고려함으로써 말, 시각, 그리고 음악을 한데 합치는 데 전력을 쏟을 것이다.
            </p>

            <p>
              이 작품들을 선정함에 있어서, 필자는 몇가지 목적을 염두에 두려고 하였다. 첫째, 프로그레시브 락에서 중요했던 
              다양한 구조적인 접근방식들을 다루려고 시도하였다. Tarkus는 프로그레시브 락에서 반복해서 나타났던 비교적 느슨한 
              다악장 조곡의 형태를 예시한다; 반면, Close to the Edge는 고전적인 전통의 가장 유서 깊은 형식인 소나타 형식에의 
              일시적인 유사점 이상으로 닮은 정연한 짜임새의 다악장 조곡이다.
            </p>

            <p>
              "Firth of Fifth"는 단악장 구분된 형식으로 주어지고, 기악적인 서주(prelude), 간주(interlude), 그리고 
              후주(postlude)가 있는 노래이다. "Wish You Were Here"는 앨범 전체에 걸친 컨셉트 앨범의 접근방식을 예시한다.
            </p>
          </div>
        </div>

        {/* Tarkus Analysis */}
        <div id="tarkus" className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎹 Emerson, Lake and Palmer: Tarkus (1971)</h2>
          
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              논의될 작품들 중 가장 먼저인 것은 Emerson, Lake and Palmer의 1971년에 녹음되고 발매된 Tarkus이다. 
              Tarkus LP의 둘째 면은 몇몇 상대적으로 짧은 노래들로 채워져 있다; 대조적으로, Tarkus는 첫째 면의 전체를 차지하고, 
              그것은 프로그레시브 락의 가장 이른 그리고 가장 영향력 있는 다악장 조곡들 중의 하나이다.
            </p>

            <p>
              그 곡은 또한 프로그레시브 락의 가장 급진적인 것 중의 하나였고, 그 밴드 내부에서 많은 혼란을 야기시켰다. 
              1970년과 71년에 Emerson은 Bartok과 Alberto Ginastera (특히 후자의 피아노 협주곡 1번)의 음악에 심취하고 있었고 
              Tarkus를 "내가 전에 정말로 결코 하지 않았던 어떤 것: 타악적인 키보드 사운드들, 강력한 리듬들, 무조성(atonality)을 
              개발하는 것"에 관한 한 토론회로 보았다.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 italic">
                "저는 피아노에 앉아서 Tarkus의 서두를 썼고, 그것을 다른 친구들에게 전해줬을 때, Greg는 '나는 그런 종류의 음악을 
                연주할 수 없어요. 그것이 당신이 연주하기를 원하는 것이라면, 당신은 같이 연주할 다른 이를 찾아야만 한다고 
                생각합니다.'라고 말했습니다."
              </p>
              <p className="text-xs text-blue-600 mt-2">- Keith Emerson</p>
            </div>

            <p>
              결국 밴드의 매니저들 중 하나가 새로운 작품을 하도록 Lake를 확신시켰고, Emerson이 언급하는 것처럼, 
              "Greg는 점차 그 작업으로 돌아서게 되었고, 그는 그 자신의 트랙, 'Battlefield'를 추가했습니다."
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">구조적 분석</h3>
            
            <p>
              스튜디오 연주에서 21분 바로 못 미쳐 기록되는 Tarkus는, 많은 관점에서, 전형적인 프로그레시브 락 다악장 조곡이다. 
              일곱의 개별 "악장들"은 이음매가 없이 멈추지 않고 하나에서 다음으로 이동한다; 가장 긴 악장은 5분 바로 아래이고, 
              가장 짧은 것은 1분 바로 위이다.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">악장 구성:</h4>
              <ul className="text-xs space-y-1">
                <li>• 1, 3, 5, 7 악장: 기악곡</li>
                <li>• 2, 4, 6 악장: 노래</li>
                <li>• 짝수 "노래" 악장들이 가장 길고, 1, 7 악장도 상당한 길이</li>
                <li>• 세 개의 준 독립적인 노래들 + 두 개의 짧은 기악 간주 + 긴 기악 후주</li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">개념적 해석</h3>
            
            <p>
              Tarkus의 개념(concept)은 커버 아트, 가사, 그리고 음악의 결합을 통하여 전달된다; 개별 악장들의 제목들은 
              그 작품의 개념을 밝히는 데 또한 중요하다. 커버 아트의 상징적 의미와 가사의 이미지 둘 다 하나의 "읽기(reading, 또는 해석)" 
              이상으로 열려 있다; 이들 요소들이 음악과 결합되어 생각될 때, 여전히 더욱 가능한 의미들이 나타나고, 
              그 결과로 Tarkus의 어떤 독단적 해석을 사실상 주장할 수 없다.
            </p>

            <h4 className="font-semibold mt-4 mb-2">William Neal의 커버 아트 분석:</h4>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">1. Eruption</h5>
                <p className="text-xs text-red-700">화산 옆의 알에서 출현하는 Tarkus, 용암 분출</p>
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">2. Stones of Years</h5>
                <p className="text-xs text-orange-700">사이버네틱 생물이 Tarkus의 포탑에 의해 파괴됨</p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">3. Iconoclast</h5>
                <p className="text-xs text-yellow-700">사이버네틱 익룡/전투기 기형체의 출현과 파괴</p>
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">4. Mass</h5>
                <p className="text-xs text-green-700">도마뱀/메뚜기/유도미사일 혼합체가 Tarkus에 맞서다 파괴</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">5. Manticore</h5>
                <p className="text-xs text-blue-700">사람 머리, 사자 몸, 전갈 꼬리의 신화적 야수 - 첫 유기체 적</p>
              </div>
              
              <div className="bg-purple-50 p-3 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2">6. Battlefield</h5>
                <p className="text-xs text-purple-700">Manticore가 Tarkus의 눈을 찔러 후퇴시킴</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2">7. Aquatarkus</h5>
                <p className="text-xs text-gray-700">장송행진곡 → Eruption 재현으로 부활 암시</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">상징적 의미</h3>
            
            <p>
              분명히, Neal의 싸이키델릭 앨범 아트에 묘사된 다양한 야수들은 상징들이다; 가사와 개별 악장들의 제목들은 
              그 상징들이 적어도 객관적으로 확실한 정도로 "읽혀질" 수 있도록 하는 매체가 된다.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">"Stones of Years" 가사 분석:</h4>
              <p className="text-sm text-amber-700 mb-2">
                Greg Lake는 일단의 죽어가는 문화 전통들을 불러내는 이미지를 그린다. 
                "과다성장된, 결코 알지 못했던" 때, "당신을 그렇게나 분별없게 만든" 나날들을 이야기한다.
              </p>
              <blockquote className="text-xs italic text-amber-600 border-l-2 border-amber-400 pl-3">
                "How can you know where you've been?<br/>
                In time<br/>
                You'll see the sign<br/>
                And realize your sin."
              </blockquote>
              <p className="text-xs text-amber-600 mt-2">
                → <strong>Tarkus는 문화적인 전통을 말소했다.</strong>
              </p>
            </div>

            <p>
              누군가가 이런 식으로 가사, 악장 제목들, 그리고 커버 아트를 서로 연관시키기를 계속한다면, 
              Tarkus가 사회의 다른 닻들(moorings) 대부분을 또한 말소했다는 것이 분명하게 된다:
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>"Iconoclast"</strong> (인습 타파주의자): 개성과 독립적 사고를 위한 재능을 파괴</li>
              <li><strong>"Mass"</strong> (로만 카톨릭 제식): 종교조차도 Tarkus의 폭력으로 살아남을 수 없음</li>
              <li><strong>"Manticore"</strong>: 유기체적 본성으로 Tarkus에 맞설 수 있는 첫 번째 존재</li>
            </ul>
          </div>
        </div>

        {/* Yes - Close to the Edge Analysis */}
        <div id="close-to-the-edge" className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎸 Yes: Close to the Edge (1972)</h2>
          
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Jon Anderson과 Steve Howe는 Close to the Edge를 위한 말과 음악 모두에서 협력했으므로, 여기서 말과 음악 사이의 조화는 
              ELP의 Tarkus에서보다 어떤 의미에서는 더욱 친밀하다. 반면에, 음악의 조직은 말들이 제거될지라도 지나치게 손해받지 않을 것이다: 
              어떤 기준에 의하면, Close to the Edge는 프로그레시브 락의 구조적인 경이 중의 하나이다.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-semibold mb-2">소나타 형식과의 관계</p>
              <p className="text-sm text-blue-700">
                이 작품에 대해 가장 빈번히 이야기되었던 것 중의 하나는 그것이 가장 유서 깊은 클래식 형식, 소나타 형식을 예시한다는 것이다. 
                Close to the Edge를 다악장 조곡과 단악장 소나타 형식의 융합으로 보는 것이 가능하다.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">소나타 형식 구조 분석</h3>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">클래식 소나타 형식의 구성:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-blue-700 mb-1">제시부 (Exposition)</h5>
                  <ul className="space-y-1">
                    <li>• 도입 테마</li>
                    <li>• 경과부 (transition)</li>
                    <li>• 대비하는 두번째 테마</li>
                    <li>• 으뜸조 → 관계조로 이동</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-green-700 mb-1">전개부 (Development)</h5>
                  <ul className="space-y-1">
                    <li>• 주요 테마들의 변화</li>
                    <li>• 조성적 불안정성</li>
                    <li>• 끊임없는 조바꿈</li>
                    <li>• 모방과 변형</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-purple-700 mb-1">재현부 (Recapitulation)</h5>
                  <ul className="space-y-1">
                    <li>• 제시부의 재현</li>
                    <li>• 모든 테마가 으뜸조에서</li>
                    <li>• 종지 (coda) 포함 가능</li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mt-4 mb-2">Close to the Edge의 4악장 구성:</h4>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">도입부 (약 3분)</h5>
                <div className="text-xs text-red-700 space-y-1">
                  <p><strong>첫 번째 부분:</strong> "새 지저귐", "흐르는 냇물" 등 자연의 소리 → 에덴적 이상</p>
                  <p><strong>두 번째 부분:</strong> 빠르고 밀도있는 선적 대위법 → 혼란과 다툼</p>
                  <p><strong>조성:</strong> D 단조로 통일</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">1악장 "The Solid Time of Change" (제시부)</h5>
                <div className="text-xs text-orange-700 space-y-1">
                  <p>• 기악 리토르넬로로 시작</p>
                  <p>• 첫째 소절군 (A 도리안) - 낭송적, 주술적</p>
                  <p>• "close to the edge" 후렴구</p>
                  <p>• 둘째 소절군 (C 장조) - 서정적, 넓은 선율 범위</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">2악장 "Total Mass Retain" (제시부 반복)</h5>
                <div className="text-xs text-yellow-700 space-y-1">
                  <p>• 1악장 음악의 새로운 가사 반복</p>
                  <p>• Squire의 기괴한 베이스 패턴 (2.5마디)</p>
                  <p>• 후렴구의 압축된 변주</p>
                  <p>• A 도리안 → D 장조로 조바꿈</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">3악장 "I Get Up, I Get Down" (전개부)</h5>
                <div className="text-xs text-green-700 space-y-1">
                  <p>• "여성적" 부분 - 느린 템포, 관조적</p>
                  <p>• Wakeman의 키보드 중심</p>
                  <p>• E 장조, 조성적 이동 없음</p>
                  <p>• 파이프 오르간/무그 카덴짜로 클라이막스</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">4악장 "The Seasons of Man" (재현부)</h5>
                <div className="text-xs text-blue-700 space-y-1">
                  <p>• 기악 리토르넬로 재현 (F# 장조)</p>
                  <p>• 1악장 음악 재현 (A 도리안 → F 장조)</p>
                  <p>• 후렴구는 악장 끝에서만 확장 형태로</p>
                  <p>• 멜로트론의 유일한 정형화된 사용</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">조성적 혁신과 상징성</h3>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">진보적 조성 (Progressive Tonality)</h4>
              <p className="text-sm text-amber-700 mb-2">
                Close to the Edge는 다른 조들로 시작하고 끝나는 "진보적 조성"의 예이다. 
                이는 영적 여행과 의식의 더 높은 수준 도달을 상징한다.
              </p>
              <div className="text-xs text-amber-600 space-y-1">
                <p><strong>D 단조 (도입부)</strong> → 혼돈과 어둠</p>
                <p><strong>A 도리안 (주요 악장들)</strong> → 여행의 과정</p>
                <p><strong>F 장조 (결론부)</strong> → 빛과 깨달음</p>
                <p className="font-semibold">상징적 의미: 어둠에서 빛으로의 이동 (단조 → 평행 장조)</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">ELP Tarkus와의 비교</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">🎹 ELP - Tarkus</h4>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• <strong>화성:</strong> 더욱 "진보된" - 복조성, 4성 화성</li>
                  <li>• <strong>편성:</strong> 3인조, 키보드 중심</li>
                  <li>• <strong>기교:</strong> 긴 솔로들, 반복적 오스티나토</li>
                  <li>• <strong>구조:</strong> 느슨한 다악장 조곡</li>
                  <li>• <strong>드럼:</strong> 높은 믹스, 선율적 사용</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🎸 Yes - Close to the Edge</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• <strong>화성:</strong> "풍부한" 화음들 (증6, 감7화음)</li>
                  <li>• <strong>편성:</strong> 4인조, 3성부 보컬 하모니</li>
                  <li>• <strong>기교:</strong> 주제적 앙상블, 절제된 솔로</li>
                  <li>• <strong>구조:</strong> 소나타 형식과 융합된 조곡</li>
                  <li>• <strong>음색:</strong> 더 변화된 팔레트, 멜로트론 활용</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-4">
              <h4 className="font-semibold text-green-800 mb-2">Bill Bruford의 평가</h4>
              <p className="text-sm text-green-700 italic">
                "Close to the Edge는 그 밴드의 스타일의 결정화를 반영했고, 잇따르는 발매들은 자기 인용과 자기 모방의 과정을 
                아마도 시작할 것이다."
              </p>
              <p className="text-xs text-green-600 mt-2">
                → 많은 비평가들과 팬들이 이 앨범을 Yes의 음악적 진화의 정점으로 본다.
              </p>
            </div>
          </div>
        </div>

        {/* Genesis - Firth of Fifth Analysis */}
        <div id="firth-of-fifth" className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎭 Genesis: "Firth of Fifth" (1973)</h2>
          
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              "Firth of Fifth"는 1973년의 Selling England by the Pound LP에 나타난다. 그것은 많은 그 밴드의 초기 팬들이 
              "고전적인" Genesis 화신이라고 느끼는 라인업에 의한 세번째 앨범을 나타낸다: Peter Gabriel (lead vocals, woodwinds), 
              Tony Banks (keyboards, backing vocals), Steve Hackett (guitars), Michael Rutherford (bass guitar, backing acoustic guitar), 
              그리고 Phil Collins (drums, backing vocals).
            </p>

            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-semibold mb-2">작품의 의의</p>
              <p className="text-sm text-green-700">
                "Firth of Fifth"는, 필자의 의견으로는, Genesis가 보존한 가장 훌륭한 9분 30초의 음악인데: 그것은 사실상 
                Gabriel 시기의 모든 주요한 점을 예시한다, 구성의 관점에서 극히 잘 합친 것이고, 아마도 가사를 예외로 하더라도 
                모든 영역에서 그 밴드의 가장 훌륭한 산물 중의 하나를 나타낸다.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">Gabriel 시기 Genesis의 3가지 핵심 요소</h3>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">1. 화성적 특징</h4>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• <strong>"기능적" 화성:</strong> 화음들 사이의 관계로 조성 확립</li>
                  <li>• <strong>피봇 화음:</strong> 상상력있는 조바꿈 기법</li>
                  <li>• <strong>감7화음:</strong> 조바꿈 피봇으로 빈번히 사용</li>
                  <li>• <strong>선법 화성법:</strong> 조성 이동의 상대적 불안정성 활용</li>
                  <li>• <strong>예시:</strong> Eb장조 → G장조 (bVI-bVII-I 진행)</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">2. 비대칭적 박자</h4>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• <strong>독주 피아노 서곡:</strong> 극도로 복잡한 박자 변화</li>
                  <li>• <strong>박자 패턴:</strong> 6/8, 7/8, 5/8, 4/8, 4/4, 3/8, 2/4</li>
                  <li>• <strong>절제된 사용:</strong> 대비 부분들은 보통 박자</li>
                  <li>• <strong>조바꿈과 연동:</strong> 각 조바꿈마다 새로운 박자</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">3. 청명함 (Clarity)</h4>
                <ul className="text-xs text-amber-700 space-y-1">
                  <li>• <strong>"깨끗한" 사운드:</strong> 왜곡 없는 음색 선호</li>
                  <li>• <strong>"트인" 텍스처:</strong> 밀도보다 공간감 중시</li>
                  <li>• <strong>절제된 기교:</strong> 독주보다 앙상블 인터플레이</li>
                  <li>• <strong>편곡의 단련:</strong> 악기별 명확한 역할 분담</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">💡 "ELP가 프로그레시브 락 운동의 초낭만주의자들이라면, Genesis는 그 운동의 모짜르트들이었다."</h4>
              <p className="text-xs text-gray-600">
                Tony Banks의 작업에서 18세기 키보드 스타일의 요소들을 찾을 수 있으며, 이는 다른 프로그레시브 락 키보디스트들에게서는 
                찾지 못하는 특징이다.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">구조 분석: 아치 형식 (A B C A C B A)</h3>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-4">
              <h4 className="font-semibold text-indigo-800 mb-2">소나타 형식적 접근</h4>
              <p className="text-sm text-indigo-700">
                분투, 급변, 그리고 획득의 극적인 이상들이 그 작품에서 아주 중심적이어서 소나타 형식의 맥락에서 평가되는 것이 의미있다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">A - 기악 서곡 (제시부)</h5>
                <div className="text-xs text-red-700 space-y-1">
                  <p><strong>Tony Banks 독주 피아노</strong></p>
                  <p>• <strong>18세기 기법:</strong> Fortspinnung (선율 전개 기법)</p>
                  <p>• <strong>바로크 토카타 모델:</strong> 팡파레 테마 + 아르페지오</p>
                  <p>• <strong>조성 여행:</strong> Bb장조 → Eb장조 → F#장조 → Bb장조</p>
                  <p>• <strong>박자 패턴:</strong> 각 조바꿈마다 새로운 박자</p>
                </div>
              </div>
              
              <div className="bg-orange-50 p-3 rounded border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">B - 고유의 "노래" (제시부)</h5>
                <div className="text-xs text-orange-700 space-y-1">
                  <p><strong>B장조, 느린 템포</strong></p>
                  <p>• <strong>구성:</strong> 두 소절 + 긴 경과구 + 소절 반복</p>
                  <p>• <strong>소절부:</strong> 해몬드, 기타, 베이스, "호전적" 드럼</p>
                  <p>• <strong>경과구:</strong> 멜로트론, 어쿠스틱 기타, "유령같은" 전기기타</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">C - 새로운 테마 (전개부)</h5>
                <div className="text-xs text-yellow-700 space-y-1">
                  <p><strong>Gabriel의 플륫 테마 (E조)</strong></p>
                  <p>• <strong>특징:</strong> 느리고 사색적인 곡조</p>
                  <p>• <strong>조성:</strong> 에올리안과 전음계적 단조 요소</p>
                  <p>• <strong>발전:</strong> Banks 피아노가 이어받아 변환 테마로 전개</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">클라이막스 - 전체 밴드 재편</h5>
                <div className="text-xs text-green-700 space-y-1">
                  <p>• <strong>ARP Pro-Soloist:</strong> 트럼펫 같은 신서사이저 배치</p>
                  <p>• <strong>Phil Collins 드럼:</strong> ELP식 키보드-드럼 인터플레이</p>
                  <p>• <strong>Steve Hackett 기타:</strong> 표현적인 내림7화음 동기</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">가사와 상징성</h3>
            
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-800 mb-2">물의 이미지와 자연 신비주의</h4>
              <div className="text-sm text-teal-700 space-y-2">
                <p>
                  <strong>"Firth of Fifth"</strong>는 Edinburgh 근처 Scotland 동부 해안의 만인 "Firth of Forth"에서 따온 제목이다. 
                  Yes의 "Roundabout"처럼 풍경화와 자연적 신비주의의 특질을 보인다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-white p-3 rounded border border-teal-100">
                    <h5 className="font-semibold text-teal-700 mb-1">Neptune의 영역 (자연의 아름다움)</h5>
                    <ul className="text-xs text-teal-600 space-y-1">
                      <li>• 나무들, 하늘, 백합들</li>
                      <li>• 폭포들, 내해들</li>
                      <li>• "기쁨에 찬 응시"</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded border border-teal-100">
                    <h5 className="font-semibold text-teal-700 mb-1">인간 거주지 (죽음과 무관심)</h5>
                    <ul className="text-xs text-teal-600 space-y-1">
                      <li>• "암 종양들"로 묘사</li>
                      <li>• 일상 존재의 낭하</li>
                      <li>• 양처럼 우리에 갇힌 사람들</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-xs text-teal-600 mt-3 italic">
                  "강은 바다로 용해되고(영원성의 대표), '시간의 모래들'을 침식하는 능력을 가진다. 
                  더 높은 힘 --'양치기(shepherd)'-- 이 그들을 이끌 때까지 '그들의 우리 안에' 단순히 남아 있을 뿐이다."
                </p>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border border-rose-200 mt-4">
              <h4 className="font-semibold text-rose-800 mb-2">Close to the Edge와의 연관성</h4>
              <p className="text-sm text-rose-700">
                여기서 아마 적어도 Close to the Edge의 대단한 관심에 대한 희미한 암시가 있다: 
                우리의 일상의 경험의 경계 밖에 바로 놓여 있는 의식과 정신의 다른 영역들에 대한 것이다.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">작품의 한계와 강점</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <strong>가사의 한계:</strong> "Cinema Show"나 "The Fountain of Salmacis"와 달리, 
                  총체적인 이야기나 명확한 알레고리를 제공하지 않는다.
                </p>
                <p>
                  <strong>음악의 강점:</strong> 음악 그 자체가 가사의 이야기적 일관성에 대한 환상을 
                  적어도 부과할 수 있을 정도로 강하다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pink Floyd - Wish You Were Here Analysis */}
        <div id="wish-you-were-here" className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🌈 Pink Floyd: Wish You Were Here (1975)</h2>
          
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Wish You Were Here는 컨셉트 앨범의 접근방식을 예시하는 작품으로, 앨범 전체에 걸친 연가곡(song-cycle) 방식의 
              다악장 조곡의 합성이다. 이 앨범은 Pink Floyd의 발전과 프로그레시브 락의 진보 모두에서 한 분수령을 표시했다.
            </p>

            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h3 className="text-pink-800 font-semibold mb-2">Syd Barrett에 대한 헌정</h3>
              <p className="text-sm text-pink-700">
                이 앨범은 Pink Floyd의 창립 멤버이자 초기 창작의 핵심이었던 Syd Barrett의 정신적 붕괴와 밴드 탈퇴에 대한 
                명상이다. Barrett의 광기로의 탈퇴는 "어제의 성공의 그림자를 입고, 강철 미풍에서 항해하는" 상황으로 묘사된다.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">앨범 구조: 9개 파트의 대칭적 배치</h3>
            
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-4">
              <h4 className="font-semibold text-indigo-800 mb-2">전체 구조</h4>
              <p className="text-sm text-indigo-700">
                "Shine On You Crazy Diamond"가 앨범의 시작(파트 1-5)과 끝(파트 6-9)을 장식하며, 
                중간에 "Welcome to the Machine", "Have a Cigar", "Wish You Were Here"가 배치된 대칭 구조이다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">🎵 "Shine On You Crazy Diamond" (파트 1-5)</h4>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• <strong>파트 1-4:</strong> 기악적 서주, 점진적 클라이막스 구축</li>
                  <li>• <strong>파트 5:</strong> 고유의 "노래" 등장, G단조</li>
                  <li>• <strong>특징:</strong> 신서사이저 중심, 느린 템포</li>
                  <li>• <strong>조성:</strong> G단조 → Bb장조로의 상승</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">🤖 "Welcome to the Machine"</h4>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>• <strong>주제:</strong> 레코딩 산업과 매스 미디어 비판</li>
                  <li>• <strong>화성:</strong> E단조 으뜸화음 ↔ C장7화음의 가차없는 교체</li>
                  <li>• <strong>사운드:</strong> 기계적 심장박동, VCS3 박동기</li>
                  <li>• <strong>대조:</strong> 전자음 vs 어쿠스틱 기타의 취약성</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">🚬 "Have a Cigar"</h4>
                <ul className="text-xs text-orange-700 space-y-1">
                  <li>• <strong>스타일:</strong> R&B 업템포, "Money"와 유사한 역할</li>
                  <li>• <strong>가사:</strong> 음악 산업 탐욕에 대한 냉소적 경구</li>
                  <li>• <strong>박자:</strong> 5-4-2-3 마디의 복잡한 후렴구</li>
                  <li>• <strong>명대사:</strong> "Oh by the way, which one's Pink?"</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">🎸 "Wish You Were Here" (타이틀 곡)</h4>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• <strong>조성:</strong> 앨범에서 유일한 장조 곡 (G장조)</li>
                  <li>• <strong>스타일:</strong> 어쿠스틱, 서정적, 컨츄리-웨스턴 느낌</li>
                  <li>• <strong>기능:</strong> "Have a Cigar"의 여성적 돋보임</li>
                  <li>• <strong>효과:</strong> 라디오 → 어쿠스틱 기타 전환</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">🎵 "Shine On You Crazy Diamond" (파트 6-9)</h4>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <h5 className="font-semibold text-gray-700 mb-1">파트 6-7: 클라이막스와 재현</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 화이트 노이즈 "폭풍"에서 등장</li>
                    <li>• 3/4 → 2/4 박자 이동으로 급박감 증대</li>
                    <li>• Gilmour의 "면도날같은" 왜곡 기타</li>
                    <li>• 고유 노래의 새로운 가사 재현</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded border border-gray-200">
                  <h5 className="font-semibold text-gray-700 mb-1">파트 8-9: 내적 공간과 애도</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• 재즈락 퓨전/미니멀리스트 체계</li>
                    <li>• "스페이스 락" 음색들</li>
                    <li>• 유아론(solipsism)으로의 종결</li>
                    <li>• 애도의 기운을 가진 최종 해설</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">음악적 혁신과 스튜디오 기법</h3>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">"스튜디오의 기술자들(virtuosos)"</h4>
              <div className="text-sm text-blue-700 space-y-2">
                <p>
                  Pink Floyd는 스튜디오 마술의 대가로서 명성을 얻었다. "Welcome to the Machine"에서 보여준 
                  사운드 콜라주 기법은 당시로서는 혁신적이었다.
                </p>
                
                <div className="bg-white p-3 rounded border border-blue-100 mt-3">
                  <h5 className="font-semibold text-blue-700 mb-1">David Gilmour의 증언:</h5>
                  <blockquote className="text-xs italic text-blue-600 border-l-2 border-blue-300 pl-3">
                    "그것은 VCS3에서 만들어진 기본적인 박동기로부터, 각각의 '붐(boom)'이 고동을 주기 위한 에코 반복을 
                    뒤따르게 하기 위하여 사용된 하나의 반복 에코와 함께 모두 세워졌던 정말 스튜디오 생산품인 것입니다. 
                    정말로 그것은 그 스스로의 목적--사운드를 이용한 꼴라지의 한 형태--을 위해서 우리가 테입을 사용하고 
                    있는 그저 한 스튜디오 제안입니다."
                  </blockquote>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">화성적 특징과 17세기 영국 교회음악의 영향</h3>
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">Henry Purcell, John Blow의 영향</h4>
              <div className="text-sm text-amber-700 space-y-2">
                <p>
                  Pink Floyd의 "고전" 시기(1971-1975) 화성은 17세기 후반 영국 교회음악을 연상시킨다:
                </p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>아다지오 템포들:</strong> 보통 시간의 느린 진행</li>
                  <li>• <strong>풍부한 해몬드 오르간 배경음들</strong></li>
                  <li>• <strong>요청-응답 구조:</strong> 보컬 독주자와 밴드 "합창"</li>
                  <li>• <strong>"정서적" 화성들:</strong> 증3화음, 장7도를 가진 단3화음</li>
                </ul>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#0000AA]">개념적 의미와 사회 비판</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-rose-50 p-4 rounded border border-rose-200">
                <h4 className="font-semibold text-rose-800 mb-2">매스 미디어와 음악 산업 비판</h4>
                <div className="text-sm text-rose-700 space-y-2">
                  <p>
                    "Welcome to the Machine"과 "Have a Cigar"는 1970년대 중반 락 음악 산업의 
                    상업화와 조작에 대한 신랄한 비판을 담고 있다.
                  </p>
                  <blockquote className="text-xs italic border-l-2 border-rose-400 pl-3">
                    "What did you dream? It's alright we told you what to dream."
                  </blockquote>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-2">소외와 정신적 고립</h4>
                <div className="text-sm text-teal-700 space-y-2">
                  <p>
                    Syd Barrett의 광기는 개인적 비극을 넘어 현대 사회의 소외시키는 힘들에 대한 
                    상징으로 제시된다.
                  </p>
                  <p className="text-xs italic">
                    "심지어 인간 사회화는 진정한 인간 접촉을 보장하지 않는다" - Roger Waters
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-violet-50 p-4 rounded-lg border border-violet-200 mt-4">
              <h4 className="font-semibold text-violet-800 mb-2">프로그레시브 락의 분수령</h4>
              <div className="text-sm text-violet-700 space-y-2">
                <p>
                  Wish You Were Here는 여전히 어떤 "trippy" 혹은 초현실의 기미들이 있었지만, 
                  Tarkus, Close to the Edge, "Firth of Fifth"를 표시했던 전체 밀폐된 방식은 뚜렷하게 기울어 약하였다.
                </p>
                <p className="text-xs">
                  음악이 일단의 식자(識者, illuminati)들이 찾을 수 있는 숨겨진 의미의 층들을 담고 있어야만 한다는 
                  싸이키델릭 시기의 확신이 사라지고, 더욱 직접적이고 감정적인 소통을 추구하게 되었다.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">음악사적 의의</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <strong>컨셉트 앨범의 완성:</strong> 전체 앨범이 하나의 통일된 서사와 음악적 구조를 가진 작품
                </p>
                <p>
                  <strong>스튜디오 기법의 혁신:</strong> 사운드 콜라주와 전자음향 기법의 예술적 활용
                </p>
                <p>
                  <strong>사회 비판의 직접성:</strong> 은유적 상징에서 직접적 메시지로의 전환점
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 5 Conclusion */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-[#0000AA]">Chapter 5 결론</h3>
          
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            <p className="font-medium text-purple-800">
              네 개의 서로 다른 프로그레시브 락 작품들은 각각 독특한 접근 방식을 보여준다:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded border border-purple-100">
                <h4 className="font-semibold text-red-700 mb-2">🎹 ELP - Tarkus (1971)</h4>
                <p className="text-xs text-red-600">
                  비교적 느슨한 다악장 조곡의 형태. 전체주의와 기술에 대한 상징적 비판. 
                  Keith Emerson의 급진적 무조성 실험.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-purple-100">
                <h4 className="font-semibold text-blue-700 mb-2">🎸 Yes - Close to the Edge (1972)</h4>
                <p className="text-xs text-blue-600">
                  소나타 형식에 근접한 정연한 짜임새. 진보적 조성을 통한 영적 여행의 상징. 
                  프로그레시브 락의 구조적 경이.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-purple-100">
                <h4 className="font-semibold text-green-700 mb-2">🎭 Genesis - Firth of Fifth (1973)</h4>
                <p className="text-xs text-green-600">
                  단악장 아치 형식의 완성. 18세기 바로크 기법의 현대적 적용. 
                  "프로그레시브 락의 모짜르트들"의 청명함.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border border-purple-100">
                <h4 className="font-semibold text-pink-700 mb-2">🌈 Pink Floyd - Wish You Were Here (1975)</h4>
                <p className="text-xs text-pink-600">
                  컨셉트 앨범의 연가곡 방식. 스튜디오 기법의 혁신적 활용. 
                  프로그레시브 락 시대의 종료를 알리는 분수령.
                </p>
              </div>
            </div>
            
            <p className="text-sm text-purple-700 mt-4 italic">
              이들 작품은 모두 "목표 지향적인 화성의 지속적인 회피와 목표 지향적인 형식의 지속적인 포섭 사이의 긴장감"을 
              드러내며, 히피들의 중류층 사회 관습을 뛰어넘으려는 고군분투를 음악적으로 축약한다.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link 
            href="/misc/chapters" 
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            ← 목록으로
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/misc/chapters/ch2" 
              className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              ← Chapter 2
            </Link>
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-md font-semibold">
              Chapter 5
            </span>
            <Link 
              href="/misc/chapters/ch6" 
              className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Chapter 6 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
