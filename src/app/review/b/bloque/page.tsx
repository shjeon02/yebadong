"use client";
import Link from "next/link";

export default function BloqueReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Bloque</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Spain</p>
              <p><strong>장르:</strong> Progressive Rock, Symphonic Rock</p>
              <p><strong>특징:</strong> 하드 심포닉, 따스한 인간미</p>
            </div>
            <div>
              <p><strong>레이블:</strong> Si-Wan Records</p>
              <p><strong>음악적 성격:</strong> 총체적 악기군 조화</p>
              <p><strong>비교 밴드:</strong> Camel, Anyone's Daughter</p>
            </div>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">앨범: El Hijo Del Alba</h2>
          <div className="bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>재발매:</strong> 1995</p>
                <p><strong>레이블:</strong> Si-Wan SRMC-3021</p>
                <p><strong>포맷:</strong> CD</p>
              </div>
              <div>
                <p><strong>순서:</strong> Bloque의 세 번째 앨범</p>
                <p><strong>특징:</strong> 하드 심포닉 사운드</p>
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">o r k m a n (장민수)</h3>
            <p className="text-sm text-gray-600 mb-4">cats@gw2.hyundai.co.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 스페인 록 재발매 현황 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">스페인 프로그레시브 록 재발매 현황</h4>
                <div className="space-y-3">
                  <p>
                    널리 알려지지 못한 까닭에 <strong>전설적인 소문들만 무성했던</strong> 스페인의 수많은 프로록 앨범들이 
                    요즘은 우루루 재발매되면서 그 생김생김이 하나하나 드러나고 있습니다.
                  </p>

                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold mb-2">주요 재발매 레이블</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>Fonomusic:</strong> 초기 스페인 록 발굴</li>
                      <li><strong>Lost Vinyl:</strong> 최근 활발한 재발매</li>
                      <li><strong>Si-Wan Records:</strong> 한국에서의 재발매</li>
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">시완 레코드 스페인 앨범 재발매 목록</h5>
                    <p className="text-sm">
                      <strong>Crack, Bloque, Nu, Los Canarios, Mezquita, Tarantula, Iceberg</strong>로 
                      계속 이어지고 있는 그럴싸한 스페인 앨범 재발매 목록... 
                      여기에 가장 최근 추가된 항목이 바로 본작, Bloque의 세 번째 앨범 'El Hijo Del Alba'입니다. :-)
                    </p>
                  </div>
                </div>
              </div>

              {/* 음악적 특징 분석 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">음악적 특징</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-l-4 border-purple-400">
                    <h5 className="font-bold text-purple-700 mb-2">전체적인 음색</h5>
                    <p className="text-sm">
                      본 앨범의 전체적인 음색은 'Hombre Tierra y Alma'에서도 들을 수 있었던 
                      <strong>따스한 인간미 넘치는 하드 심포닉</strong>인데요, 좀처럼 복잡한 편곡이나 곡구성을 꾀하지 않고 
                      <strong>총체적인 악기군들의 음향적인 조화</strong>에 충실하고 있다는 인상을 받았습니다.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">비교 밴드</h5>
                    <p className="text-sm">
                      이런 인상은 <strong>중반기 Camel과 Anyone's Daughter</strong>의 음악에서 풍기는 이미지이기도 합니다. 
                      단지 Bloque는 <strong>기타 연주와 보컬이 좀 더 강한 인상</strong>을 준다는 점이 다르지요.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <h5 className="font-bold text-blue-700 mb-2">키보드 역할</h5>
                    <p className="text-sm">
                      참고로 Bloque의 키보드는 <strong>스페이시한 음색으로 음악을 풍성하게 뒷받침해 주는 역할</strong>을 
                      주로 수행하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 앨범 구성 분석 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">앨범 구성 분석</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-l-4 border-green-400">
                    <h5 className="font-bold text-green-700 mb-2">전반부 (1-3번 곡): 최고의 구성</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        앨범의 시작은 예상외로 매우 <strong>독일적인 전자 키보드 연주곡</strong>으로 시작되고 있구요, 
                        이 첫곡부터 세 번째 곡까지는 마치 연관성 있는 곡들인 것처럼 자연스레 연결되고 있습니다.
                      </p>
                      
                      <div className="bg-gray-50 p-2 rounded">
                        <p><strong>구성:</strong> 키보드 솔로 연주 → 보컬곡 → (Full-Blown) 심포닉 락</p>
                      </div>

                      <p>
                        이 앨범의 초두는 <strong>구성면에서나 감성을 자극하는 면에서나 여러모로 매우 뛰어납니다.</strong> 
                        세 번째 곡에서는 부분적으로 현악기군이 채용되고 있는데 효과 만점이구요. 
                        제 생각에는 <strong>이 부분만으로 이 앨범의 가치는 충분한 듯 합니다.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold text-orange-700 mb-2">중간부: 타이틀곡</h5>
                    <p className="text-sm">
                      이 두개의 구조물 사이에는 <strong>멜로디감 좋은 타이틀 곡</strong>이 자리하고 있다는 사실도 빼놓을 수 없겠네요.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border border-l-4 border-orange-400">
                    <h5 className="font-bold text-orange-700 mb-2">후반부 (6-10번 곡): 장편 구성</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        후반부에는 여섯 번째 곡으로부터 마지막 열 번째 곡까지 이어지는 <strong>장편 구성의 곡</strong>이 자리하고 있는데, 
                        아무래도 이태리의 유수한 하드 심포닉 락에 비해 약간 허전함을 금할 수 없습니다.
                      </p>

                      <div className="bg-red-50 p-2 rounded border border-red-200">
                        <p><strong>장점:</strong></p>
                        <ul className="list-disc list-inside mt-1">
                          <li>기타 연주 만큼은 기대 이상으로 불에 타오르고 있고</li>
                          <li>곡 자체도 열기는 충만합니다</li>
                          <li>곡 후반부에서는 곡구성도 살아나고 있구요... :)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 총평 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">총평</h4>
                <div className="bg-white p-4 rounded border border-l-4 border-green-400">
                  <p className="font-bold text-green-700 text-lg">
                    My 추천 앨범입니다! :)
                  </p>
                </div>
                
                <p className="text-right italic text-gray-600 mt-3">
                  1995/7/14/o r k m a n
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 