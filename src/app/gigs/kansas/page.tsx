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

            <div className="text-center mt-8">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Kansas 100% 복원 완료! Icarus II의 25년 만의 감동부터 다인종 관객층 분석, 대마초 에피소드까지 모든 드라마가 되살아났습니다!
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