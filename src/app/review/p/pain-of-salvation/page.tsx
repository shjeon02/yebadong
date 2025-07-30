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
              <p className="text-sm text-gray-400 mb-6">
                [종합예술인, villastrangiato@hanmail.net]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  나의 음악적인 토양중 가장 기본이 되는 것은 흑인음악과 올드록과 팝이다. 내가
                  아트록이라는 걸 접해본지(정확히 말해서 그룹은 알고있었지만 이런걸 아트록이라고
                  한다라는 걸 안지)가 3년전쯤인듯하다. 그래서 많은 작품을 들어본지는 못했다. 그러나
                  아트록이라는 락의 한 분파를 들으면서 느낀 것은 이거였다.
                </p>

                <p>
                  내가 락이라는 쟝르의 음반을 들으며 느끼고 싶은 것은 피가 거꾸로 쏟아지는 듯한
                  흥분감과 파괴력넘치는 그루브가 일단 첫번째이고 두번째로는 거기에 맞물려서
                  돌아가는 팝적인 멜로디라인까지있으면 금상첨화라고 생각하고 살았었다. 그런데
                  아트록에서는 피가 거꾸로 서는듯한 파괴력넘치는 그루브를 느껴본적이 솔직하게
                  없었다. 소위말하는 프로그레시브 메틀에서조차 거의 느껴보지 못했다. 물론 다양하게
                  쪼개는 급진적인 느낌이 드는 박자야 많이 맛봤지만 난 인간이 단순한지라 한음한음
                  절도있게 끊기는 훵키한 비트를 좋아한다.
                </p>

                <p>
                  이 음반은 나와 해머하트의 인연을 만들어준 음반이다. 핫뮤직이라는 잡지에
                  올라와있는 광고글을 보고 가서 그날 산음반이 로열헌트와 이 음반이었다.
                </p>

                <p>
                  그리고는 집에와서 로열헌트를 들었다. 역시 만족스러웠다. 그리고는 이 앨범을
                  들었다. 만족을 넘어서서... 이 느낌을 어찌표현해야할까? 피가 거꾸로 는듯한
                  극한의 흥분감. 이런걸두고 청각적인 오르가즘이라고 하는거겠지? 일단 이들의 리듬은
                  떡드럼과 둔중한 베이스를 바탕으로한 그루브넘치는 리듬이다. 거기에 음악을 들을때
                  가장 좋아하는 느낌인 어두움이 전면에 깔리는 신비로운 서정미, 특히 보컬리스트이자
                  리드기타리스트이고 전곡의 작사작곡을 거의 도맡다시피하는 다니엘 길덴로우의
                  화려무쌍한 다양한 목소리는 충격그자체였다.
                </p>

                {/* 트랙 리스트 */}
                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Track List</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1. !(foreword)</div>
                    <div>8. void of her</div>
                    <div>2. welcome to entropia</div>
                    <div>9. to the end</div>
                    <div>3. winning a war</div>
                    <div>10. never learns to fly</div>
                    <div>4. people passing by</div>
                    <div>11. circles</div>
                    <div>5. oblivion ocean</div>
                    <div>12. nightmist</div>
                    <div>6. stress</div>
                    <div>13. plains of dawn</div>
                    <div>7. revival</div>
                    <div>14. leaving entropia</div>
                  </div>
                </div>

                {/* 트랙별 상세 분석 */}
                <div className="mt-8 space-y-6">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">트랙별 상세 분석</h4>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">1. !(foreword)</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡에서는 먼저 흥분감넘치는 리프로 시작된다. 거기에 외마디절규가 터지면서
                        다니엘의 훌륭한 목소리를 감상하실수있다. 중간의 신비로운 신디사이저와 재지한
                        기타솔로. 결코 음악은 테크닉이 모자라서는 안된다. 그렇다고 음악이 테크닉의 노예가
                        되는 것은 더욱 꼴사나운 일이다. 안으로 갈무리된 깊이있는 연주력의 진수를
                        만날수있는 곡.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">2. welcome to entropia</h5>
                      <p className="text-gray-200 text-sm">
                        1번이 끝나자마자 조금의 인터벌도없이 곧바로시작되는 짧은
                        연주넘버. 트립합스타일의 리듬프로그래밍위에 실려나오는 어둡고도 서정적인
                        멜로디가 인상깊다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">3. winning a war</h5>
                      <p className="text-gray-200 text-sm">
                        역시 이들의 주특기인 인상깊은 멜로디가 일품이다. 그루브한 베이스리프위에
                        7색8색으로 변화하는 다니엘길덴로우의 보컬과 백그라운드의 다양한 효과음을
                        넣어주는 환상적인 키보드를 맛볼수있는 곡. 특히 이 곡에서의 다니엘의 보컬은
                        순간적으로 들이켰다가 내질렀다가 그야말로 드라마틱한 보컬의 극치를 보여준다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">4. people passing by</h5>
                      <p className="text-gray-200 text-sm">
                        3번곡이 천천히 파도소리와 훼이드아웃되고나면 순간 귀를 사로잡는 그루브한
                        베이스의 리프가 나온다. 훵키한 베이스의 연주를 지나고 나면 느릿느릿하면서도
                        서정적인 보컬이 나온다. 보컬의 주창이 끝나자마자 지미헨드릭스를 연상시키는
                        와와페달과 트리키한 기타솔로가 터져나오면서 극적인 구성을 취하더니만 다시
                        멜로디컬한부분 특히 이 부분에서는 멤버들의 합창이 들을만하다. 그루브한 부분이
                        지난후 드림씨어터를 연상시키는 복잡다단한 트레이드오프가 나온다. 이 곡을 들으면
                        결코 테크닉이 모자르지 않다는 것을 알게될것이다. 너무 잘해서 갈무리해놓은
                        것이지... 이 부분이후에 나오는 보컬멜로디는 애절함의 극치다. 거기에 그 멜로디가
                        끝난후 이어지는 서정적이면서도 블루지한 기타솔로. 이윽고 이어지는 일렉트릭
                        피아노위에 얹혀지는 소울풀한 보컬의 처절하고도 구구절절한 외침. 이런식으로
                        지그재그로 구성을 해놓은 곡들이 숨조차 멎게해버린다. 소위말하는 극적인 구성의
                        진수라는 걸 이 곡에서 확실하게 느꼈다. 아울러 멜로디도 너무나 뛰어나다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">5. oblivion ocean</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 일렉트릭 기타의 클린톤과 다니엘 길덴로우의 보컬로만 이뤄진
                        트랙이다. 언젠가 신촌의 백스테이지라는 감상실에 갔더니 이 곡의 실황이 있어서
                        신청했더니 정말이지 놀라운 목소리였다. 목소리와 기타만으로도 꽉찬 느낌이 드는
                        멋진 곡이다. 고백적인 목소리가 목소리자체는 아예 다르지만 폴 사이먼의 목소리를
                        들었을때의 느낌이 들었다. 폐부깊은 곳까지 호소하는듯한 멜로디와 소울풀한 보컬은
                        정말이지... 할말을 잊게한다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">6. stress</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 힘있는 행진곡풍의 드럼으로 시작한다. 그리고는 그루브한 리프에 실려서
                        힘있게 샤우팅을 하더니만 아기자기한 효과음에 실려서 나오는 절규, 마림바톤의
                        통통튀는 키보드의 섹션을 지나가면 역시 인상깊은 멜로디가 튀어나온다. 제목그대로
                        스트레스 많이 받았을때 들으면 아드레날린을 주체못할듯하다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">7. revival</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 조금은 정통적인 냄새가 나는 메틀넘버다. 스피디한 하드록스타일의 기타와
                        투베이스 드럼으로 곡의 포문을 연다음에 암울한 느낌을 주는 다니엘의 소울풀한
                        보이스가 깔리면서 정신을 못차리게한다. 힘있는 남성적인 넘버다. 약간 아이언
                        메이든의 스피디한 넘버를 듣는듯한 느낌? 그렇지만 이들의 특징인 인상깊은 멜로디와
                        화려한 보컬은 여전하다. 게다가 중간에 나오는 기타솔로는 이율배반적으로 너무나도
                        서정적이고도 아름답다. 게다가 곡의 끝을 는 기타솔로는 실험적이면서도
                        블루지한 마치 지미 헨드릭스같다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">8. void of her</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡역시 특유의 드라마틱함은 계속 발휘된다. 7번곡의 메인 멜로디를 애절하게
                        연주한다음 순간적으로 황당스럽게 거칠게 밀어붙이더니 파이프오르간스타일의
                        키보드로 끝을맺는다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">9. to the end</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 약간 스래쉬메틀적이다. 신비로운 키보드 백킹이 들어간다는 것이
                        스래쉬메틀과는 다르지만 3코드짜리 리프로 시작을 열면서 과하게 거친 다니엘
                        길덴로우의 보컬이 힘이넘친다. 게다가 멤버들의 백보컬도 남성적인 힘이
                        넘친다. 그러더니만 역시 내 뒤통수를 때려버린다. 기타솔로부분에서의 재지한
                        스윙풍의 연주후 과격한 솔로이후 다시한번 신비로운 키보드와 소울풀한 다니엘의
                        보컬이 나오며 조금은 우울하게 끝을 맺는곡이다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">10. never learns to fly</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 일렉트릭 피아노로 발라드풍의 연주로 시작을한다. 마치 이 발라드적인
                        부분의 멜로디는 휘트니 휴스턴의 The Greatest Love Of All의 멜로디를
                        연상시킨다. 그이후 아주 잠깐 과격하면서도 사악한 느낌이 드는 멜로디이후 다시
                        일렉트릭피아노와 다니엘의 나른한 보컬로서 끝을맺는다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">11. circles</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 베이스를 이중녹음하여 시작을한다. 그 이후 에코를 잔뜩걸은 다니엘의
                        보컬과 클린톤의 기타가 서정적인 멜로디를 연주하면서 짧게 끝을맺는다. (55초)
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">12. nightmist</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 11번과 이어지는 곡이다. 11번이 끝나자마자 암울한 서정미를 한껏뽐내는
                        다니엘의 보컬로서 곡을 시작하면 또 어떤 드라마틱함을 보여줄지 슬슬기대가
                        된다. 역시나... 중간에 삽입된 부분에서의 보컬의 극적인 구성과 리듬파트의
                        천의무봉한 조화가 압권이다. 그리고서 나오는 베이스의 훵키한 쵸퍼와 다니엘의
                        거칠면서도 우울한 보컬, 이어지는 그루브한 기타솔로, 그렇지만 이 기타솔로는 굉장히
                        화려하다. 결코 이들이 연주를 못해서 안하는게 아니라 곡을 해치지않기위해 연주를
                        자제한다는 것을 또한번확인할수있다. 그 이후이어지는 다니엘의 샤우팅후의 거칠게
                        목소리를 깨뜨리는 부분은 소름마저돋는다. 특히 이 부분에서는 기타역시
                        혼란스러우면서도 실험적이다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">13. plains of dawn</h5>
                      <p className="text-gray-200 text-sm">
                        이 곡은 조용한 파도소리와 역시 일렉트릭피아노에 다니엘의 우울한 보컬로서
                        시작을 한다. 이쯤되면 또 한번의 극적인 구성을 기대하게된다. 어떻게 극적인 느낌을
                        전달할런지... 그런데 이 곡은 그렇게 과격한 드라마틱함을 내포하고있지는
                        않다. 서정적인 멜로디 위에서 절규하는듯한 다니엘의 포효가 예사롭지 않은
                        곡이었다. 그러나 역시나... 마지막에 뒷통수를 때렸다. 그루브한 트윈리드가
                        펼쳐지면서 거친 드라마틱함을 표현한다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">14. leaving entropia</h5>
                      <p className="text-gray-200 text-sm">
                        이 앨범에서 유일하게 어쿠스틱기타가 들어가는 트랙이다. 사근사근한 보컬과
                        멜로디가 아름답지만 다니엘의 수많은 색채의 보컬이 정말 자극적이다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 결론 */}
                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <p className="text-gray-200 font-semibold">
                    이 앨범은 나의 음악편력 10여년간 들어본 음반중 가장 충격을 주었던 음반중
                    하나다. 난 내 귀를 남에게 맞춘적도 없거니와 남에게 내 귀를 강요해본적도
                    없다. 그러나 만약에 나와 취향이 비슷하신 회원분이 이 음반을 구입하여서
                    들으신다면 오랜만에 혹은 지금까지 느껴보지 못했던 거대한 청각적 오르가즘을
                    경험하시리라고 단언한다.
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