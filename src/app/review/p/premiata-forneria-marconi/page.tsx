import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Premiata Forneria Marconi (PFM) | Yebadong',
  description: 'Premiata Forneria Marconi - Per Un Amico 앨범 리뷰 - 가장 이태리적인 음악',
};

export default function PremiataCorneriaMarconiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premiata Forneria Marconi
            </h1>
            <p className="text-purple-300 text-lg">가장 이태리적인 음악을 들려준 그룹</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [meddle, 이동훈, meddle@nuri.net]
              </p>
              
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                가장 이태리적인 음악을 들려줬던 그룹. Premiata Forneria Marconi !!
              </h3>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  내가 이태리 음악에 깊숙히 빠지기 시작한 계기를 안겨준 그룹이 바로 PFM 이다.
                  몇 년전 나의 절친한 친구가 PFM의 2집 중에서 Appena Un Po를 그의 음악방에서 
                  들려주었다. 이것이 바로 나와 PFM의 첫 만남이다. 그 전에는 결코 경험할 수 
                  없었던 음악적 카타르시스를 맛보게 되었으며, 이태리 록에 대한 나의 기대를 
                  전보다 더욱 더 부풀게 하였다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Premiata Forneria Marconi - Per Un Amico
                </h4>

                {/* Track List */}
                <div className="mt-6 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h5 className="text-lg font-bold text-purple-300 mb-4">Track List</h5>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>1. Appena Un Po</div>
                    <div>2. Generale</div>
                    <div>3. Per Un Amico</div>
                    <div>4. Il Banchetto</div>
                    <div>5. Geranio</div>
                  </div>
                </div>

                <h5 className="text-lg font-semibold text-purple-300 mt-8 mb-4">
                  PFM의 탄생 배경
                </h5>

                <p>
                  우선 그 당시의 상황을 살펴보면...
                </p>

                <p>
                  소위 Beat 계열의 음악이 판치던 60년대 중반... 그 당시 Beat 계열의 양대 슈퍼
                  그룹이 I Rokes, Equip 84 였다. 초기 Equip 84는 Rolling Stones의 곡을 
                  번안해서 발표하는 등, 매우 팝적인 음악을 연주했지만 70년대 들어서는 
                  Sacrificio 같은 좋은 프로그레시브 음반들을 발표하기도 했다. 
                  이 당시 PFM의 전신이라고 할 수 있는 Quille라는 전형적인 Beat 그룹이 탄생했다.   
                  그들은 미쉘 폴라나프의 히트곡인 La Poupee Qui Fait Non을 이태리어로 번안한
                  La Bambola Che Fa No라는 곡으로 이태리에서 크게 히트를 기록하였다.
                </p>

                <p>
                  하지만 그들은 이런 상업적인 성공에 만족하지 않았고, 보다 진취적이고 
                  독창적인 음악을 추구하게 되었다. 70년 그들은 그룹명을 Premiata Forneria 
                  Marconi라고 바꾸었으며 이것은 '수상한 마르코니 제빵소'라는 뜻이다.
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h5 className="text-lg font-semibold text-purple-300 mb-4">밴드 멤버</h5>
                  <div className="space-y-2 text-sm">
                    <div><strong className="text-yellow-300">Franco Mussida</strong> - Guitar, Vocal</div>
                    <div><strong className="text-yellow-300">Flavio Premoli</strong> - Keyboards, Vocal</div>
                    <div><strong className="text-yellow-300">Mauro Pagani</strong> - Flute, Violin, Vocal</div>
                    <div><strong className="text-yellow-300">Giorgio Piazza</strong> - Bass</div>
                    <div><strong className="text-yellow-300">Franz Di Cioccio</strong> - Drums, Vocal</div>
                  </div>
                </div>

                <p>
                  PFM의 가장 큰 특징은 무엇보다도 그들만의 독특한 이태리적 정서였다. 
                  영국의 프로그레시브 록이 지적이고 차가운 느낌이라면, PFM의 음악은 
                  따뜻하고 서정적이며 지중해적인 정서가 물씬 풍긴다.
                </p>

                <h5 className="text-lg font-semibold text-purple-300 mt-8 mb-4">
                  앨범 분석
                </h5>

                <div className="space-y-6">
                  <div className="p-4 bg-black/20 rounded-lg">
                    <h6 className="font-semibold text-purple-300 mb-2">1. Appena Un Po</h6>
                    <p className="text-gray-200 text-sm">
                      앨범의 첫 곡이자 PFM의 대표곡 중 하나. 서정적인 멜로디와 복잡한 구성이 
                      절묘하게 조화를 이루며, 이태리 프로그레시브 록의 정수를 보여준다. 
                      Mauro Pagani의 플루트와 바이올린이 특히 인상적이다.
                    </p>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg">
                    <h6 className="font-semibold text-purple-300 mb-2">2. Generale</h6>
                    <p className="text-gray-200 text-sm">
                      전쟁에 대한 비판적 시각을 담은 곡으로, 강렬한 리듬과 날카로운 기타 사운드가 
                      인상적이다. 이태리 록의 사회 의식을 엿볼 수 있는 곡이다.
                    </p>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg">
                    <h6 className="font-semibold text-purple-300 mb-2">3. Per Un Amico</h6>
                    <p className="text-gray-200 text-sm">
                      앨범의 타이틀 곡으로, '친구를 위하여'라는 뜻이다. PFM의 우정과 동료애를 
                      노래한 곡으로, 따뜻하고 서정적인 멜로디가 특징이다.
                    </p>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg">
                    <h6 className="font-semibold text-purple-300 mb-2">4. Il Banchetto</h6>
                    <p className="text-gray-200 text-sm">
                      '연회'라는 뜻의 이 곡은 PFM의 연주력이 가장 돋보이는 곡 중 하나다. 
                      복잡한 리듬 패턴과 각 악기의 솔로가 절묘하게 어우러진다.
                    </p>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg">
                    <h6 className="font-semibold text-purple-300 mb-2">5. Geranio</h6>
                    <p className="text-gray-200 text-sm">
                      제라늄 꽃을 소재로 한 서정적인 곡으로, PFM의 섬세한 감성을 잘 보여준다. 
                      Flavio Premoli의 키보드와 Franco Mussida의 기타가 아름다운 조화를 이룬다.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h5 className="text-lg font-bold text-purple-300 mb-3">PFM의 의의</h5>
                  <p className="text-gray-200">
                    PFM은 단순히 영미권 프로그레시브 록을 모방하는 것이 아니라, 이태리만의 독특한 
                    정서와 문화적 배경을 바탕으로 한 독창적인 음악을 만들어냈다. 그들의 음악은 
                    지중해의 따뜻한 햇살과 같은 서정성과 이태리 르네상스 시대부터 이어져온 
                    예술적 전통이 묻어난다.
                  </p>
                </div>

                <p>
                  Per Un Amico는 이태리 프로그레시브 록의 최고 걸작 중 하나로 평가받으며, 
                  전 세계 프로그레시브 록 팬들에게 사랑받고 있다. 특히 이 앨범을 통해 PFM은 
                  이태리를 넘어서 국제적인 인지도를 얻게 되었고, 후에 영국과 미국에서도 
                  활동하게 되는 계기가 되었다.
                </p>

                <p className="text-sm text-gray-400 mt-6">
                  이동훈 님이 이태리 록에 빠지게 된 계기가 된 바로 그 앨범입니다. 
                  이태리 프로그레시브 록의 진수를 맛보고 싶다면 반드시 들어야 할 필청앨범입니다.
                </p>
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
