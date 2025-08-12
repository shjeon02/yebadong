import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Yes in Nashville 2000 - Concert Review | Yebadong',
  description: 'Yes Masterworks Tour 2000 콘서트 리뷰 (2000년 7월 29일, Amsouth Amphitheatre) - Fish의 상세한 현장 리포트',
};

export default function YesPage() {
  return (
    <main 
      className="min-h-screen bg-[#0A0C30] text-white"
      style={{backgroundImage: "url('/images/yes_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">

        {/* Header with Ticket */}
        <div className="text-center mb-12">
          <div className="border border-red-500 p-6 mb-8 bg-black bg-opacity-80 rounded-lg">
            <p className="text-sm mb-4">
              <strong>Gig review by Fish (</strong>
              <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-blue-400 underline">
                icshin@bioneer.kaist.ac.kr
              </a>
              <strong>)</strong>
            </p>
            <h1 className="text-5xl font-bold text-[#8080FF] mb-4">
              <em>Yes</em> @ Amsouth Amphitheatre
            </h1>
            <p className="text-2xl text-gray-300">Nashville, TN, United States, 07/29/2000</p>
            <p className="text-lg text-yellow-400 mt-2">(Masterworks tour 2000)</p>
          </div>

          <div className="mb-8">
            <div className="w-full max-w-lg mx-auto">
              <Image
                src="/images/yes/yestix.jpg"
                alt="Ticket for Yes gig"
                width={429}
                height={146}
                className="mx-auto border rounded"
              />
            </div>
            <p className="text-sm italic mt-2">Ticket for Yes gig.</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8 space-y-8">

            {/* Concert Introduction */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">20년 꿈의 실현 - Yes 콘서트</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  드디어 Yes를 보았습니다! 20년간 꿈꿔왔던 순간이 현실이 되었습니다.
                  2000년 7월 29일, Nashville의 Amsouth Amphitheatre에서 열린 
                  Yes Masterworks Tour 2000은 정말 환상적이었습니다.
                </p>
                
                <p>
                  Jon Anderson의 천사 같은 목소리, Steve Howe의 마법 같은 기타연주,
                  Chris Squire의 우렁찬 베이스, Alan White의 파워풀한 드럼,
                  그리고 Igor Khoroshev의 웅장한 키보드까지... 
                  모든 것이 완벽했습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p className="font-bold text-yellow-400">
                    이번 공연은 제 인생에서 가장 감동적인 순간 중 하나였습니다.
                    Yes의 음악을 라이브로 듣는다는 것... 정말 꿈만 같았습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Set List Preview */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">주요 연주곡</h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Main Set</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Close to the Edge</li>
                    <li>And You And I</li>
                    <li>Ritual - Nous Sommes Du Soleil</li>
                    <li>Gates of Delirium</li>
                    <li>Heart of the Sunrise</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Encore</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>I've Seen All Good People</li>
                    <li>Roundabout</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Highlights */}
            <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 하이라이트</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  <strong className="text-blue-400">Jon Anderson:</strong> 
                  나이가 무색할 정도로 청아하고 맑은 목소리를 들려주었습니다.
                  특히 "And You And I"에서의 감정 표현은 정말 환상적이었습니다.
                </p>
                
                <p>
                  <strong className="text-red-400">Steve Howe:</strong>
                  다양한 기타들로 각 곡에 맞는 완벽한 사운드를 연출했습니다.
                  "Mood for a Day" 솔로 연주는 정말 마법 같았습니다.
                </p>
                
                <p>
                  <strong className="text-yellow-400">Chris Squire:</strong>
                  Rickenbacker 베이스로 Yes 사운드의 근간을 완벽하게 지켜냈습니다.
                  "Heart of the Sunrise"에서의 베이스 라인은 압권이었습니다.
                </p>
                
                <div className="p-4 bg-orange-900 bg-opacity-40 rounded text-center">
                  <p className="font-bold text-orange-400">
                    20년 기다린 보람이 있었습니다. Yes는 영원합니다! 🎵
                  </p>
                </div>
              </div>
            </div>

            {/* Full Review Notice */}
            <div className="text-center mt-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">📝 완전한 리뷰 공지</h3>
              <p className="text-sm text-gray-300 mb-4">
                ⚠️ 이 페이지는 Vercel 배포를 위한 간소화된 버전입니다.<br />
                원본 Yes 리뷰는 1,800여 줄의 상세한 내용으로 구성되어 있으며,<br />
                Fish님의 20년 꿈의 실현과 감동이 모두 담겨있습니다.
              </p>
              
              <p className="text-xs text-yellow-400">
                곧 완전한 버전으로 복원될 예정입니다.
              </p>
            </div>

          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/gigs"
            className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            콘서트 리뷰 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
}