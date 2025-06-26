import Link from "next/link";

export default function Asia() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Asia</h2>
        
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        
        <p className="mb-2 whitespace-pre-line">Asia는 영국의 슈퍼그룹으로, 1980년대 초에 결성되어 "Asia"라는 앨범으로 데뷔했습니다. 이 밴드는 멜로딕 록과 프로그레시브 록의 조화가 특징입니다.</p>
        
        <p className="mb-2 whitespace-pre-line">대표곡으로는 "Heat of the Moment", "Only Time Will Tell" 등이 있으며, 멜로딕 록을 좋아하는 분들에게 추천할 만한 밴드입니다.</p>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 