import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Essay 6: 영국의 제2세대 Progressive Rock | Yebadong',
  description: '김경진이 GMV 98년 7월호에 실었던 영국 프로그레시브 록의 상세한 분석과 대표 앨범 소개',
};

export default function Essay6Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">영국의 제2세대 Progressive Rock</h1>
            <p className="text-lg text-muted">SUPERNATURAL FAIRYTALES - THE ERA OF ART ROCK</p>
          </div>

          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <div className="mb-6">
              <p className="text-sm text-muted mb-4">김경진, [ARZACHEL@hitel.net]</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm">
                  * 이 글은 '98년 7월호 GMV에 실렸던 기사입니다. 프로그레시브를 좋아하는 한 사람으로서 나름대로 정리한 것인데 
                  이 분야에 처음으로 관심을 가지는 분들께 도움이 되었으면 하네요.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">SUPERNATURAL FAIRYTALES - THE ERA OF ART ROCK</h3>
                <p className="mb-4">
                  록이 본격적으로 발전하기 시작한지도 한 세대가 흘렀다. 그 동안 대중음악계에서는 무수히 많은 시도와 실험이 행해졌고, 
                  나름대로의 훌륭한 성과와 실패 그리고 진보와 퇴보가 끊임없이 이어져 왔다. 과거의 음악은 새로운 이름과 형식으로 현대에 다시 태어나 또 다른 진화의 길을 걷는다.
                </p>
                <p className="mb-4">
                  헤아릴 수 없이 다양한 모습과 색깔을 지닌 음악들 중에는 누구에게나 사랑받고 생활의 동반자로서 역할하는 류가 있는가 하면, 
                  사랑은커녕 그 존재에 대한 인지(認知)조차 불투명하여 일회성으로 끝나는 (것처럼 보이는) 음악도 있다. 
                  아래에 장황하게 소개될 아트 록(Art Rock) 또는 프로그레시브 록(Progressive Rock)에 포함되는 음악은 분명 후자에 속한다.
                </p>
                <p className="mb-4">
                  그것은 우리나라에서뿐만 아니라 세계 어디서나 마찬가지다. 과연, 이 음악에는 인간의 보편적인 정서 또는 느낌에 역행하는 어떤 요소가 담겨 있기 때문일까? 
                  그렇다면 그 맥이 끊이지 않고 꾸준히 이어져 오는 이유는 무엇인가? 도대체 그 음악은 어떤 음악이길래?
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">1. 프로그레시브 록 또는 아트 록</h3>
                <p className="mb-4">
                  우리가 흔히 포괄적인 개념으로서 어떠한 장르를 얘기할 때 그 말을 하는 사람들의 머릿속에 떠오르는 음악 또는 아티스트는 극히 한정되어 있다. 
                  물론 이는 개인의 취향과 음악적 경험에 따른 차이를 가진다.
                </p>
                <p className="mb-4">
                  예컨대 누군가에게 "헤비 메탈이란 무엇인가?"라는 질문을 했을 때, 헤비 메탈을 듣는 대부분의 젊은이들은 메탈리카를 떠올릴 것이고 
                  좀 더 나이가 든 계층은 주다스 프리스트나 아이언 메이든을 생각할 것이다. 또는 그보다 더 위의 세대라면 딥 퍼플이나 그랜드 펑크의 음악을 흥얼거릴지도 모른다.
                </p>
                <p className="mb-4">
                  물론 남들보다 많이 듣는 매니아라면 생각할 수 있는 폭이 더 넓어질 수도 있지만, 대체로 대표성을 지닐 수 있는 경우란 선구자격의 역할을 했던 특출한 몇몇에 한정되기 때문에 
                  결국 범위는 좁아지게 마련이다.
                </p>
                <p className="mb-4">
                  그럼 프로그레시브 록 또는 아트 록이 거론될 때 사람들은 누구를 먼저 떠올릴까? 이 분야의 음악을 많이 좋아하건 그렇지 않건 어느 정도 음악을 '들었던' 사람이라면 
                  프로그레시브와 연계하여 손에 꼽히는 몇 개의 밴드명을 생각해낸다: 핑크 플로이드(Pink Floyd), 킹 크림슨(King Crimson), 예스(Yes), 제네시스(Genesis), 
                  에머슨 레이크 앤 파머(Emerson Lake & Palmer) 등등.
                </p>
                <p className="mb-4">
                  그리고 이 이름들에 담긴 힘이 어느 정도인지는 프로그레시브 매니아라면 누구나 알고 있다. 그런데 정석과 같이 되어 있는 이 등식은 요즘에는 공신력을 잃어가는 것처럼 보이기도 한다. 
                  같은 말을 놓고 요즈음 음악을 '듣는' 이들은 위의 밴드들이 아니라 드림 씨어터(Dream Theater)나 퀸스라이크(Queensrÿche)를 생각한다.
                </p>
                <p className="mb-4">
                  "프로그레시브에 푹 빠져 있답니다. 어디 드림 씨어터같은 밴드 있으면 좀 추천해주세요." 이런 질문이 PC 통신의 음악 동호회에 수시로 올라온다. 
                  그리고 그런 건 프로그레시브가 아니다, 왜 아니냐, 그 이상 진보적인 음악 하는 밴드 있으면 나와보라고 해라... 하는 식의 말싸움이 벌어진다. 
                  그런 논쟁은 대부분 에너지 낭비로 끝나게 된다.
                </p>
                <p className="mb-4">
                  결국 닭이 먼저냐 달걀이 먼저냐 하는 것과 다를 바가 없기 때문이다. 많은 음악들 중 유독 프로그레시브라는 장르에서만 늘 이런 류의 논쟁이 그치지 않는 까닭은 
                  장르 자체의 광범위성 탓이다. 이는 용어의 의미에 대한 뚜렷한 개념 정의가 선행되지 않고서는 끝날 수가 없는 싸움이다.
                </p>
                <p className="mb-4">
                  그 이유는 가장 기본적인 데에 있었다. 우선, 프로그레시브 록에 대해 말하며 단어의 뜻대로 고스란히 직역을 하여 '진보적인 록'으로 번역한 데에서 논쟁은 생겨날 수밖에 없었다. 
                  록이 발전하던 시기에, 전에 없던 시도를 행했다거나 새로운 사운드를 만들어내어 사람들을 놀라게 했던 시기에 정말로 동시대의 감각과 사유(思惟)를 앞선 듯 보이는 
                  그 음악들에 프로그레시브라는 말이 붙은 것은 당연하게 여겨진다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">2. 프로그레시브 록의 특징</h3>
                <p className="mb-4">
                  프로그레시브 록이란 그 범주에 포함되는 하나의 흐름 또는 분위기이다. 록을 기본으로 하여 출발했지만 재즈, 클래식, 블루스, 하드 록, 포크 등 타 장르와의 경계를 허물어 
                  어떤 정형(定型)을 가지지 않으며 때로는 록을 넘어서기도 한다.
                </p>
                <p className="mb-4">
                  그렇기 때문에 다른 어느 장르보다도 포괄하는 범위가 넓지만, 모든 음악들을 아우르는 것처럼 보이는 이 장르에는 누구도 부인할 수 없는 짙은 색깔이 채색되어 있다. 
                  그것은 연주면에서의 기교적인 부분일수도 있고, 기술을 요하는 첨단의 악기 또는 장치의 사용일수도 있고, 극단적인 미학에의 추구일수도 있고, 
                  장르간의 적절한 크로스오버일수도 있으며 또 지역색의 반영이나 과거-르네상스 시대, 중세 또는 그 이전-로의 회귀(回歸)일수도 있다.
                </p>
                <p className="mb-4">
                  가장 화려한 모습을 보이기도 하지만 때로 지극히 단순한 울림의 연속으로 이루어지기도 한다.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold mb-3">프로그레시브 록의 대표적 특징:</h4>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold">① 모든 음악과의 크로스오버</h5>
                    <p className="text-sm">
                      아트 록의 근간(根幹)을 이루는 사운드는 크로스오버, 즉 록과 서로 다른 장르의 접목으로부터 생겨났다. 
                      물론 이는 존 덴버와 플라시도 도밍고류의 단순한 일차원적인 시도나 효과와는 다르다. 그것은 화학반응이다.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold">② 키보드, 그리고 멜로트론의 효과적인 사용</h5>
                    <p className="text-sm">
                      음향 합성 장치인 신서사이저가 개발되고 발전하던 때에 그 '악기'를 대중들에게 친숙하게 만드는 데 커다란 역할을 했던 이들은 프로그레시브 뮤지션들이었다. 
                      특히 하몬드 오르간과 무그 신서사이저는 초기 아트 록에서 빠질 수 없는 악기로서 기능했다.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold">③ 고전, 민속악기의 적극적인 도입</h5>
                    <p className="text-sm">
                      아트 록에서 유달리 많이 등장하는 악기는 바이올린을 비롯한 고전 현악기이다. 
                      오케스트레이션의 사용은 록의 기본 편성-기타, 베이스, 드럼-에서 창출되는 직선적인 사운드를 더욱 아름답고 화려하고 섬세하게 만드는 역할을 했다.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold">④ 주제의 다양성</h5>
                    <p className="text-sm">
                      다루는 주제에 있어 장르가 포괄하는 범위는 먼 미래에서 태초에 이르기까지, 자신의 내부에서 무한한 우주에 이르기까지, 
                      눈앞의 현실에서 잊혀진 신화에 이르기까지 다양하다. 유달리 이 장르에 컨셉트 앨범이 많이 등장하는 이유는 그것과 무관하지 않다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">3. 프로그레시브 록의 발전</h3>
                <p className="mb-4">
                  앞서 언급했다시피 '프로그레시브'라는 말에 연상되는 이름들은 그다지 많지 않다. 이른바 '수퍼 밴드'로 불리우는 그룹들인데, 
                  특이하게도 그들이 록의 역사에서 지니는 가치라는 것은 놀랄만한 창조가 만들어내는 그 흐름의 영속성 속에 존재하는 것이 아니라 
                  어찌 보면 지극히 배타적인 속성을 띠는 개별성 속에 있다고 보여진다.
                </p>
                <p className="mb-4">
                  아무리 뛰어나다 인정되는 그룹들이라 할지라도 극히 일부를 제외하고는 록의 역사 속에서의 그들의 위상은 높이 자리매김되지 않는다. 
                  즉 영향력이라는 측면에서 비틀즈의 부재와 핑크 플로이드의 부재는 차원이 다르게 생각된다는 말이다.
                </p>
                <p className="mb-4">
                  대중성의 결여, 이는 아트 록 또는 프로그레시브 록이라는 장르의 음악이 지니는 가장 취약한 부분이기도 하다. 
                  히틀러의 말마따나 '머리가 없는 괴물'과 같은 성격을 가지는 대중은 그들의 머리로서 역할할 수 있는 조건을 꽤나 까다롭게 따진다.
                </p>
                <p className="mb-4">
                  프로그레시브 록이 태동했던 시기는 60년대 말, 록이 가장 커다란 발전을 이루었던 때이다. 물론 그 시작과 본격적인 발전이 있던 곳은 영국이다. 
                  시대의 여러 상황들은 젊은이들의 이상(理想)에 대한 갈망을 최고조에 이르게 했고, 그 정신적 영역의 많은 부분들은 그들의 예술적 창의력으로 이어지게 된다.
                </p>
                <p className="mb-4">
                  로큰롤에서 발전된 록 음악은 여러 선구자들에 의해 뚜렷한 모습으로 성장하고 있었다. 이후의 대중음악에 가장 큰 영향을 미치게 되는 비틀즈(Beatles)는 
                  단순한 로큰롤에 민속악기를 도입하는가 하면 스튜디오에서의 실험적인 시도로 전에 없던 새로운 사운드를 창조해냈다.
                </p>
                <p className="mb-4">
                  또한 약물의 사용에서 비롯되는 환각을 담아내었던 롤링 스톤즈(Rolling Stones), 하나의 이야기 구조 위에 오페라 또는 뮤지컬의 형태를 차용했던 후(The Who)와 킹크스(Kinks), 
                  본격적인 록의 시대의 도래를 예고했던 야드버즈(Yardbirds)와 크림(Cream) 등 위대한 그룹들에 의해 록은 하루가 다르게 발전을 거듭하고 있었다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">4. 브리티쉬 아트 록 대표 앨범</h3>
                <p className="mb-4">
                  위대한 브리튼(Great Britain), 적어도 록 음악을 좋아하는 이들에게 영국은 그 끝을 알 수 없는 신비로움을 간직한 나라로 기억된다. 
                  웨일즈와 잉글랜드, 스코틀랜드와 아일랜드는 각각 짙은 지역색을 띤 채 서로 배타적인 관계를 유지하지만 적어도 음악이라는 범위 내에서 그것은 '영국'이라는 하나의 그릇에 담겨진다.
                </p>
                <p className="mb-4">
                  비단 아트 록에만 국한되지 않은 브리티쉬 록에는 다른 나라의 음악과 구별되는 뚜렷한 특징이 담겨져 있다. 
                  그것은 푸른 초원을 뒤덮는 따사로운 햇살, 황량하고 거대한 바위산으로부터 불어 오는 서늘한 바람, 음습한 대지 위에 피어오르는 희뿌연 안개, 
                  스톤 헨지의 거석(巨石)들 사이에서 아련히 스멀거리며 솟아 오르는 신비로움과 주술적인 공포, 그리고 오랜 세월 동안 축적된 꿈들이다.
                </p>

                <div className="space-y-8">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">KING CRIMSON - In The Court Of The Crimson King ('69, Island)</h4>
                    <p className="text-sm mb-3">
                      단 한 번만 봐도 결코 잊혀지지 않는 이 인상적인 앨범 커버는 음악의 성격을 단적으로 드러내고 있다. 
                      앨범이 발표되었을 당시 이 음악은 하나의 '혁명'이었다. 아마도 프로그레시브 또는 아트 록을 표방하는 그룹들, 아니 록 그룹들 전체를 통틀어 
                      가장 '진보적인' 집단으로 불리기에 부족함이 없는 밴드 킹 크림슨은 데뷔작을 통해 프로그레시브라는 장르가 가게 될 모든 방향에 대한 하나의 이정표를 제시했다.
                    </p>
                    <p className="text-sm">
                      그리그의 조곡 &lt;In The Hall Of The Mountain King&gt;에서 아이디어를 얻은 앨범 타이틀은 물론이거니와 
                      사운드에서의 강렬함-&lt;21st Century Schizoid Man&gt;-과 서정성-&lt;I Talk To The Wind&gt;, &lt;Epitaph&gt;-, 
                      그리고 신비로움-&lt;Moonchild&gt;-을 담고 있는 각 곡들의 구성, 시적인 가사는 앨범을 프로그레시브 최고의 걸작 중의 하나로 자리하게 한다.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">MOODY BLUES - Days Of Future Passed ('67, Decca)</h4>
                    <p className="text-sm mb-3">
                      같은 해에 발매되었던 비틀즈의 『Sgt. Pepper's Lonely Hearts Club Band』, 도어스의 『The Doors』, 
                      제퍼슨 에어플레인의 『Surrealistic Pillow』, 핑크 플로이드의 『The Piper At The Gates Of Dawn』 등 
                      록사에 있어 가장 중요하게 여겨지는 앨범들이 짙은 싸이키델릭의 영향권 아래 있었지만, 무디 블루스는 플라워 무브먼트나 환각 등과는 거리가 먼 팀이었다.
                    </p>
                    <p className="text-sm">
                      이들은 시대의 조류와는 관계 없이, 각자가 멀티 플레이어인 멤버들이 만들어내는 다양한 악기들로부터의 자유로운 사운드 조합을 특징으로 하는 서정적인 음악을 행했던 밴드이다. 
                      많은 프로그레시브 팬들이 최초의 '프로그레시브적' 시도라 할 수 있는 작품으로 이 앨범을 꼽는 이유는 단순히 오케스트라와의 협연이라는 외형적 요소 때문만은 아니다.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">GENESIS - Nursery Cryme ('71, Charisma)</h4>
                    <p className="text-sm mb-3">
                      후배 그룹들-특히 네오 프로그레시브 계열의-에게 가장 많은 영향을 준 밴드 중 하나인 제네시스는 일찌기 무대에서의 연극적인 장치와 분장을 사용한 공연 
                      즉 씨어트리컬 록(Theatrical Rock or Rock Théâtre)의 형태를 발전시켜 왔다.
                    </p>
                    <p className="text-sm">
                      물론 그것의 완성은 더블 컨셉트 앨범인 『The Lamb Lies Down On Broadway』('74)에서 이루어졌다고 여겨지지만 그 시작은 통산 세 번째 작품인 이 앨범에서이다. 
                      피터 가브리엘(Peter Gabriel)과 밴드의 창의력이 최고조에 달해 있던 시기에 발표된 이 걸작은 제네시스의 본령(本領)을 담고 있는 앨범으로, 
                      &lt;The Musical Box&gt;와 &lt;Seven Stones&gt;, 그리고 특히 &lt;The Fountain Of Salmacis&gt;에서의 멜로트론의 사용이라든지 곡 전개에 있어서의 완급 조절 등은 
                      이후 이태리의 PFM이 자신들의 모델로 삼은 스타일이기도 하다.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">PINK FLOYD - The Dark Side Of The Moon ('73, Harvest)</h4>
                    <p className="text-sm mb-3">
                      이 앨범이 아트 록 뿐만 아니라 록사(史)에서 차지하는 비중이 얼마나 되는지는 굳이 다시 말할 필요가 없다. 
                      빌보드지의 앨범 차트에 얼마나 오랜 기간 올라 있었다느니 판매량이 얼마나 된다느니 하는 것은 중요하지 않다. 
                      프로그레시브라는 카테고리에 있으며 이토록 오랜 기간 대중적인 사랑을 받을 수 있었던 이유, 중요한 것은 바로 그것이다.
                    </p>
                    <p className="text-sm">
                      발매된 지 25년이라는 세월이 흘렀음에도 꾸준히 팔려 나가고 있다는 사실은 앨범의 사운드에 시대를 초월하는 감성이 담겨져 있다는 것을 말해준다. 
                      본격적인 컨셉트 앨범의 시작이라는 점에서 앨범의 가치는 더해진다. 일반적인 개념으로서의 '음악' 이외의 소리에 대한 밴드-특히 로저-의 관심은 
                      내면의 광기, 소외, 죽음, 영속(永續)이라는 내용에서의 컨셉트와 더불어 사운드에서의 컨셉트를 이루어냈다.
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3">YES - Close To The Edge ('72, Atlantic)</h4>
                    <p className="text-sm mb-3">
                      예스는 두말할 나위 없이 가장 뛰어난 연주인들의 집단이다. 각 멤버들의 개인기는 이들의 모든 앨범에서 유감없이 발휘되며, 
                      가장 단순한 밴드명과는 달리 가장 복잡한 사운드 구성을 그 특징으로 한다.
                    </p>
                    <p className="text-sm">
                      존 앤더슨(Jon Anderson)과 스티브 하우(Steve Howe), 크리스 스콰이어(Chris Squire), 빌 브루포드(Bill Bruford), 릭 웨이크만(Rick Wakeman)이라는 최상의 라인업으로 활동했던 
                      2기 시절-이 앨범을 비롯하여 전작인 『Fragile』('71)과 『Yessongs』('73)까지-은 그야말로 최전성기를 이루던 시기였다. 
                      더욱 드라마틱한 전개와 선율적인 아름다움이라는 측면에서 이 작품은 전작을 능가한다고 볼 수 있다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">5. 하위 장르 및 대표 앨범</h3>
                <p className="mb-4">
                  60년대 말에서 70년대 중반 사이에 집중적으로 쏟아져 나온 수많은 프로그레시브 록 작품들에 담긴 사운드는 각 앨범들마다 너무도 다른 고유의 특성을 지니고 있기 때문에 
                  그것을 뭉뚱그려 한두 마디의 말로 표현을 한다는 것은 불가능하다. 하지만 외형적인 일정한 형식과 명쾌한 스타일의 곡 전개를 가지고 있지는 않을지라도, 
                  장르를 대표한다 할 수 있는 사운드와 분위기는 분명 존재한다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">① Symphonic</h4>
                    <p className="text-sm mb-3">
                      적어도 지금과 같이 다양한 음악이 본격적으로 발굴되고 소개되기 이전에 프로그레시브 록은 심포닉 록과 동일시되어 있었다. 
                      비교적 잘 알려진 대부분의 초기 프로그레시브 밴드들의 음악 양식이 웅장하고 스케일 큰 형태를 취하고 있었기 때문이다.
                    </p>
                    <p className="text-sm font-semibold">Yes, Genesis(Early), Camel, Atoll 등</p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">② Classical</h4>
                    <p className="text-sm mb-3">
                      기존의 클래식 악곡의 변주나 보다 서정적이고 섬세한 감성을 드러내는 음악 또는 바하나 베토벤, 비발디 등의 스타일을 융합한 음악이라 할 수 있다. 
                      클래식 연주가들의 연주에서 볼 수 있는 기교나 클래식의 방법론을 차용한 작품들도 이에 포함된다.
                    </p>
                    <p className="text-sm font-semibold">Renaissance, The Enid, Nice, ELP 등</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">③ Psychedelic</h4>
                    <p className="text-sm mb-3">
                      '플라워 파워(flower power)'의 영향은 영국에서 프로그레시브의 탄생에 많은 영향을 끼쳤다. 
                      60년대 말에 등장했던 많은 그룹과 아티스트들의 음악에는 이 싸이키델릭의 향취가 배어나는데, 발생지인 미국의 것과는 달리 보다 짙은 몽롱함을 담고 있었다.
                    </p>
                    <p className="text-sm font-semibold">초기 Pink Floyd, Grobschnitt, Amon Düül II 등</p>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">④ Canterbury</h4>
                    <p className="text-sm mb-3">
                      영국의 동남쪽 켄트주의 한 도시인 캔터베리 출신의 일련의 아티스트들에 의해 탄생된 이 음악은 아마도 가장 '영국적인' 사운드를 표출해내는 음악이라 할 수 있을 것이다. 
                      짙은 영국식의 발음과 때론 아기자기하고 장난스럽게, 또 때론 난해하게 전개되는 음악들이 지니는 향기는 이들만의 트레이드마크처럼 여겨진다.
                    </p>
                    <p className="text-sm font-semibold">Soft Machine, Caravan, Hatfield & The North 등</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">⑤ Italian Progressive</h4>
                    <p className="text-sm mb-3">
                      이 쟝르의 음악들은 특별히 정의하기가 어렵기 때문에 어쩔수 없이 영국의 그룹들과 비교할 수밖에 없다. 
                      이 형태의 음악들은 다이나믹하고 우아한 엑센트를 가진 이탈리아인들에 의한 음악이다.
                    </p>
                    <p className="text-sm font-semibold">Banco del Mutuo Soccorso, PFM, Metamorfosi 등</p>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">⑥ Kraut Rock</h4>
                    <p className="text-sm mb-3">
                      70년대 초반 독일의 Ohr, Brain, Kosmische, Pilz등의 레이블의 그룹들이다. 
                      이런 정의는 별로 적합하지 않고, 앞으로 더 많은 탐구가 필요할 만큼 그들은 자신들만의 뛰어난 장점과 선구자적인 역할을 해낸 그룹이다.
                    </p>
                    <p className="text-sm font-semibold">Can, Neu!, Kraftwerk, Faust 등</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">6. 새로운 시대, 새로운 프로그레시브 록의 모습</h3>
                <p className="mb-4">
                  80년대의 네오 프로그레시브는 어정쩡한 모습으로 골수 팬들의 외면을 받고 스스로 도태되어 더 이상의 가능성을 보이지 않고 90년대를 맞았다. 
                  그런데 복고 또는 과거로의 회귀(回歸)라는 시대의 경향은 아트 록에서도 예외 없이 적용되었다.
                </p>
                <p className="mb-4">
                  이태리와 스웨덴 등을 중심으로 속속 등장한 몇몇 밴드들이 들려준 음악에는 한 세대 전의 향취가 그대로 묻어 있었고 정통 프로그레시브의 팬들은 환호했다. 
                  프로그페스트(ProgFest)와 같은 행사가 매년 개최되어 실력 있는 신인들의 등용문 역할을 하기도 했고, 80년대에는 들을 수 없었던 멜로트론이 다시 등장했으며 
                  가볍고 밝은 분위기로 일관하던 음악 스타일은 다시 옛 무게를 되찾았다. 과거로의 완전한 회귀를 이룬 것이다.
                </p>
                <p className="mb-4">
                  이는 한편으론 이 음악의 한계를 단정적으로 보여준 현상이기도 하다. 결국 이 시대에도 '프로그레시브 록'이라는 것은 과거의 음악인 것이다. 
                  그러나 그것이 과연 무슨 상관이란 말인가. 그 음악이 여전히 듣는 이들의 꿈을 자극하고 환상을 키워주며 무한한 카타르시스를 제공하기만 한다면 
                  용어니 시대 구분이니 하는 것들은 저 멀리 치워버려도 되는 것이 아니겠는가.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/fun"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Fun으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
