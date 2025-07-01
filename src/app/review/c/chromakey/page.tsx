import Link from 'next/link';

export default function ChromaKeyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Chroma Key</h1>
          <p className="text-lg text-purple-600">Dream Theater 전 키보디스트 Kevin Moore의 솔로 프로젝트</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-purple-700">프로젝트 명:</span> Chroma Key</p>
              <p><span className="font-semibold text-purple-700">아티스트:</span> Kevin Moore</p>
              <p><span className="font-semibold text-purple-700">전 소속:</span> Dream Theater</p>
              <p><span className="font-semibold text-purple-700">포지션:</span> 키보드 (전)</p>
            </div>
            <div>
              <p><span className="font-semibold text-purple-700">데뷔:</span> Dead Air for Radios (1998)</p>
              <p><span className="font-semibold text-purple-700">2집:</span> You Go Now (2000)</p>
              <p><span className="font-semibold text-purple-700">장르:</span> Ambient, Atmospheric, Dark Pop</p>
              <p><span className="font-semibold text-purple-700">스타일:</span> Industrial, Dream Pop</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 mb-6 border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">안</span>
            </div>
            <div>
              <p className="font-semibold text-purple-800">안병욱 (brave)</p>
              <p className="text-sm text-purple-600">anwook@yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">🎹 Dream Theater 탈퇴 후의 선택</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">탈퇴 뮤지션의 3가지 범주</h3>
              <div className="space-y-3 text-purple-700">
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>1. 완전 소멸:</strong> 탈퇴와 동시에 지구상에서 그의 이름이 영원히 사라진다...</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-yellow-300">
                  <p><strong>2. 유사 밴드 이동:</strong> 비슷한 류의 다른 팀에 다시 들어간다.</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-green-300">
                  <p><strong>3. 독립적 활동:</strong> 전 밴드의 팬들에 의해 기억되며, 메인스트림과는 상관없이 자신의 솔로 프로젝트 앨범을 통해 진정 하고 싶은 음악을 한다..</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Kevin Moore의 선택</h3>
              <p className="text-indigo-700">
                뮤지션이 자기음악을 하겠다고 팀에서 탈퇴를 하게되면... 
                케빈 무어의 경우는 당근, <strong>3번째 범주</strong>에 속한다고 볼 수 있습니다. 
                그런데, 그가 하고 싶던 음악은 Progressive Metal이 아니라는데서 
                보통 3번째 범주로 분류될 수 있는 다른 탈퇴 아티스트들과도 확연히 구분됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">💿 Dead Air for Radios (1998)</h2>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
            <h3 className="font-semibold text-purple-800 mb-3">앨범 구성</h3>
            <div className="text-purple-700">
              <p className="mb-2">다소 심상찮은 타이틀로 그리 길지않은 <strong>5~6분내외의 9곡</strong>이 담겨있는 앨범</p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div>
                  <h4 className="font-semibold mb-2">1-3번 트랙:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Color Blind</li>
                    <li>• Even the Waves</li>
                    <li>• Underlow</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4-6번 트랙:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 전형적인 Chroma Key</li>
                    <li>• 사운드 정착</li>
                    <li>• 분위기 형성</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">7-9번 트랙:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• On the Page</li>
                    <li>• Mouse</li>
                    <li>• Hell Mary</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">주요 트랙 분석</h3>
              <div className="space-y-3 text-purple-700">
                <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                  <h4 className="font-semibold text-purple-800">Color Blind</h4>
                  <p className="text-sm">전형적인 앰비언트-드림 팝계열. 드림 티어터의 전 키보디스트 솔로앨범이라는 것을 알게 되면 흡사 뒤통수를 맞는 느낌까지 들게 됩니다.</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-indigo-300">
                  <h4 className="font-semibold text-indigo-800">Even the Waves</h4>
                  <p className="text-sm">Kevin은 건반과 함께, 리드보컬, 베이스까지 겸하고 있는데, 보이스 컬러는 노래 잘하는 Andrew Latimer + 노래 못하는 Sting ^^</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-pink-300">
                  <h4 className="font-semibold text-pink-800">Underlow</h4>
                  <p className="text-sm">대단히 감각적인 'Pedestrian Pop tune'이랄 수 밖에 없지만 너무나도 귀에 쫙쫙 달라 붙습니다. '윤상'의 음악이 진보한다면, 이정도의 사운드가 아닐까 라는 생각도 들고..</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">🎵 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">사운드 변화</h3>
              <p className="text-purple-700 mb-3">
                Dream theater에서 들려줬던 복잡한 곡 전개와 구성, 화려한 테크닉 대신 
                다소 <strong>ambient, atmospheric, dark</strong> 그리고 약간의 <strong>industrial 풍</strong>의 
                분위기로 대신하며 모든사람의 예측을 빗나가게 하고 있습니다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-purple-300">
                <p className="text-purple-800 text-sm">
                  다소 늘어지는 분위기, 인더스트리얼 풍의 이펙트와 리프 너머 
                  곡을 주도하는 청아한 키보드와 무리없는 보이스
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">앨범의 백미</h3>
              <p className="text-indigo-700">
                <strong>7,8,9번째 트랙</strong>이 앨범의 백미라 할 수 있습니다. 
                썩 꿔찮은 프로그적인 감동을 전해주는 화려한 스타인웨인 반주가 곡을 이끄는 
                'On the Page'와 'Mouse'가 이어지고 나면 'Hell Mary'가 자연스럽게 연결됩니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">💿 You Go Now (2000)</h2>
          
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">2집 앨범</h3>
            <p className="text-purple-700">
              탈퇴 아티스트중에서 가장 성공적인 음악을 들려주었던 드림티어터 
              전 키보디스트 케빈무어의 2번째 솔로앨범입니다. 
              <strong>데이빗 실비앙의 풍에 약간의 그루브한 감</strong>만 들어가면 바로 
              크로마 키의 사운드가 되죠... 첫번째 앨범에 이어 역시 기대에 부응하는 훌륭한 앨범이에요.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">🎭 마지막 트랙의 특별함</h2>
          
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Hell Mary</h3>
            <p className="text-gray-700 mb-3">
              9번째 트랙 'hell mary'는 곡이라기 보다는 
              지구의 최후의 날 마지막 라디오 방송인양 암울한 이펙트와 함께 
              뭐라 중얼거리는 멘트로 마무리 됩니다.
            </p>
            <div className="bg-white p-3 rounded border border-gray-300">
              <p className="text-gray-800 font-mono text-center">
                "oh....지지직...oh............지직...."
              </p>
              <p className="text-gray-600 text-sm mt-2 text-center">
                일견 유치해 보이기도 하지만, 한밤중에 들으면 웬지 
                지구 최후의 마지막 청자가되는 기분도 드네요..^^;
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">📝 최종 평가</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">긍정적 평가</h3>
              <div className="bg-white p-3 rounded border-l-2 border-green-300">
                <p className="text-green-800 font-bold text-center text-lg">
                  "케빈 너 탈퇴 잘 했다..디림 띠어러는 인재하나 잃고..." ^^;;
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">주의사항</h3>
              <p className="text-yellow-700 mb-2">
                확실한건 본 앨범이 <strong>모든 분들에게 만족을 주기는 힘들것</strong>이라는 점입니다. 
                하지만, 복잡한 구성과 연주대신 어느정도의 실험적인 90년대식 사운드와 분위기(mood)로 
                채워져 있는 음악을 즐겨 들으시는 분께는 분명 만족감을 드릴 거에요.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">🎹 Chroma Key의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-purple-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 변화:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Progressive Metal → Ambient/Dark Pop</li>
                <li>• 복잡한 구성 → 분위기 중심</li>
                <li>• 화려한 테크닉 → 청아한 키보드</li>
                <li>• Dream Theater와 완전히 다른 방향</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">사운드 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Ambient, Atmospheric, Dark</li>
                <li>• Industrial 풍의 이펙트</li>
                <li>• David Sylvian 스타일 영향</li>
                <li>• 90년대식 실험적 사운드</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-purple-600 text-sm">
            16/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 