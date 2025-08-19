import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제8회 YBD Scandinavian Rock 특집 - 1996년 5월 4일 | Yebadong',
  description: '예바동 제8회 스칸디나비안 록 특집 감상회 (1996년 5월 4일, 홍대앞 Freebird)',
};

export default function Session8Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            제8회 YBD Special Show of ProRock
          </h1>
          <div className="text-2xl font-bold text-blue-600 mb-4">
            Scandinavian Rock Special
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 5월 4일 토요일 오후 2시</p>
                  <p><strong>장소:</strong> 홍대앞 Freebird</p>
                </div>
                <div className="space-y-2">
                  <p><strong>특집:</strong> Scandinavian Progressive Rock</p>
                  <p><strong>주요 레이블:</strong> SILENCE, Kerrs Pink</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-800 bg-opacity-60 rounded">
                <h3 className="text-yellow-400 font-bold mb-2">참석자</h3>
                <p className="text-sm">
                  이훈구(Budgie), 큐티(olivia), 김남웅(Neo-Zao), 이윤직(cicco), 김영호(vertigo), 
                  김성우(libero), 박왕근(windmill), 이강영(Lennon), 최홍석(hschoi), 전승훈(LongDal), 지영아(icicle)
                </p>
              </div>
            </div>

            {/* Part I: Theory Section */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
                Part I. 프로그레시브와 민족성 - 김영호 (Arirang, Kilsan)
              </h2>
              
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                <h3 className="text-yellow-400 font-bold mb-4">🌍 민족성과 프로그레시브 록</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    각 뮤지션의 개성이 여타 장르에 비해 더욱 중요한 요소로 작용하고 있는 프로그레시브록의 
                    영역에서 사실 국제적인 사운드는 곧 국적 불명의 몰개성한 것으로 취급받고 있으며, 
                    이러한 사실은 프로그레시브 영역에서 민족성이라는 요소가 얼마나 중요한 부분을 차지하고 
                    있는가를 나타내는 것이라고 하겠다.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                      <h4 className="font-bold text-red-400 mb-2">🇮🇹 라틴족 (이태리/스페인)</h4>
                      <p className="text-xs">다혈적인 호방함과 열정</p>
                    </div>
                    
                    <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                      <h4 className="font-bold text-blue-400 mb-2">🇩🇪 게르만족 (독일)</h4>
                      <p className="text-xs">전자음악의 이지적 냉기와 싸이키델릭 비트록의 광폭성</p>
                    </div>
                    
                    <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                      <h4 className="font-bold text-green-400 mb-2">🇬🇧 앵글로색슨족 (영국)</h4>
                      <p className="text-xs">서늘한 패러디와 온건한 전통 속에서 끝없는 진보</p>
                    </div>
                    
                    <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                      <h4 className="font-bold text-purple-400 mb-2">🇫🇷 프랑스</h4>
                      <p className="text-xs">라틴족의 다혈질과 게르만의 냉철함이 뒤섞인 이지적 폭력성</p>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-900 bg-opacity-40 p-4 rounded mt-4">
                    <h4 className="font-bold text-cyan-400 mb-2">🇸🇪 스칸디나비아 (스웨덴)</h4>
                    <p className="text-xs">
                      북구적 정서와 민족적 향취, 장인정신에 의한 뛰어난 테크닉, 
                      독일록과의 연계감 속에서도 독특한 민속 음악적 요소로 차별화
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-4 text-sm text-gray-400">
                  - 글: 김상만 -
                </div>
              </div>
            </div>

            {/* Playing List Section */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">🎵 Playing List</h2>
              
              {/* Swedish Progressive */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-yellow-500 mb-4">스웨덴 프로그레시브</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-yellow-400 font-bold mb-2">Anekdoten - "Nucleus" (1995)</p>
                    <p className="text-gray-300">• Nucleus</p>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-yellow-400 font-bold mb-2">Junipher Green - "Friendship" (1971)</p>
                    <p className="text-gray-300">• Music for our children<br />• Maurice</p>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-yellow-400 font-bold mb-2">Thirty Years War - "War Song" (1976)</p>
                    <p className="text-gray-300">• Krigssang (War Song)<br />• Murar (Walls)</p>
                  </div>
                </div>
              </div>

              {/* SILENCE Label Special */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-red-500 mb-4">🏷️ SILENCE Label Special</h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-red-400 font-bold mb-2">Bo Hansson - "Lord of the Rings" (1972)</p>
                    <p className="text-gray-300">• The Black Riders/Flight to the Ford</p>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-red-400 font-bold mb-2">International Harvester - "Sov Gott Rose-Marie" (1969)</p>
                    <p className="text-gray-300">• There is no other place<br />• The Runcorn Report on Western Progress</p>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-red-400 font-bold mb-2">Kebnekaise - "III" (1975)</p>
                    <p className="text-gray-300">• Leksands Brudmarsh<br />• Polska fran Harjedalen</p>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="text-red-400 font-bold mb-2">Ragnarok - "Ragnarok" (1976)</p>
                    <p className="text-gray-300">• Farval Kopenhagen<br />• Nybakat Brod</p>
                  </div>
                </div>
              </div>

              {/* Kerrs Pink Special */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-orange-500 mb-4">🔥 Kerrs Pink Special</h3>
                <div className="space-y-6 text-sm">
                  <div className="bg-orange-900 bg-opacity-40 p-6 rounded-lg">
                    <p className="text-orange-400 font-bold mb-2">1. Kerrs Pink - "Kerrs Pink" (1980)</p>
                    <p className="text-gray-300 mb-3">• Velkomst (Welcome)<br />• Hvis er er der neste ar (If I'm still here next-year)</p>
                  </div>
                  
                  <div className="bg-orange-900 bg-opacity-40 p-6 rounded-lg">
                    <p className="text-orange-400 font-bold mb-2">2. Kerrs Pink - "Mellom Oss" (1981)</p>
                    <p className="text-gray-300 mb-3">• Mellom Oss<br />• Trostevise<br />• Elegi</p>
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded mt-3">
                      <p className="text-xs leading-relaxed">
                        데뷔 앨범의 첫 곡 Velkomst와 마찬가지로 Keyboard의 차가운 북구 유럽의 바람소리와 
                        깨끗한 기타소리로 시작되는 타이틀 곡 Mellom Oss를 통해 두 번째 작품이 첫 번째 작품의 
                        연장선임을 알 수 있다. TROSTEVISE는 경쾌한 리듬의 기타에 게르만 민족의 거친 억양에 
                        허스키한 목소리, 그리고 터져나오는 오르간 연주가 흥겨움으로 가득하다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-orange-900 bg-opacity-40 p-6 rounded-lg">
                    <p className="text-orange-400 font-bold mb-2">3. Kerrs Pink - "A Journey on the Inside" (1993)</p>
                    <p className="text-gray-300 mb-3">• Magic Mary<br />• The Sorcerer</p>
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded mt-3">
                      <p className="text-xs leading-relaxed">
                        MUSEA의 요청으로 1989년 활동을 중단한 KERRS PINK가 Tore JOHANSEN을 중심으로 
                        옛 멤버들이 모여 발표한 세 번째 앨범. 자신의 능력에도 불구하고 내부의 어떤 것이 
                        자신을 방해한다고 느끼는 Roy라는 남자가 Mary라는 여자의 도움으로 최면을 통해 
                        자신의 내부 세계로 여행을 떠나는 컨셉트 앨범이다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="mb-8 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">특별 기록</h2>
              <div className="space-y-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🎭 스칸디나비안 록의 특징</h3>
                  <p className="text-blue-700">
                    제8회 감상회는 당시 국내에서 매우 희귀했던 스칸디나비안 프로그레시브 록을 체계적으로 
                    소개한 특별한 세션이었습니다. 특히 SILENCE 레이블의 아티스트들과 노르웨이 Kerrs Pink의 
                    음악을 통해 북구 특유의 차가운 서정성과 민속적 요소를 경험할 수 있었습니다.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">📚 이론과 실제의 결합</h3>
                  <p className="text-green-700">
                    김영호님의 '프로그레시브와 민족성'에 대한 이론적 설명과 함께 실제 음악 감상이 
                    병행되어 더욱 깊이 있는 이해를 도모했습니다. 각 민족별 프로그레시브 록의 특징을 
                    체계적으로 분석한 귀중한 자료였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-purple-600">11</div>
                  <div className="text-purple-700">아티스트</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">20+</div>
                  <div className="text-purple-700">곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🇸🇪</div>
                  <div className="text-purple-700">스칸디나비아</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🏷️</div>
                  <div className="text-purple-700">SILENCE 레이블</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ 제8회 YBD 스칸디나비안 록 특집 완전 복원! 
                북구의 차가운 서정성과 민족적 색채가 되살아났습니다! 🇸🇪❄️
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session7" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (7회)
                </Link>
                
                <Link href="/gathering/session9" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (9회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
