import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제12회 YBD RIO 특집 감상회 - 1996년 12월 14일 | Yebadong',
  description: '예바동 제12회 RIO(Rock In Opposition) 특집 감상회 (1996년 12월 14일, 홍대앞 Freebird)',
};

export default function Session12Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0000aa] mb-4">
            제12회 YEBADONG Special Show of Prog Rock
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-red-100 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0000aa] mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 12월 14일 토요일 늦은 2시</p>
                  <p><strong>장소:</strong> 홍대앞 Freebird</p>
                  <p><strong>주제:</strong> RIO (Rock In Opposition) Special</p>
                </div>
                <div className="space-y-2">
                  <p><strong>참석자:</strong> 김남웅, 장민수, 이강영, 김성우, 전승훈, 이동훈, 이규만, 이윤직, 김영호</p>
                  <p><strong>발표자:</strong> Orkman(장민수)</p>
                </div>
              </div>
            </div>

            {/* RIO Introduction */}
            <div className="mb-12 p-6 bg-gray-100 rounded-lg">
              <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
                🎸 R.I.O. (Rock In Opposition) 란?
              </h2>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-bold text-red-700 mb-4">🎯 RIO의 탄생 (1978)</h3>
                  <div className="space-y-3">
                    <p>
                      <strong>창립자:</strong> Henry Cow의 Chris Cutler와 Nick Hobbs가 주도하여 
                      그간 알고 지내던 유럽의 아방가르드 밴드들과 함께 조직
                    </p>
                    
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-bold text-red-600 mb-2">🌍 창립 멤버 밴드들</h4>
                      <ul className="space-y-1 text-xs">
                        <li>🇸🇪 <strong>스웨덴:</strong> Zamla Mammaz Manna</li>
                        <li>🇮🇹 <strong>이탈리아:</strong> Stormy Six</li>
                        <li>🇫🇷 <strong>프랑스:</strong> Etron Fou Leloublan</li>
                        <li>🇧🇪 <strong>벨기에:</strong> Univers Zero</li>
                        <li>🇬🇧 <strong>영국:</strong> Henry Cow</li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded">
                      <h4 className="font-bold text-yellow-800 mb-2">🎯 RIO의 목적</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• 밴드간 상호 프로모션</li>
                        <li>• 공동 페스티벌 개최</li>
                        <li>• 음악적, 사회적 고민의 공유</li>
                        <li>• <strong>자본주의 음악 산업에 반기!</strong></li>
                        <li>• 더욱 인간적이고 Realistic한 음악 추구</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main RIO Playlist */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                🎵 RIO Special Playlist (25곡)
              </h2>
              
              {/* Core RIO Artists */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-4">🌟 핵심 RIO 아티스트들</h3>
                <div className="space-y-4">
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="text-lg font-bold text-blue-600 mb-2">
                      1. The Border - Skeleton Crew
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">from "The Country of Blinds" (1986)</p>
                    <div className="bg-gray-100 p-3 rounded text-xs italic">
                      <p>"A Step Across the Border<br/>
                      One foot after another<br/>
                      Think! Think!<br/>
                      A Small Step into else where<br/>
                      to Follow the Quick Light<br/>
                      Knowing what I know...."</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-600 text-sm">2. Ceremonie - Art Zoyd</h4>
                      <p className="text-xs text-gray-600">from "Les Espaces Inquiets"</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-600 text-sm">3. Madam Richard Lariko - Etron Fou Leloublan</h4>
                      <p className="text-xs text-gray-600">from "same"</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-600 text-sm">4. Dense - Univers Zero</h4>
                      <p className="text-xs text-gray-600">from "Ceux Du Dehors"</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-600 text-sm">5. The Fate - Zamla Mammaz Manna</h4>
                      <p className="text-xs text-gray-600">from "Schlagerns Mystik"</p>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-600 text-sm">6. Reparto Novita - Stormy Six</h4>
                      <p className="text-xs text-gray-600">from "Recommended Records Sampler"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neo-RIO Generation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-700 mb-4">🆕 신세대 RIO 아티스트들</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 text-sm">7. A Modern Lesson Geistige Nacht - Aksak Maboul</h4>
                    <p className="text-xs text-gray-600">from "Un Peu De L'dme Des Bandits" (1980)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 text-sm">8. Mieux Vaut D'eaker - Debile Menthol</h4>
                    <p className="text-xs text-gray-600">from "Battre Campagne" (1984)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 text-sm">9. Cocn Rolla - Begnagrad</h4>
                    <p className="text-xs text-gray-600">from "Konzert For A Broken Dance" (1982)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 text-sm">10. In Tenda - Nimal</h4>
                    <p className="text-xs text-gray-600">from "Voix De Surface" (1989)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 text-sm">11. En Vacances Contenu D'une Autre Valise - L'ensemble Raye</h4>
                    <p className="text-xs text-gray-600">from "Meme En Hiver"</p>
                  </div>
                </div>
              </div>

              {/* 90s RIO */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🌐 90년대 RIO 진화</h3>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 text-sm">12. roll & rockkragen - Die Knodel</h4>
                    <p className="text-xs text-gray-600">from "Die Noodle" (1995)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 text-sm">13. V^2 Drieslagstelsel - Die Anarchistische Abenduterhaltung!</h4>
                    <p className="text-xs text-gray-600">from Same (1995)</p>
                  </div>
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 text-sm mb-2">14. Louise Avenue 3곡</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Metamorphose 1</li>
                      <li>• Metamorphose 2</li>
                      <li>• La Nuit Des Tritons</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">from "Let's Take One More..." (1993)</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 text-sm">15. Coca Cola - Volapuk</h4>
                    <p className="text-xs text-gray-600">from "Le feu du Tigre" (1995)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIO + Punk Section */}
            <div className="mb-12 p-6 bg-red-100 rounded-lg">
              <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">
                🔥 RIO + Punk 융합
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 text-sm">16. Horizontal Hold - This Heat</h4>
                  <p className="text-xs text-gray-600 mb-1">from "This Heat" (1978)</p>
                  <p className="text-xs italic">RIO와 Post-Punk의 선구적 결합</p>
                </div>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 text-sm">17. Spirit of Dunkirt - Camberwell Now</h4>
                  <p className="text-xs text-gray-600">from "All's Well" (1982)</p>
                </div>
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 text-sm">18. At's jsi Nebo Nejsi Mluvim s Tebou - E</h4>
                  <p className="text-xs text-gray-600">from "E" (1990)</p>
                </div>
              </div>
            </div>

            {/* Henry Cow Family */}
            <div className="mb-12 p-6 bg-yellow-100 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-800 mb-6 text-center">
                🎻 Henry Cow Family Tree
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm">19. Bad Alchemy - Slapp Happy</h4>
                  <p className="text-xs text-gray-600">from "Desperate Straightes" (1975)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm">20. Auschwitz/Babel - News from Babel</h4>
                  <p className="text-xs text-gray-600">from "Sirens and Silences" (1984)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm mb-2">21. Cassiber 2곡</h4>
                  <ul className="text-xs space-y-1 mb-2">
                    <li>• Dust and Ashes</li>
                    <li>• Prometheus</li>
                  </ul>
                  <p className="text-xs text-gray-600">from "Perfect Worlds" (1986)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm mb-2">22. Jean Derome 3곡</h4>
                  <ul className="text-xs space-y-1 mb-2">
                    <li>• Intolerance USA</li>
                    <li>• Resistance Italy</li>
                    <li>• Hope Ghana</li>
                  </ul>
                  <p className="text-xs text-gray-600">from "ReR Quarterly Vol.2 No.4" (1989)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm">23. One Nail Draws Another - U totem</h4>
                  <p className="text-xs text-gray-600">from "U totem" (1990)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm">24. Dos Kelbl - Iva Bittova</h4>
                  <p className="text-xs text-gray-600">from "Ne Nehledej" (1994)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 text-sm">25. Living In the Heart of the Beast - Henry Cow</h4>
                  <p className="text-xs text-gray-600">from "In Praise of Learning" (1995)</p>
                  <p className="text-xs italic text-yellow-600 mt-1">🎊 RIO 창시자의 대표곡으로 마무리!</p>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">RIO 감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-red-600">25</div>
                  <div className="text-red-700">곡 (아방가르드 록의 정수)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-blue-600">🌍</div>
                  <div className="text-blue-700">유럽 전역 (5개국)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">⚡</div>
                  <div className="text-green-700">반자본주의 음악</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🎸</div>
                  <div className="text-purple-700">RIO + Punk 융합</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제12회 RIO 특집 완전 복원! 
                유럽 아방가르드 록의 진수와 반자본주의 음악 정신이 되살아났습니다! 🎸⚡
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session11" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (11회)
                </Link>
                
                <Link href="/gathering/session13" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (13회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
