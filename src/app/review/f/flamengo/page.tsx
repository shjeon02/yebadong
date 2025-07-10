"use client";
import Link from "next/link";

export default function FlamengoPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Flamengo</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 체코슬로바키아
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">앨범:</span> Kure V Hodinkach
            </div>
            <div>
              <span className="font-semibold">특징:</span> 동유럽 프로그레시브 록
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">체코슬로바키아 프로그레시브 록</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Flamengo는 체코슬로바키아 출신의 프로그레시브 록 밴드입니다. 
                "Kure V Hodinkach" 앨범으로 알려진 밴드입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                원본 리뷰에서는 상세한 내용을 확인할 수 없었지만, 동유럽 
                프로그레시브 록에 관심이 있는 분들에게는 흥미로운 밴드일 것입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                공산권 시절 동유럽에서 활동한 프로그레시브 록 밴드들의 
                독특한 음악적 특색을 경험해볼 수 있는 밴드입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 