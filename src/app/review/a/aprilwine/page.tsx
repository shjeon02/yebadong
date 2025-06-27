import Link from "next/link";

export default function AprilWine() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">April Wine</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-2">캐나다 록의 전통</h3>
              <p><strong>April Wine</strong>은 캐나다의 록 밴드로, 1970년대와 80년대에 활발히 활동했습니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>이 밴드는 <strong>멜로딕 록</strong>과 <strong>하드 록</strong>을 아우르는 다양한 음악을 선보였습니다. 캐나다 록의 전통과 감성을 잘 담아낸 밴드로 평가받습니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">대표곡</h4>
              <ul className="space-y-1">
                <li>• <strong>"Just Between You and Me"</strong></li>
                <li>• <strong>"I Like to Rock"</strong></li>
              </ul>
              <p className="mt-2">멜로딕 록을 좋아하는 분들에게 특히 추천할 만한 밴드입니다.</p>
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