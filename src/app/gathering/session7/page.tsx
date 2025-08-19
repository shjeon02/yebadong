import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제7회 YBD 즉흥감상회 & South-American 특집 - 1996년 3월 1일 | Yebadong',
  description: '예바동 제7회 즉흥 감상회 및 남미 프로그레시브 록 특집 (1996년 3월 1일, 신촌 레드 제플린)',
};

export default function Session7Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            제7회 YBD Special Show of ProRock
          </h1>
          <div className="text-lg text-muted">
            즉흥 감상회 & South-American Progressive Rock 특집
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 3월 1일 금요일 오후 2시</p>
                  <p><strong>장소:</strong> 신촌 레드 제플린</p>
                </div>
                <div className="space-y-2">
                  <p><strong>즉흥감상회 진행:</strong> 박왕근 (windmill)</p>
                  <p><strong>특집:</strong> South-American Progressive Rock</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-800 bg-opacity-60 rounded">
                <h3 className="text-yellow-400 font-bold mb-2">참석자</h3>
                <p className="text-sm">
                  이훈구, 김성우, 김영호, 윤성욱, 김이영, 김지인, 박왕근, 이규만, 이강영, 
                  김남웅, 신인철, 전승훈, 지영아, 천리안 게스트 두 분 등
                </p>
              </div>
            </div>

            {/* 즉흥 감상회 Section */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                🎵 즉흥 감상회 by 박왕근 (windmill)
              </h2>
              
              <div className="space-y-4 text-sm">
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="text-yellow-400 font-bold mb-2">1. Shingetsu [Same] - Oni</p>
                  <p className="text-gray-300">일본 프로그레시브 록의 대표작</p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="text-yellow-400 font-bold mb-2">2. Philip Glass [Koyaanisqatsi] - Koyaanisqatsi/Pruit Igoe</p>
                  <p className="text-gray-300">미니멀 음악의 거장 필립 글래스의 영화 음악</p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="text-yellow-400 font-bold mb-2">3. Cirkus [One] - You Are/Title Track</p>
                  <p className="text-gray-300">프로그레시브 록의 정교한 구성미</p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="text-yellow-400 font-bold mb-2">4. Madden & Harris [Fool's Paradise] - The Wind At Eve/Fool's Paradise</p>
                  <p className="text-gray-300">서정적인 프로그레시브 포크</p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="text-yellow-400 font-bold mb-2">5. Island [Pictures] - Herold And King/Dloreh 중 전반부</p>
                  <p className="text-gray-300">아일랜드의 대표적 프로그레시브 록</p>
                </div>
              </div>
            </div>

            {/* South-American Special Section */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 text-center">
                🌎 South-American Progressive Rock Special
              </h2>
              
              <div className="space-y-6">
                {/* Los Jaivas */}
                <div className="bg-red-900 bg-opacity-40 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🇨🇱</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-red-400 mb-2">
                        1. Todos Juntos (5:52) - Los Jaivas [Chile]
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        "Todos Juntos" 1976
                      </p>
                      <p className="text-sm leading-relaxed">
                        칠레의 음유시인 Violetta Parra와 같은 성을 가진(사실상, 그녀와 같이 80년대 음반을 발매하기도 함) 
                        인물들이 많은 노장 포크 그룹 Los Jaivas의 76년 앨범의 동명 타이틀 곡입니다. 
                        토속적인 리듬, 반복적인 간결한 멜로디의 독특한 스타일입니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Aucan */}
                <div className="bg-blue-900 bg-opacity-40 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🇦🇷</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-400 mb-2">
                        2. Llegando A Casa (3:35) / Primavera De Una Esquina (6:45) - Aucan [Argentina]
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        "Brotes Del Alba" 1980
                      </p>
                      <p className="text-sm leading-relaxed">
                        마치, 70년대 이태리 그룹들의 서정성을 그대로 간직한 듯한 아르헨티나 folk/progressive group. 
                        동명타이틀 앨범도 좋다고 하더군요.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pablo "El Enterrador" */}
                <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">🇦🇷</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-400 mb-2">
                        3. La Herencia De Pablo (7:17) - Pablo "El Enterrador" [Argentina]
                      </h3>
                      <p className="text-sm text-gray-300 mb-2">
                        "Same" 19?? (재발매 앨범)
                      </p>
                      <p className="text-sm leading-relaxed">
                        많은 세계의 프로그레시브 팬들이 손꼽는, 결성한지 25년이 넘는 아르헨티나 노장 그룹 
                        Pablo "El Enterrador"(Paul, the Gravedigger)의 재발매 앨범. 뛰어난 연주력을 가지고 있으며, 
                        복잡한 곡구성, Bass가 없는 게 이 그룹의 특징인듯. 심포닉 락 스타일의 이 곡(Paul's Heritance)은 
                        본 앨범의 마지막 가장 긴 곡.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">특별 기록</h2>
              <div className="space-y-4 text-sm">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">🎭 즉흥 감상회의 의미</h3>
                  <p className="text-green-700">
                    제7회 감상회는 박왕근님의 진행으로 '즉흥 감상회' 형태로 진행되었습니다. 
                    정해진 틀 없이 다양한 장르와 스타일의 음악을 자유롭게 소개하는 혁신적인 방식이었습니다.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 mb-2">🌎 남미 프로그레시브 록 특집</h3>
                  <p className="text-orange-700">
                    당시로서는 매우 희귀했던 남미 프로그레시브 록을 체계적으로 소개한 특별한 세션이었습니다. 
                    칠레와 아르헨티나의 독특한 음악적 색채를 경험할 수 있는 귀중한 기회였습니다.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🎵 음악적 다양성</h3>
                  <p className="text-blue-700">
                    미니멀 음악(Philip Glass)부터 남미 포크록까지, 프로그레시브 록의 경계를 넓혀가는 
                    예바동의 열린 음악 탐구 정신을 보여준 대표적인 감상회였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-purple-600">8</div>
                  <div className="text-purple-700">곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">6</div>
                  <div className="text-purple-700">아티스트</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🌎</div>
                  <div className="text-purple-700">남미 특집</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🎲</div>
                  <div className="text-purple-700">즉흥 진행</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ 제7회 YBD 즉흥감상회 & 남미 특집 완전 복원! 
                박왕근님의 즉흥 진행과 남미 프로그레시브 록의 만남이 되살아났습니다! 🌎✨
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session6" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (6회)
                </Link>
                
                <Link href="/gathering/session8" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (8회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
