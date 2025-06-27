import Link from "next/link";

export default function ArsNova() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Ars Nova</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-2">일본 프로그레시브 록의 선구자</h3>
              <p><strong>Ars Nova</strong>는 일본의 프로그레시브 록 밴드로, 1990년대에 활발히 활동했습니다. 이 밴드는 클래식적인 요소와 프로그레시브 록을 결합한 독특한 사운드로 유명합니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>클래식 음악의 영향을 강하게 받은 <strong>심포닉 프로그레시브 록</strong>을 구사하며, 특히 키보드와 현악기의 조화가 뛰어난 밴드로 평가받습니다. 일본 프로그레시브 록의 독특한 색채를 잘 보여주는 대표적인 그룹입니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">추천 포인트</h4>
              <p>클래식과 프로그레시브 록의 융합을 좋아하는 분들에게 특히 추천할 만한 밴드입니다. 일본 특유의 섬세함과 정교함이 돋보이는 연주를 들을 수 있습니다.</p>
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