import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yes - 밴드 리뷰 | Yebadong',
  description: 'Yes 밴드에 대한 상세한 리뷰와 분석',
};

export default function YesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Yes</h1>
          <p className="text-base text-gray-600">프로그레시브 록의 전설적인 그룹 Yes에 대한 종합 분석</p>
        </div>

        <div className="space-y-8">
          {/* Neo-Zao의 Trevor Rabin 분석 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Neo-Zao (김남웅)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Trevor Rabin의 기타 사운드 분석</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                a.m.p.를 보니 요즘 Yes의 새 앨범에 대한 혹평들이 극에 달했더군요. 
                1994 The Year Yes Died ;-))) 특히 Trevor Ravin에 대한 욕이 상당한던데 예바동 여러분들은 어떻게 생각하세요? 
                새앨범을 꼭 들어보아서가 아니라 그전에 나온 Yes의 95125, 9512 Live Solos, Big Generator에서의 그의 연주 말입니다.
              </p>
              <p>
                저는 Big Generator보단 이전의 2장을 굉장히 좋아했는데, 저는 Owner Of A Lonely Heart가 나오고 오히려 
                한 1년뒤에 이 앨범을 사고 참 좋아했는데... 제가 아는 한 Trevor Ravin의 기타사운드는 대단한 것입니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h3 className="font-medium text-gray-800 mb-3">Steve Howe vs Trevor Rabin 사운드 비교</h3>
                <p className="text-sm">
                  Steve Howe는 ES335으로 맑은 내츄럴 톤에 리버브와 딜레이를 과다(?)사용해서 Yes의 공간감을 확보했죠. 
                  클라이막스에서 들려주는 톤도 고음을 강조한 약간은 신경질적인 톤으로 Oldfield와는 또 다른 소리를 창조했습니다.
                </p>
                <p className="text-sm mt-2">
                  Ravin은 저역감이 있는 사운드가 아닌 점에서 Howe와는 같지만 중역과 고역의 절묘한 사운드 메이킹이라는 면에서 
                  Howe보다 못할 이유는 없습니다. Owner...의 intro부분을 들어보세요. 이런 사운드는 그 이전에는 전혀 없었던 
                  대단히 멋진 sound makin'입니다.
                </p>
              </div>
              <p>
                혹시 Yes의 음질 안좋은 Bootleg을 비싸게 사시려는 분이 계시면 9012 Live Solos를 먼저 사 보세요. 
                Sound Quality도 대단히 좋습니다. 그리고 a.m.p.에도 누가 질문하는 것을 보았는데 참고로 제가본 Yes의 LaserDisc는 
                Yessongs와 9012 Live가 있는데요, Yessongs는 Yes의 Maniac이 아니면 그냥 음반으로 들으세요. 음질이 정말 좋지 않습니다.
              </p>
              <p>
                이에 비해 9012 Live는 'Sex, Lies, & Videotapes'를 감독한 스티븐 사더버그의 초기 작품으로 상당히 
                멋진 화면과 sound를 느낄 수 있습니다.
              </p>
            </div>
          </div>

          {/* Fish의 Trevor Rabin 평가 */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-4">Trevor Rabin과 Steve Howe 비교 분석</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                맞아요! Trevor Rabin의 guitar는 정말 대단하죠. 특히 9012 Live - The Solos의 Solly's Beard에서의 technic.. 
                Neo-Zao님이 말씀하신 video를 보면 더욱 환상적이죠.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">Rabin에 대한 개인적 견해</h3>
                <p className="text-sm">
                  근데 저는 Rabin의 vocal이 마음에 너무 안들어요.. 적나라한 Top 40 취향의 vocal. 
                  게다가 Union 앨범에 실린 Saving my Heart는 제가 가장 싫어하는 Yes의 곡입니다...
                </p>
                <p className="text-sm mt-2">
                  하지만 Howe도 맛이 좀 갔더군요... Turbulence, The Grand Scheme of Things 등의 앨범도 너무나 실망을 줍디다. 
                  그리고 The Symphonic Music of Yes같은 앨범은 도대체 왜 만들었는지.. 
                  차라리 The Symphonic Muzak of Yes라고 할 것이지...
                </p>
              </div>
              <p>
                Steve Howe는 아직도 Asia에 미련을 못버렸는지 아님 Geoff Downes와의 우정이 각별한지 Asia에서 발을 못빼고 있더군요.. 
                어쨌든 Trevor Rabin은 Yes가 여태까지 존속하도록 도와준 가장 큰 공훈자라는건 아무도 부인 못할겁니다.. 
                하지만 저는 아무래도 옛정때문에 Steve Howe에게 더 점수를 주고싶네요..
              </p>
            </div>
          </div>

          {/* Lennon의 Yes 앨범 순위 */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Lennon (이강영)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">개인적인 Yes 앨범 순위</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                갑자기 Yes에 대한 글이 쏟아져 나오니 너무 반갑네요. 전 지금까지 대한민국에서 Yes좋아하는 사람은 
                (쪼금 보태서) 저밖에 없는줄 알았는데. 그런데 대부분 (point가 Trevor여서 그렇긴 하지만) 최근 앨범 이야기네요.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">제가 좋아하는 Yes의 앨범</h3>
                <ol className="list-decimal list-inside text-sm space-y-2">
                  <li><strong>Close to the Edge</strong> (진짜 좋아함, CD, LP 다 가지고 있는 item 중 하나)</li>
                  <li><strong>Tormato</strong></li>
                  <li><strong>Tales of Topographic Oceans</strong> (자켓땜에)</li>
                  <li><strong>Fragile</strong></li>
                  <li><strong>Going for the one</strong></li>
                  <li><strong>9012 live</strong></li>
                </ol>
                <p className="text-xs text-gray-500 mt-2">(라이브는 빼고)</p>
              </div>
            </div>
          </div>

          {/* Oak-Man의 Yes 분석 */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Oak-Man (장민수)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">Yes의 음악적 특성과 의미</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                예스(Yes) 가 회자(:))되는 보니 기억이 새롭군요. 예스는 제겐 뜻깊은 그룹입니다. 
                프로그레시브 음악을 찾아 듣기 시작하면서 처음으로 '내가 가장 좋아하는 그룹' 으로 생각했던 그룹이 '예스' 이니까요.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">Yes가 과소평가되는 이유</h3>
                <p className="text-sm">
                  보통 예스(Yes) 는 프로그레시브 락 팬들에게서 약간은 과소 평가되고 있는듯한 느낌도 받게 되는데, 
                  그건 예스에 카리스마적인 존재가 부재하기 때문이 아닐까요?
                </p>
                <p className="text-sm mt-2">
                  Robert Fripp, Peter Gabriel, Roger Waters, Peter Hammill 등등의 존재들은 각자 소속한 그룹을 대표하는 이미지로서 
                  각별한 인상을 주는 반면에, 예스(Yes) 하면 Jon Anderson, Rick Wakeman, Steve Howe, Bill Bruford, Chris Squire 가 
                  한꺼번에 생각나잖아요?
                </p>
              </div>
              <p>
                어쨌든 예스의 음악은 이들의 개성이 조화를 통해 힘차게 드러날때 그 진가가 발휘된다고 봅니다. 
                저는 90125 이후의 일련의 앨범들은 70 년대의 예스(Yes) 의 음악성과는 연관시키지 않는 편입니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">개인적 앨범 평가</h3>
                <p className="text-sm">
                  제가 아끼는 예스의 음반은 'Close To The Edge', 'Relayer' 입니다. 'Fragile'과 'The Yes Album' 도 좋지요.
                </p>
                <p className="text-sm mt-2">
                  그런 맥락에서 90125, 9012Live, Big Generator 는 좋은 앨범이라고 할 수 있지요. 
                  Union 은 좀 어정쩡한 앨범인것 같아요. 새 앨범은 어떨지 모르겠네요...
                </p>
              </div>
            </div>
          </div>

          {/* Fish의 Talk 앨범 리뷰 */}
          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Yes - Talk (1994) 앨범 리뷰</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                와 !!! 드디어 Yes의 새앨범 Talk를 손에 쥐었읍니다 !!! 고맙게도 한 일본친구가 저에게... WOW !!! 
                Jacket은 생각보다 그리 후지지 않네요.. Peter Max라는 친구가 Yes의 Logo를 새로 design 하였는데 
                마치 유치원생의 낙서같은 colorful한 Painting입니다..
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">Talk 앨범 수록곡</h3>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>The Calling (Rabin, Anderson, Squire)</li>
                  <li>I am waiting (Rabin, Anderson)</li>
                  <li>Real Love (Rabin, Squire, Anderson)</li>
                  <li>State of Play (Rabin, Anderson)</li>
                  <li>Walls (Rabin, Hodgson, Anderson)</li>
                  <li>Where will you be (Rabin, Anderson)</li>
                  <li>Endless Dream (Rabin, Anderson)</li>
                </ol>
                <p className="text-xs text-gray-500 mt-2">
                  Produced by Trevor Rabin<br/>
                  Engineerd by Michael Jay and Trevor Rabin<br/>
                  Dedicated to all Yes Fans..<br/>
                  1994 Victory Music, Inc.
                </p>
              </div>
              <p>
                전체적인 분위기는 Trevor Rabin의 solo album에 Jon Anderson이 guest로 참여한 것 같은 분위기 입니다.. 
                Chris Squire와 특히 Tony Kaye는 이 앨범에서 연주를 했는지 조차도 의심스럽게 느껴지는 군요.
              </p>
              <p>
                특이할만한 사실은 Walls라는 곡은 ex- Supertramp의 Roger Hodgson이 작곡에 참여하였죠... 
                앨범의 압권은 마지막 track Endless Dream입니다.. Awaken, Hearts등의 향수를 나게 하는...구성이 상당히 독특하네요..
              </p>
              <p>
                하지만 Jon의 vocal은 50이 넘은 나이에도 아직도 여전하고 Yes의 독특한 향기는 건재합니다.. 
                a.m.p.의 친구들이 아무리 욕을해도 Yes는 아직 죽지 않았읍니다..
              </p>
            </div>
          </div>

          {/* Fish의 ABWH 라이브 앨범 리뷰 */}
          <div className="bg-teal-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-teal-800 mb-4">An Evening with Yes Music Plus / Anderson Bruford Wakeman Howe</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                <h3 className="font-medium text-gray-800 mb-3">라이브 앨범 정보</h3>
                <p className="text-sm">
                  <strong>녹음:</strong> 1989/09/09<br/>
                  <strong>구성:</strong> 2CD (Disc 1: 61:44, Disc 2: 67:53)<br/>
                  <strong>특징:</strong> 24K Gold CD, 단돈 $19
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                <h3 className="font-medium text-gray-800 mb-3">Disc 1 수록곡</h3>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>Benjamin Britten's Young Person's Guide to the Orchestra</li>
                  <li>Jon Anderson Solo: Time and a Word/Owner of a Lonely Heart/Teakbois</li>
                  <li>Steve Howe Solo: The Clap/Mood for a Day</li>
                  <li>Rick Wakeman Solo: Gone but not Forgotten/Catherine Parr/Merlin the Magician</li>
                  <li>Long Distance Runaround</li>
                  <li>Birthright</li>
                  <li>And You and I</li>
                  <li>Starship Trooper</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                <h3 className="font-medium text-gray-800 mb-3">Disc 2 수록곡</h3>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>Close to the Edge</li>
                  <li>Theme: a) Sound, b) Second Attention, c) Soul Warrior</li>
                  <li>Brother of Mine</li>
                  <li>Heart of the Sunrise</li>
                  <li>Order of the Universe</li>
                  <li>Roundabout</li>
                </ol>
              </div>

              <p>
                전체적으로 sound가 너무나 깨끗합니다.. 그리구 큰 merit는 classic으로나 가질 수 있었던 24K Gold CD이고 
                값은 채 $20이 안된다는 것이죠... 너무나 live 특유의 생동감이 잘 나타나있읍니다.. 
                특히 Jon의 solo가 끝나고 Steve 가 나올때의 관중들의 함성.....
              </p>
              
              <p>
                Starship Trooper의 끝부분에는 Bill의 그야말로 끝내주는 drum solo와 Jon의 그간의 Yes의 masterpiece를 
                상기시키는 황홀한 vocal track이 첨부되어 있읍니다. 
                "Soon or soon the light.. Pass within suite this endless night.. Nous Sommes Du Soleil...."
              </p>

              <p>
                전체적으로 이 앨범은 정말 Yes의 (물론 Yes라는 banner하에 나온 앨범은 아니지만...) 가장 훌륭한 live album이라고 
                말하고 싶습니다. Yessongs나 Yesshows도 좋지만 시대적 상황이 문제인지 너무 sound producing 이 맘에 안들어서. 
                Yes의 fan들에게 자신있게 추천하는 단돈 $19 짜리 double CD입니다..
              </p>
            </div>
          </div>

          {/* pastel의 개인 컬렉션 */}
          <div className="bg-rose-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                pastel (김재열)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-rose-800 mb-4">개인 YES 컬렉션과 선호도</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                이곳에서 YES의 소식을 들을 수 있어서 무척 기쁩니다. 저는 YES 1집, Yes Album, Yessongs, 
                Close to the edge, Fragile, Relayer, Topographic Oceans, Classics, Going for the one, 등의 앨범을 가지고 있어요.. 
                그중 제일 좋아하는 것은 "Yours is no disgrace" 가 들어있는 Yes Album이구요.
              </p>
              <p>
                사실 저는 Trevor라는 친구를 그다지 좋아하지는 않는데요.. 그래도 중학교때 멋모르고 들은 
                Owner of the lonely hearts는 가끔씩 들으면 여전히 좋더군요. 그런데 그 앨범은 요새 잘 보이지 않더군요. 
                보니까 초기의 YES앨범은 다행히도 제게 대부분 있더군요. 후기는 대부분 없구요.
              </p>
            </div>
          </div>

          {/* Fish의 YesYears 박스셋 분석 */}
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">YesYears (박스셋) 완전 분석</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                <h3 className="font-medium text-gray-800 mb-3">앨범 정보</h3>
                <p className="text-sm">
                  <strong>발매:</strong> 8/6/91, CD US Atco 91644<br/>
                  <strong>구성:</strong> 4CD 박스셋<br/>
                  <strong>특징:</strong> Previously unreleased 곡이 많음, Remaster 처리
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">Disc 1 (72:50)</h3>
                  <p className="text-xs text-gray-600 mb-2">Jon Anderson, Chris Squire, Tony Kaye, Bill Bruford, Peter Banks, Rick Wakeman, Steve Howe</p>
                  <ol className="list-decimal list-inside text-xs space-y-1">
                    <li>Something's Coming (7:06)</li>
                    <li>Survival (6:18)</li>
                    <li>Every Little Thing (5:41)</li>
                    <li>Then (4:18) *</li>
                    <li>Everydays (4:08) *</li>
                    <li>Sweet Dreams (3:49)</li>
                    <li>No Opportunity Necessary, No Experience Needed (4:48)</li>
                    <li>Time and a Word (4:31)</li>
                    <li>Starship Trooper (9:26)</li>
                    <li>Yours is no Disgrace (9:40)</li>
                    <li>I've Seen All Good People (6:53)</li>
                    <li>Long Distance Runaround (3:33)</li>
                    <li>The Fish (Schindleria Praematurus) (2:35)</li>
                  </ol>
                  <p className="text-xs text-gray-500 mt-2">* Previously unreleased BBC recordings</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">Disc 2 (72:40)</h3>
                  <p className="text-xs text-gray-600 mb-2">Jon Anderson, Chris Squire, Rick Wakeman, Bill Bruford, Steve Howe, Alan White, Patrick Moraz</p>
                  <ol className="list-decimal list-inside text-xs space-y-1">
                    <li>Roundabout (8:31)</li>
                    <li>Heart of the Sunrise (10:31) *</li>
                    <li>America (4:03)</li>
                    <li>Close to the Edge (18:34)</li>
                    <li>Ritual (21:33)</li>
                    <li>Sound Chaser (9:23)</li>
                  </ol>
                  <p className="text-xs text-gray-500 mt-2">* Originally from Age of Atlantic sampler</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">Disc 3 (73:18)</h3>
                  <p className="text-xs text-gray-600 mb-2">Jon Anderson, Chris Squire, Rick Wakeman, Steve Howe, Alan White, Patrick Moraz, Trevor Horn, Geoff Downes</p>
                  <ol className="list-decimal list-inside text-xs space-y-1">
                    <li>Soon (4:06) - single edit from Gates of Delirium</li>
                    <li>Amazing Grace (2:31) - Chris Squire bass solo</li>
                    <li>Vevey, part 1 (1:07) - keyboard/harp duet</li>
                    <li>Wonderous Stories (3:45)</li>
                    <li>Awaken (15:34)</li>
                    <li>Montreaux's Theme (2:26) *</li>
                    <li>Vevey, part 2 (0:57) - keyboard/harp duet</li>
                    <li>Going for the One (5:32)</li>
                    <li>Money (3:12) *</li>
                    <li>Abilene (3:55) - b-side</li>
                    <li>Don't Kill the Whale (3:55)</li>
                    <li>On the Silent Wings of Freedom (7:45)</li>
                    <li>Does It Really Happen? (6:34)</li>
                    <li>Tempus Fugit (5:14)</li>
                    <li>Run With the Fox (4:09)</li>
                    <li>I'm Down (2:31) - Beatles cover, live 1976</li>
                  </ol>
                  <p className="text-xs text-gray-500 mt-2">* Previously unreleased</p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-3">Disc 4</h3>
                  <p className="text-xs text-gray-600 mb-2">Jon Anderson, Chris Squire, Alan White, Trevor Rabin, Tony Kaye, Billy Sherwood</p>
                  <ol className="list-decimal list-inside text-xs space-y-1">
                    <li>Make it Easy (6:08) *</li>
                    <li>It Can Happen (6:01)</li>
                    <li>Owner of a Lonely Heart (4:27)</li>
                    <li>Hold On (5:15)</li>
                    <li>Shoot High Aim Low (7:00)</li>
                    <li>Rhythm of Love (4:46)</li>
                    <li>Love Will Find a Way (4:49)</li>
                    <li>Changes (7:34) - live</li>
                    <li>And You And I (10:49) - live</li>
                    <li>Heart of the Sunrise (10:50) - live</li>
                    <li>Love Conquers All (4:57) *</li>
                  </ol>
                  <p className="text-xs text-gray-500 mt-2">* Previously unreleased</p>
                </div>
              </div>

              <p>
                Previously unreleased 곡이 많죠 ? Remaster의 여부는 모르겠는데 아마 했다고 들은것 같아요.. 
                그리구 제가 전에 Yaman Aksu라는 친구가 Yesyears를 싸게 판다고 하는 얘기를 전했는데 
                혹시 CDC 보다 훨씬 싸면 그에게 contact 하는 것도 좋을 듯 합니다..
              </p>
            </div>
          </div>

          {/* Fish의 Keys to Ascension 리뷰 */}
          <div className="bg-cyan-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-cyan-800 mb-4">Yes - Keys to Ascension (1996)</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                <h3 className="font-medium text-gray-800 mb-3">앨범 정보</h3>
                <p className="text-sm">
                  <strong>발매사:</strong> CMC International → BMG 배포<br/>
                  <strong>구성:</strong> Yes-East (vs Yes-West Trevor Rabin)<br/>
                  <strong>특징:</strong> 라이브 트랙 위주 + 신곡 2곡 (Be the One, That, that is)
                </p>
              </div>
              
              <p>
                솔직히.. 첫곡 Siberian Khatru의 Steve Howe의 기타 솔로를 듣고는 거의 눈물이 날뻔 했읍니다..
                오랜만에 들는 이곡이 십여년전 처음 듣던 감동을 불러 일으키기도 했지만요.. 
                나머지 감정들은.. 아직도 20여년전 레파토리를 울궈먹는 Yes에 대한 조금의 동정심과 .. 
                아직도 전혀 녹음상으로는 느낄수 없을정도로 녹슬지 않은 그들의 테크닉에 대한 경외감이 섞였다고 해야겠네요..
              </p>

              <p>
                Tales from... 앨범에 실렸던 The Revealing Science of God을 그렇게 그 앨범을 싫어했던 Rick Wakeman이 
                같이 연주해주고 있는 모습에서 세월의 흐름을 느낄 수 있었구요..America, Onward, Awaken.. 등등..
                그동안 정식 라이브 앨범에 없던 곡들을 라이브 버젼으로 들을 수 있다는 점도 꽤 큰 메리트 인것 같아요..
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                <h3 className="font-medium text-gray-800 mb-3">신곡 "That, that is" 감상</h3>
                <p className="text-sm">
                  무척 마음에 드는 신곡인 That, that is 도 아마 제가 올해 접한 곡들중 최고의 곡이라고 하는데 주저없는 곡이겠지만.. 
                  한가지 아쉬운건 Rick Wakeman의 키보드 음색이네요..
                </p>
                <p className="text-sm mt-2">
                  물론 19분짜리 신곡 That, that is 는 Close to the Edge II는 아닙니다만.. 
                  저에겐 정말 오랜만에 크나큰 감동을 주는 좋은 옛 친구 Yes의 커다란 선물이 아닐까 싶네요..
                </p>
              </div>

              <p>
                Close to the Edge를 간신히 빌리고 또 빌려 복사해서 아껴 듣던 시절엔 생각도 못했죠.. 
                가끔 이렇게 Yes같이 예전에 좋아하던 팀들의 앨범을 듣다보면 그런 생각이 드네요.. :-)
              </p>
            </div>
          </div>

          {/* Fish의 Open Your Eyes 비판적 리뷰 */}
          <div className="bg-red-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-red-800 mb-4">Yes - Open Your Eyes (1997) - 비판적 고찰</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                바동 초기 시절에 Yes의 Talk 앨범을 리뷰하던 기억이 납니다. 당시만해도 Yes는 90125의 sold out과 ABWH의 어느정도의 성공의 여파로 
                아직 세간의 관심을 집중시킬 수 있는 밴드였죠. 하지만 결국 Trevor Rabin은 Talk의 상업적, 음악적 참패를 책임지고 일선에서 물러납니다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">앨범 트랙리스트 (Running Time 74:14)</h3>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>New State of Mind (6:00)</li>
                  <li>Open Your Eyes (5:14)</li>
                  <li>Universal Garden (6:16)</li>
                  <li>No Way We Can Lose (4:56)</li>
                  <li>Fortune Seller (5:00)</li>
                  <li>Man in the Moon (4:41)</li>
                  <li>Wonderlove (4:37)</li>
                  <li>From the Balcony (2:43)</li>
                  <li>Love Shine (4:37)</li>
                  <li>Somehow, Someday (4:47)</li>
                  <li>The Solution (24:47) - 실제론 5:25 + 19분 공백</li>
                </ol>
              </div>

              <p>
                Rick Wakeman은 또다시 Yes를 탈퇴하고 그 후임으로는 World Trade라는 Magna Carta 레이블의 Yes clone 밴드의 리더였던 
                Billy Sherwood와 무명의 Igor Khoroshev가 일임됩니다. 그렇게 또 새로운 라인업으로 21세기를 내다보게 된 Yes는 
                작년 말 Talk이후 오랜만의 all studio release를 내놓았습니다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">마지막 곡 "The Solution"에 대한 신랄한 분석</h3>
                <p className="text-sm">
                  글쎄 현 Yes의 위치와 이 앨범의 위상은 마지막곡 이자 가짜 대곡인 The Solution이 어느정도 대표적으로 설명하고 있다고 할 수 있겠네요. 
                  하지만 대곡이 그냥 대곡으로 만들겠다..는 생각만으로 저절로 이루어지는 것은 물론 아닙니다.
                </p>
                <p className="text-sm mt-2">
                  Yes로서는 평범한 구성에 Steve Howe의 기타 징징거림이 거슬리는 마지막곡은 5분 25초 쯤에 정확이 끝납니다. 
                  약 3분 가량의 공백이 있은 후에 듣기만해도 Close to the Edge를 처음 접하던 시절을 떠오르게 만드는 
                  Close to the Edge의 인트로부분.. 전원의 새소리와 천상의 종소리..가 들려옵니다.
                </p>
                <p className="text-sm mt-2">
                  Jon Anderson도 '그때가 좋았지..'라고 생각하는가 보죠 ? 
                  새소리가 남은 러닝타임동안 계속되며 잠깐 잠깐 들리는 파도소리가 이제 Yes에 대한 미련을 파도와 함께 
                  씻어버리라는 듯 오래된 팬에게 충고합니다. T.T
                </p>
              </div>

              <p>
                '老兵은 죽지않는다 사라질 뿐이다' 라는 구태의연한 :-) 얘기가 생각나네요. 
                Yes는 아마도 계속 이 마지막 곡 The Solution에서 자신들의 처신에 대한 'Solution'을 얻게 된것 같습니다. 
                꾸역꾸역 잊혀질만 하면 또 다시 새로운 라인업으로 부활하여 앨범을 내고.. 
                그렇게 또 예전 팬들의 향수에 기대는 그룹으로 남을 모양입니다.
              </p>
            </div>
          </div>

          {/* Fish의 The Ladder 상세 분석 */}
          <div className="bg-amber-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-amber-800 mb-4">예스 - 사다리 (Yes - The Ladder, 1999)</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                왜 예스의 앨범을 아직도 사는 걸까요 ? 자신한테 되물어 볼때마다 어쩔 수 없는 대답은 '버릇인것 같다' 입니다. 
                지난번 역시나 실망을 줬던 '눈을 떠라 (Open your eyes)' 앨범이었지만 이번 새 앨범도 아무 생각없이 뒤늦게 구했습니다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-3">트랙리스트 (한국어 제목 포함)</h3>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>집세계 (사다리) - Homeworld (The Ladder) 9:33</li>
                  <li>좋은 날이 될거야 (江) - It will be a good day (The River) 4:53</li>
                  <li>번개 번쩍 - Lightning Strikes 4:34</li>
                  <li>내가 ? - Can I ? 1:32</li>
                  <li>마주보기 - Face to Face 5:03</li>
                  <li>당신만 안다면 - If only you knew 5:42</li>
                  <li>살아있다는 것 (헵 야다) - To be Alive (Hep Yada) 5:07</li>
                  <li>드디어 - Finally 6:01</li>
                  <li>전령 - The Messenger 5:13</li>
                  <li>새로운 언어 - New Language 9:19</li>
                  <li>아홉의 목소리 (롱워커) - Nine Voices (long walker) 3:20</li>
                </ol>
                <p className="text-xs text-gray-500 mt-2">BMG 산하의 beyond 레이블 발매</p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-3">"집세계 (Homeworld)" 분석</h3>
                <p className="text-sm">
                  첫 곡은 이 앨범에서 가장 들을만한 곡으로 뽑힌.. 그리고 저도 그렇게 생각하는 '집세계 (homeworld)'입니다. 
                  존앤더슨은 현학적인 가사를 쓸때는 도통 알아먹지 못할 단어만을 주어 섬깁니다마는.. 
                  일단 은유를 벗어나면.. Home, Love, Heart, Freedom, Believe, Heaven, Sky, Earth, Peace, Flower, Alive, Light, Life, World 등의 
                  몇 소절만 들으면 그가 쓴 가사라는 걸 알 수 있을 정도의 구태의연에 사로잡혀 있는 듯 합니다.
                </p>
                <p className="text-sm mt-2">
                  이고 코로쉐프의 건반은 이 곡에서 아주 마음에 듭니다. 릭 웨이크먼의 스타일과는 많이 틀리지만 
                  키스 에머슨의 건반 톤에 토니 뱅크스의 '빠르지는 않지만 터치가 힘있고 끊음과 땡김이 있는' 맛깔스러운 연주 스타일을 보여줍니다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-3">특별한 연결점들</h3>
                <p className="text-sm">
                  네번째곡 '내가 ? (Can I ?)'는 취급주의 (Fragile) 앨범에 실렸던 '우리에겐 천국이 (We have heaven)'의 또 다른 버젼입니다. 
                  존 앤더슨의 아카펠라와 코러스로 실제로 '우리에겐 천국이' 의 멜로디를 다시한번 리바이벌 하고 있습니다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-3">PC게임과의 타이업</h3>
                <p className="text-sm">
                  한가지 슬픈건지 재밌는건지.. 이 앨범에는 약 3 분 가량의 비디오와 html 파일들이 몇개 들어있습니다. 
                  뭐냐면.. 바로 씨에라사의 피씨게임 '집세계 (Homeworld)'의 프로모션이죠.. 
                  바로 예스의 새 앨범의 첫곡 타이틀 트랙은 동명 씨에라 피씨 오락의 배경음악인 것입니다. T.T
                </p>
                <p className="text-sm mt-2">
                  한때.. 락계의 仙人으로까지 여겨졌던 예스 멤버들의 밑도 끝도 없는 현실과의 타협 내지는 노망 내지는.. 궁상으로 여겨지기도 하고.. 
                  하지만 존 앤더슨이 추구하던 천상의 모습과 이 사이버 시대의 첨단 엔터테인먼트 전자오락과의 오묘한 상관관계가 느껴지기도 하고.. 그러네요..
                </p>
              </div>

              <p>
                전반적으로 볼때.. 평범한 예스의 AOR 앨범이라 할 수 있습니다. 첫 곡 '집세계' 정도가 과거의 예스에 대한 추억을 약간 느낄 수 있게 해주는 트랙이구요..
              </p>
            </div>
          </div>

          {/* Fish의 House of Yes DVD 리뷰 */}
          <div className="bg-violet-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-violet-800 mb-4">Yes - House of Yes: Live from the House of Blues (DVD)</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                다시한번 바동에 예스의 열기가 몰아치고 있군요. ^^; 이 기회를 틈타 얼마전 배달되어 지금 열심히 보고있는 DVD 한장 짧게 언급하고 갈께요.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-violet-500">
                <h3 className="font-medium text-gray-800 mb-3">DVD 트랙리스트</h3>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>Yours Is No Disgrace</li>
                  <li>Time And A Word (존 앤더슨 보컬 솔로 버젼)</li>
                  <li>Homeworld (The Ladder)</li>
                  <li>Perpetual Change</li>
                  <li>Lightning Strikes</li>
                  <li>The Messenger</li>
                  <li>Ritual - Nous Sommes Du Soleil (짧은 버젼)</li>
                  <li>And You And I</li>
                  <li>It Will Be A Good Day (The River)</li>
                  <li>Face To Face</li>
                  <li>Awaken</li>
                  <li>Your Move/I've Seen All Good People</li>
                  <li>Cinema</li>
                  <li>Owner Of A Lonely Heart</li>
                  <li>Roundabout</li>
                </ol>
                <p className="text-xs text-gray-500 mt-2">
                  주의: Time and a Word와 Ritual은 풀 버젼이 아님
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-violet-500">
                <h3 className="font-medium text-gray-800 mb-3">멤버들의 시각적 변화</h3>
                <p className="text-sm">
                  DVD의 향상된 화질덕에 이들 Yes 멤버들의 땀구멍 하나까지 잘 들여다 볼 수 있는데요.
                </p>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• <strong>Billy Sherwood</strong>: 어렸을때 무척 여드름을 많이 앓은듯 얼굴의 여드름 흉터가 채 가시지않은</li>
                  <li>• <strong>Igor Koroshev</strong>: 러시아에서 유학온 촌스러운 대학생 같은</li>
                  <li>• <strong>Steve Howe</strong>: 거의 마귀할아범 수준의 외모로 변해버린 귀곡산장의</li>
                  <li>• <strong>Alan White</strong>: 아침 운동나온 동네 체격좋은 할아버지 처럼 늙은</li>
                  <li>• <strong>Chris Squire</strong>: 살이 조금 빠졌지만 여전히 은퇴한 레슬링선수같은</li>
                  <li>• <strong>Jon Anderson</strong>: 언제나 소년같은 미소, 아직도 30대처럼 보이는 외모와 초등학생의 율동같은 천진난만한 스테이지 매너</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-violet-500">
                <h3 className="font-medium text-gray-800 mb-3">DVD 하이라이트</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>And you and I</strong>: Chris Squire가 하모니카를 들고 참여하는 부분</li>
                  <li>• <strong>Awaken</strong>: Jon Anderson의 다중악기주자로서의 능력이 돋보이는</li>
                  <li>• <strong>Owner of a lonely heart</strong>: Steve Howe의 완전히 새로 추가된 불같은 솔로</li>
                </ul>
              </div>

              <p>
                Yes의 유일한 Dolby Digital 5.1 채널 DVD이고 그들의 가장 최근의 모습을 담았다는점에서 소장가치가 있는 아이템이라 생각합니다. 
                또한 Yes의 데뷔부터 지금까지 모든 투어의 포스터와 Homeworld 전자오락의 화면들.. 그리고 Homeworld의 Dolby Digital 5.1 채널 믹스 오디오.. 
                등이 보너스로 들어있습니다.
              </p>
            </div>
          </div>

          {/* 조영래의 Yes 종합 평가 */}
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                조영래 (island)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">Yes 앨범 종합 평가 (1994.12)</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">앨범별 평점</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span><strong>Fragile</strong></span>
                    <span className="text-yellow-600">★★★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Close to the Edge</strong></span>
                    <span className="text-yellow-600">★★★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Relayer</strong></span>
                    <span className="text-yellow-600">★★★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>Going for the One</strong></span>
                    <span className="text-yellow-600">★★★</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>90125</strong></span>
                    <span className="text-yellow-600">★☆</span>
                  </div>
                  <div className="flex justify-between">
                    <span><strong>ABWH</strong></span>
                    <span className="text-yellow-600">★★</span>
                  </div>
                </div>
              </div>

              <p>
                Yes는 너무나도 유명한 프로그레시브 록 그룹이다. Pink Floyd, King Crimson, Genesis, EL&P등과 더불어 
                Yes는 가장 대표적인 프로그레시브 록 그룹으로 불린다. 이들의 대중적 인기, 오랜 활동 상황, 
                그리고 프로그레시브 록 신에 미친 영향력등은 구태여 설명이 필요하지 않을 정도다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">70년대 황금기</h3>
                <p className="text-sm">
                  이들의 4번째 앨범 'Fragile'은 이들에게 첫번째 상업적 인기를 안겨다 준 작품이며, Yes 사운드의 완성을 이룬 앨범으로 보통 평가받고 있다. 
                  당시의 라인업은 호화롭다고 할 수 밖에 없는 Jon Anderson - Chris Squire - Steve Howe - Rick Wakeman - Bill Bruford로 
                  이 라인업으로 다음 앨범 'Close to the Edge'까지 Yes의 최고 전성기를 이뤄내게 된다.
                </p>
                <p className="text-sm mt-2">
                  앨범의 마지막에 수록된 Heart of the Sunrise는 대단한 곡이다. Yes의 곡중 가장 박력있는 곡이라고 생각되며, 
                  히트곡 Roundabout과 함께 앨범을 대표할 만한곡이다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">80년대 상업적 변신</h3>
                <p className="text-sm">
                  90125는 Yes의 회심의 재기작으로 넘버 원 곡 Owner of a Loney Heart가 수록되어 있긴 하지만, 
                  지나치게 재기에 신경쓴듯한 상업적인 냄새가 거슬리는 앨범이다. 초창기 Yes팬들에겐 한없는 실망을 안겨주리라고 생각된다.
                </p>
                <p className="text-sm mt-2">
                  80년대 후반 Anderson, Bruford, Wakeman & Howe라는 이름으로 다시 모인 이들은 - 당시 이들이 이런 이름을 쓸 수 밖에 없었던 이유는 
                  Chirs Squire가 고집스럽게도(?) Yes를 이끌고 있었기 때문이다. - 동명 타이틀의 앨범을 발표하지만, 
                  뚜렷한 목적 의식 없이 장황하고 부풀려진 사운드만으로 팬들의 기대에 부응하기엔 다소 힘들었다는 생각이 든다.
                </p>
              </div>
            </div>
          </div>

          {/* 오찬익의 상세 앨범 리뷰 시리즈 */}
          <div className="bg-indigo-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                오찬익
              </div>
            </div>
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">YES 앨범별 완전 분석 시리즈 (1993-1994)</h2>
            <div className="space-y-8 text-gray-700">

              {/* YES 1집 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES 1집 (1969) - 데뷔 앨범</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-medium text-blue-800 mb-2">시리즈 서문</p>
                    <p className="text-xs">
                      앞으로 10여회에 걸쳐서 록의 르네상스시대를 빛내었던 프로그레시브록그룹인 Yes의 앨범들에 대한 Review를 할까합니다. 
                      오늘은 그 첫번째로 그들이 1969년에 발표한 그들의 공식 데뷰앨범인 'Yes'를 살펴보기로 하죠.
                    </p>
                  </div>
                  
                  <p>
                    흔히들 평하길 아니, 필자의 개인적인 소견으로 볼때 그들은 E.L.P와 더불어 가장뛰어난 연주력을 소유했던 
                    프로그레시브 록그룹중 하나가 아니었던가 생각합니다. 예스가 배출했던 뮤지션들만 보더라도 키보드에 릭 웨이크만, 
                    토니 케이, 그리고 패트릭 모라즈, 제프리 다운즈등 그야말로 프로그레시브록에 핵심에 위치해 있는 뮤지션들이라고 할수있죠.
                  </p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">1집 라인업</h4>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>존 앤더슨</strong>: 보컬 (밴드 리더)</li>
                      <li>• <strong>크리스 스콰이어</strong>: 베이스</li>
                      <li>• <strong>피터 뱅크스</strong>: 기타</li>
                      <li>• <strong>토니 케이</strong>: 오르간</li>
                      <li>• <strong>빌 브러포드</strong>: 드럼</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">트랙리스트</h4>
                    <ol className="list-decimal list-inside text-xs space-y-1">
                      <li>Beyond and Before</li>
                      <li>I See You</li>
                      <li>Yesterday and Today</li>
                      <li>Looking Around</li>
                      <li>Harold Land</li>
                      <li>Every Little Thing</li>
                      <li>Sweetness</li>
                      <li>Survival</li>
                    </ol>
                  </div>
                  
                  <p>
                    피터 뱅크스나 토니 케이등은 이후에 활동하게 되는 멤버들에 비하여 비교적 이름이 덜 알려진 뮤지션들이긴 하지만 
                    그들이 몸담았었던 초기에도 예스의 연주력은 상당한 수준에 도달해 있었음을 본작을 통해서 간파할 수 있습니다.
                  </p>
                  
                  <p>
                    오르간의 사용과 군데군데 배치된 오케스트레이션 인하여 그들의 후기작을 먼저 접한 분들에겐 다소 이질감이 느껴질지도 모르겠습니다. 
                    물론 기교적인 면에 있어선 스티브 하우나 릭 웨이크먼이 앞서는 것은 사실이나 필자의 생각으론 피터 뱅크스와 토니 케이가 참가했던 
                    초기의 사운드가 록적인 필이나 파워에 있어서는 앞섰던 것이 아닌가 하는 생각입니다.
                  </p>
                  
                  <p>
                    결론적으로 말씀드리자면 본작은 아직은 미숙하지만 여러면에서 슈퍼그룹으로서의 예스의 전설을 예고한 훌륭한 작품집이었다는 것은 
                    의심할 수 없는 사실인 것 같습니다.
                  </p>
                </div>
              </div>

              {/* Time and a Word 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES Time and a Word (1970) - 2집</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    본작은 Yes의 2집으로 1970년에 발표되었는데 발표당시에는 큰 반응을 불러일으키지 못했다. 
                    그러나 그 이후에 새롭게 재 평가되면서 Yes의 명반중하나로 자리잡게 되었다. 
                    필자가 생각하기로도 본작은 그들의 모든 작품집중 거의 최상의 평가를 받아내기에 손색이 없다고 생각한다.
                  </p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">트랙리스트</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="font-medium text-gray-700">Side A</p>
                        <ol className="list-decimal list-inside text-xs space-y-1">
                          <li>No Opportunity Necessary, No Experience Needed</li>
                          <li>Then</li>
                          <li>Everydays</li>
                          <li>Sweet Dreams</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Side B</p>
                        <ol className="list-decimal list-inside text-xs space-y-1">
                          <li>The Prophet</li>
                          <li>Clear Days</li>
                          <li>Astral Traveller</li>
                          <li>Time and a Word</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    그리고 멤버는 변동이 없다. 그리고 오케스트레이션의 사용도 여전하다. 그래서인지 1집의 분위기가 그대로 연출되고 있는데 
                    연주력과 곡의 구성면에 있어서는 1집을 훨씬 능가하고 있다는 느낌을 준다.
                  </p>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">명곡 분석: "No Opportunity Necessary, No Experience Needed"</h4>
                    <p className="text-xs">
                      첫곡인 이 곡은 이러한 면을 잘 반영하고 있는데 인트로에서 펼쳐지는 클래시컬한 전주에 바로 이어지는 변화무쌍한 연주패턴이 
                      그 좋은 예일 것이다. 특히 스콰이어와 브러포드의 탄탄한 리듬파트를 배경으로 펼쳐지는 케이의 오르간연주는 
                      호쾌한 스트링파트와 더불어 그야말로 장관을 이뤄낸다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">리듬 섹션의 완성: "Then"과 "Everydays"</h4>
                    <p className="text-xs">
                      "Then"에서 보여지는 스콰이어의 베이스와 브러포드의 드럼의 절묘한 조화는 E.L.P에 있어서 파머와 에머슨의 경합을 
                      연상케 할정도로 격렬하고 뛰어난 것이다. 이어지는 명곡 "Everydays"에서 펼쳐지는 변화무쌍한 리듬패턴과 강약완급의 조절은 
                      그들의 사운드가 연주에 있어서 뿐만 아니라 구성에서도 진일보했음을 확인할수 있는 쾌거라고 할수있겠다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">철학적 가사 분석</h4>
                    <p className="text-xs">
                      본작에 실린 곡들의 가사를 살펴보면 그들의 세계관이 매우 밝고 낙천적임을 감지 할수 있다. 
                      그들은 모든이들이 느끼는 현실의 고통과 괴로움을 잘 알고 있다. 하지만 그들은 인식으로만 그치지 않고 
                      구체적인 해결방안을 제시한다. 그것은 사랑과 꿈이다.
                    </p>
                    <p className="text-xs mt-2 italic">
                      "There's a time and the time is now and it's right for me,<br/>
                      It's right for me, and the time is now.<br/>
                      there's a word and the word is love and it's right for me,<br/>
                      It's right for me and the word is love."
                    </p>
                  </div>
                  
                  <p>
                    어쨌든 본작을 끝으로 스트링 파트의 삽입은 사라져가지만 오케스트레션이 가미됨으로 해서 본작은 독특한 위치에 서게되고 
                    그들의 초기를 대표하는 명반으로 자리잡게 되는데 손색이 없는듯 하다.
                  </p>
                </div>
              </div>

              {/* The Yes Album 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES The Yes Album (1971) - 3집</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    본작은 그들의 3집으로서 1,2집에서 나타났던 시행착오적인 사운드에서 완전히 탈피하여 완숙한 연주와 구성을 갖추고 있는 명반이라고 할 수 있습니다. 
                    그래서인지 대부분의 예스 팬들은 본작에서부터 진정한 예스의 사운드가 시작되었다고 보더군요.
                  </p>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">핵심 변화: 스티브 하우 영입</h4>
                    <p className="text-xs">
                      본작에서부터 기타리스트가 피터 뱅크스에서 스티브 하우로 교체되는데 첫곡인 'Yours is no disgrace'에서부터 
                      그의 뛰어난 실력이 유감없이 노출되고 있습니다. 첫곡인 이 곡만 보더라도 그들의 사운드가 얼마나 진보했는가를 한눈에 알 수 있죠.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">기술적 혁신: Moog Synthesizer</h4>
                    <p className="text-xs">
                      그리고 특이할만한 사실은 본작에서부터 나타난 Moog Synthesizer의 사용입니다. 그래서인지 사운드가 좀 더 예리해진 듯한 느낌을 줍니다.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">주요 트랙 분석</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <p><strong>The Clap</strong>: 하우의 뛰어난 어쿠스틱 기타 솜씨를 만끽할 수 있는 곡으로 본작의 조미료역할을 톡톡히 해내고 있습니다.</p>
                      </div>
                      <div>
                        <p><strong>Starship Trooper</strong> (3부작): 본작의 백미. 특히 후반부를 휘감는 케이의 웅장한 오르간연주와 하우의 블루스적인 감흥이 솟구치는 끈끈한 기타프레이즈는 압권을 이뤄내고 있습니다.</p>
                      </div>
                      <div>
                        <p><strong>I've Seen All Good People</strong>: 물방울이 튀는 듯한 하우의 깔끔하고 정교한 기타연주에 케이의 경쾌한 피아노 연주가 곁들여진 명곡</p>
                      </div>
                      <div>
                        <p><strong>Perpetual Change</strong>: 그들의 막강한 연주력이 빛나는 대미 장식곡. 제목이 말하듯 그들의 실험적인 시도는 영원하리라는 암시와 함께...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">아트록 팬들에게 드리는 조언</h4>
                    <p className="text-xs">
                      아트록 매니어들이 범하기 쉬운 가장 쉬운 오류중 하나가 구하기 어려운 음반수집에 몰두한체 구하기 쉽지만 훨씬 뛰어난 앨범을 지나쳐버린 다는 사실입니다. 
                      특히 가판대를 떠날 줄 모르는 본작을 접할 때마다 안타까움을 금할 수 없더군요. 그런 의미에서 모든 아트록 팬들에게 본작의 필청을 권해드리며 
                      아울러 초보자님들에겐 구하기 쉬운 음반부터 들으시길 적극 권해드립니다.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Fragile 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES Fragile (1971) - 4집</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">핵심 변화: 릭 웨이크먼 영입</h4>
                    <p className="text-xs">
                      본작은 Yes의 4집으로 71년에 공개된 작품집입니다. 본작에는 그간 중후한 오르간 사운드를 들려주던 토니 케이가 탈퇴하고 
                      새로운 키보디스트로 키스 에머슨에 필적할 만한 뛰어난 테크니션인 릭 웨이크만이 참여합니다. 
                      그래서인지 보다 키보드의 비중이 늘어난 느낌이며 특별히 "Cans and Brahms"라는 곡에서 릭 웨이크먼은 자신의 탁월한 키보드 솜씨를 과시하기도 합니다.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium mb-2">트랙리스트</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <p className="font-medium text-gray-700">Side 1</p>
                        <ol className="list-decimal list-inside text-xs space-y-1">
                          <li>Roundabout</li>
                          <li>Cans and Brahms (릭 웨이크먼 키보드 솔로)</li>
                          <li>We have heaven (존 앤더슨 보컬 솔로)</li>
                          <li>South side of the sky</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Side 2</p>
                        <ol className="list-decimal list-inside text-xs space-y-1">
                          <li>Five per cent for nothing (빌 브루포드 드럼 솔로)</li>
                          <li>Long distance runaround</li>
                          <li>Fish (크리스 스콰이어 베이스 솔로)</li>
                          <li>Mood for a day (스티브 하우 어쿠스틱 기타 솔로)</li>
                          <li>Heart of the sunrise</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">독특한 구성: 멤버별 솔로 코너</h4>
                    <p className="text-xs">
                      본작은 특이하게도 멤버 각자가 작곡하고 솔로로 직접 연주한 곡들을 한 곡씩 담고 있습니다. 
                      우선 앞서 이야기했던 Cans and Brahms는 릭 웨이크만이 키보드 솔로 연주를 Five per cent for nothing에서는 
                      브러포드의 퍼커션 솔로를 We have heaven 에서는 앤더슨의 보컬솔로를 들을 수 있으며 
                      The fish에서는 스콰이어의 베이스 솜씨를 들을 수 있고 Mood for a day에서는 정갈한 하우의 어쿠스틱 기타솜씨를 들을 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">명곡 분석: "Roundabout"</h4>
                    <p className="text-xs">
                      아름다운 하우의 어쿠스틱 기타의 음향의 울림으로 시작되는 Roundabout은 보다 진보한 그들의 연주와 작곡솜씨가 빛을 발하는 
                      그들의 초기 히트곡이며, 이 곡에서 그들의 트레이드 마크인 간결하면서도 치밀하게 짜여진 연주가 빛을 발하고 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">최고 명곡: "Heart of the Sunrise"</h4>
                    <p className="text-xs">
                      Heart of the sunrise는 필자가 생각하기로는 그들 최고의 명곡중 하나로 스콰이어와 브러포드로 연결되는 Yes의 리듬파트가 
                      얼마나 탄탄한가를 보여주는 좋은 곡이라고 생각합니다. 그리고 이 곡에서 보여준 멤버들의 혼연일체가 된 연주는 
                      E.L.P.에 필적할 만한 유일무이한 것이라고 볼 수 있으며 4인조라는 점에서는 오히려 앞선다고도 볼 수 있겠죠.
                    </p>
                  </div>
                  
                  <p>
                    본작에는 이러한 멤버들의 화려한 솔로 연주를 들을 수 있다는 잇점이외에도 명곡인 Roundabout 과 Heart of the sunrise 등이 
                    가세함으로써 그들 최고의 작품집이라는 찬사를 획득하게 됩니다. 그외에 South side of the sky 와 Long distance runaround등의 
                    곡들도 Yes의 뛰어난 역량을 살펴볼 수 있는 훌륭한 곡들이라고 할 수 있습니다.
                  </p>
                  
                  <p>
                    여러가지면에서 본작은 예스의 최전성기를 대표하는 뛰어난 명작이라고 할 만 하며 그러한 이유에서 Yes 를 처음으로 접하고자 하는 분들께 
                    꼭 권해드리고 싶은 작품집입니다.
                  </p>
                </div>
              </div>

              {/* Close to the Edge 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES Close to the Edge (1972)</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    73년에 Yes의 공식 3집으로 공개된 본작은 흔히 그들의 최고의 걸작으로 손꼽힙니다. 
                    그렇게 손꼽히는 이유는 여러가지가 있겠습니다만 무엇보다도 그들의 연주력이 정점에 이르렀다는 점과 
                    대곡위주의 뛰어난 곡 구성에서 그러한 이유를 찾아 볼 수 있겠지요.
                  </p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium mb-2">구성</p>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>앞면:</strong> Close to the Edge (4악장 구성의 교향곡 형식 타이틀곡)</li>
                      <li>• <strong>뒷면:</strong> And You & I (3파트 구성), Siberian Khatru</li>
                    </ul>
                  </div>
                  
                  <p>
                    본작에는 총 3곡의 대곡으로 구성되어 있는데 앞면에는 흡사 교향곡의 형식처럼 4악장으로 구성된 
                    타이틀곡 "Close to the edge"가 담겨져 있습니다. 이 곡의 압권은 릭 웨이크먼의 장엄한 오르간이 울려 퍼지는 
                    part 3 : I get up I get down 과 화려한 키보드 연주가 펼쳐지는 part 4 : Season of man 이라고 할 수 있는데 
                    전작들에 비하여 키보드의 비중이 늘어난 것을 확연히 느낄 수 있습니다.
                  </p>
                  
                  <p>
                    뒷면의 첫곡은 필자가 생각하기로 그들 최고의 명곡이라고 할 수 있는 "And You & I"가 담겨져 있습니다. 
                    총 3 파트로 구성되어 있는 이곡은 담백한 느낌을 주는 스티브 하우의 어쿠스틱 기타연주와 
                    장엄한 느낌을 주는 릭웨이크먼의 멜로트론이 대조를 이루며 감정의 굴곡을 이상적으로 그려내고 있습니다.
                  </p>
                </div>
              </div>

              {/* Tales from Topographic Oceans 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES Tales from Topographic Oceans (1973)</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    공식 5집이었던 'Close to the edge'를 발표한 예스는 곧이어 공식 6집으로 라이브 앨범인 'Yessongs'를 발표한다. 
                    예스의 최고의 명반중 하나로 꼽히는 이 라이브 앨범은 스튜디오 앨범에서는 찾아 볼수 없는 즉흥성마저 가미된 뛰어난 실황이었다.
                  </p>
                  
                  <p>
                    이듬해인 73년, 그들은 공식 7집으로 더블 앨범인 본작을 공개한다. 총 4파트로 구성된 이 작품집에서 그들은 
                    장대한 구성에 그들만의 뛰어난 연주력을 펼치지만 왠지 산만하다는 느낌을 감출수 없는 다소 장황한 작품집이었다.
                  </p>
                  
                  <p>
                    하지만 요소요소를 따로 놓고 보면 그들의 순발력과 실험성이 여전히 빛을 발하고 있음을 감지하게 된다. 
                    난해한 구성속에 간간히 펼쳐지는 하우의 어쿠스틱 기타연주가 구름속에 내비치는 햇살처럼 반가운 파트 3의 한 소절과 
                    고대의 제례의식을 연상케하는 파트 4의 중반부와 차분한 느낌의 후반부가 그것이다.
                  </p>
                  
                  <p>
                    그동안 발표되는 앨범마다 혁신적이고 새로운 구성을 선보였던 그들이었지만 본작을 기점으로 
                    다소 매너리즘에 빠진 듯한 인상을 지울 수가 없다. 대부분의 명그룹들이 그러하듯 그들에게도 
                    더 이상의 '진보'는 힘겨웠던 것 같다.
                  </p>
                </div>
              </div>

              {/* Relayer 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES Relayer (1974)</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    7집이 공개된 이후 갑자기 릭 웨이크먼이 탈퇴하여 한때 어려움에 처하기도 했으나 
                    곧 패트릭 모라즈라는 뛰어난 키보디스트가 참여하여 전화위복의 계기가 된 앨범이 그들의 공식 8집으로 공개된 본작이다.
                  </p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium mb-2">구성</p>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>A면:</strong> The Gates of Delirium + Soon</li>
                      <li>• <strong>B면:</strong> Sound Chaser, To Be Over</li>
                    </ul>
                  </div>
                  
                  <p>
                    A면에는 'The Gates of delirium' 한곡으로 매워져 있는데 현재 군대간 필자의 동생이 매우 좋아하던 곡이다. 
                    대곡임에도 불구하고 대단히 치밀한 연주를 들려주고 있어 과연 예스! 라는 감탄을 하게된다. 
                    특히 갈수록 향상되는 스티브 하우의 기타솜씨가 곳곳에서 빛을 발하고 있으며 
                    새로이 가입된 패트릭 모라즈도 세계적인 키보디스트답게 뛰어난 기량을 발휘하고 있다.
                  </p>
                  
                  <p>
                    B면으로 넘어가면 앞면과는 사뭇 다른 모습으로 다가오는데 첫곡 'Sound chaser'에서 느껴지는 압박감이 그것이다. 
                    이곡은 개인적인 취향으로 인하여 본작에서 필자가 가장 좋아하는 곡이며 예스의 곡중 가장 아끼는 곡이기도 하다. 
                    특히 전편을 압도하는 스티브 하우의 섬광같은 기타 애들립과 배경에 깔린 패트릭 모라즈의 신서사이저음, 
                    그리고 변화무쌍한 아이템을 선보이고 있는 브러포드의 드러밍은 진보음악의 극상을 제시하고 있다고 해도 과언이 아니다.
                  </p>
                </div>
              </div>

              {/* Going for the One 리뷰 */}
              <div className="bg-white p-6 rounded border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-800 mb-4">YES Going for the One (1977)</h3>
                <div className="space-y-4 text-sm">
                  <p>
                    Yes의 공식 9집으로 공개된 본작은 1977년에 공개되었다. 잠시 탈퇴했었던 릭 웨이크먼이 다시 재가입하고 
                    그동안 멋진 드러밍을 선보였던 빌 브러포드가 탈퇴하여 알란 화이트의 입지가 커졌다. 
                    알란 화이트는 에릭 크랩튼, 조지 해리슨과 같이 활동하던 꽤 이름있는 뮤지션이었다.
                  </p>
                  
                  <p>
                    2명의 멤버가 교체되었으니 사운드에 변화가 온 것은 당연한 일이었다. 8집에서 선보였던 멤버들의 혼연일체된 연주보다는 
                    그동안 솔로 앨범등을 발표하며 자신의 진가를 마음껏 드러내 왔던 릭 웨이크먼의 키보드 플레이가 전편을 장악하기 시작했던 것이다.
                  </p>
                  
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-medium mb-2">주요 트랙</p>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>Wonderous Stories</strong>: 유려한 신디사이저음이 핵심, 환상적인 가사</li>
                      <li>• <strong>Turn of the Century</strong>: 신디사이저와 스테인웨이 피아노 번갈아 연주</li>
                      <li>• <strong>Going for the One</strong>: 로커빌리 스타일 기타로 시작하는 의외의 곡</li>
                      <li>• <strong>Awaken</strong>: 릭 웨이크먼의 피아노 연주로 시작되는 대곡</li>
                    </ul>
                  </div>
                  
                  <p>
                    이 앨범에서 가장 대중적인 인기를 누렸던 'Wonderous stories'가 그 대표적인 예이다. 
                    유려한 신디사이저음이 사운드의 핵심이 되고 있다. 환상적인 가사와 더불어 존 앤더슨의 목소리가 
                    신디사이저음과 절묘하게 매치되어 더욱 Wonderous한 분위기를 자아내고 있다.
                  </p>
                  
                  <p>
                    본작이 그들의 전성기에 발표한 작품집들에 비해 사운드면에서는 다소 불만족스러운 점들이 눈에 띄는 것도 사실이지만 
                    가사에서는 여전히 철학적인 성찰을 담은 심오한 내용을 다루고 있음에 주목할 필요가 있겠다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 유영재의 Fragile 완전 리뷰 */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                유영재
              </div>
            </div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">YES Fragile - 개인적 회고와 90125 비교 (1994.11)</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                이번엔 Yes의 앨범을 들고 좀 떠벌려 볼까나... 그룹 Yes...! 분명히 프로그레시브 록계에 있어서는 빼놓을 수 없는 거물 그룹이다. 
                흔히 프로그레시브 5대 명그룹 하면 Pink Floyd, King Crimson, ELP, Genesis, 그리고 Yes를 거론하지 않던 가...? 
                사실 5대가 어쩌구 6대가 어쩌구 양대...어쩌구 하는 말은 언제 누구로부터 시작된 말인지는 잘 모르겠지만 
                암튼 흔히 다섯그룹을 꼽으라면 위의 그룹들을 꼽게 된다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">프로그레시브 5대 그룹과의 첫 만남</h3>
                <p className="text-sm">
                  사실 내가 위의 다섯 그룹을 처음 접하게 된 것은 거의 같은 시기였는데, 핑크 플로이드를 제외한 나머지 네 그룹은 
                  프로그레시브 그룹으로서가 아닌 팝그룹으로서 처음 접하게 되었다. 킹크림슨의 경우 'Epitaph'는 그 당시에도 라디오 방송을 자주 탔기에 
                  그들의 음악을 알고 있었지만 난 그때 이 곡이 프로그레시브 록인줄도 몰랐다. 더군다나 난 당시 'Come Dancing'이란 댄스뮤직(?)으로 
                  재기한 킹크스와 이 킹 크림슨이 누가누군지 막 헛갈렸을 때이니깐...
                </p>
                <p className="text-sm mt-2">
                  ELP의 곡 'C'est La Vie' 역시 라디오 방송에 자주 나오는 올디스 벗 구디스 였다. Genesis는 잡지 등을 통해 이름만 알고 있었는 데 
                  10년전 봄인가...쯤에 필 콜린스가 리드 보컬을 맡은 'That's All'이란 곡이 히트를 하면서 처음 접하게 되었다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">90125와의 첫 만남</h3>
                <p className="text-sm">
                  Yes의 경우도 마찬가지였다. 이름만 알고 있던 그룹 Yes를 처음 접하게 된건 다름 아닌 ' Owner Of Lonely Heart '을 통해서 였다. 
                  그 때 한창 Paul McCartney와 Michael Jackson 이 듀엣으로 부른 ' Say Say Say '란 곡이 엄청난 인기를 끌면서 
                  빌보드 차트 1위에서 내려올 줄을 모르고 있었는데 어디서 이름도 유치한 Yes라는 그룹이 엉금엉금 차트를 기어 올라오더니 
                  급기야는 6주 연속 1위를 차지하고 있던 폴 매카트니와 마이클 잭슨의 곡을 끌어내리고 1위에 올라선 것이었다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">당시 라디오 DJ들의 반응</h3>
                <div className="text-sm space-y-2">
                  <p>"이야~~ 오래 살고 볼 일 입니다. 세상에 그룹 Yes가 설마 빌보드 싱글 차트 1위에 오르리라고 그 누가 짐작이나 했겠습니까...?"</p>
                  <p>"Yes가 차트 1위에도 다 올라보는군요... 그들의 팬들은 무척 좋아할 일이지만 과연 기존의 팬들이 이번 그들의 사운드를 좋아할 것인지는 의심스럽군요...음악이 너무 달라졌죠...?"</p>
                  <p>"이번 Yes의 작품은 상업적으로 성공을 거두며 인기를 얻고 있지만 과거 그들의 팬들로부터는 엄청난 실망감을 안겨다 주었습니다. 아마 이번 Yes의 음악적 변신은 그룹 Asia의 성공에 자극을 받은게 아닐까요?"</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">개인적인 Jon Anderson에 대한 솔직한 의견</h3>
                <p className="text-sm">
                  암튼 매스컴이 떠들썩했었다. 그런데 매스컴에서 사운드가 변했다 어쨌다 떠들어대는데 난 이들이 어떻게 사운드가 변한건지 
                  예전에 대체 어떤 음악을 들려줬었는데 그랬는지 알지도 못했고 알려고 하지도 않았었다. 그냥 그러려니... 
                  거기다가 난 이 곡이 너무나 싫었다. 특히 신경질적으로 부르는 보컬리스트의 목소리가 내 귀에 무척 거슬렸다.
                </p>
                <p className="text-sm mt-2">
                  그런데 지금도 나는 존 앤더슨을 별로 좋아하지 않는다. 평론가들은 '천상의 목소리'라는 둥 비행기를 막 태우고 있지만 
                  난 그의 목소리를 단지 '천하의 목소리'에 불과하다고 생각된다. 특히 Yes에서의 그의 보컬은 그저 그런데...남들이 좋다! 좋다!하니까 
                  오히려 더 거부감이 생길 때도 있다. 차라리 Yes 재적 당시 보다 Vangelis와 함께한 작품에서 그의 보컬은 더 들을만한 것 같다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">Fragile의 역사적 의미와 상업적 성공</h3>
                <p className="text-sm">
                  사운드가 변모하기 이전의 작품으로는 국내에 유일하게 라이센스 음반으로 선보이기도 했던 그들의 4집 [ Fragile ]은 
                  Yes의 최강의 라인업인 2기 멤버 ( 존 앤더슨-빌 브루포드- 스티브 하우-크리스 스콰이어-릭 웨이크먼 )의 진용을 갖춘 후 
                  내놓은 첫작품인 동시에, 그들의 음악적 전성기를 알리는 첫 신호탄이기도 했다. 아울러 유명한 재킷 일러스트레이터인 Roger Dean이 
                  이 앨범의 커버를 담당해주기도 했다. (하지만 난 이 앨범 커버도 그저 그렇다...)
                </p>
                <p className="text-sm mt-2">
                  [ Fragile ]은 음악적으로 뿐만 아니라 상업적으로도 큰 성공을 안겨다 주었는데, 앨범은 전미 차트 당당 4위에 올라섰고 
                  ' Roundabout '을 싱글로 커트시켜 차트 13위까지 랭크시키는 성과를 이루어냈다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">멤버별 솔로 트랙 상세 분석</h3>
                <p className="text-sm">
                  또한 인상적인 것은 이 앨범에는 특이하게 각 멤버의 기량이 발휘된 곡을 한 곡씩 수록하고 있다는 점이다. 
                  릭 웨이크먼의 건반 독주인 ' Cans And Brahms '는 브람스의 교향곡을 편곡한 곡이며 존 앤더슨의 ' We Have Heaven ' 은 
                  그의 목소리를 다양하게 믹스한 곡으로서 별다른 특징은 없는 짤막한 곡이다.
                </p>
                <p className="text-sm mt-2">
                  그리고 릭 웨이크먼의 익살맞은 건반 연주를 백으로 빌 브루포드의 드럼 연타가 주를 이루는 ' Five Percent For Nothing '과 
                  스티브 하우의 상당히 듣기 좋은 어쿠스틱 기타 연주곡 ' Mood For A Day '를 비롯하여 크리스 스콰이어의 ' The Fish '등이 실려있다. 
                  ' The Fish '는 단순한 리듬 전개 속에서 진동하는 크리스 스콰이어의 뛰어난 베이스 솜씨를 들을 수 있는 곡인데, 
                  곡분위기 때문인지 단순한 구성임에도 불구하고 듣는 이로 하여금 묘한 신비감에 사로잡히게 하는 마력을 지닌 곡이다.
                </p>
              </div>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">앨범의 노른자: "Roundabout"과 "Heart Of The Sunrise"</h3>
                <p className="text-sm">
                  하지만 무엇보다도 이 앨범의 노른자는 앨범의 시작과 끝을 장식하는 두곡의 중편 ' Roundabout '과 ' Heart Of The Sunrise '라고 할 수 있을 것이다. 
                  이 두곡만으로도 이 앨범의 가치는 충분하다고 생각되는데, 앨범의 포문을 여는 곡이자 그들의 가장 대표적인 곡인 ' Roundabout '은 
                  경쾌한 리듬을 바탕으로 한 역동적인 전개 방식이 프로그레시브 록 팬이 아니더라도 쉽게 친근감을 느낄 수 있게 해준다.
                </p>
                <p className="text-sm mt-2">
                  특히 이 곡에서 그들의 트레이드 마크인 간결하면서도 치밀하게 짜여진 연주가 빛을 발하고 있는데, 
                  그 중에서도 릭 웨이크먼과 크리스 스콰이어의 기량이 발군의 실력을 보이고 있다. 
                  반면, 앨범의 마지막에 담겨있는 ' Heart Of The Sunrise '는 한마디로 지극히 Progressive한 작품이다.
                </p>
                <p className="text-sm mt-2">
                  특히 5인의 멤버가 창출해내는 한치의 오차도 허용하지 않는 섬세한 연주는 역시 고개를 절로 끄덕이게 만든다. 
                  이색적으로 릭 웨이크먼의 멜로트론 음향도 들을 수 있기도 한 곡으로서, 전광석화와 같이 펼쳐지는 기타와 드럼과 베이스의 합주는 
                  Yes 사운드의 결정체를 보여주는 듯 하다. 특히 사운드의 강약의 유기적인 결합으로서 듣는 이로 하여금 
                  10여분에 이르는 시간이 어떻게 지나갔는지도 모르게 만든다.
                </p>
              </div>

              <p>
                사실 위에서 언급한 다섯 그룹중에서 전체 멤버의 연주력을 따지고 들자면 2기 Yes를 능가하는 팀은 없다고 본다. 
                5인의 멤버가 모두 각부문에서 내노라하는 거물들 아닌가...! 단 한명도 실력과 명성이 뒤쳐지지 않는 명연주자들이 모여서 
                이루어낸 명음반이 바로 이 [ Fragile ]이고, 그 중에서도 단연 으뜸인 명연이 ' Heart Of The Sunrise '이다. 
                그리고 이러한 명연은 다음 앨범인 [ Close To The Edge ]에 이르러 절정을 이루게 된다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">국내 발매 정보</h3>
                <p className="text-sm">
                  참고로 Yes의 본 [ Fragile ] 앨범은 국내에서는 예전에 오아시스 레코드사에서 발매되었다가 얼마전에 WEA에서 다시 재발매 되었다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <a 
              href="/review/y" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Y 밴드 목록으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}