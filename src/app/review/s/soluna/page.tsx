import Image from "next/image";

export default function SolunaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Soluna
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              아르헨티나 8인조 대편성의 걸작 - Charly Garcia 게스트 참여
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">앨범 정보</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-300">앨범:</span>
                    <p className="text-white">Energia Natural</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">발매년:</span>
                    <p className="text-white">1977</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">레이블:</span>
                    <p className="text-white">Microfon</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">국가:</span>
                    <p className="text-white">아르헨티나</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">편성:</span>
                    <p className="text-white">8인조 대편성</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">장르:</span>
                    <p className="text-white">Progressive Rock</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">리더 & 게스트</h2>
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">리더</h3>
                    <p className="text-gray-300">
                      <span className="font-semibold">Gustavo Santaolalla:</span> 
                      명반 "Sudamerica"를 만들어냈던 Arco Iris의 리더
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      기타, 보컬뿐만 아니라 앨범 프로듀스까지 담당
                    </p>
                  </div>
                  <div className="bg-blue-900 bg-opacity-50 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 text-yellow-400">특별 게스트</h3>
                    <p className="text-gray-300">
                      <span className="font-semibold">Charly Garcia:</span> 
                      두 곡에서 키보드 연주 참여
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      La Maquina de Hacer Pajaros 해산 직후 시기로 추정
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-cyan-400">평가 점수</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">★★★★☆</div>
                  <p className="text-gray-300">아르헨티나 록 추천작</p>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">음악적 특징</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">사운드 구성</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <span className="font-semibold">Acoustic/Electric Guitar:</span> Gustavo의 특유한 기타 연주</li>
                  <li>• <span className="font-semibold">Violin:</span> 분위기를 주도하는 핵심 악기</li>
                  <li>• <span className="font-semibold">남녀 혼성 코러스:</span> 아르헨티나 그룹다운 아름다운 합창</li>
                  <li>• <span className="font-semibold">Keyboard:</span> Charly Garcia의 감성적인 연주</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">음악적 비교</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-cyan-400">캐나다 명그룹 Cano</span>에 
                    아르헨티나 특유의 감성을 살짝 덧입혀놓은 듯한 음악
                  </p>
                  <p className="text-sm text-gray-400">
                    지금까지 들어왔던 아르헨티나 그룹들과는 또 다른 느낌
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Track */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">하이라이트 트랙</h2>
            <div className="bg-black bg-opacity-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">3번 트랙</h3>
              <p className="text-gray-200 mb-2">
                <span className="font-semibold">Charly Garcia의 키보드 연주</span>가 곁들여진 감동적인 곡
              </p>
              <p className="text-gray-300 text-sm">
                "감상적인 분들이라면 눈물이 찔끔 나올만큼 아름다운 곡"
              </p>
            </div>
          </div>

          {/* Detailed Review */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">상세 리뷰</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">첫인상과 구입 동기</h3>
                <p className="text-gray-300 mb-4">
                  "Charly Garcia의 mellotron 연주를 들을 수 있다는 말에 혹해서 구하게 된 Soluna의 앨범은 
                  아르헨티나의 프로록은 들을 만큼 들었다고 깝죽대던 저에게 일침을 가한 앨범입니다."
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">앨범 구성과 특징</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <span className="font-semibold">대곡 부재:</span> 비록 대곡은 없지만 전체적으로 고른 수준의 곡들</li>
                  <li>• <span className="font-semibold">분위기 주도:</span> Gustavo의 기타와 violin이 분위기를 이끌어감</li>
                  <li>• <span className="font-semibold">남녀 혼성 코러스:</span> 앨범 전체를 아름답게 꾸며주는 합창</li>
                  <li>• <span className="font-semibold">Charly Garcia:</span> 두 곡에서 게스트 연주 참여</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-blue-400">리뷰어의 평가</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300 mb-3">
                    "본 앨범은 Charly Garcia의 이름이 오히려 무색해질 정도로 뛰어난 앨범임에 틀림이 없는 것 같습니다."
                  </p>
                  <p className="text-cyan-400 font-semibold">
                    "아르헨티나 록 음악에 관심이 있으신 분께 적극 추천해 드리고 싶은 앨범입니다."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CD Reissue Info */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">CD 재발매 정보</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">변경사항</h3>
                <div className="bg-red-900 bg-opacity-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold mb-2 text-red-400">아쉬운 점</h4>
                  <p className="text-gray-300 text-sm">
                    Original artwork이 재발매 CD에는 멤버들 단체 사진으로 바뀌어 있음
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">추가사항</h3>
                <div className="bg-green-900 bg-opacity-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-green-400">보너스</h4>
                  <p className="text-gray-300 text-sm">
                    Bonus track 한 곡이 수록되어 있음
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">리뷰어의 다음 계획</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-300">
                <span className="font-semibold text-cyan-400">"아.. Arco Iris의 다른 앨범들도 한번 구해들어 봐야 겠네요.."</span>
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Gustavo Santaolalla가 이끌었던 Arco Iris의 다른 작품들에 대한 관심 표명
              </p>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">최종 평가</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 mb-4">
                무려 8인조 대편성 그룹 Soluna는 Charly Garcia의 이름값을 뛰어넘는 자체적인 완성도를 보여준 작품입니다. 
                아르헨티나 특유의 감성과 violin의 아름다운 선율, 그리고 남녀 혼성 코러스가 어우러진 독특한 사운드를 만들어냈습니다.
              </p>
              <p className="text-gray-200">
                비록 대곡은 없지만 전체적으로 고른 수준의 곡들과 Charly Garcia의 감성적인 키보드 연주가 
                <span className="font-semibold text-cyan-400"> 아르헨티나 록 음악 애호가들에게 적극 추천할 만한 앨범</span>입니다.
              </p>
            </div>
          </div>

          {/* Review Credits */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">리뷰 크레딧</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">리뷰어:</span> cicco (이윤직, jiklee@juno.kaist.ac.kr)</p>
              <p><span className="font-semibold">특징:</span> 아르헨티나 록의 숨겨진 보석, Charly Garcia 게스트 참여</p>
              <p><span className="font-semibold">추천 대상:</span> 아르헨티나 록 음악 애호가</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <a 
              href="/review/s/solaris" 
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ← Solaris
            </a>
            <a 
              href="/review/s" 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S 목록으로
            </a>
            <a 
              href="/review/s/sorrows" 
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Sorrows →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 