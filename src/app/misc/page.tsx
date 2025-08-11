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
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center border-b border-muted pb-4">
              Auxiliary Information
            </h2>
            
            {/* Rocking the Classics Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                Rocking the Classics - English Progressive Rock and the Counterculture 번역문
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Link href="/misc/ch1" className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                    <span className="font-semibold text-primary">1장</span> 프로그레시브락의 탄생 (The Birth of Progressive Rock)
                  </Link>
                  <Link href="/misc/ch2" className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                    <span className="font-semibold text-primary">2장</span> 프로그레시브락의 스타일: 음악 (The Progressive Rock Style: The Music)
                  </Link>
                  <Link href="/misc/ch5" className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                    <span className="font-semibold text-primary">5장</span> 네 개의 다른 프로그레시브 락 작품들 (Four Different Progressive Rock Pieces)
                  </Link>
                  <Link href="/misc/ch6" className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                    <span className="font-semibold text-primary">6장</span> 관련 음악 양식들 (Related Styles)
                  </Link>
                  <Link href="/misc/ch7" className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                    <span className="font-semibold text-primary">7장</span> 프로그레시브 락의 사회학 (A Sociology of Progressive Rock)
                  </Link>
                  <Link href="/misc/ch8" className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                    <span className="font-semibold text-primary">8장</span> 프로그레시브 락의 비평적 수용 (The Critical Reception of Progressive Rock)
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
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Lyrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/misc/pros-cons" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">The Pros and Cons of Hitchhiking - Roger Waters</div>
                  <div className="text-sm text-muted">Lyrics Analysis</div>
                </Link>
                
                <Link href="/misc/abbey-road" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary mb-1">The Beatles: Abbey Road</div>
                  <div className="text-sm text-muted">앨범 트랙 리스트와 정보</div>
                  <div className="text-xs text-green-600 mt-1">✓ 페이지 생성됨</div>
                </Link>
              </div>
            </div>

            <hr className="my-8 border-muted" />

            {/* Humorous Posts Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">Humorous Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/fun/yebadong" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary">예바당이란???</div>
                </Link>
                
                <Link href="/fun/worst96" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary">Worst Top 10 in Prog 1996</div>
                </Link>
                
                <Link href="/fun/ybdlogo" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary">YeBaDong Logo 의 변천사</div>
                </Link>
                
                <Link href="/fun/ledzeppelin" className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover">
                  <div className="font-semibold text-primary">Led Zeppelin이란 가수는?</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Concert Information Section */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center border-b border-muted pb-4">
              YBD Special Show of ProgRock Music
            </h2>
            
            <div className="text-center mb-6">
              <p className="text-muted mb-4">
                지금까지 예바동 감상회를 정리했습니다. 예바동 탄생이래 가진 감상회입니다.<br />
                동민 여러분의 음악 취향도 알 수 있고, 소중한 자료 입니다.
              </p>
            </div>

            {/* Venue Information */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">주요 감상회 장소</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/misc/session-venues/manplus" className="text-yellow-600 hover:underline">Man plus (테헤란로)</Link>
                <Link href="/misc/session-venues/freebird" className="text-yellow-600 hover:underline">FreeBird (홍대앞)</Link>
                <Link href="/misc/session-venues/baechugage" className="text-yellow-600 hover:underline">배추가게 (건대앞)</Link>
                <Link href="/misc/session-venues/cars" className="text-yellow-600 hover:underline">CARS (홍대앞)</Link>
              </div>
            </div>

            {/* Concert List */}
            <div className="space-y-3">
              {[
                { num: "1", title: "최초모임", date: "1994/6/5", link: "/misc/session1" },
                { num: "2", title: "Yes, Magma, Osanna 등", date: "1994/7/23", link: "/misc/session2" },
                { num: "3", title: "1994년 송년 음악 감상회", date: "1994", link: "/misc/session3" },
                { num: "3.5", title: "My Favorites.. 비공식감상회", date: "1994/11/18", link: "/gigs/3-5" },
                { num: "4", title: "King Crimson Special", date: "1995/3/25", link: "/misc/session4" },
                { num: "5", title: "Gentle Giant Special", date: "1995/6/10", link: "/misc/session5" },
                { num: "6", title: "실황 영상 감상회", date: "1995/8/12", link: "/gigs/6" },
                { num: "7", title: "즉흥 감상회, South-American 특집", date: "1996/3/1", link: "/gigs/7" },
                { num: "8", title: "Scandinavian 특집", date: "1996/5/4", link: "/gigs/8" },
                { num: "9", title: "일본 특집", date: "1996/6/15", link: "/gigs/9" },
                { num: "10", title: "Budgie, German Rock Special", date: "1996/8/3", link: "/gigs/10" },
                { num: "11", title: "Rush 특집, 비디오 감상", date: "1996/9/29", link: "/gigs/11" },
                { num: "12", title: "RIO 특집", date: "1996/12/14", link: "/gigs/12" },
                { num: "13", title: "영상 감상회, Porcupine Tree 특집", date: "1997/3/22", link: "/gigs/13" },
                { num: "14", title: "Argentina 특집, 영상 감상회", date: "1997/6/7", link: "/gigs/14" },
                { num: "15", title: "Spain 특집", date: "1997/12/20", link: "/gigs/15" },
                { num: "16", title: "Polish prog rock, Japanese Folk 특집", date: "1998/4/11", link: "/gigs/16" },
                { num: "17", title: "Canadian prog rock 특집", date: "1998/6/27", link: "/gigs/17" },
                { num: "19", title: "Flower Kings, Neo-Prog 특집", date: "1999/5/22", link: "/gigs/19" },
                { num: "20", title: "Goblin, Mardel-X label special, Favorites 소개", date: "1999/7/17", link: "/gigs/20" },
                { num: "21", title: "Brazil prog band, Fish 근작 앨범, 이창식 앨범소개 등 favorites", date: "1999/8/28", link: "/gigs/21" },
                { num: "22", title: "남미 및 최근 앨범 소개", date: "1999/11/14", link: "/gigs/22" },
                { num: "23", title: "예바동 역사상 가장 조촐한 모임", date: "2000/3/25", link: "/gigs/23" },
                { num: "24", title: "The Flower Kings 등 새 앨범과 Italian super band live", date: "2000/8/12", link: "/gigs/24" },
                { num: "25", title: "Artrock이외 장르곡들과 인티고 웹라디오 소개", date: "2001/6/16", link: "/gigs/25" },
                { num: "26", title: "DVD 감상회", date: "2002/7/6", link: "/gigs/26" }
              ].map(({ num, title, date, link }) => (
                <Link
                  key={num}
                  href={link}
                  className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-bold min-w-[2rem] text-center">
                        {num}
                      </span>
                      <span className="font-medium text-primary">{title}</span>
                    </div>
                    <span className="text-sm text-muted">({date})</span>
                  </div>
                </Link>
              ))}

              {/* Special Events */}
              <div className="pt-4 border-t border-muted">
                <h4 className="font-semibold text-primary mb-3">특별 이벤트</h4>
                <Link
                  href="/gigs/co-1"
                  className="block p-3 mb-2 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-primary">제1회 연합 감상회</span>
                      <span className="ml-2 text-sm text-muted">Island,지음,ARC와 최초연합감상회</span>
                    </div>
                    <span className="text-sm text-muted">(1997/9/7)</span>
                  </div>
                </Link>
                
                <Link
                  href="/misc/session-cyber"
                  className="block p-3 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-primary">제1회 사이버감상회</span>
                      <span className="ml-2 text-sm text-muted">Electronics, Psychedelic rock</span>
                    </div>
                    <span className="text-sm text-muted">(1999/9/15)</span>
                  </div>
                </Link>
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