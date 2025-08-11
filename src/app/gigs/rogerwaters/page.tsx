import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roger Waters @ Antioch TN, USA - June 6, 2000 | Yebadong',
  description: 'Roger Waters In the Flesh Tour 완전 복원 리뷰 (2000년 6월 6일, Amsouth Amphitheater)',
};

export default function RogerWatersPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="border border-red-500 p-4 mb-6 bg-black bg-opacity-70 rounded">
            <h5 className="text-sm mb-2">Gig Review</h5>
            <h1 className="text-4xl font-bold text-[#8080FF]">
              Roger Waters @ Antioch TN, USA - June 6, 2000
            </h1>
          </div>
          
          <div className="mb-6">
            <Image 
              src="/images/roger-waters/rogertix.jpg" 
              alt="Ticket for Roger Waters Gig" 
              width={414} 
              height={145} 
              className="mx-auto border rounded"
            />
            <p className="text-sm italic mt-2">Ticket for Roger Waters Gig</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">
            
            {/* Introduction Section */}
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <Image 
                  src="/images/roger-waters/rw0.jpg" 
                  alt="Roger Waters" 
                  width={169} 
                  height={219} 
                  className="w-full border rounded"
                />
              </div>
              
              <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                <p>
                  지난 6월 2일 플로리다의 Tampa에서 Roger Waters의 
                  1999-2000 In the Flesh tour의 2차 투어가 시작되었습니다. 
                  그 세번째 일정으로 내쉬빌 근처의 Antioch의 Amsouth Amphitheater에서 
                  열렸던 6월6일의  공연에 다녀왔습니다.
                </p>
                
                <p>
                  예바동에 7년동안 Roger Waters의 씨디 리뷰, 비디오 리뷰, 부틀렉 리뷰
                  등등만을 올리다가 이렇게 생 라이브 소식을 쓰게되어 정말 감격스럽습니다. ^^;
                </p>
                
                <p>
                  사실 Roger Waters는 의심의 여지 없이 저의 페이버릿 아티스트입니다.
                  그는 16년 전에 Yes로부터 1위자리를 탈취한 이후 그동안 저의 
                  퍼스날 챠트의 1위 자리에 머무르고 있죠.
                </p>
                
                <div className="bg-blue-900 bg-opacity-50 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-300 mb-2">Personal Chart History</h4>
                  <div className="text-xs space-y-1">
                    <p>1976 - 1977: The Smokie</p>
                    <p>1978 - 1979: The Bee Gees</p>
                    <p>1980 - 1981: Led Zeppelin</p>
                    <p>1981 - 1982: Pink Floyd</p>
                    <p>1983 - 1984: Yes</p>
                    <p>1985 - 2000: Roger Waters</p>
                  </div>
                </div>
                
                <p>
                  이런 Roger Waters가 13년만에 개시한 순회공연이 
                  어쩌다보니 삼십여년만의 저의 첫 미국생활과 겹치게 되어.. 
                  것도 제 집에서 삼십분 정도만  차로 달려가면 되는 거리에서 
                  공연이 열리게 되어 .. 정말 평생 다시 한번 올까말까 한 기회라고 
                  생각이 들어 지체없이 지난 3월 표를 예매하고 매일매일 
                  결혼날짜 기다리는 35세 노처녀처럼 목을 빼고 있었습니다.
                </p>
                
                <p>
                  드디어 디데이가 밝아오고..
                  일을 하는둥 마는둥 빈들대다가 세시쯤 칼퇴근(?)하여 
                  마누라를 픽업해서 공연장으로 향했습니다.
                  마누라는 물론 그전에는 Roger Waters의 R자도 몰랐으나..
                  (아.. 작년 In the Flesh 전반부 공연 부틀렉을 
                  내가 하도 많이 굽고있었던 탓에.. 
                  Roger Waters..하면 &apos;남편을 지겹도록 씨디를 굽게 만드는 가수&apos;  
                  정도로는 알고 있었습니다.)
                  그동안 꾸준히 차안에서 Roger Waters의 곡들을 틀어놓아
                  나름대로 캐쥬얼 팬 정도로 만든 상태였습니다.
                </p>
              </div>
            </div>

            {/* Pre-Concert Experience */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">공연장 도착과 기다림</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    8시에 공연이 시작이고 5시 15분부터 주차장문이 열린다는
                    사실은 알고 있었지만. 미리 한번 답습을 다녀온 바..
                    그리고 그 Amsouth Amphitheater에 많이 갔던 녀석들의
                    조언을 들은 바.. 조금만 늦게가면 주차장 들어가기가
                    무척 막혀서 힘들거라는 생각이 있어서.. 황당하게도 
                    일찍... 채 네시가 되지 않아서 공연장에 도착했습니다.
                  </p>
                  
                  <p>
                    버지니아... 조지아.. 번호판으로 봐서는 다섯시간
                    이상씩 운전을 해서 왔을 녀석들의 차가 미리 몇대
                    나보다 일찍 와서 기다리고 있더군요.
                    Harvested Records의 티셔츠를 입고있는 녀석들도
                    몇 보였습니다. Echoes 메일링리스트에서 
                    CDR 위드 조직을 만든 녀석들인데 이번 공연이 
                    끝나고 술집에서 만나기로 했다더군요.
                  </p>
                  
                  <div className="bg-yellow-900 bg-opacity-50 p-4 rounded">
                    <h4 className="font-bold text-yellow-300 mb-2">마누라의 투덜거림</h4>
                    <p className="text-sm">
                      따가운 햇볕아래 염려했던 마눌님의 투덜거림이
                      생각보다 일찍 시작됐습니다.
                    </p>
                    <div className="mt-2 space-y-1 text-xs italic">
                      <p>&quot;아.. 뜨거워 죽겠네.. 왜 이렇게 일찍 와갖고. 저거 미리 들어가는 차들은 뭐야 ?&quot;</p>
                      <p>&quot;쫌만 참아..아마 쟤네들은 여기서 일할 스탭들일거야&quot;</p>
                    </div>
                  </div>
                  
                  <p>
                    솔직히 좀 걱정이 되긴 했습니다. 앞으로 적어도
                    밤 열한시까지는 공연장에 같이 있어야 할텐데 ..
                    것도 줄창 서있어야 할텐데..
                    담배냄새 술냄새 마리화나냄새 지겹도록 맡아야 할텐데..
                    마누라가 과연 견딜 수 있을까.
                    배고프다고 투덜거리면 어떡하지..
                  </p>
                  
                  <p>
                    투덜거리던 마누라가 잠시 기절한 사이에 
                    꽤 시간이 빨리 흘러 :-) 공연장에 들어갈 수 있었습니다.
                    혹시나 해서 가지고 들어가려 했던 도시락..등등은
                    생각보다 엄중한 센터까기 :-) 덕에 못가지고 들어가고 
                    주차장에서 미리 도시락을 까먹으며 주변 분위기를
                    살폈습니다.
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/rw3.jpg" 
                    alt="Pink Floyd T-shirt" 
                    width={221} 
                    height={196} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">Pink floyd 티셔츠는 어떤 그림일까요?</p>
                </div>
              </div>
            </div>

            {/* Fan Demographics */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">팬들의 연령대와 복장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  &quot;오빠 입은 티셔츠랑 똑같은 티셔츠가 왜 이렇게 많아 ?&quot; &quot;정말 많네&quot;
                  생각보다 젊은 팬들이 많았습니다. 20대가 한 20 % 
                  30대가 한 60 % 나머지 20 % 는 40대 50대 60대의 
                  늙은 팬들이었고 엄마를 따라온 애들도 서넛 있었습니다.
                </p>
                
                <p>
                  녀석들이 입고있는 티셔츠도 주로 핑크 플로이드 티셔츠..
                  간혹 오지오스본이나 레드제플린, 그레이트풀 데드.
                  간혹 작년에 산듯한 Roger Waters 솔로 공연의 
                  티셔츠도 보였습니다.
                  신세대 그룹이라고는 오직 Korn의 티셔츠를 입은
                  녀석을 하나 봤을뿐입니다. 
                  Roger Waters는 이제 그만큼 나이든 팬들에 
                  기대는아티스트가 된것일까요 ?
                </p>
              </div>
            </div>

            {/* Meeting Local Fans */}
            <div className="mb-12 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold text-gray-300 mb-4">현지 팬과의 만남</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    공연장 입구를 몰라 약간 헤매고 있었더니
                    50대 후반 정도 되는 배불뚜기 아저씨가 
                    Pink Floyd 셔츠를 입고 말을 걸었습니다.
                  </p>
                  
                  <div className="bg-blue-800 bg-opacity-50 p-4 rounded">
                    <h4 className="font-bold text-blue-300 mb-2">Pink Floyd 팬과의 대화</h4>
                    <div className="text-xs space-y-1">
                      <p>&quot;느네 공연가냐 ?&quot;</p>
                      <p>&quot;응 그런데 ?&quot;</p>
                      <p>&quot;이쪽으로 가야 입구가 나와 거기가 아냐.&quot;</p>
                      <p>&quot;아 고마워 아저씨. 근데 여덟시에 시작하려나 ?&quot;</p>
                      <p>&quot;어. 내가 작년 아틀란타 공연에서 봤을때도&quot;</p>
                      <p>&quot;정확히 여덟시에 시작했거덩. 걱정하지 마.&quot;</p>
                      <p>&quot; 그때 정말 죽였어. 관객중에 리차드 롸이트도 있었거든&quot;</p>
                      <p>&quot;나도 싸인 받았지 &quot;</p>
                      <p>&quot;뭐라고 ? &quot;</p>
                      <p>&quot;리차드 롸이트. 핑크플로이드 키보드 주자&quot;</p>
                      <p>&quot;어 맞아 존 캐린하고도 친해서 무대에서 내려와 인사하고 그랬다던데.&quot;</p>
                      <p>&quot;존 캐린은 누구지 ?&quot;</p>
                    </div>
                  </div>
                  
                  <p>
                    한잔에 $6 짜리 생맥주를 마실까 말까 고민도 하고..
                    공짜로 주는 카멜 담배를 몇대 피우면서 시간을 죽이고 있었습니다.
                    간혹 담장을 넘어서 밴드의 리허설 하는 소리가 들려오더군요.
                    Money를 잠시 연주하는 소리..그리고 Every strangers&apos; eyes의 
                    인트로의 여자목소리 &apos;Hello~ you wanna cup of coffee ?&apos;가 
                    열몇번 반복되며 담장밖으로 흘러나왔습니다.
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <Image 
                        src="/images/roger-waters/atd.jpg" 
                        alt="Amused to Death" 
                        width={60} 
                        height={60} 
                        className="border rounded"
                      />
                      <Image 
                        src="/images/roger-waters/pros.jpg" 
                        alt="Pros and Cons" 
                        width={60} 
                        height={60} 
                        className="border rounded"
                      />
                      <Image 
                        src="/images/roger-waters/wind.jpg" 
                        alt="Radio Kaos" 
                        width={60} 
                        height={60} 
                        className="border rounded"
                      />
                      <Image 
                        src="/images/roger-waters/music.jpg" 
                        alt="Music from The Body" 
                        width={60} 
                        height={60} 
                        className="border rounded"
                      />
                    </div>
                    <p className="text-xs text-center">Roger의 솔로 앨범들</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Concert Venue Description */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">공연장과 무대 설정</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/pig.gif" 
                    alt="분홍색 돼지 실루엣" 
                    width={172} 
                    height={94} 
                    className="w-full border rounded mb-2"
                  />
                  <p className="text-xs text-center mb-4">분홍색 돼지 실루엣</p>
                  
                  <Image 
                    src="/images/roger-waters/rw1.jpg" 
                    alt="Roger Waters" 
                    width={100} 
                    height={100} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">Richard Gear 닮은 Roger Waters</p>
                </div>
                
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    어느새 여덟시가 되었습니다.
                    Amsouth Amphitheater는 내야 (지정석)과 외야로 나뉘어져
                    있습니다. 내야에는 약 3-4천명 정도가 수용되는 것으로
                    보였구요.. 외야에는 그냥 잔디밭이 펼쳐져 있어 대부분
                    관중들이 담요를 가져와서 그냥 드러눕더군요.
                    약간 좁다 싶은 무대에 드려진 중앙 스크린에는 In the Flesh
                    로고가 새겨진 분홍색 돼지의 실루엣이 비춰지고 있었습니다. 
                    무대 양쪽의 스크린에는 광고가 열심히비춰지고 있었구요.
                  </p>
                  
                  <p>
                    공연시작할때가 되니 관중들이 거의 입장을했는데.. 
                    지정석의 약 90 % 정도가 차고.. 외야 잔디밭은
                    한 70 % 정도 들어찬 것으로 보였습니다.
                    약 만 오천명 정도 될까요 ? 
                    예상했던대로 sold out은 아녔습니다.
                  </p>
                  
                  <p>
                    아.. 마악 어둑어둑 해져서 공연하기 딱 좋은 분위기가
                    무르익고 있었습니다. 
                    공연 시작 전까지는 계속 음악을 틀어주던데..
                    주로 Bob Dylan의 곡과 John Lennon의 곡들..
                    그리고 작년 투어때도 언급이 되었습니다만
                    신기하게도 Porcupine Tree의 곡을 틀어주더군요.
                    Waiting이라는 곡이었습니다. 아마 Roger도 Porcupine Tree
                    의 팬이 아닐까 싶네요. :-)
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Begins */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">공연 시작 - In the Flesh</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  &quot;Ladies and Gentlemen, Please Welcome Mr. Roger Waters !!&quot;
                  어나운스먼트와 함께 Doyle Bramhall II, Snowy White, 
                  Andy Fairweather-Low등등 밴드 멤버들이 줄줄이 입장했습니다.
                  아.. Roger는...이제  56살인 Roger Waters는 ..
                  첫곡 In the Flesh를 위하여 예의 트렌치 코트를 입고 등장했습니다.
                </p>
                
                <p>
                  젊었을땐 코만 삐쭉 큰.. 꽤나 티나는 추남이었지만
                  지금은 적당히 긴 머리가 반백으로 물들고 때로는 인자한
                  표정이 어울리는 중늙은이로 변신한 모습이었습니다.
                  혹자는 늙으면서 리처드 기어를 닮아간다고도 했는데..
                  글쎄요.  :-)
                </p>
                
                <p>
                  무대는 2단으로 만들어져 드러머와 건반주자 뒤쪽으로 
                  높다란 2층 스테이지가 마련되어있었습니다.
                  Roger는 2층으로 등장하더군요. 물론 이것은 In the Flesh ?
                  를 연주하기 위한 연출입니다. 파시스트로 가장한 Roger가
                  무대위에 올라가자 모든 관중들이 일제히 주먹으로 
                  crossed hammer sign을 만드는 장관을 연출하였습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-300 mb-2">마누라의 황당한 코멘트</h4>
                  <p className="text-sm">
                    백업 뮤지션은 모두 1층으로 등장했지만 Roger혼자 2층으로
                    등장하는것을 본 마누라는..  국민학교 시절 첫사랑을 
                    양로원에서 만난 할아버지마냥.. 정신이 완전히 Roger 때문에
                    빠져있는 나에게.. 무척이나 황당한 말로 정신을 들게 했습니다.
                  </p>
                  <div className="mt-2 text-xs italic">
                    <p>&quot;치..혼자 왕자냐.. 2층으로 나오고..&quot;</p>
                    <p>&quot;어.. 저게 원래 The Wall 공연때 저렇게 했거든 저게 Fascist 로 변한 Pink의.... 으악 !! 로저 !!!&quot;</p>
                  </div>
                </div>
                
                <p>
                  아.. 정말 처음이었습니다. 모든 곡을 다 알고.
                  미리 곡의 순서까지 꿰고 있고.. 가사까지 모두 따라
                  부를수 있는 공연은 저에게 처음이었습니다.
                </p>
                
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  <p>So ya thought ya might like to go to the show..</p>
                  <p>...</p>
                  <p>I got some bad news for you sunshine,</p>
                  <p>Pink isn&apos;t well he stay back in the hotel...</p>
                </blockquote>
                
                <p>
                  벌써 주섬주섬 마리화나를 몰래 꺼내는 녀석들.
                  일찍 부터 진탕 마신 마가리타와 맥주로 맛이가 있던 녀석들.
                  모두 합창으로 따라부른 In the Flesh ?의 첫소절은 그야말로
                  나에게 척추를 따라 흐르는 전율을 느끼게 했습니다.
                  백 스크린에는 Gerald Scarfe의 만화 &apos;marching hammer&apos;가
                  등장하여 잠깐이나마 20년전 The Wall 공연때가 이랬었을까..
                  하는 추측을 할 수 있게 해주었습니다.
                </p>
                
                <p>
                  아.. Roger의 목소리는 걱정과는 달리 아주 괜찮은 컨디션
                  이었습니다.
                  &quot;There&apos;s one smoking a joint !!&quot; 부분에선 정말 깜짝 놀랄정도로
                  큰 목소리로 불러주어 다들 엄청난 환호성으로 답변했습니다.
                  나는 쪼인트 피우고 있지 않았는데... :-)
                </p>
              </div>
            </div>

            {/* Another Brick in the Wall */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Another Brick in the Wall</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/crosshammer.jpg" 
                    alt="Crossed hammer" 
                    width={215} 
                    height={149} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">Crossed hammer</p>
                </div>
                
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    작년 공연때와는 달리 두번째 곡 The thin ice는 애기 우는
                    소리로만 대체되고 The happiest days of our lives가 연주되었습니다.
                    Another brick in the wall part 2를 라이브로 연주하려면 제 생각에
                    적어도 In the Flesh와 The happiest days of our lives는 
                    같이 연주해 주어야 한다고 생각합니다. 
                    David Gilmour의 Floyd는 달랑 Another brick in the wall part 2만
                    따로 연주하니 뭔가 잘 씨퀀셜하게 어울리지 않고 ..
                    마치 술은 안마시고 안주만 먹는 듯한 기분이 들었거든요. :-)
                  </p>
                  
                  <p>
                    지겹도록 들은 Another brick in the wall part 2.
                    하지만 공연장에서는 절대 지겨울리 없었겠죠 ?
                    특히 이곡에서는 젊은시절의 Scott Gorham과 ..
                    때로는 Stevie Ray Vaughn 까지도 생각나게 하는 Doyle Bramhall II의 
                    기타솔로가 돋보였습니다. Snowy White도 물론..
                    20년 넘게 Roger Waters의 따까리를 했던 제2의 David Gilmour
                    였던 만큼.. 200 % 만족스러운 솔로를 들려줬습니다.
                  </p>
                  
                  <p>
                    Roger의 곡들 (Pink Floyd의 곡들)은 사실 좀 타이트한 구조로
                    되어있어 라이브에서 즉흥연주를 하기에 그다지 적당하지
                    않습니다만.. Another brick in the wall part 2 후반부에서의
                    무차별 기타 솔로 폭격은 약간 추운날씨였음에도 불구하고 
                    콧잔등에 땀이 송골송골 솟을 정도의 스릴을 느낄 수 있게 
                    해주었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Mother */}
            <div className="mb-12 p-6 bg-teal-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-teal-400 mb-4">Mother</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/wall.jpg" 
                    alt="The Wall" 
                    width={181} 
                    height={266} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">The Wall</p>
                </div>
                
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    Roger가 통기타를 메고 등장했습니다. 이제 Mother를 부를차례죠.  
                    The Wall 속 자켓에 있는 Gerald Scarfe의 만화.
                    뚱뚱한 돼지 엄마가 화면이 비추어졌습니다. 그리고.. 간혹..
                    80/81년 공연의 장면들이.. 쌓여진 벽돌과 그 정교했던
                    무대 스케일들이 한장 두장 백스크린을 지나갔습니다.
                    Roger는 자신의 보컬을 충분히 소화해줬고 Gilmour가 불렀던
                    부분은 세명의 여성 백보컬리스트들이 잘 커버해 줬습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* The Final Cut Section */}
            <div className="mb-12 p-6 bg-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-slate-300 mb-4">The Final Cut</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    The final cut.
                    저의 favourite Floyd album입니다만. Roger가 좀더 이 앨범에서
                    많이 불러줬으면 하는 생각은 있었습니다만..
                    두곡밖에..그것도 어쿠스틱 메들리 형식으로 부르고 말거라는 것을
                    잘 알고 있었죠.
                    Take your filthy hands off my desert
                    그리고 southampton dock.
                    오리지널 엘피의 B면을 여는 곡들이죠.
                  </p>
                  
                  <blockquote className="border-l-4 border-red-500 pl-4 italic">
                    <p>Breznev took Afganistan, Begin took Beirut..</p>
                  </blockquote>
                  
                  <p>
                    언젠가 Roger Waters 뉴스그룹에서 과연 이렇게 
                    정치적인 이슈를 왈가왈부하는 Roger의 가사가 
                    all-time-classic-lyrics가 될 수 있을까 하는 
                    토론이 있었습니다. 83년. 앨범이 발표될 때의 
                    상황. 아직 Magaret Thatcher가 영국의 수상이었을때의..
                    그래서 계속 Roger가 Maggie라고 refer하는 Mrs. Thatcher가
                    가사에 계속 등장하죠.
                    비록 정치적인 상황은 17년전과 많이 틀리지만.
                    그의 가사는 아직도 make PERFECT SENSE 입니다. :-)
                  </p>
                  
                  <p>
                    the final cut의 두곡은 오리지널 앨범과 비슷하게.
                    현악반주는 없었지만 엄청난 비행기 폭발음으로 시작되어
                    아주 쇼킹한 분위기를 연출했습니다.
                    southampton dock의 시작부분.
                    언젠가 부틀렉에서 들었던 한 관중의 스크리밍이 무척 감명깊었어서 :-) 
                    저도 같은 부분에서 소리질렀습니다.
                  </p>
                  
                  <div className="bg-red-800 bg-opacity-50 p-4 rounded">
                    <h4 className="font-bold text-red-300 mb-2">팬의 절규</h4>
                    <p className="text-sm">
                      They disembarked..
                      &quot;인 포티 파이브 !!!&quot;
                      주변에서 힐끗 힐끗 쳐다봐서 조금은 쪽팔렸지만..
                      The Wall보다 Roger 당신의 개인적인 앨범인 the final cut을
                      더 좋아하는 팬이 여기 있다는 사실을 나름대로 표현한 것 
                      같아 흐뭇했습니다. :-)
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/pffinalcut.gif" 
                    alt="The Final Cut" 
                    width={130} 
                    height={130} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">그가 Pink Floyd에서 만든 가장 마지막 앨범</p>
                </div>
              </div>
            </div>

            {/* Animals Section - Pigs on the Wing & Dogs */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Animals 시대로의 여행 (1977)</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/pig2.gif" 
                    alt="날개달린 돼지" 
                    width={138} 
                    height={108} 
                    className="w-full border rounded mb-2"
                  />
                  <p className="text-xs text-center">날개달린 돼지</p>
                </div>
                
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    83년에서 다시 77년으로 넘어갈거라는 것을 알고 있었습니다.
                    Mother에서 Roger가 들고나온 통기타는 the final cut의 두곡을
                    연주한 뒤 (southampton dock으로 끝나서 정말 아쉬웠습니다.
                    정말.. the final cut의 타이틀 곡을 듣고 싶었는데..)
                    아주 익숙한.. 멜로디를 튕기기 시작했습니다.
                  </p>
                  
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic">
                    <p>If you don&apos;t care what happens to me...</p>
                  </blockquote>
                  
                  <p>
                    Pigs on the wing입니다.
                    스크린에는 Hipgnosis가 디자인했던 공장을 배경으로
                    두둥실 떠 있는 돼지가 비추어지고.
                    그 장면.. 그리고 &apos;날개달린 돼지&apos;를 알아들은
                    팬들은 괴성을 질렀습니다. 나도 물론 마찬가지였죠.
                    Animals 앨범은 사이드 A 전체가 다 연주됩니다.
                    Pigs on the wing part 1과 Dogs 두곡 뿐이지만요.
                  </p>
                  
                  <div className="bg-blue-800 bg-opacity-50 p-4 rounded">
                    <h4 className="font-bold text-blue-300 mb-2">Dogs - Jon Carin의 역할</h4>
                    <p className="text-sm">
                      Dogs의 앞부분. 원래 David Gilmour가 불렀던 부분은 
                      이번에는 키보드 플레이어 Jon Carin이 대신합니다.
                      Jon Carin은 David의 Floyd에서도 Rick Wright와 같이
                      키보드를 연주했던 인물이죠.
                      David의 Floyd에서는 부티나는 옷을 입고 
                      Comfortably Numb에서 Roger가 원래 부르던 파트를
                      Rick Wright와 같이 나눠 부르는 정도였지만..
                      Roger의 밴드에서는 David Gilmour를 대신해서..
                      통기타까지 메고 나와 열심히 기타를 치면서 노래를 불러줬습니다.
                    </p>
                  </div>
                  
                  <blockquote className="border-l-4 border-red-500 pl-4 italic">
                    <p>You gotta be crazy.. gotta have a real meat...</p>
                  </blockquote>
                  
                  <p>
                    물론 Gotta admit..부분 부터는 다시 Roger가 보컬을맡았구요. 
                    Doyle의 솔로는 정말 턱을 빠지게 만들어줬습니다. 
                    Carin의 신세사이저 솔로가 시작됐습니다.
                  </p>
                  
                  <p>
                    아.. 이 Dogs를 라이브로 들을 수 있게 되어 정말 
                    코끝이 찡하도록 눈물이 났습니다. 고등학교때..
                    일본인가 영국인가 여행가는 친구 아버지를 꼬셔서..
                    아니 그 친구를 꼬셔서..사달라고 부탁했던 
                    Pink Floyd의 Animals.
                    엘피를 처음 열었을때의 그 황홀했던 냄새..
                    닳을까봐 아껴듣던 기억.. 
                    친구가 녹음해 달라고 하면 닳을까봐 빽판을
                    대신 녹음해주던 정말 생각만해도 치사한 기억.. :-)
                    그 모든 Animals 앨범과 관련된 기억들이 주마등처럼
                    머리를 스쳐지나갔습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 카드놀이 퍼포먼스 */}
            <div className="mb-12 p-6 bg-purple-800 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-purple-300 mb-4">카드놀이 퍼포먼스</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <blockquote className="border-l-4 border-purple-500 pl-4 italic text-purple-200">
                  <p>&quot;슁슁슁슁슁......&quot;</p>
                  </blockquote>
                  
                  <p>
                    이때 Roger가 일종의 theatrical performance를 한다는 것을
                    저는 알고 있었습니다. 그래서 내심 기대를 많이 했죠. :-)
                    밴드 멤버들이 모여서 카드놀이를한다던데.. 정말로 테이블과 의자까지 세팅 하더군요.
                    스크린에는 이들이 카드를 섞고 딜 하고 플레이 하는
                    모습이 비추어 집니다.
                  </p>
                  
                  <p>
                    이 액션은 무슨 의미일까요 ?
                    여러가지 해석들이 난무하고 있는데요.. 제 생각에
                     가장 근접한것으로 두가지를 꼽을 수 있을것 같습니다.
                    첫째는 지금 많은 Roger 팬들이 사실이라고 믿고 있는 것으로
                    현재 만연하는 신세사이저 위주의 테크노 음악에 대한 
                    Roger의 반감을 완곡히 표현하고 있는 것이라는 겁니다.
                  </p>
                  
                  <p>
                    비록 자기가 만든 음악이지만 ..이런 기계음악은 정말 지겹지 않니 ?
                    그래서 이렇게 카드놀이라도 해야겠다..라는 
                    Roger의 생각을 나타낸 것일수도 있구요.
                  </p>
                  
                  <p>
                    저의 의견은.. Roger가 &apos;그냥&apos; 심심해서 카드놀이나 하면
                    어떨까 ? 그런 생각에 시작한 것이라고 생각합니다.
                    70년대 빅 스타디움 밴드들의 공연때..
                    드러머가 드럼솔로를 하면 멤버들이 모두 백스테이지로 가서
                    담배도 한대씩 피우고 물도 마시고 쉬었듯이..
                    Roger도 Carin이 7분 남짓 신세사이저 솔로를 하는동안 
                    쉬고 싶었지만.. 백스테이지로 들어가긴 너무 짧은시간이고..
                    그렇다고 멍청하게 서 있을수도 없고.
                    그렇다고 꺼벙하게 탬버린 치고 있을수도 없고..
                    그래서 카드놀이라는 방법을 생각해 내지 않았나 싶습니다.
                  </p>
                  
                  <p>
                    웨스트 팜 비치 공연에서 스탭들을 만난 네터의 이야기를 들어보니
                    이들은 실제로 카드놀이를 하는 시늉을 하는것이 아니고
                    게임을 직접 한다고 합니다. 카드 게임의 이름은 
                    &apos;Trump&apos;라고 하는데요. 한장씩 내려놓고 집어가고 그러
                    는것이마치 &apos;훌라&apos; 처럼도 보였습니다. 술인지 콜라인지
                    가볍게 한잔씩들 하는 모습도 보기 좋았구요.
                    그래서 이들은 실제로 .. 매번 공연때마다 카드놀이 결과
                    점수를 매겨서 합산하고 있다고 합니다. 둘째 날 공연이
                    끝난 상태에서는 Doyle이 1등을 하고 있다고 하던데요.
                    글쎄요..
                    순회공연이 끝났을때 1등에게 뭐 돈 몰아주기 내기라도 
                    한게 아닐까요 ?
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/poker.jpg" 
                    alt="포커 게임" 
                    width={201} 
                    height={270} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">숱한 날 밤을 새게 만들었던 Mighty의 한장면</p>
                </div>
              </div>
            </div>

              {/* Welcome to the Machine & Wish You Were Here */}
            <div className="mb-12 p-6 bg-indigo-800 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-300 mb-4">Welcome to the Machine & Wish You Were Here</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <Image 
                    src="/images/roger-waters/roger90.jpg" 
                    alt="파시스트 복장을 한 Roger" 
                    width={164} 
                    height={107} 
                    className="w-full border rounded"
                  />
                  <p className="text-xs text-center mt-2">파시스트 복장을 한 Roger</p>
                </div>
                
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                  <p>
                    이번에는 77년에서 다시 75년으로 타임 워프합니다.
                    다음곡은 Welcome to the machine.
                    여기서 짚고 넘어가지 않을 수 없는것은 너무나도 신경을 
                    많이 쓴 음향시설입니다. 지정석 안은 정말..
                    돌비 디지털.. 디티에스.. 아니 티에치엑스로 무장된 극장이
                    무색하리만큼 360도 관객을 빙 둘러서 끌어안는 
                    아마 Q sound system으로 에큅된 사운드 시스템으로 
                    헤드폰을 쓰고 음악을 듣는듯한 정밀함과
                    서라운드 오디오의 실연장에 와있는듯한 공간감으로 
                    거의 완벽에 가까운 음향을 선보였습니다.
                  </p>
                  
                  <p>
                    Welcome to the machine의 도입부에 좌우 채널을 왔다갔다 하는
                    그 신세사이저 소리. 여기서는 정말 .. 심장을 울리고
                    발밑까지 쩡쩡 울리는 강한 에코우로 다가옵니다.
                  </p>
                  
                  <p>
                    다음곡도 역시 Wish you were here에서 선곡된 
                    타이틀 트랙 Wish you were here였습니다.
                    글쎄요. 혹자들은 David Gilmour의 부드러우면서도
                    터프한 목소리가 아니면 Wish you were here가 잘 맛이 나지
                    않는다고도 하지만.
                    이 공연용 Roger Waters 버젼의 Wish you were here도 
                    굉장히 감동적입니다. 게다가 백 스크린에 Syd Barrett의 
                    사진까지 프로젝션되었습니다.
                  </p>
                  
                  <div className="bg-yellow-800 bg-opacity-50 p-4 rounded">
                    <h4 className="font-bold text-yellow-300 mb-2">Syd Barrett을 그리며</h4>
                    <p className="text-sm">
                      점점 줌 인되는 Syd의 사진. 
                      How I wish
                      I wish THAT you were here..
                      아.. 이 장면에서 눈물 한방울 찔끔.
                      대마초 연기가 매워서일까.. :-)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shine on You Crazy Diamond - 사이키델릭 라이트쇼 */}
            <div className="mb-12 p-6 bg-gradient-to-r from-pink-900 to-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-pink-300 mb-4">Shine on You Crazy Diamond - 사이키델릭 라이트쇼</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                <p>
                  관중들로부터 많은 박수를 받은 Wish you were here가 끝나고
                  1부의 마지막곡 Shine on you crazy diamond가 시작됩니다.
                  David 의 Floyd는 주로 엘피의 사이드 A에 있던 파트를 연주했지만
                  Roger는 작년부터 사이드 B의 파트를 연주합니다.
                  완전히 다른곡이라고도 할 수 있죠 ? :-)
                </p>
                
                  <p>
                    이때 오랫만에 old Floyd tradition의 리바이벌이 이루어집니다.
                    아.. 너무나 감동적이었어요.
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-800 to-red-800 bg-opacity-50 p-6 rounded border-l-4 border-yellow-400">
                    <h4 className="font-bold text-yellow-300 mb-3">🌀 사이키델릭 기름물감 라이트쇼</h4>
                    <p className="text-sm leading-relaxed">
                    초기 클럽시절 사이키델릭 음악을 연주하던 Floyd는 
                      사이키델릭에 잘 어울리는 조명을 나름대로 생각하다가 
                    유리 두장 사이에 기름 물감과 수성 물감을 섞어서 
                    방울방울 섞여져 흐르는 모습을 직접 프로젝션하는
                    당시로는 기발한 아이디어를 선보였습니다.
                    30년도 더 지난 그 사이키델릭 기름물감 라이트쇼 !!를 
                      Roger Waters는 다시 선보였습니다.
                      백스크린에 가득히 비춰지는 노란 물감과 빨간물감.. 초록물감의
                      광기어린 향연...
                      아.. 거의 죽었다 살아났습니다... 나는 정말로..
                  </p>
                </div>
                
                  <p>
                    이때.. 다시 완전히 나를 맛을 보낸것은..
                    백스크린에 수직으로 돌출하여 뱅글뱅글 도는 
                    &apos;다이아몬드&apos; 입니다.
                    후반 인스트루멘틀 부분에 등장한 이 다이아몬드는..
                    레이저 빛을 받아 수백 방향으로 레이저를 반사하며
                    어두운 홀 안에 수백개의 다이아몬드 이미지를 만들어가며
                    Jamming 하는 밴드의 환각적인 음악과 함께 
                    지정석에 앉아있는 모든 관객을 집단 최면상태로 
                    몰고갔습니다.
                  </p>
                  
                  <p>
                    Shine on you crazy diamond의 뒷부분은 다시 조용한 
                    키보드 솔로로 끝을 맺습니다. 이때 아까 했던 카드 게임이
                    채 안끝났는지 Roger와 일당들은 그새를 못참고
                    다시 판을 벌입니다. 하하 정말 재밌어요.
                    키보드 솔로만 나왔다 하면 카드 판을 벌립니다.
                    키보디스트 Jon Carin은 왕따인것 같습니다. :-)
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                  <Image 
                      src="/images/roger-waters/wyh.jpg" 
                      alt="Wish You Were Here front jacket" 
                      width={187} 
                      height={183} 
                        className="w-full border rounded"
                      />
                    <p className="text-xs text-center">Wish You Were Here의 front jacket</p>
                    </div>
                </div>
              </div>
            </div>

            {/* 임시 복원 완료 표시 */}
              <div className="bg-[#8080FF] bg-opacity-20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">🔄 Roger Waters 리뷰 복원 진행 중...</h3>
                <p className="text-sm leading-relaxed">
                <strong>✅ 복원 완료된 섹션 (1부 완료!):</strong><br />
                • 도입부와 개인적 배경<br />
                • 공연장 도착과 대기 과정<br />
                • 팬들의 연령대와 복장 관찰<br />
                • 현지 팬과의 만남과 대화<br />
                • 공연장과 무대 설정 묘사<br />
                • 공연 시작 - In the Flesh<br />
                • Another Brick in the Wall 기타 솔로<br />
                • Mother 어쿠스틱 연주<br />
                • The Final Cut 정치적 메시지<br />
                • Animals - Pigs on the Wing & Dogs<br />
                • 카드놀이 퍼포먼스<br />
                • Welcome to the Machine 음향 시설<br />
                • Wish You Were Here - Syd Barrett 추모<br />
                • Shine on Crazy Diamond 사이키델릭 라이트쇼<br />
                <br />
                <strong>🔄 다음 복원 예정 (2부):</strong><br />
                • 인터미션과 상품 구매<br />
                • 2부 시작 (Set the Controls for the Heart of the Sun)<br />
                • Dark Side of the Moon 곡들<br />
                • Money 기타 솔로 대결<br />
                • Roger Waters 솔로곡들 (Perfect Sense, Amused to Death)<br />
                • 앵콜 (Comfortably Numb, Each Small Candle)<br />
                <br />
                </p>
              </div>
              
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
          </div>
        </div>
      </div>
    </main>
  );
}