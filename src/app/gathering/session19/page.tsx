import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제19회 YBD IQ & Neo Progressive 특집 - 1999년 5월 22일 | Yebadong',
  description: '예바동 제19회 IQ & Neo Progressive 특집 (1999년 5월 22일, 홍대앞 라이브클럽)',
};

export default function Session19Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            제19회 YBD Special Show of ProgRock Music
          </h1>
          <h2 className="text-2xl text-yellow-400 mb-2">IQ & Neo Progressive 특집</h2>
          <p className="text-lg text-cyan-300">1999년 5월 22일 (토) 홍대앞 라이브클럽</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8">
            
            {/* Philosophical Introduction by brave */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg border border-cyan-500">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                🎼 brave의 네오 프로그레시브 철학
              </h2>
              <div className="space-y-4 text-cyan-100 leading-relaxed">
                <p className="text-sm">
                  사실 네오 프로그라는 장르를 여타 프로그 장르와 명확히 구분짓기는 힘들다고 생각합니다.
                </p>
                <p className="text-sm">
                  80년대 프로그 메인 스트림에서의 슈퍼밴드들의 소위 변절이라고 일컬어지는 그 이후, 특별히 
                  초기 Genesis의 영향을 많이 받은 팀들 Twelfth Night, Marillion, IQ 및 몇몇 
                  뉴 프론티어의 등장으로 프로그 팬들의 갈증을 해소 시켜줬다는 의미에서 'NEO'라는 
                  수식어가 붙여졌음을 상기해 볼 때, 지금의 'fancy', 'refine', 'commercial', 
                  'pop-rock'이라는 단어들로 폄하되는 '네오 프로그'라고 하는 의미는 좀 변절된 
                  것이 아닌가 하는 생각입니다...
                </p>
                <p className="text-sm">
                  현재 평행된 타입들도 많은 네오 프로그라고 불리우는 그룹들이 있지만 말보다는 
                  청중의 선택과 판단에 맡기고 그들만의 음악 한 편을 반박하고 또한 지지하는 
                  음성들도 있다고 보와요..
                </p>
                <p className="text-sm">
                  따라서 지금의 이런 세밀한 ,특히 프로그 장르에서, 온갖가지 카타고리식의 분류방법에 대한 
                  나의 개인적 견해는 하나의 물결이고, 시간의 흐름의 의미에서의 네오 프로그 
                  장르라고 생각한다는 의견입니다.
                </p>
                <div className="text-right mt-4">
                  <p className="text-cyan-400 font-bold">b r a v e</p>
                  <p className="text-xs text-cyan-300">1999년 5월 22일 제19회 감상회 (홍대앞 라이브)</p>
                </div>
              </div>
            </div>

            {/* Track Listing */}
            <div className="space-y-12">
              
              {/* Track 1: Martin Darvill and Friends */}
              <div className="border border-yellow-400 rounded-lg p-6 bg-yellow-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  #1. Greatest Show/Sodium City/Circus in the sky (10min)
                </h3>
                <h4 className="text-lg text-white mb-4">Martin Darvill and Friends</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-yellow-200 mb-2">The Greatest Show on Earth</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-yellow-400 rounded flex items-center justify-center">
                      <span className="text-xs text-yellow-300">martin.jpg</span>
                    </div>
                    <p className="text-sm text-yellow-200 mt-2">1998</p>
                    <p className="text-xs text-yellow-100 mt-2">
                      MOON, John Wetton, Al Stewart, Nick Barrett, Don Airey, 
                      Martin Orford, John Jowitt, Clive Nolan, Mick Pointer, Karl Groom...more
                    </p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-yellow-100">
                    <p>
                      Martin Darvill은 한 프로듀서분의 네오 프로그 그룹 'Moon'의 키타리스트입니다.
                    </p>
                    <p>
                      이 16트랙 중 한 곡을 틀어드릴 타이틀 트랙은 Iq의 Martin Orford와 키보디스트로 
                      공존하는 Threshold의 일원이 있는 네오 프로그와 그룹 키보디스트 Karl Groom과 함께 있습니다...
                    </p>
                    <p>
                      또한 시스터 프로듀서라는지 많은 아티스트 개성 없이 같은 경우가 많은 네오에서, 
                      그럼에도 이번만은 괜찮은 것을 하나네요.
                    </p>
                    <p>
                      의외로 70년대 초반기도 빼닮은 풍부한 멜로디를 한 곡으로 멋있는 연주를 들려줍니다.
                    </p>
                    <p>
                      게스트로 참여한 Ian Moon의 환상적인 보컬 화성설로는 Don Airey, 기타로는 Nick Barrett가 
                      함께하고 있습니다
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 2: IQ */}
              <div className="border border-cyan-400 rounded-lg p-6 bg-cyan-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-cyan-300 mb-4">
                  #2. Enemy Smacks - LIVE (15min)
                </h3>
                <h4 className="text-lg text-yellow-200 mb-4">I Q</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-cyan-200 mb-2">FOREVER LIVE</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-cyan-400 rounded flex items-center justify-center">
                      <span className="text-xs text-cyan-300">iq.jpg</span>
                    </div>
                    <p className="text-sm text-cyan-200 mt-2">1996</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-cyan-100">
                    <p>
                      Iq의 Subterranea시리즈앨범을 감안하는 프로듀서의 Iq의 프로듀서 중에서 최소한 작품, 
                      최고의 작품, 최상의 라이브 
                    </p>
                    <p>
                      편집판에서 손꼽히는 라이브 앨범입니다.
                    </p>
                    <p>
                      20분이면 '90년대 프로그 발전을 이루었다면' 하고 말해질 수 있는 90년대 최고의 프로그 
                      라이브 중 하나 하겠어요 말이에요..
                    </p>
                    <p>
                      멋진 사운드로 보컬 방식까지는 분리되어 CD로만 따로 만들어 졌습니다..
                    </p>
                    <p>
                      Iq 팬들의 항상 best favourite song 1,2위로 랭크되는 '명작 당작'을 들려줍니다. 
                      라이브의 음이라고도 하니 
                    </p>
                    <p>
                      하고...최근나 공연이나 세투가 프로듀서를 훨씬 능가와요.
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 3: Pendragon */}
              <div className="border border-green-400 rounded-lg p-6 bg-green-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-green-300 mb-4">
                  #3. The Breaking the Spell - LIVE (8min)
                </h3>
                <h4 className="text-lg text-white mb-4">PENDRAGON</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-green-200 mb-2">Utrecht...The Final Frontier</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-green-400 rounded flex items-center justify-center">
                      <span className="text-xs text-green-300">pendragon.gif</span>
                    </div>
                    <p className="text-sm text-green-200 mt-2">1995</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-green-100">
                    <p>
                      Pendragon은 Marillion이나 Iq에서 자주찾기 어려운 강한 보컬 
                      구성의 라이브트(like Fish and Peter Nicholls)를 
                      음성가가 큰 단점에서 않았나 싶어....
                    </p>
                    <p>
                      하지만 Nick Barrett 혼자 연(키보)치고 기흉(기타)치어 
                      하는 라이브들이 훨씬 그랜드 melodic maker를 
                      만들어 틀림이 없습니다...
                    </p>
                    <p>
                      이번에 들을 Pendragon의 Trilogy 앨범의 2번째인 'The Windows of Life'를 
                      들려고 있어요..
                    </p>
                    <p>
                      Nick의 천청한 기타 로리 플레이로 깔끔한 연주 있습니다
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 4: Marillion */}
              <div className="border border-purple-400 rounded-lg p-6 bg-purple-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-purple-300 mb-4">
                  #4. This Strange Engine - LIVE (19min)
                  <span className="text-sm italic ml-2">including Pete's bass solo</span>
                </h3>
                <h4 className="text-lg text-white mb-4">MARILLION</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-purple-200 mb-2">Piston Broke</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-purple-400 rounded flex items-center justify-center">
                      <span className="text-xs text-purple-300">mar.jpg</span>
                    </div>
                    <p className="text-sm text-purple-200 mt-2">1998</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-purple-100">
                    <p>97년도의 Marillion이라..</p>
                    <p>'This Strange Engine'앨범에서 한 곡을 들려드립니다.</p>
                    <p>
                      여기에 Iq, The Flower Kings 등등 최신출간 곡명, 
                    </p>
                    <p>
                      마지막 때의 'Citizen Cane'에서 나온 앨범 맞다고 
                    </p>
                    <p>
                      하고 느낀 때, '정말 더 좋 넘었어' 이렇게 할.....
                    </p>
                    <p>
                      마침내 이 앨범의 라이브의 한 타이틀 트랙은 이 그룹의 Marillion에서 프로그에서 이루어진 발전의 
                      성취고 하는데에서 많은 변화를 알려줍니다....
                    </p>
                    <p>
                      Marillion 특유의 감성 넘는 펑의 제조으고 안한데서 Steve Hogarth의 영감적인 보컬이 어우러져 
                    </p>
                    <p>
                      또는이나 쉬는트들 멋진 첨부를 안된 
                    </p>
                    <p>
                      마지막 곡들 그대로 들려주겠습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 5: Tempus Fugit */}
              <div className="border border-orange-400 rounded-lg p-6 bg-orange-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-orange-300 mb-4">
                  #5. The City and The Crystal (7 min)
                </h3>
                <h4 className="text-lg text-white mb-4">TEMPUS FUGIT</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-orange-200 mb-2">The Tales from Forgotten World</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-orange-400 rounded flex items-center justify-center">
                      <span className="text-xs text-orange-300">Tempus.jpg</span>
                    </div>
                    <p className="text-sm text-orange-200 mt-2">1997</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-orange-100">
                    <p>
                      이미는 한번 소개을 음반을 먹혔던 것에 어웠는데, 일부가 원하신 것 같아 들려줍니다....
                    </p>
                    <p>
                      독일이라고 어떤 아이템이비야는 못 포르튜, 훨씬 탄탄한 네오의 곡들을 네오 프로그 기타라이에요...
                    </p>
                    <p>
                      아마도 어떤분들은 어둠가에 그것에 대한 어떤의 논의 및 것 원....및 동감이고...
                    </p>
                    <p>
                      키보드와 기타의 안내라고 나누어 들린다는 것 부터는, 돋보인다는 이야기입니다.
                    </p>
                    <p>
                      주메뉴 잘못 정보 중간앨범입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 6: Mr.So&So */}
              <div className="border border-red-400 rounded-lg p-6 bg-red-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-red-300 mb-4">
                  #6. Closet Skelectons (10 min)
                </h3>
                <h4 className="text-lg text-white mb-4">MR.SO&SO</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-red-200 mb-2">Compendium</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-red-400 rounded flex items-center justify-center">
                      <span className="text-xs text-red-300">mr.jpg</span>
                    </div>
                    <p className="text-sm text-red-200 mt-2">1994</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-red-100">
                    <p>
                      소개를 보빈을 첨 받으면서 '잘 좀 쇼다'는 음성이어왔는데...
                    </p>
                    <p>
                      Mr So&So가 어디서나 못 안다는 것인 U.K guy의 어떤도 Mr.So&So 니에서 
                      자신들의 스탈일을 'modern prog'라고 불린다고 하는데있....
                    </p>
                    <p>
                      5집까지 발표되었고, Yes와 Marillion의 일부의 영향해진 것을 잘아도 볼 그릴어, 
                    </p>
                    <p>
                      어둔 젠틸 음악이라고 쿨라밈를 그냥에 가민한 적이 'Cool'하고 'fresh'한 음악입니다....
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 7: Porcupine Tree */}
              <div className="border border-pink-400 rounded-lg p-6 bg-pink-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-pink-300 mb-4">
                  #7. The Smart kids/Tinto Brass (10 min)
                </h3>
                <h4 className="text-lg text-white mb-4">PORCUPINE TREE</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-pink-200 mb-2">Stupid Dreams</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-pink-400 rounded flex items-center justify-center">
                      <span className="text-xs text-pink-300">tree.jpg</span>
                    </div>
                    <p className="text-sm text-pink-200 mt-2">1999</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-pink-100">
                    <p>아마도 Steve Wilson은</p>
                    <p>
                      TFK의 Roine Stolt와 함께 좀더 유럽인심이나 프로그에서 계승되거나 아럽들에서 사랑받으면서 
                    </p>
                    <p>
                      현재 가수한 활동을 하는 뮤지션이 아닌가 있습니다.
                    </p>
                    <p>
                      'Signify'의 라이브앨범 'Coma Divine'에서 보여주었다는 것과 Straight forward한 접촐의 장르를 
                      있는 것과 잘아도 볼 그릴어, 특별히 더 간략한 것은 않고 있었...
                    </p>
                    <p>
                      Porcupine Tree의 올해의 'A Smart Kids'은 Ozric Tentacles와 비교돌 수 있다고해 보겠고 'Tinto 
                      Brass'는 동화작입니다. 완전 Ozric~같다는 걸 좋은워에
                    </p>
                  </div>
                </div>
              </div>

              {/* Track 8: Peter Gee */}
              <div className="border border-indigo-400 rounded-lg p-6 bg-indigo-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-indigo-300 mb-4">
                  #8. Always (10 min)
                </h3>
                <h4 className="text-lg text-white mb-4">PETER GEE</h4>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h5 className="font-bold text-indigo-200 mb-2">A Vision of Angels</h5>
                    <div className="w-32 h-32 mx-auto bg-gray-800 border border-indigo-400 rounded flex items-center justify-center">
                      <span className="text-xs text-indigo-300">gee.gif</span>
                    </div>
                    <p className="text-sm text-indigo-200 mt-2">1997</p>
                  </div>
                  
                  <div className="md:col-span-2 space-y-3 text-sm text-indigo-100">
                    <p>
                      Peter Gee(Pendragon의 Bassist)의 두 번째 소로앨범에서 나온 'Neo-prog의 알갱이만은'의 
                      스켐을 잘러한 음상입니다.
                    </p>
                    <p>
                      Nick Barrett의 카리스마와 좀더 한 번의 Clive Nolan과 Peter Gee만으로 소개한 아우라이데 
                      연쇄들에서 Pendragon 앨범의 하세용심이 계신다고 할 수 있어...
                    </p>
                    <p>
                      이 앨범의 스날은 재료에가 Camel에 가깝고, 컴퓨터의 센공가 포만 프로그-음이라고 할 수 작은 
                      수이는, 이럴수록 설치책은 Pop-Rock에 가까운 것의 설치들과 같았어요
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Attendees */}
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-cyan-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">참석자 명단</h3>
              <div className="text-center text-sm text-cyan-200">
                <p>
                  리더니, 신인철, 이동훈, 이창식과 친구분, 안병욱, 
                  남유빈, 김기태, 그외분들과와 친구분
                </p>
              </div>
            </div>

            {/* The Flower Kings Section */}
            <div className="mt-12 p-6 bg-green-800 bg-opacity-30 rounded-lg border border-green-400">
              <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
                🌸 The Flower Kings - 안병욱 (kikimomo@chollian.net)
              </h3>
              
              <div className="bg-green-900 bg-opacity-50 p-4 rounded">
                <h4 className="font-bold text-green-200 mb-4">Set List</h4>
                <ol className="space-y-2 text-sm text-green-100">
                  <li>1. The Flower Kings 10:28 / The Flower Kings (1994)</li>
                  <li>2. World of Adventures 13:37 / Back In the World of Adventures (1995)</li>
                  <li>3. There is More to This World 10:15 / Retropolis (1996)</li>
                  <li>4. In the Eyes of the World 10:38</li>
                  <li>5. Just This Once 7:53</li>
                  <li>6. The End of Innocence 8:28 / Stardust We Are (1997)</li>
                  <li>7. Deaf, Numb & Blind 11:09</li>
                  <li>8. Garden of Dreams / Flowerpower (1998)</li>
                </ol>
              </div>
            </div>

            {/* Session Analysis */}
            <div className="mt-12 p-6 bg-purple-100 bg-opacity-10 rounded-lg border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎼 Session 19의 음악적 특징</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🌟 네오 프로그레시브의 정의</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 철학적 접근:</strong> brave의 네오 프로그 장르론</li>
                    <li><strong>• 역사적 맥락:</strong> 80년대 슈퍼밴드들의 변절 이후</li>
                    <li><strong>• Genesis 계보:</strong> Twelfth Night, Marillion, IQ</li>
                    <li><strong>• 현대적 재해석:</strong> 'fancy', 'commercial' 극복</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🎵 대표 아티스트들</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• IQ:</strong> "Enemy Smacks" - 90년대 최고 라이브</li>
                    <li><strong>• Marillion:</strong> "This Strange Engine" - 19분 대작</li>
                    <li><strong>• Pendragon:</strong> Nick Barrett의 기타 장인정신</li>
                    <li><strong>• Porcupine Tree:</strong> Steven Wilson의 혁신</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🌍 국제적 스펙트럼</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 영국:</strong> IQ, Marillion, Pendragon</li>
                    <li><strong>• 독일:</strong> Tempus Fugit</li>
                    <li><strong>• 멀티내셔널:</strong> Martin Darvill and Friends</li>
                    <li><strong>• 스웨덴:</strong> The Flower Kings (안병욱 발표)</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🎸 음악적 하이라이트</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 라이브 중심:</strong> 생생한 무대 감각</li>
                    <li><strong>• 장시간 트랙:</strong> 7-19분 대곡들</li>
                    <li><strong>• 멜로딕 진보:</strong> 70년대 계승 + 90년대 혁신</li>
                    <li><strong>• 기술적 완성도:</strong> 연주력과 작곡의 조화</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-cyan-400">16+</div>
                  <div className="text-cyan-300">곡 (TFK 8곡 포함)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-yellow-400">📚</div>
                  <div className="text-yellow-300">네오 프로그 철학</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-400">🎸</div>
                  <div className="text-green-300">라이브 중심</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-400">🌍</div>
                  <div className="text-purple-300">국제적 구성</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-cyan-400 mb-4">
                ✅ 제19회 IQ & Neo Progressive 특집 완전 복원! 
                brave의 네오 프로그 철학과 함께 90년대 네오 프로그의 정수가 되살아났습니다! 🎼🌟📚
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-black border border-cyan-400 text-cyan-400 font-medium rounded-md hover:bg-cyan-900 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session18" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  ← 이전 (18회)
                </Link>
                
                <Link href="/gathering/session20" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  다음 (20회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
