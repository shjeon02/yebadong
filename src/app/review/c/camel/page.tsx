import Link from 'next/link';

export default function CamelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-800 mb-2">Camel</h1>
          <p className="text-lg text-emerald-600">영국의 프로그레시브 록 전설</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-emerald-500">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-emerald-700">국가:</span> 영국</p>
              <p><span className="font-semibold text-emerald-700">장르:</span> Progressive Rock</p>
              <p><span className="font-semibold text-emerald-700">핵심 멤버:</span> Andrew Latimer (기타, 보컬)</p>
            </div>
            <div>
              <p><span className="font-semibold text-emerald-700">활동 시기:</span> 1970년대~현재</p>
              <p><span className="font-semibold text-emerald-700">특징:</span> 낙타 커버 아트</p>
              <p><span className="font-semibold text-emerald-700">명작:</span> Snow Goose, Mirage</p>
            </div>
          </div>
        </div>

        {/* 앨범 리뷰들 */}
        <div className="space-y-6">
          {/* Harbour of Tears 리뷰 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-emerald-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">이</span>
              </div>
              <div>
                <p className="font-semibold text-emerald-800">meddle (이동훈)</p>
                <p className="text-sm text-emerald-600">meddle@nuri.net</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-emerald-800">Harbour of Tears (눈물의 항구?)</h3>
              <p className="text-sm text-emerald-600">캐멀의 마지막 스튜디오 앨범</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                캐멀의 마지막 스튜디오 앨범인데요... 아마도 올해 크리스마스나 내년에 라이브 앨범이 
                나올것 같고요. 곧 이어 스튜디오 앨범 작업 계획도 있다고 하더군요. 하지만 구체적인 
                일정이 잡힌것은 아니라고 합니다.
              </p>

              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                <h4 className="font-semibold text-emerald-800 mb-2">개인적 평가</h4>
                <p>
                  본론으로 들어가서 본 앨범, 눈물의 항구는 트롯트와는 전혀 상관없는 아주 우아한 사운드를 
                  들려줍니다. 개인적인 생각으로는 <strong>Snow Goose 이후의 최고작</strong>이라고 
                  평가하고 싶은데... 아마도 많은 분들이 반대를 하실것 같군요. ^^;
                </p>
              </div>

              <p>
                제가 이 앨범에서 이렇게 큰 매력을 느낀 이유는 앤드류의 기타가 거의 
                <strong>데이빗 길모어와 비슷하다</strong>는 거죠. 그리고 아름다운 가사 
                (왜냐하면 상당히 이해하기 쉽기때문 ^^;) 전체적으로 키보드와, 하지만 범람하지 않는, 
                울고있는 기타, 코러스, 스트링 오케스트레이션이 완벽한 조화를 이루었다고 생각합니다.
              </p>

              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                <h4 className="font-semibold text-teal-800 mb-2">곡 분석</h4>
                <p>
                  첫곡은 Irish Air 인데... 풀사의 할로윈에서 들을 수 있었던 아름다운 스켓을 다시 들을 수 있죠. 
                  하지만 할로윈보다는 성숙된 이미지입니다. 캐멀답게 인스트루멘탈이 상당 부분을 차지해서 
                  듣기에 매우 편하고, 중반기의 누드 앨범을 연상케도 하죠.
                </p>
              </div>

              <p className="font-semibold text-emerald-800">
                한번 들어봐야할 '90년대 아트록의 걸작중 하나입니다. :)
              </p>
            </div>
          </div>

          {/* Breathless 리뷰 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">박</span>
              </div>
              <div>
                <p className="font-semibold text-teal-800">박준식</p>
                <p className="text-sm text-teal-600">xanadu@postech.ac.kr</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-teal-800">Breathless</h3>
              <p className="text-sm text-teal-600">중기 Camel의 대표작</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Camel의 Breathless는 사실 그들의 다른 작품들과 비교할때 그다지 뛰어난 작품같지는 않아요... 
                물론 그들의 뛰어난 곡인 <strong>Echoes</strong>가 수록되어있기는 하지만 그 외의 곡들은 
                다소 어정쩡한 분위기의 작품이라는 것이 저의 생각입니다.
              </p>

              <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
                <h4 className="font-semibold text-teal-800 mb-2">주요 곡들</h4>
                <ul className="space-y-2">
                  <li><strong>Echoes:</strong> 연주나 vocal 등이 매우 훌륭한 중기 Camel의 대표적인 명곡</li>
                  <li><strong>Rainbow's End:</strong> 개인적으로 좋아하는 곡이지만 고음역에서 vocal이 다소 불안</li>
                  <li><strong>Breathless (타이틀곡):</strong> 밝은 느낌의 발라드, 매우 가벼운 느낌의 부담없는 곡</li>
                  <li><strong>Down on the Farm:</strong> 유일하게 Latimer가 작곡에 참여하지 않은 Richard Sinclair의 곡</li>
                </ul>
              </div>

              <p>
                실제로 이 앨범에도 순수 연주곡은 The Sleeper 한곡밖에 없고 나머지는 모두 vocal이 있습니다. 
                예전에 이 앨범을 CD로 구하기가 힘들던 때에는 간신히 구한 이 작품을 그래도 열심히 들었었는데 
                요즘은 거의 손이가지 않아서 나머지곡들은 기억조차 잘 나질않는군요...
              </p>
            </div>
          </div>

          {/* Rajaz 리뷰 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-emerald-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">박</span>
              </div>
              <div>
                <p className="font-semibold text-emerald-800">박준식</p>
                <p className="text-sm text-emerald-600">xanadu@postech.ac.kr - 졸업논문 완성!</p>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-emerald-800">Rajaz</h3>
              <p className="text-sm text-emerald-600">90년대 후기 카멜의 역작</p>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">앨범 정보</h4>
                <p>
                  개인적으로 70년대에 '한 슈퍼' 했다는 친구들의 90년대 활동중 가장 실망스럽지 않은 팀이 
                  바로 카멜이었습니다. Dust & Dream이나 Harbour of Tears 등의 작업이 예전의 카멜 분위기와는 
                  상당히 다른 부분이 없지는 않지만 그 사이사이에 깔린 연주들은 상당히 만족스러웠습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-emerald-50 p-3 rounded border-l-2 border-emerald-300">
                  <h5 className="font-semibold text-emerald-800">참여 멤버</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Andrew Latimer (기타, 보컬, 플루트, 키보드, 타악기)</li>
                    <li>• Colin Bass (베이스)</li>
                    <li>• Dave Stewart (드럼)</li>
                    <li>• Ton Scherpenzeel (키보드) - Kayak 출신!</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-3 rounded border-l-2 border-emerald-300">
                  <h5 className="font-semibold text-emerald-800">트랙 리스트</h5>
                  <ul className="text-sm space-y-1">
                    <li>1. Three Wishes</li>
                    <li>2. Lost & Found</li>
                    <li>3. The Final Encore</li>
                    <li>4. Rajaz</li>
                    <li>5. Shout</li>
                    <li>6. Straight to My Heart</li>
                    <li>7. Sahara</li>
                    <li>8. Lawrence</li>
                  </ul>
                </div>
              </div>

              <p>
                전체적인 분위기는 중기 카멜의 스타일에 가장 가깝다고 생각됩니다. 많은 부분에서 
                Rain Dance나 Stationary Traveller, Nude 등의 연주가 떠오르네요. 
                D&D나 HoT에서 보여줬던 다소간 침잠한 분위기는 아닙니다.
              </p>

              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-amber-800 mb-2">주요 곡 분석</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Three Wishes:</strong> 데이빗과 친구들의 핑플 신곡 같은 분위기로 시작, 
                    중반부터 전형적인 카멜 연주
                  </div>
                  <div>
                    <strong>Sahara:</strong> Nude에서의 앤드류 기타를 좋아하는 분들이 좋아할 곡, 
                    중반 이후의 기타와 플루트 연주가 탁월
                  </div>
                  <div>
                    <strong>Lawrence:</strong> 약 20여년만에 처음으로 만든 10분이 넘는 대곡, 
                    계속적인 장면전환으로 곡을 이끌어가는 걸작
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lady Fantasy 버전들 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-teal-400">
          <h3 className="text-xl font-bold text-teal-800 mb-4">🎵 Lady Fantasy의 다양한 버전들</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">공식 발매 버전들:</h4>
              <ul className="space-y-1 text-teal-600">
                <li>1. Mirage (스튜디오 버전)</li>
                <li>2. Live Record (라이브 버전)</li>
                <li>3. Pressure Point Video</li>
                <li>4. Never Let Go Live</li>
                <li>5. Camel On The Road 72</li>
                <li>6. Gods of Light 73-75</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">특징:</h4>
              <p className="text-teal-600">
                Camel의 가장 많이 반복 수록된 곡으로, 각 버전마다 다른 라인업과 
                연주 스타일을 보여주는 대표곡입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 특징 요약 */}
        <div className="bg-emerald-50 rounded-lg p-6 mb-8 border border-emerald-200">
          <h3 className="text-xl font-bold text-emerald-800 mb-4">🐪 Camel의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-emerald-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특징:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Andrew Latimer의 David Gilmour 스타일 기타</li>
                <li>• 인스트루멘탈 중심의 프로그레시브 록</li>
                <li>• 우아하고 서정적인 사운드</li>
                <li>• 키보드와 기타의 완벽한 조화</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">90년대 활동:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 70년대 전설들 중 가장 실망스럽지 않은 팀</li>
                <li>• 지속적인 고품질 앨범 발매</li>
                <li>• 공식 해적판 라이브 앨범들</li>
                <li>• 팬서비스 차원의 다양한 발매</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-emerald-600 text-sm">
            4/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 