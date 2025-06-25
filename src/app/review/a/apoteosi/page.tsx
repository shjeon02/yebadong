import Link from "next/link";

export default function Apoteosi() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Apoteosi</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[김진석, jindor@mmrnd.sec.samsung.co.kr]</p>
        <p>
          Apoteosi는 이탈리아의 프로그레시브 록 밴드로, 1975년에 동명의 앨범 "Apoteosi"를 발표했습니다. 이 앨범은 서정적인 멜로디와 클래식적인 분위기, 그리고 여성 보컬이 돋보이는 작품입니다.
        </p>
        <p>
          이탈리아 록 특유의 감성과 함께, 곡마다 변화무쌍한 전개와 풍부한 사운드가 인상적입니다. 여성 보컬 프로그레시브 록을 좋아하는 분들에게 추천할 만한 앨범입니다.
        </p>
      </div>
    </div>
  );
} 