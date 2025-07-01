"use client";
import Link from "next/link";

export default function BeggarsOperaReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Beggar's Opera</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Glasgow, Scotland</p>
              <p><strong>장르:</strong> Progressive Rock, Symphonic Rock</p>
              <p><strong>활동 시기:</strong> 1969-1974</p>
            </div>
            <div>
              <p><strong>이전 이름:</strong> The System</p>
              <p><strong>특징:</strong> 듣기 쉽고 아름다운 멜로디</p>
              <p><strong>대표작:</strong> Pathfinder (1972)</p>
            </div>
          </div>
        </div>

        {/* 멤버 정보 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">멤버 구성</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Martin Griffiths</strong> - Vocals</p>
              <p><strong>Alan Park</strong> - Keyboards</p>
              <p><strong>Ricky Gardiner</strong> - Guitar, Vocals</p>
            </div>
            <div>
              <p><strong>Gordon Sellar</strong> - Bass, Vocals</p>
              <p><strong>Ray Wilson</strong> - Drums</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 섹션 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">김영훈 (YSTAZO)</h3>
            <p className="text-sm text-gray-600 mb-4">1994년 10월</p>
            
            <div className="space-y-4 leading-relaxed">
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">앨범 발견</h4>
                <p>
                  이 그룹은 이름만 들어봤었는데, 곧 라이센스로 나온다는 신보 안내코너에서... 
                  무척 궁금했던 차에... 구입을 하게 되었네요.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">앨범 패키지 및 아트워크</h4>
                <div className="space-y-3">
                  <p>
                    우선 이 앨범의 자켓을 살펴보면, <strong>6면 포스터 커버</strong>로 되어 있고, 
                    물론 그래서 가격도 비싸지만...
                  </p>
                  
                  <p>
                    펼쳐보면 <strong>우주복을 입은 기사(?)가 말을 타고 있는 모습</strong>이며, 
                    그 뒤에 보이는 배경은 황량해 보이기까지 하고... 공상 과학 만화를 연상케 합니다.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">밴드 역사</h4>
                <div className="space-y-3">
                  <p>
                    이들은 영국 그룹으로 <strong>글래스고우 출신</strong>이고, 처음에는 <strong>The System</strong>이라는 이름으로 활동을 하다가 
                    70년에 데뷔 앨범인 <strong><em>Act One</em></strong>을 발표했다고 합니다.
                  </p>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">디스코그래피</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Act One</strong> (1970) - 데뷔작, ELP 모방 스타일</li>
                      <li><strong>Water Of Change</strong> (1971) - 개성 발현</li>
                      <li><strong>Pathfinder</strong> (1972) - 진전된 사운드</li>
                    </ul>
                  </div>

                  <p>
                    초기에는 단순히 ELP를 모방한 듯한 음악으로 인해 사람들의 관심을 끌지 못했다고... 
                    그러다가 71년에 2집인 <strong><em>Water Of Change</em></strong>를 발표, 
                    전작에서 들려주었던 ELP사운드에서 탈피하여 그들 자신의 개성을 보여주었다고 합니다.
                  </p>

                  <p>
                    다시 1년뒤 72년에 바로 이 앨범인 <strong><em>Pathfinder</em></strong>를 발표하는데, 
                    독특한 커버와 함께 좀 더 진전된 사운드로 구매욕구를 자극했다고...
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">음악적 특징</h4>
                <p>
                  앨범 해설지에도 쓰여져 있지만, 이들의 음악은 <strong>듣기 쉽고 아름다운 것</strong>이 특징이라 할수 있습니다. 
                  정말 어디선가 들어본 듯한 그런 멜로디도 들리고...
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">주요 트랙 분석</h4>
                <div className="space-y-4">
                  <p>총 7곡이 수록되어 있는데, 그 중 특이하다고 생각되는 곡들은...</p>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-red-700 mb-2">1. Hobo</h5>
                    <p className="text-sm">
                      해설지에 따르면 <strong>죽어가는 한 방랑자에 대한 이야기</strong>를 담고 있다고 하는데, 
                      안타깝게도 가사가 실려 있지 않아서 확인을 할 길이... 
                      (흐... 들리는 것으로는 좀.. 힘들더라고요... "You're losing your faith.." 뭐 이렇게 들리던데... 쩝...) 
                      멋진 곡입니다.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-red-700 mb-2">2. MacArthur Park</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Jim Webb</strong>이라는 작곡가에 의해 68년에 만들어진 노래로 리차드 해리스, 글렌 캠블, 토니 버넷, 
                        프랭크 시나트라, 포탑스 등 많은 가수가 불렀지만 디스코의 여왕이라 불리던 <strong>Donna Summer</strong>가 
                        가장 큰 인기를 얻었던 곡입니다.
                      </p>
                      <p>
                        극적이고 아름다운 멜로디 때문에 많은 사랑을 받았는데, 긴 연주시간 때문에 줄여서 부르는 경우가 많았다고 합니다.
                      </p>
                      <p>
                        이 그룹도 <strong>화려한 사운드</strong>로 이 노래를 들려주고 있는데, 키보드 연주가 좋게 들리는군요...
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-red-700 mb-2">6. Stretcher</h5>
                    <p className="text-sm">
                      이 앨범에 있는 <strong>유일한 연주곡</strong>인데, 피아노와 기타 연주가 어우러지면서 
                      반복되는 주제가 무척 아름답습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">총평</h4>
                <p>
                  저도 처음 들어본 음악이었는데, <strong>아트락 그룹 치고는 듣기가 편안하고 부담없는 음악</strong>을 
                  들려주고 있는 것 같습니다.
                </p>
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