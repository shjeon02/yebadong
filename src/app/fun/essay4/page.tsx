import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Essay 4: 월드컵 공동 개최 기념 한일 유러피안락 매니아들의 만남 | Yebadong',
  description: '정철이 일본인 유로피안 록 매니아 K상과의 만남을 기록한 재미있는 에피소드',
};

export default function Essay4Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">월드컵 공동 개최 기념</h1>
            <h2 className="text-2xl font-semibold mb-4 text-primary">한일 유러피안락 매니아들의 만남</h2>
            <p className="text-lg text-muted">음악을 통한 국경을 넘나드는 우정</p>
          </div>

          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <div className="mb-6">
              <p className="text-sm text-muted mb-4">[정철, zepelin@popsmail.com]</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                오늘[2001 07 21 토] 그동안 메일만 주고받았던 일본인 K씨를 만났다.<br />
                K상이 맞겠구먼.<br />
                요즘이 연휴가 몽창 낀 시즌이라 부인과 함께 한국에 놀러온거란다.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-bold mb-2">일본의 연휴 시스템</h4>
                <p className="text-sm">
                  여기서 잠깐 일본의 연휴에 대해 한마디.<br />
                  K상이 보여준 일본의 달력에는 연휴가 정말 무지막지하게 있었는데...<br />
                  그것은 경기침체에 빠져든 일본 정부가 고안한 것으로...<br />
                  연휴를 묶어두면 사람들이 놀러가니까 소비가 촉진되고<br />
                  그래서 그것만으로도 엄청난 경제효과를 노릴 수 있기 때문이다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">첫 만남</h3>
                <p className="mb-4">
                  어쨌거나 홍대앞 파파이스에서 핑크 플로이드 티를 입고있는 놈이 나라고 말해주었는데...<br />
                  약속시간이 되자 '저 양반들이 내가 찾는 사람들이군' 이라는 생각이 절로드는 커플이 나에게로 다가왔다.<br />
                  K상은 마이 블러디 발렌타인My Bloody Valentine의 러브리스Loveless 앨범재킷을, N상은 러쉬Rush의 백골그림이 그러진 티를 입고있었다.
                </p>
                <p className="mb-4">
                  나중에 이 얘기를 해주었더니 서로 마주보며 웃더구먼.<br />
                  K상 왈 '이런 옷을 입고다니는 사람은 래어rare하지요.'<br />
                  [참고로 외국 애들과 판 바꾸는 사람들에게 mega rare, a must 따위의 말들은 무척 익숙하다. 서로 뻥칠때 흔히 쓰거덩.]
                </p>
                <p className="mb-4">
                  만나자마자 '안녕하세요 정철씨, 만나서 반갑습니다.'라고 유창(?)하게 우리말 인사를 하는데 나는 고작 '하이 K상'이라고밖에 못했다.<br />
                  그리고 내가 뭔가 말하려고 버벅거리는데 갑자기 K상이 사전을 하나 꺼낸다. 일한-한일 겸용 사전이다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">마이도스에서의 쇼핑</h3>
                <p className="mb-4">
                  내가 그전에 시완레코드 카다록을 보내주었더니... 꼭 마이도스에 들리겠다고 해서 같이 갔다.<br />
                  그는 가서 주욱 뒤적거리더니 한 장을 집었다. 북구쪽 애들이었는데 나는 듣도보도 못한 애들이었다.<br />
                  좋은 가게입니다...이러면서 한참 뒤지더니 고작 그가 집어든것은 한 장.<br />
                  예전에 그가 구하는 목록을 보내주었었는데 나는 보고 기겁을 했었다.
                </p>
                <p className="mb-4">
                  그래도 이바닥에서 뒹군게 한 십년인데... 어떻게 아는 애들이 하나도 없나싶어서.<br />
                  그가 한장을 집어든 것도 일본보다 싸서였다...-_-
                </p>
                <p className="mb-4">
                  둘이 뒤적거리면서 그가 권해준 명반들이 많았는데... 죽입니다exciting를 연발하면서 말이다.<br />
                  물론 뭐였는지 기억은 안난다.<br />
                  하지만 그가 모르는 것도 있었나부다.<br />
                  내가 코라이 외룀(? Korai Orom)이 보이자 이거 죽이는 헝가리 싸이키다 라고했는데 '오오 그런가요?'이러면서 덥석 집었다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">K상의 정체</h3>
                <p className="mb-4">
                  이 양반이 어떤 사람이냐면...<br />
                  93년에 마뀌Marquee지에 글을 쓰던 사람으로 필진중에 가장 어린축이었다.<br />
                  그리고 내가 그동안 판을 교환하면서 이런 저런 얘기한 기억에 의하면...<br />
                  거의 내가 본 최고의 음반 수집 몬스터였다.<br />
                  보다보다 러시안 데스 메틀까지 듣는 사람은 처음봤다...-_-
                </p>
                <p className="mb-4">
                  마뀌에 글을 실으면 고료가 얼마나 되냐고 물어봤더니...<br />
                  하나, 둘, 셋, 사 이렇게 손가락을 세면서...한 30초 후에...<br />
                  '5천원입니다!'<br />
                  귀여운 아저씨다. 화이부 헌드레드 엔이라고했어도 되었는데...^^
                </p>
                <p className="mb-4">
                  어쨌거나 고료가 그렇게 싸다니 정말 K상 말대로<br />
                  마뀌는 아마추어들이 만든 매우 프로적인 잡지인가보다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">음악 이야기</h3>
                <p className="mb-4">
                  나중에 얘기해보니 이 양반은 피쉬Phish도 잘 모르고 있었다.<br />
                  그래서 확실히 전방위 괴물은 되기 어렵군이라는 생각을 다시한번.<br />
                  피쉬와 오이스터헤드Oysterhead에 대해 죽이는 잼세션 밴드라고 해줬더니,<br />
                  그리고 오이스터헤드에는 폴리스Police의 드러머 스튜어트 코플랜드Stewart Copland와 프라이머스Primus의 베이스 레스 클레이풀Les Claypool이 피쉬의 기타리스트와 함께하고 있다고 해줬더니 N상이 아 들어본적이 있는것 같다고<br />
                  자기는 프라이머스의 포스터로 한쪽 벽을 도배했다면서 들어봐야겠단다.
                </p>
                <p className="mb-4">
                  [아무래도 오이스터헤드라는 이름은 라디오헤드를 패로디한것 같다는 느낌]<br />
                  이 팀[K + N]은 음악 취향이 비슷하다가 결국 결혼까지 꼴인한 팀으로...<br />
                  나중에 결혼해보니 서로 겹치는 시디가 한 천장은 되더라는...
                </p>
                <p className="mb-4">
                  만나게 된 계기도...N상이 마뀌지의 K상에게 프로그레시브 락에 대해 물어본 것이라고 했다.<br />
                  웃으면서 K상은 N상이 자기의 제자라고 한마디.<br />
                  얘기하면서 재미있었던 것은 '저는 라디오헤드Radiohead같은것은 절대 안듣습니다. 마이너가 아니면 안키웁니다.'라고 말하던 것.<br />
                  나도 뭐 절대는 아니지만 확실히 마이너 위주로 키우긴 하니깐.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">어어부/이상은 공연</h3>
                <p className="mb-4">
                  어어부/이상은 공연을 보러 쌈지 스페이스로 올라갔다.<br />
                  어디서 들었는지 어어부는 이미 알고있어서 내가 모두 구해주었는데... 정작 일본에서 활동한 이상은에 대해서는 전혀 모르고 있었다.<br />
                  어쨌거나 그는 공연에 대만족해서 이상은의 시디를 샀다.<br />
                  실수로 내 가방에 넣은 바람에 다음 트레이드때나 듣게되겠지만 말이다.
                </p>
                <p className="mb-4">
                  의외로 어어부보다 이상은의 공연이 더 파워풀했다.<br />
                  그것도 이상은은 메가 마이너 히트작이자 마스터피스인 공무도하가의 곡들을 한곡인가밖에 부르지 않았음에도 말이다.<br />
                  어어부는 온갖 히트곡(?)들을 총망라했었다.<br />
                  연륜인가?<br />
                  물론 이상은의 백밴드를 해준 어어부도 훌륭했다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">한국 음식 체험</h3>
                <p className="mb-4">
                  공연끝나고 밥을 먹어야하는데...K상 말하길 어제는 불고기를 먹었으니 오늘은 생갈비를 먹자고.<br />
                  일본에서는 불고기나 갈비가 천문학적으로 비싸서 먹기 겁난단다.<br />
                  아무래도 그가 가장 만족한 것은 우리나라 물가의 가격대 성능비가 너무 좋았다는 사실인것 같다.
                </p>
                <p className="mb-4">
                  '시디도 비싸고 전철비도 비싸고 공연입장료도 비싸고 고기값도 비싸고...<br />
                  정철씨가 일본에 오려면 돈 한보따리 싸와야 할겁니다.'라고 농담까지.
                </p>
                <p className="mb-4">
                  고기먹는데 싸먹는것이 익숙하지 않은듯 내가 싸먹으니 따라 싸먹었다.<br />
                  '한국의 러버lover들은 여자가 고기를 싸서 남자 입에 넣어줍니다'그랬더니<br />
                  N상 '너 잘걸렸다!'는 듯 고기에 쌈장잔뜩에 불그스름한 야채에 김치에 잔뜩 싸서 먹인다.<br />
                  K상은 매운것을 잘 못먹는데 그래도 먹느라고 죽을상.
                </p>
                <p className="mb-4">
                  나중에 '남자도 받아먹었으면 싸줘야죠'라고 해줬더니...<br />
                  K상은 아까 메뉴 그대로에 마늘까지 넣어서 싸주더만.<br />
                  아주 훌륭(!)한 커플이라 하지않을 수 없었다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">선물 교환과 국악 이야기</h3>
                <p className="mb-4">
                  밥먹고 맥주 한잔 더 빨러 신촌쪽으로 갔다.<br />
                  앉자마자 맥주시키고 바로 선물을 주었는데...<br />
                  K상에게는 빅토르 최의 얼굴이 찍힌 티를,<br />
                  N상에게는 마쉬마로의 얼굴(?)이 찍힌 티를 주었다.
                </p>
                <p className="mb-4">
                  빅토르 최에 대해서는 예전에 말해준 적이 있어서 K상이 알고있었고...<br />
                  마쉬마로는 지금 한국에서 가장 인기있는 캐릭터라고 말해주었더니 다레팬더같은 놈이냐며 웃는다.
                </p>
                <p className="mb-4">
                  K상은 한국 전통음악에 정말 진지한 관심을 가지고있다.<br />
                  그는 나에게 국악기에 대해 설명이 잘 되어있는 책을 구해달라고 했고<br />
                  앞으로도 계속 이렇게 몸을 움직이게 하는 국악을 소개해달라고 했다.<br />
                  [내가 권해준 국악은 대개의 경우 프리 임프로비제이션에 가까운 연주들]
                </p>
                <p className="mb-4">
                  N상 하는말 '일본의 전통음악은 너무 정적이어서 졸 수밖에 없다'<br />
                  (이때의 바디랭귀지는 조는 포즈)<br />
                  일본음악이 극적인 형태로 나타난 '노'에 대해 얘기했는데...<br />
                  노가 무척이나 정적인 것에 비해 판소리가 얼마나 역동적인지 말해주었다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">일본의 극단적 프로그레시브</h3>
                <p className="mb-4">
                  K상이 권해준 일본의 극단적extreme 프로그레시브 락중에 가장 침튀기면서 추천한 것은 (인종적인것 뿐만 아니라 내용이나 음악까지) 토종 일본밴드 마리아 칸논(성모 마리아와 관음보살에서 딴 밴드명)이다.<br />
                  이 밴드의 베이스 주자는 너무 음악적으로 고뇌하던 나머지 명반 이누-지니(개죽음)를 스튜디오 라이브로 내놓고 자살했다고...-_-
                </p>
                <p className="mb-4">
                  K상과 N상이 모두 입을 모아 칭찬하는 이 밴드는 정말 지나가는 맷돼지를 날로잡아 바로 돌도끼로 썰어 물어뜯는듯한 느낌을 주는 아주 쌩raw음악을 들려주는 놈들이다.<br />
                  K상 말하길 라이브는 더욱 더 죽인다고.<br />
                  확실히 그런 익스트림 뮤직은 라이브로 들어야 제맛(?)이긴 할게다.
                </p>
                <p className="mb-4">
                  내가 혹시 그놈 할복(이때의 바디 랭귀지는 배를 따는것)했냐고 물었더니<br />
                  N상이 웃으며 절대 아니라고 한다.<br />
                  일본에서는 자살할 때 보통popular 자살하냐고 물었는데<br />
                  N상이 황당해하면서 그건 별로 안쓰는 소수의odd 방법이라고 했다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">작별과 마뀌지 선물</h3>
                <p className="mb-4">
                  어쨌거나 마쉬마로와 빅토르 최에 썩 만족한 그들도 내게 선물을 주었다.<br />
                  바로 마뀌지 과월호 9권.<br />
                  9권이나 되는 책을 들고오느라 힘들겠었다고 했더니too heavy present...<br />
                  말을 잘못알아들었는지 무거운 선물가져와서 미안하다고하더라.<br />
                  이건 완전히 레드 제플린이 울부짖은 의사소통단절Communication Breakdown이로구먼.
                </p>
                <p className="mb-4">
                  어쨌거나 무척 기쁜 선물이었고 그가 스스로 말하길 울트라 레어에 상당한 고가로 거래되는 것이라고 했다.<br />
                  아마도 자기가 보던 것을 준 듯 했다.<br />
                  게다가 특집을 보니 나에게 의미있는 기사가 실린것들로 골라 빼온 티가 났다.<br />
                  무척 고마왔다.
                </p>
                <p className="mb-4">
                  나도 손님대접하느라 돈도 좀 쓰고 스케줄도 잡아주는 등 신경을 썼지만 K상 부부도 나를 너무 생각해주었다.<br />
                  반갑게 인사를 하고 시청에서 종로쪽으로 전철태워 보냈다.<br />
                  그들은 안녕히계세요, 굿바이, 사요나라 등을 연신 말했다...^^<br />
                  나는 막차 끊기기 직전에 간신히 차를 잡았고.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">마치며</h3>
                <p className="mb-4">
                  오면서 마뀌를 살펴봤는데 일본인들의 자료정리란 정말 놀라울 따름이고..<br />
                  마뀌를 베껴먹은 모 잡지에는 다시한번 실망을 했다.<br />
                  그나마 철저하게 베끼지도 못했지만 말이다...-_-<br />
                  쪽팔려서라도 다음에는 K상에게 뮤지컬박스를 보내야겠다.
                </p>
                <p className="mb-4">
                  어설프기 짝이 없었음에도 불구하고...<br />
                  이방인과의 대화는 무척이나 즐거웠으며 나를 지적으로 자극했고 생산적이었다.<br />
                  언젠가 막연히 생각했던...<br />
                  코스모폴리탄으로 살아야겠다는 생각을 다시한번 하게 되었는데...<br />
                  이렇게 매일 야근만 하면 영어고 일어고 암것두 못하는데...T_T<br />
                  라고 핑계를 대고있는 나를 보니 슬퍼진다.
                </p>
                <p className="mb-4 text-right italic">
                  오늘 교환한 슬랩 해피Slapp Happy의 2000년 일본실황을 들으며.
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
