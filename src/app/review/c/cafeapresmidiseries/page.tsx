import Link from 'next/link';

export default function CafeApresMidiSeriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">Cafe Apres Midi Series</h1>
          <p className="text-lg text-amber-600">일본의 Free Soul 컴필레이션 시리즈</p>
        </div>

        {/* 시리즈 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">시리즈 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-amber-700">기획자:</span> 橋本徹 (하시모토 토루)</p>
              <p><span className="font-semibold text-amber-700">장르:</span> Free Soul, 라운지, 카페 뮤직</p>
              <p><span className="font-semibold text-amber-700">시작:</span> 2000년 7월</p>
            </div>
            <div>
              <p><span className="font-semibold text-amber-700">컨셉:</span> 오후의 커피와 함께 듣는 음악</p>
              <p><span className="font-semibold text-amber-700">수록시간:</span> 70분</p>
              <p><span className="font-semibold text-amber-700">특징:</span> 넉넉한 할아버지, 할머니 얼굴 커버</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">동</span>
            </div>
            <div>
              <p className="font-semibold text-amber-800">동훈</p>
              <p className="text-sm text-amber-600">Free Soul 애호가</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">오후의 커피와 함께하는 음악</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              제가 요즘 가장 많은 관심을 가진 음악(음반들)은 cafe apres midi series인데요~ 
              이 시리즈는 free soul 컴필레이션 시리즈로 유명해진 일본의 음악 매니아이자 
              cafe apres-midi(뜻은 오후의 커피라네요~ 아웅~ ^^*) 라는 카페의 경영자인 
              橋本徹 씨가 전적으로 선곡을 담당하고 있습니다.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-semibold text-amber-800 mb-2">시리즈 컨셉</h3>
              <p>
                언젠가 들어보았으나 어떠한 곡인지 알 수 없어 음반으로는 구하지 못했던 말 그대로 
                햇살이 비추는 카페에서 '오후의 커피'를 마시며 들을 수 있는 편안한 음악이 70분 동안 
                빡빡하게 실린 매우 알찬 컴필입니다.
              </p>
            </div>

            <p>
              주로 브라질의 삼바, 보사노바, MPB와 프랑스의 샹송과 파스텔톤의 팝 음악, 
              어소시에이션을 비롯한 소프트 록, 재즈(아마 도시적인?), 50~60년대의 영미 팝의 
              스탠다드 보컬 넘버들, 구닥다리 영화 음악들, 소울 음악 등등등 범위는 넓지만 
              부담없이 즐길 수 있는 음악들이 위주입니다.
            </p>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">컴필레이션의 장점</h3>
              <p>
                정말 filler가 없는 (물론 취향에 따라 다르겠지만) 컴필이라 70분 동안 흐뭇한 미소를 지으며 들을 수 있고... 
                CD나 LP로 절판된 음반들의 음원을 들을 수 있고, 특히 flawless하지 않은, 몇몇 곡들만 좋은 음반들의 
                주옥같은 명곡들만 쪽쪽 뽑아내서 만들었기 때문에 괜히 어설픈 음반 하나 사는 것보다는 훨 낫죠.
              </p>
            </div>
          </div>
        </div>

        {/* 앨범 시리즈 목록 */}
        <div className="space-y-6">
          {/* Original Series */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-4">📀 Original Series (16장)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700">
              <div>
                <p className="font-semibold mb-2">2000-2001년 발매:</p>
                <ul className="space-y-1">
                  <li>• Fume (pocy-1005)</li>
                  <li>• Ecru (tocp-65463)</li>
                  <li>• Marine (bvcm-31059)</li>
                  <li>• Palme (wpcr-10871)</li>
                  <li>• Olive (pocy-1006)</li>
                  <li>• Nacre (tocp-65677)</li>
                  <li>• Roux (wpcr-10694)</li>
                  <li>• Rose (srcs-2313)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">2000-2001년 발매 (계속):</p>
                <ul className="space-y-1">
                  <li>• Tuile (vicp-61115)</li>
                  <li>• Safran (King Record, 2000/12/21)</li>
                  <li>• Rouge (uicy-4021)</li>
                  <li>• Prune (uicy-4022)</li>
                  <li>• Azur (srcs-2476)</li>
                  <li>• Vigogno (pccy-01520)</li>
                  <li>• Pastille (vicp-61674)</li>
                  <li>• Souris (tocp-65944) - 최신작</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded border-l-2 border-amber-300">
              <p className="italic text-amber-800">
                서구의 '넉넉'하게 생기신 할아버지, 할머니 얼굴을 원색으로 처리한 *예쁜* 커버가 특징. 
                2000년 7월에 시작되어 2001년 2월 27일 도시바 EMI에서 나오는 souris가 가장 최신작.
              </p>
            </div>
          </div>

          {/* 번외편 시리즈 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-amber-800 mb-4">🎵 번외편 시리즈 (7장)</h3>
            <div className="space-y-3 text-amber-700">
              <div>
                <p className="font-semibold">특별 선곡집:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Clementine 선곡집 (srcs-8958)</li>
                  <li>Clementine 선곡집 2 (srcs-2503)</li>
                  <li>Crepuscule (vicp-61558)</li>
                  <li>Crepuscule 2 (vicp-61723)</li>
                  <li>Saravah (omcx-1071)</li>
                  <li>Saravah 2 (omcx-1074)</li>
                  <li>Compost (aict-179)</li>
                </ul>
                <p className="text-sm italic mt-2">유럽의 특정 음반사들의 음원을 담고 있다고 함</p>
              </div>
            </div>
          </div>

          {/* 아티스트 에디션 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-4">🌟 아티스트 에디션</h3>
            <div className="grid md:grid-cols-2 gap-4 text-amber-700">
              <div>
                <p><strong>Elis Regina Edition</strong></p>
                <p className="text-sm">엘리스 레지나의 유니버설, 도시바(Odeon) 베스트</p>
              </div>
              <div>
                <p><strong>Marcos Valle Edition</strong></p>
                <p className="text-sm">마르코스 발리의 유니버설, 도시바(Odeon) 베스트</p>
              </div>
            </div>
          </div>

          {/* 예정작 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-amber-800 mb-4">🔮 예정작 (당시 기준)</h3>
            <div className="space-y-2 text-amber-700">
              <ul className="list-disc list-inside space-y-1">
                <li>?? (uicy-4064) - 미정</li>
                <li>2001-2002 Winter (wpcr-11149)</li>
                <li>Kaji Hideki (uicy-4066)</li>
              </ul>
              <p className="text-sm italic mt-2">아직 어떤 성격의 음반들인지는 잘 모르겠네요.</p>
            </div>
          </div>
        </div>

        {/* 관련 링크 */}
        <div className="bg-amber-50 rounded-lg p-6 mt-8 border border-amber-200">
          <h3 className="text-xl font-bold text-amber-800 mb-4">🔗 관련 정보</h3>
          <div className="space-y-2 text-amber-700">
            <p><strong>신보 소개:</strong> www.usen.com/music/lifestyle/soundlife/cafestyle/001.html</p>
            <p><strong>커버 갤러리:</strong> www.usen440.com/cafe/</p>
            <p className="text-sm italic mt-4">
              음반들을 상세하게 설명한 정식 홈은 아직 없는 것 같고, 대신에 최근 발매된 앨범에 대한 
              짧은 코멘트가 붙은 신보 소개 코너가 있습니다.
            </p>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-amber-600 text-sm">
            1/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 