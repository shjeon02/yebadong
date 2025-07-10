"use client"

import Link from "next/link"

export default function RawMaterialPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Raw Material
            </h1>
            <p className="text-lg text-gray-600">
              영국 재즈 록 • Time Is... (1971)
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Time Is... (1971)</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">레이블</div>
                <div>Neon (RCA 산하 아트락 전문)</div>
              </div>
              <div>
                <div className="font-medium">발매량</div>
                <div>단 11장만 발매</div>
              </div>
              <div>
                <div className="font-medium">장르</div>
                <div>Jazz Rock</div>
              </div>
              <div>
                <div className="font-medium">특징</div>
                <div>브라스 파트 중심의 수준급 연주</div>
              </div>
            </div>
          </div>

          {/* Track Listing */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">수록곡</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>1. Ice Queen</span>
                </div>
                <div className="flex justify-between">
                  <span>2. Empty Houses</span>
                </div>
                <div className="flex justify-between">
                  <span>3. Insolent Lady</span>
                  <span className="text-gray-500">a) Bye The Way  b) Small Thief  c) Insolent Lady</span>
                </div>
                <div className="flex justify-between">
                  <span>4. Miracle Worker</span>
                </div>
                <div className="flex justify-between">
                  <span>5. Religion</span>
                </div>
                <div className="flex justify-between">
                  <span>6. Sun God</span>
                  <span className="text-gray-500">a) Awakening  b) Realisation  c) Worship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">리뷰</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Budgie (이훈구)
                </span>
                <span className="text-gray-500 text-sm ml-2">hglee@fdcl.kaist.ac.kr</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`이 앨범은 단 11장 만을 발매했던 RCA 산하의 아트락 전문 레이블이었던 Neon 에
서 발매된 앨범입니다. 아마..이사람들의 앨범이 이거 외에도 셀프타이틀의 데
뷔앨범이 있는걸로 알고 있구요.. 영국 희귀음반 발매 회사인 Background에서 이
들의 데뷔앨범이 발매된걸로 알고 있습니다.
이 그룹에 대해 알게된 것이.. Beatnik 의 사장이신 최유길씨의 아트락 앨범소개 
책자에서 였는데.. 그분의 평가로.. 이 앨범과 Indian Summer, 그리고 Spring이 
가장 높에 평가되었습니다(물론 Neon Label 중에서요).`}
              </div>
            </div>
          </div>

          {/* Musical Comparison */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">다른 밴드와의 비교</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Affinity와의 비교</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`음악은 아주 수준급입니다. Neon 과 라이벌이랄수 있는 Vertigo 의 Affinity 와 
비견할 만 하다고 봅니다. 제 개인적으론 더 하드한 이 Raw Material 이 더 마음
에 들더군요. 보컬은 물론 남자이구요(Affinity 는 여성보컬이죠?). 제가 굳이 
Affinity 와 비교할려고 생각한 것은.. 둘다 Jazz Rock 지향의 그룹이고 브라스 
파트가 아주 많이 들린다는 것입니다. 하지만 절대 난해하거나 듣기 껄끄럽지 않
고.. 아주 부드러우면서도 무겁고 또 강렬한 연주를 들려줍니다.`}
              </div>
            </div>
          </div>

          {/* Key Tracks */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">주요 곡 분석</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Insolent Lady (삼부작)</h3>
                <div className="text-sm text-gray-700">
                  각 Side의 말미를 장식하는 두 곡의 삼부작 중 하나로, 특히 돋보이는 구성을 자랑
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Sun God (삼부작)</h3>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`특히 마지막곡 Sun God 의 
첫번째 파트와 세번째 파트에서는 어쿠스틱 기타가 울려퍼지면서 신비주의적인 
냄새를 풍기는 보컬..그리고 서서히 분위기를 고조시키는 신세사이져 이펙트가 
매우 Pink Floyd 적 분위기를 자아냅니다.`}
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">기타 곡들</h3>
                <div className="text-sm text-gray-700">
                  그 이외의 곡들도 5분에서 7분정도의 아주 짜임새있고 멋진 연주와 보컬을 들려줍니다.
                </div>
              </div>
            </div>
          </div>

          {/* Label Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Neon 레이블</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">레이블 특징</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• RCA 산하의 아트락 전문 레이블</li>
                    <li>• 단 11장만 발매한 희귀 레이블</li>
                    <li>• Vertigo와 라이벌 관계</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">최고 평가 3작품</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Raw Material - Time Is...</li>
                    <li>• Indian Summer</li>
                    <li>• Spring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Style */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">사운드 특징</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jazz Rock 지향</li>
                    <li>• 브라스 파트 중심</li>
                    <li>• 부드럽고 무거운 연주</li>
                    <li>• 난해하지 않은 접근성</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">영향받은 스타일</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pink Floyd (신비주의적 분위기)</li>
                    <li>• Affinity (재즈 록 구성)</li>
                    <li>• 신디사이저 이펙트 활용</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 목록으로 돌아가기
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