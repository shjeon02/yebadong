import Link from 'next/link';

export default function CairoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Cairo</h1>
          <p className="text-lg text-blue-600">샌프란시스코 출신의 신세대 프로그레시브 밴드</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-blue-700">출신:</span> 샌프란시스코</p>
              <p><span className="font-semibold text-blue-700">구성:</span> 5인조</p>
              <p><span className="font-semibold text-blue-700">리더:</span> Mark Robertson (키보드)</p>
            </div>
            <div>
              <p><span className="font-semibold text-blue-700">장르:</span> Progressive Metal</p>
              <p><span className="font-semibold text-blue-700">레이블:</span> Magna Carta</p>
              <p><span className="font-semibold text-blue-700">발매:</span> 1994년 (지구레코드)</p>
            </div>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Cairo (1994)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-purple-700">가격:</span> 단돈 6,500원!</p>
              <p><span className="font-semibold text-purple-700">특징:</span> 대곡 중심의 데뷔 앨범</p>
              <p><span className="font-semibold text-purple-700">구성:</span> 10분 내외 곡 4곡 + 22분 35초 대곡</p>
            </div>
            <div>
              <p><span className="font-semibold text-purple-700">하이라이트:</span> "Ruins At Avalon's Gate" (22:35)</p>
              <p><span className="font-semibold text-purple-700">사운드:</span> DT + SoaT + ELP</p>
              <p><span className="font-semibold text-purple-700">키보드:</span> Keith Emerson 스타일</p>
            </div>
          </div>
        </div>

        {/* 리뷰어들 */}
        <div className="space-y-4 mb-8">
          {/* 치코 리뷰 */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">치</span>
              </div>
              <div>
                <p className="font-semibold text-blue-800">치코 (이윤직)</p>
                <p className="text-sm text-blue-600">jiklee@chiak.kaist.ac.kr</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Magna Carta label에서 데뷔앨범을 발표한 샌프란시스코 출신의 5인조 신세대 그룹입니다. 
                키보드 파트를 담당하고 있는 그룹의 리더 Mark Robertson의 영향력이 강하게 드러나 있고, 
                Dream Theater나 Magellan 등의 PM Sound를 추구하는 듯 하지만 제가 듣기에는 
                DT + Strangers on a train + 약간의 ELP 정도의 사운드를 들려줍니다.
              </p>
              
              <div className="bg-blue-100 p-3 rounded border-l-2 border-blue-400">
                <p>
                  신세대 그룹의 데뷔앨범치고는 신기하게도 대곡중심의 앨범이네요. 10분정도의 곡 네곡에다가 
                  마지막 곡은 무려 22분 35초... 그러면서도 그다지 지루하지않게 곡을 이끌어가는 것이 
                  만만치 않은 실력을 갖춘 팀이라는 생각입니다.
                </p>
              </div>
              
              <p>
                특히 마지막을 장식하는 대곡 'Ruins At Avalon's Gate'에 등장하는 Mark Robertson의 키보드는 
                Keith Emerson의 그것과 너무나 닮아있어 이들이 6,70년대 선배그룹들을 꾸준히 연구해왔다는 
                것을 느끼게 해줍니다.
              </p>
            </div>
          </div>

          {/* Fish 리뷰 */}
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <p className="font-semibold text-purple-800">Fish (신인철)</p>
                <p className="text-sm text-purple-600">icshin@chiak.kaist.ac.kr</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                아.. 라이센스가 나왔군요.. Magna Carta label에서 한국에 LP가 나오게 되면 
                꼭 보내달라면서 CD를 얼마전에 보내왔었는데.. (promo CD라 CD booklet과 
                jewel case에까지.. 구멍이 뻥 나있어요...)
              </p>
              
              <div className="bg-purple-100 p-3 rounded border-l-2 border-purple-400">
                <p>
                  Cairo.. 괜찮아요.. vocal part가 제 생각에 조금 취약한것 같고.. 혹자는 
                  5분짜리 idea를 가지고 10분짜리로.. 10분짜리 곡을 20분으로 늘려 만들었다고 
                  비판을 하는데.. 뭐 신세대 sound가 이정도 해주는게 어딘가요.. :)
                </p>
              </div>
              
              <p>
                공짜로 얻은 CD라 그런지.. 예전의 Prog Fest '94 Magna Carta sampler tape에선 
                조금 지루하게 들었는데.. 앨범 전체를 들어보니 나름대로 참신하더군요.. 
                Just my humble opinion! :)
              </p>
            </div>
          </div>
        </div>

        {/* 음악적 특징 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-400">
          <h3 className="text-xl font-bold text-blue-800 mb-4">🎵 음악적 특징</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">사운드 스타일:</h4>
              <ul className="space-y-1 text-sm text-blue-600">
                <li>• Dream Theater의 Progressive Metal</li>
                <li>• Strangers on a Train의 멜로디</li>
                <li>• ELP의 키보드 사운드</li>
                <li>• Keith Emerson 스타일의 키보드</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">앨범 구성:</h4>
              <ul className="space-y-1 text-sm text-blue-600">
                <li>• 대곡 중심의 구성 (신세대 그룹 치고는 특이)</li>
                <li>• 10분 내외의 곡 4곡</li>
                <li>• 22분 35초의 대곡 "Ruins At Avalon's Gate"</li>
                <li>• 지루하지 않은 곡 전개</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 평가 요약 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">📊 종합 평가</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-blue-700">PM Sound 애호가들에게</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">추천</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">SoaT 팬들에게</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">추천</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">신세대 사운드 거부자들에게</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">비추천</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-700">가격 대비 만족도</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">매우 높음 (6,500원!)</span>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-blue-600 text-sm">
            3/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 