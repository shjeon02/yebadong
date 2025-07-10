"use client"

import Link from 'next/link';

export default function SprigunsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Spriguns</h1>
          <p className="text-lg text-gray-600">영국 포크 락 그룹</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>결성:</strong> 1972년 (듀오), 1973년 (정식 그룹)</p>
              <p><strong>국가:</strong> 영국</p>
              <p><strong>장르:</strong> 포크 락</p>
              <p><strong>핵심 멤버:</strong> Mike & Mandy Morton (부부 듀오)</p>
            </div>
            <div>
              <p><strong>레이블:</strong> Decca</p>
              <p><strong>특징:</strong> Steeleye Span 영향</p>
              <p><strong>활동:</strong> 1972-1977</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Budgie (이훈구) - hglee@fdcl.kaist.ac.kr
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              부드기 (이훈구) - hglee@fdcl.kaist.ac.kr
            </span>
          </div>
        </div>

        {/* 앨범 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 리뷰</h2>
          
          {/* Jack With a Feather 리뷰 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Spriguns of Tolgus - Jack With a Feather
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              리뷰어: <strong>Budgie (이훈구)</strong>
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">수록곡</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <p>1. Lambton Worm</p>
                  <p>2. Let No Man Steal Your Thyme</p>
                  <p>3. Derby Ram</p>
                  <p>4. Jigs: Rakes of Malo / St. Patricks Day / Ten Penny Bit</p>
                  <p>5. Flodden Field</p>
                  <p>6. Troopers Nag</p>
                </div>
                <div>
                  <p>7. Curragh of Kildare</p>
                  <p>8. Keys of Canterbury</p>
                  <p>9. Twa Magicians</p>
                  <p>10. Seamus the Showman</p>
                  <p>11. Barren Banks of Aden</p>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                얼마전에 Arzachel과 함께 CDE에서 도착한 음반인데.. 희귀음반 재발매로 유명한 
                영국의 Background CD군요. 그런데 기대보다는 좀 내용물이 후진거 같습니다.
              </p>
              <p className="text-gray-700 mb-4">
                이들은 1972년 Mike와 Mandy Morton 부부 듀오로 출발했고, 73년 멤버를 보강하여 
                정식 포크그룹으로 출발합니다. 그때 녹음한 것이 이들의 데뷔 앨범인 
                <em>Jack With A feather</em>입니다. 특히 10번트랙은 Steeleye Span의 Tim Hart가 
                곡을 썼는데.. 이사람은 이후의 이들의 앨범에 상당히 많이 참여했습니다.
              </p>
              <p className="text-gray-700 mb-4">
                이들의 사운드도 당시 전성기를 구가하던 Steeleye Span의 영향을 많이 받은 탓인지 
                매우 소리가 비슷하게 들리는군요. 대체적으로 편하게 들을수 있는데.. 구하기가 
                너무 힘들군요 :(
              </p>
              <p className="text-gray-700 mb-4">
                차라리 CDC에서 쉽게 구하실수 있는 Steeleye Span의 중반기 세작품 
                <em>Below the Salt</em>, <em>Parcel of Rogus</em>, <em>Now We Are The Six</em>를 
                구하시는게 더 나을것 같습니다.
              </p>
            </div>
          </div>

          {/* Time Will Pass 리뷰 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Spriguns - Time Will Pass (1977, Decca)
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              리뷰어: <strong>부드기 (이훈구)</strong>
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">수록곡</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div>
                  <p><strong>Side A:</strong></p>
                  <p>1. Dead Man's Eyes</p>
                  <p>2. All Before</p>
                  <p>3. For You</p>
                  <p>4. Time Will Pass</p>
                  <p>5. White Witch</p>
                </div>
                <div>
                  <p><strong>Side B:</strong></p>
                  <p>1. Blackwaterside</p>
                  <p>2. You're not There</p>
                  <p>3. Devil's Night</p>
                  <p>4. Letter to a Lady</p>
                </div>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                오랫동안 사려고 하다 미루어 두었던 Spriguns의 세번째 앨범 Time will pass를 
                샀습니다. 전에 제가 두어번 말씀드렸었는데, 여타 영국의 포크락 그룹에 비해 
                그리 뛰어난 음악을 들려주는것 같지 않고 Overrated 되어 있다는 인상을 지울수 
                없는 그룹인데요.. 특히 일본 사람들이 이 그룹에 아주 미쳐있다더군요.
              </p>
              <p className="text-gray-700 mb-4">
                이 앨범 역시 환상적인 영국 포크락이라는 평가와는 달리 그리 뚜렷한 특징이 
                보이지는 않는것 같습니다. 단지, Spriguns of Tolgus 시절의 전통민요 따라부르기 
                식이나, 이 앨범 이후 발표한 Magic Lady의 신비스러운 분위기가 많이 혼합되어 
                있는 인상입니다.
              </p>
              <p className="text-gray-700 mb-4">
                Spriguns의 앨범을 들을때마다 느끼는 점은 우선 보컬이 너무 단조롭고 곡의 
                전개패턴에 짜릿한 절정(climax??)이 부족하다는 것입니다. Trees의 Murdoch이나 
                Steeleye Span의 Drink Down the Moon 같은 곡들에서 보이는 (포크 특유의) 
                단조로운 코드의 반복일지라도 기승전결의 분위기가 명백하게 드러나는 그러한 
                맛갈난 곡이 별로 보이지 않는다는 것입니다.
              </p>
              <p className="text-gray-700 mb-4">
                가장 훌륭한 Track은 지난해에 전영혁씨 프로에 성시완씨가 틀어주었던 곡인 
                <strong>Blackwaterside</strong>입니다. 이 곡의 일렉기타와 배경으로 깔리는 
                키보드 연주가 곡의 신비스러운 분위기를 잘 표현해 주고 있고, 다른곡들에 
                비해 매우 락적인 곡패턴을 보여주고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 평가 요약 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">종합 평가</h2>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">장점</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• 편안하게 들을 수 있는 포크 락 사운드</li>
                <li>• Tim Hart의 참여로 인한 완성도</li>
                <li>• "Blackwaterside" 같은 뛰어난 트랙</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">단점</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Steeleye Span과 너무 유사한 사운드</li>
                <li>• 단조로운 보컬과 부족한 절정감</li>
                <li>• 과대평가된 측면 (특히 일본에서)</li>
                <li>• 구하기 어려운 희귀성</li>
              </ul>
            </div>
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