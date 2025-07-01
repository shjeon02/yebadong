import Link from 'next/link';

export default function CathedralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Cathedral</h1>
          <p className="text-lg text-purple-600">Anglagard "Hybris"의 모체격 앨범을 남긴 미국 밴드</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-purple-700">국가:</span> 미국</p>
              <p><span className="font-semibold text-purple-700">앨범:</span> "Stained Glass Stories"</p>
              <p><span className="font-semibold text-purple-700">장르:</span> Progressive Rock</p>
              <p><span className="font-semibold text-purple-700">특징:</span> 치밀한 구성과 연주</p>
            </div>
            <div>
              <p><span className="font-semibold text-purple-700">영향:</span> Anglagard "Hybris"의 모체</p>
              <p><span className="font-semibold text-purple-700">평가:</span> 숨겨진 프로그레시브 보석</p>
              <p><span className="font-semibold text-purple-700">총 러닝타임:</span> 45분 25초</p>
              <p><span className="font-semibold text-purple-700">곡 수:</span> 5곡</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 mb-6 border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div>
              <p className="font-semibold text-purple-800">Windmill (박왕근)</p>
              <p className="text-sm text-purple-600">windmill@mathx.kaist.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">🏰 숨겨진 프로그레시브 보석</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Anglagard와의 연관성</h3>
              <p className="text-purple-700 mb-3">
                이미 국내 아트록 팬들의 절대적인 지지를 얻고 있는 Anglagard의 데뷔 앨범이 
                여러 딜러들에게서 Sold-out된 이후에도 이들의 앨범을 구하고자 하는 
                문의가 여기저기서 쇄도하는 걸 보면 이들의 인기를 실감케하는데 말이죠
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                <p className="text-purple-800 font-medium">
                  근데 이 <strong>Hybris앨범의 모체격인 앨범이 뜻밖에도 미국 밴드인 
                  Cathedral의 "Stained Glass Stories"</strong>라는 것은 그다지 알려지지 않은 사실인거 같네요..
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">발견의 의미</h3>
              <p className="text-indigo-700">
                이는 프로그레시브 록 역사에서 흥미로운 발견 중 하나로, 
                스웨덴의 Anglagard가 미국의 Cathedral로부터 영감을 받았다는 사실은 
                음악의 국경을 초월한 영향력을 보여주는 좋은 사례입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">💿 "Stained Glass Stories" Track Listing</h2>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
            <h3 className="font-semibold text-purple-800 mb-3">Cathedral - Stained Glass Stories</h3>
            <div className="space-y-2 text-purple-700">
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <p><strong>1. Introspect</strong> - 12:35</p>
                  <p className="text-sm text-purple-600 ml-4">앨범의 대표곡이자 최장 트랙</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <p><strong>2. Gong</strong> - 7:00</p>
                  <p className="text-sm text-purple-600 ml-4">동양적 색채의 중편곡</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <p><strong>3. The Crossing</strong> - 5:55</p>
                  <p className="text-sm text-purple-600 ml-4">앨범의 중간 연결곡</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <p><strong>4. Days & Changes</strong> - 8:35</p>
                  <p className="text-sm text-purple-600 ml-4">서정적이면서도 역동적인 곡</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <p><strong>5. The Search</strong> - 11:20</p>
                  <p className="text-sm text-purple-600 ml-4">대미를 장식하는 11분 대곡</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="text-purple-800 font-medium">
              <strong>총 러닝타임:</strong> 45분 25초 - 5곡의 치밀한 구성으로 완성된 프로그레시브 록의 숨은 명작
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">🎵 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Anglagard에 미친 영향</h3>
              <p className="text-purple-700">
                Cathedral의 "Stained Glass Stories"는 스웨덴의 Anglagard가 "Hybris" 앨범을 
                제작할 때 중요한 영감의 원천이 되었습니다. 특히 복잡한 구성과 
                다이나믹한 전개 방식에서 그 영향을 찾아볼 수 있습니다.
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">프로그레시브 록의 정수</h3>
              <p className="text-indigo-700">
                대곡 중심의 구성과 복잡한 리듬 구조, 그리고 서정적인 멜로디와 
                강렬한 연주의 조화는 70년대 프로그레시브 록의 전통을 
                현대적으로 계승한 작품으로 평가됩니다.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">스테인드 글라스 모티프</h3>
              <p className="text-purple-700">
                앨범명 "Stained Glass Stories"는 성당의 스테인드 글라스처럼 
                다채로운 색채와 복잡한 패턴을 음악으로 표현한다는 의미로 해석됩니다. 
                각 곡이 하나의 스테인드 글라스 패널처럼 독립적이면서도 
                전체적으로 조화를 이루는 구조입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">🌟 역사적 의의</h2>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold text-purple-800 mb-3">숨겨진 영향력</h3>
            <p className="text-purple-700 mb-4">
              Cathedral의 "Stained Glass Stories"는 직접적인 상업적 성공보다는 
              후배 뮤지션들에게 미친 영향력으로 그 가치를 인정받는 앨범입니다.
            </p>
            <div className="bg-white p-4 rounded border-l-2 border-purple-300">
              <p className="text-purple-800 font-medium">
                특히 Anglagard의 "Hybris"라는 걸작의 모체가 되었다는 사실은 
                이 앨범의 음악적 가치를 증명하는 중요한 증거입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">🏰 Cathedral의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-purple-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 대곡 중심의 치밀한 구성</li>
                <li>• 복잡한 리듬과 하모니</li>
                <li>• 서정성과 역동성의 조화</li>
                <li>• 스테인드 글라스적 다채로움</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">역사적 의의:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Anglagard "Hybris"의 모체</li>
                <li>• 미국 프로그레시브 록의 숨은 보석</li>
                <li>• 국경을 초월한 음악적 영향력</li>
                <li>• 후배 뮤지션들의 영감의 원천</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">🔍 발견의 가치</h3>
          <p className="text-yellow-700">
            Cathedral의 "Stained Glass Stories"는 Anglagard 팬들에게는 특별한 의미를 가지는 앨범입니다. 
            좋아하는 앨범의 뿌리를 찾아가는 즐거움과 함께, 
            <strong>숨겨진 프로그레시브 록의 보석을 발견하는 기쁨</strong>을 동시에 제공합니다.
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-purple-600 text-sm">
            13/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 