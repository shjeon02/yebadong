import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pain of Salvation | Yebadong',
  description: 'Pain of Salvation 앨범 리뷰 - 다니엘 길덴로우의 화려무쌍한 프로그레시브 메탈',
};

export default function PainOfSalvationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pain of Salvation
            </h1>
            <p className="text-purple-300 text-lg">청각적 오르가즘의 극치를 선사하는 프로그레시브 메탈</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                *** Pain of Salvation ***
              </h3>
              
              <p className="text-sm text-gray-400 mb-6">
                [종합예술인, villastrangiato@hanmail.net]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  나의음악적인토양중 가장기본이되는것은 흑인음악과올드록과팝이다.내가
                  아트록이라는걸접해본지(정확히말해서그룹은알고있었지만이런걸아트록이라고
                  한다라는걸안지)가 3년전쯤인듯하다.그래서많은작품을들어본지는못했다.그러나
                  아트록이라는락의한분파를들으면서느낀것은이거였다.
                </p>

                <p>
                  내가락이라는쟝르의음반을들으며느끼고싶은것은피가거꾸로쏟아지는듯한
                  흥분감과파괴력넘치는그루브가일단첫번째이고두번째로는거기에맞물려서
                  돌아가는팝적인멜로디라인까지있으면금상첨화라고생각하고살았었다.그런데
                  아트록에서는피가거꾸로서는듯한파괴력넘치는그루브를느껴본적이솔직하게
                  없었다.소위말하는프로그레시브메틀에서조차거의느껴보지못했다.물론다양하게
                  쪼개는급진적인느낌이드는박자야많이맛봤지만난인간이단순한지라한음한음
                  절도있게끊기는훵키한비트를좋아한다.
                </p>

                <p>
                  이음반은나와해머하트의인연을만들어준음반이다.핫뮤직이라는잡지에
                  올라와있는광고글을보고가서그날산음반이로열헌트와이음반이었다.
                </p>

                <p>
                  그리고는집에와서로열헌트를들었다.역시만족스러웠다.그리고는이앨범을
                  들었다.만족을넘어서서...이느낌을어찌표현해야할까?피가거꾸로는듯한
                  극한의흥분감.이런걸두고청각적인오르가즘이라고하는거겠지?일단이들의리듬은
                  떡드럼과둔중한베이스를바탕으로한그루브넘치는리듬이다.거기에음악을들을때
                  가장좋아하는느낌인어두움이전면에깔리는신비로운서정미,특히보컬리스트이자
                  리드기타리스트이고전곡의작사작곡을거의도맡다시피하는다니엘길덴로우의
                  화려무쌍한다양한목소리는충격그자체였다.
                </p>

                {/* 트랙 리스트 */}
                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Track List</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1.!(foreword)</div>
                    <div>8.void of her</div>
                    <div>2.welcome to entropia</div>
                    <div>9.to the end</div>
                    <div>3.winning a war</div>
                    <div>10.never learns to fly</div>
                    <div>4.people passing by</div>
                    <div>11.circles</div>
                    <div>5.oblivion ocean</div>
                    <div>12.nightmist</div>
                    <div>6.stress</div>
                    <div>13.plains of dawn</div>
                    <div>7.revival</div>
                    <div>14.leaving entropia</div>
                  </div>
                </div>

                {/* 트랙별 상세 분석 */}
                <div className="mt-8 space-y-6">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">트랙별 상세 분석</h4>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">1.이 곡에서는</h5>
                      <p className="text-gray-200 text-sm">
                        먼저흥분감넘치는리프로시작된다.거기에외마디절규가터지면서
                        다니엘의훌륭한목소리를감상하실수있다.중간의신비로운신디사이저와재지한
                        기타솔로.결코음악은테크닉이모자라서는안된다.그렇다고음악이테크닉의노예가
                        되는것은더욱꼴사나운일이다.안으로갈무리된깊이있는연주력의진수를
                        만날수있는곡.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">2.1번이끝나자마자</h5>
                      <p className="text-gray-200 text-sm">
                        조금의인터벌도없이곧바로시작되는짧은
                        연주넘버.트립합스타일의리듬프로그래밍위에실려나오는어둡고도서정적인
                        멜로디가인상깊다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">3.역시이들의주특기인</h5>
                      <p className="text-gray-200 text-sm">
                        인상깊은멜로디가일품이다.그루브한베이스리프위에
                        7색8색으로변화하는다니엘길덴로우의보컬과백그라운드의다양한효과음을
                        넣어주는환상적인키보드를맛볼수있는곡.특히이곡에서의다니엘의보컬은
                        순간적으로들이켰다가내질렀다가그야말로드라마틱한보컬의극치를보여준다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">4.3번곡이천천히</h5>
                      <p className="text-gray-200 text-sm">
                        파도소리와훼이드아웃되고나면순간귀를사로잡는그루브한
                        베이스의리프가나온다.훵키한베이스의연주를지나고나면느릿느릿하면서도
                        서정적인보컬이나온다.보컬의주창이끝나자마자지미헨드릭스를연상시키는
                        와와페달과트리키한기타솔로가터져나오면서극적인구성을취하더니만다시
                        멜로디컬한부분특히이부분에서는멤버들의합창이들을만하다.그루브한부분이
                        지난후드림씨어터를연상시키는복잡다단한트레이드오프가나온다.이곡을들으면
                        결코테크닉이모자르지않다는것을알게될것이다.너무잘해서갈무리해놓은
                        것이지...이부분이후에나오는보컬멜로디는애절함의극치다.거기에그멜로디가
                        끝난후이어지는서정적이면서도블루지한기타솔로.이윽고이어지는일렉트릭
                        피아노위에얹혀지는소울풀한보컬의처절하고도구구절절한외침.이런식으로
                        지그재그로구성을해놓은곡들이숨조차멎게해버린다.소위말하는극적인구성의
                        진수라는걸이곡에서확실하게느꼈다.아울러멜로디도너무나뛰어나다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">5.이곡은일렉트릭기타의</h5>
                      <p className="text-gray-200 text-sm">
                        클린톤과다니엘길덴로우의보컬로만이뤄진
                        트랙이다.언젠가신촌의백스테이지라는감상실에갔더니이곡의실황이있어서
                        신청했더니정말이지놀라운목소리였다.목소리와기타만으로도꽉찬느낌이드는
                        멋진곡이다.고백적인목소리가목소리자체는아예다르지만폴사이먼의목소리를
                        들었을때의느낌이들었다.폐부깊은곳까지호소하는듯한멜로디와소울풀한보컬은
                        정말이지...할말을잊게한다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">6.이곡은힘있는행진곡풍의</h5>
                      <p className="text-gray-200 text-sm">
                        드럼으로시작한다.그리고는그루브한리프에실려서
                        힘있게샤우팅을하더니만아기자기한효과음에실려서나오는절규,마림바톤의
                        통통튀는키보드의섹션을지나가면역시인상깊은멜로디가튀어나온다.제목그대로
                        스트레스많이받았을때들으면아드레날린을주체못할듯하다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">7.이곡은조금은정통적인</h5>
                      <p className="text-gray-200 text-sm">
                        냄새가나는메틀넘버다.스피디한하드록스타일의기타와
                        투베이스드럼으로곡의포문을연다음에암울한느낌을주는다니엘의소울풀한
                        보이스가깔리면서정신을못차리게한다.힘있는남성적인넘버다.약간아이언
                        메이든의스피디한넘버를듣는듯한느낌?그렇지만이들의특징인인상깊은멜로디와
                        화려한보컬은여전하다.게다가중간에나오는기타솔로는이율배반적으로너무나도
                        서정적이고도아름답다.게다가곡의끝을는기타솔로는실험적이면서도
                        블루지한마치지미헨드릭스같다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">8.이곡역시특유의</h5>
                      <p className="text-gray-200 text-sm">
                        드라마틱함은계속발휘된다.7번곡의메인멜로디를애절하게
                        연주한다음순간적으로황당스럽게거칠게밀어붙이더니파이프오르간스타일의
                        키보드로끝을맺는다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">9.이곡은약간스래쉬메틀적이다.</h5>
                      <p className="text-gray-200 text-sm">
                        신비로운키보드백킹이들어간다는것이
                        스래쉬메틀과는다르지만3코드짜리리프로시작을열면서과하게거친다니엘
                        길덴로우의보컬이힘이넘친다.게다가멤버들의백보컬도남성적인힘이
                        넘친다.그러더니만역시내뒤통수를때려버린다.기타솔로부분에서의재지한
                        스윙풍의연주후과격한솔로이후다시한번신비로운키보드와소울풀한다니엘의
                        보컬이나오며조금은우울하게끝을맺는곡이다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">10.이곡은일렉트릭피아노로</h5>
                      <p className="text-gray-200 text-sm">
                        발라드풍의연주로시작을한다.마치이발라드적인
                        부분의멜로디는휘트니휴스턴의The Greatest Love Of All의멜로디를
                        연상시킨다.그이후아주잠깐과격하면서도사악한느낌이드는멜로디이후다시
                        일렉트릭피아노와다니엘의나른한보컬로서끝을맺는다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">11.이곡은베이스를이중녹음하여</h5>
                      <p className="text-gray-200 text-sm">
                        시작을한다.그이후에코를잔뜩걸은다니엘의
                        보컬과클린톤의기타가서정적인멜로디를연주하면서짧게끝을맺는다.(55초)
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">12.이곡은11번과이어지는곡이다.</h5>
                      <p className="text-gray-200 text-sm">
                        11번이끝나자마자암울한서정미를한껏뽐내는
                        다니엘의보컬로서곡을시작하면또어떤드라마틱함을보여줄지슬슬기대가
                        된다.역시나...중간에삽입된부분에서의보컬의극적인구성과리듬파트의
                        천의무봉한조화가압권이다.그리고서나오는베이스의훵키한쵸퍼와다니엘의
                        거칠면서도우울한보컬,이어지는그루브한기타솔로,그렇지만이기타솔로는굉장히
                        화려하다.결코이들이연주를못해서안하는게아니라곡을해치지않기위해연주를
                        자제한다는것을또한번확인할수있다.그이후이어지는다니엘의샤우팅후의거칠게
                        목소리를깨뜨리는부분은소름마저돋는다.특히이부분에서는기타역시
                        혼란스러우면서도실험적이다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">13.이곡은조용한파도소리와</h5>
                      <p className="text-gray-200 text-sm">
                        역시일렉트릭피아노에다니엘의우울한보컬로서
                        시작을한다.이쯤되면또한번의극적인구성을기대하게된다.어떻게극적인느낌을
                        전달할런지...그런데이곡은그렇게과격한드라마틱함을내포하고있지는
                        않다.서정적인멜로디위에서절규하는듯한다니엘의포효가예사롭지않은
                        곡이었다.그러나역시나...마지막에뒷통수를때렸다.그루브한트윈리드가
                        펼쳐지면서거친드라마틱함을표현한다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">14.이앨범에서유일하게</h5>
                      <p className="text-gray-200 text-sm">
                        어쿠스틱기타가들어가는트랙이다.사근사근한보컬과
                        멜로디가아름답지만다니엘의수많은색채의보컬이정말자극적이다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 결론 */}
                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <p className="text-gray-200">
                    이앨범은나의음악편력10여년간들어본음반중가장충격을주었던음반중
                    하나다.난내귀를남에게맞춘적도없거니와남에게내귀를강요해본적도
                    없다.그러나만약에나와취향이비슷하신회원분이이음반을구입하여서
                    들으신다면오랜만에혹은지금까지느껴보지못했던거대한청각적오르가즘을
                    경험하시리라고단언한다.
                  </p>
                </div>
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