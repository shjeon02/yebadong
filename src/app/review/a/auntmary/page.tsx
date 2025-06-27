import Link from "next/link";

export default function AuntMaryPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Aunt Mary</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Longdal</span>
              <span className="ml-2 text-sm text-gray-600">shjeon@yebadong.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Aunt Mary - Janus ★★★★</h3>
                <p className="text-sm leading-relaxed">
                  저도 3M님의 극찬에 Aunt Mary의 <em>Janus</em> 앨범을 구해서 들어봤는데요. 저는 별 네개를 줬습니다. 
                  Aunt Mary를 Art rock지 8,9,10호 근처에서 소개된 걸 본것 같기도 하구요. 진석님의 유러피안 Marquee 번역본에서 본것 같기도 합니다만. 
                  밴드에 대해 아는 것은 별로 없습니다.
                </p>
                
                <div className="mt-3 space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">음악적 특징</h4>
                    <p className="text-sm">
                      Beatles, Klaatu에 hammond organ을 더한 색깔입니다. "매리고모"라는 밴드이름에 걸맞게 어코스틱 기타반주가 앨범전체에 골고루 퍼져있습니다. 
                      Grand Funk Railroad를 연상하게 하는 아름다운 전기기타 리프와 중간 중간 hard rock적인 요소도 갖고 있습니다.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-blue-800">주요 곡들</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <strong>Nocturnal Voice (3번째 곡):</strong> 두 옥타브는 더 높게 부르는 가성 보컬이 몸의 구석구석을 찌름
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <strong>Candles of Heaven:</strong> 어코스틱 기타반주로만의 아름다운 보컬 하모니. Eagles나 Kerrs Pink의 발라드곡을 듣는 듯함
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm mt-3 text-gray-600">
                  저는 그들의 3집 <em>Janus</em>밖에 없어서 다른 1/2집 앨범도 들어보고 싶네요. Norway 밴드이지만 영어 보컬이라서인지 England와 비슷한 곳도 있는 것 같구요.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">3M</span>
              <span className="ml-2 text-sm text-gray-600">freev@hanmail.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">개인적 경험담</h3>
                <p className="text-sm leading-relaxed">
                  동장님의 메리 아줌마 얘기로 돌아가서... 전 CD로 재발매된 Janus, Loaded 2장을 한꺼번에 구입했었는데.. 처음엔 큰 충격을 받았습니다.
                </p>
                <blockquote className="border-l-2 border-green-300 pl-3 mt-2 text-sm italic text-gray-600">
                  "억.. 1장만 우선 맛보기로 먼저 사는 건데..." 뭐 이런 야리한 심정이 복바쳐 오르고.. 2장의 앨범을 어떻게 처분할 것인가 궁리를 시작했더랬습니다. ^ ^
                </blockquote>
                <p className="text-sm mt-3 leading-relaxed">
                  하지만 아직도 살아남아 있네요... 앨범 전체적으로 따뜻하게 감상하기 좋은 락앨범들인 것 같네요. 즐겨 듣게 됩니다!!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">밴드 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 노르웨이</li>
                  <li><strong>장르:</strong> 프로그레시브 록</li>
                  <li><strong>활동 시기:</strong> 1970년대 초</li>
                  <li><strong>보컬 언어:</strong> 영어</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>Beatles, Klaatu 영향</li>
                  <li>Hammond organ 사용</li>
                  <li>어코스틱 기타 중심</li>
                  <li>하드록적 요소 포함</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded flex justify-between">
                  <span><strong>Janus</strong> (3집)</span>
                  <span className="text-yellow-600">★★★★</span>
                </div>
                <div className="bg-white p-2 rounded">
                  <span><strong>Loaded</strong> (CD 재발매)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 