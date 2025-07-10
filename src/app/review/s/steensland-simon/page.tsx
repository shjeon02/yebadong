"use client"

import Link from 'next/link';

export default function SimonSteenslandPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Simon Steensland</h1>
          <p className="text-lg text-gray-600">The Simon Lonesome Combat Ensemble (1994)</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>아티스트:</strong> Simon Steensland</p>
              <p><strong>앨범:</strong> The Simon Lonesome Combat Ensemble</p>
              <p><strong>발매년:</strong> 1994</p>
              <p><strong>레이블:</strong> Musea (MP3013.AR)</p>
            </div>
            <div>
              <p><strong>국가:</strong> 스웨덴</p>
              <p><strong>장르:</strong> 프로그레시브/실험적</p>
              <p><strong>타입:</strong> 다중 악기 주자</p>
              <p><strong>주 악기:</strong> 드럼, 신디사이저</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Orkman (장민수) - jangms@mobi.etri.re.kr
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>--- Prog Albums Of 1994, by orkman ---</strong>
          </p>
        </div>

        {/* 앨범 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 리뷰</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              또하나의 스웨덴 출신 음악인. 그리고 좋은 앨범. :-)
            </p>
            <p className="text-gray-700 mb-4">
              Simon Steensland는 드럼과 신디사이저를 주로 연주하는 다중 악기 주자로서 본 앨범은 
              그의 데뷔작이다. 본 앨범에서 Simon은 매우 다양한 형태의 음악들을 들려주는데 
              그의 앨범을 듣는 동안 UZ, Richard Pinhas, Steve Moore, Zamla, B. Paganotti 등을 
              떠올릴 수 있었다.
            </p>
            <p className="text-gray-700 mb-4">
              특히 Daniel Denis의 영향을 받은 듯한 Simon의 드럼 연주와 다양한 신디사이저 음향이 
              연출하는 역동적인 음악들이 귀를 사로잡는데, UZ의 음악에서 드러나는 어둡고 
              드라마틱한 곡전개가 돋보인다.
            </p>
            <p className="text-gray-700 mb-4">
              이러한 역동적인 곡들 외에도 Simon은 실험적인 신디사이저 솔로곡들과 한곡의 
              현악 5중주곡을 선사하고 있기도 하다.
            </p>
          </div>
        </div>

        {/* 특별 트랙 - Nightingirl */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">특별 트랙: "Nightingirl"</h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Zeuhl 팬들을 위한 선물</h3>
            <p className="text-gray-700 mb-3">
              그리고, 앨범의 다섯번째 곡인 <strong>Nightingirl</strong>은 Zeuhl 팬들을 위한 선물이다. 
              Simon의 퍼즈 베이스 연주는 바로 빠가노띠의 소리를 거칠게 뿜어내고 있기 때문이다.
            </p>
            <div className="bg-purple-100 p-3 rounded">
              <p className="text-purple-800 font-semibold">
                "거기에 전기톱 소리까지 곁들인다면 어떻겠는가?! :-) Pure Joy!"
              </p>
              <p className="text-xs text-purple-600 mt-1">- Orkman의 열정적인 반응</p>
            </div>
          </div>
        </div>

        {/* 음악적 특징 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 특징</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">다양한 음악적 실험</h3>
              <p className="text-gray-700">
                Simon은 부분적으로 몇몇 연주인들(첼로, 기타, 전기톱 등)을 초대하고 갖가지 악기들을 
                적절히 활용하여 사운드의 다양성을 꾀하고, 또 자신의 음악적 아이디어를 폭넓게 
                실험함으로써 본 앨범을 아주 매력적인 것으로 만들어 냈다.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">녹음 환경</h3>
              <p className="text-gray-700">
                이 앨범의 녹음 작업은 DAT 2대와 8트랙 미니 믹서로 이루어졌는데(자가 녹음 인듯), 
                이점도 개인적으로 이 앨범에 대해 호감을 갖게된 원인들 중 하나이다. 
                (물론 그때문에 음의 스케일감이나 섬세함은 부족하다.)
              </p>
            </div>
          </div>
        </div>

        {/* 음악적 영향 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 영향</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">UZ (Univers Zero)</h3>
              <p className="text-sm text-gray-600">
                어둡고 드라마틱한 곡전개
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Daniel Denis</h3>
              <p className="text-sm text-gray-600">
                드럼 연주에 영향
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Richard Pinhas</h3>
              <p className="text-sm text-gray-600">
                실험적 신디사이저 사운드
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">B. Paganotti</h3>
              <p className="text-sm text-gray-600">
                퍼즈 베이스 사운드
              </p>
            </div>
          </div>
        </div>

        {/* 추천 대상 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">추천 대상</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">특별한 청취자들을 위한 앨범</h3>
            <p className="text-gray-700 mb-3">
              <strong>UZ/Daniel Denis/Zeuhl/RIO 팬들</strong>이 즐거이 들을 수 있는, 
              <strong>Twist & Turn & Surprise</strong>로 가득찬 앨범이다.
            </p>
            <div className="bg-yellow-100 p-3 rounded">
              <p className="text-sm font-semibold text-yellow-800">추천 대상:</p>
              <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                <li>• Univers Zero 팬</li>
                <li>• Daniel Denis 팬</li>
                <li>• Zeuhl 운동 애호가</li>
                <li>• RIO (Rock in Opposition) 팬</li>
                <li>• 실험적 프로그레시브 록 애호가</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 링크</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/review/s" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              S 목록으로 돌아가기
            </Link>
            <Link href="/review" className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 