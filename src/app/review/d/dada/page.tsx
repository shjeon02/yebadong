"use client";
import Link from "next/link";

export default function DadaReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Dada</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Electronic, Progressive Rock</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">일본</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">주요 앨범</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-lg">Self-Titled (2nd Album)</h3>
              <p className="text-gray-600">KICS 2825</p>
              <div className="mt-2">
                <h4 className="font-medium mb-1">수록곡:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1. Perpetual Motion</li>
                  <li>2. Stainless Mama</li>
                  <li>3. America</li>
                  <li>4. Flying Ship (Part 3)</li>
                  <li>5. A.T.B.</li>
                  <li>6. Jiro's Birthday Party</li>
                  <li>7. Le Soleil d'Arles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 일렉트로니카와 프로그레시브 록의 융합</p>
            <p>• 신시사이저 중심의 사운드</p>
            <p>• Tangerine Dream, Vangelis 등의 영향</p>
            <p>• 반복적이고 최면적인 구조</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">이동훈</h3>
                <span className="text-sm text-gray-500">meddle@nuri.net</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Dada - s/t (2nd, KICS 2825)</h4>
                <div className="text-sm space-y-1">
                  <p><strong>music & sound quality:</strong> ★★★★</p>
                  <p><strong>performance:</strong> ★★★★</p>
                  <p><strong>cover art work:</strong> ★★★★★</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Song List</h4>
                <ol className="list-decimal list-inside text-sm space-y-1">
                  <li>perpetual motion</li>
                  <li>stainless mama</li>
                  <li>america</li>
                  <li>flying ship (part. 3)</li>
                  <li>a.t.b.</li>
                  <li>jiro's birthday party</li>
                  <li>le soleil d'arles</li>
                </ol>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  다다의 2집은 가벼운 씬스팝? brainless electronics?
                  1집보다 현저하게 음악성이 떨어진다?
                  분명 dada의 2집은 1집을 사랑했던 프록 매니어들의
                  외면을 받기에 충분하다. 왜냐하면 앨범 전면을 가벼운
                  씬스팝 사운드로 도배했으며, 아름다운 플룻, 코러스와
                  오케스트레이션의 웅장함을 묘사한 멜로트론도 절대
                  등장하지 않는다. (멜로트론의 부재는 아트록 매니어들
                  에겐 "그때의 향수"를 빼앗기는 것과 같다.)
                </p>
                
                <p>
                  하지만 다다의 두 주인공인 mutsuhiko izumi & kenji konishi가
                  연주하는 더블 synthesizer에서 뿜어져 나오는 소리는
                  매우 강렬한 호소력을 지닌 것이다. 또한 신디자이져,
                  기타, 노이즈 (크레딧에는 바이얼린이 쓰인다고 하지만
                  주요 악기는 아니다.) 이렇게 간단한 3가지의 악기'군'
                  만을 가지고도 완성도 깊은 음악이 나올 수 있다는 것이
                  신기할 뿐이다.
                </p>

                <p>
                  1번, perpetual motion... 영구적인 움직임? 마찰없는
                  바닥에 쇠공 굴리는건가? 어쩌면 이 곡의 제목이
                  모든 것을 말해주고 있는건 아닐까? 일렉트로닉스와
                  평생 계속 될 것 같은 반복적인 소리들...
                </p>

                <p>
                  3번, america. 개인적으로 매우 좋아하는 곡이다.
                  후반기 탠저린 드림의 뉴에지적인 음과 상통하는 면이
                  많다.
                </p>

                <p>
                  7번, le soleil d'arles는 전형적인 중반기 반젤리스 풍의
                  곡이다. 다른 곡들이 전반적으로 "신나는" (^^;;;) 씬스팝이기
                  때문에, 이 곡은 상당히 독특하게 들린다. 다른 일렉트로닉스
                  들이 그렇듯이 반복되는 구조와 상승되는 음의 전개...
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - 이동훈
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/d" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 