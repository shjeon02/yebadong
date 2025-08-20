import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'YBD Special Show of ProgRock Music - 감상회 | Yebadong',
  description: '예바동 프로그레시브 록 음악 감상회 모음 - 1994년부터 2002년까지의 모든 감상회 기록',
};

export default function GatheringPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">YBD Special Show of ProgRock Music</h1>
          <p className="text-base text-muted">예바동 프로그레시브 록 음악 감상회</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Concert Information Section */}
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6 text-center border-b border-muted pb-4">
              감상회 역사
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
                <Link href="/gathering/session-venues/manplus" className="text-yellow-600 hover:underline">Man plus (테헤란로)</Link>
                <Link href="/gathering/session-venues/freebird" className="text-yellow-600 hover:underline">FreeBird (홍대앞)</Link>
                <Link href="/gathering/session-venues/baechugage" className="text-yellow-600 hover:underline">배추가게 (건대앞)</Link>
                <Link href="/gathering/session-venues/cars" className="text-yellow-600 hover:underline">CARS (홍대앞)</Link>
              </div>
            </div>

            {/* Concert List */}
            <div className="space-y-3">
              {[
                { num: "1", title: "최초모임", date: "1994/6/5", link: "/gathering/session1" },
                { num: "2", title: "Yes, Magma, Osanna 등", date: "1994/7/23", link: "/gathering/session2" },
                { num: "3", title: "1994년 송년 음악 감상회", date: "1994", link: "/gathering/session3" },
                { num: "3.5", title: "My Favorites.. 비공식감상회", date: "1994/11/18", link: "/gathering/session3-5" },
                { num: "4", title: "King Crimson Special", date: "1995/3/25", link: "/gathering/session4" },
                { num: "5", title: "Gentle Giant Special", date: "1995/6/10", link: "/gathering/session5" },
                { num: "6", title: "실황 영상 감상회", date: "1995/8/12", link: "/gathering/session6" },
                { num: "7", title: "즉흥 감상회, South-American 특집", date: "1996/3/1", link: "/gathering/session7" },
                { num: "8", title: "Scandinavian 특집", date: "1996/5/4", link: "/gathering/session8" },
                { num: "9", title: "일본 특집", date: "1996/6/15", link: "/gathering/session9" },
                { num: "10", title: "Budgie, German Rock Special", date: "1996/8/3", link: "/gathering/session10" },
                { num: "11", title: "Rush 특집, 비디오 감상", date: "1996/9/29", link: "/gathering/session11" },
                { num: "12", title: "RIO 특집", date: "1996/12/14", link: "/gathering/session12" },
                { num: "13", title: "영상 감상회, Porcupine Tree 특집", date: "1997/3/22", link: "/gathering/session13" },
                { num: "14", title: "Argentina 특집, 영상 감상회", date: "1997/6/7", link: "/gathering/session14" },
                { num: "15", title: "Spain 특집", date: "1997/12/20", link: "/gathering/session15" },
                { num: "16", title: "Polish prog rock, Japanese Folk 특집", date: "1998/4/11", link: "/gathering/session16" },
                { num: "17", title: "Canadian prog rock 특집", date: "1998/6/27", link: "/gathering/session17" },
                { num: "19", title: "Flower Kings, Neo-Prog 특집", date: "1999/5/22", link: "/gathering/session19" },
                { num: "20", title: "Goblin, Mardel-X label special, Favorites 소개", date: "1999/7/17", link: "/gathering/session20" },
                { num: "21", title: "Brazil prog band, Fish 근작 앨범, 이창식 앨범소개 등 favorites", date: "1999/8/28", link: "/gathering/session21" },
                { num: "22", title: "남미 및 최근 앨범 소개", date: "1999/11/14", link: "/gathering/session22" },
                { num: "23", title: "예바동 역사상 가장 조촐한 모임", date: "2000/3/25", link: "/gathering/session23" },
                { num: "24", title: "The Flower Kings 등 새 앨범과 Italian super band live", date: "2000/8/12", link: "/gathering/session24" },
                { num: "25", title: "Artrock이외 장르곡들과 인티고 웹라디오 소개", date: "2001/6/16", link: "/gathering/session25" },
                { num: "26", title: "DVD 감상회", date: "2002/7/6", link: "/gathering/session26" }
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
                  href="/gathering/special/co-1"
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
                  href="/gathering/special/cyber"
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

            {/* Statistics */}
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">감상회 통계</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-yellow-700">
                <div className="text-center">
                  <div className="font-bold text-lg">26회</div>
                  <div>정기 감상회</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">2회</div>
                  <div>특별 이벤트</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">8년</div>
                  <div>활동 기간</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">4곳</div>
                  <div>주요 장소</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-8">
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
