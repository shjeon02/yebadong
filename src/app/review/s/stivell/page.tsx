import Link from 'next/link';

export default function StivellPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Stivell, Alan</h1>
          <p className="text-xl text-gray-300">
            Celtic Folk - 켈트족 민속 선율의 마법
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Review */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <p className="font-semibold text-purple-400">Ork-Man (장민수)</p>
            <p className="text-sm text-gray-400">jangms@mobi.etri.re.kr</p>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Enya 의 음악을 생각하시면 됩니다. 또 Miranda Sex Garden 도... 참 희안하게 <br />
              도 이들의 음악이 모두 켈트족의 민속적인 선율과 창법을 바탕으로 하고 있다 <br />
              는 사실을 이제야 알게 되었습니다. 바로 Alan Stivell 의 음악을 듣고는 알게 <br />
              되었지요. Alan Stivell 의 음악을 보통 Celtic Folk 이라고 한다는데, 막상 본 <br />
              앨범을 들어보니 Folk 이란 말은 빼버려도 되겠다는 생각이 들었습니다.
            </p>
            
            <p>
              그야말로 안개가 희미하게 깔린 북해의 미스테리. 이런 종류의 표현이 이 앨범의 음악 <br />
              에 어울릴 것입니다. Miranda Sex Garden 의 음악에서도 이런 느낌을 받았었 <br />
              는데... 본 앨범은 70 여명의 음악인들이 참여한 3 악장 구성의 대작입니다. <br />
              아주 많이 들어야 할 것 같은 음악. [Contact: CDC]
            </p>
          </div>
        </div>

        {/* Celtic Music Context */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">켈트 음악의 맥락</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">켈트 음악의 영향</h3>
              <p>
                Alan Stivell의 음악을 들으며 리뷰어가 깨달은 것은 Enya와 Miranda Sex Garden의 <br />
                음악 모두가 켈트족의 민속적인 선율과 창법을 바탕으로 하고 있다는 사실입니다. <br />
                이들의 음악은 Celtic Folk라는 장르로 분류되지만, 실제로는 Folk라는 단어를 <br />
                넘어서는 깊이와 복잡성을 가지고 있습니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">음악적 특징</h3>
              <p>
                "안개가 희미하게 깔린 북해의 미스테리"라는 표현이 적절할 만큼 <br />
                신비롭고 몽환적인 분위기를 자아냅니다. 이는 단순한 민속 음악을 넘어서 <br />
                깊은 영적 체험을 제공하는 음악입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Album Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">기본 정보</h3>
              <ul className="space-y-1 text-gray-300">
                <li><strong>아티스트:</strong> Alan Stivell</li>
                <li><strong>장르:</strong> Celtic Folk</li>
                <li><strong>구성:</strong> 3악장 구성의 대작</li>
                <li><strong>참여 음악인:</strong> 70여명</li>
                <li><strong>특징:</strong> 켈트족 민속 선율과 창법</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">음악적 연관성</h3>
              <ul className="space-y-1 text-gray-300">
                <li><strong>Enya:</strong> 같은 켈트 전통 계승</li>
                <li><strong>Miranda Sex Garden:</strong> 유사한 신비로운 분위기</li>
                <li><strong>분위기:</strong> 북해의 미스테리, 안개 낀 풍경</li>
                <li><strong>성격:</strong> 영적이고 몽환적</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Musical Atmosphere */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">음악적 분위기</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">북해의 미스테리</h3>
              <p>
                "안개가 희미하게 깔린 북해의 미스테리"라는 표현이 이 앨범의 음악에 <br />
                가장 적절한 설명입니다. 이는 단순한 민속 음악을 넘어서 깊은 영적 체험을 <br />
                제공하는 음악으로, 청자를 신비로운 켈트의 세계로 안내합니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">대규모 편성</h3>
              <p>
                70여명의 음악인들이 참여한 3악장 구성의 대작으로, 단순한 포크 음악이 아닌 <br />
                교향곡적 규모와 깊이를 가진 작품입니다. 이러한 대규모 편성은 켈트 음악의 <br />
                전통적 요소를 현대적으로 확장한 야심찬 시도를 보여줍니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">깊이 있는 감상</h3>
              <p>
                "아주 많이 들어야 할 것 같은 음악"이라는 리뷰어의 평가는 이 음악의 <br />
                깊이와 복잡성을 시사합니다. 한 번의 감상으로는 모든 것을 파악하기 어려운 <br />
                다층적 구조를 가진 작품으로 보입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Celtic Folk Context */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">켈트 포크의 영향</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">전통과 현대의 만남</h3>
              <p>
                Alan Stivell은 켈트족의 전통 음악을 현대적으로 재해석한 선구자입니다. <br />
                그의 음악은 단순히 과거의 음악을 재현하는 것이 아니라, 전통적 선율과 <br />
                창법을 바탕으로 새로운 음악적 가능성을 모색합니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">후배 아티스트들에게 미친 영향</h3>
              <p>
                Enya와 Miranda Sex Garden 같은 후배 아티스트들이 모두 켈트족의 <br />
                민속적 선율과 창법을 바탕으로 하고 있다는 사실은 Alan Stivell의 <br />
                음악이 얼마나 큰 영향을 미쳤는지를 보여줍니다.
              </p>
            </div>
          </div>
        </div>

        {/* Genre Redefinition */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">장르의 재정의</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Celtic Folk를 넘어서</h3>
              <p>
                리뷰어는 Alan Stivell의 음악을 들어보니 "Folk이란 말은 빼버려도 되겠다"는 <br />
                생각이 들었다고 합니다. 이는 그의 음악이 전통적인 포크 음악의 경계를 <br />
                넘어서 더 넓은 음악적 스펙트럼을 포괄하고 있음을 의미합니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">새로운 음악적 영역</h3>
              <p>
                70여명이 참여한 3악장 구성의 대작이라는 점에서, 이는 단순한 포크 음악이 <br />
                아닌 교향곡적 규모의 작품입니다. 켈트의 전통을 바탕으로 하되, 현대적 <br />
                편곡과 대규모 편성을 통해 새로운 음악적 영역을 개척했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">추천 및 감상 가이드</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">추천 대상</h3>
              <ul className="space-y-1">
                <li>• Enya의 음악을 좋아하는 분</li>
                <li>• Miranda Sex Garden의 신비로운 분위기를 선호하는 분</li>
                <li>• 켈트 음악과 문화에 관심이 있는 분</li>
                <li>• 영적이고 몽환적인 음악을 찾는 분</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">감상 포인트</h3>
              <p>
                "아주 많이 들어야 할 것 같은 음악"이라는 리뷰어의 평가처럼, <br />
                이 앨범은 반복적인 감상을 통해 그 깊이를 발견할 수 있는 작품입니다. <br />
                3악장 구성의 대작이므로 충분한 시간을 두고 몰입해서 들어보시기 바랍니다.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/review/s/stern-combo" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            ← Previous: Stern Combo
          </Link>
          <Link href="/review/s/still-life" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Next: Still Life →
          </Link>
        </div>
      </main>
    </div>
  );
} 