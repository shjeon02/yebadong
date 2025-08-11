import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Abbey Road - 앨범 트랙 리스트 | Yebadong',
  description: '비틀즈의 마지막 녹음 앨범 Abbey Road의 트랙 리스트와 정보',
};

export default function AbbeyRoadPage() {
  const tracks = [
    { number: 1, title: "Come Together", side: "A" },
    { number: 2, title: "Something", side: "A" },
    { number: 3, title: "Maxwell's Silver Hammer", side: "A" },
    { number: 4, title: "Oh! Darling", side: "A" },
    { number: 5, title: "Octopus' Garden", side: "A" },
    { number: 6, title: "I Want You (She's So Heavy)", side: "A" },
    { number: 7, title: "Here Comes The Sun", side: "B" },
    { number: 8, title: "Because", side: "B" },
    { number: 9, title: "You Never Give Me Your Money", side: "B" },
    { number: 10, title: "Sun King", side: "B" },
    { number: 11, title: "Mean Mr. Mustard", side: "B" },
    { number: 12, title: "Polythene Pam", side: "B" },
    { number: 13, title: "She Came In Through The Bathroom Window", side: "B" },
    { number: 14, title: "Golden Slumbers", side: "B" },
    { number: 15, title: "Carry That Weight", side: "B" },
    { number: 16, title: "The End", side: "B" },
    { number: 17, title: "Her Majesty", side: "B" },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">The Beatles: Abbey Road</h1>
          <p className="text-base text-muted">비틀즈의 마지막 녹음 앨범 (1969)</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Album Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-bold mb-4">앨범 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>발매일:</strong> 1969년 9월 26일</p>
                  <p><strong>녹음 스튜디오:</strong> Abbey Road Studios</p>
                  <p><strong>프로듀서:</strong> George Martin</p>
                </div>
                <div>
                  <p><strong>레이블:</strong> Apple Records</p>
                  <p><strong>총 시간:</strong> 47분 23초</p>
                  <p><strong>특징:</strong> 비틀즈 마지막 녹음 앨범</p>
                </div>
              </div>
            </div>

            {/* Track List */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Track List</h2>
              
              {/* Side A */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Side A</h3>
                <div className="space-y-2">
                  {tracks.filter(track => track.side === "A").map((track) => (
                    <div key={track.number} className="flex items-center p-3 bg-surface border border-muted rounded-md">
                      <span className="w-8 text-center text-muted font-mono">{track.number}.</span>
                      <span className="font-medium">{track.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side B */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Side B</h3>
                <div className="space-y-2">
                  {tracks.filter(track => track.side === "B").map((track) => (
                    <div key={track.number} className="flex items-center p-3 bg-surface border border-muted rounded-md">
                      <span className="w-8 text-center text-muted font-mono">{track.number}.</span>
                      <span className="font-medium">{track.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Notable Features */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">주요 특징</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>B면의 마지막 8곡은 하나의 긴 메들리(Medley)를 구성</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>"Something"은 조지 해리슨이 작곡한 비틀즈 최고의 명곡 중 하나</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>"Come Together"는 존 레논의 대표작</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>"Here Comes The Sun"은 조지 해리슨의 또 다른 명곡</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>"The End"는 "And in the end, the love you take is equal to the love you make"로 끝나는 상징적인 곡</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>"Her Majesty"는 숨겨진 트랙으로, 23초 길이의 짧은 곡</span>
                </li>
              </ul>
            </div>

            {/* Historical Context */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">역사적 의미</h3>
              <p className="text-sm leading-relaxed">
                Abbey Road는 비틀즈가 함께 녹음한 마지막 앨범으로, 그들의 음악적 완성도가 절정에 달했던 시기의 작품입니다. 
                Let It Be가 나중에 발매되었지만, 실제로는 Abbey Road가 마지막 녹음 세션이었습니다. 
                앨범 커버의 횡단보도 사진은 음악사상 가장 유명한 앨범 커버 중 하나가 되었으며, 
                런던의 Abbey Road 스튜디오 앞 횡단보도는 지금도 많은 팬들이 찾는 성지가 되었습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
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