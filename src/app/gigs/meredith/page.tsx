import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Meredith Monk 서울대 강당 1997 - Concert Review | Yebadong',
  description: 'Meredith Monk 콘서트 리뷰 (1997년 10월 9-10일, 서울대 강당)',
};

export default function MeredithPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">Meredith Monk</h1>
          <p className="text-lg text-gray-600 mb-2">서울대 강당</p>
          <p className="text-base text-gray-600">1997년 10월 9-10일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">보컬 익스텐디드 테크닉의 예술</h3>
              <p className="text-sm leading-relaxed">
                Meredith Monk의 공연은 전통적인 음악의 경계를 뛰어넘는 실험적인 보컬 퍼포먼스였습니다. 
                그녀만의 독특한 보컬 익스텐디드 테크닉과 미니멀한 구성은 관객들에게 
                완전히 새로운 음악적 경험을 선사했습니다. 2일간의 공연을 통해 
                현대 실험음악의 진수를 느낄 수 있었습니다.
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