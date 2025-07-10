import Image from "next/image";

export default function StarsailorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Starsailor
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              성간항해자의 새로운 어쿠스틱 사운드 록
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">앨범 정보</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-300">밴드:</span>
                    <p className="text-white">Starsailor</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">앨범:</span>
                    <p className="text-white">Love Is Here</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">발매:</span>
                    <p className="text-white">2001년 9월</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">레이블:</span>
                    <p className="text-white">EMI (2000년 10월 계약)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">국가:</span>
                    <p className="text-white">영국</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">장르:</span>
                    <p className="text-white">New Acoustic Sound Rock</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">밴드 멤버</h2>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-300">James Walsh:</span> Vocals, Guitar</p>
                  <p className="text-gray-400 text-xs ml-4">심장 건강에 매우 좋지 않은 목소리를 가진 보컬</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-400">평가 점수</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">★★★★☆</div>
                  <p className="text-gray-300">이 시대가 인정한 소인</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Progression */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">밴드 성장 과정</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">2000년 10월</h3>
                <p className="text-gray-300 text-sm">메이저 레이블 EMI와 계약</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">검증 단계</h3>
                <p className="text-gray-300 text-sm">단 두 장의 싱글로 음악성과 그룹의 미래를 검증받음</p>
                <ul className="text-xs text-gray-400 mt-2">
                  <li>• "Fever"</li>
                  <li>• "Good Soul"</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">2001년 9월</h3>
                <p className="text-gray-300 text-sm">데뷔 앨범 "Love Is Here" 발매</p>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">음악적 특징</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">새로운 브릿팝의 흐름</h3>
                <p className="text-gray-300 mb-2">
                  예전의 블러(Blur)와 오아시스(Oasis)로 인식되던 브릿팝과는 조금 기울기를 달리하는 
                  <span className="font-semibold text-blue-400">"새로운 어쿠스틱 사운드 록"</span>의 조류
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">보컬의 특징</h3>
                <p className="text-gray-300 mb-2">
                  James Walsh의 목소리는 <span className="font-semibold text-red-400">"심장 건강에 매우 좋지 않은"</span> 특징을 가지고 있습니다.
                </p>
                <blockquote className="text-gray-400 italic text-sm bg-gray-900 rounded-lg p-3">
                  "어딘지 울음을 억지로 눌러 참아내다 못해 목이 메어 숨조차 턱 막힌, 
                  호흡 곤란한 거북함이 물씬 스며 있습니다. 더욱 불행히 시종일관."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Literary Review Style */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">문학적 리뷰</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">리뷰어의 복잡한 감정</h3>
                <blockquote className="text-gray-300 italic">
                  "그럼에도 불구하고 숨을 몰아쉬어 가며 이들의 음반을 듣고 있는 내 자신은 
                  아마도 제임스 James Walsh(vo.g)와 같은 심장 건강에 매우 좋지 않은 목소리를 좋아하나 봅니다."
                </blockquote>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-purple-400">계절과 감정</h3>
                <blockquote className="text-gray-300 italic">
                  "이제 겨우 태어난지 두 달 남짓된 신생아적인 앨범 한 장에 
                  이렇듯 복잡다난한 감정에 골몰하는 것을, 
                  단순히 가을이란 계절탓으로 돌릴 수만 있다면 
                  오늘 하루는 술로 보내지 않아도 되련만."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Album Artwork Analysis */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">앨범 아트워크 해석</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">아득한 지평선의 철로</h3>
              <p className="text-gray-300 mb-3">
                "아득한 지평선을 향해 끝없이 평행하게 이어진 철로를 담아낸 아름다운 앨범 재킷을 들여다보면서"
              </p>
              <blockquote className="text-gray-400 italic text-sm border-l-4 border-purple-400 pl-4">
                "웬지 카메라의 시선은 현재 나아가고 있는 방향이 아닌, 
                이미 지나쳐온 곳을 지긋이 향하고 있다는 느낌이 들었습니다."
              </blockquote>
              <p className="text-gray-300 text-sm mt-3">
                그 시선은 제프 버클리(Jeff Buckley)에 대한 경의이며, 
                성간항해자 Starsailor가 바라보는 원점, 인류의 고향이자 모든 것의 근원인 복잡한 의미의 "지구"
              </p>
            </div>
          </div>

          {/* Track Listing */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">트랙 리스트</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">1.</span> Tie Up My Hands</p>
                <p><span className="font-semibold">2.</span> Poor Misguided Fool</p>
                <p><span className="font-semibold">3.</span> Alcoholic</p>
                <p><span className="font-semibold">4.</span> Lullaby</p>
                <p><span className="font-semibold">5.</span> Way To Fall</p>
                <p><span className="font-semibold">6.</span> Fever</p>
              </div>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">7.</span> She Just Wept</p>
                <p><span className="font-semibold">8.</span> Timeless</p>
                <p><span className="font-semibold">9.</span> Good Souls</p>
                <p><span className="font-semibold">10.</span> Love Is Here</p>
                <p><span className="font-semibold">11.</span> Coming Down</p>
              </div>
            </div>
          </div>

          {/* Jeff Buckley Influence */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">제프 버클리의 영향</h2>
            <div className="bg-purple-900 bg-opacity-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">성간항해자의 지향점</h3>
              <p className="text-gray-300 mb-3">
                Starsailor의 음악이 지향하는 점은 <span className="font-semibold text-blue-400">제프 버클리(Jeff Buckley)</span>에 대한 경의입니다.
              </p>
              <p className="text-gray-300 text-sm">
                이미 드넓은 우주로 항해를 시작한 그들이 바라보는 원점, 
                인류의 고향이자 모든 것이 근원인 복잡한 의미의 "지구"를 향한 시선
              </p>
            </div>
          </div>

          {/* Reviewer's Conclusion */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰어의 마무리</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-300 italic text-center">
                <span className="font-semibold text-blue-400">코헨 이영진 드림</span>
              </p>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">최종 평가</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 mb-4">
                Starsailor의 데뷔 앨범 "Love Is Here"는 새로운 세대의 브릿팝이 추구하는 방향을 보여주는 작품입니다. 
                전통적인 Blur나 Oasis와는 다른 "새로운 어쿠스틱 사운드 록"의 조류를 대표하며, 
                James Walsh의 독특하고 감성적인 보컬이 앨범 전체를 관통하는 핵심 요소입니다.
              </p>
              <p className="text-gray-200">
                제프 버클리에 대한 경의와 복잡한 감정적 깊이를 담고 있는 이 앨범은, 
                리뷰어의 문학적 표현처럼 <span className="font-semibold text-blue-400">"이 시대가 인정한 소인이 찍혀 보내져온 소포물"</span>로서, 
                호흡 곤란할 정도로 절절한 감정을 담고 있는 성간항해자들의 첫 번째 메시지입니다.
              </p>
            </div>
          </div>

          {/* Review Credits */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰 크레딧</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">리뷰어:</span> 코헨 이영진</p>
              <p><span className="font-semibold">특징:</span> 문학적이고 감성적인 리뷰 스타일</p>
              <p><span className="font-semibold">영향:</span> 제프 버클리에 대한 경의 표현</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <a 
              href="/review/s/strawbs" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ← Strawbs
            </a>
            <a 
              href="/review/s" 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S 목록으로
            </a>
            <a 
              href="/review/s/steensland" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Steensland →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 