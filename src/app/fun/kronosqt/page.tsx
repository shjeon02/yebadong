import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kronos Quartet 예술의전당 1996 - Concert Review | Yebadong',
  description: 'Kronos Quartet 콘서트 리뷰 (1996년 5월 31일, 예술의전당)',
};

export default function KronosQtPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            크로노스 콰텟 공연을 보고 와서
          </h1>
          <div className="mb-4">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-lg text-gray-600">[Neo-Zao, 김남웅]</span>
          </div>
          <p className="text-base text-gray-600">1996년 현대음악주간 - 예술의전당</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">[크로노스 콰텟 공연 리뷰]</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  안녕하세요? 지난 목요일부터 회사에서 때아닌 휴일을 갖게 되어
                  이제서야 회사에 와서 예바동을 보니 별로 글이 없군요. 내일 
                  프로젝트 발표라서 오늘은 좀 한가하길래 아침부터 글을 써 볼
                  봤습니다. 써 놓고 보니 좀 기네요.
                </p>
                
                <p>
                  제 홈페이지에 사진이나 티켓그림과 함께 링크 해놓았으니 즐기시기 바랍니다.<br />
                  <a href="http://jean.iml.goldstar.co.kr/~zao/kronos/kronos.html" 
                     className="text-[#00aaaa] hover:underline">
                    http://jean.iml.goldstar.co.kr/~zao/kronos/kronos.html
                  </a>
                </p>
                
                <p>
                  참 그리고 부탁이 있는데요. 혹시 제가 예전에 존 맥클라프린 공연을
                  리뷰한 글을 가지고 계신 분 계세요? 평소에 정리하지 않는 습관 
                  때문에 글을 자꾸만 날려버리네요. 흑흑.. 도와주세요. 감사합니다.
                </p>
              </div>
            </div>

            {/* 1997 ISCM Context */}
            <div className="mb-12 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-purple-700 mb-4">1996 현대음악주간의 배경</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  1997년의 ISCM 음악제라는 빅 이벤트를 앞두고 있는 한국의 음악계는,
                  지난주에(5.28.6.1) '96 현대음악주간'이라는 일종의 페스티발 형식의 
                  음악제를 가졌습니다. 이 행사는 미국의 현대음악이라는 메인테마로
                  열렸는데 그 레퍼토어도 아론 코플랜드에서 존 존에 이르기까지 비교적 
                  광범위하게 미국의 현대음악계를 조명하는 내용이었습니다.
                </p>
                
                <p>
                  저는 지난 주 내내 열린 행사 중에 단 일회만을 참여하는 불운(?)을 
                  겪었는데 그 공연은 이 행사의 하이라이트라고 말할 수 있는 크로노스 
                  콰텟의 연주회였습니다. 크로노스 콰텟은 금요일과 토요일 각각 예술의
                  전당과 토탈미술관에서 공연을 가졌는데 제가 참석한 공연은 금요일의
                  예술의 전당 공연이었습니다.
                </p>
              </div>
            </div>

            {/* Pre-Concert Experience */}
            <div className="mb-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">공연 전 예술의 전당에서</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  금요일 마침 연구소가 쉬는 날이었고, 별 할 일도 없는지라 일찍감치 
                  점심때부터 예술의 전당에 갔습니다. 왜 이리 날씨가 내리 쪼는지
                  차 없는 인간의 오후란 이렇게 비참한 것인가를 절감했죠. 예의 한가람
                  미술과부터 들리고, 자료관으로 들어가 음악서적을 이 것, 저 것 뒤졌
                  는데 요즘 제가 관심을 가지고 있는 분야의 책들을 새롭게 인식하게 
                  되더군요.
                </p>
                
                <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-2">무대의 첫인상</h4>
                  <p className="text-sm">
                    그들의 무대는 일반적인 순수음악공연의 무대가 아니었습니다! 우선 
                    놀라왔던 것은 조명이 마련되 있었다는 것, 그리고 무대자체의 컬러가
                    검은색으로 세심히 마련되어 있었다는 것, 또한.. 무대의 양쪽에 
                    피에이 시스템이 자리잡고 있었다는 것이었죠.
                  </p>
                  
                  <p className="text-sm mt-2">
                    그 더운 날, 서늘함까지 느껴지는 음악당에서 보통의 정상적인 사람으로는 전혀 매력의 요소가
                    없는 무대에 홀린 저를 순간 제 정신으로 돌아오게 한 것은 음향체크
                    소리였습니다. 잔잔한 홀안데 울려퍼치는 음! 마치 나의 눈 주위로 
                    형광색의 음파가 진행되는 것 같은 기분을 느꼈더랬죠. 그 순간 모든 
                    것이 결정났습니다. 홀에서 외롭게 공연을 보기로 확정한 것이죠.
                  </p>
                </div>
              </div>
            </div>

            {/* Kronos Name Origin */}
            <div className="mb-12 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4">크로노스(Kronos)의 의미</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  잠깐 잡스런 이야기에서 빠져 나와 크로노스 콰텟에 대해 이야기 해
                  볼까 합니다. 크로노스란 그리스 신화의 신들 이전의 세상의 제왕으로서
                  그리이스 신들의 아버지이기도 합니다. 그는 매우 흉포하게도 자식들의
                  반란을 염려하여 잡아 먹어버렸는데, 그의 아내 레아가 막내 제우스와
                  함께 탈출하여 이 후 제우스에 의해 타도된 존재입니다.
                </p>
                
                <p>
                  이 때 제우스는 아버지를 죽이고 성기를 잘라 바다에 던져 버렸는데, 이 때 잘린 성기와
                  바다와의 교합으로 태어난 것이 제우스의 여동생 아프로디테라고 하죠.
                  따라서 크로노스는 그리스 신들의 영광된 아버지의 존재가 아니라 이성
                  의 세계 이 전의 암흑의 세계를 상징하는 존재로 야만과 혼돈을 상징하는
                  것입니다.
                </p>
                
                <div className="bg-gray-100 p-4 rounded">
                  <p className="text-sm italic">
                    현대음악을 연주하는 현악사중주단의 이름을 이러한 크로노스
                    로부터 따왔다는 것은 매우 멋진 일이 아닐 수 없습니다. 현대음악의
                    가장 큰 아이러니 중 하나는 비 대중성에 대한 가장 큰 요소인 이성주의의 
                    산물이라는 비판과 반감에도 (정감이 없다. 19세기 말부터 현재까지 줄 곳 
                    제기되어 왔던..) 불구하고, 그 음악적 이미지가 매우 불안정하고 심지어
                    괴기스럽다는 것입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Experience - First Half */}
            <div className="mb-12 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">공연 1부 - 현대음악의 진수</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  시간은 흘러서 드디어 공연시간이 왔습니다. 아까 낮에 봐두었던 무대와
                  마찬가지로 이들의 무대는 일종의 Performance적 성격을 가미한 무대였습니다.
                  색깔을 면밀하게 시퀀스 처리한 조명이나 검은색으로 만들어진 제단위의
                  검은 색 소파와 어두운 분위기에서 존 케이지가 자신의 음악을 음악계보다는
                  머스커밍햄의 무용 음악으로 발표했던 것과 일맥 상통하는 것을 느낄 수 
                  있었습니다.
                </p>
                
                <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-2">진은숙 - 전자음악의 새로운 지평</h4>
                  <p className="text-sm">
                    드디어 공연 전반부의 마지막 곡이자 제가 기대해 마지 않던 우리나라 
                    작곡가 진은숙의 곡이 시작되었습니다. 그녀는 84년 최대의 현대음악단체
                    인 ISCM에 학생의 신분으로서 입선을 하여 당시 객석에 자신의 음악제 
                    참관 소감을 썼던 사람이었습니다.
                  </p>
                  
                  <p className="text-sm mt-2">
                    이 음악은 일종의 전자음악이었는데 이 날 최초로 피에이 
                    시스템을 가동한 음악이었습니다. 저는 4악장으로 이루어진 그녀의 음악에서 톤 클래스터적인 기운을 
                    느꼈는데, 사실 그 것보다 중요한 것은 그녀가 보여주는 음향의 탐구
                    였습니다. 특히 피에이 시스템으로 울려퍼지는 압도적 박력의 첼로의 저음은 그 외곡된 음의 성질을 떠나서 최고의 긴장감을 
                    조성했습니다.
                  </p>
                  
                  <p className="text-sm mt-2">
                    이 곡의 감동은 최고의 박수를 이 사중주단에게 쏟아지게 했습니다. 
                    멤버들은 진은숙씨를 객석으로부터 불러내어 박수를 공유했는데 그녀는 
                    84년에 객석잡지의 사진에서 보았던 것보다 훨씬 성숙해 보였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Experience - Encore */}
            <div className="mb-12 p-6 bg-pink-50 rounded-lg">
              <h3 className="text-xl font-bold text-pink-700 mb-4">앙코르 - 지미 헨드릭스 "Purple Haze"</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-purple-100 p-4 rounded">
                  <h4 className="font-bold text-purple-700 mb-2">엘비스 프레슬리 추모곡</h4>
                  <p className="text-sm">
                    공연의 후반부에는 마이클 도허티의 엘비스 프레슬리 추모곡이 연주되었는데 
                    이는 퍼플헤이즈와 함께 이 날의 가장 큰 박수를 받은 곡이었습니다. 
                    엘비스의 비바 라스베이가스, 하운드 곡 등 여러곡을 모창 가수와 여가수의 
                    재미난 멘트와 노래로 엮게 하고 그 사이 사이의 반주를 크로노스 
                    콰텟의 조성적이지 않은 연주로 메우는 식의 곡이었습니다.
                  </p>
                </div>
                
                <div className="bg-blue-100 p-4 rounded">
                  <h4 className="font-bold text-blue-700 mb-2">지미 헨드릭스 "Purple Haze"</h4>
                  <p className="text-sm">
                    앙코르로 연주된 "지미 헨드릭스의 퍼플 헤이즈"는 이날 공연의 절정이었습니다.
                    이 때 환호가 어느때 보다 강력했던 것으로 보아 청중들의 
                    상당수는 순수음악만을 듣는 팬은 아니라는 것을 입증했습니다. 
                    다시금 피에이 시스템에 불을 집히고 퍼플 헤이즈의 강열한 리프가 흘러
                    나왔습니다.
                  </p>
                  
                  <p className="text-sm mt-2">
                    리더인 데이빗 해링톤은 어느때보다 강력한 보우잉으로 
                    활줄을 하나씩 많이도 끊어지게 연주했고 비브라토도 기타의 수직적인
                    비브라토를 연상시킬 정도였습니다. 편곡이나 연주의 훌륭함을 제쳐놓고라도 클래식 공연장에서 지미의 곡을 들을 수 있다는 기분은 그야
                    말로 만점이었습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-2">마지막 앙코르 - 압도적 피날레</h4>
                  <p className="text-sm">
                    마지막 앙코르에서 이들은 곡의 제목을 밝히지 않고 연주를 시작했습니다.
                    조용히 흐르는 음들이 피에이시스템의 증폭을 받고 조금씩 커지기 
                    시작했습니다. 곡이 정점으로 달할 때 이들의 보잉은 
                    현을 떠나 허공으로 마구 헤졌고 마임이 펼쳐졌습니다. 피에이 시스템이
                    부욁을 보일 정도로 큰 음이 무대의 바닥을 진동시키고 이윽고 조용히 
                    곡은 끝났습니다.
                  </p>
                  
                  <p className="text-sm mt-2">
                    천장의 불이 하나 둘씩 켜지면서 저는 이 공연이 이제야 끝이 났다는 것을
                    알았습니다. 매우 감동적인 순간이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Reflection */}
            <div className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-700 mb-4">공연 후기 - 라이브의 힘</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-100 p-4 rounded">
                  <h4 className="font-bold text-blue-700 mb-2">녹음매체와 라이브의 차이</h4>
                  <p className="text-sm">
                    이 공연으로 저는 몇가지를 느꼈습니다. 첫째, 녹음매체로 듣는 현대음악만이 전부가 아니라는
                    것입니다. 이 날의 공연을 TV에서 녹화하거나 영상으로 본다해도 그 감상은
                    절대 같을 수 없을 겁니다. 크로노스 콰텟의 공연은 음반과 공연의 느낌이 너무 달라 필설로는
                    표현하지 못할 정도입니다. 이 날의 연주는 외부에서 들려오는 것이고 연주자들은 마치 마임이스트였다고 
                    생각될 정도입니다.
                  </p>
                </div>
                
                <div className="bg-green-100 p-4 rounded">
                  <h4 className="font-bold text-green-700 mb-2">현대음악의 대중성</h4>
                  <p className="text-sm">
                    둘째, 쇤베르크가 존 케이지에게 화성의 중요성을 강조했을 때 "그렇다면 나는 그 화성의 벽에
                    평생 머리를 박아 버리겠다"라고 대답한 유쾌한 말이 결코 우습게 보이거나
                    과장되게만은 보이지 않았다는 것이었죠. 한마디로 미국의 뉴욕음악계에서
                    느낄 수 있는 고도의 사기를 믿어버리게 되었다는 것입니다. 그리고 또 한
                    가지 현대음악도 대중성이 있다는 것입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="text-center mt-12">
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">결론</h3>
                <p className="text-sm leading-relaxed">
                  크로노스 콰텟의 공연은 현대음악에 대한 편견을 완전히 뒤바꾼 
                  혁신적인 경험이었습니다. 전통적인 클래식 공연의 틀을 벗어나 
                  퍼포먼스 아트와 현대음악을 결합한 새로운 형태의 예술을 보여주었으며,
                  현대음악 역시 충분히 대중적 감동을 줄 수 있음을 증명했습니다.
                  특히 진은숙의 전자음악과 지미 헨드릭스의 "Purple Haze" 편곡은 
                  이 공연의 백미였습니다.
                </p>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 284라인 중 주요 내용을 복원한 것입니다.<br />
                전체 내용을 보시려면 원본 HTML 파일을 참조해주세요.
              </p>
              
              <Link
                href="/fun"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Fun 섹션으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}