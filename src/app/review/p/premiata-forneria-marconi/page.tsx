import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premiata Forneria Marconi (PFM) - 밴드 리뷰 | Yebadong",
  description: "PFM의 리뷰 모음",
};

export default function PFMPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">Premiata Forneria Marconi (PFM)</h1>
        <p className="text-center text-lg mb-8 text-muted">이탈리아 프로그레시브 록의 대표 밴드</p>
        
        <div className="space-y-8">
          <div className="bg-surface-subtle border border-muted rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Per Un Amico</h2>
            <p className="text-sm text-muted mb-4">by meddle (이동훈)</p>
            <div className="prose max-w-none">
              <p>PFM의 대표작 Per Un Amico에 대한 리뷰입니다.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/review/p" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
            P 밴드 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}
