import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Styx & Bad Company 2001 - Concert Review | Yebadong',
  description: 'Styx와 Bad Company 콘서트 리뷰 (2001년 5월 20일, Texas)',
};

export default function StyxBadPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">Styx & Bad Company</h1>
          <p className="text-lg text-gray-300">2001년 5월 20일, Verizon wireless Amphitheater Selma, TX</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">클래식 록의 만남</h3>
              <p className="text-sm leading-relaxed">
                Styx와 Bad Company의 합동 공연은 70년대 클래식 록의 향수를 불러일으키는 
                멋진 밤이었습니다. 두 밴드 모두 각자의 대표곡들을 열정적으로 연주했습니다.
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