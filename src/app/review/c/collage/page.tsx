export default function CollagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-teal-100">
              🎨 Collage 🇵🇱
            </h1>
            <p className="text-xl text-teal-200 mb-6">
              폴란드 네오 프로그레시브의 대표주자
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-teal-500/30 px-3 py-1 rounded-full">폴란드</span>
              <span className="bg-teal-500/30 px-3 py-1 rounded-full">네오 프로그레시브</span>
              <span className="bg-teal-500/30 px-3 py-1 rounded-full">Marillion 계열</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              최근 <strong>SI label에 pick up되어 Moonshine</strong>이란 영어로 된 앨범을 발표한 Poland의 prog group 'Collage'의 앨범입니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              기실 Marillion ML 등에서 칭찬을 많이 들어 trade로 구했읍니다만 퍼지고 앉아 들어보니 기존의 다른 Marillion clone과는 IMHO, 조금 격이 다른.. 무척 <strong>동구권의 입김을 느낄수있는</strong>.. 아.. <strong>Polish folk의 영향</strong>이라고나 할까요..
            </p>
            <p className="text-gray-700 leading-relaxed">
              마치 <strong>Red Jasper의 Poland version</strong>이라고나 할 sound를 들려줍니다.
            </p>
          </div>
        </section>

        {/* Album Art */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 앨범 아트워크</h2>
            
            <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
              <h3 className="text-xl font-semibold text-cyan-800 mb-4">재미있는 커버 디자인</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sleeve design은 역시 Marillion에게 영향을 많이 받았는지 <strong>숲속에서 요정을 닮은 Jester(광대)가 Coca Cola를 마시고 있는</strong> 그림이네요.. 무척 재미있어요..
              </p>
              <p className="text-gray-700 leading-relaxed">
                이러한 유머러스한 접근은 Collage만의 독특한 정체성을 보여주는 요소 중 하나입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Basnie Album */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💿 Ba(s)nie 앨범 리뷰</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-6">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Fish의 첫 인상</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                도대체 곡목이나 member들 이름은 어려운 Poland 말이라 기억이 잘 안나고 <strong>title track인 10분짜리 Basnie</strong>, 그리고 첫곡, 두번째 곡의 melody가 아직 귓가에서 맴도는 군요..
              </p>
              <p className="text-gray-700 leading-relaxed">
                IRC 등에서 Poland의 prog fan을 많이 만나 얘기를 들어보니 <strong>Poland에는 꽤 훌륭한 team들이 많은것</strong> 같더군요.. 혹시 다른 Polish prog가 있으면 들어보고 싶네요...
              </p>
            </div>
          </div>
        </section>

        {/* Moonshine Album */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌙 Moonshine 앨범 분석</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">롱달의 분석</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fish님에게 추천을 받고 들어보게된 앨범입니다. 예바동 Review에 Fish님이 써놓은 글을 읽고 랜짓에게서 구입했습니다. <strong>_Basnie_ 가 첫번째 앨범이고, 두번째가 _Moonshine_</strong>인거 같습니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  동구권 포크의 영향을 받은 그룹이라고 말하셨는데요. 저는 아직 동구권과 서구권을 구분할 수 있는 공력이 되질 못해서요. 다만 중간 중간에 들리는 <strong>acoustic 기타의 소리나 바이올린 소리같은 키보드</strong>는 포크의 영향을 받은 것 같습니다.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">음악적 특징</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  첫번째 곡부터 <strong>웅장한 키보드의 연주</strong>로 시작합니다. 마치 <strong>Pallas의 Sentinel의 키보드</strong>를 연상시킵니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  전체적인 사운드는 여느 마릴리온 계열의 그룹들과 비슷합니다. 제생각에는 <strong>악기의 역할 분담(기타,베이스,드럼,키보드)이 지금까지 들어본 마릴리온 비슷한 그룹중에 젤 나은 거</strong> 같습니다.
                </p>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">동구권 특색</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fish의 유머러스한 구분법: "그냥 좀더 못알아들을 소리를 보컬리스트가 중얼거리면.. 동구권인것 같구..:-)". Collage의 Moonshine은 정말 <strong>SI label이 오랜만에 내놓은 들을만한 neo-prog 계열의 음악</strong>인것 같습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Band Members */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👥 밴드 멤버</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-3">핵심 멤버들</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Robert Amirian</strong> - vocals, acoustic guitar</li>
                  <li><strong>Mirek Gil</strong> - guitars</li>
                  <li><strong>Wojtek Szadkowski</strong> - drums</li>
                </ul>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-800 mb-3">리듬 섹션</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Piotr Mintay Witkowski</strong> - bass</li>
                  <li><strong>Krzysztof Palczewski</strong> - keyboards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Career Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">📈 커리어 개요</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">폴란드 아트록의 대표</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Probably the most famous among all Polish art-rock performers</strong> (founded in 1985). Their music was inspired mainly by <strong>Marillion and Genesis</strong>.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">앨범 발매 이력</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-2 border-teal-300">
                    <h5 className="font-semibold text-teal-800">1991: Ba(s)nie (Fairy Tales)</h5>
                    <p className="text-gray-700 text-sm">폴란드어 가사의 첫 앨범, 전 세계 프로그 팬들의 열광적 반응</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-2 border-blue-300">
                    <h5 className="font-semibold text-blue-800">1992: Nine Songs of John Lennon</h5>
                    <p className="text-gray-700 text-sm">레논 트리뷰트 앨범, 심포닉 아트록으로의 편곡</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-2 border-cyan-300">
                    <h5 className="font-semibold text-cyan-800">1994: Moonshine</h5>
                    <p className="text-gray-700 text-sm">Dutch S.I. Music 레이블, 국제적 성공</p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-2 border-green-300">
                    <h5 className="font-semibold text-green-800">1996: Safe</h5>
                    <p className="text-gray-700 text-sm">Moonshine과 유사한 스타일 지속</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">라이브 활동</h3>
                <p className="text-gray-700 leading-relaxed">
                  In '94 and '95 played live during <strong>Fish' Polish tournees</strong> and in 1996 was a star at <strong>I Progressive Rock Festival in Warsaw</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SI Label Connection */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🏷️ SI Label과의 연결</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">한국에서의 반응</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SI label중에서 많은 앨범이 우리나라에서도 <strong>시완레이블을 통하여 소개</strong>되었는데.. 요즘 Shadowland의 앨범이 외국에서도 찾기 힘든지 트레이드 하자는 요청이 많이 들어오더군요..
              </p>
              <p className="text-gray-700 leading-relaxed">
                _Ring of Roses_ 가 시완레이블에서 나왔는데.. 혹시 덤핑같은걸로 싸게 나오면 몇장 사두었다가... 시간나면 트레이드 해야겠어요..
              </p>
            </div>
          </div>
        </section>

        {/* Reviewers */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍💻 리뷰어들</h2>
            
            <div className="space-y-4">
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    F
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fish</h4>
                    <p className="text-gray-600 text-sm mb-2">신인철 (icshin@chiak.kaist.ac.kr)</p>
                    <p className="text-gray-700 text-sm">
                      폴란드 프로그레시브에 대한 선구적 소개와 동구권 음악의 특색에 대한 분석
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    롱
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">롱달</h4>
                    <p className="text-gray-600 text-sm mb-2">전승훈 (롱달@가야.곽원.학교.한국)</p>
                    <p className="text-gray-700 text-sm">
                      Moonshine 앨범에 대한 상세한 음악적 분석과 Marillion 계열 밴드들과의 비교
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/review/c" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            24/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 