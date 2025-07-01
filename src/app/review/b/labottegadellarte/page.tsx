"use client";
import Link from "next/link";

export default function LaBottegaDellArteReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">La Bottega Dell'Arte</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Italy</p>
              <p><strong>장르:</strong> Art Rock, Progressive Pop</p>
              <p><strong>의미:</strong> "예술의 상점"</p>
            </div>
            <div>
              <p><strong>특징:</strong> 이태리 3대 서정파 록그룹</p>
              <p><strong>음악적 성격:</strong> 서정적이고 아름다운 아트록</p>
              <p><strong>활동:</strong> 1975-1984 (단명한 그룹)</p>
            </div>
          </div>
        </div>

        {/* 멤버 구성 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">멤버 구성</h2>
          <div className="bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <p>• <strong>Pierro Calabrese</strong> - 키보드, 보컬</p>
                <p>• <strong>Massimo Calabrese</strong> - 베이스, 기타, 벤조, 보컬</p>
                <p>• <strong>Romano Musummarra</strong> - 플룻, 기타, 하모니카, 키보드, 보컬</p>
              </div>
              <div>
                <p>• <strong>Fernando Ciucci</strong> - 리드보컬, 기타</p>
                <p>• <strong>Alberto Bartoli</strong> - 드럼, 퍼쿠션</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">* Pierro와 Massimo Calabrese는 형제 또는 친척으로 추정</p>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">데뷔 앨범: La Bottega Dell'Arte (1975)</h2>
          <div className="bg-white p-4 rounded border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">앞면 (Side A)</h3>
                <ul className="text-sm space-y-1">
                  <li>1. Il fiume, il villaggio, la miniera</li>
                  <li>2. Come due bambini</li>
                  <li>3. Ripensare a lei</li>
                  <li>4. Camelot</li>
                  <li>5. Noi nel bene, noi nel male</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">뒷면 (Side B)</h3>
                <ul className="text-sm space-y-1">
                  <li>1. Un'esistenza</li>
                  <li>2. Amore non amore</li>
                  <li>3. A Cynthia</li>
                  <li>4. Mare nostrum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 첫 번째 리뷰어 - meddle */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">meddle (이동훈)</h3>
            <p className="text-sm text-gray-600 mb-4">meddle@nuri.net</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 시완 레코드 시리즈 비교 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">시완 레코드 시리즈 중에서의 위치</h4>
                <div className="space-y-3">
                  <p>
                    6000 series의 핵심이라고 할 수 있는 예술 상점의 데뷔작이 얼마전에 팬들의 요청에 의해서 또 재발매되었더군요.
                  </p>
                  
                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold mb-2">시완 레코드 앨범 비교</h5>
                    <div className="space-y-2 text-sm">
                      <p><strong>가장 아름다운 커버:</strong> 예술 상점의 2집 [Dentro]</p>
                      <p><strong>가장 아름다운 음악:</strong> 예술 상점의 1집 [예술 상점]</p>
                      
                      <div className="mt-3 space-y-1">
                        <p>• <strong>5000 시리즈 소박한 정원:</strong> 좋았지만 아름다움이 결여</p>
                        <p>• <strong>0000 시리즈 어메이징 블론델:</strong> 우아하지만 애절한 정서 부족</p>
                        <p>• <strong>6000 시리즈 안젤로 브란듀아르디:</strong> 무미건조하고 아기자기한 면 부족</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 주요 곡 분석 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">주요 곡 분석</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border border-l-4 border-purple-400">
                    <h5 className="font-bold text-purple-700 mb-2">Mare Nostrum (최고의 곡)</h5>
                    <p className="text-sm">
                      마지막을 장식하는 인스트루먼틀! <strong>그랜드 피아노를 주축으로</strong> 말그대로 몽롱한 키보드와 
                      중반부에 잠깐 등장하는 <strong>여성 코러스</strong>는 이 곡의 하일라이트라고 할 수 있겠네요. 
                      마치 우는듯한 느낌으로 다가오는군요. 얌전하게 시작해서 차분하게 끝나는 밤에 듣기 좋은 곡이죠. 
                      <strong>기승전결이 깨끗해서</strong> 마음에 더더욱 잘 다가오는 곡이죠. :-)
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">Camelot (완성도 최고)</h5>
                    <p className="text-sm">
                      사실 완성도로 볼 때는 이 곡이 가장 뛰어나다고 할 수 있겠네요. 
                      <strong>다양한 건반악기의 조화.</strong> 어쩔 수 없이 상투적인 표현을... 하지만 가장 정확한 표현이죠.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border border-l-4 border-red-400">
                    <h5 className="font-bold text-red-700 mb-2">Noi Nel Bene, Noi Nel Male (개인적 최애곡)</h5>
                    <p className="text-sm">
                      <strong>애절함이 가슴속으로 팍팍 다가오는 전형적인 이.태.리.적 팝</strong>이라고 할 수 있겠어요. 
                      이 곡을 듣고 자주 눈물을 흘린다고 하면 다들 믿을실까요?
                    </p>
                  </div>
                </div>
              </div>

              {/* 2집과의 비교 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">2집 [Dentro]와의 비교</h4>
                <div className="bg-white p-3 rounded border">
                  <p className="text-sm">
                    사실 예술 상점의 2집인 <strong>[Dentro]</strong>는 1집보다 안정된 느낌을 주는것이 사실이지만, 
                    <strong>낭만은 부족하죠.</strong> :-( 하지만 여전히 화려한 멜로디에 각종 건반...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 두 번째 리뷰어 - 이응민 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold text-blue-800 mb-2">이응민</h3>
            <p className="text-sm text-gray-600 mb-4">hayden@hitel.net</p>
            
            <div className="space-y-4 leading-relaxed">
              {/* 그룹 소개 */}
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">이태리 3대 서정파 록그룹</h4>
                <div className="space-y-3">
                  <p>
                    여러분들이 잘아시는 <strong>I Pooh</strong>(지금까지 30년 가까운 세월 동안 활약하고 있는 이태리의 노장그룹)와 
                    Art Rock지(紙)에서 소개됐던 <strong>Il Giardino Dei Semplici</strong>라는 그룹과 
                    <strong>이태리의 3대 '서정파 록그룹'</strong>으로 불리는 그룹이예요.
                  </p>
                  
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">
                      듣기에 부담없는 아름다운 음악을 우리에게 들려주는 그룹으로 팝적인 성향도 가지고 있어서 실망하는 분도 계시겠지만 
                      제가 생각할 때 <strong>이들의 데뷔앨범은 어느 아트록 그룹의 앨범에도 뒤지지 않는다</strong>고 확신할 수 있습니다.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                    <p className="text-sm">
                      <strong>La Bottega Dell'Arte</strong>란 그룹명은 <strong>예술(藝術)의 상인(商人)</strong>이라는 특이한 이름이죠. 
                      예술적으로 물건을 파는 상인인지 '예술'을 판다는 건지 잘모르겠지만(히히!!).
                    </p>
                  </div>
                </div>
              </div>

              {/* 트랙별 상세 분석 */}
              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">트랙별 상세 분석</h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">1. Il fiume, il villaggio, la miniera</h5>
                    <p className="text-sm">
                      새 울음 소리(?), 호각소리, 하모니카의 잔잔한 등장으로 시작. 
                      <strong>Fernando Ciucci</strong>의 여린듯하면서 감미로운 보컬이 피아노, 어쿠스틱 기타와 함께 곡을 이끌어 갑니다. 
                      고향에 대한 그리움을 노래한 것 같아요. 곡 후반부에 하모니카, 벤조, 바이올린의 흥겨운 컨트리풍 연주가 등장합니다.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">2. Come due bambini</h5>
                    <p className="text-sm">
                      개인적으로 무척 좋아하는 곡으로 <strong>애절한 Ciucci의 보컬이 정말 매력적</strong>입니다. 
                      발라드 록의 진수가 아닌가 생각되네요. (우울하거나 슬플 때 들으면 이 곡의 진짜 매력을 느낄 수 있지 않을까!!....)
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">4. Camelot ⭐</h5>
                    <p className="text-sm">
                      예전 성시완씨가 진행했던 음악프로에서 사랑받았던 곡으로 <strong>원탁의 기사(아더왕의 전설)</strong>을 내용으로 한 곡입니다. 
                      6분이 조금 못되는 곡이지만 음악적으로 세 부분으로 나눌 수 있습니다:
                    </p>
                    <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                      <p>1) 행진곡풍의 신시사이저와 드럼연주 → 챔발로와 힘있는 보컬</p>
                      <p>2) 피아노와 드럼, 챔발로와 드럼, 플룻이 절묘하게 어우러지는 연주</p>
                      <p>3) 챔발로와 보컬 → 피아노와 플룻의 서정적이고 아름다운 연주로 마무리</p>
                    </div>
                    <p className="text-sm mt-2 font-bold text-green-700">언제들어도 신선하고 아름다운 명곡이란 생각이 드네요.</p>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">5. Noi nel bene, noi nel male</h5>
                    <p className="text-sm">
                      <strong>선(善)과 악(惡)</strong>이라는 주제를 다뤘는데 정확한 내용은 잘 몰라요(쩝!). 
                      이 앨범에서 가장 강력한 연주를 해주고 Ciucci의 강한 보컬과 함께 일렉트릭 피아노를 사용하고 후반부에 기타 솔로도 돋보입니다.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">8. A Cynthia</h5>
                    <p className="text-sm">
                      <strong>달의 여신</strong>을 노래했는데 이 앨범에서 가장 프로그레시브적인 화려한 연주를 들려줍니다. 
                      이 곡만 따로 떼어내서 듣는다면 다른 그룹으로 착각할지도 모르겠네요.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold text-purple-700 mb-2">9. Mare nostrum (바다의 보석)</h5>
                    <p className="text-sm">
                      잔잔한 아름다운 연주곡이 그들의 데뷰앨범을 대미를 장식해 주고 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fernando Ciucci 보컬 분석 */}
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">Fernando Ciucci의 보컬</h4>
                <div className="bg-white p-4 rounded border border-l-4 border-red-400">
                  <p className="text-sm">
                    특히 리드보컬을 맡고 있는 <strong>Fernando Ciucci(페르난도 치우끼)</strong>의 보컬은 
                    <strong>여성인지 남성인지 구분할 수 없을 정도의 감미로움과 애절함</strong>을 담고 있습니다. 
                    프랑스의 존 앤더슨이라는 <strong>Andre Balzar(Atoll의 보컬리스트)</strong>와 비교해보면 재미있을 것 같네요.
                  </p>
                </div>
              </div>

              {/* 디스코그래피 */}
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">디스코그래피</h4>
                <div className="bg-white p-3 rounded border">
                  <ul className="text-sm space-y-1">
                    <li>• <strong>1975:</strong> La Bottega Dell'Arte (데뷔작)</li>
                    <li>• <strong>1977:</strong> Dentro (들을만함)</li>
                    <li>• <strong>1979:</strong> L'avventura</li>
                    <li>• <strong>1984:</strong> Forza-4 (팝쪽으로 기울어진 사운드)</li>
                  </ul>
                </div>
              </div>

              {/* 추천 및 마무리 */}
              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">강력 추천</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-l-4 border-green-400">
                    <p className="font-bold text-green-700 mb-2">서정적이고 아름다운 아트록을 좋아하시는 분들은 꼭 꼭 꼭 들어 보시기 바랍니다. 결코 후회하지는 않을거예요.</p>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <p className="text-sm">
                      전체적으로 어느 곡 하나 뒤떨어지지 않는 <strong>짜임새 있고 섬세한 연주</strong>를 들려주고, 
                      엄밀히 말해 팝그룹이지만 이 동명 타이틀의 데뷔앨범은 어떤 아트록 그룹에 뒤지지않는 훌륭한 연주를 들려줍니다.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="text-sm italic">
                      꼭 들어보세요. 구하기는 쉽지 않지만..... 혹시 관심 있으신 분은 제가 녹음해드리죠. (필요하시면 메일주세요)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-right italic text-gray-600">
                [이응민, hayden@hitel.net, 94.10]
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 