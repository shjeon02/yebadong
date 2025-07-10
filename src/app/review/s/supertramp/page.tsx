import Link from 'next/link';

export default function SupertrampPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Supertramp</h1>
          <p className="text-xl text-gray-300">
            Even in the quietest moment (1977)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Review Introduction */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Supertramp - "Even in the quietest moment"</h2>
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <p className="font-semibold text-purple-400">이강영 (Lennon, kylee@kias.re.kr)</p>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Fish님의 글을 읽고있으면 해당 음반이나 혹은 그 아티스트의 <br />
              음반을 사고 싶은 참기 힘든 충동을 느끼게 됩니다. 거기다가 <br />
              e-mail을 읽은 즉시 마우스로 몇 번 클릭만 하면 그 음반을 <br />
              주문할 수 있는 전자상거래의 시대가 도래한 작금에는, Fish님의 <br />
              음반 / 공연 리뷰를 읽을 때는 각별한 주의가 새삼 요망된다고 <br />
              하지 않을 수 없습니다.
            </p>
            <p>
              방금도 로저 허드슨의 음반을 씨디월드에서 바로 찾아보았습니다. <br />
              다행히(?) 비싼 수입반밖에 없어서 주문은 하지 않았습니다. ^^ <br />
              앞으로는 모르겠습니다. 아무래도 곧 정신을 차리겠죠. T_T
            </p>
            <p>
              그래도 Fish님의 리뷰를 읽은 감흥이 사라지기 전에 뭔가 조그만 <br />
              흔적이라도 남기고 싶어서 일종의 릴레이 리뷰를 사작해 볼까 합니다. <br />
              관계되는, 혹은 연상되는 앨범을 계속 리뷰해나가 보자는 것이죠. <br />
              며칠 전에 했던 아티스트 관계지어주기에서 약간 모티베이트됐고, <br />
              마침 제가 최근 수퍼트램프의 저 앨범을 second hand CD로 구입해서 <br />
              오랫만에 죽 들었다는 것도 이런 이야기를 꺼낸 이유중 하나입니다.
            </p>
          </div>
        </div>

        {/* Album Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Even in the quietest moment (1977) - Supertramp</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              이 앨범은 수퍼트램프의 울트라메가히트올타임베스트셀러인 <br />
              Breakfast In America 의 바로 전 앨범이어서 그런지 웬지 <br />
              들을때마다 폭풍전야를 연상케 됩니다. 한편 음악적으로는 <br />
              가장 깊이있는 내용을 담고있다고도 하는데 그것은 전반적으로 <br />
              이들의 곡치고는 무거운 곡들이 주로 포진해있고 Fool's overture로 <br />
              대표되는 다소 복잡한 대곡취향의 (10분대 1곡, 6분대 3곡) <br />
              앨범이라는 뜻으로 해석됩니다.
            </p>
            <p>
              사람에 따라서는 Crime of the Century ('74) 에서 <br />
              Crisis, What Crisis? ('75)를 거쳐 이 앨범에 이르는 기간을 <br />
              밴드의 창조력이 가장 활발했던, 수퍼트램프의 가장 좋은 시절로 <br />
              꼽기도 합니다.
            </p>
            <p>
              이 모든 것 은 Breakfast In America가 너무 크게 히트했기 때문에, <br />
              그 이후 밴드는 더 이상 전과 같을 수 없었다는 역사를 의식해서 <br />
              하는 애기겠지요. 어쨋든 저도 이들의 앨범중 베스트를 꼽으라면 <br />
              Crime..., Breakfast..., 그리고 이 앨범을 택해야 할 겁니다.
            </p>
          </div>
        </div>

        {/* Credits */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">크레딧</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong>1977: Even In The Quietest Moments</strong></p>
            <div className="bg-gray-700 p-4 rounded">
              <p><strong>Roger Hodgson</strong> - Vocals, keyboards and guitars</p>
              <p><strong>Rick Davies</strong> - Vocals and keyboards</p>
              <p><strong>Dougie Thompson</strong> - Bass</p>
              <p><strong>John Anthony Helliwell</strong> - Wind instruments and vocals</p>
              <p><strong>Bob C. Benberg</strong> - Drums and percussion</p>
            </div>
            <p>
              <strong>Produced by</strong> Supertramp<br />
              <strong>Recorded at</strong> the Caribou Ranch, Colorado and the Record Plant, L.A.
            </p>
          </div>
        </div>

        {/* Track-by-Track Analysis */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">트랙별 분석</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">1. Give A Little Bit</h3>
              <p>
                찰랑거리는 어커스틱 기타를 배경으로 가볍게 부르는 사랑노래입니다. <br />
                중간의 색소폰이 끼어들면서 이들 고유의 분위기로 접어듭니다. <br />
                이 앨범 최고의 히트곡이기도 합니다. (US top 20)
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">2. Lover Boy</h3>
              <p>느리고 비장하게 불러지는 발라드입니다.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">3. Even In The Quietest Moments</h3>
              <p>
                브리티쉬 트래드 포크 풍의 노래로 시작되어 점차 사운드가 복잡해집니다. <br />
                Babaji보다는 이 곡이 더 prog 팬의 취향에 맞을 듯 합니다. <br />
                전형적인 prog. 발라드에 가까운 곡입니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">4. Downstream</h3>
              <p>
                좀 목가적이라고 할까, 그렇게 여유있게 부르는 발라드입니다. <br />
                새삼 느끼는건데, 이 앨범은 느린 곡들이 참 많군요. 수퍼트램프 <br />
                특유의 업 템포의 곡이 아직까지는 Give A Little Bit 뿐입니다. <br />
                굳이 얘기하자면 이 곡과 Lover boy가 이 앨범에서는 좀 <br />
                약하게 느껴지는 트랙입니다
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">5. Babaji</h3>
              <p>
                Fool's overture와 더불어 이 앨범에서 prog. 팬을 위한 서비스라고 <br />
                일컬어지는 곡입니다...만 별로 그렇게 느껴지지는 않고, 그들의 최대 <br />
                히트곡인 '논리적인 노래' 를 조금 비장하게 부르는 듯한 곡입니다.
              </p>
              <div className="mt-2 p-2 bg-gray-600 rounded text-sm italic">
                <p>
                  Bring it out so we can sing it out<br />
                  Help me to find it before we lose it<br />
                  At night when the stars are near
                </p>
              </div>
              <p className="mt-2">
                이 부분이 특히 그렇군요. 로지칼 송 첫부분이 바로 연상됩니다. <br />
                이들의 특유의 멜로디 라인, 비장한 분위기이면서도 쿵작거리는 <br />
                업템포의 리듬, 배경의 신디사이저 등이 잘 어울린 좋은 곡입니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">6. From Now On</h3>
              <p>
                역시 느리고 (이들 방식으로) 비장한 분위기의 무거운 노래입니다. <br />
                곡의 이부분 저부분이 다 친숙하게 들리는 이유가 뭘까요? <br />
                노래는 어떤 부분에는 스팅이 마이클 볼튼을 부르는 것같고, <br />
                어떤 연주는 라디오 시그날에서 들었던 듯하고...
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">7. Fool's Overture</h3>
              <p>
                Supertramp의 prog 곡으로 일찌감치부터 알려진 곡이죠. <br />
                이들의 홈페이지들에도 비슷한 말이 적혀있습니다. <br />
                길고 변화무쌍한 곡 구조, 진지한 가사, 복잡하고 웅장한 연주, <br />
                중간의 효과음들때문에 그런 평가를 얻는 듯 합니다. <br />
                다채로운 연주가 파노라마처럼 펼쳐지는 '보수적인' 심포닉입니다. <br />
                알란 파슨스의 Silence & I 같은 곡을 연상하시면 될 듯 하군요. <br />
                (곡이 비슷하다는 얘기는 아닙니다만.)
              </p>
            </div>
          </div>
        </div>

        {/* Musical Characteristics */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">음악적 특성</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              저는 Hide in the shell이나 The Logical song 에서 들을 수 있는, <br />
              업 템포의 유창한 멜로디를 로저의 독특한 목소리로 불러대면서 <br />
              색소폰이 감겨오는, 그런 사운드가 수퍼트램프의 전형적인 것으로 <br />
              입력되어 있습니다. 그런 기준에서 이 앨범은 다소 발라드적인 곡들, <br />
              복잡하고 변화가 심한 구성, 무거운 분위기 등으로 특징지어집니다.
            </p>
            <p>
              Babaji가 가장 수퍼트램프의 사운드다운 좋은 곡이고, 역시 '바보 서곡'도 <br />
              저같은 심포닉 취향인 사람에게는 잘 맞는 곡입니다.
            </p>
          </div>
        </div>

        {/* Album Cover Question */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 커버 퀴즈</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              그냥 마치기는 섭섭하니까, 문제 하나. 이 앨범의 자켓에는 <br />
              눈 덮인 피아노 위에 Fool's overture라는 제목이 붙은 <br />
              악보가 놓여있습니다. 이 악보는 어떤 곡의 악보일까요?
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/review/s/strawbs" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            ← Previous: Strawbs
          </Link>
          <Link href="/review/s/david-sylvian" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Next: David Sylvian →
          </Link>
        </div>
      </main>
    </div>
  );
} 