"use client";
import Link from "next/link";

export default function FoodBrainPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Food Brain</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 일본
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">특징:</span> 일본 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">시대:</span> 1970년대 활동
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">일본 프로그레시브 록 밴드</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Food Brain은 일본의 프로그레시브 록 밴드입니다. 
                일본 프로그레시브 록 씬의 여러 밴드 중 하나로 활동했습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                원본 리뷰에서는 상세한 내용을 확인할 수 없었지만, 일본 
                프로그레시브 록에 관심이 있는 분들에게는 체크해볼 만한 밴드입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Far East Family Band, Flied Egg 등과 함께 일본 프로그레시브 록의 
                초기 발전에 기여한 밴드들 중 하나입니다.
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