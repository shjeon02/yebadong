export default function SinkadusPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-800 via-teal-800 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Sinkadus</h1>
          <div className="text-lg text-gray-300">
            <p>Swedish Progressive Rock • Aurum Nostrum</p>
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
              <h2 className="text-2xl font-bold mb-4 text-green-400">앨범 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold">앨범명</p>
                  <p>Aurum Nostrum</p>
                </div>
                <div>
                  <p className="font-semibold">아티스트</p>
                  <p>Sinkadus</p>
                </div>
                <div>
                  <p className="font-semibold">국가</p>
                  <p>Sweden</p>
                </div>
                <div>
                  <p className="font-semibold">장르</p>
                  <p>Progressive Rock</p>
                </div>
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰</h2>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-400">Fish, 신인철</p>
                  <p className="text-sm">icshin@bioneer.kaist.ac.kr</p>
                </div>
                
                <div className="space-y-4">
                  <p>
                    Anglagard의 재래니 뭐니 말들이 많아 궁금해서 한번 사본 스웨덴의 신진그룹의 데뷔앨범입니다. 
                    이 친구들의 홈페이지에서 가져온 사운드 클립을 들어보신 분들은 아시겠지만 
                    아주 Anglagard와 비슷한 곡 전개를 들려주었었죠.
                  </p>
                  
                  <p>
                    마치 Anglagard와 Anekdoten을 합쳐놓은듯한 6인조의 구성이지요? 
                    좀 아쉬운 점이라면 이들밴드의 cellist Lena Petterson은 
                    Anekdoten의 Anna Sofi Dalberg처럼 섹시하지 못하다는 점도 있겠구요 :-)
                  </p>
                  
                  <p>
                    수록곡도 Anglagard의 Hybris를 연상시키듯이 네곡의 장편들로 구성되어있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Track Analysis */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">트랙 분석</h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">Snalblast (18:28)</h4>
                  <p className="text-sm">
                    제가 이들 멤버라면 첫곡으로 내세우기엔 다른곡들이 더 적합하지 않았을까 싶은데. 
                    intro의 flute 사운드에 이은 Genesis/Anglagard적인 연주가 좀 구태의연한 감이 없잖아 있구요 
                    18분이라는 러닝타임을 끊임없는 긴장으로 몰고 가기엔 아이디어가 부족하다는 생각입니다.
                  </p>
                  <p className="text-sm mt-2">
                    곳곳에서 bass와 건반의 하모니는 Chris Squire와 Patrick Moraz가 
                    Chris Squire의 솔로앨범 Fish out of Water에서 보여줬던 분위기를 느낄 수 있게 해주네요.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">Manuel (11:06)</h4>
                  <p className="text-sm">
                    두번째 곡 역시 조금 맛이간... Anglagard 스타일입니다. Anglagard 멤버들이 
                    10년쯤 후에 다시 모여서 과거의 영화(?)를 되찾기 위해 음반을 낸다면 이런 트랙이 나올것 같네요.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">Attestupan (12:04)</h4>
                  <p className="text-sm">
                    마지막 트랙 Attestupan은 앞으로 몇주일간 나의 사랑을 담뿍 받을만한 
                    북구의 서정이 담뿍 담긴 곡입니다. 클라이막스가 제대로 가려운곳을 찔러주고 
                    나름대로 상승효과를 일으키는 곡 구성이 이들 나름대로의 독창성(?)조차 찾을 수 있게 해주는군요.
                  </p>
                </div>
              </div>
            </div>

            {/* Overall Assessment */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">전체 평가</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  전체적으로 Anglagard와의 비교를 자꾸 하게 되는데... Anglagard의 Hybris에서는 
                  부분부분 삽입되었던 vocal이 단순히 다른 악기의 interplay를 보완하는 역할을 해주는데 불과하였지만 
                  이들의 음악에선 물론 vocal technique도 Anglagard보단 주류적인 의미에서는 뛰어나다고 생각이 들구요 
                  좀더 전체적인 트랙의 구성에서 vocal이 차지하는 비중이 크군요.
                </p>
                
                <p>
                  또한 두명의 vocalist(남자/여자)가 각기 코러스와 리드를 번갈아 하는 부분이 무척 매력적입니다.
                </p>
                
                <p>
                  Anglagard의 두번째 앨범 Epilog의 조금은 차가운 구성에 아쉬움을 느꼈을 분이라면 
                  전체적으로 Epilog보다 더 좋아하실 수 있는 앨범이라는 생각도 듭니다.
                </p>
                
                <p>
                  개인적으로 뭔가 편견을 가지고 있는건지도 모르지만 요즘의 신진그룹들 중에 몇몇은... 
                  심지어는 Ars Nova같은 일본 그룹들에서도 Spock's Beard같은 미국그룹에서도 
                  Anglagard의 향취가 느껴지는것 같더군요.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Band Members */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">멤버</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold">Rickard Bistrom</p>
                  <p className="text-sm">Bass, Guitar, Vocal</p>
                </div>
                <div>
                  <p className="font-semibold">Frederik Karlsson</p>
                  <p className="text-sm">Keyboards</p>
                </div>
                <div>
                  <p className="font-semibold">Mats Svensson</p>
                  <p className="text-sm">Drums</p>
                </div>
                <div>
                  <p className="font-semibold">Lena Petterson</p>
                  <p className="text-sm">Cello</p>
                </div>
                <div>
                  <p className="font-semibold">Robert Sjoback</p>
                  <p className="text-sm">Guitars</p>
                </div>
                <div>
                  <p className="font-semibold">Linda Johansson</p>
                  <p className="text-sm">Flute, Vocals</p>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">트랙 리스트</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>1. Snalblast</span>
                  <span className="text-sm">18:28</span>
                </div>
                <div className="flex justify-between">
                  <span>2. Manuel</span>
                  <span className="text-sm">11:06</span>
                </div>
                <div className="flex justify-between">
                  <span>3. Argen</span>
                  <span className="text-sm">16:51</span>
                </div>
                <div className="flex justify-between">
                  <span>4. Attestupan</span>
                  <span className="text-sm">12:04</span>
                </div>
              </div>
            </div>

            {/* Similar Artists */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">비슷한 아티스트</h3>
              <div className="space-y-2 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Anglagard</p>
                  <p className="text-sm">Swedish Progressive Rock</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Anekdoten</p>
                  <p className="text-sm">Swedish Progressive Rock</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Genesis</p>
                  <p className="text-sm">Early Progressive Rock</p>
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
            Sinkadus - Aurum Nostrum
          </div>
        </div>
      </div>
    </div>
  );
} 