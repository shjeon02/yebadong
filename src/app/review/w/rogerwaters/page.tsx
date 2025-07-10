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