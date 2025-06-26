import Link from "next/link";

export default function ArenaPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Arena</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Arena - Songs from the Lion's Cage</h3>
            <p className="text-sm text-gray-600 mt-2">[Fish, 신인철, icshin@chiak.kaist.ac.kr]</p>
          </div>

          <div className="space-y-4">
            <p>성급한 neo-progster(neo prog를 좋아하는 녀석들을 낮추어 부르는 듯한 말인음) 들에 의해 1995년 최고의 앨범으로 벌써부터 불리있는 drum을 못쳐서 Marillion 에서 쫓겨난 drummer Mike Pointer와 이리저리 고만고만한 팀들을 전전하며 밥값을 벌기에 안간힘쓰고 있는 ex-Pendragon의 keyboardist Clive Nolan이 조직한 그룹 Arena(Area아님!)의 데뷰앨범입니다.</p>

            <p>Marillion fand club을 통하여 $20 이라는 고가에 판매되고 있지만 그다지 기대 안하고 어쩔수 없이 사고말았지만 썩 괜찮은 sound를 들려줍니다.. 정말 Fish 목소리 흉내내기 contest를 하면 1등은 따놓은 당상인 vocalist John Carson과 한 track에선 Marillion의 guitarist Steve Rothery가 잠깐 우정출연하여 Marillion비슷한 사운드 만들기에 성공한 듯 싶네요..</p>

            <p>뭐 팬클럽을 통해서만 느니 몇만 찍었다느니 하는것도 Marillion fan들을 우롱하고 벗겨먹으려는 수작이 뻔하지만 제 생각에는 Hogarth era Marillion보다는 훨씬 나은 sound인것 같아요.</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>Marillion의 1집 'Script for a Jester's Tear'에만 참여하였던 Mike Pointer가 전곡의 작곡에 참여한 까닭에 'Script'와 비슷한 곡구성이 많이 보입니다. 특히 'He Know You Know'의 끝부분에 등장하는 전화벨 idea가 다시 사용되고 있구요. 틀린점변한 탓에 전화속의 여자가 Auto answering machine이라는 점이 있네요.</p>
              
              <p className="mt-2">전체적으로 7,8 분짜리 중편들과 part를 나누어 들어가있는 구태의연한 수작을 보여주는 short instrumental interlude가 짤막 짤막히 들어가 있구요. 앞주일 정도는 꽤나 반복해 들을만한 마지막곡 'Solomon'은 괜찮은 15분짜리 대곡입니다.</p>
              
              <p className="mt-2">흔히 신생팀의 대곡은 5분짜리 아이디어로 10분짜리 곡을 만들고 10분짜리 곡을 20분으로 늘이는것이 보편화 되어있지만. 글쎄요. 이곡은 어떤지.. 좀더 들어보아야 할것 같네요..</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Pride - Arena</h3>
            <p className="text-sm text-gray-600 mt-2">[Fish, 신인철, icshin@bioneer.kaist.ac.kr]</p>
            
            <div className="space-y-4 mt-4 text-sm">
              <p>작년 Songs from the Lion's cage라는 데뷰앨범으로 많은 neo-progster들로부터 호평을 받았던.. Arena의 두번째 앨범입니다. 국내에서도 뒤늦게 상당한 양의 데뷰앨범이 수입된걸로 보입니다만 껍질에 충실한 :-) 사운드를 싫어하시는 팬들이 많은 까닭인지 그다지 좋은 반응을 얻고 있는것 같지는 않더군요.</p>

              <p>이들의 두번째 앨범.. 내가 안사면 누가 사리.. 하는 마음도 있었지만 Martijn 이라는 Holland 녀석의 홈페이지에서 본 호의적인 리뷰가 그다지 큰 기대없이 주문하는데 많은 기여를 했읍니다.</p>

              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <h4 className="font-semibold mb-2">멤버 구성</h4>
                <p>여전히 Marillion에서 쫓겨난 드러머라는 '큰 명예'를 어깨에 걸머지고 있는 Mick Pointer와 '차세대 Rick Wakeman' 으로부터 '가장 주책없고 실력없는 키보디스트'라는 여러가지 평을 듣고 있는 Clive Nolan이 주축이되어 작곡등.. 팀을 이끌고 있구요..</p>
                
                <p className="mt-2">지난번 데뷰앨범에서 ex-Marillion의 Fish와 거의 흡사한 목소리를 들려준 John Carson의 뒤를 이어.. 이번에는 IQ의 Peter Nicholls와 또 못지않게 흡사한 목소리를 지닌(정말 어디서 발굴해 냈는지 신기하기도 하더군요..) Paul Wrightson이라는 친구가 보컬을 담당하고 있읍니다.</p>
                
                <p className="mt-2">또.. 베이스에는.. IQ의 베이시스트 John Jowitt가 또 한몫 담당하고 있네요.</p>
              </div>

              <p>마치 Saga의 앨범을 연상시키듯이.. 지난번 앨범에 실린 _Crying for Help_ 씨리즈가 이번 앨범에서도 Part V, VI, VII, VIII 로 나뉘어져 수록되어 지난번 앨범과의 연계성을 나타내는 듯한 약간의 유치성을 보여주고 있읍니다.</p>

              <div className="bg-green-50 p-3 rounded">
                <h4 className="font-semibold mb-2">앨범 평가</h4>
                <p>전체적으로 사운드는 짐작되다시피 그다지 특이한건 없읍니다. 조금 새로운 시도라고 할 수 있는건 _Crying for Help Part VII_에서 보여주는 무반주 보컬솔로 정도 ? 마치 상가집에서 곡하는 소리처럼 들리지만요.</p>
                
                <p className="mt-2">첫곡인 _Welcome to the Cage_도 Dream Theater나 Everon을 좋아하시는 분은 신나게 좋아하실 수 있을듯한 분위기구요. 또 저처럼 궁상맞은 슬로우템포의 '프로그레시브의 탈을 쓴 Fish형 뽕짝 블루스 발라드'를 좋아하시는 분들을 위해 13분 42초짜리 마지막곡 _Sirens_가 준비되어있읍니다.</p>
              </div>

              <p className="italic text-center">NP: Sirens - Arena</p>

              <div className="text-center text-xs font-mono bg-gray-100 p-2 rounded">
                <pre>{`                    o               
                  o  It was a wedding ring,
  \\  __\\\\___    o    Destined to be found in a cheap hotel,     
   \\/     o \\ o      Lost in a kitchen sink,
   /\\_<_____/ or thrown in a wishing well.>`}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 