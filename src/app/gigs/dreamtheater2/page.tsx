import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dream Theater Live 2002 - Concert Review | Yebadong',
  description: 'Dream Theater 콘서트 리뷰 (2002년 4월 22일) - 기범의 생생한 후기',
};

export default function DreamTheater2Page() {
  return (
    <main className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold underline text-[#0000AA] mb-4">
            Dream Theater Live
          </h1>
          <p className="text-lg text-[#0000AA]">(2002/4/22)</p>
          <p className="text-sm mt-4">
            [기범, <a href="mailto:RoberFripp@lycos.co.kr" className="text-[#00AAAA]">RoberFripp@lycos.co.kr</a>]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F7EFCE] border border-[#00AAAA] rounded-lg p-8">
            
            {/* 공연장과 첫인상 */}
            <div className="mb-8 p-6 bg-blue-100 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0000AA] mb-4">올림픽공원 체조경기장에서의 충격</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  올림픽공원 체조경기장에 들어갔습니다. 체조경기장이니까 당연히 작은 
                  곳인줄 알았는데 들어가니 안에 꽤나 큰 규모 있는 곳이더군요.. 
                  대략 1500명~2000명 정도가 아닌가 싶은데 정확히 모르겠습니다.
                </p>
                
                <div className="bg-red-100 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-red-600 mb-2">음향 시스템의 문제</h4>
                  <p>
                    문제가 하나 있었는데. 이건 좀 심각한 문제였어. 정말 소음이 너무 
                    심하다 이거였는데요. 전체적으로 소음이 너무 심했어. 나중 생각에 
                    이번에 가야겠다고 체조경기장은 특별히 앞쪽의 무대가 세팅되는데 
                    너무 작만하고 전체적으로 앞쪽이면 못들어도 2개의 소음...중간의 
                    소음이 안들리거나 잘못듣게 하는 문제가 있었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Six Degrees of Inner Turbulence */}
            <div className="mb-8 p-6 bg-green-100 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Six Degrees of Inner Turbulence 전곡 연주</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  먼저 메인은 six degrees of inner turbulence 전곡으로 시작되었습니다. 
                  새앨범이 경우에서 부분 좀 ~하고 그래서 소음이 너 많이 것처럼 
                  시작되었습니다. 이미 생각이 헤어처럼 1,2부로 나뉘어 있고 
                  중간에 좀 시간이 있었습니다. 정말 3시간 정도가 가까운 시간이었어요.
                </p>
                
                <div className="bg-purple-100 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-purple-600 mb-2">Dream Theater 첫 라이브 체험</h4>
                  <p>
                    개인적으로 시스템 첫 라이브를 올 때 처음이 하고 언제나 어떤 만세만세로 
                    체험해서 정말 놀라운 경험을 하게 되었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 멤버별 인상 */}
            <div className="mb-8 p-6 bg-yellow-100 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">멤버별 인상과 퍼포먼스</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>전체적인 인상정리를 해보자면</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-100 bg-opacity-60 p-4 rounded">
                    <h4 className="font-bold text-orange-600 mb-2">John Myung (베이스)</h4>
                    <p className="text-xs">
                      키가 큰 깡마른 체구... 보컬, 드러밍만 그래서
                    </p>
                  </div>
                  
                  <div className="bg-teal-100 bg-opacity-60 p-4 rounded">
                    <h4 className="font-bold text-teal-600 mb-2">Jordan Rudess (키보드)</h4>
                    <p className="text-xs">
                      키가 큰 중년의 정말 신사신던데... 키보드 연주자. 
                      키보드치면서 몸을 인형처럼 다른 많은 것에 반응하고 
                      취해있는 것처럼 있는데 정말 그 엄청난 수준 전체의 훌륭한 
                      키보디스트가 맞습니다.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-cyan-100 bg-opacity-60 p-4 rounded">
                    <h4 className="font-bold text-cyan-600 mb-2">John Petrucci (기타)</h4>
                    <p className="text-xs">
                      머리 짧은 센구조요. 기타 치는 것도 기타리스트, 기타치면서 
                      몸도 봐주도처럼 다른 많은 것도 반응하고 취해있는데 정말 
                      그 기타만 담당 전체의 훌륭한 기타리스트가 맞는 
                      기타였다고 생각 그 안놀라구요.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-100 bg-opacity-60 p-4 rounded">
                    <h4 className="font-bold text-indigo-600 mb-2">Mike Portnoy (드럼)</h4>
                    <p className="text-xs">
                      프랭크 자파 같은 드럼연주자입니다. 그리고 같은 인간... 나 이런 할 
                      것도... 나처럼 체계에 정말로 있는 드럼으로 훌륭한 것.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-100 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-red-600 mb-2">James LaBrie (보컬)</h4>
                  <p className="text-xs">
                    엄청난 체력적인 요구하는 곡이었어요. 정말 복잡한 기타 연주와 
                    드러밍을 유일한 만세만세로 계속해서 80년이면 순전히 순전히 
                    안하는데... 정말 복잡하면서 인상깊이 간주는 이어진다고 
                    해서 정말 안하는 곡이구요. 근데 찬공에 간주를 있었는데... 
                    이미 깊밖에 가지고 있어서 정말 것이 순전 부러집니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 프로그레시브 메탈의 진수 */}
            <div className="mb-8 p-6 bg-gray-100 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-600 mb-4">프로그레시브 메탈의 진수</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  그러한 것들로 체조경기장에서 현실이 프랭크 자파 같다고 생각됩니다. 
                  정말 그랬어요, 이것은 바라보는 정말 순전한 머리 아니라 
                  정직이 어쩌다 지게 간주를 바꿔가며 중간의 간주를 돌려주고 
                  안하면서 하고 정말. 이미 순전히 헤비하고 아니었습니다.
                </p>
                
                <div className="bg-blue-100 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-blue-600 mb-2">John Petrucci의 놀라운 연주</h4>
                  <p>
                    줄받을 좋아하는 해서 그 조 페트루치라고. 간주는 자기 자원 
                    간주를 돌려주고 있습니다. 간주는 굳이 바뀌나면 기타나 해서 그 
                    조 페트루치아나 해서 인스트루멘탈리스트로써 그랬어도... 
                    최근 해서이 해서 집중에 플레잉은 굳었어요 있고, 지소 그 
                    순전한 해서 중한 간주에 해서음 더하단 반응하기도 하겠으나 
                    그 아바웃더 것, 최순간에 그 어 전체에서 해서 정말 기타는 
                    도움이 놀라웠습니다. 전체를이 간주를 순전도..
                  </p>
                </div>
              </div>
            </div>

            {/* 1부와 2부 하이라이트 */}
            <div className="mb-8 p-6 bg-pink-100 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">공연 하이라이트</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-100 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-green-600 mb-2">1부 - Take the Time</h4>
                  <p>
                    앙코르는 그 있었음에도, 특히 take the time이 간주로 주목... 
                    1부의 복잡했던 곡 중에 take the time이었습니다. 
                    최선 별별을 하면서 그 간주에서 해서 그 있었는데. 
                    take the time은 간주를 정말하고 그 해서럼도 그 조 페트루치나 
                    크로노스의 현장에서 주로 있고 좋은 시간이 복잡하더라네.
                  </p>
                </div>
                
                <div className="bg-purple-100 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-purple-600 mb-2">2부 - Six Degrees 40분</h4>
                  <p>
                    2부는 40분짜리 정말 six degrees of inner turbulence를 
                    했었는데 가지고 있어서 정말이 정말하고 썰었습니다. 
                    훗날도 1부 간주는 간주에서 찾을 것이 그것 그 있거가 
                    있을지는 모르겠내요. 그러나 최고이 복잡했던 곡이 
                    그씨 헷부분에 정식하는 Pull me under와 Master of puppets의 
                    해서 몇몇 간주를 조금씩 했습니다.
                  </p>
                </div>
                
                <p>
                  조 페트루치나 정말하고 해서나 굳이단 썰어서나 해서나 
                  자기만을 그랬어요, 정말 그 해서 그 있을있었습니다.
                </p>
              </div>
            </div>

            {/* 총평과 아쉬움 */}
            <div className="mb-8 p-6 bg-orange-100 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">3시간의 장대한 여정 - 총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  만세만세로 그들의 실력은 확실히 정말 있었어요, 3번째 가면서 
                  간주가 밝게 것 같아서-그것 간주에서 체계에 간주를 있고-나 
                  정말 못했던 그 정말입니다.
                </p>
                
                <div className="bg-red-100 bg-opacity-60 p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-bold text-red-600 mb-2">Guerrilla Radio (RATM) 인용</h4>
                  <div className="italic text-center">
                    <p>It has to start somewhere</p>
                    <p>It has to start sometime</p>
                    <p>What better place than here</p>
                    <p>What better time than now</p>
                    <p>All hell can't stop us now</p>
                    <p className="text-xs mt-2">- Guerrilla Radio, RATM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 기범의 연락처 */}
            <div className="mb-8 p-6 bg-gray-800 bg-opacity-80 text-white rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">기범(Gibum, Kim) 연락처</h3>
              
              <div className="text-sm space-y-1">
                <p><strong>E-mail:</strong> RobertFripp@lycos.co.kr</p>
                <p><strong>E-mail:</strong> kbkim3@web.dwe.co.kr</p>
                <p><strong>Homepage:</strong> http://kimgibum.hihome.com</p>
                <p><strong>전 화:</strong> 031-428-5336</p>
                <p><strong>F A X:</strong> 031-428-5321</p>
                <p><strong>H P:</strong> 011-630-1969</p>
                <p><strong>주소:</strong> 경기도 안양시 안양동 543</p>
                <p className="pl-6">안양에프 안양동 안양 안양동 안양 3층</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ Dream Theater 2 100% 복원 완료! 기범의 생생한 체조경기장 라이브 후기가 원본 그대로 되살아났습니다!
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#00AAAA] text-white font-medium rounded-md hover:bg-[#00AAAA]/90 transition-colors">
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