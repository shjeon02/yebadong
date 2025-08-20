import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제21회 YBD 멀티 발표자 취향 특집 - 1999년 8월 28일 | Yebadong',
  description: '예바동 제21회 멀티 발표자 취향 특집 (1999년 8월 28일, 홍대앞 CARS)',
};

export default function Session21Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            제21회 YBD Special Show of ProgRock Music
          </h1>
          <h2 className="text-2xl text-yellow-400 mb-2">멀티 발표자 취향 특집</h2>
          <p className="text-lg text-cyan-300">1999년 8월 28일 (토) 마지막주 오후 2:30-5:30</p>
          <p className="text-lg text-cyan-300">홍대앞 "CARS" (T.326-0791)</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8">
            
            {/* Event Summary by Longdal */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg border border-cyan-500">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                🎼 전승훈(Longdal)의 감상회 후기
              </h2>
              <div className="space-y-4 text-cyan-100 leading-relaxed">
                <p>
                  정말 많은 분들이 참석해주셨어요. 고맙습니다. 그리고 예정대로
                  준비해주신 음악들을 차분히 들을 수 있었구요. 처음 뵌 이장원님의 싸이키델릭 음악이
                  참 인상적이었습니다. 단식예술가로 한국의 네오 프로그레시브 음악의
                  기수로 나선 이창식님도 반가왔습니다. 김태우님과 박종찬님의 좋아하시는
                  곡도 역시 좋았습니다.
                </p>
                <p>
                  안병욱님과 Fish님의 음악은 역시 예바동만이 가지는 특징이죠.
                  항상 새로운 음악을 찾아듣는 열정과 재미를 느낄 수 있는 감상회였습니다.
                </p>
                <p>
                  다음에는 이창식님 앨범에 대한 칭찬과 비판. 그리고, 사이버 감상회에 대해 많은 포스팅이
                  있을 것 같구요.
                </p>
                <p>
                  감상회를 진행해주신 분들께 다시 한번 감사드립니다.
                </p>
                <div className="text-right mt-4">
                  <p className="text-cyan-400 font-bold">전승훈(Longdal)</p>
                </div>
              </div>
            </div>

            {/* Attendees */}
            <div className="mb-12 p-6 bg-gray-800 rounded-lg border border-cyan-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">참석자 명단</h3>
              <div className="text-center text-sm text-cyan-200 space-y-2">
                <p>
                  이지수, 안병욱(brave), 김태우, 윤미정, 전승훈(Longdal), 이창식,
                </p>
                <p>
                  박종찬, 신인철(Fish), 김민지, 김남웅(Neo-Zao), 이강영(Lennon),
                </p>
                <p>
                  이규희(damian), 김선영, 김중화(jjoong), 최정욱, 이유진, 강영민
                </p>
                <p>
                  이장원(ljw1030)
                </p>
              </div>
            </div>

            {/* Presenter Sections */}
            <div className="space-y-12">
              
              {/* #1. 김태우 - Favorites */}
              <div className="border border-blue-400 rounded-lg p-6 bg-blue-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
                  #1. 김태우(woo8954) - Favorites
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-3">🎹 Genesis from Selling England 1973</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>1. Firth of Fifth</li>
                    </ul>
                  </div>

                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-3">🎸 Dan Fogelberg & Tim Weisberg from Twin Sons of Different Mothers 1978</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>2. Guitar Etude NO.3</li>
                      <li>3. Tell Me To My Face</li>
                      <li>4. Paris Nocturne</li>
                    </ul>
                  </div>

                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-3">🎻 Mahavishnu Orchestra from Vision of The Emerald Beyond 4:49 1975</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>5. If I could see</li>
                      <li>6. Be Happy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #2. 박종찬 - Favorites */}
              <div className="border border-green-400 rounded-lg p-6 bg-green-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
                  #2. 박종찬(icarus) - Favorites
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🎵 Julian Jay Savarin</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>1. death of the alda</li>
                      <li>2. dance of the golden flamingoes</li>
                    </ul>
                  </div>

                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌏 Asia Minor</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>3. Night wind</li>
                      <li>4. Dedicace</li>
                    </ul>
                  </div>

                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌙 Pink Floyd</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>5. Atom heart mother Suite 곡의 일부</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #3. 신인철 - New Albums */}
              <div className="border border-purple-400 rounded-lg p-6 bg-purple-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
                  #3. 신인철(Fish) - New Albums
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🌀 Ozric Tentacles</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>1. Curious Corn</li>
                    </ul>
                  </div>

                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🎸 Phish</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>2. Freebird (Live)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🎭 Abraxas</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>3. Jezebel</li>
                    </ul>
                  </div>

                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🐟 Fish, Plague of Ghosts (part 1-6)</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>4. Old Haunts</li>
                      <li>5. Digging Deep</li>
                      <li>6. Chocolate Frots</li>
                      <li>7. Waving at Stars</li>
                      <li>8. Raingods Dancing</li>
                      <li>9. Wake up call (Make it Happen)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* #4. 안병욱 - 90년대 Brazil Prog band */}
              <div className="border border-orange-400 rounded-lg p-6 bg-orange-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-orange-300 mb-6 text-center">
                  #4. 안병욱(brave) - 90년대 Brazil Prog band
                </h3>
                
                <div className="space-y-8">
                  
                  <div className="bg-orange-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">🎹 Dogma "Album" ('92) featuring Marcus Viana (Elec Violin)</h4>
                    <ul className="text-sm text-orange-100 space-y-1 mb-4">
                      <li>1. Clouds (6:27)</li>
                    </ul>
                    <div className="text-xs text-orange-100 leading-relaxed space-y-2">
                      <p>
                        신세대 브라질 프록 밴드들중 선봉격 이었던 도그마의 all-instrumental 데뷔앨범입니다.
                        이후 2집 Twin Sunrise('95)를 발표하고 베이시스트의 사망으로 현재는 해체된
                        상태이지만, 2장의 앨범 모두 90년대 브라질 프로그 앨범들 중 수작으로 꼽히고
                        있습니다. 무엇보다 perfect한 sound production과 멤버들의 연주 모두 좋지만,
                        특히 기타리스트 Fernando Campos의 "감성적"인 사운드는 hackett-latimer-rothery의
                        계보를 이어받을 수 있을만하다는 생각이 들 정도로 뛰어납니다.
                      </p>
                      <p>
                        들으실 곡에선 Sagrado의 Markus Vianna의 시원스럽게 휘갈겨 대는 서정적 일렉 바이올린과
                        Fernando의 감성적 기타 솔로 협연이 부담 없이 심난해지고 싶을 때 들으면
                        그만인 사운드를 들려줍니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">🏰 Quaterna Requiem "Quasimodo" ('94)</h4>
                    <ul className="text-sm text-orange-100 space-y-1 mb-4">
                      <li>2. Os Reis Malditos (12:30)</li>
                    </ul>
                    <div className="text-xs text-orange-100 leading-relaxed space-y-2">
                      <p>
                        Q.R의 2번째 앨범입니다. 실은 본 앨범보다 이들의 데뷔작 Velha Gravura('92)가
                        더 좋은 평을 받고 있는 듯 합니다. 데뷔작에선 five piece(violin, drums,
                        bass, keys, & guitar)의 멤버 구성으로 all-instrumental을 들려주었지만,
                        본 작에선 원래 멤버중 리더인 Elisa Wiermann(multi- keyboardist 여성이지요.)과
                        Claudio Dantas(drums)만 남아있고, 기타와 베이스는 게스트 뮤지션으로 보강했습니다.
                        브라질 프로그 특유의 바이올린 파트가 빠진 것이 아쉽기는 하지만, PFM, Rick
                        Wakeman과 초기 Renaissance의 영향을 받았다는 평속에 여전히 좋은 앨범으로
                        회자되고 있습니다.
                      </p>
                      <p>
                        본 앨범은 빅토르 휴고의 '노틀담 성당'을 주제로 했다고
                        하는데요..들으실 곡에선 역시 Elisa Wiermann의 중세분위기가 나는 건반 인트로로
                        시작해 중반 이후, 기타가 가세하며 금세 분위기는 반전되어 고조됩니다. 들을수록
                        맛이나는 곡이라 생각해요...아~ 역시 덜 상업적이어야 음악성이 있다고 말할
                        수 있는 걸까요..
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">⏰ Chronos Mundi "Luz & Trevas" ('98)</h4>
                    <ul className="text-sm text-orange-100 space-y-1 mb-4">
                      <li>3. Nasce a Semente (11:01)</li>
                    </ul>
                    <div className="text-xs text-orange-100 leading-relaxed space-y-2">
                      <p>
                        Pink Floyd, Yes, ELP, King Crimson, Genesis, Renaissance, Jade Warrior..
                        자신들의 사운드에 영향을 끼쳤다고 부클릿에 적어 놓은 밴드들입니다. 3인조 이구요,
                        데뷔앨범입니다. 90년대산 밴드답지 않게 70년대의 심포닉한 사운드를
                        들려주는 이들의 브라질 프로그계에서의 위치는..글쎄요..잘은 모르겠어요.
                        브라질 프로그앨범중 수작으로 평가받는 Aether의 "Elohim"과 함께,
                        두 앨범을 우리나라에선 동시에 라이센스 발매했는데, 개인적으론 Aether에 손을
                        더 들어줄 것 같습니다만..음 어쨌든..
                      </p>
                      <p>
                        'Aether'는 흙,물,불,바람외에 우주의 본질을 구성하는 제5원소라는 뜻의 그리스 고대어라고
                        합니다. 뤽 베송의 영화에서는 유치한 결말의 '사랑' 이었지만, 이 팀에서 얘기하는
                        Aether는 뭔지..좀더 좋은 의미인것 같은데.. 들으실 곡은 Marcus Vianna의 뒤를 이을만한 elec violinlist로 평가받고 있는 Glauco
                        Fernandes가 참여하고 있습니다. 가을분위기의 짧은 곡이에요. Glauco Fernandes는
                        솔로 앨범 Violinoscópio도 괜찮은 평을 받고 있는 뮤지션이에요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* #5. 이장원 - 싸이키델릭 */}
              <div className="border border-indigo-400 rounded-lg p-6 bg-indigo-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-indigo-300 mb-6 text-center">
                  #5. 이장원(ljw1031) - 싸이키델릭
                </h3>
                
                <div className="space-y-8">
                  
                  <div className="bg-indigo-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-indigo-200 mb-3">👻 Ghost</h4>
                    <ul className="text-sm text-indigo-100 space-y-1 mb-4">
                      <li>1. When you're dead (title track)</li>
                    </ul>
                    <div className="text-xs text-indigo-100 leading-relaxed space-y-2">
                      <p>
                        고스트는 Paul Eastment 가 이끌었던 영국 버밍햄 출신 하드락 그룹입니다.
                        Paul Eastment 는 Velvett Fogg 라는 그룹에서 활동했었는데 Time Rose 의
                        Com away Melinda 등을 커버한 데뷔 앨범외에는 별로 알려진 그룹은 아닙니다.
                        같이 있었던 Frank Wilson 은 후에 Warhorse 를 조직하고 Paul 은 Ghost 를 결성
                        해서 헤비 블루스를 주로 연주하던중 이미 두장의 솔로 앨범 경력이 있던
                        셜리 켄트라는 여성 보컬리스트를 영입하게되구요, 그래서인지 블루스/싸이키델릭
                        락을 주로 연주하는 와중에서도 아름다운 포크 넘버도 수록되어 있는데
                        Hearts and Flowers 같은 곡은 저의 favorites 이기도 하지요.
                      </p>
                      <p>
                        이 그룹 음악의 특징이라면 들으셨던 타이틀 곡과 같이 Terry Guy 의 정신없이 휘몰아
                        치는 오르간 연주와 리드 기타를 맡고있는 Paul Eastment 의 기타 솜씨 못지않은
                        저음의 보컬로 대표되는 사운드와 이들과는 다른 스튜디오에서 녹음했을것 같은
                        셜리 켄트의 부드러운 포크 록 넘버, 강렬한 블루스 락들이 공존한다는
                        점일겁니다. 영국보다도 스페인 등지에서 더 큰 인기를 얻었던 특이한 경우고,아트락 9호에서
                        영국 희귀음반 코너에 소개된바 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-indigo-200 mb-3">🎼 Orion's Beethoven</h4>
                    <ul className="text-sm text-indigo-100 space-y-1 mb-4">
                      <li>2. Superangel (title track)</li>
                    </ul>
                    <div className="text-xs text-indigo-100 leading-relaxed space-y-2">
                      <p>
                        말씀드린대로 아르헨티나 출신의 4인조 그룹입니다. Ronan Bar 와 Adrian Bar 의 두
                        형제를 주축으로 3인조로 결성되었다가 2집에서는 보컬의 보강을 위해 후에 Bubu 나 El
                        Reloj 에서 활동하게 되는 Petty Guelache 를 영입하게되죠. 더구나 2집에서는 우리가 너무도
                        지겨워하는^^; 찰리 가르시아가 게스트로 참여해서 멜로트론 솜씨를 발휘해줍니다.
                      </p>
                      <p>
                        1,2집 모두가 수준급의 음악을 들려주는데 하드락,재즈,싸이키델릭,스페이스록 등이
                        골고루 혼재되어있고 남미 그룹치고는 토속적인 냄새가 덜나고 또한 남미 시디치고는
                        음질이 좋은편 입니다. Polydor Argentina 꺼라 그런가요?^^
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-indigo-200 mb-3">🃏 Jacks</h4>
                    <ul className="text-sm text-indigo-100 space-y-1 mb-4">
                      <li>3. Kazemachi Roman (바람도시의 로망)</li>
                    </ul>
                    <div className="text-xs text-indigo-100 leading-relaxed">
                      <p>
                        안병욱님께서 악을 써대더라는 재미있는 표현을 해주신 이 일본 그룹은 저도 사실
                        아는바가 별로 없습니다만 사이키델릭 리스트들 사이에서는 꽤 유명한 그룹이라고 하더군요.
                        조금은 Flower Travellin' Band 스타일과 비슷한가요? 아주 잘 모르겠습니다^^;
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-indigo-200 mb-3">🌟 Neu!</h4>
                    <ul className="text-sm text-indigo-100 space-y-1 mb-4">
                      <li>4. Fur immer (forever)</li>
                    </ul>
                    <div className="text-xs text-indigo-100 leading-relaxed">
                      <p>
                        무척 특이한 제목의 노래를 들려준 이 그룹은 Dora Wahl 이라는 걸출한 여성 
                        드러머를 중심으로 하는 독일 그룹입니다. Klaus Dinger 와 Michael Rother 가 
                        Kraftwerk 를 탈퇴한후 결성한 그룹으로 알려져있는 이 듀오는 나중에 각자 
                        Harmonia(Michael Rother) 와 La Dusseldorf(Klaus Dinger) 를 결성합니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-800 bg-opacity-30 p-6 rounded">
                    <h4 className="font-bold text-indigo-200 mb-3">🎨 The United States Of America</h4>
                    <ul className="text-sm text-indigo-100 space-y-1 mb-4">
                      <li>5. The Garden Of Earthly Delights</li>
                    </ul>
                    <div className="text-xs text-indigo-100 leading-relaxed">
                      <p>
                        Pop 과 Experimental 음악의 경계선상에 있는듯한 독특한 음악세계를 추구했던
                        Joseph Byrd 가 이끄는 그룹입니다. 이들의 유일한 앨범은 67년작이구요.
                        전자음악의 도입등이 매우 파격적이었다고 평가받고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* #6. 이창식 - 단식예술가 */}
              <div className="border border-red-400 rounded-lg p-6 bg-red-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">
                  #6. <a href="http://www.netian.com/~iara" className="text-red-300 hover:text-red-100 underline">이창식</a>(iaramusic@yahoo.com) - 단식예술가
                </h3>
                
                <div className="bg-red-800 bg-opacity-30 p-6 rounded">
                  <h4 className="font-bold text-red-200 mb-3">🎹 이창식</h4>
                  <ul className="text-sm text-red-100 space-y-1">
                    <li>1. 첫번째 앨범에서 발췌</li>
                    <li>2. Keyboards & Programming</li>
                  </ul>
                  <div className="text-xs text-red-100 leading-relaxed mt-4">
                    <p>
                      한국의 네오 프로그레시브 음악의 기수로 나선 이창식님의 음악을 직접 들을 수 있는 
                      귀중한 시간이었습니다. 단식예술가로서의 철학과 음악적 실험정신이 돋보이는 
                      키보드 중심의 프로그레시브 사운드를 선보여주셨습니다.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Session Summary */}
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">📊 Session 21 특징</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">🎯 발표자별 장르</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong>김태우</strong>: 클래식 프로그 (Genesis, Mahavishnu)</li>
                    <li>• <strong>박종찬</strong>: 아방가르드 & 심포닉</li>
                    <li>• <strong>신인철</strong>: 신보 소개 (Ozric, Fish)</li>
                    <li>• <strong>안병욱</strong>: 90년대 브라질 프로그</li>
                    <li>• <strong>이장원</strong>: 싸이키델릭 희귀반</li>
                    <li>• <strong>이창식</strong>: 한국 네오 프로그</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3">🌍 글로벌 스펙트럼</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• <strong>영국</strong>: Genesis, Pink Floyd, Fish, Ghost</li>
                    <li>• <strong>브라질</strong>: Dogma, Quaterna Requiem, Chronos Mundi</li>
                    <li>• <strong>미국</strong>: Mahavishnu Orchestra, Dan Fogelberg</li>
                    <li>• <strong>아르헨티나</strong>: Orion's Beethoven</li>
                    <li>• <strong>일본</strong>: Jacks</li>
                    <li>• <strong>독일</strong>: Neu!</li>
                    <li>• <strong>한국</strong>: 이창식</li>
                  </ul>
                </div>
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