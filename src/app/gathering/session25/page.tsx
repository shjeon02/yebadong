import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '제25회 YBD 다장르 융합 특집 - 2001년 6월 16일 | Yebadong',
  description: '예바동 제25회 다장르 융합 특집 (2001년 6월 16일, 대치동 Manplus)',
};

export default function Session25Page() {
  return (
    <main className="min-h-screen bg-[#A9A9D3] text-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-20 h-16 bg-gray-600 border border-gray-400 rounded flex items-center justify-center mr-4">
              <span className="text-xs text-gray-300">penguin.gif</span>
            </div>
            <h1 className="text-4xl font-bold text-yellow-500">
              예바동 25회 감상회
            </h1>
          </div>
          <h2 className="text-2xl text-blue-800 mb-2">다장르 융합 특집</h2>
          <p className="text-lg text-blue-700">2001년 6월 16일 (토) 오후 2시</p>
          <p className="text-lg text-blue-700">대치동 Manplus</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-90 border border-gray-400 rounded-lg p-8">
            
            {/* Program Overview */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">프로그램 구성</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-blue-200 p-3 rounded">
                    <p><strong>인티고 웹 라디오 CJ</strong> - 60분</p>
                    <p className="text-sm text-blue-700">(http://www.rock.ox.ro)</p>
                  </div>
                  <div className="bg-green-200 p-3 rounded">
                    <p><strong>Jazzmine</strong> - 55분</p>
                    <p className="text-sm text-green-700">아트락팬들이 좋아할 만한 다른 장르의 아트락들</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-200 p-3 rounded">
                    <p><strong>Lennon</strong> - 30분</p>
                    <p className="text-sm text-red-700">이태리 프로록</p>
                  </div>
                  <div className="bg-purple-200 p-3 rounded">
                    <p><strong>Libero</strong> - 40분</p>
                    <p className="text-sm text-purple-700">예바동에 회자되었던 곡들</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Presenter Sections */}
            <div className="space-y-12">
              
              {/* 권재륜 (Jazznine) */}
              <div className="border border-green-400 rounded-lg p-6 bg-green-50">
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  🎼 권재륜 (Jazznine) - 아트락 마음으로 즐기는 다른 장르들
                </h3>
                
                <div className="mb-6 p-4 bg-green-100 rounded border border-green-300">
                  <p className="text-sm text-green-800 italic">
                    "우선 맨플러스를 찾아주셔서 감사드립니다. ^_^; 저도 아트락 매우 좋아하고 
                    꽤 들었지만, 내공이 부족해서, 제가 아트락 듣는 마음으로 즐겨듣는 다른 장르의 
                    음악들을 몇가지 골라 봤습니다."
                  </p>
                  <p className="text-xs text-green-700 mt-2">
                    <strong>[광고]</strong> 예바동에서 오셨다고 말씀하시면 5%-10% DC 해드립니다! ^^;;
                  </p>
                </div>

                <div className="space-y-6">
                  
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-700 mb-3">🎻 Modern Classic</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p><strong>Alfred Schnittke (1934-1998)</strong> - Concerto Grosso no. 1</p>
                        <p className="text-green-600">Gidon Kremer, Tatiana Grindenko (Violin)</p>
                        <p className="text-green-600">The Chamber Orchestra of Europe</p>
                        <ul className="ml-4 text-green-700">
                          <li>• TOCCATA: ALLEGRO (4:26)</li>
                          <li>• RONDO. AGITATO (7:08)</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Serge Prokofiev (1891-1953)</strong> - Violin Concerto no.1 in D major</p>
                        <p className="text-green-600">Shlomo Mintz, Chicago Symphony Orchestra</p>
                        <ul className="ml-4 text-green-700">
                          <li>• SCHERZO: VIVACISSIMO (3:55)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-bold text-green-700 mb-3">🔊 Progressive Techno</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p><strong>Aphex Twin</strong></p>
                        <ul className="ml-4 text-green-700">
                          <li>• Fingerbib (3:48)</li>
                          <li>• To cure a weakling child (4:03)</li>
                          <li>• Goon Gumpas (2:02)</li>
                        </ul>
                      </div>
                      <div>
                        <p><strong>Future Sound of London</strong> - Lifeforms</p>
                        <ul className="ml-4 text-green-700">
                          <li>• Cascade (5:59)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="font-bold text-green-700 mb-3">🌀 Psychedelic Rock</h4>
                      <p className="text-sm"><strong>Man</strong> - Revelation</p>
                      <ul className="ml-4 text-green-700 text-sm">
                        <li>• Erotica (4:08)</li>
                        <li>• Blind Man (4:16)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="font-bold text-green-700 mb-3">🎷 Fusion Jazz</h4>
                      <p className="text-sm"><strong>Herbie Hancock</strong> - Head hunters</p>
                      <ul className="ml-4 text-green-700 text-sm">
                        <li>• Watermelon man (6:29)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="font-bold text-green-700 mb-3">🇪🇸 Spain Art Rock</h4>
                      <p className="text-sm"><strong>Granada</strong> - Hablo de una tierra</p>
                      <ul className="ml-4 text-green-700 text-sm">
                        <li>• Nada es real (5:01)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="font-bold text-green-700 mb-3">🇮🇳 Indipop</h4>
                      <p className="text-sm"><strong>Gulzar</strong> - Gulzar's sunset point</p>
                      <ul className="ml-4 text-green-700 text-sm">
                        <li>• Aa Chal Doobke Dekhe (5:29)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 김성우 (Libero) */}
              <div className="border border-purple-400 rounded-lg p-6 bg-purple-50">
                <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                  🌌 김성우 (Libero) - 예바동에 회자되었던 곡들
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-3">🌪️ Godspeed You! Black Emperor</h4>
                    <p className="text-sm mb-2"><strong>Lift Your Skinny Fists Like Antennas to Heaven</strong></p>
                    <p className="text-purple-600">• Storm: Levez Voz Skinny Fists Comme (22:00)</p>
                    <div className="mt-3 p-3 bg-purple-100 rounded text-xs">
                      <p className="italic">
                        "프로그레시브의 중심적인 이념은 누군가를 앞서나가는 음악, 즉 Avant-Garde Spirit에 있다. 
                        이전의 틀을 깨트리고 자신만의 새로운 틀을 창출해내는 그런 정신 바로 아방가르드라는 것이다. 
                        소닉유스, 로버트 프립, 슈게이징, 크라우트 락과 전자음악, 탠져린 드림과 클라우스 슐츠..."
                      </p>
                      <p className="text-right mt-2">- 종합예술인</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-3">🇫🇮 Pekka Pohjola</h4>
                    <p className="text-sm mb-2"><strong>Pewit</strong></p>
                    <p className="text-purple-600">• Rita (11:23)</p>
                    <div className="mt-3 p-3 bg-purple-100 rounded text-xs">
                      <p className="italic">
                        "Pekka Pohjola의 Keesojen Lehto는 마이크 올드필드와 그의 여동생이 참여한 앨범이어서 
                        꽤 많은 매니어들이 찾았었죠? 북유럽의 음악이 그러하듯... 수정처럼 맑은 키보드와 
                        샐리 올드필드의 아름다운 스켓이 어우러진 보기드문 수작이군요."
                      </p>
                      <p className="text-right mt-2">- 이동훈</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-3">🇳🇱 Flairck</h4>
                    <p className="text-sm mb-2"><strong>De Optocht</strong></p>
                    <ul className="text-purple-600 space-y-1">
                      <li>• De Introcht (1:05)</li>
                      <li>• Missa Batava (7:16)</li>
                    </ul>
                    <div className="mt-3 p-3 bg-purple-100 rounded text-xs">
                      <p className="italic">
                        "Delightful folk-progressive with strong Celtic underpinnings. 
                        The highlight is the 22-minute title piece, incorporating lengthy, 
                        virtuosic cadenzas for pan-flute and violin. They are a band that is truly trying something different."
                      </p>
                      <p className="text-right mt-2">- Mike Ohman</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 인티고 웹라디오 CJ */}
              <div className="border border-blue-400 rounded-lg p-6 bg-blue-50">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                  📻 인티고 웹라디오 CJ - 프립, 인티고, 타락
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-3">🇦🇷 Nexus</h4>
                    <p className="text-sm mb-2"><strong>Detras Del Umbral (1999 Argentina)</strong></p>
                    <ul className="text-blue-600 space-y-1">
                      <li>• El Despertar (The Awakening)</li>
                      <li>• Condenados (Condemned)</li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-100 rounded text-xs">
                      <p>
                        아르헨티나의 신예밴드로, 꽤 농염한 심포닉락을 들려줍니다. 
                        특히, 여성보컬 MARIELA GONZALEZ의 목소리가 아주 시원합니다.
                      </p>
                      <p className="mt-2"><strong>멤버:</strong> LALO HUBER (Keyboards), CARLOS LUCENA (Guitars), 
                      LUIS NAKAMURA (Drums), DANIEL IANNIRUBERTO (Bass)</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-3">🇮🇹 Ezra Winston</h4>
                    <p className="text-sm mb-2"><strong>Ancient Afternoon (2nd album, 1990/재발매)</strong></p>
                    <p className="text-blue-600">• The Painter and The King (10:05)</p>
                    <ul className="ml-4 text-blue-500 text-xs space-y-1">
                      <li>i) The Arrival of The Painter</li>
                      <li>ii) Nightmare</li>
                      <li>iii) The Sentence</li>
                      <li>iv) Execution</li>
                      <li>v) Over the Candle-light</li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-100 rounded text-xs">
                      <p>
                        어떤 고대왕국의 하루를 그린 Concept 앨범. Le Orme의 Aldo Tagliapietra가 참여했습니다. 
                        네오프로그레시브의 전형적인 '물에 물탄 듯' 한 부류는 최소한 아닙니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-3">🇭🇺 Laszlo Hortobagyi</h4>
                    <p className="text-sm mb-2"><strong>The Arcadian Collection</strong></p>
                    <p className="text-blue-600">• Naganavarasa (6:54)</p>
                    <div className="mt-3 p-3 bg-blue-100 rounded text-xs">
                      <p>
                        1981년부터 Gayan Uttejak Society를 결성하여 인도나 중근동 음악자료를 수집, 
                        재해석하는 작업. 장르: World Music, 문화적 뿌리: India, Arcadia. 
                        "Recommended for late night trips trance moments"
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-700 mb-3">🕌 Sufi Chants from Cairo</h4>
                      <p className="text-sm">Ya rabbi, bi-l-Mustafa balligh maqasidana (3:49)</p>
                      <p className="text-xs text-blue-600 mt-2">
                        이집트 수피 찬송. 9세기후반부터 시작된 Dhikr(신에 대한 찬미) 전통
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-700 mb-3">⛪ Antioch Liturgy</h4>
                      <p className="text-sm">Gnizo (Glory to the Magnanimous One)</p>
                      <p className="text-xs text-blue-600 mt-2">
                        시리아 안디옥 교회의 초기 기독교 음악. Palm Sunday 전야제 의식
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 이강영 (Lennon) */}
              <div className="border border-red-400 rounded-lg p-6 bg-red-50">
                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                  🇮🇹 이강영 (Lennon) - 60-80년대 이태리 노래들
                </h3>
                
                <div className="mb-4 p-4 bg-red-100 rounded border border-red-300">
                  <p className="text-sm text-red-800 italic">
                    "안녕하세요 Lennon입니다. 근 일년만에 하는 감상회군요. 다른 분들이 선곡들을 안하셔서 
                    제가 또 약간의 시간을 때우도록 하겠습니다. 늘 그렇듯이, 다른 분들이 트는 텐션이 강한 
                    음악들을 들은 후 쉬는 시간으로 생각해 주세요."
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">E Se Qualcuno Si Innamorera' Di Me (La Palaya)</p>
                      <p className="text-sm text-red-600">- Marisa Sannia</p>
                      <p className="text-xs text-red-500">'안개낀 밤의 데이트' (Casa Bianca 가수)</p>
                    </div>

                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">Se ritornerai / L'ora dell'amore</p>
                      <p className="text-sm text-red-600">- I Camaleonti</p>
                      <p className="text-xs text-red-500">64년 데뷔, il Volo의 마리오 라벳치 재직</p>
                    </div>

                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">Ci sara / Liberta</p>
                      <p className="text-sm text-red-600">- Al Bano e Romina Power</p>
                      <p className="text-xs text-red-500">80년대 산레모 부부 듀오, Ci sara는 84년 그랑쁘리</p>
                    </div>

                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">Gloria</p>
                      <p className="text-sm text-red-600">- Umberto Tozzi</p>
                    </div>

                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">Quelli erano i Giorni</p>
                      <p className="text-sm text-red-600">- Gigliora Cinquetti</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">Senza luce</p>
                      <p className="text-sm text-red-600">- I Dik Dik</p>
                    </div>

                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-bold text-red-700">E tu (live) / Questo piccolo grande amore (live)</p>
                      <p className="text-sm text-red-600">- Claudio Baglioni</p>
                      <p className="text-xs text-red-500">지난번 Pooh 라이브 반응이 좋아서 준비한 발리오니 라이브</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-100 rounded">
                  <p className="text-sm text-red-800">
                    <strong>총 40분 구성:</strong> 60-80년대 이태리 노래들로, 
                    추억의 칸쪼네부터 산레모 그랑쁘리까지 다양한 스펙트럼
                  </p>
                </div>
              </div>

            </div>

            {/* Attendees */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg border border-gray-400">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">참석자 명단 (19명)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="space-y-1">
                  <p>• 권재륜 (Jeremy kwon, Jazznine@yahoo.com)</p>
                  <p>• 전혜정 (ponte, ponte@freechal.com)</p>
                  <p>• 임선희 (homilbat, homilbat@hanmail.net)</p>
                  <p>• 박준식 (박준식, xanadu@postech.ac.kr)</p>
                  <p>• 도태영 (flokis, kikimomo@hitel.net)</p>
                  <p>• 안병욱 (brave, brave@hdec.co.kr)</p>
                  <p>• 박석규 (cineauteur, cineauteur@hanmail.net)</p>
                  <p>• 박주혁 (종합예술인, villastrangiato@hanmail.net)</p>
                  <p>• 홍사여리 (Tarac, sayuhri@netian.com)</p>
                  <p>• 정효상 (intigo, intigo@hanmail.net)</p>
                </div>
                <div className="space-y-1">
                  <p>• 홍성하 (vail025, vail025@naver.com)</p>
                  <p>• 정철 (zepelin, zepelin@popsmail.com)</p>
                  <p>• 이강영 (Lennon, kylee@kias.re.kr)</p>
                  <p>• 이윤직 (Cicco, jiklee@netian.com)</p>
                  <p>• 최창규 (flyers, flyers@sait.samsung.co.kr)</p>
                  <p>• 김경 (fripp, fripp1@korea.com)</p>
                  <p>• 김기태 (m2urec, m2urec@chollian.net)</p>
                  <p>• 최정욱 (choi. jw, jw.choi@ncr.com)</p>
                  <p>• 전승훈 (Longdal, admin@yebadong.org)</p>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg border border-gray-400">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📸 감상회 사진 갤러리</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-01.JPG" 
                      alt="프립, 인티고, 타락, 박석규, 종합예술인"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">프립, 인티고, 타락, 박석규, 종합예술인</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-02.JPG" 
                      alt="박준식, 임선희, 홍성하, 정철"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">박준식, 임선희, 홍성하, 정철</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-03.JPG" 
                      alt="홍성하, 정철"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">홍성하, 정철</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-04.JPG" 
                      alt="이강영, 이윤직, 최창규, 전혜정"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">이강영, 이윤직, 최창규, 전혜정</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-05.JPG" 
                      alt="이강영, 권재륜"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">이강영, 권재륜</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-06.JPG" 
                      alt="안병욱, 김남웅, 최정욱, 도태영"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">안병욱, 김남웅, 최정욱, 도태영</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/25/Image-09.JPG" 
                      alt="맨플러스 전경"
                      fill
                      className="object-cover rounded border border-gray-500"
                    />
                  </div>
                  <p className="text-sm text-gray-700">맨플러스 전경</p>
                </div>
              </div>
            </div>

            {/* Session Analysis */}
            <div className="mt-12 p-6 bg-yellow-100 rounded-lg border border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🎼 Session 25의 혁신적 특징</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-white p-4 rounded border border-yellow-300">
                  <h4 className="font-bold text-yellow-700 mb-3">🌍 장르 융합의 실험</h4>
                  <ul className="text-sm space-y-2 text-yellow-800">
                    <li><strong>• 현대 클래식:</strong> Schnittke, Prokofiev</li>
                    <li><strong>• 프로그레시브 테크노:</strong> Aphex Twin, FSOL</li>
                    <li><strong>• 월드 뮤직:</strong> 인도, 중동, 수피 찬송</li>
                    <li><strong>• 포스트 록:</strong> Godspeed You! Black Emperor</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-yellow-300">
                  <h4 className="font-bold text-yellow-700 mb-3">🎯 전문가별 큐레이션</h4>
                  <ul className="text-sm space-y-2 text-yellow-800">
                    <li><strong>• Jazznine:</strong> 아트락 마음으로 듣는 다른 장르</li>
                    <li><strong>• 인티고 CJ:</strong> 웹라디오 전문 선곡</li>
                    <li><strong>• Libero:</strong> 예바동 회자곡 아카이브</li>
                    <li><strong>• Lennon:</strong> 이탈리아 칸쪼네 휴식</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-yellow-300">
                  <h4 className="font-bold text-yellow-700 mb-3">🌐 국제적 스펙트럼</h4>
                  <ul className="text-sm space-y-2 text-yellow-800">
                    <li><strong>• 유럽:</strong> 러시아, 독일, 네덜란드, 이탈리아</li>
                    <li><strong>• 아메리카:</strong> 아르헨티나, 미국, 캐나다</li>
                    <li><strong>• 아시아:</strong> 인도, 중동</li>
                    <li><strong>• 북유럽:</strong> 핀란드 (Pekka Pohjola)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-yellow-300">
                  <h4 className="font-bold text-yellow-700 mb-3">💡 혁신적 접근</h4>
                  <ul className="text-sm space-y-2 text-yellow-800">
                    <li><strong>• 웹라디오:</strong> 인터넷 시대의 새로운 매체</li>
                    <li><strong>• 맨플러스 할인:</strong> 상업적 연계 시도</li>
                    <li><strong>• 아방가르드 정신:</strong> 장르 경계 해체</li>
                    <li><strong>• 문화적 뿌리:</strong> 전통과 현대의 만남</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mt-8 p-4 bg-gray-200 rounded-lg border border-gray-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-blue-600">30+</div>
                  <div className="text-blue-700">곡 (4명 발표자)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🌍</div>
                  <div className="text-green-700">10개 장르</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">📸</div>
                  <div className="text-purple-700">7장 사진</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-red-600">19</div>
                  <div className="text-red-700">명 참석</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-blue-800 mb-4">
                ✅ 제25회 다장르 융합 특집 완전 복원! 
                현대 클래식부터 수피 찬송까지, 장르의 경계를 넘나드는 혁신적 실험과 
                19명이 함께한 풍성한 음악 여행이 되살아났습니다! 🌍🎼🎵
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#A9A9D3] border border-gray-600 text-black font-medium rounded-md hover:bg-gray-300 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session24" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (24회)
                </Link>
                
                <Link href="/gathering/session26" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (26회) →
                </Link>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-600">
                2001. 06. 27. revised by 이성현 (shlee@mithra.snu.ac.kr) ^^~V
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
