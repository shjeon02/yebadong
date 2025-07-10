"use client";
import Link from "next/link";

export default function DevilDollReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Devil Doll</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Dark Progressive, Avant-garde</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">이탈리아</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">리더</h3>
              <p className="text-gray-700">Mr. Doctor</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">레이블</h3>
              <p className="text-gray-700">Hurdy-Gurdy Records</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">주요 앨범</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-400 pl-4">
              <h3 className="font-semibold text-lg">The Girl Who Was Death</h3>
              <p className="text-gray-600">데뷔 앨범</p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-lg">Eliogabalus</h3>
              <p className="text-gray-600">2집 앨범</p>
            </div>
            <div className="border-l-4 border-black pl-4">
              <h3 className="font-semibold text-lg">Sacrilegium</h3>
              <p className="text-gray-600">3집 앨범 (58분 대곡)</p>
            </div>
            <div className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-semibold text-lg">Dies Irae</h3>
              <p className="text-gray-600">4집 앨범</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 어둡고 극적인 분위기</p>
            <p>• Peter Hammill의 영향을 받은 보컬 스타일</p>
            <p>• 클래식, 오페라, 록의 융합</p>
            <p>• 그레고리안 성가와 효과음 사용</p>
            <p>• 장편 구성의 컨셉추얼 작품</p>
            <p>• 팬클럽 한정판 시리얼 넘버 발매</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-8">
            {/* Fish 리뷰 */}
            <div className="border-l-4 border-red-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Fish (신인철)</h3>
                <span className="text-sm text-gray-500">icshin@chiak.kaist.ac.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  Devil Doll에 대해서...
                  잘 아시다시피 Devil Doll은 Fish와 더불어 열렬한 Peter Hammill의 추종자인
                  Mr. Doctor가 이끄는 신세대 Italian Prog team입니다.. Mr. Doctor의 쥐어짜는, 저
                  의 생각으론 좀 가식적인 목소리를 바탕으로 구상음악, Rock beat들이 섞인 
                  sound를 들려주는데 좀 overrated된 면이 없잖아 있어요..
                </p>

                <p>
                  _The Girl Who was Death_는 다른 앨범들에 비해 좀 떨어지고, _Eliogablus_나 
                  _Sacrilegium_등으로 시작하시는게 좋을듯해요.. 저는 처음 _Sacrilegium_을 듣
                  고 "이건 정말 Rock은 아니군..."하는 생각을 했어요.. 고의적으로 넣은 몇분이 
                  넘는 공백, Peter Hammill의 후반기 solo album들을 생각나게하는 acoustic 배경
                  으로 짜내어지는 Mr. Doctor의 음산한 vocal, 그리구 적절하게 잘 어울리는 
                  Gregorian Chant식의 chorus(Enigma가 사용하였던...), 갖가지 Effect등이 섞여있고 
                  중간중간 Marillion style의, (IMHO) rock 연주가 나오곤 하죠.
                </p>

                <p>
                  이 _Sacrilegium_에 필요없다싶은 효과음을 잘라버리고 그야말로 _음악_을 더 집어넣은 앨범이 
                  바로 _Sacriledge of Fatal Arms_ 입니다. 뭐 _Sacrilegium_을 가지고 계시면 Fatal 
                  arms까지 사실 필요는 없는것 같아요. 그리고 CD나 LP마다 fan club limited edition이라고 serial number를 붙여 비싼값의 판매를 합리화시키는데 저의 생각으
                  로는 유치한 상술이니 속지마세요.. 세상에 계속 찍어내는 limited edition이 어
                  디있나요.. :-)
                </p>
              </div>
            </div>

            {/* 3M 리뷰 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">3M</h3>
                <span className="text-sm text-gray-500">ecokis@plaza.snu.ac.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>현재 느낌은 다음과 같습니다.</p>
                <ul className="list-disc list-inside">
                  <li>The Girl Who...Was Death &lt;good&gt;</li>
                  <li>Eliogabalus &lt;overall good&gt;</li>
                  <li>Sacrilegium &lt;낮은 방향으로 느낌 이동중&gt;</li>
                  <li>Dies Irae &lt;very good&gt;</li>
                </ul>

                <p>
                  아트락지 등을 통해 상대적으로 "Sacrilegium"이 조명을 많이 받아왔지만, 개인적
                  생각으론 최근작 "Dies Irae"나 2집 "Eliogabalus"부터 시작하는 것이 좋을
                  듯합니다.
                </p>

                <p>
                  반복 청취를 통해 점점 좋아지는 스타일들입니다. 특히 "Eliogabalus"는 mixing이
                  대단히 잘된 음반이므로 earphone을 사용하여 감상하시면 더욱 빨리 빠져들 수
                  있습니다. 노래하지 않으면서 노래부르는 Devil Doll의 훌륭한 작곡, 편곡들이 돋보입니다.
                </p>

                <p>
                  some symphonic, some metal, some carnival, some scream, some avantgarde, some
                  opera, some salon, some horror....dark but hopeful...in my opinion.
                </p>
              </div>
            </div>

            {/* 윤종대 리뷰 */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">윤종대</h3>
                <span className="text-sm text-gray-500">baxl@lycos.co.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  napster에서 devil doll을 검색해보면 radiskull & devil doll이란 이름으로
                  몇 개의 곡이 나옵니다. 자세히 들어보진 않았지만 프로그의 그 '악마의
                  돌떵거리'하고는 엄연한 차이를 보이는것 같기도 하고요...
                </p>

                <p>
                  저도 무지 '데빌돌'을 좋아는 하는데 딴 분들은 어떤 앨범을 가장
                  좋아하는지 궁금합니다. 전 개인적으로 1집을 좋아하는데... 특히 그 스래쉬적인 리프
                  말입니다. 제일 강력하지 않습니까? 그리고, 전부 그렇긴 합니다만 이태리판 허디가디 
                  레코드 있잖아요. 그거 doll을 위한 doctor의 개인 레이블 맞지요?
                </p>

                <p>
                  '아무리 아무리 생각해도 lacremosa는 'doll'에 비하면 새발의 피라는 인상을
                  지울수가 없습니다.'
                </p>
              </div>
            </div>

            {/* 신재훈 리뷰 */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">신재훈</h3>
                <span className="text-sm text-gray-500">rat2000@yplee.co.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  저도 "사악한 인형"의 팬인데요...radiskull & devil doll이란 이름으로 활동했다는
                  것은 금시초문이네요...
                </p>

                <p>
                  저도 그들의 앨범은 모두 들어보았지만 정작 Live는 들어보지 못했습니다. 혹시
                  그들의 실황 음원을 가지고 계신 분이 있으시면 저도 부탁드립니다.
                </p>

                <p>
                  저는 개인적으로 그들 최고의 작품으로서 3rd 앨범(Sacrillegium)을 꼽고 싶습니다.
                  그들 음악의 결정체인 것 같아요.... 1st 앨범도 좋죠...특히 마지막 부분에서의 바이얼린 연주는 압권 또 압권이죠...
                  2nd 앨범은 제가 가장 처음 접한 앨범이었는데요....아마 그들의 앨범 중에서 가장
                  떨어지는 앨범이 아닌가 생각됩니다.
                </p>

                <p>
                  그리고 4th 앨범도 저의 기대에도 다소 못 미쳤다는 생각이 드네요...아마
                  Mr.doctor의 inspiration이 거의 바닥이 난 것이 아닌가 하는 생각도 좀 들구....
                </p>
              </div>
            </div>

            {/* 정기욱 직접 체험기 */}
            <div className="border-l-4 border-pink-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">정기욱 - 직접 가 본 DEVIL DOLL</h3>
                <span className="text-sm text-gray-500">mezquita, 93.1</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  작년 8월 이탈리아 베니스의 여름은 유난히 더웠다. 섭씨 40도가 넘는다
                  는 가이드 선생님의 말씀이 더욱 힘겹게 느껴졌다.
                </p>

                <p>
                  이탈리아 베니스! 내가 DEVIL DOLL의 Mr.Doctor를 알은 이후 나에게는 
                  소중한 이름이 되었고 이번 유럽여행의 최고 가보고 싶은 곳이 되었다.
                  일행과 떨어져 나와 함께 같이 간 구형은 CD 자켓의 한 구석에 
                  나온 산 마르코 5499를 찾기 시작했다.
                </p>

                <p>
                  다행히 일행과 헤어진 곳이 바로 산 마르코 광장이어서 찾기는 쉬울 것 같았다. 
                  우리는 산 마르코 광장에서 항구 맞은편 골목으로 들어갔다. 유럽 대부분 나라들의 골목이 그러하듯 굉장히 좁은 골목이다.
                </p>

                <p>
                  조금 더 들어가니 Caputo(Negozio Caputo Merceria Capitello 4943 
                  tel. 5236836-5223661)이라는 레코드점이 있었다. 이미 의상실, 
                  가전제품파는 곳등을 들러 Hurdy-Gurdy Record를 물어보았으나 대답은 한결 같았다.
                  그들은 그 이름조차 처음 들어본다는 것이다.
                </p>

                <p>
                  혹시나 하는 심정으로 물어본 주인의 얼굴이 갑자기 굳어지더니
                  자기가 안다는 것이었다... 희망의 빛이 보이기 시작했다.
                </p>

                <p>
                  이윽고 나갔던 아저씨가 턱수염이 난 눈큰 아저씨를 데리고 들어왔다. 자기
                  Fabris라고 하며 Hurdy-Gurdy 레코드 관계자라고 했다.
                </p>

                <p>
                  성시완씨의 이름을 대자 그는 아주 반가운 얼굴이 되었고 현재 1300명 정
                  도가 데블 돌 팬 클럽에 가입되어 있다고 했다. 자신은 데블 돌의 1집인 
                  "The Girl Who Was Death"의 자켓을 디자인했다면서 자랑스럽게 이야기했다.
                </p>

                <p>
                  이미 성시완씨가 이미 1,2,3집의 마스터 테입을 가지고 갔다고 했다.
                  3집 "SACRILEGIUM"이 이미 출반되었으며 가격은 25달러이고 데블 돌 펜클
                  럽에 가입하는 동시에 2집 펜 클럽 버전을 준다고 (역시 25달러) 한다.
                  졸지에 50달러를 털리고 더 많은 얘기를 나누고 우리는 헤어졌다.
                </p>

                <p>
                  지금도 그의 전화번호가 적힌 종이쪽지가 나에겐 좋은 추억으로 다가온다.
                </p>
              </div>
            </div>

            {/* 이종헌 리뷰 */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">이종헌 - Sacrilegium 상세 리뷰</h3>
                <span className="text-sm text-gray-500">frost@hitel.net, 93.3</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  이틀 전, 저는 시완에서 수입을 한 데빌돌의 3집앨범(CD)
                  Sacrilegium을 구입해서 들어볼 수가 있었습니다.
                </p>

                <p>
                  먼저 전, 이들의 독특한 자켓사진부터가 흥미로웠습니다.
                  자켓 앞면 그림은 오래된 낡은 의자인데,
                  이 의자는 무엇인가 이상합니다. 아무도 앉아 있지
                  않은데 팔걸이에는 손이 있습니다. 보이지 않는 존재
                  가 앉아있는 것을 암시하고 있는 듯 합니다.
                </p>

                <p>
                  뒷면 커버는, 고전적인 둥근 문양 안에
                  오래된 낡은 흑백 사진이 들어있는 형태인데,
                  그 사진은, 비슷한 분위기를 풍기는,
                  생긴 모습마저 흡사한,
                  두명의 여인이 애처롭고 애절한 표정으로 키스를 나누
                  고 있는 모습을 담고있었습니다.
                  이러한 묘사는 반종교적이라 할 수 있을 것입니다.
                </p>

                <p>
                  Sacrilegium 첫부분은 웅장한 파이프 오르간연주로 
                  시작됩니다. 이 연주는 베네치아의 한교회의 파이프오르간 연주자인
                  Michel Fantini Jesurum이 연주했다고 합니다.
                  그레고리안 성가의 분위기가 나는 이 시작부분을 듣고 있노라니
                  엑소시스트와 오멘을 자연스럽게 연상할 수 있었습니다.
                </p>

                <p>
                  남성 여성 합창으로 이 인트로는 3분 10초간 계속되다가
                  이제 드디어 Mr.Doctor - 바로 악마 그 자체, 그의 속삭
                  이고 울부짖으며 절규하는 보컬이 시작됩니다.
                  마치 책을 읽는 듯하고 주문을 외는 듯합니다.
                </p>

                <p>
                  그런데 47:04초 때부터 그 정적을 깬것은 나약하고 약간 더듬는 듯한 늙은이의 목소리였습니다. 바로 신부의 목소리
                  였습니다. 무덤에서 시신을 묻으며 신부가 마지막으로
                  성경을 읽어주고 마지막으로 가는 사람에게 축복같은 것을
                  해주는 장면이었습니다.
                </p>

                <p>
                  까마귀 소리가 음침하게 멀리서 울려퍼지고 관 위에 흙을 덮는
                  소리가 정말로 소름이 끼칩니다. 내가 묻히고 있는 것이 아닐
                  까 하는 착각이 들정도였습니다.
                </p>

                <p>
                  그리고 서서히 심장 박동 소리가 잦아드는데, 그때 소리의 검은정적에서 갑자기 굵고 거대한,
                  쇳소리의 목소리가 나타나는데, 그것은 바로 악마의 목소리
                  였습니다.
                </p>

                <p>
                  데빌돌의 이 앨범은 그런데 하나의 완벽한 컨셉트 음반입니다.
                  음악이 한곡도 끊어지지 않고 연속적으로 이어져 있습니다.
                  그리고 CD 내에서도 구획이 나누어있지 않습니다. 그냥 한곡
                  입니다. 60분 그 전체가, 어느 하나 1초도 아깝지 않을 정도로 훌륭한
                  음악이고 앨범입니다. 기승전결이 뚜렷하게 나누어져 있는
                  완벽 그 자체의 서사시였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/d" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 