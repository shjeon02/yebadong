import Link from "next/link";

export default function AsturiasPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Asturias</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-lg">Asturias - Circle in the Forest (KICS2824)</p>
            <p className="text-sm text-gray-600 mt-2">[이동훈, meddle@nuri.net]</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-semibold mb-3 text-blue-700">멤버 구성</h3>
            <div className="bg-white p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                  <span><strong>Yoh Ohyama</strong> - computer programming, synthesizer, e. guitar, a. guitar, bass, percussion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span><strong>Haruhiko Tsuda</strong> - e. guitar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span><strong>Akira Hanamoto</strong> - Keys</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  <span><strong>Kazumi Sakurai</strong> - drum, percussion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-semibold mb-3 text-yellow-700">Track List</h3>
            <div className="bg-white p-4 rounded-lg">
              <ol className="text-sm space-y-2">
                <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span><strong>1.</strong> Ryu-Hyo</span>
                  <span className="text-gray-600">4:59</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span><strong>2.</strong> Clairvoyance</span>
                  <span className="text-gray-600">5:20</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span><strong>3.</strong> Angel Tree</span>
                  <span className="text-gray-600">4:53</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span><strong>4.</strong> Tightrope</span>
                  <span className="text-gray-600">6:55</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-yellow-100 rounded border-l-4 border-yellow-400">
                  <span><strong>5.</strong> Circle in the Forest</span>
                  <span className="text-yellow-700 font-semibold">22:21</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold mb-3 text-green-700">이동훈님의 리뷰</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">밴드 개요</h4>
                <p>Asturias는 총 3매의 작품을 발표하고 사라진 일본의 퓨젼 밴드입니다. 해외에서는 한때 상당한 인기를 얻었지만 일본 퓨젼계에선 극히 '평범한 존재'입니다.</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-2">음악적 특징</h4>
                <p className="mb-3">상당 부분이 computer programming으로 처리되어 연주가 '단조'롭다는 인상을 전달해 줍니다. 또한 악상도 비교적 simple해서 웅장 & 화려하고 변박이 심한 - Kenso 부류의 - 퓨젼과는 상당한 거리가 있습니다.</p>
                
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs">구지 유러피언 아티스트와 비교한다면 Mike Oldfield 정도? 이런 수준의 작품이 2차례에 걸쳐서 발매된 것을 본다면... Jo Yun의 [Mobius Strip]도 그리 수준이 떨어지는 작품이 아니라는 것을 간접적으로 느낄 수 있었습니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-semibold mb-3 text-purple-700">주목할만한 곡들</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium text-purple-600 mb-3">가장 주목할만한 곡은 Kenso의 [2] 스타일을 모방한 <strong>Tightrope</strong>, 그리고 22분에 달하는 <strong>Circle in the Forest</strong>입니다.</p>
                
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-300">
                    <h4 className="font-semibold text-purple-600 mb-2">Tightrope</h4>
                    <p className="text-xs">Kenso의 [2]의 가장 큰 매력중의 하나가 힘을 바탕으로 하는 다이나믹인데... Asturias는 맥빠진 연주를 들려주고 있습니다.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-300">
                    <h4 className="font-semibold text-purple-600 mb-2">Circle in the Forest (22:21)</h4>
                    <p className="text-xs">Circle in the Forest는 그나마 이 앨범의 가치를 상승시켜주는 곡인데... (하지만 2천엔(2만원)의 가치는 없는듯... ^^;;;) 뭐... 좀 지겹게 느껴지실 분들도 있을 것입니다. *^^*</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-semibold mb-3 text-red-700">최종 평가</h3>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-bold text-xl text-red-600 mb-2">한마디로 영양가 없는 앨범 !!!</p>
              <p className="text-sm text-gray-600">- 이동훈</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
            <h3 className="font-semibold mb-3 text-gray-700">일본 퓨젼 록의 맥락</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded">
                <p className="text-xs">이 리뷰는 1990년대 일본 퓨젼 록에 대한 당시의 시각을 보여줍니다. Kenso와 같은 기교파 밴드들이 주목받던 시기에 Asturias의 상대적으로 단순한 접근법은 아쉬움을 주었던 것으로 보입니다.</p>
              </div>
              
              <div className="bg-white p-3 rounded">
                <p className="text-xs">Computer programming을 활용한 음악 제작이 아직 생소하던 시기의 평가로, 현재의 관점에서는 다르게 받아들여질 수 있는 작품입니다.</p>
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