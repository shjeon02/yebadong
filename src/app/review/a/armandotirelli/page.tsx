import Link from "next/link";

export default function ArmandoTirelliPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Armando Tirelli</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-lg">이탈리아 출신의 프로그레시브 록 아티스트</p>
            <p className="text-sm text-gray-600 mt-2">Italian Progressive Rock Artist</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-semibold mb-3 text-blue-700">아티스트 개요</h3>
            <div className="space-y-4 text-sm">
              <p>Armando Tirelli는 이탈리아 출신의 프로그레시브 록 아티스트로, 1970년대 이탈리아 프로그레시브 록 씬에서 활동한 인물입니다.</p>
              
              <p>이탈리아 프로그레시브 록의 황금기였던 1970년대에 PFM(Premiata Forneria Marconi), Banco del Mutuo Soccorso, Le Orme, Area 등과 함께 이탈리아 프로그레시브 록의 풍성한 스펙트럼을 형성하는 데 기여했습니다.</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-semibold mb-3 text-yellow-700">음악적 특징</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>이탈리아 프로그레시브 록의 전형적인 특징을 보여주는 아티스트</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>1970년대 이탈리아 록 음악의 특색을 담은 작품 활동</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-600">•</span>
                <span>이탈리아 프로그레시브 록 씬의 다양성을 보여주는 일원</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold mb-3 text-green-700">역사적 배경</h3>
            <div className="space-y-4 text-sm">
              <p>1970년대 이탈리아는 프로그레시브 록의 황금기를 맞이했습니다. 이 시기에는 다음과 같은 대표적인 밴드들이 활동했습니다:</p>
              
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-green-600 mb-2">주요 밴드들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• PFM (Premiata Forneria Marconi)</li>
                    <li>• Banco del Mutuo Soccorso</li>
                    <li>• Le Orme</li>
                    <li>• Area</li>
                    <li>• Goblin</li>
                    <li>• New Trolls</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded">
                  <h4 className="font-semibold text-green-600 mb-2">특징</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 클래식 음악의 영향</li>
                    <li>• 이탈리아 민속 음악 요소</li>
                    <li>• 극적이고 감정적인 표현</li>
                    <li>• 복잡한 구성과 편곡</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold mb-3 text-purple-700">이탈리아 프로그레시브 록의 의미</h3>
            <div className="space-y-3 text-sm">
              <p>이탈리아 프로그레시브 록은 단순히 영국이나 독일의 프로그레시브 록을 모방한 것이 아니라, 이탈리아만의 독특한 음악적 정체성을 가지고 있었습니다.</p>
              
              <p>클래식 음악의 전통이 깊은 이탈리아의 문화적 배경과 지중해적 감성이 결합되어 다른 나라의 프로그레시브 록과는 구별되는 독특한 색채를 만들어냈습니다.</p>
              
              <p>Armando Tirelli 역시 이러한 이탈리아 프로그레시브 록의 전통 속에서 자신만의 음악적 색깔을 추구한 아티스트로 평가받고 있습니다.</p>
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