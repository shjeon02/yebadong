import Link from "next/link";

export default function AsturiasPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Asturias</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="font-semibold text-lg">Asturias - Circle in the Forest (KICS2824)</p>
          <p className="text-sm text-gray-600 mt-2">[이동훈, meddle@nuri.net]</p>
        </div>

        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">멤버 구성</h3>
            <div className="text-sm space-y-1">
              <p><strong>Yoh Ohyama</strong> - computer programming, synthesizer, e. guitar, a. guitar, bass, percussion</p>
              <p><strong>Haruhiko Tsuda</strong> - e. guitar</p>
              <p><strong>Akira Hanamoto</strong> - Keys</p>
              <p><strong>Kazumi Sakurai</strong> - drum, percussion</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Track List</h3>
            <ol className="text-sm space-y-1">
              <li>1. Ryu-Hyo 4:59</li>
              <li>2. Clairvoyance 5:20</li>
              <li>3. Angel Tree 4:53</li>
              <li>4. Tightrope 6:55</li>
              <li>5. Circle in the Forest 22:21</li>
            </ol>
          </div>

          <div className="space-y-4">
            <p>Asturias 는 총 3매의 작품을 발표하고 사라진 일본의 퓨젼 밴드입니다. 해외에서는 한때 상당한 인기를 얻었지만 일본 퓨젼계에선 극히 '평범한 존재'입니다.</p>

            <p>상당 부분이 computer programming 으로 처리되어 연주가 '단조'롭다는 인상을 전달해 줍니다. 또한 악상도 비교적 simple 해서 웅장 & 화려하고 변박이 심한 - Kenso 부류의 - 퓨젼과는 상당한 거리가 있습니다.</p>

            <p>구지 유러피언 아티스트와 비교한다면 Mike Oldfield 정도? 이런 수준의 작품이 2 차례에 걸쳐서 발매된 것을 본다면... Jo Yun 의 [Mobius Strip]도 그리 수준이 떨어지는 작품이 아니라는 것을 간접적으로 느낄 수 있었습니다.</p>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">주목할만한 곡들</h3>
              <p>가장 주목할만한 곡은 Kenso 의 [2] 스타일을 모방한 <strong>Tightrope</strong>, 그리고 22 분에 달하는 <strong>Circle in the Forest</strong> 입니다.</p>
              
              <p className="mt-2">하지만 Kenso 의 [2] 의 가장 큰 매력중의 하나가 힘을 바탕으로 하는 다이나믹인데... Asturias 는 맥빠진 연주를 들려주고 있습니다.</p>
              
              <p className="mt-2">Circle in the Forest 는 그나마 이 앨범의 가치를 상승시켜주는 곡인데... (하지만 2천엔(2만원)의 가치는 없는듯... ^^;;;) 뭐... 좀 지겹게 느껴지실 분들도 있을 것입니다. *^^*</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg text-center">
              <p className="font-bold text-lg">한마디로 영양가 없는 앨범 !!!</p>
              <p className="text-sm mt-2">- 이동훈</p>
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