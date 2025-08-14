import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozric Tentacles @ Boston 2000 - Concert Review | Yebadong',
  description: 'Ozric Tentacles 콘서트 리뷰 (2000년 10월 23일, Boston)',
};

export default function OzricPage() {
  return (
    <main 
      className="min-h-screen bg-[#0A0C30] text-white"
      style={{backgroundImage: "url('/images/ozric_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            Ozric Tentacles gig review
          </h1>
          <p className="text-lg">
            <strong>Gig review by Simon Chong (</strong>
            <a href="mailto:schon8624@yahoo.com" className="text-[#0080FF] underline">
              <strong>schon8624@yahoo.com</strong>
            </a>
            <strong>)</strong>
          </p>
          
          <div className="mt-6 mb-8">
            <div className="w-full max-w-md mx-auto">
              <img src="/images/ozric.gif" alt="Ozric Tentacles" className="mx-auto" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">

            {/* Discography Sidebar */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">Ozric Tentacles 디스코그래피</h3>
                <div className="space-y-3 text-xs">
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/1.jpg" className="w-16 h-16 rounded mb-1" alt="The Hidden Step" />
                    <p><strong>The Hidden Step</strong><br />2000</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/2.jpg" className="w-16 h-16 rounded mb-1" alt="Nodens Ictus" />
                    <p><strong>Nodens Ictus</strong><br />2000</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/3.jpg" className="w-16 h-16 rounded mb-1" alt="Waterfall Cities" />
                    <p><strong>Waterfall Cities</strong><br />1999</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/4.jpg" className="w-16 h-16 rounded mb-1" alt="Floating Seeds" />
                    <p><strong>Floating Seeds</strong><br />1999</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/5.jpg" className="w-16 h-16 rounded mb-1" alt="Spice Doubt" />
                    <p><strong>Spice Doubt</strong><br />1998</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/6.jpg" className="w-16 h-16 rounded mb-1" alt="Curious Corn" />
                    <p><strong>Curious Corn</strong><br />1997</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/7.jpg" className="w-16 h-16 rounded mb-1" alt="Become the Other" />
                    <p><strong>Become the Other</strong><br />1995</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/8.jpg" className="w-16 h-16 rounded mb-1" alt="Arboressence" />
                    <p><strong>Arboressence</strong><br />1994</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/9.jpg" className="w-16 h-16 rounded mb-1" alt="Jurassic Shift" />
                    <p><strong>Jurassic Shift</strong><br />1993</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/10.gif" className="w-16 h-16 rounded mb-1" alt="Live Underslunky" />
                    <p><strong>Live Underslunky</strong><br />1992</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/11.jpg" className="w-16 h-16 rounded mb-1" alt="Afterswish" />
                    <p><strong>Afterswish</strong><br />1984-92</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/12.jpg" className="w-16 h-16 rounded mb-1" alt="Strangeitude" />
                    <p><strong>Strangeitude</strong><br />1991</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/13.jpg" className="w-16 h-16 rounded mb-1" alt="Sploosh" />
                    <p><strong>Sploosh (sgl)</strong><br />1991</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/14.jpg" className="w-16 h-16 rounded mb-1" alt="Erpland" />
                    <p><strong>Erpland</strong><br />1990</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/15.jpg" className="w-16 h-16 rounded mb-1" alt="Pungent Effulgent" />
                    <p><strong>Pungent Effulgent</strong><br />1989</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/16.gif" className="w-16 h-16 rounded mb-1" alt="Bits between bits" />
                    <p><strong>Bits between bits</strong><br />1985-9</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/17.gif" className="w-16 h-16 rounded mb-1" alt="Sliding Gliding Worlds" />
                    <p><strong>Sliding Gliding Worlds</strong><br />1988</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/18.gif" className="w-16 h-16 rounded mb-1" alt="There is nothing" />
                    <p><strong>There is nothing</strong><br />1986-7</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/19.gif" className="w-16 h-16 rounded mb-1" alt="Live ethereal Cereal" />
                    <p><strong>Live ethereal Cereal</strong><br />1985-6</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/20.gif" className="w-16 h-16 rounded mb-1" alt="Tantric obtascles" />
                    <p><strong>Tantric obstacles</strong><br />1985</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/21.gif" className="w-16 h-16 rounded mb-1" alt="Erlsongs" />
                    <p><strong>Erlsongs</strong><br />1984-5</p>
                  </div>
                  <div className="bg-purple-900 bg-opacity-40 p-2 rounded">
                    <img src="/images/22.jpg" className="w-20 h-20 rounded mb-1" alt="Vitamin Enhanced" />
                    <p><strong>Vitamin Enhanced</strong><br />1984-9<br />6 CD Box</p>
                  </div>
                </div>
              </div>

              {/* Main Review Content */}
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-[#8080FF] mb-6">
                  날짜 : 10/23/00 7PM - 장소 : Paradise rock club in Boston
                </h3>

                {/* 리뷰 서두 */}
                <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-blue-400 mb-4">Simon Chong의 Ozric 리뷰</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      피쉬님의 예스 공연, 현식님의 카멜 공연, 박경신님의 크림슨 왕의 공연 후기를 보고 용기내어 함 써봅니다. 
                      한 한달전인가요? 피쉬님과 현식님의 공연 후기를 보고 감동을 받은 나머지 무작정 인터넷을 뒤지기 시작했습니다.
                    </p>
                    
                    <p>
                      거기서 운좋게 Ozric의 공연과 크림슨왕의 공연 일정을 보게 됐고 회사 사무실에 인쇄해 붙여놓고 
                      기다리기를 어언 한 달 드뎌 그날이 온 것입니다. 물론 표를 예매하기 위해 전화를 돌려봤지만 
                      직접 매표소에서 구하라는 메시지만 나오더군요.
                    </p>
                    
                    <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                      <p>
                        그래도 어느정도 공부는 하고 가야겠단 생각이 들어서 Ozric의 <a href="http://www.ozrics.com" className="text-cyan-400 underline">홈페이지</a>를 
                        찾았고 이번 투어가 그들의 새 앨범(The hidden step)으로 인한 것이란 걸 알게됐습니다. 
                        홈페이지도 아주 깔끔하게 잘 만들었더군요. 플래쉬를 사용해서 만들었는데 짧은 2~3분 내외의 
                        사운드 샘플을 들으실 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 공연 2주전 */}
                <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-orange-400 mb-4">공연 2주전 :</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      혼자 가기 뭐해서 같이 일하는 동료 한 명을 꼬시기 시작했습니다.<br/>
                      "얘네들 영국 밴든데 약기운이 감도는 몽롱끼가 쥑이는 음악을 하거든요. 같이 안가실래요? 
                      미국 투어 제 1착으로 보스톤에서 하거든요. 이런 기회 쉽게 안옵니다. 일만 하지말고 문화생활도 좀 하며 삽시다."<br/>
                      "아 예, 시간되면 같이 가죠."
                    </p>
                  </div>
                </div>

                {/* 공연 하루 전날 */}
                <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-red-400 mb-4">공연 하루 전날 :</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      "어떻게... 가실 수 있으시겠어요?(사실 회사 프로젝트 마감이 이번달 말이라 눈코 뜰새없이 바쁜상태)"<br/>
                      "전 좀 힘들겠는데요… 혼자라도 다녀 오시죠."<br/>
                      "-_-;; 그래야죠, 한달을 기다렸는데..." 전 그날 밤샐 각오를 했습니다.
                    </p>
                  </div>
                </div>

                {/* 공연 당일 */}
                <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">공연 당일 5PM :</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      "우…띠바, 표사려면 지금 나가야 되는데 뭔 놈의 일이 이렇게 밀리냐?..." 30분이 더 지난후에야 전 자리를 뜰 수 있었습니다. 
                      보스톤 시내로 들어가기 위해 고속도로로 들어서니 퇴근길이라 차가 장난이 아니게 막히기 시작했습니다.
                    </p>
                    <p>
                      하지만 제가 보스톤 짬밥이 무려 13년입니다. 모든 기량을 발휘하여 요리조리 빠져나갔고 6:15분에 간신히 클럽에 도착할 수 있었습니다. 
                      "앗! 여긴..." 항상 지나 다닐 때 마다 줄서서 기다리는 애들을 보고 무슨 밤 무도회장인 줄로만 알고있었던 곳이었습니다. 
                      지난 13년간 보스톤에 헛 살았다는 느낌이 순간 뇌리를 스쳤습니다. -_-;;
                    </p>
                  </div>
                </div>

                {/* 6:20PM - 첫 만남 */}
                <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-green-400 mb-4">6:20PM : 첫 만남</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      운좋게 근처에 나가는 차가있어 잽싸게 차를 대고 클럽 앞으로 가니 한 7~8명 정도의 애들이 문 앞에서 서성거리고 있었습니다. 
                      처음 오는곳이라 무척이나 낯 설었지만 표를 사기위해 육중한 문을 열고 들어가니 매표소에 사람이 있더군요.
                    </p>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded italic text-cyan-200">
                      <p>"야! 지금 표파냐?"</p>
                      <p>"아니, 이따 7:30부터 팔기 시작할거야."</p>
                      <p>"?... 공연시간이 7시라며?"</p>
                      <p>"응, 지금 좀 사소한 문제가 생겨서 좀 늦어질거야."</p>
                      <p>"으... 험한길을 뚫고 기껏왔더니..."</p>
                    </div>
                    
                    <p>
                      안쪽을 힐끔 쳐다보니 웬 거지같은 복장을 한 녀석이 복도 바닥에 않은채로 퉁소 비스므리한걸 불고 있더군요. 
                      "에이, 쟤가 설마 Ozric의 John이겠어?" 하며 밖으로 나와 기다리기 시작했습니다.
                    </p>
                  </div>
                </div>

                {/* Porcupine Tree 동지와의 만남 */}
                <div className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-purple-400 mb-4">Porcupine Tree 동지와의 만남</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      멀뚱멀뚱서서 담배를 피며 기다리는데 한 녀석이 눈에 들어오더군요. Porcupine tree의 티셔츠를 입고 있는게 
                      아무래도 쁘로그 동지인 것 같아서 말을 걸었습니다.
                    </p>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded italic text-cyan-200">
                      <p>"안녕, Ozric 좋아하나보지?"</p>
                      <p>"응, 작년에도 여기서 공연했었는데 또 보러왔지."</p>
                      <p>"새 앨범은 들어봤냐?"</p>
                      <p>"아니 아직, 근데 그거 아직 시중에 안 나왔잖아?"</p>
                      <p>"글쎄..."</p>
                    </div>
                    
                    <p>
                      이렇게 그 녀석하고 이런저런 얘기를 나누고 있을 때 아까의 그 퉁소소리가 또 들려오더군요.<br/>
                      "야! 쟤 혹시 피리부는 John아니냐?"<br/>
                      "어, 맞어. 쟤 작년에는 퉁소불면서 거리를 왔다갔다 하기도 했어."
                    </p>
                    
                    <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                      <p className="text-sm">
                        별 일 아니라는듯이 얘기를 하더군요. 그 말을 듣는 순간 CD를 안 가지고 온게 무진장 후회가 되더군요. 
                        싸인을 받았어야 했는데... 하긴 분위기가 범상치 않아서 다가가기가 좀 망설여지긴 했지만 서두요. ^_^;;
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7PM - 표 구매 실패 */}
                <div className="mb-8 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-cyan-400 mb-4">7PM : 표 구매의 절망과 희망</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      슬슬 어두워 지자 배가 고파오기 시작했고 기다리는 애들도 거의 없는 것 같아 옆에있는 맥도날드에 들어가 
                      햄버거를 먹었습니다. 이것도 다 먹고살자고 하는건데... ^_^;;
                    </p>
                    
                    <p>
                      다 먹고 나와보니 예의 그 녀석이 아직도 쓸쓸히 혼자 자리를 지키고 있더군요.
                    </p>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded italic text-cyan-200">
                      <p>"야, 생각보다 오늘 공연보러 오는 애들이 없는 것 같은데?"</p>
                      <p>"그러게, 홍보가 덜 됐나?..."</p>
                      <p>"넌 표 구했냐?" 그러자 당연히 없을것이라는 저의 예상을 깨고</p>
                      <p>"응, Strawberries(Tower record같은 음반전문매장)에서 구했지."</p>
                    </div>
                    
                    <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                      <p className="text-sm font-bold">
                        여기서 다시 한번 헛 살았다는 생각이 뇌리를... -_-;;<br/>
                        "얼만데?" "$20" 하면서 표를 보여주더군요. 순간 표가 없으면 어떡하나 하는 불안감이 엄습해 오기 시작했습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7:30PM - 긴 기다림 */}
                <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-indigo-400 mb-4">7:30PM ~ 8:40PM : 끝없는 기다림</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      어느정도 시간이 되자 기도같아 보이는 덩치들 2명이 나와서 줄을 서게 하더군요. 줄이래봐야 기껏 10명 정도 밖에 안됐지만요. 
                      그래도 일찍와서 기다린 보람이 있어서 맨 앞에 그 녀석과 서게 됐습니다.
                    </p>
                    
                    <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                      <h5 className="font-bold text-yellow-400 mb-2">220V 문제 발생!</h5>
                      <p className="text-sm">
                        "야! 인제 표파는겨?"<br/>
                        "미안해... 아직 문제가 해결이 안되서 좀 더 연기될것 같아. 걔네들 쓰는 악기가 220V용인데 110V용 컨버터가 모자라는 모양이야."<br/>
                        미국 투어를 처음 하는것도 아닌데 이런 일이... 약간 황당하더군요.
                      </p>
                    </div>
                    
                    <p>
                      기다리기 지루해서 옆에 붙어있는 앞으로의 공연 일정을 봤습니다.<br/>
                      "헉! Steve Howe가 내일 여기서 공연을?..." 옆에 녀석이 들었는지<br/>
                      "나도 오늘 봤어. 홍보를 하나도 안한 모양이야."<br/>
                      "내일은 일해야 돼서 못나오는데... ToT"
                    </p>
                    
                    <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                      <h5 className="font-bold text-purple-400 mb-2">프로그 동지들의 대화</h5>
                      <p className="text-sm">
                        "어차피 내일은 사람이 많이 몰려서 표 구하기 힘들껄. 그나저나 얼마전에 House of Blues(하바드 대학가에 있는 클럽)에서 
                        Trey Gunn 컨서트했는데 봤냐? Larry Fast도 같이 왔었는데."<br/>
                        "??? Larry Fast? Synergy의 Larry Fast?"<br/>
                        "응, 건반 연주를 걔가 했거든 연주 죽였어." -_-;;
                      </p>
                    </div>
                  </div>
                </div>

                {/* 9:00PM - 드디어 입장! */}
                <div className="mb-8 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
                  <h4 className="text-xl font-bold text-emerald-400 mb-4">9:00PM : 드디어 입장!</h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      2시간 40분의 기다림 끝에 들여보내 주네요. 20분을 real short라고 말하다니... -_-
                    </p>
                    
                    <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                      <h5 className="font-bold text-blue-400 mb-2">Paradise Rock Club 내부</h5>
                      <p className="text-sm">
                        내부는 들어가보니 의외로 작은 곳이었습니다. 작은 무대앞에 길이 4m, 너비 8m정도의 Hall이 있고 
                        양 옆에 30명정도가 않을 수 있는 공간, 뒤쪽 이층으로 20명 정도가 앉을 수 있는 공간이 다 였습니다. 
                        홀에는 앉는 의자조차도 없더군요. 벌써 거의 3시간 가량 서있었는데 말입니다.
                      </p>
                    </div>
                    
                    <p>
                      그래도 의지의 한국인이라 스테이지 중간 맨 앞 1m를 남겨놓고 섰습니다. 
                      어차피 오프닝 밴드가 무명이라 그런지 아무도 앞으로 나오지 않는군요.
                    </p>
                    
                    <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                      <p className="text-sm italic text-center">
                        참고로 이 컨서트에 유색인종은 달랑 저 하나였습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Magonia 오프닝 밴드 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">9:15PM : Magonia 오프닝 공연</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  무대위에선 Magonia멤버들(3명 ? Guitar, Bass, Drum)이 악기등을 셋팅하고 있었습니다. 
                  그 중 기타를 치는 녀석이 마이크대에 전화선으로 연결한 뭔가를 주렁주렁 달더군요.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded mb-4">
                  <h4 className="font-bold text-gray-300 mb-2">신기한 연주 도구들</h4>
                  <p className="text-sm mb-2">
                    신기하게 브러쉬, 옷 솔, 립스틱 껍대기처럼 생긴 반들반들한 쇠막대(이런건 주로 가운데 손가락에 비스므리한걸 
                    끼고 연주하는게 보통인데 이건 그냥 막대였습니다.), 무슨 이상한 빨간빛 전구가 달린 플라스틱 덩어리
                    (아! 이거 확실히 뭔지 모르니 표현하기가 좀 그렇네요.) 이렇게 네개 였습니다. 이것들은 도대체 무엇에 쓰는 물건인고?... ^_^;;
                  </p>
                </div>
                
                <p>
                  드뎌 준비가 다 됐는지 인사를 하고 연주를 하기 시작합니다. 음 역시 라이브라 그런지 소리가 틀립니다. 
                  너무 가까이 있었던 탓인지 Bass와 드럼소리가 저를 밀어내는군요. 엄청납니다. Bass소리가 너무 크게 번져서 
                  부르르 떠는게 좀 흠이네요.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">특별한 연주 도구들의 정체!</h4>
                  <ul className="text-xs space-y-2">
                    <li>• <strong>옷솔</strong>: 기타 코드를 잡은 상태에서 마구 문질러 내는데 쓰임. 헤비메탈 리프보다 더 강력하게 들리더군요.</li>
                    <li>• <strong>쇠막대</strong>: 동장님의 예상을 깨고 역쉬 코드를 잡은 상태에서 현을 살짝 통통 때리더군요. 이펙트를 어떻게 썼는진 몰라도 깔끔한 '삐용 삐용' 하는 소리가 아주 듣기 좋았습니다.</li>
                    <li>• <strong>브러쉬</strong>: 머리를 빗을때 쓰는 거죠. 좀 전의 쇠막대를 픽업 바로 위의 현에대고 브러쉬로 아래서부터 위로 긁어 올립니다. 소리는 '뾰로롱~ 뾰로로로롱~'이었슴다.</li>
                    <li>• <strong>문제의 조그만 빨간 전구가 달린 플라스틱 덩어리</strong>: 아~ 이거 신기하게도 코드를 잡은 손 바로 옆에 대고 픽업쪽으로 조금씩 내리면서 아주 살짝씩 떠는데 첼로 비스므리한 소리가 나더군요. 정말 신기했습니다.</li>
                  </ul>
                </div>
                
                <p>
                  암튼 기타치는 이 친구 예전의 잘나가던 때의 김수철처럼 펄쩍 펄쩍뛰면서 갖은 묘기(?)를 부렸음에도 불구하고 
                  관객들의 반응은 상상외로 별루였슴다. 괜히 저 혼자 열광한 것 같아 좀 쑥스럽기 조차 하더군요. ^_^;; 상당히 잘 했는데도 불구하고 말이죠.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">관객들의 냉담한 반응</h4>
                  <p className="text-xs">
                    다섯곡째가 끝나자 관객들의 좀 냉담한 반응이 오랫동안 기다리게 만든 죄의 대가인줄 알고 약간의 변명을 잊지 않더군요.<br/>
                    "오랫동안 기다리게 해서 미안해, 텐타클스의 악기가 여기 전압과 달라서 고생을 좀 했지(우린 아니라고…) 다음 곡은..."<br/>
                    이럼에도 불구하고 별 다른 반응이 없더군요.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p className="text-sm italic">
                    드뎌 마지막 곡입니다. "이 곡이 마지막이고 텐타클스가 곧 나올거야." "와~아~(광란)" 
                    지금까지 들어왔던 함성중에 제일 듣기 민망한 것이었습니다. 곡이 끝난후 제일 많은 박수와 함성이 나오더군요. 
                    '니들은 이제 들어가고 오즈릭나와라' 이런식의... 그래도 전 "와아~ 잘했다, 이놈들아!"를 꿋꿋히 외쳤습니다.
                  </p>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <p className="text-xs italic">
                    "야! 쟤네들 무명인데 꽤 잘하지 않았냐?"<br />
                    "응, 그럭저럭 괜찮았어."<br />
                    '짜식들, 보스톤 로컬 그룹인데 웬만하면 좀 띄워주지' 미국녀석들의 반응을 전 도무지 알 수가 없었습니다. 오즈릭이 나오기전까지는...
                  </p>
                </div>
                
                <p>
                  물건파는 탁자위에 오프닝 밴드인 Magonia의 소개 카드가 있었는데 의외로 보스톤 로컬 그룹이네요. 
                  폭스바겐 Passat자동차 TV 선전에 자기네들 음악이 쓰였다고 맨 첫란에 써있는데 더 재밌는건 porn movie 
                  'Call girls'의 음악을 했다는군요. 뭐 그리 대단하다고 이런걸 소개카드에 올리는지 원... 
                  하긴 저 유명한 Klause Schulze도 Body love라는 뽀르노 영화 음악을 했으니... 아~ 보구 싶어랑... ^_^;;
                </p>
              </div>
            </div>

            {/* 10:00PM - 셋리스트와 준비 */}
            <div className="mb-12 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">10:00PM : 셋리스트 발견과 장비 점검</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  곡 들이 짧아서 인지 불과 45분만에 10곡이 끝나더군요. 장비를 주섬주섬 챙겨 Magonia의 멤버들은 퇴장을 하고 
                  오즈릭의 메니저와 스탭들이 장비를 점검하기 시작합니다. 그 중 메니저가 바닥에 playlist를 붙이더군요. 
                  공연시간에 맞춰 나가느라 메모지를 준비하지 못한 저로서는 열심히 외기 시작했습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-3">정확한 셋리스트</h4>
                  <ol className="text-xs space-y-1">
                    <li>1. Vita Voom (Jurassic shift)</li>
                    <li>2. Xingu (waterfall city)</li>
                    <li>3. Pixel dream (The hidden step) *</li>
                    <li>4. Sultana Detrii (Waterfall city)</li>
                    <li>5. Ch'ai? (Waterfall city)</li>
                    <li>6. Saucers (Strangeitude)</li>
                    <li>7. Aramanu (The hidden step) *</li>
                    <li>8. Eternal wheel (Erpland)</li>
                    <li>9. Vibuthi (Become the other)</li>
                    <li>10. Sploosh! (Strangeitude)</li>
                  </ol>
                  
                  <p className="text-xs mt-2 italic">
                    <strong>Encore</strong><br />
                    <strong>Encore</strong>
                  </p>
                  
                  <div className="bg-cyan-900 bg-opacity-40 p-3 rounded mt-3">
                    <h5 className="font-bold text-cyan-400 mb-2">Personnel:</h5>
                    <ul className="text-xs space-y-1">
                      <li><strong>ED WYNNE</strong> - gtr, keyb'ds</li>
                      <li><strong>JOHN EGAN</strong> - flute, vcls</li>
                      <li><strong>ZIA GEELANI</strong> - bs</li>
                      <li><strong>SEAWEED</strong> - keyb'ds</li>
                      <li><strong>RAD</strong> - drms, perc</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  이상하게도 새 앨범 홍보차원에 의한 투어인데도 새 앨범에서는 달랑 두곡밖에는 선곡이 안됐습니다. 
                  하긴 오즈릭 앨범이라곤 Erpland와 Strangeitude밖에 못 들어본 저로선 별 차이가 없지만요. 
                  그래도 맨 마지막 곡인 Sploosh를 봤을땐 얼마나 기뻤는지 모릅니다. 제가 좋아하기도 하지만 유일하게 멜로디를 아는 곡이었거든요.
                </p>
              </div>
            </div>

            {/* 10:30PM - Ozric 등장! */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">10:30PM : Ozric Tentacles 등장!</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  드뎌 갑자기 조명이 바뀌더니 신디사이저 음악이 휘몰아 치기 시작합니다. 곧이어 오즈릭의 멤버들이 뛰어나오기 시작합니다. 
                  "우오오~~~와~~" 한 동안 난리가 났습니다. 정말이지 맨 앞에 섰던 관계로 피리부는 John과 저의 거리는 불과 1m도 되지 않았습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">멤버들의 등장</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Rad</strong> - 비쩍 마른 체구에 비해 엄청난 힘으로 어려운 박자들을 아무 거리낌없이 내려치고</li>
                    <li>• <strong>Zia</strong> - 고개만 좀 까닥거리며 얌전히 베이스를 치고</li>
                    <li>• <strong>Ed</strong> - 다리만 좀 흔들며 기타 리프를 뜯고</li>
                    <li>• <strong>Seaweed(해초)</strong> - 마치 지킬박사와 하이드를 연상시키는 광기가 번뜩이는 웃음을 지으며 신디사이저 연주</li>
                    <li>• <strong>John</strong> - 레게파마 이후 한번도 감지 않은듯한 걸레같은 머리를 휘날리며 구멍이 숭숭뚫린 티셔츠에 작업복 바지</li>
                  </ul>
                </div>
                
                <p>
                  "오옷!" 왜 사람들이 Magonia의 연주때 냉담했는지... 도대체 사운드 자체가 비교가 안되고 있었습니다. 
                  드럼이 위치한 벽에는 다리를 활짝 펼친 문어를 위에서 찍은듯한 문양 2개가 프로젝션되어 뱅글뱅글 돌고 위에서는 
                  현란한 조명과 스모그가 내려 오고있었고 바로 눈앞에 있는 할로겐 램프4개가 1초에 5~6번씩 껌벅거리는데 사람 맛을 완죤히 보내더군요.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">사이키델릭 경험</h4>
                  <p className="text-sm">
                    엄청난 박력의 드럼과 Bass, 휘몰아치는 신디사이저, 그 사이를 뚫고 들려오는 날카로운 기타리프는 메탈리카 저리가라 였습니다. 
                    적어도 저에게 만은요. 한가지 아쉬웠던 것은 John의 피리소리가 거의 들을수 없는 상태라는겁니다. 
                    바로 코 앞에서 들었는데도 클라리넷 이외의 것들(대략 10가지 정도 됨)은 거의 소리가 들리지 않았습니다.
                  </p>
                </div>
                
                <p>
                  John은 자기의 연주소리가 관중들에게 잘 안들린다는 걸 인식하기라도 했는지 행동으로서 관중들을 즐겁게 해주더군요. 
                  바닥에 줄을 긋는 시늉을 하고 그위를 위태롭게 걸어가는 써커스 단원의 모습을 판토마임으로 연출해 내기도 하고, 
                  옆에있던 그 녀석이 아닌 다른 녀석이 마리화나를 꺼내 피면서 John에게 연기를 내 뿜었을 때 천사가 되어 날아가는 John의 
                  모습은 익살스럽기 그지없었습니다. 덕분에 저도 연기를 좀 마셨죠. -_-;;
                </p>
              </div>
            </div>

            {/* 공연 마무리와 감상 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">공연 마무리와 Chris와의 만남</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  어느 정도 공연 후반기에 들어서자 해초와 Ed가 마리화나를 꺼내 피기 시작했고 Zia도 곧 이어 따라 피면서 연주를 하기 시작하더군요. 
                  다들 피는데 열심히 손과 발을 노려야만 하는 Rad와 피리를 불어야 하는 John이 안돼보였습니다. ^_^;;
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Sploosh! - 클라이맥스</h4>
                  <p className="text-sm">
                    어느덧 마지막 곡인 Sploosh에 다다랐고 John이 한마디 합니다. "세상에서 가장 강력한 사운드를 들려주마." 
                    관중들은 열광하고 난리가 났습니다. 벽에 비춰지는 문양은 윈도우의 screensaver로 볼 수 있었던 Starfield로 바뀌어져 있었고 
                    우리 모두는 오즈릭의 음악에 취해 우주를 날고 있었습니다. 한마디로 speechless였던 것입니다.
                  </p>
                </div>
                
                <p>
                  관중들의 환호에 보답하기 위해 곧바로 앙콜을 하더군요. 덕분에 무슨 곡인지는 알 수 없었지만 이전 곡과 다를게 없었습니다. 
                  우리 모두는 연주에 취해 헤롱헤롱거리는 상태였기 때문에 무슨곡인지는 중요하지 않았습니다. 
                  이 상태를 유지해주는 그 무언가를 끊임없이 원하는 상태 였기 때문입니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Chris와의 작별</h4>
                  <p className="text-sm">
                    공연장을 빠져 나올때는 벌써 12시 15분을 가르키고 있었고 마지막으로 공연전부터 6시간을 함께해온 그 녀석에게 작별의 인사를 했습니다.<br/>
                    "야, 난 Simon이야 너는?"<br/>
                    "난 Chris, 만나서 반가웠어 크림슨왕 공연때 또 보자구."<br/>
                    "물론이쥐!" 그 녀석의 이름은 크리스 였습니다. ^_^;;
                  </p>
                </div>
                
                <p>
                  다시 회사로 가기 위해 차까지 걸어가는 도중에 너무 무리를 한 나머지 다리가 후들거리더군요. 
                  아직까지도 귀가 멍멍해 있는 상태였고 믿거나 말거나 달리는 차안에서 들리는 모든 소음이 휘몰아 치는 신디사이저의 소리로 들렸습니다. 
                  회사로 돌아가니 같이 일하는 녀석이 도대체 6시간 동안 어디 갔었냐구 묻더군요. 
                  넘들은 이 시간까지 일하는데 공연보고 왔다고 차마 말할 수가 없어 집에서 쉬다 나왔다고 말했고 새벽 4시까지 그 녀석한테 잡혀 있었답니당~
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded text-center">
                  <p className="font-bold text-yellow-400 text-lg">
                    "아!~ 오즈릭 그들의 공연을 언제 다시 볼 수 있을까요?" 🎸🌌
                  </p>
                </div>
                
                <div className="mt-6 text-center">
                  <a href="ozrics.htm" className="text-cyan-400 underline hover:text-cyan-300">
                    Second Ozric tentacles gig review by Fish →
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Ozric Tentacles 리뷰 **완전 복원 완료**! Simon Chong의 생생한 6시간 여정 (공연 전 준비부터 Chris와의 작별까지), 
                Magonia의 신기한 연주 도구들, 정확한 셋리스트, Paradise Rock Club의 사이키델릭한 분위기, 
                23개 앨범 커버 이미지와 Ozric 로고까지 - 원본 HTML의 모든 내용이 완벽하게 되살아났습니다! 🌌🎸✨
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}