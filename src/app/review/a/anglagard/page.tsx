import Link from "next/link";

export default function Anglagard() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Anglagard</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Anglagard는 스웨덴의 프로그레시브 록 밴드로, 1992년에 "Hybris"라는 앨범을 발표했습니다. 이 앨범은 북유럽 특유의 서정성과 복잡한 구조, 그리고 변화무쌍한 전개가 특징입니다.
        </p>
        <p>
          멜로트론과 기타, 플루트의 조화가 인상적이며, 곡마다 변화무쌍한 전개와 풍부한 사운드가 돋보입니다. 북유럽 프로그레시브 록을 좋아하는 분들에게 추천할 만한 앨범입니다.
        </p>
      </div>
    </div>
  );
} 