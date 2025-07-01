import Link from 'next/link';

export default function CaterinaCaselliPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-pink-800 mb-2">Caterina Caselli</h1>
          <p className="text-lg text-pink-600">이탈리아 깐쪼네 가수의 프로그레시브 걸작 - Primavera</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-pink-500">
          <h2 className="text-2xl font-semibold text-pink-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-pink-700">출생:</span> 1946년</p>
              <p><span className="font-semibold text-pink-700">데뷔:</span> 1964년 (19세)</p>
              <p><span className="font-semibold text-pink-700">국가:</span> 이탈리아</p>
              <p><span className="font-semibold text-pink-700">원래 장르:</span> 깐쪼네 (Canzone)</p>
            </div>
            <div>
              <p><span className="font-semibold text-pink-700">최고작:</span> Primavera (1974)</p>
              <p><span className="font-semibold text-pink-700">레이블:</span> CGD Records</p>
              <p><span className="font-semibold text-pink-700">특징:</span> 보티첼리 '봄' 커버, 특수 제작</p>
              <p><span className="font-semibold text-pink-700">현재:</span> 여전히 활동 중</p>
            </div>
          </div>
        </div>

        {/* 앨범 Primavera 소개 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-6">🌸 Primavera (1974) - 봄의 찬가</h2>
          
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-6 rounded-lg border-l-4 border-pink-500 mb-6">
            <h3 className="text-xl font-bold text-pink-800 mb-3">앨범의 특별함</h3>
            <p className="text-pink-700 mb-3">
              이번에 소개할 앨범은 이탈리안 록의 서정성이 듬뿍 베어있는 아름다운 작품, 
              Caterina Caselli의 <strong>PRIMAVERA</strong>이다. 이 앨범은 봄의 정취와 낭만을 
              노래한 '봄의 찬가'라고 할 수 있겠다.
            </p>
            <div className="bg-white p-4 rounded border-l-2 border-pink-300">
              <h4 className="font-semibold text-pink-800 mb-2">특수 제작 정보</h4>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• 보티첼리의 '봄'이 그려진 화려한 더블 재킷</li>
                <li>• 오리지날 초판: 재킷을 빛에 비추면 색깔이 변함</li>
                <li>• 음반도 빛에 비추면 검은색에서 푸른색으로 변함</li>
                <li>• CGD 레코드사 사장의 부인이라는 특별한 배경</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700">
              물론 지금과 같은 가을을 바로 앞에 두고 있는 시기에는 어울리지 않는 음악일듯 하지만 
              개인적으로 생각하기엔 봄뿐만 아니라 4계절 그 어느때 들어도 듣는 이의 가슴 깊이 
              와닿을수 있는 음악이라고 생각된다.
            </p>
            
            <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
              <p className="text-rose-700 font-medium">
                특히 가을에는 웬지 쓸쓸해지고, 분위기를 타게되고.... (가을 타시는 분들 많죠?...특히 남자분들...!!) 
                그러한 분들에게는 이 음반을 적극 권해드리고 싶다. 기분이 울적할때 이 음반을 듣는다면 
                정말로 마음이 평온해지고 온화해지는 듯한, 울적한 마음을 다시 가다듬을수 있게 만드는 
                그 무엇을 느끼게 될 것이다.
              </p>
            </div>
          </div>
        </div>

        {/* 수록곡 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-6">🎵 수록곡 분석</h2>
          
          <div className="space-y-6">
            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
              <h3 className="text-lg font-semibold text-pink-800 mb-2">1. Primavera</h3>
              <p className="text-pink-700 text-sm mb-2">
                1분이 약간 넘는 합창곡으로서, 앨범의 서두를 장식하는 (아울러 대미를 장식하기도 하는) 봄의 서곡이다. 
                멀리서 아련히 들려오는 아름다운 여성 합창단의 스캣과 풍부한 현악 연주...
              </p>
              <div className="bg-amber-50 p-3 rounded border-l-2 border-amber-300">
                <p className="text-amber-800 text-sm">
                  <strong>CF 사용:</strong> 얼마전에 국내의 모 CF에도 사용되어서 상당히 뜻밖의 충격을 안겨주었는데, 
                  당시 광고회사에 다니던 아트록 전문가의 아이디어였다고 함.
                </p>
              </div>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
              <h3 className="text-lg font-semibold text-rose-800 mb-2">2. Momenti Si, Momenti No ⭐</h3>
              <p className="text-rose-700 text-sm mb-2">
                아마도 주옥과 같은 곡들로 가득찬 본앨범에서 <strong>가장 뛰어난 곡</strong>을 꼽으라면... 
                어렵게 어렵게 이 곡을 선택할 것이다.
              </p>
              <p className="text-rose-700 text-sm">
                도입 부분의 아름답기 그지없는 여성 코러스에 이은 까떼리나의 보이스가 촉각을 곤두서게 만들고, 
                계속해서 이어지는 오케스트라와 여성 코러스의 하모니는 듣는 이를 무아지경의 상태로 몰고 가기에 충분하다.
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
              <h3 className="text-lg font-semibold text-pink-800 mb-2">3. Desiderare</h3>
              <p className="text-pink-700 text-sm">
                '희망', 또는 '그리움'이라고 해석되는 이 곡은 공간을 가볍게 울려주는 피아노음으로 시작된다. 
                그리고 잠시후 등장하는 Caterina의 포근하고 따뜻한 목소리... 하지만 이 곡에서의 그녀의 목소리에는 
                약간의 슬픔도 내포되어 있는듯 하다.
              </p>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
              <h3 className="text-lg font-semibold text-rose-800 mb-2">8. Piano Per Non Svegliarti ⭐</h3>
              <p className="text-rose-700 text-sm">
                고요한 어쿠스틱 기타와 플룻의 예쁜(?) 하모니로 시작되는 곡이다. 
                개인적으로 가장 즐겨듣는 곡중의 하나인데, 들으면 들을수록 사람을 잡아끄는 매력을 담고 있다. 
                특히 여성 합창단의 코러스가 앨범 전체를 통틀어 가장 빛을 발하는 곡이 아닌가 생각된다. 
                <strong>한마디로 마음속의 모든 시름을 물러가게 한다.</strong>
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
              <h3 className="text-lg font-semibold text-pink-800 mb-2">9. Buio In Paradiso</h3>
              <p className="text-pink-700 text-sm">
                이 곡을 듣고 있노라면 제목 그대로 눈 앞에 천국이 화려하게 펼쳐지는 듯한 느낌을 준다. 
                특히 마치 천사들의 합창과 같이 들리는 후렴 부분의 코러스는 환상적이다.
              </p>
              <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-300 mt-2">
                <p className="text-blue-800 text-sm">
                  <strong>드라마 삽입곡:</strong> 문화방송 드라마 '종합병원'의 삽입곡으로 사용되어 
                  비교적 널리 알려진 곡이기도 함.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 리뷰어들의 평가 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-6">📝 리뷰어들의 평가</h2>
          
          <div className="space-y-6">
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">유</span>
                </div>
                <div>
                  <p className="font-semibold text-pink-800">유영재 ★★★★</p>
                  <p className="text-sm text-pink-600">espiritu@hitel.net</p>
                </div>
              </div>
              <p className="text-pink-700 text-sm">
                평범한 깐초네풍의 작품을 발표해오던 Caterina Caselli가 풍부한 오케스트레이션과 합창단의 코러스를 도입, 
                발표한 작품으로 아트록 앨범을 들을 때 흔히 기대하게 되는 일종의 센세이션이나 드라마틱함은 찾아볼 수 없지만 
                마음 편히 푸근하게 들을 수 있는 부담 없는 작품이다. <strong>초심자에게도 접근이 쉽다는 점도 이 음반의 장점중 하나.</strong>
              </p>
            </div>

            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">조</span>
                </div>
                <div>
                  <p className="font-semibold text-rose-800">조영래 ★☆</p>
                  <p className="text-sm text-rose-600">cynical@hitel.net</p>
                </div>
              </div>
              <p className="text-rose-700 text-sm">
                이 앨범은 이태리의 깐쪼네 가수가 클래식 악기들을 배경으로 만든 앨범이다. 
                그냥 그런 예쁜 멜로디의 곡들로 이루어져 있다.
              </p>
            </div>

            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">김</span>
                </div>
                <div>
                  <p className="font-semibold text-pink-800">김영훈</p>
                  <p className="text-sm text-pink-600">YSTAZO</p>
                </div>
              </div>
              <p className="text-pink-700 text-sm">
                그녀는 원래 프로그레시브를 하는 것이 아니라 원래는 깐소네 가수라고 합니다. 
                1960년대와 1970년대의 이태리 가수중에서 빼놓을수 없는 최고의 여성가수라고 하는군요. 
                당시 프로그레시브 락의 황금기에 영향을 받아 많은 가수들이 프로그레시브와 자신의 음악을 접목시켰다는군요.
              </p>
            </div>
          </div>
        </div>

        {/* 앨범의 의의 */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 mb-8 border border-pink-200">
          <h3 className="text-xl font-bold text-pink-800 mb-4">🌸 Primavera의 의의</h3>
          <div className="grid md:grid-cols-2 gap-4 text-pink-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특징:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 깐쪼네와 프로그레시브의 접목</li>
                <li>• 풍부한 오케스트레이션과 합창</li>
                <li>• 서정적이고 평화로운 분위기</li>
                <li>• 초심자도 쉽게 접근 가능</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">역사적 의미:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 70년대 이탈리아 프로그레시브 황금기의 산물</li>
                <li>• 깐쪼네 가수의 유일한 프로그레시브 시도</li>
                <li>• 보티첼리 '봄' 커버의 예술적 완성</li>
                <li>• 계절을 초월한 보편적 감동</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-white p-4 rounded border-l-2 border-pink-300">
            <p className="text-pink-800 font-medium text-center">
              "개인적으로 서정파록중에서는 Harmonium의 2집 [Si On Avait Besoin Dune Cinqueme Saisons]과 함께 
              가장 좋아하는 작품"
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-pink-600 text-sm">
            10/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 