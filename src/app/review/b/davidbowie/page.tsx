"use client";
import Link from "next/link";

export default function DavidBowieReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">David Bowie - Heathen</h1>
        
        {/* 아티스트 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> England (London)</p>
              <p><strong>장르:</strong> Art Rock, Glam Rock, Pop Rock</p>
              <p><strong>활동 시기:</strong> 1962-2016</p>
            </div>
            <div>
              <p><strong>특징:</strong> 카멜레온적 변신, 혁신적 아티스트</p>
              <p><strong>프로듀서:</strong> Tony Visconti (오랜 친구)</p>
              <p><strong>앨범:</strong> Heathen (2002)</p>
            </div>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Heathen (2002) 앨범 정보</h2>
          <div className="bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-bold mb-2">발매 정보</h3>
                <p>• <strong>일본 선행반:</strong> 2002년 6월 5일</p>
                <p>• <strong>미국반:</strong> 2002년 6월 11일</p>
                <p>• <strong>초회한정반:</strong> SICP153/154 (3150엔)</p>
                <p>• <strong>통상반:</strong> SICP155 (2520엔)</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">패키지 정보</h3>
                <p>• <strong>초회한정반:</strong> Digi-pak + 12페이지 올 칼라 책자</p>
                <p>• <strong>보너스:</strong> 4곡의 보너스 트랙 CD 포함</p>
                <p>• <strong>통상반:</strong> 일반 쥬얼 케이스</p>
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">이동훈</h3>
            <p className="text-sm text-gray-600 mb-4">the_last_lie@yahoo.com</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 메인 트랙리스트 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">DISC 1 - 메인 앨범</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <p>1. Sunday</p>
                      <p>2. <strong>Cactus</strong> (The Pixies 커버)</p>
                      <p>3. Slip Away</p>
                      <p>4. <strong>Slow Burn</strong> ⭐ (Lead Track)</p>
                      <p>5. Afraid</p>
                      <p>6. <strong>I've Been Waiting For You</strong> (Neil Young 커버)</p>
                    </div>
                    <div>
                      <p>7. I Would Be Your Slave</p>
                      <p>8. <strong>Gemini Spaceship</strong> (Legendary Stardust Cowboy 커버)</p>
                      <p>9. The Angels Have Gone</p>
                      <p>10. Everyone Says 'Hi'</p>
                      <p>11. A Better Future</p>
                      <p>12. Heathen</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded border">
                    <h5 className="font-bold mb-2">게스트 연주자</h5>
                    <div className="text-xs space-y-1">
                      <p>• <strong>Pete Townshend</strong> - Guitar (Slow Burn)</p>
                      <p>• <strong>Dave Grohl</strong> - Guitar (I've Been Waiting For You)</p>
                      <p>• <strong>Carlos Alomar</strong> - Guitar (Everyone Says 'Hi')</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 보너스 디스크 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">DISC 2 - 보너스 트랙 (초회한정반)</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="space-y-2 text-sm">
                    <p>1. <strong>Sunday (Moby Remix)</strong></p>
                    <p>2. <strong>A Better Future (Remix by Air)</strong></p>
                    <p>3. <strong>Conversation Piece</strong> (1969년 작곡, 1970년 녹음, 2002년 재녹음)</p>
                    <p>4. <strong>Panic In Detroit</strong> (1979년 녹음 아웃테이크)</p>
                  </div>
                </div>
              </div>

              {/* 커버곡 상세 분석 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">3곡의 리메이크 곡 분석</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-l-4 border-purple-400">
                    <h5 className="font-bold text-purple-700 mb-2">Cactus - The Pixies</h5>
                    <p className="text-sm">
                      픽시스의 1988년 앨범 <strong>Surfrosa</strong>의 수록곡으로 <strong>Black Francis (aka Charles Thompson)</strong>의 작품입니다. 
                      다들 아시다시피 픽시스의 대표곡 중 하나죠.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border border-l-4 border-blue-400">
                    <h5 className="font-bold text-blue-700 mb-2">I've Been Waiting For You - Neil Young</h5>
                    <p className="text-sm">
                      <strong>닐 영</strong>의 작품으로, 1968년에 그의 동명 타이틀 앨범에 실렸으며, 후에 픽시스에 의해서도 리메이크되었습니다. 
                      또한 이 곡은 데이빗 보위의 <strong>Tin Machine 시절의 라이브 투어</strong>였던 'It's My Life'에서 불려지기도 했으며, 
                      그 모습은 당시의 기록을 담은 비디오 <strong>'Oy Vey Baby'</strong>에서 확인할 수 있습니다.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border border-l-4 border-green-400">
                    <h5 className="font-bold text-green-700 mb-2">(I Took A Trip On) A Gemini Spaceship - Legendary Stardust Cowboy</h5>
                    <p className="text-sm">
                      <strong>Norman Carl Odam (aka The Legendary Stardust Cowboy)</strong>의 작품으로, 
                      이번 앨범의 리메이크를 위해서 그가 직접 가사를 수정하기도 하였다고 합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 싱글 정보 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">첫 번째 싱글: Slow Burn</h4>
                <div className="space-y-3">
                  <p className="text-sm">
                    이번 새 앨범의 첫번째 싱글은 <strong>Slow Burn</strong>으로 미국에서의 발매 계획은 없고, 
                    현재 유럽반만이 두 가지 종류로 발매되었습니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-red-700 mb-2">버전 1</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Slow Burn (Edit)</li>
                          <li>• Wood Jackson (Heathen 세션 아웃테이크)</li>
                          <li>• Shadow Man (미발표 "Toy" 앨범에서)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-red-700 mb-2">버전 2 (CD Maxi)</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Slow Burn (Edit)</li>
                          <li>• Wood Jackson (Heathen 세션 아웃테이크)</li>
                          <li>• Shadow Man (미발표 "Toy" 앨범에서)</li>
                          <li>• When The Boys Come Marching Home</li>
                          <li>• You've Got A Habit (미발표 "Toy" 앨범에서)</li>
                          <li>• Slow Burn (video)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 프로듀서 정보 */}
              <div className="bg-indigo-50 p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-3">프로듀서 및 제작진</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="space-y-2 text-sm">
                    <p><strong>메인 프로듀서:</strong> David Bowie and Tony Visconti (오랜 친구)</p>
                    <p><strong>예외:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• "Afraid" - Mark Plati</li>
                      <li>• "Everyone Says Hi" - Brian Rawling, Gary Miller, Tony Visconti</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 기대평 */}
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">기대평</h4>
                <div className="bg-white p-4 rounded border border-l-4 border-green-400">
                  <p className="text-sm">
                    전작인 <strong>'hours...'</strong>의 진부함을 넘어선 새로운 사운드를 들려줄 수 있을 것인지... 궁금해 지는군요.
                  </p>
                  
                  <p className="text-sm mt-2 font-bold text-green-700">
                    Bowie님의 새 타이틀은 heathen이네요. 기대 기대 *^^*
                  </p>
                </div>
              </div>

              <p className="text-right italic text-gray-600">
                동훈
              </p>
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