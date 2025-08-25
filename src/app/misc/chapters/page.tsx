import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rocking the Classics 번역문 | Yebadong',
  description: 'Edward Macan의 Rocking the Classics: English Progressive Rock and the Counterculture 번역 모음',
};

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Rocking the Classics</h1>
          <p className="text-lg text-muted mb-2">English Progressive Rock and the Counterculture</p>
          <p className="text-base text-muted">by Edward L. Macan (Oxford University Press, 1997)</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
          {/* Book Info */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">책 소개</h2>
            <div className="prose prose-blue max-w-none text-muted">
              <p className="mb-4">
                미국의 음악학자 에드워드 매컨(Edward L. Macan)이 저술한 프로그레시브 록에 대한 학술적 연구서입니다. 
                1960년대 중반부터 1970년대 중반까지 영국을 중심으로 발전한 프로그레시브 록을 당시의 사회문화적 맥락에서 분석한 작품입니다.
              </p>
              <p className="mb-4">
                단순한 음악사적 접근을 넘어서 히피 문화, 사이키델릭 운동, 반문화(counterculture) 등 1960년대 사회 변화와 
                프로그레시브 록의 상관관계를 깊이 있게 탐구한 연구서로 평가받고 있습니다.
              </p>
            </div>
          </div>

          {/* Chapters List */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">번역 목록</h2>
            
            <div className="grid gap-4">
              
              {/* Chapter 1 */}
              <Link 
                href="/misc/chapters/ch1" 
                className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-primary mb-1">1장 - 프로그레시브락의 탄생</h3>
                    <p className="text-sm text-muted mb-2">The Birth of Progressive Rock</p>
                    <p className="text-xs text-muted">
                      1960년대 하위문화의 등장과 사이키델릭에서 프로그레시브 록으로의 발전 과정
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 홍사여리</span>
                  </div>
                </div>
              </Link>

              {/* Chapter 2 */}
              <Link 
                href="/misc/chapters/ch2" 
                className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-primary mb-1">2장 - 프로그레시브락의 스타일: 음악</h3>
                    <p className="text-sm text-muted mb-2">The Progressive Rock Style: The Music</p>
                    <p className="text-xs text-muted">
                      프로그레시브 록의 음악적 특징과 구조적 분석
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 홍사여리</span>
                  </div>
                </div>
              </Link>

              {/* Chapter 5 */}
              <Link 
                href="/misc/chapters/ch5" 
                className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-primary mb-1">5장 - 네 개의 다른 프로그레시브 락 작품들</h3>
                    <p className="text-sm text-muted mb-2">Four Different Progressive Rock Pieces</p>
                    <p className="text-xs text-muted">
                      ELP Tarkus, Yes Close to the Edge, Genesis Firth of Fifth, Pink Floyd Wish You Were Here 분석
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 리베로</span>
                  </div>
                </div>
              </Link>

              {/* Chapters 6-8 */}
              <div className="border border-yellow-300 rounded-md p-4 bg-yellow-50">
                <h3 className="font-semibold text-yellow-800 mb-2">6-8장 (리베로님 번역)</h3>
                <div className="space-y-2 text-sm text-yellow-700">
                  <p>• 6장 - 관련 음악 양식들 (Related Styles)</p>
                  <p>• 7장 - 프로그레시브 락의 사회학 (A Sociology of Progressive Rock)</p>
                  <p>• 8장 - 프로그레시브 락의 비평적 수용 (The Critical Reception of Progressive Rock)</p>
                </div>
                <p className="text-xs text-yellow-600 mt-3">
                  ※ 해당 장들은 다른 번역자에 의해 번역되어 복원 예정입니다.
                </p>
              </div>

              {/* Missing Chapters */}
              <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
                <h3 className="font-semibold text-gray-600 mb-2">미번역 장</h3>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>• 3장 - The Progressive Rock Style: The Visuals</p>
                  <p>• 4장 - The Progressive Rock Style: The Lyrics</p>
                  <p>• 9장 - The Progressive Rock after 1976</p>
                </div>
              </div>

            </div>
          </div>

          {/* Copyright Notice */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-800 mb-3">⚠️ 저작권 안내</h3>
            <div className="text-sm text-red-700 space-y-2">
              <p>
                이 번역문들은 순수한 개인적 목적으로 제작된 것으로, 저작권 침해 소지가 있습니다.
              </p>
              <p>
                상업적 이용이나 무단 복제/배포를 금지하며, 학술적 참고 목적으로만 활용해 주시기 바랍니다.
              </p>
              <p className="font-semibold">
                원저작권은 Edward L. Macan과 Oxford University Press에 있습니다.
              </p>
            </div>
          </div>

          {/* Book Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">📚 원서 정보</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>제목:</strong> Rocking the Classics: English Progressive Rock and the Counterculture</p>
              <p><strong>저자:</strong> Edward L. Macan</p>
              <p><strong>출판사:</strong> Oxford University Press</p>
              <p><strong>출간:</strong> November 1996 (Paperback)</p>
              <p><strong>ISBN:</strong> 0195098889</p>
              <p><strong>크기:</strong> 0.82 x 9.19 x 6.13 inches</p>
            </div>
          </div>

        </div>

        {/* Navigation */}
        <div className="text-center">
          <Link 
            href="/misc" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Misc 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}

