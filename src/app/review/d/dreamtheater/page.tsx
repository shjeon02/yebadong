"use client";
import Link from "next/link";

export default function DreamTheaterReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Dream Theater</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Progressive Metal</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">미국</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">결성</h3>
              <p className="text-gray-700">1985년</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">멤버</h3>
              <p className="text-gray-700">John Myung (베이스) 외</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">주요 앨범</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-lg">Falling Into Infinity</h3>
              <p className="text-gray-600">John Myung 인터뷰 포함</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-lg">Scenes from a Memory</h3>
              <p className="text-gray-600">컨셉 앨범</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 프로그레시브 메탈의 대표 밴드</p>
            <p>• 복잡한 리듬과 기술적 연주</p>
            <p>• 컨셉 앨범과 대곡 구성</p>
            <p>• 뛰어난 연주 실력</p>
            <p>• 다양한 음악적 실험</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="mb-8 p-6 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold mb-3 text-blue-800">[Fish, 신인철, icshin@chiak.kaist.ac.kr]</h3>
            <h4 className="text-lg font-semibold mb-4 text-blue-700">Awake 앨범 리뷰</h4>
            
            <div className="mb-4 p-4 bg-gray-100 rounded">
              <h5 className="font-bold mb-2">앨범 정보</h5>
              <p><strong>제목:</strong> Awake</p>
              <p><strong>발매:</strong> 1994년</p>
              <p><strong>트랙 리스트:</strong></p>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Lifting Shadows off a Dream</li>
                <li>Innocence faded</li>
                <li>Space dye vest</li>
                <li>Caught in a Web</li>
                <li>Lie</li>
                <li>6:00</li>
                <li>The Mirror</li>
                <li>A mind beside Itself
                  <ul className="list-disc list-inside ml-4">
                    <li>Erotomania</li>
                    <li>Voice</li>
                    <li>The silent man</li>
                  </ul>
                </li>
                <li>Scarred</li>
              </ol>
            </div>

            <div className="space-y-4">
              <p>우리나라에서 특히 사랑을 많이받고있는 band인 Dream Theater의 새 앨범 발매 소식입니다.. 뭐 Gibraltar를 subscribe하시는 분은 가 아시죠... :-)</p>
              
              <p>맨처음노래는 이 전앨범에서 히트를 쳤던 Take the time이란 노래와 비슷한데 먼저 드럼으로 시작하면서 기타소리구나라고 착각을 하게 했던 키보드가 들어옵니다. (기타식의 연주인데 소리까지 distorted돼서 구분하기 어렵습니다.마치 Deep Purple의 Jon Lord보다 약간 소리가 더 distorted된듯..) 하지만 마지막에 코드가 나오는 부분을 잘 들으면 키보드구나라고 금방 인식할수 있습니다.</p>

              <p><strong>2. Caught in a web</strong><br/>
              Dream Theater를 흔히들 Progressive Metal밴드라고 구분짓는데 "Metal부분은 어디있담"하고 종종 생각이 들게 할만큼 빠른 박자의 강한박자, distorted기타소리가 빠져있는건 사실입니다. 하지만 이노래는 Thrash metal band를 연상케 할정도로 힘찬 riff로 시작합니다. Kevin Moore의 환상적인 속주가 일품입니다.</p>

              <p><strong>3. Innocence faded</strong><br/>
              팬들이 poppy해졌다고 하면 이 노래때문이 아닐까요? 노래 초반부에 흥겨운(?) 기타 멜로디가 나오는데 니하라가 아직 보칼로 있을때의 일본 헤비메탈그룹 Loudness풍의 연주와 흡사합니다.</p>

              <p><strong>4. A mind beside itself</strong><br/>
              3파트로 나눠진 하나의 긴 서사시 같은 노래입니다. 맨 첫 파트는 erotomania란 연주곡인데...무엇을 전달하려는지 처음듣고는 금방 이해가. 하지만 제목을 다시보니깐..:) (erotomania ==색정광, 성욕이상)</p>

              <p>나머지곡들도 dream theater팬이시라면 실망하시지는 않을듯...기교파 연주를 좋아하시는분, thrash metal fan, progressive music fan, rush,queensrych, fates warning 팬들에게 한번 들어보라고 권하고 싶습니다.</p>
            </div>
          </div>

          <div className="mb-8 p-6 border border-green-200 rounded-lg bg-green-50">
            <h3 className="text-xl font-bold mb-3 text-green-800">[Fish, 신인철, icshin@chiak.kaist.ac.kr]</h3>
            <h4 className="text-lg font-semibold mb-4 text-green-700">Dream Theater / A Change of Season</h4>
            
            <div className="space-y-4">
              <p>예전에는 해외의 앨범 발매소식을 듣곤 꼭 구해야 할 것 같으면 외국에서 주문을 하였으나.. 요즘은 도리어.. 주문한 CD들이 도착하기도 전에.. 국내발매가 되던지.. 아님.. 재발매 음반의 경우는 채 invoice도 받기전에.. 국내에 수입되는 경우가 종종 있읍니다.</p>

              <p>이번 Dream Theater의 새 앨범(사실 EP죠 ?) 은 첨에는 외국 발매소식을 듣고 조금은 망설였으나.. 워낙 우리나라에 DT의 지지 기반이 확실하다고 생각이 들어서 조속한 발매를 믿어 의심치 않은만큼.. 금방 발매가 되더군요.. :-)</p>

              <p>사실 저는 DT의 하드코어팬은 아니지만 이 미니앨범을 남달리 기다려 왔읍니다. Marillion ML인 Freaks 등을 통하여 본 미니앨범에 삽입된 라이브 공연에서 Marillion의 Steve Hogarth와 Steve Rothery가 같이 참여하여 'Easter'를 DT와 같이 연주하였다는 '흥미있는' 이야기를 들었기 때문이구요..</p>

              <p>첫곡은 previously unreleased track인 23분짜리 곡인 타이틀 트랙 'A Change of Season'입니다. 여기서 internet의 파워를 다시한번 느낄 수 있는데요.. 본 앨범의 라이너 노트에도 실렸듯이 이 곡, 이 미니앨범의 발표에 가장 큰 힘이 된 비하인드 포스 :-) 는 DT 의 인터넷 메일링리스트인 Ytsejam 의 친구들인 것 같아요..</p>

                             <p>음악은 꽤 괜찮습니다.. 여전히 저에겐 James LaBrie의 HM style vocal이 조금 아쉽지만.. 굉장히 치밀한 구성과 연주력으로 장대한 symphonic heavy rock 의 epic을 만들어내고 있읍니다.</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-purple-200 rounded-lg bg-purple-50">
             <h3 className="text-xl font-bold mb-3 text-purple-800">[전승훈, shjeon@rtcl.kaist.ac.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-purple-700">Dream Theater - 5 Years in a Live time (비디오)</h4>
             
             <div className="mb-4 p-4 bg-gray-100 rounded">
               <h5 className="font-bold mb-2">Dream Theater Discography</h5>
               <ol className="list-decimal list-inside">
                 <li>When dream and day unite 1988</li>
                 <li>Images and Words 1992</li>
                 <li>Live at the Marquee(EP) 1993</li>
                 <li>Images and words-Live in ToKyo(Video) 1993</li>
                 <li>Awake 1994</li>
                 <li>A Change of Seasons(EP) 1995</li>
                 <li>Falling Into Infinity 1997</li>
                 <li>Once In a Live Time 1998</li>
               </ol>
             </div>

             <div className="space-y-4">
               <p>최근에 발매된 Dream Theater의 공식 비디오 클립입니다. 이전에 스튜디오 버젼과 라이브 버젼을 교묘하게 결합해서 내놓은 _Images and Words-Live in ToKyo_ 에 이어 두번째 입니다.</p>

               <p>가장 반가웠던 장면은 역시 fan club 연주라면서 네 곡정도가 들어 있었는데, 현재의 Marillion을 이끌고 있는 Steve Rothery, Steve Hogarth와 _Easter_를 연주하는 장면이었는데요. Hogarth는 Derek Sherinian과 자리를 바꾸어 키보드를 연주하면서, 열창을 하더군요. 그리고 올빽의 배철수아저씨를 닮은 Yes의 Steve Howe와의 연주도 3,4분 들어있었습니다.</p>

               <p>라이브 공연의 백미는 Puppies on Acid에서 Just Let Me Breathe로 넘어가는 연주였어요. DT의 개성을 보여주는 곡들이죠. 그리고 Paris 라이브에서 'A Change of Season'을 연주하면서 Pink Floyd의 'Have a Cigar', Metallica의 'Enter Sandman', Liquid Tension Experiment의 주제 부분을 같이 연주하는 부분도 짜릿한 느낌으로 보게 되더군요.</p>

               <p>비디오에는 정규앨범에 들어있지 않은 곡이 몇개 들어 있는데, 이전 도쿄라이브에도 들어있는 'To live forever'라는 곡인데 fusion jazz 같은 초반 연주가 괜찮아요.</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-orange-200 rounded-lg bg-orange-50">
             <h3 className="text-xl font-bold mb-3 text-orange-800">[Fish, icshin@bioneer.kaist.ac.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-orange-700">[Short Review] Dream Theater - MP3 to Wave</h4>
             
             <div className="mb-4 p-4 bg-gray-100 rounded">
               <h5 className="font-bold mb-2">수록곡</h5>
               <ol className="list-decimal list-inside">
                 <li>You or Me (Demo on Hallow Years single) 6:22</li>
                 <li>Speak to Me (Demo on Japanese FII) 6:10</li>
                 <li>Raise the Knife 11:30</li>
                 <li>Status Seeker from Wdatu-Dream out Load 1:27</li>
                 <li>Take away my Pain (Demo on Japanese FII) 6:49</li>
                 <li>Dream Theater Live with Steve Howe 13:30</li>
                 <li>Tears (Cover) 3:16</li>
                 <li>The Way it Used to be 7:45</li>
                 <li>Where are you now 7:17</li>
                 <li>John Petrucci Playing Purple Rain 8:55</li>
               </ol>
             </div>

             <div className="space-y-4">
               <p>친구녀석이 빌려준 씨디인데.. 아마 Dream Theater의 웹사이트를 여기 저기 돌아다니면서 rare MP3를 모아서 wave로 뿔려서 씨디로 구운 모양입니다.</p>

               <p>제가 요즘 재밌게 듣고 있는 트랙은 바로 6번곡 Steve Howe와의 협연입니다. Machine Messiah로 시작해서 Heart of the Sunrise 그리고 Close to the Edge, Siberian Khatru 로 이어지는 Yes 메들리가 정말 뿌듯하게 와닿는군요 덕분에 Yes를 별로 안듣던 친구에게 Yesyears 네장을 모두 빌려주게 생겼지만.. ^^;</p>

               <p>그리고 Prince의 곡 Purple Rain을 페트루치가 기타로 연주하는 블루지한 트랙도 재밌네요.</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-indigo-200 rounded-lg bg-indigo-50">
             <h3 className="text-xl font-bold mb-3 text-indigo-800">[LongDal, shjeon@cclab.kaist.ac.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-indigo-700">Dream Theater - Falling Into Infinity</h4>
             
             <div className="space-y-4">
               <p>드디어 오늘 DT의 새앨범을 구입했습니다. 일단 앞곡 두곡을 허름한 스피커를 통해 들어보고나서 헤드폰으로 들어보고 있습니다.</p>

               <p>처음 느낌은 3집 _Awake_와는 조금 변화가 있다는 걸 알 수 있습니다. 많은 변화는 아니지만, 약간 다른 느낌을 주고 있어요. 일단 빠른 연주와 변화로 느낄 수 있었던 부분이 줄어들었고, 느린 곡이 상대적으로 3집보다 많아졌어요.</p>

               <p>예바동 홈페이지에는 이 앨범의 두번째 곡인 You Not Me가 있어요. 유일하게 You Not Me 가 DT의 곡중에서 Desmond Child와 같이 작곡했다고 하는데 누군지는 잘 모르겠군요. 그 곡만 들어서는 좋다는 생각이 들지는 않았는데 곡의 앞뒤를 연결해서 들으니까 "역시 Dream Theater! 배신하지 않았군" 하는 감탄을 하게 되네요.</p>

               <p>1,2,3 집은 보컬과 키보드가 바뀐 것 이외에 크게 변한게 없는 색깔을 유지했었는데 4집은 약간 jump가 있는 앨범인 것 같아요. 음색은 그대로이지만 곡 구성이 이전과 달라진 느낌이에요.</p>

               <p>Dream Theater 1,2,3집에 모두 만족하신 분은 4집도 역시 좋아하실 거에요. <strong>강력 추천합니다!!!</strong></p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-teal-200 rounded-lg bg-teal-50">
             <h3 className="text-xl font-bold mb-3 text-teal-800">[Rubisef, 강창우, cwkang@iae2000.iae.re.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-teal-700">Dream Theater - Falling Into Infinity 추가 리뷰</h4>
             
             <div className="space-y-4">
               <p>안녕하세요 루비세프, 챠우 입니다. 드디어 Dream Theater 의 신보 "Falling into Infinity"가 출시되었군요. D.T의 열혈팬이신 동장님의 리뷰 잘봤습니다.</p>

               <p>저도 발매당일 구입해서 들어봤는데. 처음엔 말랑말랑해진것 같은 D.T의 음악이지만. 그 의구심을 한방에 날려버릴정도로 치밀한 구성과 뛰어난 연주력은 여전하더군요.</p>

               <p>일본시장을 겨냥해서 좀 발라드가 많이들어갔다는 얘기도 있던데. 이번에 수록된 3곡의 발라드는 우리나라 팬들의 취향에도 딱 맞아 떨어지는 괜찮은 락발라드 인것 같군요..</p>

               <p>올해안에 꼭 D.T의 공연이 성사되어서 꼭 보러갔으면 좋겠군요. 그럼 환절기 감기조심하세요~~~</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-red-200 rounded-lg bg-red-50">
             <h3 className="text-xl font-bold mb-3 text-red-800">Dream Theater John Myung 인터뷰</h3>
             <h4 className="text-lg font-semibold mb-4 text-red-700">Falling Into Infinity 관련 인터뷰 (from Hitel)</h4>
             
             <div className="mb-4 p-4 bg-gray-100 rounded">
               <p><strong>출처:</strong> Hitel (김성신)</p>
               <p><strong>날짜:</strong> 09/22 17:44</p>
               <p><strong>인터뷰 대상:</strong> John Myung (베이시스트)</p>
             </div>

             <div className="space-y-4">
               <p><strong>H (진행자):</strong> 이야기하게 되서 반갑다.</p>
               <p><strong>J (JOHN):</strong> 나도 그렇다. 한국은 좀 어떤가.</p>

               <p><strong>H:</strong> 새 앨범에는 총 몇곡이 수록될 예정인가.</p>
               <p><strong>J:</strong> 전부 열한 곡이다.</p>

               <p><strong>H:</strong> 새 앨범의 제목이 Falling Into Infinity 인가.</p>
               <p><strong>J:</strong> 맞다.</p>

               <p><strong>H:</strong> 드림 씨어터가 앨범을 발매한 것이 너무 오래전이라 그런지, 그동안 상당히 많은 루머가 나돌았다. 우선 당신들이 레코드회사와 문제가 있었다는 것이 사실인가.</p>
               
               <p><strong>J:</strong> 글쎄, 우선 마지막 정규 앨범인 Awake 를 발매하고 난 뒤에 우린 개인적으로 많은 일을 겪었다. 우리 가족중에 세상을 뜬 사람도 많았고, 마이크 (드러머)와 존 (기타)는 아빠가 되었다. 결과적으로 오늘날까지 상당히 많은 일을 겪어왔다고 보아야 한다.</p>

               <p><strong>H:</strong> 정확히 이번 앨범의 레코딩이 이루어진 시기는 언제인가.</p>
               <p><strong>J:</strong> 사실 이번 앨범의 작업은 상당히 빨리 이루어졌다. 우리가 작업을 시작한 것이 6월초이고 7월 30일에 정확하게 모든 작업을 마쳤다.</p>

               <p><strong>H:</strong> 이번 앨범을 위해 만들어 놓은 곡의 분량이 너무 많아서 회사로부터 줄여 달라는 압력을 받았다는 것이 사실인가.</p>
               <p><strong>J:</strong> 아니, 그렇지는 않다. 그간 회사와 데모테입이 많이 오간 것이 사실이지만서도.. 우린 더 많은 곡을 쓰기 원했고 그러는 동안 1년 반이라는 시간이 흘렀다.</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-pink-200 rounded-lg bg-pink-50">
             <h3 className="text-xl font-bold mb-3 text-pink-800">[박준식, xanadu@postech.ac.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-pink-700">Dream Theater - Scenes from a Memory</h4>
             
             <div className="mb-4 p-4 bg-gray-100 rounded">
               <h5 className="font-bold mb-2">트랙 리스트</h5>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <h6 className="font-semibold">Act I</h6>
                   <ol className="list-decimal list-inside text-sm">
                     <li>Regression</li>
                     <li>a)Overture 1928 b)Strange Deja Vu</li>
                     <li>a)Through My Words b)Fatal Tragedy</li>
                     <li>Beyond This Life</li>
                     <li>Through Her Eyes</li>
                   </ol>
                 </div>
                 <div>
                   <h6 className="font-semibold">Act II</h6>
                   <ol className="list-decimal list-inside text-sm">
                     <li>Home</li>
                     <li>a)The Dance of Eternity b)One Last Time</li>
                     <li>The Spirit Carries On</li>
                     <li>Finally Free</li>
                   </ol>
                 </div>
               </div>
             </div>

             <div className="space-y-4">
               <p>요즘 예바동이 참 분위기가 좋아졌네요... 다른 뉴스그룹들에서는 볼수 없는 참 가족적인 분위기거 같아요...</p>

               <p>많은 평론가들이 DT와 Rush와의 연관성을 항상 언급하곤 했지만 제 개인적인 관점에서는 DT의 음악적인 성격은 Rush 보다는 Yes나 ELP의 음악에 더 가깝다고 생각합니다. 70년대 Rush의 곡이 대부분 서사적인 storytelling의 성격이 강한 반면(Genesis 처럼요) DT의 음악에서 그러한 이야기 전개라는 측면은 찾아보기가 힘들었기 때문이죠.</p>

               <p>그런 DT가 처음으로 만든 concept음반이라는 이야기를 듣고 상당한 기대를 가지고 이 음반을 들어보았는데 현재까지의 느낌은 <strong>"DT는 아직 멀었다....-_-;;;"</strong> 라는 결론만을 내리게 되네요....</p>

               <p>이 음반은 I&W 앨범에 실린 Metropolis Pt.1의 두번째 파트로 만들어진 작품입니다. 전체적으로는 전작에서의 다소 Poppy한.. 혹은 보다 prog..한 분위기에서 벗어나 Awake시절의 hard한 곡들을 연상하게 하는 전개입니다.</p>

               <p>사실 이 앨범에서 가장 아쉬운 것은 정신없이 펼쳐지는 각파트의 연주가 전체적인 이야기 흐름을 효과적으로 전달하지 못하고 있다는 느낌 때문입니다. 이러한 화려한 테크닉의 경연장 같은 느낌은 Concept 앨범이 지녀야할 가장 중요한 덕목인 '이야기 전달'이라는 측면에 방해가 되고 있다고 봅니다.</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-cyan-200 rounded-lg bg-cyan-50">
             <h3 className="text-xl font-bold mb-3 text-cyan-800">[Longdal, shjeon@yebadong.kaist.ac.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-cyan-700">Dream Theater - Metropolis PT. 2: Scenes From a Memory</h4>
             
             <div className="space-y-4">
               <p>저는 개인적으로 DT의 새앨범으로 concept 앨범을 기대했습니다. 잘알려진 Pink Floyd나 Roger Waters, Marillion의 앨범은 아니더라도 Queensryche의 _Operation: Mindcrime_이라던가, Savatage의 _Streets-A Rock Opera_와 같은 앨범 정도의 지명도를 가질만한 앨범이 나왔으면 했습니다.</p>

               <p>근데 이 앨범은 어떤 평을 받을까요? 벌써부터 DT의 뉴스그룹에서는 DT가 Ayreon이 되었다면서 분개해하고 있습니다. 물론 이번 앨범이 DT의 대표적인 앨범이 될것이라서면서 흥분하는 사람들도 많긴 하지만요.</p>

               <p>이 앨범이 그런 혹평을 받는 이유로 두가지로 정리해볼수 있습니다.</p>
               
               <div className="bg-yellow-50 p-4 rounded">
                 <p><strong>첫째,</strong> 컨셉 앨범으로서 스토리 구성과 plot이 영화 _환생_(원제:Dead again)과 매우 비슷하다는 것과</p>
                 <p><strong>둘째,</strong> 끝부분의 명확한 스토리를 거부하면서 얼버무리는 듯한 결말으로 스토리를 듣는 사람에게 궁금증을 갖게 하는 구성입니다.</p>
               </div>

               <div className="bg-blue-50 p-4 rounded mt-4">
                 <h5 className="font-bold mb-2">등장인물</h5>
                 <p><strong>현재 인물:</strong> Nicholas와 The Hypnotherapist(최면술사)</p>
                 <p><strong>과거 인물:</strong></p>
                 <ul className="list-disc list-inside ml-4">
                   <li>Vitoria Page: Julian Baynes의 연인</li>
                   <li>Senator Edward Baynes (The Miracle)</li>
                   <li>Julian Baynes (The Sleeper)</li>
                 </ul>
               </div>

               <p>_SFAM_은 DT의 형식적인 면에서 바뀐게 거의 없습니다. 가끔 인도풍의 타악기 연주가 보인다는 것 이외에는. 그러나 내용적인 면에서 완전히 다른 게 있죠. 컨셉이 있습니다.</p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-amber-200 rounded-lg bg-amber-50">
             <h3 className="text-xl font-bold mb-3 text-amber-800">[김기범, RobertFripp@lycos.co.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-amber-700">Dream Theater Live (2002/4/22)</h4>
             
             <div className="space-y-4">
               <p>지난주에 친구와 함께 갔었습니다. 원정갔다가는 정말 안할 리 스가였고요 제 스피커로 하면 사람들이 시끄럽다고 할까봐.. 인데..</p>

               <p>음질이 무엇보다 대단했습니다. 음이 말하자면 인도중부터 체스키의 특유의 해상력이 나오며 단순한 기술보다 감정이 풍부하여 감동이 있었습니다. 전체적으로 음성에 너무 치우쳐서. 이 점에서 시니칸트는 지난번에 신기료했던데 생존적으로 딴딴하고 올콜의 특유의 사운드가 드러나있묘.. 너무 짧으면서 전체적으로 무제한 성력과 단수화가 2화제가 음 저도하지만.</p>

               <p>무엇제해 말하자면 신청에 답한 그룹이었습니다. 이제 음성을 위하면 문건하거라 신정감에 가보겠습니다. <strong>가보셔도 나쁘지 않을것 같습니다.</strong></p>

               <p>그은 신정하고 나무에서 함유로 된다고 해서 뵈도 다음 가입자는 이런 오락 발리지 가능한 음질한 것으로 주뢰됩 실 주와 건과지 그 설비랍지요...</p>

               <p>정말로 3시간에 가는 시간 현래았습니다. 사운드 시스템 첫 라이브을 보면 베핑우 안 하고 싶긴 체에도 터한 아주 감동이여 라이브를 위환시키기도...하수</p>

               <p>그구말으로 인상정하면 기본드고자면<br/>
               예비, 존 스피치 - 브랜드<br/>
               기타 존정 - 지금 수저선향하면듭...잔브 고희타활코<br/>
               존 메트루시 - 머리 짧은 자싱이라군요. 미로의 존트시 그리다 존가리, 조차식 없더지도 와히타상 재조하니  발현도 하고 경상너는데 종다 일관된는 해 건개적인 차타의 출다 스고 달며리를 지영지데 하한 요청 프 기대정한브룩파기는 솜한가 사아즈 요창니다.</p>

               <p>더어 아제의 뵌창야를 종니자린 아인면 라브 스료다치이며 혹 인년.. 리크 네를 대시와 해서 일화는며..</p>

               <p>직렌씨 에장전쭓라니 맨 초문이중을 현료고.정 모기민 옴활에 가이브서요들도 있는데 명주사 는야현정이 최잠현직까지.....</p>

               <p>마이크 포드니 - 과전이 르앞들입니다. 진정즐기 들리를 활주메임 놀이기에 종매를 유목잭 서대 경내 잼간히 종체적인 기업이 있었습니다. 재트 그가 위젤 수드데부더 강해지는 즘정은 지내니으로 업체일 서기만 세우화 을가고에 세지려는 쎄가 있었니다.</p>

               <p><strong>제임스 스리머 드재에 해놈리 것들은 무네히 놀룡 건결들 몰두인 작결들 흐레수요...</strong></p>
             </div>
           </div>

           <div className="mb-8 p-6 border border-emerald-200 rounded-lg bg-emerald-50">
             <h3 className="text-xl font-bold mb-3 text-emerald-800">[Neo-Zao, 김남웅, zao@jean.iml.goldstar.co.kr]</h3>
             <h4 className="text-lg font-semibold mb-4 text-emerald-700">A Change of Season 철학적 해석</h4>
             
             <div className="space-y-4">
               <p>스트라빈스키는 이교도들의 제전에 대한 영감을 떠올리고 _봄의 제전_을 작곡했다고 하죠. 벌겋게 달아 오르는 불을 둘러싸고 있는 늙은 제사장들, 그리고 그 써클안에서 지쳐 죽을때까지 춤을 추어야만 하는 젊은 여인...</p>

               <p>지극히 탐미적인 상상속에서 나온 스트라빈스키의 작품은 서양음악의 새로운 패러다임으로서 당대의 사람들을 찬사와 비난 혹은 자신의 가치관이 용납못할 '소음'에 대한 방어기제로서의 위협 등 여러가지 반응을 맛보게 됩니다.</p>

               <p>드림씨어터의 음악을 들으면서 얻는 쾌감은 대략 두가지로 요약된다고 생각합니다.</p>
               
               <div className="bg-gray-100 p-4 rounded">
                 <p><strong>1. 급박한 리듬속에서 펼쳐지는 드라마틱한 구성</strong></p>
                 <p><strong>2. Virtuosity</strong></p>
               </div>

               <p>이는 중세에 행해졌던 _마녀사냥_과도 일맥상통하는 면이 있다고 할 수 있습니다. 공포로 부터 해방되는 방법은 이드를 다스리는 수퍼이고를 깨버리면 되지만 그 것은 자신들의 질서와 안녕을 위협하는 반사회이며 패륜이 되므로 자신들의 이드를 충족시켜줄 대상으로 이드의 본능을 모사할 제전을 치루는 것이죠.</p>
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