import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fun - 재미있는 글들 | Yebadong',
  description: '예바동의 유머러스한 글들과 재미있는 포스트 모음',
};

export default function FunPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Fun</h1>
          <p className="text-base text-muted">재미있는 글들과 유머러스한 포스트</p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Humorous Posts Section */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center border-b border-muted pb-4">
              Humorous Posts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/fun/yebadong" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">예바당이란???</div>
                <div className="text-sm text-muted">예바동의 정체성에 대한 유머러스한 정의</div>
              </Link>
              
              <Link href="/fun/worst96" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Worst Top 10 in Prog 1996</div>
                <div className="text-sm text-muted">1996년 프로그레시브 록 최악의 목록</div>
              </Link>
              
              <Link href="/fun/ybdlogo" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">YeBaDong Logo의 변천사</div>
                <div className="text-sm text-muted">예바동 로고의 역사적 변화 과정</div>
              </Link>
              
              <Link href="/fun/ledzeppelin" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Led Zeppelin이란 가수는?</div>
                <div className="text-sm text-muted">레드 제플린에 대한 재미있는 패러디</div>
              </Link>
              
              <Link href="/fun/essay1" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 1: 영국의 제2세대 Progressive Rock</div>
                <div className="text-sm text-muted">1980년대 후반 영국 프로그 밴드들 소개</div>
              </Link>
              
              <Link href="/fun/essay2" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 2: Progressive Rock Style</div>
                <div className="text-sm text-muted">프로그레시브 록 스타일 분류와 특징</div>
              </Link>
              
              <Link href="/fun/essay3" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 3: 프로그레시브락이란 무엇인가?</div>
                <div className="text-sm text-muted">음악학적 관점에서 본 프로그레시브 록</div>
              </Link>
              
              <Link href="/fun/essay4" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 4: 한일 매니아들의 만남</div>
                <div className="text-sm text-muted">월드컵 기념 한일 유러피안락 매니아 교류</div>
              </Link>
              
              <Link href="/fun/essay5" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 5: Canterbury Family</div>
                <div className="text-sm text-muted">캔터베리 패밀리의 역사와 계보</div>
              </Link>
              
              <Link href="/fun/essay6" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 6: 영국 제2세대 Progressive Rock</div>
                <div className="text-sm text-muted">Supernatural Fairytales - Art Rock의 시대</div>
              </Link>
              
              <Link href="/fun/essay7" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                <div className="font-semibold text-primary mb-1">Essay 7: 피터 가브리엘의 Genesis 탈퇴</div>
                <div className="text-sm text-muted">1975년 충격적인 발표와 Genesis의 미래</div>
              </Link>
            </div>
          </div>

          {/* Additional Fun Content */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center border-b border-muted pb-4">
              재미있는 자료들
            </h2>
            
            <div className="text-center">
              <p className="text-muted mb-6">
                예바동의 유머와 재미가 가득한 글들을 모았습니다.<br />
                프로그레시브 록과 관련된 다양한 재미있는 이야기들을 만나보세요.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="font-bold text-yellow-800 mb-2">🎭 유머</div>
                  <div className="text-yellow-700">예바동만의 독특한 유머 감각</div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-800 mb-2">📝 패러디</div>
                  <div className="text-blue-700">음악과 문화에 대한 재치있는 패러디</div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-800 mb-2">🎨 창작물</div>
                  <div className="text-green-700">커뮤니티 구성원들의 창의적 작품</div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4 text-center">Fun Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div>
                <div className="font-bold text-2xl text-purple-600">11</div>
                <div className="text-purple-700">재미있는 포스트</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-purple-600">90년대</div>
                <div className="text-purple-700">시대적 배경</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-purple-600">🎸</div>
                <div className="text-purple-700">록 음악 중심</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-purple-600">😄</div>
                <div className="text-purple-700">유머 가득</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
