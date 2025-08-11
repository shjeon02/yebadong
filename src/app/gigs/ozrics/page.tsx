import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozric Tentacles @ Jack Legs TN 2000 - Concert Review | Yebadong',
  description: 'Ozric Tentacles 콘서트 리뷰 (2000년 10월 31일, Tennessee)',
};

export default function OzricsPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">Ozric Tentacles @ Jack Leg's</h1>
          <p className="text-lg text-gray-300">2000년 10월 31일, TN, USA</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">할로윈 스페셜</h3>
              <p className="text-sm leading-relaxed">
                할로윈 밤에 열린 Ozric Tentacles의 공연은 정말 특별했습니다. 
                Jack Leg's라는 작은 베뉴에서의 친밀한 공연이었지만, 
                그들의 음악이 가진 우주적 에너지는 공간을 가득 채웠습니다.
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