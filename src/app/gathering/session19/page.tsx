import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제19회 YBD IQ & Neo Progressive 특집 - 1999년 5월 22일 | Yebadong',
  description: '예바동 제19회 IQ & Neo Progressive 특집 (1999년 5월 22일, 홍대앞 피플)',
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
          <p className="text-lg text-cyan-300">1999년 5월 22일 (토) 홍대앞 피플</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8">
            
            {/* Philosophical Introduction by brave */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg border border-cyan-500">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                🎼 brave의 네오 프로그레시브 철학
              </h2>
              <div className="space-y-4 text-cyan-100 leading-relaxed text-sm">
                <p>
                  사실 네오 프로그라는 장르를 여타 프로그 장르와 명확히 구분짓기는 힘들다고 생각합니다.
                </p>
                <p>
                  80년대 프로그 메인 스트림에서의 슈퍼밴드들의 소위 변절이라고 일컬어지는 그 이후, 특별히
                  초기 Genesis의 영향을 많이 받은 팀들 Twelfth Night, Marillion, IQ 및 몇몇
                  뉴 프론티어의 등장으로 프로그 팬들의 갈증을 해소 시켜줬다는 의미에서 'NEO'라는
                  수식어가 붙여졌음을 상기해 볼 때, 지금의 'fancy', 'refine', 'commercial',
                  'pop-rock'이라는 단어들로 폄하되는 '네오 프로그'라고 하는 의미는 좀 변절된
                  것이 아닌가 하는 생각입니다..
                </p>
                <p>
                  물론 자의든 타의든 현재 네오 프로그라고 불리우는 밴드들의 사운드가 위에서 언급한 수식어에서
                  벗어나지 못하고 있음을 볼 때, 그런것에 대해 뭐 별로 반박하고 싶은 생각이
                  없는것도 사실이에요..
                </p>
                <p>
                  하지만 음악을 듣는 목적이, 특히 프로그 장르에서, 어느정도의 카타르시스와 오르가즘이 섞인
                  극한의 감동을 얻고자 하는 것이라면, 현재의 변절된 의미에서의 네오 프로그
                  장르에서도 가능하다는 생각입니다.
                </p>
                <p>
                  이번 감상회를 통해 프로그 타장르와 어느정도 균형을 잡을 수 있는 기회가 된다면, 그것만으로도
                  충분하다고 생각되고요, 다만, 제 개인적인 취향에서 선곡했음을 미리 말씀
                  드리며, 나른한 토요일 오후 부담없이 감상하실 수 있는 트랙들입니다
                </p>
                <div className="text-right mt-6">
                  <p className="text-cyan-300 font-bold">b r a v e</p>
                  <p className="text-cyan-300 text-xs">1999년 5월 22일 제19회 감상회 (홍대앞 피플)</p>
                </div>
              </div>
            </div>

            {/* Part 1: brave's Neo Progressive Selection */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-cyan-300 mb-8">
                🎹 Part 1: brave의 Neo Progressive 선곡
              </h2>
              
              <div className="space-y-12">
                
                {/* Track 1 */}
                <div className="border border-blue-400 rounded-lg p-6 bg-blue-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-blue-300 mb-4">
                    #1. Greatest Show/Sodium City/Circus in the sky (10min)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-blue-200 mb-2">The Greatest Show on Earth</h4>
                      <div className="bg-blue-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-blue-100 text-sm">Martin Darvill and Friends</p>
                        <p className="text-blue-100 text-xs">1998</p>
                      </div>
                      <div className="text-xs text-blue-100 space-y-1">
                        <p><strong>참여 아티스트:</strong></p>
                        <p>MOON, John Wetton, Al Stewart, Nick Barrett, Don Airey, Martin Orford, John Jowitt, Clive Nolan, Mick Pointer, Karl Groom...more</p>
                      </div>
                    </div>
                    <div className="text-xs text-blue-100 leading-relaxed space-y-3">
                      <p>
                        Martin Darvill은 이 앨범의 주축인 네오 프로그 팀 'Moon'의 기타리스트입니다.
                      </p>
                      <p>
                        총 16트랙 중 맨 마지막곡 타이틀 트랙은 IQ의 Martin Orford의 프로듀스로 나머지는 Threshold를
                        이끌고 있는 네오 프로그계 명 프로듀서 Karl Groom이 맡고 있습니다...
                      </p>
                      <p>
                        올스타 앨범이라는게 원래 사공들이 많아 기대치 보다 못할 경우가 종종 있지만, 그래도 이름값은
                        톡톡히 해내고 있는 듯 하네요.
                      </p>
                      <p>
                        의외로 70년대 분위기도 많이 풍기고 들을수록 더 땡기는 사운드를 내줍니다.
                      </p>
                      <p>
                        <strong>선정곡 연주진:</strong> 보컬 Ian Moon, 엔딩 건반솔로 Don Airey, 기타솔로 Nick Barrett
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="border border-green-400 rounded-lg p-6 bg-green-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-green-300 mb-4">
                    #2. Enemy Smacks (4:54)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-green-200 mb-2">Living Proof</h4>
                      <div className="bg-green-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-green-100 text-sm">IQ</p>
                        <p className="text-green-100 text-xs">1992</p>
                      </div>
                    </div>
                    <div className="text-xs text-green-100 leading-relaxed space-y-3">
                      <p>
                        IQ의 'Living Proof' 더블 라이브 앨범중 이 곡을 선곡한 이유는 차후 여러분들을 모실
                        IQ 공연을 대비한 것이기도 하지만, 아무래도 제가 가장 선호하는 IQ
                        라이브 앨범입니다.
                      </p>
                      <p>
                        20년뒤쯤 '90년대 네오 프로그 뭐하나' 하는 얘기가 나온다면, '그래도 이 
                        라이브 중 하나 일거라는 생각이에요..
                      </p>
                      <p>
                        얼마전 팬들을 위해 비디오와는 분리되어 CD로만 재발매 되었습니다..
                      </p>
                      <p>
                        IQ 팬에서 항상 최고로 치는 'Tales From The Lush Attic'에 수록된 곡들이 있긴
                        하고...연주나 사운드 모든면에서 완벽한 라이브가 아닌가 싶어요..
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 3 */}
                <div className="border border-purple-400 rounded-lg p-6 bg-purple-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">
                    #3. Breaking the Spell (5:03)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-purple-200 mb-2">Not Exactly Honest</h4>
                      <div className="bg-purple-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-purple-100 text-sm">Pendragon</p>
                        <p className="text-purple-100 text-xs">1993</p>
                      </div>
                    </div>
                    <div className="text-xs text-purple-100 leading-relaxed space-y-3">
                      <p>
                        Pendragon이 네오 프로그계에서 갖는 위치는 확고한 것 같습니다. 특유의 멜로딕한
                        사운드와 그 안의 애잔함..IQ나 Marillion보다도 더 대중적인 어필을 갖는듯 
                        싶어요....
                      </p>
                      <p>
                        역시나 Nick Barrett의 멜로딕한 기타와 Clive Nolan의 클래시컬한 건반,
                        Peter Gee의 베이스가 만들어내는 조화는 그냥 간과하기 힘든 무언가가 있다는게 
                        틀림없습니다...
                      </p>
                      <p>
                        들으실 곡은 Pendragon의 93년 앨범 'Not Exactly Honest'에 수록된 곡으로 Pendragon
                        팬들이 가장 선호하는 5곡중 하나이고, 제가 가장 좋아하는 Pendragon곡 중 하나
                        이에요..
                      </p>
                      <p>
                        Nick의 서정적인 기타 솔로와 멜로디는 가히 환상적이라고 할 수 있어요...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 4 */}
                <div className="border border-orange-400 rounded-lg p-6 bg-orange-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-orange-300 mb-4">
                    #4. This Strange Engine (Live) (16:34)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-orange-200 mb-2">This Strange Engine</h4>
                      <div className="bg-orange-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-orange-100 text-sm">Marillion</p>
                        <p className="text-orange-100 text-xs">1997</p>
                      </div>
                    </div>
                    <div className="text-xs text-orange-100 leading-relaxed space-y-3">
                      <p>
                        97년도의 Marillion이라..
                      </p>
                      <p>
                        'This Strange Engine'앨범내고 욕 많이 먹었습니다.
                      </p>
                      <p>
                        동년에 IQ, The Watch등이 괜찮은 앨범을 냈고, Threshold등은 드디어 완성도있는
                        앨범을 낸 반면, 저희들의 '감성파 원로' Marillion은 좀더 일반인들도 좋아할만한
                        같잖은 밴드 'Citizen Caned'등의 어설픈 모던함에서 헤어나지 못하고 쩔쩔매고
                        있었으니까...그런 만큼 팬들의 비판도 거셌죠.. Pallas팬들이 'Sentinel'에 대해
                        방방 뜰 때, '드디어 마릴룐 맞 간 마릴룐' 이라는 등.....
                      </p>
                      <p>
                        하지만 이 앨범의 타이틀 트랙은 Marillion 특유의 대곡에 대한 갈증을
                        왜 스튜디오 버전으로는 해소 못하게 하는지에 대한 이유를 알려줍니다....
                      </p>
                      <p>
                        Marillion 특유의 그 특유의 라이브에서의 감동은 여전히 살아있습니다.
                        믹싱이나 이펙트가 별로 좋지 못한 97년 런던 공연 실황이지만 
                        생생한 원음 그대로 들려주는 것만으로도....
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 5 */}
                <div className="border border-red-400 rounded-lg p-6 bg-red-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-red-300 mb-4">
                    #5. The City and the Crystal (13:29)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-red-200 mb-2">Tempus Fugit</h4>
                      <div className="bg-red-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-red-100 text-sm">Tempus Fugit</p>
                        <p className="text-red-100 text-xs">1997</p>
                      </div>
                    </div>
                    <div className="text-xs text-red-100 leading-relaxed space-y-3">
                      <p>
                        예전에 한번 이들의 리뷰를 포스팅 한적이 있었는데, 사운드가 궁금하실 것 같아 골랐습니다....
                      </p>
                      <p>
                        브라질이라는 나라의 이미지와는 좀 다른, 매우 섬세한 심포닉 지향의 네오 프로그 스타일이에요...
                      </p>
                      <p>
                        아마도 동빈님들의 평균적인 취향에 가장 근접한 듯한 사운드 일 듯....한 생각이고요..
                      </p>
                      <p>
                        키보드와 보컬이 겸임이라 보컬이 약하다는 평도 있지만, 괜찮다는 생각입니다.
                      </p>
                      <p>
                        주목할 만한 점은 이들이 신디사이저 대신 거의 피아노나 오르간을 주로 사용한다는 점이에요.
                        그런만큼 사운드가 자연스럽고 아날로그틱합니다...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 6 */}
                <div className="border border-indigo-400 rounded-lg p-6 bg-indigo-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-indigo-300 mb-4">
                    #6. Closet Land (9:42)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-indigo-200 mb-2">Mr So&So</h4>
                      <div className="bg-indigo-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-indigo-100 text-sm">Mr So&So</p>
                        <p className="text-indigo-100 text-xs">1994</p>
                      </div>
                    </div>
                    <div className="text-xs text-indigo-100 leading-relaxed space-y-3">
                      <p>
                        이들의 음악을 첨 들으면서 '야 참 모던하다'라는 느낌이었는데...
                      </p>
                      <p>
                        Mr So&So의 웹 페이지를 보니까 자신들의 음악을
                        'mordern prog'라고 부른다고 하더군요....
                      </p>
                      <p>
                        5년전에 발표되었고, Yes와 Marillion의 흔적이 느껴지는 것은 어쩔 수 없지만,
                      </p>
                      <p>
                        내일 나올 음반이라고 해도 믿을 만큼 모던한 사운드입니다...
                        자연스런 멜로디와 편곡이 돋보이는, 정말 신선한 팀이에요..
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 7 */}
                <div className="border border-teal-400 rounded-lg p-6 bg-teal-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-teal-300 mb-4">
                    #7. Smart Kids, Stupid Kids (4:21)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-teal-200 mb-2">Signify</h4>
                      <div className="bg-teal-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-teal-100 text-sm">Porcupine Tree</p>
                        <p className="text-teal-100 text-xs">1996</p>
                      </div>
                    </div>
                    <div className="text-xs text-teal-100 leading-relaxed space-y-3">
                      <p>
                        아마도 현재 프로그계에서 Steven Wilson만큼 활발한 활동을 하는 사람도 드물 듯 싶습니다.
                        TFK의 Roine Stolt와 더불어 현재 유럽 프로그계에서 가장 왕성한 활동을
                        하는 뮤지션이 아닌가 싶습니다.
                      </p>
                      <p>
                        'Signify'와 라이브앨범 'Coma Divine'을 거치면서 좀더 대중적이 되고
                        있는 것은 어쩔 수 없지만, 특유의 톡 쏘는맛은 잃지 않고 있어요...
                      </p>
                      <p>
                        Porcupine Tree식의 웃음섞인 냉소가 잘 드러나는 곡이라는 생각이에요...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 8 */}
                <div className="border border-pink-400 rounded-lg p-6 bg-pink-900 bg-opacity-20">
                  <h3 className="text-xl font-bold text-pink-300 mb-4">
                    #8. Always (4:28)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <h4 className="font-bold text-pink-200 mb-2">A Vision of Angels</h4>
                      <div className="bg-pink-800 bg-opacity-50 p-4 rounded mb-4">
                        <p className="text-pink-100 text-sm">Peter Gee</p>
                        <p className="text-pink-100 text-xs">1997</p>
                      </div>
                    </div>
                    <div className="text-xs text-pink-100 leading-relaxed space-y-3">
                      <p>
                        Peter Gee(Pendragon의 Bassist)의 두 번째 솔로앨범중에서 당일 'Neo-prog를 알고싶다'의
                        마지막 곡으로 골랐습니다.
                      </p>
                      <p>
                        Nick Barrett의 카리스마에 가려 빛 못본 Clive Nolan과 Peter Gee이지만 이들의 아웃사이드
                        프로젝은 어떤면에선 Pendragon 앨범의 완성도를 웃돈다고 할 수 있어요...
                      </p>
                      <p>
                        이 앨범의 전반적 분위기는 Camel과 비슷하고, 퓨전적인 요소가 강한 프로그-팝이라고 할 수 밖엔
                        없지만, 이만큼 수준높은 Pop-Rock도 쉽게 듣기는 힘들거라는 생각입니다
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendees Part 1 */}
            <div className="mb-12 p-6 bg-gray-800 rounded-lg border border-cyan-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">Part 1 참석자 명단</h3>
              <div className="text-center text-sm text-cyan-200">
                <p>
                  박재현, 신인철, 이동훈, 강창우와 친구분, 도태영, 안병욱, 전승훈, 네오자오님과 친구분
                </p>
              </div>
            </div>

            {/* Part 2: The Flower Kings Special */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-yellow-300 mb-8">
                🌸 Part 2: The Flower Kings 특집
              </h2>
              <div className="text-center mb-8">
                <p className="text-yellow-200">발표자: 도태영 (kikimomo@chollian.net)</p>
              </div>
              
              <div className="bg-yellow-900 bg-opacity-20 border border-yellow-400 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-6 text-center">🎵 The Flower Kings Set List</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">1. The Flower Kings</h4>
                      <p className="text-yellow-100 text-sm">10:28 / The Flower Kings (1994)</p>
                    </div>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">2. World of Adventures</h4>
                      <p className="text-yellow-100 text-sm">13:37 / Back In the World of Adventures (1995)</p>
                    </div>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">3. There is More to This World</h4>
                      <p className="text-yellow-100 text-sm">10:15 / Retropolis (1996)</p>
                    </div>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">4. In the Eyes of the World</h4>
                      <p className="text-yellow-100 text-sm">10:38</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">5. Just This Once</h4>
                      <p className="text-yellow-100 text-sm">7:53</p>
                    </div>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">6. The End of Innocence</h4>
                      <p className="text-yellow-100 text-sm">8:28 / Stardust We Are (1997)</p>
                    </div>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">7. Deaf, Numb & Blind</h4>
                      <p className="text-yellow-100 text-sm">11:09</p>
                    </div>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <h4 className="font-bold text-yellow-200 mb-2">8. Garden of Dreams</h4>
                      <p className="text-yellow-100 text-sm">Flowerpower (1998)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Summary */}
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">📊 Session 19 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">🎯 Part 1: Neo Progressive 철학</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong>네오 프로그 정의</strong>: 80년대 이후 Genesis 계보</li>
                    <li>• <strong>주요 밴드</strong>: IQ, Marillion, Pendragon</li>
                    <li>• <strong>현대적 해석</strong>: Porcupine Tree, Mr So&So</li>
                    <li>• <strong>브라질 프로그</strong>: Tempus Fugit</li>
                    <li>• <strong>솔로 프로젝트</strong>: Peter Gee, Martin Darvill</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">🌸 Part 2: The Flower Kings</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong>발표자</strong>: 도태영 (kikimomo@chollian.net)</li>
                    <li>• <strong>앨범 스팬</strong>: 1994-1998 (4년간)</li>
                    <li>• <strong>대표작</strong>: Back In the World of Adventures</li>
                    <li>• <strong>최신작</strong>: Flowerpower (1998)</li>
                    <li>• <strong>총 러닝타임</strong>: 약 80분</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-cyan-900 bg-opacity-30 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">🎼 음악적 의의</h3>
                <p className="text-sm text-cyan-100 leading-relaxed">
                  Session 19는 네오 프로그레시브의 철학적 고찰과 실제 음악적 구현을 모두 다룬 
                  깊이 있는 감상회였습니다. brave의 철학적 서론부터 8곡의 세심한 선곡, 
                  그리고 도태영의 The Flower Kings 특집까지, 90년대 네오 프로그의 전체적 지형을 
                  조망할 수 있는 소중한 기회였습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <Link href="/gathering" className="text-cyan-400 hover:text-cyan-300 underline">
                ← 감상회 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}