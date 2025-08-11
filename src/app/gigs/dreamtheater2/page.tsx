import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dream Theater Live 서울 2002 - Concert Review | Yebadong',
  description: 'Dream Theater 서울 콘서트 리뷰 (2002년 4월 22일, 펜싱경기장)',
};

export default function DreamTheater2Page() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">Dream Theater Live</h1>
          <p className="text-xl text-gray-300">2002년 4월 22일</p>
          
          <div className="mt-4">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-base text-gray-300">
              김기범 <a href="mailto:RoberFripp@lycos.co.kr" className="text-[#00AAAA] hover:underline">
                RoberFripp@lycos.co.kr
              </a>
            </span>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Environment */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">펜싱경기장의 아쉬움</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  생각보다 사람이 별로 안왔더군요. 드림씨어터는 
                  국내 기준으로 하면 몇손가락 안에 드는 인기 있는 락밴드인데..
                  한 1500명~2000명 정도가 아닐까 싶은데 잘은 모르겠습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-400 mb-2">음향 문제</h4>
                  <p className="text-sm">
                    장소가 펜싱 경기장이었죠. 이게 좀 문제라 싶었어요. 제가 소리는 잘 
                    모르지만 대충 봐도 너무 울리게 생긴데거든요.
                    전체적으로 소리가 너무 울렸어요. 이 때까지 두번의 공연은 오픈된 
                    공간이라 드림씨어터 특유의 샤프한 사운드가 살아났는데
                    너무 멍멍하고 전체적으로 딜레이를 단듯한 2중의 소리...중간에 소리가 
                    안나오거나 잘못나올 때가 많았죠.
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Structure */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">공연 구성</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  역시 신보인 six degrees of inner turbulance 위주로 진행되었습니다. 
                  예전앨범의 맨마지막 부분 사람 ~꽥 하고 죽는 소리가 난 다음 공연이 
                  시작되었습니다. 이번 공연도 로저 공연처럼 1,2부로 나누어서 진행되고 
                  중간에 쉬는 시간을 주었습니다. 역시 3시간 가량의 장시간 공연이었죠.
                </p>
                
                <p className="text-xs italic">
                  오전에 올시즌 첫 세이브를 올린 피칭을 하고 간터라 저도 개인적으로 
                  체력적인 문제를 노출시키기도...헤헤
                </p>
              </div>
            </div>

            {/* Band Members */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">멤버들의 인상착의</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-bold text-gray-300 mb-2">존 명, 라브리에</h4>
                  <p className="text-xs">그대로</p>
                </div>
                
                <div className="bg-indigo-800 p-4 rounded">
                  <h4 className="font-bold text-indigo-300 mb-2">조단 루디스</h4>
                  <p className="text-xs">상당히 잘생겨졌는데...강간범 스타일로</p>
                </div>
                
                <div className="bg-green-800 p-4 rounded">
                  <h4 className="font-bold text-green-300 mb-2">존 페트루치</h4>
                  <p className="text-xs">
                    머리 짧게 짤랐더라구요. 제임스 햇필드 스타일로, 기타치는 
                    것도 햇필드처럼 다리 벌리고 오만하게 칠려고하는데 원래 좀 마르고 
                    외모 자체가 얍실한 꽃미남에 근접한 스타일이라 각은 잘 안나오더라구요.
                  </p>
                </div>
                
                <div className="bg-red-800 p-4 rounded">
                  <h4 className="font-bold text-red-300 mb-2">마이크 포토노이</h4>
                  <p className="text-xs">
                    산적스타일입니다. 선글라스에 두건..뭐 이런 걸 쓰는데..저처럼 
                    체중이 나가는 넘은 벤치마킹의 대상일 듯.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Analysis */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">연주 분석</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-orange-800 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-orange-300 mb-2">제임스 라브리에의 지구력</h4>
                  <p className="text-sm">
                    엄청난 지구력을 요구하는 공연이었죠. 원래 보컬리스트 제임스 라브리에를 
                    저는 개인적으로 광분해서 80분이면 맛가는 넘으로 평가하는데...
                    실제 보컬리스트들은 두성으로 끝까지 뽑아낸다고 해서 높게 평가하더라구요, 
                    암튼 지구력에 문제가 있어보였는데...이번에는 장시간임에도 상태가 
                    괜찮아보였습니다.
                  </p>
                </div>
                
                <div className="bg-blue-800 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-blue-300 mb-2">마이크 포토노이 - 진정한 리더</h4>
                  <p className="text-sm">
                    전 개인적으로 드림씨어터의 리더를 마이크 포토노이라고 생각합니다. 
                    정말 버라이어티한 드러밍으로 곡을 리드할 뿐만 아니라 상당히 외향적인 
                    성격의 드러머로 중간에 공연의 분위기를 리드하는 역할까지 하고 있죠. 
                    이번 공연도 예외가 아니었습니다.
                  </p>
                </div>
                
                <div className="bg-purple-800 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-purple-300 mb-2">존 페트루치의 영역 확장</h4>
                  <p className="text-sm">
                    사운드를 리드하는 것은 존 페트루치였죠. 갈수록 자기의 영역을 넓혀가는 
                    느낌입니다. 원래는 아이바네즈 기타?를 쓰는 조 새트리아니 적인 인스트루멘타리스트?쪽이라는 
                    생각이었지만..최근 헤비한 리프쪽에 신경을 많이쓰고 있고, 다소 톤 
                    조절에 실패작으로 생각하지만 블루지한 패턴도 연주하기도 했고-좀 
                    더 늙어야될 듯, 애스닉한 곡 등 전체적으로 보다 많은 스타일의 연주를 
                    보여주었습니다.
                  </p>
                </div>
                
                <div className="bg-teal-800 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-teal-300 mb-2">조단 루디스의 변화</h4>
                  <p className="text-sm">
                    조단루디스는 최근 들어 돈벌면서 가장 잘생겨진..멤버라고..뱅글 뱅글 
                    돌아가는 키보드였는데..예전에 줄리어드 출신의 클래식적인 건반주자였다면 
                    관심사가 전자음향 쪽에 관심이 가고 있다는 것을 솔로 타임에서 알 
                    수 있더군요.
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Highlights */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">공연 하이라이트</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-emerald-800 bg-opacity-50 p-4 rounded border-l-4 border-emerald-500">
                  <h4 className="font-bold text-emerald-300 mb-2">1부: Take the Time</h4>
                  <p className="text-sm">
                    1부의 하일라이트는 단연 take the time이었습니다. 최신 앨범을 하면서 
                    좀 지루함을 느낄 수 있었는데. take the time에서 원곡을 연주하고 
                    난 즉흥연주 시 존페트루치와 조단루디스가 격렬한 솔로로 주고 받는 
                    시간이 하일라이트였죠.
                  </p>
                  
                  <p className="text-xs mt-2 italic">
                    아쉬움은 좀 있었지만, 특히 take the time의 유명한 솔로부분...
                  </p>
                </div>
                
                <div className="bg-indigo-800 bg-opacity-50 p-4 rounded border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-300 mb-2">2부: Six Degrees of Inner Turbulence</h4>
                  <p className="text-sm">
                    2부는 40분짜리 곡인 six degrees of inner turbulance를 연주했는데 
                    장시간임에도 상당히 깔끔하게 소화했습니다. 사운드도 1부 때보다 안정감을 
                    찾았고 그게 제 귀가 익숙해져서인지도 모르겠지만.
                  </p>
                </div>
                
                <div className="bg-red-800 bg-opacity-50 p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-bold text-red-300 mb-2">최고의 피날레: Pull Me Under + Master of Puppets</h4>
                  <p className="text-sm">
                    그러나 최고의 하일라이트는 
                    항상 끝부분에 연주하는 Pull me under에다 Master of puppets를 끼워 
                    부른 마지막 연주였습니다. 존페트루치가 충실하게 해석한 편이라면 
                    포토노이의 해석은 자기만의 버라이어티한 맛을 좀 느낄 수 있었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Overall Impression */}
            <div className="mb-12 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-gray-300 mb-4">전체적인 소감</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  전반적으로 그들의 기량을 확인할 수는 있었지만, 3번 째 보면서 느끼는 
                  약간의 식상함-그게 개인적인 체력적 문제도 있겠지만-도 없지 않았던 
                  것 같습니다.
                </p>
              </div>
            </div>

            {/* RATM Quote */}
            <div className="mb-12 p-6 bg-black bg-opacity-50 rounded-lg">
              <div className="text-center">
                <blockquote className="italic text-gray-300">
                  <p className="mb-1">It has to start somewhere</p>
                  <p className="mb-1">It has to start sometime</p>
                  <p className="mb-1">What better place than here</p>
                  <p className="mb-1">What better time than now</p>
                  <p className="mb-4">All hell can't stop us now</p>
                  <footer className="text-sm text-gray-400">- Guerrilla Radio, RATM</footer>
                </blockquote>
              </div>
            </div>

            {/* Author Info */}
            <div className="mb-12 p-6 bg-slate-800 rounded-lg">
              <h3 className="text-lg font-bold text-slate-300 mb-4">작성자 정보</h3>
              <div className="text-sm text-slate-400 space-y-1">
                <p><strong>김기범 (Gibum, Kim)</strong></p>
                <p>E-mail: RobertFripp@lycos.co.kr</p>
                <p>kbkim3@web.dwe.co.kr</p>
                <p>Homepage: http://kimgibum.hihome.com</p>
                <p>전 화: 031-428-5336</p>
                <p>F A X: 031-428-5321</p>
                <p>HP: 011-630-1969</p>
                <p>주소: 경기도 군포시 당정동 543</p>
                <p>대우전자 디지털 비디오 연구소 연구 3팀</p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="text-center mt-12">
              <div className="bg-[#8080FF] bg-opacity-20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">총평</h3>
                <p className="text-sm leading-relaxed">
                  펜싱경기장의 열악한 음향환경에도 불구하고 Dream Theater는 
                  3시간의 장시간 공연을 통해 프로그레시브 메탈의 정수를 보여주었습니다. 
                  특히 "Take the Time"의 즉흥연주와 "Six Degrees of Inner Turbulence"의 
                  완벽한 소화, 그리고 "Pull Me Under" + "Master of Puppets"의 
                  환상적인 매시업은 이날 공연의 백미였습니다.
                </p>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본을 바탕으로 복원한 것입니다.<br />
                EUC-KR 인코딩에서 UTF-8로 변환하여 복원했습니다.
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