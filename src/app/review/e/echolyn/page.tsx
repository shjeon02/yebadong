"use client";
import Link from "next/link";

export default function EcholynPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Echolyn</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 미국 (Philadelphia)</li>
              <li><strong>장르:</strong> 프로그레시브 록, 네오 프로그</li>
              <li><strong>멤버:</strong> Brett Kull (기타/보컬), Ray Weston (보컬), Chris Buzby (키보드)</li>
              <li><strong>레이블:</strong> Sony/Epic</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Echolyn (데뷔 앨범)</strong></li>
              <li><strong>Suffocating the Bloom</strong></li>
              <li><strong>As the World (1995)</strong></li>
              <li><strong>Cowboy Poems Free (2000)</strong></li>
              <li><strong>Blossom (라이브 앨범)</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>Kansas, Yes 스타일의 박자</li>
              <li>Gentle Giant의 강한 영향</li>
              <li>복잡한 리듬 구성 (change of time signature)</li>
              <li>미국의 카우보이 심포닉 프로그</li>
              <li>90년대 연주와 조화</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰 1: Fish의 'Suffocating the Bloom' 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>Fish, 신인철 (icshin@chiak.kaist.ac.kr)</strong>
              </div>
              
              <p className="mb-4">
                Philadelphia 출신의 group Echolyn은 제생각에 요즘 미국 group들 중에 가장 커나갈 가능성이 많은 
                group으로 느껴집니다. 지금은 무척 구하기가 힘들지만 Echolyn의 가능성을 본 Sony에서 오는 3월 7일에 
                발매될 새 앨범 'As the World'의 계약을 체결하였으므로 아마 'As the World'가 잘 팔리면 
                다른 앨범들도 재발매가 되지 않을까요?
              </p>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범의 발전</h4>
                <p>
                  그들의 두번째 앨범, 무척 잔인한 title인 'Suffocating the Bloom'은 s/t 데뷰앨범에 비해 
                  무척 작곡실력과 연주능력이 향상되어있는것을 느낄 수 있습니다. 곡들도 그다지 어렵지 않고.. 
                  하지만 또 너무 품위가 없는 pop도 아니고.. 아주 재미있게 들을수 있는 음악을 만들어 주고 있어요.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">'A Little Nonsense' - Gentle Giant의 영향</h4>
                <p>
                  앨범을 처음부터 듣다보면 Kansas나 Yes style의 박자가 90년대식의 연주와 조화를 이루고 있는 
                  들을만한 음악이다... 하는 생각이 들다가 Gentle Giant의 영향을 크게 느낄 수 있는 
                  track인 'A Little Nonsense'가 연주되는 순간 '이 친구들 그냥 반짝했다 사라질 단순한 
                  neo-prog team이 아니다..'라는걸 느꼈습니다.
                </p>
                <p className="mt-2">
                  흔히들 change of time signature라고 표현하는 다양한 리듬의 곡 구성이 돋보입니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">미래에 대한 전망</h4>
                <p>
                  확실한 Gentle Giant의 영향이 이 친구들을 요즘 미국에서 한참 양산되고 있는 
                  동년배 (prog + prog metal) / 2팀들과 한 단계 다른, 뭔가 앞으로 Kansas나 
                  좋았던 시절의 Styx의 대를 이을 미국의 cowboy symponic prog의 대를 이을 
                  훌륭한 group으로 성장할 가능성이 느껴지게 하네요.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">'As the World' 샘플러</h4>
                <p>
                  얼마전 Progfest 즈음에 홍보용으로 나누어 주었던 이들의 앞으로 발표될 album 
                  'As the World'의 sampler CD single에 담겨있는 두곡 'As the World'와 
                  'My Dear Wormwood'를 듣고나니 더욱더 이들의 새 앨범이 기대되네요. 
                  3월 7일. Sony/Epic에서 발매된다니까 잘하면 우리나라에서도 쉽게 구할 수 있겠지요.. :-)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">비디오 리뷰: Home Brew Bootleg Stew</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>Fish의 비디오 리뷰</strong>
              </div>

              <p className="mb-4">
                얼마전 자주 제작한 videotape를 Gibraltar등에 광고를 낸 echolyn의 
                공연 compilation video입니다. 물론 제목에서 알 수 있듯이 화질이나 음질은
                아주 괜찮은 bootleg 수준이구요.. 그들의 생동감 있는 모습을 직접 볼 수 
                있어서 아주 좋았습니다.
              </p>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">화질과 편집</h4>
                <p>
                  우선 이 compilation tape은 대부분 8mm video recorder로 amatuer shot인 관계로
                  화질이나 angle은 그냥 견딜만하구요.. Progfest '94, Progscape 등등 여러가지 
                  장소에서의 공연 모습을 아기자기하게.. 역시 아마추어 수준으로 편집해 놓았습니다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">공연 장소의 현실</h4>
                <p>
                  공연 장소의 모습은... echolyn정도면 이제 꽤 많은 follow up을 가진 팀이라 
                  적어도 50명 이상의 관중을 상대로 연주하는 모습을 보여주지 않을까.. 
                  하는 저의 기대와는 달리.. 대부분의 공연이 변두리의 허름한 맥주집에서 가진 공연모습이었습니다.
                </p>
                <p className="mt-2">
                  한참 복잡한 phrase를 연주하고 있어서 턱빠지게 들여다보고 있었던 저와는 달리
                  술집의 웨이트리스인듯한 여자가 반바지에 탱크탑 차림으로 맥주 mug을 들고 왔다갔다 
                  하질 않나.. 텅빈 앞좌석에는 한 지긋한 아저씨가 턱을 괴고 As the World를 
                  들으면서 조는 듯한 모습도 보여주고요..
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">멤버들의 무대 매너</h4>
                <p>
                  반면...이들의 무대 매너는 아주 좋았습니다. 마치 Jon Anderson과 Chris Squire를 
                  연상시키듯이 무척 키 차이가나는 왜소한 lead vocalist Ray Weston과 커다란 덩치의 
                  Brett Kull은 무척 작아보이는 Gibson HG-Heck을 둘러메고 멋진 하모니를 연출하더군요.
                </p>
                <p className="mt-2">
                  다들 Jesus Christ를 연상시키는 수염과 장발을 휘날리고 있었지만
                  전직 선생님 출신인 keyboardist Chris Buzby(예바동 인터뷰를 해주었던 인물)
                  은 단정한 머리에 차분한 모습이었습니다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">가장 인상적인 장면</h4>
                <p>
                  가장 멋있었던 장면은 Suite For Everymen의 highlight 부분을 Ray Weston이 
                  부르는 part였는데요.. Ray Weston의 가창력은 정말 대단하더군요..
                </p>
                <p className="mt-2">
                  <em>(가격: S/H 포함 $ 23, contact point: echolyn@delphi.com)</em>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">리뷰 2: 안병욱의 'Cowboy Poems Free' (2000) 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>안병욱 (brave@hdec.co.kr)</strong>
              </div>

              <p className="mb-4">
                지난 80년, 90년대 폴에서 언급될 팀과 앨범들은 다 나왔었지만,
                예바동에서도 비교적 자주 회자된 Echolyn, Discipline, Spocks Beard 등
                미국 트로이카 팀들은 끼질 못했죠 ^^
              </p>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범 소개</h4>
                <p>
                  에콜린의 4년만에 나온 신보입니다. 제가 들어본 이들의 앨범은 첫 앨범인 echolyn,
                  As the World, 그리고 요것해서 3장인데 비교적 늦게 구입한 것도 있겠지만
                  최근 젤로 많이 듣는 앨범입니다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Chris의 솔로 프로젝트와 비교</h4>
                <p>
                  건반주자 Chris의 솔로 프로젝트 Finneus Gauge도 대단히 훌륭한 퓨전-프로그 사운드를
                  들려주었는데, Finneus Gauge보다도 듣기에 편하면서도, 엔딩트랙까지 자연스럽게 
                  집중하게되는 개인적으론 올 한해 최고의 앨범이 아닌가 생각되는데요.. ^^;;
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