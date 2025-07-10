"use client";
import Link from "next/link";

export default function EnidPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Enid</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 영국</li>
              <li><strong>장르:</strong> 프로그레시브 록, 심포닉 록</li>
              <li><strong>리더:</strong> Robert John Godfrey</li>
              <li><strong>특징:</strong> 클래시컬 록의 대표주자</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>오케스트라와 록의 결합</li>
              <li>클래시컬한 어레인지</li>
              <li>웅장한 심포닉 사운드</li>
              <li>Robert John Godfrey의 작곡</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">리뷰 상태</h3>
            <p className="text-sm">
              원본 HTML에서 Enid에 대한 상세한 리뷰는 발견되지 않았습니다. 
              추후 더 많은 정보를 추가할 예정입니다.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 