"use client";

export default function SindelfingenPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sindelfingen</h1>
          <p className="text-lg text-gray-600">Odgipig - 70년대 초반 영국 언더그라운드</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Odgipig</p>
              <p><strong>시기:</strong> 70년대 초반</p>
              <p><strong>국가:</strong> 영국</p>
              <p><strong>멤버:</strong> 4명</p>
            </div>
            <div>
              <p><strong>장르:</strong> 언더그라운드</p>
              <p><strong>재발매:</strong> Background Records (CD)</p>
              <p><strong>러닝타임:</strong> 약 35분</p>
              <p><strong>특징:</strong> 키보드 없는 구성</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              최정욱
            </span>
          </div>
        </div>

        {/* 레이블 소개 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Background Records 소개</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 mb-3">
              빽그라운드 레코드의 카탈로그에는 다음과 같이 간단히 선전하고 있습니다:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-700">
              "<strong>킹크림슨의 아일랜드</strong>나 <strong>젠틀자이언트의 옥토푸스</strong>와 같은 
              클래식 프로그레시브를 좋아하는 이들에겐 안성맞춤인 초희귀 아이템... 
              마스터테이프에서 직접 만들어냈다..."
            </blockquote>
          </div>
        </div>

        {/* 특이한 편성 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">특이한 악기 편성</h2>
          <div className="prose max-w-none">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">키보드 없는 구성</h3>
              <p className="text-green-800 mb-3">
                CD 뒷면을 보니 이들은 <strong>네 명</strong>으로써 희귀하게도 
                <strong>키보드를 전혀 쓰고 있지 않습니다.</strong>
              </p>
              <p className="text-green-800">
                그 대신 <strong>Roger Woods</strong>라는 멤버가 
                <strong>Glockenspiel</strong>과 <strong>Oscillators</strong>라는 디바이스를 쓰고 있다고 하네요.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">독특한 사운드</h3>
              <p className="text-purple-800">
                그런데 이것들의 소리가 <strong>이들의 음악을 들을만한 것으로 만들어주고</strong> 있습니다. 
                특히 대곡인 <strong>Perpetual Motion</strong>에서의 연주는 귀를 상당히 즐겁게 해줍니다.
              </p>
            </div>
          </div>
        </div>

        {/* 음악적 비교 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 비교</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-800 mb-2">King Crimson, Gentle Giant과의 차이</h3>
              <p className="text-gray-700">
                하지만 제게는 <strong>킹크림슨이나 젠틀자이언트</strong>와의 공통점은 귀에 잘 안 들어오네요.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800 mb-2">실제 유사 밴드</h3>
              <p className="text-gray-700">
                어떻게 들으면 이들의 음악은 <strong>키보드가 배제된 Fruupp</strong>이나 
                보다 더 아기자기한 <strong>Jody Grind</strong>의 음악을 연상하시면 될 것 같네요.
              </p>
            </div>
          </div>
        </div>

        {/* 트랙 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 트랙 분석</h2>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Mark's Bach</h3>
            <p className="text-amber-800">
              4번째 곡인 <strong>Mark's Bach</strong>는 또 잠시동안 아름다운 어쿠스틱 연주로 
              <strong>80년대 잉베이 말름스틴의 일렉트릭 연주</strong>를 생각나게도 합니다.
            </p>
          </div>
        </div>

        {/* 총평 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">총평</h2>
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">컬트적 매력</h3>
              <p className="text-blue-800 mb-3">
                누군가 말하길 <strong>Budgie</strong>나 <strong>Jonesy</strong>가 톱클래스의 밴드는 아니지만 
                그들의 컬트성으로 인해 많은 팬을 가지고 있다고 그랬듯이, 
                Sindelfingen도 그 <strong>영국 특유의 텁텁함</strong>과 예상 외의 아기자기함으로 
                매력적인 음악을 연주했다고 생각됩니다.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">추천 대상</h3>
              <p className="text-yellow-800 mb-3">
                정통 프록이나 멜로트론 소리를 좋아하시는 분에게는 별로일지도 모르지만 
                <strong>더운 여름밤에 35분간의 활력소</strong>로는 괜찮다고 사료됩니다.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">앨범 구성</h3>
              <p className="text-gray-700">
                <strong>35분여의 길지 않은 연주</strong>지만 소품과 대곡이 잘 어우러져 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 궁금증 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어의 궁금증</h2>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-orange-800 mb-3">
              근데 <strong>Sindelfingen</strong>이 무슨 뜻인지, <strong>'Odgipig'</strong>가 무슨 뜻인지 잘 모르겠네요.
            </p>
            <p className="text-orange-800 mb-3">
              야후에서 찾아보니까 독일에 <strong>Sindelfingen</strong>이라는 도시가 있는 것도 같은데.
            </p>
            <p className="text-orange-800">
              그리고 이들의 자켓에는 고슴도치 같은 게 그려있는데 고놈 이름이 
              <strong>'Odgipig'</strong>인가? 혹시 아시는 분 계셔요? -_-;;
            </p>
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