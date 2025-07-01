import Link from 'next/link';

export default function CarpeDiemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Carpe Diem</h1>
          <p className="text-lg text-purple-600">순간을 붙잡아라 - 프로그레시브 록</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-purple-700">밴드명 의미:</span> "순간을 붙잡아라" (라틴어)</p>
              <p><span className="font-semibold text-purple-700">장르:</span> Progressive Rock</p>
            </div>
            <div>
              <p><span className="font-semibold text-purple-700">특징:</span> 철학적 메시지</p>
              <p><span className="font-semibold text-purple-700">컨셉:</span> 현재 순간의 소중함</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Carpe Diem의 철학</h2>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">라틴어 격언의 음악적 구현</h3>
            <p className="text-purple-700 mb-4">
              "Carpe Diem"은 고대 로마 시인 호라티우스의 유명한 격언으로, 
              "현재를 붙잡아라", "오늘을 즐겨라"라는 의미를 담고 있습니다.
            </p>
            <div className="bg-white p-4 rounded border-l-2 border-purple-300">
              <p className="text-purple-800 font-medium">
                이 밴드는 그 철학적 메시지를 프로그레시브 록이라는 장르를 통해 
                음악적으로 표현하고자 했습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">🎵 Carpe Diem의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-purple-700">
            <div>
              <h4 className="font-semibold mb-2">철학적 접근:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 현재 순간의 소중함 강조</li>
                <li>• 라틴어 격언의 음악적 해석</li>
                <li>• 삶의 의미에 대한 성찰</li>
                <li>• 시간의 흐름과 영원성</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 프로그레시브 록 장르</li>
                <li>• 서정적이고 사색적인 분위기</li>
                <li>• 복합적인 구성과 전개</li>
                <li>• 깊이 있는 메시지 전달</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-purple-600 text-sm">
            9/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 