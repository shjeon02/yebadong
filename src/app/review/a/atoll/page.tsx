import Link from "next/link";

export default function AtollPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Atoll</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">김용석</span>
              <span className="ml-2 text-sm text-gray-600">demetrio@hitel.net, 94.12</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Atoll - L'araign'ee - mal ★★★☆</h3>
                <p className="text-sm leading-relaxed">
                  그들의 75년 두번째 앨범이자 대표작이다. 웬지 형식에 얽매이지 싫은 프리재즈적인 요소를 지니고 있고, 연주가 거칠지는 않으나 매우 탄력있다(?). 
                  게스트로 참여한 바이올린 주자 Richard Aubert덕분에 이 앨범의 사운드는 매우 박진감 있게 변한다. 나 개인적으로는 매우 좋아하는 앨범이나 처음 듣는 
                  분들에게는 권하고 싶지만은 않은 앨범이다. 그러나 여러번 반복해서 듣는다면 반드시 좋아지리라고 확신한다. 프랑스 그룹인 이들은 Yes에게서 결정적인 
                  영향을 받았다. 프랑스의 예스로 통하기도 하며 그들의 사운드 역시 예스의 깔끔함이 많이 베어있다. Le Voleur, D'extase가 가장 알려진 곡이다.
                </p>
                <p className="text-xs text-gray-500 mt-2">(신라레코드)</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">정종화</span>
              <span className="ml-2 text-sm text-gray-600">notte@hitel.net, 94.12</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">Atoll - L'araign'ee - mal ★★★★</h3>
                <p className="text-sm leading-relaxed">
                  아똘은 개인적으로 Pulsar와 함께 프랑스 그룹들중 가장 좋아하는 그룹이다. 그리고 본작은 이들의 대표작이고, 당연히 무척 좋아하는 앨범이다. 
                  '독거미'라는 타이틀이 말해주듯 상당히 그로테스크한 자켓에 어울릴만큼 전반적으로 무겁고 음침한 음악을 들려주고 있으며, 다분히 난해한 면도 보인다. 
                  하지만, 전반적으로 연주력과 곡의 구성력이 상당히 뛰어난 앨범이다.
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-sm"><strong>첫곡 'Le Photographe Exorcite':</strong> 분위기, 구성력, 연주력 모든면에서 완벽에 가까운 멋진 곡</p>
                  <p className="text-sm"><strong>'Le Voleur, D'extase':</strong> Richard Aubert의 멋진 바이올린 연주를 만끽할 수 있는 곡</p>
                  <p className="text-sm"><strong>타이틀곡 'L'araign'ee-mal':</strong> 간과할 수 없는 실험성과 뛰어난 연주력이 충만</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">초보자용으로 적합하지 못하다는데는 공감하는 바이다.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">조영래</span>
              <span className="ml-2 text-sm text-gray-600">cynical@hitel.net, 94.12 & 95.4</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Atoll - L'Araignee-Mal ★★★★</h3>
                <p className="text-sm leading-relaxed">
                  프렌치 록의 걸작중의 하나로 손꼽히는 앨범. 부트랙식으로 발매된 라이센스에는 후한 점수를 주긴 뭣하지만, 본작 자체의 음악적 만족감에는 후한 점수를 주고 싶다. 
                  전체적으로 어두운, 그로테스크한 앨범으로 '거미'를 소재로 한 여러 앨범중에서도 뛰어난 위치를 차지하고 있다.
                </p>
                <p className="text-xs text-gray-500 mt-2">참고로 이 앨범의 바이얼리니스트는 프랑스의 유명한 전위 밴드인 Komintern출신.</p>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">ATOLL - Tertio</h3>
                <p className="text-sm leading-relaxed">
                  프랑스의 대표적인 록 떼아뜨르 밴드중의 하나인 Atoll은 두번째 앨범 'L'Araignee-Mal'로 국내에 잘 알려져 있다. '거미'에 이어 나온 본작 'Tertio'는 
                  전작에서와 같은 끔찍한 충격은 없지만, 화려한 연주를 자랑하는 Atoll의 또다른 음악 세계가 잘 나타나 있다.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  Atoll을 왜 프랑스의 Yes라고 하는지, '거미'앨범만으로는 잘 이해가 가지 않을 수도 있다. 그러나 앨범 'Tertio'를 들어보면 곡 전반을 뒤덮는 풍성한 건반과 
                  Christiam Beya의 깔끔한 음색의 기타연주, 리듬 컴비의 다소 불규칙적인 전개, 그리고 Jon Anderson을 연상시킬 수도 있는 Andre Balzer의 보컬등에서 Yes의 자취를 엿 볼 수는 있다.
                </p>
                <div className="mt-3 space-y-2">
                  <p className="text-sm"><strong>'Les Dieux Meme':</strong> Vangelis풍의 여성 코러스가 인상적인 곡</p>
                  <p className="text-sm"><strong>'Gae Lowe(Le Duel)':</strong> 가장 Yes풍이라고 생각되는 곡</p>
                  <p className="text-sm"><strong>'Tunnel pt.1&2':</strong> 복잡한 곡을 좋아하는 사람에게 어필할 곡</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">장민수</span>
              <span className="ml-2 text-sm text-gray-600">doctorOh@hitel.net, 95.4</span>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="text-sm leading-relaxed">
                영래님 요즘 글 올리시는 아티스트나 앨범이 하나같이 제가 좋아하는 것들이네요... :-) 
                Atoll의 Tertio에는 Magma의 코러스를 담당한 Lisa Deluxe와 Stella Vander가 참여하고 있습니다. 
                바로 Tunnel Part II의 중후반부에서 Lisa와 Stella의 백코러스를 들을 수 있지요. :)
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-700">밴드 특징</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>프랑스의 대표적인 프로그레시브 록 밴드</li>
              <li>"프랑스의 Yes"로 불리며 Yes의 영향을 받음</li>
              <li>그로테스크하고 음침한 분위기의 음악</li>
              <li>뛰어난 연주력과 곡 구성력</li>
              <li>바이올린이 인상적으로 사용됨 (Richard Aubert)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 