import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '프로그레시브락의 탄생 - Rocking the Classics #1 | Yebadong',
  description: '홍사여리님 번역 - 프로그레시브 록의 탄생과 발전 과정',
};

export default function Ch1Page() {
  return (
    <main className="min-h-screen bg-[#F7EFCE] text-[#0000AA]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000AA]">프로그레시브락의 탄생</h1>
          <p className="text-base text-[#0000AA]">The Birth of Progressive Rock</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000AA] rounded-lg p-8">
            
            {/* Warning */}
            <div className="mb-8 p-6 bg-red-100 border border-red-400 rounded-lg text-center">
              <p className="text-red-600 font-bold mb-2">
                ⚠️ WARNING!
              </p>
              <p className="text-red-600 italic">
                This page is a strict COPYRIGHT VIOLATION, constructed for PURE PRIVATE PURPOSE. 
                Please DON'T reproduce or distribute the contents of this page.
              </p>
            </div>

            <hr className="my-8" />

            {/* Translator Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm mb-4">
                이 글은 홍사여리[<a href="mailto:sayuhri@kornet.net" className="text-[#00AAAA] hover:underline">sayuhri@kornet.net</a>]님께서 
                코리아닷컴의 아트락클럽[<a href="http://club.korea.com/artrock/" className="text-[#0B0A52] hover:underline">http://club.korea.com/artrock</a>]에 
                올리신 글을 필자의 허락하에 올리는 글입니다. 다행스럽게도 리베로님께서 번역하신 5,6,7,8장과는 안겹치네요. 
                혹시 이 글을 퍼가실 생각이 있으시다면 필자의 허락을 꼭 얻으시길 바랍니다.
              </p>
              <p className="text-sm text-red-600">
                🔴 translated by 홍사여리[<a href="mailto:sayuhri@kornet.net" className="text-red-600 hover:underline">sayuhri@kornet.net</a>]
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <p className="text-sm leading-relaxed">
                제목이 멋있지 않습니까? Rocking the Classic....<br/>
                프로그레시브록이란게 제 귀에 무뎌질 무렵 우연히 아마존에서 눈에 띄어 구입한 책인데,나름대로 제게 안내를 해 준 책입니다. 
                미국의 에드워드 매컨이라는 모 음대 교수라는 사람이 썼는데... (아트록지에서 언젠가 전정기씨도 이 책을 인용한것 같다는 기억이 술김에 어렴풋이 나는군요.@@) 
                제게 도움이 된 책이길래 클럽 회원 여러분들에게도 도움이 되지 않을까 싶어 발췌/번역하여 올립니다.<br/><br/>
                
                한권 전체를 한번에 올릴 순 없고, 여러번에 나눠서 올립니다. 매회 글 머리에 그 글의 위치를 알리는 표시를 할 예정이구요, 
                양이 많아서 좀 오래 걸릴것 같아요. 한1~2주에 한번씩 올리면 한 서너달 걸리지 않을까 싶습니다. 한번에 올리는 글이 너무 길면 읽기에 부담될테기도 하니까 조금씩 나눠서 싣도록 하겠습니다.<br/><br/>
                
                초심자 여러분에겐 하나의 안내가 되기를, 고수 여러분에겐 비교/코멘트의 대상이 되기를 바랍니다.<br/><br/>
                
                (부제목은 English progressive rock and the counterculture입니다. 주로 영국의 프로그레시브 록을 다루고 있다는 뜻이죠. 
                프로그레시브 록을 당시 영국의 대중 음악계 및 사회와 연관시켜 해석한 책이라는 뜻도 되겠지요)
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">차례</h3>
              <ol className="text-sm space-y-1">
                <li><strong>1. The Birth of Progressive Rock</strong></li>
                <li>2. The Progressive Rock Style: The Music</li>
                <li>3. The Progressive Rock Style: The Visuals</li>
                <li>4. The Progressive Rock Style: The Lyrics</li>
                <li>5. Four Different Progressive Rock Pieces</li>
                <li>6. Related Styles</li>
                <li>7. A Sociology of Progressive Rock</li>
                <li>8. The Critical Reception of Progressive Rock</li>
                <li>9. The Progressive Rock after 1976</li>
              </ol>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              
              {/* Opening Quote */}
              <div className="mb-8 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <blockquote className="italic text-lg mb-2">
                  "(비틀즈의) 서전트 페퍼의 출현을 지금도 생생히 기억하고 있어요.- 날카로운 불신의 소음이었죠. 
                  어딜 가나 이 음악을 들을 수 있었어요. 이 놀라운 음악으로 인해 모든 게 가능할 것처럼 생각되었어요"
                </blockquote>
                <cite className="text-right block">- VDGG의 David Jackson</cite>
              </div>

              {/* Historical Context */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">
                  1960년대 중반까지 영국(서구) 중산층의 록큰롤에 대한 입장은 이런 것이었다: 원시적인 음악, 기본적으로 하류 계급이 듣는 음악. 
                  특별한 미적 감각을 느낄 수 없는 음악. 심지어는 청소년 비행의 원인으로 보는 시각도 있었다. 
                  (1955년을 그 탄생의 해라 할 때) 십 년의 역사를 갓 넘긴 록큰롤이, 그것도 엘비스 프레슬리나 제리 리 루이스, 척 베리 같은 사람들에 의해 
                  주도되어온 거칠고, 단순하며 비예술적인 음악이 이렇게 복잡하고 다차원적인 프로그레시브 록의 모습으로 변형될 수 있다고 생각한 사람은 아무도 없었다. 
                  이러한 일이 가능할 수 있었던 근본적인 요인은 60년대 중반 젊은이들을 기반으로 한, 샌프란시스코, 런던에서 출발하여 서구 전반을 휩쓴 
                  이른바 하위 문화의 출현이었다. 이 하위문화는 주로 젊은, 중산층의 백인에 의해 주도되었다. 
                  이들은 부모들의 라이프 스타일을 따르길 의식적으로 거부하고 보다 실험적인 인생을 살고 싶어하였다.
                </p>

                <p className="text-sm leading-relaxed">
                  "히피"라고 불리기도 했던 이들은 (조직이란 것 자체를 싫어하기로 유명했지만) 비교적 조직적인 원칙을 가지고 있었다. 
                  그들은 사회 전반의 정치적/영적 변화를 추구하였다. 의식과 인지의 영역에서의 새로운 지평을 발견하는데 큰 가치를 두었다. 
                  그래서 마약과 명상에 빠져들기도 한 것이다. 정치적으로는 자본주의 사회의 제도화된 물질주의를 거부하였다. 
                  일하기를 거부하고, 방랑 생활을 추구하였으며, 다양한 공동체 생활을 실험하였다. 베트남 참전을 거부하고 전쟁 자체를 반대하였다. 
                  특히 남자들의 긴 머리와 여자들의 미니 스커트는 기성세대에 대한 정면 도전이자 타격으로 받아들여졌다.
                </p>

                <p className="text-sm leading-relaxed">
                  1968년은 이러한 하위 문화의 정점을 이루는 해였다. 프랑스, 멕시코, 미국, 그리스 등지에서 (특히 정치적으로) 
                  이러한 젊은이들이 주도하는 정치적 소요가 정점에 달했으며 마약, 섹스, 록큰롤은 이러한 젊은이들의 3대 상징이었다.
                </p>
              </div>

              {/* Psychedelic Influence */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0000AA] border-b-2 border-[#0000AA] pb-2">사이키델릭의 영향</h3>
                
                <p className="text-sm leading-relaxed">
                  마약 등 환각제의 영향으로 앨범커버 역시 초현실주의적인 모습은 띄었으며 콘서트에서는 라이트 쇼를 동원하여 집단적 환각상태를 시도한다. 
                  환각제 (Lysergic Acid Diethylamide (LSD)를 줄여서 Acid라고도 불렀다.) 는 가사에도 영향을 미쳐 밥 딜런과 비틀즈의 60년대 중반의 가사는 
                  초현실적인 방향으로 나가는 것을 볼 수 있다. 나아가 밥 딜런은 저항적인 가사를 비틀즈는 우주적인 명상을 가사에 담기도 한다. 
                  이러한 경향은 당시 팝뮤직 씬에서는 상당히 새로운 시도로 받아들여졌다.
                </p>

                <p className="text-sm leading-relaxed">
                  이러한 모든 변화에 더하여 "음악적"으로 하위문화를 규정하는 것은 사이키델릭 스타일이다. 
                  사이키델릭은 60년대 당시까지의 기존 팝음악에 대한 명백한 도전이었다. 브리티쉬 블루스의 리바이벌이 싸이키델릭에 큰 영향을 미쳤다. 
                  Alexis Korner's Blues Inc.와 John Mayall's Blues Breakers는 특히 다음과 같은 두 가지 점에서 영국 싸이키델릭에 큰 영향을 끼친다.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <ol className="text-sm space-y-2">
                    <li><strong>1.</strong> Muddy Waters나 B.B. King같은 미국 흑인 스타일의 블루스 음악을 라이브로 영국 젊은이들에게 선보였다.</li>
                    <li><strong>2.</strong> 이들의 블루스 음악은 당시로선 약간 나이 많은 중견에 속하던 Brian Auger, Ginger Baker같은 영국의 재즈 뮤지션들의 관심을 끌었다. 
                    이들이 재즈를 통해 쌓은 임프로비제이션 실력은 싸이키델릭의 출현을 가능하게 한 주요한 요인이 된다.</li>
                  </ol>
                </div>

                <p className="text-sm leading-relaxed">
                  싸이키델릭의 특징으로 자리잡은 장시간에 걸친 솔로 연주 자체는 재즈나 리듬앤 블루스에 영향을 받은 것이고, 
                  전기를 이용한 사운드와 믹싱 스타일은 새로운 것이었다. 여기에 더불어 환각을 중시하는 당시 하위문화의 요구에 따라, 
                  기존의 대중 음악이 주로 "따라 부르"거나 "춤추기" 위한 음악이었던 것에 반해, 
                  싸이키델릭은 머리로 듣는 "감상용"음악으로 출발하였고 이는 음악적 실험이 다양하게 시도된 이유가 된다.
                </p>
              </div>

              {/* Club Culture */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0000AA] border-b-2 border-[#0000AA] pb-2">클럽 문화의 발전</h3>
                
                <p className="text-sm leading-relaxed">
                  66년에서 67년에 걸쳐 런던과 샌프란시스코등 하위문화의 주요 거점이 되었던 도시들에는 클럽이라는 형태의 공연장이 속속 문을 여는데, 
                  이런 곳에서 주로 싸이키델릭이 연주되었다. 이러한 작은 공간에서 연주자와 관객의 관계는 무척 가깝게 된다. 
                  예를 들어 66년 2월 어느 일요일 오후 런던의 마키 클럽에서 "Spontaneous Underground"가 연주되었을 때, 
                  관객과 연주자사이의 구분은 없어졌던 것이 좋은 예라 할 것이다. 밴드와 관객의 구분은 없었다. 
                  연주자 자신이 하위문화의 산물이자 하위문화의 생산자였다. 이러한 관계 속에서 후에 프로그레시브 록의 스타일 형성에 있어 
                  중요한 역할을 하는 음악적, 시각적, 그리고 구술적 전통이 생겨나게 된 것이다.
                </p>
              </div>

              {/* Record Industry Impact */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0000AA] border-b-2 border-[#0000AA] pb-2">음반 산업의 변화</h3>
                
                <p className="text-sm leading-relaxed">
                  싸이키델릭 스타일이 폭발적으로 대중의 인기를 얻자, 이 새로운 음악 스타일에 대해서 레코드 회사들은 이러한 음악을 음반으로 발매해야 할지 하지 말아야 할지, 
                  또는 어떤 음악을 음반화하고 어떤 것을 말아야할지 판단을 할 수가 없었다. 다른 음악 스타일에서는 대중이 특정 밴드의 음악을 좋아할지 안 할지 
                  판단할 능력이 있는 것이 음반 회사였지만, 이경우는 달랐다. 이들은 무척 당황했으며, 따라서 일단 모두와 계약을 맺고 음반화한 후 시장의 반응을 볼 수밖에 없었다. 
                  이렇게 해서 60년대 후반에서 70년대 초에 이르는 기간동안 엄청난 양의 음악이 음반화 되었고, 많은 수의 레코드 회사들이 설립되기도 했던 것이다.
                </p>

                <p className="text-sm leading-relaxed">
                  당시 싸이키델릭을 다루었던 언더그라운드 신문과 라디오 방송 또한 프로그레시브 록의 탄생에 커다란 역할을 했다. 
                  싸이키델릭 음악의 정교화와 보급에 이들이 기여했을 뿐만 아니라, 나아가 이 방송사들이 클래식, 재즈등의 음악을 통해 기른 
                  비판적 감상, 감정 평가, 예술성등의 감각을 프로그레시브 록을 평가하고 보급하는데 사용하였던 것이다.
                </p>
              </div>

              {/* Three Styles of Psychedelic */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0000AA] border-b-2 border-[#0000AA] pb-2">사이키델릭의 세 가지 스타일</h3>
                
                <p className="text-sm leading-relaxed">
                  위에 서술한바와 같은 문화적, 경제적 배경이 없었다면 프로그레시브록은 결코 생성되지 않았을 것이다. 
                  요약하면, 하위문화의 생성, 사이키델릭 스타일의 형성, 클럽 문화, 언더그라운드 라디오 방송국이 프로그레시브 록 형성의 토대를 이룬 것이다.
                </p>

                <p className="text-sm leading-relaxed">
                  일반적으로, 사이키델릭의 생성 당시엔 이 장르에 한가지 스타일만 있는 것으로 간주되었었다. 
                  (십분이 넘는 경우가 허다한) 장편 편성, 강화된 연주 섹션, 긴 솔로 연주, 피드백 효과 사용, 에코 머신등의 이펙트, 
                  멀티 트랙킹이나 스플라이싱같은 테잎 이펙트등이 사용된 음악으로 규정되었던 것이다. 여기에 북인도의 악기가 간간이 사용되었다. 
                  그러나, 이러한 여러 가지 비슷한 점이 있는 동시에 서로 다른 스타일이라고 불릴만한 요소도 많이 있었다. 
                  이제 와서 보면, 프로그레시브 록의 모태가 된 싸이키델릭에는 크게 세가지 스타일이 존재하였다.
                </p>

                <div className="space-y-6">
                  {/* Style 1 */}
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-lg mb-3">1. Cream, Yardbirds, Jimi Hendrix 스타일</h4>
                    <p className="text-sm leading-relaxed">
                      헤비하고 블루스를 전기 음향으로 재해석한 스타일. 이는 롤링 스톤즈가 60년대 중반에 이미 시도하기 시작한 것이다. 
                      스톤즈와 마찬가지로 이들은 단순하고 블루스적인 화음진행을 사용하였으며, 반복적인 기타 리프 (두마디 혹은 길어야 네마디), 
                      그리고 드라이빙 백비트를 사용하였다. 하지만 스톤즈나 어번 블루스의 마스터로 통하던 더 후와는 달리 이들은 연주 부분에 긴 시간을 할애하였으며 
                      특히 불꽃튀는 기타 연주로 라이브에서 관객을 압도하였다. 이들 밴드는 대개 한 대나 두 대 정도의 기타와 베이스, 드럼 그리고 한명의 보컬로 이루어졌다. 
                      프로그레시브 록의 대명사격인 풍부한 보컬 하모니나 웅장한 키보드 반주는 이들의 음악에선 찾아보기 힘들다. 
                      이러한 면에서는 스톤즈나 더 후가 이들보다 프로그레시브 록에 가까왔다고 해야 할지도 모르겠다. 
                      이 부류의 음악은 후에 레드 제플린, 블랙 사바스, (71년 머신헤드 앨범 발표 이후의) 딥 퍼플에 의해 헤비메탈로 발전된다.
                    </p>
                  </div>

                  {/* Style 2 */}
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-lg mb-3">2. Traffic, Colosseum, IF와 Soft Machine, Caravan 스타일</h4>
                    <p className="text-sm leading-relaxed">
                      브리티쉬 블루스와 재즈를 기반으로 형성된 지파. 이들은 플륫이나 색소폰 같은 관악기를 도입하였다. 
                      사이키델릭에서조차 시도되지 못했던 수준으로까지 실험적 연주파트를 강화하였다. 코드 변화와 리듬 패턴의 변화가 더 심하고 복잡해진다. 
                      70년대 초 이들의 음악은 마하비쉬누 오케스트라 및 그 추종자들, 그리고 이들보다 더 실험적인 캔터베리/ 소프트머쉰 학파에 의해 
                      재즈록 퓨전으로 발전해간다.
                    </p>
                  </div>

                  {/* Style 3 */}
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-lg mb-3">3. Moody Blues, Procol Harum, Pink Floyd, Nice</h4>
                    <p className="text-sm leading-relaxed">
                      위의 두 부류에 비해 후기 비틀즈 영향을 더 많이 받은 부류이다. 후기 비틀즈는 실제로 거의 사이키델릭 밴드가 되어 있었으며 
                      (바르토크나 스톡하우젠의 영향하에) 아방가르드 스타일도 채용하고 있었다. (She's leaving home을 들어보라. 
                      실제로 비틀즈의 서전트 페퍼 앨범의 커버에는 쉬톡하우젠의 얼굴이 나온다.)
                    </p>
                    <p className="text-sm leading-relaxed mt-4">
                      앨범의 마지막 부분에서 들려오는 앨범 첫곡서부터 끄트머리까지의 재현과, 환상적인 테이프 이펙트에 의한 곡과 곡간의 연결, 
                      무엇보다도 한가지 컨셉에 의한 앨범 구성으로 인해 서전트 페퍼는 최초의 컨셉트 앨범으로 평가되고 있으며 
                      이는 19세기 초의 클래식 음악가인 슈만이나 슈베르트까지 거슬러 올라가는 서양 고전 음악의 전통과 닿아 있다. 
                      이것이 비평가들이 서전트 페퍼 앨범의 컨셉튜얼한 구조를 "클래식"하다고 말하는 이유이다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Progressive Rock Formation */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0000AA] border-b-2 border-[#0000AA] pb-2">프로그레시브 록의 형성</h3>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">King Crimson의 충격</h4>
                  <p className="text-sm leading-relaxed">
                    특히 킹 크림즌의 데뷔 앨범 In the Court of the Crimson King은 발생기에 있는 프로그레시브 록의 움직임에 강한 충격을 주었다. 
                    아마 프로그레시브 록 앨범 중 가장 영향력 있는 앨범이라 해도 과언이 아닐 것이다. 예스, VDGG, 제쓰로 툴의 데뷔 앨범이 
                    완전히 성숙한 음악적 비전을 제시하지는 못한데 비해 킹 크림즌의 음악은 프로그레시브 록의 완숙기에 볼 수 있는 모든 주요 요소들을 보여준다.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3">1세대와 2세대의 구분</h4>
                  <p className="text-sm leading-relaxed">
                    프로그레시브 록의 1세대와 2세대는 그 시기와 스타일에 있어 확연히 구분된다. 무디 블루스와 프로콜 하럼, 나이스는 
                    그들의 대표작 대부분을 67년에서 71년사이에 발표하였다. 2세대 밴드들은 대부분의 대표작을 영국 프로그레시브 록의 황금기라 할 
                    71년에서 76년사이에 발표한다. 오직 핑크 플로이드만이 1세대와 2세대를 가로질러 활동한 밴드이다.
                  </p>
                </div>
              </div>

              {/* Author Information */}
              <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h4 className="font-bold text-lg mb-3">원저 정보</h4>
                <div className="text-sm space-y-2">
                  <p><strong>원저:</strong> Rocking the Classics : English Progressive Rock and the Counterculture</p>
                  <p><strong>출판:</strong> Paperback (November 1996) Oxford Univ Pr (Trade)</p>
                  <p><strong>ISBN:</strong> 0195098889</p>
                  <p><strong>저자:</strong> Edward L. Macan</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-[#0000AA] text-white font-medium rounded-md hover:bg-[#0000AA]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}