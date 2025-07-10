import Link from 'next/link';

export default function SolarProjectPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Solar Project</h1>
          <p className="text-xl text-gray-300">
            ...in Time (1997)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Review */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <p className="font-semibold text-purple-400">windmill (박왕근)</p>
            <p className="text-sm text-gray-400">windmill@mathx.kaist.ac.kr</p>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              최근에 뮤제아 selection으로 받은 독일 신진 그룹 Solar Project에 <br />
              대해 좋은 인상을 받았는데 .. 아직 이 앨범 한장밖에 못들어봐서 이전 <br />
              앨범과 비교할 수는 없지만 이 앨범과 이들의 홈페이지( <br />
              http://members.aol.com/solarproj/solar.htm)의 내용을 토대로 <br />
              소개할까 합니다.. 우선 요새 제가 대곡(약 10여분에서 20분에 육박하거나 <br />
              혹은 이상 )에 특히 애정을 가지게 되면서 더욱 더 기대한 앨범인데요..
            </p>
            <p>
              결론적으로 말하자면 근래의 신진 싸이키 밴드들과 같이 범상치 않은 <br />
              작품임에만 틀림없습니다.. 더구나 앨범 전체가 마치 한곡처럼 휴식없이 <br />
              여러 이펙트효과들로 연결되어 있으며 멜로트론과 함께 웅장한 키보드, <br />
              업템포의 현란한 기타 사운드 , 그리고 총 6명의 보컬리스트들이 번갈아 가면서 <br />
              보컬을 담당해 주는가 하면 때로는 나레이션으로 때로는 다양한 효과음을 <br />
              적재적소에 사용하여 신진 그룹의 한계일 수 있는 긴 러닝타임의 지루함을 <br />
              극복해주고 있습니다..
            </p>
            <p>
              특히 처음으로 만나는 지루함이 시작될 즈음 <br />
              (약 5번째 트랙) 인생의 노년기에서의 'Time to die'라는 멋진 대곡이 <br />
              본작의 하일라이트로 시작됩니다.. 긴 하일라이트의 폭풍이 지난후 다시 처음 <br />
              시간에 관한 컨셉이 시작되는 시점으로 되돌아가 본작은 막을 내립니다.. <br />
              마치 한편의 드라마와도 같은 구성이죠..
            </p>
            <p>
              Solar Project는 80년대에 Solar System이라는 그룹을 이끌던 3인의 핵심 <br />
              멤버들이 모여 Solar System이라는 이름을 내걸고 그간의 작품들을 모아 <br />
              90년도에 The final solution을 발표하고 92년도에는 World Game을 <br />
              그리고 당시까지의 최고작이자 3집인 The House of S. Phrenia를 발표 <br />
              합니다. 그리고 2년간의 준비기간을 거쳐 삶의 여러단층들을 시간이라는 <br />
              컨셉으로 묶어 뮤제아에서 97년 6월에 ...in Time을 발매합니다..
            </p>
            <p>
              이들의 음악성은 Harmonie지에서 Pink Floyd, ELP, Deep Purple, Uriah <br />
              Heep, Genesis, Doors의 영향을 받았다고 밝히고 있지만 한편으로는 자신만의 <br />
              독창성을 내세우고 있는데 저역시 크게 반대하고 싶지는 않네요.. <br />
              앞으로 계속 기대되는 유망주중의 하나라 생각됩니다..
            </p>
            <p>
              여러분들도 한번쯤 관심을 가져도 좋을 것 같은데요.. <br />
              단 최근의 결코 가볍지 않은 dark complex prog 스타일을 좋아하시는 <br />
              분이라면 더욱 어필할 수 있으리라 생각되네요.. <br />
              후에 다른 앨범을 듣게 된다면 소개드리겠습니다.. 이미 들어보신 분이라면 <br />
              간단한 소개 부탁합니다..
            </p>
          </div>
        </div>

        {/* Track Listing */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Solar Project - ...in Time</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>1. Time Part I</span>
              <span className="text-gray-400">7:34</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>2. About time</span>
              <span className="text-gray-400">4:43</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>3. Crime Time</span>
              <span className="text-gray-400">5:55</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>4. Time Out</span>
              <span className="text-gray-400">7:12</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>5. Zeitgeist</span>
              <span className="text-gray-400">6:01</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>6.-11. Time to die</span>
              <span className="text-gray-400">27:08</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
              <span>12. Time Part II</span>
              <span className="text-gray-400">8:15</span>
            </div>
          </div>
        </div>

        {/* Musicians */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Musicians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p><span className="font-semibold">Volker Janacek:</span> drums</p>
              <p><span className="font-semibold">Robert Valet:</span> keyboards & acoustic guitars</p>
              <p><span className="font-semibold">Peter Terhoeven:</span> electric & acoustic guitars</p>
              <p><span className="font-semibold">Andi Bracht:</span> basses</p>
              <p><span className="font-semibold">Andi Lambiris:</span> basses</p>
              <p><span className="font-semibold">Jurgen Wimpelberg:</span> hammond organ</p>
              <p><span className="font-semibold">Sonja Mischor:</span> flutes, backing vocals</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Anja Kiechle:</span> vocals, backing vocals</p>
              <p><span className="font-semibold">Stefan Mageney:</span> vocals</p>
              <p><span className="font-semibold">Olaf Kobbe:</span> vocals</p>
              <p><span className="font-semibold">Carsten Volz:</span> vocals</p>
              <p><span className="font-semibold">Holger vom Bruch:</span> vocals</p>
              <p><span className="font-semibold">Martin Garden:</span> vocals</p>
            </div>
          </div>
        </div>

        {/* Band History */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">밴드 히스토리</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Solar System 시절 (1980년대)</h3>
              <p>3인의 핵심 멤버들이 Solar System이라는 그룹을 이끌던 시절</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">음반 발표 이력</h3>
              <ul className="space-y-1">
                <li>• 1990: The final solution</li>
                <li>• 1992: World Game</li>
                <li>• 1995: The House of S. Phrenia (당시까지의 최고작이자 3집)</li>
                <li>• 1997: ...in Time (2년간의 준비기간을 거쳐 뮤제아에서 발매)</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">음악적 영향</h3>
              <p>Harmonie지에서 밝힌 영향: Pink Floyd, ELP, Deep Purple, Uriah Heep, Genesis, Doors</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/review/s/soft-machine" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            ← Previous: Soft Machine
          </Link>
          <Link href="/review/s/solaplexus" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Next: Solaplexus →
          </Link>
        </div>
      </main>
    </div>
  );
} 