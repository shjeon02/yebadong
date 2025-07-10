"use client"

import Link from "next/link"

export default function RimeOfTheAncientSamplerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Rime of the Ancient Sampler</h1>
            <p className="text-lg text-gray-600">The Mellotron Album - 멜로트론 추모 프로젝트</p>
          </div>

          {/* Review */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">windmill 박왕근</span>
                <span className="ml-3 text-sm text-gray-600">windmill@mathx.kaist.ac.kr</span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">RIME OF THE ANCIENT SAMPLER - the mellotron album</h3>
                  <p className="text-sm text-gray-600 mb-4">(P)voiceprint 1993</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-gray-800 mb-3">수록곡 목록 (18곡)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <div>1. THEN AND NOW - matt clifford</div>
                      <div>2. MELLOTONIX - bill nelson</div>
                      <div>3. WATERS BENEATH THE BRIDGE - micheal pinder</div>
                      <div>4. OWNER'S GUIDE - patrick moraz</div>
                      <div>5. JULIA - gordon reid</div>
                      <div>6. BERLIN BOYS - sheila maloney</div>
                      <div>7. MELLO BLUE'S BLUES - blue waever</div>
                      <div>8. RESURRECTION - derek holt</div>
                      <div>9. NIGHT OF THE CONDOR - nick magnus</div>
                      <div>10. DECEIVERS ALL - woolly wolstenholme</div>
                      <div>11. ATTACK OF THE AZIMUTHS - ken freeman</div>
                      <div>12. ENGULFED - martin smith</div>
                      <div>13. NOT SO - david cross</div>
                      <div>14. BRADMATIC - chris taylor</div>
                      <div>15. LIFT - david kean</div>
                      <div>16. HEARTFELT - julian colbeck</div>
                      <div>17. MIGHTY TRON - david etheridge</div>
                      <div>18. EL CUMBANCHERO - 1964 melloton demo disc</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">멜로트론의 의미</h4>
                      <p>
                        아트록 매니어라면 누구나 <strong>'mellotron mania'</strong>란 수식어가 과장이 아닐 정도로 
                        멜로트론이 아트록계에서 차지하는 비중을 무시하지 못할 것이다. 이미 ARM이나 HOT MUSIC 같은 데서도 
                        아트록과 관련하여 상당히 비중있게 다루는 것만 봐도 알 수 있다.
                      </p>
                      <p className="mt-2">
                        특히 그런 잡지에서 멜로트론에 대해 언급이 되어 있는 앨범에서 기필코 구하려고 애쓰던 그런 앨범 중에 하나가 
                        바로 지금 소개하는 <strong>rime of the ancient sampler</strong>이다. 더구나 <strong>the mellotron album</strong>이란 
                        부재마저 붙어있어 당연히 헌팅 대상 일순위였던 앨범이었다.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">17명의 영국 키보디스트들</h4>
                      <p>
                        과거 크림슨류의 무게있는 멜로트론과는 사뭇 다른 <strong>현대적인 감각의 멜로트론 사운드</strong>가 주종을 이루고 있다.
                        그도 그럴 것이 17명에 달하는 영국 키보디스트들이 본 앨범을 위해 각자 한곡씩 
                        <strong>유물이 되어버린 멜로트론을 추모하는 곡</strong>을 나름대로 재해석해주고 있기 때문이다.
                      </p>
                      <p className="mt-2">
                        더구나 이미 멜로트론이 미디의 아날로그 원조라는 것은 알려져 있지만 본작에서 바로 그 미디의 다양한 소리처럼 
                        멜로트론을 통해 뿜어져 나오는 여러가지 <strong>아날로그 소리 샘플들</strong>을 접할 수 있을 것이다.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">주요 트랙들</h4>
                      <ul className="space-y-2">
                        <li><strong>첫곡 "Then And Now":</strong> 멜로트론 음향이 담긴 과거 엘피의 지글거리는 소리와 함께 시작되어 갑자기 현대적인 키보드사운드로 반전되는 재미있는 곡</li>
                        <li><strong>"Mellotronix":</strong> 강한 드럼 비트와 함께 다양하고 강렬한 멜로트론 사운드가 춤을 추듯 뿜어져 나오는 곡</li>
                        <li><strong>"Water Beneath The Bridge":</strong> 변조된 바이올린 음향이 멜로트론을 통해 흘러나오는 애절한 대목</li>
                        <li><strong>"Berlin Boys":</strong> 미디 바이올린과 드럼 비트와 함께 바닥에 깔리는 멜로트론 음향</li>
                        <li><strong>"Mellow Blue's Blues":</strong> 블루스 기타와 함께 어우러지는 멜로트론 음향</li>
                        <li><strong>"Night Of The Condor":</strong> 변조된 코러스파트</li>
                        <li><strong>"Deceivers All":</strong> 유일하게 보컬이 있는 곡, 미약하게 흘러나오는 멜로트론 음 - 그 아쉬움이 오히려 여운으로 남는</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-800 mb-2">개인적 최애 트랙 "Engulfed"</h4>
                      <p>
                        본작에서 특히 개인적으로 가장 좋아하는 <strong>engulfed</strong>가 숨어있다. 
                        <strong>명곡으로 꼽아도 전혀 손색없을 정도의 완결된 곡구성력</strong>에다 
                        어쿠스틱 기타와 함께 멜로트론에서 흘러나오는 코러스 음향은 가히 압권이다.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">마무리</h4>
                      <p>
                        계속해서 과다한 멜로트론 음향과 함께 시작되는 "Not so"가 있고 여전히 멜로트론 음향을 맛볼 수 있는 곡들의 대미는 
                        <strong>64년도 멜로트론을 소개하기 위한 데모 음반에 수록된 모노 곡</strong>으로 끝을 맺는다.
                      </p>
                      <p className="mt-2">
                        그러나 본작의 멜로트론 음향을 모두 현재의 미디음원으로 대체되었다면 나는 아마 본작을 쓰레기통으로 처박아버렸을지도 모른다. 
                        그처럼 <strong>멜로트론의 중후한 소리와 단종되어 버림으로 인한 과거에 대한 향수</strong>로 인해 본작에 더욱 애착 아니 더 나아가 집착에까지 이르게 하는 것이다.
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
              Mellotron Album - 17명의 키보디스트 추모 프로젝트
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 