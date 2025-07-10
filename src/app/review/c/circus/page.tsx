import Link from 'next/link';

export default function CircusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-2">Circus</h1>
          <p className="text-lg text-red-600">스위스의 King Crimson 영향 받은 프로그레시브 밴드</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-red-700">국가:</span> 스위스</p>
              <p><span className="font-semibold text-red-700">구성:</span> 4인조</p>
              <p><span className="font-semibold text-red-700">명반:</span> Movin' On (1977)</p>
              <p><span className="font-semibold text-red-700">특징:</span> 키보드 없는 편성</p>
            </div>
            <div>
              <p><span className="font-semibold text-red-700">영향:</span> King Crimson</p>
              <p><span className="font-semibold text-red-700">밴드명 유래:</span> King Crimson "Lizard" 앨범</p>
              <p><span className="font-semibold text-red-700">활동:</span> 1970년대</p>
              <p><span className="font-semibold text-red-700">총 앨범:</span> 3장</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">유</span>
            </div>
            <div>
              <p className="font-semibold text-red-800">유영재</p>
              <p className="text-sm text-red-600">espiritu@hitel.net, 1993.6</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🎪 스위스 프로그레시브의 숨은 보석</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">유럽 프로그레시브의 지형</h3>
              <p className="text-red-700 mb-3">
                프로그레시브록은 대개 유럽쪽이 강세를 보이고 있지만 그 세력은 
                <strong>영국, 독일, 프랑스, 이태리에 치우쳐져</strong> 있다고 해도 좋을것이다. 
                다른 유럽국가는 그에 비해서 조금은 뒤쳐져있는것이 사실이지만 
                게중에서도 나름데로 뛰어난 음악을 들려주는 그룹을 종종 찾아볼 수 있다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-red-300">
                <p className="text-red-800 text-sm">
                  지금 소개하는 <strong>스위스의 4인조 밴드 CIRCUS</strong>도 그러한 그룹 중의 하나라고 말할 수 있을 것이다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Movin' On (1977) - 대단한 작품</h3>
              <p className="text-orange-700">
                여기 소개하는 이들의 1977년도 두번째앨범 <strong>[MOVIN' ON]은 결론부터 말하면 대단한 작품</strong>이다. 
                이 앨범에서 이들이 들려주는 수려한 연주와 치밀감이 넘치는 곡구성은 
                <strong>초 일류급이라 해도 과언이 아니다.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">👥 멤버 구성</h2>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">뛰어난 테크니션들로 구성</h3>
            <div className="grid md:grid-cols-2 gap-4 text-red-700">
              <div>
                <ul className="space-y-2">
                  <li>• <strong>Marco Cerletti:</strong> bass & guitar</li>
                  <li>• <strong>Andreas Grieder:</strong> flute</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>• <strong>Roland Frei:</strong> vocal & guitar</li>
                  <li>• <strong>Fritz Hanser:</strong> drum</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">키보드 없는 특별한 편성</h3>
            <p className="text-orange-700 mb-3">
              위의 멤버 구성에서 보면 알 수 있듯이 <strong>이 그룹은 키보디스트가 없다.</strong> 
              사실 키보드라는 악기는 프로그레시브 록에서 필수불가결 하다시피한, 
              상당한 비중을 차지하는 악기이기 때문에 프로그레시브 록에서는 반드시 키보드가 들어가야 한다고 생각하겠지만, 
              이 음반을 듣게되면 아마도 그런 고정관념을 깨버릴 수 있을 듯 하다.
            </p>
            <div className="bg-white p-3 rounded border-l-2 border-orange-300">
              <p className="text-orange-800 text-sm">
                리듬섹션의 박력있는 전개와 다양한 이펙터를 구사하는 기타음, 
                적재적소에서 연주되고 있는 플룻의 효과적 사용등 그들 독자적인 음공간을 창조하고 있다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">💿 Movin' On 앨범 구성</h2>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-6">
            <h3 className="font-semibold text-red-800 mb-3">총 5곡 구성</h3>
            <div className="grid md:grid-cols-2 gap-4 text-red-700">
              <div>
                <h4 className="font-semibold mb-2">Side 1:</h4>
                <ul className="space-y-1">
                  <li>1. The Bandsman</li>
                  <li>2. Laughter Lane</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Side 2:</h4>
                <ul className="space-y-1">
                  <li>1. Movin' On</li>
                  <li>3. Loveless Time</li>
                  <li>4. Dawn</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-2">곡별 분석</h3>
              <div className="space-y-3 text-red-700">
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <h4 className="font-semibold text-red-800">The Bandsman</h4>
                  <p className="text-sm">멀리서부터 들려오는 경쾌한 기타 리듬과 춤을 추는 듯한 Grieder의 플룻 인트로로 시작. 긴박감과 차분함이 적절한 조화를 이루는 가운데 딱딱 끊어주는 듯한 연주가 돋보인다. 정말 경쾌하고 신나는 곡.</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-orange-300">
                  <h4 className="font-semibold text-orange-800">Laughter Lane</h4>
                  <p className="text-sm">첫곡과는 달리 적막감이 감도는 분위기를 연출. 뒤에서 잔잔히 울리는 Fritz Hanser의 비브라폰 연주는 어떤 신비감 마저 가져다 주며, 후반부의 보컬과 색서폰의 서로 주고 받는 식의 즉흥적인 연주는 상당히 인상적.</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-yellow-300">
                  <h4 className="font-semibold text-yellow-800">Loveless Time</h4>
                  <p className="text-sm">조금은 늘어지는 듯한 분위기로 시작하지만 중반부와 후반부에서 역시 긴장감이 넘치는 사운드를 들려주고 있으며, 중후하면서도 기교가 넘치는 베이스음이 매우 멋지다.</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-gray-300">
                  <h4 className="font-semibold text-gray-800">Dawn</h4>
                  <p className="text-sm">불협화음적인 사운드와 다분히 즉흥적인 연주로 시작하는 이 앨범에서 유일한 연주곡. 곡전체에 걸쳐서 을씨년스러운 분위기를 느끼게 해준다. 다소 아방가르드적인 요소에, 재즈와 사이키델릭이 어느 정도 함축되어 있는것 같이 들린다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🎵 타이틀곡 'Movin' On' - 22분의 대작</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">앨범의 백미</h3>
              <p className="text-red-700 mb-3">
                뒷면을 가득 메우고 있는 앨범 타이틀 곡이자 <strong>22분여의 대곡이며 명곡인 'Movin On'!!!</strong> 
                러닝 타임 22분이라는 짧지 않은 시간이 결코 길게 느껴지지 않을 정도로 
                치밀한 곡구성과 박진감 넘치는 사운드가 빛을 발하는 걸작품이다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-red-300">
                <p className="text-red-800 text-sm">
                  첫곡 'The Bandsman'과 비슷한, 어쿠스틱 기타와 드라마틱한 드러밍, 
                  허공을 떠도는 듯한 플룻의 연주로 곡은 시작되는데, 
                  이펙터를 매우 효과적으로 사용하여 아주 멋진 사운드를 창출하고 있다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">연주의 백미</h3>
              <p className="text-orange-700 mb-3">
                특히 곡의 전면에서 들려오는 <strong>베이스와 드럼의 수려한 연주는 정말 일품</strong>이다. 
                여기에 색서폰과 플룻이 가세하여 숨막히는 곡전개를 펼쳐나가며, 
                그 뒤에 들려오는 상당히 이색적인 보컬 하모니는... 흐~ 정말 죽여주네요!!!
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-orange-300">
                <p className="text-orange-800 text-sm">
                  중반부는 주로 보컬이 주를 이루고 있는데, 상당히 기묘하면서도 조심스러우면서도 섬세하다고나 할까?... 
                  암튼 이들이 킹 크림슨의 영향을 받았다곤 하지만, 이 부분을 들어보면 이들 특유의 개성이 살아있는 것 같다.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">대미를 장식하는 마지막</h3>
              <p className="text-yellow-700">
                그리고는 기타와 섹서폰의 차분한 연주가 들려오고, 이어서 
                드러머인 <strong>Fritz Hanser의 아주 멋진 비브라폰 연주</strong>가 듣는 이를 또한번 감탄시킨다. 
                마지막 부분에서는 베이스와 색서폰의 격렬한 연주가 대미를 장식하게 된다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🎭 King Crimson의 영향과 독창성</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">밴드명의 유래</h3>
              <p className="text-red-700 mb-3">
                이들은 음악적인 면에서 <strong>King Crimson의 영향</strong>을 받았다고 전해지는데, 
                그래서 이들의 그룹명도 킹 크림슨의 <strong>[Lizard]앨범 수록곡인 'Circus'에서 따왔다</strong>는 설도 있다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-red-300">
                <p className="text-red-800 text-sm">
                  Circus라는 이름은 프로록 밴드중에선 여럿 찾아볼 수 있다. 
                  영국에서 60년대 후반에 활동한 Circus, [One]이라는 수준높은 앨범을 발표한 Cirkus, 
                  이탈리아의 Circus 2000도 있었지만... 
                  개인적인 생각엔 지금 소개하는 이 스위스의 Circus가 가장 뛰어난 밴드가 아닐까 생각된다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">크림슨보다 오밀조밀한 구성</h3>
              <p className="text-orange-700">
                이들의 명반으로 꼽히는 두번째 앨범 [Movin On]은 
                <strong>크림슨의 영향위에 펼쳐지는 고수준의 연주력</strong>이 듣는 이를 압도하고 있으며, 
                <strong>크림슨보다는 오밀조밀한 구성</strong>을 보여주고 있다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">📝 전체적인 평가</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">최고 수준의 앨범</h3>
              <p className="text-green-700 mb-3">
                전체적인 평가를 내려보면 연주력에 있어서 파워는 좀 결여되어 있지만, 
                <strong>상당히 기교스러우면서도 현란하다</strong>고 할까? 
                정말 들으면 들을수록 신비롭고,...섬세하고,...오묘하고,... 
                암튼 <strong>모든면에서 최고 수준의 앨범</strong>이라고 말하고 싶다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-green-300">
                <p className="text-green-800 text-sm">
                  물론 이러한 견해는 모두 개인적인 생각이다. 
                  이 글을 보고 이 앨범을 접하신후 뭐 이따위 음반을 그렇게 말도 안되는 찬사를 늘어놨냐고 욕을 하신다면 할 수 없는 일이다. 
                  취향 차이니까... 어쨌든 본인은 이 앨범이 너무 좋다.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">이후 활동</h3>
              <p className="text-gray-700">
                이후 이들은 <strong>두장의 앨범을 더 발표하고 사라지게</strong> 된다. 
                다음 앨범인 라이브 앨범 [Circus All Star Band]의 인트로로 'The Bandsman'이 연주되기도 했다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8 border border-red-200">
          <h3 className="text-xl font-bold text-red-800 mb-4">🎪 Circus의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-red-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• King Crimson 영향의 스위스 프로그레시브</li>
                <li>• 키보드 없는 독특한 편성</li>
                <li>• 플룻과 색서폰 활용</li>
                <li>• 치밀한 곡구성과 박진감</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">대표 작품:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Movin' On (1977) - 명반</li>
                <li>• 22분 대곡 타이틀트랙</li>
                <li>• 총 5곡의 완성도 높은 구성</li>
                <li>• 이후 2장 더 발표 후 해체</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-red-600 text-sm">
            18/30 완료
          </div>
        </div>
      </div>
    </div>
  );
}