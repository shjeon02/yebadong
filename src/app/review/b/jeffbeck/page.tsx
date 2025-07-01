"use client";
import Link from "next/link";

export default function JeffBeckReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Jeff Beck - Cause We've Ended As Lovers</h1>
        
        {/* 아티스트 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> England</p>
              <p><strong>장르:</strong> Rock, Blues Rock, Jazz Fusion</p>
              <p><strong>활동 시기:</strong> 1960년대 ~ 현재</p>
            </div>
            <div>
              <p><strong>대표작:</strong> Blow by Blow (1975), Wired (1976)</p>
              <p><strong>특징:</strong> 기타 연주의 대가, 인스트루멘털 음악</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 섹션 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">Neo-Zao (김남웅)</h3>
            <p className="text-sm text-gray-600 mb-4">zao@jean.iml.goldstar.co.kr</p>
            
            <div className="space-y-6 leading-relaxed">
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">음악과의 첫 만남 (1983년)</h4>
                <div className="space-y-3">
                  <p>
                    아마 '83년의 일이었던 것으로 기억된다. 가장 인간대접을 받지 못하는 중학이라는 학제에서 누렸던 나의 커다란 기쁨 중의 하나는 
                    바로 <strong>영어를 읽을 수 있게 되었다</strong>는 것이었다.
                  </p>
                  
                  <p>
                    국민학교때 형들이 빠져있던 락음악을 귀동냥으로 들은 까닭에 미국의 문화라는 것이 그리 낯설지 않았고 
                    매주 솔리드 골드나 락월드 등의 음악을 즐겨보고 있었기 때문에 영어라는 새로운 언어가 가져다 준 기쁨은 말할 수 없을 정도로 컸었다.
                  </p>

                  <p>
                    알파벳도 모르고 흉내내던 팝송의 제목을 쓸 수 있게 되었고, 어렴풋이나마 가사의 뜻도 알 수 있게 되었다. 
                    형에게 핑거 투 핑거로 배웠던 <strong>호텔 캘리포니아</strong>의 전주를 치면서 이 노래가 이글스의 노래고 
                    '호텔 캘리포니아'라는 노래라는 것을 영어로 쓸 수 있었다.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">운명적인 음악 체험</h4>
                <div className="space-y-3">
                  <p>
                    토요일을 엄청 피곤하게 놀아버린 일요일의 새벽 갑자기 꿈결에 <strong>너무나 장엄한 멜로디</strong>가 들려왔다. 
                    그것은 감미롭게 울리다가 엄청난 노이즈를 뿌리기도 하고, 아름다운 어쿠스틱 기타가 울리다가도 현란한 키보드 연주를 들려주기도 했다.
                  </p>

                  <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                    <h5 className="font-bold mb-2">형과의 대화</h5>
                    <div className="space-y-2 text-sm">
                      <p><strong>[우리형]</strong> "너 이거 누구음악인 줄 아니?"</p>
                      <p><strong>[나]</strong> "응.. 알어.. 이거 에드가 윈터의 프랑켄쉬타인 라이브 아냐??"</p>
                      <p><strong>[우리형]</strong> "마.. 웃기지 마.. 이게 무슨 프랑켄쉬타인이냐?"</p>
                      <p><strong>[나]</strong> "뭐.. 틀림없는 것 같은데..."</p>
                      <p><strong>[우리형]</strong> "너 내기할래?"</p>
                    </div>
                  </div>

                  <p>
                    하여간 형은 내기에 진 나에게 뭐 별로 닥달한 것 같지는 않은 기억이다. 오히려 조그만 녀석이 이런 음악을 듣고 좋아한다는 것이 
                    대견하게 여겼던 것 같다. 이 때 들었던 음악이 바로 아직도 듣고 좋아하는 <strong>에머슨 레이크 앤 파머의 _전람회의 그림_</strong>이었다.
                  </p>

                  <div className="bg-orange-100 p-3 rounded">
                    <p className="font-bold text-orange-800">
                      진정한 음악적 감동을 느껴보았던 것은 바로 그때였고 이 것이 이른바 나에겐 첫번째 '음악세례'였다고 생각된다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h4 className="font-bold text-blue-800 mb-3">Jeff Beck과의 인연</h4>
                <div className="space-y-3">
                  <p>
                    중학교 시절 나에겐 하나의 자존심이 있었다. 그것은 우리 집에는 젭 벡의 <strong>_Blow By Blow_</strong>와 
                    <strong>_Wired_</strong> 그리고 <strong>_There And Back_</strong>을 가지고 있다는 것이었다.
                  </p>

                  <p>
                    그리고 비록 젭 벡의 연주는 아니었지만 <strong>_Truth_</strong> 앨범의 그린슬립스를 칠 수 있다는 것은 굉장한 자랑거리였다.
                  </p>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">Jeff Beck 앨범 소장 목록</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Blow By Blow</strong> (1975)</li>
                      <li><strong>Wired</strong> (1976)</li>
                      <li><strong>There And Back</strong> (1980)</li>
                      <li><strong>Truth</strong> (Jeff Beck Group)</li>
                    </ul>
                  </div>

                  <p>
                    형들은 와이어드를 좋아했지만 나는 무슨 이유에선지 지금은 그리 이해가 가지 않지만 데얼앤백을 참 좋아했었다. 
                    사실.. 블로바이블로의 재킷을 그리 좋아하지 않았던 것 같다.
                  </p>

                  <p>
                    그러나.. 세월이 지나면서 이러한 나의 인상은 점점 바뀌었다. 고등학교가 되면서 이 앨범 <strong>_블로우 바이 브로우_</strong>가 
                    상당히 좋아졌다. 기타를 조금 칠 줄 알게되어서 그런지 모르겠지만 이 앨범이 무척 좋았다.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">"Cause We've Ended As Lovers" 분석</h4>
                <div className="space-y-4">
                  <p>
                    이제 꽤 많은 시간이 들어 이 앨범을 다시 가까이 하게 되었다. 갑자기 새롭게 생긴 씨디 탓인지 이 앨범이 너무나 좋아진 것이다. 
                    그 것은 순전히 <strong>_Cause We've Ended As Lovers_</strong>때문이다.
                  </p>

                  <div className="bg-white p-4 rounded border">
                    <h5 className="font-bold mb-3">곡 정보</h5>
                    <ul className="space-y-2">
                      <li><strong>헌정:</strong> 로이 부캐넌(Roy Buchanan)에게 헌정된 곡</li>
                      <li><strong>영향:</strong> 로이 부캐넌의 볼륨주법과 텔레캐스터 사운드에서 영향</li>
                      <li><strong>특징:</strong> 기타 인스트루멘털의 백미</li>
                    </ul>
                  </div>

                  <p>
                    사실 젭벡의 이 연주곡은 로이 부캐넌의 모습에 상당한 영향을 받았음을 간과할 수 없다. 
                    시작을 알리는 볼륨주법과 곡의 클라이맥스의 크로마틱스케일 하강 무엇보다 곡의 악상과 텔레캐스터를 택한 것에서부터 강한 영향이 느껴진다.
                  </p>

                  <div className="bg-yellow-100 p-3 rounded">
                    <h5 className="font-bold text-yellow-800 mb-2">음악적 분석</h5>
                    <p className="text-sm">
                      <strong>메인테마 코드 진행:</strong> | Cm7 | Abmaj7 | Fm7 | Csus4 C |
                    </p>
                    <p className="text-sm mt-2">
                      메인테마는 전체 곡을 통해서 곡의 초반부와 중반부에 4번씩 대략 8번 정도가 반복되지만, 
                      젭 벡은 단 한 번도 같은 연주를 들려주지 않는다.
                    </p>
                  </div>

                  <p>
                    밴딩과 슬라이드(글리산도) 그리고 스타카토 등의 기타 고유의 주법을 이용해서 미묘한 차이를 부여한다. 
                    <strong>그야말로 기타인스트루멘털의 모범</strong>이다.
                  </p>

                  <p>
                    젭 벡의 이 연주곡은 너무나 감동적이다. 기타 인스트루멘털이 보여줄 수 있는 연주곡의 가히 백미라 할 수 있다. 
                    텔레캐스터의 미묘한 음의 뉴앙스와 기승전결의 변주가 주는 강렬함.. 그리고 무엇보다 중요한 것은 
                    다른 악기와 대별되는 기타만의 음색과 거기서 우러나오는 감동이다.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-2">개인적 성찰</h4>
                <p>
                  대략 십수년을 음악을 들어오면서 나 개인의 음악적 취향이라는 것에 대해 무척 궁금해했다. 
                  대략 최근 1년정도 내 자신의 취향에 대해 어느정도는 알 수 있게 된 것 같다. 
                  그 것은 기본적으로 <strong>연주곡을 좀 더 좋아한다</strong>는 것이다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 