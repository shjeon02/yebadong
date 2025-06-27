import Link from "next/link";

export default function AnaidPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Anaid</h2>
        
        <div className="space-y-6 leading-relaxed">
          {/* 리뷰어 정보 및 리뷰 */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-3">[orkman, 장민수, jangms@mobi.etri.re.kr]</p>
            
            <h3 className="text-xl font-semibold mb-3">Four Years - 드디어 구한 Anaid의 음반</h3>
            
            <div className="space-y-4">
              <p>Anaid의 음반을 드디어 구했습니다. :-) 여성 보컬이 뛰어나다는 소문이 자자해서 더욱 호감과 호기심을 가지고 있었는데, 거금(?)을 들여 경매에 오른 <strong>Four Years</strong>라는 CD를 손에 넣었습니다. :-)</p>
              
              <div className="bg-white p-3 rounded border-l-2 border-green-500">
                <p className="font-medium">첫인상</p>
                <p>아직은 주의깊게 들어보지 못했지만 소문이 틀리진 않네요. 생기가 그득한 능동적인 목소리가 무척 인상적입니다.</p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold mb-2">음색 비교</h4>
                <p><strong>Stromboli</strong>의 바라 바시코바(Bara Basikova)의 음색과도 유사한 점이 보이네요. 뭔가 유혹하는 듯한 분위기 :-)</p>
              </div>
              
              <div className="bg-green-50 p-3 rounded border-l-2 border-green-500">
                <p className="font-medium">최종 평가</p>
                <p>쥴 계열의 그룹들 중에서도 매우 특별한 매력을 가지고 있다는 말에 전적으로 동감하게 되었습니다.</p>
              </div>
            </div>
          </div>

          {/* 음악적 특징 요약 */}
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
            <h3 className="text-xl font-semibold mb-3">음악적 특징</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-700">보컬 특징</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>뛰어난 여성 보컬</li>
                  <li>생기가 그득한 능동적인 목소리</li>
                  <li>유혹하는 듯한 분위기</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">장르적 위치</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>쥴(Zeuhl) 계열 그룹</li>
                  <li>특별한 매력을 지닌 밴드</li>
                  <li>희귀한 음반으로 평가</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 추천 정보 */}
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold mb-3">추천 포인트</h3>
            
            <div className="space-y-3">
              <p>프랑스 Zeuhl 씬에서 독특한 위치를 차지하는 Anaid는 특히 여성 보컬의 매력적인 음색으로 유명합니다. Magma의 영향을 받은 쥴 계열 음악에 관심이 있는 분들에게 강력히 추천할 만한 그룹입니다.</p>
              
              <div className="bg-white p-3 rounded">
                <p className="font-medium text-center">🎵 희귀한 명반을 찾는 컬렉터들의 필수 아이템 🎵</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 