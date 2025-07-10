"use client"

import Link from "next/link"

export default function RickWrightPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rick Wright
            </h1>
            <p className="text-lg text-gray-600">
              키보드 연주자 • Pink Floyd 멤버 • 솔로 아티스트
            </p>
          </div>

          {/* Artist Overview */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Rick Wright (리치 라이트)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 Pink Floyd의 창립 멤버이자 핵심 키보드 연주자로, 
                밴드의 독특한 사운드 형성에 결정적인 역할을 했습니다. 
                Pink Floyd에서의 활동 외에도 솔로 작업을 통해 
                자신만의 독특한 음악적 비전을 선보였습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>본명:</strong> Richard William Wright<br/>
                  <strong>출생:</strong> 1943년 7월 28일<br/>
                  <strong>국적:</strong> 영국<br/>
                  <strong>주요 활동:</strong> Pink Floyd (1965-2008), 솔로 활동
                </p>
              </div>
            </div>
          </div>

          {/* Pink Floyd Career */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Pink Floyd에서의 활동</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 Pink Floyd의 창립 멤버로서 밴드의 사운드 정체성을 
                형성하는 데 핵심적인 역할을 했습니다. 특히 키보드와 신시사이저를 
                통해 Pink Floyd만의 독특한 사이키델릭 사운드를 만들어냈습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">주요 기여</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 키보드 및 신시사이저 연주</li>
                    <li>• 보컬 (백보컬 및 리드보컬)</li>
                    <li>• 작곡 및 편곡 참여</li>
                    <li>• 사운드 텍스처 창조</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">특징적 사운드</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 몽환적인 키보드 사운드</li>
                    <li>• 실험적 신시사이저 연주</li>
                    <li>• 분위기 창조의 달인</li>
                    <li>• 서정적 멜로디 라인</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Solo Career */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">솔로 활동</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 Pink Floyd 활동과 병행하여 솔로 앨범을 발매했습니다. 
                그의 솔로 작업은 Pink Floyd의 사운드와는 또 다른 개인적이고 
                실험적인 음악적 탐구를 보여줍니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">솔로 디스코그래피</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Wet Dream (1978)</strong>
                    <p className="text-gray-600 mt-1">
                      첫 번째 솔로 앨범으로, Pink Floyd의 "Animals" 녹음 후 발매되었습니다. 
                      실험적이고 인스트루멘털한 트랙들로 구성되어 있습니다.
                    </p>
                  </div>
                  <div>
                    <strong>Broken China (1996)</strong>
                    <p className="text-gray-600 mt-1">
                      두 번째 솔로 앨범으로, 더욱 성숙하고 개인적인 음악적 표현을 
                      담고 있습니다. 신시사이저와 키보드 중심의 컨셉 앨범입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Style */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">음악적 스타일</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright의 음악적 스타일은 정교한 키보드 연주와 혁신적인 
                신시사이저 사운드로 특징지어집니다. 그는 기술적 완성도와 
                예술적 감성을 완벽하게 조화시킨 연주자로 평가받습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">연주 스타일</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 서정적이고 멜로딕한 연주</li>
                    <li>• 분위기 연출의 달인</li>
                    <li>• 실험적 사운드 텍스처</li>
                    <li>• 정교한 화성 진행</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">사용 악기</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 해몬드 오르간</li>
                    <li>• 무그 신시사이저</li>
                    <li>• 로즈 전자 피아노</li>
                    <li>• 다양한 키보드 악기</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy and Influence */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">유산과 영향</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 프로그레시브 록과 사이키델릭 록 역사에서 
                가장 중요한 키보드 연주자 중 한 명으로 평가받습니다. 
                그의 음악적 기여는 Pink Floyd의 성공과 록 음악의 발전에 
                결정적인 영향을 미쳤습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">주요 영향</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>음악적 혁신:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 신시사이저 사운드 개척</li>
                      <li>• 사이키델릭 록 발전</li>
                      <li>• 분위기 음악의 새로운 지평</li>
                    </ul>
                  </div>
                  <div>
                    <strong>후속 세대 영향:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 프로그레시브 록 키보디스트들</li>
                      <li>• 앰비언트 음악가들</li>
                      <li>• 전자음악 아티스트들</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Characteristics */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">개인적 특징</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 조용하고 내성적인 성격으로 알려져 있지만, 
                음악적으로는 매우 창의적이고 혁신적인 아티스트였습니다. 
                그의 개인성은 Pink Floyd의 음악에 독특한 감성을 더했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🎹</div>
                  <div className="font-medium text-gray-800">키보드 마스터</div>
                  <div className="text-sm text-gray-600 mt-1">정교한 연주 기술</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-medium text-gray-800">창의적 혁신</div>
                  <div className="text-sm text-gray-600 mt-1">독특한 사운드 창조</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🌟</div>
                  <div className="font-medium text-gray-800">예술적 감성</div>
                  <div className="text-sm text-gray-600 mt-1">서정적 표현력</div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">커리어 타임라인</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">주요 시기</h3>
                  <ul className="space-y-2">
                    <li><strong>1965:</strong> Pink Floyd 창립 멤버</li>
                    <li><strong>1967:</strong> The Piper at the Gates of Dawn</li>
                    <li><strong>1973:</strong> The Dark Side of the Moon</li>
                    <li><strong>1975:</strong> Wish You Were Here</li>
                    <li><strong>1978:</strong> 첫 솔로 앨범 Wet Dream</li>
                    <li><strong>1979:</strong> The Wall 참여</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">후기 활동</h3>
                  <ul className="space-y-2">
                    <li><strong>1987:</strong> Pink Floyd 재합류</li>
                    <li><strong>1994:</strong> The Division Bell</li>
                    <li><strong>1996:</strong> 두 번째 솔로 앨범 Broken China</li>
                    <li><strong>2005:</strong> Live 8 공연</li>
                    <li><strong>2008:</strong> 별세 (65세)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Discography Highlights */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">주요 작품</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Pink Floyd 주요 앨범</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• The Dark Side of the Moon (1973)</li>
                    <li>• Wish You Were Here (1975)</li>
                    <li>• Animals (1977)</li>
                    <li>• The Wall (1979)</li>
                    <li>• The Division Bell (1994)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">솔로 앨범</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Wet Dream (1978)</li>
                    <li>• Broken China (1996)</li>
                    <li>• 다양한 콜라보레이션</li>
                    <li>• 사이드 프로젝트</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Memorial */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">추모</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Rick Wright는 2008년 9월 15일 암으로 별세했습니다. 
                그의 죽음은 음악계에 큰 손실이었으며, 그가 남긴 음악적 유산은 
                오늘날까지도 많은 음악가들과 팬들에게 영향을 미치고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-rose-500">
                <p className="text-sm italic">
                  "Rick Wright는 Pink Floyd의 숨겨진 보석이었다. 
                  그의 키보드 연주 없이는 Pink Floyd의 마법 같은 사운드는 
                  결코 완성될 수 없었을 것이다."
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/w" className="text-blue-600 hover:text-blue-800 font-medium">
              ← W 폴더로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 