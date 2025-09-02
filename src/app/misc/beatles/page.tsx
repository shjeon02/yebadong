import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beatles 디스코그래피 | Misc | Yebadong',
  description: 'The Beatles 앨범 목록과 상세 정보 모음 - shimrox 편집',
};

export default function BeatlesPage() {
  const albums = [
    {
      title: "Please Please Me",
      date: "1963.3.22",
      hasLink: true,
      link: "/misc/please-please-me"
    },
    {
      title: "With the Beatles",
      date: "1963.11.22",
      hasLink: false
    },
    {
      title: "A Hard Day's Night",
      date: "1964.7.10",
      hasLink: false
    },
    {
      title: "Beatles for Sale",
      date: "1964.12.4",
      hasLink: false
    },
    {
      title: "Help!",
      date: "1965.8.6",
      hasLink: false
    },
    {
      title: "Rubber Soul",
      date: "1965.12.3",
      hasLink: false
    },
    {
      title: "Revolver",
      date: "1966.8.5",
      hasLink: true,
      link: "/misc/revolver"
    },
    {
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      date: "1967.6.2",
      hasLink: true,
      link: "/misc/sgt-pepper"
    },
    {
      title: "Magical Mystery Tour",
      date: "1967.11.27",
      hasLink: true,
      link: "/misc/magical-mystery-tour"
    },
    {
      title: "The Beatles (A.K.A White)",
      date: "1968.11.22",
      hasLink: true,
      link: "/misc/white-album"
    },
    {
      title: "Yellow Submarine",
      date: "1969.1.17",
      hasLink: false
    },
    {
      title: "Abbey Road",
      date: "1969.9.26",
      hasLink: true,
      link: "/misc/abbey-road"
    },
    {
      title: "Let it Be",
      date: "1970.5.8",
      hasLink: true,
      link: "/misc/let-it-be"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 tracking-wider">
              B E A T L E S
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <p className="text-lg text-gray-600">compiled by shimrox (shim@stein.kaist.ac.kr)</p>
            </div>
            <hr className="border-gray-300 mx-auto w-3/4" />
          </div>

          {/* Albums List */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center border-b border-gray-200 pb-4">
              디스코그래피
            </h2>
            
            <div className="space-y-4">
              {albums.map((album, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  
                  <div className="flex-grow">
                    {album.hasLink ? (
                      <Link 
                        href={album.link} 
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        {album.title} ({album.date})
                      </Link>
                    ) : (
                      <span className="text-gray-700 font-medium">
                        {album.title} ({album.date})
                      </span>
                    )}
                  </div>
                  
                  {album.hasLink && (
                    <div className="text-blue-500 text-sm ml-2">
                      📄
                    </div>
                  )}
                </div>
              ))}
              
              {/* Additional Links */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  <div className="flex-grow">
                    <span className="text-gray-700 font-medium">
                      Almost Every Lyrics in Alphabet order
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      ※ 가사 모음 페이지 (추후 구현 예정)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">🎵 About The Beatles Collection</h3>
            <div className="leading-relaxed space-y-3">
              <p>
                이 컬렉션은 The Beatles의 주요 스튜디오 앨범들을 연대순으로 정리한 것입니다. 
                각 앨범은 발매일과 함께 표시되어 있으며, 상세한 분석이 가능한 앨범들은 링크로 연결되어 있습니다.
              </p>
              <p>
                특히 <strong>Revolver</strong>, <strong>Sgt. Pepper's</strong>, <strong>White Album</strong>, 
                <strong>Abbey Road</strong> 등 주요 작품들의 상세 분석을 만나보실 수 있습니다.
              </p>
              <p className="text-yellow-300 font-medium">
                💿 총 13개의 정규 스튜디오 앨범 (1963-1970)
              </p>
            </div>
          </div>

          {/* Footer Credits */}
          <div className="bg-gray-100 p-4 rounded-lg mt-8 text-sm text-gray-600">
            <div className="text-center">
              <p>
                <strong>Long Dal</strong>, shjeon@cclab.kaist.ac.kr<br/>
                Computer Control Laboratory, Electrical Engineering, KAIST
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-8">
            <Link 
              href="/misc" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Misc 섹션으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
