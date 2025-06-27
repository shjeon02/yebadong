import Link from "next/link";

export default function AyreonPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Ayreon</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Kyuman Lee (이규만)</span>
              <span className="ml-2 text-sm text-gray-600">Heron@aminet.co.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">첫 번째 앨범 리뷰</h3>
                <p className="text-sm leading-relaxed">
                  안녕하세요. 이규만 입니다. 무엇보다도 새해 복많이 받으시길 바라구요. 요즘 따라 유달리 예바동이 썰렁한 것을 몸으로 느끼고 있습니다. 
                  텅텅비는 편지함그리고 썰렁함. 연말이라서 다들 바쁘시죠.
                </p>
                
                <div className="mt-3 space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">컨셉과 구성</h4>
                    <p className="text-sm">
                      이 작품은 크게 5가지 부분으로 이루어져 있습니다. 이 5가지 파트가 모여서 Concept를 이루고 있는데요. 
                      그 내용은 신화적인 내용과 SF를 복합적으로 다루고 있습니다. 국내에서도 꽤 유명한 Phenomina의 Concept과도 상당히 비슷한데요. 
                      인류의 파멸을 예견하는 음유시인(아더왕나오는 시절의..)의 애기인데요. 꽤 황당한 면이 많네요.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">음악적 특징</h4>
                    <p className="text-sm">
                      사운드는 좀 강력하다고나 할까요. 조용한 음악을 선호하시는분은 구입을 고려하셔야 할 정도이죠. 
                      아무래도 해비메틀하던 뮤지션도 좀 참여를 한 것같고요. Golden Earring이란 그룹의 보컬등이 참여하였다고 하네요. 
                      퀸과 Phenomina와 Kayak의 Sound가 혼합한 듯한 아주복합적이에요.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm mt-3 text-gray-600">
                  글쎄요. 제가 소개했지만 그렇게 권할만하지는 않네요. 참신함과 Originality의 부족함이 바로 그 주된 원인이죠. 
                  여기 저기서 가지고 온듯한 진부함이 들어나는 것은 이 앨범이 가지고 있는 한계지요.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">LongDal</span>
              <span className="ml-2 text-sm text-gray-600">shjeon@rtcl.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">Ayreon - Into the Electric Castle</h3>
                <p className="text-sm leading-relaxed">
                  네덜랜드인 Arjen A. Lucassen(G)의 프로젝트 밴드인 Ayreon이 98년도에 새앨범을 냈는데, 최근에 서울 음반에서 라이센스로 내놓았습니다. 
                  비닐포장에 붙은 스티커에 프로그레시브-스페이스 오페라 라고 써있는 것 같은데요.
                </p>
                
                <div className="mt-3 space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">참여 뮤지션들</h4>
                    <div className="text-sm space-y-2">
                      <div>
                        <strong>Instrumentalists:</strong> Arjen Anthony Lucassen, Ed Warby (ex-Gorefest), Clive Nolan (ex-Pendragon), 
                        Ton Scherpenzeel (ex-Kayak, Camel), Thijs van Leer (ex-Focus), Roland Bakker (ex-Vengeance) 등
                      </div>
                      <div>
                        <strong>Vocals:</strong> Fish (ex-Marillion), Anneke Van GiersBergen, Sharon Del Adel, 
                        Damian Winson (ex-Landmarq, Threshold), Edward Reekers (ex-Kayak) 등
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">캐릭터 설정</h4>
                    <p className="text-sm">
                      각 보컬이 연극에서 배우처럼 역할을 맡아서 그 분위기를 낼려고 노력하고 있는데, 
                      역할이 Egytian, Highlander, Indian, Roman, Hippie, Knight, Futureman, Babarian 입니다.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm mt-3 text-gray-600">
                  저는 Fish의 보컬과 Thijs Van Leer의 flute 연주를 매우 기대하고 들었는데, 약간 섭섭합니다. 너무 짧아서요. 
                  Fish는 highlander라는 역할을 맡고 있는데요. 초반에 highlander가 죽는 바람에 많이 나오지 않습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">안병욱</span>
              <span className="ml-2 text-sm text-gray-600">brave@hdec.co.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Universal Migrator Part 1 & 2 (2000)</h3>
                <p className="text-sm leading-relaxed">
                  Ayreon의 앨범을 접하게 되면 음악보단 '그 많은 스타들을 어떻게 모았을까?'라는 궁금점이 먼저 앞서게 되지만, 이번 2장짜리 앨범은 썩 훌륭합니다.
                </p>
                
                <div className="mt-3 space-y-2">
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">두 파트의 특징</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>Part 1 (The Dream Sequencer):</strong> 데이빗 길모어 톤의 불루지한 기타와 고딕메탈적인 사운드가 절묘하게 맞아떨어져 어두운 분위기를 잘 나타냄</p>
                      <p><strong>Part 2 (Flight of Migrator):</strong> Ayreon이 예전 앨범에서 들려졌던 본연의 사운드</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm mt-3">
                  해외 리뷰에선 Part 2가 더 훌륭한 것으로 많이 소개가 되었는데 전 Part 1이 더 마음에 듭니다. 수작입니당
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">정철</span>
              <span className="ml-2 text-sm text-gray-600">zepelin@popsmail.com, 2001.6</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-orange-700 mb-2">Universal Migrator 종합 평가</h3>
                <p className="text-sm leading-relaxed">
                  중견 멜로딕/프로그레시브 메틀밴드인 에이런Ayreon의 새 앨범은 건즈 앤 로지스Guns'N Roses의 걸작 Use Your Illusion처럼 두 파트로 나뉘어 2장으로 발매되었다. 
                  그정도 걸작으로 평가받게 될지는 모르나 이 앨범들 역시 웅장한 사운드를 담고있는 수작임에는 분명하다.
                </p>
                
                <div className="mt-3 space-y-2">
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">특별 참여 뮤지션</h4>
                    <p className="text-sm">
                      이번에는 헬로윈Helloween의 앤디 데리스Andy Derris와 아이언 메이든Iron Maiden의 브루스 디킨슨Bruce Dickinson이 유명인사라 할만하다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">아르옌의 특징</h4>
                    <p className="text-sm">
                      아르옌의 감정과잉(과 왕자병)은 넥스트 시절의 신해철을 연상시키는데 사실 넥스트는 에이런에 비하면 그리 오버한 것도 아니라 할 수 있다. 
                      여기서는 시공을 초월하는 스페이스 판타지가 담긴 락 오페라를 들려주고있으니 말이다. 신해철보다 아르옌이 현명한 것은 객원보컬을 쓴다는 것이다!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Ayreon 프로젝트 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>주도자:</strong> Arjen Anthony Lucassen (네덜란드)</li>
                  <li><strong>장르:</strong> 프로그레시브 메탈/록</li>
                  <li><strong>특징:</strong> 컨셉 앨범, 록 오페라</li>
                  <li><strong>시작:</strong> 1990년대 중반</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>SF/판타지 스토리텔링</li>
                  <li>다양한 게스트 뮤지션 참여</li>
                  <li>각 보컬이 캐릭터 역할 담당</li>
                  <li>웅장한 오케스트레이션</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>The Final Experiment</strong> (1995) - 데뷔작
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Into the Electric Castle</strong> (1998) - 2CD, 스페이스 오페라
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Universal Migrator Part 1: The Dream Sequencer</strong> (2000)
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Universal Migrator Part 2: Flight of The Migrator</strong> (2000)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 