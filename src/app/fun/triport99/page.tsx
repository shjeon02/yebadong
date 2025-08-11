import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '99 Triport Song Do Rock Festival - Concert Review | Yebadong',
  description: 'Triport Song Do Rock Festival 리뷰 (1999년 7월 31일, 송도해수욕장)',
};

export default function Triport99Page() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            '99 Triport Song Do Rock Festival
          </h1>
          <p className="text-lg text-gray-600 mb-2">송도해수욕장</p>
          <p className="text-base text-gray-600">1999년 7월 31일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">해변에서 펼쳐진 록 페스티벌</h3>
              <p className="text-sm leading-relaxed">
                송도해수욕장에서 열린 록 페스티벌은 정말 특별한 경험이었습니다. 
                바다를 배경으로 한 야외 무대에서 다양한 록 밴드들의 공연을 감상할 수 있었고, 
                여름밤의 시원한 바다 바람과 함께하는 음악은 잊을 수 없는 추억을 만들어주었습니다. 
                한국 록 음악의 새로운 가능성을 보여준 의미 있는 페스티벌이었습니다.
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