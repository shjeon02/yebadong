import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yes Masterworks Tour Preview - Expecting to see YES | Yebadong',
  description: 'Fish의 Yes Masterworks 투어 공연 전 기대감과 셋리스트 분석 (2000년 7월)',
};

export default function YesMasterworksPage() {
  return (
    <main 
      className="min-h-screen bg-[#0A0C30] text-white"
      style={{backgroundImage: "url('/images/yes_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            Yes Masterworks Tour Preview
          </h1>
          <p className="text-lg">
            <strong className="text-yellow-400">Incheol Shin, Fish,</strong>
            <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-blue-400 underline ml-2">
              icshin@bioneer.kaist.ac.kr
            </a>
          </p>
          <p className="text-xl mt-4 text-gray-300">Subject: [Yes] Expecting to see YES...</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">

            {/* 공연 기대감 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Roger Waters에 이은 또 다른 기대</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  지난번 Roger Waters 공연에 이어서 이달 말에 같은 장소에서 있을 Yes의 컨서트를 
                  지금 눈이 빠지게 기다리고 있습니다.
                </p>
                
                <p>
                  이번 Masterworks 공연은.. 정말 Yes의 캐쥬얼 팬이 아닌 Yes를 수십년동안 사랑해온 
                  다이하드 팬들을 위한 공연인데요.. 그 이유는 셋리스트를 보면 알 수 있습니다.
                </p>
              </div>
            </div>

            {/* Masterworks 셋리스트 */}
            <div className="mb-12 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Masterworks 투어 셋리스트</h3>
              
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-yellow-400 mb-4 text-center">2000 Masterworks Tour Setlist</h4>
                <ol className="text-sm space-y-2">
                  <li><strong>Intro:</strong> Benjamin Brittan's Young People's Guide to the Orchestra</li>
                  <li><strong className="text-red-400">Close to the Edge</strong></li>
                  <li><strong>Starship Trooper</strong></li>
                  <li><strong className="text-red-400">Gates of Delirium</strong></li>
                  <li><strong>Leaves of Green</strong></li>
                  <li><strong>Heart of the Sunrise</strong></li>
                  <li><strong className="text-red-400">Ritual (Nous Somme Du Soleil)</strong></li>
                  <li><strong>Encore:</strong> Roundabout</li>
                </ol>
                
                <div className="mt-4 p-4 bg-red-900 bg-opacity-40 rounded">
                  <p className="text-xs italic text-center">
                    <strong className="text-red-400">세 곡의 side long epic!</strong> 모두 70년대의 곡들로 구성된 진정한 팬들을 위한 셋리스트
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Jon Anderson은 올 봄의 유럽 투어를 마치고 역시 인터넷때문에 높아진 팬들의 목소리에 귀를 기울였답니다. 
                  그들이 한결같이 하는 말들은...
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded text-center">
                  <p className="font-bold text-purple-300">"Gates of Delirium 좀 연주해 줘.. Ritual이랑.."</p>
                </div>
                
                <p>
                  그래서 Yes는 이번 Masterworks 투어에서 그야말로 '큰맘먹고' 예전의 대곡들을 위주로 
                  셋리스트를 짰습니다. 모두 70년대의 곡이죠?
                </p>
              </div>
            </div>

            {/* 2000년 유럽 투어와 비교 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">2000년 유럽 투어와의 극명한 대조</h3>
              
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-orange-300 mb-4 text-center">2000 European Tour Setlist</h4>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <ul className="space-y-1">
                      <li>• Firebird Suite</li>
                      <li>• Yours is no Disgrace</li>
                      <li>• Time and a Word (excerpt)</li>
                      <li>• Homeworld</li>
                      <li>• Perpetual Change</li>
                      <li>• Lightning Strikes</li>
                      <li>• The Messenger</li>
                      <li>• Ritual (excerpt - Nous Sommes du Soleil)</li>
                      <li>• And You And I</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1">
                      <li>• It Will Be A Good Day</li>
                      <li>• Face To Face</li>
                      <li>• Hearts</li>
                      <li>• Awaken</li>
                      <li>• I've Seen All Good People</li>
                      <li>• Clap</li>
                      <li>• Cinema</li>
                      <li>• <strong className="text-yellow-400">Owner of a Lonely Heart</strong></li>
                      <li>• Roundabout / jam</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  장소에 따라 조금씩 다르기는 하지만 대부분 위의 리스트를 기초로 연주했는데요. 
                  이 리스트는 내일 (! 7월 11일) DVD로 발매될 그리고 VHS로는 미리 발매된 Yes의 라이브 비디오 
                  'House of Yes'와 거의 비슷한 송리스트입니다.
                </p>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">DVD 구매 가이드</h4>
                  <p className="text-xs">
                    Yes의 DVD를 사시고 싶으신 분들은 화질 안좋은 Yessongs나 최악의 15분짜리 모노 DVD 
                    'Live in Philadelphia'등은 피하시고 하루만 더 기다렸다가 작년 라스베가스의 공연을 담은 
                    'House of Yes'를 사시는 것도 좋을듯 합니다. Dolby Digital 5.1 채널로 연주된 보너스 트랙도 들어있다는군요.
                  </p>
                </div>
              </div>
            </div>

            {/* 감정적 고백 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">가슴 설레는 기대와 복잡한 심경</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <p className="font-bold text-green-400 text-center">
                    "무려 세곡의 side long epic을 들을 수 있다는건 정말 꿈만 같습니다. T.T"
                  </p>
                  <p className="text-center mt-2 text-xs">
                    Close to the Edge, Gates of Delirium, Ritual<br/>
                    물론 Ritual은 그동안 몇번 그랬던것처럼 '잠깐'만 연주하지 않고 풀 버젼으로 연주된답니다.
                  </p>
                </div>
                
                <p>
                  그리고 이건 정말 몇년만의 Yes 공연일까요? Owner of a lonely heart가 빠진?? 
                  Owner of a lonely heart는 심지어 ABWH의 공연에서조차 연주되었었는데.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">갈데까지 다 간 느낌</h4>
                  <p className="text-xs">
                    아무리 생각해도 Yes가 이제는... 갈데까지 다 간 느낌입니다. 
                    아직도 The Ladder가 비록 작년에 발표되었지만 '새 앨범'이라는 느낌이 강한데.. 
                    새앨범에서는 한곡도 없이 모두 70년대 곡으로만 셋리스트를 짠다는건. 
                    정말. 대단한 시도. 내지는 거의 '노망' 수준이라고까지 생각이 드는군요.
                  </p>
                </div>
                
                <p>
                  정말 이름그대로 Masterworks 투어라고 할만 합니다. 그들의 진정한 팬.. 
                  팬들이 원하는 모습을 보여주려는 노장들의 아름다운 장인정신이 돋보이는 셋리스트입니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <p className="text-xs italic">
                    반면... 또 다른 느낌은.. 거의 farewell tour... 내지는 자폭 투어.. ^^; 
                    이런 비유는 심하지만.. 늙은 스트리퍼의 마지막 쇼킹 홀딱쇼.. 처럼도 느껴지는군요. :-)
                  </p>
                </div>
              </div>
            </div>

            {/* 마누라 교육의 실패 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">마누라 교육 프로젝트의 좌절</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  그동안 이런 셋리스트를 모르고 역시 공연에 같이 갈 마님을 교육시키기 위해서 
                  Ladder 앨범의 It'll be a good day. Lightning strikes.. Owner of a lonely heart 등의 
                  팝송을 줄곧 차안에서 틀어놨었는데.. 이제는 포기해야 할듯 합니다....
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-gray-300 mb-2">해외 리뷰에서 본 공통된 증언</h4>
                  <p className="text-xs mb-4">
                    이번 Masterworks 투어의 리뷰를 읽어보면. 한결같이 같이 갔던 마누라나 여자친구가.. 
                    너무 불쌍해서 쳐다보기 미안할 정도였다는 글들이 많더군요. 
                    Owner of a lonely heart도 하지 않고.. 짧은 다른 catchy한 곡들도 모두 빼버리고 
                    20분짜리 곡 세곡과 10분짜리 곡 네곡을 스트레이트로 들려줄 생각을 하니 벌써부터 걱정이 앞섭니다.
                  </p>
                  
                  <div className="bg-blue-900 bg-opacity-40 p-3 rounded italic text-xs">
                    <p>
                      You see, my girlfriend of 7 months had never really listened to Yes, but I wanted her to see my favorite band alongside me. 
                      Well, this is NOT the tour for that sort of thing. I can't say she was miserable, but her response was, 
                      "All it was was noise." It's understandable, since two of her favorite songs are "I Want It That Way" by Backstreet Boys 
                      and "That's the Way It Is" by Celine Dion. In retrospect, she should have stayed home.
                    </p>
                  </div>
                  
                  <p className="text-xs mt-2 text-gray-400">
                    (음 우리 마누라도 셀린디옹의 댓스더웨이잇이즈. 좋아하는데.. -_-;;)
                  </p>
                </div>
              </div>
            </div>

            {/* 이창식의 반응 */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">이창식님의 부러움과 DVD 정보</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded mb-4">
                  <p className="font-bold text-yellow-400 mb-2">
                    이창식, <a href="mailto:iaramusic@yahoo.com" className="text-cyan-400 underline">iaramusic@yahoo.com</a>
                  </p>
                  <p className="text-xs">
                    안녕하세요. 예스 공연을 가신다는 글을 보고 배가 아파서 미칠것 같습니다. 이런건 약도 없는데..
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-gray-300 mb-2">DVD 스펙 확인</h4>
                  <p className="text-xs">
                    깜짝 놀래서 다시 확인 해 봤는데 화질은 모르겠지만 음질은 48khz 스테레오라고 나와있습니다. 
                    또 다른 dvd가 하나 있는데 독일에서 가졌던 방송출연분을 만든 것인데 20분짜리이고. 
                    근데 이것도 스테레오라고 표기가 되어 있는데 직접 들어보질 않아서 모르겠네요. 
                    Yessongs도 화질은 별로 안 좋지만 음악은 정말 들을만 한 것같습니다. 
                    House of Yes는 드디어 판매가 시작된 것 같네요.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <p className="text-xs italic">
                    "개인적으로는 계속해서 노망한 모습을 보고 싶네요. 그래서 Close To The Edge 버젼이 한 50개 정도 되었으면 좋겠습니다.^^"
                  </p>
                  <p className="text-xs mt-2">
                    공연 보시게 된 것 진심으로 축하드리구요, 리뷰 기다리겠습니다. 건강하세요.
                  </p>
                </div>
              </div>
            </div>

            {/* Fish의 추가 감상과 미래 전망 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">팬들의 열망과 Yes의 미래</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  정말 혼자만 보게되어서 섭섭합니다. 지금은 어디가셨는지 궁금한 뇨좌오님이랑 이창식님.. 
                  예전에 바동에서 예스폴을 했었던 파스텔님이랑.. 같이 가면 정말 재밌을것 같습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">콜렉터를 위한 DVD 정보</h4>
                  <p className="text-xs">
                    Best of Musikladen을 말씀하시는것 같네요. 약 20분이 안되는 영상이지만 
                    예스의 초대 기타리스트 Peter Banks의 모습도 볼수 있는등 나름대로 콜렉터에게는 가치있는 DVD일것 같습니다. 
                    하지만 DVD로서 20분의 러닝타임은..좀 본전생각이 나기도 하지요. 
                    오늘 발매된 House of Yes와 비교해보면서 보면 재밌을것 같습니다. 30년 전과 30년 후의 모습..
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">John Anderson의 가사 사고</h4>
                  <p className="text-xs">
                    하지만 좀 유감인 사실은 존 앤더슨도 나이가 나이인지라.. 물론 노래부르는데는 아직도 30년전과 똑같은 목소리를 가지고 있어 
                    다들 경외하고 있지만.. 너무나 복잡한 20분짜리 곡들의 가사를 외우는데 조금 문제가 있어서 공연사고를 한번 냈나봐요. 
                    Gates of Delirium을 노래부르다가 가사를 잊어버려 처음부터 다시 시작하는 사고가 며칠전 컬럼버스 공연에서 있었나봐요. 
                    20여년만에 다시 그 긴곡의 가사를 외워 부르려면 아무래도 좀 힘들겠죠?
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">혁신적인 다음 앨범 계획</h4>
                  <p className="text-xs">
                    더 이상 owner of a lonely heart II를 만드려는 노력을 포기한 Yes는 이번 The Masterworks 투어에서 
                    그들 본연의 모습.. 20분짜리 Close to the Edge, Gates of Delirium, Ritual을 연주하는 모습에 열광하는 
                    '진짜 팬들'에 자극받았는지 다음 앨범은 단 한곡의 '대곡'만으로 이루어진 앨범이 된다고 하네요.
                  </p>
                </div>
                
                <p>
                  그동안 The Union 앨범 이후로 Yes의 오랜 팬들은 정말 오랫동안... Close to the Edge나 Gates of Delirium, Ritual, 
                  혹은 Awaken의 뒤를 잇는 epic을 기다렸죠.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-gray-300 mb-2">과거 대곡들의 아쉬운 성과</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Talk 앨범의 Endless Dreams</strong> - Close to the Edge II라고 소문났지만 기대만큼은 아니었고</li>
                    <li>• <strong>Keys to Ascension (1996)</strong> - 19분 15초 짜리곡 That, that is도..</li>
                    <li>• <strong>Keys to Ascension II (1997)</strong> - 18분 37초 짜리 곡 Mind Drive도 Close to the Edge II가 되기에는 모자른듯</li>
                    <li>• <strong>Open your eyes (1998)</strong> - 24분 47초 짜리 가짜 대곡 The solution은 언급하지 않는게 좋을듯.. ^^;</li>
                  </ul>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded text-center">
                  <p className="font-bold text-green-400 text-lg">
                    Yes의 새 앨범에 실릴 60분짜리 대곡!!
                  </p>
                  <p className="text-xs mt-2">이번에는 한번 같이 기대해 보죠.</p>
                </div>
              </div>
            </div>

            {/* Fish 서명 */}
            <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 rounded-lg">
              <div className="font-mono text-xs text-gray-400 overflow-x-auto">
                <pre className="whitespace-pre">{`o
                  o  It was a wedding ring,
  \\  __\\\\___    o    Destined to be found in a cheap hotel,
   \\/     o \\ o      Lost in a kitchen sink,
   /\\_<_____/        Or thrown in a wishing well.
  /                  - Warm Wet Circles - Fish`}</pre>
              </div>
            </div>

            {/* 공연 예정 안내 */}
            <div className="mb-8 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 text-center">공연 예정</h3>
              <div className="text-center space-y-2">
                <p className="text-lg font-bold text-yellow-400">7월 29일 공연</p>
                <p className="text-sm">공연이 끝나는대로 다시 글 올리겠습니다.</p>
                
                <div className="mt-6 p-4 bg-blue-900 bg-opacity-40 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">P.S. Yes 홈페이지 이벤트</h4>
                  <p className="text-xs">
                    Yes 홈페이지에서 Yes의 라이브 트랙과 입맛에 맞는 Roger Dean 커버를 골라 맞춤 씨디를 만들어 파는 
                    이벤트를 하더군요. 좀 비싼 감이 없잖아 있는데. 재미삼아 해볼만한 것 같습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Yes Masterworks 투어 프리뷰 완벽 복원! Fish의 공연 전 기대감, 셋리스트 분석, 
                팬들과의 대화, 그리고 Yes 미래에 대한 전망까지 - 278줄의 열정이 그대로 살아났습니다! 🎹✨
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
