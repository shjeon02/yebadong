"use client"

import Link from "next/link"

export default function RollingStonesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Rolling Stones</h1>
            <p className="text-lg text-gray-600">Their Satanic Majesties Request (1967) - 영국 싸이키델릭의 도화선</p>
          </div>

          {/* Review */}
          <div className="space-y-8">
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div className="flex items-center mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Neo-Zao 김남웅</span>
                <span className="ml-3 text-sm text-gray-600">http://jean.iml.goldstar.co.kr/~zao/zao.html</span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Their Satanic Majesties Request - Rolling Stones (1967)</h3>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">1967년, 사랑과 평화의 정점</h4>
                      <p>
                        예바동엔 마음속으로 자신히 <strong>플라워칠드런</strong>이 아닐까 하시는 분들이 꽤 많다고 생각됩니다만.. 
                        혹시 저의 단순한 생각만은 아니겠죠? 1967년은 사랑과 평화의 정점이었던 해였던 만큼 록계에는 내용의 훌륭함을 떠나서 
                        그 자체로 <strong>'시금석'격의 앨범</strong>이 여러장 나왔던 해입니다.
                      </p>
                      
                      <div className="mt-3">
                        <h5 className="font-medium mb-2">1967년 대표적인 앨범들:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-xs">
                          <li>페퍼상사의 꿀꿀한 놈들 모임의 밴드 - 딱정벌레들</li>
                          <li>악마대왕님들께서 원하신다. - 구르는 돌들</li>
                          <li>디즈레일리 기어즈 - 크림</li>
                          <li>너 해 보았니? - 지미헨드릭스</li>
                          <li>프로콜 하럼 - 프로콜 하럼</li>
                          <li>여명의 문에 선 풍각쟁이 - 핑크 플로이드</li>
                          <li>지나간 미래의 나날들 - 꿀꿀한 블루스</li>
                        </ol>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">싸이키델릭이라는 세계적 현상</h4>
                      <p>
                        위에 나열한 앨범들은 또 한가지 공통점을 가지고 있는데 그 것은 바로 <strong>"싸이키델릭"</strong>이라는 텍스트를 공유하고 있는 것이죠. 
                        간단한 증거로 앨범재킷을 들 수 있는데 대부분의 재킷들이 당시의 히피문화를 상징하는 <strong>"싸이키델릭 아트"</strong>의 형태를 취하고 있습니다.
                      </p>
                      <p className="mt-2">
                        실상 60년대 중후반의 소위 메이저 밴드들을 비롯한 많은 밴드들이 싸이키적 요소가 강한 곡들을 앨범에 넣었는데 
                        이는 특별히 당시의 밴드들이 음악적으로 뛰어나다거나 시대를 앞서가는 스피릿을 소유해서가 아닙니다. 
                        당시 <strong>싸이키델릭이란 하나의 세계적으로 싱크로나이즈된 현상</strong>이었기 때문입니다.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">비틀즈와의 비교</h4>
                      <p>
                        어쨋거나 영국 싸이키델릭의 도화선을 당긴 앨범은 비틀즈와 롤링스톤즈의 앨범이라고 알려져 있죠. 
                        그러나 롤링스톤즈의 앨범이 비틀즈보다 평가를 못받고 있는 이유는?? <strong>한 마디로 작품의 질이 비틀즈의 그 것에 미치지 못한다</strong>고 밖에는 말할 수 없겠군요.
                      </p>
                      <p className="mt-2">
                        하지만 여기서 한번 더 '역접'의 묘미를 더해서.. <strong>동시대의 베스트에 가려진 버금의 미학</strong>을 간과할 수 없겠죠.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-800 mb-2">주요 트랙들과 비틀즈와의 대응</h4>
                      <ul className="space-y-2">
                        <li><strong>"She's A Rainbow":</strong> Beatles의 'She's Leaving Home'에 해당, Nicky Hopkins의 깔끔한 피아노와 관현의 조화가 아름다운 곡</li>
                        <li><strong>"2000Man", "Gomper", "2000 Light Years From Home":</strong> 트립상태를 음악적으로 표현한 'Lucy In The Sky With Diamond', 'A Day In The Life'에 해당하는 곡들</li>
                      </ul>
                      <p className="mt-2">
                        사운드적으로 설명을 하자면 관중의 환호성과 함께 시작하는 비틀즈의 앨범과 너무나도 비슷하게 효과음을 사용하여 앨범이 시작하여, 
                        <strong>음산한 멜로트론</strong>이 등장하기도 하고 Ethnic한 분위기도 내주기도 하여 이 앨범이 과연 롤링 스톤즈의 것인가 하는 의문이 들기도 합니다.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">1967년, 마약으로 얼룩진 해</h4>
                      <p>
                        67년은 롤링스톤즈에게 마약으로 얼룩진 한 해이기도 하였는데 <strong>믹재거와 키스 리처드가 태블릿형태의 마약을 소지한 죄로 기소</strong>당했습니다. 
                        당시 이 사건은 단순히 한 가수의 마약상용적인 타픽으로 다루어 진 것이 아니라 
                        <strong>반항적이고 비교육적이며 무례한 불량소년들에 대한 여론재판</strong>식으로 이루어져 믹재거는 얼굴도 못 본 타임지의 주필이 그들 편에서 논설을 싫기도 하는등 많은 화재거리를 낳기도 했습니다.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">평가와 앨범 자켓</h4>
                      <p>
                        어쨋거나 마약과는 끊을 수 없는 롤링스톤즈가 본격적으로 트립성의 음악을 추구한 본 앨범은 <strong>대중적인 실패</strong>로 끝나고 말았습니다. 
                        세계가 롤링 스톤즈에게 기대한 건 보다 스트레이트한 락큰롤이라는 것이 증명된 것입니다.
                      </p>
                      <p className="mt-2">
                        전체적으로 이 앨범은 <strong>아트락 매니어라면 한번 쯤 들어볼만하고</strong> 또 얼마든지 즐길만한 곡들이 많다고 생각되지만 
                        감동적인 음악이나 꼭 필요한 음반만 사시는 분들에게는 그리 권하고 싶진 않군요.
                      </p>
                      <p className="mt-2">
                        마지막으로 이 앨범의 재킷에 대해 말하지 않을 수 없는데, 프론트에는 이들의 해프닝성 사진이 <strong>입체사진</strong>으로 붙여져 있습니다. 
                        바닥은 스모크(아마도 마리화나를 상징하는 듯한..)를 연상시키는 무늬로 되어있고요, 
                        안 재킷은 인도의 흰두교 신화에 나오는 그림들과 중세유럽의 성화가 서로 꼴라쥬되어서 무척 <strong>싸이키델릭한 기분</strong>을 내네요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 폴더로 돌아가기
            </Link>
            <div className="text-gray-500 text-sm">
              영국 싸이키델릭의 도화선 - 동시대 베스트에 가려진 버금의 미학
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 