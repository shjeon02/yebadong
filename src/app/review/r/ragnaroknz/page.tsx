"use client"

import Link from "next/link"

export default function RagnarokNZPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ragnarok (NewZealand)
            </h1>
            <p className="text-lg text-gray-600">
              뉴질랜드 심포닉 록 • Self-titled (여성 보컬)
            </p>
            <div className="text-sm text-gray-500 mt-2">
              * 스웨덴의 Ragnarok과는 다른 밴드
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-pink-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-pink-800 mb-4">환각적 심포닉 록</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">국가</div>
                <div>뉴질랜드</div>
              </div>
              <div>
                <div className="font-medium">장르</div>
                <div>심포닉 록</div>
              </div>
              <div>
                <div className="font-medium">보컬</div>
                <div>여성 보컬</div>
              </div>
              <div>
                <div className="font-medium">특징</div>
                <div>멜로트론, 무그 중심의 환각적 사운드</div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">리뷰</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  광월인 (이동훈)
                </span>
                <span className="text-gray-500 text-sm ml-2">meddle@nuri.net</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`ragnarok - s/t **** (스웨덴이 아닌 뉴질랜드팀)

겉 표지가 예쁘고 심포닉록을 한다기에 무심결에
듣게된 앨범인데요. 전체적으로 높은 완성도의
심포닉록입니다. 우선 보컬이 여자구요 (코피쫙 ^^)
핑크 플로이드의 careful with that axe 시절의
'몽롱함'이 느껴지기도 합니다. 물론 시드 바렛의
싸이키델릭 시대를 말하는 것은 아니구요.
특히 멜로트론과 무그가 많이 쓰여서 풍성하고도
환각적인 분위기가 느껴집니다.`}
              </div>
            </div>
          </div>

          {/* Musical Features */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">높은 완성도의 심포닉 록</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`어떤 곡하나를 찝어서
'요게 최고'라고 말할 수 없을 정도로 전체적인
완성도는 염려 하지 않으셔도 됩니다.
특히 저는 6분짜리 곡인 raga 를 좋아하는데요
단조로운 드럼비트에 반젤리스 초반기 작품에서
드러나는 부유하는 키보드가 잘 어우러진
명곡이라고 생각합니다.`}
              </div>
            </div>
          </div>

          {/* Key Tracks */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">주요 곡</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Raga (6분)</h3>
                <div className="prose text-gray-700 text-sm">
                  단조로운 드럼비트에 반젤리스 초반기 작품에서 드러나는 부유하는 키보드가 잘 어우러진 명곡
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Dream</h3>
                <div className="prose text-gray-700 text-sm">
                  "akasha의 미발표 곡이라고 하면 다들 고개를 끄덕일겁니다"
                </div>
              </div>
            </div>
          </div>

          {/* Sound Influences */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 영향</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Pink Floyd</h3>
                  <div className="text-sm text-gray-700">
                    "Careful with that Axe" 시절의 몽롱함 (시드 바렛의 사이키델릭과는 다른)
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Vangelis</h3>
                  <div className="text-sm text-gray-700">
                    초반기 작품의 부유하는 키보드 스타일 연상
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Akasha</h3>
                  <div className="text-sm text-gray-700">
                    Dream 곡이 Akasha의 미발표곡 스타일과 유사
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">키보드 사운드</h3>
                  <div className="text-sm text-gray-700">
                    멜로트론과 무그 신디사이저의 풍성하고 환각적인 분위기
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Rating */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold text-indigo-600">★★★★</span>
                <span className="text-lg font-medium text-indigo-800 ml-2">높은 완성도</span>
              </div>
              <div className="prose text-gray-700">
                겉 표지의 아름다움에 이끌려 듣게 된 앨범이지만, 전체적으로 높은 완성도의 심포닉 록을 들려준다. 
                여성 보컬의 매력과 멜로트론, 무그의 환각적 분위기가 조화를 이룬 수작이다.
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