import Image from "next/image";

export default function StackridgePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Stackridge
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              영국 서부 Bristol의 유머러스한 Brit-Pop-Rock 밴드
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-green-400">앨범 정보</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-300">앨범:</span>
                    <p className="text-white">Friendliness</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">원본 발매:</span>
                    <p className="text-white">1972년 (MCA Records)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">재발매:</span>
                    <p className="text-white">1996년 (Demon Records)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">활동시기:</span>
                    <p className="text-white">1970년대</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">출신지:</span>
                    <p className="text-white">영국 Bristol</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">장르:</span>
                    <p className="text-white">Brit-Pop-Rock</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-green-400">밴드 기원</h2>
                <div className="space-y-3 text-gray-300">
                  <p>영국 서부에서 1960년대에 Blues와 Soul을 연주하던 사람들이 모여서 만든 밴드입니다.</p>
                  <p>코끼리처럼 Bristol에서 주로 활동했으며, 비트가 없고 유머러스한 밴드로 유명했습니다.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-green-400">평가 점수</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">★★★★☆</div>
                  <p className="text-gray-300">아름다운 멜로디의 감미로운 음악</p>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">음악적 특징</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">사운드 특징</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <span className="font-semibold">비틀즈 스타일:</span> 비틀즈풍의 음악이지만 더 감미롭고 아름다움</li>
                  <li>• <span className="font-semibold">90년대 같은 음질:</span> 70년대 음악임에도 90년대 앨범 같은 느낌</li>
                  <li>• <span className="font-semibold">실험적 요소:</span> 긴 곡에서 flute, violin이 즉흥적으로 연주</li>
                  <li>• <span className="font-semibold">유머러스함:</span> 재미있는 가사와 유머러스한 접근</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">추천 대상</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>• <span className="font-semibold">비틀즈보다 Caravan을 좋아하는 분</span></p>
                  <p>• <span className="font-semibold">아기자기한 음악을 좋아하는 분</span></p>
                  <p>• <span className="font-semibold">비틀즈 풍의 음악을 좋아하는 분</span></p>
                  <p>• <span className="font-semibold">코코아와 케이크와 함께 듣기 좋은 음악</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Track */}
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">하이라이트 트랙</h2>
            <div className="bg-black bg-opacity-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">Syracuse the Elephant</h3>
              <p className="text-gray-200 mb-2">
                <span className="font-semibold">약간 슬프고 처량한 느낌</span>의 노래로 가장 먼저 귀에 쏙 들어오는 곡
              </p>
              <div className="bg-gray-900 rounded-lg p-3 mt-3">
                <h4 className="text-sm font-semibold mb-2 text-green-400">곡 내용</h4>
                <p className="text-sm text-gray-300 mb-2">
                  Syracuse(뉴욕 근방의 도시)라는 이름의 코끼리가 Bristol 동물원에서 태어나 
                  Circus Show를 위해 길들여졌지만 너무 외로워서 집에 가고 싶어하는 이야기
                </p>
                <p className="text-sm text-cyan-400 italic">
                  "Leave me alone, I want go home, Don't take my herbs away"
                </p>
              </div>
            </div>
          </div>

          {/* Band Members' Comments */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">멤버들의 흥미로운 인터뷰</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">왜 많이 팔리지 않았을까?</h3>
                <blockquote className="text-gray-300 italic border-l-4 border-green-400 pl-4">
                  "내가 생각하기엔 왜 우리 앨범이 Bowies, Black Sabbaths, Supertramps가 거뒀던 것처럼 많이 팔리지 않았는지, 
                  그 이유 중 하나는 우리들의 모습이 바보 얼간이 같았다는 거였을 거예요. 
                  우리는 그 당시 fashionable한 것과는 거리가 멀었어요. 
                  stack-heeled 부츠 대신 샌들과 슬리퍼를 신고 다녔죠."
                </blockquote>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">음악적 관심사</h3>
                <blockquote className="text-gray-300 italic border-l-4 border-blue-400 pl-4">
                  "우리는 제3의 성(gender)을 가진 방랑하는 상상 속의 우주인에 관한 걸 쓰기보다는 
                  소(cow)나 심리분석에 관한 민요에 더 관심이 많았어요. 
                  우리는 파티와 즉흥모임, 그리고 4번 채널 라디오를 들으면서 퀴즈 푸는 데 관심이 많았죠."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Bristol vs Memphis */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Bristol vs Memphis</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-cyan-400">"Rock and Roll it ain't. But then Stackridge came from Bristol, not Memphis"</span>
              </p>
              <p className="text-sm text-gray-400">
                Memphis보다 Bristol이 훨씬 컨트리적이라는 상상을 해봅니다. 
                이들의 음악이 전형적인 로큰롤과는 다른 독특한 색깔을 가지고 있음을 보여주는 말입니다.
              </p>
            </div>
          </div>

          {/* Detailed Reviews */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">상세 리뷰</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">첫 번째 리뷰어 (최정욱)</h3>
                <p className="text-gray-300 mb-4">
                  "몇 년 전에 찍어낸 것이라고 생각되는데요. 화려한 음악들로 귀가 피곤할 무렵, 
                  코코아와 케이크 한 조각과 함께 듣는다면 어울리리라고 봅니다. 
                  아기자기하거나, 비틀즈 풍의 음악을 좋아하시는 분들이라면 무난할 것 같습니다."
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">두 번째 리뷰어 (롱달)</h3>
                <p className="text-gray-300 mb-4">
                  "70년도에 활동한 밴드인데도 들어보면 90년도 발매한 앨범과 같은 느낌이에요. 음질도 좋고요. 
                  말씀하신 대로 비틀즈풍의 음악인데 비틀즈보다 더 감미롭고, 아름답고, 즐겁게 듣고 있습니다. 
                  비틀즈보다는 Caravan을 좋아하시는 분이면 아마도 분명히 좋아하실 것 같은 앨범이네요."
                </p>
              </div>
            </div>
          </div>

          {/* Discography Note */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">음반 정보</h2>
            <div className="space-y-3 text-gray-300">
              <p>이 앨범 외에도 꽤 많은 앨범을 발표했습니다.</p>
              <p>속지에서는 이 앨범(Friendliness)이 가장 대표적이라고 말하고 있습니다.</p>
              <p>96년 Demon Records에서 찍어낸 CD는 72년 MCA Records 라이센스를 바탕으로 합니다.</p>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">최종 평가</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 mb-4">
                Stackridge는 70년대 영국 서부 Bristol 출신의 독특한 밴드로, 
                비틀즈풍의 음악을 기반으로 하면서도 더욱 감미롭고 아름다운 멜로디를 선보입니다. 
                유머러스한 가사와 실험적인 요소가 어우러진 이들의 음악은 당시 유행과는 거리가 멀었지만, 
                그만큼 독창적이고 매력적인 사운드를 만들어냈습니다.
              </p>
              <p className="text-gray-200">
                특히 "Syracuse the Elephant"같은 곡에서 보여주는 스토리텔링과 감성적인 멜로디는 
                <span className="font-semibold text-green-400"> 조용한 시간에 코코아 한 잔과 함께 듣기 좋은 음악</span>으로, 
                비틀즈보다는 Caravan을 좋아하는 분들에게 특히 추천할 만합니다.
              </p>
            </div>
          </div>

          {/* Review Credits */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-400">리뷰 크레딧</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">리뷰어:</span> 최정욱, 롱달 (shjeon@rtcl.kaist.ac.kr)</p>
              <p><span className="font-semibold">특징:</span> 영국 서부 Bristol의 유머러스한 밴드</p>
              <p><span className="font-semibold">추천 대상:</span> 비틀즈, Caravan 애호가</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <a 
              href="/review/s/stone-angel" 
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ← Stone Angel
            </a>
            <a 
              href="/review/s" 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S 목록으로
            </a>
            <a 
              href="/review/s/stalteri" 
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Stalteri →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 