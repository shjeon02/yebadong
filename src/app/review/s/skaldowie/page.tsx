export default function SkaldowiePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-800 via-orange-800 to-yellow-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Skaldowie</h1>
          <div className="text-lg text-gray-300">
            <p>Polish Progressive Rock • Krywan, Krywan puls Stworzenia swiata czesc</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Album Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-red-400">앨범 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold">앨범명</p>
                  <p>Krywan, Krywan puls Stworzenia swiata czesc druga</p>
                </div>
                <div>
                  <p className="font-semibold">발매연도</p>
                  <p>1972 & 1976</p>
                </div>
                <div>
                  <p className="font-semibold">국가</p>
                  <p>Poland</p>
                </div>
                <div>
                  <p className="font-semibold">재발매</p>
                  <p>2000 Yesterday 재발매</p>
                </div>
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰</h2>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-400">Cicco, 이윤직</p>
                  <p className="text-sm">jiklee@netian.com</p>
                </div>
                
                <div className="space-y-4">
                  <p>
                    과연 70년대의 폴란드 음악 수준은 어느 정도였을까? Polish invasion이란 말까지 나오게 
                    만들었던 Abraxas나 Quidam 등의 음악에 매료되었던 분들이라면 한번쯤 품어봤음직한 의문일 겁니다.
                  </p>
                  
                  <p>
                    물론 폴란드의 대표 선수들인 Niemen과 SBB의 앨범들은 국내에도 꽤 소개가 되었었지만 말이죠...
                  </p>
                  
                  <p>
                    이러한 한국 팬들의 아쉬움을 풀어주려는 듯 최근들어 비교적 괜찮은 Polish Rock들이 
                    CD로 재발매되고 있습니다. 폴란드의 대표적인 blues rock group인 Breakout의 초기 앨범들이 
                    이미 발매되어 'Ogien' 이전의 sound를 확인할 수 있게 되었구요...
                  </p>
                </div>
              </div>
            </div>

            {/* Band History */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">밴드 역사</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  Skaldowie라는 그룹은 자국 내에선 Budka Suflera만큼이나 인기 그룹이었던 것 같습니다. 
                  65년 결성 후 진보적인 사운드와 대중적인 사운드를 넘나들며 꾸준히 활동을 하면서 
                  폭넓은 대중적인 인기를 얻은 것으로 알려져 있구요...
                </p>
                
                <p>
                  예전에 구해들었던 'Od wschodu do zachodu slonca'나 'Podroz magiczna' 같은 앨범들은 
                  progressive rock fan들에게는 뭔가 허한 느낌이 드는 것이었지만 올해 드디어 재발매가 
                  이루어진 이 CD는 그야말로 Skaldowie 음악의 정수를 담고 있습니다.
                </p>
                
                <p>
                  이들의 앨범 중 가장 'Progressive한 것'으로 알려진 두 장의 앨범이 한장의 CD로 
                  발매되었다는 사실은 행복한 일이 아닐 수 없네요.
                </p>
              </div>
            </div>

            {/* Album Analysis */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">앨범 분석</h3>
              <div className="space-y-6 text-gray-300">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-400 mb-2">Krywan, Krywan (1972)</h4>
                  <p className="text-sm mb-2">
                    72년작 'Krywan, Krywan'의 하일라이트는 17분이 넘는 첫곡 Krywaniu, Krywaniu입니다.
                  </p>
                  <p className="text-sm mb-2">
                    Skaldowie의 전매 특허이자 '이것이 폴란드 음악이다'라는 느낌의 힘찬 남성 코러스는 
                    조금 우습게 들릴 수도 있지만, 시종 일관 곡을 주도하는 오르간과 자기 감정에 못 이겨 
                    흐느끼는 바이올린의 interplay는 짜릿한 감동을 느끼게 해 줍니다.
                  </p>
                  <p className="text-sm">
                    Krywaniu, Krywaniu에 이어지는 네곡의 소품들도 첫곡에 가려지는 느낌은 있지만 
                    괜찮은 수준의 곡들이구요. 특히 마지막 곡인 Fioletowa Dama는 오르간과 바이올린의 
                    신나는 연주가 다시 한번 등장하는, 마치 첫곡의 축약판 같은 곡입니다.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-400 mb-2">Stworzenia Swiata Czesc Druga (1976)</h4>
                  <p className="text-sm mb-2">
                    76년작 'Stworzenia Swiata Czesc Druga'는 Skaldowie의 또하나의 주목할 만한 앨범입니다. 
                    'Krywan, Krywan'의 영광을 다시 한번 재현해보려는 의도였을까요?
                  </p>
                  <p className="text-sm mb-2">
                    이 앨범 역시 19분이 넘는 첫곡과 나머지 네 곡의 소품을 수록하고 있습니다. 
                    LP로 따지면 A면을 가득 메우고 있었을 타이틀 곡은 Krywaniu, Krywaniu에 버금가는 
                    명곡으로 평가될 만한 곡으로, 예전에 비해 오히려 progressive란 단어가 어울리는 
                    symphonic rock을 들려줍니다.
                  </p>
                  <p className="text-sm">
                    이후 'Podroz magiczna' 같은 앨범에서 들을 수 있는 조금은 경박한 사운드의 원형이 
                    되었음직한 부분들이 아쉽기는 하지만 듣기에 따라선 보다 '세련되어 졌다'고 생각할 
                    수도 있겠네요... 이어지는 곡들은 좀 중량감이 떨어지는 대중적 성향이 강한 소품들이지만 
                    Skaldowie 특유의 훌륭한 발라드를 들을 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Band Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">밴드 정보</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold">결성년도</p>
                  <p className="text-sm">1965년</p>
                </div>
                <div>
                  <p className="font-semibold">국가</p>
                  <p className="text-sm">Poland</p>
                </div>
                <div>
                  <p className="font-semibold">장르</p>
                  <p className="text-sm">Progressive Rock, Symphonic Rock</p>
                </div>
                <div>
                  <p className="font-semibold">인기도</p>
                  <p className="text-sm">자국 내에서 Budka Suflera만큼 인기</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">음악적 특징</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">힘찬 남성 코러스</p>
                  <p className="text-sm">'이것이 폴란드 음악이다'라는 느낌</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">오르간과 바이올린</p>
                  <p className="text-sm">시종 일관 곡을 주도하는 interplay</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">장편 구성</p>
                  <p className="text-sm">17-19분의 대곡들로 구성</p>
                </div>
              </div>
            </div>

            {/* Album Tracks */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">주요 트랙</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold">Krywaniu, Krywaniu</p>
                  <p className="text-sm">17분+ 하일라이트 트랙</p>
                </div>
                <div>
                  <p className="font-semibold">Fioletowa Dama</p>
                  <p className="text-sm">오르간과 바이올린의 축약판</p>
                </div>
                <div>
                  <p className="font-semibold">Stworzenia Swiata Czesc Druga</p>
                  <p className="text-sm">19분+ 타이틀 트랙</p>
                </div>
              </div>
            </div>

            {/* Polish Rock Context */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">폴란드 록 컨텍스트</h3>
              <div className="space-y-2 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Breakout</p>
                  <p className="text-sm">대표적인 blues rock group</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Marek Grechuta</p>
                  <p className="text-sm">음유 시인, Anawa와 함께</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Budka Suflera</p>
                  <p className="text-sm">비슷한 인기도의 밴드</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <a 
            href="/review/s" 
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
          >
            ← S 폴더로 돌아가기
          </a>
          <div className="text-gray-500 text-sm">
            Skaldowie - Polish Progressive Rock
          </div>
        </div>
      </div>
    </div>
  );
} 