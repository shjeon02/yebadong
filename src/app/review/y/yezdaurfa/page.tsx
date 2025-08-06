import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yezda Urfa - 밴드 리뷰 | Yebadong',
  description: 'Yezda Urfa의 Sacred Baboon 앨범에 대한 상세한 리뷰',
};

export default function YezdaUrfaPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-orange-800">Yezda Urfa</h1>
          <p className="text-base text-gray-600">미국의 70년대 프로그레시브 록 그룹 Yezda Urfa</p>
        </div>

        <div className="space-y-8">
          {/* libero의 Sacred Baboon 리뷰 */}
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                libero (김성우)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-orange-800 mb-4">Yezda Urfa - "Sacred Baboon" (1976)</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                지브롤터 백과사전(http://www.ari.net/prog/GEPR/gepr.html)에서 progressive rock의 sub-genre를 찾거나, 
                Gentle Giant를 키워드로 찾아보면 꽤 많은 그룹이 나오는데, 그 중에서도 GG와 유사한 음악 스타일을 가진 그룹으로, 
                - 들어본 범위 내에서 - Dice(Sweden), Epidermis(Germany), Hinn Islenski Pursaflokkur(Iceland), 
                Gryphon(UK), Yezda Urfa(USA) 등을 - 순전히 제 기준에서 - 꼽을 수 있을 것 같습니다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">그룹 소개</h3>
                <p className="text-sm">
                  미국의 70년대 가장 훌륭한 prog. rock 그룹의 하나로 손꼽히는 - 사실, 다른 미국 그룹들도 많이 못 들어봤지만 - 
                  Yezda Urfa의 2번째이자 마지막 앨범인 "Sacred Baboon"(1976, reissued LP(1989) & CD(1992) by Synphonic) 에 대해 
                  간단히 소개드리겠습니다.
                </p>
                <p className="text-sm mt-2">
                  간단히 그룹을 설명하자면, 73년에 고등학교친구들을 중심으로 결성되었고, 몇몇 bar나 공연장 등을 전전하며 연주하였고, 
                  2장의 앨범을 발매하고 70년대 말에 해산한 Indiana출신의 5인조 밴드입니다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">멤버 구성</h3>
                <ul className="text-sm space-y-1">
                  <li><strong>Mark Tippins</strong> - guitar, vocal</li>
                  <li><strong>Brad Christoff</strong> - drum</li>
                  <li><strong>Phil Kimbrough</strong> - keyboard, vocal</li>
                  <li><strong>Marc Miller</strong> - bass, vocal</li>
                  <li><strong>Rick Rodenbaugh</strong> - lead vocal, guitar</li>
                </ul>
              </div>

              <p>
                이 앨범은 모두 7곡으로 구성되어 있는데, 몇몇곡은 1년전인 1975에 소량으로 자주제작 배포된 1집 "Boris"에 
                수록된 곡들을 편곡한 곡들입니다. 앨범 전체적으로, 뛰어난 연주력을 바탕으로, Yes, GG 등과 마찬가지로 
                끊임없이 변화하는 복잡한 곡구성과 각 악기 연주자간의 조화가 돋보이는 뛰어남을 보여주고 있습니다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">주요 트랙 분석</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>2. "Cancer of the Band" (6:48)</strong><br/>
                    <span className="text-gray-600">
                      양쪽귀를 간지럽히며 Phil이 연주하는 flute/recorder들 소리로 시작되는 곡으로, 클래식적인 연주와 
                      푸가적인 곡구성을 보여주는 것 같습니다.
                    </span>
                  </div>
                  <div>
                    <strong>3. "Tu-ta in the Moya" (10:14)</strong><br/>
                    <span className="text-gray-600">
                      elec. guitar, bass, vocal, mandolin, vibraphone, recorder 등이 총동원되어 곡을 지루하지 않게 
                      이끌어나가고 있으며, 후반부의 심포닉적인 합주는 일품입니다.
                    </span>
                  </div>
                  <div>
                    <strong>7. "3, Almost 4, 6, Yea" (8:39)</strong><br/>
                    <span className="text-gray-600">
                      시작부터 Yes와 유사한 느낌을 많이 받으며, 중반부의 작지만 거친 flute-acoustic guitar-cello-flute-vocal harmony으로 
                      차츰 합세해가는 연주는 짜릿한 감동을 줍니다.
                    </span>
                  </div>
                </div>
              </div>

              <p>
                GG와 유사한 뛰어난 보컬 하모니가 군데군데서 들리는가 하면, mandolin, cello, flute 등의 연주를 들을 수 있는가 하면 
                - GG와 마찬가지로 이 그룹의 멤버들도 multi-instrumentalist들임 -, 간간히 유치한 멜로디를 연주하는 유머스러움도 
                느끼실 수 있습니다.
              </p>

              <p>
                제게는 '이런 미국 밴드도 있구나!' 라고 느끼게 해 준 앨범이며, - 머리로 생각하면서 썼는데도 - 
                이런 장황한 설명보다는, 직접 느끼시길..
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">참고 정보</h3>
                <p className="text-sm">
                  이들의 베이시스트인 Marc Miller가 직접 만든 홈페이지<br/>
                  (http://www.swcp.com/~mmiller/yu/ytuhome.htm)를 참조하시길 권합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <a 
              href="/review/y" 
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Y 밴드 목록으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}