export default function SinclairPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-blue-800 to-indigo-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Richard Sinclair</h1>
          <div className="text-lg text-gray-300">
            <p>Canterbury Sound • Caravan • Hatfield and the North</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Review Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰</h2>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-400">Oak-Man, 장민수</p>
                  <p className="text-sm">jangms@mobi.etri.re.kr</p>
                </div>
                
                <div className="space-y-4">
                  <p>
                    Hatfield and the North는 보통 두번째 앨범인 <em>Rotter's Club</em>을 그들의 최고작으로 꼽지만, 
                    제가 듣기에는 셀프타이틀 앨범인 데뷔작이 더 좋게 들립니다. 특히 보컬에 Amanda Parsons, 
                    Barbara Gaskin 등이 참여하고 있고요... Richard Sinclair의 장난끼 서린 목소리를 들을 수 있지요.
                  </p>
                  
                  <p>
                    첫번째 앨범은 뭐랄까 정감이 느껴지구요... 두번째 앨범인 <em>Rotter's Club</em>은 
                    약간 하드하고 꽉 조여진 사운드를 들려준답니다.
                  </p>
                  
                  <p>
                    Richard Sinclair의 보컬을 좋아하신다면 Caravan의 앨범들을 들어보세요. 특히 초기 작품들인 
                    <em>In The Land Of Grey & Pink</em>와 <em>If I could do it all over again, I would do it all over you</em>(맞나??)는 
                    저도 개인적으로 무척 좋아하는 앨범들이고요, 남들도 좋은 앨범이라고 추천하더군요.
                  </p>
                  
                  <p>
                    Hatfield & The North는 영국 캔터베리 사운드를 대표하는 그룹이니까 한번 꼭 들어볼만하다고 
                    생각해요. 보컬도 좋지만 Dave Stewart의 오르간(organ) 연주도 좋아요. 
                    또 그룹 멤버들 모두 캔터베리 분야의 명인들이래요....
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">추가 정보</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-400">Neo-Zao, 김남웅</p>
                  <p className="text-sm">wcchoi@postech.ac.kr</p>
                </div>
                
                <div className="space-y-3">
                  <p>
                    <em>For Richard</em>는 앨범 <em>If I Could Do It All Over Again, I'd Do It All Over You</em>에 
                    수록되어 있습니다. 이 앨범과 <em>In The Land of Grey and Pink</em>는 승음에서 수입했습니다. 
                    MED(중간 가격) 수준이므로 12,000원 이상 주고 사지는 마세요.
                  </p>
                  
                  <p>
                    <em>Caravan and The New Symphonia</em> 앨범에도 이 곡이 수록되어 있을 것으로 생각됩니다. 
                    이 곡이 수록된 부트렉들도 많이 있어요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Artist Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">아티스트 정보</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold">Richard Sinclair</p>
                  <p className="text-sm">베이스, 보컬</p>
                </div>
                <div>
                  <p className="font-semibold">주요 활동</p>
                  <p className="text-sm">Caravan, Hatfield and the North</p>
                </div>
                <div>
                  <p className="font-semibold">장르</p>
                  <p className="text-sm">Canterbury Sound, Progressive Rock</p>
                </div>
              </div>
            </div>

            {/* Caravan Discography */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Caravan 디스코그래피</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="space-y-1">
                  <p><span className="font-semibold">1.</span> Caravan - '68</p>
                  <p><span className="font-semibold">2.</span> If I Could Do It All Over Again... - '68</p>
                  <p><span className="font-semibold">3.</span> In The Land Of Grey And Pink - '71</p>
                  <p><span className="font-semibold">4.</span> Waterloo Lily - '72</p>
                  <p><span className="font-semibold">5.</span> For Girls Who Grow Plump In Night - '72</p>
                  <p><span className="font-semibold">6.</span> Caravan & The New Symphonia - '74</p>
                  <p><span className="font-semibold">7.</span> Cumming Stunts - '75</p>
                  <p><span className="font-semibold">8.</span> Canterbury Tales - '76</p>
                  <p><span className="font-semibold">9.</span> Blind Dog At St.Dunstans - '76</p>
                  <p><span className="font-semibold">10.</span> Better By Far - '77</p>
                  <p><span className="font-semibold">11.</span> The Album - '80</p>
                  <p><span className="font-semibold">12.</span> The Best Of Caravan Live - '80</p>
                  <p><span className="font-semibold">13.</span> Back To Front - '82</p>
                  <p><span className="font-semibold">14.</span> Richard Sinclair's Caravan Of Dreams</p>
                </div>
              </div>
            </div>

            {/* Recommended Albums */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">추천 앨범</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">Hatfield and the North (1st Album)</p>
                  <p className="text-sm">정감이 느껴지는 데뷔작</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">In The Land Of Grey & Pink</p>
                  <p className="text-sm">Caravan 초기 걸작</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">If I Could Do It All Over Again...</p>
                  <p className="text-sm">Caravan 초기 명반</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <a 
            href="/review/s" 
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
          >
            ← S 폴더로 돌아가기
          </a>
          <div className="text-gray-500 text-sm">
            Richard Sinclair - Canterbury Sound
          </div>
        </div>
      </div>
    </div>
  );
} 