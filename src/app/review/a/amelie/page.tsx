import Link from "next/link";

export default function AmelieReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Amelie</h2>
        <p className="mb-2 whitespace-pre-line">
Amelie 관련 리뷰 내용이 준비 중입니다.
        </p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 