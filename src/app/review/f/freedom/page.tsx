"use client";
import Link from "next/link";

export default function FreedomPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Freedom</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 미상
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">특징:</span> 프로그레시브 록 밴드
            </div>
            <div>
              <span className="font-semibold">시대:</span> 정보 부족
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">프로그레시브 록 밴드</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Freedom은 프로그레시브 록 밴드로 메인 목록에 포함되어 있지만, 
                원본 리뷰에서는 상세한 정보를 확인할 수 없었습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                밴드명이 "Freedom"으로 매우 일반적이어서 동명의 다른 밴드들과 
                구분이 필요할 수 있습니다. 구체적인 정보는 추가 조사가 필요합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                프로그레시브 록 컬렉터들에게는 발굴의 재미를 줄 수 있는 
                미지의 밴드 중 하나입니다.
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