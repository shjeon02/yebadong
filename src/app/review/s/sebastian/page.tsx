"use client";

export default function SebastianPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sebastian Hardie</h1>
          <p className="text-lg text-gray-600">Windchase (1976)</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Windchase</p>
              <p><strong>발매년:</strong> 1976</p>
              <p><strong>국가:</strong> 호주</p>
              <p><strong>장르:</strong> Symphonic Progressive</p>
            </div>
            <div>
              <p><strong>이전 앨범:</strong> Four Moments</p>
              <p><strong>명곡:</strong> 'Openings' (첫 앨범)</p>
              <p><strong>특징:</strong> 웅장하고 멜로딕한 사운드</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
              cicco (이윤직)
            </span>
          </div>
        </div>

        {/* 멤버 구성 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">멤버 구성</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span><strong>Mario Millo</strong> - Guitars, Vocals</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                <span><strong>Peter Plavsic</strong> - Bass</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span><strong>Alex Plavsic</strong> - Drums, Percussion</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                <span><strong>Toivo Pilt</strong> - Moog, Piano, Mellotron, Solina, Organ</span>
              </div>
            </div>
          </div>
        </div>

        {/* 수록곡 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">수록곡</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li><strong>Windchase</strong> (타이틀 곡, 20분 대곡)</li>
              <li>At the end</li>
              <li>Life, Love and Music</li>
              <li>Hello Phimistar</li>
              <li>Peaceful</li>
            </ol>
          </div>
        </div>

        {/* 감상평 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">감상평</h2>
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">첫 인상</h3>
              <p className="text-blue-800 mb-3">
                호주그룹 Sebastian Hardie의 76년 <strong>두 번째 앨범</strong>입니다. 
                첫 앨범 <em>Four Moments</em>에 실린 명곡 <strong>'Openings'</strong>란 곡으로 
                저에게 강한 인상을 주었던 그룹이기도 합니다.
              </p>
              <p className="text-blue-800">
                이들은 <strong>웅장하면서도 멜로딕한 Symphonic Progressive</strong>를 구사한다고 알려져 있습니다.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">전반적 소감</h3>
              <p className="text-amber-800 mb-3">
                본 작품을 들어본 소감을 먼저 말씀드리자면... 음... 
                                 <strong>웅장하다</strong>는 말도 어느 정도 수긍이 가고 <strong>멜로딕하다</strong>는 말은 전적으로 동감을 하지만 
                그다지 훌륭한 'Symphonic Progressive'는 아닌 것 같네요.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-800 mb-2">키보드 사운드</h3>
                <p className="text-gray-700 mb-2">
                  웅장한 사운드는 <strong>키보드</strong>가 만들어 가고 있습니다. 
                  <strong>광활한 호주 대륙을 연상시키는</strong> (비록 본 적은 없지만 :-)) 스케일이 큰 연주입니다.
                </p>
                <p className="text-gray-600 text-sm">
                  하지만 연주가 너무 단조롭고 너무 뒤에만 깔려서, 
                  기타 연주를 위한 background의 역할밖에 못 하고 있는 느낌입니다.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-800 mb-2">기타 연주</h3>
                <p className="text-gray-700 mb-2">
                  멜로딕한 분위기를 이끌고 있는 <strong>기타</strong>는 이 그룹의 상징이라고도 할 수 있는데요... 
                  <strong>'Openings'</strong>에서 들었던, 마치 <strong>Camel의 Andrew Latimer</strong>를 연상시키는 
                  그런 멋진 연주가 아쉽게도 이 앨범에서는 찾아보기가 힘드네요.
                </p>
                <p className="text-gray-600 text-sm">
                  좀 더 강력해야 할 것 같은 부분에서도 너무나 느리고 평화롭게 연주해 주고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 타이틀 곡 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">타이틀 곡 'Windchase' 분석</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-3">
              첫 곡이자 타이틀곡인 <strong>'Windchase'</strong>는 <strong>20분에 달하는 대곡</strong>인데요... 
              단조로운 background keyboard sound 위에 펼쳐지는 평화롭기 그지없는 기타 사운드로 20분이 채워지고 있습니다.
            </p>
            <p className="text-gray-600 text-sm">
              제가 요즘 좀 변화가 심하고 비교적 Hard한 곡들에 빠져있어서 그런지 
              그다지 즐거운 분위기는 아니네요... :-)
            </p>
          </div>
        </div>

        {/* 총평 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">총평</h2>
          <div className="prose max-w-none">
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-yellow-800 mb-3">
                글쎄요... 저에겐 좀 <strong>지루한 면</strong>이 있고 별로 인상적이진 못한 앨범이지만 
                <strong>참 편하게 들을 수 있다는 장점</strong>은 있습니다.
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">추천 대상</h3>
              <p className="text-green-800">
                <strong>서정적이고 차분한 곡을 좋아하시는 분들</strong>께는 
                괜찮을 수도 있다는 생각을 해봅니다.
              </p>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <a 
              href="/review/s" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← S 폴더로 돌아가기
            </a>
            <a 
              href="/review" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              전체 리뷰 목록 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 