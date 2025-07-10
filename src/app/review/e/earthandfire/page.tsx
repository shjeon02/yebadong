"use client";
import Link from "next/link";

export default function EarthAndFirePage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Earth and Fire</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 네덜란드</li>
              <li><strong>장르:</strong> 프로그레시브 록, 심포닉 록</li>
              <li><strong>멤버:</strong> Jerney Kaagman (보컬), Chris Koerts (기타), Bert Koerts</li>
              <li><strong>특징:</strong> 천사같은 목소리의 여성 보컬</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Earth & Fire (1971)</strong></li>
              <li><strong>Song of the Marching Children (1972)</strong></li>
              <li><strong>Atlantis (1973)</strong></li>
              <li><strong>To the World of the Future (1975)</strong></li>
              <li><strong>Gate to Infinity (1977)</strong></li>
              <li><strong>Reality Fills Fantasy (1979)</strong></li>
              <li><strong>Andromeda Girl (1981)</strong></li>
              <li><strong>In a State of Flux (1982)</strong></li>
              <li><strong>Phoenix (1989)</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>멜로트론과 올겐 사운드</li>
              <li>컨셉츄얼한 대곡 구성</li>
              <li>Curved Air와 비슷한 스타일</li>
              <li>네덜란드를 대표하는 프로그레시브 밴드</li>
              <li>Jerney Kaagman의 아름다운 여성 보컬</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰 1: 박왕근, 3M, longdal의 토론</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>박왕근, windmill (landberk@hananet.net)</strong>
              </div>
              <p className="mb-4">
                그리고 전부터 구하려고 했던 거중에 하나가 Earth & Fire의 Andromeda Girl이란 앨범인데
                이거 역시 이미 씨디로 발매되었더군요.
              </p>
              <p className="mb-4">
                이 앨범 다른 곡들은 어떤지 궁금합니다. Triumvirat - A la carte처럼 한곡만 튀고
                나머지는 대체로 별로인지.
              </p>

              <div className="mb-4 text-sm text-gray-600">
                <strong>3M (freev@hanmail.net)</strong>
              </div>
              <p className="mb-4">
                그 한곡이란 게 Andromeda Girl이란 동명 타이틀의 대곡을 말씀 하시는 거죠?
                그 외에 두세곡 정도가 추가로 괜찮았던 것 같아요.
              </p>
              <p className="mb-4">
                전반적으로 Reality Fills Fantasy의 연장선에 있지만.. 보다 디스코심포닉
                지향적이고 완성도도 상대적으로 떨어집니다.
              </p>
              <p className="mb-4">
                그러나 저같은 Earth and Fire의 골수팬이라면 디스코 파마를 한
                우리 여주인공의 모습을 보는 즐거움도 ^^
              </p>

              <div className="mb-4 text-sm text-gray-600">
                <strong>longdal (shjeon@yebadong.kaist.ac.kr)</strong>
              </div>
              <p className="mb-4">
                요즘 음반 구입을 하고 싶은 생각이 굴뚝 같네요. 3M님과 박왕근님이
                Earth and Fire 얘기를 꺼내는 바람에 잊고 있던 제 wanted album
                들이 생각났어요. Curved Air의 보컬인 Sonja Kristina와 음색이
                비슷한 여성 보컬(Jerney kaagman). 그밖에도 비슷한 점들이 많은 것
                같아요. 두 밴드의 음악을 동시에 들려주고 구분하라고 한다면 잘
                못할 것 같아요.
              </p>
              <p className="mb-4">
                예전에 예바동에서 초보자를 위한 폴에서 당당 1위를 차지한 Earth
                and Fire. 그때 처음 관심을 가지기 시작해서 지금은 1, 2, 3집 밖에
                없지만 나머지 앨범들도 듣고 싶네요. 요새는 운전하면서 듣는 앨범
                1위, 그리고 라이브 공연을 보고 싶은 밴드 1위에 Earth and Fire를
                넣고 싶어요.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">리뷰 2: 정종화의 Song Of The Marching Children 리뷰 (notte@hitel.net)</h3>
            <div className="prose max-w-none">
              <h4 className="text-lg font-semibold text-green-700 mb-3">
                Earth And Fire 'Song Of The Marching Children' ★★★★
              </h4>
              
              <p className="mb-4">
                아트록의 강국이라고 하는 영국, 이태리, 독일, 프랑스등을 제외하고 비교적 비중이 큰 걸출한 명그룹을 
                보유하고 있는 나라가 바로 네덜란드가 아닌가싶다. 네덜란드는 비교적 실속있게 세계적인 명성을 가진 
                대그룹들을 가지고 있으며, 이들중에서 대표적인 그룹으로 꼽을 수 있는 팀중의 하나가 바로 Earth And Fire다.
              </p>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">멤버 구성과 보컬</h5>
                <p>
                  비교적 이상적이랄 수 있는 멤버구성을 가지고 있는 Earth And Fire의 여성보컬 Jerney Kaagman은 
                  대체적인 아트록 그룹들의 여성보컬처럼 대단히 아름다운 천사같은 목소리를 가진 여성이다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">앨범의 탄생</h5>
                <p>
                  이들은 처음시작부터 아트록이나 진보적인 음악을 목표로 시작한것은 아니었으며, 데뷰앨범은 
                  대체적으로 평이한 팝음악이었다. 그러다가 당시 밀어닥친 시대적 조류에 영합하여 발표한 
                  그들의 두번째 앨범이자, 걸작인 본작이 탄생하게 되었다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">앨범 자켓 디자인</h5>
                <p>
                  앨범커버를 살펴보면... 프로그래시브나 아트록이라는 장르에서 얼마나 그 앨범의 자켓 디자인이 
                  하나의 메시지 전달과 예술적인 차원으로 절대적이라는 것을 보여주는 또 하나의 예다. 
                  검은 자켓에 금빛의 로고타입으로 봉인되어 있는 자켓은 바로 본작의 타이틀곡에 등장하는 
                  Seal(봉인)을 상징하고 있다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">Side A 곡들</h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Carnival of Animals:</strong> 행진곡풍의 드럼비트와 변주부분에서 들려오는 여성보컬의 아름다운 목소리</li>
                  <li><strong>Ebbtide:</strong> 초반부의 다소간 가볍고 경쾌한 분위기중에서도 아름답게 들려오는 플뤼트 연주</li>
                  <li><strong>Storm And Thunder:</strong> 웅장한 올겐연주가 성스럽다고 하기에는 약간 가벼운 느낌으로 잔잔하게 울려퍼짐</li>
                  <li><strong>In The Mountains:</strong> 대단히 점층적인 고조를 들려주는 인상적인 기타연주가 일품</li>
                  <li><strong>Memories (보너스 트랙):</strong> 싱글로 발표되었던 곡, 힘찬 Kaagman의 보컬</li>
                </ul>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h5 className="font-semibold mb-2">타이틀곡 'Song Of The Marching Children' (18분 30초)</h5>
                <p>
                  두번째 면을 가득채우고 있는 타이틀곡은 아트록의 역사상 뛰어난 명곡으로 꼽힐만한 대단한 구성과 
                  주제를 담고 있는 대곡이다. 7개의 조곡으로 이루어져 있으며, 앨범의 자켓과 밀접한 관련을 가진 
                  주제의 곡이다.
                </p>
                <p className="mt-2">
                  Dr. Z의 'Three Parts To My Soul'과 일맥상통하는 곡으로, 인간의 출생때부터 죽음에 이르기까지... 
                  결국은 지옥의 나락에 떨어져야만 하는 인간의 운명을 슬프게 이야기 하고 있다. 천국으로 향하는 길은 
                  멀고도 험하며 이들을 인도해야할 성직자로 보이는 이가 오히려 이들(Marching Children=우리 인간들)을 
                  가로막고 있다.
                </p>
                <p className="mt-2">
                  6번째 부분인 'Purification'에서 등장하는 남성보컬은 기타파트를 담당하고 있는 Chris Koerts의 
                  목소리인데, 대단히 순수한 느낌을 주는 아름다운 보컬을 들려주어, 어쿠스틱한 기타연주와 어울려서 
                  매력적으로 다가온다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">'From The End Till The Beginning' (보너스 트랙)</h5>
                <p>
                  원래 Memories 싱글의 두번째면에 수록된 곡으로, 대단히 드라마틱한 곡이다. 멜로트론 사운드가 
                  곡을 전체적으로 감싸면서 진행되는 곡으로, Memories보다 더욱 진보적인 성격이 강한 뛰어난 작품이다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">리뷰 3: 한정은의 Atlantis와 Song Of The Marching Children 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>한정은 (2100419, 93.4)</strong>
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">보유 앨범</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>ATLANTIS:</strong> 성음을 통해 지난 89년에 소개</li>
                  <li><strong>SONG OF THE MARCHING CHILDREN:</strong> 시완레코드를 통해 지난 91년에 발매</li>
                </ul>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범 자켓 디자인</h4>
                <p className="mb-2">
                  <strong>ATLANTIS:</strong> 거대한 신전과 코끼리얼굴의 사람이 서있고 뒤면은 3개의 눈을 가진 
                  그리고 6개의 팔이 달린 힌두신화에서 본듯한 낯익은 그림
                </p>
                <p>
                  <strong>SONG OF THE MARCHING CHILDREN:</strong> 검은 표지에 앨범 제목이 써있고 더블 자켓의 형식으로 
                  안면을 보면 인간 삶의 순환 과정을 그려놓았다. 태아부터 시작하여 점점 자라가는 모습... 
                  하지만 어른의 모습은 빠져 있고 구원과 나락의 갈림길인 계단... 인간의 발생지는 원폭 구름모양
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">디스코그래피</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>71년 데뷔앨범 『EARTH AND FIRE』</li>
                  <li>72년 가장 뛰어난 앨범 『SONG OF THE MARCHING CHILDREN』</li>
                  <li>73년 『ATLANTIS』 (한정은이 가장 좋아하는 앨범)</li>
                  <li>75년 4집 『TO THE WORLD FUTURE』</li>
                  <li>77년 5집 『GATE TO INFINITY』 (다소 팝적으로 변모)</li>
                  <li>79년 6집 『REALITY FILLS FANTASY』</li>
                  <li>81년 7집 『ANDROMEDA GIRL』 (Chris Koerts 탈퇴 상태에서 발표)</li>
                  <li>82년 8집 『IN A STATE OF FLEX』 (일시 해산)</li>
                  <li>1989년 『PHOENIX』 9번째 앨범 공개</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-4 text-red-800">리뷰 4: 김용석, 정종화의 별점 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-6">
                <div className="mb-4 text-sm text-gray-600">
                  <strong>김용석 (demitrio@hitel.net, 94.12)</strong>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Earth & Fire - Atlantis / Song Of the Marching Children 합본 ★★★★☆</h4>
                  <p className="mb-2">
                    네덜란드 그룹 Earth & Fire의 대표작이라면 Atlantis와 Song Of the Marching Children를 꼽을 수 있는데, 
                    이것을 합본하여 한장의 CD값으로 내놓았으니 별이 많아 질 수 밖에 없다.
                  </p>
                  <p className="mb-2">
                    이 두앨범의 스타일은 거의 같다. 앨범의 한면은 대곡한곡이고 다른 한면은 소품들의 모음이다. 
                    우리에게 가장 잘 알려진 곡은 Fanfare인데 사실 난 이곡보다는 다른 소품들을 더 추천하고 싶다.
                  </p>
                  <p>
                    개인적으로는 이 두 앨범을 모두 별다섯개를 주고싶다. 그러나 확실히 이들의 사운드는 힘이 부족하여 
                    별 반개를 제하였다.
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-4 text-sm text-gray-600">
                  <strong>정종화 (notte@hitel.net, 94.12)</strong>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Earth & Fire - Atlantis ★★★★</h4>
                      <p className="text-sm">
                        뛰어난 컨셉추얼 성을 엿볼 수 있는 앨범. 'Fanfare'도 많은 사랑을 받았던 곡이고 
                        타이틀곡인 'Atlantis'도 좋은 곡이다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Song Of The Marching Children ★★★★</h4>
                      <p className="text-sm">
                        특히 Song Of The Marching Children의 타이틀곡은 손꼽을만한 멋진 대작이다. 
                        천사같은 목소리의 헤르니 카그맨의 맑은 목소리는 Earth & Fire의 가장 매력적인 부분이다.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">
                    시완에서 나온 Song Of The Marching Children 앨범은 초창기 시완레코드에서 상당히 애쓴 흔적이 
                    역력한 포스터와 앨범의 컨셉트를 한눈에 보여주는 게이트 폴드 커버등으로 LP를 구입하는게 
                    훨씬 더 나은 결과를 가져다 줄것으로 믿는다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 