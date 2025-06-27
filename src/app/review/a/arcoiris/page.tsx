import Link from "next/link";

export default function ArcoIrisPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Arco Iris</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-2">***** Arco Iris / Sudamerica (Music Hall) *****</h3>
              <p>아르헨티나 출신의 프로그레시브 록 밴드로, 남미 록 음악의 독특한 색채를 프로그레시브 록에 접목시킨 것으로 유명하다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <ul className="space-y-1">
                <li>• 아르헨티나 출신의 프로그레시브 록 밴드</li>
                <li>• 남미 록 음악의 독특한 색채</li>
                <li>• 라틴 아메리카 프로그레시브 록의 대표주자</li>
                <li>• 전통적인 남미 음악 요소와 프로그레시브 록의 결합</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">대표 앨범</h4>
              <p><strong>Sudamerica</strong> (Music Hall 레이블)</p>
              <p>남미 프로그레시브 록의 특색이 잘 드러난 대표작으로, 라틴 아메리카 음악의 독특한 매력을 프로그레시브 록의 형식으로 표현한 작품입니다.</p>
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