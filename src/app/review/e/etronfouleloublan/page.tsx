"use client";
import Link from "next/link";

export default function EtronFouLeloublanPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Etron Fou Leloublan</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 프랑스
            </div>
            <div>
              <span className="font-semibold">장르:</span> 아방가르드 록, RIO
            </div>
            <div>
              <span className="font-semibold">구성:</span> 드럼, 베이스, 섹스폰
            </div>
            <div>
              <span className="font-semibold">특징:</span> Henry Cow와 합동 공연 경력
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">Ork-Man (장민수)</span>
                <span className="text-sm text-blue-600">jangms@mobi.etri.re.kr</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">밴드 소개 및 음악적 특징</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  마그마의 음악에 매료된 이후, 크리스티앙 반데의 생각과 음악을 통해 그가 표현하려 했던 내용이 무엇이었는지를 조금이나마 알게 되면서 마그마의 음악을 대하는 새로운 즐거움을 가지게 되었던 것처럼, 무작정 대했던 RIO 스타일의 음악도 처음의 일시적인 호기심을 벗어나 약간이나마 이해의 길을 터가면서 새로이 즐거움을 가지게 되는 요즘입니다.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Etron Fou Leloublan</strong>은 프랑스의 락그룹으로서 처음 RIO가 영국에서 구성될 때 공연 멤버로 참가한 경력을 가지고 있습니다. RIO 이전에도 Henry Cow와 합동 공연을 한 적도 있구요.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">음악적 특징</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• 드럼과 베이스, 그리고 섹스폰으로 이루어진 단촐한 구성</li>
                  <li>• 마치 구호를 외치는 듯한 Ferdinand Richard의 특이한 보컬</li>
                  <li>• 리듬 위주의 '에너제틱' 락</li>
                  <li>• 프리 재즈에 바탕을 둔 자유분방한 섹스폰 연주</li>
                  <li>• 멜로디가 들어설 자리는 전혀 없음</li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                악기 구성상 음악은 마치 뼈대만 갖춘 듯이 빈틈이 많습니다. (처음 들을때, '아니 이게 다야??' 라고 생각했음.) 역시 이들의 연주를 온전히 감상하는 길은 실제 이들의 공연에 가보는 수밖에 없겠네요.
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">추천 앨범</h4>
                <p className="text-gray-700 leading-relaxed">
                  이들의 앨범은 프랑스에서 발매된 <strong>"43 Songs"</strong>라는 CD 세장짜리 앨범으로 접하실 수 있습니다. 이들이 발매한 다섯장의 LP를 모아놓은 좋~~은 앨범이지요. 많이 더 들어봐야할 앨범입니다.
                </p>
                <p className="text-sm text-gray-600 mt-2">[Contact: Wayside Music]</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">디스코그래피 (1995년 4월 1일 기준)</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-gray-800">Batelanges (1977)</h4>
                <p className="text-sm text-gray-600">Gratte-Ciel 2001, LP</p>
                <div className="mt-2 text-sm text-gray-700">
                  <p><strong>Face 1:</strong> Lamulette et le petit rabbin, Sololo Brigida, Yvett Blouse</p>
                  <p><strong>Face 2:</strong> Madame Richard, Larika, Histoire de Graine</p>
                </div>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-gray-800">Les 3 fous Perdegagnent (1978)</h4>
                <p className="text-sm text-gray-600">Tapioca 10020, LP / 9h17 7001, LP</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-gray-800">En Direct Des Etats-Unis d'Amerique (1979)</h4>
                <p className="text-sm text-gray-600">Celluloid CEL 6572, LP</p>
                <p className="text-sm text-gray-500">[unavailable yet]</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-gray-800">Les Poumons Gonfles (1982)</h4>
                <p className="text-sm text-gray-600">Turbo Music TMSA 3301, LP</p>
                <p className="text-sm text-gray-700 mt-1">Fred Frith 참여 (violin, guitar)</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-gray-800">Les Sillons De La Terre (1984)</h4>
                <p className="text-sm text-gray-600">Le Chant Du Monde LDX 74813, LP</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="font-semibold text-gray-800">Face Aux Elements Dechaines (1985)</h4>
                <p className="text-sm text-gray-600">RecRec 08, LP</p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-blue-800">43 Songs (1991) ⭐ 추천</h4>
                <p className="text-sm text-gray-600">Baillemont CD 929, 3CDs</p>
                <p className="text-sm text-gray-700 mt-1">이들이 발매한 다섯장의 LP를 모아놓은 컴필레이션</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 