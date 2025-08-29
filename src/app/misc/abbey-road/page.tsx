import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Abbey Road - 앨범 트랙 리스트 | Yebadong',
  description: '비틀즈의 마지막 녹음 앨범 Abbey Road의 트랙 리스트와 정보',
};

export default function AbbeyRoadPage() {
  const tracks = [
    { 
      number: 1, 
      title: "Come Together", 
      side: "A", 
      composer: "Lennon-McCartney",
      vocalist: "John Lennon",
      duration: "4:20",
      recorded: "July 21, 1969",
      description: "존 레논의 걸작으로, 신비로운 가사와 강력한 베이스 라인이 특징",
      musicalFeatures: "D minor 키, 블루스 록 스타일, 베이스 기타가 주도하는 그루브"
    },
    { 
      number: 2, 
      title: "Something", 
      side: "A", 
      composer: "George Harrison",
      vocalist: "George Harrison",
      duration: "3:03",
      recorded: "April 16, May 2, 1969",
      description: "조지 해리슨이 작곡한 비틀즈 최고의 러브 송 중 하나",
      musicalFeatures: "C major 키, 아름다운 멜로디 라인과 기타 솔로"
    },
    { 
      number: 3, 
      title: "Maxwell's Silver Hammer", 
      side: "A", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "3:27",
      recorded: "July 9-11, August 6, 1969",
      description: "폴 매카트니의 다크 코미디 송, 뮤직홀 스타일의 곡",
      musicalFeatures: "D major 키, 실제 망치 소리와 anvil 타악기 사용"
    },
    { 
      number: 4, 
      title: "Oh! Darling", 
      side: "A", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "3:26",
      recorded: "April 20, July 17, August 11, 1969",
      description: "폴 매카트니의 파워풀한 보컬이 돋보이는 로큰롤 넘버",
      musicalFeatures: "A major 키, 1950년대 로큰롤과 R&B 스타일"
    },
    { 
      number: 5, 
      title: "Octopus' Garden", 
      side: "A", 
      composer: "Richard Starkey (Ringo Starr)",
      vocalist: "Ringo Starr",
      duration: "2:51",
      recorded: "April 26, July 17-18, 1969",
      description: "링고 스타의 두 번째 자작곡, 바다 속 환상을 그린 동화적 곡",
      musicalFeatures: "E major 키, 컨트리 록 스타일, 해양 효과음 사용"
    },
    { 
      number: 6, 
      title: "I Want You (She's So Heavy)", 
      side: "A", 
      composer: "Lennon-McCartney",
      vocalist: "John Lennon",
      duration: "7:47",
      recorded: "February 22, April 18, August 8, 1969",
      description: "존 레논이 오노 요코에 대한 사랑을 표현한 강렬한 곡",
      musicalFeatures: "D minor/Bb major, 헤비 록 사운드, 갑작스러운 페이드아웃"
    },
    { 
      number: 7, 
      title: "Here Comes The Sun", 
      side: "B", 
      composer: "George Harrison",
      vocalist: "George Harrison",
      duration: "3:05",
      recorded: "July 7-8, August 6, 15, 1969",
      description: "조지 해리슨의 대표작, 희망과 낙관을 노래한 명곡",
      musicalFeatures: "A major 키, 어쿠스틱 기타와 무그 신디사이저 조합"
    },
    { 
      number: 8, 
      title: "Because", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "John Lennon, Paul McCartney, George Harrison",
      duration: "2:45",
      recorded: "August 1, 4, 1969",
      description: "베토벤 '월광 소나타'에서 영감을 받은 환상적인 하모니",
      musicalFeatures: "C# minor 키, 3성부 하모니의 9번 오버더빙"
    },
    { 
      number: 9, 
      title: "You Never Give Me Your Money", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "4:02",
      recorded: "May 6, July 1, 15, August 5, 1969",
      description: "앨범 후반부 메들리의 시작, 비틀즈의 사업적 갈등을 암시",
      musicalFeatures: "여러 키 변화, 피아노 발라드에서 로큰롤로 전환"
    },
    { 
      number: 10, 
      title: "Sun King", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "John Lennon",
      duration: "2:26",
      recorded: "July 24-25, August 5, 1969",
      description: "몽환적인 분위기의 곡, 의미 없는 이탈리아어 가사",
      musicalFeatures: "C major 키, 재즈 화성과 보사노바 리듬"
    },
    { 
      number: 11, 
      title: "Mean Mr. Mustard", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "John Lennon",
      duration: "1:06",
      recorded: "July 24, August 5, 1969",
      description: "존 레논이 인도에서 쓴 짧은 캐릭터 스케치",
      musicalFeatures: "E major 키, 간단한 어쿠스틱 기타 반주"
    },
    { 
      number: 12, 
      title: "Polythene Pam", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "John Lennon",
      duration: "1:12",
      recorded: "July 25, 28, August 5, 1969",
      description: "존 레논이 리버풀 시절을 회상하며 쓴 로큰롤",
      musicalFeatures: "A major 키, 하드 로큰롤 스타일"
    },
    { 
      number: 13, 
      title: "She Came In Through The Bathroom Window", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "1:57",
      recorded: "July 25, 28, August 5, 1969",
      description: "실제 팬이 창문으로 침입한 사건에서 영감을 얻은 곡",
      musicalFeatures: "A major 키, 팝 록 스타일"
    },
    { 
      number: 14, 
      title: "Golden Slumbers", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "1:31",
      recorded: "July 2-3, 30, August 5, 1969",
      description: "17세기 자장가를 각색한 폴 매카트니의 아름다운 발라드",
      musicalFeatures: "Am/C major 키, 오케스트라 편곡"
    },
    { 
      number: 15, 
      title: "Carry That Weight", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney, John Lennon, George Harrison",
      duration: "1:36",
      recorded: "July 2-3, 30, August 5, 1969",
      description: "밴드 해체의 부담감을 노래한 곡, 3성부 하모니",
      musicalFeatures: "C major 키, 'You Never Give Me Your Money' 테마 재현"
    },
    { 
      number: 16, 
      title: "The End", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "2:20",
      recorded: "July 23, August 5, 7-8, 18, 1969",
      description: "비틀즈 커리어의 상징적 마무리, 3인의 기타 솔로 배틀",
      musicalFeatures: "A major 키, 링고의 유일한 드럼 솔로, 철학적 마지막 가사"
    },
    { 
      number: 17, 
      title: "Her Majesty", 
      side: "B", 
      composer: "Lennon-McCartney",
      vocalist: "Paul McCartney",
      duration: "0:23",
      recorded: "July 2, 1969",
      description: "숨겨진 트랙, 영국 여왕에 대한 경쾌한 23초 곡",
      musicalFeatures: "D major 키, 단순한 어쿠스틱 기타 반주"
    },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Album Art */}
        <div className="text-center mb-12">
          <div className="relative mb-6">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg shadow-2xl flex items-center justify-center border-4 border-amber-300">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Abbey Road</h1>
                <p className="text-lg text-amber-700">The Beatles</p>
                <div className="mt-4 w-16 h-1 bg-amber-600 mx-auto rounded"></div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">The Beatles: Abbey Road</h1>
          <p className="text-xl text-muted mb-4">비틀즈의 마지막 녹음 앨범 (1969)</p>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            음악 역사상 가장 완벽한 앨범 중 하나로 평가받는 Abbey Road의 모든 것을 탐험해보세요.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
            {/* Album Info */}
          <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">앨범 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 mb-2">기본 정보</h3>
                  <p><strong>발매일:</strong> 1969년 9월 26일</p>
                  <p><strong>레이블:</strong> Apple Records</p>
                  <p><strong>총 시간:</strong> 47분 23초</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 mb-2">제작진</h3>
                <p><strong>프로듀서:</strong> George Martin</p>
                <p><strong>녹음 스튜디오:</strong> Abbey Road Studios</p>
                <p><strong>엔지니어:</strong> Geoff Emerick</p>
                </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-blue-700 mb-2">특징</h3>
                <p><strong>의미:</strong> 비틀즈 마지막 녹음 앨범</p>
                <p><strong>혁신:</strong> 무그 신디사이저 최초 사용</p>
                <p><strong>커버:</strong> 전설적인 횡단보도 사진</p>
              </div>
            </div>
          </div>

          {/* External Links Section */}
          <div className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-800 text-center">외부 링크</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="https://genius.com/albums/The-beatles/Abbey-road" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-purple-100"
              >
                <span className="text-purple-600 mr-2">🎵</span>
                <span className="font-medium">Genius Lyrics</span>
              </a>
              <a 
                href="https://www.azlyrics.com/b/beatles.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-purple-100"
              >
                <span className="text-purple-600 mr-2">📝</span>
                <span className="font-medium">AZ Lyrics</span>
              </a>
              <a 
                href="https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-purple-100"
              >
                <span className="text-purple-600 mr-2">🎧</span>
                <span className="font-medium">Spotify</span>
              </a>
              <a 
                href="https://music.apple.com/album/abbey-road-remastered/401186200" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-purple-100"
              >
                <span className="text-purple-600 mr-2">🍎</span>
                <span className="font-medium">Apple Music</span>
              </a>
              </div>
            </div>

          {/* Detailed Track List */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">상세 트랙 리스트</h2>
              
              {/* Side A */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full mr-3">Side A</span>
                A면 - 개별적인 완성도
              </h3>
              <div className="space-y-4">
                  {tracks.filter(track => track.side === "A").map((track) => (
                  <div key={track.number} className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6 shadow-md">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="lg:w-2/3">
                        <div className="flex items-center mb-3">
                          <span className="w-10 h-10 bg-red-500 text-white font-bold rounded-full flex items-center justify-center mr-4">{track.number}</span>
                          <div>
                            <h4 className="text-xl font-bold text-red-800">{track.title}</h4>
                            <p className="text-sm text-red-600">{track.composer} · {track.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{track.description}</p>
                        <p className="text-sm text-gray-600 italic">{track.musicalFeatures}</p>
                      </div>
                      <div className="lg:w-1/3 bg-white p-4 rounded-lg border border-red-100">
                        <h5 className="font-bold text-red-700 mb-2">상세 정보</h5>
                        <p className="text-sm"><strong>보컬:</strong> {track.vocalist}</p>
                        <p className="text-sm"><strong>녹음일:</strong> {track.recorded}</p>
                        <div className="mt-3">
                          <a 
                            href={`https://genius.com/The-beatles-${track.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-lyrics`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-red-600 hover:text-red-800 font-medium"
                          >
                            가사 보기 →
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side B */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full mr-3">Side B</span>
                B면 - 위대한 메들리
              </h3>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                <h4 className="text-lg font-bold text-blue-800 mb-2">🎼 Abbey Road Medley</h4>
                <p className="text-blue-700">
                  B면의 마지막 8곡(You Never Give Me Your Money부터 The End까지)은 하나의 거대한 메들리를 구성합니다. 
                  각 곡들이 끊김 없이 연결되어 16분간의 장대한 음악적 여정을 만들어냅니다.
                </p>
              </div>
              <div className="space-y-4">
                {tracks.filter(track => track.side === "B").map((track, index) => (
                  <div key={track.number} className={`border rounded-xl p-6 shadow-md ${
                    track.number >= 9 ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' : 'bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200'
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="lg:w-2/3">
                        <div className="flex items-center mb-3">
                          <span className={`w-10 h-10 font-bold rounded-full flex items-center justify-center mr-4 ${
                            track.number >= 9 ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'
                          }`}>{track.number}</span>
                          <div>
                            <h4 className={`text-xl font-bold ${track.number >= 9 ? 'text-blue-800' : 'text-gray-800'}`}>
                              {track.title}
                              {track.number >= 9 && <span className="ml-2 text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">메들리</span>}
                            </h4>
                            <p className="text-sm text-gray-600">{track.composer} · {track.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{track.description}</p>
                        <p className="text-sm text-gray-600 italic">{track.musicalFeatures}</p>
                      </div>
                      <div className="lg:w-1/3 bg-white p-4 rounded-lg border border-gray-100">
                        <h5 className="font-bold text-gray-700 mb-2">상세 정보</h5>
                        <p className="text-sm"><strong>보컬:</strong> {track.vocalist}</p>
                        <p className="text-sm"><strong>녹음일:</strong> {track.recorded}</p>
                        <div className="mt-3">
                          <a 
                            href={`https://genius.com/The-beatles-${track.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-lyrics`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
                          >
                            가사 보기 →
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* Musical Analysis */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-800">음악적 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-700">혁신적 요소</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎹</span>
                    <span><strong>무그 신디사이저:</strong> "Here Comes The Sun", "Because" 등에서 최초 사용</span>
                  </li>
                <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎵</span>
                    <span><strong>메들리 구조:</strong> B면 후반부의 혁신적인 곡 연결 방식</span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🥁</span>
                    <span><strong>드럼 솔로:</strong> "The End"의 링고 스타 드럼 솔로 (비틀즈 유일)</span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎸</span>
                    <span><strong>기타 배틀:</strong> "The End"의 3인 기타 솔로 교대 연주</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-green-700">음향 기법</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎚️</span>
                    <span><strong>멀티트래킹:</strong> "Because"의 9번 오버더빙된 3성부 하모니</span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🔊</span>
                    <span><strong>페이드아웃:</strong> "I Want You"의 극적인 갑작스러운 종료</span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">🎼</span>
                    <span><strong>오케스트라:</strong> "Golden Slumbers", "The End"의 현악 편곡</span>
                </li>
                <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">📻</span>
                    <span><strong>숨겨진 트랙:</strong> "Her Majesty"는 최초의 숨겨진 트랙 중 하나</span>
                </li>
              </ul>
              </div>
            </div>
            </div>

          {/* Cultural Impact */}
          <div className="mb-12 p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-amber-800">문화적 영향</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-amber-700">역사적 의미</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                Abbey Road는 비틀즈가 함께 녹음한 마지막 앨범으로, 그들의 음악적 완성도가 절정에 달했던 시기의 작품입니다. 
                Let It Be가 나중에 발매되었지만, 실제로는 Abbey Road가 마지막 녹음 세션이었습니다. 
                </p>
                <p className="text-gray-700 leading-relaxed">
                  이 앨범은 비틀즈의 실험적 정신과 팝 센스의 완벽한 조화를 보여주며, 
                  록 음악사에서 가장 영향력 있는 앨범 중 하나로 평가받고 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-amber-700">앨범 커버의 전설</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  1969년 8월 8일 오전 10시, Abbey Road 스튜디오 앞 횡단보도에서 촬영된 앨범 커버는 
                  음악사상 가장 유명하고 패러디된 이미지가 되었습니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  존, 폴, 조지, 링고가 일렬로 걸어가는 모습은 단순하지만 상징적이며, 
                  이 횡단보도는 현재 영국의 문화유산으로 지정되어 있습니다.
                </p>
                <p className="text-sm text-amber-600 italic">
                  매년 수십만 명의 팬들이 이곳을 방문하여 같은 포즈로 사진을 찍습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Song Stories */}
          <div className="mb-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">곡별 비하인드 스토리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">🌞 "Here Comes The Sun"</h3>
                <p className="text-sm text-gray-700">
                  조지 해리슨이 에릭 클랩튼의 집 정원에서 영감을 받아 작곡했습니다. 
                  긴 겨울이 끝나고 봄이 오는 기쁨을 표현한 이 곡은 현재 비틀즈의 가장 사랑받는 곡 중 하나입니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">🔨 "Maxwell's Silver Hammer"</h3>
                <p className="text-sm text-gray-700">
                  폴 매카트니의 다크 코미디 송으로, 다른 멤버들은 이 곡을 녹음하는 것을 꺼려했습니다. 
                  실제 망치와 anvil을 사용해 타악기 효과를 만들었습니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">👑 "Her Majesty"</h3>
                <p className="text-sm text-gray-700">
                  원래는 메들리의 중간에 위치할 예정이었지만, 폴이 마음에 들지 않는다고 해서 제거했습니다. 
                  하지만 엔지니어가 실수로 테이프 끝에 남겨둔 것이 그대로 발매되었습니다.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border border-indigo-100">
                <h3 className="text-lg font-bold text-indigo-700 mb-3">🎭 "Because"</h3>
                <p className="text-sm text-gray-700">
                  존 레논이 오노 요코가 연주하는 베토벤의 '월광 소나타'를 거꾸로 들으며 영감을 받았습니다. 
                  3성부 하모니를 3번 오버더빙하여 총 9성부의 환상적인 사운드를 만들었습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Legacy */}
          <div className="mb-12 p-8 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-rose-800">음악사적 유산</h2>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Abbey Road는 단순한 앨범을 넘어 음악 예술의 정점을 보여주는 작품입니다. 
                이 앨범이 보여준 혁신적 녹음 기법, 완벽한 곡 구성, 그리고 메들리 형식은 
                이후 수많은 아티스트들에게 영감을 주었습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow border border-rose-100">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-lg font-bold text-rose-700 mb-2">수상 내역</h3>
                <p className="text-sm text-gray-700">그래미 명예의 전당 헌액, 롤링 스톤 선정 역사상 가장 위대한 앨범 14위</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow border border-rose-100">
                <div className="text-3xl mb-2">💿</div>
                <h3 className="text-lg font-bold text-rose-700 mb-2">상업적 성공</h3>
                <p className="text-sm text-gray-700">전 세계 3,100만 장 이상 판매, 11주간 차트 1위 기록</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow border border-rose-100">
                <div className="text-3xl mb-2">🎵</div>
                <h3 className="text-lg font-bold text-rose-700 mb-2">음악적 영향</h3>
                <p className="text-sm text-gray-700">프로그레시브 록, 아트 록 장르 발전에 결정적 기여</p>
              </div>
            </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link
                href="/misc"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
          </div>
        </div>
      </div>
    </main>
  );
}