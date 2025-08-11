import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozric Tentacles @ Boston 2000 - Concert Review | Yebadong',
  description: 'Ozric Tentacles 콘서트 리뷰 (2000년 10월 23일, Boston)',
};

export default function OzricPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">Ozric Tentacles @ Boston</h1>
          <p className="text-lg text-gray-300">2000년 10월 23일, USA</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">사이키델릭 록의 마스터</h3>
              <p className="text-sm leading-relaxed">
                Ozric Tentacles의 라이브는 정말 환상적인 사이키델릭 록 경험이었습니다. 
                Ed Wynne의 기타와 신시사이저가 만들어내는 우주적인 사운드는 관객들을 
                완전히 다른 차원으로 데려갔습니다.
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