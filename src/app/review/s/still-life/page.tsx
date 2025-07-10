import Link from 'next/link';

export default function StillLifePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Still Life</h1>
          <p className="text-xl text-gray-300">
            Still Life (1970) - 영국 프로그레시브 록
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Reviewer Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4">
            <p className="font-semibold text-purple-400">유영재</p>
            <p className="text-sm text-gray-400">espiritu@hitel.net, 평점: 93.6</p>
          </div>
        </div>

        {/* Album Artwork & Discovery */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 발견과 재킷</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              흉측한 두개골의 모습과 그 두개골의 머리위에 얹혀있는 분홍빛의 꽃들이 
              묘한 대조를 이루고 있는 인상적인 재킷 사진... 
              바로 1970년에 영국 밴드인 Still Life가 내놓은 동명 타이틀 앨범의 재킷이다.
            </p>

            <p>
              이 앨범의 재킷이 무엇을 의미하는지는 솔직히 잘은 모르겠지만 
              얼마 전에 서점에서 책을 뒤져보다가 눈에 많이 익은 표지 그림을 발견했었는데, 
              바로 이 앨범의 재킷과 유사한 사진을 표지에 담은 책이었다. 
              그것은 미술 관련 서적이었으며, 그 책의 제목이 다름 아닌 'Still Life'였다.
            </p>

            <p>
              그래서 나름대로 추측하건데 이 앨범의 재킷은 어느 미술 작가의 유명한 작품이 아닐까 생각도 해보았다. 
              그룹의 이름도 Still Life (정물화)이고 해서... 근데 아직도 확실히는 모르겠다. 
              본인이 미술에 관해서는 전혀 아는게 없기에.....
            </p>
          </div>
        </div>

        {/* Band Background */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">밴드 배경</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              이 밴드는 그동안 매니아들 사이에서는 상당히 생소한 그룹으로 알려져 왔었으나 
              얼마전에 외국에서 일고 있는 명반 재발굴 작업에 이 작품도 선정이 되어서, 
              뒤늦게서야 이 작품의 진가가 매니아들 사이에 알려지게 된 것이다.
            </p>

            <p>
              그동안 이들이 사람들 사이에서 알려지지 않아서 인지 이들에 대한 자료는 매우 부족한 상태이며 
              그 때문에 총 4인조로 구성된 이들의 각자의 멤버 이름도 아직까지는 밝혀지지 않고 있다.
            </p>
          </div>
        </div>

        {/* Musical Style */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">음악적 스타일</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              1970년도에 발매된 이들의 유일한 앨범은 전체적으로 60년대말의 사이키델릭 록과 블루스록, 
              그리고 70년대의 하드록이 융합된 듯한 사운드를 들려주고 있다. 
              각 멤버들의 연주 실력은 나무랄데 없이 훌륭하며, 특히 오르간이 사운드의 주축을 이루고 있다.
            </p>

            <p>
              이 점에서 이 앨범에 앞서 소개했던 Cressida의 음악 스타일과 유사한 점을 발견할 수 있다. 
              그러나 Cressida의 음악이 블루지한 스타일에 가까운 음악을 구사하고 있다면, 
              이 Still Life는 좀더 하드한 사운드를 연주하는 그룹이라 할 수 있겠다.
            </p>

            <div className="bg-gray-700 p-4 rounded">
              <p className="text-sm text-gray-400">
                ( 솔직히 오르간이 전체 사운드의 핵을 이루고 있다고 해서 Still Life와 Cressida만을 비교하는 것은 무리이다. 
                왜냐하면 이 당시의 영국의 프로그레시브 밴드들은 대부분이 오르간을 전면에 내세웠기 때문이다. 
                그런데도 여기에서 굳이 위 두 그룹을 비교하는 이유는 이러한 사운드를 연주하는 그룹중에 
                지금까지 필자가 언급했던 밴드가 아직 이 두 그룹뿐이었기 때문이다. )
              </p>
            </div>
          </div>
        </div>

        {/* Track Analysis */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">곡별 분석</h2>
          <div className="space-y-6">
            {/* People In Black */}
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">People In Black</h3>
              <div className="space-y-2 text-gray-300">
                <p>
                  이 앨범에서 가장 하이라이트를 이루는 곡은 앨범의 톱 트랙인 'People In Black'이다. 
                  이 곡 하나만으로도 이 음반은 충분히 인정 받을 가치가 있다고 할 수 있을 정도로 
                  이 곡이 앨범에서 차지하는 위치는 절대적이라 하겠다.
                </p>
                <p>
                  쓸쓸한 분위기의 어쿠스틱 기타와 플룻의 인트로로 점차 강렬해지는 사운드, 
                  특히 60년대 후반의 사이키델릭 록을 연상시키는 오르간의 연주와 힘이 넘치는 드러밍은 일류급이며 
                  리드 보컬의 뒤에서 들려오는 하이톤의 백보컬도 매력적이다.
                </p>
                <p className="font-semibold text-purple-300">
                  브리티쉬 록 팬이라면 필청해야 할 숨은 명곡이다.
                </p>
              </div>
            </div>

            {/* October Witches */}
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">October Witches</h3>
              <p className="text-gray-300">
                세번째에 수록된 'October Witches'는 이 앨범에서 가장 현란한 오르간 연주를 들려주고 있는 곡으로 
                곡 구성이나 멜로디는 조금은 진부한 느낌도 주긴 하지만 
                그러한 점이 나름대로 매력적으로 들리기도 하는 곡이다.
              </p>
            </div>

            {/* Love Song No.6 */}
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Love Song No.6</h3>
              <p className="text-gray-300">
                다른 곡들과는 달리 경쾌한 어쿠스틱 기타 연주로 시작되는 'Love Song No.6'는 
                끈적끈적 하게 달라붙는 듯한 리드 보컬의 허스키한 목소리와 
                중반부의 오르간과 드럼, 베이스의 합주가 멋지게 어우러진 애절한 사랑 노래이다.
              </p>
            </div>

            {/* Dreams */}
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Dreams</h3>
              <p className="text-gray-300">
                몽환적인 분위기의 오르간과 자아도취적인 독백으로 시작되는 'Dreams'는 
                사이키델릭적인 요소가 가장 두드러지게 나타나는 곡이다.
              </p>
            </div>

            {/* Time */}
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Time</h3>
              <p className="text-gray-300">
                뒤를 이어 평범한 록넘버인 'Time'이 앨범의 마지막을 장식하고 있는데, 
                솔직히 앨범의 대미를 장식하기에는 조금은 떨어지는 곡이 아닌가 하는 아쉬움이 남는다.
              </p>
            </div>
          </div>
        </div>

        {/* Album Structure Critique */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 구성의 아쉬움</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              사실, 이 앨범을 접하면서 가장 아쉬운 점이 있었다면 그건 곡 배열상의 문제였다. 
              이 앨범을 처음 접할때 첫곡으로 수록된 'People In Black'이 너무나 강한 인상을 주기에 
              그 다음으로 수록되어 있는 나머지 곡들은 쉽사리 귀에 들어오지 않는 헛점이 있었다.
            </p>

            <p>
              이 나머지 곡들도 결코 그냥 흘려 들어버릴 가벼운 곡들이 아님에도 불구하고 
              이 곡들을 뇌리에 남게 하는데는 적지 않은 시간이 걸려야만 했다.
            </p>

            <p>
              다시말해서, 작품의 클라이막스를 중간이나 마지막에 두었다면 좋았을것을 
              여기에서는 처음부터 절정으로 시작했기에 그 다음에는 하강 곡선을 그리며 작품이 전개되어 나간다는 것이다. 
              필자의 귀가 좀 이상한건지도 모르겠지만 암튼 개인적인 아쉬움은 이러한 것이었다.
            </p>
          </div>
        </div>

        {/* Final Assessment */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">최종 평가</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              그리고 다소 진부한 몇몇곡도 흠이긴 하지만 초기 브리티쉬 프로그레시브 록 작품으로서 
              충분한 가치를 지닌 음반이라 생각된다.
            </p>

            <p>
              수많은 프로그레시브 밴드들이 그러하듯이, 이 그룹 역시 후속작이 발표되지 않았다는 것이 
              상당히 안타깝게 느껴지는 밴드중의 하나였다.
            </p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <p><span className="font-semibold">밴드:</span> Still Life</p>
              <p><span className="font-semibold">앨범:</span> Still Life</p>
              <p><span className="font-semibold">발매연도:</span> 1970</p>
              <p><span className="font-semibold">국가:</span> 영국</p>
            </div>
            <div>
              <p><span className="font-semibold">구성:</span> 4인조</p>
              <p><span className="font-semibold">장르:</span> 사이키델릭/블루스/하드록 융합</p>
              <p><span className="font-semibold">특징:</span> 오르간 중심 사운드</p>
              <p><span className="font-semibold">상태:</span> 유일한 앨범</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/review/s/stern-combo"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            ← Previous: Stern Combo Meissen
          </Link>
          <Link 
            href="/review/s/stone-angel"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            Next: Stone Angel →
          </Link>
        </div>
      </main>
    </div>
  );
} 