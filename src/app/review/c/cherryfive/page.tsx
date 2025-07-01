import Link from 'next/link';

export default function CherryFivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cherry-50 to-red-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-2">Cherry Five</h1>
          <p className="text-lg text-red-600">Goblin 결성 전 Massimo Morante와 Claudio Simonetti의 프로젝트</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-red-700">국가:</span> 이탈리아</p>
              <p><span className="font-semibold text-red-700">결성:</span> 1974년</p>
              <p><span className="font-semibold text-red-700">앨범:</span> Cherry Five (1975)</p>
              <p><span className="font-semibold text-red-700">레이블:</span> Cinevox</p>
            </div>
            <div>
              <p><span className="font-semibold text-red-700">핵심 멤버:</span> Massimo Morante, Claudio Simonetti</p>
              <p><span className="font-semibold text-red-700">보컬:</span> Tony Tartariny</p>
              <p><span className="font-semibold text-red-700">드럼:</span> Carlo Bordini</p>
              <p><span className="font-semibold text-red-700">후속:</span> Goblin 결성</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">김</span>
            </div>
            <div>
              <p className="font-semibold text-red-800">김웅규 (ledzep1)</p>
              <p className="text-sm text-red-600">1992년 7월</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🍒 Goblin의 전신</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">결성 배경</h3>
              <p className="text-red-700 mb-3">
                74년도에 이탈리아에서 결성된 이들은 정확하게 몇인조로 구성되었는지 알수가 없습니다. 
                제가 아는 지식으로는 기타리스트(보컬 약간) 마시모 모란떼, 키보디스트 크라우디오 시모네띠 만이 정확한 맴버이고...
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-red-300">
                <p className="text-red-800 font-medium">
                  찬조 드러머에는 RUSTICHELLI E BORDINI(2인조 그룹)의 73년도 유일의 앨범 
                  OPERA PRIMA를 발표한 카를로 보르디니가 리듬파트를 세션해 주었고, 
                  보컬에는 토니 타르따니가 맡았습니다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Goblin으로의 발전</h3>
              <p className="text-orange-700">
                75년도에 본작을 끝으로 마시모와 크라우디오는 <strong>GOBLIN을 결성</strong>합니다. 
                체리화이브는 고블린(Goblin)의 클라우디오 시모네티와 마시모란데의 유니트로서 
                이 두사람이 모든곡을 쓰고 있다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">💿 앨범 구성 및 곡 감상</h2>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">Cherry Five (1975, Cinevox)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-red-700">
              <div>
                <h4 className="font-semibold mb-2">A면:</h4>
                <ul className="space-y-1">
                  <li>• Country graveyard</li>
                  <li>• The picture of dorian gray</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">B면:</h4>
                <ul className="space-y-1">
                  <li>• The swan is a murderer</li>
                  <li>• Oliver</li>
                  <li>• My little cloud land</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-2">곡별 특징</h3>
              <ul className="space-y-2 text-red-700">
                <li>• <strong>Country Graveyard & The Picture of Dorian Gray:</strong> 올갠소리가 마치 제네시스를 연상케 해줍니다. 두곡다 8분이 넘는 대곡으로 잔잔하면서도 난해한 곡구성을 이룹니다.</li>
                <li>• <strong>The Swan Is A Murderer Part 1:</strong> 이 앨범의 노래중에서 가장 짧고 단백함을 줍니다.</li>
                <li>• <strong>The Swan... Part 2 & Oliver:</strong> 제 개인적으로 이 앨범에서 가장 좋아하고 많이 듣는 곡입니다. 이태리록의 매력인 '공격적인 사운드'를 충실하게 보여주는 작품입니다.</li>
                <li>• <strong>My Little Cloud Land:</strong> 현란하지 않은 사운드로 곡을 이끌어 나갑니다.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🎵 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">사운드 스타일</h3>
              <p className="text-red-700">
                사운드는 약간 하드한 프로그레시브 록이라고 부를수 있는것으로서, 
                때때로 앞에 나오는 멜로트론의 소리가 꽤 매력적이다. 
                Goblin의 일련의 작품으로 상상한다는 것은 어려운 일이지만, 
                강력하게 말한다면 [Il fantastice viaggio del Bagaroz zo mark]의 작품에 가깝게 느껴진다.
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Genesis적 요소</h3>
              <p className="text-orange-700">
                첫 두 곡에서 들려주는 올갠 사운드는 초기 Genesis를 연상시키며, 
                8분이 넘는 대곡들의 잔잔하면서도 난해한 구성은 
                70년대 이탈리아 프로그레시브의 특징을 잘 보여줍니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">📝 평론가들의 평가</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">조영래 ★☆</h3>
              <p className="text-red-700 mb-2">
                전형적인 이탈리아 록중의 하나. 정신없이 드럼은 두드리고 베이스는 달리고, 
                무엇을 연주하고자 하는지 알아채기 힘든 악기들의 좌충우돌로 이루어진 앨범.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-red-300">
                <p className="text-red-800 text-sm">
                  취향에 따라서는 이런 현란하고 정신사나운 연주를 좋아한다면 맘에 들을 지도 모르겠다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">유영재 ★★</h3>
              <p className="text-orange-700 mb-2">
                겉으로 보기엔 듀오형식의 2인조 그룹이지만 여러 사이드 멤버가 참가해주고 있다. 
                특히 후에 Goblin의 멤버가 되는 인물들의 영향이 매우 커보인다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-orange-300">
                <p className="text-orange-800 text-sm">
                  'Oliver'라는 곡이 국내 심야방송에서 이따금 소개되어서 몇몇 매니아들의 사랑을 받았었다. 
                  전체적으로 볼 때 그다지 권할만한 정도의 앨범은 못되는 듯 싶다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8 border border-red-200">
          <h3 className="text-xl font-bold text-red-800 mb-4">🍒 Cherry Five의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-red-700">
            <div>
              <h4 className="font-semibold mb-2">프로젝트 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Goblin 결성 전 예비 단계</li>
                <li>• Massimo Morante + Claudio Simonetti</li>
                <li>• Opera Prima의 Carlo Bordini 참여</li>
                <li>• 1975년 단일 앨범 발표</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Genesis적 올갠 사운드</li>
                <li>• 이탈리아 록의 공격적 사운드</li>
                <li>• 멜로트론의 매력적 활용</li>
                <li>• 하드한 프로그레시브 록</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">🎭 자켓 디자인</h3>
          <p className="text-yellow-700">
            자켓 디자인은 개인적으로는 그다지 멋있게 보이지 않는데 데미뜨리오는 
            멋있다고 난리부르스를 치더군요. (데미뜨리오 눈은 확실히 낮아!!!)
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-red-600 text-sm">
            15/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 