import Link from 'next/link';

export default function CicoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">Cico</h1>
          <p className="text-lg text-amber-600">Formula 3의 드러머 Toni Cico의 솔로 프로젝트</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-amber-700">아티스트:</span> Toni Cico</p>
              <p><span className="font-semibold text-amber-700">전 소속:</span> Formula 3</p>
              <p><span className="font-semibold text-amber-700">포지션:</span> 드러머 & 보컬리스트</p>
              <p><span className="font-semibold text-amber-700">국가:</span> 이탈리아</p>
            </div>
            <div>
              <p><span className="font-semibold text-amber-700">앨범:</span> Notte</p>
              <p><span className="font-semibold text-amber-700">대표곡:</span> La Notte</p>
              <p><span className="font-semibold text-amber-700">장르:</span> 이탈리아 팝/프로그레시브</p>
              <p><span className="font-semibold text-amber-700">특징:</span> 서정적 멜로디</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">조</span>
              </div>
              <div>
                <p className="font-semibold text-amber-800">조영래</p>
                <p className="text-sm text-amber-600">cynical@hitel.net</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">유</span>
              </div>
              <div>
                <p className="font-semibold text-orange-800">유영재</p>
                <p className="text-sm text-orange-600">espiritu@hitel.net</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">정</span>
              </div>
              <div>
                <p className="font-semibold text-yellow-800">정철</p>
                <p className="text-sm text-yellow-600">zepelin@popsmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">🎵 Formula 3에서 솔로로</h2>
          
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">배경</h3>
            <p className="text-amber-700">
              <strong>Formula 3의 드러머이자 보컬리스트</strong>였던 Toni Cico가 그룹 해체후 
              자신의 이름을 내세워 결성한 그룹의 첫번째 앨범입니다. 
              수록곡중 <strong>'La Notte'</strong>가 국내 매니아들의 사랑을 받았습니다.
            </p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">음악적 특징</h3>
            <p className="text-orange-700">
              오케스트레이션의 주도 아래 <strong>서정적인 멜로디</strong>가 주를 이루는 본작품은 
              타이틀곡이 매우 특출난 넘버이긴 하지만 그 외의 곡들은 '평범' 이상을 넘지 못하고 있다는게 조금 흠입니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">💿 Notte 앨범</h2>
          
          <div className="space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">대표곡: La Notte</h3>
              <p className="text-amber-700 mb-3">
                앨범의 하이라이트는 단연 <strong>'La Notte'</strong>입니다. 
                이 곡은 국내 프로그레시브 록 매니아들 사이에서 특별한 사랑을 받아왔으며, 
                Cico의 서정적인 보컬과 오케스트레이션이 완벽하게 조화를 이룹니다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-amber-300">
                <p className="text-amber-800 text-sm">
                  밤(Notte)이라는 제목에 걸맞게 몽환적이고 서정적인 분위기가 압권입니다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">앨범의 한계</h3>
              <p className="text-orange-700">
                타이틀곡 'La Notte'가 매우 특출난 넘버이긴 하지만 
                그 외의 곡들은 <strong>'평범' 이상을 넘지 못하고</strong> 있다는게 조금 흠입니다. 
                전체적으로 볼 때 한 곡에 의존하는 경향이 강한 앨범이라고 할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">📝 평론가들의 평가</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">조영래 ★★☆</h3>
              <p className="text-amber-700 text-sm mb-2">
                본작에서도 역시 가치를 부여해 줄 만한 곡은 <strong>'La Notte'뿐</strong>이 아닐까 싶다. 
                나머지 곡들은 그저 그런 수준.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-amber-300">
                <p className="text-amber-800 text-xs">
                  토니 치코 한 명에게서 Formula 3시절의 역량까지 기대한다는 것이 
                  애시당초 무리였을런지도 모른다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">유영재 ★☆</h3>
              <p className="text-orange-700 text-sm mb-2">
                편안하게 들을 수 있는 앨범이지만, 개인에 따라선 
                <strong>매우 지겨울 수도 있는 앨범</strong>입니다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-orange-300">
                <p className="text-orange-800 text-xs">
                  Formula 3의 역량을 개인 프로젝트에서 기대하기는 어려웠을 것 같습니다.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">정철 A0</h3>
              <p className="text-yellow-700 text-sm mb-2">
                이게 왜 이리 점수가 높냐 하면 나는 이것을 <strong>락의 범주에 넣지 않았기</strong> 때문이다. 
                이는 분명히 <strong>이탈리아 팝</strong>이며, 이를 다른 팝음반에 비교해 볼때 단연 이수준이 되는 음반이다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-yellow-300">
                <p className="text-yellow-800 text-xs">
                  가뜩이나 서정적인 목소리인데 곡들이 너무도 따스하여 조화가 이루어진 음반이다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">🎭 장르적 정체성</h2>
          
          <div className="space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">프로그레시브 vs 이탈리아 팝</h3>
              <p className="text-amber-700 mb-3">
                정철의 평가에서 흥미로운 점은 이 앨범을 <strong>'락의 범주에 넣지 않았다'</strong>는 것입니다. 
                그는 이를 분명히 <strong>이탈리아 팝</strong>으로 분류하며, 
                팝 음반으로서의 완성도를 높게 평가했습니다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-amber-300">
                <p className="text-amber-800 text-sm">
                  계약 문제로 더이상 이 음반을 찾아보기 힘들었다는 것이 아쉬울 정도로 
                  많은 이들의 사랑을 받고있다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">서정적 특성</h3>
              <p className="text-orange-700">
                <strong>가뜩이나 서정적인 목소리</strong>인데 곡들이 너무도 따스하여 조화가 이루어진 음반입니다. 
                오케스트레이션의 주도 아래 펼쳐지는 멜로디는 편안함과 동시에 
                깊은 감성적 울림을 제공합니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">🔍 Formula 3와의 비교</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Formula 3 시절</h3>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li>• 드러머 & 보컬리스트로 활동</li>
                <li>• 그룹의 집단적 역량</li>
                <li>• 다양한 악기 편성</li>
                <li>• 프로그레시브한 구성</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">솔로 프로젝트</h3>
              <ul className="space-y-2 text-orange-700 text-sm">
                <li>• 개인 프로젝트의 한계</li>
                <li>• 서정적 멜로디 중심</li>
                <li>• 오케스트레이션 활용</li>
                <li>• 이탈리아 팝에 가까운 성향</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-8 border border-amber-200">
          <h3 className="text-xl font-bold text-amber-800 mb-4">🌙 Cico의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-amber-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 서정적인 멜로디 중심</li>
                <li>• 오케스트레이션 주도</li>
                <li>• 따스한 감성</li>
                <li>• 이탈리아 팝 성향</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">앨범 평가:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 'La Notte' 한 곡의 완성도</li>
                <li>• 나머지 곡들의 평범함</li>
                <li>• 국내 매니아들의 사랑</li>
                <li>• 계약 문제로 희귀성 증가</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">💫 특별한 의미</h3>
          <p className="text-yellow-700">
            Cico의 'Notte'는 프로그레시브 록과 이탈리아 팝의 경계에서 
            독특한 위치를 차지하는 앨범입니다. 
            'La Notte' 한 곡만으로도 충분히 기억될 만한 가치가 있으며, 
            70년대 이탈리아 음악의 서정적 면모를 잘 보여주는 작품입니다.
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-amber-600 text-sm">
            17/30 완료
          </div>
        </div>
      </div>
    </div>
  );
}