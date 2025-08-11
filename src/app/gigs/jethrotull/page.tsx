import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jethro Tull 2002 - Concert Review | Yebadong',
  description: 'Jethro Tull 콘서트 리뷰 (2002년 5월 5일)',
};

export default function JethroTullPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">Jethro Tull</h1>
          <p className="text-lg text-gray-300">2002년 5월 5일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            <div className="mb-8 p-6 bg-brown-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">플루트 록의 전설</h3>
              <p className="text-sm leading-relaxed">
                Ian Anderson의 플루트와 독특한 퍼포먼스로 유명한 Jethro Tull의 공연은 
                프로그레시브 포크 록의 진수를 보여주었습니다. 수십 년의 경력이 무색할 정도로 
                에너지 넘치는 공연이었습니다.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}