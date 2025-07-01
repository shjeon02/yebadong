"use client";
import Link from "next/link";

export default function BakerlooReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Bakerloo</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">Budgie</span>
              <span className="ml-2 text-sm text-gray-600">이훈구, hglee@fdcl.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-orange-700 mb-2">Bakerloo - Same (1969) 앨범 리뷰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">트랙 리스트</h4>
                    <div className="space-y-1 text-xs">
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">1.</span>
                        <span className="font-medium">Big Bear Ffolly</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">2.</span>
                        <span className="font-medium">Bring It On Home</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">3.</span>
                        <span className="font-medium">Drivin' Bachward</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">4.</span>
                        <span className="font-medium">Last Blues</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">5.</span>
                        <span className="font-medium">Gang Bang</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">6.</span>
                        <span className="font-medium">This Worried Feeling</span>
                      </div>
                      <div className="bg-white p-2 rounded flex">
                        <span className="font-bold w-6">7.</span>
                        <span className="font-medium">Son Of Moonshine</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">전체적인 평가</h4>
                    <p>
                      처음에 제가 소개 드릴때 Budgie 와 더불어 좋아하는 그룹으로 꼽았던 그룹중의 하나이죠. 
                      요 근래에 씨디 사고서 이 앨범만큼 만족했던 적도 없었던 것 같습니다.
                    </p>
                    <p className="mt-2">
                      처음부터 끝까지 꽉 짜여지고 빈틈없는 훌륭한 앨범이라고 자신있게 말할 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">음악적 구성</h4>
                    <p>
                      제목에서 볼수 있듯이 곡들이 빠르고 강력한 것과 블루스에 기반을 둔 끈적한 것들이 교대로 나옵니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">주요 곡들 상세 분석</h4>
                    <div className="space-y-3 text-xs">
                      <div className="bg-white p-2 rounded border-l-2 border-red-300">
                        <h5 className="font-medium text-red-700">Big Bear Ffolly</h5>
                        <p className="text-gray-600 mt-1">
                          좌우 스피커에서 교대로 공격적인 기타소리가 불을 뿜는 전형적인 하드락 넘버
                        </p>
                      </div>
                      
                      <div className="bg-white p-2 rounded border-l-2 border-blue-300">
                        <h5 className="font-medium text-blue-700">Bring It On Home / Last Blues</h5>
                        <p className="text-gray-600 mt-1">
                          제목에서도 느끼시겠지만 이들이 음악적 기반으로 삼고 있는 듯이 보이는 블루스 넘버들
                        </p>
                      </div>
                      
                      <div className="bg-white p-2 rounded border-l-2 border-green-300">
                        <h5 className="font-medium text-green-700">Drivin' Bachward</h5>
                        <p className="text-gray-600 mt-1">
                          바하의 작품을 색다르게 편곡한 곡. 중반부 이후에 나오는 게스트 뮤지션 Jerry Salisbury의 트럼펫 연주가 아주 인상적
                        </p>
                      </div>
                      
                      <div className="bg-white p-2 rounded border-l-2 border-orange-300">
                        <h5 className="font-medium text-orange-700">Gang Bang</h5>
                        <p className="text-gray-600 mt-1">
                          그 제목이 암시하듯 무지하게 두들겨 대는 드럼소리를 들을 수 있음. 
                          얼마나 신나게 두들기는지 중반부 드럼 솔로 부근에서는 드럼주자인 Keith Baker의 추임새 소리도 들림
                        </p>
                      </div>
                      
                      <div className="bg-white p-2 rounded border-l-2 border-indigo-300">
                        <h5 className="font-medium text-indigo-700">This Worried Feeling</h5>
                        <p className="text-gray-600 mt-1">
                          에릭 크랩톤을 연상시키는 기가막힌 블루스. 
                          앞의 두 블루스곡들보다 Dave Clempson의 기타플레이가 더욱 인상적인 곡
                        </p>
                      </div>
                      
                      <div className="bg-white p-2 rounded border-l-2 border-purple-300">
                        <h5 className="font-medium text-purple-700">Son Of Moonshine</h5>
                        <p className="text-gray-600 mt-1">
                          15분에 달하는 대곡. 이 곡하나에서 세명의 주자들은 자신의 모든것을 다 보여주는 듯함. 
                          쉴새없이 전개되는 짜임새 있는 연주, 쉬는듯 하다가 다시 몰아치는 구성
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Bakerloo 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 영국</li>
                  <li><strong>장르:</strong> Hard Rock, Blues Rock</li>
                  <li><strong>기타:</strong> Dave Clempson</li>
                  <li><strong>드럼:</strong> Keith Baker</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>하드락과 블루스의 교대 구성</li>
                  <li>공격적인 기타 사운드</li>
                  <li>클래식 편곡 (바하)</li>
                  <li>강력한 드럼 연주</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="bg-white p-2 rounded">
                <strong>Same</strong> (1969) - 데뷔작, 7곡 수록
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">특별한 연주자</h4>
              <div className="text-xs space-y-1">
                <p>• <strong>Jerry Salisbury:</strong> 게스트 트럼펫 연주자 (Drivin' Bachward)</p>
                <p>• <strong>Dave Clempson:</strong> 에릭 크랩톤을 연상시키는 기타 연주</p>
                <p>• <strong>Keith Baker:</strong> 추임새까지 들리는 열정적인 드럼 연주</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 곡</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-orange-100 px-2 py-1 rounded">Son Of Moonshine (15분 대곡)</span>
                <span className="bg-orange-100 px-2 py-1 rounded">This Worried Feeling</span>
                <span className="bg-orange-100 px-2 py-1 rounded">Drivin' Bachward</span>
                <span className="bg-orange-100 px-2 py-1 rounded">Gang Bang</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">특이사항</h4>
              <div className="text-xs space-y-1">
                <p>• Budgie와 함께 리뷰어가 좋아하는 그룹</p>
                <p>• 처음부터 끝까지 빈틈없는 구성</p>
                <p>• 바하 클래식 편곡과 트럼펫 게스트 연주</p>
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