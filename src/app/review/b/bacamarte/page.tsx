"use client";
import Link from "next/link";

export default function BacamarteReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Bacamarte</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">임선희</span>
              <span className="ml-2 text-sm text-gray-600">homilbat@hanmail.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Bacamarte - Depois do fim 앨범 리뷰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">첫 인상과 계절</h4>
                    <p>
                      대한도 지나고 입춘이 다가오는데, 날씨는 시간을 역행하는 듯 춥기만 하군요. 
                      올겨울은 독감이 장난이 아니라던데, 모두들 감기 조심하시기 바랍니다.
                    </p>
                    <p className="mt-2">
                      몇 주전에 산 Bacamarte의 <strong>'Depois do fim'</strong> 앨범을 요즘 계속 듣고 있는데, 
                      한 곡도 흠잡을 수 없이 다 좋습니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">앨범 자켓 분석</h4>
                    <p>
                      도대체 무슨 내용을 담고 있을까 하며 궁금해 하니 친구가 앨범 자켓을 보더니 
                      '숫자는 십계명을 상징하고, 그 옆의 여자는 마리아를 상징하는게 아닐까'라 말하더군요.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded border-l-2 border-yellow-300">
                      <p className="text-xs">
                        <strong>자켓 설명:</strong><br/>
                        • <strong>Front Cover:</strong> 한밤 중 동굴에서 한 남자가 바위에 로마숫자 1-6을 새기고 7을 새기고 있으며, 임신한 듯한 여자가 지켜보는 장면<br/>
                        • <strong>Back Cover:</strong> 날이 밝은 후 두 사람은 사라지고 장작불 흔적과 바위에 10까지 완성된 숫자가 새겨진 동굴
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">가사 번역 시도</h4>
                    <p>
                      그런가 보다 하다가 궁금증을 못이기고 결국 가사를 번역하기로 결정, 번역을 하는데, 
                      결론부터 말하면 번역이 아니라 해석이 되어버렸습니다.
                    </p>
                    <p className="mt-2">
                      포르투갈어를 영어로 번역해주는 사이트를 이용해서 번역시도를 했는데, 
                      단어가 잘못 번역되는가 하면, 순서가 엉망으로 바뀌어 문법적으로 맞지 않는 번역이 나오더라구요.
                    </p>
                    <p className="mt-2">
                      그래도 그런대로 때려맞추기 해석을 하고나니 역시나 카톨릭과 관련된 내용이더군요. 
                      앨범타이틀이기도 한 <strong>depois do fim</strong>은 '끝 후'란 뜻으로 성경에서 말하는 심판의 날 이후를 뜻합니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">트랙 리스트 및 내용 분석</h4>
                    <p className="mb-3">총 9곡 중 4개 곡만 가사를 담고 있는데, 트랙리스트를 나열하면서 간략하게 내용을 설명하자면:</p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">1.</span>
                        <span className="font-medium">UFO</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">2.</span>
                        <div>
                          <span className="font-medium">Smog winged</span>
                          <p className="text-gray-600 mt-1">기계화단계를 거치면서 발생한 환경오염으로 인해 피폐화된 세계에 관한 묘사</p>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">3.</span>
                        <span className="font-medium">Miragem</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">4.</span>
                        <div>
                          <span className="font-medium">Passaro de luz</span>
                          <p className="text-gray-600 mt-1">세계에 다시 평화를 주기 위해 구원의 손길(아기예수)이 하늘에서 내려옴</p>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">5.</span>
                        <span className="font-medium">Cano</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">6.</span>
                        <div>
                          <span className="font-medium">Ultimo entardecer</span>
                          <p className="text-gray-600 mt-1">아기예수의 희생으로 인해 세상이 구원받아 생명이 다시 싹트기 시작하고, 버림받은 영혼들이 구제받음</p>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">7.</span>
                        <span className="font-medium">Controversia</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">8.</span>
                        <div>
                          <span className="font-medium">Depois do fim</span>
                          <p className="text-gray-600 mt-1">예수의 희생을 슬퍼하며, 이런 일이 다시 발생하지 않도록 그에 관한 기록을 남겨야 한다는 내용</p>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">9.</span>
                        <span className="font-medium">Mirante das estrelas</span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs italic">
                      쓰고 나니 평가절하현상이 발생하는 듯한데, 만약 아니다 생각되시는 분은 즉시 이의를 제기하시기 바랍니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">밴드 소개 및 음악적 특징</h4>
                    <p>
                      <strong>Bacamarte</strong>(장총-김기태님이 알려줌 : 아직도 저 CD 못 받았어요.ㅠ.ㅠ)는 
                      브라질에서 빼놓을 수 없는 뛰어난 prog band 중 하나입니다.(아시는분들은 다 아시겠지만)
                    </p>
                    <p className="mt-2">
                      기타를 맡고 있는 <strong>Mario Neto</strong>는 이 앨범에서 일렉트릭, 클래식, 어쿠스틱 기타를 
                      스치는 듯 믿을 수 없이 빠른 속도로 연주를 하는데, 그렇다고 이 앨범이 기타가 전반적으로 이끄는 앨범이라고 볼 수 없는 것이 
                      그 기타 연주와 잘 어울어진 바로크 스타일의 플롯연주와 PFM에서 영향받은 키보디스트, 베이시스트가 
                      클래식컬한 사운드층을 이루어 내는데 큰 역할을 하기 때문입니다.
                    </p>
                    <p className="mt-2">
                      또한 빼놓을 수 없는 여성보컬 <strong>Jane Duboc</strong>의 목소리도 가히 환상적입니다. 
                      이 앨범이 그들의 최초앨범이자 자주제작앨범이라는 사실이 더욱 놀랍게 만듭니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
                    <h4 className="font-medium text-red-800 mb-2">추천</h4>
                    <p>
                      수록곡 중 가장 좋다고 생각되는 <strong>Depois do fim</strong>은 RMP3에 올라와 있으니, 
                      아직 못 들어보신 분들은 꼭 다운 받아서 들어보시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Bacamarte 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 브라질</li>
                  <li><strong>장르:</strong> Progressive Rock, Symphonic Prog</li>
                  <li><strong>기타:</strong> Mario Neto</li>
                  <li><strong>보컬:</strong> Jane Duboc (여성)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>바로크 스타일의 플루트 연주</li>
                  <li>PFM 영향을 받은 클래식컬한 사운드</li>
                  <li>다양한 기타 연주 (일렉/클래식/어쿠스틱)</li>
                  <li>카톨릭적 종교 테마</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="bg-white p-2 rounded">
                <strong>Depois do fim</strong> (1983) - 데뷔작이자 자주제작 앨범, 9곡 수록
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">앨범 테마</h4>
              <div className="text-xs space-y-1">
                <p>• <strong>의미:</strong> "Depois do fim" = "끝 후" (심판의 날 이후)</p>
                <p>• <strong>내용:</strong> 환경오염 → 구원 → 희생 → 기록의 과정</p>
                <p>• <strong>종교적 상징:</strong> 십계명, 마리아, 아기예수의 희생</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 곡</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-purple-100 px-2 py-1 rounded">Depois do fim</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Passaro de luz</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Ultimo entardecer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/b" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 