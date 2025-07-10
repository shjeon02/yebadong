import Link from 'next/link';

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Solution</h1>
          <p className="text-xl text-gray-300">
            Fully Interlocking (1977)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Reviewer Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4">
            <p className="font-semibold text-purple-400">Neo-Zao (김남웅)</p>
            <p className="text-sm text-gray-400">nwkim@archer.postech.ac.kr</p>
          </div>
        </div>

        {/* Review Content */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">리뷰</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              네덜란드 친구와 트레이드를 하다보니 본의 아니게, 덧취프로그레시브 밴드를 많이 접하게 되는군요. 
              근간에 들어본 덧취밴드들로는 Group1850, Solution, Flairck, Finch, Spin 등이 있습니다. 
              한가지 공통점을 느끼게 되는 건, 많은 덧취 밴드들이 서정적인 면이 유난히 강하다는 것입니다.
            </p>

            <p>
              Solution은 자세한 discography는 알 수 없지만 70년대초부터 80년대까지 활동한 밴드입니다. 
              지금 소개될 _Fully Interlocking_은 77년도 앨범입니다. 한가지 특기할 만한 사실은 
              이 앨범이 네덜란드가 아닌, 영국에서 발매가 되었다는 사실이지요.
            </p>

            <p>
              이들의 기본적인 노선은 재즈락과 서정성있는 멜로디의 조화입니다. 일반적으로 켄터베리타잎의 
              재즈락이나 마하비쉬누 오케스트라같은 정통 퓨전 밴드와는 색깔이 다르죠. 
              서정파의 수장격인 Camel의 따뜻한 음과도 통하는 면이 있습니다.
            </p>

            <p>
              네덜란드를 대표하는 밴드는 누가 뭐래도 Focus라고 생각하는데, Focus 또한 
              Thijs Van Leer의 클래시컬한 음악성과 Akermann의 Jazz적인 음악성이 만나는 가운데 
              서정적인 곡들을 많이 만들었던 것과 같습니다. 리듬섹션과의 변박 프레이징에서 
              날카로운 각이 느껴지는 것이 아니고 부드러움이 느껴집니다.
            </p>

            <p>
              얼마전 a.m.p.에서 이들의 이야기가 몇번 나왔는데 주로 색서폰의 매력에 대해서 
              이야기가 오고 갔습니다만 저의 느낌으로는 밴드의 음악을 건반악기가 주도하고 있습니다.
            </p>

            <p>
              이 앨범은 긴장의 완급이 잘 조정 되어서 정신없다 싶으면 서정적인 멜로디가, 
              밋밋하다 싶으면 재즈락으로 조여주는 괜찮은 앨범이라고 생각되는군요.
            </p>
          </div>
        </div>

        {/* Album Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 정보</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-semibold text-gray-300">그룹:</span> Solution</p>
                <p><span className="font-semibold text-gray-300">제목:</span> Fully Interlocking</p>
                <p><span className="font-semibold text-gray-300">연도:</span> 1977</p>
                <p><span className="font-semibold text-gray-300">레이블:</span> Rocket Record Company Roll 8</p>
              </div>
              <div>
                <p><span className="font-semibold text-gray-300">국가:</span> 네덜란드</p>
                <p><span className="font-semibold text-gray-300">발매지:</span> 영국</p>
                <p><span className="font-semibold text-gray-300">장르:</span> 재즈락 / 서정적 멜로디</p>
              </div>
            </div>
          </div>
        </div>

        {/* Band Members */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">멤버</h2>
          <div className="space-y-2 text-gray-300">
            <p>• <span className="font-semibold">Tom Barlage</span> - Flutes, Stiting-Ensemble, Organ, Sax, Perc, E. Piano..</p>
            <p>• <span className="font-semibold">Wilem Ennes</span> - E. & A. Piano, Synth., Organ</p>
            <p>• <span className="font-semibold">Guus Willemse</span> - Bass Gt., Lead Vocals</p>
            <p>• <span className="font-semibold">Hans Waterman</span> - Drums</p>
          </div>
        </div>

        {/* Track Listing */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">트랙 리스트</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-300 mb-2">Side One</h3>
              <div className="space-y-1 text-gray-300">
                <p>1. Give Some More</p>
                <p>2. Carousel</p>
                <p>3. Sonic Sea</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-300 mb-2">Side Two</h3>
              <div className="space-y-1 text-gray-300">
                <p>1. Free Inside</p>
                <p>2. French Melodie</p>
                <p>3. Empty Spaces</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Dutch Bands */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">관련 네덜란드 밴드들</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-purple-300 mb-2">언급된 밴드들</h3>
              <ul className="space-y-1">
                <li>• Group1850</li>
                <li>• Flairck</li>
                <li>• Finch</li>
                <li>• Spin</li>
                <li>• Focus (네덜란드 대표 밴드)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-300 mb-2">공통 특징</h3>
              <p className="text-sm">서정적인 면이 유난히 강함</p>
              <h3 className="font-semibold text-purple-300 mb-2 mt-4">비교 대상</h3>
              <ul className="space-y-1 text-sm">
                <li>• Camel (서정파의 수장)</li>
                <li>• 켄터베리 타잎 재즈락</li>
                <li>• 마하비쉬누 오케스트라</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/review/s/soluna"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            ← Previous: Soluna
          </Link>
          <Link 
            href="/review/s/spirogyra"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            Next: Spirogyra →
          </Link>
        </div>
      </main>
    </div>
  );
} 