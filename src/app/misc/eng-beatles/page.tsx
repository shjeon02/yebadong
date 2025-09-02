import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles Discography | Misc | Yebadong',
  description: 'The Beatles album collection and information - English version',
};

export default function EngBeatlesPage() {
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

          {/* English Introduction */}
          <div className="bg-blue-100 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-800 mb-4">🎵 About This Collection</h2>
            <div className="text-blue-700 leading-relaxed">
              <p>
                This is the English version of The Beatles discography collection. 
                It features the complete studio album catalog from their debut "Please Please Me" (1963) 
                to their final release "Let It Be" (1970).
              </p>
              <p className="mt-3">
                Each album entry includes release dates, and detailed analyses are available 
                for major works including comprehensive track lists and historical context.
              </p>
            </div>
          </div>

          {/* Albums List */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center border-b border-gray-200 pb-4">
              Complete Studio Albums
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
              
              {/* Additional Content */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                  <div className="flex-grow">
                    <span className="text-gray-700 font-medium">
                      Almost Every Lyrics in Alphabet order
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      ※ Comprehensive lyrics collection (to be implemented)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Beatles Timeline */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">📅 The Beatles Era (1963-1970)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Early Period (1963-1965)</h4>
                <ul className="space-y-1">
                  <li>• Beat boom and Beatlemania</li>
                  <li>• Live performance era</li>
                  <li>• Simple love songs and covers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-300 mb-2">Studio Period (1966-1970)</h4>
                <ul className="space-y-1">
                  <li>• End of touring (1966)</li>
                  <li>• Experimental studio work</li>
                  <li>• Concept albums and avant-garde</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Credits */}
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
            <div className="space-x-4">
              <Link 
                href="/misc/beatles" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
              >
                한국어 버전 보기
              </Link>
              
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to Misc Section
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
