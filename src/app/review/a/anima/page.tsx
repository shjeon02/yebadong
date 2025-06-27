import Link from "next/link";

export default function Anima() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Anima</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-2">독일 아방가르드 록의 실험정신</h3>
              <p><strong>Anima</strong>는 독일의 실험적/아방가르드 록 밴드로, 1970년대에 활발히 활동했습니다.</p>
            </div>
            
            <div className="bg-purple-50 p-3 rounded">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <ul className="space-y-2 text-sm">
                <li><strong>실험적 사운드:</strong> 전통적인 록 구조를 벗어난 자유로운 음악적 접근</li>
                <li><strong>즉흥 연주:</strong> 자유로운 즉흥 연주가 특징적</li>
                <li><strong>아방가르드 정신:</strong> 독일 록 특유의 실험성과 창의성</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-3 rounded">
              <h4 className="font-semibold mb-2">주요 앨범</h4>
              <ul className="space-y-1 text-sm">
                <li><strong>"Stürmischer Himmel"</strong> - 폭풍우 치는 하늘</li>
                <li><strong>"Musik für Alle"</strong> - 모든 이를 위한 음악</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-3 rounded">
              <h4 className="font-semibold mb-2">추천 대상</h4>
              <p>독일 아방가르드 록의 실험성과 창의성을 잘 보여주는 밴드입니다. 실험적 록을 좋아하는 분들에게 추천할 만한 밴드로, 전통적인 록 구조에 얽매이지 않는 자유로운 음악을 선보입니다.</p>
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