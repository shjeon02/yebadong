import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '고등학생의 프로그레시브락 소개 | Yebadong',
  description: '정철님이 고등학교때 교지에 쓰신 프로그레시브 록 소개글',
};

export default function HighschoolPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">고등학생의 프로그레시브락 소개</h1>
          <p className="text-base text-gray-600">정철님이 고등학교때 교지에 쓰신 글 (1994년)</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            {/* Author's Note */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">작성자의 말</h2>
              <div className="space-y-3 text-yellow-700">
                <p>이건 94년, 그러니까 제가 고삐리때 학교 교지에 실은 글입니다, 어이쿠.</p>
                <p>아마 장정일씨가 씹고싶었던 것은 이런 글이나 긁적이는 친구들인지도 모르겠네요.</p>
                <p>어설픈 글이지만 제 역사인지라 부정할수도 없지요...-_-</p>
                <p>중학교때는 좋은 PC구입법에 대해 정리해서 교지에 실었던 기억도 나네요...^^;</p>
                <p>그때 세운상가를 돌아다니며 286 PC들을 벤치마킹해가며 샀었거든요.</p>
                <p>그냥 재미있으시라고 올려봅니다.</p>
                <p><strong>요즘에도 프록을 열심히 듣는 고딩들이 있을랑가 모르겠네.</strong></p>
              </div>
            </div>

            {/* Main Article */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">프로그레시브 록</h2>
              
              {/* Definition */}
              <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                <div className="font-mono text-sm text-blue-800 mb-4">
                  <p><strong>progressive</strong> adj. 1&lt;제도, 주의,방침&gt;등이 진보[전진]적 인, &lt;사람이&gt; 진취의 기상을 가진,진보적인</p>
                  <p><strong>progressive rock</strong> n.ⓤ [樂] 프로그레시브 록;복잡한 프레이징 과 즉흥을 채택한 록뮤직</p>
                </div>
              </div>

              {/* 1. 서론 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. 序 (서론)</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <p>
                    프로그레시브 록에 대한 얘기를 하기 전에 먼저 몇가지를 알려드리고 싶습니다. 
                    먼저 제가 아는 프로그레시브 록은 그 넓은 세계 중의 조금, 아주 조금이라는 것과 
                    여기서 저는 최대한 객관적으로 쓰고자 노력했지만 상당히 주관적인 면이 들어있다는 것입니다.
                  </p>
                  
                  <p>
                    개념 정립을 위하여 먼저 프로그레시브 록의 영역에 대해서 생각해 보겠습니다.<br />
                    이 세상의 모든 음악(인류가 창조한)은 모두 프로그레시브(진보적인) 음악입니다. 
                    그냥 막대기를 두들기는 것에서 지금의 드럼과 같은 타악기가 나왔고, 
                    괴성을 지르는 것에서 점차로 가락이 나온 것이지요.
                  </p>
                  
                  <p>
                    어떤 음악이라도 각 장르 내에서 나름대로 진보를 하게 마련입니다. 
                    그러나 이렇게 하자면 제가 평생을 다 바쳐도 이 글을 못 끝낼테니 
                    보다 보편적으로 쓰이는 의미로 범위를 좁히겠습니다.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-blue-800">
                      <strong>프로그레시브라는 말은 특정한 장르를 지칭하는 말이 아닙니다.</strong> 
                      말 그대로 진보적 성향을 가진 분야를 나타내기 위한 형용사이지요. 
                      그렇지만 보통 프로그레시브 록을 말합니다.
                    </p>
                  </div>
                  
                  <p>
                    또 이 프로그레시브 록이라는 말은 프로그레시브 포크(folk), 프로그레시브 메탈(metal), 
                    유러피언(European) 록과 같은 장르의 음악을 포괄적으로 말하기도 하지요. 
                    또, 아트(Art) 록이라는 용어는 프로그레시브 록과 싸이키델릭(Psychedelic) 록을 
                    두루 지칭하는데 쓰입니다.
                  </p>
                  
                  <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-2">💡 정철님의 정의</h4>
                    <p className="text-yellow-700">
                      프로그레시브 록은 <strong>"실험성과 즉흥성을 가미하고 미적 요소를 도입하여 
                      자신들의 의지를 표출하고자 한 음악인들의 록음악"</strong>이다.
                    </p>
                    <p className="text-yellow-600 text-sm mt-2">
                      여기에 쓰인 '실험', '즉흥', '미(美)'라는 낱말들이 각각 중요한 의미를 가집니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. 프로그레시브 록의 여명 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. 프로그레시브 록의 여명(黎明)</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <p>
                    프로그레시브 록의 근원지인 <strong>60년대 영국의 런던</strong>에 대해서 얘기하겠습니다. 
                    이 시기는 2차대전 후의 피폐한 상황을 딛고 세계 경제가 어느정도 회복되기 시작한 때입니다. 
                    젊은이들의 사회에 대한 반항심이 점차 커져가기 시작한 때이기도 하지요.
                  </p>
                  
                  <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                    <h4 className="font-semibold text-amber-800 mb-2">🌆 1966년, 런던의 문화적 혁명</h4>
                    <p className="text-amber-700 text-sm">
                      66년, 왜? 라고는 꼭 집어서 얘기할 수는 없지만 유럽의 수많은 음악가, 음유 시인, 
                      영화 감독, 화가등의 예술가들이 런던으로 몰려들기 시작했습니다. 
                      이 때 Time지(誌)는 <strong>"런던이 꿈틀대고있다!"</strong>라는 표제를 걸기도 했지요.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">🎨 아트 스쿨의 역할</h4>
                    <div className="text-blue-700 text-sm space-y-2">
                      <p>
                        그리고 60년대의 영국 문화를 이끌어가던 <strong>아트 스쿨(art school)</strong>의 
                        학생들이 록큰롤(Rock'n Roll)과 재즈(jazz)에 눈을 뜨기 시작합니다.
                      </p>
                      <p>
                        이들은 자유분방한 분위기 속에서 자신들의 미적 감각과 참신한 생각을 음악속에 투영하기 시작하였습니다.
                      </p>
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-blue-900 mb-1">대표적인 인물들:</p>
                        <ul className="text-xs">
                          <li>• Syd Barret (Pink Floyd)</li>
                          <li>• John Lennon (the Beatles)</li>
                          <li>• Jimmy Page (Led Zeppelin)</li>
                          <li>• Freddie Mercury (Queen)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">🎵 the Beatles의 진화</h4>
                    <div className="text-green-700 text-sm space-y-2">
                      <p>
                        노골적으로 사랑을 표현하던 the Beatles가 앨범 <strong>Rubber Soul(1965)</strong>에서 
                        완곡하고도 성숙한 가사와 초현실주의, 동양음악, 클래식 편곡등을 도입하였습니다.
                      </p>
                      <p>
                        그리고 <strong>Revolver(1966)</strong>에서는 사회 비판을 본격적으로 시작하지요. 
                        이후 이들은 계속 실험에 실험을 거듭하여 록 사상 최고의 명반이라는 
                        <strong>Sgt. Pepper's Lonely Hearts Club Band(1967)</strong>를 발표하기에 이릅니다.
                      </p>
                      <p>
                        여기서 이들은 당시 최첨단의 녹음 기술과 싸이키델릭적인 분위기, 
                        하나의 주제를 표현하는 컨셉트 앨범에의 시도 등 하나의 음악적 정점을 이룩하지요.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">🌟 전설적 그룹들의 결성</h4>
                    <p className="text-purple-700 text-sm">
                      이 이후 이미 전설이 되어버린 대그룹들이 앞다투어 결성됩니다: 
                      <strong>King Crimson, Pink Floyd, Genesis, Emerson,Lake & Palmer, 
                      Moody Blues, Camel, Yes, Jethro Tull</strong> 등등. 
                      그리고 이들의 음악적 영향력은 전 유럽으로 퍼져나가서 프로그레시브 록이 
                      지금의 팝음악만큼이나 각광받는 시기를 맞습니다.
                    </p>
                  </div>
                  
                  <p className="text-center text-gray-600 italic">
                    즉 프로그레시브 록의 형성은 시대적 흐름에 의한 자연스러운 결과라는 얘기지요.
                  </p>
                </div>
              </div>

              {/* 3. 실험성 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. 실험성(實驗性)</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <p className="text-red-700 text-sm">
                      <strong>실험성은 프로그레시브 록의 가장 큰 특징입니다.</strong> 
                      그러나 설명하기는 매우 까다롭지요. 음악적인것을 언어로 표현하고자 하는 발상 자체도 
                      말이 안되지만.... 어쨌든 피상적인 것만이라도 얘기하겠습니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">⏰ 대곡지향적 성격</h4>
                    <div className="text-blue-700 text-sm space-y-2">
                      <p>
                        가장 먼저 들 수 있는 것이 <strong>대곡지향적 성격</strong>입니다. 
                        당시는 3분 내외의 짧은 곡들이 주류를 이루고 있었읍니다.
                      </p>
                      <p>
                        그러나 프로그레시브 록그룹들은 짧아야 5분, 보통이 10분, 
                        여차하면 앨범 전체를(40분 정도) 한곡으로 만들어버리는 대담한 시도를 통해 
                        음악의 표현력을 증대시켰습니다.
                      </p>
                      <p>
                        최근에 나온 N.EX.T.의 the Being(1994)에서 Destruction of the Shell이 
                        세 부분으로 나뉘어 있죠? 그런게 조곡입니다. 물론 N.EX.T.는 결코 프로그레시브 밴드는 아니지만..
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">🎹 신디사이저와 멜로트론의 등장</h4>
                    <div className="text-green-700 text-sm space-y-2">
                      <p>
                        그 다음으로 들 수 있는게 <strong>신디사이저(synthesizer)와 멜로트론(mellotron)</strong>의 등장입니다. 
                        그 이전에도 오르간이나 신디사이저 등을 써왔지만 프로그레시브 록그룹들은 
                        이들을 거의 기타와 같은 비중으로, 아니 오히려 기타는 빼버리고 키보드군을 중심으로 
                        (특히 Emerson, Lake & Palmer) 음악을 했습니다.
                      </p>
                      <p>
                        이 악기들은 여러가지 효과음을 사용하기가 쉬웠기 때문입니다. 
                        또 멜로트론은 변형이 쉬워서 자신들 특유의 음색 창조가 가능했지요.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-2">📚 다양한 소재 활용</h4>
                    <div className="text-yellow-700 text-sm space-y-3">
                      <p>
                        이들은 음악의 소재를 참 다양하게 찾았습니다. 사랑이나 풍경을 읊은 노래는 물론이거니와 
                        사회 비판을 하거나 <strong>문학, 철학, 과학은 물론, 신화, 민담, 삶과 죽음, 역사</strong> 등등 셀수도 없습니다.
                      </p>
                      
                      <div className="bg-white p-3 rounded space-y-2">
                        <p className="font-semibold text-yellow-900">구체적인 예시들:</p>
                        <ul className="text-xs space-y-1">
                          <li>• <strong>Pink Floyd - the Wall(1979)</strong>: 우리 자신을 둘러싸고있는 모든 벽을 부수라는 내용</li>
                          <li>• <strong>Rick Wakeman - Six Wives of Henry VIII(1973)</strong>: 키보드 하나로 헨리 8세의 여섯 왕비들의 흥망성쇠 표현</li>
                          <li>• <strong>Il Balletto di Bronzo - YS</strong>: 사랑의 여신의 밤생활을 환상적, 전위적으로 표현</li>
                          <li>• <strong>Metamorfosi - Inferno</strong>: 단테의 신곡(神曲)을 노래</li>
                          <li>• <strong>Museo Rosenbach - Zarathustra</strong>: 니체의 '짜라투스트라는 이렇게 말했다'를 노래</li>
                          <li>• <strong>Camel - Nude</strong>: 섬에 남아 수십년을 전쟁중이라고 생각했던 일본 병사의 이야기</li>
                          <li>• <strong>Latte e Miele - Passio Secundum Mattheum</strong>: 마태복음에 기록된 예수의 수난을 장엄하게 묘사</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">🎼 클래식과 민족 음악의 영향</h4>
                    <div className="text-purple-700 text-sm space-y-2">
                      <p>
                        그리고 이들은 <strong>클래식이나 지방 고유의 음악</strong>에서 많은 음악적 영감을 얻었습니다. 
                        영국의 포크음악은 아예 British Folk Rock이라고 거의 한 장르가 되어가고 있을 정도이고 
                        Osanna(이탈리아)는 앨범 Palepoli(옛 도시;Napoli의 반대말)에서 그지방 사투리로 노래합니다.
                      </p>
                      
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-purple-900 mb-1">클래식 편곡 사례:</p>
                        <ul className="text-xs space-y-1">
                          <li>• <strong>Latte e Miele</strong>: 비발디(四季)와 베토벤(Piano Sonata No.3, Op.13 Pathetique) 편곡</li>
                          <li>• <strong>ELP - Pictures at an Exhibition</strong>: 무소르그스키의 '전람회의 그림' 변주</li>
                          <li>• <strong>Los Canarios - Ciclos</strong>: 앨범 전체를 원작보다도 더 길게 변주한 사계로 구성</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded border border-gray-300">
                    <p className="text-gray-600 text-sm italic text-center">
                      "마지막으로 음악을 구체화시키는 과정에서 보인 여러 실험적 시도가 있습니다. 
                      이것은 뭐라 말씀드리기가 참 곤란합니다. 이것은 듣지않으면 절대로 느낄수 없는것이기 때문입니다. 
                      그 팽팽한 긴장감과 연주력, 광기, 서정성, 꽉 짜인 구성을 말로 표현한다면 
                      그것은 결국 음악의 왜곡(歪曲) 외에는 아무것도 아닐것입니다."
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. 미(美) - 음악 외적인 측면에서 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. 미(美) - 음악 외적인 측면에서</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <p>
                    프로그레시브 록에서는 <strong>음악 외적인 면에도 상당한 가치를 부여</strong>합니다. 
                    그들의 피조물인 음반을 하나의 총체적 예술로 승화시키려는 욕구 때문이지요.
                  </p>
                  
                  <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                    <h4 className="font-semibold text-amber-800 mb-2">🎨 커버 아트의 혁신</h4>
                    <div className="text-amber-700 text-sm space-y-2">
                      <p>
                        이들의 미적 감각은 <strong>커버</strong>에서 두드러집니다. 보통 2면커버을 이용하여 
                        펼치면 하나의 그림이 되게끔 한 경우가 가장 많고, 3면커버를 만들어서 더 크게 만든 경우도 있습니다.
                      </p>
                      <p>
                        <strong>포스터 커버</strong>라하여 커버의 6배에서 9배정도 되는 도화지를 음반을 넣고 접게끔 되어있는것도 있지요. 
                        물론 그 도화지에는 아주 큰 그림이 그려져 있구요. 그런가하면 변기 뚜껑처럼 생겨서 열리게 된것도 있고...
                      </p>
                      
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-amber-900 mb-1">전문 디자이너 집단:</p>
                        <ul className="text-xs space-y-1">
                          <li>• <strong>Hipgnosis</strong>: 사진 합성기법 전문, Led Zeppelin과 Pink Floyd 담당</li>
                          <li>• <strong>Roger Dean</strong>: 신비적인 화풍으로 유명</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">🎭 실황공연의 예술적 연출</h4>
                    <div className="text-blue-700 text-sm space-y-3">
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-blue-900 mb-1">🏛️ Pink Floyd - 폼페이 공연</p>
                        <p className="text-xs">
                          Pink Floyd는 이탈리아의 폼페이에서 <strong>무관객 실황공연</strong>을 했습니다. 
                          즉 관객없이 자기들끼리 고대 유적지에서 연주를 한 것이지요. 
                          특히 카메라 맨이 빙 돌면서 신들린듯 기타를 연주하는 David Gilmour를 찍은 장면은 일품입니다.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-blue-900 mb-1">🧱 베를린 장벽 the Wall 공연 (1990.7.21)</p>
                        <p className="text-xs">
                          Roger Waters가 무너진 베를린 장벽앞에서 the Wall 공연을 했습니다. 
                          악곡이 전개되는 동안 종이상자로 된 벽돌을 차례로 쌓아나가다가 
                          곡의 절정부분에서 "Tear Down The Wall!"의 외침과 함께 그 벽을 부셔버리는 
                          아주 극적인 연출이었습니다.
                        </p>
                      </div>
                      
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-blue-900 mb-1">🎪 기타 연출들</p>
                        <ul className="text-xs space-y-1">
                          <li>• <strong>Osanna</strong>: 분장을 하고 나와서 연기를 하는것처럼 공연</li>
                          <li>• <strong>라이트 쇼</strong>: 무대 뒤나 옆, 천장등에 슬라이드나 영상을 투사</li>
                          <li>• <strong>Pink Floyd - Animals 돼지 풍선</strong>: 거대한 분홍빛 돼지 풍선 홍보 (공군기지에서 포착되기도!)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. 희소성과 음반 구입 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. 희소성(稀少性) 그리고 음반 구입에 관하여</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                    <p className="text-orange-700 text-sm">
                      <strong>프로그레시브 록의 특징을 들 때 이 희소성을 무시할 수 없습니다.</strong> 
                      음악적 완성도는 높으나 대중들이 그리 선호하지 않는 관계로 극소량만이 발매된 것이 상당히 많거든요.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ 음반 구입시 주의사항</h4>
                    <div className="text-red-700 text-sm space-y-2">
                      <p>
                        그런데 이런(희귀 명반) 간판을 달고 원판도 아니면서, 음악적 완성도도 그리 높지도 않으면서 
                        비싸게 받는 경우가 많으니 이건 아주 경계할 일입니다.
                      </p>
                      <p>
                        일본에서는 몇몇 수입업자나 중고상이 음반을 헐값에 사와서 몇만원이나 받아먹는 경우가 종종 있거든요. 
                        또 사는 사람들은 그것도 모르고 비싸다니 그만큼의 가치가 있겠지 하는 투로 삽니다.
                      </p>
                      
                      <div className="bg-white p-3 rounded">
                        <p className="font-semibold text-red-900 mb-1">💡 현명한 구입 방법:</p>
                        <ul className="text-xs space-y-1">
                          <li>• <strong>가장 좋은 방법은 들어보고 사는것</strong></li>
                          <li>• 주변의 친구들이나 통신망의 동호회를 이용</li>
                          <li>• 희귀하다고 다 좋은게 아니라는 것을 명심</li>
                          <li>• 프로그레시브 록에 명반은 많지만 졸반도 명반만큼이나 많음</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. 프로그레시브 록의 쇠퇴 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. 프로그레시브 록의 쇠퇴(衰退)</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
                    <p className="text-gray-700 text-sm">
                      프로그레시브 록은 <strong>70년대 중반에서 후반 사이에 사라집니다.</strong> 
                      물론 이것은 아주 극단적인 표현입니다. 몇몇 대그룹들(Pink Floyd, King Crimson, Camel, Yes..)은 
                      80년대에도 계속 활동 했고 Pink Floyd같은 경우 최근에 the Division Bell(1994)을 발표하여 
                      빌보드 챠트를 점령하기도 했으며 신세대 프로그레시브 록그룹들도 아직도 활발한 활동을 하니까요.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">📉 쇠퇴의 원인들</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• 팝음악의 추세에 밀려서 대부분의 그룹들이 음악성을 바꿈</li>
                      <li>• Genesis같은 경우는 지금도 팝그룹으로 명성(?)을 날리고 있음</li>
                      <li>• 많은 그룹들이 해산을 해버림</li>
                      <li>• 신세대 그룹들도 음악성이 예전과는 상당히 다름</li>
                      <li>• 60, 70년대의 정신(rock spirit)은 그 어느곳에서도 찾을 수 없음</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. 초심자를 위한 프로그레시브 록의 명반 소개 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. 초심자를 위한 프로그레시브 록의 명반 소개</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-blue-700 text-sm">
                      어떤 장르에나 명반은 있습니다. 그러나 초심자가 들어도 느낄수 있는 명반이 있고 
                      어느 정도 들은 후에 듣지 않으면 단지 소음으로 밖에 들리지 않는 명반이 있지요. 
                      물론 저도 초심자이지만 여러분들보다는 많이 들었으니 
                      어떤 음반을 들어야 하는것 정도는 소개할 수 있겠죠.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-400">
                      <h4 className="font-semibold text-pink-800 mb-2">🌙 Pink Floyd - The Dark Side of the Moon (1973)</h4>
                      <p className="text-pink-700 text-xs mb-2">
                        이들은 이 음반에서 <strong>초현실주의의 극치</strong>를 보여주었습니다. 
                        특히 Time에서는 수백개의 시계를 동시에 울리는 효과를 써서 아주 적절한 효과를 내었습니다. 
                        Eclipse라는 노래는 마치 가사가 윤동주의 '별헤는 밤'을 방불케 합니다.
                      </p>
                      <p className="text-pink-600 text-xs">
                        빌보드에 566주(13년 정도)동안 올라있어서 기네스 북에도 오른 음반이기도 하지요.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-800 mb-2">🎻 New Trolls - Concerto Grosso per 1 (1971)</h4>
                      <p className="text-green-700 text-xs">
                        이들이 클래식 작곡가이자 영화음악가인 Luis E.Bacalov와 손잡고 만든 아주 서정적인 음반입니다. 
                        거친 플룻소리와 부드러운 바이올린으로 독창적인 선율을 자유자제로 구사하였지요. 
                        특히 뒷면을 가득 채우는 Nella Salla Vuota는 20분이 넘는 스튜디오 라이브로서 
                        즉흥성과 서정성과 강렬함이 적절히 조화된 라이브의 명곡이지요.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 mb-2">🛸 Klaatu (1976)</h4>
                      <p className="text-yellow-700 text-xs">
                        프로그레시브 록에는 비슷비슷한 음악성을 가진 그룹들이 있는 반면에 
                        다른 그룹과는 전혀 다른 독특한 음악을 한 그룹들이 몇몇 있습니다. 
                        이들이 바로 그런 그룹입니다. 맑고 깨끗한 음악과 목소리, 장난스러우면서도 천진한 악곡 전개. 
                        첫곡 Calling Occupants of Interplanetary Craft는 스필버그 감독에게 E.T.를 찍을 영감을 주었다고 해서 유명하지요.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-800 mb-2">🐪 Camel - Stationary Traveller (1984)</h4>
                      <p className="text-purple-700 text-xs">
                        수없는 음악적 변화를 이룩한 서정파 아트록 그룹인 이들은 프로그레시브 록의 시대가 
                        끝나버린 80년대에 이런 명반을 발표했습니다. 
                        잔잔하면서도 의미심장한 가사와 특유의 선율은 듣는이로 하여금 찡한 감동을 느끼게 합니다. 
                        어떤 이는 이 음반을 듣고 비로소 카타르시스(katharsis)가 무엇인지 깨달았다고 말하더군요.
                      </p>
                    </div>
                    
                    <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-400">
                      <h4 className="font-semibold text-indigo-800 mb-2">🔔 Mike Oldfield - Tubular Bells (1973)</h4>
                      <p className="text-indigo-700 text-xs">
                        프로그레시브 록의 황제라는 별칭을 갖고있는 그는 20살이 채 안된 나이로 
                        이런 황당한 음반을 혼자서 냈습니다. 앞뒷면 모두 30분에 육박하는 단일 트랙입니다. 
                        수십가지의 악기를 혼자서 수천번 녹음하여 만든 것이라서 참 설명이 곤란해요. 
                        이 음반은 the Exorcist라는 공포영화에 사운드트랙으로 사용되어 유명하지요.
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-800 mb-2">🎹 ELP - Pictures at an Exhibition (1971)</h4>
                      <p className="text-red-700 text-xs">
                        무소르그스키의 명작 '전람회의 그림'을 프로그레시브 록적으로 해석한 명 연주로 
                        비평가들의 찬사를 받았던 음반입니다. 실황으로 이런 완벽한 연주가 가능하다는 것 자체가 놀라운 일이지요. 
                        특히 Keith Emerson의 신들린듯한 키보드 연주는 후의 프로그레시브 록그룹들에게 지대한 영향을 주었습니다.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
                      <h4 className="font-semibold text-gray-800 mb-2">🧱 Pink Floyd - the Wall (1979)</h4>
                      <p className="text-gray-700 text-xs">
                        이 그룹의 핵인 Roger Waters는 염세주의자로 알려진 이인데 단지 세상을 비관적으로 보지만은 않고 
                        세상을 비판하는 염세주의자이지요. 전쟁으로 아버지를 여읜 소년이 성장하면서 겪는 
                        모든 벽들을 뚫고 나온다는 내용입니다. Another Brick in the Wall Part 2라는 곡은 
                        현대 교육의 아픈곳을 꼬집는 내용으로 빌보드 싱글챠트를 점령하기도 했지요.
                      </p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-400">
                      <h4 className="font-semibold text-amber-800 mb-2">👑 King Crimson - In the Court of the Crimson King (1969)</h4>
                      <p className="text-amber-700 text-xs">
                        King Crimson이라는 그룹은 Robert Fripp이라는 황당한 천재에 의해서 결성된 영국그룹인데 
                        데뷔앨범인 이 앨범에서 지금까지는 어디에서도 찾아볼 수 없는 소리를 구사하여 세인들의 주목을 받았습니다. 
                        이들의 음악을 흔히 <strong>"이성에 기초한 광기의 음악"</strong>이라고 하는데 아주 적절한 표현이라 생각합니다.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-100 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">📀 기타 추천 명반들</h4>
                    <div className="text-blue-700 text-xs space-y-1">
                      <p>• Alphataurus(Italia), Camel - Mirage, Camel - Moonmadness</p>
                      <p>• Banco del Mutuo Soccorso - Come in un'Ultima Cena(Italia)</p>
                      <p>• Il Balletto di Bronzo - YS(Italia), Genesis - Trespass</p>
                      <p>• Formula 3 - Sognando e Risognando(Italia)</p>
                      <p>• Pink Floyd - Ummagumma, Pink Floyd - Wish You Were Here</p>
                      <p>• Vangelis - Heaven & Hell(Greece)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. 終 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. 終 (마무리)</h3>
                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      이 글을 쓰면서 제가 얼마나 음악적 식견이 짧고 들어보지 못한 분야가 많은가를 
                      아주, 아주 절실히 느꼈습니다. 그만큼 이 음악 분야가 넓다는 것을 반증하는 것이기도 하지요.
                    </p>
                    
                    <div className="bg-white p-4 rounded border border-gray-300">
                      <p className="text-gray-600 text-sm">
                        저는 여러분 모두에게 이 난해한 음악을 들어달라고 요구하지 않습니다. 
                        단지 <strong>'이런음악도 있구나!'</strong>라는 생각을 가진다면, 
                        어디서 프로그레시브 록이 어쩌구 아트 록이 저쩌구 하는 말이 나올때 
                        '그게 뭐니?'라고 묻지 않을 정도만 되어준다면, 
                        그리고 아무리 황당한 음악이 나오더라도 
                        '이런 것도 있고 저런 것도 있는거지.'하고 이해해줄 수 있다면 
                        저로서는 대 만족이지요.
                      </p>
                    </div>
                    
                    <p className="text-center font-semibold">
                      누구든지 프로그레시브 록에 관심있는 분은 저를 찾아주세요. 
                      제가 성의껏 도와드리겠습니다.
                    </p>
                    
                    <p className="text-center text-gray-600 italic">
                      끝까지 졸고를 읽어주셔서 무척 고맙습니다. 그럼 ...
                    </p>
                  </div>
                </div>
              </div>

              {/* 9. 참고문헌 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. 참고문헌</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 계간 예술 대중 음악(Art Rock) 1,2,3,4,5,6 호 / 성시완 외</li>
                    <li>• 하이텔 Underground Music동호회와 소리 모꼬지의 여러 글들</li>
                    <li>• 월간 Hot Music의 프로그레시브 록 관련기사</li>
                    <li>• The Wall을 비롯한 여타 앨범들의 해설지</li>
                  </ul>
                </div>
              </div>

              {/* Epitaph - King Crimson */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Epitaph (墓碑銘)</h3>
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <p className="text-center text-gray-300 mb-4 text-sm italic">
                    Peter Sinfield of King Crimson
                  </p>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-200 mb-1">The wall on which the prophets wrote</p>
                        <p className="text-gray-400 mb-3 text-xs">예언자의 말이 적힌 벽은</p>
                        
                        <p className="text-gray-200 mb-1">Is cracking at the seams.</p>
                        <p className="text-gray-400 mb-3 text-xs">틈새마다 갈라져있고</p>
                        
                        <p className="text-gray-200 mb-1">Upon the instruments of death</p>
                        <p className="text-gray-400 mb-3 text-xs">死의 도구들 위로</p>
                        
                        <p className="text-gray-200 mb-1">The sunlight brightly gleams.</p>
                        <p className="text-gray-400 mb-3 text-xs">햇빛이 밝게 빛나네.</p>
                        
                        <p className="text-gray-200 mb-1">When every man is torn apart</p>
                        <p className="text-gray-400 mb-3 text-xs">모든이가 악몽과 꿈으로</p>
                        
                        <p className="text-gray-200 mb-1">With nightmares and with dreams,</p>
                        <p className="text-gray-400 mb-3 text-xs">갈기갈기 찢길때</p>
                        
                        <p className="text-gray-200 mb-1">Will no one lay the laurel wreath</p>
                        <p className="text-gray-400 mb-3 text-xs">침묵은 비명을 빨아들이고,</p>
                        
                        <p className="text-gray-200 mb-1">As silence drowns the screams.</p>
                        <p className="text-gray-400 mb-4 text-xs">월계관 놓을이 아무도 없으리.</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-200 mb-1">Between the irongates of fate,</p>
                        <p className="text-gray-400 mb-3 text-xs">운명의 철문 사이에</p>
                        
                        <p className="text-gray-200 mb-1">The seeds of time were sown,</p>
                        <p className="text-gray-400 mb-3 text-xs">시간의 씨앗은 뿌려지고,</p>
                        
                        <p className="text-gray-200 mb-1">And watered by the deeds of those</p>
                        <p className="text-gray-400 mb-3 text-xs">아는자와 알려진자들에 의해</p>
                        
                        <p className="text-gray-200 mb-1">Who know and who are known;</p>
                        <p className="text-gray-400 mb-3 text-xs">물이 부어졌네.</p>
                        
                        <p className="text-gray-200 mb-1">Knowledge is a deadly friend</p>
                        <p className="text-gray-400 mb-3 text-xs">누구도 규칙을 만들지 않을때,</p>
                        
                        <p className="text-gray-200 mb-1">When no one sets the rules.</p>
                        <p className="text-gray-400 mb-3 text-xs">지식은 치명적인 벗</p>
                        
                        <p className="text-gray-200 mb-1">The fate of all mankind I see</p>
                        <p className="text-gray-400 mb-3 text-xs">내 눈에 비치는 모든이의 운명은</p>
                        
                        <p className="text-gray-200 mb-1">Is in the hands of fools.</p>
                        <p className="text-gray-400 mb-4 text-xs">바보들의 손아귀에 놓여있네.</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-600 pt-4 mt-4">
                      <p className="text-yellow-300 mb-1">Confusion will be my epitaph.</p>
                      <p className="text-yellow-200 mb-3 text-xs">금가고 파괴된 길을 따라 기어갈 때</p>
                      
                      <p className="text-yellow-300 mb-1">As I crawl a cracked and broken path</p>
                      <p className="text-yellow-200 mb-3 text-xs">나의 묘비명은 '混沌'일 것인가</p>
                      
                      <p className="text-yellow-300 mb-1">If we make it we can all sit back and laugh.</p>
                      <p className="text-yellow-200 mb-3 text-xs">우리가 잘 해낸다면 우리모두 둘러앉아 회상하며 웃을 수 있어</p>
                      
                      <p className="text-yellow-300 mb-1">But I fear tomorrow I'll be crying.</p>
                      <p className="text-yellow-200 mb-3 text-xs">그러나 나는 울게 될 내일이 두려워</p>
                      
                      <p className="text-yellow-300 mb-1">Yes I fear tomorrow I'll be crying.</p>
                      <p className="text-yellow-200 text-xs">그래 나는 울부짖을 내일이 두려워</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Note */}
              <div className="mb-8 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-amber-800 mb-2">📚 역사적 가치</h4>
                <p className="text-amber-700 text-sm">
                  이 글은 1994년 고등학생 정철님이 작성한 프로그레시브 록 소개글로, 
                  당시 한국의 젊은 음악 애호가들이 프로그레시브 록을 어떻게 이해하고 
                  받아들였는지를 보여주는 귀중한 자료입니다. 
                  <strong>인터넷이 보급되기 전 시대에 이런 깊이 있는 음악 분석과 
                  구체적인 앨범 소개를 시도한 것은 매우 의미 있는 일</strong>이었습니다. 
                  겸손하면서도 열정적인 어조로 쓰여진 이 글은 한국 록 문화사의 소중한 기록입니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Misc로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}