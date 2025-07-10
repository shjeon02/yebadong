"use client";

export default function SchickePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Schicke, Fuhrs, Frohling</h1>
          <p className="text-lg text-gray-600">독일의 심포닉 락</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>국가:</strong> 독일</p>
              <p><strong>장르:</strong> 심포닉 락</p>
              <p><strong>레이블:</strong> Brain Records</p>
              <p><strong>약칭:</strong> S.F.F</p>
            </div>
            <div>
              <p><strong>키 멤버:</strong> Gerd Fuhrs, Ede Schicke, Heinz Frohling</p>
              <p><strong>발매처:</strong> The Laser's Edge (CD 재발매)</p>
              <p><strong>구성:</strong> 2CD 컴필레이션</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Ork-Man (장민수)
            </span>
          </div>
        </div>

        {/* 컴필레이션 앨범 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Collected Works Of S.F.F</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              The Laser's Edge에서 발매한 <strong>CD 두 장짜리 앨범</strong>입니다. 
              S.F.F가 발매한 세 장의 앨범을 모두 담고 있습니다.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">수록 앨범</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Symphonic Pictures</strong> (1976, Brain 60.010)</li>
                <li><strong>Sunburst</strong> (1977, Brain 60.068)</li>
                <li><strong>Ticket To Everywhere</strong> (1978, Brain 60.173)</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">추가 수록곡</h3>
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                <li><strong>Sunburst</strong> 앨범의 두 곡을 메들리로 연주한 곡</li>
                <li><strong>Every Land Tells A Story</strong>의 초기 버전 (라이브)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 리뷰어의 독일 음악 경험 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">독일 프로그레시브에 대한 편견</h2>
          <div className="prose max-w-none">
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <p className="text-amber-800 mb-3">
                독일 음악이라곤 <strong>Tangerine Dream</strong>이나 <strong>Klaus Schulze</strong>, 
                아니면 <strong>Amon Duul II</strong>나 <strong>Can</strong>, 
                그리고 투박한 독일어 발음 노래가 이상하게 들린다는 것 정도의 본능적 지식만을 가지고 있던 저는 
                당연히 독일의 프로그레시브 하면 약간 거부감을 가질 수밖에 없었습니다. (지금은 그렇지 않음.)
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">S.F.F의 차별점</h3>
              <p className="text-green-800">
                S.F.F의 음악은 좀 달랐다는 것을 얘기하고 싶은 것인데요, 
                즉 <strong>듣기 좋은 심포닉 락</strong>이었다는 것입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 유머러스한 비교 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">재미있는 비교</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800 text-lg italic">
              "굳이 재미있게 표현해 본다면, <strong>Rick Wakeman</strong>을 닮으려고 노력하는 <strong>Edgar Froese</strong>와 
              팔힘이 떨어져서 스틱을 좀 더 부드럽게 사용하는 <strong>Bill Bruford</strong>가 
              만나서 '최선'을 다하면 S.F.F하고 비슷해지려나? :-)"
            </p>
          </div>
        </div>

        {/* 앨범별 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범별 분석</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-800 mb-2">Symphonic Pictures (1976)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Tangerine Dream</strong>의 70년대 후반, 80년대 초반을 연상시키는 
                <strong>Gerd Fuhrs</strong>의 다채로운 신디사이저, 멜로트론 음향이 상하좌우의 공간을 가득 메우고 
                <strong>Ede Schicke</strong>의 드럼은 잘 정돈된 리듬을 정확하게 연주합니다.
              </p>
              <p className="text-gray-600 text-sm">
                Gerd Fuhrs는 S.F.F 결성 이전에 재즈 락 밴드에 참가했었다고 하는데 
                그래서 그런지 아주 가끔 재즈 락 풍의 연주가 펼쳐지기도 합니다.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800 mb-2">Sunburst (1977)</h3>
              <p className="text-gray-700">
                이전 앨범보다 짧아진 곡들로 이루어져 있는데, 
                <strong>Ede Schicke</strong>의 드럼 스틱이 좀더 강하고 바쁘게 움직이고 있고 
                <strong>Heinz Frohling</strong>의 기타 연주가 좀더 전면에 부각되고 있습니다.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-purple-800 mb-2">Ticket To Everywhere (1978)</h3>
              <p className="text-gray-700">
                말 그대로 <strong>수준 높은 테크노 사운드</strong>라고 해도 좋을 정도로 
                변모된 모습을 보여주고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 총평 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">총평</h2>
          <div className="prose max-w-none">
            <div className="bg-orange-50 p-4 rounded-lg mb-6">
              <p className="text-orange-800 mb-3">
                <strong>항상 따뜻한 온기가 느껴지는 음악</strong>입니다. 
                Tangerine Dream의 <strong>Stratosphere</strong> 앨범을 좋아하시는 분들은 
                한번 들어보시지요.
              </p>
              <p className="text-orange-800 font-semibold">
                후회 안하실거예요. (가격 대 내용비가 매우 높음 :-))
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">구매 정보</h3>
              <p className="text-gray-700">
                Contact: Laser's Edge, Ranjit, Syn-Phonic 등
              </p>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <a 
              href="/review/s" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← S 폴더로 돌아가기
            </a>
            <a 
              href="/review" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              전체 리뷰 목록 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 