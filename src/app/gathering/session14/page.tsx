import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제14회 YBD 아르헨티나 아트록 특집 - 1997년 6월 7일 | Yebadong',
  description: '예바동 제14회 아르헨티나 아트록 특집 + 멀티 발표자 감상회 (1997년 6월 7일, 홍대앞 Freebird)',
};

export default function Session14Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-[#0000aa] mb-4">
            제14회 YEBADONG Special Show of Prog Rock
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-yellow-100 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0000aa] mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>언제:</strong> 1997년 6월 7일 토요일 늦은 2시 30분</p>
                  <p><strong>어디서:</strong> 홍대앞 Freebird</p>
                  <p><strong>주제:</strong> 아르헨티나 아트록 + 멀티 발표자 특집</p>
                </div>
                <div className="space-y-2">
                  <p><strong>발표자들:</strong></p>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>cicco(이윤직):</strong> Argentina Art Rock Special</li>
                    <li>• <strong>Fish:</strong> Humus 등</li>
                    <li>• <strong>meddle:</strong> Music Video</li>
                    <li>• <strong>windmill:</strong> windmill's favorites</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <h3 className="font-bold text-blue-800 mb-2">참석자 (19명 + 친구분들)</h3>
                <div className="text-xs grid grid-cols-4 gap-1">
                  <span>• icicle</span>
                  <span>• meddle</span>
                  <span>• Neo-Zao</span>
                  <span>• Roggie</span>
                  <span>• Rubisef</span>
                  <span>• fesn</span>
                  <span>• gaea</span>
                  <span>• libero</span>
                  <span>• choco</span>
                  <span>• budgie</span>
                  <span>• vertigo</span>
                  <span>• jonathan</span>
                  <span>• merongi</span>
                  <span>• ardor</span>
                  <span>• LongDal</span>
                  <span>• cicco</span>
                </div>
                <p className="text-xs mt-2 text-blue-600">
                  친구분과 함께: pollen, Lennon, windmill
                </p>
              </div>
            </div>

            {/* Argentina Art Rock Special */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                🇦🇷 Rock Argentino Special - cicco(이윤직) 발표
              </h2>
              
              {/* Opening */}
              <div className="mb-8 p-4 bg-white rounded border border-blue-300">
                <h3 className="text-lg font-bold text-blue-700 mb-3">
                  🎵 Opening: La Maquina de Hacer Pajaros - Obertura 7.7.7. (4:50)
                </h3>
                <p className="text-xs text-gray-600 mb-2">from "Peliculas" (1977)</p>
                <p className="text-sm">
                  "아르헨티나 록 특집"은 저의 favorite group의 곡으로 시작합니다. 
                  Charly Garcia가 Sui Generis 해체 후 결성했던 La Maquina...의 두 번째이자 마지막 앨범 중 첫곡입니다. 
                  Charly Garcia family group답게 아르헨티나 특유의 아름다움으로 가득차 있는 이 앨범은 
                  Sui Generis의 서정적인 folk sound와 함께 라틴 리듬에 기반을 둔 흥겨운 Jazz rock sound를 들려줍니다.
                </p>
              </div>

              {/* Main Playlist */}
              <div className="space-y-6">
                
                {/* Track 1 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">1. Preguntas Al Cielo - Banana (10:00)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Aun es Tiempo de Sonar" (?)</p>
                  <p className="text-sm">
                    무척 궁금증을 자아냈던 Banana의 앨범 중에서 한곡 듣습니다. 
                    이태리 아트록의 영향이 느껴지는 본작은 키보드와 보컬 중심의 낭만적인 symphonic sound를 들려줍니다. 
                    아르헨티나 아트록의 전성기였던 70년대 후반에 발표되지 않았을까 추정되는 앨범으로 
                    크게 돋보이는 곡은 없지만 전체적으로 고른 수준의 곡들을 담고 있습니다.
                  </p>
                </div>

                {/* Track 2 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">2. Guards Standing - Espiritu (4:44)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Espiritu" (1982)</p>
                  <p className="text-sm">
                    75년 유명한 데뷔 앨범 'Crisalida'를 발표했던 Espiritu가 재결성 후 발표한 세 번째 앨범입니다. 
                    보컬, 기타를 제외하곤 새로운 member들로 구성되어 있으며, 보다 세련된 연주를 들려주고 있습니다. 
                    짧지만 이들의 연주 실력을 유감없이 보여주는 곡을 골라보았습니다.
                  </p>
                </div>

                {/* Track 3 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">3. Shouts - Ave Rock (7:17)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Ave Rock" (1974)</p>
                  <p className="text-sm">
                    묵직한 오르간과 기타로 hard rock 스타일의 아트록을 들려주었던 Ave Rock의 첫 번째 앨범 중에서 한곡... 
                    열악한 보컬에도 불구하고 꽤 들을만 합니다.
                  </p>
                </div>

                {/* Track 4 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">4. La Cancion de Nahuel - Arco Iris (5:50)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Sudamerica" (1972)</p>
                  <p className="text-sm">
                    많은 앨범을 발표하며 장수했던 Arco Iris의 초창기 앨범으로 오페라를 위해 작곡된 앨범이라고 추정됩니다. 
                    매우 다양한 음악적 요소들을 함축하고 있으며 Laser's edge catalogue에서 대단한 호평을 해 놓은 것을 볼 수 있습니다. 
                    앨범 전체를 감상해 보실 것을 권해드리고 싶네요.
                  </p>
                </div>

                {/* Track 5 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">5. Todo Tiempo Posible - Crucis (4:33)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Crucis" (1976)</p>
                  <p className="text-sm">
                    빼기 섭섭해서 한곡 골랐습니다. 첫 번째 앨범의 매우 인상적인 첫 번째 트랙입니다.
                  </p>
                </div>

                {/* Track 6 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">6. Tribulaciones, Lamentos y Ocaso de un Tonto Rey Imaginario, o No - Sui Generis (5:56)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Confesiones de Invierno" (1973)</p>
                  <p className="text-sm">
                    담백한 folk rock을 들려주었던 첫 번째 앨범 'Vida'와 프로그레시브 록을 들려주었던 세 번째 앨범 
                    'Pequenas Anecdotas Sobre las Instituciones' 사이에 발표되었던 두 번째 앨범으로, 
                    개인적으론 이들의 앨범 중에서 가장 손이 많이 가는 작품입니다. 
                    무척 단순하지만 Charly Garcia의 서정성이 잘 드러나는 곡을 골라봤습니다.
                  </p>
                </div>

                {/* Track 7 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">7. Boletos, Pases y Abonos - La Maquina de Hacer Pajaros (6:30)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "La Maquina de Hacer Pajaros" (1976)</p>
                  <p className="text-sm">
                    이번엔 첫 번째 앨범 중에서 한곡 듣습니다. 빈틈없는 곡 구성이 돋보이는 jazz rock style의 곡입니다. 
                    음질은 열악하지만 Charly Garcia가 얼마나 훌륭한 작곡가인지 느껴보시길...
                  </p>
                </div>

                {/* Track 8 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">8. Eiti Leda - Seru Giran (7:01)</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Seru Giran" (1978)</p>
                  <p className="text-sm">
                    La maquina de Hacer Pajaros 해산 후 결성된 Seru Giran의 첫 번째 앨범입니다. 
                    앞선 두 그룹의 음악적 바탕 위에 오케스트레이션을 가미하는 등 새로운 시도를 하고 있지만 
                    완성도 면에선 좀 떨어지는 듯 싶습니다. 
                    아름다운 보컬 하모니와 박진감 넘치는 오케스트레이션이 돋보이는 곡을 마지막 곡으로 준비했습니다.
                  </p>
                </div>
              </div>

              {/* Charly Garcia Family Tree */}
              <div className="mt-8 p-4 bg-yellow-50 rounded">
                <h3 className="font-bold text-yellow-800 mb-2">🌟 Charly Garcia Family Tree</h3>
                <div className="text-sm space-y-1">
                  <p><strong>Sui Generis (1970-1975):</strong> 담백한 folk rock → 프로그레시브 록</p>
                  <p><strong>La Maquina de Hacer Pajaros (1976-1977):</strong> Jazz rock + 라틴 리듬</p>
                  <p><strong>Seru Giran (1978-1982):</strong> 오케스트레이션 가미한 새로운 시도</p>
                </div>
              </div>
            </div>

            {/* meddle's Video Special */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                🎬 meddle's Music Video & Audio Special
              </h2>
              
              {/* Audio Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-green-700 mb-3">🎵 Audio Playlist</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600">Genesis - The Brazilian</h4>
                    <p className="text-xs text-gray-600">from "When The Wind Blows" Soundtrack</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600">Pink Floyd - Comfortably Numb</h4>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600">Pink Floyd - Brain Damage/Eclipse</h4>
                    <p className="text-xs text-gray-600">from "The Bell Gets Louder"</p>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div>
                <h3 className="text-lg font-bold text-green-700 mb-3">📺 Video Playlist</h3>
                <div className="space-y-4">
                  
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">Pink Floyd - See Emily Play</h4>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">Genesis - Belgium TV '72 Live 특집</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>• The Musical Box</strong></p>
                      <p><strong>• The Return Of The Giant Hogweed</strong></p>
                      <div className="bg-green-50 p-3 rounded text-xs">
                        <p>
                          <strong>🎭 벨기에 TV '72 특별 해설:</strong><br/>
                          그들의 72년도 벨기에 텔레비젼 무인 공연이다. 이 방송에서는 유럽의 많은 아트록 (프로그레시브) 록 그룹들이 참여를 했다. 
                          하지만 그중 가장 돋보이는 밴드는 역시 제너시스!! 
                          제너시스의 보컬리스트이자 스타일리스트인 Peter Gabriel의 열정적인 퍼포먼스는 가히 환상적이다. 
                          한가지 아쉬운 점이라면 그의 트래이드 마크인 '노인 가면', '꽃 가면', '여우 가면' 등을 무대위에서 사용하기 이전의 공연이라는 점이다. 
                          하지만 그렇기 때문에 더욱더 가치있는 영상 자료라는 생각도 든다. 
                          또한 스튜디오 녹음이 아닌가 하는 의심이 들 정도로 완벽한 사운드를 들려주고 있다. 
                          단지 피터의 안정적이지 못한 보컬이 마음에 걸릴뿐.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">Genesis - France Cult Rock Documentary 특집</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>• The Musical Box</strong></p>
                      <p><strong>• The Return Of The Giant Hogweed</strong></p>
                      <p><strong>• Supper's Ready</strong></p>
                      <div className="bg-green-50 p-3 rounded text-xs">
                        <p>
                          <strong>🎭 Theatre Rock의 진수:</strong><br/>
                          Theatre Rock의 최고 명작인 Foxtrot 발표 후 가진 유럽 투어를 담은 라이브 공연을 담은 필름이다. 
                          Peter는 이때부터 여러가지 가면을 사용한다.
                        </p>
                        <ul className="mt-2 space-y-1">
                          <li>• Musical Box: 노인 가면 → 여우가면과 붉은색 드레스</li>
                          <li>• Watcher Of The Skies: 외계인 가면(분장)</li>
                          <li>• Willow Farm: 꽃 가면</li>
                          <li>• Slipperman: 괴물 가면</li>
                          <li>• The Return Of The Hogweed: 온몸에 흰칠</li>
                          <li>• Supper's Ready: 얼굴에 큰 별 (외계인 상징)</li>
                        </ul>
                        <p className="mt-2 italic">여우가 탬버린을 두둘기는 장면은 매우 인상적! :-)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* windmill's Favorites */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                💜 windmill's Favorites
              </h2>
              
              <div className="space-y-6">
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-600 mb-2">Deboco - Shakti</h3>
                  <p className="text-sm">
                    Jean Pascal Boffo를 위시하여 Tiemko와 Halloween에서 활동하던 뮤지션 세명의 Family name의 이니셜 두자씩을 따서 만든 
                    일종의 프로젝트 형식의 그룹입니다. 전체적으로 일렉트로닉에 기반을 둔 퓨젼화된 음악을 들려 주고 있는데요. 
                    그 중 신비스런 여성 보컬 위주의 곡을 골라보았습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-600 mb-2">Mandragora - El Sacrificio De Axis</h3>
                  <p className="text-sm">
                    아르헨티나의 마릴리온이라 불리는 그룹으로 현재 한장의 앨범을 발표중이고 뮤제아에서 97년도 5월에 재발매가 되었습니다. 
                    이들의 재발매에는 Mandragora 멀티미디어 쇼에서 소개되었던 컴퓨터 소프트가 담겨있습니다. 
                    여기에는 멤버들의 사진과 미발표곡, 히스토리등이 수록되어 있죠. 
                    이들의 데뷔작 Pecado Tras Pecado에서 가장 돋보이는 대곡을 하나 골라보았습니다. 
                    전체적으로 키보드와 독특한 뉘앙스의 보컬 하모니가 인상적인 곡입니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-600 mb-2">Popol Vuh - For Eternity</h3>
                  <div className="text-sm space-y-2">
                    <p>
                      이들의 음악을 딜러식 코멘트로 간단히 표현하자면<br/>
                      <strong className="text-purple-700">"Heavy blues prog with killer mellotron!!"</strong><br/>
                      정도가 아닐까요??
                    </p>
                    <p>
                      이들의 동명타이틀 앨범에서 가장 서정미가 물씬 풍기는 곡을 골랐습니다. 
                      아르페지오 선율과 함께 시작되는 어쿠스틱 기타와 감미로운 플룻 그리고 
                      후반부에 이르기까지 서서히 조였다가 일거에 폭발해버리는 멜로트론의 향연으로 수놓아져 있는 명곡입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-blue-600">8</div>
                  <div className="text-blue-700">아르헨티나 곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">6</div>
                  <div className="text-green-700">Video + Audio</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">3</div>
                  <div className="text-purple-700">windmill's Choice</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-yellow-600">4</div>
                  <div className="text-yellow-700">발표자</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제14회 멀티 발표자 특집 완전 복원! 
                아르헨티나 아트록의 깊이와 다양한 음악적 탐구가 되살아났습니다! 🇦🇷🎭🎵
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session13" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (13회)
                </Link>
                
                <Link href="/gathering/session15" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (15회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
