import Link from "next/link";

export default function AprilFool() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">April Fool</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
              <h3 className="font-semibold text-lg mb-2">일본 사이키델릭/프로그레시브 록</h3>
              <p><strong>April Fool</strong>은 일본의 사이키델릭/프로그레시브 록 밴드로, 1969년에 "The April Fool"이라는 앨범을 발표했습니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>이 앨범은 <strong>실험적인 사운드</strong>와 <strong>변화무쌍한 전개</strong>, 그리고 <strong>일본 록 특유의 감성</strong>이 돋보입니다. 1960년대 후반 일본 록의 실험정신을 잘 보여주는 작품입니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2">추천 포인트</h4>
              <p>일본 록의 실험성과 창의성을 좋아하는 분들에게 추천할 만한 밴드입니다. 1960년대 일본 사이키델릭 록의 독특한 매력을 경험할 수 있습니다.</p>
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