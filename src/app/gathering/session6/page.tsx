import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제6회 YBD 실황 영상 감상회 - 1995년 8월 12일 | Yebadong',
  description: '예바동 제6회 특별 실황 영상 감상회 (1995년 8월 12일, Led Zeppelin 신촌)',
};

export default function Session6Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="border-t-4 border-b-4 border-yellow-500 py-4 mb-6">
            <h1 className="text-4xl font-bold text-primary mb-2">
              제6회 YBD Special 실황 영상 감상회
            </h1>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1995년 8월 12일 토요일</p>
                  <p><strong>장소:</strong> Led Zeppelin (신촌)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>발표자:</strong> 김남웅 (Neo-Zao)</p>
                  <p><strong>성격:</strong> 실황 영상 특별 감상회</p>
                </div>
              </div>
            </div>

            {/* Program Section */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">프로그램</h2>
              
              {/* First Half */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-yellow-500 mb-4">🎬 전반부</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-sm">
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-yellow-400 font-bold mb-2">0. Opening</p>
                      <p>Serenade - Ozaki Ami</p>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-red-400 font-bold mb-2">1. King Crimson</p>
                      <p className="text-xs text-gray-400 mb-2">(April 29~30, '84, Tokyo 간이보험 홀)</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Lark's Tongues In Aspic Part II</li>
                        <li>• Elephant Talk</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-green-400 font-bold mb-2">2. Emerson, Lake, And Palmer</p>
                      <ul className="space-y-1 text-xs">
                        <li>• The Barbarian</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-blue-400 font-bold mb-2">3. Yes</p>
                      <p className="text-xs text-gray-400 mb-2">('72 American Tour)</p>
                      <ul className="space-y-1 text-xs">
                        <li>• I've Seen All Good People</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-orange-400 font-bold mb-2">4. Jethro Tull</p>
                      <p className="text-xs text-gray-400 mb-2">('80 Canada Hammersmith Odeon)</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Black Sunday</li>
                        <li>• Aqualong</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-pink-400 font-bold mb-2">5. Camel</p>
                      <p className="text-xs text-gray-400 mb-2">(May 11 '84, Hammersmith Odeon)</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Stationary Traveller</li>
                        <li>• Snow Goose</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-cyan-400 font-bold mb-2">6. Tangerine Dream</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Phaedra</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intermission */}
              <div className="mb-8 p-4 bg-yellow-900 bg-opacity-40 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">🎵 Intermission</h3>
                <p className="text-sm">Jikyu Shyonen Wa Hashiru / Prism Train - Ozaki Ami</p>
              </div>

              {/* Second Half */}
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-4">🎬 후반부</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 text-sm">
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-red-400 font-bold mb-2">7. Edgar Winter & Rick Derringer</p>
                      <p className="text-xs text-gray-400 mb-2">(Jan. 24 '90 Tokyo Mza Ariake)</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Frankenstein</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-green-400 font-bold mb-2">8. Kazumi Watanabe</p>
                      <p className="text-xs text-gray-400 mb-2">(May 22 '87 Tokyo Nakano Sunplaza)</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Melancho</li>
                        <li>• City</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="text-blue-400 font-bold mb-2">9. The Super Guitar Trio</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Mediterranean Sundance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-4">특별 기록</h2>
              <div className="space-y-4 text-sm">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">🎥 영상 감상회의 의미</h3>
                  <p className="text-blue-700">
                    제6회 감상회는 예바동 역사상 최초의 '실황 영상' 전용 감상회였습니다. 
                    김남웅(Neo-Zao)님의 발표로 진행되었으며, 다양한 프로그레시브 록 아티스트들의 
                    귀중한 실황 영상들을 함께 감상했습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">🎸 주요 하이라이트</h3>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• King Crimson의 1984년 도쿄 공연 실황</li>
                    <li>• Yes의 1972년 아메리칸 투어 영상</li>
                    <li>• Camel의 Hammersmith Odeon 공연</li>
                    <li>• Edgar Winter의 명곡 'Frankenstein' 실황</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-purple-600">9</div>
                  <div className="text-purple-700">아티스트</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">15+</div>
                  <div className="text-purple-700">곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🎥</div>
                  <div className="text-purple-700">영상 감상회</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">1995</div>
                  <div className="text-purple-700">8월</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ 제6회 YBD 실황 영상 감상회 완전 복원! 
                김남웅님의 발표와 함께한 특별한 영상 감상의 밤이 되살아났습니다! 🎬✨
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session5" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (5회)
                </Link>
                
                <Link href="/gathering/session7" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (7회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
