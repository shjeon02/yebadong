export default function SoftMachinePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Soft Machine</h1>
          <div className="text-lg text-gray-300">
            <p>Canterbury Sound Pioneers • Jazz Rock • Progressive</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Band Overview */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">밴드 개요</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  Soft Machine은 캔터베리 패밀리의 맏형이면서 아트록과 재즈를 넘나들며 
                  양쪽 장르에서 모두 평가받는 그룹입니다. 재즈록이나 캔터베리 사운드의 
                  선구자로서 매우 중요한 위치를 차지하고 있습니다.
                </p>
                <p>
                  켄터베리 사운드에 있어서는 매우 큰 비중을 차지하는 까닭에 
                  이쪽 사운드를 무진장 싫어하는 이들은 아예 음반을 보더라도 
                  살려고 들지를 않을 것입니다.
                </p>
              </div>
            </div>

            {/* Album Reviews */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">앨범 리뷰</h2>
              
              {/* First Album */}
              <div className="space-y-6 text-gray-300">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">1st Album (1968, MCA)</h3>
                  <div className="border-l-4 border-purple-500 pl-4 mb-4">
                    <p className="font-semibold text-purple-400">전형철, GURVITZ</p>
                    <p className="text-sm">97.3</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p>
                      트리오 구성으로 첫 데뷔음반을 발표하게 됩니다. GONG의 리더인 데이빗 알렌이 
                      그룹을 등진 뒤에 이 음반이 나오게 되니 당연히 그의 이름은 앨범 어디에서도 
                      찾아볼 길이 없습니다.
                    </p>
                    
                    <p>
                      생각외로 듣기에 편한 음악을 들려줍니다. 첫 음반이라서 그런지 아직은 
                      다듬어지지 않은 풋풋함이 있고 거의 전곡에 걸쳐서 보컬을 들려주고 있기때문에 
                      매우 만족스런 음악일 수가 있기 다.
                    </p>
                    
                    <p>
                      아마 이쪽 사운드를 싫어하는 사람도 그럭저럭 괜찮은데 하는 말을 할 수 있는 
                      음반임에 틀림없습니다. 의외로 신중하지 않고 부담없는 가벼운 사운드를 
                      들려주고 있습니다.
                    </p>
                    
                    <p>
                      Robert Wyatt의 재즈적인 드럼도 들을만하고 보컬은 좀 마음에 드는 것은 
                      아니지만 그럭저럭 봐줄만은 합니다. 오르간이 주요 악기로 부각되어서 
                      그런지는 모르지만 감정을 자극하는 오르간소리를 간혹 만날 수가 있습니다. 
                      풋풋함에 절여있다고나 할까요.
                    </p>
                  </div>
                </div>

                {/* Third Album */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Third (Double Album)</h3>
                  <div className="border-l-4 border-purple-500 pl-4 mb-4">
                    <p className="font-semibold text-purple-400">강주현, hspring</p>
                    <p className="text-sm">94.11</p>
                  </div>
                  
                  <div className="space-y-3">
                    <p>
                      누가... 어떤 그룹 좋아하냐고 물으면... 전 조금도 망설임없이, 
                      Soft Machine을 말합니다. 하지만... 그렇기 때문에 오히려 사람들에게 
                      Soft Machine의 음반을 추천하지는 않습니다.
                    </p>
                    
                    <p>
                      무수히(?) 많은 사람들이 이미 좋다고 인정해버린 앨범입니다. 
                      무지 좋아여...(히..요거 객관적인거 맞나여?)
                    </p>
                    
                    <p>
                      이전에 발표한 1,2집과 비교해볼때... 그 구성면에서 엄청난 차이를 보입니다. 
                      당시 펑크 무브먼트의 영향으로 인하여 곡 길이가 무척 짧은 곡들로 차 있던 
                      1,2집과는 대조적으로... 3집은 더블앨범으로 발표되었음에도 단 4곡이 수록되어있습니다.
                    </p>
                    
                    <p>
                      각 면에 한곡씩이죠... 각기... 그룹의 멤버가 한면씩을 할당받아서 
                      자신의 음악세계를 마음껏 펼치고 있습니다. 물론... 당시의 Soft Machine이 
                      3인조였으니까... 하나 남는 면은 리더라는 직함을 이용하여 Ratledge가 차지합니다.
                    </p>
                    
                    <p>
                      각 멤버들의 개성있는 음악세계를 잘 표현해주고 있습니다. 
                      사실... 이러한 구성의 음반은 각 멤버들의 고른 음악적인 재능이 
                      뒷받침 되어야만 가능한것인데... 바로 그러한 앨범이 이들의 대표적인 명반이 
                      되었다는 점에서 Soft Machine의 음악세계가 얼마나 견고한 바탕위에 
                      세워진것인가를 알 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Robert Wyatt Solo */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">관련 아티스트</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-400">Robert Wyatt / Rock Bottom (1974)</h4>
                  <div className="border-l-4 border-purple-500 pl-4 mt-2">
                    <p className="font-semibold text-purple-400">윤석화, 577102</p>
                    <p className="text-sm">92.8</p>
                  </div>
                  <p className="text-sm mt-2">
                    Soft Machine의 핵심 멤버였던 Robert Wyatt의 솔로 작품으로, 
                    그의 독특한 음악 세계를 보여주는 중요한 앨범입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Band Members */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">주요 멤버</h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Mike Ratledge</p>
                  <p className="text-sm">Organ, Keyboards (리더)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Robert Wyatt</p>
                  <p className="text-sm">Drums, Vocals</p>
                  <p className="text-xs">최고의 아이디어 맨, 환상적인 목소리</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Kevin Ayers</p>
                  <p className="text-sm">Lead Guitar (초기)</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Hugh Hopper</p>
                  <p className="text-sm">Bass (2집부터 Ayers 대신 참여)</p>
                </div>
              </div>
            </div>

            {/* Guest Musicians (Third) */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">게스트 뮤지션 (Third)</h3>
              <div className="space-y-2 text-gray-300">
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-semibold">Elton Dean</p>
                  <p className="text-sm">Saxophone</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-semibold">Lyn Dobson</p>
                  <p className="text-sm">Saxophone</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-semibold">Nick Evans</p>
                  <p className="text-sm">Trombone</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-semibold">Jimmy Hastings</p>
                  <p className="text-sm">Flute</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-semibold">Rab Spall</p>
                  <p className="text-sm">Violin</p>
                </div>
              </div>
            </div>

            {/* Track List (1st Album) */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">1st Album 트랙 리스트</h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p className="font-semibold mb-2">Side A</p>
                <p>1. Hope for Happiness</p>
                <p>2. Joy of a Toy</p>
                <p>3. Hope for Happiness (Reprise)</p>
                <p>4. Why Am I So Short?</p>
                <p>5. So Boot If At All</p>
                <p>6. A Certain Kind</p>
                
                <p className="font-semibold mb-2 mt-4">Side B</p>
                <p>7. Save Yourself</p>
                <p>8. Priscilla</p>
                <p>9. Lullabye Letter</p>
                <p>10. We Did It Again</p>
                <p>11. Plus Belle Qu'une Poubelle</p>
                <p>12. Why Are We Sleeping?</p>
                <p>13. Box 25/4 Lid</p>
              </div>
            </div>

            {/* Canterbury Sound */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">캔터베리 사운드</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">선구자 역할</p>
                  <p className="text-sm">캔터베리 패밀리의 맏형</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">장르 융합</p>
                  <p className="text-sm">아트록과 재즈를 넘나드는 음악</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">영향력</p>
                  <p className="text-sm">양쪽 장르에서 모두 평가받음</p>
                </div>
              </div>
            </div>

            {/* Album Features */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">앨범별 특징</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">1st Album</p>
                  <p className="text-sm">풋풋함, 전곡 보컬, 듣기 편한 음악</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">Third</p>
                  <p className="text-sm">더블앨범, 4곡 구성, 멤버별 개성 표현</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">특이한 커버</p>
                  <p className="text-sm">1st 앨범 - 동그란 원이 돌아가는 디자인</p>
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
            Soft Machine - Canterbury Sound Pioneers
          </div>
        </div>
      </div>
    </div>
  );
} 