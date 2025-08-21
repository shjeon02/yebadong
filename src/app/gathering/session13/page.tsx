import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제13회 YBD 영상감상회 & Porcupine Tree 특집 - 1997년 3월 22일 | Yebadong',
  description: '예바동 제13회 영상 감상회 & Porcupine Tree 특집 (1997년 3월 22일, 홍대앞 Freebird)',
};

export default function Session13Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">
            제13회 YEBADONG Special Show of Prog Rock
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 bg-opacity-80 border border-cyan-400 rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-gray-800 rounded-lg border border-cyan-300">
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1997년 3월 22일 토요일 늦은 2시 30분</p>
                  <p><strong>장소:</strong> 홍대앞 Freebird</p>
                  <p><strong>주제:</strong> 영상 감상회 + Porcupine Tree Special</p>
                </div>
                <div className="space-y-2">
                  <p><strong>참석자 22명:</strong></p>
                  <div className="text-xs grid grid-cols-2 gap-1">
                    <span>• 이강영(Lennon)</span>
                    <span>• 김성우(libero)</span>
                    <span>• 강창우(Rubisef)</span>
                    <span>• 박왕근(windmill)</span>
                    <span>• 주현주(Iris920)</span>
                    <span>• 조원근(Unbound)</span>
                    <span>• 박춘성(jonathan)</span>
                    <span>• 윤성욱(GNR)</span>
                    <span>• 최정아(Puyo)</span>
                    <span>• 김이영(ardor)</span>
                    <span>• 전승훈(LongDal)</span>
                    <span>• 김영호(vertigo)</span>
                    <span>• 김남웅(Neo-Zao)</span>
                    <span>• 신인철(Fish)</span>
                    <span>• 이동훈(meddle)</span>
                    <span>• 권재륜(Jazz9)</span>
                    <span>• 이훈구(budgie)</span>
                    <span>• 최창규(flyers)</span>
                    <span>• 조연경(mariah)</span>
                    <span>• 김소언(Adagio)</span>
                    <span>• 노봉균</span>
                    <span>• 정성용</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Music Video Special Section */}
            <div className="mb-12 p-6 bg-purple-900 rounded-lg">
              <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">
                🎬 Music Video Special - 이동훈(meddle) 발표
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded border border-purple-300">
                  <h4 className="text-lg font-bold text-purple-200 mb-2">희귀 영상 컬렉션 (10편)</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="space-y-2">
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">1. Beggar's Opera</h5>
                        <p className="text-xs text-purple-200">German Beat Club 출연 영상</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">2. Pink Floyd</h5>
                        <p className="text-xs text-purple-200">Eugene Arnold Layne, Astronomy Domine</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">3. Osanna</h5>
                        <p className="text-xs text-purple-200">Amico Flauto (RAI TV '72)</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">4. Van der Graaf Generator</h5>
                        <p className="text-xs text-purple-200">A Plague of Lighthouse Keepers</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">5. Roger Waters</h5>
                        <p className="text-xs text-purple-200">The Final Cut Promo, Expo Live</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">6. ELP</h5>
                        <p className="text-xs text-purple-200">Knife Edge</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">7. King Crimson</h5>
                        <p className="text-xs text-purple-200">Larks' Tongues in Aspic</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">8. New Trolls</h5>
                        <p className="text-xs text-purple-200">이탈리안 프로그레시브</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">9. Anglagard</h5>
                        <p className="text-xs text-purple-200">Hybris Live (UCLA '93)</p>
                      </div>
                      
                      <div className="bg-purple-800 p-3 rounded">
                        <h5 className="font-bold text-purple-100">10. Pink Floyd</h5>
                        <p className="text-xs text-purple-200">A Saucerful of Secrets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Porcupine Tree Special Section */}
            <div className="mb-12 p-6 bg-green-900 rounded-lg">
              <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">
                🌲 Porcupine Tree Special - 신인철(Fish) 발표
              </h2>
              
              {/* Porcupine Tree History */}
              <div className="mb-8 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-4">🎸 Porcupine Tree 역사</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  
                  <div className="bg-green-800 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-2">🎯 초기 (1985-1992)</h4>
                    <p>
                      Steve Wilson이라는 다중악기주자가 1985년에 이미 시작한 one man project Porcupine Tree는 
                      몇장의 cassette-only release를 바탕으로 팬들을 확보하기 시작하였다. 
                      1992년, Delerium record사는 이들의 가능성을 파악하여 밴드와 계약하고 
                      공식적인 더블 데뷔 앨범 'On the Sunday of Life'를 발매하였다.
                    </p>
                  </div>
                  
                  <div className="bg-green-800 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-2">🎨 음악적 특징</h4>
                    <p>
                      이 앨범은 카셋트 앨범 시절의 곡들을 재녹음한 것으로 60년대 후반의 Pink Floyd의 사운드를 
                      '90년대의 테크놀로지로 재해석한 수준작이라는 평가를 받고 있다. 
                      수록곡중 악명높은 'Voyage 34'라는 트랙은 LSD의 환각을 노골적으로 묘사한 스페이스락의 문제작이다.
                    </p>
                  </div>
                  
                  <div className="bg-green-800 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-2">🚀 도약 (1993-1995)</h4>
                    <p>
                      1993년 가을, 왕성한 창작의욕을 보이는 이 신진 Neo-Psychedelic Band는 
                      'Up the Downstair'라는 두 번째 앨범으로 멜로디메이커지로부터 '사이키델릭의 걸작'이라는 칭송을 얻어냈다. 
                      밴드리더인 Steve Wilson외에, 베이스주자 Colin Edwin, 타악기를 맡은 Chris Maitland, 
                      건반주자 Richard Barbieri를 보강한 Porcupine Tree는 영국과 홀랜드등지에서 왕성한 라이브 공연으로 
                      신진 사이키델릭 밴드로서의 입지를 탄탄히 다져가게 된다.
                    </p>
                  </div>
                  
                  <div className="bg-green-800 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-2">⭐ 최고작 (1995)</h4>
                    <p>
                      1995년 드디어 그들의 최고걸작으로 칭송받는 'The Sky Moves Sideways'가 발매되고 
                      이들은 C&S 레이블을 통해서 미국상륙에도 성공한다. 
                      Ozric Tentacles의 오프닝으로 성공적인 영국순회공연을 마친 Steve Wilson과 그 일당들은 
                      홀랜드, 이탤리, 그리스등을 도는 공연으로 1995년을 마감한다.
                    </p>
                  </div>
                  
                  <div className="bg-green-800 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-2">🎵 현재 (1996-1997)</h4>
                    <p>
                      Gong과 Marillion의 오프닝밴드로 1996년을 시작한 Porcupine Tree는 
                      새앨범 'Signify'의 맛보기 싱글인 'Waiting'을 1996년 4월에 발매하고 
                      뒤이어 연말에는 좀더 스트레이트한 락음악이 보강된 최신앨범 'Signify'로서 
                      슬슬 맛이가는 기미를 보이는 Ozric Tentacles의 대를 이을 최강의 Neo-Psychedelic 밴드로서 지목받고 있다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Set List */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🎵 Porcupine Tree Set List</h3>
                <div className="space-y-4">
                  
                  {/* Up the Downstair */}
                  <div className="bg-blue-800 p-4 rounded border border-blue-300">
                    <h4 className="font-bold text-blue-200 mb-3">
                      📀 From "Up the Downstair" (1993)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-blue-700 p-3 rounded">
                        <h5 className="font-bold text-blue-100">1. What You Are Listening To.../Synesthesia</h5>
                        <p className="text-xs text-blue-200">0:57 / 5:11</p>
                      </div>
                      <div className="bg-blue-700 p-3 rounded">
                        <h5 className="font-bold text-blue-100">2. Burning Sky</h5>
                        <p className="text-xs text-blue-200">11:07</p>
                      </div>
                    </div>
                  </div>

                  {/* The Sky Moves Sideways */}
                  <div className="bg-orange-800 p-4 rounded border border-orange-300">
                    <h4 className="font-bold text-orange-200 mb-3">
                      📀 From "The Sky Moves Sideways" (1995) - 최고걸작
                    </h4>
                    <div className="bg-orange-700 p-3 rounded">
                      <h5 className="font-bold text-orange-100">3. The Sky Moves Sideways (Phase Two)</h5>
                      <p className="text-xs text-orange-200 mb-2">16:46</p>
                      <div className="ml-4 space-y-1 text-xs">
                        <p>• a. Is... Not</p>
                        <p>• b. Off the Map</p>
                      </div>
                    </div>
                  </div>

                  {/* Signify */}
                  <div className="bg-red-800 p-4 rounded border border-red-300">
                    <h4 className="font-bold text-red-200 mb-3">
                      📀 From "Signify" (1996) - 최신작
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-red-700 p-3 rounded">
                        <h5 className="font-bold text-red-100">4. Sleep or No Dreaming</h5>
                        <p className="text-xs text-red-200">5:25</p>
                      </div>
                      <div className="bg-red-700 p-3 rounded">
                        <h5 className="font-bold text-red-100">5. Dark Matter</h5>
                        <p className="text-xs text-red-200">8:59</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steve Wilson Profile */}
              <div className="mb-8 p-4 bg-yellow-900 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">👨‍🎤 Steve Wilson 프로필</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p><strong>포지션:</strong> 리더, 다중악기주자</p>
                    <p><strong>특징:</strong> One man project에서 시작</p>
                    <p><strong>비전:</strong> 60년대 Pink Floyd + 90년대 기술</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>현재 멤버:</strong></p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Colin Edwin (베이스)</li>
                      <li>• Chris Maitland (드럼)</li>
                      <li>• Richard Barbieri (키보드)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-xs italic">
                  <p>"거울에 비친 스티브 윌슨", "이상한걸 안고있는 윌슨", "더 이상한 것을 안고있는 윌슨", "조금은 정상으로 보이는 윌슨" 등의 
                  독특한 사진들이 원본에 포함되어 있어 그의 아티스트적 개성을 보여줍니다.</p>
                </div>
              </div>

              {/* Reference */}
              <div className="p-4 bg-gray-800 rounded-lg text-center">
                <h4 className="font-bold text-cyan-300 mb-2">📚 참고자료</h4>
                <p className="text-sm text-cyan-200">The Porcupine Tree Official Homepage</p>
                <p className="text-xs text-gray-400">http://www.delerium.co.uk/delerium/bandsite/porc_top.html</p>
                <p className="text-xs text-gray-500 italic">(Where I stole most of these images :-)</p>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-purple-400">10</div>
                  <div className="text-purple-300">영상 (희귀 컬렉션)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-400">5</div>
                  <div className="text-green-300">Porcupine Tree 곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-yellow-400">22</div>
                  <div className="text-yellow-300">참석자 (역대 최다!)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-cyan-400">🌲</div>
                  <div className="text-cyan-300">Neo-Psychedelic</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ 제13회 영상감상회 & Porcupine Tree 특집 완전 복원! 
                희귀 영상과 90년대 Neo-Psychedelic의 진수가 되살아났습니다! 🎬🌲
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-700 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session12" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (12회)
                </Link>
                
                <Link href="/gathering/session14" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (14회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
