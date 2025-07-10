import Link from 'next/link';

export default function StromboliPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Stromboli</h1>
          <p className="text-xl text-gray-300">
            마그마의 음악적 요소를 가진 그룹
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Review Content */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">리뷰</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              마그마의 음악적 요소를 가지고 있는 그룹이다 해서 관심을 가졌던 그룹인데, 
              실상은 보편적인 락의 모양새를 하고 있습니다.
            </p>
            
            <p>
              미셸 파블리첵(Michel Pavlicek(철자 자신 없음))이라는 걸출한 기타리스트와 
              동구권 특유의 신비스런 맛을 지닌 여자 보컬리스트.
            </p>
            
            <p>
              역시 탄탄한 연주력. 두장짜리 앨범이죠. ^^;;;;
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">주요 멤버</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 미셸 파블리첵(Michel Pavlicek) - 기타 (철자 자신 없음)</li>
                <li>• 여자 보컬리스트 - 동구권 특유의 신비스런 맛</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-300">특징</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 마그마의 음악적 요소</li>
                <li>• 보편적인 락의 모양새</li>
                <li>• 걸출한 기타리스트</li>
                <li>• 탄탄한 연주력</li>
                <li>• 두장짜리 앨범</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/review/s/strawbs"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            ← Previous: Strawbs
          </Link>
          <Link 
            href="/review/s/supertramp"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            Next: Supertramp →
          </Link>
        </div>
      </main>
    </div>
  );
} 