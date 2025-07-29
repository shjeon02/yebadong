import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pierrot Lunaire | Yebadong',
  description: 'Pierrot Lunaire 앨범 리뷰 - 이탈리안 아방가르드 록의 최상의 걸작',
};

export default function pierrotLunaireePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pierrot Lunaire
            </h1>
            <p className="text-purple-300 text-lg">이탈리안 아방가르드 록의 최상의 걸작</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pierrot Lunaire ***
                </h3>
                
                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-sm text-gray-400 mb-4">
                    [정철, zepelin@popsmail.com]
                  </p>
                  <p className="text-sm leading-relaxed">
                    저는 <strong>Gudrun보다는 이들의 데뷔작을 더 좋게들었습니다</strong>.<br/>
                    이들의 데뷔작을 들었을 때의 느낌은 <em>Ho(e)lderin의 Traum을 들었을 때의 느낌과
                    비슷한거 같아요</em>. <strong className="text-yellow-300">묘한 엑조티즘이 흐르는 따듯한 느낌</strong>, 그런거였습니다.<br/>
                    시완에서 LP로도 발매해서 좋았지요.<br/>
                    <em>시완에서 이정도 수준의 음반들을 발매할 때가 음악듣기엔 제일 좋았던거 같습니다</em>.<br/>
                    사실 <strong>Gudrun은 조금 유치한 면도 많아요...^^;</strong>
                  </p>
                </div>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <p className="text-sm text-gray-400 mb-4">
                    [유영재, espiritu@hitel.net, 94.12]
                  </p>
                  
                  <h4 className="text-lg font-bold text-purple-300 mb-3">17. Pierrot Lunaire ★★★</h4>
                  
                  <p className="text-sm leading-relaxed">
                    뛰어난 건반 주자인 <strong>Arturo Stalteri가 리드하는 이태리의 3인조 그룹</strong>. 모두 두장의
                    앨범을 발표했으며 이 앨범은 그중 첫번째 작품이다. 전체적으로 서정적인 멜로디에
                    다소 아방가르드한 요소를 혼합시킨 형태의 음악을 들려주고 있다. 앨범 앞부분에
                    좋은 곡들이 포진을 하고 있으며 뒷부분으로 갈수록 조금은 지루함을 느끼게 된다.
                    하지만 앞부분에 실린 트랙들을 개인적으로 너무 좋아하는지라, <em>앨범 전체적인
                    균형에 문제가 있음에도 불구하고 다소 높은 점수를 주게 되었다</em>. 라이센스 발매 예정.
                  </p>
                </div>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">18. Pierrot Lunaire -- Gudrun ★★★★☆</h4>
                  
                  <p className="text-sm leading-relaxed">
                    이들의 두번째인 동시에 마지막 앨범이 된 작품. 두번째 앨범의 라인업은 1집때와는
                    조금은 다른 라인업인데, <strong>기존의 남성 멤버 한명이 탈퇴하고 그 대신 새로이 여성
                    보컬리스트인 Jacqueline Darby가 참여</strong>하고 있다. <em>북구신화인 'Saga'를 주제로
                    삼았다</em>는 이 앨범에서 키보디스트인 <strong>Arturo Stalteri의 기량은 최고조에 달하고
                    있다</strong>는 느낌이며, <strong className="text-yellow-300">Jacqueline의 기묘한 보컬도 상당한 주목거리중의 하나</strong>이다.
                    <strong>명실공히 이탈리안 아방가르드 록의 최고작이라 할 만하다</strong>. 라이센스 발매 예정.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  PIERROT LUNAIRE - Gudrun 상세 리뷰
                </h4>

                <p className="text-sm text-gray-400 mb-4">
                  [유영재, espiritu@hitel.net, 95.01]
                </p>

                <p>
                  얼마전에 발간된 계간 아트록지 7호를 보았더니 라이센스로 발매될 앨범들의 광고가
                  맨 앞장에 있었다. IlVolo, Trip, P.F.M., Procession... 이러한 일련의 이탈리안 록
                  앨범들이 라이센스로 발매된다는 안내였다. 그런데 그 중에서 가장 본인의 눈에
                  띄는 것이 있었는데 바로 <strong>Pierrot Lunaire의 [ Gudrun ]</strong>이라는 작품이었다.
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">라이센스 발매에 대한 의구심</h4>
                  <p className="text-sm leading-relaxed">
                    나는 그 광고에 실린 앨범들이 라이센스로 발매된다는 것에는 어느 정도 수긍할 수
                    있었지만, 이 Pierrot Lunaire의 앨범을 보고서는 <strong>'글쎄...?'</strong> 하는 생각이 문득
                    들었다. 같은 지면에 실린 다른 이탈리안 록 작품들과는 <em>너무나도 판이한 스타일을
                    지닌 앨범</em>이기 때문이다. 솔직히 P.F.M.이나 Il Volo 등의 작품은 국내에서도 어느
                    정도 지명도도 있고 국내 매니아들의 입맛에 잘 맞아 떨어지는 심포닉 록 지향의
                    앨범들이라 어렴풋이나마 라이센스로 발매가 되리란걸 짐작은 하고 있었지만 Pierrot
                    Lunaire의 앨범, 그것도 1집이라면 모르지만 2집인 [ Gudrun ]이 국내 음반 시장에
                    선보인다는 것은 조금은 의외였다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  아방가르드 록의 모험
                </h4>

                <p>
                  왜냐하면 이 앨범은 국내 매니아들과는 아직은 그다지 친숙한 관계가
                  <strong>아닌 Avangarde 지향의 음반</strong>이기 때문이다. 얼핏 듣기로는 <em>Picchio Dal Pozzo의 라이
                  센스 음반도 국내 음악팬들로부터 외면을 당했다</em>는 소문이 있는데, 오기의 발동인지
                  뭔지는 몰라도 그러한 상황에서 이 앨범이 라이센스 발매된다는 것은 어찌보면
                  <strong>일종의 모험</strong>이란 생각까지 들기도 한다.
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">하지만 최고작!</h4>
                  <p className="text-sm leading-relaxed">
                    그러나 위에서 Picchio Dal Pozzo가 언급되었다고 해서 이들과 Pierrot Lunaire의 
                    [ Gudrun ]앨범을 같은 맥락에서 취급하면 곤란하다. <strong className="text-yellow-300">단언하건데, 이 작품은 
                    이탈리안 아방가르드 록의 최상의 걸작중 하나이기 때문이다</strong>. 
                    ( 그렇다고 Picchio Dal Pozzo가 꽝!!이라는 말은 절대 아님...)
                    어쩌면 이 앨범의 국내 발매는 필연적인 것인지도 모른다. 왜냐하면 수많은 이탈리안
                    록 작품들이 국내에서 발매되고 있는 상황에서 만약 이 앨범이 빠지게 된다면 그것은
                    <strong>크나큰 실수이자 이들에 대한 모독</strong>일 것이기 때문이다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  밴드 히스토리와 멤버 변화
                </h4>

                <p>
                  <strong>Pierrot Lunaire의 데뷰는 1974년</strong>으로 거슬러 올라간다. 당시의 멤버 구성은 그룹의
                  핵심인 <strong>건반주자 Arturo Stalteri</strong>와 기타, 베이스, 플룻의 <strong>Vincenzo Caporaletti</strong>,
                  시타, 기타, 만돌린등을 연주하며 보컬을 맡고 있는 <strong>Gaio Chiocchio</strong>의 3인조로
                  되어있었다.
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">데뷔 앨범 (1974)</h4>
                  <p className="text-sm leading-relaxed">
                    1974년에 IT 레코드사를 통해서 발매된 이들의 데뷰앨범은 <em>클래식을
                    바탕으로 일종의 아방가르드 음악과 서정적인 파퓰러 뮤직을 고루 융합한 복합적인
                    작품</em>이었다. 다른 이탈리안 록에서 느낄 수 있는 웅장함이나 서정적인 아름다움을
                    이 앨범에서는 쉽게 찾아 볼 수 없지만, <strong>나름데로 또다른 묘한 매력을 전해주는
                    뛰어난 앨범</strong>으로 기억되고 있다. 그 중에서도 <strong>' Lady Ligeia '</strong>에서 피아노 연주의
                    반복에 의한 단순미(?)나 <strong>' Raipure '</strong>에서의 부담없는 멜로디가 특히 강한 인상을
                    남겨 준다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  3년의 공백과 Jacqueline Darby의 등장
                </h4>

                <p>
                  데뷰 앨범을 발표한 후 다음 앨범을 내기까지 이들의 <strong>공백기간은 3년</strong>이나 되었다. 
                  1977년 이들의 두번째 앨범인 [ Gudrun ]이 발매되었을 때 사람들은
                  도데체 뭔 일이 있었길래 3년이나 기다리게 했나하고 앨범을 살펴보았을 것이다.
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">충격적인 멤버 변화</h4>
                  <p className="text-sm leading-relaxed">
                    아니나 다를까!!! 1집에서 기타와 베이스를 맡았던 <strong>Vincenzo는 어디로 갔는지 온데
                    간데 없고</strong> 그 대신에 웬 <strong className="text-yellow-300">귀신 같이 생긴 Jacqueline Darby</strong>라는 이름의 여성 싱어가
                    들어온 것이었다. 이 앨범 표지를 통해 볼 수 있는 이 여성의 사진은 첫눈에 보았을
                    때는 <em>"앗!! 괜찮네..?!"</em>하는 생각을 가지게 될 것이다. 하지만 몇번 더 자세히
                    살펴보자. <strong>매섭게 생긴 눈... 창백한 얼굴...시뻘건 입술...</strong> "...윽!! 웬 처녀
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 정철님과 유영재님의 Pierrot Lunaire 리뷰들입니다. Ho(e)lderin의 Traum과의 비교, 
                  "묘한 엑조티즘이 흐르는 따듯한 느낌", 그리고 Jacqueline Darby의 "귀신 같이 생긴" 
                  모습 묘사까지 90년대 리뷰의 생생하고 솔직한 표현들이 인상적입니다. 
                  "이탈리안 아방가르드 록의 최상의 걸작"이라는 극찬이 돋보입니다.
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