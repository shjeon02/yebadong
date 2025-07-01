import Link from 'next/link';

export default function CervelloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">Cervello</h1>
          <p className="text-lg text-indigo-600">그리스 신화를 다룬 신비적 이탈리아 프로그레시브</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-indigo-700">국가:</span> 이탈리아</p>
              <p><span className="font-semibold text-indigo-700">앨범:</span> "Melos" (1973)</p>
              <p><span className="font-semibold text-indigo-700">핵심 멤버:</span> Corrado Rustici (기타)</p>
              <p><span className="font-semibold text-indigo-700">테마:</span> 그리스 신화</p>
            </div>
            <div>
              <p><span className="font-semibold text-indigo-700">특징:</span> 신비적이고 초월적인 사운드</p>
              <p><span className="font-semibold text-indigo-700">평가:</span> Metamorfosi "Inferno" 수준의 감동</p>
              <p><span className="font-semibold text-indigo-700">자켓:</span> 핵전쟁 위협 경고 그림</p>
              <p><span className="font-semibold text-indigo-700">발매:</span> CD, 부틀렉 버전 존재</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-4 mb-6 border border-indigo-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div>
              <p className="font-semibold text-indigo-800">libero (김성우)</p>
              <p className="text-sm text-indigo-600">swkim@rtcl.kaist.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">🎭 신화적 걸작 "Melos"</h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">레넌형님의 추억</h3>
              <p className="text-indigo-700 mb-3">
                옛날에 서울 개포동에 MetalLizzy라는 레코드 가게가 있었읍니다. 
                New Trolls의 "Concerto Grosso per I"까지 라이센스로 나오는 요즈음은 
                당시로서는 상상도 하기 힘든 상황이었고...
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-indigo-300">
                <p className="text-indigo-800 font-medium">
                  그때 녹음한 것중에 <strong>Cervello의 Melos</strong>가 있었읍니다. 
                  그때는 뉴 트롤즈, 무제오 로젠바하, 방코등에 뿅 가있었던 시절을 지나 
                  일 볼로, 맥소폰, 데릴리움등 심포니 록의 홍수속에 살던 때라...
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">재발견의 감동</h3>
              <p className="text-blue-700">
                처음 녹음해서 들을 때는 그다지 큰 매력을 느끼지 못했었읍니다... 
                그러나 그런 모든 외부요인 없이 들어보니 그 사운드만해도 엄청 훌륭하다는 걸 새로 깨닫겠어요.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">🎸 Corrado Rustici의 기타 연주</h2>
          
          <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-lg border-l-4 border-indigo-500 mb-6">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">이탈리아 록 기타리스트 대열전</h3>
            <p className="text-indigo-700 mb-4">
              73년에 그리스신화를 다룬 "Melos"라는 고상하면서도 신비적인 앨범에서 
              독특한 기타연주를 보여준 바 있던 Corrado Rustici는 이태리 록 기타리스트로서는 
              흔치않은 얼티네이트 피킹과 변칙적인 음계를 구사해 색다른 맛의 이지적인 연주세계를 개척하였다.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">주요 트랙별 연주 특징</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• <strong>'Canto Del Capro'</strong> - 헨드릭스적인 접근</li>
                <li>• <strong>'Trittico'</strong> - 하모닉스 음량과 반음계를 활용한 소주, 16분 속도의 4잇단 리듬</li>
                <li>• <strong>'Scinsicne(T.R.M)'</strong> - 존 멕클라플린적인 스케일 어프로치</li>
                <li>• <strong>'Melos'</strong> - 벤딩을 활용한 속주 프레이즈</li>
                <li>• <strong>'Euterpe'</strong> - 멜로디컬한 부분을 반음으로 배치하여 긴박감 연출</li>
                <li>• <strong>'Galassia'</strong> - 알 디 메올라의 뮤트 피킹 프레이즈 구사</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">연주 스타일의 특징</h3>
              <p className="text-blue-700">
                헤머링과 풀링에 의한 레가토 프레이즈와 얼니테이트 피킹 모두들 날카로운 감각으로 순발력있게 이용 
                비세속적인 음형의 세계를 구축했던 기타리스트로서 클래시컬한 작품과 프리재즈적 감각 
                거기에 헨드릭스적인 하드록 필 등을 배합 환상적인 이미지와 시적 영상미 그리고 
                주술성을 내포한 신비감을 만들어 내었다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">🌟 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">초월적 매력</h3>
              <p className="text-indigo-700">
                웅장하다거나 감미롭다는 식의 일차적인 느낌이 아니라 
                <strong>뭔가 다른 세계를 노래하는듯한 초월적인 매력</strong>입니다. 
                그렇다고 음악 어법이 전위적이라거나 한건 아닙니다.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">이탈리안 록의 특징</h3>
              <p className="text-blue-700 mb-3">
                이탈리안 록의 커다란 특징이자 매력이 되고 있는 것이 앨범의 내용이지요. 
                신화, 종교적인 묘사, SF적인 요소들에 의한 컨셉트 앨범이 드물지 않고...
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-blue-300">
                <p className="text-blue-800 font-medium">
                  이 Melos도 <strong>신화에서 따온 내용을 가지고 있읍니다. 목양신이 어쩌고...</strong> 
                  히히 사실 가사를 알아듣는게 아니니 내용은 우리에게 별로 큰 의미는 없지요.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">사운드의 특성</h3>
              <p className="text-indigo-700">
                무시무시하고, 박진감 넘치고, 날카롭고, 카리스마적이군요. 
                New Trolls와 관련있다는 기억이 어렴풋이...
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">💿 앨범 정보</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">발매 정보</h3>
              <ul className="space-y-2 text-indigo-700">
                <li>• <strong>발매년:</strong> 1973년</li>
                <li>• <strong>테마:</strong> 그리스 신화</li>
                <li>• <strong>자켓:</strong> 핵전쟁의 위협을 경고하는 그림</li>
                <li>• <strong>구매 가능:</strong> CD, 부틀렉 버전</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">구매 정보</h3>
              <p className="text-blue-700 mb-2">
                이 음반은 가끔 CD가 보이기도 하고, 빽판으로도 나왔읍니다. 
                지금도 구할 수 있는지는 잘 모르겠지만 장안 레코드나 그 주변 가게들을 잘 뒤져보시기 바랍니다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-blue-300">
                <p className="text-blue-800 font-medium">
                  어쩌면 라이센스가 나올지도 모르니깐 좀 기다리시던지. 
                  <strong>Metamorfosi의 Inferno정도의 감동은 될거예요.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-6">👥 매니아들의 반응</h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">초심자의 경험</h3>
              <p className="text-indigo-700">
                "저도 작년에 Cervello(?)의 Melos판을 빽판으로 구해서 드러보았습니다. 
                역시 좋은 앨범입니다... 제 경우엔...한번 들어서는 잘 모르겠더군요.... 
                여러번 들은 지금은 제가 아끼는 판 중의 하나입니다. :):)"
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">부틀렉 가게의 추억</h3>
              <p className="text-blue-700">
                "그렇게 빽판가게를 뒤지는 것이 얼마나 흥미진진힌 일인지... 
                거기서 제 청춘이 꽤나 지나갔지요...."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 mb-8 border border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-800 mb-4">🎭 Cervello "Melos"의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-indigo-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 그리스 신화를 다룬 컨셉트</li>
                <li>• 초월적이고 신비적인 사운드</li>
                <li>• Corrado Rustici의 독특한 기타 연주</li>
                <li>• 헨드릭스적 + 맥클라플린적 접근</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">역사적 의의:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 1973년 이탈리아 프로그레시브 명작</li>
                <li>• Metamorfosi "Inferno" 수준의 감동</li>
                <li>• 한국 매니아들의 숨겨진 애장품</li>
                <li>• 부틀렉 시대의 전설적 앨범</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">🔍 추천사항</h3>
          <p className="text-yellow-700">
            여러번 들어야 그 진가를 알 수 있는 앨범입니다. 
            처음에는 그다지 큰 매력을 느끼지 못할 수 있지만, 
            <strong>반복 청취를 통해 "뭔가 다른 세계를 노래하는듯한 초월적인 매력"</strong>을 
            발견할 수 있을 것입니다.
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-indigo-600 text-sm">
            14/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 