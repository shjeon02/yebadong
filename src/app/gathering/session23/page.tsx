import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제23회 YBD Neo-Zao 시간 때우기 특집 - 2000년 | Yebadong',
  description: '예바동 제23회 Neo-Zao 시간 때우기 특집 (2000년, 홍대앞 CARS)',
};

export default function Session23Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            제23회 YBD Special Show of ProgRock Music
          </h1>
          <h2 className="text-2xl text-yellow-400 mb-2">Neo-Zao의 시간 때우기 특집</h2>
          <p className="text-lg text-cyan-300">2000년 홍대앞 "CARS"</p>
          <p className="text-sm text-gray-400 italic">From zao@lge.</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8">
            
            {/* Track Listing */}
            <div className="space-y-8">
              
              {/* 강창우님 선곡 */}
              <div className="border border-yellow-400 rounded-lg p-6 bg-yellow-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  🎵 강창우님 선곡
                </h3>
                <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                  <p className="text-yellow-100">
                    <span className="font-bold text-yellow-200">1.</span> MIKE OLDFIELD - Millennium Bell 중에서 *
                  </p>
                </div>
              </div>

              {/* KINE님 선곡 (1차) */}
              <div className="border border-blue-400 rounded-lg p-6 bg-blue-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-blue-300 mb-4">
                  🎹 KINE님 선곡 (1차)
                </h3>
                <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                  <p className="text-blue-100">
                    <span className="font-bold text-blue-200">2.</span> SAMLA MANNAS MANNA - Kaka 중에서 
                    <br />
                    <span className="ml-4 text-blue-200">• Cyckliga Titanic</span>
                    <br />
                    <span className="ml-4 text-blue-200">• Frestelsens Cafe</span> *
                  </p>
                </div>
              </div>

              {/* 이장원님 선곡 */}
              <div className="border border-green-400 rounded-lg p-6 bg-green-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-green-300 mb-4">
                  🌍 이장원님 선곡
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <p className="text-green-100 mb-2">
                      <span className="font-bold text-green-200">3.</span> KOLLA ATTILA - Musical Witchcraft Suite 중에서
                    </p>
                    <ul className="text-sm text-green-200 ml-4 space-y-1">
                      <li>• Wanderers from the 15th Century</li>
                      <li>• The Dark Middle Ages</li>
                      <li>• Poseidon</li>
                      <li>• Barock</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <p className="text-green-100">
                      <span className="font-bold text-green-200">4.</span> EL CONGRESO - Nuevo Intento
                    </p>
                  </div>
                </div>
              </div>

              {/* KINE님 선곡 (2차) */}
              <div className="border border-purple-400 rounded-lg p-6 bg-purple-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-purple-300 mb-4">
                  🎹 KINE님 선곡 (2차)
                </h3>
                <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                  <p className="text-purple-100">
                    <span className="font-bold text-purple-200">5.</span> ENSEMBLE NIMBUS - Spacegoat 중에서
                    <br />
                    <span className="ml-4 text-purple-200">• Burning Arrows</span>
                    <br />
                    <span className="ml-4 text-purple-200">• Wooden Tuedo</span>
                  </p>
                </div>
              </div>

              {/* Neo-Zao의 시간 때우기 선곡 */}
              <div className="border border-red-400 rounded-lg p-6 bg-red-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-red-300 mb-4">
                  ⏰ Neo-Zao의 시간 때우기 선곡
                </h3>
                <div className="space-y-3">
                  <div className="bg-red-800 bg-opacity-30 p-3 rounded">
                    <p className="text-red-100">
                      <span className="font-bold text-red-200">6.</span> RASCALS - Once Upon A Dream 중에서
                    </p>
                  </div>
                  
                  <div className="bg-red-800 bg-opacity-30 p-3 rounded">
                    <p className="text-red-100">
                      <span className="font-bold text-red-200">7.</span> NENO PHILHARMONIC - Moss Confess 중에서
                    </p>
                  </div>
                  
                  <div className="bg-red-800 bg-opacity-30 p-3 rounded">
                    <p className="text-red-100">
                      <span className="font-bold text-red-200">8.</span> SPANKY & OUR GANG - Without Rhyme or Reason 중에서
                    </p>
                  </div>
                </div>
              </div>

              {/* 추가 선곡 */}
              <div className="border border-orange-400 rounded-lg p-6 bg-orange-900 bg-opacity-20">
                <h3 className="text-xl font-bold text-orange-300 mb-4">
                  🎵 시간남고 플레이 리스트 없어서 더 틀어본 곡
                </h3>
                <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                  <p className="text-orange-100">
                    <span className="font-bold text-orange-200">10.</span> Par Lindh Project - Live In The UK 중에서
                  </p>
                </div>
              </div>

            </div>

            {/* Neo-Zao's Detailed Review */}
            <div className="mt-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg border border-cyan-500">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                📝 Neo-Zao의 상세 후기
              </h2>
              <div className="space-y-4 text-cyan-100 leading-relaxed text-sm">
                
                <div className="bg-cyan-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-cyan-200 mb-2">🎁 경품 이벤트</h4>
                  <p>
                    몇 명 안되는 인원임에도 불구하고, 친절한 서빙과 씨디플레이어 조작을 해주신 
                    CARS 주인장님께 고마움을 전합니다. 그리고, KINE님이 2장의 경품씨디를 가져왔는데 
                    제일 먼저 오신 강창우님과 제일 늦게 오신 도태영님이 사다리 타기로 승리하셔서 
                    가져 가셨습니다. KINE님의 정성도 박수를 받을 일이죠? :-)
                  </p>
                </div>

                <div className="bg-cyan-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-cyan-200 mb-2">🎵 감상회 분위기</h4>
                  <p>
                    감상회의 분위기는 다른 분들이 잘 전해주셔서 전 이만 생략합니다. :-P
                  </p>
                </div>

                <div className="bg-cyan-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-cyan-200 mb-2">💿 마이도스 쇼핑 후기</h4>
                  <p>
                    그리고, 마이도스에 들러서 Sonja Kristina의 데뷔작을 샀습니다. 91년 앨범인가요? 
                    마침 마큐지에서 본 기억이 나서 집에가서 91년도의 마큐지를 뒤적뒤적 했는데 역시 있더군요. 
                    첼리스트 ALI의 모습이 너무나 인상적이서 한동안 궁금해 했던 기억이 있습니다. 
                    때가 때이니 만큼 당시 씨디로 발매가 되었었더군요. 현재는 물론 거의 찾아볼 수 없게 되었지만...
                  </p>
                </div>

                <div className="bg-cyan-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-cyan-200 mb-2">🎨 아트워크 평가</h4>
                  <p>
                    아트p에 대해서 말씀드리면, 시완에서 나온 어떤 Jewel Case 씨디보다 깔끔하게 디자인 되었습니다. 
                    시완에서 그간 소비자들의 주요 불만사항이 재킷 아트워크에 대해서 심기일전하여 
                    만든 노력을 잘 알 수 있더군요.
                  </p>
                </div>

                <div className="bg-cyan-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-cyan-200 mb-2">🌙 음악적 감상</h4>
                  <p>
                    음악으로 말한다면, 회사생활 후 집에가서 11시가 넘어서 듣는 감상시간이 전혀 시끄럽지 않았습니다. 
                    깔끔한 느낌도 들고, 조용한 여백이 군데군데 느껴져서 피곤한 사람들에게 좋습디다. 
                    Curved Air의 팬 여러분은 한번 들어보시길, 권합니다.
                  </p>
                </div>

                <div className="bg-cyan-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-cyan-200 mb-2">🌿 SPIROGYRA 미발표곡 감상</h4>
                  <p>
                    그리고, 시완에서 조만간 발매될 SPIROGYRA의 미발표 곡들을 마이도스에서 들어볼 기회가 있었습니다. 
                    고백하자면, 제가 SPIROGYRA의 Big Fan은 아니어서, 기대는 하지 않았지만, 곡들이 아주 순하고 조용한 느낌이더군요. 
                    (여기서 Big Fan이란 새로운 앨범이 나오면, 사느냐, 사지 않느냐 정도의 판단기준이라고 
                    말할 수 있습니다.) 멜로디도 깨끗하고 달콤하더군요.
                  </p>
                </div>

                <div className="text-right mt-6">
                  <p className="text-cyan-400 font-bold">Neo-Zao</p>
                  <p className="text-xs text-cyan-300 mt-2">
                    NP) JIGSAW - Sky High
                  </p>
                </div>
              </div>
            </div>

            {/* Session Analysis */}
            <div className="mt-12 p-6 bg-purple-100 bg-opacity-10 rounded-lg border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎼 Session 23의 특별한 점</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">⏰ 캐주얼한 분위기</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 시간 때우기:</strong> 편안하고 자유로운 선곡</li>
                    <li><strong>• 소규모 모임:</strong> 친밀한 분위기</li>
                    <li><strong>• 경품 이벤트:</strong> KINE님의 2장 CD 제공</li>
                    <li><strong>• 사다리 타기:</strong> 재미있는 경품 추첨</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🌍 국제적 선곡</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 영국:</strong> Mike Oldfield</li>
                    <li><strong>• 스웨덴:</strong> Samla Mannas Manna</li>
                    <li><strong>• 헝가리:</strong> Kolla Attila</li>
                    <li><strong>• 아르헨티나:</strong> El Congreso</li>
                    <li><strong>• 미국:</strong> Rascals, Spanky & Our Gang</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🎵 음악적 특징</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 조용한 감상:</strong> 11시 이후에도 시끄럽지 않음</li>
                    <li><strong>• 깔끔한 느낌:</strong> 피곤한 사람들에게 적합</li>
                    <li><strong>• 여백의 미:</strong> 군데군데 조용한 구간</li>
                    <li><strong>• 순하고 달콤:</strong> SPIROGYRA 스타일</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">💿 음반 쇼핑 & 리뷰</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• Sonja Kristina:</strong> 91년 데뷔작 구매</li>
                    <li><strong>• 마큐지 추억:</strong> 첼리스트 ALI 인상적</li>
                    <li><strong>• 아트워크:</strong> 시완의 개선된 디자인</li>
                    <li><strong>• SPIROGYRA:</strong> 미발표곡 시청</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-cyan-400">10</div>
                  <div className="text-cyan-300">곡 (시간 때우기)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-yellow-400">🎁</div>
                  <div className="text-yellow-300">경품 이벤트</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-400">🌍</div>
                  <div className="text-green-300">5개국 음악</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-400">😴</div>
                  <div className="text-purple-300">조용한 감상</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-cyan-400 mb-4">
                ✅ 제23회 Neo-Zao 시간 때우기 특집 완전 복원! 
                편안하고 친밀한 분위기 속에서 국제적 선곡과 음반 쇼핑 후기가 되살아났습니다! ⏰🌍💿
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-black border border-cyan-400 text-cyan-400 font-medium rounded-md hover:bg-cyan-900 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session22" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  ← 이전 (22회)
                </Link>
                
                <Link href="/gathering/session24" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  다음 (24회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
