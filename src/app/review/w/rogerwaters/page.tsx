"use client"

import Link from "next/link"

export default function RogerWatersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Roger Waters
            </h1>
            <p className="text-lg text-gray-600">
              영국 • Pink Floyd 멤버 • 정치적 메시지
            </p>
          </div>

          {/* Albums Overview */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Roger Waters 솔로 앨범들
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">스튜디오 앨범</h3>
                <ul className="space-y-1">
                  <li>• Radio K.A.O.S. (1987)</li>
                  <li>• Amused to Death (1992)</li>
                  <li>• Is This the Life We Really Want? (2017)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">라이브 앨범</h3>
                <ul className="space-y-1">
                  <li>• In the Flesh (2000)</li>
                  <li>• The Wall Live (2015)</li>
                  <li>• Radio K.A.O.S. Live in Quebec</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Review: Amused to Death */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                김선호 (pink99)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Amused to Death (1992) - 5년 만의 신작
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Roger Waters의 최신앨범을 얼마전에 구했다. title은 "Amused to Death"... 
                어떻게 번역해야 할지, 솔직한 심정으로 나는 이 title을 처음 대했을 때 
                순간적으로 머리에 스치는 것이 있었다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">
                  <strong>앨범 컨셉:</strong> 원숭이의 뇌에 있는 쾌락 중추를 전기적으로 자극하여 
                  그 스위치를 원숭이가 다룰 수 있게 해 놓았더니, 원숭이는 계속해서 쾌락을 얻기 위해 
                  끊임없이 그 스위치만을 눌러대다가 결국 죽어버렸다는 실험. 
                  이는 자기파괴행위를 일삼는 인간들을 비유한 것이다.
                </p>
              </div>
              <p>
                이 앨범의 자켓을 보는 순간, 난 놀라지 않을 수 없었다. 
                거기에는 바로 TV를 보고 있는 원숭이의 그림이 있었기 때문이다. 
                타이틀만 보고 추측한 내 생각이 들어맞다니...
              </p>
            </div>
          </div>

          {/* Musical Analysis */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">음악적 분석</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">음악적 특징</h3>
                <p className="text-sm">
                  전작 Radio K.A.O.S.에서 느낀 당혹감을 많이 보상시켜준다. 
                  기존 앨범에 비교한다면 "The Final Cut"와 비슷하다고 할까. 
                  그러나 전작에서처럼 그의 처절한 목소리는 거의 듣기 힘들다.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">참여 아티스트</h3>
                <ul className="text-sm space-y-1">
                  <li>• Jeff Beck (기타)</li>
                  <li>• Rita Coolidge (보컬)</li>
                  <li>• Don Henley (보컬)</li>
                  <li>• Steve Lukather (기타)</li>
                  <li>• Michael Kamen (오케스트라 편곡)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">기술적 특징</h3>
                <p className="text-sm">
                  이번 앨범은 이른바 'Q Sound' 시스템으로 녹음되었는데, 
                  양 스피커 중간에서 들어보면 거의 사운드의 폭이 양 스피커 거리의 두배가 된다. 
                  개 짖는 소리, 귀뚜라미 소리, TV소리등도 마치 방밖에서 들리는 듯한 착각을 느끼게 해준다.
                </p>
              </div>
            </div>
          </div>

          {/* Concept Analysis */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">컨셉 분석</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                컨셉트면에서는 그가 항상 즐겨다루는 전쟁에 대한 것이다. 
                그러나 전쟁에 대한 문제를 보는 관점은 좀 색다르다. 
                과거에 그가 보여주던 전쟁으로 인한 비극과 인간성의 파괴를 강조하기 보다는 
                그러한 참혹한 전쟁에 인간들이 몰입하고 심지어는 즐기기까지되는 메카니즘을 주제로 잡고 있다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <p className="text-sm">
                  <strong>주요 테마:</strong> 그는 이러한 비극의 원흉으로서 'god'으로 상징되는 
                  세계의 지도층과 그들의 '설교와 교리'를 대중에게 전달하는 TV를 지적하고 있다. 
                  인간들은 TV앞에 모여 앉아 거기에서 나오는 실제 전쟁에 대한 보도를 보며 
                  마치 스포츠 경기라도 보듯이 열광한다.
                </p>
              </div>
              <p>
                이는 이미 얼마전 걸프전에서 우리 모두 느꼈던 부분이다. 
                결국 인간들은 TV앞에서 퇴화된 원숭이로 비유되고 앞서 말한 원숭이처럼 
                쾌락에 몰입하다 스스로를 파멸시키고 있는 것이다.
              </p>
            </div>
          </div>

          {/* Radio K.A.O.S. Live */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Radio K.A.O.S. Live in Quebec
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                몇달전 netter와의 trade를 통해 구한 Roger Waters & The Bleeding Heart Band의 
                Radio KAOS 공연실황 비디오입니다. 전체적으로 캠코더의 angle이 고정되어있어 
                zoom in/out만을 반복하는 무척 단순한 화면이지만 무척 흥미있는 내용을 담고 있습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-medium text-gray-800 mb-2">출연진</h3>
                <ul className="text-sm space-y-1">
                  <li>• Paul Carrack (vocal, keyboards) - Mike and the Mechanics 멤버</li>
                  <li>• Mel Collins (saxophone)</li>
                  <li>• Jim Ladd (DJ) - LA의 유명한 DJ</li>
                  <li>• Roger Waters (bass, guitar, vocals)</li>
                </ul>
              </div>
              <p>
                Radio KAOS의 concept을 간단히 소개하면 선천적인 deaf/dumb/blind인 Billy가 
                우연히 휴대 phone을 통해 지구상의 모든 기계를 control할 수 있는 능력을 발견합니다. 
                그는 KAOS 방송국의 주파수로 hack in해 들어가 DJ인 Jim Ladd와 친구가 되어 
                이 지구상의 첨단 모순의 결정체인 핵무기를 없애버릴 계획을 세웁니다.
              </p>
            </div>
          </div>

          {/* Personal Impact */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">개인적 영향</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                내가 그의 음악 - 정확히 말하자면 Pink Floyd의 음악을 처음으로 접하게 된 것은 
                지금으로부터 8년전, 그러니까 내가 고등학교 1학년때인것으로 기억된다. 
                막연히 그동안 들어오던 단순한 팝에서 뭔가 다른 음악을 찾아헤메고 있던 나에게 
                그의 음악은 신선한 충격으로 다가왔다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <p className="text-sm">
                  <strong>Pink Floyd 앨범 여정:</strong>
                  "Dark Side of the Moon"에서 느꼈던 이질감에서 시작하여 
                  "Wish You Were Here"에서 나의 떨칠 수없는 고독감과 공명하는 그의 진한 그것을 느꼈고, 
                  "The Wall"에서 그토록 많았던 나의 힘들고 외로운 순간들에 대한 위안을 찾게 되었다.
                </p>
              </div>
              <p>
                그러나 그 이후 나온 그의 솔로 앨범, 즉 "Radio K.A.O.S."는 솔직히 나에게 
                많은 실망을 주었다. 마치 댄스음악을 연상케 하는 편곡도 그랬지만, 
                무엇보다도 나를 그토록 감동시켰던 그의 처절한, 그누구도 흉내낼 수 없는 목소리가 
                사라져버렸기 때문이다.
              </p>
            </div>
          </div>

          {/* In the Flesh Live Concert Review */}
          <div className="bg-violet-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-violet-800 mb-4">In the Flesh Live Tour - 라이브 공연 리뷰</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                개인적으로 공연 전체에서의 하일라이트는 <strong>Perfect Sense</strong>라고 생각됩니다. 
                P.P Arnold의 보컬은 한마디로 온몸의 힘을 쫙 빼놓네요... 
                제가 부틀렉에서 찡한 감동이란걸 받아본건 이번이 첨입니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-violet-500">
                <h3 className="font-medium text-gray-800 mb-2">공연에 대한 개인적 바람</h3>
                <p className="text-sm">
                  저는 개인적으로 이번 공연에서 불만이었던 점은 tDSotM이나 WYWH같은 핑플시절의 곡들 보다는 
                  tFC이나 Pros & Cons, Radio KAOS, Amused To Death 같은 로저의 솔로 앨범에서 
                  더 많은 곡과 시간이 할애되었다면 좋았을거 같다는 점입니다.
                </p>
                <p className="text-sm mt-2">
                  특히, The Final Cut의 타이틀곡이나 Gunner's Dream같은곡이 빠진 점이나 
                  Pros&Cons랑 Radio KAOS에서 한곡씩만 선곡된것이 무척 아쉽군요... 
                  Amused To Death 에서도 The Bravery of Being Out of Range가 빠진게 아쉽구요.
                </p>
              </div>
              
              <p>
                저도 그렇게 생각합니다. 특히 Roger의 공연에선 이제 Money나 Another Brick in the Wall part 2는 
                그만 은퇴시켰으면 하는 생각이 듭니다. 이제 Another Brick in the Wall 내지는 The Wall에 
                더이상 많이 기대지 않는 Roger가 되었으면 하는 바람입니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-violet-500">
                <h3 className="font-medium text-gray-800 mb-2">The Final Cut에 대한 아쉬움</h3>
                <p className="text-sm">
                  The Final Cut의 타이틀 트랙은 아직도 한번도 라이브로 연주되지 않았죠. 
                  개인적으로도 The Final Cut은 Two Suns in the Sunset과 함께 꼭 지금의 Roger Waters가 
                  공연에서 연주해 주었으면 하는 곡입니다. 하지만 Roger가 높은 톤으로 구성되어있는 
                  The Final Cut을 공연에서 그대로 부를 수 있을지.. 그것도 지금 55살의 나이에.. 의문입니다.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium text-gray-800">Roger Waters 라이브에서 꼭 듣고 싶은 곡들:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded text-sm">
                    <strong>1. The Final Cut</strong><br/>
                    "through the fish eyes lens of tear stained eyes..."라고 Roger가 부르기 시작하면 정말 돌아버릴것 같습니다.
                  </div>
                  <div className="bg-white p-3 rounded text-sm">
                    <strong>2. Molly's Song</strong><br/>
                    Radio KAOS에서 edit 된 트랙이지만 P.P. Arnold의 보컬로 다시 듣고 싶습니다.
                  </div>
                  <div className="bg-white p-3 rounded text-sm">
                    <strong>3. Late home tonight / Too Much Rope</strong><br/>
                    The final cut의 타이틀 트랙만큼이나 감동을 주는 Amused to Death 중반부의 걸작들이죠.
                  </div>
                  <div className="bg-white p-3 rounded text-sm">
                    <strong>4. Nobody Home</strong><br/>
                    Roger가 가장 즐겨쓰는 단어 Home이죠? 가장 Roger적인 곡. Dave가 부르면 정말 어울리지 않을 곡입니다.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* In the Flesh Album Review */}
          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">In the Flesh (2000) - 라이브 앨범 리뷰</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                바로 며칠전에 따끈따끈하게 발매된 로저 워터스의 새 라이브 앨범입니다. 
                잘 아시는대로 작년과 올해 여름에 진행되었던 99/2000 In the Flesh 북미 tour에서 발췌한 음원을 담고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-2">아트워크 분석</h3>
                <p className="text-sm">
                  보라색의 하늘에 개기일식 후의 해가 떠있고 멀리 보이는 콜라쥬 형태의 건물앞으로 
                  가시가 날카롭게 박힌 철조망이 엑스자 형으로 드리워져 있습니다. 
                  그리고 In the Flesh의 상징적인 돼지의 실루엣이 오른쪽 밑에 검게 그려져 있습니다.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                  <div>
                    <strong>앨범별 레퍼런스:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Dark Side - 개기일식 후의 해</li>
                      <li>• Animals - 돼지의 실루엣</li>
                      <li>• The Wall - 호텔방과 이빨빠진 장벽</li>
                    </ul>
                  </div>
                  <div>
                    <strong>솔로 앨범 레퍼런스:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Pros and Cons - 누드 히치하이커</li>
                      <li>• Radio KAOS - 안테나</li>
                      <li>• Amused to Death - 티비보는 고릴라</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-2">수록곡</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Disc 1:</strong>
                    <ol className="mt-1 space-y-1">
                      <li>1. In the Flesh</li>
                      <li>2. The Happiest Days of Our Lives</li>
                      <li>3. Another Brick in the Wall part 2</li>
                      <li>4. Mother</li>
                      <li>5. Get Your Filthy Hands off My Desert</li>
                      <li>6. Southampton Dock</li>
                      <li>7. Pigs on the Wing Part 1</li>
                      <li>8. Dogs</li>
                      <li>9. Welcome to the Machine</li>
                      <li>10. Wish You Were Here</li>
                      <li>11. Shine on You Crazy Diamond</li>
                      <li>12. Set the Controls for the Heart of the Sun</li>
                    </ol>
                  </div>
                  <div>
                    <strong>Disc 2:</strong>
                    <ol className="mt-1 space-y-1">
                      <li>1. Breath (in the Air)</li>
                      <li>2. Time</li>
                      <li>3. Money</li>
                      <li>4. The Pros and Cons of Hitchhiking Part 11</li>
                      <li>5. Perfect Sense (Part I and II)</li>
                      <li>6. The Bravery of Being Out of Range</li>
                      <li>7. It's a Miracle</li>
                      <li>8. Amused to Death</li>
                      <li>9. Brain Damage</li>
                      <li>10. Eclipse</li>
                      <li>11. Comfortably Numb</li>
                      <li>12. Each Small Candle</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <p>
                한번 가봤던 공연의 음원을 담은 '공식' 라이브 앨범을 처음 접하는 기분은 참 독특했습니다. 
                부클렛에 있는 사진을 볼때도 예전과는 다르게 무척이나 흐뭇한 기분이 들더군요. 
                "아.. 바로 이 표정과 이 자세라면 이 곡을 연주할때 겠지.." 라는 생각도 들고요.
              </p>
              
              <p>
                앨범전체를 다 들어본 결과 무척 실제 공연에 충실하게 되어있어서 아주 맘에 들었습니다. 
                다이내믹한 연주들이 공연때의 추억을 그대로 되살릴수 있도록 충실히 믹싱되어 기록되어 있습니다.
              </p>
            </div>
          </div>

          {/* Artist Evaluation */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">아티스트로서의 평가</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                대중의 스타는 크게 두 부류로 나누어 볼 수가 있다. 
                한쪽은 대중의 시선을 못받아서 안달인 쪽이고, 다른 한쪽은 팬들이 지긋지긋해서 
                되도록이면 피해다니려고 하는 쪽이다.
              </p>
              <p>
                가장 추한 모습은 정상의 달콤한 맛을 맛본 뒤 차츰 멀어지는 대중을 
                다시 자신에게 다가오게 하기위해 자신의 본연의 모습을 팽기치고 
                유행에 따르려고 발버둥치는 퇴물 스타들이다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <p className="text-sm">
                  <strong>Roger Waters의 자세:</strong> 
                  Roger Waters에게도 그러한 위기는 그의 26년 프로생활동안 많이 있어왔다. 
                  그러나 그때마다 그는 슬기롭게 극복해 왔다. 
                  이번 앨범도 전작의 상업적 참패에도 불구하고 결코 유행에 영합하는 
                  추한 모습을 보여주지 않았다는 점만으로도 너무나 반가웠다.
                </p>
              </div>
            </div>
          </div>

          {/* Amused to Death 트랙별 상세 분석 */}
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                김선호 (pink99)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Amused to Death - 트랙별 상세 분석</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                본작은 모두 14개의 곡으로 이루어져 있으며 앨범전체가 한 주제아래 일관적으로 짜여진 컨셉트 앨범이다.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">1. The Ballad of Bill Hubbard</h3>
                  <p className="text-sm">
                    1차대전에 참전하여 전사한 한 병사인 'William Hubbard'에게 바쳐지는 곡이다. 
                    첫머리에는 귀뚜라미의 울음소리와 멀리서 들리는 개짖는 소리가 Q Sound의 사실적인 효과음으로 표현되며 
                    뒤이어 한밤중에 T.V의 채널을 돌리며 나오는듯한 잡음이 섞인 인터뷰소리와 어떤 여성의 흐느끼는 소리, 
                    그리고 잔뜩 안개속에 잠긴듯한 착찹한 기분을 느끼게 해주는 서글픈 일렉기타의 울림으로 시작된다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">2. What God Wants (Part I)</h3>
                  <p className="text-sm">
                    갑자기 T.V 채널을 돌리는듯한 소리가 들리며 한 소년의 목소리가 흘러나온다. 
                    뒤이어 드디어 원숭이란 존재로 퇴화되어 표현되고 있는 인간들이 투쟁을 하는, 싸움을 하는, 괴성이 들리고 
                    금속 무기가 부딪치는 소리 그리고 여성 백보컬리스트의 목소리로 시작된다.
                  </p>
                  <p className="text-sm mt-2">
                    점차적으로 멀리서 들리던 군중들의 함성이 마치 창문이 열리는듯한 효과가 느껴지고 
                    한꺼번에 그들의 외침이 들려오게 되며 제프 벡의 강렬한 기타 연주가 폭발한다. 
                    특히 이 곡에서의 제프 벡의 강렬하고 자유분방한 기타연주는 무척이나 강한 인상으로 남는다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">3. Perfect Sense (Part I)</h3>
                  <p className="text-sm">
                    역시나 다음곡으로의 전환은 T.V 채널이 바뀌는 효과로 시작된다. 
                    한층 부드러워진 퍼커션의 연주와 마치 우주공간 혹은 공기가 부족한 곳에서의 대화를 연상케하는 숨찬 목소리가 들리고 
                    벼락이 치는 소리 같기도 하고 혹은 무슨 폭발음 같기도 한 효과음의 뒤를 이어 피아노의 선율이 들려온다.
                  </p>
                  <p className="text-sm mt-2">
                    피아노의 비교적 서정적이고 아름다운 선율에 이어 로저 워터스의 슬픔에 잠긴듯한 보컬이 시작된다. 
                    Memory와 History, 즉 인간이 무엇인가 배워나가야할 것에 대해 올바른 인식의 능력을 상실해 버린 
                    퇴화된 원숭이로의 묘사가 이루어 진다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">4. The Bravery of Being Out Of Range</h3>
                  <p className="text-sm">
                    현대판 전쟁놀이의 승전가이다. 웅장한 드럼의 타격에 이어서 강렬한 기타연주가 흘러나온다. 
                    The Wall에서 들을수 있었던 하나의 Theme이다. 현대의 장난과 같은 게임과 같은 전쟁놀이에서 
                    우리들은 무척이나 흥미있어하고 즐거워 한다.
                  </p>
                  <p className="text-sm mt-2">
                    그 놀라운 신형무기들, 멋진 헬기, 기관총, 미사일등등.... 우리들은 바로 우리들로 부터 3000 mile이나 떨어진 먼곳에서 
                    그것을 즐긴다. 그곳의 사람들이 어떻게 되는지 그런것은 상관이 없다. 
                    오직 그 멋진 광경과 흥분을 즐기기만 하면 될뿐이다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">5. Late Home Tonight (Part I & II)</h3>
                  <p className="text-sm">
                    물방울 떨어지는 소리로 시작이 된다. 아마도 예전 핑크 플로이드 시절 'Meddle'앨범의 'Echoes'에서 
                    사용된 물방울 떨어지는 소리의 이미지가 연상되기도.... 
                    Oxfordshire에 살고 있는 한 농부의 아내는 그 시간 그녀의 집위로 날아가는 하나의 유령의 모습을 한 괴물이 날아가는것을 보지 못했다.
                  </p>
                  <p className="text-sm mt-2">
                    같은 시간 Cleveland의 한 어린아이는 T.V를 여기저기 돌리다 언제나 동경의 대상이 되고 멋진 군대모집 광고의 모습을 보고 있다. 
                    이 시간 트리폴리의 보통 가정의 어머니는 거리에서 들려오는 정치적인 시위소리에 귀를 기울이고 있었다... 
                    바로 늦은 오늘밤 그들의 집에서... 폭격은 시작되고 모든것은 파괴 되어 버린다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">6. Too Much Rope</h3>
                  <p className="text-sm">
                    긴장된 스트링의 연주와 장작을 패는 소리 시골길을 달리는 마차의 소리가 들린다... 
                    이젠 모든것이 더이상 어쩔수 없는 상황으로 되어 버리고 될데로 되라는 심정이다.... 
                    하지만 이젠 그 아랍인들을 죽게 한 그 일에 대해 자책을 느끼지만 어쩔수 없다.
                  </p>
                  <p className="text-sm mt-2">
                    하지만 이 살인을 정당하게 당연하게 만들어 주려는 위대한 신들의 노력은 대단하다. 
                    온갖 신들의 이름을 내세워 Moslem, Christian Mullah, Pope 끊임없이 우리들에게 구원의 밧줄을 내려주지만... 
                    하지만 로저는 외친다. 더 이상 이런 위선적이고 거짓의 구원은 필요없다고... Fuck it Up!
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-6">
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">7-8. What God Wants (Part II & III)</h3>
                  <p className="text-sm">
                    오직 신의 이름을 이용하여 자신들의 더러운 욕심을 채우기 위해서... 전체 총 3부작으로 이루어진 곡이다. 
                    첫부분의 광적인 신의 연설이 삽입되어 있고 끝부분은 예의 귀뚜라미소리로 맺는다.
                  </p>
                  <p className="text-sm mt-2">
                    'Part 3'에서는 외계인이 등장한다. 이는 멀리서 온 신비로운 지구의 감시자이다. 
                    산뜻한 느낌의 피아노 연주와 점점 고조되는 로저의 보컬에 뒤잇는 제프 벡의 그야말로 눈물나게 만드는 
                    흐느끼는 기타연주가 가슴을 찝어놓는것 같다. 슬픔이 철철넘치는 기타연주의 뒤로 
                    장엄하게 비장하게 펼쳐지는 현악오케스트레이션...
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">9. Watching T.V</h3>
                  <p className="text-sm">
                    천안문 사태와 그때 T.V를 통해서 살해되었던 한 중국소녀의 이야기를 그린 곡이다. 
                    T.V 채널을 돌리는 상황의 설정을 긴장된 기타의 스트링터치로 표현했다. 
                    이제 막 화면에서는 시위군중의 함성과 뒤이어 들리는 끔찍한 기관총의 무차별 사격소리가 들린다.
                  </p>
                  <p className="text-sm mt-2">
                    한 아름다운 중국의 소녀가 기술자의 딸이 완벽한 가슴과 높은 이상과 아몬드빛의 눈을 가졌던 
                    철학과 학생이었던 황색장미가 T.V속에서 무참히 살해된것 이다. 
                    서정적인 어쿠스틱 기타 반주위에 로저의 애감에 찬 보컬이 눈시울을 적셔준다.
                  </p>
                  <p className="text-sm mt-2 italic">
                    "And I Grieve For My Sister...."
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">10. Three Wishes</h3>
                  <p className="text-sm">
                    로저의 내면적인 자신의 이야기 자신의 희망을 토로한 곡이다. 동화속에서 나오는 세가지 소원을 들어주는 
                    램프의 요정이 등장한다. 로저는 이렇게 대답한다:
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm mt-2">
                    <p><strong>첫 번째 소원:</strong> 레바논의 사람들이 모두 행복했으면 좋겠고...</p>
                    <p><strong>두 번째 소원:</strong> 지금 자신이 만들고 있는 이 노래를 완성하는데 도와줄수 있는 사람이 있었으면 좋겠고..</p>
                    <p><strong>세 번째 소원:</strong> 자신이 어릴적에 그리움을 배우게 해줬던 그 사람을 떠나보내지 않게 해달라고....</p>
                  </div>
                  <p className="text-sm mt-2">
                    특히 익히 잘 알고 계시는 로저 워터스의 아버지(어릴적 전쟁터에서 전사한)에 대한 그리움이 단적으로 표현된 곡이다. 
                    바로 전쟁이란 비극의 한 희생자이기도 한 로저 자신의 비극이 잘 나타나 있다. 
                    핑크 플로이드 시절 'Final Cut'에서 나왔던 자신의 아버지에 대한 그리움의 연장선상의 곡이라고 보면 될것이다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">11. It's A Miracle</h3>
                  <p className="text-sm">
                    이 놀라울 정도로 달라진 세상 많은것이 변하고 도저히 이루어지지 않을줄 알았던 일들이 
                    급속히 일어나고 있는 현대의 상황을 약간은 조소하는듯한 인상으로 노래하고 있다. 
                    이러한 상황들을 바로 신들의 위대한 놀음으로 이루어진 일로 이야기 하고 있다.
                  </p>
                  <p className="text-sm mt-2">
                    대단한 흥행을 하고 있는 연중내내 문전성시를 이루고 있는 앤드류 로이드 웨버의 뮤지컬에 대한 
                    로저의 부정적인 묘사가 무척 과격하다. 지진이 일어나서 그 극장을 박살을 내고 
                    그래도 그 오페레타가 계속된다면 빌어먹을 그의 손가락을 피아노 리드가 무너져 내리면서 
                    박살내버려라고 외치고 있다... 바로 그것이 기적이라고...
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">12. Amused To Death (타이틀곡)</h3>
                  <p className="text-sm">
                    마지막을 장식하는 곡은 앨범의 타이틀곡이다. T.V에는 상금이 걸려있는 퀴즈프로가 진행중이고 
                    담담히 약간은 원초적인 리듬감의 타악기 연주를 시작으로 곡이 시작된다. 
                    T.V에 종속되어 있는 인간의 비인간적이고 무비판적이고 퇴패적인 모습을 표현하고 있다.
                  </p>
                  <p className="text-sm mt-2">
                    다시 등장하는 외계인... 이 지구를 감시하고 심지어 파괴시킬수도 있는 그들이 등장한다. 
                    그들은 이 지구에서 벌어지고 있는 비극들을 T.V를 통해서 보고 이 우리들이 살고 있는 땅에 대해 
                    사망선고를 내린다. '이 종족은 스스로 죽어가는것을 즐기고 있다'고 말이다.
                  </p>
                  <p className="text-sm mt-2">
                    앨범의 처음부분에 나왔던 귀뚜라미소리를 끝으로 완벽한 수미상관의 구조로 이루어진 본작은 모두 끝이 나게 된다. 
                    남겨진것은 진한 감동과 깨달음이.... <em>(1993년 1월 9일 새벽 2시 35분께... 3시간 30분간의 감상문)</em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 김선호 개인적 감상문 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                김선호 (pink99) - 개인적 회고
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Roger Waters의 음악과 나</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                내가 그의 음악 - 정확히 말하자면 PINK FLOYD의 음악을 처음으로 접하게 된 것은 지금으로부터 8년전, 
                그러니까 내가 고등학교 1학년때인것으로 기억된다. 막연히 그동안 들어오던 단순한 팝에서 뭔가 다른 음악을 
                찾아헤메고 있던 나에게 그의 음악은 신선한 충격으로 다가왔다.
              </p>
              
              <p>
                'DARK SIDE OF THE MOON'에서 느꼈던 이질감에서 시작하여 'WISH YOU WERE HERE'에서 나의 떨칠 수없는 
                고독감과 공명하는 그의 진한 그것을 느끼면서 그의 음악은 어느덧 나의 일부가 되어갔고, 
                'THE WALL'에서 그토록 많았던 나의 힘들고 외로운 순간들에 대한 위안을 찾게 되기까지 
                난 항상 그의 음악을 생각하고 좀더 이해하려고 노력해왔다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-2">Radio K.A.O.S.에 대한 실망</h3>
                <p className="text-sm">
                  그 이후 나온 그의 솔로 앨범, 즉 'RADIO K.A.O.S.'는 솔직히 나에게 많은 실망을 주었다. 
                  마치 댄스음악을 연상케 하는 편곡도 그랬지만, 무엇보다도 나를 그토록 감동시켰던 그의 처절한, 
                  그누구도 흉내낼 수 없는 목소리가 사라져버렸기 때문이다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-2">신작 'Amused to Death' 3가지 관점 평가</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>1. 음악:</strong> 전작에서 느낀 당혹감을 많이 보상시켜준다. final cut와 비슷하다고 할까. 
                    Jeff Beck, Rita Coolidge, Don Henry, Steve Lucather등의 호화 게스트들의 탁월한 어시스트와 
                    여전한 Michel Kamen의 감동적인 orchestra편곡이 돋보인다.
                  </div>
                  <div>
                    <strong>2. 컨셉트:</strong> 별로 새로운 모습은 찾기 힘들다. 과거의 전쟁으로 인한 비극보다는 
                    그러한 참혹한 전쟁에 인간들이 몰입하고 심지어는 즐기기까지되는 메카니즘을 주제로 잡고 있다.
                  </div>
                  <div>
                    <strong>3. 자켓:</strong> 요즘은 CD시대라서 그런지 자켓에 별로 신경을 쓰지 않는 듯하다. 
                    자켓문제만큼은 아나로그 디스크가 그리워질때가 많다.
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-2">최종 평가</h3>
                <p className="text-sm">
                  이번 앨범 'Amused to death'가 그의 기존 걸작에 비추어 많이 모자라더라도 난 전혀 실망하지 않았다. 
                  다만 그가 전작의 상업적 참패에도 불구하고 결코 유행에 영합하는 추한 모습을 보여주지 않았다는 점만으로도 
                  너무나 반가웠다.
                </p>
              </div>
            </div>
          </div>

          {/* Fish - Radio K.A.O.S Live in Quebec 리뷰 */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">Radio K.A.O.S live in Quebec - 라이브 실황 리포트</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                몇달전 netter와의 trade를 통해 구한 Roger Waters & The Bleeding Heart Band의 Radio KAOS 공연실황 
                VIDEO(해적판 video)입니다. 전체적으로 캠코더의 angle이 고정되어있어 zoom in/out 만을 반복하는 
                무척 단순한 화면이고 battery가 떨어졌는지 도중에 끊기기도 하는 조금 저질의 VIDEO 이지만 
                무척 흥미있는 내용을 담고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">출연진 소개</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Paul Carrack:</strong> Mike and the Mechanics와의 활동으로 유명해진 (Berlin 'The Wall' live에서 Hey you를 부른 대머리 아저씨)가 vocal과 key를 담당</p>
                  <p><strong>Mel Collins:</strong> 생전 처음 이 video를 통해 얼굴을 본 saxophone 연주자</p>
                  <p><strong>Jim Ladd:</strong> LA의 유명한 DJ가 stage 위의 DJ box에 앉아 Radio KAOS 앨범의 진행과 유사하게 ment를 넣어가며 쇼를 이끔</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">Radio KAOS 컨셉트 설명</h3>
                <p className="text-sm">
                  선천적인 deaf/dumb/blind인 Billy가 우연히 휴대 phone을 통해 지구상의 모든 기계를 control할 수 있는 능력을 발견합니다. 
                  (그러니까 mutant..즉 돌연변이 초능력자이지요) 그는 KAOS 방송국의 주파수로 hack in 해 들어가 DJ인 Jim Ladd와 친구가 되어 
                  이 지구상의 첨단 모순의 결정체인 핵무기를 없애버릴 가증스런 계획을 세웁니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">하이라이트 장면</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">핵 시뮬레이션 장면</h4>
                    <div className="space-y-2">
                      <p><strong>Billy:</strong> "그들은 button을 눌렀어.."</p>
                      <p><strong>Jim Ladd:</strong> "무슨 button ? 'the' button ?"</p>
                      <p><strong>Billy:</strong> "그래 이제 4분후면 모두가 끝이야.."</p>
                      <p><strong>Jim Ladd:</strong> "음...여러분 이제 4분 남았네요.. 바깥 stadium에서는 ***팀이 Giants에 3-0으로 이기고 있고 하하.. 내일 surfing 계획있으신분 참 안됐습니다.."</p>
                    </div>
                    <p className="mt-2">
                      이어서 "너 취직 됐대매 ?" 하는등의 온갖 군상들의 소리가 overlap되고 Blackout, Whiteout의 noise와 함께 
                      가상의 핵 폭발이 일어납니다. 물론 Billy는 simulation을 통해 인간들에게 핵에 대한 공포와 반성을 느끼도록 하여준 것이죠.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">공연 중 Pink Floyd 곡들</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Another Brick in the wall pt I/The happiest days of our lives/ABitW pt II</li>
                      <li>Welcome to the machine</li>
                      <li>Mother</li>
                      <li>Southampton dock</li>
                      <li>Nobody home (Roger가 TV 앞의 sofa에서 부르는데 분위기 잡고 부르다가 mic를 놓치는 무척 우스운 공연사고가 남)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">특별한 순간들</h4>
                    <p>
                      intermission에는 Billy가 공연장의 video controller에 hacking 하여들어와 저 Syd Barrett의 video 'Arnold Layne'을 상영합니다. 
                      또 Radio KAOS album 에는 실리지 못한 곡인 single record b side의 곡인 Going to live in LA, Molly's song에서는 
                      backing vocal을 담당하던 두명의 여자들이 기막힌 vocal을 보여줍니다.. 휴,, 정말 끝내줘요..
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Encore</h4>
                    <p>
                      Four minutes가 끝날무렵 Billy의 counting과 더불어 장내는 폭음과 함께 암흑으로 바뀝니다.. 
                      이윽고 어디선가 비쳐오는 한줄기 빛을타고 등장한 band는 The tide is turning을 합창하고.. 
                      열화와 같은 관중들의 Encore에 힘입어 다시나온 band는 영원한 Pink Floyd의 classic이자 
                      Roger solo 공연의 단골 encore menu인 Brain Damage/Eclipse를 부르며 공연을 마칩니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">
                  <strong>참고:</strong> 사실 이 VIDEO를 살때만 하더라도 ftp site에서 받아온 KAOS script에는 
                  Clare Torry가 특별 출연하여 The Great Gig in the Sky를 부른다고 하여 상당히 기대를 많이 했는데 
                  Clare Torry는 안나오더군요.. tour 초기에만 참여하고 나중엔 힘들어서 빠졌나봐요.. :-)
                </p>
              </div>
            </div>
          </div>

          {/* 정종화 - Amused to Death 상세 감상문 */}
          <div className="bg-orange-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                정종화
              </div>
            </div>
            <h2 className="text-xl font-semibold text-orange-800 mb-4">Roger Waters 'Amused To Death' - 개인적 감상문</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">첫 만남과 기대</h3>
                <p className="text-sm">
                  이 앨범에 대한 처음 소식을 접한게 작년 여름방학이 끝나갈때쯤이었던것같다. 국내 모 팝프로에 해외 팝스계소식을 전해주는 코너에서 
                  그동안 무척이나 기다렸던 로저 워터스의 새로운 앨범에 대한 소식을 들을수 있었다. 그리고 더우기 본인을 흥분하게 하는 소식은 
                  개인적으로 가장 좋아하는 기타리스트중에 하나인 제프 벡이 새로운 앨범에서 기타를 맡아 주고 있다는 사실이었다.
                </p>
                <p className="text-sm mt-2">
                  처음으로 로저 워터스의 신작을 접하게 된때는 전영혁씨의 프로에서 앨범전곡을 틀어주는 감상시간을 통해서 였다. 
                  사실상 처음의 느낌은 로저의 전작, 특히 핑크 플로이드 시절의 명반 'The Wall'의 분위기가 강하게 느껴졌다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">Q-Sound와 특수효과</h3>
                <p className="text-sm">
                  특수한 녹음형태라는 Q-Sound라는 System의 사용으로 무척이나 사실적인 특수효과음 또한 무척 인상적이었다. 
                  아무튼 그 당시로는 로저의 바로 전작인 'Radio K.A.O.S'의 참담한 실패의 전철은 적어도 밟지않았음에 안도의 한숨을 내쉴수 있었다.
                </p>
                <p className="text-sm mt-2">
                  그 이후 국내 라이센스를 기다리며 근근히 녹음한 테잎으로 가끔 로저의 신작을 새롭게 감상해 가고 있었다. 
                  들으면 들을수록 어느정도 성공했다는 느낌을 더욱 굳힐수 있었고, 마침내 국내 라이센스화가 되었다는 소식을 듣고 레코드점에 들려보았으나 
                  아쉽게도 LP로는 발매도 되지 않았다는 슬픈 소식에 눈물을 머금고 테잎만을 손에 들고 왔었다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">가사의 중요성과 충격</h3>
                <p className="text-sm">
                  한 고마우신 언더동 회원님의 수고로 그의 앨범의 전곡의 가사를 입수할수 있게 되었다. 
                  아무튼 가사를 이해하고 듣는 그의 음악 이 새로운 명작은 나를 서서히 아니 아주 충격적일 정도로 그의 음악과 생각 사상속으로 몰아넣기 시작했다.
                </p>
                <p className="text-sm mt-2">
                  사실상 요사이 나의 음악감상 자세는 기껏 명반이란 앨범을 사 모우는데 급급하여 제대로 감상의 자세를 가지기 힘들었던 경우가 많았는데 
                  이러한 잘못을 저지르지 않게 해준 요사이 몇몇 되지않았던 앨범으로 다가 오기 시작했다. 진정으로 나를 사로잡고 나의 마음을 뒤흔들어놓은 앨범이었기에...
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">걸프전과 TV 매체 비판</h3>
                <p className="text-sm">
                  이 앨범의 주요 소재이자 주제가 되는 요소는 걸프전이었으며 그 인류의 비극을 TV라는 대중매체를 통해서 무감각하게 접하며 
                  아무런 비애나 슬픔을 느끼지 못하는 인간의 문제를 주제로 담고 있다. 최근 국내에서도 걸프전에 대한 느낌을 주제로 했던 앨범들이 몇 있었는데 
                  조하문씨의 3번째 앨범에서 몇곡들과 특히 신해철씨가 주축이 되었던 그룹 'N.EX.T'의 'HOME' 앨범에서의 'Turn Off The T.V'라는 곡에서의 컴셉과 무척 유사한 주제와 소재를 담고 있다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">참여 뮤지션들의 기여</h3>
                <p className="text-sm">
                  뛰어난 세션맨들의 참여가 눈에 띄는데 누구보다 눈에 띄는 인물이 바로 전설적인 기타리스트 '제프 벡'의 참여이다. 
                  어느누구에게도 도저히 그의 기타실력에 의심을 주지 않는 진정 뛰어난 기타리스트 바로 '제프 벡'의 참여는 이 앨범에서 더욱 뛰어난 사운드를 만드는데 결정적인 공헌을 하고 있다.
                </p>
                <p className="text-sm mt-2">
                  더군다나 스튜디오 세션맨들로 이루어져 세계에서 가장 뛰어난 연주력을 갖추었던 그룹 'ToTo'의 두명의 멤버 스티브 루카서와, 
                  이제는 불귀의 객이 되어버린 당대 최고의 테크닉을 보여줬던 드러머 '제프 포카로'의 참여는 더욱 의의가 깊다. 
                  여성 백보컬로 앨범 전체에서 상당한 보컬의 역할을 담당했던 여성 싱어 '리타 쿨리지'의 목소리도 본작의 완성도를 높이는데 많은 공헌을 했다.
                </p>
              </div>
            </div>
          </div>

          {/* Fish - Each Small Candle & 추가 라이브 리포트 */}
          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">Each Small Candle & In the Flesh 투어 마무리</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">투어 종료와 성공 요인</h3>
                <p className="text-sm">
                  지난 8월 28일 캔서스 시티의 공연을 마지막으로 로저워터스의 짧은 미국 순회공연이 끝났습니다. 
                  2000년 봄에 유럽에서 다시 공연할 계획이 있다고 하는데.. 아직 확실한건 아니라는군요. 
                  이번 공연은 지난번 84/85 Pros and Cons 투어나.. 87 Radio KAOS 투어보다 훨씬 성공적이었다는데요..
                </p>
                <p className="text-sm mt-2">
                  그 이유는 뭐 로저워터스 만의 인기보다는 Pink Floyd가 지난번 The Division Bell 투어 이후로 몇년간 투어를 하지 않아 
                  팬들이 Floydian 한것에 목말라 있었다는데에 더 큰 원인이 있을것 같습니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">팬층의 갈등과 혼란</h3>
                <p className="text-sm">
                  실제로 지방 FM방송에서는 로저워터스의 공연 광고를 하면서.. Pink Floyd의 The Division Bell의 곡들을 백그라운드로 틀어주는 황당함도 몇번 있었고.. 
                  The Division Bell로 Pink Floyd를 기억하는 어린팬들과 로저워터스의 솔로곡들을 더 듣고 싶어서 찾아온 오래된 정말 로저의 다이하드 팬들과의 많은 갈등도 있었습니다.
                </p>
                <p className="text-sm mt-2">
                  로저의 다이하드 팬으로서.. 후반부에 amused to death의 곡들이 연주될때를 마치 휴식시간.. 핫도그 사먹거나 화장실 가는 시간.. 으로 이용한 어린 팬들이 좀 안타깝게 보였겠죠.. 
                  그리고 제발.. the division bell 티셔츠를 입고 로저워터스 공연에 나타나지 말라는 많은 글들이 로저워터스 뉴스그룹에 올라왔었습니다. ^^;
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">Rick Wright의 깜짝 참관</h3>
                <p className="text-sm">
                  또 재밌는 사실은 Rick Wright가 로저워터스의 8월 22일 아틀란타 공연을 참관했다는 사실이죠.. 
                  로저에 의해 Pink Floyd에서 쫓겨났고 여러가지로 로저에 대해 좋은 인상을 가지지 않았을 Rick Wright가 무슨 이유로 로저의 공연을 돈내고 보러갔을까요?
                </p>
                <p className="text-sm mt-2">
                  지난번 The division bell 투어에서 Rick Wright와 함께 건반을 담당했던 Jon Carin이 역시 이번 로저의 공연에서도 건반을 맡아 
                  Shine on you crazy diamond 등의 곡에서 Rick의 역할을 대신했죠.. 바로 그 Carin이 일부러 휴식시간에 무대에서 내려와 
                  Rick Wright와 담소를 나누며 이런저런 얘기를 했다는 겁니다. 훗.. 무슨 얘기를 나눴을까요?
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">신곡 'Each Small Candle' 초연</h3>
                <p className="text-sm">
                  재미있는 사실은 로저가 마지막 공연 그날 앙코르로 Comfortably numb를 부르기 직전에.. 신곡을 연주했다는 사실입니다. 
                  로저워터스 뉴스그룹에서 많은 포스팅을 하는 The Doctor라는 친구가 실은 이 신곡을 듣고 싶어서 자기가 갔었던 아틀란타 쇼에서.. 
                  전단을 만들어 관객들에게 배포했습니다.
                </p>
                <p className="text-sm mt-2">
                  신곡의 타이틀이 Candle.. 어쩌구라는걸 알고 있었던 the Doctor는 미리 촛불 그림을 몇백장 프린트해서 공연장 입구에서 관중들에게 나눠 주었습니다. 
                  "Brain Damage/Eclipse 앵콜 뒤에.. 이 촛불을 들어올려.. 로저로 하여금 신곡을 연주하게 꼬시자!!" 라는게 그의 의도였고.. 
                  그 말은 촛불 그림 밑에 쓰여져 있었습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Fish - Radio K.A.O.S live in Quebec 라이브 실황 리포트 */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-4">Roger Waters / Radio K.A.O.S live in Quebec - 라이브 실황 리포트</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                몇달전 netter와의 trade를 통해 구한 Roger Waters & The Bleeding Heart Band의 Radio KAOS 공연실황 VIDEO(해적판)입니다. 
                전체적으로 캠코더의 angle이 고정되어있어 zoom in/out 만을 반복하는 무척 단순한 화면이고 battery가 떨어졌는지 
                도중에 끊기기도 하는 조금 저질의 VIDEO 이지만 무척 흥미있는 내용을 담고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">출연진</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Paul Carrack</strong> - Mike and the Mechanics와의 활동으로 유명해진 대머리 아저씨 (Berlin 'The Wall' live에서 Hey you를 부른). vocal과 key를 담당</p>
                  <p><strong>Mel Collins</strong> - sax 연주 (생전 처음 이 video를 통해 얼굴을 봄)</p>
                  <p><strong>Jim Ladd</strong> - LA의 유명한 DJ. stage 위의 DJ box에 앉아 Radio KAOS 앨범의 진행과 유사하게 ment를 넣어가며 쇼를 이끔</p>
                  <p><strong>Roger Waters</strong> - Berlin에서 입은 것과 같은 검은색 jacket에 청바지와 운동화, sun glass를 쓰고 첫곡인 Radio Waves를 부름 (어색한 율동으로 bass guitar를 흔들며...)</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">Radio KAOS 컨셉 설명</h3>
                <p className="text-sm">
                  이 Radio KAOS concept의 주인공인 돌연변이 식물인간 Billy가 voice synthesizer를 통해 공연장에 나타납니다. 
                  선천적인 deaf/dumb/blind인 Billy가 우연히 휴대 phone을 통해 지구상의 모든 기계를 control할 수 있는 능력을 발견합니다. 
                  (그러니까 mutant..즉 돌연변이 초능력자이지요...)
                </p>
                <p className="text-sm mt-2">
                  그는 KAOS 방송국의 주파수로 hack in 해 들어가 DJ인 Jim Ladd와 친구가 되어 이 지구상의 첨단 모순의 결정체인 핵무기를 없애버릴 
                  가증스런(:-)) 계획을 세웁니다. 미 국방성과 당시 구 소련의 핵무기 통제 computer로 무선전화기의 주파수를 통해 hack in한 Billy는 
                  앞으로 4분 후에 지구상의 모든 핵무기가 터진다고 Jim Ladd의 방송을 통해 LA 주민에게 선고합니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">핵심 대화 장면</h3>
                <div className="bg-gray-50 p-3 rounded text-sm">
                  <p><strong>Billy:</strong> 그들은 button을 눌렀어..</p>
                  <p><strong>Jim Ladd:</strong> 무슨 button ? 'the' button ?</p>
                  <p><strong>Billy:</strong> 그래 이제 4분후면 모두가 끝이야..</p>
                  <p><strong>Jim Ladd:</strong> 음...여러분 이제 4분 남았네요.. 바깥 stadium에서는 팀이 Giants에 3-0으로 이기고 있고 하하.. 내일 surfing 계획있으신분 참 안됐습니다..</p>
                </div>
                <p className="text-sm mt-2">
                  이어서 "너 취직 됐대매 ?"하는등의 온갖 군상들의 소리가 overlap되고 Blackout, Whiteout의 noise와 함께 가상의 핵 폭발이 일어납니다. 
                  물론 Billy는 simulation을 통해 인간들에게 핵에 대한 공포와 반성을 느끼도록 하여준 것이죠... 이윽고 흐르는 The tide is turning....
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">연주곡 하이라이트</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Pink Floyd 시절 곡들:</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Another Brick in the wall pt I/The happiest days of our lives/ABitW pt II</li>
                    <li>Welcome to the machine</li>
                    <li>Mother</li>
                    <li>Southampton dock</li>
                    <li>Nobody home (Roger가 TV 앞의 sofa에서 부르는데 분위기 잡고 부르다가 mic를 놓치는 무척 우스운 공연사고가 남)</li>
                  </ul>
                  <p><strong>특별 출연:</strong> intermission에는 Billy가 공연장의 video controller에 hacking 하여들어와 저 Syd Barrett의 video 'Arnold Layne'을 상영</p>
                  <p><strong>Radio KAOS 미발표곡:</strong> Going to live in LA, Molly's song에서는 backing vocal을 담당하던 두명의 여자들이 기막힌 vocal을 보여줌</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">공연 마무리</h3>
                <p className="text-sm">
                  Four minutes 가 끝날무렵 Billy의 counting과 더불어 장내는 폭음과 함께 암흑으로 바뀝니다. 이윽고 어디선가 비쳐오는 한줄기 빛을타고 
                  등장한 band는 The tide is turning을 합창하고.. 열화와 같은 관중들의 Encore 에 힘입어 다시나온 band는 영원한 Pink Floyd의 classic 이자 
                  Roger solo 공연의 단골 encore menu인 Brain Damage/Eclipse를 부르며 공연을 마칩니다.
                </p>
                <p className="text-sm mt-2 italic text-green-600">
                  화질만 좋았다면 훨씬 감동적인 video가 되었을 텐데... :-)
                </p>
              </div>
            </div>
          </div>

          {/* 박준식 - In the Flesh 99 Tour 상세 리뷰 */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                박준식
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Roger Waters / In the Flesh 99 Tour - 상세 공연 리뷰</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Roger Waters가 In The Flesh 99이라는 제목으로 순회공연을 시작했습니다. 현재는 미국 순회를 하고있고 곧 유럽으로 넘어갈 계획인거 같군요. 
                뉴저지에서 8월 6일에 있었던 공연의 부틀렉은 130메가 정도되며 음질도 괜찮고 공연 전체 setlist가 다 있네요.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-medium text-gray-800 mb-3">참여 멤버</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Roger Waters</strong> - guitar, vocals, and bass</p>
                    <p><strong>Andy Fairweather-Low</strong> - guitar and bass (이젠 아주 유명해졌죠)</p>
                    <p><strong>Doyle Bramhall II</strong> - guitar and vocals (David Gilmour의 보컬 파트를 대신)</p>
                    <p><strong>Snowy White</strong> - guitar and vocals</p>
                  </div>
                  <div>
                    <p><strong>Graham Broad</strong> - drums</p>
                    <p><strong>Jon Carin</strong> - keyboards (핑플의 Delicate Sound of Thunder와 Pulse 라이브에서 함께 공연)</p>
                    <p><strong>Andy Wallace</strong> - keyboards (주로 하몬드 오르간 연주)</p>
                    <p><strong>P.P Arnold</strong> - backing vocals (Amused To Death 앨범에서도 보컬 담당)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-medium text-gray-800 mb-3">Set List</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Set 1</h4>
                    <ul className="text-sm space-y-1">
                      <li>1. In The Flesh</li>
                      <li>2. The Thin Ice</li>
                      <li>3. Another Brick...Pt.1</li>
                      <li>4. Happiest....</li>
                      <li>5. Another Brick...Pt.2</li>
                      <li>6. Mother</li>
                      <li>7. Get Your Filthy Hands Off My Desert</li>
                      <li>8. Southampton Dock</li>
                      <li>9. Pig On The Wings Pt.1</li>
                      <li>10. Dogs</li>
                      <li>11. Welcome To The Machine</li>
                      <li>12. Wish You Were Here</li>
                      <li>13. Shine On...</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Set 2</h4>
                    <ul className="text-sm space-y-1">
                      <li>1. Speak To Me</li>
                      <li>2. Breathe</li>
                      <li>3. Time</li>
                      <li>4. The Great Gig In The Sky</li>
                      <li>5. Money</li>
                      <li>6. Every Strangers Eyes</li>
                      <li>7. Powers That Be</li>
                      <li>8. What God Wants</li>
                      <li>9. Perfect Sense Pt 1 & 2</li>
                      <li>10. It's A Miracle</li>
                      <li>11. Amused To Death</li>
                      <li>12. Brain Damage/Eclipse</li>
                    </ul>
                    <p className="text-sm mt-4"><strong>Encore:</strong> Comfortably Numb</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-medium text-gray-800 mb-3">공연 하이라이트 분석</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-blue-700">In The Flesh</h4>
                    <p>벽 앨범의 네번째 면에 있는 버젼. 그 유명한 Eins! Twei!.... 구호로 시작. 가사가 의미 심장: "I've got some bad news for you sunshine, Pink isn't well, he stayed back at the hotel And they sent us along as a surrogate band...."</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700">Dogs</h4>
                    <p>이번 공연에서의 첫번째 peak. 특히 Doyle이라는 친구는 상당한 실력을 가진 친구. 중간 synth part ('...Stone Stone Stone...' 하는 부분...)에서 나머지 멤버들은 카드놀이를 함.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700">Perfect Sense</h4>
                    <p>개인적으로 공연 전체에서의 하일라이트. P.P Arnold의 보컬은 한마디로 온몸의 힘을 쫙 빼놓음. "Can't You See It all makes perfect sense" 이 부분은 관중들이 함께 부름. 관중과 밴드가 혼연일체가 되어버림.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700">Brain Damage/Eclipse</h4>
                    <p>핑플의 pulse에서 가장 아쉬웠던 부분이 바로 이곡. Eclipse의 도입부의 치고들어가는 느낌... 로저의 공연이 확실히 낫다는것을 보여줌.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-medium text-gray-800 mb-3">개인적 평가</h3>
                <p className="text-sm">
                  개인적으로 이번 공연에서 불만이었던 점은 tDSotM이나 WYWH같은 핑플시절의 곡들 보다는 tFC이나 Pros & Cons, Radio KAOS, 
                  Amused To Death 같은 로저의 솔로 앨범에서 더 많은 곡과 시간이 할애되었다면 좋았을거 같다는 점입니다. 
                  특히, The Final Cut의 타이틀곡이나 Gunner's Dream같은곡이 빠진 점이나 The Bravery of Being Out of Range가 빠진게 아쉽구요.
                </p>
                <p className="text-sm mt-2 font-medium text-blue-600">
                  암튼 로저가 다시 공연장으로 돌아온것은 정말 반가운 일이네요... 곧 새로운 음반도 나오겠죠....
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