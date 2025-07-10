"use client"

import Link from "next/link"

export default function RobertWyattPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Robert Wyatt
            </h1>
            <p className="text-lg text-gray-600">
              캔터베리 록 • 드러머 • 싱어송라이터 • 실험적 아티스트
            </p>
          </div>

          {/* Artist Overview */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Robert Wyatt (로버트 와이어트)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt는 캔터베리 록 씬의 전설적인 인물로, Soft Machine의 창립 멤버이자 
                독특한 음악적 비전을 가진 아티스트입니다. 1973년 사고로 하반신 마비가 되었지만, 
                이후에도 계속해서 혁신적이고 감동적인 음악을 만들어내며 많은 이들에게 
                영감을 주고 있습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>본명:</strong> Robert Ellidge Wyatt<br/>
                  <strong>출생:</strong> 1945년 1월 28일<br/>
                  <strong>국적:</strong> 영국<br/>
                  <strong>주요 활동:</strong> Soft Machine (1966-1971), 솔로 활동 (1970-현재)
                </p>
              </div>
            </div>
          </div>

          {/* Soft Machine Era */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Soft Machine 시대</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt는 1966년 Soft Machine의 창립 멤버로 활동을 시작했습니다. 
                그는 밴드의 드러머이자 주요 보컬리스트로 활약하며, 캔터베리 록 장르의 
                형성에 핵심적인 역할을 했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">역할 및 기여</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 드러머 및 퍼커셔니스트</li>
                    <li>• 주요 보컬리스트</li>
                    <li>• 작곡 및 편곡 참여</li>
                    <li>• 캔터베리 록 사운드 개발</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">주요 앨범</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• The Soft Machine (1968)</li>
                    <li>• Volume Two (1969)</li>
                    <li>• Third (1970)</li>
                    <li>• Fourth (1971)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Life-Changing Event */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">인생의 전환점</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                1973년 6월, Robert Wyatt는 파티에서 창문으로 떨어지는 사고를 당해 
                하반신 마비가 되었습니다. 이 사건은 그의 인생과 음악에 큰 변화를 
                가져왔지만, 그는 이를 극복하고 새로운 형태의 음악 표현을 찾아나갔습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-2">음악적 적응</h3>
                <p className="text-sm">
                  드러머로서의 활동이 제한되면서, Wyatt는 키보드와 보컬에 더욱 집중하게 되었습니다. 
                  이는 그의 음악에 새로운 차원을 더했고, 더욱 내성적이고 감정적인 표현을 
                  가능하게 했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Solo Career */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">솔로 활동</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                사고 이후 Robert Wyatt는 솔로 아티스트로서 더욱 독창적인 음악 세계를 
                구축했습니다. 그의 솔로 작품들은 실험적이면서도 깊은 감정을 담고 있으며, 
                정치적 메시지와 개인적 성찰을 균형있게 표현합니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">주요 솔로 앨범</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Rock Bottom (1974)</strong>
                    <p className="text-gray-600 mt-1">
                      사고 이후 첫 번째 솔로 앨범으로, 개인적 고통과 희망을 담은 
                      감동적인 작품입니다. 비평가들에 의해 걸작으로 평가받고 있습니다.
                    </p>
                  </div>
                  <div>
                    <strong>Ruth Is Stranger Than Richard (1975)</strong>
                    <p className="text-gray-600 mt-1">
                      더욱 실험적인 접근을 보여주는 두 번째 솔로 앨범으로, 
                      다양한 음악적 스타일을 탐구합니다.
                    </p>
                  </div>
                  <div>
                    <strong>Nothing Can Stop Us (1982)</strong>
                    <p className="text-gray-600 mt-1">
                      정치적 메시지가 강하게 담긴 앨범으로, 사회적 이슈에 대한 
                      그의 관점을 음악으로 표현했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Style */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">음악적 스타일</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt의 음악은 캔터베리 록, 재즈, 실험 음악, 포크 등 다양한 장르를 
                넘나들며 독특한 사운드를 만들어냅니다. 그의 독특한 보컬 스타일과 
                혁신적인 편곡은 많은 음악가들에게 영감을 주었습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">음악적 특징</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 독특한 팔셋토 보컬</li>
                    <li>• 실험적 편곡과 구성</li>
                    <li>• 재즈와 록의 융합</li>
                    <li>• 정치적 메시지 담기</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">영향받은 장르</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 캔터베리 록</li>
                    <li>• 프리 재즈</li>
                    <li>• 아방가르드 음악</li>
                    <li>• 포크 및 팝</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Political Activism */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">정치적 활동</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt는 음악가로서뿐만 아니라 정치적 활동가로도 알려져 있습니다. 
                그는 좌파 정치에 대한 신념을 음악을 통해 표현하며, 
                사회적 이슈에 대한 메시지를 지속적으로 전달해왔습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-3">주요 관심사</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>사회적 이슈:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 평화와 반전</li>
                      <li>• 사회적 불평등</li>
                      <li>• 환경 문제</li>
                    </ul>
                  </div>
                  <div>
                    <strong>정치적 신념:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 좌파 정치</li>
                      <li>• 사회주의적 가치</li>
                      <li>• 인권 옹호</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collaborations */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">협업 프로젝트</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt는 수많은 아티스트들과 협업을 통해 자신의 음악적 지평을 
                넓혀왔습니다. 그의 개방적인 태도와 실험정신은 다양한 장르의 
                음악가들과의 창의적 만남을 가능하게 했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">주요 협업자</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Brian Eno</li>
                    <li>• David Gilmour</li>
                    <li>• Bjork</li>
                    <li>• Hot Chip</li>
                    <li>• Scritti Politti</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">협업 유형</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 게스트 보컬</li>
                    <li>• 악기 연주</li>
                    <li>• 프로덕션 참여</li>
                    <li>• 리믹스 작업</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy and Influence */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">유산과 영향</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt의 음악적 유산은 단순히 그의 작품에 그치지 않습니다. 
                그는 역경을 극복하고 예술적 창조를 지속한 인물로서, 
                많은 음악가들과 장애인들에게 영감을 주는 존재가 되었습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">영향력</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>음악적 영향:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 캔터베리 록 장르 개척</li>
                      <li>• 실험적 음악 발전</li>
                      <li>• 크로스오버 음악 장려</li>
                    </ul>
                  </div>
                  <div>
                    <strong>사회적 영향:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 장애인 권익 증진</li>
                      <li>• 예술적 가능성 확장</li>
                      <li>• 사회적 메시지 전달</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">개인적 철학</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt의 음악과 삶은 인간의 존엄성과 예술의 힘에 대한 깊은 
                믿음을 보여줍니다. 그는 개인적 고통을 예술적 창조의 원동력으로 
                승화시키며, 사회적 책임을 잊지 않는 아티스트로 평가받습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🎵</div>
                  <div className="font-medium text-gray-800">예술적 진정성</div>
                  <div className="text-sm text-gray-600 mt-1">순수한 창조 의지</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">💪</div>
                  <div className="font-medium text-gray-800">불굴의 의지</div>
                  <div className="text-sm text-gray-600 mt-1">역경 극복의 정신</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-medium text-gray-800">사회적 책임</div>
                  <div className="text-sm text-gray-600 mt-1">정의로운 메시지</div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">커리어 하이라이트</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">1960-70년대</h3>
                  <ul className="space-y-2">
                    <li><strong>1966:</strong> Soft Machine 창립</li>
                    <li><strong>1968:</strong> 첫 번째 앨범 발매</li>
                    <li><strong>1970:</strong> 솔로 활동 시작</li>
                    <li><strong>1973:</strong> 사고 후 새로운 출발</li>
                    <li><strong>1974:</strong> Rock Bottom 발매</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">1980년대 이후</h3>
                  <ul className="space-y-2">
                    <li><strong>1982:</strong> Nothing Can Stop Us</li>
                    <li><strong>1991:</strong> Dondestan 발매</li>
                    <li><strong>1997:</strong> Shleep 발매</li>
                    <li><strong>2003:</strong> Cuckooland 발매</li>
                    <li><strong>2014:</strong> 'Different Every Time' 다큐멘터리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration */}
          <div className="bg-teal-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-teal-800 mb-4">영감을 주는 인물</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Robert Wyatt의 이야기는 단순한 음악가의 성공담이 아닙니다. 
                그는 신체적 제약을 극복하고 예술적 창조를 지속한 인물로서, 
                많은 이들에게 희망과 용기를 주는 존재입니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                <p className="text-sm italic">
                  "음악은 나에게 단순한 직업이 아니라 삶의 이유이다. 
                  어떤 상황에서도 음악을 통해 소통하고 표현할 수 있다는 것이 
                  나에게는 가장 큰 축복이다."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Robert Wyatt</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/w" className="text-blue-600 hover:text-blue-800 font-medium">
              ← W 폴더로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 