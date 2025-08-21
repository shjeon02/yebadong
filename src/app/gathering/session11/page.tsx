import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제11회 YBD Rush 특집 & Video 감상회 - 1996년 9월 29일 | Yebadong',
  description: '예바동 제11회 Rush 특집, Rock Musicals (Freudiana, Jesus Christ Superstar), Video 감상회 (1996년 9월 29일, 홍대앞 ohlala)',
};

export default function Session11Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0000aa] mb-4">
            제11회 YEBADONG Special Show of Prog Rock
          </h1>
          <p className="text-lg text-[#0000aa] font-semibold">1996년 9월 29일 일요일 늦은 2시</p>
          <p className="text-base text-[#0000aa]">홍대앞 ohlala</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0000aa] mb-4">📺 감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 9월 29일 일요일 늦은 2시</p>
                  <p><strong>장소:</strong> 홍대앞 ohlala</p>
                </div>
                <div className="space-y-2">
                  <p><strong>주제:</strong> Freudiana, Rush, and IQ, Yes, Roger Waters Video 감상</p>
                  <p><strong>특징:</strong> 비디오 감상회 + 록 뮤지컬 특집</p>
                </div>
              </div>
            </div>

            {/* Part 1: Prog Rock Videos */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                📺 Prog Rock Vids Playlist
              </h2>
              <div className="text-center mb-6">
                <p className="text-lg text-[#0000aa] font-medium">발표자: Fish, 신인철 (icshin@bioneer.kaist.ac.kr)</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-300">
                  <h3 className="font-bold text-red-700 text-lg mb-2">1. What god wants (MTV video clip) / What god wants (with Jeff Beck)</h3>
                  <p className="text-sm text-red-600">- Roger Waters</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold text-blue-700 text-lg mb-2">2. A Little Nonsense</h3>
                  <p className="text-sm text-blue-600">- Echolyn</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold text-green-700 text-lg mb-2">3. Headlong</h3>
                  <p className="text-sm text-green-600">- IQ</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-300">
                  <h3 className="font-bold text-purple-700 text-lg mb-2">4. Ritual (or The Gates of Delirium ?)</h3>
                  <p className="text-sm text-purple-600">- Yes</p>
                </div>
              </div>
            </div>

            {/* Part 2: Rush Special */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                🎸 R U S H Special
              </h2>
              
              <div className="text-center mb-8">
                <p className="text-lg text-[#0000aa] font-medium">
                  발표자: 전승훈 (shjeon@cclab.kaist.ac.kr, 
                  <a href="http://cclab.kaist.ac.kr/~shjeon" className="text-blue-600 underline">http://cclab.kaist.ac.kr/~shjeon</a>)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  참조: <a href="http://shrynx.umd.edu/rush.html" className="text-blue-600 underline">http://shrynx.umd.edu/rush.html</a>
                </p>
              </div>

              {/* Rush Discography */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-[#0000aa] mb-4">💿 Discography</h3>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <p>1. <strong>Rush</strong> (74)</p>
                    <p>2. <strong>Fly By Night</strong> (75)</p>
                    <p>3. <strong>Caress of Steel</strong> (76)</p>
                    <p>4. <strong>2112</strong> (76)</p>
                    <p>5. <strong>All the World's a Stage</strong> (76)</p>
                    <p>6. <strong>A Farewell to Kings</strong> (77)</p>
                    <p>7. <strong>Hemispheres</strong> (78)</p>
                    <p>8. <strong>Permanent Waves</strong> (80)</p>
                    <p>9. <strong>Moving Pictures</strong> (81)</p>
                    <p>10. <strong>Exit: Stage Left</strong> (81)</p>
                  </div>
                  <div className="space-y-1">
                    <p>11. <strong>Signals</strong> (82)</p>
                    <p>12. <strong>Grace Under Pressure</strong> (84)</p>
                    <p>13. <strong>Power Windows</strong> (85)</p>
                    <p>14. <strong>Hold Your Fire</strong> (87)</p>
                    <p>15. <strong>A Show of Hands</strong> (89)</p>
                    <p>16. <strong>Presto</strong> (89)</p>
                    <p>17. <strong>Chronicles</strong></p>
                    <p>18. <strong>Roll the Bones</strong> (91)</p>
                    <p>19. <strong>Counterparts</strong> (93)</p>
                    <p>20. <strong>Test for Echo</strong> (96)</p>
                  </div>
                </div>
              </div>

              {/* Rush Playlist */}
              <div className="mb-8 p-6 bg-red-50 rounded-lg border border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-4">🎵 Playlist</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p>• <strong>Yyz</strong> (4:24) - Moving Pictures</p>
                    <p>• <strong>What You're Doing</strong> (4:22) - Rush</p>
                    <p>• <strong>Leave That Thing Alone</strong> (4:06) - Counterparts</p>
                    <p>• <strong>The Spirit of Radio</strong> (4:57) - Permanent Waves</p>
                    <p>• <strong>Bastille Day</strong> (4:37) - Caress of Steel</p>
                    <p>• <strong>Roll the Bones</strong> (4:30) - Roll the Bones</p>
                  </div>
                  <div className="space-y-2">
                    <p>• <strong>Red Barchetta</strong> (6:48) - Exit...Stage Left</p>
                    <p>• <strong>By-Tor and the Snow Dog</strong> (8:37) - Fly by Night</p>
                    <p>• <strong>Losing it</strong> (4:51) - Signal</p>
                    <p>• <strong>Anthem</strong> (4:57) - All the World's a Stage</p>
                    <p>• <strong>Cygnus X-1</strong> (10:25) - A Farewell to Kings</p>
                  </div>
                </div>
              </div>

              {/* Rush History */}
              <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-300">
                <h3 className="text-xl font-bold text-blue-700 mb-4">📚 Rush 역사</h3>
                <div className="text-sm leading-relaxed space-y-4">
                  <p>
                    <strong>초기 (1968-1974):</strong> Rush는 1968년 8월 guitar에 Alex Lifeson(실명:Alex Zivojinovic), 
                    drum에 John Rutsey, bass,vocal에 Jeff Jones로 시작했습니다. 처음에는 "Coff-In"이라는 커피샵에서 연주를 했고, 
                    교회의 지하실을 하루에 25$씩 빌려서 연습을 했습니다. John의 형이 그들의 이름을 Rush로 지어주었고, 
                    곧 vocal, bass는 Geddy Lee(실명:Gary Lee Weinrib)으로 교체되었습니다.
                  </p>
                  <p>
                    <strong>발전기 (1974-1982):</strong> 1974년에 그들의 최초의 앨범인 _Rush_를 내놓고, 
                    drummer인 John은 팀원간의 불화로 팀을 떠나게 됩니다. 그 뒤를 lyricist이면서 연주가인 Neil Peart가 가입합니다. 
                    Rush는 75년도에 Terry Brown과 손을 잡고, _Fly By Night_를 내놓습니다. 이 앨범이 platinum을 기록하면서, 
                    Kiss, Uriah Heep, Aerosmith 등의 당시 유명밴드의 opening band로 활약하기 시작합니다.
                  </p>
                  <p>
                    <strong>절정기 (1976-1981):</strong> _2112_에서는 그들의 symbol인 Man and Star를 사용하기 시작하고, 
                    본 궤도에 오릅니다. 이어서 발표되는 최초의 라이브 앨범인 _All the World's a Stage_, _A Farewell to Kings_, 
                    Concept 앨범인 _Hemispheres_, _Permanent Waves_가 연속적으로 platinum을 기록하고 81년도에 내놓은 
                    _Moving Pictures_가 multi-platinum을 기록하면서 절정기를 맞습니다.
                  </p>
                  <p>
                    <strong>변화기 (1982-현재):</strong> 82년을 기점으로 그들은 자신들의 음악 형태에 변화를 가져옵니다. 
                    _Signals_를 내놓게 되면서 그들이 자랑하는 power있는 연주, 보컬, 곡의 구성, 가사 등을 버리고, 
                    대중과 더욱 가깝게 다가옵니다. 그러나 82년 이후로 앨범 판매도 줄어들고, prog rock fan에게 Rush의 비중도 
                    그만큼 줄어들게 됩니다. 96년 9월 10일에 _Test For Echo_를 내놓고, 꾸준한 활동을 하고 있는 Rush는 
                    20장의 앨범을 내놓은 살아있는 rock의 전설중 하나일 것입니다.
                  </p>
                </div>
              </div>

              {/* Geddy Lee Interview */}
              <div className="mb-8 p-6 bg-yellow-50 rounded-lg border border-yellow-300">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">🎤 Geddy Lee Interview (변화에 대한 질문)</h3>
                <div className="text-xs leading-relaxed italic text-gray-700">
                  <p className="mb-4">
                    <strong>GL:</strong> "Yeah that's true. You want to feel the freedom of being able to do what you want. 
                    A complaint that I get a lot from fans is: <strong>'Why don't you do this record again... 
                    how come you don't sound more like Moving Pictures or 2112, or how come you don't play like Hemispheres any more??'</strong>
                  </p>
                  <p className="mb-4">
                    It's very hard to explain that thing - you kind of have to be making records or writing music for a long time to understand it. 
                    It just doesn't come out. You've got other things that interest you and you want to keep challenging yourself, 
                    but it's not this big decision to keep challenging yourself. It's a very natural thing..."
                  </p>
                  <p className="mb-4">
                    "...you cannot stay a band for very long if you're just trying to capitalize on some successful moment you've had 
                    in your past and build your future on your past. It's all stepping stones. I still like to think that we haven't 
                    made the best record we can make. I still like to think that we're looking for that real fabulous combination 
                    of performance and writing and feeling that will make a time less record. But I don't think you can do that 
                    by looking over your shoulder."
                  </p>
                </div>
              </div>
            </div>

            {/* Part 3: Rock Musicals */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                🎭 My Favorite - Rock Musicals
              </h2>
              
              <div className="text-center mb-8">
                <p className="text-lg text-[#0000aa] font-medium">발표자: 김이영 (ardor@sol.nuri.net)</p>
              </div>

              {/* Freudiana */}
              <div className="mb-12 border border-purple-400 rounded-lg p-6 bg-purple-50">
                <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                  1. Freudiana
                </h3>
                <p className="text-center text-purple-600 mb-6">Music by Eric Woolfson / Produced by Alan Parsons</p>
                
                <div className="space-y-6">
                  {/* Freudiana Introduction */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-3">🎭 작품 소개</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        1991년 빈의 the Theatre am der Wien에서 초연된 작품입니다. 알란파슨스... 설명할 필요 없죠? 
                        (더 잘 아는 분들이 많으리라 봅니다. 제가 설명을 들어야할듯..:)
                      </p>
                      <p>
                        내용이 아주 흥미롭습니다. 프로이디아나라는 제목으로 짐작하셨겠지만 프로이드의 심리학적 접근이라 할 수 있지만 
                        한마디로 단정짓기는 어렵다고 봅니다. Eric Woolfson의 새로운 시각이 있는 것이고 가미된 재미도 있을 것이기 때문이죠.
                      </p>
                      <p>
                        뮤지컬을 좋아하는 사람이나 알란파슨스의 팬들도 이 프로이디아나에 대해서는 잘 모르는데.. 
                        저도 이 뮤지컬은 예바동 덕분에 CD를 구할 수 있었기 때문에 더욱 애착이 갑니다.
                      </p>
                    </div>
                  </div>

                  {/* Freudiana Story */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-3">📖 스토리</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        <strong>주인공 에릭:</strong> 여기서 주인공인 에릭은 작곡가를 포함한 인류의 모든 남성을 상징한다고 합니다.
                      </p>
                      <p>
                        <strong>배경:</strong> 장소는 프로이드의 박물관. 생전에 그가 쓰던 집기 도구나 소파, 책등이 전시된 곳입니다. 
                        원래의 그것과 똑같이 만들어 놓은 것이래요. (CD속지에 사진이 있죠)
                      </p>
                      <p>
                        <strong>전개:</strong> 한 무리의 미국 관람객들이 들어옵니다. 그들중에는 소심한 성격의 에릭과 아름다운 처녀 도라(Dora), 
                        그리고 과잉보호를 하는 도라의 아버지가 있었습니다. 소심한 에릭은 도라에게 말조차 제대로 건네지 못하죠..... 
                        여기저기 .. 시끌시끌하다가... 모두 박물관을 나가고, 불이 꺼지며, 문을 잠금는데.... 
                        한쪽의 문이 빠끔히 열리며 나타난 에릭... 도라를 몰래 만나려다 그만 일행을 놓쳐 갇힌것이예요.
                      </p>
                      <p>
                        <strong>꿈의 시작:</strong> 내일 아침이나 되야 사람들이 다시 올테고..에릭은 할 수 없이 프로이드의 소파에 누워 잠을 청해봅니다. 
                        잠이 들면서 무대가 한 조각씩 쪼개져 하늘로 올라갑니다. 실로 장관이라더군요. :) 
                        그의 꿈속으로 이제 여행을 떠나게 된 거예요.
                      </p>
                    </div>
                  </div>

                  {/* Freudiana Tracklist */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-3">🎵 주요 트랙</h4>
                    <div className="space-y-2 text-sm">
                      <p>• <strong>The Nirvana Principle</strong> (3:45)</p>
                      <p>• <strong>Freudiana</strong> (6:21)</p>
                      <p>• <strong>I am a Mirror</strong> (4:07) - The function of the psychoanalyst</p>
                      <p>• <strong>Little Hans</strong></p>
                      <p>• <strong>Far Away From Home</strong> (3:12)</p>
                      <p>• <strong>Beyond the Pleasure Principle</strong> (3:14) - Music by Alan Parsons</p>
                      <p>• <strong>Don't Let the Moment Pass</strong> (3:41) - A picture of romantic idealism</p>
                    </div>
                    <p className="text-xs text-purple-600 mt-4">
                      첫곡은 프로이디아나의 Instrumental로 동명제목의 서곡입니다. 주인공 에릭의 꿈 속으로 빨려들어가는 장면의 음악이죠.
                    </p>
                  </div>

                  {/* Don't Let the Moment Pass Analysis */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-purple-700 mb-3">💫 "Don't Let the Moment Pass" 해설</h4>
                    <div className="text-sm leading-relaxed space-y-3 italic">
                      <p>
                        "삶을 살다 보면 아름다운 어떤 순간을 지나가게 되지요.. 사랑도 그렇게 우리의 주위를 스치듯 지나갑니다.. 
                        그렇지만 그 순간이 아무리 빠르게 당신을 지나가더라도 .. 결코 그저 가만히 보내지 마세요..."
                      </p>
                      <p>
                        "이 밤 저 하늘의 오리온 성좌가 흐르듯 지나가는 것처럼.. 당신의 사랑도 그렇게 빠르게 스쳐가려 할 거예요... 
                        만약 그 사랑이 천국같이 느껴진다면 그저 가만히 보내지는 마세요.."
                      </p>
                      <p className="text-purple-600 font-medium">
                        이 노래는 에릭의 마음속에 있는 도라가 부르는 노래예요. 딱 직설적으로 이야기하자면 마음에 뭐 숨기지 말고 
                        솔직하게 표현하라는 (특히 사랑에 관해)뭐 그런 이야기죠. 에릭은 도라를 사랑하고 있지만 그의 성격때문에 아무말도 못하고 있었거든요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jesus Christ Superstar */}
              <div className="mb-8 border border-orange-400 rounded-lg p-6 bg-orange-50">
                <h3 className="text-2xl font-bold text-orange-700 mb-4 text-center">
                  2. Jesus Christ Superstar
                </h3>
                <p className="text-center text-orange-600 mb-6">Music by Andrew Lloyd Webber</p>
                <p className="text-center text-sm text-orange-600 mb-6">
                  설명이 필요치 않은 뮤지컬이라 생각됩니다. :) (음악을 들으시는동안 지루하지마십사 하는 의미에서 가사를 다 올립니다. :P)
                </p>

                <div className="space-y-8">
                  
                  {/* Gethsemane */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-orange-700 mb-3">🙏 Gethsemane</h4>
                    <p className="text-sm text-orange-600 mb-4">
                      예수가 마지막 만찬을 끝내고 모두 잠들어 있을때 겟세마네 동산에서 기도를 합니다.. 
                      개인적으로 JCS 중 가장 좋아하는 노래입니다. 물론 I don't know how to love him과 함께요 :)
                    </p>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <h5 className="font-bold text-orange-600 mb-2">IN THE GARDEN OF GETHSEMANE</h5>
                      <div className="text-xs italic space-y-2">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold">English:</p>
                            <p>"I only want to say / If there is a way / Take this cup away from me for / I don't want to taste it's poison / Feel it burn me, I have changed I'm not as sure / As when we started..."</p>
                          </div>
                          <div>
                            <p className="font-semibold">한국어 해석:</p>
                            <p>"하나님......내가 당신께 드리고 싶은 말씀은.. 여기..만약 당신이 허락만 하신다면 이 독배를 거두어주소서.. 난 우리가 이 일을 처음 시작했던 난 그때보다도 지금 난 확신이 없습니다.."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-orange-600 mt-4">
                      그의 이 지나치게 인간다운 절규는 그러나 많은 기독교인들에게 비난의 원성을 사기도 했지만 또한 많은 박수를 받기도 했죠.
                    </p>
                  </div>

                  {/* Judas's Death */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-orange-700 mb-3">💔 Judas's Death</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        예수를 배신하고 또 예수가 거의 죽음을 당하게 되자 유다는 죄책감에 시달립니다. 
                        율법학자들에게 돈을 되돌려주며 예수를 풀어달라고 하지만 아무도 그의 말에 귀기울리지 않죠. 
                        유다는 홀로 남습니다. 그리고 노래부르죠.
                      </p>
                      
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-xs italic space-y-2">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="font-semibold">English:</p>
                              <p>"I don't know how to love him / I don't know why he moves me / He's a man - He's just a man / He's not a king - he's just the same / As any one I know / He scares me so..."</p>
                            </div>
                            <div>
                              <p className="font-semibold">한국어 해석:</p>
                              <p>"난 어떻게 그를 사랑해야 할지 몰랐어 / 왜 나로하여금 그를 배신하게 했는지도 몰라 / 그는 그저 한 사람일 뿐 - 나와 똑 같은 평범한 인간일뿐인데 / 왕도 아무것도 아닌데.. / 내가 아는 그저 그런 사람일 뿐인데.. / 왜 그는 나를 이렇게 두렵게 만드는 걸까?..."</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-orange-600 text-xs">
                        막달라 마리아의 I don't know how to love him과 같은 멜로디지만 너무나도 다른 노래입니다. 느낌이 아주 강렬하지요..
                      </p>
                    </div>
                  </div>

                  {/* John 19:41 */}
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="text-xl font-bold text-orange-700 mb-3">✟ John 19:41</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        JCS의 에필로그 곡입니다. 우리나라에서는 다르지만 원래 외국의 무대에서는 예수의 부활이 나타나질 않죠. 
                        그저 허탈한 사람들의 머리위로 십자가만이 덩그러니 있습니다. 바로 당신이 그를 죽였다는 상징적 의미죠.
                      </p>
                      <p className="text-orange-600 font-medium">
                        과거의 그 유태인들 뿐만이 아니라 현대의 당신이 바로 이 영혼의 살인자이다 라는 강렬한 메시지인 것입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Summary */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold text-yellow-700 mb-4 text-center">📊 Session 11의 특별함</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">📺 Video 감상회</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Roger Waters MTV</strong>: What god wants</li>
                    <li>• <strong>Echolyn</strong>: A Little Nonsense</li>
                    <li>• <strong>IQ</strong>: Headlong</li>
                    <li>• <strong>Yes</strong>: Ritual/Gates of Delirium</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🎸 Rush 대특집</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>완전 디스코그래피</strong>: 20장 전 앨범</li>
                    <li>• <strong>역사적 고찰</strong>: 1968-1996 변천사</li>
                    <li>• <strong>Geddy Lee 인터뷰</strong>: 음악적 변화 철학</li>
                    <li>• <strong>11곡 플레이리스트</strong>: 대표작 모음</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🎭 Rock Musicals</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Freudiana</strong>: Alan Parsons 제작</li>
                    <li>• <strong>심리학적 접근</strong>: 프로이드 이론</li>
                    <li>• <strong>JCS</strong>: Andrew Lloyd Webber</li>
                    <li>• <strong>가사 완전 해석</strong>: 영어/한국어</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">🎬 1996년 11회 감상회의 의의</h3>
                <p className="text-sm text-blue-600 leading-relaxed">
                  Session 11은 예바동 역사상 최초의 본격적인 비디오 감상회였습니다. MTV 시대의 프로그레시브 록 비디오 클립부터 
                  시작하여 Rush의 완전한 역사적 고찰, 그리고 록 뮤지컬이라는 새로운 장르까지 다룬 혁신적인 감상회였습니다. 
                  특히 전승훈의 Rush 웹사이트 참조는 인터넷 시대 정보 활용의 선구적 사례이며, 김이영의 뮤지컬 가사 완전 번역은 
                  단순한 음악 감상을 넘어선 문화적 해석의 깊이를 보여주었습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <Link href="/gathering" className="text-[#0000aa] hover:text-[#0000aa]/80 underline">
                ← 감상회 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}