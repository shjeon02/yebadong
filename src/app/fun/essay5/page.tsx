import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Essay 5: Canterbury Family - 캔터베리 패밀리 | Yebadong',
  description: '성시완이 84년에 발간한 UNDERGROUND PAPYRUS ZERO에 실렸던 Canterbury Family에 대한 상세한 설명',
};

export default function Essay5Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">Canterbury Family</h1>
            <p className="text-lg text-muted">캔터베리 가족 - 영국 프로그레시브 록의 성지</p>
          </div>

          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <div className="mb-6">
              <p className="text-sm text-muted mb-4">[성시완, 84 : 올린이 단승배, dan999]</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-sm">
                  우선 이글은 84년 말에 성시완씨가 사비로 발간한 UNDERGROUND PAPYRUS ZERO에 실렸던 글입니다.<br />
                  물론 이 책을 가지고 계신분들도 계시겠지만 없으신분들이 더 많으리라 봅니다.<br />
                  그리고 여러분께 참고가 되고자 거기에 실린 글을 이렇게 무례하게 그대로 올려드립니다.<br />
                  회우들에게 도움이 이 될 수 있고자 합니다.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">CANTERBURY FAMILY</h3>
                <p className="mb-4">
                  런던으로부터 100㎞ 떨어진 영국 남동부에 자리한 Kent주의 도시 Canterbury는 영국 국교인 Anglican의 총 본산지이며 인구 약 3만의 오래된 도시이다. 
                  또한, 사원의 역사가 매우 깊은 도시이며 Chaucer의 "The Canterbury Tales"라는 중세 운문 설화집으로도 너무나 유명한 도시이다. 
                  여기에서는 이러한 Canterbury가 Rock계에서도 얼마나 중요한 위치를 차지하고 있는지, 또한 Canterbury출신의 그룹들은 어떠한 그룹이 있는지 밝히고자 한다.
                </p>
                <p className="mb-4">
                  1960년대 초반 Fashion Model, 미술학도, 시인, 가수로 활약해 왔던 Lady June은 Canterbury에 아파트를 경영하고 있었다. 
                  그녀의 아파트에는 주로 Musician들의 출입이 많았는데 당시 그녀의 아파트에 기거했던 유명한 Artist로는 Kevin Ayers, 
                  그리고 Archie Leggertt(Kevin Ayers와 John Cale앨범에 참가했던 Bass주자), 댄서인 Stacia(Hawkwind의 3기에서 10기까지 정식멤버로 참가한 Dancer, 결혼후 탈퇴)가 있다.
                </p>
                <p className="mb-4">
                  후에 Lady June은 Kevin Ayers와 Daevid Allen의 음악성에 매료되어 Soft Machine이 명성을 얻을때 까지 악기구입등의 커다란 경제적인 도움을 주었다. 
                  또한, Robert Wyatt의 어머니가 운영하는 Georgian Mansion (15개의 방을 지닌 맨션)은 Lady-June의 아파트에 못지않게 Musician들의 따뜻한 보금자리가 되어 주었다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Simon Langton School의 전위적 환경</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold mb-2">NME 1975년 1월 25일자 Ian Macdonald(Alto Sax.주자)의 조사 내용:</p>
                  <blockquote className="text-sm italic">
                    "1961년 당시 Canterbury의 독자적인 사설학교 Simon Langton School은 지방출신의 총명하고 예술에 뛰어난 자제를 위한 학교로서 자기표현력의 향상을 위해 자유분망한 분위기를 조성시켰던 학교였으며 10대 전위 에술가들의 온상이었다."
                  </blockquote>
                </div>
                <p className="mb-4">
                  당시 Mike Ratledge는 Oxford에 진학하려고 했었고 같은 반 친구인 Brian Hopper와 함께 Hindemith's Organ Sonatas를 각색, Piano와 Clarinet을 위한 곡으로 편곡해서 연주하고 있었다. 
                  그리고, 안경낀 면학가 Hugh Hopper는 조숙한 과학학도로 그는 형을 따라서 Saxophone과 Guitar를 연주하고 있었다.(그가 후에 Bass 주자가 된다는 것은 당시로서는 아무도 예측하지 못했다.)
                </p>
                <p className="mb-4">
                  같은 시기에 다른 Class에서는 그 당시 나이 16살의 화가지망생이며 여러종류의 악기를 잠깐 손 대었던 Robert Wyatt이 있었다. 
                  그는 학교에서 Hugh Hopper를 뒤늦게 만나 절친한 친구가 되었으며 함께 음악을 즐기게 된다. 
                  그들보다 한살 어린 Dave Sinclair는 피아노 레슨을 받고 있었는데 그는 Robert Wyatt의 모친이 소유하고 있는 맨션에서 Mingus, Coleman, Monk, Taylor등의 새로운 Jazz앨범을 듣고 연주했으며 
                  게다가 Luigi Nono, Stockhausen등의 전위 음악가들의 음악을 즐겼다. (화가로선 Mark Rothko, Jackson Pollock, 작가로선 Burroughs, The Beats등의 작품을 즐겼다.)
                </p>
                <p className="mb-4">
                  Robert Wyatt은 학교 생활에 더 이상 구속받고 싶지 않아 1962년 초에 Spain으로 건너가 거기서 그는 드러머인 George Niedort를 만났다. 
                  George Niedort는 그에게 드럼을 가르켰으며, 호주 출신의 환각적인 것을 추구하는 Artist, Daevid Allen(당시 그의 나이 21세)을 소개시켜 주었다. 
                  그후 Robert Wyatt은 Canterbury로 되돌아와서 The Wilde Flowers를 결성하게 된다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">THE WILDE FLOWERS</h3>
                <p className="mb-4">
                  The Wilde Flowers의 첫번째 Stage는 The Bear & Key Hotel이었다. 그들은 거기서 Chuck Berry와 Beatles의 곡 등을 연주했다. 
                  그들의 첫번째 Recording은 Kent주 Broad Stairs에 있는 Private Studio에서 이루어졌는데 거기서 1965년 초까지 Demo Tape을 녹음했다.
                </p>
                <p className="mb-4">
                  그러나, Richard Sinclair는 대학 진학을 위해 1965년 그룹을 떠났다.(그는 후에 Caravan을 결성했다.) 
                  Kevin Ayers는 Canterbury로 건너가서 Robert Wyatt의 음악친구들과 함께 The Wilde Flowers에 참가했다. 
                  The Wilde Flowers 제 1기는 1965년 7월 까지 이어졌다.
                </p>
                <p className="mb-4">
                  Graham flight 대신 Kevin Ayers(Vocal)가 잠시 참가했다가 탈퇴했으며 Richard Sinclair 대신 Pye Hastings(Guitar)가 참가했고 
                  Richard Coughlan을 드러머로 받아들여 Robert Wyatt은 드럼스틱을 놓고 Lead Vocalist로 나섬으로서 제 2의 The Wilde Flowes가 형성됐다.
                </p>
                <p className="mb-4">
                  그러나, 다음 해인 1966년 Robert Wyatt이 Soft Machine의 결성을 위해 그룹을 탈퇴하자 Pye Hastings는 Vocal까지 떠맡아야 했으며 
                  Robert Wyatt이 떠난 상태에서 제 3기의 4인조 편성의 The Wilde Flowers가 출범했다. 
                  (당시 음악 지향이 Modern Jazz에서 Soul Music으로 전환했으며 대중적인 Sound로 변모했다.)
                </p>
                <p className="mb-4">
                  곧, Hugh Hopper가 탈퇴했으며 그 대신 Dave Lawrence가 참가했고 Richard Sinclair의 사춘인 David Sinclair(Keyboards)가 참가해 5인조로 재편성된 
                  The Wilde Flowers 제 4기 멤버들이 출발했다. 그러나 출발한지 4개월만에 Dave Lawrence와 Brian Hopper가 그룹을 떠났고 
                  나머지 3명의 멤버가 Richard Sinclair와 Caravan을 결성함으로서 Canterbury의 전설적인 그룹 The Wilde Flowers의 역사는 막을 내리고 만다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">SOFT MACHINE</h3>
                <p className="mb-4">
                  Oxford 대학에서 철학과 심리학을 공부하던 Mike Ratledge는 공부에 싫증을 느끼고 다시 Canterbury로 되돌아 왔으며 
                  제 1기 Wilde Flowers를 탈퇴했던 Kevin Ayers와 그리고 제2기 Wilde Flowers를 탈퇴한 Robert Wyatt, 
                  그리고 스페인 프랑스를 거쳐 영국으로 온 Daevid Allen과 함께 새로운 그룹을 결성했다.
                </p>
                <p className="mb-4">
                  그들은 그룹 이름의 선택때문에 고민하다가 Mike Ratledge의견으로 William Burroughs의 소설에서 따온 Soft Machine을 그룹명으로 
                  1966년 말 영국의 Underground 계의 등용문이라고 할 수 있는 UFO Club(London의 Tottenham의 막다른 골목)과 Round House에서 공연을 자주 가지면서 출범했다.
                </p>
                <p className="mb-4">
                  그리고, 초창기에 Soft Machine의 유동 멤버로 참가한 Guitarist, Larry Nolan은 몇몇 공연에만 참가한 후, 곧 그룹을 떠났다. 
                  (그는 캘리포니아 출신으로 David Lindely와 함게 The Smog City Trestle Hanger라는 1960년대 초반의 String Band에 참가 했었고, 
                  그후 San Francisco에서 새로운 그룹을 결성했다.)
                </p>
                <p className="mb-4">
                  Soft Machine의 첫번째 녹음은 단지 Single 한 장에 불과했다. 
                  &lt;Love Makes Sweet Music/Feelin' Reelin' Squealin'&gt;(Polydor 56-151, 1967년 2월)의 두 곡을 담고 있는 그들의 첫번째 Single은 
                  Chas Chandler 제작의 상업성을 띤곡(Side A)과 Kim Fowely가 제작한 Side A와 전혀 색다른 곡 (Side B)으로 제작됐다. 
                  그러나, 이 싱글은 많은 선전광고에도 불구하고 실패했다.
                </p>
                <p className="mb-4">
                  Soft Machine은 그후 프랑스 여행을 하게 되었는데 St. Tropez에서 열린 Alan Zion의 피카소 연극 "Desire Attrappe Par La Queue"에서 배경음악을 담당, 
                  그들은 커다란 명성을 얻는 행운의 그룹이 되었다. 그러나, Daevid Allen은 영국으로 되돌아 가지않고 프랑스에 게속 머무를 것을 밝힘으로서 
                  자연히 그룹을 탈퇴하게 됐으며 후에 그는 Gong을 결성한다.
                </p>
                <p className="mb-4">
                  3인조가 되어버린 제 2기의 Soft Machine은 Jimi Hendrix의 도움으로 간신히 미국공연을 끝마치고 New York에 머물면서 4일동안 데뷰 앨범을 제작했다. 
                  (Producer는 New York의 Tom Wilson) 그후, Daevid Allen의 후임으로 Andy Summer가 잠시 참가한 후 탈퇴를 했으며 
                  재정비된 제 3기의 Soft Machine은 데뷰앨범 'Soft Machine'을 발표했다.
                </p>
                <p className="mb-4">
                  그러나, Kevin Ayers는 그룹에 회의를 느끼면서 자신의 Bass 기타를 팔아버리고 프랑스 소녀와 함께 Ibiza에 머물면서 Soft Machine의 시절을 완전히 청산해 버린다. 
                  (그후 Kevin Ayers는 Solo 활동과 함께 자신의 그룹 The Whole World를 결성한다.)
                </p>
                <p className="mb-4">
                  Soft Machine은 Kevin Ayers의 후임으로 Wilde Flowers의 창단부터 제 3기까지 활약했던 Hugh Hopper를 받아들여 그룹을 제정비, 제 4기의 Soft Machine으로 다시 출발했다. 
                  재편성된 제 4기 Soft Machine은 곧 두번째 앨범인「Soft Machine VOL.2」를 발간했는데 이때 제 2기부터 제 4기까지(3년간) 줄곧 3인조로 활약해 오던 
                  Soft Machine은 멤버확장 필요를 느끼고 Keith Tippert Group 출신의 Jazz Musician들인 Elton Dan과 Make Charig, Nick Evans,그리고 
                  Lynn Dodson(Keep Hartley Band Horn Section)을 받아들여 제 5기의 7인조 Soft Machine을 재편성했다.(그들은 순회 공연으로 많은 경험을 쌓았다.)
                </p>
                <p className="mb-4">
                  그러나, 증원된 5기 멤버들은 단 한 장의 앨범도 남기지 못했고 3명의 멤버(Lyn Dodson, Nick Evans, Mark Charig)가 탈퇴한 후에야 비로소 Third 앨범을 발표했다. 
                  또한, 창단 멤버였던 Robert Wyatt마저 네번째 앨범「Fourth」를 발표하기 직전 그룹을 떠나므로서 Original Member는 오직 Mike Retledge만 남게 되었다.
                  (Robert Wyatt은 Matching Mole을 결성한다.) 그후 1975년에 들어오면서 마지막으로 남아 있었던 창단 멤버 Mike Ratledge마저 탈퇴함으로서 
                  사실상의 Soft Machine은 사라지고 신생 Soft Machine(제14기)이 탄생을 보게 된다.(그후 Soft Machine의 이야기는 생략한다.)
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">CARAVAN</h3>
                <p className="mb-4">
                  Caravan은 1968년 1월, Wilde Flowers가 해산된지 7개월 만에 결성됐다. 그들은 John Coltrane, Duane Eddy, James Brown등의 음악을 바탕으로 
                  인도철학의 영향을 가미하면서 새로운 세계의 음악 활동을 전개해 나갔다.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">창단 멤버</h4>
                  <ul className="text-sm space-y-2">
                    <li><strong>Richard Sinclair</strong> (1948년 6월 6일, Canterbury 출생) - 공업디자인 전공, 신선한 공기와 국토, 그리고 자유를 좋아함</li>
                    <li><strong>David Sinclair</strong> (1947년 11월 24일 생) - 그룹의 리더격, 작곡자, 건강식품 제창주의자, Organ 구입을 위해 도로 공사 인부로 일함</li>
                    <li><strong>Pye Hastings</strong> (1947년 1월 21일 생, Scotland 태생) - 보험 회사원, 방랑 생활 경험, 그룹 참가 이전 Spain 거주</li>
                    <li><strong>Richard Coughlan</strong> (1947년 9월 2일 생) - 치공 기사, 음악가의 길을 꿈꿔왔던 사람</li>
                  </ul>
                </div>
                <p className="mb-4">
                  그들은 Whistable에 있는 저택에서 6개월간의 Show Business 세계를 거쳐 아마츄어 그룹에서 프로 그룹으로 탈바꿈했으며, 
                  그후 6주동안 런던으로 건너가 있었으나 고향 Canterbury에 향수를 느끼고 더시 Canterbury로 돌아왔다.
                </p>
                <p className="mb-4">
                  1968년 여름에는 MGM과 Verve 두 레코드 회사와 계약을 맺고 10월에 대망의 데뷰앨범을 발표했다. 
                  1969년 MGM 레코드 회사는 런던 레코드 업계의 경영진들에게 Caravan을 소개했으며 그들은 당시 Blues Band의 범람속에 빛나는 매우 독특한 그룹으로 인식되어졌다.
                </p>
                <p className="mb-4">
                  그들은 싱글&lt;If I Could Do It All Over Again&gt;의 성공후 동명 타이틀의 두번째 앨범을 발표했고 세번째 앨범 「In The Land Of The Grey & Pink」를 발표했다. 
                  그러나 순탄한 항해를 게속하던 Caravan은 David Sinclair가 Robert Wyatt이 결성한 Matching Mole에 가입하자 한때 위기를 맞이하였으며 
                  그의 후임으로 Steve Miller(미국 텍사스 출신의 Steve Miller Band의 Steve Miller가 아닌 영국 Keyboard 주자)가 가입됐다.
                </p>
                <p className="mb-4">
                  1972년 5월, 그들은 네번째 앨범「Waterloo Lily」를 발표했으나 Steve Miller가 Lol Coxhill(Kevin Ayers의 그룹에 Saxophone 주자로 참가했던 거물)과 
                  Solo Project를 만들므로서 탈퇴, 그의 후임으로 Dereck Austin을 받아 들였다. 또한 Art School의 학생이었던 Geoff Richardson이 Violin 주자로 참가했다.
                </p>
                <p className="mb-4">
                  그러나, Derek Austin은 앨범 발표가 없었던 Caravan의 제 3기 멤버로 잠시 참가한 후, Stuart Evans와 함게 그룹을 탈퇴했고 
                  그들 대신 Spreadeagle 출신의 John G. Perry(British Rock계의 거물 Bass 주자)가 참가해서 제 4기의 Caravan은 두 장의 앨범을 발료했으며 
                  여러 차례에 걸쳐 순회 공연을 가졌다.
                </p>
                <p className="mb-4">
                  Caravan은 게속해서 여러 차례의 멤버 교체를 거쳐 현재에 달하고 있는데 1982년 2월, 창단 멤버였던 Richard Sinclair가 재가입 되므로서 Caravan은 재편성되었다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">STEVE HILLAGE</h3>
                <p className="mb-4">
                  Steve Hillage는 Dave Stewart와 런던에서 만났다. 그들은 Uriel이라는 4인조 편성의 그룹을 결성해서 활동을 개시했으나 
                  Steve Hillage는 Canterbury에 있는 대학에 진학하기 위해 그룹을 떠났다.
                </p>
                <p className="mb-4">
                  1968년 6월, Dave Stewart는 Uriel의 멤버였던 Mont Campbell(Bass)과 Clive Brooks(Drums)와 함께 Egg라는 그룹을 조직, 
                  신인 그룹 발굴에 매우 의욕적인 Decca로 부터 Single을 발표(1968년)했다. 
                  (Rock 악기로 Classic을 연주했던 그들은 수준은 떨어 졌으나 데뷰 앨범「Egg」를 Nova와 Dream으로 부터 발매했었다.
                </p>
                <p className="mb-4">
                  대학에 진학했던 Steve Hillage는 Canterbury Tree를 형성하고 있는 거물 Artist를 만나게 됐고 그들과 교류를 하면서 자연히 음악에만 몰두하게 됐다. 
                  그후, 그는 학교를 떠나 런던으로 되돌아오자마자 Dave Stewart와 함께 그룹 Khan을 조직했다.(발표된 그들의 앨범은 사실상 Canterbury출신의 Artist들에게 크게 영향을 받았음을 여실히 증명해 주었다.)
                </p>
                <p className="mb-4">
                  그러나, Dave Stewart가 Richard, David Sinclair에 의해 결성된 Hatfield & The North에 참가하자 상업적으로 성공 못한 Khan은 해산되었고 
                  Steve Hillage는 Kevin Ayers의 그룹에 참가했다. Kevin Ayers의 그룹에 가입한 Steve Hillage는 프랑스 공연 때, Gong의 멤버들을 만나게 됐으며 
                  그는 Gong과 계속 접촉을 갖고 Session을 해 주며 결국 멤버가 되었다.
                </p>
                <p className="mb-4">
                  Steve Hillage가 참가했을 당시 Gong은 Daevid Allen, Gillie Smyth, Tim Blake, Mike Howlett, Mireille Bauer등의 멤버를 지닌 
                  Gong 역사상 가장 강한 팀웍을 가지고 있을 때 였다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">결론</h3>
                <p className="mb-4">
                  지금까지 Canterbury Family에 관련된 여러 Musician, 그리고 그룹을 소개해 보았다. 
                  그들은 1960년대 말 부터 지금에 이르기까지 영국 Rock계에 커다란 영향을 주었으며 앞으로도 그러하리라는 것에 대해선 의심의 여지가 없다.
                </p>
                <p className="mb-4">
                  1960년대 초.중반 영국의 Rock을 이끌어 온것은 Liverpool 출신이었지만 1960년 말 부터는 역시 Canterbury Family가 보다 정교해진 Underground, 
                  그리고 Progressive 계열의 Sound로서 British Rock을 이끌어 왔음을 우리는 위 글을 통해서 알 수 있었다.
                </p>
                <p className="mb-4">
                  만약 우리가 영국 Rock을 이해 하려 한다면(특히, Underground나 Progressive) 먼저 Canterbury Family의 테두리를 이해하는 것이 바람직 할 것이다.
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
