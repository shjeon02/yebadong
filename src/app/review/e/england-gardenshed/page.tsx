"use client";
import Link from "next/link";

export default function EnglandGardenShedPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">England - Garden Shed</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 영국</li>
              <li><strong>장르:</strong> 프로그레시브 록</li>
              <li><strong>발매:</strong> 1977년 (Arista Records)</li>
              <li><strong>평가:</strong> YES + GENESIS 스타일</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">멤버 구성</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Martin Henderson</strong> - bass, vocal</li>
              <li><strong>Franc Holland</strong> - Guitar, vocal</li>
              <li><strong>Robert Webb</strong> - Keyboards, vocal</li>
              <li><strong>John Leigh</strong> - Percussion, vocal</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>전형적인 브리티쉬 색채</li>
              <li>오르간과 멜로트론 중심</li>
              <li>YES의 코러스 + Genesis의 기타</li>
              <li>고풍스런 영국적 향취</li>
              <li>효과적인 멜로트론 사용</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Track List</h3>
          <ol className="space-y-1 text-sm">
            <li>1. Midnight Madness</li>
            <li>2. All Alone</li>
            <li>3. (Introducing) Three Piece Suite</li>
            <li>4. Paraffinalea</li>
            <li>5. Yellow</li>
            <li>6. Poisoned Youth</li>
          </ol>
          <p className="text-sm text-gray-600 mt-2">Label: SRMC 1042</p>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰 1: meddle(이동훈)의 상세 분석 (11/99)</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>meddle, 이동훈 (meddle@nuri.net)</strong>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">시완의 최고 발매작</h4>
                <p>
                  최근들어 (1997년 5월 기준) 시완이 상당히 좋은 앨범들을 발매하고 있는데요... 
                  그 첫 주자로 독일의 Sahara의 Sunrise, 영국 Fruupp의 전작 발매, 그리스의 아트록의 자존심 Akritas... 
                  하지만 앞 그룹들의 음악성을 훨씬 뛰어넘는 앨범이 발매되었으니... 다름아닌 70년대 후반 
                  영국 아트록의 맥을 이어간 England의 Garden Shed입니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">YES + GENESIS의 완벽한 조합</h4>
                <p>
                  아크리타스는 뛰어난 음악성에도 불구하고 *민속적*인 색체가 강하기 때문에, 이런 류의 음악을 
                  싫어하시는 분들에게는 큰 감동을 주지 못하는게 사실이지요. 하지만 오늘 소개해 드릴 잉글랜드의 
                  정원의 오두막집은 아트록 팬이라면 누구나 좋아할 수밖에 없는 사운드를 들려주고 있습니다.
                </p>
                <p className="mt-2">
                  일본 marquee에서 평가를 했듯이 *YES + GENESIS*란 평이 상당히 어울리더군요. 
                  제 생각에는 전체적으로는 제너시스보다는 예스쪽에 더 가깝다고 생각합니다. 
                  코러스나 신비로움 + 시원스러움을 자아내는 곡구성은 예스를... 
                  hackett 풍의 기타, watcher of the skies에서 들을 수 있었던 멜로트론은 전적으로 제너시스를 연상시키지요.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">곡별 상세 분석</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">"Midnight Madness"</h5>
                    <p className="text-sm">
                      뿅뿅거리는 쨈 있는 키보드 사운드로 시작하는 midnight madness(야밤광기)는 
                      예스풍의 코러스가 단연 압권인 곡입니다. 마치 초기 예스의 단순한 음악을 듣고 있는 기분이랄까요? 
                      예스의 survival처럼 파퓰러한 사운드를 좋아하시는 분이라면 정말 뿅가실 곡입니다.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">"All Alone"</h5>
                    <p className="text-sm">
                      2분 정도의 짧은 곡이지만 너무나도 아름다운 그랜드 피아노와 보컬이 인상적입니다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium">"Three Piece Suite"</h5>
                    <p className="text-sm">
                      정원의 새 소리로 시작합니다. 역시 예스의 영향을 받은 코러스와 키보드 파트와 
                      멜로트론은 제너시스에서 영향을 받지 않았나 생각해봅니다. 12분이라는 시간이 짧게만 느껴지는군요.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium">"Poisoned Youth" (16분 대곡)</h5>
                    <p className="text-sm">
                      16분 동안 손에 땀을 쥐게하는 대곡인 poisoned youth에선 앞 곡들이 예스의 영향을 많이 받았다고 
                      한다면 이번엔 반대로 제너시스의 영향이 더욱 더 짙게 나타납니다. 물론 서로 튈려고 하는 연주가 
                      예스의 분위기를 반영하지만 보컬의 음색과 어두운 분위기가 제너시스를 연상시키는군요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">강력 추천</h4>
                <p>
                  끝으로 이 앨범에 대한 많은 관심을 부탁드립니다. 지금까지 제가 리뷰한 11장의 시완 씨디중에서도 
                  단연 돋보이는 작품입니다. 이번주 주말에 레코드점으로 달려가셔서 구입하셔도 후회없는 선택이 될것을 
                  확신합니다. 농담이 아닙니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">리뷰 2: 3M의 독창성 논란 분석</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>3M (ecokis@plaza.snu.ac.kr)</strong>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">독창성 부족론에 대한 반박</h4>
                <p>
                  England의 "Garden Shed"를 들을 때마다 생각나는 것은 예전 핫뮤직에 올랐던 그들에 대한 평입니다. 
                  대강의 개요는.. 연주력이 뛰어난 그룹임에 틀림없지만 독창성이 부족한 Yes,Genesis의 아류 밴드로, 
                  그들에 대한 과찬은 단지 *상술*에 지나지 않는다는 내용이었습니다.
                </p>
                <p className="mt-2">
                  하지만 막상 구입해 들어보니..style을 흉내낸 것은 사실이지만..개성없고,모방뿐인..그렇다고 
                  연주실력이 대단하냐 하면 그렇지도 않은 일부 몰지각한 그룹들과는 차원이 달랐습니다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Cherry Five, Alas와의 비교</h4>
                <p>
                  Cherry Five와 Alas는 각각 Yes와 ELP의 복제판임이 명백하지만 ..훌륭한 작곡과 편곡,연주로 
                  많은 음악적 즐거움을 선사했듯이 England 또한 *현재로선* 신선함 그 자체입니다. 
                  해설지를 보면 originality가 부족하니 양지하시라는 지적으로, 혹시 있을지 모를 청자들의 
                  모방그룹에 대한 심리적 반발을, 누그러뜨리려는 예방약을 미리 깔아 놓았는데..
                </p>
                <p className="mt-2">
                  제 생각엔 Cherry Five,Alas에 비하면, 이들의 선배그룹들에 대한 인용은 
                  그야말로 미약 그 자체란 느낌입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">리뷰 3: 유영재의 감동적인 발견 체험기 (94.8)</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>유영재 (espiritu@hitel.net, 94.8)</strong>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">동생을 통한 우연한 발견</h4>
                <p>
                  이 음반이 재발매 된 것은 80년대 후반 일본의 에디슨 사를 통해서였다. 나도 이 일본에서 재발매된 
                  CD와 여러번 마주칠 기회를 가졌지만 난 전혀 관심을 두지 않았었다. 왜냐하면 이 England라는 
                  그룹의 'Midnight Madness'라는 곡이 모 심야 프로에서 가끔 흘러나오곤 했는데, 
                  그다지 좋은 곡이라 생각되지 않았기 때문이다.
                </p>
                <p className="mt-2">
                  내가 내 방에서 나오면 내 동생은 항상 기회는 왔다는 듯이 내 방으로 들어가서 문을 닫고 음악을 
                  듣는 것이었다. 그러다가 며칠이 지나고 내가 방에서 음악을 듣고 있는데 동생이 들어와서 
                  "England 듣자!!"하는 것이었다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">"All Alone...Three Piece Suite"의 충격</h4>
                <p>
                  몇시간이 지나고...동생이 나가고 나 혼자 남은 방에서 난 한 앨범을 계속 반복해서 듣고 있었다. 
                  바로 England의 [Garden Shed]... '세상에... 등잔 밑이 어둡다더니...' 동생이 틀어놓았던 
                  잉글랜드를 난 옆에서 거의 흘려 듣듯이 하다가 그냥 이들의 사운드에 매료되어 버리고 말았다. 
                  신선한 충격이었다.
                </p>
                <p className="mt-2">
                  그 때 동생이 틀었던 곡은 'All Alone...Three Piece Suite'였다. 아마 동생이 아니었으면 
                  이 앨범은 얼마나 더 썩혀있었어야 했을지 알 수 없는 일이었다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">"Three Piece Suite" 상세 분석</h4>
                <p>
                  잔잔한 피아노 선율과 보컬이 'All Alone...'을 읖조리고 나면 그 뒤를 이어 멀리서 서서히 
                  들려오는 키보드 소리와 함께 멜로트론이 청자의 공간을 감싼다. 바로 조곡 'Three Piece Suite'의 
                  첫파트의 시작이다.
                </p>
                <p className="mt-2">
                  Robert Webb의 흠잡을데 없는 세련된 건반 연주와 함께 멤버들의 보컬 하모니가 다소 앙증맞으면서도 
                  멋지게 울려퍼지고 있다. 듣는 이로 하여금 감칠 맛이 나게 하는 부분이다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">멜로트론의 환상적 활용</h4>
                <p>
                  통통 거리는 드럼과 육중한 음을 내는 베이스 기타 애드립과 함께 울리는 멜로트론은 
                  듣는 이로 하여금 음악적 쾌감을 일으키기에 충분하다. 웅장하지 않으면서도 세련미 넘치게 
                  귀를 때리는 멜로트론은 (적어도 본인에게 있어서는) 환상적이다.
                </p>
                <p className="mt-2">
                  '아...멋지다!!'하는 감탄사 밖에 나오지 않는다. 본인이 이 앨범에서 가장 좋아하고, 
                  또한 가장 귀가 닳도록 들었던 부분이다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">최종 평가</h4>
                <p>
                  앨범 전체적으로 가장 눈에 띄는 것은 능수능란한 연주를 펼쳐보이는 오르간과 멜로트론. 
                  특히 멜로트론은 다른 그룹의 음악에서 쓰여진 것처럼 화려하다거나 신비롭지는 않지만 
                  백에서 자기 몫을 톡톡히 해내며 소박한 아름다움을 전해주고 있는데, 아마도 멜로트론이 
                  가장 튀지 않으면서도 가장 효과적으로 사용된 대표적인 케이스의 앨범이 아닐런지...
                </p>
                <p className="mt-2">
                  브리티쉬 록에 관심이 있는 분들은 반드시 들어보아야 할 수작앨범이라 생각된다. 
                  'All Alone...three Piece Suite' 한 곡만으로도 이 앨범의 가치는 충분하지 않을런지...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 