"use client";
import Link from "next/link";

export default function BostonReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Boston - Return to Zero</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> USA (Boston, Massachusetts)</p>
              <p><strong>장르:</strong> AOR, Arena Rock, Progressive Rock</p>
              <p><strong>핵심 인물:</strong> Tom Scholz, Brad Delp</p>
            </div>
            <div>
              <p><strong>특징:</strong> MIT 출신 Tom Scholz의 기술적 완성도</p>
              <p><strong>사이드 프로젝트:</strong> Orion the Hunter, Return to Zero</p>
              <p><strong>음악적 성격:</strong> Lite-Prog, American AOR</p>
            </div>
          </div>
        </div>

        {/* 앨범 디스코그래피 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">주요 앨범</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-3 rounded border">
              <h3 className="font-bold mb-2">정규 앨범</h3>
              <ul className="space-y-1">
                <li>• <strong>Boston</strong> (1976) - 데뷔작</li>
                <li>• <strong>Don't Look Back</strong> (1978)</li>
                <li>• <strong>Third Stage</strong> (1986) - Amanda 히트</li>
                <li>• <strong>Walk On</strong> (1994) - Brad Delp 탈퇴 후</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border">
              <h3 className="font-bold mb-2">관련 프로젝트</h3>
              <ul className="space-y-1">
                <li>• <strong>Barry Goudreau</strong> (솔로) - Brad Delp 참여</li>
                <li>• <strong>Orion the Hunter</strong> - 'Joanne' 히트</li>
                <li>• <strong>Return to Zero</strong> - Brad Delp 프로젝트</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 첫 번째 리뷰어 - Fish */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">Fish (신인철)</h3>
            <p className="text-sm text-gray-600 mb-4">icshin@bioneer.kaist.ac.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 추억의 시작 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">CD 정리하며 되살아난 추억</h4>
                <div className="space-y-3">
                  <p>
                    얼마전 본가에서 CD를 정리하다가 오랫동안 거들떠보지 않던 Boston CD를 다시 발견하게 되었습니다. 
                    여기 저기 흩어져 있던 CD 케이스와 알맹이를 제짝 찾아서 먼지를 털고 다시 랙에 꽂는 행위는 
                    몇 년 동안 잊혀졌던 CD들을 오랜만에 다시 한번 쳐다보게 하는 기회를 주었죠.
                  </p>
                  
                  <div className="bg-white p-3 rounded border">
                    <p className="font-bold mb-2">87년 대학 기숙사에서 인기 있던 앨범들</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Alan Parsons Project</strong> - Stereotomy (87년 걸작)</li>
                      <li><strong>Marillion</strong> - Misplaced Childhood (당시 lite-prog로 인식)</li>
                      <li><strong>Greg Lake</strong> - 솔로 데뷰 앨범</li>
                      <li><strong>GTR</strong> - 셀프타이틀 데뷰앨범</li>
                      <li><strong>Roger Waters</strong> - Radio KAOS</li>
                      <li><strong>Boston</strong> - Third Stage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 음악 취향의 변화 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">음악 취향의 변화</h4>
                <div className="space-y-3">
                  <p>
                    86년 기숙사에서 단체 생활을 하기 전까지는 <strong>Mahavishnu Orchestra</strong>와 
                    <strong>Tales from Topographic Oceans</strong>, <strong>Soft Machine의 3rd</strong>를 열심히 듣고 있었는데...
                  </p>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                    <p className="text-sm">
                      단체생활을 하면서 취향이 절로 <strong>'같이 듣기에 좀더 좋은 음악'</strong>으로 변하더군요... 
                      87년 즈음 Amanda라는 히트싱글로 되돌아온 Boston은 Tom Scholtz와 Brad Delp만의 Boston이었지만 
                      (Barry Goudreau가 빠져서리...) 당시 대학생 시절 공동체 생활의 기숙사 안에서 주로 룸메이트와 같이 즐길 수 있던 
                      lite-prog(?)를 들었던 것 같네요.
                    </p>
                  </div>
                </div>
              </div>

              {/* 컬렉션의 변화 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">세월의 흐름과 Budget의 변화</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold mb-2">Boston 앨범 컬렉션 변천사</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p><strong>1집 Boston:</strong> 600원짜리 파란색 모노톤 빽판</p>
                        <p><strong>2집 Don't Look Back:</strong> 2천원 넘던 칼라빽판</p>
                      </div>
                      <div>
                        <p><strong>3집 Third Stage:</strong> 오아시스 레코드 게이트 폴더 라이센스 LP</p>
                        <p><strong>4집 Walk On:</strong> CD로 소장</p>
                      </div>
                    </div>
                    <p className="mt-2 italic text-gray-600">
                      "아주 세월의 흐름과 저의 budget의 변화를 적나라하게 보여주는 컬렉션이었습니다."
                    </p>
                  </div>
                </div>
              </div>

              {/* Return to Zero 탐색기 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">Return to Zero를 찾아서</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-l-4 border-red-400">
                    <h5 className="font-bold text-red-700 mb-2">Orion the Hunter의 재발견</h5>
                    <p className="text-sm">
                      오랜만에 절망적이었던 4집 Walk On을 다시 꺼내들었더니, 의외로 Brad Delp의 자리를 대신했던 
                      <strong>David Sykes, Fran Cosmo</strong> 등의 목소리가 신나고 이쁘게 들렸고... 
                      결국 Barry Goudreau의 아웃사이드 Boston 프로젝트인 <strong>Orion the Hunter</strong>의 CD를 메일오더하게 되었습니다.
                    </p>
                    
                    <div className="mt-3 p-2 bg-green-50 rounded">
                      <p className="text-sm font-bold text-green-700">
                        "아.. 왜 이렇게 좋은가요.. Fran Cosmo의 시원한 보컬.. Brad Delp의 정말 어여쁜 백코러스.. 
                        단순하기만 한 어메리컨 AOR이지만.. 정말 오랜만에 시원하게 즐길 수 있던 앨범이었습니다."
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold mb-2">Return to Zero 앨범 찾기의 어려움</h5>
                    <p className="text-sm">
                      1990년 즈음에 발매된 Return to Zero의 앨범은 이미 오래전에 절판되어 어떤 메일오더 가게에서도 보이지 않더군요. 
                      다만 Return to Zero의 미발표곡 모음집인 <strong>Lost</strong>만이 비싼 가격에 보일 뿐...
                    </p>
                    
                    <div className="mt-2 p-2 bg-blue-50 rounded">
                      <p className="text-sm italic">
                        "혹시 Return to Zero의 데뷰 앨범을 가지고 계신 바동민들 혹 안계신가요? 정말 듣고 싶어졌거든요.."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ronnie James Dio 이야기 */}
              <div className="bg-indigo-50 p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-3">웹 서핑 중 발견한 Ronnie James Dio</h4>
                <div className="space-y-3">
                  <p>
                    웹 서핑을 하다 보니 <strong>Ronnie James Dio</strong>의 얘기를 보게 되었습니다. 
                    참 오랜만에 듣는 이름이죠! 80년대 락팬들의 영원한 송가였던 Black Sabbath의 Heaven and Hell... 
                    그리고 Rainbow 시절의 잊지못할 곡들인 Stargazer, Rainbow Eyes...
                  </p>
                  
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">
                      더 놀랐던 건 Dio의 나이가 미스터리라는 사실입니다. 생일만 알려져 있고 생년은 밝히기를 거부한다더군요... 
                      하지만 대부분의 Dio 사이트 웹지기들은 <strong>Dio가 60살이 넘었을걸로 생각</strong>하더군요.
                    </p>
                    
                    <p className="text-sm mt-2 italic text-gray-600">
                      "Stargazer를 부르던.. Man on the Silver Mountain을 부르던.. Dio가 60살이라니.. T.T 
                      조만간 Robert Plant도.. David Gilmour도.. 다들 환갑이 넘겠죠.."
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-right italic text-gray-600">
                이상 퇴근시간 기다리다 심심해서 해본 램블링이었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 두 번째 리뷰어 - 김진석 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold text-blue-800 mb-2">김진석</h3>
            <p className="text-sm text-gray-600 mb-4">jindor@mmrnd.sec.samsung.co.kr</p>
            
            <div className="space-y-3 leading-relaxed">
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-2">Return to Zero 앨범 구매 정보</h4>
                <p>
                  인철님의 애끓는 부탁을 보고서 gemm.com에서 시작해서 찾아보니, 
                  <strong>MobyDisc</strong> (http://www.mobydisc.com)라는 가게에서 <strong>$15.00</strong>에 팔고 있네요. 
                  주문해본적 없는 곳이라 좀 망설여지시긴 하겠지만... Customer Rate 등급은 Excellent군요. 행운을 빕니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 세 번째 리뷰어 - 이원호 */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-xl font-bold text-purple-800 mb-2">이원호</h3>
            <p className="text-sm text-gray-600 mb-4">leewh@sysic.hei.co.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 중학시절 추억 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">중학시절의 첫 만남</h4>
                <div className="space-y-3">
                  <p>
                    인철님의 글을 읽다보니, 저도 옛날 생각이 많이 났습니다. 
                    Boston이나 GTR 모두 저의 <strong>중학시절에 처음 Tape으로 접했던</strong> 그룹들이거든요...
                  </p>
                  
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold mb-2">GTR에 대한 기억</h5>
                    <p className="text-sm">
                      당시에 제가 Steve Howe와 Steve Hackett을 알리가 없는 나이였지만, 
                      <strong>'When The Heart Rules The Mind'</strong>에서 청아하고 맑게 퍼지는 Max Bacon의 목소리에 반했으며, 
                      황인용씨가 진행하던 [영팝스] 프로그램에서 몇 주간 1위를 지켰던 <strong>'Toe The Line'</strong>에서 들리는 
                      Howe와 Hackett의 클리어 톤에 의한 서정적인 기타연주는 당시 음악에 문외한이던 저에게도 
                      음악적 감흥을 불러일으키기에 충분했습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Boston에 대한 인상 */}
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">Boston의 매력</h4>
                <div className="space-y-3">
                  <p>
                    Boston도 맨 처음엔 <strong>빌보드 싱글챠트를 3주만에 점령했다는 이슈</strong> 하나만으로 귀가 솔깃해 들었지만, 
                    차츰 <strong>Brad Delp의 담백한(?) 보컬</strong>과 <strong>Tom Scholz의 현란한 기타 연주</strong>는 저를 사로잡기에 충분했죠.
                  </p>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <p className="text-sm">
                      물론 <strong>공학도라면 누구나 한번쯤은 가고 싶어하는 MIT의 석사출신</strong>이라는 점도 주목이 되었지만...
                    </p>
                  </div>
                </div>
              </div>

              {/* CD 구매 경험담 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">CD Converting 경험담</h4>
                <div className="space-y-3">
                  <p>
                    대학시절엔 중학교 때 너무 많이 들어서 쭈글쭈글해지고 또 음질도 많이 열악해진 테입을 참다 못해 
                    GTR와 Boston의 앨범들을 CD로 Converting하기로 마음먹었습니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <h5 className="font-bold text-orange-700 mb-2">Boston</h5>
                        <p className="text-sm">
                          국내에 이미 많은 팬들을 확보한 상태였기 때문에 그리 어렵지 않게 
                          <strong>4장의 정규앨범과 1장의 베스트 형식의 음반</strong>을 구할 수 있었습니다.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-bold text-orange-700 mb-2">GTR</h5>
                        <p className="text-sm">
                          계속 CD로 복각이 되지도 않았다가 최근 몇년전부터 Internet Catalogue에 올라 있는 것을 보고 주문했습니다. 
                          <strong>마음먹은지 꼭 8년만의 일</strong>이었습니다. 그때의 희열을 지금도 잊을 수가 없습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Return to Zero 정보 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">Return to Zero에 대한 정보</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-l-4 border-red-400">
                    <p className="text-sm">
                      Return to Zero는 <strong>Brad Delp가 Boston의 [Third Stage] 앨범 이후로 조직한 프로젝트 밴드</strong>로 
                      결성 당시엔 많은 Spotlight를 받았던 것으로 기억합니다.
                    </p>
                    
                    <p className="text-sm mt-2">
                      레코딩 계약도 당시 White Lion, Skid Row 등 잘나가는 메틀밴드들만 소속되어 있던 
                      <strong>Warner Bros. 산하의 Reprise 레이블</strong>과 체결하여 많은 기대를 불러 모았지만, 
                      이렇다할 상업적인 성공을 거두지 못하자 레코딩 계약도 잃고 폐판되다시피 한 앨범이 되어버렸죠.
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">
                      그리고 제가 알기론 <strong>RTZ의 음반은 라이센스화 되지 않았습니다.</strong> 
                      저도 앨범이 발매되고 한 2년쯤 지난 뒤에 학교 앞의 레코드점에서 우연히 구할 수 있었거든요...
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <p className="text-sm font-bold text-green-700">
                      제가 GTR의 앨범을 그토록이나 구하려고 애써봐서인지 인철님의 심정이 충분히 이해가 되네요~ 
                      언제 한번 연락주시면 제가 CD로 구워드리던가 하죠...
                    </p>
                  </div>
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