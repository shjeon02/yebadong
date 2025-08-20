import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3rd YBD Special Show of ProRock - 1994년 예바동 송년 음악 감상회 | Yebadong',
  description: '1994년 예바동 송년 음악 감상회 - 예바동 감상회 Best 모음',
};

export default function Session3Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#0000aa]">3rd YBD Special Show of ProRock</h1>
          <h2 className="text-2xl font-semibold mb-4 text-[#0000aa]">1994년 예바동 송년 음악 감상회</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">📅 행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1994년 (상세 일시 미상)</p>
                  <p><strong>장소:</strong> (장소 미상)</p>
                </div>
                <div>
                  <p><strong>성격:</strong> 송년 음악 감상회</p>
                  <p><strong>주제:</strong> 예바동 감상회 Best 모음</p>
                </div>
              </div>
            </div>

            {/* Part 1: 예바동 감상회 Best */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                🎼 1부. 예바동 감상회 Best
              </h2>
              
              <div className="space-y-8">
                
                {/* Track 1: HHAI */}
                <div className="border border-purple-400 rounded-lg p-6 bg-purple-50">
                  <h3 className="text-xl font-bold text-purple-700 mb-4">
                    1. HHAI (Christian Vander) - 8:4
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">[앨범 Magma Live Kohntark (1976) 중에서]</p>
                  <p className="text-sm mb-4"><strong>발표자:</strong> Orkman, 장민수 (msjang@mobi.etri.re.kr)</p>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p>
                        <strong>반데의 독특한 보컬:</strong> 보통 Klaus Blasquiz가 마그마 보컬의 핵심을 차지하는 것으로 알려져 있지만 
                        실은 마그마의 목소리는 반데와 Blasquiz에 의해 양분된다. 반데는 Blasquiz와는 전혀 다른 목소리를 지녔다. 
                        Blasquiz같은 서울적인 분위기는 전혀 풍겨나오지 않는다.
                      </p>
                      <p>
                        <strong>76년 라이브의 백미:</strong> 이 곡에서는 반데가 메인 보컬을 맡고 있다. 그의 코바이어 발음과 억양, 
                        삐져 나오는 메시지. 반데의 낭송이 끝나고 드럼이 터져 나오는 순간과 이후의 키보드 솔로는 이 곡의 백미이다.
                      </p>
                      <p>
                        <strong>완벽한 앙상블:</strong> 이 곡도 'KOBAH'와 마찬가지로 각 멤버간의 조화가 완벽한 앙상블을 이루어내고 있다. 
                        각 악기의 소리는 한치의 어긋남도 없이, 한 음도 낭비되는 일이 없이 'HHAI'의 일부가 되고 있다. 
                        후반부에서는 Blasquiz와 Stellar Vander의 반복되는 보컬 코러스가 절정을 향해 치닫고, 
                        Lockwood와 반데의 파열로 곡은 막을 내린다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 2: Yes */}
                <div className="border border-blue-400 rounded-lg p-6 bg-blue-50">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    2. Yes - Sound Chaser
                  </h3>
                  <p className="text-sm"><strong>발표자:</strong> 김재열</p>
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-blue-700">
                      Yes의 대표적인 복잡계 프로그레시브 록 곡으로, 1974년 앨범 'Relayer'에 수록된 명곡입니다.
                    </p>
                  </div>
                </div>

                {/* Track 3: Pink Floyd */}
                <div className="border border-green-400 rounded-lg p-6 bg-green-50">
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    3. Pink Floyd - A Saucerful of Secrets
                  </h3>
                  <p className="text-sm"><strong>발표자:</strong> 신인철</p>
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
                    <p className="text-sm text-green-700">
                      Pink Floyd의 초기 실험적 사운드를 보여주는 대표곡으로, 1968년 동명 앨범의 타이틀 트랙입니다.
                    </p>
                  </div>
                </div>

                {/* Track 4: B. PAGANOTTI */}
                <div className="border border-orange-400 rounded-lg p-6 bg-orange-50">
                  <h3 className="text-xl font-bold text-orange-700 mb-4">
                    4. B. PAGANOTTI - UNE PARCELLE D'URANTIA [12:52]
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">[from: PAGA (COLUMBIA COL 468441 2, CD)]</p>
                  <p className="text-sm mb-4"><strong>발표자:</strong> Orkman, 장민수 (msjang@mobi.etri.re.kr)</p>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p>
                        <strong>WEIDORJE 해체 후 작품:</strong> WEIDORJE가 운영난으로 와해된 이후 발매된 Patrick Gauthier, 
                        Jean-Philippe Goude, Bernard Paganotti의 솔로 앨범에는 WEIDORJE 시절에 작곡된 곡들이 
                        한두곡씩 포함되어 있는데, 이 곡도 그런 경우이다.
                      </p>
                      <p>
                        <strong>WEIDORJE 멤버들의 참여:</strong> 이 곡의 연주에는 Kirt Rust, Patrick Gauthier, 
                        Yvon + Alain Guillard, Jean-Philippe Goude 등 WEIDORJE의 멤버들이 다수 참여하고 있다.
                      </p>
                      <p>
                        <strong>음악적 특징:</strong> WEIDORJE에서도 선보인 바 있는 드럼과 베이스의 추진력이 곡을 이끌어나가고 있으며, 
                        부분적으로 반복적이면서도 생소한 곡 구성과 음진행이 호기심을 유발시킨다. 빠가노띠의 다양한 분위기를 
                        이끌어내는 폭넓은 연주에 귀를 기울여보시길.
                      </p>
                      <p className="text-orange-600 font-medium">
                        ENNEADE에 실린 'Urantia', PAGA에 실린 'Final D'Urantia'와 연작의 성격을 띠고 있는 작품이다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 5: I Pooh */}
                <div className="border border-red-400 rounded-lg p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-red-700 mb-4">
                    5. I Pooh - Una Storia Che Fa Ridere (4:20)
                  </h3>
                  <p className="text-sm mb-4"><strong>발표자:</strong> Lennon (이강영)</p>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p>
                        <strong>이탈리아 장수 그룹:</strong> I Pooh는 1966년 로마의 장미 페스티발에 출전하면서부터 등장했고 
                        지금까지도 산레모 가요제 등을 통해 활발히 활동하는 장수 그룹입니다.
                      </p>
                      <p>
                        <strong>음악적 성격:</strong> 그들의 음악은 prog는 아니고 순수한 pop이지만 70년대에 이탈리아 
                        대부분의 그룹들이 그랬듯이 앨범 위주의 구성, 컨셉트성, 심포닉한 사운드등을 보여주고 있고 
                        이탈리아 특유의 멜로딕함이 조화되어 심포닉함을 선호하는 우리 prog mania들에게는 잘 어필하는 음악을 들려줍니다.
                      </p>
                      <p>
                        <strong>앨범 소개:</strong> 이 곡은 1975년 발표된 'Un Po'del Nostro Tempo Migliore' 앨범에 
                        수록되어 있습니다. 이 앨범은 앨범 전체가 하나의 작품처럼 잘 구성되어 특히 한 곡을 선정하고 싶지 않고 
                        가능하면 전체를 들려드리고 싶습니다.
                      </p>
                      <p className="text-red-600 font-medium">
                        앨범의 자켓에서 보여지는 고전적이고 단아한, 행복했던 어린 시절같은 음악입니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 6: Thijs Van Leer */}
                <div className="border border-indigo-400 rounded-lg p-6 bg-indigo-50">
                  <h3 className="text-xl font-bold text-indigo-700 mb-4">
                    6. Thijs Van Leer - 'Sicilenne' (7:04)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">from album Introspection 3 & 4 (1977 & 1979 CBS LC 014)</p>
                  <p className="text-sm mb-4"><strong>발표자:</strong> Neo-Zao, 김남웅 (nwkim@archer.postech.ac.kr)</p>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p>
                        <strong>Introspection 시리즈:</strong> Thijs Van Leer의 Classic 편곡 및 연주 작업의 산물인 Introspection 시리즈는 
                        그가 Focus시절 외에 활동한 Jazz Fusion이나 Rock album들의 질을 훨씬 상회한다고 생각된다.
                      </p>
                      <p>
                        <strong>클래식한 편곡:</strong> 그의 스승 Rogier Van Otterloo의 편곡 및 지휘는 
                        어느 Semi-Classical연주보다 Classical하며 또 경박한 면은 전혀 찾아 볼 수 없다. 
                        녹음 또한 세심히 수행되어 팝음악에서는 느낄 수 없는 충분한 음장감을 제공한다.
                      </p>
                      <p>
                        <strong>Gabriel Faure의 걸작:</strong> 곡이 짧아서 너무나 아쉬운 감을 주는 Gabriel Faure의 'Sicilienne'는 
                        'Pelleas et Melisande'의 일부분으로 Debussy, Ravel, Satie등의 프랑스적 정서를 
                        느낄 수 있는데 이는 즉 성스러움 속에 내재된 에로틱함이다.
                      </p>
                      <p className="text-indigo-600 font-medium">
                        가장 완벽한 'Sicilienne' 편곡이라고 생각한다.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">Note) YeBaDong FAQ album review 참조</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: 내가 좋아하는 곡들 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                🎵 2부. 내가 좋아하는 곡들, 마구잡이로 틀자
              </h2>
              
              <div className="space-y-8">
                
                {/* Lennon Section */}
                <div className="border border-teal-400 rounded-lg p-6 bg-teal-50">
                  <h3 className="text-xl font-bold text-teal-700 mb-6">
                    🎼 Lennon(이강영) 선곡
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Lucio Battisti */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-teal-700 mb-2">Lucio Battisti - Abbracciala Abbracciali Abbracciati (7:00)</h4>
                      <div className="text-sm leading-relaxed space-y-2">
                        <p>
                          <strong>1974년 걸작:</strong> Battisti의 1974년작 'Anima Latina' 앨범의 첫곡. 이 앨범에서 그는 
                          성숙된 자신의 역량을 과시하는듯 합니다. '라틴의 마음'이라는 제목처럼 이 앨범에는 순수한 이탈리아의 '맛'이, 
                          그 내음이 느껴집니다.
                        </p>
                        <p>
                          <strong>시각적 음악:</strong> 이 곡은 느리면서도 경쾌한, 마치 자켓에 있는 아이들이 뛰노는 모습이 
                          연속 동작이 아닌 순간순간 끊어진 사진으로 보는듯한 느낌을 줍니다.
                        </p>
                        <p className="text-teal-600 font-medium">
                          이 곡을 들으면 눈부신 햇살이 쏟아져 내리는 아드리아 해, 그 바닷가에 벌거벗고 누워있던 젊은이들이 생각납니다.
                        </p>
                      </div>
                    </div>

                    {/* Eros Ramazzotti */}
                    <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-teal-700 mb-2">Eros Ramazzotti - A Mezza Via (4분여)</h4>
                      <div className="text-sm leading-relaxed space-y-2">
                        <p>
                          <strong>현재적 이탈리아:</strong> 윗 곡이 어떤 추상적인 이탈리아를 떠오르게 한다면 이곡은 구체적으로 
                          '현재'의 '도시'의 이탈리아를 떠오르게 합니다. 작년에 나와서 유럽에서 크게 히트했던 앨범 'Tutte Storie'에 담긴 이 곡은 
                          마르몬드던가.. 화장품 CF의 배경 음악으로도 나와서 (그런데 그 이상 뜨질 않더라구요..) 귀에 익숙하실 겁니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budgie Section */}
                <div className="border border-purple-400 rounded-lg p-6 bg-purple-50">
                  <h3 className="text-xl font-bold text-purple-700 mb-6">
                    🎸 Budgie(이훈구) 선곡
                  </h3>
                  
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-700 mb-2">Blonde on Blonde - Circles (7:2)</h4>
                    <div className="text-sm leading-relaxed space-y-2">
                      <p>
                        <strong>전설적 밴드:</strong> 70년대 초반 소리소문 없이 있는듯 없는듯 하다가 지금은 원치않게 전설적인 
                        밴드가 되어버린 수많은 그룹중의 하나가 이 Blonde on Blonde라는 그룹입니다. 
                        이들은 총 3장의 정규앨범과 3장의 싱글만을 남기고 사라졌는데 그중 2집 'Rebirth'가 가장 화려하다고 알려져 있습니다.
                      </p>
                      <p>
                        <strong>음악적 매력:</strong> 전형적인 하드락 밴드로 분류될 수 있는 이들의 사운드의 묘미를 가장 만끽할수 
                        있는 이 'Circles'라는 곡은 T2의 동명이곡의 공격성 보다는 보다 여유있는 음 진행으로 듣는 이로 하여금 
                        흥겨움이 절로 일어나게 하는 곡입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Summary */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold text-yellow-700 mb-4 text-center">📊 Session 3의 특별함</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🏆 1부: 예바동 감상회 Best</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Magma 심화 분석</strong>: Orkman의 전문적 HHAI 해설</li>
                    <li>• <strong>프로그 명곡</strong>: Yes, Pink Floyd 대표작</li>
                    <li>• <strong>Zeuhl 계보</strong>: WEIDORJE → B. Paganotti</li>
                    <li>• <strong>이탈리아 심포닉</strong>: I Pooh의 멜로딕함</li>
                    <li>• <strong>클래식 편곡</strong>: Thijs Van Leer의 Sicilenne</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🎵 2부: 개인 취향 모음</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>이탈리아 로맨틱</strong>: Battisti, Ramazzotti</li>
                    <li>• <strong>영국 하드락</strong>: Blonde on Blonde</li>
                    <li>• <strong>개인적 감상</strong>: 추상적 vs 현실적 이탈리아</li>
                    <li>• <strong>마구잡이 선곡</strong>: 자유로운 음악 탐험</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">🎼 1994년 송년회의 의의</h3>
                <p className="text-sm text-blue-600 leading-relaxed">
                  3회 감상회는 1994년 송년을 맞아 그해 가장 인상 깊었던 곡들을 모은 'Best' 모음이었습니다. 
                  특히 Magma의 HHAI에 대한 상세한 분석과 이탈리아 음악에 대한 깊이 있는 탐구, 
                  그리고 개인적 취향을 자유롭게 펼친 2부 구성이 특징적이었습니다. 
                  전문적 해설과 개인적 감상이 조화를 이룬 균형 잡힌 감상회였습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <Link href="/gathering" className="text-[#0000aa] hover:text-[#0000aa]/80 underline">
                ← 감상회 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}