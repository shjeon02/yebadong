"use client";
import Link from "next/link";

export default function BudkaSufleraReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Budka Suflera - Budka W Operze</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Poland</p>
              <p><strong>장르:</strong> Progressive Rock, Rock</p>
              <p><strong>활동 시기:</strong> 1974-2014 (27년 역사)</p>
              <p><strong>리드 보컬:</strong> Krzysztof Lugowski</p>
            </div>
            <div>
              <p><strong>특징:</strong> 처절한 성량, 담백한 기타리프</p>
              <p><strong>음악적 변화:</strong> Prog → 80년대 Rock → Prog 복귀</p>
              <p><strong>최근 앨범:</strong> Cisza (프로그레시브 복귀작)</p>
            </div>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Budka W Operze - 라이브 베스트 앨범</h2>
          <div className="bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-bold mb-2">앨범 정보</h3>
                <p>• <strong>성격:</strong> 라이브 베스트 앨범</p>
                <p>• <strong>녹음:</strong> 북부 폴랜드 실황공연</p>
                <p>• <strong>특징:</strong> 27년 역사의 집대성</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">주요 트랙</h3>
                <p>• <strong>첫 곡:</strong> "Ain't no Sunshine" (커버)</p>
                <p>• <strong>스타일:</strong> Triteoariga Kriget 유사</p>
                <p>• <strong>전체:</strong> 감동적인 멜로디 중심</p>
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">Fish (신인철)</h3>
            <p className="text-sm text-gray-600 mb-4">icshin@bioneer.kaist.ac.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 첫인상과 역사 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">27년 역사의 충격</h4>
                <div className="space-y-3">
                  <p className="text-sm">
                    <strong>이 그룹이 27년이나 되는 역사를 가졌다는 사실에 우선 놀랐습니다.</strong> 
                    본 앨범은 몇년전 이들이 <strong>북부 폴랜드에서 가졌던 실황공연</strong>을 녹음한 일종의 베스트앨범인데요.
                  </p>
                  
                  <div className="bg-white p-3 rounded border border-l-4 border-yellow-400">
                    <p className="text-sm">
                      지금 9번 트랙을 넘어가고 있습니다. <strong>정말 감동적인 멜로디</strong>군요.. 
                      차마 곡목을 베끼기는 귀찮네요. 어떻게 동구권의 스펠링은 자음모음이 그렇게 자유분방하게 조합하고 있는지.. :-)
                    </p>
                  </div>
                </div>
              </div>

              {/* 음악적 특징 분석 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">음악적 특징</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">스타일 분석</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>장황한 심포닉 락도 아니구요.</strong> 화려한 키보드가 넘실거리거나 
                        중후한 멜로트론이 청자를 붙잡아 놓는 그런 스타일도 아닙니다.
                      </p>
                      
                      <div className="bg-purple-50 p-3 rounded border border-l-4 border-purple-400">
                        <p className="text-sm">
                          리드 보컬리스트 <strong>Krzysztof Lugowski의 처절한 성량있는 목소리</strong>와 
                          <strong>담백한 기타리프</strong>가 꾸준한 감동을 주네요.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">커버곡과 비교</h5>
                    <div className="space-y-2 text-sm">
                      <p>
                        첫곡은 재미있게도 Pop classic <strong>'Ain't no Sunshine'의 커버송</strong>입니다. 
                        <strong>Triteoariga Kriget (30년 전쟁)</strong>의 사운드와 비슷하다고나 할까요?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 음악적 변화와 복귀 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">음악적 변화와 프로그레시브 복귀</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border">
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>프로그레시브락을 하다가 80년대를 거치면서</strong> 좀더 straightforward한 Rock으로 전향했다는 이 그룹은 
                        얼마전 발표한 <strong>Cisza</strong>라는 앨범으로 <strong>다시 화려하게 prog로 복귀</strong>했답니다.
                      </p>
                      
                      <div className="bg-orange-50 p-3 rounded border border-orange-200">
                        <p className="text-sm">
                          이 앨범도 빨리 들을 수 있었으면 좋겠는데.. 음비법.. 어떻게 되어가고 있는건가요?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 개인적 경험담 - 수입 음반 이야기 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">수입 음반 주문 경험담</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border">
                    <div className="space-y-3 text-sm">
                      <p>
                        영 불안해서.. 며칠전 전보가 날아왔습니다. <strong>Federal Express의 한국 지점</strong>에서 왔는데.. 
                        통관에 약간의 문제가 발생한 듯 해요. 배달은 되겠지만 관세를 물어야 한다는데.. 얼만지는 잘 모르겠다더군요.
                      </p>
                      
                      <div className="bg-yellow-50 p-3 rounded border">
                        <h5 className="font-bold text-yellow-700 mb-1">과거 경험</h5>
                        <p className="text-xs">
                          사실은 그동안 가끔 양이 많을경우에는 <strong>독수리표 페데랄 익스프레스</strong>를 즐겨 이용했는데.. 
                          이경우는 엘피다섯장에 씨디 일곱장 비됴 두개를 한꺼번에 주문했어도 세관에서 뜯어보긴 커녕 아무런 타치 없이 배달이 되었었거든요?
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded border">
                        <h5 className="font-bold text-red-700 mb-1">현재 상황</h5>
                        <p className="text-xs">
                          하지만 지금은 그저 <strong>씨디 네장에 비디오 두개</strong>밖에 안되는데도 
                          믿었던 Federal Express인데도 덜컥 걸리고 말았군요..쩝..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 현재 상황 */}
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3">리뷰 마무리</h4>
                <div className="bg-white p-4 rounded border">
                  <p className="text-sm">
                    쩝.. 밥먹을 시간이네요.. <strong>저희 회사는 밥시간이 굉장히 짧아서</strong>.. 그럼..
                  </p>
                  
                  <div className="mt-3 p-2 bg-blue-50 rounded border text-center">
                    <p className="text-sm font-mono">
                      <strong>NP: Budka W Operze - Budka Suflera</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* ASCII 아트 */}
              <div className="bg-indigo-50 p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-3">시적 여운</h4>
                <div className="bg-white p-4 rounded border">
                  <div className="font-mono text-xs text-center space-y-1">
                    <p>                    o               </p>
                    <p>                  o  It was a wedding ring,</p>
                    <p>  \  __\\___    o    Destined to be found in a cheap hotel,</p>     
                    <p>   \/     o \ o      Lost in a kitchen sink,</p>
                    <p>   /\_&lt;_____/ or thrown in a wishing well.</p>
                  </div>
                </div>
              </div>

              <p className="text-right italic text-gray-600">
                Fish (신인철)
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 