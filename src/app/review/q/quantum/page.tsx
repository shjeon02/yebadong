"use client";
import Link from "next/link";

export default function QuantumReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Quantum</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">Oak-Man 장민수</span>
              <span className="ml-2 text-sm text-gray-600">jangms@mobi.etri.re.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Quantum - Self-Titled</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-400">
                    <h4 className="font-medium text-blue-800 mb-2">강력 추천!</h4>
                    <p>
                      <strong>Quantum의 셀프 타이틀 앨범은 꼭 구해서 들어보세요!</strong> 
                      브라질의 프로록 앨범 중에서도 몇 안되는 좋은 음반들 중의 하나입니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">음악적 특징</h4>
                    <p>
                      <strong>부드럽다는 느낌</strong>이 먼저 생각나고... 
                      부드러우면서도 꽉찬 연주를 구사하기 때문에 <strong>무척 풍요로운 느낌</strong>을 받게 됩니다.
                    </p>
                    <p className="mt-2">
                      Tisaris나 III Milenio 같은 그룹은 차가운 디지탈 키보드 사운드를 즐겨 사용하는데 반해서 
                      <strong>Quantum의 키보드는 항상 따뜻하고요...</strong> :)
                    </p>
                    <p className="mt-2">
                      기타 연주도 좋고... 종종 <strong>Camel과 비교</strong>되기도 하는 것 같던데요. 
                      <strong>A 등급의 브라질 프로록</strong>입니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">기타 브라질 프로록 앨범들</h4>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2 rounded">
                        <strong>Sagrado Coracao Da Terra - same</strong>
                        <p className="mt-1">유명한 Sagrado의 데뷔 앨범. Markus Vianna의 서정적인 바이얼린도 좋고, 여성 보컬의 드라마틱한 보컬도 좋고, 때로는 뮤지컬을 연상시킬 정도의 스토리성 짙은 분위기도 좋고... 꿈결같은 포근함을 안겨주는 앨범</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Recordando O Vale Das Macas - As Criancas Da Nova Floresta</strong>
                        <p className="mt-1">스페인 그룹 Gotic을 연상시키는 참신한 음악. Gotic처럼 능숙한 연주는 아니지만 남미의 산뜻한 날씨를 담은 듯한 곡조가 좋습니다</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Quantum II - same</strong>
                        <p className="mt-1">최근 재결성된 Quantum의 새 앨범. 이름도 Quantum II로 바꾸고 새출발! 데뷔 앨범에서 보여주었던 음들은 모두 사라지고, 영국의 네오 프로그레시브를 표방하는 강한 신디사이저 음들을 담고 있는 이상한 음반. 음악적으로는 Quantum과는 별개의 그룹</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Tisaris - What's Beyond</strong>
                        <p className="mt-1">이 그룹도 이름이 제법 알려져 있음. 연주면에선 손색이 없지만 과장된 보컬이 전체적인 음악의 분위기를 깨뜨림</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>III Milenio - Alianca Dos Tempos...</strong>
                        <p className="mt-1">쉰 목소리 보컬이 귀에 거슬리지만 전체적인 앨범의 구성은 좋음. 가끔 유치한 신디사이저 음이 등장하기도 함. Tisaris와 유사한 느낌. 최근에 Musea에서 CD로 재발매 되었는데 LP에는 없는 곡들이 약 20분 가량 추가됨</p>
                      </div>
                      <div className="bg-white p-2 rounded">
                        <strong>Dogma - Album</strong>
                        <p className="mt-1">Quantum과 유사한 음악을 구사. 몇번 듣지 못했고 또 한번 틀어놓으면 곧 잠에 빠져 버리는 수면용 음반이라서... :-)))</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded border-l-2 border-red-400">
                    <h4 className="font-medium text-red-800 mb-2">격언</h4>
                    <p className="font-semibold">
                      브라질 프로록이라고 해서 모두 환상적인 음악을 담고 있지는 않다!!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Quantum 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 브라질</li>
                  <li><strong>장르:</strong> 프로그레시브 록</li>
                  <li><strong>특징:</strong> 부드럽고 따뜻한 사운드</li>
                  <li><strong>평가:</strong> A 등급의 브라질 프로록</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>부드럽고 풍요로운 느낌</li>
                  <li>따뜻한 키보드 사운드</li>
                  <li>훌륭한 기타 연주</li>
                  <li>Camel과 비교되는 스타일</li>
                  <li>꿈결같은 포근함</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-xs">
                <div className="bg-purple-100 p-2 rounded border-l-2 border-purple-400">
                  <strong>Self-Titled</strong> - 데뷔작, 강력 추천 앨범
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Quantum II - same</strong> - 재결성 후 앨범, 네오 프로그레시브 스타일
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 대상</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-purple-100 px-2 py-1 rounded">Camel 팬</span>
                <span className="bg-purple-100 px-2 py-1 rounded">브라질 프로록 애호가</span>
                <span className="bg-purple-100 px-2 py-1 rounded">부드러운 사운드 선호자</span>
                <span className="bg-purple-100 px-2 py-1 rounded">심포닉 프로그 팬</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">기타 추천 브라질 프로록</h4>
              <div className="text-xs space-y-1">
                <div className="bg-yellow-100 p-1 px-2 rounded">1. Sagrado Coracao Da Terra</div>
                <div className="bg-yellow-100 p-1 px-2 rounded">2. Recordando O Vale Das Macas</div>
                <div className="bg-yellow-100 p-1 px-2 rounded">3. Tisaris</div>
                <div className="bg-yellow-100 p-1 px-2 rounded">4. III Milenio</div>
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