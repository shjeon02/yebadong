import Link from "next/link";

export default function Anglagard() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Anglagard</h2>
        
        <p className="mb-2 whitespace-pre-line">[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        
        <p className="mb-2 whitespace-pre-line">Anglagard는 스웨덴의 프로그레시브 록 밴드로, 1992년에 "Hybris"라는 앨범을 발표했습니다. 이 앨범은 북유럽 특유의 서정성과 복잡한 구조, 그리고 변화무쌍한 전개가 특징입니다.</p>
        
        <p className="mb-2 whitespace-pre-line">멜로트론과 기타, 플루트의 조화가 인상적이며, 곡마다 변화무쌍한 전개와 풍부한 사운드가 돋보입니다. 북유럽 프로그레시브 록을 좋아하는 분들에게 추천할 만한 앨범입니다.</p>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">메뉴로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 