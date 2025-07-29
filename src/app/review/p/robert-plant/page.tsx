import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Robert Plant | Yebadong',
  description: 'Robert Plant - 80년대 Led Zeppelin 팬의 자서전적 회고록',
};

export default function robertPlantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Robert Plant
            </h1>
            <p className="text-purple-300 text-lg">80년대 Led Zeppelin을 신(god)처럼 여기던 시절의 회고</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  Robert Plant
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Fish, 신인철, incheol.shin@vanderbilt.edu]
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  옛날 얘기와 신파의 시작
                </h4>
                
                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">나이를 먹는 징조</h4>
                  <p className="text-sm leading-relaxed">
                    또 무슨 얘기만 하려면 옛날 얘기가 나오고 신파가 되는건 <strong className="text-yellow-300">나이를 먹는 징조인것 같습니다. (죄송)</strong><br/>
                    70년대에는 한 2년 정도밖에 Rock을 듣지 못하였던것 같고<br/>
                    80년대에 주로 Rock을 듣다보니.. 80년대에 Rock 음악을 주로 듣고 자란 분들이 그랬듯이.. <em>저도 Led Zeppelin을 신(god)처럼 여기면서 음악을 듣기 시작했던것</em> 같습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  80년대와 90년대 록 팬의 차이
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">세대별 음악 취향</h4>
                  <div className="space-y-3 text-sm">
                    <p>80년대의 Rock 팬들과 90년대의 Rock 팬들과의 물론 완전히 일반화시킬 수는 없습니다만 어느정도 들어맞는 기준으로서의 차이를 들자면</p>
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-green-300">90년대 Rock 팬들:</strong> 동시대의 음악에 열광하였고</p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-yellow-300">80년대 Rock 팬들:</strong> 동시대의 음악을 외면하고 6/70년대의 음악을 그리워하며 툴툴거린게 아닌가</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Led Zeppelin의 절대적 위상
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">80년대 한국 록 팬들의 기준</h4>
                  <p className="text-sm leading-relaxed">
                    대충 맞는것 같습니다. <strong className="text-yellow-300">80년대 우리나라의 Rock 팬들에게는 Led Zeppelin의 위상이 다른 그 어느 밴드들보다도 높았던것이 사실</strong>이고
                    Led Zeppelin을 아느냐 (좋아하느냐)가 암암리에 <em>'진정한 대중음악 팬이냐 아니냐'의 기준으로 - 지금 생각하면 조금은 당혹스러운 - 사용되어지기도 한것</em> 같군요.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  중학시절의 아픈 깨달음
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">늦은 발견의 슬픔</h4>
                  <p className="text-sm leading-relaxed">
                    하지만 <strong>Led Zeppelin 이 my favourite band가 되어버린 중학시절 아깝게도 1-2 년전 그들이 이미 해산한것을 깨닫고 가슴아파했고</strong><br/>
                    언제나 잠못드는 밤 <em>나의 favourite guitarist는 Jimmy Page 나의 fave vocalist는 Robert Plant ... 중얼 중얼거리며 잠들던 시절</em>에.. 
                    신세사이저 뿅뿅대는 뉴웨이브 밴드들이 점령하던 음악시장을 안타까워 하던 시절에 (왜 안타까워 했을까 ^^)..
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1982년 - 최고의 동시대 앨범들
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">Pictures at eleven과 Coda</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    <strong className="text-yellow-300">저에겐 최고의 동시대 앨범으로 기억되는 Robert Plant의 첫 솔로앨범 Pictures at eleven과 Led Zeppelin의 마지막 outtakes album 'Coda'가 각각 1982년 발매되죠.</strong>
                  </p>
                  <div className="space-y-2 text-xs">
                    <p><strong>Coda:</strong> 조금은 실망스러웠지만 Ozone Baby, Wearing and Tearing 그리고 당시 언더그라운드 최대의 히트곡 (?) Bonzo's Montreaux등이 나름대로 위안을 주었고</p>
                    <p><strong>Pictures at eleven:</strong> Cozy Powell, Phil Collins 등의 호화 세션이 아니더라도 'Just like I've never been gone' 'Slow dancer' 'Moonlight in Samosa' 등의 곡으로 과거 Zeppelin의 팬들로부터 85점 정도는 되는 평가를 받았죠.</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Big Log - 로버트 플랜트 최고의 싱글
                </h4>

                <div className="p-6 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                  <h4 className="text-lg font-bold text-yellow-300 mb-3">The Principle of Moments</h4>
                  <p className="text-sm leading-relaxed">
                    그후 <strong>뽕짝 멜로디가 유려한... 그러나 아직도 Robert Plant 최고의 싱글로 기억되는 .. 아직도 Rock FM에서 열흘에 한번 정도는 들을 수 있는 Big Log가 실린</strong> Robert의 두번째 솔로앨범 The Principle of Moments가 발매되었습니다. 개인적으로는 'Thru with the two steps' 'In the Mood' 등도 즐겨들은 기억이 나네요.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  뮤직 비디오 시대의 시작
                </h4>

                <p className="text-sm">
                  뮤직 비디오라는것이 마악 인기를 끌기 시작하던 때입니다. Buggles의 Video killed the radio star를 첫곡으로 방송한 MTV의 영향이 아니더라도.. 국내에서는 월간팝송사같은 잡지사에서 컨서트홀에 대형 프로젝터를 설치하고 외국에서 입수한 공연 비디오들을 틀어주는 행사가 가끔 있었습니다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Shaken and Stirred - 분노에 가까운 배신감
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">세번째 솔로앨범의 충격</h4>
                  <p className="text-sm leading-relaxed">
                    나름대로 괜찮았던 Robert Plant의 첫번째와 두번째 솔로앨범에 이은 <strong className="text-yellow-300">세번째 솔로앨범 Shaken and Stirred... 지금 다시한번 들어보고 싶다는 생각도 들지만 당시 내가 받은 충격은 거의 '분노' 에 가까운 수준</strong>이었습니다.<br/>
                    이 <em>'분노에 가까운 배신감'</em> 은 몇년후 Roger Waters의 Radio KAOS를 통해 다시한번 경험하지만 Radio KAOS의 경우는 무한한 반복청취와 행간이 파일정도의 가사탐독으로 인해 180도 의견이 바뀌었습니다만... 이 Robert Plant의 앨범은 정말... ^^;
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1985년 Live Aid - 흥분과 실망
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">한 무대에 선 Zeppelin 멤버들</h4>
                  <p className="text-sm leading-relaxed">
                    84년은.. We are the world, USA for Africa. Band Aid Live Aid의 한해였습니다.<br/>
                    도저히 한무대에 다시 서기 힘들줄로 알았던.. 솔로공연에서는 절대 Zeppelin 시절의 곡은 안불른다던.. <strong>Robert Plant와 Jimmy Page ..그리고 John Paul Jones까지 한무대에 섰습니다. John Bonham대신 Phil Collins가 드럼을 맡았지만요..</strong><br/>
                    당시 AFKN을 통해 이들의 무대를 지켜본 몇몇 친구들의 반응은.. <em>'뼝간다. 하지만 조금 실망이다.. Robert Plant는 왜 그렇게 목소리가 갔고.. Jimmy Page는 아저씨가 됐을까..'</em><br/>
                    저도 물론 흥분되긴 했지만 그들의 늙은 모습에 많이 실망했습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Now and Zen - 칼라빽판으로 때우기
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">1988년의 실망</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>Shaken and Stirred에 워낙 깊게 배신당한 지라.. 1988년 발매된 Plant의 네번째 솔로앨범 Now and Zen은 당시 유행하던 '칼라빽판'으로 사는것으로 때웠습니다. ^^</strong><br/>
                    Jimmy Page가 몇곡에 참여해서 기타를 들려주었고 Tall cool one의 끝부분에 담긴 Whole lotta love의 샘플링은 그냥 joke에 지나지 않은듯 보였습니다.<br/>
                    1988년 Jimmy Page도 역시 방황을 접고 Outrider라는 솔로앨범을 발매합니다. Robert Plant가 역시 우정출연해주고 있지요. 괜찮은 블루스 앨범이었던걸로 기억납니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  90년대 - 여력이 남아있지 않은 시절
                </h4>

                <p className="text-sm">
                  90년대가 오고.. Led Zeppelin은 항상 마음의 고향처럼 남아있기는 하지만.. 이제 더이상 Robert Plant의 앨범을 사기에는 여력이 남아있지 않았습니다. 90년 발매된 Manic Nirvana, 93년 발매된 여섯번째 솔로앨범 Fate of nations 모두.. 씨디가게에서 한번 들었다가 놓는것으로 말았습니다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Page & Plant의 아쉬운 재결합
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">발정난 암코양이 같은 콧소리</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>보컬리스트로부터 벗어나고 싶었던 Robert Plant.. 반면에 Led Zeppelin에 아직 미련이 많은 Jimmy Page.</strong><br/>
                    No Quarter 세션부터 Clarksdale tour까지.. 나름대로 옛정을 생각해서 둘이 같이 모이기는 했지만 Robert Plant의 목소리는 웬지 신이나지 않고 <em className="text-yellow-300">다른사람들의 표현을 빌리면 발정난 암코양이가 가르릉거리는듯한 콧소리만 중얼거리는것이 뭔가 크게 내키지 않는 일을 하고 있는듯이</em> 들렸습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Fish님의 자서전적 고백
                </h4>

                <p>
                  Fish, 신인철님의 이 리뷰는 단순한 음반 평이 아닌 한 명의 80년대 Led Zeppelin 팬이 겪은 
                  20여 년간의 음악적 여정을 고스란히 담은 자서전적 고백입니다. "분노에 가까운 배신감"부터 
                  "발정난 암코양이 같은 콧소리"까지, 팬으로서의 솔직한 감정을 여과 없이 드러낸 것이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">80년대 Led Zeppelin 팬의 전형</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>신적 숭배:</strong> "Led Zeppelin을 신(god)처럼 여기며"</li>
                    <li>• <strong>늦은 발견:</strong> 해산 후 팬이 된 아픔</li>
                    <li>• <strong>동시대 외면:</strong> 뉴웨이브를 거부하고 과거를 그리워</li>
                    <li>• <strong>솔로 앨범 추적:</strong> Plant의 모든 앨범에 일희일비</li>
                    <li>• <strong>재결합 환상:</strong> Live Aid부터 Page & Plant까지</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Fish, 신인철님(incheol.shin@vanderbilt.edu)의 Robert Plant 자서전적 리뷰입니다. 
                  80년대 Led Zeppelin을 "신(god)처럼 여기던" 시절부터 시작해 Pictures at eleven, 
                  Big Log, Shaken and Stirred의 "분노에 가까운 배신감", Live Aid의 실망, 
                  Page & Plant의 "발정난 암코양이 같은 콧소리"까지 한 명의 팬이 겪은 
                  20여 년간의 감정적 여정을 솔직하게 기록한 자서전적 고백서입니다. 
                  1990년대 말 인터넷 문화와 록 팬 정서를 고스란히 담은 귀중한 문화사 자료입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}