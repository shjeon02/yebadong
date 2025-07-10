"use client"

import Link from "next/link"

export default function WhistlerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Whistler
            </h1>
            <p className="text-lg text-gray-600">
              프로그레시브 포크 록 • 인디 밴드
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Hohum (SW10/99)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Whistler의 대표작 "Hohum"은 36분 동안 아무런 생각없이 그냥 듣고 있으면 
                저절로 행복해지는 그런 음반입니다. 12곡 중에서 어느 곡하나 버릴 수 없는 
                그야말로 포크록의 명작으로 평가받고 있습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>장르:</strong> 프로그레시브 포크 록, 인디 록<br/>
                  <strong>플레이타임:</strong> 36분<br/>
                  <strong>트랙 수:</strong> 12곡<br/>
                  <strong>레이블:</strong> SW10/99
                </p>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">음악적 특징</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">사운드 특징</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 편안하고 소박한 사운드</li>
                    <li>• 포크 록 기반의 멜로디</li>
                    <li>• 프로그레시브적 요소</li>
                    <li>• 인디 록의 감성</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">앨범의 매력</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 자연스러운 행복감 유발</li>
                    <li>• 완벽한 트랙 구성</li>
                    <li>• 36분의 최적화된 길이</li>
                    <li>• 버릴 곡이 없는 완성도</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                meddle (이동훈)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">리뷰</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                아... 이 앨범을 어떻게 설명할 수 있을까요? 
                *편안함* *소박함* 이란 단어들이 적당할것 같지만 
                필요 충분조건을 만족시켜주지는 못하는군요.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm font-medium text-gray-800 mb-2">핵심 매력</p>
                <p className="text-sm">
                  36분 동안 아무런 생각없이 그냥 듣고 있으면 저절로 행복해지는 그런 음반이지요. 
                  12곡 중에서 어느 곡하나 버릴 수 없는 그야말로 포크록의 명작입니다.
                </p>
              </div>
              <p>
                이 앨범은 설명하기 어려운 특별한 매력을 가지고 있습니다. 
                복잡한 구성이나 화려한 연주보다는 자연스럽고 소박한 아름다움으로 
                듣는 이의 마음을 편안하게 만드는 작품입니다.
              </p>
            </div>
          </div>

          {/* Album Details */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">앨범 상세 정보</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">구성</h3>
                  <ul className="space-y-1">
                    <li>• 총 12곡 수록</li>
                    <li>• 전체 플레이타임: 36분</li>
                    <li>• 평균 곡당 3분</li>
                    <li>• 완벽한 밸런스</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">특징</h3>
                  <ul className="space-y-1">
                    <li>• 포크록 명작</li>
                    <li>• 편안한 감성</li>
                    <li>• 소박한 아름다움</li>
                    <li>• 자연스러운 행복감</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Style Analysis */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">음악 스타일 분석</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Whistler의 "Hohum"은 전통적인 포크 록에 프로그레시브적 요소를 자연스럽게 
                녹여낸 작품입니다. 복잡한 구성보다는 멜로디의 아름다움과 자연스러운 흐름을 
                중시하는 접근 방식을 보여줍니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-2">장르적 특징</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>포크 록 요소:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 어쿠스틱 기반 사운드</li>
                      <li>• 자연스러운 멜로디</li>
                      <li>• 편안한 보컬</li>
                    </ul>
                  </div>
                  <div>
                    <strong>프로그레시브 요소:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• 독특한 사운드 텍스처</li>
                      <li>• 창의적 편곡</li>
                      <li>• 실험적 접근</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Listening Experience */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">감상 경험</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                이 앨범의 가장 큰 매력은 의식적으로 집중해서 들을 필요가 없다는 점입니다. 
                배경음악으로 틀어놓고 일상을 보내다 보면 어느새 마음이 편안해지고 
                자연스럽게 행복한 기분이 드는 특별한 경험을 제공합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">😌</div>
                  <div className="font-medium text-gray-800">편안함</div>
                  <div className="text-sm text-gray-600 mt-1">자연스러운 안정감</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">🌿</div>
                  <div className="font-medium text-gray-800">소박함</div>
                  <div className="text-sm text-gray-600 mt-1">꾸밈없는 아름다움</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <div className="text-2xl mb-2">😊</div>
                  <div className="font-medium text-gray-800">행복감</div>
                  <div className="text-sm text-gray-600 mt-1">저절로 드는 기쁨</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">추천 대상</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">이런 분들께 추천</h3>
                  <ul className="space-y-1">
                    <li>• 포크록을 좋아하시는 분</li>
                    <li>• 편안한 음악을 찾는 분</li>
                    <li>• 완성도 높은 앨범을 원하는 분</li>
                    <li>• 자연스러운 감동을 원하는 분</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">감상 상황</h3>
                  <ul className="space-y-1">
                    <li>• 조용한 오후 시간</li>
                    <li>• 독서하며 배경음악으로</li>
                    <li>• 휴식이 필요한 순간</li>
                    <li>• 일상 속 힐링 타임</li>
                  </ul>
                </div>
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