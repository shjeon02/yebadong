"use client";
import Link from "next/link";

export default function BancoReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Banco</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">이동훈</span>
              <span className="ml-2 text-sm text-gray-600">totoro78@nuri.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Banco - Manticore Debut 첫 인상</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">최근 감상</h4>
                    <p>
                      최근엔 banco의 manticore debut를 열심히 듣고 있는데요... 정말 좋으네요... *^^* 
                      물론 이태리 록의 *명작*인 darwin!, s/t에 비할 수는 없겠지만요...
                    </p>
                    <p className="mt-2">
                      하지만 3집인 io sono nato libero 보다는 훨씬 안정감이 있고 전체적인 완성도가 뛰어난 수작이네요... 
                      아마도 최근에 재발매된 프로그 계열의 CD들 중에서는 최고인 것 같습니다... ^^
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">Lennon</span>
              <span className="ml-2 text-sm text-gray-600">kylee@ctp.snu.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">질문</h4>
                    <p>
                      앗, 저는 이 앨범이 debut라고 해서 1집을 재발매한 건줄 알았더니 아닌 모양이군요. 
                      조금만 더 자세히 소개해 주시기 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">이동훈</span>
              <span className="ml-2 text-sm text-gray-600">totoro78@nuri.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">Manticore Debut 앨범 설명</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">앨범 정보</h4>
                    <p>
                      네에... 방코의 manticore debut 앨범은 본국에서의 3집 발표 후... 75년도 영국에서의 데뷔작이라고 할 수 있습니다.
                    </p>
                    <p className="mt-2">
                      전체적인 수록곡은 1집(s/t), 3집(io sono nato libero)의 곡들을 재편곡, 재녹음한 것이구요... 
                      두 곡의 신곡이 추가로 삽입되어 있습니다.
                    </p>
                    <p className="mt-2">
                      녹음 상태는 이태리 판보다 월등하구요... 개인적으로는 새로 녹음된 1집의 수록곡들이 매우 우수하다고 생각합니다...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <div className="flex items-center mb-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">이동훈</span>
              <span className="ml-2 text-sm text-gray-600">totoro78@nuri.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-red-700 mb-2">Banco - Manticore Debut 상세 리뷰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">첫 인상... Banco의 뒤엔 ELP가 있었다...</h4>
                    <p>
                      (marquee에 의해) 다소 평가절하 되었던 본작의 CD화는, 보다 많은 청자에게 공정하고 보편적인 평가의 기회를 가능케 하였습니다. 
                      우선 20bit K2 super coding을 통한 우수한 음질, 원형에 가까운 커버를 재현한 Victor Japan에게 감사의 말을 전합니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">영국 진출의 배경</h4>
                    <p>
                      영국 시장 진출이라는 커다란 사명감을 안고 Banco는 PFM의 뒤를 이어 manticore에서 그들의 데뷔 앨범을 75년에 발표하게 됩니다. 
                      록의 종주국인 영국에서의 첫 발돋움은 쉽지 않았던 것일까요?
                    </p>
                    <p className="mt-2">
                      "우리는 음악 보다는 몸으로 밀고 나가겠다!!"는 헝그리 정신으로... 
                      보컬리스트인 프란체스코는 앨범 홍보를 위해서 급기야는 훌러덩 훌러덩 모든 것을 벗고 던지고 말았습니다.
                    </p>
                    <p className="mt-2 text-xs italic">
                      결국 0.1t은 훨씬 넘을 덩치에 중요한 부분만을 가린채... 뒷 커버를 자랑스럽게 장식하게 됩니다. ^^;;; 
                      (개인적인 생각으로는 차라리 옷을 안벗었더라면 한장이라도 더 팔았을 것 같네요... 
                      john lennon이 벗으면 화제꺼리 정도는 되었겠습니다만... 쩝)
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">ELP의 영향</h4>
                    <p>
                      역시... 만티코어의 주인인 ELP의 영향을 받지 않을 수 없었던 모양입니다... 
                      banco 특유의 어둡고 우울한 분위기, 다소 아방가르드한 색채를 품고 있는 연주 파트, 
                      공격성이 느껴지는 곡 진행위로 흐르는 서정적인 멜로디 등은 여전히 남아 있지만...
                    </p>
                    <p className="mt-2">
                      하지만 이러한 요소들 위에 Keith Emerson적인 건반 연주가 깔려 있습니다... 
                      이태리 판에서는 쉽게 감지할 수 없었던 키스 에머슨의 영향이 묻어나오는 것은 감출 수 없는 사실인 것입니다... 
                      아니... 영향이라기 보다는 취향이랄까요... 아님 모방?
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">음악적 발전</h4>
                    <p>
                      하지만 단순한 모방이라고 하기에는 너무나도 잘 소화해냈기 때문에... 
                      오히려 그러한 점이 장점으로 작용하고 있습니다...
                    </p>
                    <p className="mt-2">
                      어랜지도 좀더 과격인 쪽으로 방향을 틀고 있으며 - 물론 키보드 파트에서 - 
                      녹음 상태는 이태리 판과는 비교도 할 수 없을 정도로 향상되었습니다... 
                      (Victor의 마스터링과도 상관관계가 있으리라 봅니다.)
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">추천 트랙: Metamorphosis</h4>
                    <p>
                      제가 가장 추천하고 싶은 트랙은 1집에 수록된 명곡인 <strong>Metamorphosis</strong>입니다. 
                      아마도 본 작품에 수록된 곡들 중에서 원본과 가장 많은 차이를 보이는 곡일 것입니다.
                    </p>
                    <p className="mt-2">
                      우선 전술한 바와 같이 키스 에머슨에 경도된 키보드는 상당히 들을만 하고, 
                      전체적인 어랜지나 연주, 녹음... 이 모든 것이 원작보다는 세련되어 졌으며, 
                      그 당시의 이태리와 영국의 기술적인 수준의 차이를 그대로 보여주는 단적인 예라 할 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
                    <h4 className="font-medium text-red-800 mb-2">총평</h4>
                    <p>
                      후하... 후하... 정말 오래간만에 "proggy prog" (프로그 다운 프로그)를 만날 수 있게 되어서 정말 정말 좋았답니다... *^^*
                    </p>
                    <p className="mt-2">
                      Banco의 팬들에게는 - 특히 1집을 사랑하시는 - 필청을 요하는 작품이며... 
                      그 외의 이태리 록 팬들에게도 강력 추천합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Banco 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 이탈리아</li>
                  <li><strong>장르:</strong> Progressive Rock, RPI</li>
                  <li><strong>보컬:</strong> Francesco Di Giacomo</li>
                  <li><strong>키보드:</strong> Vittorio Nocenzi</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>어둡고 우울한 분위기</li>
                  <li>아방가르드한 색채</li>
                  <li>공격적인 곡 진행</li>
                  <li>서정적인 멜로디</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>Banco del Mutuo Soccorso</strong> (1972) - 데뷔작 (S/T)
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Darwin!</strong> (1972) - 이태리 록의 명작
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Io Sono Nato Libero</strong> (1973) - 3집
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Banco</strong> (1975) - Manticore Debut, 영국 진출작
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Manticore Debut 특징</h4>
              <div className="text-xs space-y-1">
                <p>• 1집과 3집 곡들의 재편곡, 재녹음</p>
                <p>• 2곡의 신곡 추가</p>
                <p>• Keith Emerson 영향의 키보드 연주</p>
                <p>• 이태리 판보다 월등한 녹음 상태</p>
                <p>• Victor Japan의 20bit K2 super coding</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 곡</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 px-2 py-1 rounded">Metamorphosis</span>
                <span className="bg-blue-100 px-2 py-1 rounded">L'Evoluzione</span>
                <span className="bg-blue-100 px-2 py-1 rounded">750,000 Years Ago</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">특이사항</h4>
              <div className="text-xs space-y-1">
                <p>• PFM의 뒤를 이은 영국 진출</p>
                <p>• 프란체스코의 파격적인 앨범 홍보</p>
                <p>• ELP의 레이블 Manticore 소속</p>
                <p>• "Proggy prog" (프로그다운 프로그)의 대표작</p>
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