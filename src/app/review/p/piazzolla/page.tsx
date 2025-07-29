import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Piazzolla | Yebadong',
  description: 'Astor Piazzolla - Octeto Buenos Aires & The Central Park Concert 리뷰',
};

export default function piazzollaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Astor Piazzolla
            </h1>
            <p className="text-purple-300 text-lg">누에보 탱고의 창시자, 아르헨티나의 음악 혁명가</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [Damian Lee, damian@lamar.colostate.edu]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-4">추천 앨범</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong className="text-yellow-300">Astor Piazzolla</strong> "Octeto Buenos Aires" <span className="text-gray-400">ANS15276</span></div>
                    <div><strong className="text-yellow-300">Astor Piazzolla</strong> "The Central Park Concert" <span className="text-gray-400">Chesky Records JD107</span></div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  독특한 음악 세계, Piazzolla
                </h3>
                
                <p>
                  Piazzolla의 음악은 <strong>독특</strong>합니다. 그 독특함은 조성, 화음, 박자의
                  긴밀함, 그리고 통속적인 멜로물류의 음악인 Tango를 <strong>감상용으로 바꾼데</strong> 그 의미가 크다고 봅니다.
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">혁신의 시작</h4>
                  <p className="text-sm leading-relaxed">
                    김덕수의 사물놀이가 선반을 앉은 반으로 바꾼 실내악으로서의 풍물놀이를 만들었을
                    땐 그것이 그리 큰 반향을 일으키리라고 생각못했듯이 Piazzolla가 <strong>'54년 Neova Tango</strong>라는 
                    이름으로 새로운 Tango를 시작했을 때도 Argentina사람들은 그의 음악을 너무 <em>Radical</em>하다고 했다고 하는군요.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Piazzolla의 배경
                </h4>

                <p>
                  이탈리아, 트라니출신의 부모님이 Argentine으로 이민 온 후 태어난 그는 뉴욕에서 성장하고 
                  프랑스에 유학을 가는 등 많은 음악적 배경을 갖고 있습니다. 덕분에 영어, 이태리어, 스페니쉬등
                  다국언어를 구사하는 그는 그 모든 언어권의 음악적 유산을 자연스레 소화해냈을 것으로 보여집니다.
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Octeto Buenos Aires - 독특한 편성</h4>
                  
                  <p className="mb-4">
                    소개하는 <strong>Octeto Buenos Aires</strong>는 연주구성의 독특함이 눈에 띱니다.
                  </p>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-300 mb-3">악기 편성</h5>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>• Bandoneon × 2</div>
                      <div>• Violin × 2</div>
                      <div>• Cello</div>
                      <div>• Bass</div>
                      <div>• Guitar</div>
                      <div>• Piano</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">누에보 탱고의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>조성과 화음의 혁신:</strong> 전통 탱고에서 벗어난 현대적 화성</li>
                    <li>• <strong>복합 박자:</strong> 단순한 2/4박자를 넘어선 복잡한 리듬 구조</li>
                    <li>• <strong>감상용 탱고:</strong> 춤을 위한 음악에서 듣기 위한 음악으로</li>
                    <li>• <strong>실내악적 접근:</strong> 클래식 음악의 정교함과 탱고의 열정 결합</li>
                    <li>• <strong>다문화적 배경:</strong> 유럽과 남미 음악 전통의 융합</li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악사적 의의
                </h4>

                <p>
                  Astor Piazzolla는 단순히 전통 탱고를 개량한 것이 아니라, 완전히 새로운 장르인 
                  <strong>'누에보 탱고(Nuevo Tango)'</strong>를 창조했습니다. 이는 민속 음악을 예술 음악의 
                  영역으로 끌어올린 혁명적 시도였으며, 당시 아르헨티나에서는 논란의 대상이 되기도 했습니다.
                </p>

                <p>
                  그의 음악은 탱고의 열정과 멜랑콜리를 잃지 않으면서도 현대적 화성과 복잡한 리듬, 
                  실내악적 정교함을 더하여 전 세계 음악 애호가들에게 사랑받는 새로운 장르를 
                  탄생시켰습니다.
                </p>

                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">추천 감상 포인트</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong>The Central Park Concert:</strong> 라이브 연주의 생동감과 Piazzolla 음악의 
                      즉흥성을 느낄 수 있는 대표적인 앨범
                    </p>
                    <p>
                      <strong>Octeto Buenos Aires:</strong> 8중주 편성의 정교한 앙상블과 누에보 탱고의 
                      정수를 경험할 수 있는 필청 앨범
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Damian Lee님의 Piazzolla 리뷰입니다. 누에보 탱고의 혁신성과 음악사적 의의를 
                  김덕수의 사물놀이와 비교하여 설명한 흥미로운 관점이 인상적입니다.
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