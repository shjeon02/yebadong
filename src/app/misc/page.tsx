import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Misc - 기타 정보 | Yebadong',
  description: '프로그레시브 록 관련 기타 정보 및 자료 모음',
};

export default function MiscPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Misc</h1>
          <p className="text-base text-muted">프로그레시브 록 관련 기타 정보 및 자료</p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Misc Information Section */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Rocking the Classics Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                Rocking the Classics - English Progressive Rock and the Counterculture 번역문
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Link href="/misc/chapters" className="block p-4 bg-blue-50 border border-blue-200 rounded-md hover:border-blue-300 transition-colors hover:bg-blue-100">
                    <div className="font-semibold text-blue-800 mb-1">📚 Rocking the Classics 번역 모음</div>
                    <div className="text-sm text-blue-600">Edward Macan의 프로그레시브 록 학술서 번역</div>
                    <div className="text-xs text-green-600 mt-2">✓ Chapter 1-2 복원됨</div>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="text-sm text-muted p-4 bg-blue-50 rounded-lg">
                    <p className="text-center">📚 Copyright by Edward Macan</p>
                    <p className="text-center">NewYork Oxford University Press 1997</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Information Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/misc/island100" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">아일랜드 선정 프로그레시브 음반 100선</div>
                  <div className="text-sm text-muted">하이텔 동호회 아일랜드가 엄선한 음반 100선</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
                
                <Link href="/misc/artrock" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">Artrock magazine index</div>
                  <div className="text-sm text-muted">정철님의 눈부신 노가다의 산물</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
                
                <Link href="/misc/myprog" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">내가 생각하는 프로그레시브</div>
                  <div className="text-sm text-muted">김용석님의 정의 내리기</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
                
                <Link href="/misc/progsiwan" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">프로그레시브, 그 신비를 벗긴다</div>
                  <div className="text-sm text-muted">성시완님의 84년6월 '월간팝송'에 실린 글</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
                
                <Link href="/misc/highschool" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">고등학생의 프로그레시브락 소개</div>
                  <div className="text-sm text-muted">정철님이 고등학교때 교지에 쓰신 글</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
                
                <Link href="/misc/neo-britain" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">1980s 영국 Neo Progressive Rock 소사</div>
                  <div className="text-sm text-muted">brave님의 네오 프로그레시브 록 역사 (1981-1984)</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Lyrics Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Lyrics & Albums</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/misc/pros-cons" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">The Pros and Cons of Hitchhiking - Roger Waters</div>
                  <div className="text-sm text-muted">Lyrics Analysis</div>
                </Link>
                
                <Link href="/misc/abbey-road" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">The Beatles: Abbey Road</div>
                  <div className="text-sm text-muted">앨범 트랙 리스트와 정보</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/beatles" className="block p-4 bg-blue-50 border border-blue-200 rounded-md hover:border-blue-300 transition-colors hover:bg-blue-100">
                  <div className="font-semibold text-blue-800 mb-1">🎵 Beatles Discography</div>
                  <div className="text-sm text-blue-600">비틀즈 앨범 모음</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/please-please-me" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">Please Please Me (1963)</div>
                  <div className="text-sm text-muted">Beatles 데뷔 앨범</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/revolver" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">Revolver (1966)</div>
                  <div className="text-sm text-muted">실험적 사운드의 걸작</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/sgt-pepper" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">Sgt. Pepper's (1967)</div>
                  <div className="text-sm text-muted">개념 앨범의 정점</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/magical-mystery-tour" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">Magical Mystery Tour (1967)</div>
                  <div className="text-sm text-muted">사이키델릭 사운드</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/white-album" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">White Album (1968)</div>
                  <div className="text-sm text-muted">더블 앨범의 실험</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/let-it-be" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">Let It Be (1970)</div>
                  <div className="text-sm text-muted">마지막 정규 앨범</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>

                <Link href="/misc/eng-beatles" className="block p-4 bg-red-50 border border-red-200 rounded-md hover:border-red-300 transition-colors hover:bg-red-100">
                  <div className="font-semibold text-red-800 mb-1">🇬🇧 Beatles (English)</div>
                  <div className="text-sm text-red-600">영문 디스코그래피</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Fun Section Link */}
            <div className="mb-8 text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Humorous Posts</h3>
              <p className="text-muted mb-4">재미있는 글들이 Fun 섹션으로 이동했습니다.</p>
              <Link 
                href="/fun" 
                className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fun 페이지로 이동
              </Link>
            </div>
          </div>

          {/* Gathering Link */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              YBD Special Show of ProgRock Music
            </h2>
            <p className="text-muted mb-6">
              예바동 감상회가 독립적인 섹션으로 이동했습니다.
            </p>
            <Link 
              href="/gathering" 
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              감상회 페이지로 이동
            </Link>
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