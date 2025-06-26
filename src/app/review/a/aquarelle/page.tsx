import Link from "next/link";

export default function AquarellePage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Aquarelle</h2>
        <p className="mb-2 whitespace-pre-line">아름답고 상큼한 '수채화' - Aquarelle(아꽈렐)</p>
        <p className="mb-2 whitespace-pre-line">
아름답고 상큼한 '수채화' - Aquarelle(아꽈렐)의 음악을 처음 접하게 된 것은 
이들의 대표작인 &lt;Sous un arbre&gt;이다. 이 작품을 들으면 관념적이고 
추상적인 느낌보다는 구체적이고 실제적인 느낌을 받게 된다.

솔직하게 밝히면 Aquarelle이 '모범답안'이라면 다른 많은 프랑스 밴드들은 
그 모범답안을 따라하려고 노력하는 학생들 같은 느낌이다.
        </p>
        <p className="mb-2 whitespace-pre-line">**특징**
- 프랑스의 대표적인 프로그레시브 록 밴드
- 수채화 같은 섬세하고 아름다운 사운드
- 구체적이고 실제적인 느낌의 음악
- 프랑스 프로그레시브 록의 모범적 사례</p>
        <p className="mb-2 whitespace-pre-line">**대표작**
**Sous Un Arbre** - 나무 아래서
이들의 대표작으로, 마치 수채화를 보는 듯한 섬세하고 아름다운 사운드가 특징이다.</p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 