"use client";
import Link from "next/link";

export default function ExplorersClubPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Explorer's club</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 미국
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">성격:</span> 프로젝트 밴드
            </div>
            <div>
              <span className="font-semibold">특징:</span> 올스타 라인업
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">종합예술인</span>
                <span className="text-sm text-blue-600">villastrangiato@hanmail.net</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">최고의 라인업을 자랑하는 프로젝트 앨범</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  아마도 이 앨범은 최근에 나온 프로젝트 음반들 중에서 최고의 라인업이 아닐까 싶다.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">참여 뮤지션들</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>존 페트루치</strong> (Dream Theater) - 기타</li>
                  <li>• <strong>제임스 라브리에</strong> (Dream Theater) - 보컬</li>
                  <li>• <strong>데릭 쉐리니언</strong> (전 Dream Theater) - 키보드</li>
                  <li>• <strong>빌리 시언</strong> - 베이스</li>
                  <li>• <strong>디씨 쿠퍼</strong> (Royal Hunt) - 보컬</li>
                  <li>• <strong>트렌트 가드너</strong> (Magellan) - 작곡/키보드</li>
                  <li>• <strong>스티브 하우</strong> (Yes) - 기타</li>
                  <li>• <strong>맷 길로리</strong> (Dali's Dilemma) - 기타</li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                라인업만으로도 일단 음반의 가치는 충분해 진다고 볼 수 있겠다. 그러나 단순히 유명한 사람들이 모여서 음반을 냈다는 것이 중요하진 않다. 음반에 수록된 곡들은 최근의 프로그레시브 메탈의 경향과는 약간의 차이를 보이는 곡들이므로...
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">프로그레시브 록 vs 프로그레시브 메탈</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  흔히 프로그레시브 락과 프로그레시브 메탈을 같이 혼동해서 사용하는 경우가 있는데 전에도 한번 언급했듯 프로그레시브 락과 프로그레시브 메탈과는 분명 차이가 있다.
                </p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>프로그레시브 메탈:</strong> 리프를 중심으로 하는 헤비메탈의 자식</li>
                  <li>• <strong>프로그레시브 락:</strong> 기타보다는 건반에 의한 접근이 주를 이룸</li>
                  <li>• ELP와 같은 그룹은 아예 기타리스트가 없는 것을 보더라도 프로그레시브 락에서 기타의 비중은 건반을 넘어서는 예가 거의 없다</li>
                </ul>
              </div>

              <h4 className="text-lg font-semibold mb-3 text-gray-800">트렉별 상세 리뷰</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-semibold text-gray-800">1. Impact 1-Fate Speaks</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    정말 엄청난 규모의 곡이다. 물론 이 앨범에 수록된 5개의 곡들이 전부 대곡들이지만 말이다. 무엇보다 뛰어난 것은 작곡이다. 어떤 음악이든 편곡을 잘 하면 러닝타임을 얼마든지 늘릴 수 있지만 이 앨범에 그런 약은 수작은 전혀 보이지 않는다. 복잡하게 설계된 건물을 들여다 보듯 그 엄청난 구성에 놀라게 될 것이다.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h5 className="font-semibold text-gray-800">2. Impact 2-Fading Speak</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    흔히 우리가 락 발라드라고 부르는 곡인데 그 시작이 굉장히 장황하다. 이런 인트로를 들어보면 트렌트 가즈너의 음악적 성향을 감지할 수 있다. 이 앨범이 최근에 발표되는 비슷한 부류의 음반들과 정말 차별되는 점이라면 어떤 앨범들 보다 감동적인 선율을 많이 가지고 있다는 점이다.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h5 className="font-semibold text-gray-800">3. Impact 3-No Returning</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    들어보면 플륫이 사용된것을 알 수 있는데 예전의 제스로툴이나 제네시스를 떠 오르게 하는 헤비한 플륫 연주다. 요즘에는 흔히 들을 수 있는 연주가 아니었기 때문에 더욱 반가웠다. 트렌트 가즈너의 작곡 방식이 전통적인 프로그레시브 락에 뿌리를 두고 있음을 확인시킨다.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">
                    플륫의 연주에 이어서 드림 씨어터의 awake앨범에 수록된 lie와 흡사한 기타 리프가 시작된다. 노래를 제임스 라브리에가 맡고 있기 때문에 더욱 드림 씨어터와 흡사한 사운드로 들린다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h5 className="font-semibold text-gray-800">4. Impact 4-Time Enough</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    역시 서정적인 발라드넘버다. 뭐랄까 그런데 그렇게 인상에 깊이 남는곡은 못되는것같다.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h5 className="font-semibold text-gray-800">5. Impact 5-Last Call</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    첫 곡에서 들려 주었던 리프가 다시 등장하며 앨범의 구성을 더욱 탄탄하게 하며 연주자들이 각자의 기량을 뽐내기 시작하는데 마지막 곡의 마지막 부분에서 특히 존 페트루치의 기타에 귀를 기울여 보라. 라이브 앨범이나 실황 비디오 클립에서나 들어 봄직한 장시간의 기타 솔로를 맛 볼 수 있다.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">최종 평가</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  여하튼 아무래도 최근에 나온 음반이니 네오프로그레시브/프로그레시브 메틀은 내게 쥐약이다!!!라고 단언하시는 분들에게 권하고 싶지는 않다. 단지 명맥이 끊겼다고 하지만 지하에서 이렇게 훌륭하게 명맥이 이어져 내려오고 있는 프로그레시브락의 현주소를 알아볼 수있는 좋은 음반이라는 것은 부인할수 없는 사실이라고 생각한다.
                </p>
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