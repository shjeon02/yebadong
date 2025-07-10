"use client";
import Link from "next/link";

export default function VanDerGraafGeneratorReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Van Der Graaf Generator</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Fish 신인철</span>
              <span className="ml-2 text-sm text-gray-600">icshin@chiak.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Godbluff 앨범에 대한 추천</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-yellow-50 p-3 rounded border-l-2 border-yellow-400">
                    <h4 className="font-medium text-yellow-800 mb-2">강력 추천!</h4>
                    <p>
                      최근 우편주문으로 Van der Graaf Generator의 <strong>Godbluff</strong>를 구입했습니다. 
                      Peter Hammill의 독특한 보컬 스타일과 다소 기괴한 음악이 한국 프로그 헤드들에게 
                      크게 주목받지 못했다는 것을 알고 있습니다.
                    </p>
                    <p className="mt-2">
                      하지만 어젯밤 <strong>Godbluff</strong>의 4곡을 들은 후, 그들의 복잡하고 아름다우며 
                      심지어 혼돈적인 음악에 깊이 감동받았습니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">한국 프로그 팬들의 오해</h4>
                    <p>
                      많은 한국 프로그 헤드들이 <strong>VdGG의 음악은 정말 견딜 수 없고 완전히 과대평가되었다</strong>고 
                      여러 번 말했습니다. 하지만 저는 그들과 동의하지 않습니다.
                    </p>
                    <p className="mt-2">
                      <strong>VdGG와 Peter Hammill의 음악은 많은 청취를 요구합니다.</strong> 
                      공부하거나 책을 읽거나 식사하면서 VdGG를 듣지 마세요! 😊
                    </p>
                    <p className="mt-2">
                      저의 경우, 그들의 음악이 재생될 때는 아무것도 할 수 없습니다. 
                      숨을 멈추고 눈을 감고 그들을 듣습니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">추천 앨범</h4>
                    <p>
                      <strong>Pawn Hearts</strong>와 <strong>H to He who am the only one</strong>으로 
                      재미를 느끼지 못한 분들에게는 그들의 중기 3부작을 강력히 추천합니다:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs">
                      <li>• <strong>Still Life</strong></li>
                      <li>• <strong>Godbluff</strong></li>
                      <li>• <strong>World Record</strong></li>
                    </ul>
                    <p className="mt-2">
                      많은 한국 팬들이 Yes와 Genesis를 사랑하는 것처럼 VdGG를 사랑하길 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Mike Taylor</span>
              <span className="ml-2 text-sm text-gray-600">piscine@mailhost.tcs.tulane.edu</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">VdGG 입문 경험담</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">Pawn Hearts로 시작</h4>
                    <p>
                      제가 처음 들은 VdGG 앨범은 <strong>Pawn Hearts</strong>였고, 
                      그것을 즐길 수 있게 되기까지 오랜 시간이 걸렸습니다.
                    </p>
                    <p className="mt-2">
                      처음에는 매우 드라마틱하고 강력한 보컬을 좋아하지 않았습니다. 
                      하지만 음악 자체는 즉시 좋아했기 때문에 계속 시도했습니다. 마침내 적응했습니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">재결성 후 변화</h4>
                    <p>
                      <strong>Pawn Hearts</strong> 이후 밴드는 몇 년간 해체되었다가 
                      <strong>Godbluff</strong>와 <strong>Still Life</strong>를 위해 재결성되었습니다.
                    </p>
                    <p className="mt-2">
                      특징적인 VDGG 사운드는 여전히 있지만 더 세련되고 부드러워져서 더 접근하기 쉬워졌습니다. 
                      <strong>Pawn Hearts</strong>와 <strong>H to He...</strong>는 더 "날것"이어서 
                      첫 청취 시 즐기기가 더 어렵습니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-400">
                    <h4 className="font-medium text-purple-800 mb-2">조언</h4>
                    <p className="font-semibold">
                      Shin의 의견에 동의합니다. 최소한 <strong>Godbluff</strong>를 들을 때까지는 
                      이 밴드를 포기하지 마세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">오찬익</span>
              <span className="ml-2 text-sm text-gray-600">ooci@hitel.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Van der Graaf Generator 디스코그래피 (1969-1976)</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">주요 앨범들</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      <div className="space-y-1">
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1968 Aerosol Grey Machine</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1969 The Least We Can Do Is Wave to Each Other</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1970 H to He, Who Am the Only One</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1971 Pawn Hearts</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1973 Long Hello</div>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1975 Godbluff</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1976 Still Life</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1976 World Record</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1977 The Quiet Zone/The Pleasure Dome</div>
                        <div className="bg-white p-2 rounded border-l-2 border-purple-300">1978 Reflection, Vital, Vital Live</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">The Least We Can Do Is Wave To Each Other (1969)</h4>
                    <p>
                      그룹명이나 앨범 타이틀을 보면 뭔가 과학적인 뉘앙스를 느낄 수 있습니다. 
                      리더인 Peter Hammill이 물리학을 전공한 게 아닐까 추측되기도 하는데...
                    </p>
                    <p className="mt-2">
                      하지만 막상 음악을 들어보면, 그다지 과학적(?)이란 느낌은 들지 않습니다. 
                      오히려 이들의 음악의 느낌이나 전달하는 이미지는 <strong>따뜻하며 인간적</strong>입니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-yellow-700 mb-1">명곡들</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Darkness (11/11)</strong> - 제거 불가능한 마력</li>
                        <li>• <strong>Refugee</strong> - 낭만적이고 따사로운 분위기</li>
                        <li>• <strong>Out Of My Book</strong> - 밝고 긍정적인 느낌</li>
                        <li>• <strong>After the Flood</strong> - 인상적인 곡</li>
                      </ul>
                    </div>
                    <p className="mt-2">
                      이 작품이 발표된 69-70년은 사이키델릭과 프로그레시브 록이 교차되던 시기로, 
                      <strong>인간관계에 있어서 밝고 긍정적인 느낌</strong>들이 전반적인 분위기를 만들고 있습니다.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">H to He Who am the Only One (1970)</h4>
                    <p>
                      타이틀의 의미: <strong>'수소에서 헬륨으로...오직 하나가 되다.'</strong> 
                      자켓 뒷면의 화학식들과 함께 태양에서의 수소핵융합 과정을 보여줍니다.
                    </p>
                    <p className="mt-2">
                      이 작품에서 Peter가 이야기하고 싶었던 것은 <strong>'인간의 소외'</strong>에 관한 것 같습니다. 
                      개인과 개인간의 소외, 그리고 창조주의 손을 떠난 인간의 소외...
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-orange-700 mb-1">주요 특징</h5>
                      <ul className="text-xs space-y-1">
                        <li>• 대곡지향적인 복잡한 구성</li>
                        <li>• David Jackson의 신경질적인 색소폰</li>
                        <li>• 어둡고 무거운 분위기</li>
                        <li>• 명곡: Killer, House With No Door, Pioneers over 'C'</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">Pawn Hearts (1971)</h4>
                    <p>
                      Peter Hammill은 구시대적 헤겔미학의 '발단-전개-절정-결말' 구조를 거부했습니다. 
                      <strong>세상은 우리가 생각했던 것처럼 그렇게 낭만적이고 아름다운 곳이 아니란 걸</strong> 
                      누구보다도 뼈저리게 느꼈기 때문에...
                    </p>
                    <p className="mt-2">
                      그들의 음악에는 지향점이 없습니다. 모든 것이 사고의 흐름을 따라 나열되어 있고, 
                      <strong>생각하는 사람들을 위해 많은 여백이 남겨져</strong> 있습니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <p className="text-xs font-semibold">
                        단 3곡으로 구성된 대곡지향의 작품. 
                        <strong>'A Plague of Lighthouse Keepers'</strong>는 그들의 이상이 가장 잘 구현된 작품입니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">Godbluff (1975)</h4>
                    <p>
                      <strong>Pawn Hearts</strong>(71년) 이후 상당한 공백기를 거쳐 75년에 발표된 작품입니다. 
                      공백기 동안 Peter Hammill은 솔로 프로젝트로 자신의 욕구를 해소했습니다.
                    </p>
                    <p className="mt-2">
                      본작은 분명 뭔가 달라진 사운드를 담고 있었습니다. 
                      <strong>상당히 차분해진 느낌</strong>이며, 급박하게 전개되던 연주 스타일은 찾아볼 수 없습니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-blue-700 mb-1">Electric Guitar의 부재</h5>
                      <p className="text-xs">
                        VdGG 음악을 들으면 뭔가 허전한 이유는 일렉트릭 기타의 부재 때문입니다. 
                        Peter는 록 뮤직에서 감정이 철저히 억제된 상태의 관념적인 음악을 해보고 싶었던 것 같습니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">Still Life (1976)</h4>
                    <p>
                      <strong>아마도 가장 '해밀다운' 작품</strong>이 이것이 아닐까 합니다. 
                      전작의 신경질적인 목소리가 옆에서 속삭이는 듯 부드럽게 변해있습니다.
                    </p>
                    <p className="mt-2">
                      해밀의 리더로서 뛰어난 점은 <strong>작품의 내용과 형식을 훌륭히 결합</strong>시킨다는 점입니다. 
                      한 인간으로서 자신과 타인, 그리고 그들의 관계속에서 생기는 사랑, 고통, 희망, 그리고 절망을 
                      훌륭히 표현해낸 명작입니다.
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded">
                    <h4 className="font-medium text-indigo-800 mb-2">World Record (1976)</h4>
                    <p>
                      마침내 안정을 찾은 듯했으나 VdGG의 사운드는 또다시 변화를 맞이하게 됩니다. 
                      <strong>매우 희망에 찬 어조로 자신의 환희를 표현</strong>하는 듯 강렬한 느낌을 줍니다.
                    </p>
                    <p className="mt-2">
                      특히 <strong>기타의 도입</strong>은 VdGG 사운드의 모습을 많이 바꾸어주는 계기가 되었습니다. 
                      하일라이트인 <strong>'Meurglys III'</strong>는 이전 VdGG 사운드와는 상당히 거리가 있는 
                      '정통(?)' 프로그레시브 록 스타일의 작품입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Van Der Graaf Generator 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 영국</li>
                  <li><strong>활동기간:</strong> 1968-1978 (1차), 재결성 여러차례</li>
                  <li><strong>리더:</strong> Peter Hammill</li>
                  <li><strong>장르:</strong> Progressive Rock</li>
                  <li><strong>특징:</strong> Electric Guitar 없는 독창적 사운드</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>Peter Hammill의 독특한 드라마틱 보컬</li>
                  <li>키보드와 색소폰 중심 편성</li>
                  <li>복잡하고 관념적인 구조</li>
                  <li>철학적이고 내성적인 가사</li>
                  <li>전위적이고 실험적인 접근</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 앨범 (입문자용)</h4>
              <div className="space-y-1 text-xs">
                <div className="bg-green-100 p-2 rounded border-l-2 border-green-400">
                  <strong>1. Godbluff</strong> (1975) - 가장 접근하기 쉬운 앨범
                </div>
                <div className="bg-green-100 p-2 rounded border-l-2 border-green-400">
                  <strong>2. Still Life</strong> (1976) - 가장 '해밀다운' 명작
                </div>
                <div className="bg-green-100 p-2 rounded border-l-2 border-green-400">
                  <strong>3. World Record</strong> (1976) - 기타가 도입된 희망적인 작품
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">고급자용 앨범</h4>
              <div className="space-y-1 text-xs">
                <div className="bg-red-100 p-2 rounded">
                  <strong>Pawn Hearts</strong> (1971) - 3곡 구성의 대곡지향 걸작
                </div>
                <div className="bg-red-100 p-2 rounded">
                  <strong>H to He, Who Am the Only One</strong> (1970) - 복잡하고 어두운 분위기
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>The Least We Can Do Is Wave to Each Other</strong> (1969) - 초기의 따뜻한 작품
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">핵심 멤버</h4>
              <div className="text-xs space-y-1">
                <div className="bg-white p-2 rounded">
                  <strong>Peter Hammill</strong> - 보컬, 키보드, 기타 (리더, 주요 작곡가)
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>David Jackson</strong> - 색소폰, 플루트
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Hugh Banton</strong> - 키보드, 베이스
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Guy Evans</strong> - 드럼
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">청취 가이드</h4>
              <div className="text-xs space-y-1 bg-yellow-50 p-3 rounded">
                <p><strong>⚠️ 주의사항:</strong> 공부하거나 다른 일을 하면서 듣지 마세요!</p>
                <p><strong>🎵 추천:</strong> 조용한 환경에서 집중해서 들으세요</p>
                <p><strong>⏰ 시간:</strong> 음악이 복잡하므로 여러 번 반복 청취 필요</p>
                <p><strong>📈 난이도:</strong> Godbluff → Still Life → World Record → 나머지 순서로 접근</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/review/v" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            V 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 