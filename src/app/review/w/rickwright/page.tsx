"use client"

import Link from "next/link"

export default function RickWrightPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rick Wright
            </h1>
            <p className="text-lg text-gray-600">
              키보드 연주자 • Pink Floyd 멤버 • 솔로 아티스트
            </p>
          </div>

          {/* Artist Overview */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Rick Wright (리치 라이트)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 Pink Floyd의 창립 멤버이자 핵심 키보드 연주자로, 
                밴드의 독특한 사운드 형성에 결정적인 역할을 했습니다. 
                Pink Floyd에서의 활동 외에도 솔로 작업을 통해 
                자신만의 독특한 음악적 비전을 선보였습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>본명:</strong> Richard William Wright<br/>
                  <strong>출생:</strong> 1943년 7월 28일<br/>
                  <strong>국적:</strong> 영국<br/>
                  <strong>주요 활동:</strong> Pink Floyd (1965-2008), 솔로 활동
                </p>
              </div>
            </div>
          </div>

          {/* Pink Floyd Career */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Pink Floyd에서의 활동</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 Pink Floyd의 창립 멤버로서 밴드의 사운드 정체성을 
                형성하는 데 핵심적인 역할을 했습니다. 특히 키보드와 신시사이저를 
                통해 Pink Floyd만의 독특한 사이키델릭 사운드를 만들어냈습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">주요 기여</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 키보드 및 신시사이저 연주</li>
                    <li>• 보컬 (백보컬 및 리드보컬)</li>
                    <li>• 작곡 및 편곡 참여</li>
                    <li>• 사운드 텍스처 창조</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">특징적 사운드</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 몽환적인 키보드 사운드</li>
                    <li>• 실험적 신시사이저 연주</li>
                    <li>• 분위기 창조의 달인</li>
                    <li>• 서정적 멜로디 라인</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Career */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">솔로 활동</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 Pink Floyd 활동과 병행하여 솔로 앨범을 발매했습니다. 
                그의 솔로 작업은 Pink Floyd의 사운드와는 또 다른 개인적이고 
                실험적인 음악적 탐구를 보여줍니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">솔로 디스코그래피</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Wet Dream (1978)</strong>
                    <p className="text-gray-600 mt-1">
                      첫 번째 솔로 앨범으로, Pink Floyd의 "Animals" 녹음 후 발매되었습니다. 
                      실험적이고 인스트루멘털한 트랙들로 구성되어 있습니다.
                    </p>
                  </div>
                  <div>
                    <strong>Broken China (1996)</strong>
                    <p className="text-gray-600 mt-1">
                      두 번째 솔로 앨범으로, 더욱 성숙하고 개인적인 음악적 표현을 
                      담고 있습니다. 신시사이저와 키보드 중심의 컨셉 앨범입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Style */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">음악적 스타일</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright의 음악적 스타일은 정교한 키보드 연주와 혁신적인 
                신시사이저 사운드로 특징지어집니다. 그는 기술적 완성도와 
                예술적 감성을 완벽하게 조화시킨 연주자로 평가받습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">연주 스타일</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 서정적이고 멜로딕한 연주</li>
                    <li>• 분위기 연출의 달인</li>
                    <li>• 실험적 사운드 텍스처</li>
                    <li>• 정교한 화성 진행</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">사용 악기</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 해몬드 오르간</li>
                    <li>• 무그 신시사이저</li>
                    <li>• 로즈 전자 피아노</li>
                    <li>• 다양한 키보드 악기</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy and Influence */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">유산과 영향</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 프로그레시브 록과 사이키델릭 록 역사에서 
                가장 중요한 키보드 연주자 중 한 명으로 평가받습니다. 
                그의 음악적 기여는 Pink Floyd의 성공과 록 음악의 발전에 
                결정적인 영향을 미쳤습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">주요 영향</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>음악적 혁신:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 신시사이저 사운드 개척</li>
                      <li>• 사이키델릭 록 발전</li>
                      <li>• 분위기 음악의 새로운 지평</li>
                    </ul>
                  </div>
                  <div>
                    <strong>후속 세대 영향:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 프로그레시브 록 키보디스트들</li>
                      <li>• 앰비언트 음악가들</li>
                      <li>• 전자음악 아티스트들</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Characteristics */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">개인적 특징</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 조용하고 내성적인 성격으로 알려져 있지만, 
                음악적으로는 매우 창의적이고 혁신적인 아티스트였습니다. 
                그의 개인성은 Pink Floyd의 음악에 독특한 감성을 더했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🎹</div>
                  <div className="font-medium text-gray-800">키보드 마스터</div>
                  <div className="text-sm text-gray-600 mt-1">정교한 연주 기술</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-medium text-gray-800">창의적 혁신</div>
                  <div className="text-sm text-gray-600 mt-1">독특한 사운드 창조</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="font-medium text-gray-800">예술적 감성</div>
                  <div className="text-sm text-gray-600 mt-1">서정적 표현력</div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">커리어 타임라인</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">주요 시기</h3>
                  <ul className="space-y-2">
                    <li><strong>1965:</strong> Pink Floyd 창립 멤버</li>
                    <li><strong>1967:</strong> The Piper at the Gates of Dawn</li>
                    <li><strong>1973:</strong> The Dark Side of the Moon</li>
                    <li><strong>1975:</strong> Wish You Were Here</li>
                    <li><strong>1978:</strong> 첫 솔로 앨범 Wet Dream</li>
                    <li><strong>1979:</strong> The Wall 참여</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">후기 활동</h3>
                  <ul className="space-y-2">
                    <li><strong>1987:</strong> Pink Floyd 재합류</li>
                    <li><strong>1994:</strong> The Division Bell</li>
                    <li><strong>1996:</strong> 두 번째 솔로 앨범 Broken China</li>
                    <li><strong>2005:</strong> Live 8 공연</li>
                    <li><strong>2008:</strong> 별세 (65세)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Discography Highlights */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">주요 작품</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Pink Floyd 주요 앨범</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• The Dark Side of the Moon (1973)</li>
                    <li>• Wish You Were Here (1975)</li>
                    <li>• Animals (1977)</li>
                    <li>• The Wall (1979)</li>
                    <li>• The Division Bell (1994)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">솔로 앨범</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Wet Dream (1978)</li>
                    <li>• Broken China (1996)</li>
                    <li>• 다양한 콜라보레이션</li>
                    <li>• 사이드 프로젝트</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Broken China Album Reviews */}
          <div className="space-y-8 mb-8">
            {/* Fish Review */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Fish (신인철)
                </div>
              </div>
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Broken China (1996) 리뷰</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  아직 미국에선 발매되지 않았지만 영국에서 발매된 씨디를 미국을 
                  통하여.. 방금 배달 받았습니다.. 슬리브디자인은 역시 Pink Floyd 
                  패밀리인 만큼.. ex-Hipgnosis의 Storm Thorgerson이 Wish you were here를 
                  연상시키는 그림을 만들어주고 있구요.. 참여한 뮤지션들은 전에 말씀드린대로 
                  ex- Slapp Happy의 Anthony Moore, Dominic Miller, Sinead O'Conor 그리고 
                  Manu Katche등이 참가해주고 있네요..
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-medium text-gray-800 mb-2">음악적 특징</h3>
                  <p className="text-sm">
                    간간이 끼어있는 짤막한 연주곡.. 몽환적인 분위기.. 꽤나 Floydian한 
                    사운드를 내어주고 있구요.. Rick Wright의 보컬은 낮게 읖조리는 면에서는 
                    David Gilmour와 비슷하게 들리기도 합니다..
                  </p>
                </div>
                
                <p>
                  최근 Pink Floyd의 공연에서 기타연주자로 많이 참가하는 Tim Renwick이 
                  (Delicate sound of thunder, Pulse 등의 비디오에서 그의 모습을 볼 수 
                  있죠..) 많은 곡에서 무척이나 Gilmouresque한 기타를 들려주는 덕택에 
                  가끔씩 깔리는 마치 Enigma의 곡을 연상시키는 단순한 반복 리듬의 
                  리듬섹션만 아니라면 최근 Floyd의 곡이라고 할만한 분위기의 곡들이 
                  연결되고 있습니다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-medium text-gray-800 mb-2">전체적 평가</h3>
                  <p className="text-sm">
                    많은 분들이 One Way의 리이슈 덕택에 소장하고 계실 77년도 솔로앨범 
                    'Wet Dream'과 84년에 Rick Wright가 Zee project를 결성해 발표한 
                    Identity라는 electronic pop album의 중간을 걷는듯한 앨범이라고 해야 겠네요.
                  </p>
                  <p className="text-sm mt-2">
                    Pink Floyd의 die hard fan이라면 사보아야 하겠지만.. 
                    Rick의 플로이드 시절 작품들인 The Great Gig in the Sky나 
                    Sysyphus, Summer '68등을 기대하실 필요는 없을 듯 하네요..
                  </p>
                </div>
              </div>
            </div>

            {/* Atoll Review */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  atoll
                </div>
              </div>
              <h2 className="text-xl font-semibold text-green-800 mb-4">개인적 감상</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  이 음반 얘기가 나와서 짧은 느낌이나마 적고 싶었습니다. 
                  예전에 명반이란 리뷰를 보고선 샀었습니다 저도 ONE MUSIC 
                  3M 님이 말씀하신대로...비오는 날에 들으면 딱 좋겠다..하는 느낌이 
                  저도 들었습니다~@ :)
                </p>
                
                <p>
                  지금은 이 앨범을 팔았지만요..아깝다는 생각이 들정도로 전 느낌이 
                  괜찮았던 것 같습니다. 
                  모랄까...앨범 자켓의 그림처럼...푸른 지중해 위에서의 젖은(?) 꿈이랄까요?
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-medium text-gray-800 mb-2">음악적 인상</h3>
                  <p className="text-sm">
                    지금 앨범이 없어서 자세한 곡명들은 모르겠지만 
                    나른하면서도..전체적으로..분위기 있고...비오는 날..조용한 카페에서 
                    틀었으면..하는 그런 앨범이구요.
                  </p>
                  <p className="text-sm mt-2">
                    전체적으로 릭의 키보드와 여운이 남는듯한 보컬(멋지던데;;) 
                    그리고 간간히 들리는 색소폰 소리....그중에서도 역시 릭의 몽롱하면서도 
                    분위기 있는듯한 건반연주가 인상적이었구요
                  </p>
                </div>
                
                <p>
                  ****그러나,한 곡 한 곡들었을때 특별히 눈에 띄는 그런 좋은 곡은 
                  별로 없었던것 같습니다***
                </p>
                
                <p>
                  하지만...hypnosis(스펠맞나요?)의 정말 예술 사진처럼 &lt;&lt;이쁜 자켓&gt;&gt;과 
                  전체적으로 ...쓸쓸하면서도 아름다운 느낌을 주는 이 앨범은 
                  볼때마다 좋은 감정이 들더군요.
                </p>
                
                <p className="font-medium">
                  **저는 명반이란 말보다  GOOD~~~ 이었다는 평을 하고싶군요*** ^^ ***
                </p>
                
                <p className="text-sm">
                  PS.음반을 쳐다볼때마다 좋은 느낌이 나는 정도면 괜찮지 않을까요? 
                  그럼 비도 주룩 내리는데 좋은 음악 많이 들으시길~~~~@
                </p>
              </div>
            </div>

            {/* LJW Review */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ljw1031
                </div>
              </div>
              <h2 className="text-xl font-semibold text-purple-800 mb-4">구매 동기</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  또 한가지 제가 이 앨범에 관심을 보이는 이유는 바로 Mel Collins 와 
                  Snowy White 라는 게스트들의 무게때문이지요. 둘다 적어도 실망시킨 
                  기억은 없기 때문에 아무래도 구해야 될것 같습니다.
                </p>
                
                <p>
                  Atoll 님께서도 색소폰을 언급하셨는데 그 비오는 날에 어울릴 느낌이라는게 
                  바로 멜 콜린스도 한 몫 한게 아닐까 상상하게 됩니다. 결국 이러다 보니 
                  궁금증과 구매욕은 절정에 이르는군요.
                </p>
                
                <p>
                  퇴근길에 사가지고 들어 가야겠습니다.
                </p>
              </div>
            </div>

            {/* 박준식 Review */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  박준식
                </div>
              </div>
              <h2 className="text-xl font-semibold text-amber-800 mb-4">Wet Dream vs Broken China</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Rick의 첫번째 solo앨범은 전체적으로는 다소 재즈적인 분위기가 납니다. 
                  그냥 음들이 흘러가는 느낌...
                </p>
                
                <p>
                  Hipgnosis의 커버가 너무도 잘 어울리는... 
                  꼭 Division Bell 의 Wearing the Inside Out 과도 유사한 분위기가 느껴지고요...
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">참여 멤버</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Richard Wright - Vocals, Keyboards, Oberheim Synthesizer</li>
                    <li>• Mel Collins - Saxophone, Flute</li>
                    <li>• Snowy White - Guitars</li>
                    <li>• Larry Steele - Bass</li>
                    <li>• Reg Isadore - Drums</li>
                  </ul>
                </div>
                
                <p>
                  계속 예기되는 일이지만 Snowy White와 Mel Collins의 참여가 이 앨범의 분위기를 
                  결정하는것 같군요..
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">수록곡</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Mediterranenan C (3:52)</li>
                    <li>• Against the Odds (3:57)</li>
                    <li>• Cat Cruise (5:14)</li>
                    <li>• Summer Elegy (4:53)</li>
                    <li>• Waves (4:19)</li>
                    <li>• Holiday (6:11)</li>
                    <li>• Mad Yannis Dance (3:19)</li>
                    <li>• Drop in from the Top (3:25)</li>
                    <li>• Pink's Song (3:28)</li>
                    <li>• Funky Deux (4:57)</li>
                  </ul>
                </div>
                
                <p>
                  Holiday랑 Pink's Song이 가장 괜찮았던 것으로 기억됩니다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">최종 평가</h3>
                  <p className="text-sm">
                    얼마전에 발표된 Broken China와 비교 할때 저는 이 작품을 더 높게 평가하고 
                    싶어요. 흔히 귀에 쏙들어오는 곡이 없어서 상대적으로 다른 핑플 멤버들의 
                    solo작들에 비해 낮게 평가되는 느낌이 들지만 흔히 우리가 핑플의 음반을 
                    들으면서 "아! 이건 Rick이다."라고 생각되는 부분들이 확장되서 들어있다고 
                    말하고 싶네요...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Memorial */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">추모</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 2008년 9월 15일 암으로 별세했습니다. 
                그의 죽음은 음악계에 큰 손실이었으며, 그가 남긴 음악적 유산은 
                오늘날까지도 많은 음악가들과 팬들에게 영향을 미치고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-rose-500">
                <p className="text-sm italic">
                  "Rick Wright는 Pink Floyd의 숨겨진 보석이었다. 
                  그의 키보드 연주 없이는 Pink Floyd의 마법 같은 사운드는 
                  결코 완성될 수 없었을 것이다."
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/w" className="text-blue-600 hover:text-blue-800 font-medium">
              ← W 폴더로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 