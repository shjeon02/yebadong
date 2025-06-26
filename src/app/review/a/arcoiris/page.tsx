import React from "react";

export default function ArcoIrisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Arco Iris</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-sm text-gray-600 mb-2">아르헨티나 출신의 프로그레시브 록 밴드</p>
        </div>

        <div className="space-y-4 text-gray-800 leading-relaxed">
          <h2>***** Arco Iris / Sudamerica (Music Hall)*****</h2>
          
          <p>
            아르헨티나 출신의 프로그레시브 록 밴드로, 남미 록 음악의 독특한 색채를 
            프로그레시브 록에 접목시킨 것으로 유명하다.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold text-blue-700">특징</p>
            <ul className="list-disc list-inside space-y-1">
              <li>아르헨티나 출신의 프로그레시브 록 밴드</li>
              <li>남미 록 음악의 독특한 색채</li>
              <li>라틴 아메리카 프로그레시브 록의 대표주자</li>
              <li>전통적인 남미 음악 요소와 프로그레시브 록의 결합</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="font-semibold text-blue-700">앨범</p>
            <p><strong>Sudamerica</strong> (Music Hall 레이블)</p>
            <p>남미 프로그레시브 록의 특색이 잘 드러난 대표작</p>
          </div>
        </div>
      </div>
    </div>
  );
} 