import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gigs - 콘서트 & 공연 리뷰 | Yebadong',
  description: '프로그레시브 록 콘서트 및 공연 리뷰 모음',
};

export default function GigsPage() {
  const gigs = [
    { t: "John Cage", f: "/fun/johncage" },
    { t: "Deep Purple (Seoul, '95.3.20)", f: "/fun/purple" },
    { t: "FreeSpirits", f: "/fun/freespirits" },
    { t: "Guitar Trio (예술의전당, '97.2.25)", f: "/fun/guitartrio" },
    { t: "Kronos Quartet (예술의전당, '96.5.31)", f: "/fun/kronosqt" },
    { t: "Pat Metheny (세종문화회관, '95.10.05)", f: "/fun/patmetheny" },
    { t: "Steve Vai (KBS 88 체육관, '97.2.19)", f: "/fun/stevevai" },
    { t: "ToTo (올림픽공원, '96.4.17)", f: "/fun/toto" },
    { t: "Meredith Monk (서울대 강당, '97.10.9-10)", f: "/fun/meredith" },
    { t: "'99 Triport Song Do Rock Festival (송도해수욕장, '99.7.31)", f: "/fun/triport99" },
    { t: "Dream Theater 2000 METROPOLIS Tour (올림픽 테니스 경기장, '00.5.6)", f: "/fun/dt2000" },
    { t: "Roger Waters 1999-2000 in the Flesh Tour (Antioch Tennessee, USA - Amsouth Amphitheater, 2000. 6. 6)", f: "/gigs/rogerwaters" },
    { t: "Kansas (Antioch Tennessee, USA - Amsouth Amphitheater, 2000. 7. 31)", f: "/gigs/kansas" },
    { t: "Yes (Antioch Tennessee, USA - Amsouth Amphitheater, 2000. 7. 31)", f: "/gigs/yes" },
    { t: "Camel (SF, USA - Great American music hall, 2000. 8. 27)", f: "/gigs/camel" },
    { t: "King Crimson (Tokyo, Japan - 2000. 10. 9)", f: "/gigs/king" },
    { t: "King Crimson (San Francisco, USA - 2000. 10. 21)", f: "/gigs/king2" },
    { t: "Ozric Tentacles (Boston, USA - 2000. 10. 23)", f: "/gigs/ozric" },
    { t: "Ozric Tentacles (Jack Leg's, TN, USA - 2000. 10. 31)", f: "/gigs/ozrics" },
    { t: "Styx and REO Speedwagon (Municipal Auditorium, TN, USA - 2001. 2. 3)", f: "/gigs/reo_styx" },
    { t: "이상은 (서울 - 2001. 4. 7)", f: "/gigs/sangeun" },
    { t: "Larry Carlton and Steve Lukather (Central city Millennium Hall, Seoul, 2001. 4. 15)", f: "/gigs/larry" },
    { t: "Styx and Bad Company (Verizon wireless Amphitheater Selma, TX, USA - 2001. 5. 20)", f: "/gigs/styx_bad" },
    { t: "King Crimson (12th and Porter, Nashville, TN, USA - 2001. 6.15,16)", f: "/gigs/king3" },
    { t: "Dream Theater (서울 - 2002. 4. 22)", f: "/gigs/dreamtheater2" },
    { t: "Jethro Tull (2002. 5.05)", f: "/gigs/jethrotull" }
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Gigs</h1>
          <p className="text-base text-muted">1995년부터 2007년까지의 콘서트 및 공연 리뷰</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
                   <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                     <p className="text-sm leading-relaxed">
                       <strong>참고:</strong> YBD 감상회는 <Link href="/misc" className="text-blue-600 hover:underline">기타 정보</Link>에서 확인하실 수 있습니다.
                     </p>
                   </div>
            
            <div className="grid grid-cols-1 gap-3">
              {gigs.map(({ t, f }) => (
                <Link
                  key={f}
                  href={f}
                  className="block p-4 bg-surface border border-muted rounded-md hover:border-primary/20 transition-colors hover:bg-surface-hover"
                >
                  <span className="text-primary hover:text-primary/80 transition-colors">
                    {t}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/review" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}