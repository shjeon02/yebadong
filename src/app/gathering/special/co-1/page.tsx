import Link from 'next/link';

export default function Co1Page() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            제1회 프로그레시브 록 연합 감상회
          </h1>
          <div className="text-xl text-gray-300 mb-2">
            1997년 9월 7일 (일)
          </div>
          <div className="text-lg text-gray-400 mb-4">
            📍 홍대앞 프리버드
          </div>
          <div className="text-sm text-gray-500">
            1st Cooperated Music Show
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 bg-opacity-50 rounded-lg p-6 mb-8 border border-purple-500">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">🎉 역사적인 첫 연합 감상회</h2>
            <div className="text-gray-300 leading-relaxed">
              <p className="mb-4">
                한국 프로그레시브 록 역사상 최초의 동호회 연합 감상회가 1997년 9월 7일 홍대앞 프리버드에서 개최되었습니다.
                인터넷 시대 초기, 각지에서 활동하던 프로그레시브 록 동호회들이 한자리에 모인 기념비적인 행사였습니다.
              </p>
            </div>
          </div>

          {/* Participating Groups */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">👥 참가팀</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">예바동 (YEBADONG)</h3>
                  <p className="text-sm text-gray-300">인터넷 프로그레시브 록 메일링 리스트</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">지음</h3>
                  <p className="text-sm text-gray-300">인천지역 프로록/언더뮤직 동우회</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">아일랜드</h3>
                  <p className="text-sm text-gray-300">하이텔 프로그레시브 록 동아리</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-orange-300 mb-2">ARC</h3>
                  <p className="text-sm text-gray-300">아트록지 주필자분들이 주축이 된 동아리</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-700 rounded">
              <p className="text-sm text-gray-300">
                <strong>기타 참가:</strong> 기타 이카루스(대구지역 언더그라운드 록 동우회), 천리안 두레마을, 
                나우누리 프로그레시브 락 동호회 등에서도 참석
              </p>
            </div>
          </div>

          {/* YEBADONG Section */}
          <div className="bg-blue-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-blue-500">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">🌐 YEBADONG (13:30-14:40)</h2>
            
            {/* YEBADONG Introduction */}
            <div className="mb-6 p-4 bg-blue-800 bg-opacity-30 rounded">
              <h3 className="text-lg font-semibold text-blue-200 mb-3">예바동 소개</h3>
              <div className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <p>
                  인터넷 아트락 동호회 [예바동]은 <strong className="text-blue-400">1994년 4월 7일</strong> 인터넷 사용자들중
                  프로록/아트록 분야에 관심이 많은 사람들을 주축으로 결성된 메일링 리스트입니다.
                </p>
                <p>
                  현재 직장인, 학생, 백수 등 다양한 계층의 <strong className="text-yellow-400">180여명</strong>이 가입되어 있습니다.
                  메일링 리스트는 메일로 서로 정보를 주고받는 방법인데 사용법이 간편하고 가장 빠른 정보를 서로 공유할 수 있는 장점이 있습니다.
                </p>
                <p>
                  인터넷에 알려진 동호회이고, 뉴스그룹과 연계되어 있고, 홈페이지도 영문/한글로 꾸며져 있는 등 
                  <strong className="text-green-400">전세계적으로 알려져있는 mailing list</strong>입니다. 
                  뉴스그룹에서는 han.rec.artrock이라는 그룹으로 되어 있는데 일년에 가장 많은 포스팅을 하는 그룹으로 알려져 있습니다.
                </p>
                <div className="mt-4 p-3 bg-gray-700 rounded">
                  <p className="text-xs text-gray-400 mb-2"><strong>홈페이지 주소:</strong> http://cclab.kaist.ac.kr/yebadong</p>
                  <p className="text-xs text-gray-400 mb-2"><strong>메일링리스트:</strong> yebadong@cclab.kaist.ac.kr</p>
                  <p className="text-xs text-gray-400"><strong>관리자:</strong> owner-yebadong@cclab.kaist.ac.kr</p>
                  <p className="text-xs text-blue-300 mt-2"><strong>동장:</strong> 전승훈</p>
                </div>
              </div>
            </div>

            {/* YEBADONG Playlist */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-200 mb-4">🎵 예바동 플레이리스트</h3>
              
              <div className="border-l-4 border-yellow-500 pl-4 mb-4">
                <h4 className="font-semibold text-yellow-300 mb-2">Opening: Anyone's Daughter - Swedish Nights (4:52)</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  1979년부터 키보디스트 Mattias Ulmer와 기타리스트 Uwe Karpa를 주축으로 결성된 4인조 헤비심포닉락그룹이다. 
                  BRAIN에서 1집을 발표하고 SPIEGELEI에서부터 발매된 작품들은 좀더 멜로디어스하고 보컬이 강화된 파퓰러한 작품들을 발표하는데 
                  2집이 바로 SPIEGELEI에서 출사표를 던진 작품이다. 전자음의 점강음으로 시작되는 Swedish Nights는 그들의 파퓰러한 모습을 여실하게 보여주고 있다.
                  <span className="text-blue-400 block mt-1">(선곡자: 김기태)</span>
                </p>
              </div>

              <div className="bg-gray-700 rounded p-4">
                <h4 className="font-semibold text-orange-300 mb-3">첫째마당: 헝가리 두 신진 밴드와 일본 아티스트</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-semibold text-red-300 mb-2">1. Korai Orom - 5th track (7:47) from Korai Orom (1995)</h5>
                    <p className="text-sm text-gray-300">
                      Hungary의 신진 Psychedelic group의 Debut album 중에서 한곡 골랐습니다. 
                      이들의 음악은 Ozric tentacles에 민속적, 종교적 요소를 가미한 것이라고 할 수 있는데, 
                      열한명의 대편성 그룹답게 무척이나 호쾌한 사운드를 들려줍니다.
                      <span className="text-blue-400 block mt-1">(선곡자: 이윤직)</span>
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-purple-300 mb-2">2. After Crying - "De Profundis" (11:29)</h5>
                    <div className="text-xs text-gray-400 mb-2 ml-4">
                      a. Eras... / b. Non est via / c. "Jecisti me in profund..." / d. Ego sum via, veritas et vita
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      현존하는 가장 뛰어난 심포닉 프로그레시브 락 그룹 중 하나인 헝가리 그룹 After Crying의 작년도 발매 앨범에서 타이틀 곡을 골랐습니다. 
                      최근, 자유화의 물결과 인터넷의 영향으로 점차 세인들에게 알려지게 된 동유럽 국가 중 헝가리의 프로그레시브 록은, 
                      Omega와 East를 거쳐 현재는 Solaris, Korai Orom 그리고 소개하는 After Crying과 같은 그룹들이 상당한 고수준의 음악들을 계속 선보이고 있습니다. 
                      이 밴드는 클래식, 재즈, 민속음악, 실험음악, 프로그레시브 락 등 여러 쟝르의 음악들을 적절히 혼합하면서도, 독창적인 심포닉 락을 만들었습니다.
                      <span className="text-blue-400 block mt-1">(선곡자: 김성우)</span>
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-green-300 mb-2">3. Niitsu Akio - 빛의 오르골 (1:42) + 未來永劫 (7:43)</h5>
                    <div className="text-xs text-gray-400 mb-2">from I.O 1977 Japan Phillips</div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      자신의 존재를 애써 증명하려는 이들에게 Rock을 듣는다는 것, 특히 Progressive Rock을 듣는 다는 일은 그다지 막장이 보이지 않는 일일 것이다. 
                      동양인이 Rock을 향유하면서 '자기 땅에 유배된 자'가 되지 않기란 매우 어려운 일이다. 
                      Niitsu Akio는 일본의 prog. rock fan들에게도 거의 알려지지 않은 Guitar를 주체로 삼는 다중악기주자이다. 
                      그의 표현에 의하면 I.O 앨범은 동화/동심의 세계를 그린 앨범이라 한다. 보다 상투적인 일본적 표현으로라면 메르헨의 세계이다.
                      <span className="text-blue-400 block mt-1">(선곡자: 김남웅)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded p-4">
                <h4 className="font-semibold text-cyan-300 mb-3">둘째 마당: 아트록 비디오 스페셜</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">4. Osanna - L'uomo - Non Sei Vissuto Mai (5분)</p>
                  <p className="text-sm text-gray-300">5. Genesis - Musical Box (8분)</p>
                  <p className="text-sm text-gray-300">6. Anglagard - UCLA '93 Live - Jordrok (11분)</p>
                  <p className="text-blue-400 text-sm">(선곡자: 이동훈)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ireland Section */}
          <div className="bg-green-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-green-500">
            <h2 className="text-2xl font-bold text-green-300 mb-6">🍀 아일랜드 (14:40-15:50)</h2>
            
            <div className="mb-6 p-4 bg-green-800 bg-opacity-30 rounded">
              <h3 className="text-lg font-semibold text-green-200 mb-3">아일랜드 소개</h3>
              <div className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-green-400">회장: 정철 (zepelin@plaza.snu.ac.kr)</strong>
                </p>
                <p>
                  아일랜드는 <strong className="text-yellow-400">93년</strong>에 하이텔을 사용하던 몇몇 아트락 애호가들이 모여서 만들었습니다. 
                  당시는 한창 아트락이 유행하던 때라서 사람들이 쉽게 모여서 적극적으로 활동할 수 있었으며, 
                  그 이후 매월 꾸준히 감상회를 가져와서 지난 달에는 <strong className="text-red-400">제 53회 감상회</strong>를 치렀습니다.
                </p>
                <p>
                  처음엔 이탈리아 쪽이나 프크락, 심프닉 락이 상당히 강세를 띠었습니다만, 참여하는 사람들도 조금씩 바뀌어 가고 
                  특집의 진행 과정에서 사람들의 취향도 다양해져서, 요즈음에는 그전에 좀 덜 듣던 캔터베리나 RIO, 모던락 쪽들도 많이 듣고 있습니다.
                </p>
                <p>
                  <strong className="text-cyan-400">매월 첫째주 일요일</strong>에 모이고 있으며 감상회 전에 하이텔에 공고가 올라갑니다. 
                  항상 누구에게나 열려있으니 관심있은 분들은 언제든지 놀러오세요. 
                  <strong className="text-purple-400">하이텔에서는 go sg150</strong> 하시면 바로 들어오실 수 있습니다.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-200 mb-4">🎵 아일랜드 플레이리스트</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-300 mb-2">X-Legged Sally - "Eddies" from Killed By Charity ('93)</h4>
                  <p className="text-sm text-gray-300">
                    미국 뉴욕 지역에서 활동 중인 벨기에 출신 그룹. 기본적으로 재즈락의 바탕 위에서 다양한 요소들을 섞어서 
                    실험적이면서 유머러스한 면모를 보여주고 있다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Miriodor - "Igor, The Motorbike Bear" from Elastic Juggling ('95)</h4>
                  <p className="text-sm text-gray-300">
                    캐나다의 재즈락/챔버/RIO 밴드. 클래식 악기들과 신시사이저를 잘 조합하여 매우 역동적인 음악을 들려준다. 
                    복잡한 편곡과 다양한 리듬 변화가 특징.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-300 mb-2">5UU's - "Opportunity Bangs" from Hunger's Teeth ('93)</h4>
                  <p className="text-sm text-gray-300">
                    RIO 계통에 관심이 있는 사람들에게는 많은 지지를 받고 있는 그룹. 
                    RIO에 기반을 두고 있으면서도 난해함에서 벗어나 친근감을 주는 다양한 요소들로 가득차 있어서 
                    작품성과 대중성이 잘 조화된 좋은 예.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-300 mb-2">Eskaton - "eskaton" from 4 Visions ('79)</h4>
                  <p className="text-sm text-gray-300">
                    마그마의 영향을 받은 프랑스의 쥴 밴드. 코바이아어를 사용하는 마그마나 다른 아류밴드들과는 달리 불어를 사용. 
                    곡 전반에 깔리는 육중한 베이스 리듬과 두 명의 미니멀적 여성 보컬이 조화를 이루어 쥴 뮤직의 전형적 아름다움을 보여준다.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">Koenjihyakkei - "Brahggo" from S/T ('96)</h4>
                  <p className="text-sm text-gray-300">
                    일본의 대표적인 쥴 관련 그룹 중 하나. Tatsuya Yoshida가 리더인 그룹으로, 
                    일본 그룹들의 음악은 재즈락 쪽은 무시한 채 쥴의 특성이 되는 부분들만을 차용하여 강조하는 성향을 보여준다. 
                    일부에서는 펑크 쥴이라는 명칭으로 불리기도 한다.
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">Von Zamla - "Doppler"</h4>
                  <p className="text-sm text-gray-300">
                    스웨덴, 더 나아가 북유럽권의 진보음악을 대표하는 밴드 Zamla Mammmas Manna의 프로젝트. 
                    북구의 진보음악 특유의 차가운 느낌과 민속적 향취가 강하게 느껴지는 음악. 
                    RIO 계열의 밴드답게 연주력과 실험적인 내용 모든 면에서 매우 훌륭하다.
                    <span className="text-green-400 block mt-1">(박경호 - kalynda)</span>
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-pink-300 mb-2">ZNR - "Ancien Automate Mexicain - Ecorcherie Romantique Pour Coeur Fele"</h4>
                  <p className="text-sm text-gray-300">
                    진보적인 RIO 모임에 참가했던 밴드로 Chamber Music적 성격이 강함. 
                    사티나 드뷔시의 영향을 받은 만큼, 팽팽한 긴장감보다는 여유럽고 유머러스하며, 
                    때로는 옛 추억을 떠올리게끔하는 복고적 성향을 지니고 있다.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-indigo-300 mb-2">Can - "Vitamin C"</h4>
                  <p className="text-sm text-gray-300">
                    아일랜드 동호회의 음악적 전환점이 된 밴드. 심포닉 록의 지나친 형식미와 장황한 연주에 질려있던 상태에서 
                    간결하고 원시적인 리듬을 바탕으로 한 Can의 음악이 매우 참신하게 들렸다. 
                    이후 뉴 웨이브나 앰비언트, 모던록에 관심을 가지게 되는 계기를 만들어준 그룹.
                  </p>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-teal-300 mb-2">Supersister - "No Tree Will Grow"</h4>
                  <p className="text-sm text-gray-300">
                    네덜란드의 캔터베리류 음악을 추구하는 밴드. 독창성이 부족한 대신 여러 가지 재료들을 종합하여 
                    장점들을 추려내고 그것을 잘 조합하는 능력이 뛰어나다. 
                    소프트 머쉰의 실험성, 케빈 에이어즈의 유머, 햇필드의 연주력이 완벽하게 합체되어 있다.
                  </p>
                </div>

                <div className="border-l-4 border-lime-500 pl-4">
                  <h4 className="font-semibold text-lime-300 mb-2">Cartoon - "Light In August"</h4>
                  <p className="text-sm text-gray-300">
                    80년대 미국의 아방가르드와 프리재즈, 전자음악을 중심으로 한 진보 음악의 과도기적 모습을 보여주는 밴드. 
                    키보드를 주체로 한 Chamber Rock 스타일이지만, 간간히 도발적인 임프로바이제이션과 
                    Gentle Giant식의 변칙적인 구성을 도입하여 나름대로의 개성을 보여주려고 노력했다.
                    <span className="text-green-400 block mt-1">(오찬익 - ooci, humanoid, Taunict)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Jieum Section */}
          <div className="bg-orange-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-orange-500">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">🎸 지음 (15:50-17:00)</h2>
            
            <div className="mb-6 p-4 bg-orange-800 bg-opacity-30 rounded">
              <h3 className="text-lg font-semibold text-orange-200 mb-3">지음 소개</h3>
              <div className="text-sm text-gray-300 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-orange-400">92년 초여름</strong>, 부평에 소리그림이라는 조그마한 레코드점에서 동우회를 창립시킬 회원들이 
                  우연하게 만나면서 이야기는 시작됩니다. 레코드점 주인이 긴급 입수해온 이태리 원판들을 두고 소리없는 경쟁이 시작되었고, 
                  어디서 들었는지 냄새를 맡고 찾아온 몇몇사람들에 의해서 1평반 남짓한 공간은 한발자국 내디딜 틈없이 가득차버렸죠.
                </p>
                <p>
                  음반들의 쟁탈전 속에서도 이런음악을 듣고 이해해주는 사람이었기에 서로 인사를 나누기시작했고, 
                  이런저런 이야기를 하면서 음악감상동우회 지음에대한 표면적인 윤곽이 잡히게 된거죠.
                </p>
                <p>
                  <strong className="text-yellow-400">93년 1월 첫째주 일요일</strong>부터 제1회 모임이 시작되었고 지금 현재까지 지음은 꾸준히 이어져오고 있습니다. 
                  시간이 흐르자 프로그레시브를 포함해서 각회원들의 취향에 의해 자신들만의 영역이 생겨나면서 보다 구체적인 음악감상회가 자리를 차지하게됩니다.
                </p>
                <p>
                  <strong className="text-cyan-400">클래식, 재즈, 싸이끼델릭, 챔버락, 키타인스트루먼트, 데쓰메탈, 국악</strong> 등등 
                  드디어 자유로운 음악 선곡을 통해 보다 신선하고 충실한 내용을 전개하면서 지음이 표방하는 <strong className="text-green-400">Free Listening</strong>이 정말로 실현되었죠.
                </p>
                <p>
                  모임은 <strong className="text-purple-400">매달 첫째, 셋째 일요일</strong>에 부평에 자리한 블루스파크에서 갖고, 
                  12시부터 4시까지 약간 긴 시간동안 모임을 갖고, 모임 후에는 집이비는 회원들집에 침투해서 술과 함께 좀 더 음악을 즐기면서 피곤한 일주일을 달래는거죠.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-200 mb-4">🎵 지음 추천곡</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-300 mb-2">1. Rawalpindi Blues - ESCALATOR OVER THE HILL</h4>
                  <p className="text-sm text-gray-300">
                    PAUL HAINES의 작품을 각색해서 뮤지컬화한 작품으로, JOHN McLAUGHLIN, DON CHERRY, MICHLAEL MANTLER 등의 수많은 뮤지션들이 참여했고, 
                    CARLA BLEY가 각색과 편집하였다. 참여한 뮤지션의 다수가 재즈 뮤지션이지만 정작 뚜껑을 열고나오는 음악들은 프리째즈나 전위적인 요소들이 여기저기들린다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-300 mb-2">2. Twilight Of The God - BATHORY</h4>
                  <p className="text-sm text-gray-300">
                    데쓰메탈이라는 쟝르가 확고하게 이루어지기 이전에 VENOM과 BATHORY는 아주 중요한 그룹이었다. 
                    BATHORY는 전설에 얽힌 웅장하고 신비적인 이미지로 다가선다. 스웨덴 출신답게 3인조로 이루어진 이들은 
                    북유럽스타일의 멜로딕한 사운드를 곧잘 사용하고, 대곡지향적인 성향은 이들의 프로그레시브하고 싸이키한 성격을 그대로 반영한다.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-300 mb-2">3. Steinsame - CLUSTER & ENO</h4>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-300 mb-2">4. Po-Land - L.A. Freemusic Society집단들중 BOO-BOOETTSE</h4>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">5. Mendbrich El Hased - RIMITTI</h4>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">6. 살풀이 - URASIAN ECHOES</h4>
                </div>
              </div>
            </div>
          </div>

          {/* ARC Section */}
          <div className="bg-red-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-red-500">
            <h2 className="text-2xl font-bold text-red-300 mb-6">🎭 ARC (17:00-18:00)</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-200 mb-4">🎵 Art Rock Club Play List</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-300 mb-2">1. Mandrake - Kazari Mado No Dekigoto from [Unreleased Materials]</h4>
                  <p className="text-sm text-gray-300">
                    70년대 말에 녹음되었으면서 올 해 겨우 일반에게 공개된 일본의 전설적 심포닉 록 그룹 맨드레이크의 작품. 
                    저년에 걸친 팽팽한 긴장감과 공격적인 연주가 매우 인상적이다. 당시 일본 아트 록씬이 수동적이고 나약하지만은 않았다는 것을 증명해주는 좋은 예.
                    <span className="text-red-400 block mt-1">(조남걸)</span>
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-300 mb-2">2. Garmarna - Varulven from [Guds Speleman]</h4>
                  <p className="text-sm text-gray-300">
                    현재 북유럽에서 가장 폭넓은 활동을 하고 있는 스웨덴의 5인조 포크 락 그룹. 1990년 1월에 결성, 94년말 데뷔작 [Vittrad]를 발표한 뒤, 
                    세계 각지의 포크 평론가들로부터 극찬을 받았던 그룹이다. 특히 여성 보컬리스트 Emma Hardolin의 고음역 보이스 컬러가 돋보인다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-300 mb-2">3. Pierre De Grenoble - Quand J'otais fille a marler from [Same]</h4>
                  <p className="text-sm text-gray-300">
                    Alan Stivell 밴드에서 활동하던 기타리스트 Gabriel Yacoub와 아내 Marie Yacoub이 결성한 듀오프로젝트로 Malicorne의 전신. 
                    Alan Stivell이 켈트 부흥 운동을 주도한 음악 전사라면, 이들은 프랑스의 정통 포크 록을 개화시킨 프렌치 포크 록의 파이오니어로 볼 수 있을 것이다.
                    <span className="text-red-400 block mt-1">(이경숙)</span>
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-300 mb-2">4. Urban Sax - Possible Prologue, Paraduan Suara pt. 1</h4>
                  <div className="text-xs text-gray-400 mb-2">from [a Jakarta: Concert Inaugural du Festival Art Summit 95]</div>
                  <p className="text-sm text-gray-300">
                    "direction et mise en scene, Gilbert Artman"<br/>
                    과시적인 전위(Avant-garde)성과 Minimalism, 그리고 'Orientalism'의 혐의로부터 자유로운가에 대한 질문을 던지는 작품.
                    <span className="text-red-400 block mt-1">(김윤상)</span>
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-2">5. Soledad Bravo - Une Pastora Yo Ami from [Cantos Sefardles]</h4>
                  <p className="text-sm text-gray-300">
                    베네주엘라 출신으로 스페인에서 음반을 발표하고 활동한 여성 포크 싱어 Soledad Bravo의 최고작.
                    <span className="text-red-400 block mt-1">(이승)</span>
                  </p>
                </div>

                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">6. Raul Porchetto - Cancion part V-VIII from [Cristo Rock]</h4>
                  <p className="text-sm text-gray-300">
                    Argentina의 Super Musician중 한 사람인 Raul Porchetto의 데뷔 앨범, 1973년 제작 앨범이다. 
                    80년대 후반까지 총 15장의 앨범을 발표했었던 Argentina Rock계의 산증인이다. 
                    많은 세션뮤지션을 참가시켜 매우 다양한 사운드를 들려주고 있으며, Porchetto 특유의 여린 Folk적 vocal이 매우 매력적으로 다가오는 앨범이다.
                    <span className="text-red-400 block mt-1">(맹경무)</span>
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-pink-300 mb-2">7. Peter Gabriel - Secret World from [US]</h4>
                  <p className="text-sm text-gray-300">
                    현재 진형형인 아트 록 작가주의의 기수 피터 게이브리얼의 92년도 작. 
                    테크놀로지와 육체의 행복한 만남 그리고 그 사이에서 울려 퍼지는 땅의 소리. 
                    '아이디얼 월드'가 아닌 '리얼 월드'에서 태어나, 그 속의 사람들과 그 관계에 대해 이야기하려는 작품. 
                    타 지역에 대한 그의 애정 어린 시선과 관심은 오리엔탈리즘이 아닌 보편적 인간관에 기초하고 있다.
                    <span className="text-red-400 block mt-1">(전정기)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Significance */}
          <div className="bg-gradient-to-r from-yellow-900 to-red-900 bg-opacity-50 rounded-lg p-6 mb-8 border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">🏛️ 역사적 의의</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">🌐 인터넷 시대의 시작</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 1997년 인터넷 초기 시대의 동호회 연합</li>
                  <li>• 메일링 리스트, 하이텔, 천리안, 나우누리 등 다양한 플랫폼</li>
                  <li>• 전국 각지 동호회들의 첫 만남</li>
                  <li>• 온라인에서 오프라인으로의 확장</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">🎵 음악적 다양성</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 헝가리, 일본, 프랑스, 스웨덴, 미국 등 국제적 스펙트럼</li>
                  <li>• 심포닉, RIO, 캔터베리, 쥴, 챔버록 등 장르 다양성</li>
                  <li>• 아방가르드부터 데스메탈까지 폭넓은 음악 탐구</li>
                  <li>• 각 동호회별 고유한 음악적 색깔 공유</li>
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
