import Link from "next/link";

export default function ArmandoTirelliPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Armando Tirelli</h2>
        <p className="mb-2 whitespace-pre-line">이탈리아 출신의 프로그레시브 록 아티스트</p>
        <p className="mb-2 whitespace-pre-line">
Armando Tirelli는 이탈리아 출신의 프로그레시브 록 아티스트로, 
이탈리아 프로그레시브 록 씬에서 활동한 인물이다.
        </p>
        <p className="mb-2 whitespace-pre-line">**특징**
- 이탈리아 출신의 프로그레시브 록 아티스트
- 이탈리아 프로그레시브 록 씬의 일원
- 1970년대 이탈리아 록 음악의 특색을 보여주는 아티스트</p>
        <p className="mb-2 whitespace-pre-line">**배경**
1970년대 이탈리아는 프로그레시브 록의 황금기를 맞이했으며, 
PFM, Banco del Mutuo Soccorso, Le Orme 등과 함께 
이탈리아 프로그레시브 록의 풍성한 스펙트럼을 형성했다.</p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 