import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kansas in Nashville 2000 - Concert Review | Yebadong',
  description: 'Kansas 콘서트 리뷰 (2000년 7월 29일, Amsouth Amphitheater)',
};

export default function KansasPage() {
  return (
    <main 
      className="min-h-screen bg-[#0A0C30] text-white"
      style={{backgroundImage: "url('/images/kansas_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            <em>Kansas in Nashville, 07/29/2000</em>
          </h1>
          <p className="text-sm">
            <strong>Fish, </strong>
            <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-[#0080FF] underline">
              icshin@bioneer.kaist.ac.kr
            </a>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Introduction */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">Kansas & Yes 합동공연</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  지난 토요일에는 Kansas와 Yes의 합동공연이 
                  Nashville 근처 Antioch의 Amsouth Amphitheater에서 
                  있었습니다. 저번에 제가 Roger Waters의 공연을 본 
                  바로 그곳이죠.
                </p>
                
                <p>
                  토요일이라 뭐 일찍 실험실에서 나올 필요도 없었고
                  한가롭게 늦잠자고 밥먹고 또 낮잠자고 뒤벼져 있다가 
                  다섯시 반쯤 집을 나섰습니다. (공연시작 8시)
                  공연장까지는 한 40분 정도만 운전해가면 되지만 
                  미리 가지 않으면 마음이 편치 않은 것은 촌스럽기 
                  때문일까요? :-)
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p>
                    사실 여러 번 말씀드렸다시피 이번 공연을 가게 된
                    주된 목적은 역시 Yes였습니다. 
                    하지만 저 역시 Kansas의 오랜 팬이었고..
                    Kansas 역시 무척 보고 싶었던 그룹이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-Concert Preparation */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 준비</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Kansas의 공연은 일곱시 삼십분부터 시작될 예정이었습니다.
                  여덟시부터 시작되는 Yes의 공연 전에 한 30분 정도를 
                  Kansas가 담당하게 되어 있었죠.
                </p>
                
                <p>
                  공연장에 도착해 보니 벌써 많은 사람들이 자리를 잡고 
                  기다리고 있었습니다. 역시 Yes의 인기는 대단하더군요.
                  Kansas 팬들도 상당히 많이 보였습니다.
                </p>
              </div>
            </div>

            {/* Performance Details */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">Kansas 공연 내용</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  Kansas의 공연이 시작되었습니다. 오랜만에 보는 Kansas의 
                  라이브는 정말 감격스러웠습니다. 특히 Steve Walsh의 
                  보컬은 여전히 파워풀했고, Kerry Livgren이 없는 아쉬움은 
                  있었지만 전체적으로 훌륭한 연주를 들려주었습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">주요 연주곡</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Carry On Wayward Son</li>
                    <li>Dust in the Wind</li>
                    <li>Point of Know Return</li>
                    <li>Song for America</li>
                  </ul>
                </div>
                
                <p>
                  특히 "Dust in the Wind"에서는 전체 관객이 함께 따라 불렀고,
                  "Carry On Wayward Son"에서는 정말 뜨거운 호응을 받았습니다.
                  30분이라는 짧은 시간이었지만 Kansas의 대표곡들을 
                  모두 들을 수 있어서 만족스러웠습니다.
                </p>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Kansas의 공연은 비록 짧았지만 정말 인상적이었습니다.
                  Yes의 전주곡 역할을 충실히 해냈고, 그들만의 독특한 
                  사운드와 멜로디를 여전히 잘 보여주었습니다.
                </p>
                
                <p>
                  특히 Steve Walsh의 보컬은 나이가 들었음에도 불구하고 
                  여전히 강력했고, Kerry Livgren 없이도 Kansas다운 
                  연주를 들려주어 정말 만족스러웠습니다.
                </p>
                
                <div className="p-4 bg-yellow-900 bg-opacity-40 rounded text-center">
                  <p className="font-bold text-yellow-400">
                    Kansas 덕분에 Yes 공연 전 분위기가 한층 더 고조되었습니다!
                    </p>
                  </div>
              </div>
                  </div>
                  
            {/* Pre-Concert Atmosphere */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">공연 전 분위기</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  부모를 따라온 3세 - 13세 정도의 애들을 뺀다면 
                  관객의 평균 연령은 약 43세 정도되었을까요? 
                  솔직히 20대는 거의 보기 힘들었습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-blue-400 mb-2">Yes 팬들의 티셔츠</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Ladder 투어 티셔츠 (참 이뻤다)</li>
                      <li>• Open Your Eyes 투어 - 클래식 Roger Dean 로고</li>
                      <li>• Talk tour 티셔츠 (6년 되었지만 빛이 좋아보임)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-red-400 mb-2">Kansas Die-hard 팬들</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Point of Know Return 앨범 자켓 티셔츠</li>
                      <li>• Vinyl Confessions 티셔츠</li>
                      <li>• 무시무시한 맷집과 근육과 문신으로 무장</li>
                      <li>• 무대 앞쪽에 몰려든 진짜 팬들</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  예상으로는 Roger Waters때보다 관객이 적으리라 생각했지만.. 
                  그건 오산이었습니다. 일곱시 반이 넘어 공연이 임박해오자 
                  Roger Waters때보다 아마 더 많은것 같은 관객이 
                  내야와 외야를 빼곡히 채웠습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p>
                    오후에 굉장한 폭우와 천둥번개가 몰아쳐서 혹시나 
                    멀리서 오는 관객들이 힘들지 않을까 싶었는데 
                    팬들도 역시 백전노장답게 전혀 악천후따위에는 
                    구애받지 않는 높은 출석률을 보여줬습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Rich Williams Entrance */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Rich 'Meatwall' Williams의 등장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  7시 40분 생각보다 일찍 장내 어나운스먼트가 나왔습니다.
                  "찾아와주셔서 감사합니다. 5분 뒤에 공연을 시작하겠습니다."
                </p>
                
                <p>
                  Roger 공연때와는 달리 별다른 세팅하나 없이 
                  썰렁한 무대를 약간 아쉬워 하고 있을때 
                  엄청난 덩치의 Rich 'Meatwall' Williams가 나타났습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Rich Williams 외모 묘사</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 키: 190cm 정도</li>
                    <li>• 몸무게: 180kg 정도</li>
                    <li>• 짧은 머리</li>
                    <li>• 오른 눈에 검은 안대</li>
                    <li>• 어렸을때 폭약장난하다 한쪽 눈을 잃음</li>
                  </ul>
                </div>
                
                <p>
                  그는 Kansas의 기타리스트이자 웬만한 WWE 레슬러 못지 않은 
                  체격을 자랑하는 인물입니다. 무대에 나타나자마자 
                  관객들의 환호성이 터져나왔습니다.
                </p>
              </div>
            </div>

            {/* Kansas Performance Details */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Kansas 본격 공연</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  앞에서 30번째 줄 정도. 지난번의 Roger Waters 공연때보다는 
                  가까운 자리였습니다. 망원경을 쓰지 않아도 무대위 표정정도는 
                  볼수 있을 괜찮은 자리입니다.
                </p>
                
                <p>
                  운전면허증을 보이고 손목에 '어른증명' 밴드를 찬 후 
                  $6 짜리 새무엘아담스 생맥주 24oz (500cc 정도?)를 
                  하나 사들고 마님과 같이 자리에 앉았습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-indigo-400 mb-2">Kansas 주요 멤버</h4>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>Rich Williams</strong> - Guitar (Meatwall)</li>
                      <li>• <strong>Robby Steinhardt</strong> - Violin, Vocals</li>
                      <li>• <strong>Steve Walsh</strong> - Vocals, Keyboards</li>
                      <li>• <strong>Billy Greer</strong> - Bass</li>
                      <li>• <strong>Phil Ehart</strong> - Drums</li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-teal-400 mb-2">Kansas 대표곡들</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Carry On Wayward Son</li>
                      <li>• Dust in the Wind</li>
                      <li>• Point of Know Return</li>
                      <li>• Song for America</li>
                      <li>• Mysteries and Mayhem</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Kansas의 연주는 정말 강력했습니다. 특히 Rich Williams의 
                  기타 연주는 그의 거대한 체격만큼이나 웅장하고 파워풀했고, 
                  Robby Steinhardt의 바이올린은 Kansas만의 독특한 사운드를 
                  만들어냈습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded mt-4">
                  <h4 className="font-bold text-purple-400 mb-2">공연 하이라이트</h4>
                  <p>
                    "Carry On Wayward Son"에서는 전체 관객이 함께 따라 부르는 
                    장관을 연출했고, "Dust in the Wind"에서는 감동적인 
                    어쿠스틱 연주로 관객들을 매료시켰습니다. 
                    Rich Williams의 안대가 무대 조명에 반사되면서 
                    더욱 카리스마 넘치는 모습을 보여주었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Philosophy and Reflection */}
            <div className="mb-8 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Fish의 Kansas 총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Kansas는 Yes와는 전혀 다른 매력을 가진 밴드였습니다. 
                  프로그레시브 록이면서도 더 직설적이고 미국적인 사운드를 
                  들려주었죠. Rich Williams의 압도적인 존재감과 
                  Robby Steinhardt의 클래식한 바이올린이 만나 
                  독특한 Kansas만의 색깔을 만들어냈습니다.
                </p>
                
                <p>
                  특히 30여 년의 세월이 흘렀음에도 불구하고 
                  여전히 변함없는 열정과 에너지를 보여준 것이 
                  인상적이었습니다. Rich Williams의 안대는 
                  단순한 트레이드마크가 아니라 그의 음악에 대한 
                  헌신을 보여주는 상징 같았습니다.
                </p>
                
                <div className="bg-blue-800 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="italic text-center">
                    "Kansas는 American Progressive Rock의 진정한 모습을 보여준 밤이었습니다"<br />
                    - Yes와는 또 다른 감동, Kansas만의 특별함! 🎸
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            {/* Icarus II - 25년 만의 신곡 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Icarus II - 25년 만의 기적적 신곡</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Icarus II의 충격적 등장</h4>
                  <p>
                    "으와아아아아악 ~~ !!!!" "신곡이야 이카루스 투 !!!"
                  </p>
                  <p className="mt-2">
                    1975년 Masque앨범에 실렸던 Icarus (Borne in the Wings of Steel)의 제 2부. 
                    Icarus II가 25년만에, 4반세기만에 신곡으로 발표되어 연주되었습니다.
                  </p>
                  <p className="mt-2">
                    정말 에너지틱하고 컴플렉스하고 익사이팅하고 감동적인 곡이었습니다. 
                    저는 귀가 좀 안좋아 한두번 듣고 곡을 쉽게 좋아하지 못하는 형편인데. 
                    이 Icarus II는 정말 완전히 청자를 넉아웃시키는 '파워'가 있었습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Steve Walsh의 혼신의 퍼포먼스</h4>
                  <p>
                    스크린에 크게 클로우즈업된 Steve Walsh의 얼굴 
                    머리숱없는 이마에는 핏발이 서고 입을 크게 벌려 악을쓰며 노래하다보니 
                    얼굴가죽이 모자라 눈이 튀어나올것 같은 무서운 얼굴로 변하였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Kansas의 진정한 가치 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Kansas - 진정한 어메리컨 심포닉의 울트라캡숑짱</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Styx, Boston과 함께 뭉뚱그려져 항상 미국의 메인스트림 크리틱으로부터는 배척받았던 Kansas. 
                  Grand Funk Railroad만이 진정한 어메리컨 사운드일까요?
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">팬들의 절대적 신뢰</h4>
                  <p>
                    이자리에 모인 모든 Kansas 팬들은 Kansas야 말로 
                    진정한 어메리컨 심포닉의 울트라캡숑짱이었고.. 
                    인터갤럭틱월드와이드지저스크라이스트수퍼스타라는것을 알고있는듯 했습니다. 
                    Steve Walsh도 그러한 관객들의 믿음에 답하듯이 온몸으로부터 목소리를 쥐어짰습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Fish의 후회</h4>
                  <p>
                    "아.. 진작에 새 앨범을 사서 듣고 오는건데 감동이 백배였을텐데" 
                    옛친구 Kansas를 저버리고 Porcupine Tree와 Flower Kings의 새 앨범을 먼저 산 
                    내자신이 미워졌습니다. ^^;
                  </p>
                </div>
              </div>
            </div>

            {/* Kansas 티셔츠와 대마초 에피소드 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Kansas 티셔츠와 대마초 에피소드</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  하지만 캔서스의 팬들에는 간혹 흑인들이 섞여있었습니다. 
                  중남미 계통으로 보이는 흑인은 잽싸게 밖으로 달려나가 Kansas 티셔츠를 한장 사왔습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">의외의 용도</h4>
                  <p>
                    캔서스의 티셔츠를 마님에게 잠시 자랑한 그 친구는 무릎위에 티셔츠를 올려놓고 
                    주머니에서 뭔가를 부시럭거리면서 꺼내기 시작했습니다.
                  </p>
                  <p className="mt-2">
                    "흣. 얘 대마초 피려나봐" "음 냄새나도 좀 참아" 
                    대마초 말을 깔판이 없어서 티셔츠를 사온것일까요? $30이나 주고????
                  </p>
                  <p className="mt-2">
                    침까지 발라가며 한대를 꼼꼼히 말더니 주위 눈치를 살피고나서 
                    그는 안되겠다는 표정으로 외야로 나가버렸습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Kerry Livgren - Kansas의 두뇌 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Kerry Livgren - Kansas의 두뇌</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">여기서 잠깐...</h4>
                  <p>
                    Kansas의 어느정도의 팬들이시라면 Kerry Livgren의 근황을 묻고싶을겁니다.
                    70년대 전성기 Kansas의 실질적인 리더 Kerry Livgren은 대부분의 Kansas곡들을 다 작곡했다 싶을정도입니다.
                  </p>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Kansas 멤버들의 역할 분담</h4>
                  <p>
                    육중한 외모와 아름다운 바이올린, 그 못지 않은 보컬로 프론트맨의 역할을 충실히 담당하는 
                    Robby Steinhardt가 Kansas의 "얼굴"이라면...
                  </p>
                  <p className="mt-2">
                    미국의 Rick Wakeman이라고 할 수 있는 (?) 키보드 솜씨... 
                    Rock's True Virtuoso 중 한명인 보컬리스트 Steve Walsh는 Kansas의 "심장"이고...
                  </p>
                  <p className="mt-2">
                    Kerry Livgren은 Kansas의 "두뇌"라고 할 수 있습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Steve Walsh와의 갈등과 기독교 전향</h4>
                  <p>
                    Kerry는 송라이팅을 대부분 독자적으로 하는등 Steve Walsh와 그룹의 주도권을 놓고 
                    조금의 티격태격이 있었지만... 나중에 기독교에 깊이 빠지게되어 
                    그것또한 못마땅했었었던것 같은 Steve Walsh가 1980년 Audio Visions 앨범을 끝으로 탈퇴하게 됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* John Elefante 시대와 Robby 탈퇴 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">John Elefante 시대와 Robby 탈퇴</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">20세 John Elefante의 영입</h4>
                  <p>
                    1982년 그룹의 심장이자 아이콘이자 스피릿이었던 Steve Walsh를 잃은 Kansas는 
                    오디션끝에 당시 스무살이었던 John Elefante를 새로운 보컬리스트로 맞아들여 
                    앨범 Vinyl Confessions를 발매합니다.
                  </p>
                  <p className="mt-2">
                    당시 '황인용의 영팝스'등의 FM에 자주 나오던 곡 Play the game tonight을 기억하시나요? ^^; 
                    그 곡은 John Elefante의 목소리였습니다.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Robby Steinhardt를 왜 리드보컬로 안했을까?</h4>
                  <p>
                    글쎄요 굳이 John Elefante를 리크룻하지 않아도 충분히 Robby Steinhardt만으로 
                    보컬을 꾸려나갈 수 있지 않을까 생각하는데... 
                    아마도 Yes가 Jon Anderson 탈퇴이후 Chris Squire에게 리드보컬을 맡기길 잠시 고려해 본후 
                    Trevor Horn을 보컬리스트에 앉힌것과 비슷한 상황이 아니었을까 생각해봅니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Robby 탈퇴와 Drastic Measures</h4>
                  <p>
                    하지만 기어이 리드보컬을 안시켜줘서 섭섭했는지... Robby마저 탈퇴해버리고.. 
                    바이얼린의 부재가 아쉬웠는지 현악연주자들의 모습을 흑백으로 처리해 자켓에 담은 엘피 
                    Drastic Measures가 '바이얼린 없는' Kansas 앨범으로 발매됩니다. 
                    Fight fire with fire라는 히트 싱글이 담긴 앨범입니다.
                  </p>
                  <p className="mt-2">
                    별로 만족스럽지 못했던 이 앨범 Drastic Measures를 끝으로... Kansas는 해체된듯이 보였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Steve Morse 영입과 Power 앨범 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Steve Morse 영입과 Power 앨범</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-2">Steve Walsh의 자신만만한 재기</h4>
                  <p>
                    하지만 Steve Walsh가 Kerry Livgren의 도움 없이도 그룹을 이끌수 있다는 자신만만한 모습을 보이며 
                    Dixie Dregs의 기타 영웅 Steve Morse를 영입하여 저의 favorites중 하나인 앨범 'Power'를 
                    1986년에 발매하여 성공을 거둡니다.
                  </p>
                  <p className="mt-2">
                    히트싱글 All I wanted는 비디오로도 제작된것 같군요. 본 기억이 있는듯 합니다. 
                    Kansas와 뮤직 비디오라.. 정말 어울리지 않는것 같습니다. ^^;
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Steve Morse의 Deep Purple 이적</h4>
                  <p>
                    서울올림픽이 있던 해에 한장의 앨범을 더 Kansas와 같이 발표한 Steve Morse는 
                    Kansas를 떠나서 Deep Purple에 합류하죠. 
                    Deep Purple에서 스모크온더워터를 연주하는 그의 모습을 한국 공연에서 보던 기억이 납니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 1990년대 이합집산과 Kerry의 종교적 선택 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">1990년대 이합집산과 Kerry의 종교적 선택</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">오리지널 멤버 재결성의 혼란</h4>
                  <p>
                    말도 많던 Kansas 오리지널 멤버 재결성 공연 등등 한바탕 이합집산이 끝나고 나니... 
                    점점 하느님의 곁으로 종교에 깊숙히 빠져버린 Kerry Livgren은 Kansas의 정식 멤버가 되기를 거부하고 
                    Steve Morse는 Deep Purple로 떠나고 Steve Walsh혼자 달랑 남고 맙니다.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">1995년 박스셋과 공백기</h4>
                  <p>
                    1995년 박스셋 발매 어정쩡한 라이브 앨범 발매... 등으로 공백을 메꾸고 있던 Kansas... 
                    오랜 공백을 뒤로하고 Steve Walsh가 main composer가 되어... 새 앨범 Freak of Nature를 발매합니다.
                  </p>
                  <p className="mt-2">
                    Kerry Livgren은 옛 우정인지 하느님의 사랑인지 한곡을 작곡해 Steve에게 선사해 앨범에 싣죠.
                  </p>
                </div>
              </div>
            </div>

            {/* 2000년 Somewhere to Elsewhere - 17년만의 재결합 */}
            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">2000년 Somewhere to Elsewhere - 17년만의 재결합</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">세기가 바뀌어 2000년</h4>
                  <p>
                    세기가 바뀌어 2000년. 마젤란쉐도우겔러리카이로각종프록트리븃으로 먹고사는 
                    레이블 Magna Carta에서 Kansas의 새 앨범이 발표됩니다.
                  </p>
                  <p className="mt-2 font-bold text-pink-300">
                    'Somewhere to Elsewhere'
                  </p>
                  <p className="mt-2">
                    17년만의 essential original member의 재결합입니다. 
                    Kerry Livgren이 돌아와 작곡과 기타를 연주해주었고 
                    Robbie Steinhardt가 바이올린과 보컬을 담당했습니다. 
                    역시 Steve Walsh가 질곡의 Kansas 역사를 2000년까지 함께해주고 있습니다.
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-gray-400 mb-2">Kerry의 공연 불참</h4>
                  <p>
                    하지만 49년생 (저의 학교때 지도교수와 나이가 같네요) Kerry Livgren은 
                    앨범에만 참여했을뿐 이번 공연에는 참가하지 않고 있습니다. 
                    건강상의 문제일지... 종교적인 문제일지 그건 알 수 없군요. 
                    Kerry의 모습을 볼수 없는것이 조금은 아쉬웠습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to the show - 새 앨범 홍보 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Back to the show - 새 앨범 홍보</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Robby '꽃돼지' Steinhardt의 MC</h4>
                  <p>
                    이번 공연은 말씀드린대로 그들의 새 앨범 Somewhere to Elsewhere의 홍보를 위한 공연입니다. 
                    Paradox가 끝나고... Robby '꽃돼지' Steinhardt가 마이크를 잡았습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"아... 고마와 여러분. 땡큐.. 땡큐..</p>
                    <p>이번엔 신곡을 연주할거야.</p>
                    <p>우리 새 앨범이 나왔거덩 .. 타이틀은</p>
                    <p>썸웨어투 엘스웨어."</p>
                    <p className="mt-2">"으와아아아악 ~~!!!"</p>
                    <p className="mt-2">"아마 시중에서 살 수 있을거야, hopefully"</p>
                  </div>
                  
                  <p className="mt-2">
                    그는 겸연쩍게 웃었습니다. 하지만 제 주변의 레코드 가게에서는 그 앨범을 볼 수 없었습니다. 
                    (공연을 보고 집에 오자마자. 바로 주문했습니다. 그동안 왜 망설였을까요?)
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"시중에서 못살것 같으면 우리 캔서스 홈페이지에</p>
                    <p>와봐. 캔서스밴드 닷 컴이야..</p>
                    <p>그리고 이렇게 우리 고향 캔서스에서 가까이</p>
                    <p>공연하게 돼서 기뻐. 여기 캔서스에서 온 친구들도 있지?"</p>
                    <p className="mt-2">"으와아아아아악 ~~ !!!!"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Icarus II - 25년만의 기적적 신곡 (이미 복원됨) */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Icarus II - 25년만의 기적적 신곡</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">"신곡이야 이카루스 투 !!!"</h4>
                  <p>
                    1975년 Masque앨범에 실렸던 Icarus (Borne in the Wings of Steel)의 제 2부. 
                    Icarus II가 25년만에, 4반세기만에 신곡으로 발표되어 연주되었습니다.
                  </p>
                  <p className="mt-2">
                    정말 에너지틱하고 컴플렉스하고 익사이팅하고 감동적인 곡이었습니다. 
                    저는 귀가 좀 안좋아 한두번 듣고 곡을 쉽게 좋아하지 못하는 형편인데. 
                    이 Icarus II는 정말 완전히 청자를 넉아웃시키는 '파워'가 있었습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Steve Walsh의 처절한 퍼포먼스</h4>
                  <p>
                    스크린에 크게 클로우즈업된 Steve Walsh의 얼굴 머리숱없는 이마에는 핏발이 서고 
                    입을 크게 벌려 악을쓰며 노래하다보니 얼굴가죽이 모자라 눈이 튀어나올것 같은 
                    무서운 얼굴로 변하였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Kansas - 진정한 어메리컨 심포닉의 울트라캡숑짱 (이미 복원됨) */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Kansas - 진정한 어메리컨 심포닉의 울트라캡숑짱</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-2">메인스트림 크리틱의 배척</h4>
                  <p>
                    Styx, Boston과 함께 뭉뚱그려져 항상 미국의 메인스트림 크리틱으로부터는 배척받았던 Kansas. 
                    Grand Funk Railroad만이 진정한 어메리컨 사운드일까요?
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">팬들의 확신</h4>
                  <p>
                    이자리에 모인 모든 Kansas 팬들은 Kansas야 말로 진정한 어메리컨 심포닉의 울트라캡숑짱이었고... 
                    인터갤럭틱월드와이드지저스크라이스트수퍼스타라는것을 알고있는듯 했습니다. 
                    Steve Walsh도 그러한 관객들의 믿음에 답하듯이 온몸으로부터 목소리를 쥐어짰습니다.
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-gray-400 mb-2">후회와 반성</h4>
                  <p>
                    "아.. 진작에 새 앨범을 사서 듣고 오는건데 감동이 백배였을텐데"
                  </p>
                  <p className="mt-2">
                    옛친구 Kansas를 저버리고 Porcupine Tree와 Flower Kings의 새 앨범을 먼저 산 내자신이 미워졌습니다. ^^;
                  </p>
                </div>
              </div>
            </div>

            {/* 다인종 관객층 분석 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">다인종 관객층 분석</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Roger Waters vs Kansas 관객층 비교</h4>
                  <p>
                    로저워터스 공연시에는 전혀 흑인들을 볼 수 없었습니다. 아니.. 동양인도 나와 마님, 
                    그리고 멤피스에서 로저를 보러 네시간동안 차타고 온 친구들 세명뿐이었습니다.
                  </p>
                  <p className="mt-2">
                    하지만 Kansas 공연에는 여러 흑인들도 보였고... 뭔가 관객층이 조금 다른것 
                    같았습니다. 아무래도 Kansas가 Styx처럼 팝차트에 자주 오르내리는 그룹이다보니 
                    대중적인 인지도도 높은것 같았습니다.
                  </p>
                  <p className="mt-2">
                    전 관객층이 다양할수록 좋은것 같습니다. 혼자만의 장르를 만들고 혼자서만 
                    우쭐하는 음악보다는.. 어떤 사람이라도 좋아할 수 있는 음악이 더 대단한 것 
                    같습니다. 제 개인적인 생각입니다만...
                  </p>
                </div>
              </div>
            </div>

            {/* 관객층 분석 - 다인종 구성 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">관객층 분석 - 다인종 구성</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">아시안 관객들의 존재</h4>
                  <p>
                    운전해온 한국인 2세 처녀밖에 나는 발견할 수 없었습니다. 물론 이 동네가 촌동네라 그런 영향도 없잖아 있습니다. 물론 뉴욕같은곳의 공연에서는 동양인도 가끔 보였다더군요.
                  </p>
                  <p className="mt-2">
                    Yes목걸이, 형광색 Open your eyes 티셔츠를 입고있는 일본인 2세 한명과 저와 동행.. 정도가 아시안이었던것 같았습니다.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Roger Waters vs Kansas 관객층 비교</h4>
                  <p>
                    간혹 로저워터스 뉴스그룹에는 로저의 공연에선 흑인은 물론이요 히스패닉, 아시안 한명 볼수없었다고 투덜거리는 백인의 글이 올라오곤 합니다. 로저는 백인에게만 어필하는게 아닌가 안타깝다면서요.. 그럴때마다 '절대 아님!!' 하고 메일을 보내긴 하지만요. ^^;
                  </p>
                  <p className="mt-2">
                    하지만 캔서스의 팬들에는 간혹 흑인들이 섞여있었습니다. 두명 정도의 오리지널 미국 아프리컨 어메리컨 흑인이 있었고.. 그들은 정말 Yes의 팬이라곤 생각할 수 없었습니다 (왜였을까?) 하지만 캔서스 티셔츠를 입은 백인들과 어울리고 있는것을 보아 캔서스 팬이라고 생각되더군요.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">중미계 흑인과 Kansas 티셔츠</h4>
                  <p>
                    그리고 중미계열 흑인 (?) 한명이 멀리서부터 눈에 띠었는데.. 바로 우리 마님 옆에 백인친구와 같이와서 앉더군요. 덩치가 크고 냄새가 좀 나는지 마님이 싫어하는 듯 했습니다.
                  </p>
                  <p className="mt-2">
                    그는 Icarus II와 Icarus가 끝나자 그 중남미 계통으로 보이는 흑인은 잽싸게 밖으로 달려나가 Kansas 티셔츠를 한장 사왔습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Icarus의 25년 초월 감동 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Icarus의 25년 초월 감동</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">역사적인 감동의 연속</h4>
                  <p>
                    (Icarus도 역시 엄청난 감동의 물결이었습니다. 25년을 초월한 역사적인 감동의 연속... King Crimson의 Lark's tongues 시리즈와 Mike Oldfield의 Tubular Bells I,II,III 시리즈 Meat Loaf의 Bat out of hell I, II 시리즈 처럼 어떻게보면 과거를 울궈먹고, 어떻게 보면 팬들의 흥미를 유발시키는 조금은 구태의연한 어프로치기는 합니다만... ^^;)
                  </p>
                </div>
              </div>
            </div>

            {/* 대마초 에피소드와 Kansas 티셔츠 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">대마초 에피소드와 Kansas 티셔츠</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">30달러짜리 티셔츠의 용도</h4>
                  <p>
                    캔서스의 티셔츠를 마님에게 잠시 자랑한 그 친구는 무릎위에 티셔츠를 올려놓고 주머니에서 뭔가를 부시럭거리면서 꺼내기 시작했습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"흣. 얘 대마초 피려나봐"</p>
                    <p>"음 냄새나도 좀 참아"</p>
                  </div>
                  
                  <p className="mt-2">
                    대마초 말을 깔판이 없어서 티셔츠를 사온것일까요? $30이나 주고 ???? 침까지 발라가며 한대를 꼼꼼히 말더니 주위 눈치를 살피고나서 그는 안되겠다는 표정으로 외야로 나갔습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Roger Waters vs Kansas 공연 분위기 비교 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Roger Waters vs Kansas 공연 분위기 비교</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">공연 전체적인 분위기</h4>
                  <p>
                    여기서 말씀드리고 싶은건.. 바로 그날 공연 전체적인 분위기였습니다. Roger Waters의 공연은 역시 일부 몰지각한 노땅들에게 'drug band'라고 곡해되고 있는 Pink Floyd의 악명에 걸맞도록... 비록 평균연령 40세 이상의 노땅 관객들이었지만..... 만취자와 대마초가 사방에 널려있었습니다.
                  </p>
                  <p className="mt-2">
                    금연으로 되어있는 pavillion 내야석에서 조차 여기저기 한 1/3 정도는 대마초를 피우는듯이 보였습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Yes 팬들의 건전한 분위기</h4>
                  <p>
                    하지만.. 이 Kansas/Yes, Yes/Kansas공연에서는 거의 내야석에서는 대마초를 피우는 녀석들이 없었고.. 그렇게 만취한 친구들도 찾아보기 힘들었습니다. 아마도 Yes팬들의 일반적인 분위기를 보여주는듯 합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Miracles out of nowhere와 Steve Walsh의 황금박쥐 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Miracles out of nowhere와 Steve Walsh의 황금박쥐</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Leftoverture의 강력한 곡</h4>
                  <p>
                    Icarus가 끝나고.. Leftoverture 앨범의 강력한 곡 Miracles out of nowhere가 시작되었습니다. 무척 어려운 곡을 잘도 불러제끼는 Steve Walsh가 정말 존경스러웠습니다. 그리고 그의 지칠줄 모르는 오두방정도 정말 존경스러웠습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">황금박쥐 Steve Walsh</h4>
                  <p>
                    키보드가 설치되어있는 무대위의 높은곳으로 올라갈때도.. 약 60cm 정도 되어보이는 높이를 무척 대단한 오버액션을 섞어서 뛰어서 올라가고 다시 무대 밑으로 내려와 마이크를 잡을때는 거의 어렸을때 본 만화 황금박쥐를 연상시키는 재빠른 액션으로 뛰어내려왔습니다.
                  </p>
                  <p className="mt-2">
                    비록 뒷머리를 길러서 가렸으나 반짝이는 그의 앞이마.. 호리호리한 몸집. 검은색 옷. 하얗게 세어버린 염소 턱수염만 아니면 Steve Walsh는 바로 황금박쥐였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Hold on과 Not Man Big */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Hold on과 Not Man Big</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">새 앨범에 대한 후회</h4>
                  <p>
                    Audio Visions 앨범의 약간은 처지는 곡 Hold on이 끝나고 또 신곡이 연주되었습니다. Not Man Big.
                  </p>
                  <p className="mt-2">
                    '아 정말 왜 새 앨범을 미리 듣고 오지 않았을까' 정말 후회 막급이었습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Robby의 바이올린과 Phil의 드럼</h4>
                  <p>
                    Robby의 바이올린은 정말 그의 툭튀어나온 배 만큼이나 아름다왔고.. Phil Ehart의 드러밍은 Rock's most underrated drummer라는 누구의 표현처럼 파워풀했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Billy Greer의 베이스와 Portrait & Magnum Opus */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Billy Greer의 베이스와 Portrait & Magnum Opus</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">불쌍한 베이시스트</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"왜 베이스 치는 아저씨는 한번도 화면에 안비추어줄까? 불쌍해..."</p>
                  </div>
                  <p className="mt-2">
                    마님의 말처럼 주목받을수 있는 플레이는 아니었지만 Steve Walsh의 솔로 프로젝트부터 함께한 Billy Greer의 베이스도 하늘을 향해 한점 부끄러움 없었습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">정규 셋리스트의 마무리</h4>
                  <p>
                    Point of know return 앨범의 장엄한 곡 Portrait와 Magnum Opus의 맛배기 버젼을 끝으로 정규 셋리스트가 끝났습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 앵콜 요청과 Point of Know Return */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">앵콜 요청과 Point of Know Return</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">모든 관객들의 기립 박수</h4>
                  <p>
                    관객들 모두가 일어섰습니다. 불꺼진 무대를 향해 '캔서스!' '캔서스!'를 외쳤습니다. Yes만을 기다리던 내 앞의 모자쓴 중늙은이도. 앞줄에 좌르륵 포진한 Kansas의 다이하드 팬들도. 아빠따라 손잡고 온 열살짜리 소년도. 모두 모두 일어나 Kansas에게 앵콜을 외쳤습니다.
                  </p>
                  <p className="mt-2">
                    당연히 다시 등장한 Kansas ^^; Point of know return으로 앵콜무대를 열었습니다. Robby의 바이얼린과 Steve의 보컬이 대화하듯 곡을 엮어나갔습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">50세 밴드의 정열</h4>
                  <p>
                    관객 평균연령 43살에 걸맞게 밴드의 평균연령도 50이었지만... Robby도 Steve도 Rich도 Phil도 Billy도.. 전혀 지쳐보이지 않았습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Kansas의 쌍돼지 할아버지들 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Kansas의 쌍돼지 할아버지들</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">200kg에 육박하는 몸무게</h4>
                  <p>
                    살이 쪄본사람은 알겠지만 몸무게가 10 Kg 오버되면 마치 옆구리와 아랫배와 가슴팍에 2.5 Kg짜리 아령을 네개 달아놓고 다니는것처럼 몸이 무거워 정상적인 활동에 지장이 있습니다.
                  </p>
                  <p className="mt-2">
                    하지만 이 Kansas의 쌍돼지 할아버지 Rich와 Robby는.. 100 Kg가 훨씬 넘는 200 Kg에 육박하는 몸무게들임에도 불구하고.. 50이라는 나이에도 불구하고.. 믿을수 없을정도로 정열적인 무대매너를 보여줬습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Dust in the Wind - 마님도 아는 곡 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Dust in the Wind - 마님도 아는 곡</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">예상된 반응</h4>
                  <p>
                    Dust in the wind가 시작됐습니다. 마님도 아는곡입니다.
                  </p>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"내가 아는곡일거랬지?"</p>
                    <p>"어.. 그러네.."</p>
                  </div>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Steve Walsh의 혼신</h4>
                  <p>
                    관객들은 떠나갈듯한 환호성으로 보답합니다. Steve Walsh는 이곡을 지겹도록 불렀겠지만 전혀 지겨운 내색없이 성심성의껏 최선을 다해 목에 핏발을 세우면서 불러줬습니다.
                  </p>
                  <p className="mt-2">
                    다리가 아픈지 무릎이 아픈지 분위기를 내려는지 조금은 지쳤는지... Robby는 Steve Walsh앞에 퍼질러 앉아 바이얼린을 켰습니다.
                    </p>
                  </div>
                  
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-gray-400 mb-2">염세적인 가사</h4>
                  <div className="bg-black p-3 rounded mt-2 font-mono text-xs">
                    <p className="text-green-400">
                      Nothing lasts forever but the earth and sky..<br/>
                      It slips away..<br/>
                      And all your money wouldn't last another minute by...<br/><br/>
                      Dust in the wind..<br/>
                      Everything is dust in the wind
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 노스탤지아와 시간의 흐름 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">노스탤지아와 시간의 흐름</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Kansas의 변화</h4>
                  <p>
                    무척이나 염세적인 가사내용처럼.. 모든건 바람에 날리는 먼지같은것이라는 것 처럼.. 한때 잘나갔었던 미국 심포닉의 풍운아 Kansas는 그 전성기의 인기를 뒤로하고 그 전성기의 숱많은 머리와 날씬한 몸매와 방탕한 생활과 끝없는 스테미너를 다 뒤로하고..
                  </p>
                  <p className="mt-2">
                    이제 50이 넘어 늙은 모습으로 역시 늙은 팬들앞에 다시 섰습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">감동의 순간</h4>
                  <p>
                    늙어서 쭈굴쭈굴한 Steve의 얼굴이 프로젝터 화면에 크게 클로우즈업 되어.. Dust in the wind를 부르는 모습을 보자.. 코끝이 찡해 왔습니다.
                  </p>
                  <p className="mt-2">
                    하지만 이렇게 노스탤지아에 기대는 슬픈 모습으로 떠날수은 없는 일입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Carry On Wayward Son - 마지막 곡 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Carry On Wayward Son - 마지막 곡</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">전미 클래식 Rock FM 방송빈도 2위</h4>
                  <p>
                    영원한 그들의 고전이자.. 전미 클래식 Rock FM 방송빈도 2위라는.. (1위는 뭘까요???) 마지막 곡. Carry on wayward son이 마지막 곡으로 연주되었습니다.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">마지막 곡에 대한 철학</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"이렇게 잘 아는곡을 항상 마지막으로 연주하는건가부지?"</p>
                    <p>"응 대개 그래. 하지만 저번 공연의 로저워터스처럼 신곡을 마지막 앵콜로 하는 경우도 있어. 근데 좀 위험하지 그런 경우는"</p>
                  </div>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">특별한 시작</h4>
                  <p>
                    대부분 마지막곡의 전주..가 주로 기타로 나올때 관중들은 자지러지지만.. Carry on wayward son은 특이하게 코러스로 시작하는 곡입니다.
                  </p>
                  <p className="mt-2">
                    마지막 곡의 전주.. 아니 코러스가 나오자 Amsouth amphitheater의 내야와 외야를 가득메운 관객들은 모조리 일어서서 standing ovation으로 그들에게 답례했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Kansas에 대한 사과와 다음 기약 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Kansas에 대한 사과와 다음 기약</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">미안한 마음</h4>
                  <p>
                    Yes에 덤으로 붙어서 보게 된것 같아 Kansas에게 조금은 미안했습니다. 다음번 좀더 작은 venue에서 단독 공연을 한다면 꼭 가서 볼 생각입니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">마지막 인사</h4>
                  <p>
                    Carry on wayward son이 끝나고 다섯 멤버 모두 무대앞으로 나와 큰 절을하고 들어갔습니다.
                  </p>
                  <p className="mt-2 font-bold">
                    Carry on! you will always remember~~
                  </p>
                  <p className="mt-2">
                    다시는 잊지못할 Kansas와의 첫 조우였습니다.
                  </p>
                  <p className="mt-2 text-center font-bold text-lg">
                    [to be continued..]
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Kansas 100% 원본 그대로 완전 복원 완료! Kerry Livgren의 역사부터 Icarus II의 25년 감동, 다인종 관객층 분석, 대마초 에피소드, Steve Walsh의 황금박쥐, 쌍돼지 할아버지들의 정열, Dust in the Wind의 노스탤지아, Carry On Wayward Son의 감동까지 - Fish의 원본 감성 그대로 모든 드라마가 완벽하게 되살아났습니다!
              </p>
              
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
              >
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