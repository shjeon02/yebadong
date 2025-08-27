import Link from 'next/link'

export default function Chapter8Page() {
  return (
    <div className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0000AA] mb-4">
            8. 프로그레시브 락의 비평적 수용 (The Critical Reception of Progressive Rock)
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

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8">
          <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
            
            {/* Opening Quote */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <blockquote className="text-purple-800 italic">
                &quot;프로그레시브 락은 록 음악사에서 가장 논란이 많았던 장르 중 하나이다. 
                찬사와 혹독한 비판을 동시에 받으며, 음악 비평계를 양분시켰다.&quot;
              </blockquote>
            </div>

            <p>
              프로그레시브 락에 대한 비평적 수용은 그 장르의 복잡성만큼이나 다면적이었다. 
              1970년대 초반의 열광적 지지에서 1970년대 후반의 격렬한 거부까지, 
              프로그레시브 락은 음악 비평사에서 독특한 궤적을 그렸다.
            </p>

            {/* Early Critical Reception */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">📰 초기 비평적 수용 (1969-1973)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  프로그레시브 락의 초기 수용은 대체로 긍정적이었다. 음악 저널리스트들은 
                  이 새로운 음악 형태를 록 음악의 성숙과 발전의 증거로 받아들였다.
                </p>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🎵 긍정적 평가 요소들</h3>
                  <div className="text-sm text-green-700 space-y-2">
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>음악적 정교함:</strong> 클래식 음악에 버금가는 복잡성과 구조</li>
                      <li>• <strong>기술적 숙련도:</strong> 뮤지션들의 뛰어난 연주 실력</li>
                      <li>• <strong>예술적 야심:</strong> 단순한 오락을 넘어선 진지한 예술 추구</li>
                      <li>• <strong>혁신성:</strong> 전통적인 록 형식의 확장과 실험</li>
                      <li>• <strong>지적 내용:</strong> 철학적, 문학적 가사와 컨셉트</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">📖 Melody Maker</h4>
                    <p className="text-sm text-blue-700">
                      영국의 주요 음악 잡지로서 프로그레시브 락을 적극 지지했다. 
                      특히 Yes, Genesis, King Crimson 등에 대한 상세한 리뷰와 인터뷰를 게재.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">📰 Rolling Stone</h4>
                    <p className="text-sm text-purple-700">
                      초기에는 프로그레시브 락에 대해 호의적이었으나, 
                      1970년대 중반부터 점차 비판적 입장으로 전환.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">🎼 NME (New Musical Express)</h4>
                    <p className="text-sm text-orange-700">
                      프로그레시브 락의 음악적 복잡성과 예술적 가치를 인정하며 
                      상당한 지면을 할애하여 다뤘다.
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded border border-teal-200">
                    <h4 className="font-semibold text-teal-800 mb-2">🎹 Keyboard Magazine</h4>
                    <p className="text-sm text-teal-700">
                      키보드 중심의 프로그레시브 록 밴드들(ELP, Yes 등)의 
                      기술적 혁신을 높이 평가했다.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">💬 초기 비평가들의 증언</h3>
                  <div className="space-y-3 text-sm text-yellow-700">
                    <blockquote className="border-l-4 border-yellow-400 pl-4 italic">
                      <strong>Chris Welch (Melody Maker):</strong> &quot;이들은 단순히 록 밴드가 아니다. 
                      그들은 음악의 경계를 허물고 새로운 예술 형태를 창조하고 있다.&quot;
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-yellow-400 pl-4 italic">
                      <strong>John Mendelsohn (Rolling Stone):</strong> &quot;King Crimson의 데뷔 앨범은 
                      록 음악이 도달할 수 있는 예술적 높이를 보여준다.&quot;
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Reception */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎓 학계의 반응</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  음악학계의 프로그레시브 락에 대한 반응은 초기에는 회의적이었으나, 
                  점차 진지한 연구 대상으로 인식되기 시작했다.
                </p>

                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3">📚 학술적 관심의 발전</h3>
                  <div className="text-sm text-indigo-700 space-y-2">
                    <p>
                      1970년대 후반부터 음악학자들이 프로그레시브 락을 연구하기 시작했다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>구조 분석:</strong> 소나타 형식, 론도 형식 등 클래식 형식의 적용</li>
                      <li>• <strong>화성 연구:</strong> 모달 하모니, 확장된 화성 진행</li>
                      <li>• <strong>리듬 분석:</strong> 복합 박자, 폴리리듬의 사용</li>
                      <li>• <strong>음색 연구:</strong> 신서사이저, 멜로트론 등 새로운 음향</li>
                      <li>• <strong>사회학적 접근:</strong> 반문화 운동과의 관계</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🏛️ 보수적 입장</h4>
                    <p className="text-sm text-gray-700">
                      전통적인 음악학자들은 프로그레시브 락을 &quot;진정한&quot; 클래식 음악의 
                      피상적 모방으로 비판했다. 형식은 빌렸지만 깊이가 부족하다고 주장.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">🔬 진보적 입장</h4>
                    <p className="text-sm text-green-700">
                      새로운 세대의 음악학자들은 프로그레시브 락을 독립적인 예술 형태로 
                      인정하고, 그 고유한 가치와 혁신성을 연구하기 시작했다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Punk Backlash */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">⚡ 펑크의 반발과 비판 (1976-1980)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  1976년 펑크 록의 등장은 프로그레시브 락에 대한 비평적 태도를 완전히 바꿔놓았다. 
                  펑크는 프로그레시브 락을 &quot;공룡&quot;으로 규정하며 격렬히 공격했다.
                </p>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">🔥 펑크의 비판 논리</h3>
                  <div className="text-sm text-red-700 space-y-2">
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>엘리트주의:</strong> 일반 대중과 괴리된 지적 허영</li>
                      <li>• <strong>과도한 복잡성:</strong> 음악의 본질적 에너지 상실</li>
                      <li>• <strong>상업적 타락:</strong> 거대한 무대와 화려한 쇼에 매몰</li>
                      <li>• <strong>진정성 부족:</strong> 인위적이고 계산된 음악</li>
                      <li>• <strong>계급적 성격:</strong> 중산층 지식인의 자기만족</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black text-white p-4 rounded-lg border mt-6">
                  <h3 className="text-lg font-semibold mb-3">🎸 펑크 뮤지션들의 발언</h3>
                  <div className="space-y-3 text-sm">
                    <blockquote className="border-l-4 border-white pl-4 italic">
                      <strong>Johnny Rotten (Sex Pistols):</strong> &quot;I hate Pink Floyd!&quot; 
                      - 프로그레시브 락에 대한 펑크의 적대감을 상징하는 발언
                    </blockquote>
                    
                    <blockquote className="border-l-4 border-white pl-4 italic">
                      <strong>Joe Strummer (The Clash):</strong> &quot;우리는 20분짜리 기타 솔로 따위는 필요 없다. 
                      3분이면 모든 것을 말할 수 있다.&quot;
                    </blockquote>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-6">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">📰 언론의 태도 변화</h3>
                  <div className="text-sm text-orange-700 space-y-2">
                    <p>
                      펑크의 등장과 함께 음악 언론도 프로그레시브 락에 대한 태도를 급격히 바꿨다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>NME:</strong> 펑크 지지로 전환, 프로그레시브 락을 &quot;공룡 음악&quot;으로 비판</li>
                      <li>• <strong>Sounds:</strong> 펑크와 뉴 웨이브에 집중, 프로그레시브 락 무시</li>
                      <li>• <strong>Rolling Stone:</strong> 미국에서도 프로그레시브 락을 &quot;과거의 유물&quot;로 취급</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Revival and Reassessment */}
            <div className="bg-white p-6 rounded-lg border border-gray-300 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🔄 재평가와 부활 (1980년대 이후)</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  1980년대부터 프로그레시브 락에 대한 재평가가 시작되었다. 
                  새로운 세대의 비평가들과 뮤지션들이 그 가치를 재발견하기 시작했다.
                </p>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">🎭 네오 프로그레시브의 등장</h3>
                  <div className="text-sm text-purple-700 space-y-2">
                    <p>
                      1980년대 초반 Marillion, IQ, Pendragon 등의 밴드들이 프로그레시브 락을 부활시켰다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>Marillion:</strong> Genesis 스타일의 극장적 프로그레시브 록</li>
                      <li>• <strong>IQ:</strong> 키보드 중심의 심포닉 프로그레시브</li>
                      <li>• <strong>Pendragon:</strong> 서정적이고 멜로딕한 접근</li>
                      <li>• <strong>Twelfth Night:</strong> 영국 전통의 프로그레시브 계승</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">📚 학술적 재평가</h3>
                  <div className="text-sm text-teal-700 space-y-2">
                    <p>
                      1990년대부터 프로그레시브 락에 대한 본격적인 학술 연구가 시작되었다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>Edward Macan (1997):</strong> 최초의 체계적인 프로그레시브 락 연구서</li>
                      <li>• <strong>Bill Martin (1998):</strong> 철학적 관점에서의 접근</li>
                      <li>• <strong>Kevin Holm-Hudson (2002):</strong> 음악 이론적 분석</li>
                      <li>• <strong>Paul Hegarty & Martin Halliwell (2011):</strong> 문화적 맥락 연구</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">🌐 현대적 수용</h3>
                  <div className="text-sm text-green-700 space-y-2">
                    <p>
                      21세기에 들어 프로그레시브 락은 다양한 형태로 재해석되고 있다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• <strong>프로그레시브 메탈:</strong> Dream Theater, Tool, Opeth</li>
                      <li>• <strong>포스트 록:</strong> Godspeed You! Black Emperor, Sigur Rós</li>
                      <li>• <strong>매스 록:</strong> King Crimson의 영향을 받은 복잡한 리듬</li>
                      <li>• <strong>모던 프로그:</strong> Porcupine Tree, The Mars Volta</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Legacy */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-8 mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#0000AA]">🎯 비평적 유산과 현재적 의미</h2>
              
              <div className="prose prose-blue max-w-none text-sm leading-relaxed space-y-4">
                <p className="font-medium text-blue-800">
                  프로그레시브 락의 비평적 수용사는 대중음악 비평의 변화를 보여주는 중요한 사례이다:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded border border-blue-100">
                    <h3 className="font-semibold text-blue-700 mb-2">📈 긍정적 유산</h3>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• <strong>예술적 야심:</strong> 대중음악의 예술적 가능성 확장</li>
                      <li>• <strong>기술적 혁신:</strong> 새로운 악기와 녹음 기법 개발</li>
                      <li>• <strong>구조적 실험:</strong> 전통적 형식의 파괴와 재창조</li>
                      <li>• <strong>장르 융합:</strong> 클래식, 재즈, 포크의 통합</li>
                      <li>• <strong>컨셉트 앨범:</strong> 통일된 주제 의식</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-red-100">
                    <h3 className="font-semibold text-red-700 mb-2">⚠️ 비판적 지적</h3>
                    <ul className="text-xs text-red-600 space-y-1">
                      <li>• <strong>엘리트주의:</strong> 대중과의 거리감</li>
                      <li>• <strong>과도한 복잡성:</strong> 음악적 자연스러움 상실</li>
                      <li>• <strong>남성 중심성:</strong> 여성 뮤지션의 배제</li>
                      <li>• <strong>백인 중산층 편향:</strong> 다양성 부족</li>
                      <li>• <strong>상업적 거대화:</strong> 초기 정신의 변질</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-6">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-3">🔮 현재적 의미</h3>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p>
                      오늘날 프로그레시브 락의 비평적 수용은 더욱 균형 잡힌 시각을 보여준다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4 mt-2">
                      <li>• <strong>역사적 맥락화:</strong> 1960-70년대 문화적 배경에서 이해</li>
                      <li>• <strong>다원적 접근:</strong> 음악학, 사회학, 문화학적 관점 통합</li>
                      <li>• <strong>장르적 다양성 인정:</strong> 단일한 &quot;프로그레시브 락&quot;이 아닌 다양한 스타일들</li>
                      <li>• <strong>영향력 추적:</strong> 현대 음악에 미친 지속적 영향 연구</li>
                      <li>• <strong>글로벌 관점:</strong> 영미권을 넘어선 전 세계적 확산 연구</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">📖 Edward Macan의 기여</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      Macan의 연구는 프로그레시브 락 비평사에서 전환점이 되었다:
                    </p>
                    <ul className="text-xs space-y-1 ml-4 mt-2">
                      <li>• <strong>최초의 체계적 연구:</strong> 학술적 방법론을 통한 분석</li>
                      <li>• <strong>사회학적 접근:</strong> 음악을 사회문화적 맥락에서 이해</li>
                      <li>• <strong>편견 없는 시각:</strong> 찬양도 비판도 아닌 객관적 분석</li>
                      <li>• <strong>후속 연구의 토대:</strong> 이후 프로그레시브 락 연구의 기준점</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-blue-700 mt-6 italic font-medium">
                  &quot;프로그레시브 락의 비평적 수용사는 대중음악이 어떻게 평가되고 재평가되는지를 보여주는 
                  흥미로운 사례연구이다.&quot; - 이는 음악 비평 자체의 역사적 변화를 반영한다.
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
              href="/misc/chapters/ch7" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              ← Chapter 7
            </Link>
          </div>
          
          <div className="text-sm text-gray-600">
            Chapter 8 / 8
          </div>
          
          <div className="px-4 py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">
            마지막 장
          </div>
        </div>
      </div>
    </div>
  )
}
