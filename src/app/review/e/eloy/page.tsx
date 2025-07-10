"use client";
import Link from "next/link";

export default function EloyPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Eloy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 독일</li>
              <li><strong>장르:</strong> 스페이스 록, 심포닉 록</li>
              <li><strong>리더:</strong> Frank Bornemann (기타/보컬)</li>
              <li><strong>활동 기간:</strong> 1971-1984 (총 15장)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Inside (데뷔 앨범)</strong></li>
              <li><strong>Floating (3집)</strong> - "The Light From Deep Darkness"</li>
              <li><strong>Dawn (5집, 1976)</strong></li>
              <li><strong>Ocean (6집, 1977)</strong></li>
              <li><strong>Live</strong></li>
              <li><strong>Silent Cries And Mighty Echoes</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>우주와 신화에 대한 관심사</li>
              <li>Pink Floyd 연상 사운드</li>
              <li>Technicless symphonic</li>
              <li>컨셉추얼한 앨범 구성</li>
              <li>장대한 신디사이저 사운드</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰 1: Neo-Zao의 Eloy 총평</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>Neo-Zao, 김남웅 (http://156.147.16.58/~zao/zao.html)</strong>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">전반적인 평가</h4>
                <p>
                  엘로이는 한 마디로 말하면 좀 지겨운 밴드라고 생각하는데.. 그러니까 클라우스 슐체의 
                  일렉트로닉스 계열, 브라이언 이노와 클루스터의 앰비언트 계열 외에 또 하나의 졸려운 음악이라고 
                  생각해요. 제 표현대로 한다면, technicless symphonic이라고 하면 어울릴까요??
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범별 특징</h4>
                <p>
                  첫 앨범인 Inside서부터 후반기 앨범들이라고 말할 수 있는 Planet, Metromania등등.. 
                  면면히 흐르는 기조는 우주와 신화에 대한 관심사이고, 각 앨범마다 심포닉 락의 명반들에는 
                  못 미치지만 평균정도의 음악성은 보여주고 있어요. 특히 초기앨범들은 들어볼만 한 가치가 있다고 생각합니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Best Choice 추천</h4>
                <p>
                  Best Choice라면 역시 리베로님 말씀대로 Ocean과 Silent Cries and Mighty Echoes, Dawn이라고 생각합니다. 
                  또 단 3곡만으로 이루어진 데뷰앨범도 오밀조밀한 어레인지나 멜로디를 찾으시는 분들이 아니라면 
                  어둡고 중후한 맛도 있어요.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">라이브 앨범 추천</h4>
                <p>
                  단 한 장만을 권한다면 저는 Live를 권합니다. 엘로이의 곡들이 그다지 연주하기 어려운 곡들이 
                  아니여서인지 스튜디오 앨범보다 오히려 더 그윽한 맛을 풍깁니다. 이 실황앨범에는 이전 스튜디오 
                  앨범의 멤버들은 모두 쫓아내고 리더인 프랭크 보네만만 남아있지만, 전혀 듣는데 지장이 없습니다. 
                  데뷰앨범을 포함한 초기의 걸작들이 대부분 망라되어있는 괜찮은 앨범입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">리뷰 2: 유영재의 Dawn 상세 리뷰 (95.12)</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>유영재 (espiritu@hitel.net, 95.12)</strong>
              </div>

              <h4 className="text-lg font-semibold text-green-700 mb-3">ELOY - Dawn</h4>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">국내 인지도와 개인적 애정</h4>
                <p>
                  최근 국내에서 생각지도 않았던 Eloy의 앨범 [Silent Cries And Mighty Echoes]가 발매되었길래 
                  생각난 김에 Eloy의 앨범 한장을 골라서 좀 떠들어보련다. 독일의 대표적인 스페이스 록 그룹인 
                  Eloy는 꽤 오랜 기간 동안 활동하며 비교적 다작을 양산해낸 그룹이지만 그에 비해 국내 매니아들 
                  사이에서는 별로 대접을 받지 못하고 있는것 같다.
                </p>
                <p className="mt-2">
                  그러나 개인적으로 나는 이들 Eloy의 음악에 꽤 애정을 가지고 있는데 그 이유는 음악도 음악이지만 
                  아마도 프로그레시브 록에 처음 호기심을 갖게 될 즈음 접해본 그룹이라는 이유가 더 클지도 모르겠다. 
                  몇몇 사람들 말로는 그 유치한 음악하는 애들 뭐가 좋냐고 하지만 그래도 난 Eloy가 좋다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Dawn 앨범 소개</h4>
                <p>
                  1976년에 제작된 이들의 5집 앨범으로서 대부분의 수록곡이 조곡형태로 이루어져 있는 컨셉트 앨범이다. 
                  이 앨범은 전작인 [Power And Passion]과 내용상 연계성을 띠고 있는 작품으로 Jamie라는 한 젊은 이의 
                  시간 여행을 다루고 있다고 한다.
                </p>
                <p className="mt-2">
                  이 앨범 녹음 당시의 멤버 구성은 그룹의 리더이며 기타와 보컬을 맡고있는 Frank Bornemann을 주축으로, 
                  베이스 기타의 Klaus-Peter Matziol, 키보디스트 Detlev Schmidtchhen, 드러머 Jurgen Rosenthal의 
                  4인조 진용이었는데, 이 중에서 Frank Bornemann을 제외한 3명은 모두 새로 교체된 멤버들이었다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">곡별 해설</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">앨범 구성</h5>
                    <p className="text-sm">
                      비장한 분위기의 'Awakening'으로 시작하는 본앨범은 첫곡부터 다섯번째곡까지는 모두 
                      1, 2분 안팎의 짤막한 곡들로서 모두 한곡과 같이 이어져 연주되며, 앨범의 인트로와 같은 역할을 하고 있다.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">'Memory-Flash' (6번째 곡)</h5>
                    <p className="text-sm">
                      이 앨범의 하이라이트는 6번째곡인 'Memory-Flash'부터 시작된다. 여기서 짚고 넘어가야 할 것은 
                      Eloy의 라이브 앨범에 수록된 곡으로서 국내에서 가장 많은 사랑을 받고있는 'The Sun Song'이 
                      본 앨범의 세번째 곡으로서 자리잡고 있는데, 본앨범에서의 'The Sun Song'은 라이브 앨범에서의 
                      곡과 전혀 다른 곡이라는 것이다. 그 라이브 앨범의 'The Sun Song'에 해당하는 곡이 바로 
                      이 6번째 곡 'Memory-Flash'이다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium">'The Midnight Flight / The Victory Of Mental Force'</h5>
                    <p className="text-sm">
                      이 앨범의 가장 대곡인 열번째 트랙은 수록곡중 가장 박진감 넘치는 전개를 보이는 곡으로서 
                      다소 가라앉았던 분위기를 다시 고조시켜주고 있다. 이 곡에서는 Eloy답지 않게 스피드와 힘이 
                      넘치고 있는데, 특히 기타와 드럼의 몰아치는 연주가 인상적이며 그 뒤를 이어 오케스트레이션과 
                      같은 효과를 내는 신디사이저 연주가 후반부를 주도하고 있다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">총평</h4>
                <p>
                  [Dawn]은 Eloy의 작품중 가장 훌륭한 구성과 완성도를 지니고 있는 앨범이라고 생각되며, 
                  특히 질서정연한 전개를 보여가고 있는 12곡의 수록곡중에서 9번곡을 제외한 6~10번곡이 
                  클라이막스라 할 수 있겠다. 혹시 이 앨범도 라이센스로 나올지도 모르겠다. 만약에 라이센스로 
                  나온다고 해도 애초부터 Eloy에 관심이 없거나 장황한 신디사이저음을 싫어하시는 분들은 
                  건들지 않는게 이로울듯 하고, 그 외의 분들은 한번 건드려 보셔도 좋을듯...
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">리뷰 3: 유영재의 Ocean 리뷰 (96.1)</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>유영재 (espiritu@hitel.net, 96.1)</strong>
              </div>

              <h4 className="text-lg font-semibold text-purple-700 mb-3">ELOY - Ocean</h4>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범 개요</h4>
                <p>
                  [Dawn]에 이어서 1977년에 발표된 Eloy의 6집 [Ocean]은 흔히 [Floating]과 함께 그들의 
                  가장 뛰어난 작품이란 평을 얻는 앨범이다. 앨범 수록곡도 단 4곡뿐으로서 수록곡 모두가 
                  8분이 넘는, 전작에 비해 대곡 지향적인 면을 보여주고 있으며 신화에 기인한 컨셉트성 성향도 
                  한층 더 깊어졌다고 할 수 있겠다.
                </p>
                <p className="mt-2">
                  이 앨범을 접할때면 그 주제의 유사성 때문인지 네덜란드 그룹 Earth & Fire의 [Atlantis]가 
                  연상되기도 하는데 가사에서 전해져오는 서사적인 면에서는 오히려 이 Eloy의 것이 더 진지하다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Pink Floyd와의 연관성</h4>
                <p>
                  Eloy의 음악을 듣고있노라면 웬지 모르게 Pink Floyd가 연상되곤 하지만 정작 요목조목 따져보면 
                  Pink Floyd와 연관되는 것은 거의 없다시피 한것도 정말 모를 일이다. 이들이 Pink Floyd처럼 
                  사회 비판적인 메시지를 담고있다든가 혹은 초기 핑플처럼 사이키델릭 록을 구사한다던가, 
                  아니면 연주스타일이나 곡구성이 유사한것도 아닌데 말이다. 그럼에도 불구하고 이들의 음악을 
                  들으면 Pink Floyd가 생각나는 것은 정말 이해할 수 없는 일이다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">곡별 분석</h4>
                <div className="space-y-2">
                  <div>
                    <h5 className="font-medium">'Poseidon's Creation'</h5>
                    <p className="text-sm">
                      Eloy의 곡중에서는 비교적 국내 매니아들 사이에 잘 알려져 있는 곡으로서 중반부에서는 
                      Frank Bournemann이 노래를 불러주고 있다. 서사성을 띤 진지한 가사는 좋게 말하면 
                      '야...매우 지적이다!!'라고 말할 수 있겠고, 나쁘게 말하면 '별 개폼잡고 지랄이네!!'라고 
                      욕할 수도 있을듯... 포인트는 후반부의 절도있는 베이스 기타음과 화려한 키보드 연주, 
                      그리고 Frank의 일렉트릭 기타 연주가 어우러지며 멋진 엔딩을 이루어내고 있다.
                    </p>
                  </div>
                </div>
              </div>
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