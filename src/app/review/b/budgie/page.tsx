"use client";
import Link from "next/link";

export default function BudgieReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Budgie</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Wales, UK</p>
              <p><strong>장르:</strong> Hard Rock, Heavy Metal</p>
              <p><strong>활동 시기:</strong> 1967-1988</p>
              <p><strong>데뷔:</strong> 1971년 (MCA 레코드)</p>
            </div>
            <div>
              <p><strong>밴드명 의미:</strong> 오스트리아산 화려한 색의 앵무새</p>
              <p><strong>특징:</strong> 독특한 곡 제목, 강력한 하드록 사운드</p>
              <p><strong>영향:</strong> Metallica 등 후배 밴드들에게 영향</p>
            </div>
          </div>
        </div>

        {/* 오리지널 멤버 구성 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">오리지널 멤버 구성 (1968-1973)</h2>
          <div className="bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div>
                <p>• <strong>Burke Shelley</strong></p>
                <p className="text-xs text-gray-600">Bass, Vocal</p>
              </div>
              <div>
                <p>• <strong>Tony Bourge</strong></p>
                <p className="text-xs text-gray-600">Lead & Acoustic Guitar</p>
              </div>
              <div>
                <p>• <strong>Ray Phillips</strong></p>
                <p className="text-xs text-gray-600">Drum</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">* 4집부터 드러머 교체: Pete Boot (4집) → Steve Williams (5집)</p>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">Budgie (이훈구)</h3>
            <p className="text-sm text-gray-600 mb-4">hglee@fdcl.kaist.ac.kr</p>
            
            <div className="space-y-6 leading-relaxed">
              {/* 밴드 소개 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">밴드 역사와 시대적 배경</h4>
                <div className="space-y-3">
                  <p className="text-sm">
                    <strong>Budgie</strong>를 사전에서 찾아보면 오스트리아원산인 화려한 색의 앵무새란 뜻으로 
                    영국의 가정집에서 새장에서 즐겨 키우는 새입니다. 다른말로 <strong>Budgerigar</strong>라고도 합니다.
                  </p>
                  
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">
                      그들은 영국의 <strong>MCA 레코드</strong>에서 단 4일만에 그들의 대망의 데뷔앨범을 발표하게 됩니다. 
                      그것이 <strong>1971년</strong>의 일이었습니다. 당시의 음악적 분위기는 비틀스가 위태하고 
                      새로이 <strong>Deep Purple, Led Zeppelin, Black Sabbath</strong> 같은 다양한 성향의 락 그룹들이 
                      새로운 시대를 열어가는 그런 시대였습니다.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                    <p className="text-sm">
                      요즈음 우리가 찾느라고 혈안이 되어있는 소위 말하는 <strong>명반들이 다 그때 나온 것</strong>이죠. 
                      아뭏든 버찌는 데뷔앨범에서부터 그들만의 독특한 음악적 성향을 보여주며 
                      <strong>매년 한개씩 75년까지 5장의 앨범</strong>을 쏟아내었습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 1집 - Budgie (1971) */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">1집: Budgie (1971) - 데뷔 앨범</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">A면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. Guts</li>
                        <li>2. <strong>Everything In My Heart</strong> ⭐</li>
                        <li>3. The Author</li>
                        <li>4. Nude Disintegrating Parachutist Woman</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">B면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. Rape Of The Locks</li>
                        <li>2. <strong>All Night Patrol</strong> ⭐ (최고곡)</li>
                        <li>3. <strong>You And I</strong> ⭐</li>
                        <li>4. Homicidal Suicidal</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-purple-50 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">리뷰 하이라이트</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>All Night Patrol:</strong> 개인적으로 가장 돋보이는 곡. 
                        요즘 이들의 일집을 녹음해서 듣고 있는데 이 곡의 멜로디가 입안에서 맴돌 정도입니다.
                      </p>
                      <p>
                        <strong>Everything In My Heart & You And I:</strong> 1분 내외의 아주 짧은 곡이지만 
                        다른 락그룹의 발라드송에서 들을수 없는 새로운 맛을 보여줍니다. 
                        특히 Everything In My Heart는 "Yeah~~~ You are Everything... In My Heart.." 
                        이 구절만 반복되면서 가슴 깊숙히 파고드는 아주 아름다운 곡입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2집 - Squawk (1972) */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">2집: Squawk (1972)</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">A면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. Whisky River</li>
                        <li>2. <strong>Rocking Man</strong> ⭐</li>
                        <li>3. Rolling Home Again</li>
                        <li>4. Make Me Happy</li>
                        <li>5. Hot As A Docker's Armpit</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">B면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. <strong>Drugstore Woman</strong> ⭐</li>
                        <li>2. <strong>Bottled</strong> ⭐ (접속곡)</li>
                        <li>3. Young is A World</li>
                        <li>4. Stranded</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-orange-50 rounded border">
                    <p className="text-sm">
                      2집에는 그다지 두드러진 곡은 없고 일집의 분위기가 그대로 이어지는듯 합니다. 
                      여기서 돋보이는 곡으로는 <strong>Rocking Man</strong>과 <strong>Drugstore Woman/Bottled</strong> 
                      (두곡이 접속곡의 형식을 띠고 있습니다)입니다. 
                      또한 특이한 것이 이 앨범과 3집 앨범의 커버 디자인을 <strong>Roger Dean</strong>이 맡고 있다는 것입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3집 - Never Turn Your Back On A Friend (1973) */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">3집: Never Turn Your Back On A Friend (1973) - 최고 명반</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">A면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. <strong>Breadfan</strong> 🏆 (대표곡)</li>
                        <li>2. Baby Please Don't Go</li>
                        <li>3. You Know I'll Always Love You</li>
                        <li>4. <strong>You Are The Biggest Thing Since Powdered Milk</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">B면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. <strong>In The Grip Of A Tyrefitter's Hand</strong></li>
                        <li>2. Riding My Nightmare</li>
                        <li>3. <strong>Parents</strong> 🏆 (최고의 명곡)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-red-50 rounded border border-l-4 border-red-400">
                    <h5 className="font-bold text-red-700 mb-2">최고 명반 평가</h5>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>이 앨범은 두말할 필요없는 버찌의 최고 명반입니다.</strong> 
                        커버도 아주 멋있고 들어있는 곡들 또한 하나도 남김없이 모두 훌륭한 명곡들입니다.
                      </p>
                      
                      <div className="bg-white p-3 rounded border">
                        <h6 className="font-bold text-red-700 mb-1">Parents (최고의 명곡)</h6>
                        <p className="text-xs">
                          그들 최고의 명곡이라고 뽑을수 있을 것입니다. 특히 중반부부터 나타나는 
                          <strong>Bourge의 기타소리</strong>가 마치 부모를 그리며 기다리는 새의 처절한 울음소리를 연상시킵니다. 
                          이 소리를 들으면 온몸이 부서지는 느낌과 희열로 가득찹니다. 그리고 담담한 셜리의 보컬....
                        </p>
                      </div>
                      
                      <p>
                        <strong>Breadfan</strong>은 설명이 필요없고, <strong>Baby Please Don't Go</strong>나 
                        <strong>You Are The Biggest Thing Since Powdered Milk</strong>, 
                        <strong>In The Grip Of A Tyrefitter's Hand</strong> 등의 곡들은 
                        이후로 나타나는 그들의 긴이름의 전형적인 형태의 곡들이며 그중에서도 또한 뛰어난 곡들입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4집 - In For The Kill (1974) */}
              <div className="bg-indigo-50 p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-3">4집: In For The Kill (1974) - 블루스 지향</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">A면 (명곡 집결)</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. In For The Kill</li>
                        <li>2. <strong>Crash Course In Brain Surgery</strong> 🏆</li>
                        <li>3. Wondering What Everyone Knows</li>
                        <li>4. <strong>Zoom Club</strong> ⭐</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">B면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. Hammer And Tongs</li>
                        <li>2. Running From My Soul</li>
                        <li>3. Living On Your Own</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-indigo-50 rounded border">
                    <h5 className="font-bold text-indigo-700 mb-2">특징 및 영향</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        삼집에서부터 두드러지기 시작하는 <strong>불지의 기타가 리드하는</strong> 그들의 또하나의 명반입니다. 
                        특히 A면에 수록된 그들의 4곡은 그 짜임새나 연주 그리고 보컬에 이르기까지 명곡의 대열에 올려놓기 손색이 없습니다.
                      </p>
                      
                      <div className="bg-white p-2 rounded border border-l-4 border-green-400">
                        <p className="text-xs">
                          <strong>Crash Course In Brain Surgery:</strong> 아주 짧지만 각 파트의 현란하고 짜임새 있는 연주와 
                          그 구성때문에 어떤이들부터 그들의 최고 곡으로 꼽히기도 합니다. 
                          특히 <strong>Metallica가 이 곡의 스타일에서 많은 영향을 받았다</strong>고 합니다.
                        </p>
                      </div>
                      
                      <p>
                        <strong>Zoom Club</strong>도 대곡 지향의 아주 좋은 곡입니다. 
                        이 앨범의 분위기는 전체적으로 매우 <strong>블루스 지향적</strong>이라고 말할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5집 - Bandolier (1975) */}
              <div className="bg-teal-50 p-4 rounded border border-teal-200">
                <h4 className="font-bold text-teal-800 mb-3">5집: Bandolier (1975) - 두 번째 명반</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">A면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. <strong>Breaking All The House Rules And Learning All The House Rules</strong></li>
                        <li>2. Slipaway/A Parrot Fashion Ball</li>
                        <li>3. Who Do You Want For Your Love/Never Turn Your Back On A Friend</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">B면</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. <strong>I Can't See My Feelings</strong>/Rock Climbing ⭐</li>
                        <li>2. I Ain't No Mountain (실망)</li>
                        <li>3. <strong>Napoleon Bona Part One</strong> 🏆</li>
                        <li>4. <strong>Napoleon Bona Part Two</strong> 🏆</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-teal-50 rounded border">
                    <h5 className="font-bold text-teal-700 mb-2">명곡과 아쉬움</h5>
                    <div className="space-y-3 text-sm">
                      <div className="bg-white p-3 rounded border border-l-4 border-green-400">
                        <h6 className="font-bold text-green-700 mb-1">Napoleon Bona Part 1,2 (최고의 곡)</h6>
                        <p className="text-xs">
                          <strong>Parents, Crash Course In Brain Surgery</strong>와 함께 그들의 최고의 곡으로 꼽힙니다. 
                          이 곡은 버찌의 여타 다른 곡들보다 가장 뛰어난 구성력을 보여주고 특히 기타의 리프 전개가 
                          마치 전쟁터에서 적군을 향해 힘차게 달려나가는 <strong>말발굽의 소리</strong>를 연상시킵니다. 
                          특히 도입부의 애절한 보컬은 Parents의 감동과 비슷한 감동을 줍니다.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border border-l-4 border-blue-400">
                        <h6 className="font-bold text-blue-700 mb-1">I Can't See My Feelings (개인적 애호곡)</h6>
                        <p className="text-xs">
                          전형적인 그들의 곡이지만 전 다른 곡들에 비해 한층 정이가고 아주 즐겨 듣는 곡입니다. 
                          개인적인 견해로는 <strong>In For The Kill이나 Who Do You Want For Your Love보다 더 뛰어난 작품</strong>이라고 생각됩니다.
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded border border-l-4 border-red-400">
                        <h6 className="font-bold text-red-700 mb-1">I Ain't No Mountain (실망스러운 변화)</h6>
                        <p className="text-xs">
                          실망스러운 것은 이 곡이 그들의 곡답지 않게 너무 심플한 락사운드로 변모하고 말았다는 것입니다. 
                          아마도 이후로 나타나는 그들의 앨범 성향을 일부나마 여기서 엿볼수 있을것 같습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 후기 앨범들 */}
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">후기 앨범들 (1976-1988)</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-gray-700 mb-2">Impeckable (1978) - 7집</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        RCA 시절 다섯매의 Hard Rock의 걸작을 발매한 Budgie의 7번째 앨범입니다. 
                        이들이 RCA를 떠나 <strong>A&M으로 이적</strong>한 후 발표한 두번째 앨범이고, 
                        <strong>If I Were Britannia I'd Waive The Rules</strong>란 제목으로 발표한 앨범 이후 2년의 공백이후 만든 앨범입니다.
                      </p>
                      
                      <div className="bg-green-50 p-3 rounded border border-green-200">
                        <p className="text-xs">
                          <strong>2년의 공백 후 발표한 이들의 7집 Impeckable은 감히 이전의 그들의 명작의 대열에 올려놓아도 손색이 없을 정도의 훌륭한 판입니다.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded border border-red-200">
                        <p className="text-xs">
                          물론 이 앨범 이후의 <strong>Power Supply</strong>부터는 당시 불어닥친 <strong>NWOBHM</strong>적인 냄새가 너무 강하게 나는 
                          그저 그런 락밴드 - NWOBHM의 잘나가는 밴드들보다도 한참 떨어지는 - 에 불과하지만 말입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-right italic text-gray-600">
                Budgie (이훈구)
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 