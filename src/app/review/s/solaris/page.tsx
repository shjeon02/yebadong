import Image from "next/image";

export default function SolarisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solaris
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              헝가리 스페이스 록의 진수 - 화성 연대기
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 정보</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-300">앨범:</span>
                    <p className="text-white">Marsbeli Kronikak (The Martian Chronicles)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">발매년:</span>
                    <p className="text-white">1984</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">레이블:</span>
                    <p className="text-white">Start</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">장르:</span>
                    <p className="text-white">Space Rock, Progressive Rock</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">구성:</span>
                    <p className="text-white">5인조 (신디사이저 3명!)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">러닝타임:</span>
                    <p className="text-white">약 50분</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-purple-400">밴드 멤버</h2>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-300">Cziglan Istvan:</span> Electric Guitar, Synthesizer</p>
                  <p><span className="font-semibold text-gray-300">Erdesz Robert:</span> Keyboard, Synthesizer</p>
                  <p><span className="font-semibold text-gray-300">Gomor Laszlo:</span> Drums</p>
                  <p><span className="font-semibold text-gray-300">Kollar Atilla:</span> Flute, Synthesizer, Vocal</p>
                  <p><span className="font-semibold text-gray-300">Pocs Tamas:</span> Bass Guitar</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-400">평가 점수</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-gray-300">80년대 프로그레시브 록 명반</p>
                </div>
              </div>
            </div>
          </div>

          {/* Track Listing */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">트랙 리스트</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Side A</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">1.</span> Marsbeli Kronikak Pt.I (3:31)</p>
                  <p><span className="font-semibold">2.</span> Marsbeli Kronikak Pt.II ~ III (6:34)</p>
                  <p><span className="font-semibold">3.</span> Marsbeli Kronikak Pt.IV ~ VI (13:18)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-cyan-400">Side B</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">1.</span> Mars Poetica (6:40)</p>
                  <p><span className="font-semibold">2.</span> Ha Felszall A Kod (3:59)</p>
                  <p><span className="font-semibold">3.</span> Apokalipszis (3:44)</p>
                  <p><span className="font-semibold">4.</span> E-moll Elojatek (0:30)</p>
                  <p><span className="font-semibold">5.</span> Legyozhetetlen (2:45)</p>
                  <p><span className="font-semibold">6.</span> Solaris (4:57)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nostradamus Concept */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">노스트라다무스 - 또 다른 관점</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                리뷰어는 이 앨범을 소개하면서 흥미롭게도 노스트라다무스의 예언을 연결하여 설명합니다. 
                SF 소설 '화성 연대기'를 테마로 한 이 앨범의 각 트랙을 노스트라다무스의 예언과 연결지어 해석했습니다.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">예언과 음악의 만남</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <span className="font-semibold">Wings of the Phoenix - Hisler:</span> 히틀러와 적그리스도 예언</li>
                  <li>• <span className="font-semibold">1999 - Ship of Darkness:</span> 1999년 8월 11일 개기일식</li>
                  <li>• <span className="font-semibold">Wargames - The Third Antichrist:</span> 동양에서 나올 세 번째 적그리스도</li>
                  <li>• <span className="font-semibold">The Moment of Truth I & II:</span> 마지막 시</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Reviews */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">상세 리뷰</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">전체적인 특징</h3>
                <p className="text-gray-300 mb-4">
                  프로그레시브 록이 거의 퇴조한 1984년에 발표된 이 앨범은 SF 소설의 고전인 '화성 연대기'를 테마로 한 컨셉트 앨범입니다. 
                  총 5인조 구성에서 신디사이저 주자가 3명이나 있어 그 어느 동구권 그룹보다도 화려하고 다이나믹한 사운드를 들려줍니다.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">음악적 특징</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <span className="font-semibold">인스트루멘탈 앨범:</span> 거의 모든 곡이 보컬 없이 연주됨</li>
                  <li>• <span className="font-semibold">플룻과 신디사이저:</span> 두 악기의 절묘한 하모니가 환상적</li>
                  <li>• <span className="font-semibold">3대의 신디사이저:</span> 화려한 스페이스 사운드의 핵심</li>
                  <li>• <span className="font-semibold">클래시컬 아름다움:</span> 강렬한 하드록적 요소와 적절한 융화</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">하이라이트 트랙들</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <span className="font-semibold text-pink-400">Marsbeli Kronikak Pt.I:</span> 
                    장엄하고 화려한 신디사이저 연주, 화성인의 웃음소리와 목소리 삽입
                  </div>
                  <div>
                    <span className="font-semibold text-pink-400">Marsbeli Kronikak Pt.IV~VI:</span> 
                    13분 대곡, 플룻과 신디사이저의 대전쟁, 세 개의 멜로디 라인
                  </div>
                  <div>
                    <span className="font-semibold text-pink-400">Mars Poetica:</span> 
                    가장 드라마틱한 곡전개, 웅장하고 다이나믹한 신디사이저 연주
                  </div>
                  <div>
                    <span className="font-semibold text-pink-400">Solaris:</span> 
                    그룹송, 혹성 솔라리스 주제, 치밀한 구성과 우아한 아름다움
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Notes */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">특별 기록</h2>
            <div className="bg-red-900 bg-opacity-50 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2 text-red-400">창단 멤버의 비극</h3>
              <p className="text-gray-300">
                1998년 12월 27일 새벽, Solaris의 창단 멤버이자 기타리스트인 Cziglan Istvan이 갑작스런 죽음을 맞이했습니다.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">후속 앨범</h3>
              <p className="text-gray-300">
                약 5년간의 공백 후 1990년 Pepita 레이블에서 더블 앨범 「1990」을 발표했으나, 
                본작만큼 뛰어난 음악을 들려주지는 못했습니다.
              </p>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">최종 평가</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 mb-4">
                "이 앨범은 전체적으로 약간은 가벼운 느낌이 들긴 하다. 그리고 연주력 또한 대단히 뛰어나다고 할 수도 없다. 
                하지만 그 구성력이나 완성도로 볼 때 이 작품은 분명히 명반의 대열에 끼어도 손색이 없다고 생각된다."
              </p>
              <p className="text-gray-200">
                <span className="font-semibold text-yellow-400">화성 연대기... 스페이스 록 팬들에게는 필청의 앨범이다.</span>
              </p>
            </div>
          </div>

          {/* Review Credits */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">리뷰 크레딧</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">리뷰어:</span> 유영재 (espiritu@hitel.net)</p>
              <p><span className="font-semibold">평점:</span> 93.13</p>
              <p><span className="font-semibold">특징:</span> 동구권 프로그레시브 록의 걸작, 스페이스 록 명반</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <a 
              href="/review/s/sindelfingen" 
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ← Sindelfingen
            </a>
            <a 
              href="/review/s" 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S 목록으로
            </a>
            <a 
              href="/review/s/soluna" 
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Soluna →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 