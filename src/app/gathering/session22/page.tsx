import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제22회 YBD 멀티 발표자 특집 - 1999년 11월 13일 | Yebadong',
  description: '예바동 제22회 멀티 발표자 특집 (1999년 11월 13일, 홍대앞 CARS)',
};

export default function Session22Page() {
  return (
    <main className="min-h-screen bg-[#A9A9D3] text-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            제22회 YBD Special Show of ProgRock Music
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-90 border border-gray-400 rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-100 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">감상회 정보</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1999년 11월 13일 토요일 (두번째주) 오후 2시 30분 - 5시 30분</p>
                  <p><strong>장소:</strong> 홍대앞 "CARS" (T.326-0791)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>경품:</strong> 이동훈님의 Anekdoten 신보 1장 (꿀꺽 -.-;)</p>
                  <p><strong>형식:</strong> 멀티 발표자 시스템</p>
                </div>
              </div>
            </div>

            {/* Main Presenter: 이동훈 */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                🎵 이동훈 (totoro77@nuri.net) - 프로그레시브 명곡 선집
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg border border-green-200">
                  <thead className="bg-green-200">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-green-800">#</th>
                      <th className="px-4 py-3 text-left font-bold text-green-800">Artist</th>
                      <th className="px-4 py-3 text-left font-bold text-green-800">Songs</th>
                      <th className="px-4 py-3 text-left font-bold text-green-800">Albums</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr className="border-b border-green-100">
                      <td className="px-4 py-3 font-bold text-green-700">1</td>
                      <td className="px-4 py-3">Toy</td>
                      <td className="px-4 py-3">A Night in Seoul</td>
                      <td className="px-4 py-3 italic">A Night in Seoul</td>
                    </tr>
                    
                    <tr className="border-b border-green-100 bg-green-50">
                      <td className="px-4 py-3 font-bold text-green-700">2</td>
                      <td className="px-4 py-3">Banco</td>
                      <td className="px-4 py-3">Metamorphosis</td>
                      <td className="px-4 py-3 italic">Banco</td>
                    </tr>
                    
                    <tr className="border-b border-green-100">
                      <td className="px-4 py-3 font-bold text-green-700">3</td>
                      <td className="px-4 py-3">PFM</td>
                      <td className="px-4 py-3">Four Holes in the Ground</td>
                      <td className="px-4 py-3 italic">Cook</td>
                    </tr>
                    
                    <tr className="border-b border-green-100 bg-green-50">
                      <td className="px-4 py-3 font-bold text-green-700">4</td>
                      <td className="px-4 py-3">Anekdoten</td>
                      <td className="px-4 py-3">From Within, Kiss of Life, Hole</td>
                      <td className="px-4 py-3 italic">From Within</td>
                    </tr>
                    
                    <tr className="border-b border-green-100">
                      <td className="px-4 py-3 font-bold text-green-700">5</td>
                      <td className="px-4 py-3">Happy the Man</td>
                      <td className="px-4 py-3">Service with a Smile, Steaming Pipes, Open Book</td>
                      <td className="px-4 py-3 italic">Crafty Hands</td>
                    </tr>
                    
                    <tr className="border-b border-green-100 bg-green-50">
                      <td className="px-4 py-3 font-bold text-green-700">6</td>
                      <td className="px-4 py-3">Happy the Man</td>
                      <td className="px-4 py-3">
                        Sumpy Meets the Firecracker in Stencil Forest, 
                        Mr. Mirror's Reflection on Dreams, Carousel, 
                        Knee Bitten Nymphs in Limbo
                      </td>
                      <td className="px-4 py-3 italic">Same title</td>
                    </tr>
                    
                    <tr className="bg-yellow-50 border-b border-green-100">
                      <td className="px-4 py-3 font-bold text-green-700">7</td>
                      <td className="px-4 py-3 font-bold text-red-600">이상은</td>
                      <td className="px-4 py-3">Broken Pearl, Release Your Mind</td>
                      <td className="px-4 py-3 italic">Lee-tzsche</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded border border-green-200">
                <h3 className="font-bold text-green-700 mb-2">🎸 특별 하이라이트</h3>
                <ul className="text-sm space-y-2">
                  <li><strong>• Toy:</strong> "A Night in Seoul" - 한국과 연관된 특별한 곡명</li>
                  <li><strong>• Anekdoten:</strong> 스웨덴 네오 프로그레시브의 대표주자, 3곡 연속 재생</li>
                  <li><strong>• Happy the Man:</strong> 미국 프로그의 걸작, 2개 앨범에서 7곡 선정</li>
                  <li><strong>• 이상은:</strong> 한국 아티스트 "Lee-tzsche" 앨범 소개</li>
                  <li><strong>• 경품:</strong> 발표자 본인의 Anekdoten 신보를 경품으로 제공!</li>
                </ul>
              </div>
            </div>

            {/* Additional Presenters */}
            <div className="mb-12 p-6 bg-orange-100 rounded-lg">
              <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
                🌍 추가 발표자들
              </h2>
              
              <div className="space-y-6">
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h3 className="font-bold text-orange-600 mb-3">🎵 이장원</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>주제:</strong> 아르헨티나 재발매 음반 및 오즈 음악</p>
                    <p><strong>지역:</strong> 뉴질랜드, 호주 등지의 음악</p>
                    <p className="text-xs text-gray-600 italic">
                      남미와 오세아니아 지역의 숨겨진 프로그레시브 록 발굴
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-orange-200">
                  <h3 className="font-bold text-orange-600 mb-3">🎹 안병욱</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>주제:</strong> 마릴리온 최신보 (Marillion.Com) 중</p>
                    <p className="text-xs text-gray-600 italic">
                      네오 프로그레시브의 거장 마릴리온의 최신 활동 소개
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Musical Analysis */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">🎼 Session 22의 음악적 특징</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🌟 국제적 스펙트럼</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• 스웨덴:</strong> Anekdoten (네오 프로그 대표)</li>
                    <li><strong>• 이탈리아:</strong> Banco, PFM (클래식 프로그)</li>
                    <li><strong>• 미국:</strong> Happy the Man (테크니컬 프로그)</li>
                    <li><strong>• 한국:</strong> Toy, 이상은 (로컬 아티스트)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🎵 시대별 분포</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• 70년대 클래식:</strong> Banco, PFM</li>
                    <li><strong>• 80년대 미국:</strong> Happy the Man</li>
                    <li><strong>• 90년대 네오:</strong> Anekdoten, Marillion</li>
                    <li><strong>• 현대 한국:</strong> Toy, 이상은</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🌍 지역별 특화</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• 이동훈:</strong> 유럽-미국 네오 프로그</li>
                    <li><strong>• 이장원:</strong> 남미-오세아니아 탐구</li>
                    <li><strong>• 안병욱:</strong> 영국 네오 프로그 최신</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🎁 특별 요소</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• 경품 이벤트:</strong> Anekdoten 신보</li>
                    <li><strong>• 한국 아티스트:</strong> 로컬 프로그 발굴</li>
                    <li><strong>• 다양한 발표자:</strong> 전문 분야별 큐레이션</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-green-600">15+</div>
                  <div className="text-green-700">곡 (다양한 선곡)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-blue-600">3</div>
                  <div className="text-blue-700">발표자</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🌍</div>
                  <div className="text-purple-700">5개 대륙</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-orange-600">🎁</div>
                  <div className="text-orange-700">경품 이벤트</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제22회 멀티 발표자 특집 완전 복원! 
                전 세계 프로그레시브 록의 다양성과 한국 아티스트 발굴이 되살아났습니다! 🌍🎵🎁
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session20" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (20회)
                </Link>
                
                <Link href="/gathering/session23" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (23회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
