import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2nd YBD Special Show of ProRock | Yebadong',
  description: '1994년 7월 23일 두 번째 예바동 감상회',
};

export default function Gig2Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">2nd YBD Special Show of ProRock</h1>
          <p className="text-base text-[#0000aa]">두 번째 예바동 프로그레시브 록 감상회</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1994년 7월 23일 토요일</p>
                  <p><strong>장소:</strong> 한국과학기술원 석향</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">참석자</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div>이훈구</div>
                <div>김성우</div>
                <div>김형석</div>
                <div>이강영</div>
                <div>최창규</div>
                <div>신인철</div>
                <div>조승모</div>
                <div>이윤직</div>
                <div>장민수</div>
                <div>엄태덕</div>
                <div>김재열</div>
                <div>이규철</div>
              </div>
            </div>

            {/* Poll Results */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">Poll 결과</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>1위:</strong> Magam / HHAI</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>1위:</strong> Outer Limits / The Scene of the Pale Blue</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>3위:</strong> Yes / Gates of Delirium</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>4위:</strong> Yes / Sound Chaser</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>4위:</strong> Yes / Close To The Edge</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Magma / Kobah</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Marillion / Grendel</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Osanna / Ora Caldo</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Osanna / Fiume</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>10위:</strong> Magma / "La" Dawotsin</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>10위:</strong> Osanna / Canzona</span>
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">프로그램</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0000aa] mb-3">I. British Super Art Rock Group Special No. YES</h3>
                <p className="text-sm mb-3"><strong>발표자:</strong> 김재열(pastel)</p>
                
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>1) Sound Chaser</strong>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>2) And You And I</strong>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>3) Close to the Edge</strong>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>4) Gates of Delirium</strong>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg">
                <h4 className="font-bold mb-2">Yes 소개</h4>
                <p className="text-sm leading-relaxed">
                  1969년 그룹명과 동일한 1집을 Atlantic Label로 발매하면서 등장, Beatles의 해체, 
                  Led Zeppelin, Pink Floyd의 탄생과 걸음을 같이하여 25년여 꾸준한 활동을 벌인 Yes는 
                  Progressive Rock의 큰 줄기가 되고 있다. Jon Anderson(voc), Chris Squire(bass), 
                  Tony Kaye(kbd), Bill Bruford(drum), Peter Banks(gtr)의 Line-up으로 출발, 
                  Steve Howe(gtr)와 Rick Wakeman(kbd)을 영입하여 그룹의 전성기를 맞았으며, 
                  Alan White(drum), Patrick Moraz(kbd)을 거쳐 여러 훌륭한 앨범을 만들어 냈다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center space-x-4">
              <Link
                href="/gigs/1"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 1회 감상회
              </Link>
              <Link
                href="/misc/session1"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 1회 감상회
              </Link>
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
              <Link
                href="/misc/session3"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                3회 감상회 →
              </Link>
              <Link
                href="/gigs/3"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                3회 감상회 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}