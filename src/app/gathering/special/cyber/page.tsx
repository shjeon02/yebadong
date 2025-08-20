import Link from 'next/link';
import Image from 'next/image';

export default function CyberPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            제1회 예바동 사이버 감상회
          </h1>
          <div className="text-2xl text-cyan-300 mb-4">
            - Electronics in 90's -
          </div>
          <div className="text-xl text-gray-300 mb-2">
            1999년 9월 16일 (목) 정오 12시 - 9월 21일 (화) 정오 12시
          </div>
          <div className="text-lg text-gray-400 mb-4">
            🌐 세계 최초 사이버 감상회 (5일간)
          </div>
          <div className="text-sm text-gray-500">
            MP3 다운로드 방식 / Poll 경품 이벤트 진행
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 bg-opacity-50 rounded-lg p-6 mb-8 border border-cyan-500">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">🌐 세계 최초 사이버 감상회</h2>
            <div className="text-gray-300 leading-relaxed space-y-3">
              <p>
                5일간 감상회를 진행할 계획이고, 감상회 기간동안에는 신인철님이 감상회 곡에 대한 Poll을 진행해서 
                경품도 줄 계획입니다. 많은 참여 바랍니다.
              </p>
              <p>
                네트웍 속도 문제로 인해서 AOD는 안됩니다. file 형태는 <strong className="text-cyan-400">mp3</strong>로 
                되어 있으니 다운로드해서 들으시기 바랍니다.
              </p>
            </div>
          </div>

          {/* Program Schedule */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">📅 프로그램 일정</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  <Link href="#electronics" className="hover:text-cyan-200">
                    김진석 - Electronics in 90's
                  </Link>
                </h3>
                <p className="text-sm text-gray-300">90년대 전자음악 밴드들 소개</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  <Link href="#psychedelic" className="hover:text-purple-200">
                    이장원 - Psychedelic & Nordic prog rock
                  </Link>
                </h3>
                <p className="text-sm text-gray-300">사이키델릭과 북유럽 프로그레시브 록</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">
                  <Link href="#contest" className="hover:text-green-200">
                    경품 참여 방법
                  </Link>
                </h3>
                <p className="text-sm text-gray-300">신인철 주관 Poll 이벤트</p>
              </div>
            </div>
          </div>

          {/* Electronics in 90's Section */}
          <div id="electronics" className="bg-blue-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-blue-500">
            <h2 className="text-3xl font-bold text-blue-300 mb-6">🎹 Electronics in 90's</h2>
            <div className="text-sm text-gray-400 mb-6">by 김진석</div>
            
            {/* Introduction */}
            <div className="mb-8 p-4 bg-blue-800 bg-opacity-30 rounded">
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  메일링리스트 <Link href="http://www.aracnet.com/~elana/goldtri/" className="text-cyan-400 hover:text-cyan-300">골든 트라이앵글</Link>을 통해 알게된 90년대의 전자음악 밴드들을 소개드리려고 합니다. 
                  테크노가 주류를 이루는 현재 전자음악씬과는 기초적인 부분만을 공유할뿐, 그 기조는 의외로 70년대 진보전자음악의 전성기 시대를 바탕으로 하고 있습니다.
                </p>
                <p>
                  그 가운데에서도 특히 <strong className="text-orange-400">탠저린 드림의 강한 영향</strong>을 받은, 베를린 스쿨의 전통을 이어가는 특성이 두드러집니다. 
                  영국, 독일, 네덜란드 등을 중심으로 하고 있으며 본격적인 씬이 모습을 갖춘 것은 대체적으로 90년대 초로 보입니다.
                </p>
                <p>
                  <strong className="text-yellow-400">BIG IV</strong> - Tangerine Dream, Klaus Schulze, Vangelis, Jean-Michel Jarre - 는 90년대가 저무는 이 무렵까지도 꾸준히 앨범을 내놓고 왕성한 활동을 펼치고 있지만, 
                  사실 누구도 지금이 "그들의 전성 시대"라고는 생각하지 않습니다.
                </p>
                <p>
                  비록 소규모이기는 해도 탠저린 드림, 클라우스 슐체의 감동을 90년대 들어서도 맛볼 수 있게 해주는 그룹들이 아직 존재하고 있다는 것은 기쁜일이 아닐 수 없습니다. 
                  아직 음반 몇장 내놓지 못했어도 이들에게서 다음 세기의 전자음악을 창조해낼 저력과 재능을 엿볼 수 있습니다.
                </p>
              </div>
            </div>

            {/* Playlist */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-200 mb-6 text-center">🎵 감상곡</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">1. "Assassin" - Mark Shreeve (11:12)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">2. "System Six" - Mark Shreeve (18:28)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">3. "Scenes of Capturing Auras" - Rainbow Serpent (19:00)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">4. "Malebranche" - AirSculpture (10:31)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">5. "Amazonian Lepidoptera Theorize on Chaos" - AirSculpture (9:25)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">6. "Phase I" - Rob Essers (7:49)</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">7. "A Midnight Clear" - Redshift (23:56)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">8. "Organ Harvest part I" - Radio Massacre International (12:08)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">9. "Destination Unknown" - Mind Flux (7:53)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">10. "Amalthea" - FSP (10:21)</p>
                  </div>
                  <div className="p-3 bg-gray-700 rounded">
                    <p className="text-cyan-300 font-semibold">11. "Chill Factor" - Paul Nagle (15:52)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Artist Profiles */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-200 mb-6 text-center">🎤 아티스트 소개</h3>
              
              {/* Mark Shreeve */}
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Mark Shreeve<br/>Assassin ('83)</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold text-orange-300 mb-4">
                      <Link href="http://sonicimages.com/markshreeve" className="hover:text-orange-200">
                        Mark Shreeve
                      </Link>
                    </h4>
                    <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                      <p>
                        마크 슈리브는 80년대초부터 최근까지 꾸준한 활동을 벌이고 있는 영국 일렉트로닉스계의 중견 뮤지션입니다
                        (클라우스 슐체와 공동 작업을 했던 마이클 슈리브와 혼동하기 쉽습니다). 
                        클라우스 슐체, 탠저린 드림등에 의해 70년대에 이미 숙성되었다고 여기고 있었던 "전자음에 의한 록뮤직"의 형상화가 
                        실은 아직도 미개척의 영역으로 남아있는 분야였으며, 이를 인식하고서 다시 그 가능성을 한번 활짝 만개시켜 보여준 장본인이라고 생각합니다.
                      </p>
                      <p>
                        80년대에 그가 선보인 전자음을 가장 정확히 묘사할 한 단어를 고르라면 그것은 아마도 <strong className="text-yellow-400">"역동성"</strong>일 것입니다. 
                        거친 숨소리를 내뱉는 운동선수의 숨가쁜 맥박처럼 요동하며 거세게 반복되는 시퀀서의 음향은 
                        슈리브의 음악적 원류를 이루고 있는 탠저린 드림에게서도 좀처럼 찾아보기 힘든 개성이며 매력입니다.
                      </p>
                      <div className="p-3 bg-gray-600 rounded italic text-xs">
                        <p className="mb-2"><strong>"1983년 9월이었다..."</strong></p>
                        <p>
                          UK 일렉트로니카 '83, 밀튼 케인즈에서 12시간동안 이어지는 전자음악 페스티벌에서 마크 슈리브는 주공연에 앞서 그의 첫번째 실황 연주를 선보이게 되어 있었다. 
                          휴식시간에 간이 판매대에서 그의 LP "Assassin"의 서주부가 들려오기 시작했다. 
                          곡이 첫 클라이맥스에 이를 무렵엔 적어도 200명이 넘는 관중들이 몰려들어 놀라움에 가득찬 눈으로 이 믿기 어려운 새로운 음악을 듣고 있었다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rainbow Serpent */}
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Rainbow Serpent<br/>Sequel to the Voyager ('99)</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold text-green-300 mb-4">Rainbow Serpent</h4>
                    <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                      <p>
                        도이치 그룹 레인보우 서펜트에 대해 알려진 것은 별로 많지 않습니다. 
                        클라우스 슐체, 장 미셸 자르, 옐로, 마이클 크레투, 스티브 로취 등의 이름이 보이는 속지에 적힌 감사의 글을 보노라면 
                        이들 역시 70 일렉트로닉스계의 세례를 흠뻑 받고 자라난 존재임을 확인할 수 있습니다.
                      </p>
                      <p>
                        올해 발매한 4번째 앨범 &lt;The Sequel to Voyager&gt;는 96년작 2집&lt;Voyager&gt;의 속편입니다. 
                        트랜스/앰비언트 계열의 테크노 밴드의 음악을 연상케 하는 음악적 요소가, 그 원류가 되었을 70년대의 전자음과 
                        어색함없이 부드럽게 어우러져 빚어낸 <strong className="text-cyan-400">장대한 일렉트로닉 심포니</strong>입니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AirSculpture */}
              <div className="bg-gray-700 rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-sm">AirSculpture<br/>Attrition System ('95)</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">
                      <Link href="http://www.softbase.co.uk/as" className="hover:text-purple-200">
                        AirSculpture
                      </Link>
                    </h4>
                    <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                      <p>
                        영국 레딩(Reading) 출신의 밴드 에어 스컬프춰는, 자신들의 음악이 70년대 후반 탠저린 드림의 음악으로부터 강한 영향을 받고 있음을 공공연히 이야기합니다. 
                        에이드리안 비즐리, 존 크리스찬, 피터 루친스키의 3인조 편성도 TD와 그대로 닮아있습니다.
                      </p>
                      <p>
                        과거의 영화를 잃은채 뉴에이지 코너의 한쪽 구석에 초라히 자리잡은 TD가, 90년대에 펼쳐보여야 하지 않았을까 싶은 
                        순연한 전자음향의 항연을 펼치고 있습니다. 밴드명처럼 <strong className="text-blue-400">전자음으로 쌓아올려진 웅장한 가상의 구축물</strong>을 조망하는 느낌을 받습니다.
                      </p>
                      <p>
                        더욱 놀라운 점이라면, 에어스컬프춰는 여태까지 발표한 모든 곡들을 <strong className="text-yellow-400">즉흥연주</strong>에 의하여 만들어 냈다는 사실입니다. 
                        즉흥성, 우연성이 빚어내는 가능성에 전적으로 의존한 밴드는 일찌기 본일이 없습니다. 
                        그리고 그결과는 즉흥연주라는 사실이 믿어지지 않을 정도로 정교하고 짜임새를 갖추고 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Artists */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-cyan-300 mb-3">Rob Essers</h4>
                  <p className="text-sm text-gray-300">
                    네덜란드의 전자음악 뮤지션으로, 데뷔작 &lt;Raincolours&gt;와 &lt;A Lizards Walk&gt;등 2매의 앨범을 발표하였습니다. 
                    슈멜링 시대의 탠저린 드림과 맥이 닿아 있는, 밝고 경쾌한 "양지"의 전자음향을 들을 수 있습니다.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-red-300 mb-3">
                    <Link href="http://www.users.dircon.co.uk/~redshift" className="hover:text-red-200">
                      Redshift
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-300">
                    마크 슈리브가 그의 솔로 활동을 잠시 접고 조직한 밴드가 레드시프트입니다. 
                    70년대 탠저린 드림으로의 회귀라고 하면 적당한 표현이 될까요. 
                    강한 에너지로 가득한 음공간은 여전하지만, 과거의 흔적을 어루만지며 아쉬워 하는 듯한 느낌을 자아냅니다.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">
                    <Link href="http://www.users.dircon.co.uk/~rmi/index.htm" className="hover:text-orange-200">
                      Radio Massacre International
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-300">
                    탠저린 드림의 영향을 공공연히 밝히는 영국의 일렉트로닉스 밴드입니다. 
                    에어 스컬프춰와 달리 암울하며 비극적입니다. 멜로트론, 아날로그 시퀀서를 비롯한 고전적인 전자장비들을 고집하여, 
                    해를 거듭할 수록 깊이를 알 수없는 어두운 심연 속으로 더욱 깊숙이 침잠하는 것 같습니다.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-green-300 mb-3">
                    <Link href="http://www.geocities.com/SunsetStrip/Lounge/6639/mindflux.html" className="hover:text-green-200">
                      Mind Flux
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-300">
                    도이치 테크노 그룹 마인드 플럭스는 슐체의 수법을 많이 닮은 전자음악을 만들고 있습니다. 
                    주류 테크노에서 한걸음 비켜난 듯한 비딱함이 매력입니다. 
                    토마스 팽거, 마이클 커스턴의 2인조로, 다양한 스펙트럼에 걸친 전자음악을 만들며 테크노에서 느끼는 소외감을 잘 감싸안는 가교역할을 하고 있습니다.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-yellow-300 mb-3">Free System Project</h4>
                  <p className="text-sm text-gray-300">
                    FSP(Free System Project)는 마르셀 엥겔스라는 뮤지션 혼자서 이끄는 밴드명입니다. 골든트라이앵글 회원이기도 하죠. 
                    상당히 역동적이고 정열적인 음악을 구사하고 있으며, 디지털과 아날로그 장비의 장점을 결합한 사운드를 추구합니다.
                  </p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-pink-300 mb-3">
                    <Link href="http://www.softroom.freeserve.co.uk" className="hover:text-pink-200">
                      Paul Nagle
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-300">
                    오랜 활동과 다양한 뮤지션들과의 음악적 교류를 통해 높은 지명도를 얻고 있는 그의 음악은 
                    해를 거듭할수록 다채롭고 현대적이며, 동시에 70년대의 화려한 영화를 누렸던 진보전자음악의 그림자가 짙게 배어나는 전자음을 들려줍니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 text-sm text-gray-400">
              1999.9.5 예술바위동호회 회원 김진석 만듬
            </div>
          </div>

          {/* Psychedelic & Nordic Section */}
          <div id="psychedelic" className="bg-purple-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-purple-500">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">🌈 Psychedelic & Nordic prog rock</h2>
            <div className="text-sm text-gray-400 mb-6">by 이장원 [ljw1031@unitel.co.kr]</div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">1-2. Os Mutantes - "Dia" / "Cantor De Mambo"</h3>
                <p className="text-sm text-gray-300">
                  잘 아시는 브라질 인기 그룹중 하나입니다. "O A e o Z" 앨범같은 경우 많은 평론가들이 예스의 영향을 많이 받았다고들 평하지만 
                  그건 그룹의 후기에 속하는 음반이구, 초기에는 들으실 곡들과 같이 팝과 사이키델릭의 중간쯤에다가 라틴 색깔 살짝 입힌 음악 스타일이었군요. 
                  두번째곡은 맘보 록이라구 해야할지....
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">3-4. Carmen - "Tales of Spain" / "Reprise"</h3>
                <p className="text-sm text-gray-300">
                  스페인 그룹이라고 생각하시면 깜박 속는겁니다. 사실은 영국 밴드죠. 
                  진짜 스페인 그룹 Mezquita 나 Triana, Cai 뺨치는 플라멩고 록을 들려줍니다. 
                  지브랄타에 올려놓은 글을 보면 제스로툴과 커브드에어, 그리고 플라멩고를 합쳐 놓은 음악을 찾는다면 바로 이들이 답이라는 비교를 해놓았더군요. 
                  Fandangos in Space 중에서 두곡입니다.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">5. Valinors Tree - "Kingdom of Sadness"</h3>
                <p className="text-sm text-gray-300">
                  레코드 헤븐에서 팍팍 밀고 있는 스웨덴을 비롯한 노르딕 프로그레시브 그룹들의 곡을 모아놓은 샘플러 시디에서 
                  다시 제가 추려낸 그룹들입니다. 잘 아시는 랜드베르크나 이실더스베인, 싱카두스 등등은 다 빼고 여기서도 마이너라고 할만한 그룹들 위주로 골랐습니다. 
                  이 Valinors Tree에 대해서는 끝내 알게 된게 없기때문이기도 합니다. 
                  앵글라고드와 아넥도튼등의 아류정도로 혹평할수도 있고 연주 실력이 상당히 뛰어나다는 점에서 앞으로의 가능성을 점칠수도 있겠네요.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">6. Last Laugh - "Busy"</h3>
                <p className="text-sm text-gray-300">
                  제가 소개하는 곡중에 가장 헤비한 곡일것 같습니다. 역시 이 그룹도 아는 정보가 없는데요, 
                  워낙에 제가 신세대 그룹들에 대해서는 관심이 적어서 선곡이랍시구 해놓고 제대로 된 정보도 못드리는 점 죄송스럽습니다.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">7. Galleon - "The Russian Ice Princess"</h3>
                <p className="text-sm text-gray-300">
                  그래두 제법 알려진 그룹인것 같은데 스웨덴의 4인조 그룹이고 첨엔 Aragon 이란 이름의 트리오로 출발했지요. 
                  총6장의 음반을 발표하고 있고 이 곡이 실린 음반은 96년에 나온 All European Hero 앨범에 실린 곡입니다. 
                  음악은 둘째치고 재킷 디자인은 프로그 그룹치고는 거의 꽝이라고 할 만합니다^^
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-orange-300 mb-2">8. Grand Stand - "Condor"</h3>
                <p className="text-sm text-gray-300">
                  역시 이들에 대한 정보를 좀 찾아 봤는데 나오는게 없군요. 
                  다분히 퓨전느낌의 빠른 인트로로 시작되는 연주곡인데 가벼운 기분으로 들을만한 곡입니다. 
                  키보드로 주된 흐름을 따라가는군요. 중간에는 꽤나 장황한 분위기로 바뀌기도 하구요. 
                  이번에 소개하는 무명의 그룹들 모두가 연주 실력들은 쓸만하다는 느낌이 드는군요.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">9. Pink Floyd - Early Singles</h3>
                <div className="text-sm text-gray-300">
                  <div className="grid md:grid-cols-2 gap-2 mt-2">
                    <ul className="space-y-1">
                      <li>1) Arnold Layne</li>
                      <li>2) Candy and a Current Bun</li>
                      <li>3) See Emily Play</li>
                      <li>4) Scarecrow</li>
                      <li>5) Apples and Oranges</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>6) Paint Box</li>
                      <li>7) It Would be So Nice</li>
                      <li>8) Julia Dream</li>
                      <li>9) Point Me at the Sky</li>
                      <li>10) Careful with that Axe Eugene</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contest Section */}
          <div id="contest" className="bg-green-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-green-500">
            <h2 className="text-3xl font-bold text-green-300 mb-6">🎁 경품 참여 방법</h2>
            <div className="text-sm text-gray-400 mb-6">by 신인철 [Fish, icshin@bioneer.kaist.ac.kr]</div>
            
            <div className="space-y-6">
              <div className="p-4 bg-green-800 bg-opacity-30 rounded">
                <p className="text-gray-300 leading-relaxed">
                  항상 앞서가는 예바동.. 이번에도 아마도 <strong className="text-yellow-400">세계최초</strong> (!!^^;)로 사이버 감상회를 갖게 되었습니다. 
                  정말 예바동의 멤버.. 게다가 창단 멤버라는 사실이 너무나 자랑스럽습니다.. ^^; 
                  빨리 목요일이 왔으면 하고 기대되는데요.. 이번엔 감상회의 뒷풀이가 없어서 조금 아쉽지만 
                  뭐 정 아쉬우면 icq같은데서라도 만나서 채팅이라도 하져.. (저의 icq#는 <strong className="text-cyan-400">41920880</strong> ^^;)
                </p>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-200 mb-4">🏆 경품 목록</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-600 rounded">
                    <p className="text-yellow-300 font-semibold">1. Arrakeen - Patchworks</p>
                    <p className="text-xs text-gray-400">김진석님 기증</p>
                  </div>
                  <div className="p-3 bg-gray-600 rounded">
                    <p className="text-yellow-300 font-semibold">2. SFF - Symphonic Pictures</p>
                    <p className="text-xs text-gray-400">김진석님 기증</p>
                  </div>
                  <div className="p-3 bg-gray-600 rounded">
                    <p className="text-yellow-300 font-semibold">3. Esperanto - Last Tango</p>
                    <p className="text-xs text-gray-400">예바동 기증</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-800 bg-opacity-30 rounded">
                  <p className="text-sm text-red-300">
                    <strong>주의:</strong> 본 씨디는 부클렛과 뒷 표지가 없고.. 알맹이에도 레이블이 되어 있지 않은 스페셜 리미티드 에디션 씨디입니다.
                    (아마 씨디를 따먹으신 분은 동장님이나 저한테 문의하시면 자켓이미지 정도는 얻을 수 있을거에요..)
                  </p>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-200 mb-4">📝 참여 방법</h3>
                <div className="text-gray-300 space-y-3">
                  <p>이장원님과 김진석님이 올려주신 음악을 들으신 후</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="p-2 bg-blue-600 bg-opacity-30 rounded">
                        <p className="text-blue-300 font-semibold">1. 가장 마음에 들었던 곡</p>
                      </div>
                      <div className="p-2 bg-red-600 bg-opacity-30 rounded">
                        <p className="text-red-300 font-semibold">2. 가장 별루였던 곡</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2 bg-green-600 bg-opacity-30 rounded">
                        <p className="text-green-300 font-semibold">3. 가장 마음에 들었던 곡으로 뽑힐만한 곡</p>
                      </div>
                      <div className="p-2 bg-orange-600 bg-opacity-30 rounded">
                        <p className="text-orange-300 font-semibold">4. 가장 별루였던 곡으로 뽑힐만한 곡</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm">
                    네곡을 적으셔서 저한테 (바동으로 보내주셔도 되는데.. 바동으로 보내면 다른 분들에게 팁을 주는게 되겠죠 ?) 
                    메일로 보내주시면 됩니다. 그러면 고득점자 3명을 뽑아서 씨디를 드리도록 하죠..
                  </p>
                  <p className="text-sm text-gray-400">
                    아무도 못 맞추셨을 경우에는 다음 감상회 경품으로 이월하기로 하구요.. 
                    동점자가 여러명 나왔을 경우에는 간단한 퀴즈로 정하던가 그렇게 하죠..
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Significance */}
          <div className="bg-gradient-to-r from-cyan-900 to-purple-900 bg-opacity-50 rounded-lg p-6 mb-8 border border-cyan-600">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">🌐 역사적 의의</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">💻 디지털 혁신</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 세계 최초 사이버 감상회 (1999년)</li>
                  <li>• MP3 파일 다운로드 방식 도입</li>
                  <li>• 5일간 온라인 감상회 진행</li>
                  <li>• ICQ 채팅을 통한 실시간 소통</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">🎵 음악적 탐구</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 90년대 전자음악의 체계적 소개</li>
                  <li>• 베를린 스쿨 전통의 현대적 계승</li>
                  <li>• 북유럽 프로그레시브 록 발굴</li>
                  <li>• 사이키델릭 록의 국제적 스펙트럼</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link 
              href="/gathering" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ← 감상회 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
