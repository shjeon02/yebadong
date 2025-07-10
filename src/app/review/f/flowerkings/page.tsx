"use client";
import Link from "next/link";

export default function FlowerKingsPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">The Flower Kings</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 스웨덴
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">리더:</span> Roine Stolt
            </div>
            <div>
              <span className="font-semibold">특징:</span> 90년대 북구 프로그 르네상스 3대 그룹
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">안병욱 (anwook@bubble.yonsei.ac.kr)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">90년대 북구 프로그 르네상스의 주역</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Flower Kings는 Anekdoten, Anglagard와 함께 90년대 북구(스웨덴)의 프로그 르네상스시대를 이끌고 있는 3대 그룹의 하나라고 할 수 있습니다. 
                TFK는 그룹이라기 보다는 guitars, vocals, keyboards를 혼자 맡고 있는 Roine Stolt의 프로젝트 팀에 가깝다고 할 수 있겠네요.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                사실 그간 예바동에서 Anekdoten과 Anglagard는 많은 주목을 받아왔지만, 최근까지 공식적으로 4장의 앨범을 발매한 TFK에 대한 리뷰가 한번도 올라오지 않았다는 것은 의외라는 생각이 듭니다. 
                'King Crimson의 완벽한 clone'이라는 칭찬을 듣는 Anekdoten이나, 개인적으로 '좀 지루하다'는 느낌을 지울 수 없는 Anglagard보다는 TFK에 손이 올라갑니다.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">밴드명의 유래</h4>
                <p className="text-sm text-yellow-700">
                  The Flower Kings라는 밴드명은 Roine Stolt가 그의 1994년에 발표한 솔로앨범의 타이틀 'The Flower King'에서 가져왔습니다. 
                  솔로앨범의 라이너 노트에는 "나는 현재(1990년대)의 destructive, dark'n evil hardcore death-trash-speed-black'n suicidal metal music에 대한 대안을 찾으려 이 곡들을 녹음했으며, 
                  위대한 정원사이며, Prophet, Healer, Hippie, Jocker, Spacetraveler이자 태양의 아들인 'The Flower King'을 창조했다..."고 되어 있습니다.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                생긴 거하곤 다르게 아주 건전한 '사고방식'을 지닌 Roine에 의해 이끌어지고 있는 TFK는 지금까지 팀형식으로 처음 발매된 Back in the World of Adventures ('95), 
                Retropolis ('96), Stardust We Are ('97 db cd)에 이어 얼마전 Flower Power ('99 db cd)에 이르기까지 4장의 앨범을 발표하고 있고 
                많은 리뷰어들에게 각 앨범 평균 별4개를 얻을 정도로 좋은 사운드를 들려주고 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                종종 Roine의 플레이는 Steve Howe, Joe Satriani, Andy Latimer, Alan Holdsworth, Steve Vai 등과 같은 다양한 뮤지션들과 비유되기도 하는데, 
                그도 그럴 것이 TFK가 들려주는 사운드는 어느 한 장르에 속해있는 것이 아니라, 블루스, 재즈, 락, 프로그 거의 모든 장르가 짬뽕된 현재의 neo-prog나 
                심포닉 락 밴드들의 'fancy'한 편곡보다는 'strong'한 사운드를 지향하고 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                블루스, 락적인 기타 플레이위로 재즈적인 에드립을 들려주는 키보드와 드럼, 그리고 간혹 튀어나오는 멜로트론까지... 
                이들의 홈페이지에선 이들의 음악을 'The hi-tech speeding fusion factor'라고 표현을 하고 있는데 아주 적절한 표현이라는 생각이 드네요.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">도태영 (dohty@lgsemicon.co.kr)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">TFK 디스코그라피 및 추천 순서</h3>
            <div className="prose max-w-none">
              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">TFK 디스코그라피</h4>
                <ol className="text-sm text-blue-700 space-y-1">
                  <li>1. The Flower Kings : Roine Stolt solo album</li>
                  <li>2. Back in the World of Adventures : 1st</li>
                  <li>3. Retropolis : 2nd</li>
                  <li>4. Stardust We Are (2CD) : 3rd</li>
                  <li>5. Flower Power (2CD) : 4th</li>
                </ol>
                <p className="text-blue-700 mt-2">
                  기타 - Quebec Edition : previous unreleased, live tracks<br/>
                  - The Progfest 97 CD : 2 live tracks in Los Angeles May 1997<br/>
                  - Roine Stolt : Hydrophonia<br/>
                  - Tomas Bodin : An ordinary night in my ordinary life
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                개인적으로 어떤 앨범도 놓치기 아까운 것들로서 우열을 가리기 힘들지만, 경제적 부담을 고려하면 다음 순서를 추천합니다:
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">추천 순서</h4>
                <p className="text-yellow-700 font-bold">3 → 2 → 1 → 4 → 5</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                여기서 TFK의 매력에 흠뻑 빠지신 분들은 자연스레 라이브 앨범과 기타리스트 Roine Stolt와 키보디스트 Tomas Bodin의 솔로 앨범을 찾고 있는 자신을 발견하실 겁니다. 
                참고로 이들 앨범의 몇몇 수록곡들은 공식 홈페이지에서 들으실 수 있습니다.
              </p>

              <div className="bg-indigo-50 p-4 rounded-lg my-4">
                <p className="text-indigo-700 italic">
                  "We believe in the light, we believe in love<br/>
                  every precious little thing<br/>
                  We believe you can still surrender<br/>
                  you can serve the Flower King"<br/>
                  <span className="text-right block mt-2">- by Roine Stolt</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">Longdal (shjeon@yebadong.kaist.ac.kr)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Alive on Planet Earth (2000)</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Progressive rock 흐름의 폭이 줄어들어서 이제 장르를 이루고 있다고 부르기 어려울 정도가 되었다고는 하지만, 
                2000년에는 The Flower Kings가 있다라고 말할 수 있을까요?
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                아직 그들의 최신 앨범인 _Space Revolver_를 들어보진 않았지만, 최초의 라이브 앨범인 _AOPE_를 들어보니까 
                현시대의 프로록을 이끌고 있는 밴드 중 단연 돋보입니다. 
                저도 처음 TFK를 접하게 된 건 역시 예바동을 통해서였고, 이름만 듣다가 처음 그들의 bluesy한 기타와 베이스, 
                아름다운 키보드를 접하게 된 건 작년 5월의 예바동 감상회였습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                그 아름다움은 symphonic이나 Marillion 스타일과는 약간 거리가 있고 특이한 색채를 가지고 있어요. 
                Genesis와 King Crimson 초기 음악에 영향을 많이 받은 것 같고, Roine Stolt가 말했듯이 많은 곡들을 듣고 영향을 받은 것 같아요.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Alive on Planet Earth 트랙리스트</h4>
                <div className="text-sm text-yellow-700">
                  <p className="font-semibold">CD1 recorded live in North America 1998</p>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>There is More to this World (11:31)</li>
                    <li>Church of Your Heart (9:41)</li>
                    <li>The Judas Kiss (15:43)</li>
                    <li>Nothing New Under The Sun (4:13)</li>
                    <li>The Lamb Lies Down on Broadway (9:17)</li>
                  </ol>
                  <p className="font-semibold mt-4">CD2 recorded live in Japan 1999</p>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Big Puzzle (18:29)</li>
                    <li>Sounds of Violence (6:38)</li>
                    <li>Three Stories (6:04)</li>
                    <li>In the Eyes of the World (12:14)</li>
                    <li>The Flower King (11:27)</li>
                    <li>Stardust We Are pt.III (10:00)</li>
                  </ol>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                원곡과 많은 부분에서 다르게 연주하고 있는 걸 느낄 수 있고, The Lamb Lies Down On Broadway는 Genesis의 5집 타이틀곡을 카피한 겁니다. 
                실제로 6분 정도인데 나머지 3분은 키보드 effect로 채워져 있습니다.
              </p>

              <p className="text-gray-700 leading-relaxed">
                라이브 앨범을 좋아하시는 분들은 역시 이 앨범도 collect item에 포함시켜야 하실 것 같고, 가격도 한 장 가격($13.99)이라서 괜찮습니다. 
                15분이 넘는 곡들을 라이브에서 연주할 때 The Judas Kiss 같은 곡의 전주가 나올 때 제가 만약 그 라이브 장소에 있었다면 열광했을 것 같아요.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 