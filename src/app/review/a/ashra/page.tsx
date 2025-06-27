import Link from "next/link";

export default function Ashra() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Ashra</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-lg">독일의 일렉트로닉/프로그레시브 록 밴드</p>
            <p className="text-sm text-gray-600 mt-2">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-semibold mb-3 text-blue-700">밴드 개요</h3>
            <div className="space-y-4 text-sm">
              <p>Ashra는 독일의 일렉트로닉/프로그레시브 록 밴드로, 1970년대에 활발히 활동했습니다. 이 밴드는 실험적인 사운드와 신시사이저, 기타의 조화가 특징입니다.</p>
              
              <p>독일 크라우트록(Krautrock) 씬의 중요한 일원으로, 전자음악과 록 음악의 경계를 허무는 혁신적인 사운드를 추구했습니다.</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-semibold mb-3 text-yellow-700">음악적 특징</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-yellow-600 mb-2">사운드 특색</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-600">•</span>
                    <span>실험적인 전자음악과 록의 융합</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-600">•</span>
                    <span>신시사이저와 기타의 조화로운 결합</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-600">•</span>
                    <span>앰비언트하고 몽환적인 분위기</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-yellow-600">•</span>
                    <span>크라우트록의 반복적이고 최면적인 리듬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold mb-3 text-green-700">대표 앨범</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">주요 작품들</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="border-l-4 border-green-300 pl-3">
                    <p className="font-semibold">New Age of Earth</p>
                    <p className="text-xs text-gray-600">독일 일렉트로닉 록의 혁신성을 보여주는 대표작</p>
                  </div>
                  <div className="border-l-4 border-green-300 pl-3">
                    <p className="font-semibold">Blackouts</p>
                    <p className="text-xs text-gray-600">보다 성숙해진 사운드와 구성력을 보여주는 작품</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded">
                <p className="text-xs">이들의 앨범들은 독일 일렉트로닉 록의 실험성과 창의성을 잘 보여주며, 일렉트로닉 록을 좋아하는 분들에게 추천할 만한 작품들입니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold mb-3 text-purple-700">독일 크라우트록 씬에서의 위치</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <p className="mb-3">1970년대 독일은 크라우트록이라 불리는 독특한 록 장르가 꽃피운 시기였습니다. Ashra는 이 움직임의 중요한 일원으로서 다음과 같은 특징을 보였습니다:</p>
                
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-semibold text-purple-600 mb-2">동시대 밴드들</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Can</li>
                      <li>• Neu!</li>
                      <li>• Kraftwerk</li>
                      <li>• Tangerine Dream</li>
                      <li>• Cluster</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-semibold text-purple-600 mb-2">영향과 특징</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 전자음악의 선구적 활용</li>
                      <li>• 반복적 리듬 패턴</li>
                      <li>• 실험적 사운드 탐구</li>
                      <li>• 몽환적 분위기 연출</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-semibold mb-3 text-orange-700">추천 포인트</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-orange-600 mb-2">이런 분들께 추천</p>
                <ul className="text-xs space-y-1">
                  <li>• 일렉트로닉 록에 관심이 있는 분</li>
                  <li>• 독일 크라우트록을 탐구하고 싶은 분</li>
                  <li>• 실험적이고 혁신적인 사운드를 좋아하는 분</li>
                  <li>• 앰비언트하고 몽환적인 음악을 선호하는 분</li>
                  <li>• 1970년대 독일 음악사에 관심이 있는 분</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 