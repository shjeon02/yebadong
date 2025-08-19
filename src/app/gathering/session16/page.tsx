import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제16회 YBD 폴란드 록 특집 - 1998년 4월 11일 | Yebadong',
  description: '예바동 제16회 폴란드 록 특집 + Japanese Folk Rock (1998년 4월 11일, 배추가게)',
};

export default function Session16Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            제16회 YEBADONG 감상회
          </h1>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Polish Rock Special
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-red-100 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">감상회 정보</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg font-bold">
                <div className="space-y-2">
                  <p><strong>장소:</strong> 배추가게</p>
                  <p><strong>날짜:</strong> 1998년 4월 11일</p>
                </div>
                <div className="space-y-2">
                  <p><strong>진행:</strong> 신인철 (a.k.a. Fish)</p>
                  <p className="text-sm font-normal">icshin@bioneer.kaist.ac.kr</p>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🇵🇱 폴란드 록과의 우연한 만남</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  폴랜드 음악은 우리랑 무슨 관련이 있을까? 뭐 여러가지 핑계를 붙일수 있겠지만 정답은 별다른 관계는 없슴.. 인것같습니다. :-) 
                  폴랜드 음악 CD를 좀 모으게 된 이유도 처음에는 아무런 관심도 없었는데 전혀 우연히 Gibraltar인가 r.m.p.에선가 
                  제 글을 보게된 한 폴랜드 아저씨가 트레이드하자고 졸랐기 때문이죠.
                </p>
                
                <p>
                  평소에 폴랜드를 생각할땐 뭐 대우자동차나 올림픽때 우리나라 여자팀들과 붙었던 활쏘는 뚱뚱한 여자들.. 
                  아니면 미국애들 농담에 항상 등장하는 대표적인 '멍청한 민족'의 이미지만 떠올랐으나 요즘은 
                  비록 시골스럽게 생겼지만 Budka Suflera 아저씨들의 순박하고 정력이 넘치는 목소리.. 
                  나름대로 잘 생기고 세련될려고 애쓰는 Annalist 아이들의 귀여운 모습, 
                  그리고 Quidam의 사랑스러운 Emila Derkowska등이 한꺼번에 생각나네요.
                </p>
                
                <p className="italic text-yellow-700">
                  Abraxas 앨범의 표지처럼 둘둘 말린 낙엽이 떨어지는 계절이 오면 Collage의 공연을 보러 한번 가보고 싶은 나라입니다.
                </p>
                
                <p className="text-right text-yellow-600 italic">- Thanks to Artur</p>
              </div>
            </div>

            {/* Polish Rock Playlist */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                🎵 Polish Rock Playlist
              </h2>
              
              <div className="space-y-6">
                
                {/* Track 1 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    ★ Budka Suflera - Jolka, Jolka Pamietsaz (6:36)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Budka w Operze-Live from Sapot '94"</p>
                  <p className="text-sm">
                    1994년 Budka Suflera가 재결성 된 후 가진 라이브 공연에서 한곡. 
                    Krzysztof Cugowski의 촌티 줄줄 나는 거친 목소리가 매력적인 이곡은 Budka Suflera의 대표적인 히트곡.
                  </p>
                </div>

                {/* Track 2 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Budka Suflera - Cien Wielkiej gory (6:26)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Cien Wielkiej gory"</p>
                  <p className="text-sm">
                    Budka Suflera의 가장 프로그레시브한 앨범의 타이틀 트랙. 
                    잔잔하게 깔리는 여성코러스와 쥐어짜는 듯한 보컬, 묵직한 타악기 연주, blues guitar가 어울려 독특한 분위기를 만들어주고 있습니다.
                  </p>
                </div>

                {/* Track 3 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    More Experience - Schizodus Obscurus (6:00)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "From Acid Dreams"</p>
                  <p className="text-sm">
                    아니 폴랜드에도 이런 음악이? 하고 놀랄정도로 서구의 folk/psychedelic 냄새가 줄줄 흐르는 More Experience의 앨범에서 
                    게스트로 참여한 Ula Jezior의 보컬이 아름다운 곡입니다. 
                    녹음은 70년대 되었다는데 앨범 발매는 근 30년 가까이 지난 작년에야 이루어졌네요. 
                    노골적으로 약물문화를 다룬 음반 내용때문에 그런것일까요?
                  </p>
                </div>

                {/* Track 4 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Niemen - Czlowiek Jam Niewdzieczny (20:39)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Niemen"</p>
                  <p className="text-sm">
                    초창기 Polish rock의 순수함과 주체성 없슴(?)을 잘 나타내주는 트랙. 
                    Uriah Heep을 연상시키는 인트로로 시작해서 중후한 하몬드 오르간의 열정적인 연주, 
                    짤막한 드럼솔로들이 긴 시간동안 다양하게 전개됩니다.
                  </p>
                </div>

                {/* Track 5 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Collage - Eight Kisses (10:07)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Safe"</p>
                  <p className="text-sm">
                    우리나라에도 저가 라이센스로 발매되어 나름대로 괜찮은 평가를 받은 Collage의 "Moonshine" 앨범 많이들 가지고 계시죠. 
                    그 후속타로 발매된 역시 비슷한 스타일의 앨범 "Safe"에서 한곡 골랐습니다. 
                    전작과 다른 점이라면 좀더 느린템포의 여유있는 연주를 심심치않게 들려주는 모습이라 하겠네요. 
                    하지만 이 곡의 후반부는 정말 치열하게 전개됩니다.
                  </p>
                </div>

                {/* Track 6 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Quidam - Sanktuarium (8:57)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Quidam"</p>
                  <p className="text-sm">
                    Emila Derkowka의 아름다운 목소리가 빛나는 트랙입니다. 
                    앨범 전체적으로 다양한 여러가지 스타일의 음악을 해주고 있어서 한곡을 고르기가 무척 힘든 작품이지요.
                  </p>
                </div>

                {/* Track 7 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Annalist - Oposiesc Jesienna (6:04)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Eon"</p>
                  <p className="text-sm">
                    헤비메틀 그룹으로 출발해서 데뷔앨범 "Memories"로 가능성을 인정받아 Ars Mundi에 픽업되어 활약하고 있는 Collage 스타일의 밴드 입니다. 
                    최신작 "Artemis"가 다들 좋다고 하던데 저는 "Eon"이 제일 나은것 같더군요. :-)
                  </p>
                </div>

                {/* Track 8 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    SBB - Memento z Banalynym Tryptikiem (20:51)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Memento z Banalynym Tryptikiem"</p>
                  <p className="text-sm">
                    얼마전 Mythos등을 통해 SBB의 초기앨범들이 많이 수입되었었죠. 
                    하지만 개인적으론 좀 거친듯한 초기작품들보다는 중후반기의 polish된 스타일이 마음에 들더군요. 
                    다양한 시도를 보여주는 대곡입니다. <strong className="text-red-600">추천곡!</strong>
                  </p>
                </div>

                {/* Track 9 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    SBB - Loneliness/Why No Peace (11:25)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Welcome"</p>
                  <p className="text-sm">
                    부유하는 키보드 연주와 환상적인 코러스로 trip을 보내주는 "Welcome" 앨범의 두번째 트랙. 
                    그리고 Machiavel이나 Kayak, Anyone's Daughter등의 pop적인 후크가 생각나게하는 세번째 트랙을 연속으로 듣습니다.
                  </p>
                </div>

                {/* Track 10 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Abraxas - Alhambra (8:25)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "Abraxas"</p>
                  <p className="text-sm">
                    좀 있으면 발매될,(발매날짜는 지났는데 어떻게 된건지 잘 모르겠네요 :-)) 2집이 무척 기대되는 Abraxas의 데뷔앨범에서 고른 트랙입니다. 
                    단순한 연주지만 아름다운 멜로디, 그리고 Adam Lassa의 보컬이 호소력있게 다가옵니다.
                  </p>
                </div>

                {/* Track 11 */}
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">
                    Lizard - Kazdy Dzien To Wiecej Ran w Twej Glowie (9:24)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">from "W Galerii Czasu"</p>
                  <p className="text-sm">
                    King Crimson의 앨범타이틀에서 따온 그룹이름과는 달리 무척 세련된(?) 사운드를 구사하는 Ars Mundi 레이블의 신진그룹 Lizard의 앨범 첫곡입니다. 
                    예바동에서도 몇번 화제에 올랐었죠.
                  </p>
                </div>
              </div>
            </div>

            {/* CD Event Section */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                🎁 YEBADONG EVENT: Abraxas CD (알) 따먹기
              </h2>
              
              <div className="mb-6 p-4 bg-white rounded border border-green-200">
                <h3 className="font-bold text-green-700 mb-3">📝 설문 문항</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>0. 당신의 이름은?</strong> ___________________</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>1. 개중에 그나마 가장 괜찮았던 곡 두곡은?</strong> (번호로 써주세요)</p>
                    <p>( ) ( )</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>2. 와중에 제일 참기 힘들었던 곡 두곡은?</strong></p>
                    <p>( ) ( )</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>3. 투표결과 그나마 가장 괜찮았던 곡으로 뽑힐만한 곡 두곡은?</strong></p>
                    <p>( ) ( )</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <p><strong>4. 투표결과 와중에 제일 참기 힘들었던 곡으로 뽑힐만한 곡 두곡은?</strong></p>
                    <p>( ) ( )</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <p className="text-sm text-green-700">
                    ★ 3,4번을 제일 많이 맞추신 분께 Abraxas CD(알)을 드립니다.<br/>
                    동점자가 나올경우 가위바위보로 결정합니다
                  </p>
                </div>
              </div>

              {/* Poll Results */}
              <div className="bg-white p-6 rounded border border-green-200">
                <h3 className="font-bold text-green-700 mb-4">📊 CD 알따먹기 투표 결과</h3>
                <p className="text-sm mb-4 text-green-600">
                  전체적으로 SBB가 성적이 좋고, Quidam이 차이가 좀 있지만, 그 뒤를 따르고 있습니다. 
                  Niemen이 처음에 듣기에 조금 부담스러운 걸로 나타나고 있습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Best Songs */}
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-bold text-green-700 mb-3">🏆 가장 괜찮았던 곡</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>SBB - Memento z Banalynym Tryptikiem</strong> (7표)</p>
                      <p>Quidam - Sanktuarium (4표)</p>
                      <p>More Experience - Schizodus Obscurus (2표)</p>
                      <p>Annalist - Oposiesc Jesienna (2표)</p>
                      <p>Budka Suflera - Cien Wielkiej gory (1표)</p>
                      <p>SBB - Loneliness/Why No Peace (1표)</p>
                    </div>
                  </div>

                  {/* Worst Songs */}
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-bold text-red-700 mb-3">😵 제일 참기 힘들었던 곡</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Niemen - Czlowiek Jam Niewdzieczny</strong> (8표)</p>
                      <p>Budka Suflera - Jolka, Jolka Pamietsaz (4표)</p>
                      <p>More Experience - Schizodus Obscurus (3표)</p>
                      <p>Lizard - Kazdy Dzien To Wiecej Ran w Twej Glowie (3표)</p>
                      <p>Annalist - Oposiesc Jesienna (2표)</p>
                      <p>SBB - Loneliness/Why No Peace (2표)</p>
                      <p>그 외 각 1표씩</p>
                    </div>
                  </div>

                  {/* Predicted Best */}
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-bold text-blue-700 mb-3">🔮 예상 1위곡</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>SBB - Loneliness/Why No Peace</strong> (8표)</p>
                      <p>SBB - Memento z Banalynym Tryptikiem (7표)</p>
                      <p>Lizard - Kazdy Dzien To Wiecej Ran w Twej Glowie (3표)</p>
                      <p>Quidam - Sanktuarium (3표)</p>
                      <p>그 외 각 1표씩</p>
                    </div>
                  </div>

                  {/* Predicted Worst */}
                  <div className="bg-orange-50 p-4 rounded">
                    <h4 className="font-bold text-orange-700 mb-3">🔮 예상 꼴찌곡</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Niemen - Czlowiek Jam Niewdzieczny</strong> (8표)</p>
                      <p>Budka Suflera - Jolka, Jolka Pamietsaz (5표)</p>
                      <p>Abraxas - Alhambra (3표)</p>
                      <p>More Experience - Schizodus Obscurus (3표)</p>
                      <p>그 외 각 2표씩</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Japanese Folk Rock Section */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                🇯🇵 Japanese Folk Rock
              </h2>
              <div className="text-center">
                <div className="bg-white p-4 rounded border border-purple-200 inline-block">
                  <p className="text-sm text-gray-600 mb-2">
                    [일본 포크 록 관련 이미지 섹션]
                  </p>
                  <p className="text-xs text-purple-600">
                    원본에는 일본 관련 대형 이미지가 포함되어 있었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-blue-600">11</div>
                  <div className="text-blue-700">폴란드 곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🎁</div>
                  <div className="text-green-700">CD 이벤트</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🇯🇵</div>
                  <div className="text-purple-700">Japanese Folk</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-red-600">SBB</div>
                  <div className="text-red-700">최고 평가</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제16회 폴란드 록 특집 완전 복원! 
                동유럽 록의 매력과 참여형 이벤트가 되살아났습니다! 🇵🇱🎁🇯🇵
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session15" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (15회)
                </Link>
                
                <Link href="/gathering/session17" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (17회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
