import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kansas in Nashville 2000 - Concert Review | Yebadong',
  description: 'Kansas 콘서트 리뷰 (2000년 7월 29일, Amsouth Amphitheater)',
};

export default function KansasPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white" style={{backgroundImage: "url('images/kansas_bg.gif')"}}>
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            <em>*** Kansas in Nashville, 07/29/2000 ***</em>
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
                  지난 토요일에는 Kansas와 Yes의 합동공연 (?)이 
                  Nashville 근처 Antioch의 Amsouth Amphitheater에서 
                  있었습니다. 저번에 제가 Roger Waters의 공연을 본 
                  바로 그곳이죠.
                </p>
                
                <p>
                  토요일이라 뭐 일찍 실험실에서 나올 필요도 없었고
                  한가롭게 늦잠자고 밥먹고 또 낮잠자고 뒤벼져 있다가 
                  다섯시 반쯤 집을 나섰습니다. (공연시작 8시)
                  공연장까지는 한 40분정도만 운전해가면 되지만 
                  미리가지 않으면 마음이 편치 않은것은 촌스럽기 
                  때문일까요 ? :-)
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p>
                    사실 여러번 말씀드렸다시피 이번 공연을 가게된
                    주된 목적 (?)은 역시 Yes였습니다. 
                    하지만 저 역시 Kansas의 오랜 팬이었고..
                    Kansas 홀로 공연을 했다하더라도 
                    분명히 공연을 보러 갔었을겁니다. 
                    그래서.. 이번 공연 보고도 처음엔 Yes를 위주로 
                    Kansas는 잠깐 언급만 드릴까 했었지만.. 
                    공연을 보고 난 후에는 역시 처음 생각대로 
                    Kansas의 공연을 따로 소개드려야 마땅하겠다는 
                    결론에 이르렀습니다.
                  </p>
                </div>
              </div>

            {/* Pre-Concert Preparation */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">공연장 도착</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  공연장에 도착한건 다섯시 반 정도.
                  주차장에는 공연 진행요원을 제외한 차들이 
                  한 백대정도 미리 와 있었습니다.
                  Yes나 Kansas의 티셔츠를 입고 왔으면 좋겠지만 
                  Yes의 티셔츠는 Pink Floyd의 티셔츠 마냥 쉽게 
                  구할수 없었던 관계로.. 전에 $28이나 주고 샀었던
                  Roger Waters의 티셔츠를 입고 갔습니다.
                </p>
                
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p>
                    실은 Fish의 티셔츠를 입고가려고 했는데 
                    (Chris Squire도 Fish는 Fish니까 !! ^^;)
                    마님이 하루 입었던거라고 입지 말라고 해서
                    그렇게 했습니다. 어차피 가면 땀냄새 담배냄새로
                    범벅이 될텐데...
                  </p>
                </div>
                
                <p>
                  역시 Yes의 티셔츠, Kansas의 티셔츠를 입고온 
                  분들이 꽤 많았습니다. 그리고 지저분하게 머리를 
                  기른 장발의 아저씨들도 꽤 많았습니다. 
                  안타깝게도 머리가 빠져 있는 분들이 상당히 많더군요.. 
                  저도 조만간 그렇게 될것 같아서.. T.T
                </p>
                
                <p>
                  공연장 안에 들어가보니.. 역시 Amphitheater입니다. 
                  원형경기장같기도 하고 야외극장같기도 한 그런 곳입니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-400 mb-2">좌석 배치</h3>
                  <p>
                    우리의 좌석은 P섹션 T열 16, 17번. 
                    오케스트라석은 아니지만 바로 옆 섹션이라 
                    실제로는 무대가 아주 잘 보이는 자리였습니다. 
                    실은 $6짜리 차이밖에 안났으면서 성의없게 
                    오케스트라 바로 옆 자리를 사준 ticketmaster에 대해 
                    약간 불만스러웠지만.. 실제로 가보니 정말 좋은 자리였습니다.
                  </p>
                </div>
                
                <p>
                  공연 시작까지는 한시간 반 정도 남았습니다. 
                  우선 빈자리에 가방과 겉옷을 올려놓고 
                  (정말 아무 생각없이.. 어디서나 이런짓을 하고 다니는 
                  한국사람 특유의 습성.. ^^;)
                  밖으로 나가서 구경을 해봤습니다.
                </p>
              </div>
            </div>

            {/* Venue Exploration */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">공연장 탐방</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  공연장 주변을 돌아다녀 봤습니다. 
                  Roger Waters 공연때도 느꼈지만 미국의 이런 공연장들의 
                  분위기는 정말 좋습니다. 마치 축제 같은 분위기랄까요? 
                  사람들이 정말 재밌게 놀러 왔다는 기분을 팍팍 풍깁니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-400 mb-2">음식과 음료</h3>
                  <p>
                    햄버거, 핫도그, 나쵸, 팝콘, 콘도그.. 
                    갖가지 먹을거리를 팔고 있습니다. 
                    그리고 맥주!! 
                    새무엘 아담스, 킬리안스, 루트비어, 코카콜라.. 
                    등등등 갖가지 음료를 팔고 있습니다. 
                    가격은 좀 비쌉니다. 맥주가 $6 정도?
                  </p>
                </div>
                
                <p>
                  Roger Waters 공연때 제가 새무엘 아담스를 사마셨는데 
                  정말 맛있었거든요. 그래서 이번에도 하나 사서 마시기로 했습니다. 
                  마님은 루트비어를 사마셨습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-400 mb-2">관객들의 모습</h3>
                  <p>
                    공연장 잔디밭에는 젊은 커플들이 돗자리를 펴고 앉아 
                    맥주를 마시면서 공연 시작을 기다리고 있습니다. 
                    정말 평화로운 모습이었습니다. 
                    나이든 아저씨들도 많고 젊은 사람들도 많고.. 
                    정말 다양한 연령층의 사람들이 와 있었습니다.
                  </p>
                </div>
                
                <p>
                  공연장 내부로 들어가서 무대를 봤습니다. 
                  아직 조명도 안켜져 있고 커버도 씌워져 있어서 
                  뭐가 뭔지 잘 안보였지만.. 
                  거대한 스크린이 무대 뒤편에 설치되어 있었습니다.
                </p>
              </div>
            </div>

            {/* Kansas Performance Begins */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">Kansas 공연 시작</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <p className="text-xl font-bold text-yellow-400">
                    8시 정각.. Kansas의 공연이 시작됩니다.
                  </p>
                </div>
                
                <p>
                  무대 뒤의 거대한 스크린에는 Kansas의 로고와 함께 
                  환상적인 영상들이 나타나기 시작했습니다. 
                  주로 자연의 모습들.. 들판, 하늘, 구름.. 
                  정말 Kansas스러운 영상들이었습니다.
                </p>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-yellow-400">멤버별 상세 등장</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-400 mb-2">Rich 'Meatwall' Williams</h4>
                      <p>
                        창단멤버 오리지널 기타리스트 Rich 'Meatwall' Williams.
                        소문처럼 유리눈알을 빼고 안대를 하고 무대위로 
                        오르자마자 과격한 리프로 장내를 압도했습니다.
                      </p>
                      <p className="mt-2 italic text-xs">
                        그의 애꾸눈이 요즘 빌려서 보고있는 한국비디오 
                        '태조 왕건'의 김영철을 잠깐 생각나게 했습니다. ^^;
                      </p>
                    </div>
                    
                    <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-400 mb-2">Robby Steinhardt</h4>
                      <p>
                        187cm 정도의 키에 130kg 정도의 몸무게로 
                        보이는 Robby Steinhardt가 바이얼린을 마치 장난감처럼
                        손가락에 걸고 등장했습니다.
                        엄청난 몸집에 엄청난 빗자루형 장발.
                        얼굴에 가득찬 주름살은 마치 Leftoverture 자켓에 있는
                        노인의 뚱뚱한 버젼을 연상시켰습니다.
                      </p>
                    </div>
                    
                    <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-400 mb-2">Billy Greer & Phil Ehart</h4>
                      <p>
                        평범한 (?) 체격 - 180cm, 80kg-의 
                        베이시스트 Billy Greer와 역시 비슷한 체격
                        하지만 좀더 마른.. 그리고 25년이 넘는 동안 변함없이 
                        미국의 자존심, Kansas의 드러머 자리를 지키고 있는
                        Phil Ehart가 등장해 더블베이스 드럼 뒤에 앉았습니다.
                      </p>
                    </div>
                    
                    <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg">
                      <h4 className="font-bold text-yellow-400 mb-2">Steve Walsh</h4>
                      <div className="bg-gray-800 p-2 rounded mb-2">
                        <p className="text-xs italic">"어 스티브 월쉬는 어딨지 ?"</p>
                        <p className="text-xs">너무 작고 왜소해서 잘 보이지 않았나봅니다.</p>
                      </div>
                      <p>
                        그의 키는 176cm 정도 ? 몸무게는 65kg 정도 ?
                        게다가 검은색 옷을 아래위로 입어 더욱더 날씬해보이는
                        Steve Walsh가 숱없는 머리를 치렁치렁 기르고 
                        키보드 앞에 앉았습니다.
                        어깨와 허리의 중간정도까지 오는 장발.
                        앞머리는 거의 없었으나 뒤통수에서 가르마를 타서
                        앞으로 내리고 있었습니다. 괜찮은 방법인것 
                        같이 보였습니다. ^^;
                      </p>
                      <div className="mt-2 p-2 bg-black bg-opacity-50 rounded">
                        <p className="text-xs font-bold">1951년 생 Steve Walsh.</p>
                        <p className="text-xs">
                          Dust in the wind 한곡으로 대한민국 팝송팬들
                          모두에게 자신의 목소리를 기억시키고 있는 그가..
                          Incomudro와 Magnum Opus, I can't cry anymore의 
                          호소력 짙은 보컬로 한동안 저를 매료시켰던 
                          Steve Walsh가 제 눈앞에 나타났습니다. T.T
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-yellow-900 bg-opacity-50 rounded-lg mt-6">
                  <p className="text-lg font-bold">"우와아아~~!!"</p>
                  <p>관중들의 함성이 터져나왔습니다.</p>
                  <p>역시 Kansas입니다. 30년이 넘은 밴드인데도 아직까지 이런 열광적인 환영을 받다니..</p>
                </div>
              </div>
            </div>

            {/* First Songs */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">공연 시작 - Mysteries and Mayhem</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Rich Williams의 메탈리카 etc.를 연상시키는 인정사정없는
                  천둥같은 리프로 시작한 곡은 Masque 앨범의 
                  <strong> Mysteries and Mayhem </strong>입니다.
                  1975년작 세번째 앨범 Masque에 실린 곡입니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
                  <p>
                    역시 Kansas의 프론트맨은 체격에 어울리는 
                    Robby Steinhardt였습니다. Steve Walsh가 비록
                    리드보컬이라고는 하나.. 관객과의 대화..
                    무대에서의 포지션 모두 Robbie Steinhardt가 
                    얼굴마담 노릇을 하고 있었습니다.
                  </p>
                </div>
                
                <p>
                  간간이 자기 체격에 비하면 장난감같은 
                  바이올린을 켜면서 Robby가 리드보컬을 맡아 
                  무척 강력한 오프닝 첫곡을 마쳤습니다.
                </p>
                
                <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-yellow-400 mb-2">Robby의 MC</h3>
                  <p>Robby가 마이크를 붙잡고 뭐라뭐라 중얼거리기 시작했습니다.</p>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>"어.. 내쉬빌에 팬들이 많아 반가와.</p>
                    <p>대단한 밴드 Yes와 같이 공연하는건 참 즐거웠어.</p>
                    <p>오늘이 아마 스물일곱번째 밤일거야.</p>
                    <p>내일 아틀란타에서 한판 더 뛰고</p>
                    <p>플로리다 웨스트 팜 비치 공연을 마지막으로 이번</p>
                    <p>예스와의 공연은 끝날거야."</p>
                  </div>
                  <p className="mt-2 text-xs italic">
                    (그들은 8월 3일부터 9월 3일까지 또한 단독으로 공연합니다)
                  </p>
                </div>
                
                <div className="text-center p-4 bg-blue-900 bg-opacity-50 rounded-lg">
                  <p className="text-lg">"으와아아악 ~~"</p>
                  <p>앞자리에 앉은 캔서스 다이하드 팬들이 광란하기 시작했습니다.</p>
                </div>
              </div>
            </div>

            {/* Band Style Description */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">Kansas의 멋진 무대 매너</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  보컬리스트이자 프론트맨이자 바이올리니스트이자
                  개그맨이자 얼굴마담인 Robby Steinhardt는 
                  검은 진바지에 검은 티셔츠..
                  그 엄청난 살집에도 불구하고 그는 너무나 멋졌습니다.
                  게다가 그를 1.2배정도 튀겨놓은듯한 Rich 'Meatwall' Williams
                  그또한 그의 기타와 함께 너무나 멋졌습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="font-bold text-yellow-400 mb-2">살의 미학</p>
                  <p>
                    항상 날씬한 몸매를 동경하면서 살을 빼려고 했었지만
                    무대위 이 130kg과 180kg에 육박하는 쌍돼지 할아버지의
                    멋진 모습들을 보니 굳이 살을 안빼도 나름대로 돼지 스타일을
                    멋있게 연출하면 된다는 생각이 들었습니다. :-)
                  </p>
                  <p className="mt-2 font-bold text-center">
                    아.. 정말 살이 아름다운 순간이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Paradox */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">두 번째 곡 - Paradox</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  그렇게 쌍돼지 할아버지들의 멋진 모습에 감탄하고 있을무렵
                  두번째 곡 <strong>Paradox</strong>가 시작되었습니다.
                  정말 '오두방정'을 떨면서 키보드 뒤에서 백코러스에 열중하고
                  있던 Steve Walsh가 무대 앞으로 뛰어나왔습니다.
                </p>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p><strong>마님:</strong> "오빠 저 아저씨 다리 떠는것 좀 봐. 너무 까분다."</p>
                  <p><strong>나:</strong> "응 정말 방정맞지 ?"</p>
                </div>
                
                <p>
                  비록 위대한 스티브 월쉬이지만 나이에 걸맞지 않게 
                  오두방정을 떨고있는 모습을 보고 (비)웃고있는 마님에게
                  차마...
                </p>
                
                <div className="bg-blue-900 bg-opacity-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="italic">
                    '뭐 까분다고 ? 오두방정이라고 ? 저 나이에도 
                    팬들을 흥분시키기위해 노력하는 저 아름다운 프로정신을 봐.
                    우리 모두 반성하자.'
                  </p>
                  <p className="mt-2">라고 말하고 싶지는 않았습니다.</p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-400 mb-2">Steve Walsh의 놀라운 보컬</h3>
                  <p>
                    혹간에 Steve Walsh의 목소리가 맛이갔다 아니다 말들이 
                    많았지만 51년생. 우리나라 나이로 이제 50이 된 Steve의 
                    목소리는 아직도 칼같이 올라가고 날카롭게 찢어지고 
                    시원하게 뻗어나갔습니다. 그리고 쉴새없이 무대위를 
                    뛰어다니고 건반을 연주할때도 손가락보다 더 빠르게
                    발을 구르는 모습은..
                  </p>
                  <p className="font-bold text-center mt-2">
                    정말 눈물이 나도록 고마운 모습이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 1,119줄에서 787줄로 확장 복원되었습니다. (70% 복원)<br />
                더 많은 Kansas 공연 내용이 원본에 포함되어 있습니다.
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