import Link from "next/link";

export default function AnneBriggs() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Anne Briggs</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h3 className="font-semibold text-lg mb-2">영국 포크의 순수함</h3>
              <p><strong>Anne Briggs</strong>는 영국의 포크 싱어송라이터로, 1971년에 동명의 앨범 "Anne Briggs"를 발표했습니다.</p>
            </div>
            
            <div className="bg-green-50 p-3 rounded">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>순수한 포크 사운드:</strong> 어떤 장식도 없는 담백한 어쿠스틱 사운드</li>
                <li><strong>아름다운 여성 보컬:</strong> 맑고 투명한 목소리가 인상적</li>
                <li><strong>영국 포크 전통:</strong> 영국 포크 특유의 서정성과 깊이</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-3 rounded">
              <h4 className="font-semibold mb-2">앨범의 매력</h4>
              <p>이 앨범은 순수한 포크 사운드와 아름다운 여성 보컬이 돋보이는 작품입니다. 곡마다 담백한 사운드와 진솔한 감성이 인상적이며, 영국 포크 특유의 서정성이 잘 드러납니다.</p>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded">
              <h4 className="font-semibold mb-2">추천 포인트</h4>
              <p>여성 보컬 포크를 좋아하는 분들에게 추천할 만한 앨범입니다. 복잡한 편곡이나 화려한 연주보다는 순수한 목소리와 기타 반주만으로 깊은 감동을 전하는 작품으로 평가받고 있습니다.</p>
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