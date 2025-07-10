"use client";
import Link from "next/link";

export default function FolquePage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Folque</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 노르웨이
            </div>
            <div>
              <span className="font-semibold">장르:</span> 포크 록, 프로그레시브 포크
            </div>
            <div>
              <span className="font-semibold">특징:</span> 노르웨이 전통 음악 계승
            </div>
            <div>
              <span className="font-semibold">시대:</span> 1970년대 활동
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">노르웨이 포크 록의 선구자</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Folque는 1970년대 노르웨이의 포크 록 밴드로, 노르웨이 전통 음악과 
                현대적인 록 사운드를 결합한 독특한 음악을 선보인 밴드입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                원본 리뷰에서는 상세한 내용을 확인할 수 없었지만, 스칸디나비아 
                포크 록에 관심이 있는 분들에게는 주목할 만한 밴드입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                전통적인 북유럽 포크 음악과 프로그레시브 록의 만남을 들어보고 
                싶은 분들에게 추천합니다.
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