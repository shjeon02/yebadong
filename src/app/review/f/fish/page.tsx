"use client";
import Link from "next/link";

export default function FishPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Fish</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 스코틀랜드
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">이전 소속:</span> Marillion
            </div>
            <div>
              <span className="font-semibold">앨범 수:</span> 6개 앨범 리뷰
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">신인철 (icshin@chiak.kaist.ac.kr / icshin@bioneer.kaist.ac.kr)</span>
            </div>
            <p className="text-green-700 text-sm">
              Marillion/Fish의 열성 팬으로서 Fish의 모든 앨범을 상세히 리뷰한 전문 리뷰어
            </p>
          </div>

          {/* Album 1: Sushi */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Fish - Sushi (Official Live Bootleg)</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Fish의 official live bootleg인 _Sushi_를 구입했습니다. Fish는 요즘 좀 궁한지 계속 official bootleg를 발매하여 
                저의 주머니를 바스락 거리게 만듭니다. 그간 발표된 Fish의 official bootleg은 모두 최근의 _Sushi_까지 5종류로 
                모두다 double CD, 가격은 $20 내외입니다.
              </p>
              
              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Fish Official Bootleg 시리즈</h4>
                <ol className="text-sm text-yellow-700 space-y-1">
                  <li>1. For whom the Bell Tolls</li>
                  <li>2. Uncle Fish and the Crypt Creepers</li>
                  <li>3. Pigpen's Birthday</li>
                  <li>4. Derek Dick and his amazing Electric Bear</li>
                  <li>5. Sushi</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                _Sushi_는 최근의 _Songs from the Mirror_의 공연에서 녹음한 것으로 front sound mixing board로부터 DAT recording하여 
                무척이나 live다운, 마치 음질 좋은 진짜 bootleg을 듣는듯한 느낌입니다. Fish의 입술이 mic에서 약간 떨어지면 떨어지는 대로, 
                가까이 대고 악을 쓰면 악쓰는 대로 그대로 들리니 정말 생동감이 있어요!
              </p>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">앨범 하이라이트</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li><strong>Disc 1 첫곡:</strong> Pink Floyd의 cover song "Fearless"로 시작</li>
                  <li><strong>Big Wedge:</strong> _Vigil_ 앨범 수록곡, 정말 신나는 라이브 버전</li>
                  <li><strong>She Chameleon:</strong> 원곡을 더욱 dramatic하게 해석한 절묘한 keyboard solo</li>
                  <li><strong>Kayleigh:</strong> Marillion 최대의 hit곡, 관중들이 완전히 정신을 잃는 순간</li>
                  <li><strong>The Last Straw:</strong> Fish의 Marillion 시절 마지막 앨범의 마지막 곡</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Album 2: Suits */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">2. Fish - Suits</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Fish의 새 studio album _Suits_를 받았습니다. 역시 본 앨범도 Yes의 _Talk_만큼 논란이 많았던 앨범이라 
                크게 기대는 하지 않았는데... 이제 Fish도 갔더군요. 마치 Daryl Hall의 곡을 Tom Petty식으로 소화해낸듯한 분위기가 
                전면을 감싸고 있고 vocal위주의 rock이 당연히 치중해야 할 melody에 대한 consideration이 너무 부족했습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                앨범의 전체적인 주제는 Polydor label에서 실적부진으로 쫓겨난 것에 대한 화풀이 및 자조적인 내용을 다루고 있더군요. 
                Robert Plant의 행적과 Fish의 solo career story가 비슷한 점이 무척 많습니다.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Robert Plant vs Fish 비교</h4>
                <ul className="text-sm text-yellow-700 space-y-2">
                  <li><strong>Plant 1집:</strong> Pictures at Eleven ↔ <strong>Fish 1집:</strong> Vigil in a Wilderness of Mirrors</li>
                  <li><strong>Plant 2집:</strong> The Principle of Moments ↔ <strong>Fish 2집:</strong> Internal Exile</li>
                  <li><strong>Plant 3집:</strong> Honeydrippers ↔ <strong>Fish 3집:</strong> Songs from the Mirror (cover 앨범)</li>
                  <li><strong>Plant 4집:</strong> Shaken'N Stirred ↔ <strong>Fish 4집:</strong> Suits</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                하지만 _Suits_의 마지막 track _Raw Meat_는 아직도 Fish의 건재를 확인시켜주고 있는 track입니다. 
                마치 _Clutching at Straws_의 _The Last Straw_를 연상시키는... 그리고 _Pipeline_, _MR1470_ 등의 곡도 괜찮아요. 
                Fish의 음악은 언제나 내 life의 soundtrack 같은 음악이니까...
              </p>
            </div>
          </div>

          {/* Album 3: Acoustic Sessions */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">3. Fish - Acoustic Sessions</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Clapton이 Unplugged 앨범으로 일대 히트를 친 후 여러 artist들이 이 대열에 동참하였죠. 
                우리의 Fish도 fan들의 다양한 요구를 워낙 잘 받아들이는 성격 탓에 작년 fan club을 통해 
                자신의 label Dick Bros로부터 Acoustic Session 앨범을 내놓았습니다.
              </p>

              <div className="bg-red-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-red-800 mb-2">Fish의 주책없는 CD Single 남발</h4>
                <p className="text-sm text-red-700 mb-2">
                  Fish는 작년 봄에 발매한 'Suits' 앨범에서 무려 CD single을 여섯장을 내놓았습니다:
                </p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>Lady Let it Lie #1, Lady Let it Lie #2</li>
                  <li>Fortunes of War #1, #2, #3, #4</li>
                </ul>
                <p className="text-sm text-red-700 mt-2">
                  비슷비슷한 artwork에 곡목을 조금씩 바꾸고 alternative version을 집어넣는 등 얍쌉한 방법으로 collector들을 벗겨먹었죠.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                앨범 이야기를 하자면 '아주 재미있게 들을만 합니다.' Marillion시절의 곡들인 _Kayleigh_, _Sugar Mice_ 등을 
                주욱 주욱 늘여가면서 통기타 반주에 맞추어 부른 곡도 흥미있고... _Lucky_, _Internal Exile_, _Lady Let it Lie_ 등도 
                studio album과는 다른맛을 느낄 수 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed">
                조만간 Marillion 시절의 곡을 cover한 _Yin and Yang_이라는 앨범을 또 낸다는 소식이 들리는데... 
                좀 너무 $을 좋아하는게 아닌가 하는 씁쓸한 생각이 들어요. 하긴 이제 Fish 애들도 학교갈 나이가 되었고... 
                돈이 좀 많이 들겠지만요.
              </p>
            </div>
          </div>

          {/* Album 4: Yin and Yang */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">4. Fish - Yin and Yang</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                이번 가을... Fish는 자신의 best compilation 앨범 'Yin'과 'Yang'을 각각 발표하였습니다. 
                Repertoire는 Marillion 시절의 곡들과 Fish solo 앨범의 곡들이 적당한 비율로 섞여있군요. 
                수록곡들 대부분은 새로 녹음한 alternative version이고 몇곡들은 예전 앨범의 original version을 그대로 싣고 있습니다.
              </p>

              <div className="bg-purple-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-purple-800 mb-2">Mark Wilkinson의 아트워크</h4>
                <p className="text-sm text-purple-700">
                  앨범 sleeve는 Fish 시절의 Marillion 앨범과 Fish의 solo album을 디자인하였던 Mark Wilkinson이 특유의 필치로 
                  재미있는 그림을 그려주고 있습니다. 타이틀인 Yin and Yang (음, 양)에 걸맞게 커다란 태극무늬에 Fish (생선)이 아로새겨져 있고, 
                  음과 양이라는 한자 (Chinese Character)도 한쪽 구석에 씌여 있습니다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">주요 수록곡 (새로 녹음)</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li><strong>Fugazi 앨범에서:</strong> _Incubus_, _Punch and Judy_ (특히 Punch and Judy는 원곡보다 훨씬 신나게 녹음)</li>
                  <li><strong>Clutching at Straws에서:</strong> _Incommunicado_ (업템포로 리듬감 살림), _Sugar Mice_ (Cello와 acoustic guitar 언플럭드 버전)</li>
                  <li><strong>Internal Exile에서:</strong> _Credo_, _Just Good Friends_ (Sam Brown과 듀엣)</li>
                  <li><strong>Misplaced Childhood에서:</strong> _Kayleigh_, _Lavender_ (완전히 새롭게 각색, Blind Curve 일부까지 메들리로)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Sam Brown - 무척이나 글래머러스한 여자와 Fish - 비록 머리는 홀라당 까졌지만 아직도 젊은 청춘(58년생)이고 
                최근에 살까지 빠져서 가발만 쓰면 _Script for a Jester's Tear_를 부르던 분위기를 재생할 수 있는 남자와의 듀엣곡은 무척 아름답습니다.
              </p>
            </div>
          </div>

          {/* Album 5: Sunset on Empire */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">5. Fish - Sunset on Empire</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Porcupine Tree의 Steve Wilson이 참여해서 화제를 모았던 Fish의 새 솔로앨범입니다. 
                Pink Floyd의 good early days에 흔히 비교되는 Porcupine Tree의 사이키델릭한 사운드에 Fish의 짖는 보컬이 
                어울린 나이스한 prog를 기대하셨다고요? 그럼 아닙니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Fish도 prog를 거의 완벽한 과거형으로 보기 시작한지 어언 10년이 넘은 것 같고, Steve Wilson의 contribution도 
                곳곳 Floydian한 분위기를 풍겨주고 전작들에 비해 instrumental passage가 길어지게 만들었다는 것 정도이지 
                Porcupine Tree의 분위기를 기대하는건 무리인듯 합니다.
              </p>

              <div className="bg-green-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-green-800 mb-2">Special Limited Edition</h4>
                <p className="text-sm text-green-700 mb-2">
                  생전 처음보는 괜찮은 스타일의 디지팩에 CD가 두장 들어있습니다. Mark Wilkinson의 그림이 여전히 아름답게 표지를 장식해주고 있고, 
                  실질적인 음반을 제외한 나머지 한장의 CD는 소문과는 달리 비디오 CD가 아니라 interview CD입니다. 
                  영국식, 특히 Scottish English를 배우고 싶으신 분께는 좋은 listening 교재가 될듯한 부록 CD네요.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">주요 트랙</h4>
                <ul className="text-sm text-yellow-700 space-y-2">
                  <li><strong>The Perception of Johnny Punter (8분):</strong> Steve Wilson의 썩 괜찮은 기타소리와 Fish특유의 짖는 보컬, 속삭임이 담긴 오프닝</li>
                  <li><strong>Tara:</strong> Fish의 딸에게 바쳐진 아름다운 곡</li>
                  <li><strong>Brother52:</strong> 싱글로도 발표</li>
                  <li><strong>Sunset on Empire:</strong> 타이틀곡</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                전체적으로 Internal Exile 앨범의 다양한 취향이나 Suits 앨범의 Hall and Oates Style에 실망하신 분들은 
                만족하실만한 Fish의 앨범입니다. 개인적으론 Vigil in the Wilderness of Mirrors와 비교됩니다.
              </p>
            </div>
          </div>

          {/* Album 6: Raingods with Zippos */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">6. Fish - Raingods with Zippos (1999)</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                지난주에 공식적으로 발매된 Fish의 새 정규앨범입니다. 지난번 앨범 Sunsets on Empire 이후에 
                베스트앨범 (또!!) Kettle of Fish가 나왔고, 이후 오랜만에 발표된 Fish의 신곡으로만 이루어진 앨범입니다.
              </p>

              <div className="bg-indigo-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-indigo-800 mb-2">Mark Wilkinson 아트워크</h4>
                <p className="text-sm text-indigo-700">
                  Script for a Jester's Tear, Fugazi 등에서 섬뜻한 아트웍으로 혐오감마저 불러일으켰던 Mark Wilkinson이 
                  갈수록 세련된 느낌의 아트웍으로 부클렛을 장식해주고 있습니다. 겉표지는 그냥 중절모를 쓴 Fish가 
                  지포라이터를 켜들고 우산을 받쳐든 평범한 그림이지만 부클렛을 펼치면 들어있는 그림들은 무리를 해서라도 
                  컬러로 보고싶은 이쁜 그림들이네요.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">전반부 주요 트랙</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li><strong>Tumbledown (5'52"):</strong> Mickey Simmonds의 아름다운 피아노로 시작, Steve Wilson의 내지르는 리듬기타</li>
                  <li><strong>Mission Statement (4'00"):</strong> 업템포, Robin Boult 등의 기타가 Suits 앨범과 비슷한 분위기</li>
                  <li><strong>Incomplete (3'44"):</strong> Elisabeth Antwi와의 듀엣곡, '비오는' 분위기와 잘 어울림</li>
                  <li><strong>Tilted Cross (4'19"):</strong> Nicola King의 백코러스, 다정한 Folky한 소품</li>
                  <li><strong>Faithhealer (5'01"):</strong> Steve Wilson 특유의 기타웍과 violin, 가장 Porcupine Tree 비슷</li>
                  <li><strong>Rites of Passage (7'42"):</strong> 세기말적 Fish의 러브송</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-red-800 mb-2">Plague of Ghosts 조곡 (앨범 후반부)</h4>
                <p className="text-sm text-red-700 mb-2">
                  'Misplaced Childhood 시절로 돌아간 Fish', '90년대 최고의 progressive suite' 등등 굉장한 hype들이 난무한 곡입니다:
                </p>
                <ol className="text-sm text-red-700 space-y-1">
                  <li>i) Old Haunts (3'13") - Pseudo Silk Kimono를 연상시키는 몽롱한 분위기</li>
                  <li>ii) Digging Deep (6'49") - Steve Wilson의 busy한 연주, 앨범 최고 트랙</li>
                  <li>iii) Chocolate Frogs (4'04") - Fish의 cool한 나레이션</li>
                  <li>iv) Waving at Stars (3'12") - 호소력 짙은 Fish의 보컬</li>
                  <li>v) Raingod's Dancing (4'16") - neo-psyche한 feeling</li>
                  <li>vi) Wake-up Call (Make it Happen) (3'32") - 담담하고 나른한 대미</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed">
                괜찮은 앨범입니다. 지난번 앨범 Sunsets on Empire보다 훨씬 좋습니다. Fish가 싱글위주의 앨범을 발표하는 자세에서 벗어나 
                이렇게 복고적인 조곡 스타일의 대작을 발표하는데 많은 팬들이 고무받은 모양입니다.
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold mb-3 text-indigo-800">리뷰어 총평</h3>
            <p className="text-indigo-700 leading-relaxed">
              신인철님은 Marillion/Fish의 열성 팬으로서 Fish의 솔로 커리어 전반을 깊이 있게 분석했습니다. 
              Robert Plant와의 비교를 통해 Fish의 음악적 변화를 설명하고, 각 앨범의 특징과 의미를 상세히 해석했습니다. 
              특히 Raingods with Zippos의 Plague of Ghosts 조곡에서 Fish가 Misplaced Childhood 시절의 
              프로그레시브 감성을 되찾았다고 평가합니다.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 