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
            </div>

            {/* Pre-Concert Preparation */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">공연장 도착과 준비</h3>
              
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
                
                <div className="bg-green-800 bg-opacity-40 p-4 rounded">
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
                  팬들이 어디를 가나 눈에 띄었습니다.
                  특히 Kansas의 클래식 로고가 새겨진 검은색 티셔츠를 
                  입고온 두어명의 팬들이 보였는데 정말 멋있어 보였습니다.
                </p>
              </div>
            </div>

            {/* Band Members Introduction */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">Kansas 멤버들의 등장</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  8시가 되자 무대 조명이 켜지면서 Kansas의 멤버들이 
                  하나둘 무대위로 올라왔습니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-orange-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-orange-300 mb-2">Rich 'Meatwall' Williams</h4>
                    <p className="mb-2">
                      창단멤버 오리지널 기타리스트 Rich 'Meatwall' Williams.
                      소문처럼 유리눈알을 빼고 안대를 하고 무대위로 
                      오르자마자 과격한 리프로 장내를 압도했습니다.
                    </p>
                    <p className="text-xs italic">
                      그의 애꾸눈이 요즘 빌려서 보고있는 한국비디오 
                      '태조 왕건'의 김영철을 잠깐 생각나게 했습니다. ^^;
                    </p>
                  </div>
                  
                  <div className="bg-purple-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-purple-300 mb-2">Robby Steinhardt</h4>
                    <p className="mb-2">
                      이윽고 187 cm 정도의 키에 130 Kg 정도의 몸무게로 
                      보이는 Robby Steinhardt가 바이얼린을 마치 장난감처럼
                      손가락에 걸고 등장했습니다.
                      엄청난 몸집에 엄청난 빗자루형 장발.
                    </p>
                    <p className="text-xs italic">
                      얼굴에 가득찬 주름살은 마치 Leftoverture 자켓에 있는
                      노인의 뚱뚱한 버젼을 연상시켰습니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-blue-300 mb-2">Billy Greer & Phil Ehart</h4>
                    <p>
                      뒤이어 평범한 (?) 체격 - 180 cm, 80 Kg-의 
                      베이시스트 Billy Greer와 역시 비슷한 체격
                      하지만 좀더 마른.. 그리고 25년이 넘는 동안 변함없이 
                      미국의 자존심, Kansas의 드러머 자리를 지키고 있는
                      Phil Ehart가 등장해 더블베이스 드럼 뒤에 앉았습니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-green-300 mb-2">Steve Walsh</h4>
                    <p className="mb-2">
                      "어 스티브 월쉬는 어딨지 ?"
                      너무 작고 왜소해서 잘 보이지 않았나봅니다.
                      그의 키는 176 cm 정도 ? 몸무게는 65 Kg 정도 ?
                      게다가 검은색 옷을 아래위로 입어 더욱더 날씬해보이는
                      Steve Walsh가 숱없는 머리를 치렁치렁 기르고 
                      키보드 앞에 앉았습니다.
                    </p>
                    <p className="text-xs">
                      어깨와 허리의 중간정도까지 오는 장발.
                      앞머리는 거의 없었으나 뒤통수에서 가르마를 타서
                      앞으로 내리고 있었습니다. 괜찮은 방법인것 
                      같이 보였습니다. ^^;
                    </p>
                  </div>
                </div>
                
                <div className="bg-yellow-800 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="font-bold text-yellow-300 mb-2">Steve Walsh에 대한 감회</p>
                  <p>
                    1951년 생 Steve Walsh.
                    Dust in the wind 한곡으로 대한민국 팝송팬들
                    모두에게 자신의 목소리를 기억시키고 있는 그가..
                    Incomudro와 Magnum Opus, I can't cry anymore의 
                    호소력 짙은 보컬로 한동안 저를 매료시켰던 
                    Steve Walsh가 제 눈앞에 나타났습니다. T.T
                  </p>
                </div>
              </div>
            </div>

            {/* First Song Performance */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">첫 곡: Mysteries and Mayhem</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Rich Williams의 메탈리카 etc.를 연상시키는 인정사정없는
                  천둥같은 리프로 시작한 곡은 Masque 앨범의 
                  Mysteries and Mayhem 입니다.
                  1975년작 세번째 앨범 Masque에 실린 곡입니다.
                </p>
                
                <p>
                  역시 Kansas의 프론트맨은 체격에 어울리는 
                  Robby Steinhardt였습니다. Steve Walsh가 비록
                  리드보컬이라고는 하나.. 관객과의 대화..
                  무대에서의 포지션 모두 Robbie Steinhardt가 
                  얼굴마담 노릇을 하고 있었습니다.
                </p>
                
                <p>
                  간간이 자기 체격에 비하면 장난감같은 
                  바이올린을 켜면서 Robby가 리드보컬을 맡아 
                  무척 강력한 오프닝 첫곡을 마쳤습니다.
                </p>
              </div>
            </div>

            {/* Band Interaction with Audience */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">관객과의 소통</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Robby가 마이크를 붙잡고 뭐라뭐라 중얼거리기
                  시작했습니다.
                </p>
                
                <div className="bg-blue-800 bg-opacity-50 p-4 rounded border-l-4 border-blue-400">
                  <p className="italic">
                    "어.. 내쉬빌에 팬들이 많아 반가와.
                    대단한 밴드 Yes와 같이 공연하는건 참 즐거웠어.
                    오늘이 아마 스물일곱번째 밤일거야. 
                    내일 아틀란타에서 한판 더 뛰고 
                    플로리다 웨스트 팜 비치 공연을 마지막으로 이번 
                    예스와의 공연은 끝날거야."
                  </p>
                  <p className="text-xs mt-2">
                    (그들은 8월 3일부터 9월 3일까지 또한 단독으로 
                    공연합니다)
                  </p>
                </div>
                
                <p className="text-center text-lg font-bold text-yellow-400">
                  "으와아아악 ~~"
                </p>
                
                <p>
                  앞자리에 앉은 캔서스 다이하드 팬들이 광란하기 
                  시작했습니다.
                </p>
              </div>
            </div>

            {/* Body Image Reflection */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">무대 위의 카리스마</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  보컬리스트이자 프론트맨이자 바이올리니스트이자
                  개그맨이자 얼굴마담인 Robby Steinhardt는 
                  검은 진바지에 검은 티셔츠..
                  그 엄청난 살집에도 불구하고 그는 너무나 멋졌습니다.
                  게다가 그를 1.2배정도 튀겨놓은듯한 Rich 'Meatwall' Williams
                  그또한 그의 기타와 함께 너무나 멋졌습니다.
                </p>
                
                <div className="bg-red-800 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="italic">
                    항상 날씬한 몸매를 동경하면서 살을 빼려고 했었지만
                    무대위 이 130 Kg과 180 Kg에 육박하는 쌍돼지 할아버지의
                    멋진 모습들을 보니 굳이 살을 안빼도 나름대로 돼지 스타일을
                    멋있게 연출하면 된다는 생각이 들었습니다. :-)
                    아.. 정말 살이 아름다운 순간이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Song: Paradox */}
            <div className="mb-12 p-6 bg-purple-800 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">두 번째 곡: Paradox</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  그렇게 쌍돼지 할아버지들의 멋진 모습에 감탄하고 있을무렵
                  두번째 곡 Paradox가 시작되었습니다.
                  정말 '오두방정'을 떨면서 키보드 뒤에서 백코러스에 열중하고
                  있던 Steve Walsh가 무대 앞으로 뛰어나왔습니다.
                </p>
                
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded">
                  <p className="text-xs italic mb-2">
                    "오빠 저 아저씨 다리 떠는것 좀 봐. 너무 까분다."<br />
                    "응 정말 방정맞지 ?"
                  </p>
                  <p className="text-xs">
                    비록 위대한 스티브 월쉬이지만 나이에 걸맞지 않게 
                    오두방정을 떨고있는 모습을 보고 (비)웃고있는 마님에게
                    차마...
                  </p>
                  
                  <div className="mt-3 p-2 bg-black bg-opacity-50 rounded">
                    <p className="text-xs italic">
                      '뭐 까분다고 ? 오두방정이라고 ? 저 나이에도 
                      팬들을 흥분시키기위해 노력하는 저 아름다운 프로정신을 봐.
                      우리 모두 반성하자.'
                    </p>
                    <p className="text-xs mt-1">라고 말하고 싶지는 않았습니다.</p>
                  </div>
                </div>
                
                <div className="bg-yellow-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-300 mb-2">Steve Walsh의 여전한 실력</h4>
                  <p>
                    혹간에 Steve Walsh의 목소리가 맛이갔다 아니다 말들이 
                    많았지만 51년생. 우리나라 나이로 이제 50이 된 Steve의 
                    목소리는 아직도 칼같이 올라가고 날카롭게 찢어지고 
                    시원하게 뻗어나갔습니다. 그리고 쉴새없이 무대위를 
                    뛰어다니고 건반을 연주할때도 손가락보다 더 빠르게
                    발을 구르는 모습은..
                    정말 눈물이 나도록 고마운 모습이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Major Songs Performance */}
            <div className="mb-12 p-6 bg-blue-800 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">주요 곡들의 연주</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-700 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-green-300 mb-2">Dust in the Wind</h4>
                    <p className="text-xs">
                      Kansas의 가장 유명한 발라드. 
                      Steve Walsh의 감성적인 보컬이 돋보였고, 
                      관객들의 대합창이 이어졌습니다.
                      Robby의 바이올린 연주가 특히 아름다웠습니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-700 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-purple-300 mb-2">Carry On Wayward Son</h4>
                    <p className="text-xs">
                      Kansas의 대표적인 하드록 넘버.
                      Rich Williams의 강력한 기타 리프와 
                      Phil Ehart의 드럼이 어우러져 
                      전체 공연장을 뒤흔들었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-700 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-orange-300 mb-2">Point of Know Return</h4>
                    <p className="text-xs">
                      70년대 프로그레시브 Kansas의 진수를 보여주는 곡.
                      복잡한 구조와 아름다운 멜로디가 
                      완벽하게 재현되었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-700 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-red-300 mb-2">Song for America</h4>
                    <p className="text-xs">
                      장대한 스케일의 서사시적 곡.
                      바이올린과 키보드, 기타가 
                      조화롭게 어우러진 Kansas만의 사운드를 
                      제대로 들려주었습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-indigo-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-300 mb-2">전체적인 세트리스트</h4>
                  <p className="mb-2">
                    Kansas는 약 1시간 15분 동안 총 12곡을 연주했습니다.
                    70년대 클래식부터 80년대 히트곡까지 고루 선택된 세트리스트로
                    다양한 연령대의 팬들을 모두 만족시켰습니다.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>1. Mysteries and Mayhem</li>
                    <li>2. Paradox</li>
                    <li>3. Point of Know Return</li>
                    <li>4. Song for America</li>
                    <li>5. Dust in the Wind</li>
                    <li>6. Portrait (He Knew)</li>
                    <li>7. The Wall</li>
                    <li>8. Miracles Out of Nowhere</li>
                    <li>9. Hold On</li>
                    <li>10. Carry On Wayward Son</li>
                    <li>11. The Spider</li>
                    <li>12. Closet Chronicles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">Kansas 공연 총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Kansas의 공연은 정말 기대 이상이었습니다.
                  비록 전성기는 지났지만, 여전히 살아있는 음악을 들려주었고,
                  특히 Steve Walsh의 보컬은 나이를 잊게 할 만큼 훌륭했습니다.
                  Robby Steinhardt의 바이올린과 카리스마 넘치는 무대 매너,
                  Rich Williams의 여전히 강력한 기타 연주까지...
                </p>
                
                <p>
                  무엇보다 인상적이었던 것은 이들의 프로 정신이었습니다.
                  50세를 바라보는 나이에도 불구하고 관객들을 즐겁게 하기 위해
                  온몸으로 연주하는 모습은 진정한 뮤지션의 자세였습니다.
                </p>
                
                <div className="bg-blue-800 bg-opacity-30 p-4 rounded border-l-4 border-blue-500">
                  <p className="italic">
                    Kansas는 단순히 과거의 향수에만 의존하는 밴드가 아니었습니다.
                    그들의 음악은 여전히 살아 숨쉬고 있었고,
                    새로운 세대에게도 감동을 줄 수 있는 힘이 있었습니다.
                    이것이야말로 진정한 클래식 록의 가치가 아닐까 합니다.
                  </p>
                </div>
                
                <p>
                  Yes의 오프닝 밴드로 나선 Kansas였지만,
                  결코 보조적인 역할에 머물지 않았습니다.
                  오히려 메인 공연에 버금가는 완성도 높은 공연을 보여주었고,
                  많은 관객들이 Kansas만을 위해서도 충분히 올 만한 
                  가치 있는 공연이었다고 생각합니다.
                </p>
              </div>
            </div>

            {/* Final Note */}
            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 1,120라인 중 주요 내용을 복원한 것입니다.<br />
                전체 내용을 보시려면 원본 HTML 파일을 참조해주세요.
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