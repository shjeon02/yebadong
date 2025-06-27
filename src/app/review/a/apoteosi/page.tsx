import Link from "next/link";

export default function Apoteosi() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Apoteosi</h2>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-2">이탈리아 프로그레시브 록의 서정성</h3>
              <p><strong>Apoteosi</strong>는 이탈리아의 프로그레시브 록 밴드로, 1975년에 동명의 앨범 "Apoteosi"를 발표했습니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>이 앨범은 <strong>서정적인 멜로디</strong>와 <strong>클래식적인 분위기</strong>, 그리고 <strong>여성 보컬</strong>이 돋보이는 작품입니다. 이탈리아 록 특유의 감성과 함께, 곡마다 변화무쌍한 전개와 풍부한 사운드가 인상적입니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">추천 포인트</h4>
              <p>여성 보컬 프로그레시브 록을 좋아하는 분들에게 특히 추천할 만한 앨범입니다. 이탈리아 프로그레시브 록의 아름다운 면을 잘 보여주는 작품으로 평가받습니다.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 