import Link from "next/link";

export default function AlusaFallax() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Alusa Fallax</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Fish (신인철)</span>
              <span className="ml-2 text-sm text-gray-600">icshin@chiak.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">임홍근님의 리뷰 (미국 거주)</h3>
                <p className="text-sm leading-relaxed mb-3">
                  Followings are the brief review of Alusa Fallax I mentioned yesterday by Hong Geun Im, a Korean netter in the States. 
                  He has a very deep appreciation of '70s Italian prog.
                </p>
                
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-800 mb-2">Alusa Fallax - Intorno Alla Mia Cattiva Educazione</h4>
                  <div className="text-sm space-y-3">
                    <p>
                      Another Italian gem recently released by Mellow. Since my latest surprise by 'Campo di Marte', 
                      once again I thank Manuro Moroni for digging out hidden treasures.
                    </p>
                    
                    <div className="bg-white p-3 rounded border-l-2 border-blue-300">
                      <h5 className="font-medium text-blue-700 mb-2">앨범 정보</h5>
                      <ul className="space-y-1 text-xs">
                        <li><strong>발매:</strong> Mellow Records 재발매</li>
                        <li><strong>구성:</strong> 5인조 그룹</li>
                        <li><strong>시대:</strong> Mid 70's 추정</li>
                        <li><strong>러닝타임:</strong> 약 45분 (이탈리아 앨범으로는 이례적)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded border-l-2 border-green-300">
                      <h5 className="font-medium text-green-700 mb-2">음악적 특징</h5>
                      <p className="text-xs">
                        Mellow Records' catalog compares it to Banco and Il Volo, but not at all to me. I would say first it can be classified as symphonic in generic terms. 
                        The music goes back and forth between standard Italian ballads to somewhat complex interplay among flute, sax, guitars, like the best of Osanna (but not as heavy though).
                      </p>
                      <p className="text-xs mt-2">
                        Some songs are indeed very mellow and melancholy ballads with multiple layers of background synth, very nicely done nevertheless. 
                        Voice is quite a standard Italian style similar to Locanda.
                      </p>
                    </div>
                    
                    <div className="bg-white p-3 rounded border-l-2 border-yellow-300">
                      <h5 className="font-medium text-yellow-700 mb-2">평가</h5>
                      <p className="text-xs">
                        Most importantly (to me), the entire composition structure is coherent, and even the most complex passages never go nowhere. 
                        Perhaps one of the best reissue in 94. <strong>Strongly recommended for Italian addicts.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Budgie (이훈구)</span>
              <span className="ml-2 text-sm text-gray-600">hglee@fdcl.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">개인적 구매 경험 및 감상</h3>
                <p className="text-sm leading-relaxed">
                  예전에 Fish 형이 포워딩해서 보내준 메일중에 미국에 계신 임홍근님이 Alusa Fallax의 음악을 아주 칭찬했고, 
                  또 여러분들이 칭찬해 주신 기억이 있었는데, 어제 우연히 대학로에서 헤메던중, 바로크에서 이들의 음반(Mellow 판이군요)이 보여서 
                  18,000원의 거금을 들여 눈 딱감고 샀습니다. (커피 한잔 더 먹은셈 치고서요)
                </p>
                
                <div className="mt-3 bg-green-50 p-3 rounded">
                  <h4 className="font-medium text-green-800 mb-2">첫 감상 소감</h4>
                  <p className="text-sm">
                    와, 그런데 음악 정말 깔끔하고 좋군요. 마치 예전에 처음 Museo Rosenbach를 들을때의 감동, 
                    실제 중반부의 E Oggi 부분을 들을때는 짜라투스트라와 매우 비슷한 멜로디가 들리기도 하더군요.
                  </p>
                </div>
                
                <div className="mt-3 bg-green-50 p-3 rounded">
                  <h4 className="font-medium text-green-800 mb-2">음악적 비교</h4>
                  <p className="text-sm">
                    아뭏든 전체적으로 Flute과 Keyboard가 어우러지고, 보컬 스타일도 Museo Rosenbach의 그것과 많이 닮아 있는 느낌입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Alusa Fallax 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 이탈리아</li>
                  <li><strong>구성:</strong> 5인조</li>
                  <li><strong>시대:</strong> 1970년대 중반</li>
                  <li><strong>재발매:</strong> Mellow Records</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>심포닉 프로그레시브 록</li>
                  <li>Flute, Sax, Guitar의 복합적 연주</li>
                  <li>Museo Rosenbach 스타일 보컬</li>
                  <li>멜랑콜리한 발라드와 복잡한 구성의 조화</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 작품</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded flex justify-between">
                  <span><strong>Intorno Alla Mia Cattiva Educazione</strong></span>
                  <span className="text-green-600">★★★★★ (94년 최고의 재발매 중 하나)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">유사 아티스트</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 px-2 py-1 rounded">Museo Rosenbach</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Osanna</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Locanda delle Fate</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Campo di Marte</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 