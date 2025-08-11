import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ToTo 올림픽공원 1996 - Concert Review | Yebadong',
  description: 'ToTo 콘서트 리뷰 (1996년 4월 17일, 올림픽공원)',
};

export default function TotoPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">ToTo</h1>
          <p className="text-lg text-gray-600 mb-2">올림픽공원</p>
          <p className="text-base text-gray-600">1996년 4월 17일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">AOR의 대가들</h3>
              <p className="text-sm leading-relaxed">
                ToTo의 라이브는 80년대 AOR(Adult Oriented Rock)의 정수를 보여주는 공연이었습니다. 
                "Africa", "Rosanna" 같은 대표곡들이 연주될 때는 관객들의 열광적인 반응을 볼 수 있었습니다. 
                세련된 연주와 완벽한 하모니가 인상적이었던 공연이었습니다.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}