import Link from 'next/link';

export default function SpirogyraPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Spirogyra</h1>
          <p className="text-xl text-gray-300">
            We Were a Happy Crew - Best Album (1999)
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Album Info */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Album Information</h2>
              <div className="space-y-2">
                <p><span className="font-semibold">Album:</span> We Were a Happy Crew</p>
                <p><span className="font-semibold">Type:</span> Best Album Collection</p>
                <p><span className="font-semibold">Year:</span> 1999</p>
                <p><span className="font-semibold">Label:</span> Mooncrest Record</p>
                <p><span className="font-semibold">Country:</span> UK</p>
                <p><span className="font-semibold">Total Time:</span> 78 minutes</p>
                <p><span className="font-semibold">Tracks:</span> 14 songs from albums 1-3</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Key Features</h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Digitally remastered for enhanced sound quality</li>
                <li>• Comprehensive collection from first three albums</li>
                <li>• Significantly improved audio clarity</li>
                <li>• Excellent track selection</li>
                <li>• Affordable import price ($12 at cdworld)</li>
                <li>• Reviewer's second favorite artist after The Beatles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Track Listing */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Track Listing</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-purple-300 mb-2">From 1st Album</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>1. The Future Won't Be Long</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>2. Magical Mary</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>3. Cogwheels Crutches and Cyanide</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>4. We Were a Happy Crew</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>5. Love is a Funny Thing</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>6. The Duke of Beaufoot</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-purple-300 mb-2">From 2nd Album</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>7. Dangerous Dave</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>8. Wings of Thunder</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>9. Don't Let it Get You</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>10. Disraeli's Problem</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-purple-300 mb-2">From 3rd Album</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>11. The Furthest Point</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>12. Old Boot Wine</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>13. Parallel Lines Never Separate</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
                  <span>14. In a Western World (part 1~4)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Review</h2>
          <div className="space-y-4 text-gray-300">
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold mb-2">Reviewer: 심우현</p>
              <p className="text-sm text-gray-400">shim@stein.kaist.ac.kr</p>
            </div>
            
            <div className="space-y-4">
              <p>
                얼마 전 Spirogyra - We Were a Happy Crew 란 그들의 베스트 앨범을 구했습니다. 영국 Mooncrest record에서 99년에 나온 앨범이고 그들의 1~3집 수록곡 14곡이 78분 분량으로 수록되어 있습니다.
              </p>
              
              <p>
                cdworld에서 $12 정도 했습니다. 수입 음반인데도 싸기도 하고 그리고 Digitally Remastered란 말에 현혹되어서 주문했는데 음질이 다소 개선된 느낌이 듭니다. 
                예전 CD 들을 때 쉭~ 하는 소리가 많이 줄어서 소리가 꽤 선명해진 느낌이 듭니다.
              </p>
              
              <p>
                제 개인적으로는 Disraeli's Problem 대신 Runaway가 들어갔으면 더 바랄 나위없는 훌륭한 베스트 앨범이 되었을 것 같다는 아쉬움이 있지만 선곡은 정말 좋다고 생각됩니다.
              </p>
              
              <p>
                참고로 Spirogyra는 제가 BEATLES 다음으로 가장 좋아하는 아티스트이기도 합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Reviewer's Collection */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Reviewer's Complete Collection</h2>
          <div className="space-y-4 text-gray-300">
            <p className="text-center font-semibold text-purple-300">
              Total: 11 Spirogyra Albums
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Studio Albums</h3>
                <ul className="space-y-1">
                  <li>• 1st Album (2 CDs)</li>
                  <li>• 2nd Album</li>
                  <li>• 3rd Album (CD + LP)</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="font-semibold mb-2">Special Releases</h3>
                <ul className="space-y-1">
                  <li>• Burn the Bridges</li>
                  <li>• Best Album (We Were a Happy Crew)</li>
                  <li>• Box Set (4 CDs)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Quality Improvement */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Digital Remastering</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Sound Quality Enhancement</h3>
              <p>
                The digital remastering process significantly improved the audio quality. The reviewer noted that the characteristic "hissing" sound from older CDs was greatly reduced, resulting in much clearer and more defined audio presentation.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Value for Money</h3>
              <p>
                At $12 from cdworld, this import album offered excellent value, especially considering the improved audio quality and comprehensive track selection spanning their first three albums.
              </p>
            </div>
          </div>
        </div>

        {/* Track Selection Comments */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Track Selection Analysis</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Overall Assessment</h3>
              <p>
                The reviewer considers the track selection to be excellent, representing the best of Spirogyra's first three albums across 78 minutes of music.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Minor Criticism</h3>
              <p>
                The only regret expressed was that "Runaway" wasn't included instead of "Disraeli's Problem," which would have made it a perfect best album in the reviewer's opinion.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link 
            href="/review/s/solution"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            ← Previous: Solution
          </Link>
          <Link 
            href="/review/s/spocks-beard"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors"
          >
            Next: Spock's Beard →
          </Link>
        </div>
      </main>
    </div>
  );
} 