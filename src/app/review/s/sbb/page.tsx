"use client"

import Link from "next/link"

export default function SBBPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              SBB
            </h1>
            <p className="text-lg text-gray-600">
              폴란드 • 프로그레시브 록 • Search, Breakup, Build
            </p>
          </div>

          {/* Band Name Origin */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              밴드명의 의미
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                SBB는 "Search, Breakup, Build"의 약자입니다. 
                이 이름이 정확히 무엇을 의미하는지는 명확하지 않지만, 
                음악적 탐구와 해체, 그리고 재구성이라는 프로그레시브 록의 
                본질을 담고 있는 것으로 해석됩니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>밴드명:</strong> SBB (Search, Breakup, Build)<br/>
                  <strong>국가:</strong> 폴란드<br/>
                  <strong>시대:</strong> 1970년대<br/>
                  <strong>장르:</strong> 프로그레시브 록
                </p>
              </div>
            </div>
          </div>

          {/* Career Beginning */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">커리어의 시작</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                SBB는 폴란드를 대표하는 국민적 영웅인 Niemen의 백밴드로서 
                커리어를 시작했습니다. 이는 그들이 폴란드 록 씬에서 
                얼마나 중요한 위치에 있었는지를 보여주는 증거입니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">폴란드 록과의 만남</h3>
                <p className="text-sm text-gray-600">
                  리뷰어는 Collage와 Niemen으로 처음 접한 폴란드 음악이 
                  그 독특한 분위기 때문에 자꾸 듣게 된다고 했습니다. 
                  폴란드 음악만의 특별한 매력이 있음을 시사합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Album Focus */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              Memento z Banalyn Tryptykiem
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                이 앨범은 1970년대 후반쯤에 발표된 것으로 추정되며, 
                리뷰어가 지난 몇 달간 구한 앨범들 중에서 가장 들을 만한 앨범이라고 평가했습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">앨범 정보의 부족</h3>
                <p className="text-sm text-gray-600">
                  CD에는 부클릿이라고도 할 수 없는 달랑 한 장의 표지가 끼워져 있을 뿐, 
                  전혀 릴리스 데이트와 같은 인포메이션이 없어서 
                  정확한 정보를 파악하기 어려웠다고 합니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">다른 앨범과의 비교</h3>
                <p className="text-sm text-gray-600">
                  일본 친구들은 SBB의 앨범 중 "Pamiec"을 최고작으로 꼽지만, 
                  이 앨범을 보내준 분의 설명으로는 "Memento z Banalyn Tryptykiem"이 
                  자기가 듣기엔 가장 괜찮다고 했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Musical Diversity */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">다양한 음악적 스타일</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                전체적으로 사운드는 상당히 다양합니다. 
                여러 장르를 넘나드는 SBB의 음악적 스펙트럼이 이 앨범에 잘 드러나 있습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">기타 연주</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Fusion Jazz 스타일의 빠른 템포 기타 연주</li>
                    <li>• Triana 등이 들려줬던 Spanish 풍 어쿠스틱 기타</li>
                    <li>• 무척 감칠맛 나는 연주</li>
                    <li>• 다양한 테크닉과 감정 표현</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">구성의 특징</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• B면을 가득 채우는 동명 타이틀 트랙</li>
                    <li>• 무척이나 다양한 구성</li>
                    <li>• 청자를 흐뭇하게 하는 전개</li>
                    <li>• 상큼한 피아노 소리</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Polish Vocal Character */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">폴란드 보컬의 매력</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                가끔씩 등장하는 야릿한 발음의 폴란드 보컬은 
                Itoiz를 연상시키는 가녀리고도 애수가 가득찬 
                무척이나 멜로디어스한 분위기로 많은 국내 팬들에게도 어필할 것으로 예상됩니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">보컬의 특징</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 야릿한 발음의 폴란드어</li>
                  <li>• Itoiz를 연상시키는 스타일</li>
                  <li>• 가녀리고 애수 어린 감정</li>
                  <li>• 멜로디어스한 전개</li>
                  <li>• 국내 팬들에게도 어필할 매력</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">분위기 연출</h3>
                <p className="text-sm text-gray-600">
                  리뷰어는 "지금도 컴의 CD-ROM 드라이버로 듣고 있어요.. 
                  꿀꿀한 밤에 딱 어울리는 분위기네요..."라며 
                  이 앨범의 분위기를 생생하게 묘사했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Title Track Analysis */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">타이틀 트랙의 구성</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                B면을 가득 채우고 있는 동명 타이틀 트랙은 
                무척이나 다양한 구성으로 청자를 흐뭇하게 해줍니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">곡의 전개</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <strong>1단계:</strong> 꿀꿀한 보컬로 시작
                  </div>
                  <div>
                    <strong>2단계:</strong> 짧은 어쿠스틱 기타의 인터루드
                  </div>
                  <div>
                    <strong>3단계:</strong> 박수 소리로 전환
                  </div>
                  <div>
                    <strong>4단계:</strong> 경쾌한 코러스로 분위기 전환
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">악기별 특징</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 상큼한 피아노 소리</li>
                  <li>• 감칠맛 나는 어쿠스틱 기타</li>
                  <li>• 다양한 분위기 연출</li>
                  <li>• 전체적인 조화와 균형</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Polish Rock Context */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">폴란드 록의 맥락</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                SBB는 Collage, Niemen과 함께 폴란드 프로그레시브 록을 대표하는 밴드 중 하나입니다. 
                폴란드 록만의 독특한 분위기와 정서를 잘 보여주는 그룹입니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">폴란드 록의 특징</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 독특한 분위기와 정서</li>
                    <li>• 동유럽 특유의 멜랑콜리</li>
                    <li>• 서구와는 다른 감성</li>
                    <li>• 강한 개성과 정체성</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">동시대 밴드들</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Niemen (국민적 영웅)</li>
                    <li>• Collage</li>
                    <li>• SBB (Search, Breakup, Build)</li>
                    <li>• 기타 폴란드 프로그 밴드들</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Listening Experience */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">감상 경험</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                리뷰어는 이 앨범을 실시간으로 감상하며 리뷰를 작성했습니다. 
                "지금도 컴의 CD-ROM 드라이버로 듣고 있어요"라며 
                생생한 감상 경험을 전달했습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">완벽한 감상 타이밍</h3>
                <p className="text-sm text-gray-600">
                  "꿀꿀한 밤에 딱 어울리는 분위기"라며, 
                  이 앨범이 특별한 분위기를 연출하는 데 적합한 음악임을 강조했습니다. 
                  특히 야간 감상에 최적화된 앨범으로 추천했습니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">향후 계획</h3>
                <p className="text-sm text-gray-600">
                  "이들의 음반을 좀 더 많이 구해봐야겠습니다..쿠쿠.."라며 
                  SBB의 다른 앨범들에 대한 관심을 표현했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">추천 및 평가</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                이 앨범은 "지난 몇 달간 구한 앨범들 중에선 가장 들을 만한 앨범"이라는 
                높은 평가를 받았습니다. 특히 폴란드 록에 관심이 있는 분들에게 추천합니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">추천 대상</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 폴란드 록 애호가</li>
                    <li>• Fusion Jazz 팬</li>
                    <li>• Spanish 풍 어쿠스틱 선호자</li>
                    <li>• 야간 감상용 음악 찾는 분</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">특별한 매력</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 꿀꿀한 밤 분위기</li>
                    <li>• 다양한 장르 융합</li>
                    <li>• 폴란드만의 독특한 감성</li>
                    <li>• Itoiz를 연상시키는 보컬</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/s" className="text-blue-600 hover:text-blue-800 font-medium">
              ← S 폴더로 돌아가기
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