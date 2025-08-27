import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rocking the Classics 번역문 | Yebadong',
  description: 'Edward Macan의 Rocking the Classics: English Progressive Rock and the Counterculture 번역 모음',
};

export default function ChaptersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Rocking the Classics</h1>
          <p className="text-lg text-gray-600 mb-2">English Progressive Rock and the Counterculture</p>
          <p className="text-base text-gray-600">by Edward L. Macan (Oxford University Press, 1997)</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
          {/* Book Info */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">책 소개</h2>
            <div className="prose prose-blue max-w-none text-gray-600">
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
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">번역 목록</h2>
            
            <div className="grid gap-4">
              
              {/* Chapter 1 */}
              <Link 
                href="/misc/chapters/ch1" 
                className="block p-4 bg-white border border-gray-200 rounded-md hover:border-blue-300 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">1장 - 프로그레시브락의 탄생</h3>
                    <p className="text-sm text-gray-600 mb-2">The Birth of Progressive Rock</p>
                    <p className="text-xs text-gray-500">
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
                className="block p-4 bg-white border border-gray-200 rounded-md hover:border-blue-300 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">2장 - 프로그레시브락의 스타일: 음악</h3>
                    <p className="text-sm text-gray-600 mb-2">The Progressive Rock Style: The Music</p>
                    <p className="text-xs text-gray-500">
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
                className="block p-4 bg-white border border-gray-200 rounded-md hover:border-blue-300 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">5장 - 네 개의 다른 프로그레시브 락 작품들</h3>
                    <p className="text-sm text-gray-600 mb-2">Four Different Progressive Rock Pieces</p>
                    <p className="text-xs text-gray-500">
                      ELP Tarkus, Yes Close to the Edge, Genesis Firth of Fifth, Pink Floyd Wish You Were Here 분석
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 리베로</span>
                  </div>
                </div>
              </Link>

                        {/* Chapter 6 */}
          <Link
            href="/misc/chapters/ch6"
            className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-primary mb-1">6장 - 관련 음악 양식들</h3>
                <p className="text-sm text-muted mb-2">Related Styles</p>
                <p className="text-xs text-muted">
                  블루스, 포크, 재즈, 클래식과의 관계. 심포닉 록, 아트 록, 크라우트 록, 캔터베리 사운드
                </p>
              </div>
              <div className="ml-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 리베로</span>
              </div>
            </div>
          </Link>

          {/* Chapter 7 */}
          <Link
            href="/misc/chapters/ch7"
            className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-primary mb-1">7장 - 프로그레시브 락의 사회학</h3>
                <p className="text-sm text-muted mb-2">A Sociology of Progressive Rock</p>
                <p className="text-xs text-muted">
                  중산층 지식인 배경, 영국 남동부 문화, 미국에서의 상업적 성공, 클래식/록 융합의 사회학
                </p>
              </div>
              <div className="ml-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 리베로</span>
              </div>
            </div>
          </Link>

          {/* Chapter 8 */}
          <Link 
            href="/misc/chapters/ch8" 
            className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-primary mb-1">8장 - 프로그레시브 락의 비평적 수용</h3>
                <p className="text-sm text-muted mb-2">The Critical Reception of Progressive Rock</p>
                <p className="text-xs text-muted">
                  초기 찬사에서 펑크의 반발, 그리고 현대적 재평가까지. 프로그레시브 락 비평사의 변천
                </p>
              </div>
              <div className="ml-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">번역: 리베로</span>
              </div>
            </div>
          </Link>

              {/* Chapter 3 - Untranslated */}
              <Link 
                href="/misc/chapters/ch3" 
                className="block p-4 bg-gray-50 border border-gray-300 rounded-md hover:border-gray-400 transition-colors hover:bg-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">3장 - 프로그레시브 락 스타일: 시각적 요소들</h3>
                    <p className="text-sm text-gray-600 mb-2">The Progressive Rock Style: The Visuals</p>
                    <p className="text-xs text-gray-500">
                      앨범 커버 아트, 무대 연출, 의상 등 프로그레시브 락의 시각적 측면 분석
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">미번역</span>
                  </div>
                </div>
              </Link>

              {/* Chapter 4 - Untranslated */}
              <Link 
                href="/misc/chapters/ch4" 
                className="block p-4 bg-gray-50 border border-gray-300 rounded-md hover:border-gray-400 transition-colors hover:bg-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">4장 - 프로그레시브 락 스타일: 가사</h3>
                    <p className="text-sm text-gray-600 mb-2">The Progressive Rock Style: The Lyrics</p>
                    <p className="text-xs text-gray-500">
                      문학적 영향, 철학적 주제, 서사적 구조 등 프로그레시브 락 가사의 특징
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">미번역</span>
                  </div>
                </div>
              </Link>

              {/* Chapter 9 - Untranslated */}
              <Link 
                href="/misc/chapters/ch9" 
                className="block p-4 bg-gray-50 border border-gray-300 rounded-md hover:border-gray-400 transition-colors hover:bg-gray-100"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-700 mb-1">9장 - 1976년 이후의 프로그레시브 락</h3>
                    <p className="text-sm text-gray-600 mb-2">Progressive Rock after 1976</p>
                    <p className="text-xs text-gray-500">
                      펑크의 충격, 네오 프로그레시브의 등장, 글로벌 확산과 현대적 발전
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">미번역</span>
                  </div>
                </div>
              </Link>

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
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
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

