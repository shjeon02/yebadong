"use client";
import Link from "next/link";

export default function FliedEggPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Flied Egg</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 일본
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">앨범:</span> Dr. Siegel's Flied Egg Shooting Machine
            </div>
            <div>
              <span className="font-semibold">특징:</span> 일본 프로그레시브 록 초기 개척자
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">이동훈 (meddle@nuri.net)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Dr. Siegel's Flied Egg Shooting Machine</h3>
            <div className="prose max-w-none">
              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">앨범 평점</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>Music: ★★★</li>
                  <li>Sound: ★★</li>
                  <li>Performance: ★★★★ (3.5/4)</li>
                  <li>Cover Art Work: ★ (poor)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">트랙 리스트</h4>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. dr. siegel's flied egg shooting machine</li>
                  <li>2. rolling down the broadway</li>
                  <li>3. i love you</li>
                  <li>4. burning fever</li>
                  <li>5. plastic fantasy</li>
                  <li>6. 15 seconds of schizophrenic sabbath</li>
                  <li>7. i am gonna see my baby tonight</li>
                  <li>8. one-oka</li>
                  <li>9. someday</li>
                  <li>10. guide me to the quietness</li>
                </ol>
              </div>

              <div className="bg-green-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-green-800 mb-2">멤버 구성</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li><strong>Shigeru Narumo:</strong> guitar, acoustic guitar, Hammond organ, piano, moog, harpsichord, celesta, vocal, distorted organ, sound effect, toy instrumental, equalized vocal</li>
                  <li><strong>Hiro Tsunoda:</strong> drum, percussion, lead vocal, high boosted vocal harmony, toy inst., jokes, noise</li>
                  <li><strong>Masayoshi Takanaka:</strong> bass g, bowing g, acoustic g, vocal, vocal harmony, toy inst.</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Flied Egg의 모토는 무엇일까? 이들은 어떤 음악을 하려고 했던 것인가? 아마도 British Rock Copy가 아닐까요? 
                이들의 음악을 들으면 70년대 초반에 일본에서 유행했던 브리티시 록 음악을 꿰뚫어볼 수 있습니다.
              </p>

              <div className="bg-indigo-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-indigo-800 mb-2">브리티시 록 카피 분석</h4>
                <ul className="text-sm text-indigo-700 space-y-2">
                  <li><strong>[one-oka]:</strong> ELP의 Tarkus를 닮은 곡, 키스 에머슨의 작렬하는 키보드 스타일</li>
                  <li><strong>[plastic fantasy]:</strong> King Crimson의 최반기 곡인 Epitaph의 감동을 '어느 정도' 느낄 수 있음</li>
                  <li><strong>[i love you]:</strong> string part가 가미된 브리티시 pop 사운드</li>
                  <li><strong>동명 타이틀 곡:</strong> The Beatles가 초반기에 보여준 pop 스타일</li>
                  <li><strong>[burning fever]:</strong> 강력한 Led Zeppelin의 사운드</li>
                  <li><strong>[guide me to the quietness]:</strong> 거의 Rare Bird 커버</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                나쁘게 말한다면 철저한 British copy band이죠. 하지만 Japan rock early-era에서는 - 다른 나라도 마찬가지이지만 - 
                독자적인 노선을 걷는다는 것이 매우 어려운 일이었을 것이고, 우선 모방의 단계를 거쳐야 했었을 겁니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                다른 국가들을 살펴볼까요? Italia에서는 록 초반기에 beat 그룹들이 있었고, 오스트리아에서는 70년대 초반에 
                Eela Craig가 플로이드, 크림슨, 이엘피를 마구 뒤섞은 음악을 했었고, 우리나라도 크게 다른 상황은 아니었죠.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                이런 관점에서 본다면, 일본의 Flied Egg는 다른 어떤 나라의 밴드보다도 뛰어납니다. 
                말 그대로 "철저"하게 "카피"를 했으니까요. 따라서 창조를 가장한 가증스런 카피와는 차원이 다릅니다. 
                이런 밴드가 J-Rock 초반기에 있었기에... 오늘날의 독자적인 음악적 노선을 추구하는 후배 밴드들이 탄생할 수 있는 것입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                저는 웬만하면 카피된 음악에는 절대 높은 점수를 주지 않지만 Flied Egg의 경우 <strong>highly recommended!!</strong> 입니다. 
                브리티시 록을 색다르게 접해보고 싶으신 분들, 일본 록 음악사에 관심이 많으신 분들은 "필청"해야 할 음반입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                참고로 이들의 2집인 Good-bye는 라이브 앨범으로, 음질은 많이 떨어지는 편이지만 많은 영국 밴드의 음악을 연주해주고 있습니다. 
                또한 Flied Egg의 전신인 Strawberry Path는 상당히 말랑말랑한 음악을 들려주고 있는데... 이는 다음에 리뷰를 하도록 하겠습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 