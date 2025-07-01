import Link from 'next/link';

export default function ChrisDeBurghPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">Chris De Burgh</h1>
          <p className="text-lg text-blue-600">진정한 의미의 아트록 - Crusader</p>
        </div>

        {/* 아티스트 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-blue-700">출신:</span> 아일랜드</p>
              <p><span className="font-semibold text-blue-700">장르:</span> 포크록, 팝록, 아트록</p>
              <p><span className="font-semibold text-blue-700">활동기간:</span> 1970년대 ~ 현재</p>
            </div>
            <div>
              <p><span className="font-semibold text-blue-700">특징:</span> 서정적 목소리, 스토리텔링</p>
              <p><span className="font-semibold text-blue-700">대표작:</span> Crusader (1979)</p>
              <p><span className="font-semibold text-blue-700">히트곡:</span> Lady in Red, The Girl With April In Her Eyes</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">정</span>
            </div>
            <div>
              <p className="font-semibold text-blue-800">정종화</p>
              <p className="text-sm text-blue-600">notte@hitel.net | 1993년 4월</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">진정한 의미의 아트록</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              글쎄 어떤 의미에서 전혀! 이곳에 어울리지 않는다는 생각을 가지실지 모르겠지만, 개인적으로는 크리스 디 버그의 
              본작만큼 본 게시판에 어울리는 앨범도 드물다는 생각입니다.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-2">일반적인 인식 vs 실제</h3>
              <p>
                대체적으로 단순한 대중가수, 여성같은 미성의 소유자 'Lady in Red' 등의 히트곡... 그리고 언제나 봄, 4월이 되면 
                들을 수 있는 '봄을 가지고온 그녀'... 하지만 본작은 단순한 아름답고 소박한 팝적인 앨범만은 아닌, 충분히 심각하고, 
                우아하고, 감동적인 앨범입니다.
              </p>
            </div>

            <p>
              반드시 환상의 명반, 역사적인 진보음악이 아니라도, 누구나가 쉽게 다가올 수 있는 진정한 의미의 아트록이 아닌가 하는 생각입니다.
            </p>

            <div className="text-center italic text-blue-700 py-4">
              "대체적으로 첫 번째 면의 곡들은 아름다운 사랑이야기, 인생에 대한 긍정적인 이야기, 슬픈 동화같은 이야기 등 
              비교적 소박한 삶에 대해서 이야기하고 있다."
            </div>
          </div>
        </div>

        {/* 곡 리뷰 섹션들 */}
        <div className="space-y-6">
          {/* Side One */}
          <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200 mb-6">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">💿 Side One - 서정적 이야기들</h3>
            <p className="text-emerald-700 italic">
              아름다운 사랑이야기, 인생에 대한 긍정적인 이야기, 슬픈 동화같은 이야기 등 비교적 소박한 삶에 대해서 
              이야기하고 있어 무척이나 서정적이고 아름다운 느낌을 줍니다.
            </p>
          </div>

          {/* Carry On */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎵 Carry On</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                영롱한 피아노의 연주를 시작으로 크리스 디 버그의 약간은 슬픈듯한 빛이 어려있는 아름다운 목소리로 시작됩니다. 
                우리의 삶을 아주 절묘하게 묘사한 그리고 삶을 긍정적이고 힘차게 성실히 살아가라는 좋은 메시지를 담고 있는 곡입니다.
              </p>
              <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-300">
                <p className="italic text-blue-800">
                  "Love is the daughter of life, comfort to trouble and strife<br/>
                  She's always beside you to help you carry on"
                </p>
                <p className="text-sm mt-2">
                  이렇게 아름답고 멋진 가사를 받침하는 음악은 역시 무척 절묘합니다. 서정적인 피아노서주를 시작으로 
                  애잖은 보컬로 시작해서 역동적으로 힘차게 인생을 살아갈 것을 나타내주듯 힘찬 연주와 보컬로 전환되는 구성입니다.
                </p>
              </div>
            </div>
          </div>

          {/* I Had The Love In My Eyes */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎵 I Had The Love In My Eyes</h3>
            <p className="text-gray-700 leading-relaxed">
              이 곡은 한 여자를 사랑했으나 말하지 못하고 머뭇거리다가 그 여자가 떠나버린 후 후회하는 남자의 심정을 애잔하게 
              나타내는 가사로 이루어져 있습니다. 약간은 회한에 잠긴듯한 느낌을 주는 크리스 디 버그의 매력있는 목소리와 
              서정적이고 아름다운 스트링 오케스트레이션과 후반부에 담담하고 잔잔한 분위기를 연주하는 French Horn 연주가 가슴을 두드리는 곡입니다.
            </p>
          </div>

          {/* The Girl With April In Her Eyes */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎵 The Girl With April In Her Eyes ⭐</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                크리스 디 버그의 보이스컬러의 매력이 가장 충만하게 나타나는 곡입니다. 마치 동화속의 슬픈 옛날 이야기같은 가사와 
                슬픔이 뚝뚝 배여나오는 크리스 디 버그의 목소리, 한층더 슬픈 분위기를 더해주는 하프연주와 어쿠스틱 기타사운드, 
                합시코드의 청량하고 소박한 분위기...
              </p>
              <div className="bg-amber-50 p-3 rounded border-l-2 border-amber-300">
                <p className="italic text-amber-800">
                  예전에 항상 겨울만 있는 나라의 오만한 임금이 자신들에게 봄을 가져다줄 그녀가 도움을 요청하는것을 거절하여 
                  그녀를 추운 겨울의 숲속으로 쫓아내었을때 어떤 마음씨 착한 농부가 그녀를 자신의 집에서 열심히 간호했지만 
                  그녀는 죽고 그녀를 묻었던 자리에 봄이 시작되었고 그 오만한 왕이 있는 나라에는 영원히 춥고 슬픈 겨울만이 계속되었다는...
                </p>
              </div>
              <p className="font-semibold text-blue-800">두말할 필요없이 영원히 남을 명곡입니다.</p>
            </div>
          </div>

          {/* Side Two */}
          <div className="bg-red-50 rounded-lg p-6 border border-red-200 mb-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">💿 Side Two - 실험적이고 장엄한 이야기들</h3>
            <p className="text-red-700 italic">
              더욱 실험적이고 장엄한 구성의 곡들이 수록되어 있으며, 특히 타이틀곡 "Crusader"는 4부작 조곡 형태의 대작입니다.
            </p>
          </div>

          {/* The Devil's Eye */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎵 The Devil's Eye</h3>
            <p className="text-gray-700 leading-relaxed">
              상당히 독특한 곡입니다. 제목이 나타내는대로 악마의 눈으로 당신을 감시하고 결코 자신의 눈을 벗어나지 못한다는 내용의 곡입니다. 
              제목답게 상당히 실험적이며 음침한 느낌이 드는곡으로, 도무지 크리스 디 버그의 곡이라고 볼 수 없을 정도의 야릇함을 느끼게 합니다. 
              독특한 효과를 위해서 Vocoder(음성변조기)를 사용하기도 하고 전체적인 곡의 분위기도 어두우면서도 신비한듯한 분위기입니다.
            </p>
          </div>

          {/* Crusader - 조곡 */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎵 Crusader ⭐⭐⭐ (4부작 조곡)</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="font-semibold text-blue-800">
                드디어 앨범의 타이틀곡이자 앨범전체에서 가장 뛰어난 곡입니다. 모두 4부분으로 나뉘어진 조곡의 형태입니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">1. The Fall of Jerusalem</h4>
                  <p className="text-sm">
                    성지인 예루살렘을 사라센의 왕에게 빼앗기고 주교와 사제들이 각지의 성도들을 이끌어 예루살렘성을 찾으러 가는 준비와 결의. 
                    잔잔한 어쿠스틱기타의 연주로 시작되며 "Jerusalem is lost"라는 후렴에서 크리스 디 버그의 슬픔이 어린 목소리가 매력적입니다.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">2. In The Court of Saladin</h4>
                  <p className="text-sm">
                    예루살렘을 정복한 사라센의 왕의 위용과 오만과 자신에 찬 독백. 
                    "I am invincible, I am the King / I am Invincible, and I will win..." 
                    강렬한 행진곡풍의 드럼연주와 화려한 연주, 관악 파트의 적절한 사용이 돋보입니다.
                  </p>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">3. The Battlefield</h4>
                  <p className="text-sm">
                    사자왕 리처드를 비롯한 각지의 십자군들의 장엄한 출전모습과 이어서 벌어지는 성전을 둘러싼 전투장면. 
                    "We are invincible, God is the King / We are invincible, and we will win..." 
                    장대함의 절정이며 이 곡 전체의 하이라이트 부분입니다.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">4. Finale</h4>
                  <p className="text-sm">
                    현인과 바보의 대화로 곡을 마무리. 허위에 찬 현인이 이 세상을 올바르게 보지 못하고 있었지만 
                    바보들이 그러한 사실을 꿰뚫어 보면서 십자군의 개선의 노래들은 모두 저 먼 과거로 날아가 버렸다고 말합니다. 
                    진정한 마음의 성지인 예루살렘은 이미 잃어버렸다고...
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="italic text-blue-800">
                  마지막 부분은 아름다운 스트링 오케스트레이션과 클라리넷을 위시한 관악기의 등장과 신디사이져의 장엄한 연주와 
                  혼성 합창단의 위엄있는 백코러스 등으로 웅장하게 대미를 장식합니다.
                </p>
              </div>
            </div>
          </div>

          {/* You And Me */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-400">
            <h3 className="text-xl font-bold text-blue-800 mb-3">🎵 You And Me</h3>
            <p className="text-gray-700 leading-relaxed">
              마지막곡은 이 앨범전체를 마감하는 자신이 지금까지 무대위에서 펼쳤던 여러가지 연기(지금까지의 여러곡들을 말함)를 마치며 
              관객들에게 마지막 인사를 하고 무대를 떠나가며 그러나 이건 단지 시작일뿐이며 언젠가 돌아와 다시 과거에 묻혀있던 이야기와 
              여러가지 사랑의 방법에 대해서 당신들을 안내하겠다고 했습니다. 그리고 그런 연극이 끝나고 항상 남는건 언제나 '당신과 나' 입니다.
            </p>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">📀 Crusader (1979)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <p><strong>Side One:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Carry On</li>
                <li>I Had The Love In My Eyes</li>
                <li>Something Else Again</li>
                <li>The Girl With April In Her Eyes</li>
                <li>Just In Time</li>
              </ol>
            </div>
            <div>
              <p><strong>Side Two:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>The Devil's Eye</li>
                <li>It's Such A Long Way Home</li>
                <li>Old-Fashioned People</li>
                <li>Quiet Moments</li>
                <li>Crusader (4부작 조곡)</li>
                <li>You And Me</li>
              </ol>
            </div>
          </div>
          <p className="mt-4 text-blue-600 italic">
            단순한 팝 가수로 알려진 크리스 디 버그의 진면목을 보여주는 작품. 누구나가 쉽게 다가올 수 있는 진정한 의미의 아트록이다.
          </p>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/b" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← B 목록으로
          </Link>
          <div className="text-blue-600 text-sm">
            22/24 완료
          </div>
        </div>
      </div>
    </div>
  );
} 