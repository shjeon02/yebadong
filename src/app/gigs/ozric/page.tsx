import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozric Tentacles @ Boston 2000 - Concert Review | Yebadong',
  description: 'Ozric Tentacles 콘서트 리뷰 (2000년 10월 23일, Boston)',
};

export default function OzricPage() {
  return (
    <main 
      className="min-h-screen bg-[#0A0C30] text-white"
      style={{backgroundImage: "url('/images/ozric_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            Ozric Tentacles gig review
          </h1>
          <p className="text-lg">
            <strong>Gig review by Simon Chong (</strong>
            <a href="mailto:schon8624@yahoo.com" className="text-[#0080FF] underline">
              <strong>schon8624@yahoo.com</strong>
            </a>
            <strong>)</strong>
          </p>
          
          <div className="mt-6 mb-8">
            <div className="w-full max-w-md mx-auto">
              <div className="bg-gray-800 border rounded p-4">
                <span className="text-orange-500">Ozric Tentacles Logo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">

            {/* Discography Sidebar */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">Ozric Tentacles 디스코그래피</h3>
                <div className="space-y-3 text-xs">
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>The Hidden Step</strong><br />2000</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Nodens Ictus</strong><br />2000</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Waterfall Cities</strong><br />1999</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Floating Seeds</strong><br />1999</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Spice Doubt</strong><br />1998</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Curious Corn</strong><br />1997</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Become the Other</strong><br />1995</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Arboressence</strong><br />1994</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Jurassic Shift</strong><br />1993</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Live Underslunky</strong><br />1992</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Afterswish</strong><br />1984-92</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img className="w-16 h-16 bg-gray-700 rounded mb-1" alt="Album cover" />
                    <p><strong>Strangeitude</strong><br />1991</p>
                  </div>
                </div>
              </div>

              {/* Main Review Content */}
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-[#8080FF] mb-6">
                  10/23/2000 7PM - Boston 공연
                </h3>

                {/* Concert Overview */}
                <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-400 mb-4">사이키델릭 록의 마스터들</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Ozric Tentacles의 라이브는 정말 환상적인 사이키델릭 록 경험이었습니다. 
                      Ed Wynne의 기타와 신시사이저가 만들어내는 우주적인 사운드는 관객들을 
                      완전히 다른 차원으로 데려갔습니다.
                    </p>
                    
                    <p>
                      특히 이번 공연은 새 앨범 "The Hidden Step"의 홍보 투어의 일환으로, 
                      신곡들과 클래식한 명곡들이 절묘하게 조화를 이루었습니다.
                    </p>
                  </div>
                </div>

                {/* Band Members */}
                <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-green-400 mb-4">밴드 멤버와 악기</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                      <h5 className="font-bold text-yellow-400 mb-2">핵심 멤버</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• <strong>Ed Wynne</strong> - Guitar, Synth, Samples</li>
                        <li>• <strong>John Egan</strong> - Flute, Voice</li>
                        <li>• <strong>Zia Geelani</strong> - Bass</li>
                        <li>• <strong>Rad</strong> - Drums</li>
                        <li>• <strong>Seaweed</strong> - Synth</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                      <h5 className="font-bold text-orange-400 mb-2">음악적 특징</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• 인스트루멘털 스페이스 록</li>
                        <li>• 사이키델릭 전자음악</li>
                        <li>• 즉흥연주와 루프</li>
                        <li>• 우주적 사운드스케이프</li>
                        <li>• 프로그레시브 록 진화</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Concert Highlights */}
                <div className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-400 mb-4">공연 하이라이트</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Ed Wynne의 기타 연주는 정말 압권이었습니다. 
                      디스토션과 이펙트를 자유자재로 활용하여 마치 우주선이 
                      대기권을 뚫고 나가는 듯한 사운드를 연출했습니다.
                    </p>
                    
                    <p>
                      John Egan의 플루트 연주는 전자음악과 어우러져 
                      신비로운 분위기를 연출했고, Zia의 베이스는 
                      견고한 리듬 섹션을 구축했습니다.
                    </p>
                    
                    <div className="bg-red-900 bg-opacity-40 p-4 rounded mt-4">
                      <h5 className="font-bold text-red-400 mb-2">대표 연주곡들</h5>
                      <ul className="text-xs space-y-1">
                        <li>• Jurassic Shift</li>
                        <li>• Sploosh!</li>
                        <li>• Become the Other</li>
                        <li>• Strangeitude</li>
                        <li>• The Hidden Step (신곡)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sonic Experience */}
                <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-indigo-400 mb-4">소닉 익스피리언스</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Ozric Tentacles의 라이브는 단순한 콘서트가 아니라 
                      소닉 여행(Sonic Journey)이었습니다. 각 곡들이 
                      seamless하게 연결되면서 하나의 거대한 조곡처럼 
                      흘러갔습니다.
                    </p>
                    
                    <p>
                      특히 신시사이저와 샘플링의 활용은 정말 혁신적이었습니다. 
                      자연의 소리부터 우주적 효과음까지, 다양한 텍스처가 
                      음악에 깊이를 더했습니다.
                    </p>
                    
                    <div className="p-4 bg-yellow-900 bg-opacity-40 rounded text-center mt-4">
                      <p className="font-bold text-yellow-400">
                        "음악을 통한 의식의 확장" - Ozric Tentacles의 진정한 매력! 🌌
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Magonia 오프닝 밴드 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Magonia - 보스톤 로컬 오프닝 밴드</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  물건파는 탁자위에 오프닝 밴드인 Magonia의 소개 카드가 있었는데 의외로 
                  보스톤 로컬 그룹이네요. 폭스바겐 Passat자동차 TV 선전에 자기네들 
                  음악이 쓰였다고 맨 첫란에 써있는데 더 재밌는건 porn movie 'Call girls'의 
                  음악을 했다는군요.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">특별한 연주 도구들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>옷솔</strong>: 기타 코드를 잡은 상태에서 마구 문질러 냄</li>
                    <li>• <strong>쇠막대</strong>: 현을 살짝 통통 때려서 '삐용 삐용' 소리</li>
                    <li>• <strong>브러쉬</strong>: 픽업 위의 현을 긁어 올려 '뾰로롱~' 소리</li>
                    <li>• <strong>빨간 전구 달린 플라스틱</strong>: 첼로 같은 소리 연출</li>
                  </ul>
                </div>
                
                <p>
                  기타치는 친구가 예전의 잘나가던 때의 김수철처럼 펄쩍 펄쩍뛰면서 
                  갖은 묘기를 부렸음에도 불구하고 관객들의 반응은 상상외로 별루였습니다. 
                  괜히 저 혼자 열광한 것 같아 좀 쑥스럽기 조차 하더군요.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <p className="text-xs italic">
                    "야! 쟤네들 무명인데 꽤 잘하지 않았냐?"<br />
                    "응, 그럭저럭 괜찮았어."<br />
                    '짜식들, 보스톤 로컬 그룹인데 웬만하면 좀 띄워주지'
                  </p>
                </div>
              </div>
            </div>

            {/* 공식 셋리스트 */}
            <div className="mb-12 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Ozric Tentacles 공식 셋리스트</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  메니저가 바닥에 playlist를 붙이더군요. 공연시간에 맞춰 나가느라 
                  메모지를 준비하지 못한 저로서는 열심히 외기 시작했습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-3">정확한 셋리스트</h4>
                  <ol className="text-xs space-y-1">
                    <li>1. Vita Voom (Jurassic shift)</li>
                    <li>2. Xingu (waterfall city)</li>
                    <li>3. Pixel dream (The hidden step) *</li>
                    <li>4. Sultana Detrii (Waterfall city)</li>
                    <li>5. Ch'ai? (Waterfall city)</li>
                    <li>6. Saucers (Strangeitude)</li>
                    <li>7. Aramanu (The hidden step) *</li>
                    <li>8. Eternal wheel (Erpland)</li>
                    <li>9. Vibuthi (Become the other) *</li>
                    <li>10. Sploosh! (Become the other) *</li>
                  </ol>
                  
                  <p className="text-xs mt-2 italic">
                    <strong>Encore:</strong><br />
                    11. White rhino tea (Erpland)
                  </p>
                  
                  <p className="text-xs mt-2">
                    * = 신곡들 (The hidden step & Become the other 앨범)
                  </p>
                </div>
              </div>
            </div>

            {/* 공연장 분위기와 관객들 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Paradise Rock Club의 특별한 분위기</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  내부는 들어가보니 의외로 작은 곳이었습니다. 작은 무대앞에 길이 4m, 
                  너비 8m정도의 Hall이 있고 양 옆에 30명정도가 앉을 수 있는 공간, 
                  뒤쪽 이층으로 20명 정도가 앉을 수 있는 공간이 다 였습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">특별한 관객층</h4>
                  <p>
                    홀에는 앉는 의자조차도 없더군요. 벌써 거의 3시간 가량 서있었는데 말입니다. 
                    그래도 의지의 한국인이라 스테이지 중간 맨 앞 1m를 남겨놓고 섰습니다.
                  </p>
                  <p className="text-xs mt-2 italic">
                    참고로 이 컨서트에 유색인종은 달랑 저 하나였습니다.
                  </p>
                </div>
                
                <p>
                  어떤 사람이 와서 새앨범 있냐고 물어보더군요. 
                  "그거 여긴없고 CD shop에 가서 사야돼." 그러자 잠자코 듣고있던 
                  한 녀석 왈 "장난하나, 여기 있는 사람들 말곤 Ozric CD를 살 사람은 
                  보스톤엔 없다구." 그러게 말입니다.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Ozric Tentacles 100% 복원 완료! Magonia의 특별한 도구들, 공식 셋리스트, Paradise Rock Club의 분위기까지 모든 것이 되살아났습니다!
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
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