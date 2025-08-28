import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lyrics Analysis - The Pros and Cons of Hitchhiking | Roger Waters 가사 분석',
  description: 'Roger Waters의 84년도 솔로 앨범 "The Pros and Cons of Hitchhiking"에 대한 상세한 가사 분석과 해석. Fish(신인철)님의 깊이 있는 분석.',
  keywords: ['Roger Waters', 'The Pros and Cons of Hitchhiking', '가사 분석', 'Pink Floyd', '프로그레시브 록', 'Fish', '신인철']
};

export default function ProsConsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">
              🎵 Lyrics Analysis
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded mb-6"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                🎼 The Pros and Cons of Hitchhiking - Roger Waters
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded mb-4"></div>
              
              <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded">
                <p className="mb-2">
                  <strong>✍️ Written by Fish</strong>, 
                  <a href="http://bioneer.kaist.ac.kr/~icshin" className="text-blue-600 hover:underline ml-1">
                    In-cheol Shin (신인철)
                  </a>
                </p>
                <p className="text-xs">[ icshin@bioneer.kaist.ac.kr ]</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📖 서문</h3>
            <div className="prose prose-sm text-gray-700 space-y-4">
              <p>
                제가 Roger Waters의 실질적인 첫 솔로앨범인 이 작품을 들은지도 벌써 십년이 넘었네요... 
                83년도에 'the final cut'이 발표되고 Pink Floyd는 해산한 듯한 모습을 보이며 David Gilmour는 
                'About Face'를 Roger Waters는 바로 이 앨범 'The Pros and Cons of Hitchhiking' 을 
                각각 84년에 발표하죠.
              </p>
              
              <p>
                제가 고삼이었던 84년 당시 이러한 음반은 주로 광화문이나 이태원의 음반가게에 가면 
                어렵사리 구해오는 원판을 한 5000원 내지 만원의 가격으로 구할 수 있었습니다. 
                (당시 LP의 가격이 $8.99 정도 하였죠)
              </p>
              
              <p>
                월간팝송의 new release corner를 통해 해외에서 본 앨범이 나왔다는 소식을 듣고.. 
                또 AFKN 과 박원웅씨가 진행하던 모 프로에서 single cut된 'The Pros and Cons of Hitchhiking part 10'을 
                듣고는 정신을 못차리며 온 서울바닥을 판을 찾아 헤매었음에도 다른 원판들은 
                (David Gilmour의 About Face 등) 쉽게 구할 수 있었지만 본 앨범은 jacket의 선정성 때문인지 
                잘 찾을 수가 없더군요.. :-(
              </p>
              
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p>
                  그러던 와중 광화문의 한 레코드 가게에서 주인 아저씨가 소장한 본 앨범을 발견하고는 
                  손이 발이 되도록 빌면서 제발 팔아 달라고 애원 했지만 그 아저씨는 자기는 녹음해주기도 
                  싫었는지 이태원의 한 레코드 가게의 약도를 그려주면서 거기가면 아마 녹음은 해줄거라고 하더군요..
                </p>
              </div>
              
              <p>
                그래서 84년 가을 이던가.. 학력고사를 몇달 남겨놓고 처음으로 테입카피를 손에 쥐고 
                저는 만세를 불렀습니다.. :-) 몇달 간격으로 스테이츠에 사는 친구 누나가 부쳐준.. 
                "도대체 무슨 음악이길래 그림이 그러냐" 라는 편지와 함께온 오리지날 테입도 받았고.. 
                일본판 Sony/CBS license도 구했지만 label이 틀려서 !(Gerald Scarfe가 그린 
                노란색/보라색 label이 아니구.. 그냥 시꺼먼 CBS/Sony label 이었음) 다시 미국판을 
                구하기도 했고.. 최근에는 Pink Floyd Collector Headquarter인 Hip Cat Record의 주선으로 
                Uncensored cover(까만 네모가 없네 :-)) 트레이드 하였지만 ..
              </p>
              
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                <p>
                  십년이 지난 지금도 아직 이 앨범은 저의 Top 3 list에 올라있다는 사실을 얼마전 새벽에 
                  '니가 세장만 아무도 없는 곳에 가져갈 앨범은 뭐니 ?' 라는 누구의 질문에 대답하는 
                  내자신의 목소리로 다시금 재 확인 하였습니다.. :-) (Hey, S***t H***t !)
                </p>
              </div>
              
              <p>
                The Who 의 Pinball Wizard를 그렇게 좋아하던 친구가 마지막 가는 자리에 'Tommy' 를 
                넣어주지 못한것을 얼마전 뒤늦게 후회하며.. 방정맞은 소리지만 이 앨범은 그레이브야드까지 
                가지고 가고 싶네요..
              </p>
              
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 mb-2">🔍 가사 분석의 배경</h4>
                <p>
                  하지만.. 이 앨범의 컨셉은 정말 이해하기 힘들었습니다.. 분명 Carolyne이라는 여자한테 
                  바쳐진걸로 보아 Ummagumma 앨범의 속 자켓에 Waters와 같이 사진을 찍은 여자가 아닌 
                  지금의 아니 10년전의 Mrs. Waters와의 관계 를 생각하면서 만든 앨범이란건 추측하였지만..
                </p>
                <p className="mt-2">
                  온통 은유 투성이인 가사와 알아듣기 힘든 비유는 그저 막연히 '악몽속에서의 방탕했던 
                  히치하이커와의 추억에서 깨어나 사랑하는 와이프 옆에서 다시 잠들다.. 역시 조강지처가 
                  제일이다..' 라고 밖에 추측할 수 없게 하였습니다.. :-)
                </p>
              </div>
              
              <p>
                Pink Floyd mailinglist, Roger Waters fanzine인 REG 에서도 많은 debate가 있었었고 
                얼마전 Matthew라는 한 Roger Waters Lyrics 분석가(?) 가 a.m.r-w에 올린 글이 
                역시 좀 난해하기는 하지만 정말 모르고 있었던 The Pros and Cons of Hitchhiking의 
                많은 부분들을 가르쳐 주고 있는 것 같아 Matthew의 허락하에 그의 글을 위주로 
                The Pros and Cons of Hitchhiking의 난해한 내용을 분석해 봅니다..
              </p>
            </div>
          </div>

          {/* Part I */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">💣</span>
              <h2 className="text-2xl font-bold text-red-600">Part I</h2>
            </div>
            
            {/* 4:30 AM Track */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                🕐 4:30 AM (Apparently They Were Travelling Abroad)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  첫번째 트랙은 최면적인 시계 소리로 시작합니다. 청자로 하여금 지금은 새벽 4시 30분이라는 
                  착각에 빠지도록 유도하는 것이죠. 하지만 이건 그저 폭풍전의 고요함 뿐입니다.. 
                  소프트한 목소리가 앨범의 첫 가사를 시작합니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="italic text-purple-700">
                    "Apparently they were travelling abroad and picked up some hitchhikers"<br/>
                    "그들은 분명히 외국으로 여행을 가고 있었어.. 그리고 몇명의 히치하이커를 태웠지"
                  </p>
                </div>
                
                <p>
                  그후.. 우리는 시끄러운 드릴의 소리를 들을 수 있습니다. 잠자는 이야기의 주인공
                  (sleeping protagonist, 이하 SP라 칭하죠) 아마도 고통의 기억과 어린시절의 
                  무시무시 했던 치과병원에서의 기억을 되살리는 것입니다. 여기가 바로 Pros & Cons의 
                  여러부분중에서 히치하이킹에 대한 생각이 폭력과 고통 그리고 죽음을 동반하는 상황을 
                  표현한 첫번째 부분입니다.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🎵 음악적 분석</h4>
                  <p>
                    드릴의 소리는 낮은 톤으로 집중되고 후에 드라마틱한 음악적 천둥소리로 폭발합니다. 
                    여기서는 Waters 만의 절규가 같이 폭음을 완성시키죠. SP는 악몽으로부터 깨어나는 것입니다. 
                    자세히 들어보시면 소음 뒤편으로 멀리서 들려오는 빗소리를 들으실 수 있습니다.
                  </p>
                </div>
                
                <p>
                  이러한 천둥소리 (치과의사의 드릴소리와 합친) 는 다섯번째 트랙인 '섹스의 혁명(Sexual Revolution), 
                  4:41 am'에서도 들을 수 있습니다. 저의 생각으로는 어렸을때 SP가 천둥번개를 무서워 했고 
                  그러한 기억들은 치과병원에서의 무서운 생각들과 함께 그의 잠재의식 속에 깊게 묻어져 
                  있었다는 거죠.. 그리고 그 깊게 뭍인 기억들은 그가 악몽을 꿀때마다 다시 나타납니다.
                </p>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">🗣️ 아메리칸 액센트의 의미</h4>
                  <p>
                    다음으로 SP의 졸리운, 잠이 덜깬 부인은 그의 비명에 의하여 잠이 깨게 됩니다. 
                    그녀는 잠에 취해 악몽에 괴로워하는 SP를 정신이 오락가락하는 상태에서 깨우려고 노력합니다. 
                    여기서 그녀의 말을 잘 들어보세요.. <strong>American accent입니다 !</strong> 
                    이러한 디테일은 나중 곡들에서 SP의 기억들에 대한 시간적인 유추를 할 수 있는 단서를 제공합니다.
                  </p>
                </div>
                
                <p>
                  SP는 잠꼬대로 그의 꿈에서 목격한 일부의 말을 중얼거립니다. 그중의 하나가 이거죠.. 
                  "Have a nice day" (우락부락한 양키 Hell's Angels -주: 모터바이크 타고다니는 깡패들 -의 목소리로) 
                  바로 여기가 타이틀 트랙인 'The Pros and Cons of Hitchhiking part 10'의 레퍼런스를 제공합니다.
                </p>
                
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">🧠 잠재의식 분석</h4>
                  <p>
                    지금 이해해야 할 중요한 사실은 SP의 잠재의식이 앞으로 나오게 될 섹스/히치하이킹의 
                    아픈 추억과 깊이 관련되어 있다는 것입니다. SP가 깊은 잠의 추억에 싸인 서부독일로의 
                    여행(West German holidays)을 생각할때 다음의 가사가 시작됩니다.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <p className="italic text-gray-700 text-center">
                    We were moving away from the border<br/>
                    Looking for somewhere to sleep
                  </p>
                </div>
                
                <div className="mt-4 space-y-4">
                  <p>
                    이 두줄의 가사는 은유적, 직유적으로 모두 해석 가능합니다. 직설적으로, SP는 국경근처에서 
                    늦은 오후에 서부 독일로 드라이브 했던 사실을 기억하고 있습니다.(그곳이 어딘지 아시나요 ? 
                    나중 트랙인 '4:37 am, Arabs with Knives and West German Skies'에 등장하는 Konigsberg이죠)
                  </p>
                  
                  <p>
                    좀더 깊은 은유적인 레벨에서, SP는 또다른 중요한 국경을 넘고 있습니다. 그는 최근에 
                    책임과 구속만이라고 생각했던 결혼으로부터 해방된 무한한 섹스의 자유로 대변되는 목적없는 
                    방황을 끝내려고 하고 있는 것입니다. 그는 더 이상 외롭지 않습니다: 그는 지금 같이 
                    드라이브를 하고 있는 파트너가 있죠(그의 차와, 그의 인생을 같이 드라이브하는..)
                  </p>
                  
                  <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500">
                    <h4 className="font-bold text-pink-800 mb-2">💒 허니문 이론</h4>
                    <p>
                      저는 이 서부독일로의 여행이 사실 그의 허니문 여행이라고 보고 싶습니다. 그렇게 생각하면 
                      이렇게 난잡한 주인공이 자기가 잘 아는 여자와는 섹스를 하지 않았다는 사실을 설명할 수 있습니다. 
                      (그는 그의 실질적인 첫 섹스를 라인강이 내려다 보이는 하니문 호텔룸을 위해 남겨놓은 것이죠 
                      - For the First time today part 2) 또 그가 길에서 태운 히치하이커와의 짧은 관계에 대해 
                      계속 죄책감을 느끼는 사실도 설명할 수 있죠.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 4:33 AM Track */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-800 mb-4">
                🏃 4:33 AM (Running Shoes)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  두번째 곡입니다. SP의 뚜렷한 기억의 쇠퇴하고 더러운 섹스의 디테일은 로맨틱한 꿈의 표현으로 
                  대체됩니다. 은유와 심볼이 꿈을 만드는 재료이기 때문에 Waters는 그의 내레이션에 은유와 
                  심볼리즘을 구조의 파괴 없이 포함할 수 있게되죠..
                </p>
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">🎒 SP의 히치하이킹 배경</h4>
                  <p>
                    4:33 am Running Shoes의 은유를 이해하려면, SP의 배경을 좀더 알 필요가 있습니다. 
                    앨범 전체에 산재된 기억의 편린들로 부터 (특히 4:50 am Dunramin' Duncarin' Dunlivin', 
                    5:01 am The Pros and Cons of Hitchhiking Part 10, 5:06 am Every Strangers Eyes) 
                    우리는 SP가 엄청나게 많은 히치하이킹의 경험을 가지고 있다는 사실을 알 수 있습니다.
                  </p>
                </div>
                
                <p>
                  그는 떠돌이 였습니다. 지나가는 차에 얻어타고 트럭샵에서 밥을 먹고 햄버거 집에서 끼니를 
                  때우는... 그는 목적없이 미국안에서 방황하였습니다. 절대 한군데 오래 머무르는 일 없이. 
                  그는 목적과 방향이 없는 삶을 살았죠.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">💔 결혼 후의 변화</h4>
                  <p>
                    길거리 생활의 잇점중의 하나는 싸구려 섹스를 즐길 수 있다는 것입니다. SP가 아직 총각이던 시절, 
                    그는 끝없이 많은 여자와 관계를 가졌습니다. 그의 열 오른 살을 그 앞에 누운 몸으로부터 
                    더욱더 덥히기 위해서..
                  </p>
                  <p className="mt-2">
                    하지만 SP가 결혼하고 난 다음 그의 방황시절은 끝난듯이 보였습니다. 자유로운 생활, 
                    그리고 여러가지 섹스의 모험 은 그의 청춘시절을 온통 증발시켜 버렸습니다.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <p className="italic text-gray-700 text-center font-medium">
                    So I stood by the roadside<br/>
                    The soles of my running shoes gripping the tarmac<br/>
                    Like gunmetal magnets
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">🔄 속박과 움직임의 대조</h4>
                  <p>
                    처음에 이 가사는 SP의 정신이 아직도 그의 히치하이킹 시절에 머물러 있는것을 표현하는 
                    것처럼 보입니다. 그러나 Waters는 좀더 깊은 심볼리즘을 이 두 줄에 넣었습니다. 
                    The Pros and Cons of Hitchhiking 앨범 전반에 걸쳐서, Waters는 여행의 이미지와 
                    정적, 속박의 이미지를 대조합니다.
                  </p>
                  <p className="mt-2">
                    위의 두 줄에서 Waters는 stood (움직일수 없는 속박의 표현), running shoes(움직이는 여행의 이미지), 
                    Gripping the tarmac like gunmetal magnets(속박의 표현)을 각각 대조합니다.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800 mb-2">🔫 폭력과의 연관성</h4>
                  <p>
                    또한 다른 이슈로서 gunmetal이라는 단어는 SP의 히치하이킹시에 폭력의 무기와 결부된 
                    경험이 있다는 사실을 나타냅니다. 먼저 이야기 하였듯이 SP의 정신과 고통/폭력/죽음과 
                    히치하이킹과의 결부는 정말 강력합니다.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <p className="italic text-gray-700 text-center">
                    Fixed on the front of her Fassbinder face
                  </p>
                </div>
                
                <p>
                  이 단어는 다시 움직일수 없음과 속박을 표현합니다: SP의 파트너 또한 노예의 구속에 갇혀있죠. 
                  저는 Fassbinder감독의 영화에 대해서는 잘 모릅니다. 하지만 관계있는 것 몇가지는:
                  1) 그는 독일 영화를 만드는 감독이고 (서독이 SP의 간통 장소이죠)
                  2) 그의 예술은 종종 어둡고 꿀꿀합니다.
                </p>
                
                <div className="bg-purple-50 p-4 rounded">
                  <h4 className="font-bold text-purple-800 mb-2">🎭 달빛 묘지의 상징</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Was the kind of a smile<br/>
                      That only a rather dull child could have drawn<br/>
                      While attempting a graveyard in the moonlight
                    </p>
                  </div>
                  <p>
                    몇가지 이유로 이 이미지는 저에게 A Clockwork Orange영화의 Alex의 추파섞인 얼굴을 
                    연상하게 합니다. Waters가 'rather dull child'에서 말하려고 하는 사실은 바보같은 
                    쓸데없는 생각들이 그 여자를 마비시켜 지적인 생각을 못하게 만든다는 것에서 레퍼런스를 
                    찾을 수 있죠.
                  </p>
                  <p className="mt-2">
                    달빛이 드리워진 묘지 (Moonlit graveyard)는 아주 많이 귀신, 좀비와 같은 초자연적인 
                    것들과 결부되곤 합니다. 제 생각에 Waters 는 SP와 그의 파트너 사이에 욕망이 마술의 
                    주문처럼 일어나 그들의 의지와는 상관없이 부자연적인 성합이 일어났다고 표현하고 있는것 같습니다.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded mt-4">
                  <p className="italic text-gray-700 text-center">
                    And when she turned sweeter<br/>
                    The reason (between you and me) was<br/>
                    She'd just seen my green Lamborghini
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">🏎️ 녹색 람보르기니의 의미</h4>
                  <p>
                    저는 프로이트식의 꿈의 해석은 잘 모릅니다만, 남성의 성기를 상징하는 심벌은 하나 알고 있습니다 :-) 
                    초록색 람보르기니는 거대한 피너스(penis)의 익스텐션을 의미합니다. 또한 람보르기니라는 
                    보통사람은 구경도 못할 차의 이름답게 이 상황에 쓰인 심볼은 오직 엄청난 재력과 권력을 
                    갖춘 사람만이 가질 수 있는 것이죠.
                  </p>
                  <p className="mt-2">
                    단순한 Darwin론적인 사실입니다(조금 슬픈 사실이기도 하지만요), 부와 힘은 여자가 
                    남자에게서 소망하는 것입니다. Money can't buy me love; but it sure can buy a helluva lot of sex :-)
                  </p>
                </div>
                
                <p>
                  그후 SP와 파트너는 격렬한 섹스를 합니다. 가사를 보면, 'feeling the power of (their) engine' 
                  ' and the thrill of desire' (이 부분에서 Waters의 오르가스믹한 흐느낌과 욕망의 울부짖음이 동반되죠) 
                  하지만 그의 정신은 오직 그 긴 시간 동안 그의 정신 그 자체 이외에 밖에 거짓말을 하지 못합니다. 
                  그리고.. 드디어 환타스틱한 거대한 욕망의 건물은 뿌리채 흔들립니다. 죄책감이 파고들고..
                  SP의 즐거웠던 꿈은 악몽으로 돌변하게 되죠.
                </p>
                
                <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-2">🗡️ 칼을 든 아랍인들</h4>
                  <p>
                    SP를 가장 겁나게 했던 사실은 (Arabs with the knives at the foot of the bed: 
                    Arab사람들이 침대가로 칼을들고 들어닥쳤죠.) 그가 _깨어있다고_ 생각한 것입니다. 
                    그는 꿈으로부터 깜짝 놀라서 깨어난 것을 기억합니다. (I open my eyes and to my surprise....) 
                    하지만 실제로 그는 또 다른 초 현실적 몽상에 빠져든 것입니다.
                  </p>
                  <p className="mt-2">
                    칼을 든 아랍인들은 SP의 편집광적인 두려움이 현실로 나타난 모습입니다. 그의 죄책감 가득한 
                    마음은 그의 부인이 그의 간통을 발견하는 시나리오를 만들어 내었고 그의 잘못을 조롱하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 4:37 AM Track */}
            <div className="mb-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                🏰 4:37 AM (Arabs with Knives and West German Skies)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  평화롭게 누워서 SP는 쉬면서 자기가 다시 한번 서독으로 휴가를 가고있는 것을 발견합니다.
                </p>
                
                <div className="bg-gray-100 p-4 rounded">
                  <p className="italic text-gray-700 text-center">
                    And I want to get back<br/>
                    To the girl with the rucksack<br/>
                    To feel her flaxen hair<br/>
                    I want to be there<br/>
                    See the sun going down
                  </p>
                </div>
                
                <p>
                  여기서 SP가 해질무렵에 히치하이커와 만나는 것에 대해 주목하세요. 히치하이커와의 추억은 
                  SP의 서독 여행의 추억을 연상시킵니다. 이 곡과 그 다음 곡은 SP와 그의 부인이 Konigsberg 
                  호텔에서 보낸 밤을 노래합니다. 전술하였듯이. 나는 이 날이 그들의 허니문에서 첫날밤이라고 믿습니다.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                  <h4 className="font-bold text-yellow-800 mb-2">🇩🇪 독일어 환영사</h4>
                  <div className="bg-white p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center font-mono text-sm">
                      Guten Abend meiner Damen und Herren Ha Ha Ha Ha<br/>
                      Wilkomen in Konigsburg Ha Ha Ha Ha<br/>
                      Wollen zie danzen mit mir oder drinken Bier Ha Ha Ha Ha
                    </p>
                  </div>
                  <p>
                    이러한 미친듯한 독일어의 환영은 이 앨범의 전체 주제와는 상관이 그다지 많지 않지만 
                    이 구절은 앨범 전체의 구조에 너무나 걸맞는 초현실적 소재를 제공합니다.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">💭 의식의 흐름 기법</h4>
                  <div className="bg-white p-3 rounded mb-3">
                    <p className="italic text-gray-700">
                      It was kind of you...but<br/>
                      I think we'll just say goodnight.<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;(Leave us alone!)<br/>
                      Goodnight<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;(Leave us alone!)
                    </p>
                  </div>
                  <p>
                    Waters는 stream-of-consciousness(의식의 흐름 수법)을 음악에서 표현한 개척자이자 완성자입니다. 
                    여기서 우리가 사람들에게 말하는 것과 우리가 실제로 생각하는 것의 차이를 나타내기 위하여 
                    놀라운 문학적 도구를 제시합니다.
                  </p>
                  <p className="mt-2">
                    표면적으로 SP는 그의 독일 호스트에 대해 아주 예의가 바른듯이 보입니다. 그러나 그의 
                    부드러운 인사뒤에는 그의 사생활의 질투넘치는 침해에 대한 격앙된 분노가 숨어있습니다. 
                    그는 그의 부끄러워하는 신부를 침대로 데려가는데 흥미가 있을 뿐 귀찮게 하는 외국인과의 
                    대화는 관심이 없었던거죠.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 4:39 AM Track */}
            <div className="mb-8 p-6 bg-pink-50 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-pink-800 mb-4">
                💕 4:39 AM (For the First Time Today-Part 2)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <div className="bg-gray-100 p-4 rounded">
                  <p className="italic text-gray-700 text-center">
                    For the first time today<br/>
                    I held her naked body next to mine
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border border-pink-200">
                  <h4 className="font-bold text-pink-800 mb-2">🤔 'Today'의 의미</h4>
                  <p>
                    여기서 'today' 라는 단어가 의미하는 바는 무척 알기 어렵습니다.
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>그 날이 바로 그와 그의 부인이 처음으로 섹스를 하는 날이었다. 또는</li>
                    <li>그 것이 바로 그와 그의 부인이 많은 섹스를 하던 중 * 그 날 *로는 처음으로 섹스를 하는 것이었다.</li>
                  </ol>
                  <p className="mt-2">
                    하지만 나는 처음의 해석을 믿고 싶습니다. 나는 Waters가 이 곡에서 표현되었듯이 부드러운 
                    섹스를 원한다고 생각합니다. 이것은 SP의 공허한 히치하이커 시절의 섹스와는 대조되는 개념이죠.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded">
                  <p className="italic text-gray-700 text-center">
                    Come with me and stay with me
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">🔄 반복되는 청원</h4>
                  <p>
                    SP가 '4:30 am Apparently they were travelling abroad'에서 히치하이커에게 했던 말을 
                    또다시 반복한다는 사실은 재미있습니다 (4:30 am에서는 'I said would you like to come with me'라고 하였죠)
                  </p>
                  <p className="mt-2">
                    저의 추측으로는 처음에는 SP가 그의 와이프와의 섹스를 그가 길거리에서 만난 수많은 
                    히치하이커들과의 섹스처럼 생각하고 있다는 것입니다. 그러나 그는 사랑하는 파트너가 주는 
                    부드러움과 친밀감의 섹스에 의해 감동받게 됩니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">⚖️ 움직임 vs 정착</h4>
                  <p>
                    그의 간절한 청원은 'Come with me(섹스, 오르가즘과 동일시 되는 표현이죠)' 와 
                    'Stay with me(정숙한 관계를 위한 외침)'으로 나타납니다. 'Coming(움직임이 필요함)'과 
                    'Staying(움직임이 필요없음)' 사이의 절묘한 콘트라스트에 주지하세요.
                  </p>
                  <p className="mt-2">
                    Waters는 여행/움직임/히치하이킹 대 충성/부동/결혼 의 상반적인 테마를 가지고 
                    여기서 또한 노래하고 있습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">😰 편집광적 두려움</h4>
                  <p>
                    SP의 혼란스러운 마음은 그의 부인이 자기가 함께 자고 아침에 버린 숱한 여자들 처럼 
                    다가오는 아침에 자기를 차버릴지 모른다는 생각을 하고 있습니다. 이러한 추측은 그의 
                    와이프가 그의 히치하이커와의 간통을 알고 있을거라는 편집광적인 믿음에서 오게 된 것이죠.
                  </p>
                  <p className="mt-2">
                    하지만. * 그가 * 그녀를 속일 수 있는 능력이 있다면, 왜 그녀 또한 그러한 능력이 없겠습니까 ? 
                    그의 반복하는 처절한 'Stay with me'는 그의 독신시절/히치하이킹으로부터 벗어나려는 
                    그의 절박한 의지의 표현입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part II */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">💣</span>
              <h2 className="text-2xl font-bold text-blue-600">Part II</h2>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mb-6">
              <p className="text-sm text-blue-800">
                지난번에 이어서 Roger Waters 의 The Pros and Cons of Hitchhiking 가사 해석 2부를 올립니다.
                Matthew라는 친구의 글을 위주로 한것임을 다시한번 밝히구요. Matthew (email address가 .za로 끝나는데 
                어느나란지 아시는 분 계셔요 ? :-)) 는 자기의 인터프리테이션중 일부가 외국어로 번역되기는 처음이라며 
                저의 인용허락을 바라는 메일이 자기가 여태껏 살아오는 동안 받은 달팽이 편지, 이메일 포함해서 
                가장 감격적인 편지였다는 말을 전해왔습니다.. :-)
              </p>
            </div>
            
            {/* 4:41 AM Track */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                ⚡ 4:41 AM (Sexual Revolution)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  이 곡과 '4:50 am Go Fishing'의 가사를 보면 주인공 SP가 60년대에 자라났다는 사실을 
                  알 수 있습니다. 여기서 그는 정치에 관한 미사여구를 사용하여 성적으로 개방적인 여자를 
                  침대로 유인합니다. 나는 그가 진실로 자신이 쏟아내는 현학적인 말들을 신봉한다고 생각하지 
                  않습니다; 그는 단순히 그의 가식적인 정직한 열정이 그녀를 감동시켜 그녀가 그에게 
                  몸을 허락하도록 만들 뿐입니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">🗡️ 섹스와 폭력의 결합</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Take out the dagger<br/>
                      And let's have a stab at the sexual revolution
                    </p>
                  </div>
                  <p>
                    다시 한번 섹스와 폭력은 SP의 정신에 결합하고 있습니다. 
                    (악몽에 점철된 곡의 클라이맥스를 예고합니다)
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🏛️ 정치적 아이러니</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Tomorrow lets make...our new resolution<br/>
                      Yeah, but tonight lie still
                    </p>
                  </div>
                  <p>
                    이 두줄의 가사는 아이러니로 가득 차 있습니다. 저는 섹스의 자유에 있어서 SP가 말하고 있는 
                    남녀 평등을 신봉합니다만.. 이 가사(Lie Still)에서 Waters가 계속 속박(부동)/자유(동작)의 
                    비교 방법론을 사용하는 것에 주목하세요..
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded">
                  <h4 className="font-bold text-purple-800 mb-2">⚰️ 무덤 약탈의 은유</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      While I plunder your sweet grave
                    </p>
                  </div>
                  <p>
                    이 부분은 파고드는.. 삽입하는 성교(penetrative intercourse)에 대한 확연한 레퍼런스가 
                    되는 부분입니다. SP의 정신에서 여자의 질(vagina)은 부패(putrescence)와 죽음의 원천으로 
                    생각되어지고 있다는 사실에 주목하세요.
                  </p>
                  <p className="mt-2">
                    SP는 무덤의 약탈자가 되어버렸습니다: 그녀의 육체 안으로 들어감으로 인해 그는 성스러운 
                    토지를 신성모독하고 편안하게 잠들어 있는 시체의 평화를 방해하고 있는 것입니다.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded">
                  <h4 className="font-bold text-orange-800 mb-2">✝️ 정치에서 종교로</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      And remember<br/>
                      Only the poor can be saved
                    </p>
                  </div>
                  <p>
                    SP는 혁명적인 마르크스의 아이디어를 언급함으로서 여자를 감동시키려고 하고 있습니다. 
                    나는 이 부분의 가사가 예수의 말인 '부자가 천국에 가기는 낙타가 바늘구멍 들어가기보다 
                    어렵다' 라는 말을 생각하게 한다고 말하고 싶습니다.
                  </p>
                  <p className="mt-2">
                    노래가 진행됨에 따라, SP의 꿈꾸는 정신은 정치적 미사여구를 종교적 센티멘탈과 혼동하기 시작합니다.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 rounded">
                  <h4 className="font-bold text-pink-800 mb-2">💄 립스틱과 위선</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      As I've always said I prefer your lips red<br/>
                      Not what the good Lord made<br/>
                      But what he intended
                    </p>
                  </div>
                  <p>
                    SP는 그의 여자가 립스틱을 사용해 인위적으로 아름답게 보이기를 선호합니다. 그러한 화장은 
                    확실하게 그녀의 성(gender)를 식별시키고 그녀가 섹스하기에 좋은 대상이라는 사실을 보여줍니다; 
                    이러한 SP의 고백은 그가 계속하여 얘기하고 있던 섹스에 있어서의 남녀평등이 위선이었다는 것을 보여줍니다.
                  </p>
                  <p className="mt-2">
                    정치는 SP의 복잡한 정신에서 완전히 이제는 종교에 의해 밀려나 있습니다. 
                    (정치적 연설과 시끄러운 종교의 설교사이의 공통점에 주목하세요: 둘은 모두 진지한 상투적인 말과 
                    부드러운 도덕적인 명령으로 가득 차 있습니다)
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 mb-2">🐕 "Doggy in the Window" - 최고의 악몽</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Then she picked up the doggy in the window<br/>
                      (The one with the waggly tail)<br/>
                      And she put him to bed between two bits of bread
                    </p>
                  </div>
                  <p>
                    이것은 정말로 제가 본것 중 가장 예술적으로 훌륭한 악몽의 유도 입니다. 
                    (Lynch 의 'Eraserhead' 는 본적이 없지만요 :-))
                  </p>
                  <p className="mt-2">
                    SP의 와이프는 불쌍한 남편을 그녀의 무시무시한 턱으로 거세하는 탐욕스러운 괴물로 변신합니다. 
                    SP의 죄책감은 이빨과 피의 유혹을 만들어 낸 것입니다.
                  </p>
                  <p className="mt-2">
                    이곳의 가사는 특별히 초 현실적이고 무시무시한 죽음의 레퍼런스 -doggy in the window- 
                    순진무구한 어린이의 도피처- 창문의 강아지를 그의 자리로 부터 끌어내려 샌드위치를 
                    만들어버리는(그의 귀여운 작은 꼬리는 불쌍하게도 떨리고 있습니다)-를 제공하고 있습니다.
                  </p>
                  <p className="mt-2">
                    혹시 내가 아무 의미도 없이 만든 가사에 뜻을 부여하고 있는 것인지도 모릅니다, 하지만 
                    이 레퍼런스가 The Pros and Cons의 주제와 부합하고 있다는 생각이 듭니다. 
                    암스테르담의 홍등가에서 창녀를 고르는 행위를 생각해 보세요.. 손님은 창녀들이 전시되어있는 
                    유리창을 주시합니다; 그는 마침내 한 여자를 선택하고 물어봅니다; 
                    How much is that doggy in the window?(또는 그와 비슷한 물음) 이부분은 저의 사견입니다만 
                    doggy라는 단어의 선택이 그러한 링크를 가능하게 한다고 말하고 싶네요. ;-)
                  </p>
                </div>
              </div>
            </div>
            
            {/* 4:47 AM Track */}
            <div className="mb-8 p-6 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-indigo-800 mb-4">
                😴 4:47 AM (The Remains of Our Love)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  SP는 자신이 세번째로 깨어났다는 사실을 알아차립니다, 하지만 그는 또다시 다른 꿈으로 빠져들고 말죠. 
                  그는 그가 태아의 자세로 누워 그가 방금 목격한 무시무시한 장면을 생각하며 떨고 있는 모습을 상상합니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h4 className="font-bold text-indigo-800 mb-2">👶 어린시절의 공포</h4>
                  <p>
                    아마도 꿈의 일부분은 어린시절 그가 생각했던 '침대밑의 괴물'에서 온것일 겁니다; 
                    지각이 있는 성인은 그러한 공포를 피하기 위하여 'pyjama coat over [their] head' 하지는 않죠.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded">
                  <p className="italic text-gray-700 text-center">
                    And she smiled as she finished her sandwich
                  </p>
                </div>
                
                <p>
                  SP의 관점이 변하였다는 사실에 주목하세요. 얼마전에 그의 앞에서 강아지를 잡아먹던 혐오스러운 
                  괴물은 사실 샌드위치를 먹고 있는 그의 와이프 였었습니다. 이것은 꿈이기 때문에 그는 그러한 
                  변신을 보고도 놀라지 않습니다. 그는 그것을 사실로 받아들일 뿐이죠.
                </p>
                
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800 mb-2">🔒 사랑의 소비</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      And her cold eyes fixed me to my dark history<br/>
                      As she brushed the remains<br/>
                      Of our love from the bed
                    </p>
                  </div>
                  <p>
                    SP는 그의 부정을 확인한 그의 와이프가 그녀의 그에대한 사랑을 모두 잃었다고 생각합니다. 
                    하지만 이 사랑의 상실은 소비적인 것이죠: 그녀는 사랑을 샌드위치처럼 삼켜버렸습니다. 
                    그의 심장을 씹어버린 후, 그녀는 그녀의 남은 사랑의 파편들이 그들 부부의 침대로부터 
                    씻겨나간 것을 확인합니다..
                  </p>
                </div>
              </div>
            </div>
            
            {/* 4:50 AM Track */}
            <div className="mb-8 p-6 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">
                🎣 4:50 AM (Go Fishing)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  이 트랙은 SP가 죄의식으로부터 탈피하여 새로운 생활을 하려는 긍정적인 꿈을 다루고 있습니다. 
                  그와 그의 와이프는 저주받은 오디세이로부터 숲속의 빈터로 여행합니다; 곡의 끝부분에서는 
                  SP가 결혼생활을 새로 시작하려는 야무진 꿈이 모두 무너지고 맙니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-emerald-200">
                  <h4 className="font-bold text-emerald-800 mb-2">🏛️ 1960년대 사회 변동</h4>
                  <p>
                    4:41 am의 Sexual Revolution에서처럼 꿈의 은유의 디테일은 SP의 1960년대의 기억으로부터 옵니다. 
                    1960년대 미국에는 사회적인 대 변동이 있었습니다. 모든 곳에서 권력은 위협받고 이미 축적된 
                    지혜는 타도 당했습니다.
                  </p>
                  <p className="mt-2">
                    그당시는 광대한 이상주의가 지배하던 시대입니다. 학생운동은 세계평화, 전 세계적인 인권 복귀를 
                    내세웠습니다 (또한 합법화된 광대한 마리화나의 재배가 있었죠 :-)
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🌱 'Back to the Earth' 운동</h4>
                  <p>
                    그 당시 인기를 많이 얻은 운동중의 하나가 'Back to the Earth'운동입니다. 이 운동은 인류가 
                    도시화, 문명화를 겪으면서 자연과의 연계를 잃어버렸다는 주장을 하고 있습니다. 진정한 만족을 
                    찾기위해서는 안전한 기술이라는 갑갑한 옷을 벗어던지고 고결한 야만인으로 돌아가야 한다는 것입니다.
                  </p>
                  <p className="mt-2">
                    SP의 낙관론을 Earth Mother quest와 비유하여, Waters는 SP의 소망이 얼마나 실현가능성이 
                    없는것인지를 보여주고 있습니다. 동시에 그는 문명의 도구가 박멸된 사회에대한 팬터지를 조소합니다. 
                    (우리가 행복과 안전을 얻기위해 기대고 있는 기술과 과학을 무시했다고 Waters는 생각하는 것입니다)
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded">
                  <h4 className="font-bold text-orange-800 mb-2">🌅 Beyond the Horizon - 미해석 구간</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Beyond the horizon<br/>
                      Where dream makers<br/>
                      Working white plastic processors<br/>
                      Invite the unwary<br/>
                      To reach for the pie in the sky
                    </p>
                  </div>
                  <p>
                    솔직히 말씀드려 이부분은 저도 이해를 못하겠습니다, 도와주실 분 안계신가요 ?
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded">
                  <p className="italic text-gray-700 text-center">
                    Go fishing my boy!
                  </p>
                </div>
                
                <p>
                  낚시꾼의 밑밥을 던져놓고 고기를 낚아챕니다. 이 가사는 SP가 자연에 대해 탐욕적인 태도를 
                  가지고 있다는 사실을 암시합니다; 그의 욕망은 자연을 굴복시키는 것입니다. 자연을 그의 
                  동물로 만들어 버리는 것이지, 자연과 조화를 이루며 공생하려는 것이 아닙니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-emerald-200">
                  <h4 className="font-bold text-emerald-800 mb-2">👨‍👧‍👦 아버지의 조언</h4>
                  <p>
                    이 가사가 쓰인 어조를 보면 SP는 그의 아버지가 그에게 했던 말을 되새기고 있다는 사실을 
                    알 수 있습니다. 또한 이 가사에는 성적인 풍자가 들어있습니다; 그의 아버지는 그가 난봉을 
                    부려 여자들을 많이 후리기를 암암리에 인정하였습니다. 이러한 여자낚기(Fishing)의 이미지는 
                    5:01 AM The Pros and Cons of Hitchhiking Part 10에 다시 나타납니다.. 이때는 완연한 
                    섹스에 대한 내용을 담고 있죠.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">🌱 자연과의 투쟁</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      We set out in the spring<br/>
                      We cut down some trees<br/>
                      And we trailed our ideals<br/>
                      Through the forest glade<br/>
                      We dammed up the stream
                    </p>
                  </div>
                  <p>
                    봄이라는것은 성장과 재탄생에 대한 완연한 심벌입니다. 하지만 그들은 자연을 이용하려하고 
                    있습니다.. 자연과 공존하려는 것이 아닙니다. 여기서 Waters가 다시한번 부동/속박 대 
                    움직임/자유의 대조적인 주제를 계속 사용하고 있다는 사실에 주목하세요. SP는 물의 자연스러운 
                    흐름을 저지시키고 댐을 만들어 물을 속박하려고 하고 있습니다.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">🎣 "Cooled their heels" - 감옥 용어</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      And the kids cooled their heels<br/>
                      In the fishing pool we'd made<br/>
                      We held hands and we exchanged bands
                    </p>
                  </div>
                  <p>
                    'cooled their heels'라는 텀은 여기서 무언가를 조롱하기 위하여 사용되었습니다. 
                    또한 'cooled their heels'라는 것은 '오랫동안 기다리다' 라는 뜻도 있죠. 이러한 표현은 
                    감옥 용어에서 많이 쓰입니다. (e.g. 유죄선고를 받으면 그는 20년동안 감옥에 갇히게 된다 
                    = If the accused is found guilty, he will cool his heels in jail for good twenty years)
                  </p>
                  <p className="mt-2">
                    Band를 exchange함으로서 SP와 그의 부인은 오래된 결혼의 서약을 다시한번 상기합니다.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🏠 "Practically lived off the land"</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      And we practically lived off the land
                    </p>
                  </div>
                  <p>
                    이러한 모디파이어의 삽입은 그러한 팬터지가 거의 실현될 뻔 했지만.. 완전히 이루어지지는 
                    않았다는 것을 의미합니다. SP는 아직도 종종 타협하여야 하고 가끔 마을로 내려가서 그의 총에 
                    장전할 총알을 사야 합니다(이것은 그가 아이디얼한 숲속 생활의 팬터지 중에서도 폭력의 위협이 
                    계속 존재한다는 것을 의미합니다)
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">💔 꿈의 붕괴</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      And the sun went down sooner each day.
                    </p>
                  </div>
                  <p>
                    밤은 낮을 삼키기 시작합니다: 이러한 팬터지는 겨울이 다가오면서 무너지기 시작합니다. 
                    Waters는 그러한 태양을 이용한 심벌리즘을 사용하기를 좋아하고 그의 작품 전체에 걸쳐서 
                    '태양'을 많이 사용합니다 (특별히 'the final cut'앨범의 'Two suns in the sunset'에 주목하세요)
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded">
                  <h4 className="font-bold text-purple-800 mb-2">🐴 Winnie the Pooh와 자기성찰</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Eeyore the old grey donkey stood by the side<br/>
                      Of the stream and he looked at himself in the water<br/>
                      "Pathetic" he said, "That's what it is"
                    </p>
                  </div>
                  <p>
                    저는 'the old gray donkey'가 SP자신을 나타낸다고 생각합니다. Eeyore가 개울에 비친 
                    자기모습을 쳐다보는 것은 SP의 자기자신의 인생에 대한 평가를 의미합니다. 이 가사들은 
                    SP가 자살을 가지고 시시덕 거리는것을 예고합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Part III */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">💣</span>
              <h2 className="text-2xl font-bold text-purple-600">Part III</h2>
            </div>
            
            <div className="bg-purple-50 p-4 rounded mb-6">
              <p className="text-sm text-purple-800">
                Roger Waters의 84년도 solo album 'The Pros and Cons of Hitchhiking' 가사 해석의 마지막 부분을 올립니다. 
                그동안 개인적으로.. 공개적으로 cheer up 해주신 분들께 감사드리구여.. 무엇보다도 본 해석의 뼈대와 비계.. 
                그리고 살점을 제공해준(그러니까 거의 전부) Matthew에게 다시한번 존경/사랑/감사 를 :-) 드립니다.
              </p>
              <p className="text-sm text-purple-600 mt-2">
                참.. 그리구 Roger Waters fanzine REG 에 의하면 Roger의 새 solo album (프랑스 혁명을 노래한 Rock Opera 
                Ça Ira ('싸이라' 라고 발음)) 이 거의 완성되어 내년쯤에는 들을 수 있을거라는 군요..
              </p>
              <p className="text-center font-bold text-purple-700 mt-3">Roger Waters RuleZZZ !!!!</p>
            </div>
            
            {/* Missing tracks from Part II */}
            <div className="mb-8 p-6 bg-slate-50 rounded-lg border-l-4 border-slate-500">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                🚚 4:58 AM (Dunroamin, Duncarin, Dunlivin)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  와이프한테서 쫓겨난 후로, SP는 내키지는 않지만 길거리 생활을 다시 시작합니다. 
                  그는 그의 비통에 찬 경험 이야기를 인내있게 들어주는 한 트럭 운전사의 차에 타게됩니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">🦆 "I nailed ducks to the wall"</h4>
                  <p>
                    Pink Floyd FAQ에 따르면 이 가사는 이차세계대전 직후의 속어적인 표현이랍니다. 
                    뜻은, 평화로운 생활로 안착하다.. 그런 뜻이라나요. 하지만 그 이미지는 폭력적이고 
                    전혀 안정과는 거리가 먼것 같습니다.. SP의 현재 상태를 잘 나타내죠..
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🏠 Done roaming, caring, living</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Dunroamin, duncarin, dunlivin
                    </p>
                  </div>
                  <p>
                    SP는 히치하이커로서의 행복을 찾으려고 노력합니다.. 그리곤 ..실패하죠. 
                    (그는 방랑을 끝낸것입니다.. - Done roaming -) 그는 안정된 결혼 생활에서 만족을 
                    찾으려고 합니다.. 그리곤 실패하죠 (그는 와이프를 사랑하기를 끝낸것입니다.. - Done caring -) 
                    자살만이 여기서 탈출하는 길인것 같습니다 (그는 삶을 끝낸것입니다 .. - Done living -)
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800 mb-2">🪨 "He's a rock standing out in an ocean"</h4>
                  <p>
                    그의 와이프의 새로 생긴 연인은 SP가 가지고 있지 못한 모든것의 심볼입니다. 
                    그는 이러한 불확실과 모순의 세계에서 강한 정력과 변치않음의, 부동의 표상입니다.
                  </p>
                  <div className="bg-gray-100 p-3 rounded mt-2">
                    <p className="italic text-gray-700 text-center text-sm">
                      (Get movin', get off the road ya Goddam faggot)
                    </p>
                  </div>
                  <p className="mt-2">
                    운전사는 밍기적거림과 부동/정지를 비웃습니다. 그의 생활은 계속된 움직임으로 점철되어 
                    있습니다.. 트럭 정류소와 햄버거 조인트로 얼룩져 있는..
                  </p>
                </div>
              </div>
            </div>
            
            {/* 4:56 AM Track */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🛣️ 4:56 AM (For the First Time Today - Part 1)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <div className="bg-white p-4 rounded border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">🔄 Part 1과 Part 2의 순서</h4>
                  <p>
                    왜 Waters는 Part 1을 Part 2의 뒤에 놓았을까요 ? 제가 생각해 본 바로는 Part 2의 가사에서 
                    말하는 일들이 SP의 미국에서의 경험뒤에 일어난 일이기 때문일것 같습니다. Part 1 
                    (사실 제 생각으로는 _기억_은 아니지만) 의 배경은 SP가 서독으로 여행가기 전에 시간을 
                    보낸 장소인 미국입니다.
                  </p>
                  <p className="mt-2">
                    Part 1은 SP의 고독에 대하여 노래하고 있습니다; 또 Part 2는 그 고독으로부터 SP가 
                    탈출하는것을 보여주고 있죠.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">😔 고독한 길가</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Being left here beside this lonesome road.
                    </p>
                  </div>
                  <p>
                    처음으로, SP는 히치하이킹/여행/난잡한 성관계(promiscuity)가 'Cons'- 반대/부정적인 면- 이 
                    있다는 사실을 직접 인정합니다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* 5:01 AM Track */}
            <div className="mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-800 mb-4">
                🏍️ 5:01 AM (The Pros and Cons of Hitchhiking Part 10)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  아주 훌륭하게 본 앨범이 전체적으로 일관된 주제로 점철되어 있다는것을 보여주는 트랙입니다. 
                  이곡의 제목은 The Pros and Cons of Hitchhiking일 뿐 아니라 또한 같은 제목의 앨범의 10번째 곡입니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">💀 진실과의 직면</h4>
                  <p>
                    이 꿈속에서, SP는 마침내 진실을 직면합니다: 히치하이킹/난잡한 관계는 칭찬받을 만한 일은 
                    아니었던 것입니다. 히치하이킹은, 쾌속의 차안에서 싸구려 스릴을 줄 수 있다는 유혹이 있지만.. 
                    극도로 위험한 일이었습니다.
                  </p>
                  <p className="mt-2">
                    당신이 히치하이킹을 하여 남의 차에 탔을때, 어떤 사이코가 뒷자리에 앉아있을지 누가 압니까 ? 
                    또 당신이 Mr. 고독 과 Mrs. 죄의식과 같이 차에 타게 된다면, 아침이 오기전에 어떤 감정의 
                    고통이 당신을 찍어누를지 누가 알겠습니까 ?
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800 mb-2">😈 Hell's Angel의 등장</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      An angel on a Harley<br/>
                      Pulls across to greet a fellow rolling stone
                    </p>
                  </div>
                  <p>
                    이 Angel 이라는 표현은 '천국'과는 관련이 없고 '지옥'과 관계 있습니다; 그는 'Hell's Angel' 입니다. 
                    제가 이 가사를 들을때마다 저는 _Raising Arizona_ 라는 영화의 담배를 노상 물고 있는 
                    현상금 사냥꾼이 생각납니다.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded">
                  <p className="italic text-gray-700 text-center">
                    Then he takes your hand<br/>
                    In some strange Californian handshake<br/>
                    And breaks the bone<br/>
                    (Have a nice day... Aaaaaagh)
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🤝 악수에서 폭력으로</h4>
                  <p>
                    다시 한번 흔한 제스쳐가 변태적으로 정말 쇼킹한 폭력으로 변합니다. (악수를 하다가 손의 뼈를 
                    부러뜨린거죠) 이러한 폭력은 모든 히치하이킹/인피델리티(부정, 간음)의 아이콘들을 나타냅니다: 
                    위험, 공포, 죄의식, 자기 혐오, 그리고 고독.
                  </p>
                  <p className="mt-2">
                    SP의 괴로와 하는 비명은 미친 폭주족 여자가 그에게 인사하는 'Have a nice day'라는 말과 함께 
                    들려옵니다. 굉장히 아이러니하고 초현실적인 임팩트를 줌과 더불어 이러한 'Have a nice day'라는 
                    황당한 인사는 서로 잘 모르는 친구들이 서로에게 표시하는 표면적이고, 진실되지 못한 인사를 나타냅니다.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">🎣 낚시의 쾌감</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      You flex your rod<br/>
                      Fish takes the hook
                    </p>
                  </div>
                  <p>
                    여기서 SP는 낚시를 하고 있습니다. 히치하이킹/난잡한 성관계 가 주는 흥분의 일부는 
                    '낚는 즐거움' 입니다. SP는 그의 낚시감을 쫓아다니고, 미끼를 끼우고, 새로운 낚시감에 
                    도전하는데서 엄청난 쾌감을 느낍니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">🛩️ 자살 충동과 요코 오노</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      I was standing on the leading edge<br/>
                      The Eastern seaboard spread before my eyes<br/>
                      "Jump" said Yoko Ono<br/>
                      "I'm too scared and too good looking" I cried
                    </p>
                  </div>
                  <p>
                    FAQ 에 보면 이 가사는 Waters가 같이 공연했던 한 drummer의 꿈으로부터 인용한 것이라고 합니다 
                    (그 꿈에서 오노 요코 (물론 고 존 레논의 미망인) 는 그에게 나르는 비행기의 날개에서 뛰어내리라고 유혹합니다.)
                  </p>
                  <p className="mt-2">
                    저는 Waters가 이 두 줄의 가사를 부르는 부분을 무척 좋아합니다; 오노(Ono)는 Oh, no ! 처럼 들리거든요.. 
                    그것은 두번째 줄 가사의 겁내하는 부분과 잘 어울립니다.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded">
                  <h4 className="font-bold text-purple-800 mb-2">🎬 Dick Tracy와 Shane</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Do you remember Dick Tracy?<br/>
                      Do you remember Shane?<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;(And mother wants you)<br/>
                      Could you see him selling tickets<br/>
                      Where the buzzard circles over<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;(Shane) (The body on the plain)
                    </p>
                  </div>
                  <p>
                    SP가 비행기위에서의 점프를 심사숙고 하는동안 그의 여태까지 살아온 인생은 그의 눈앞에서 
                    명멸하며 지나갑니다. 이 딕 트레이시와 쉐인은 그의 어린시절의 추억들입니다.
                  </p>
                  <p className="mt-2">
                    저는 _Shane_ 을 보기는 보았지만 그렇게 자세하게 이야기 하지는 못하겠습니다. 
                    이 'And mother wants you' 라는 부분은 영화의 거의 끝에가서 나오는 걸로 기억합니다. 
                    Shane의 아들이 Shane에게 가족들을 버리고 가지 말라고 애원하는 장면이지요.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800 mb-2">🎵 요코 오노에 대한 비판</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      Did you understand the music Yoko?<br/>
                      The bitch said something mystical ("Herro")
                    </p>
                  </div>
                  <p>
                    나는 Waters가 존 레논의 팬이라고 생각합니다(맞는 사실이죠). 하지만 Waters는 존 레논의 
                    음악에 Ono의 영향과 기여가 그다지 많지 않다고 생각합니다. 어쨌던간에, SP는 그녀의 
                    지혜를 의심합니다. 그렇기 때문에 그녀의 '충고' 또한 믿지 못하는 것이죠.
                  </p>
                  <p className="mt-2">
                    이렇게 Waters가 오노 요코를 개년(bitch)라고 표현하고 있음에도 그가 고소를 당하지 않는것을 
                    보면 신기합니다 :-) SP의 자살은 이루어지지 않았습니다.. SP의 이야기는 다음곡으로 넘어가게 됩니다..
                  </p>
                </div>
              </div>
            </div>
            
            {/* 5:06 AM Track */}
            <div className="mb-8 p-6 bg-teal-50 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-teal-800 mb-4">
                👀 5:06 AM (Every Strangers Eyes)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  이 꿈은 싸구려 식당차 안에서 시작됩니다. SP는 친절한 웨이트리스에 의해 그의 자살이라는 
                  몽상으로부터 깨어나게 됩니다. 여기서 그 웨이트리스가 그의 꿈이 처음 만난 호의적인 이방인이라는 
                  사실에 주목하세요.
                </p>
                
                <div className="bg-white p-4 rounded border border-teal-200">
                  <h4 className="font-bold text-teal-800 mb-2">😢 절망의 눈들</h4>
                  <p>
                    SP의 꿈은 그를 완전히 뒤흔들어 놓았습니다. 그는 그가 어디에 서있는지 알지 못합니다; 
                    그는 그 자신에게도 이방인이 되어있습니다. 그가 어느 방향으로 가던간에 그는 타인의 눈속에서 
                    자기 자신의 절망을 발견합니다.
                  </p>
                  <p className="mt-2">
                    베트남의 불구자, 집없이 방황하는 홈리스들, 기차에 달려들어 자살하는 인간들, 버려진 아이들, 
                    이혼한 사람들 그리고 스탬프 물감에 범벅이 된 패스포트의 사진들이 사방에서 그를 흘겨봅니다. 
                    각각은 모두 그의 인생의 공허함과 고독을 다시 느끼게 해주는 눈들입니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">🏔️ 언덕 위에서의 성찰</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      And now from where I stand<br/>
                      Upon this hill I plundered from the pool
                    </p>
                  </div>
                  <p>
                    드디어, SP는 그 자신의 고독으로부터 박차고 일어났습니다. 웨이트리스의 위로하는 말이 
                    그로하여금 그의 예전의 혼돈으로부터 탈출할수 있도록 하였습니다. 그는 이제야말로 그의 
                    인생을 올바로 쳐다볼 수 있게 된것 같습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-800 mb-2">🔔 희망의 조짐</h4>
                  <div className="bg-gray-100 p-3 rounded mb-3">
                    <p className="italic text-gray-700 text-center">
                      I see signs of half remembered days<br/>
                      I hear bells that chime in strange familiar ways<br/>
                      I recognise...<br/>
                      The hope you kindle in your eyes
                    </p>
                  </div>
                  <p>
                    행복했던 시절의 추억들입니다. 결혼식의 종소리이지요.. 그녀의 와이프의 눈은 다시한번 
                    사랑할 수 있는 _가능성_에 대하여 불타고 있습니다. (이곳은 4:47 AM 'The Remains of Our Love'에서 
                    'Her cold eyes fixed to my dark history'라는 부분과 무척 대조적입니다)
                  </p>
                </div>
              </div>
            </div>
            
            {/* 5:11 AM Track */}
            <div className="mb-8 p-6 bg-violet-50 rounded-lg border-l-4 border-violet-500">
              <h3 className="text-xl font-bold text-violet-800 mb-4">
                ✨ 5:11 AM (The Moment of Clarity)
              </h3>
              
              <div className="prose prose-sm text-gray-700 space-y-4">
                <p>
                  그러나 이 '정화의 순간(moment of clarity)는 4:58 am 'Dunroamin' Duncarin' Dunlivin' 의 
                  트럭 운전사의 호의처럼 사라지게 됩니다. 그렇게 얼마전까지만 해도 '명백하던' 문제의 해결방안은 
                  순식간에 사라집니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-violet-200">
                  <h4 className="font-bold text-violet-800 mb-2">😴 진정한 각성</h4>
                  <p>
                    SP의 통찰력은 환상 이었습니다; 꿈처럼 덧없는 것이었읍니다, 그가 얻었다고 생각한 해결방안은 
                    SP가 잠에서 깨어나면서 사라집니다. 드디어 처음으로, SP(Sleeping Protagonist, 잠자는 주인공)은 
                    잠에서 정말로 깨어납니다.
                  </p>
                  <p className="mt-2">
                    하지만 그는 아직도 두렵습니다. 그는 이것조차 또다른 꿈이 아닐까 생각합니다. 그는 그의 
                    와이프를 만져보기 위하여 손을 내밉니다. 그저 어둠속에서 그녀가 _아직도_ 거기 있다는 사실을 
                    확인하기 위해서죠(make sure in the darkness that [she] was still there), 그는 그녀가 
                    아직 깨어 있다는 사실에 무척 기뻤습니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded">
                  <h4 className="font-bold text-green-800 mb-2">😊 해피엔딩?</h4>
                  <p>
                    한쪽으로 생각하면 이 엔딩은 해피엔딩입니다. 주인공은 혼돈과 꿈의 세상이 뒤엉켜 만들어낸 
                    환상에서 깨어나 그가 놓아두고 온 그대로의 현실을 발견합니다; 그의 와이프는 그의 침대 옆에서 
                    그녀의 현실의 육체 그대로 누워 있습니다.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded">
                  <h4 className="font-bold text-red-800 mb-2">😞 아니면 해피엔딩이 아닌?</h4>
                  <p>
                    또 다른 쪽으로 생각하면 이것은 해피엔딩이 아닙니다. 주인공은 그의 꿈속에서 무의식의 이슈들을 
                    모험하였지만, 그가 그러한 꿈속의 혼돈으로부터 해결방안과 통찰력을 얻었다고 생각하는 순간 
                    그는 깨어나고 의식은 이러한 모든 이슈들을 그의 정신속의 혼돈의 동굴 속으로 던져놓고 맙니다.
                  </p>
                  <p className="mt-2">
                    이러한 이슈, 문제점들은 해결되지 않은 상태로 남아있습니다 그의 머리속, 어두운 구석에 
                    박쥐처럼 숨어있는 것이죠. 밤이면 깨어나 날개를 펼치고 다시 날아다닙니다. 
                    온통 비명을 지르면서 말이죠..
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg p-6 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">✨ 끝</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">🐟</div>
                <div className="text-sm text-gray-600 font-mono leading-relaxed">
                  o<br/>
                  o  It was a wedding ring,<br/>
                  \  __\\___    o    Destined to be found in a cheap hotel,<br/>
                  \/     o \ o      Lost in a kitchen sink,<br/>
                  /\_&lt;_____/        Or thrown in a wishing well.<br/>
                  /                  - Warm Wet Circles - Fish
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded mt-6">
              <h3 className="text-lg font-bold text-blue-800 mb-3">📚 역사적 의미</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                이 분석은 1984년 한국의 록 음악 문화와 해외 음반 수입의 어려움, 그리고 Pink Floyd 팬들의 
                열정을 보여주는 귀중한 자료입니다. Fish(신인철)님의 개인적 경험담과 Matthew의 전문적 
                분석이 결합되어, Roger Waters의 복잡한 심리적 서사를 깊이 있게 해석한 작품입니다.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link
              href="/misc"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              기타 정보로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
