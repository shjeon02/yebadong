import Link from "next/link";

export default function Review2066AndThen() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">2066 And Then</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">3M</span>
              <span className="ml-2 text-sm text-gray-600">ecokis@plaza.snu.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">2066 And Then - Reflection</h3>
                <p className="text-sm leading-relaxed">
                  탈독일적인 독일락의 매력은 풍차님께서 지적하셨듯이 <em>underground적 순수성</em>에 있는 것 같습니다. 
                  일면 영국적인 것 같으면서도 딱 잘라 영국락의 clone이라고 단정할 수 없는 묘한 내면을 갖고 있습니다.
                </p>
                
                <div className="mt-3 bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-800 mb-2">음악적 특징</h4>
                  <p className="text-sm">
                    2066 And Then의 "Reflection"에서도 이러한 경향을 찾을 수 있는데.. 텁텁한 보컬이 세상만사 찌든 마음을 투덕투덕 도닥여 주는 organ-based german rock입니다.
                  </p>
                </div>
                
                <div className="mt-3 bg-green-50 p-3 rounded">
                  <h4 className="font-medium text-green-800 mb-2">다른 작품과의 비교</h4>
                  <p className="text-sm">
                    이 계통에서의 <strong>masterpiece</strong> Tyburn Tall "s/t"과 비교해 보면 작곡, 편곡, 연주력, 연주감각 모든 면에서 떨어지지만 이것은 어디까지나 상대적인 것이고, 
                    이 앨범 한 장만을 놓고 봤을 땐 <em>완성도 높은 구성을 통해 통일적인 느낌 구현에 성공한</em> 좋은 앨범이라고 말씀 드릴 수 있습니다.
                  </p>
                </div>
                
                <div className="mt-3 bg-yellow-50 p-3 rounded border-l-2 border-yellow-400">
                  <h4 className="font-medium text-yellow-800 mb-2">음질 평가</h4>
                  <p className="text-sm">
                    mastertape의 음질 상태가 좋은 편은 아니나 Tetragon보다 훨씬 입체적인 사운드를 들려줍니다. 
                    (Tetragon의 경우 적은 수의 track을 사용한 탓인지 sound가 매우 평면적이어서 악기 소리간의 위치, 깊이를 구분하기 힘듭니다. 
                    마치 모든 악기들이 keyboard, guitar, drum을 한데 뭉뚱그려 놓은 하나의 악기로 연주되는 듯한 느낌을 줍니다.)
                  </p>
                </div>
                
                <p className="text-sm mt-3 text-gray-600 italic">풍차님 감사합니다!!</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">2066 And Then 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 독일</li>
                  <li><strong>장르:</strong> 독일 프로그레시브 록</li>
                  <li><strong>스타일:</strong> Organ-based German Rock</li>
                  <li><strong>특징:</strong> Underground적 순수성</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>탈독일적인 독일락의 매력</li>
                  <li>영국적이면서도 독창적인 내면</li>
                  <li>텁텁한 보컬 스타일</li>
                  <li>입체적인 사운드</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 작품</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>Reflection</strong> - 완성도 높은 구성의 organ-based German rock
                </div>
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