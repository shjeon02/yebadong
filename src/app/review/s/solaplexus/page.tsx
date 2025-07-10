"use client"

import Link from 'next/link';

export default function SolaplexusPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Solaplexus</h1>
          <p className="text-lg text-gray-600">1971-1975 (Best Album Collection)</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>밴드:</strong> Solaplexus</p>
              <p><strong>앨범:</strong> 1971-1975</p>
              <p><strong>형식:</strong> 베스트 앨범 컬렉션</p>
              <p><strong>레이블:</strong> EMI</p>
            </div>
            <div>
              <p><strong>국가:</strong> 북유럽</p>
              <p><strong>장르:</strong> 소프트 재즈록</p>
              <p><strong>총 시간:</strong> 74분</p>
              <p><strong>트랙 수:</strong> 16곡 (4장의 앨범에서 발췌)</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              windmill (박왕근) - landberk@hananet.net
            </span>
          </div>
        </div>

        {/* 총 평가 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">총 평가</h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <div className="text-2xl font-bold text-yellow-600 mb-2">★★★½</div>
            <p className="text-gray-700">
              <strong>복강</strong> (척추동물의 내장기관이 들어있는 부분)이란 특이한 그룹명을 지닌 
              북유럽의 5인조 재즈록 밴드
            </p>
          </div>
        </div>

        {/* 상세 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">상세 리뷰</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              70년대 초/중반까지 총 5매의 음반을 발표했으며 EMI에서 그들의 4장의 앨범에서 
              총 16곡을 발췌하여 74분여에 이르는 베스트 형식으로 재발매된 음반입니다.
            </p>
            <p className="text-gray-700 mb-4">
              여기에 실린 초기작들은 상당히 아기자기한 소프트 재즈록을 들려주고 있습니다. 
              저처럼 <strong>Tonton Macoute</strong>를 좋아하시는 분이라면 충분히 어필할 만한 음반입니다.
            </p>
            <p className="text-gray-700 mb-4">
              대부분의 북유럽 70년대 프로그음반들이 그렇듯 전체적인 완성도가 떨어지는데 반해 
              베스트 음반이라 그런지 그럭저럭 일정이상의 수준을 유지하고 있습니다.
            </p>
            <p className="text-gray-700 mb-4">
              보컬은 남녀 혼성으로 구성되어 있으며 초기앨범의 수록곡들은 비교적 부드럽고 
              조화스런 연주를 들려주는데 반해 후기로 갈수록 부조화스런 헤비함이 다소 거슬립니다. 
              이런 이유에선지 다행히 후기작에서는 선곡이 절대적으로 적은 것이 다행이라고 생각됩니다.
            </p>
            <p className="text-gray-700">
              만약 LP가 싸기만 하다면 1, 2집 정도는 트라이 해보고도 싶네요. 
              <span className="text-sm text-gray-600">(1집은 더블입니다.)</span>
            </p>
          </div>
        </div>

        {/* 트랙 리스트 및 평점 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">트랙 리스트 및 평점</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">01. La Folia</span>
              <span className="text-yellow-600 font-bold">★★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">02. En Valsenmelodi</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">03. Don't Believe</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">04. Odins Oga</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">05. Sommarsang</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-100 rounded">
              <span className="font-medium">06. Som Ettklarbattk Kot</span>
              <span className="text-yellow-600 font-bold">★★★★½</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">07. Vakna Morgon</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">08. Frygisk Samba</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">09. The Girl of the Dawn</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">10. Wallenberg</span>
              <span className="text-yellow-600 font-bold">★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
              <span className="font-medium">11. Silent Worship</span>
              <span className="text-yellow-600 font-bold">★★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">12. Danse Russe</span>
              <span className="text-yellow-600 font-bold">★★★½</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">13. Man Skall Tala I Dag</span>
              <span className="text-yellow-600 font-bold">★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
              <span className="font-medium">14. Diktens Port</span>
              <span className="text-yellow-600 font-bold">★★★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">15. Det Ar Inte Baten Som Gungar - Det Ar Havet Som Ror Sig</span>
              <span className="text-yellow-600 font-bold">★★</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
              <span className="font-medium">16. Spider</span>
              <span className="text-yellow-600 font-bold">★★★★</span>
            </div>
          </div>
        </div>

        {/* 추천 트랙 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">추천 트랙</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-700 mb-1">★★★★½ 최고점</h3>
                <p className="text-gray-700">Som Ettklarbattk Kot</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-1">★★★★ 추천</h3>
                <p className="text-gray-700">La Folia, Silent Worship</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-1">★★★★ 추천</h3>
                <p className="text-gray-700">Diktens Port, Spider</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 mb-1">★★★½ 괜찮음</h3>
                <p className="text-gray-700">Danse Russe</p>
              </div>
            </div>
          </div>
        </div>

        {/* 음악적 특징 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-700 mb-3">긍정적 요소</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  아기자기한 소프트 재즈록
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Tonton Macoute 팬들에게 어필
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  남녀 혼성 보컬
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  베스트 형식으로 일정 수준 유지
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-700 mb-3">아쉬운 점</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  북유럽 70년대 앨범 특유의 완성도 부족
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  후기작의 부조화스런 헤비함
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  일관성 부족
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 관련 밴드 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 밴드</h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">비슷한 스타일</h3>
            <p className="text-gray-700">
              <strong>Tonton Macoute</strong> - windmill이 직접 언급한 유사한 스타일의 밴드로, 
              Solaplexus를 좋아할 가능성이 높은 밴드
            </p>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 링크</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/review/s" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              S 목록으로 돌아가기
            </Link>
            <Link href="/review" className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 