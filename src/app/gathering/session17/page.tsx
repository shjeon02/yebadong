import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제17회 YBD 캐나다 프로그레시브 록 특집 - 1998년 6월 27일 | Yebadong',
  description: '예바동 제17회 캐나다 프로그레시브 록 특집 (1998년 6월 27일, 홍대앞 프리버드)',
};

export default function Session17Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0000aa] mb-4">
            제17회 YeBaDong 감상회
          </h1>
          <h2 className="text-5xl font-bold text-[#0000aa] mb-6">
            Canadian Progressive Rock
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-red-100 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">감상회 정보</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1998년 6월 27일</p>
                  <p><strong>장소:</strong> 홍대앞 프리버드</p>
                </div>
                <div className="space-y-2">
                  <p><strong>진행:</strong> 쌍방울, 김기태 (GTO330)</p>
                  <p className="text-sm"><a href="mailto:gto330@chollian.net" className="text-blue-600 hover:underline">gto330@chollian.net</a></p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">👥 참석자 (25명)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <span>• 이규희(Damian)</span>
                <span>• 최정욱(Choi.JW)</span>
                <span>• 도태영(Tinman)</span>
                <span>• 박윤철(ycpark)</span>
                <span>• 이윤직(cicco)</span>
                <span>• 박재현(jhpark)</span>
                <span>• 이강영(Lennon)</span>
                <span>• 신인철(Fish)</span>
                <span>• 김중화(jjoong)</span>
                <span>• 정영수(shuai)</span>
                <span>• 김남웅(Neo-Zao)</span>
                <span>• 오은경</span>
                <span>• 박왕근(windmill)</span>
                <span>• 전혜정(angelet)</span>
                <span>• 민지하(jhmin)</span>
                <span>• 지영아(icicle)</span>
                <span>• 전승훈(LongDal)</span>
                <span>• 나용수(triade)</span>
                <span>• 정성용(Elergy)</span>
                <span>• 이석진(stjiny)</span>
                <span>• 김기태(GTO330)</span>
                <span>• 신재훈(rat)</span>
                <span>• 김재열(pastel)</span>
                <span>• 서수민(giganti)</span>
                <span>• 정혜원(hwjeong)</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🍁 캐나다 프로그레시브 록의 특징</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  캐나다는 영국과 프랑스의 영향을 동시에 받으면서도 독특한 음악적 정체성을 발전시켜왔습니다. 
                  특히 퀘벡 지역의 프랑스어 록 밴드들과 영어권 밴드들이 각각 독특한 색채를 보여주고 있습니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 mb-2">🎵 캐나다 록의 이중 언어 문화</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• <strong>프랑스어 록 (Québécois):</strong> Harmonium, Maneige, Octobre 등</li>
                    <li>• <strong>영어 록:</strong> Klaatu, Rush, The Guess Who 등</li>
                    <li>• <strong>혼합형:</strong> 지역적 특색과 국제적 감각의 조화</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Massive Playlist */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                🎵 Canadian Progressive Rock 대형 플레이리스트 (32곡)
              </h2>
              
              {/* Opening Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-700 mb-4">🎼 Opening Music</h3>
                <div className="space-y-3">
                  
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">1-2. MORSE CODE</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Picadilly Circus (4:10)</li>
                      <li>• Le pays d'or (3:16)</li>
                    </ul>
                    <p className="text-xs text-green-600 mt-2 font-bold">몬트리얼 출신의 뛰어난 락그룹!!</p>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">3. SLOCHE - LE COSMOPHILE (5:36)</h4>
                    <p className="text-xs text-green-600 font-bold">수준있는 심포닉 재즈락 그룹</p>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">4. OCTOBRE - L'OISEAU ROUGE (4:45)</h4>
                    <p className="text-xs text-green-600 font-bold">POP SYMPHO-ROCK ?</p>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">5-6. Traditional Folk Bands</h4>
                    <ul className="text-sm space-y-1">
                      <li>• LE TEMPS - LE VIEIL ARBRE (6:24)</li>
                      <li>• LE MATCH - LUCIFER (5:17)</li>
                    </ul>
                    <p className="text-xs text-green-600 font-bold">(TRAD-FOLK BAND)</p>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-600 mb-2">7-8. Progressive Gems</h4>
                    <ul className="text-sm space-y-1">
                      <li>• L'ORIENT D'O - AMOUREUSEMENT VOTRE (8:07)</li>
                      <li>• SYMPHONIC SLAM - UNIVERSE (6:39)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Main Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-orange-700 mb-4">🌟 Main Showcase</h3>
                <div className="space-y-4">
                  
                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-2">9. THE SPIRIT OF X-MAS - BEYOND THE FIELDS WE KNOW (11:26)</h4>
                    <div className="text-xs space-y-1 ml-4">
                      <p>A) PRELUDE (I don't know Where i am)</p>
                      <p>B) THERMOPYLAE</p>
                      <p>C) HEAVEN'S LOST</p>
                      <p>D) IN CLOSING</p>
                    </div>
                    <p className="text-xs text-orange-600 mt-2 italic">11분 대곡의 4부 구성</p>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-2">10-13. 다양한 스타일 쇼케이스</h4>
                    <ul className="text-sm space-y-1">
                      <li>• DIONYSOS - Retour (3:31)</li>
                      <li>• FM - Krakow (4:47)</li>
                      <li>• TRUE MYTH - TIME AND TIME AGAIN (4:45)</li>
                      <li>• ZON - MAN IN THE MIRROR (5:22)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-2">14-15. HARMONIUM - 잊을 수 없는 명그룹!</h4>
                    <ul className="text-sm space-y-1">
                      <li>• VIEILLES COURROIES (5:40)</li>
                      <li>• L'EXIL (11:33) <span className="text-red-600 font-bold">1977년 6월 14일 밴쿠버 라이브!</span></li>
                    </ul>
                    <p className="text-xs text-orange-600 mt-2 font-bold">퀘벡 프로그레시브 록의 전설</p>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-2">16-17. MANEIGE</h4>
                    <ul className="text-sm space-y-1">
                      <li>• JEAN-JACQUES (4:13)</li>
                      <li>• LES PORCHES (6:50) <span className="text-blue-600 text-xs">L'INFONIE의 RAOUL DUGUAY 트럼펫 주자로 참가</span></li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-2">18-19. SEGUIN</h4>
                    <ul className="text-sm space-y-1">
                      <li>• PAR DE LA L'HIVER (2:39)</li>
                      <li>• a) FUGUE EN DO MINEUR b) A LA PLEINE LUNE (6:37)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-bold text-orange-600 mb-2">20-24. 중견 그룹들</h4>
                    <ul className="text-sm space-y-1">
                      <li>• OFFENBACH - EDGAR (5:46)</li>
                      <li>• ETERNITE - IL VENTE LA VIE (6:35)</li>
                      <li>• CLAUDE PELOQUIN - L'ASSIETTE D'OR (3:04)</li>
                      <li>• TERRACED GARDEN - BLACK TIE (3:10)</li>
                      <li>• SERGE LOCAT - CLAIR-OBSCUR (5:00)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Klaatu Highlight */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-purple-700 mb-4">💜 KLAATU - 영원한 팝의 명곡들</h3>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">25-26. KLAATU</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Dear Christine (3:50)</li>
                    <li>• December Dream (4:06) <span className="text-red-600 font-bold">영원한 팝의 명곡!!!</span></li>
                  </ul>
                  <p className="text-xs text-purple-600 mt-2 italic">
                    비틀즈 후속설로 화제가 되었던 캐나다의 신비한 그룹
                  </p>
                </div>
              </div>

              {/* Closing Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-700 mb-4">🎼 Closing Section</h3>
                <div className="space-y-3">
                  
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-blue-600 mb-2">27-30. 마무리 블록</h4>
                    <ul className="text-sm space-y-1">
                      <li>• ECLIPS - PENSEE POUR BARBARA :26, HONEY #36 (6:26)</li>
                      <li>• ECLIPS - WE'RE LOSING OUR LOVE (3:49)</li>
                      <li>• BEAU DOMMAGE - HEUREUSEMENT QU'IL Y A LA NUIT (5:45)</li>
                      <li>• NEIL CHOTEM - VOCALISE (3:37)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-blue-600 mb-2">31-32. Grand Finale</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Et Cetera - 곡 한곡</li>
                      <li>• <strong>EDEN - PAVANE (7:55)</strong> <span className="text-blue-600 font-bold">[CLOSING MUSIC]</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Musical Analysis */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">🎼 캐나다 록의 음악적 특징</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🇫🇷 퀘벡 프랑스어 록</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• Harmonium:</strong> 퀘벡 프로그 전설, 밴쿠버 라이브 1977</li>
                    <li><strong>• Maneige:</strong> L'INFONIE 콜라보레이션</li>
                    <li><strong>• Octobre:</strong> Pop Sympho-Rock 스타일</li>
                    <li><strong>• Sloche:</strong> 심포닉 재즈락의 수준급 연주</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🇬🇧 영어권 캐나다 록</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• Klaatu:</strong> 비틀즈 후속설, 팝 명곡 제조기</li>
                    <li><strong>• FM:</strong> 국제적 어필의 프로그레시브</li>
                    <li><strong>• The Spirit of X-mas:</strong> 11분 대곡의 서사시</li>
                    <li><strong>• Eden:</strong> 클로징을 장식하는 서정미</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">🎵 장르별 다양성</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• Traditional Folk:</strong> Le Temps, Le Match</li>
                    <li><strong>• Symphonic Prog:</strong> Symphonic Slam</li>
                    <li><strong>• Jazz-Rock Fusion:</strong> Sloche</li>
                    <li><strong>• Pop Progressive:</strong> Klaatu, Beau Dommage</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-3">⏰ 시대적 스펙트럼</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>• 70년대 클래식:</strong> Harmonium, Maneige</li>
                    <li><strong>• 80년대 진화:</strong> FM, True Myth</li>
                    <li><strong>• 현대적 재해석:</strong> Morse Code</li>
                    <li><strong>• 라이브 기록:</strong> 1977 밴쿠버 Harmonium</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-blue-600">32</div>
                  <div className="text-blue-700">곡 (역대 최다!)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🍁</div>
                  <div className="text-green-700">캐나다 전용</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🇫🇷</div>
                  <div className="text-purple-700">이중 언어</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-red-600">25</div>
                  <div className="text-red-700">참석자</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제17회 캐나다 프로그레시브 록 특집 완전 복원! 
                32곡의 방대한 스케일로 캐나다 록의 전 영역이 되살아났습니다! 🍁🎵🇨🇦
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session16" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (16회)
                </Link>
                
                <Link href="/gathering/session18" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (18회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
