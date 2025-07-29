import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Il Paese Del Balocchi | Yebadong',
  description: 'Il Paese Del Balocchi 앨범 리뷰 - 이탈리아의 꿈과 환상을 그린 수퍼그룹',
};

export default function IlPaeseDelBalocchiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Il Paese Del Balocchi
            </h1>
            <p className="text-purple-300 text-lg">이탈리아의 꿈과 환상을 그린 수퍼그룹</p>
          </div>

          {/* Review Content */}
          <div className="space-y-8">
            {/* 첫 번째 리뷰 - 이동훈 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-gray-400 mb-4">
                  [이동훈, meddle@nuri.net]
                </p>
                
                <h3 className="text-xl font-semibold text-purple-300 mb-4">
                  Il Paese Del Balocchi - s/t ★★★★
                </h3>
                
                <div className="space-y-4 text-gray-200">
                  <p>
                    여러가지 소품들을 한데 모은듯한 앨범입니다.
                    앨범 전체를 관통하는 일관성을 찾아보기 힘들고
                    조금 어수선합니다. 마치 Celeste 의 1집을
                    어쿠스틱하게 연주하면 이런 앨범이 나올것
                    같은데요... 스트링도 간혹 등장하지만... 너무나도
                    평범하다는 인상을 주네요.
                  </p>
                  <p className="text-right text-purple-300 font-semibold">이동훈</p>
                </div>
              </div>
            </div>

            {/* 두 번째 리뷰 - 이응민 (상세한 리뷰) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <p className="text-sm text-gray-400 mb-4">
                  [이응민, hayden@hitel.net, 94.1]
                </p>
                
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
                  ●●● Il Paese dei Balocchi ●●●
                </h3>
                
                <div className="space-y-6 text-gray-200">
                  <p>
                    72년 단 한장의 앨범을 발표하고 사라졌던 이태리의 수퍼그룹.
                    이번에 라이센스화 한다는 소식으로 많은 이들을 기쁘게도하고,
                    슬프게도 하는 그룹. 우리가 어릴적 꿈꿔왔던 동화의 세상을 그렸던,
                    하지만 그 꿈과 희망이 '환상'속에서만 존재하는 '꿈의 유토피아'라는
                    슬픈 자각을 하게 만드는 그룹.
                  </p>
                  
                  <p>
                    이들의 앨범이 라이센스화한다는 소식에 거금을 들여서 소중히
                    간직했던 소박한 자긍심이 여지없이 무너지고 빈 주머니를 뒤적이게
                    만들었다. 하지만 이들의 음악을 더 많은 분들이 감상할 수 있게 된
                    사실과 함께 이들의 음악에 빠질 수 있는 즐거움이 더 큰게 사실이다.
                  </p>

                  <p>
                    IL Paese dei Balocchi는 1972년 7월 5인조로 결성된다. 이태리판
                    우드스탁 페스티벌이라 할 수 있는 Villa Pamphili Festival에 참가하면서
                    대중들에게 그들의 존재를 알리기 시작한 이들은 당시 CBS산하 CGD에서
                    첫 데뷔작품을 발표하게 된다. 음반제작 도중 건반악기주자 Franco di Sabatino가
                    탈퇴하여 그 유명한 R.D.M의 [Contaminazione]라는 걸작을 만들어내게 된다.
                    Franco 탈퇴로 4인조 편성으로 음반제작을 끝내게 되고 이태리 아트록 사상 
                    손꼽히는 걸작앨범을 만들어내게 되는 것이다.
                  </p>

                  <p>
                    그후 이들은 상업적으로 실패를 맞보게 되고 결국 해산되게 된다. 
                    7년이 지난 79년에 재결성되어 [Fantasia e Poesia]라는 싱글을 발표하게 하고 
                    다시 사라져버린다.
                  </p>

                  <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-300 mb-4 text-center">
                      ■ Il Paese dei Balocchi의 멤버구성 ■
                    </h4>
                    <ul className="space-y-2 text-center">
                      <li>Armando Paone - 올갠, 리드보컬</li>
                      <li>Fabio Fabianni - 기타</li>
                      <li>Marcello Martorelli - 베이스</li>
                      <li>Sandro Laudadio - 드럼, 리드보컬</li>
                      <li className="text-gray-400">(Franco di Sabatino - 키보드)</li>
                    </ul>
                  </div>

                  {/* 트랙별 상세 분석 */}
                  <div className="mt-8 space-y-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">트랙별 분석</h4>
                    
                    <div className="space-y-6">
                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          1. Il Trionfo dell'egoismo, della violezia, della presunzione e dell'indifferenza (2:34)
                        </h5>
                        <p className="text-sm text-gray-400 mb-2">- 이기심, 폭력, 가정, 무관심에 대한 극복</p>
                        <p className="text-gray-200">
                          날카로운 바이올린음이 아닌 둔탁하고 육중한 관현악연주로 경쾌한 인트로가 시작되는 
                          앨범의 서곡이라 할 수 있다. 이 앨범에서 가장 강렬한 연주와 장엄하고 화려한 관현악 연주를 
                          들을 수 있는 곡이다. 현실 속에 나타나는 이기심, 폭력, 무관심 등 삶의 부조리함 속에 
                          고뇌는 시작되고, 그 고뇌은 계속적인 무기력을 증폭시킨다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          2. Impotenza dell'umilta e della rassegnazione (4:09)
                        </h5>
                        <p className="text-sm text-gray-400 mb-2">- 겸허함과 체념의 무기력</p>
                        <p className="text-gray-200">
                          멀리서 아득하게 들려오는 듯이 기타음이 마치 교회종소리처럼 들려온다. 
                          강렬한 기타리프가 이어지면서 서서히 등장하는 엄숙한 코러스, 코러스와 강렬한 기타음이 
                          엉키면서 올갠이 차분하게 가라앉은 상태에서 흘러나온다. 현실에 대한 체념에서 나오는 
                          무기력을 극복하려는 강한 의지를 표현해주는 것 같다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          3. Canzone della speranza (3:55) - 희망의 노래
                        </h5>
                        <p className="text-gray-200">
                          고민의 구렁텅이 속으로 빠져들어가는 현실을 극복하기 위해 꿈 속에서와 같은 새로운 여행을 
                          꿈꾸게 된다. 새로운 여행은 곧 '희망'이었다. 그 '희망'은 너무도 쓸쓸하고 슬프게 울려퍼진다. 
                          너무도 애처러운 바이올린과 슬픔의 눈물을 뚝뚝 흘리는 것 같은 보컬. 
                          이렇게 '희망'을 슬프게 표현한다면 그 희망은 분명 아름다울테지...
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          4. Evasione (7:40) - 탈주
                        </h5>
                        <p className="text-gray-200">
                          이젠 그 희망을 위해 여행을 떠난다. 이 짜증나고 답답한 현실의 굴레로부터 벗어나기 위한 
                          '탈주'는 시작된다. 음습하고 음울한 인트로가 1분여동안 이어지다가 서서히 등장하는 올갠의 
                          잔잔한 음이 흐르고 단순하고 규칙적인 베이스리듬위에 기타음이 서서히 고조되어 간다. 
                          꿈꾸는 것 같은 몽롱한 올갠연주가 가세하면서 이 여행이 꿈 속에서 이루지는 여행이란 상상을 갖게한다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          5. Risveglio e vixione del paese dei balocchi (4:40)
                        </h5>
                        <p className="text-sm text-gray-400 mb-2">- 장난감 나라의 깨어남과 정경(情景)</p>
                        <p className="text-gray-200">
                          '희망'의 세계, 꿈의 세계의 도착하게 된 시각은 이른 새벽. 분주한 아침이 오기 전에 적막함과 
                          안개 낀듯 고요한 '장난감나라'의 정경을 묘사해주고 있다. 올갠과 베이스의 반복되는 음위에 
                          풀룻이 사쁜히 날아다니는 것이 이제는 아침이 밝아왔음을 느끼게 해준다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          6. Ingresso e incontro con i baloccanti (2:00)
                        </h5>
                        <p className="text-sm text-gray-400 mb-2">- 장난감나라의 입구와 장난감과의 만남</p>
                        <p className="text-gray-200">
                          퍼쿠션과 올갠이 어우러지면서 약간은 흥겨운 분위기를 연출하면서 시작되지만 곧이어 
                          쓸쓸하게 내뱉는 보컬이 흘러나온다. 너무 쓸쓸한 분위기에 휩싸여있는 목소리가 소중히 
                          간직했던 새로운 '희망'이 서서히 무너져가고 있음을 표현하는 것은 아닐까...
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          7. Canzone della verita (0:45) - 진실의 노래
                        </h5>
                        <p className="text-gray-200">
                          45초에 아주 짧은 곡이지만 기승전결을 모두 갖춘 곡으로 아름답고 슬픈 관현악 연주가 
                          '희망'의 상실을 서글프게 표현하고 있다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          8. Narcisismo della perfezione (1:01) - 완전한 자기도취
                        </h5>
                        <p className="text-gray-200">
                          어쿠스틱 기타의 아르페지오 선율로 시작하여 덤덤하게 '꿈꿔왔던 희망'이 
                          '완전한 자기도취'였음을 나타내주고 있는 것 같다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          9. Vanita dell'intuizione fantastica (6:56)
                        </h5>
                        <p className="text-sm text-gray-400 mb-2">- 환상적인 인식의 허영</p>
                        <p className="text-gray-200">
                          현실을 도피하고 환상적인 꿈의 세계를 꿈꿔왔지만 그 '꿈의 세계'는 비현실적이고 환상의 
                          세계에 불과하다는 씁씁할 자각을 말하고 있다. 상실로 인한 아픔을 나타내는 듯한 올갠연주와 
                          몽롱하게 울려퍼지는 기타음이 아픔을 위로해주는 것 같다.
                        </p>
                      </div>

                      <div className="p-4 bg-black/20 rounded-lg">
                        <h5 className="font-semibold text-purple-300 mb-2">
                          10. Ritorno alla condizione umana (4:18)
                        </h5>
                        <p className="text-sm text-gray-400 mb-2">- 인간 삶으로의 귀환</p>
                        <p className="text-gray-200">
                          장엄하고 화려한 올갠연주가 여행의 끝을 암시하고 있다. 현실에 대한 고뇌와 아픔은 
                          비현실적이고 환상적인 꿈과 희망만으로는 극복될 수 없다는 자각 속에 다시 인간의 현실 
                          속으로 돌아오게 된다. 현실은 비현실의 꿈 속에서 극복되어지는 것이 아니라 바로 그 현실 
                          속에서 아픔을 딛고 일어서야 된다는 깨달음을 얻고서...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 보너스 트랙들 */}
                  <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">보너스 트랙</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-purple-300 mb-2">
                          ♣ Fantasia e Poesia (3:30) - 환상과 시(詩)
                        </h5>
                        <p className="text-gray-200 text-sm">
                          이들이 해산한지 7년만에 갑자기 재결성되어 발표됐던 싱글곡이다. 너무도 따스하고 
                          친근감있는 연주와 보컬. 정말 아름다운 곡이 아닐 수 없다. 데뷰앨범과 비교할 수 없이 
                          평범한 연주지만 정말 소중한 곡이다. CD에서 LP의 따뜻하게 울려퍼지는 "톡톡" 하는 
                          판튀는 소리도 정겹다.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-purple-300 mb-2">
                          ♣ Amore per gioco (3:15) - 유희를 위한 사랑
                        </h5>
                        <p className="text-gray-200 text-sm">
                          이 곡 또한 가볍고 평범한 신시사이저와 기타연주 속에 칸쪼네풍의 곡 전개로 이루어진 곡이다. 
                          Fantasia e Poesia와 비슷한 풍으로 멤버들의 정겨운 코러스가 너무너무 매력적인 곡이다.
                          이들의 앨범을 이 두곡 때문에 주머니를 떨었다니 딴 사람들은 고개를 갸우뚱하게 했던 기억이 새롭다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-purple-300 font-semibold mt-8">
                    Por Esperanza...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 