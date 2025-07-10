"use client";
import Link from "next/link";

export default function QuietWorldReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Quiet World</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
            <div className="flex items-center mb-2">
              <span className="bg-amber-500 text-white px-2 py-1 rounded text-sm font-medium">meddle</span>
              <span className="ml-2 text-sm text-gray-600">리뷰어</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-amber-700 mb-2">Quiet World - The Road</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-400">
                    <h4 className="font-medium text-blue-800 mb-2">추천 대상</h4>
                    <p>
                      <strong>Moody Blues의 Days Of Future Passed</strong>를 좋아 하시나요? 
                      록과 브라스 밴드가 협연 하는 음악을 좋아 하시나요? 
                    </p>
                    <p className="mt-2">
                      그렇다면 바로 여기에 당신이 꼭 들어야할 앨범이 하나 있습니다. 
                      바로 <strong>Quiet World의 The Road</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">오케스트레이션 록의 매력</h4>
                    <p>
                      사실 이런 부류의 앨범들(오케스트레이션이 도입된 록)은 그리 쉽게 다가 오지는 않아요. 
                      하지만 <strong>들으면 들을 수록 정감이 가며 쉽게 질리지 않지요</strong>.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-yellow-700 mb-1">오케스트레이션을 사용한 명곡들</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>The Beatles</strong> - A Day In The Life, 에비 로드 앨범</li>
                        <li>• <strong>Pink Floyd</strong> - Atom Heart Mother</li>
                        <li>• <strong>Nick Drake</strong> - 1집 (부분적 도입)</li>
                        <li>• <strong>Smashing Pumpkins</strong> - Tonight Tonight</li>
                        <li>• <strong>Collective Soul</strong> - The World I Know</li>
                      </ul>
                    </div>
                    <p className="mt-2">
                      그 만큼 우리 인간의 마음 깊숙한 곳까지 침투할 수 있는 음악의 형식은 
                      <strong>오케스트레이션</strong>이 아닌가 라는 생각도 해 봅니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">Moody Blues와의 비교</h4>
                    <p>
                      아트록의 경우... 아니 전체 록 음악을 통틀어서 
                      <strong>무디 블루스의 Days Of Future Passed 처럼 오케스트레이션을 적절히 사용한 밴드는 없을 겁니다</strong>.
                    </p>
                    <p className="mt-2">
                      클래식적인 분위기를 내려고 얘를 썼다기 보다... 
                      아예 <strong>클래식 앨범이 아닌가 하는 생각</strong>이 드는군요. 
                      뭐...전체적인 구성에는 약간의 문제가 있기는 하지만요.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">그룹 구성과 특징</h4>
                    <p>
                      그룹의 멤버 중 <strong>'제너시스'의 스티브 하켓이 참여</strong> 하고 있는데요... 
                      후에 제너시스에 참여해서 들려 주었던 드라마틱하고 강렬한 연주 보다는 
                      <strong>매우 단순하고 부드러운 연주</strong>를 들려주는군요.
                    </p>
                    <p className="mt-2">
                      아무래도 기타 소리가 너무 튀면 오케스트라와의 조화가 깨지기 때문일 겁니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-orange-700 mb-1">제작진</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Phil Henderson</strong> - 전체 오케스트레이션과 지휘</li>
                        <li>• <strong>John Schroeder</strong> - 프로젝트 그룹 결성</li>
                        <li>• <strong>세명의 Heather 형제들</strong> - 프로젝트 그룹 결성</li>
                        <li>• <strong>Steve Hackett</strong> - 기타 (Genesis)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">음악적 특징과 아쉬운 점</h4>
                    <p>
                      초반의 사운드가 무디 블루스와 매우 닮아 있다면 후반부는 <strong>부드러운 소프트 록</strong>으로 채워져 있지요. 
                      따라서 전체적으로 무디 블루스와 매우 닮아 있다고 생각하시면 됩니다.
                    </p>
                    <p className="mt-2">
                      특히 <strong>한개의 주제가 전체 곡들을 관통</strong>하고 있다는 점이 매우 비슷하지요.
                    </p>
                    <p className="mt-2">
                      하지만 Quiet World의 음악은 <strong>좀 산만하지 않나...</strong> 하는 생각이 듭니다.
                    </p>
                    <div className="mt-2 bg-white p-2 rounded">
                      <h5 className="font-medium text-red-700 mb-1">무디 블루스 vs Quiet World</h5>
                      <div className="text-xs space-y-1">
                        <p><strong>무디 블루스:</strong> 드보르작의 신세계 교향곡을 바탕으로 탄탄한 곡 구성</p>
                        <p><strong>Quiet World:</strong> 전적으로 록을 바탕으로 하여 몇몇 부분에서 조화 부족</p>
                        <p><strong>무디 블루스:</strong> 멜로트론을 적절히 사용하여 곡을 윤택하게 함</p>
                        <p><strong>Quiet World:</strong> 오르간의 사용이 적절하지 못함</p>
                        <p><strong>무디 블루스:</strong> 오케스트레이션으로 교묘한 처리, 클래식 착각 유발</p>
                        <p><strong>Quiet World:</strong> 세세한 면까지 관심을 두지 않음</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">주요 트랙 소개</h4>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2 rounded">
                        <strong>The Great Birth/Theme</strong>
                        <p>(마치 Days Of Future Passed의 The Day Begins를 연상시키는) 적막 속의 소리의 울림으로 시작하는 매우 엄숙한 분위기. 나래이션 역시 Days~~와 매우 비슷한 구조</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>First Light</strong>
                        <p>생명의 활기로 가득찬 분위기. 관악기가 매우 적절히 사용됨</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Star</strong>
                        <p>어딘가 모르게 어색함이 느껴짐. 사실상 불필요한 곡이 아닌가 하는 생각</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Loneliness And Grief</strong>
                        <p>매우 아름다운 선율로 시작하다가 갑자기 재즈적인 분위기로 돌변</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Christ One</strong>
                        <p>2번째 곡을 다시 교묘히 사용해서 전혀 새롭게 들려줌. 중간중간 삽입되는 스트링 소리가 매우 따사로움</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border-l-2 border-gray-400">
                    <h4 className="font-medium text-gray-800 mb-2">최종 평가</h4>
                    <p>
                      그 당시 록에 오케스트레이션을 덧 입히는 작업이 유행했던 시절... 
                      전 이 작품이 이런 유행을 따라서 만들어 졌다고는 생각하지 않습니다.
                    </p>
                    <p className="mt-2 font-semibold">
                      <strong>전 그들의 순수함을 믿습니다.</strong>
                    </p>
                    
                    <div className="mt-3 bg-amber-100 p-2 rounded italic text-xs">
                      <p>윤리, 도덕, 규범, 교육, 그것들이 날 오려내고</p>
                      <p>색칠해서 맘대로 이상한걸 만들어 냈어.</p>
                      <p>내 가죽을 벗겨줘. 내 뱃살을 갈라줘. 내 안에</p>
                      <p>내 안에 뭐가 있는지 나도 궁금해...</p>
                      <p className="mt-1 font-medium">- 노땅스의 Moon Madness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Quiet World 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 영국</li>
                  <li><strong>장르:</strong> Symphonic Progressive Rock</li>
                  <li><strong>특징:</strong> 오케스트레이션 + 록</li>
                  <li><strong>성격:</strong> 프로젝트 그룹</li>
                  <li><strong>영향:</strong> Moody Blues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>오케스트라와 록의 협연</li>
                  <li>한 개의 주제가 전체 관통</li>
                  <li>부드러운 소프트 록</li>
                  <li>드라마틱한 구성</li>
                  <li>깊은 감정적 침투력</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 멤버</h4>
              <div className="space-y-1 text-xs">
                <div className="bg-white p-2 rounded">
                  <strong>Steve Hackett</strong> - 기타 (Genesis)
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Phil Henderson</strong> - 오케스트레이션 & 지휘
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>John Schroeder</strong> - 프로듀서
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Heather Brothers</strong> - 프로젝트 결성자
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="bg-amber-100 p-2 rounded border-l-2 border-amber-400">
                <strong>The Road</strong> - 오케스트레이션이 포함된 심포닉 록
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">트랙 리스트</h4>
              <div className="text-xs space-y-1">
                <div className="bg-white p-1 px-2 rounded">1. The Great Birth / Theme</div>
                <div className="bg-white p-1 px-2 rounded">2. First Light</div>
                <div className="bg-white p-1 px-2 rounded">3. Theme</div>
                <div className="bg-white p-1 px-2 rounded">4. Star</div>
                <div className="bg-white p-1 px-2 rounded">5. Theme</div>
                <div className="bg-white p-1 px-2 rounded">6. Loneliness And Grief</div>
                <div className="bg-white p-1 px-2 rounded">7. Theme / Change Of Age</div>
                <div className="bg-white p-1 px-2 rounded">8. Christ One</div>
                <div className="bg-white p-1 px-2 rounded">9. Hang On</div>
                <div className="bg-white p-1 px-2 rounded">10. Christ Continued</div>
                <div className="bg-white p-1 px-2 rounded">11. Body And The Mind</div>
                <div className="bg-white p-1 px-2 rounded">12. Traveller</div>
                <div className="bg-white p-1 px-2 rounded">13. Let Everybody Sing</div>
                <div className="bg-white p-1 px-2 rounded">14. Theme</div>
                <div className="bg-white p-1 px-2 rounded">15. Children Of The World</div>
                <div className="bg-white p-1 px-2 rounded">16. Change Of Age</div>
                <div className="bg-white p-1 px-2 rounded">17. Love Is Walking</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">비교 대상</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-amber-100 px-2 py-1 rounded">Moody Blues</span>
                <span className="bg-amber-100 px-2 py-1 rounded">Pink Floyd (Atom Heart Mother)</span>
                <span className="bg-amber-100 px-2 py-1 rounded">The Beatles (A Day In The Life)</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 대상</h4>
              <div className="text-xs space-y-1">
                <p>• Moody Blues의 Days Of Future Passed 애호가</p>
                <p>• 오케스트레이션이 포함된 록 음악 선호자</p>
                <p>• 심포닉 프로그레시브 록 팬</p>
                <p>• 감정적 깊이를 추구하는 리스너</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/review/q" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Q 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 