import Link from "next/link";

export default function Asia() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Asia</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-lg">영국의 슈퍼그룹 - 1980년대 프로그레시브 록의 상업적 성공</p>
            <p className="text-sm text-gray-600 mt-2">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-semibold mb-3 text-blue-700">밴드 개요</h3>
            <div className="space-y-4 text-sm">
              <p>Asia는 영국의 슈퍼그룹으로, 1980년대 초에 결성되어 동명의 데뷔 앨범 "Asia"로 큰 성공을 거두었습니다. 이 밴드는 멜로딕 록과 프로그레시브 록의 조화가 특징입니다.</p>
              
              <p>프로그레시브 록 명문 밴드들의 멤버들이 모여 결성된 슈퍼그룹으로, 1980년대 MTV 시대에 맞는 상업적으로 성공한 프로그레시브 록을 선보였습니다.</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-semibold mb-3 text-yellow-700">멤버 구성 (오리지널 라인업)</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <div className="grid grid-cols-1 gap-3">
                  <div className="border-l-4 border-yellow-300 pl-3">
                    <p className="font-semibold text-yellow-600">John Wetton</p>
                    <p className="text-xs text-gray-600">보컬, 베이스 (전 King Crimson, UK)</p>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-3">
                    <p className="font-semibold text-blue-600">Steve Howe</p>
                    <p className="text-xs text-gray-600">기타 (전 Yes)</p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-3">
                    <p className="font-semibold text-green-600">Geoff Downes</p>
                    <p className="text-xs text-gray-600">키보드 (전 Yes, Buggles)</p>
                  </div>
                  <div className="border-l-4 border-red-300 pl-3">
                    <p className="font-semibold text-red-600">Carl Palmer</p>
                    <p className="text-xs text-gray-600">드럼 (전 Emerson, Lake & Palmer)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <p className="text-xs">각자 프로그레시브 록의 전설적인 밴드에서 활동했던 거물급 뮤지션들이 모인 진정한 슈퍼그룹이었습니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold mb-3 text-green-700">대표 앨범과 곡들</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-3">Asia (1982) - 데뷔 앨범</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-semibold text-green-600 mb-2">대표곡들</p>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>Heat of the Moment</strong> - 최대 히트곡, MTV를 통해 널리 알려짐</li>
                      <li>• <strong>Only Time Will Tell</strong> - 멜로딕한 발라드 스타일</li>
                      <li>• <strong>Sole Survivor</strong> - 프로그레시브한 구성미</li>
                      <li>• <strong>Wildest Dreams</strong> - 상업적 어필이 강한 곡</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded border-l-4 border-green-300">
                    <p className="text-xs">이 앨범은 1982년 빌보드 앨범 차트 1위를 기록하며 상업적으로 큰 성공을 거두었습니다. 프로그레시브 록이 대중적으로 어필할 수 있음을 보여준 기념비적 작품입니다.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">Alpha (1983) - 2집</h4>
                <p className="text-xs">데뷔작의 성공을 이어가려 했으나 상대적으로 아쉬운 평가를 받은 앨범. 그러나 여전히 Asia만의 멜로딕한 사운드를 들을 수 있는 작품입니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold mb-3 text-purple-700">음악적 특징과 의미</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-3">사운드 특색</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600">•</span>
                    <span>프로그레시브 록의 복잡함을 대중적으로 소화</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600">•</span>
                    <span>강력한 멜로디와 후크가 있는 곡 구성</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600">•</span>
                    <span>MTV 시대에 맞는 비주얼적 어필</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600">•</span>
                    <span>각 멤버의 개성이 조화롭게 결합된 사운드</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-300">
                <h4 className="font-semibold text-purple-600 mb-2">음악사적 의미</h4>
                <p className="text-xs">Asia는 1980년대 초반 프로그레시브 록이 상업적 성공을 거둘 수 있음을 증명한 중요한 밴드입니다. 복잡하고 실험적이었던 1970년대 프로그레시브 록을 보다 접근하기 쉬운 형태로 발전시켜, 새로운 세대의 리스너들에게 프로그레시브 록을 소개하는 역할을 했습니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold mb-3 text-orange-700">평가와 추천</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-4 rounded">
                <h4 className="font-semibold text-orange-600 mb-2">추천 포인트</h4>
                <ul className="text-xs space-y-1">
                  <li>• 멜로딕 록을 좋아하는 분들에게 강력 추천</li>
                  <li>• 프로그레시브 록 입문자에게 적합</li>
                  <li>• 1980년대 록 음악의 흐름을 이해하고 싶은 분</li>
                  <li>• Yes, King Crimson, ELP 팬들의 필청 앨범</li>
                  <li>• MTV 시대 록 음악의 변화를 느끼고 싶은 분</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded border-l-4 border-orange-300">
                <p className="text-xs italic">비록 순수 프로그레시브 록 팬들에게는 '상업적'이라는 비판을 받기도 했지만, 뛰어난 연주력과 멜로디, 그리고 각 멤버들의 개성이 잘 어우러진 수작으로 평가받고 있습니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 