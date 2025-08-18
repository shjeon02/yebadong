import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제1회 예바동 사이버 감상회 - Electronics in 90s | Yebadong',
  description: '90년대 일렉트로닉 음악 특별 사이버 감상회',
};

export default function CyberPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 text-black">제1회 예바동 사이버 감상회</h1>
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">- Electronics in 90's -</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Special Notice */}
            <div className="mb-8 p-6 bg-yellow-100 border border-yellow-400 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">🌐 사이버 감상회란?</h2>
              <p className="text-sm leading-relaxed mb-4">
                예바동 역사상 최초로 시도된 "사이버 감상회"는 인터넷을 통해 진행된 특별한 형태의 감상회입니다. 
                90년대 중반 인터넷이 보급되기 시작한 시기에, 물리적인 모임 대신 온라인으로 음악을 공유하고 
                토론하는 혁신적인 시도였습니다.
              </p>
              <p className="text-sm leading-relaxed">
                주제는 "Electronics in 90's"로, 90년대 일렉트로닉 음악의 흐름과 발전을 다루었습니다. 
                이는 기존의 프로그레시브 록 중심 감상회에서 벗어나 새로운 영역을 탐험한 의미 있는 시도였습니다.
              </p>
            </div>

            {/* Theme Overview */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">🎹 Electronics in 90's</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Ambient / New Age</h3>
                  <p className="text-sm">Brian Eno, Harold Budd, Steve Roach 등의 앰비언트 음악</p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Electronic Dance</h3>
                  <p className="text-sm">Techno, House, Trance 등 댄스 음악의 발전</p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Industrial / EBM</h3>
                  <p className="text-sm">Nine Inch Nails, Front 242 등의 인더스트리얼</p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Experimental</h3>
                  <p className="text-sm">Aphex Twin, Autechre 등의 실험적 전자음악</p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Neo-Classical</h3>
                  <p className="text-sm">Max Richter, Ólafur Arnalds 등의 신고전주의</p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <h3 className="font-bold mb-2">Synthwave / Retro</h3>
                  <p className="text-sm">80년대 회귀 신스웨이브 무브먼트</p>
                </div>
              </div>
            </div>

            {/* Technical Innovation */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">🔧 90년대 기술 혁신</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-purple-600 text-lg mr-3">•</span>
                  <div>
                    <h3 className="font-bold mb-1">디지털 샘플러의 보급</h3>
                    <p className="text-sm">Akai MPC, E-mu SP-1200 등의 샘플러가 음악 제작에 혁명을 일으킴</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 text-lg mr-3">•</span>
                  <div>
                    <h3 className="font-bold mb-1">MIDI 기술의 발전</h3>
                    <p className="text-sm">Musical Instrument Digital Interface를 통한 악기 간 통신 표준화</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 text-lg mr-3">•</span>
                  <div>
                    <h3 className="font-bold mb-1">컴퓨터 기반 음악 제작</h3>
                    <p className="text-sm">Cubase, Logic 등의 DAW(Digital Audio Workstation) 소프트웨어 등장</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 text-lg mr-3">•</span>
                  <div>
                    <h3 className="font-bold mb-1">CD 기술과 디지털 오디오</h3>
                    <p className="text-sm">Compact Disc 기술로 인한 음질 혁신과 디지털 음악의 대중화</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Impact */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">🌍 문화적 영향</h2>
              <div className="space-y-3">
                <p className="text-sm leading-relaxed">
                  90년대 일렉트로닉 음악은 단순한 음악 장르를 넘어 문화적 현상이 되었습니다. 
                  레이브 문화, 클럽 씬의 발전, 그리고 새로운 형태의 음악 경험을 제공했습니다.
                </p>
                <p className="text-sm leading-relaxed">
                  특히 인터넷의 발달과 함께 음악의 유통과 공유 방식이 혁신적으로 변화했으며, 
                  이는 음악 산업 전체에 큰 영향을 미쳤습니다.
                </p>
                <p className="text-sm leading-relaxed">
                  예바동의 이 사이버 감상회는 이러한 변화의 물결을 빠르게 감지하고 
                  새로운 음악 형태를 탐험한 선구적인 시도였습니다.
                </p>
              </div>
            </div>

            {/* Historical Significance */}
            <div className="mb-8 p-6 bg-orange-50 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-4">📚 역사적 의의</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>예바동 최초의 온라인 감상회 시도</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>프로그레시브 록을 넘어선 음악적 시야 확장</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>90년대 일렉트로닉 음악에 대한 체계적 접근</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>인터넷 시대 음악 공유 문화의 선구적 실험</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>기술과 음악의 결합에 대한 깊이 있는 탐구</span>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="text-center space-x-4">
              <Link
                href="/misc/session5"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                ← 5회 감상회
              </Link>
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}