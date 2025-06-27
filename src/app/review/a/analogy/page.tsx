import Link from "next/link";

export default function Analogy() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Analogy</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-2">독일 프로그레시브 록의 실험정신</h3>
              <p><strong>Analogy</strong>는 독일 출신의 프로그레시브 록 밴드로, 1972년에 동명의 앨범 "Analogy"를 발표했습니다.</p>
            </div>
            
            <div className="bg-blue-50 p-3 rounded">
              <h4 className="font-semibold mb-2">주요 특징</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>여성 보컬:</strong> 독특한 매력의 여성 보컬이 특징</li>
                <li><strong>실험적 사운드:</strong> 독일 록 특유의 실험성과 변화무쌍한 전개</li>
                <li><strong>다양한 악기:</strong> 곡마다 다양한 악기와 사운드가 어우러진 독특한 분위기</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded">
              <h4 className="font-semibold mb-2">추천 포인트</h4>
              <p>여성 보컬 프로그레시브 록을 좋아하는 분들에게 추천할 만한 앨범입니다. 독일 록의 실험정신과 프로그레시브 록의 복합성이 잘 결합된 작품으로 평가받고 있습니다.</p>
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