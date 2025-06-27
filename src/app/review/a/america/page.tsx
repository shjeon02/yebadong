import React from "react";
import Link from "next/link";

export default function AmericaPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">America - Holiday ('74)</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Neo-Zao (김남웅)</span>
              <span className="ml-2 text-sm text-gray-600">zao@jean.iml.goldstar.co.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">가을과 추억의 철학적 성찰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">계절의 변화와 인간의 감성</h4>
                    <p>
                      계절이 바뀌는 절기다. 아침, 저녁과 낮의 기온 차이가 10도를 넘게되니 건강에 좋지 않은 영향을 끼치게 될 것인데 
                      이와는 또 다른 심리적, 물리적 현상이 일어나기도 한다. 바로 코끝에 일어나는 변화다. 
                      짧은시간 동안의 코끝 온도차가 인간의 마음에 '회상' 내지는 '추억'에 잠기는 시간적 공간을 제공해주는 것이다.
                    </p>
                    <p className="mt-2">
                      이 것은 직설적인 표현으로 코끝이 찡해지는 가을의 시정이라고 할 수 있겠다. 가을의 본격적인 탈바꿈은 단풍으로부터 시작되겠지만 아직은 이르다. 
                      9월초의 가을은 '가을이 선물하는 온도의 향취'로부터 시작된다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">일상 속의 감각적 체험</h4>
                    <p>
                      아침에 일어나서 회사로 향하는 길에 딛는 사각의 보도 블럭, (그야말로 미적감각이란 전혀 없이 만들어진 사각형의 블럭이다) 
                      이런 녀석들이 요즘에는 습기를 먹고 온도가 낮아져 주변의 흙들과 함께 추억의 향기를 풍긴다. 
                      앞을 향해 걸으면서 발을 느껴보면 보도블럭들이 예전과 다르게 폭신거리는 것을 느낀다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">가족과의 시간, 시간의 무상함</h4>
                    <p>
                      지난 주말, 가족과 함께 미사리 조정경기장에 놀러 갔었다. 산뜻한 가을 하늘은 아니었지만 패러글라이딩 패러슈트들이 떠 있는 공간이 그렇게 아름다울 수 없었다. 
                      이제는 어느정도 커버린 조카녀석의 힘있는 주먹질이 정겹게만 느껴진다. 환갑이 지나신 아버지나 산사람이 다 되신 어머니가 곁에 있는 것이 따뜻하다.
                    </p>
                    <p className="mt-2">
                      문득 10년 뒤의 일을 생각해보면 미래에 대한 환희보다는 연로하실 부모님 생각에 가슴이 아프기도 하다. 
                      하지만.. 20대의 2/3가 저물어가는 이 가을에 즐거운 과거를 추억하고 싶다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">AMERICA 앨범과의 만남</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">우연한 구매의 순간</h4>
                    <p>
                      어제, 9월 10일 퇴근 길.. 10시가 넘어 오는 밤.. 서초동에서 강남역으로의 길을 걸었다. 
                      고등학교 때 맞았음에도 불고하고 항체가 형성되지 않은 이유로 간염예방접종을 새롭게 한 왼팔의 새큰거림에도 퇴근길은 즐겁기만 했다.
                    </p>
                    <p className="mt-2">
                      신상에 복잡한 일이 생기면 아무 일도 하지 않는 버릇처럼 최근 2주간은 조용히 아무런 쇼핑도 만남도 하지 않았는데, 
                      강남역의 어느 가게에서 AMERICA의 <em>Holiday</em>를 보였다. 작년, 올해 국내에서의 기획된 아이템중에 가장 기쁘게 생각하는 
                      Waner Music의 STOP시리즈로 발매된 것이다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">AMERICA라는 이름에 대한 성찰</h4>
                    <p>
                      AMERICA! 파쇼의 이미지와 드림을 동시에 연결시키는 야누스적인 이름. 수없이 많은 담론이 뒤엉킨 이 AMERICA를 이름으로 삼은 밴드를 연상할 때 
                      나는 더 이상 비판자가 되고 싶지 않다.
                    </p>
                    <p className="mt-2">
                      변명이랄까.. 스스로 팩스 어메리카나에 순종하는 개인이 된다기 보다는 그냥 이들의 이름을 그러한 문제로 '비화(悲化)'시키고 싶지는 않은 것이다. 
                      어떤 면에서 보면 그만큼 나는 이질적인 문화에 길들여 있는 것이라고 말할 수 있다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">AMERICA 밴드 소개</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">밴드 결성과 배경</h4>
                    <p>
                      AMERICA는 1969년 런던의 고등학교를 졸업한 세명의 청년들에 의해 결성된 포크 록 밴드이다. 
                      이들의 부모는 미국인들이었지만 출생지가 영국이라는 점은 흥미롭다. 
                      밴드의 이름은 사실 Americana라는 상표의 쥬크박스에서 온 별 의미없는 것이라 할 수 있는데도 불구하고, 
                      미국적인 시골의 소박함과 인정을 다루는데 탁월함을 보여주어 동양적인 의미의 인연(hetu-pratyaya)의 중요함을 새삼 느끼게 된다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">멤버 구성</h4>
                    <p>
                      AMERICA는 현재까지 밴드를 유지하고 있는 듀이 버넬과 게리 베클리 그리고 77년 이후 밴드를 등지게 된 댄 픽에 의해 결성되었다. 
                      팬들은 듀이와 게리를 가리켜 위대한 멜로디 메이커라는 칭찬을 아끼지 않는다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">멜로디 메이커에 대한 철학적 고찰</h4>
                    <p>
                      우리는 흔히들 멜로디 메이커라는 말을 사용할 때 이러한 용어가 실제로 사용될만한 가의 진위에 의구심을 갖게 된다. 
                      가장 의구심이 일어나는 것은 순수음악계에서 있어왔던 많은 신동들의 선례로부터 비롯된다.
                    </p>
                    <p className="mt-2">
                      그렇다면 대중음악은 어떠한가? 평가절하적 발언은 아니지만 대중을 위하고 대중에 의하여 불려질 '노래'의 작곡에 음악이론적인 접근은 
                      그다지 큰 비중을 가질 필요가 없다는 것이다. <strong>아름다운 멜로디는 대중에 의해 판단된다!</strong> 
                      게리는 16세에 'I Need You'를, 듀이는 18세에 'A Horse With No Name'을 작곡했다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">앨범 히스토리</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">초기 성공</h4>
                    <p>
                      71년 AMERICA의 첫 앨범이 워너 브러더스를 통해 발표되어 '이름없는 말'이 미국에서 보다 큰 반향을 얻게 되었다. 
                      이들은 자신들에게 보다 호의적인 미국에서 영구거주를 결정하고, 두번째 앨범인 <em>Homecoming</em>을 내 놓게 된다.
                    </p>
                    <p className="mt-2">
                      자신들의 마더랜드에로의 귀향을 알리듯 캘리포니아에 대한 송가인 '벤츄라 하이웨이'는 큰 성공을 거두고, 
                      급기야 그래미 최우수 신인상을 얻게 된다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">조지 마틴과의 만남</h4>
                    <p>
                      이들은 두번째 앨범의 큰 성공이후 유능한 프로듀서의 영입에 대한 필요성을 절감하고 죠지 마틴을 맞아 들여 
                      세번째 앨범인 <em>Hat Trick</em>을 발매하기에 이른다. 
                      <em>Holiday</em>는 죠지 마틴 프로듀싱의 두번째 앨범이고, 통산 네번째 앨범이다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Holiday 앨범 분석</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">앨범의 특징</h4>
                    <p>
                      제목 그대로 휴일의 한적함과 미국 소시민의 생활을 담은 가사에 매력적인 편곡이 장식되어 있다. 
                      3인 시대의 AMERICA를 말할 때 특히 빼 놓을 수 없는 점이 어쿠스틱 악기의 아름다움이다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">어쿠스틱 기타의 미학</h4>
                    <p>
                      기본적으로 이들이 다루는 어쿠스틱 악기라고 해야 기타와 피아노가 전부일 것이다. 요즘에 회자되는 탐미적인 형태의 어쿠스틱 계열의 음악도 아니고, 
                      다만 기본적인 악기의 세심한 편곡에 의한 정통적인 것인다.
                    </p>
                    <p className="mt-2">
                      이들이 다루는 어쿠스틱 기타의 예를 들어보자. 금속의 현이 매달려 있는 나무통.. 현은 텐션을 가지고 있다. 
                      그 텐션에 어떻게 임팩트를 가하느냐에 따라 기타소리는 그야말로 다양한 음색을 지니게 된다. 
                      AMERICA가 추구하는 기타의 소리는 이 금속현을 너무나 부드럽게 매만진다.
                    </p>
                    <p className="mt-2">
                      '벤츄라 고속도로'나 '틴 맨'의 스트로크의 리듬에서 보여주는 이 부드러움과 감각은 그리 흔하게 들을 수 있는 것이 아니다. 
                      가히 70년대가 동세대와 후세에 배푼 선물이라 아니할 수 없다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">조지 마틴의 영향</h4>
                    <p>
                      죠지 마틴은 AMERICA에 어떤 영향을 주었나? 죠지 마틴이 AMERICA의 프로듀스를 담당하면서 바뀐부분은 관현악의 효과적인 첨가라고 할 것이다. 
                      그는 비틀즈에서도 그랬듯이 정통적인 관현악법에 의한 편곡을 쓸 정도의 역할을 하지는 않았다. 
                      그의 편곡은 있는 듯, 없는 듯 매우 효과적으로 곡의 양념 구실을 톡톡이 한다.
                    </p>
                    <p className="mt-2">
                      회상적인 분위기의 인트로덕션인 '미니어쳐'의 시작은 이 앨범 전체의 분위기를 나타내는 복선 역할을 충실히 나타내는데 
                      그 것은 스산함속의 희망같은 것이다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Lonely People 가사</h3>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm leading-relaxed">
                  <p>This is for all the lonely people.</p>
                  <p>Thinking that life has passed them by.</p>
                  <p>Don't give up.</p>
                  <p>Until you drink from the silver cup,</p>
                  <p>And ride that highway in the sky.</p>
                  <br/>
                  <p>This is for all the single people,</p>
                  <p>Thinking that love has left them dry.</p>
                  <p>Don't give up,</p>
                  <p>Until you drink from the silver cup,</p>
                  <p>And never know until you try.</p>
                  <br/>
                  <p>Well, I'm on my way,</p>
                  <p>Guess I'm back to stay,</p>
                  <p>Guess I'm on my way back home.</p>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">장자의 호접몽</h3>
                <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-400">
                  <p className="text-sm italic leading-relaxed">
                    옛날 장주는 꿈에 나비가 된다. 훨훨 나는 나비이다. 스스로 즐겁고, 아무 걱정 없이 장자 자신의 형태를 알지 못하게 된다. 
                    그러다가 갑자기 눈을 뜨니, 곧 다시 장자가 된다. 알 수 없도다. 장자가 꿈에 나비가 되는가, 현재의 장자는 나비가 꿈꾸고 있는 것이 아닌가.
                  </p>
                  <p className="text-sm mt-3 text-right font-medium">눈물젖은 Neo-Zao</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">America 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>결성:</strong> 1969년, 런던</li>
                  <li><strong>멤버:</strong> 듀이 버넬, 게리 베클리, 댄 픽 (77년 탈퇴)</li>
                  <li><strong>장르:</strong> 포크 록</li>
                  <li><strong>프로듀서:</strong> 조지 마틴 (3, 4집)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>미국적 시골의 소박함과 인정</li>
                  <li>뛰어난 멜로디 메이킹</li>
                  <li>어쿠스틱 기타의 부드러운 터치</li>
                  <li>관현악의 효과적 첨가</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>America</strong> (1971) - 데뷔작, "A Horse With No Name" 수록
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Homecoming</strong> (1972) - "Ventura Highway" 수록, 그래미 신인상
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Hat Trick</strong> (1973) - 조지 마틴 프로듀싱 시작
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Holiday</strong> (1974) - 조지 마틴 프로듀싱, "Lonely People" 수록
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 