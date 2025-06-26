import Link from "next/link";

export default function Ange() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Ange</h2>
        
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        
        <p className="mb-2 whitespace-pre-line">Ange는 프랑스의 대표적인 프로그레시브 록 밴드로, 1970년대에 활발히 활동했습니다. 이 밴드는 연극적인 무대 연출과 서정적인 멜로디, 그리고 프랑스어 가사가 특징입니다.</p>
        
        <p className="mb-2 whitespace-pre-line">대표 앨범으로는 "Au-delà du Délire", "Le Cimetière des Arlequins" 등이 있으며, 프랑스 프로그레시브 록의 정수를 보여주는 밴드입니다. 프랑스 록을 좋아하는 분들에게 추천할 만한 밴드입니다.</p>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 