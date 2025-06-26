import Link from "next/link";

export default function AtollPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Atoll</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">프랑스의 프로그레시브 록 밴드</p>
        </div>

        <div className="space-y-4 leading-relaxed">
          <p>Atoll은 프랑스 출신의 프로그레시브 록 밴드로, 1970년대 프랑스 프로그레시브 록 씬에서 활동한 밴드이다.</p>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">밴드 특징</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>프랑스의 프로그레시브 록 밴드</li>
              <li>1970년대 프랑스 프로그레시브 록 씬 활동</li>
              <li>프랑스 특유의 우아하고 섬세한 사운드</li>
              <li>유럽 대륙 프로그레시브 록의 특색</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">음악적 특징</h3>
            <p>프랑스 프로그레시브 록 특유의 우아하고 섬세한 사운드를 선보였으며, 특히 키보드와 멜로디 라인에서 프랑스적 감성이 잘 드러나는 음악을 연주했다.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 