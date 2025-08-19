import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제20회 YBD My Favorites 특집 - 1999년 7월 17일 | Yebadong',
  description: '예바동 제20회 My Favorites 특집 (1999년 7월 17일, 홍대앞 CARS)',
};

export default function Session20Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0000aa] mb-4">
            제20회 YeBaDong 감상회
          </h1>
          <h2 className="text-5xl font-bold text-[#0000aa] mb-6">
            My Favorites
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-yellow-100 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4 text-center">감상회 정보</h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1999년 7월 17일 토요일 오후 2시 30분 - 5시 30분</p>
                  <p><strong>장소:</strong> 홍대앞 "CARS" (T.326-0791)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>회비:</strong> 5천원 (2차+5천원)</p>
                  <p><strong>컨셉:</strong> 개인별 취향 소개</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">👥 참석자 명단</h3>
              <div className="text-sm leading-relaxed">
                <p>
                  최정욱, 이규희님과 그와 결혼하실분과 고등학교 동창되시는 분,
                  이석진님, 이동훈님, 강성문님, 이민정님, 김민지님,
                  차아빛님, 서재형(Piano)님, 
                  이윤직님, 김기태님, 신인철님, 김남웅님과 여자친구분, 박경호님,
                  정철님, 도태영님, 박재현님, 전승훈
                </p>
              </div>
            </div>

            {/* Presenter 1: 이동훈 */}
            <div className="mb-12 p-6 bg-red-100 rounded-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
                🎬 이동훈 (meddle@nuri.net) - 이탈리아 사운드트랙 특집
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2">Goblin - Profondo Rosso</h4>
                  <p className="text-xs text-gray-600">from "Profondo Rosso"</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2">Goblin - Suspiria</h4>
                  <p className="text-xs text-gray-600">from "Suspiria"</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2">Goblin - Roller</h4>
                  <p className="text-xs text-gray-600">from "Roller"</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2">Goblin - Un Ragazzo D'argento</h4>
                  <p className="text-xs text-gray-600">from "Il Fantastico Viaggio..."</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2">Yoninbayashi - 일촉즉발</h4>
                  <p className="text-xs text-gray-600">from "일촉즉발"</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-red-200">
                  <h4 className="font-bold text-red-600 mb-2">Cosmos Factory - 신화</h4>
                  <p className="text-xs text-gray-600">from "트랜실베니아의 고성"</p>
                </div>
              </div>
            </div>

            {/* Presenter 2: 김기태 */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
                🎸 김기태 (GTR330@channeli.net) - 사이키델릭 & 로망스 팝
              </h2>
              
              <div className="space-y-6">
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">1. TINKERBELL'S FAIRYDUST - TWENTY TEN (2'50'')</h4>
                  <p className="text-sm">
                    60년대 후반의 싸이키델릭 팝포크 음악, 
                    67년부터 69년까지 DECCA에서 석장의 싱글을 발매한후 
                    69년 50장 미만의 초소량으로 앨범을 한장 낸후 사라진 그룹이다. 
                    CD로 나왔다는걸 얼핏들었는데 자세한건 모르겠습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">2. SIMON FINN - JERUSALEM (6'44")</h4>
                  <p className="text-sm">
                    대마초 피우며 녹음한게 분명하다. 악을 쓰며 예루살렘을 외치지만 
                    자세히 들어보면 실실 비웃는다는걸 알수 있다, 신성모독의 막대먹은 싸이키 포크.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">3. LA BOTTEGA DELL'ARTE - BELLA SARAI (4'10")</h4>
                  <p className="text-sm">
                    이렇게 아름다운 음악을 만들어준 화방(미술도구상점)아저씨들에게 정말로 감사드립니다. 
                    이태리엔 많은 로망스팝 그룹이 있었지만 이들과 대적할만한 감성을 지닌 그룹이 있었을까??? 
                    1978년에 나온, 내가 찾던 그리고 앞으로도 쉬지 않고 찾아야 하는, 완벽한 로망스팝. 
                    음반상태가 않좋아서 송구할 따름.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">4. GYPSY - UNIVERSE (4분 정도)</h4>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">5. IL CORO DEGLI ANGELI - I GIARDINI DI MARZO (5분20초)</h4>
                </div>
              </div>
            </div>

            {/* Presenter 3: 이규희 */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                🎹 이규희 (abrdxds@provin.kyonggi.kr) - 프로그레시브 명곡 선집
              </h2>
              
              <div className="space-y-6">
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">1. Enid - Ultraviolet Cat</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Tripping the light fantastic"</p>
                  <p className="text-sm">
                    Enid의 Tripping the light fantastic은 94년에 발매된 최근 앨범에 속합니다. 
                    건반주자이며 Leader인 Robert Godfrey와 함께 초창기 Guitarist인 Steve Stewart가 
                    88년 탈퇴한 후에 새롭고 젊은 멤버들과 함께 만든 앨범으로 알고 있습니다. 
                    새로운 Guitarist, Nick May는 Steve Stewart의 공백을 잘 메꿔주고 있습니다. 
                    전통적 Enid Sound는 그대로 살아 있으며 가끔씩 나오는 Dance Music 풍의 음률도 그다지 부조화롭지는 않습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">2. Deus Ex Machina - Amori Difficili</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Equiblismo Da Insofforenza"</p>
                  <p className="text-sm">
                    DEM의 음악은 Area를 좋아하는 사람에겐 큰 선물이 아닐 수 없습니다. 
                    Acrobatic이란 단어가 가장 어울리는 목소리라 생각한 Demetrio Stratos는 분명히 79년에 죽었는데 
                    어쩌면 이렇게 똑같은 목소리를 낼 수 있을까 들을 수록 신기합니다. 
                    vocal과 작곡을 담당하는 Alberto Piras도 Area의 영향을 부인하지는 않습니다. 
                    DEM의 음악은 의외로 쉽게 귀에 들어옵니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">3. Happy the man - Morning Sun</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Live"</p>
                  <p className="text-sm">
                    Happy the man은 미국 최고의 Prog Band라는 사평을 믿고 구했습니다. 
                    Leader인 Kit Watkins에 대해서는 Camel의 명작 I can see your house from here에 
                    건반주자로 참여한 것을 알고 있습니다. 
                    1978에 녹음된 것이니 꽤 시일이 흘렀는데도 음악이 진부하지 않습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">4. Astor Piazzolla - Years of Solitude</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Summit"</p>
                  <p className="text-sm">
                    이번에는 햇빛 많은 남미 Argentina의 명가 Piazzolla의 음악입니다. 
                    그 독특함의 조성, 화음, 박자의 긴밀함, 그리고 통속적인 메로물류의 음악인 Tango를 감상용으로 바꾼데 그 의미가 큽니다. 
                    "54년 Nueva Tango"라는 이름으로 새로운 Tango를 시작했을 때도 Argentina사람들은 그의 음악을 너무 Radical하다고 했다고 하는군요. 
                    Astor Piazzolla의 Tango에는 Bossa Nova와는 다른 또 다른 요소가 있습니다. 그것은 "열정"입니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">5. Ash Ra Tempel - Der Lauf Der Giraffen</h4>
                  <p className="text-xs text-gray-600 mb-2">from "The Private Tape"</p>
                  <p className="text-sm">
                    싸이킥한 기타의 소유자 갓싱의 연주가 들어 있는 앨범입니다. 
                    마누엘 갓싱이 클라우스 슐츠와 Ash Ra Tempel의 데뷔앨범을 내놓았을 때 19살이었다는군요. 
                    the Private Tape은 갓싱이 studio나 live 때 녹음했던 재료들을 모은 2장짜리 편집 앨범입니다. 
                    듣는 앨범이기보다는 타는 앨범이라 할 수 있겠습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-bold text-purple-600 mb-2">6. Zauber - Walser Soap</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Aliens"</p>
                  <p className="text-sm">
                    90년대 Italian Neo Progressive Group인 Zauber의 93년도 Torino에서 녹음된 매혹적인 앨범입니다. 
                    반복적이고 Melodic한 피아노 선율에 변조와 당김음을 사용하고 Classic적인 곡 전개가 특징입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Presenter 4: 이석진 */}
            <div className="mb-12 p-6 bg-orange-100 rounded-lg">
              <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
                🎵 이석진 (stjiny@mail.taegu.net) - 한국 록 & 개인 취향
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">1. 모하비</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 씽꼭점 (4:30?)</li>
                    <li>• 라군 - 달에게 바침 (5~6분)</li>
                    <li>• 저녁비행 (4분정도, 시간에 여유가 있다면 틀께요.)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">2. 김영찬 - Zero (3:00)</h4>
                </div>
              </div>
            </div>

            {/* Presenter 5: 이윤직 */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                🌎 이윤직 (cicco@chiak.kaist.ac.kr) - Mardel-X Special (남미 록)
              </h2>
              
              <div className="space-y-6">
                
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">1. Horizonte - Senales Sin Edad</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Senales Sin Edad"</p>
                  <p className="text-sm">
                    민속음악적 향취가 가득한 그룹으로 Huancara나 Los Jaivas와는 또 다른 느낌을 주는 folk/symphonic band입니다. 
                    보다 symphonic rock에 가까워진 두번째 앨범 중에서 타이틀 곡을 골랐습니다. 
                    좀 투박한 느낌이 들긴 하지만 들을 수록 매력적인 앨범이네요.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">2. Los Jaivas - Danza</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Cancion Del Sur"</p>
                  <p className="text-sm">
                    Chile를 대표하는 Los Jaivas의 대표작 중 하나인 77년도 앨범 중에서 
                    박진감 넘치는 Danza(Dance라는 뜻)를 듣습니다. 
                    Horizonte와 비교해보는 것도 재미있겠네요. 
                    이 앨범이 Mardel-X에서 발매된 건 아르헨티나에서 녹음되었기 때문일까요?
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">3. Contraluz - Sin Trabajo</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Americanos"</p>
                  <p className="text-sm">
                    누군가의 표현을 빌리면 'Jethro Tull의 프로그레시브 사운드와 남미의 folk rhythm을 섞은' 
                    매우 힘있는 음악을 들려주었던 Contraluz의 73년 유일작입니다. 
                    본 정규앨범 외에 두장의 싱글을 발표하였으며 두번째 앨범이 존재한다는 확인되지 않은 꿈 같은 소문도 있습니다.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-bold text-blue-600 mb-2">4. Tantor - Magico y Natural</h4>
                  <p className="text-xs text-gray-600 mb-2">from "Magico y Natural"</p>
                  <p className="text-sm">
                    Aquellarre 해산 후 Hector Starc, Rodolfo Garcia가 Machi Rufino (ex-Invisible)를 끌어들여 결성한 Jazz rock band. 
                    첫번째 앨범에는 Mia의 리더 Lito Vitale가 참여하기도 했습니다. 
                    오늘은 보다 퓨전화된 두번째 앨범 중에서 타이틀 곡을 듣습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Presenter 6: 박재현 */}
            <div className="mb-12 p-6 bg-gray-100 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                🎼 박재현 (jhpark@kpf.or.kr) - 아르헨티나 클래식
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-700 mb-2">Invisible - Los libros de la buena memoria</h4>
                  <p className="text-xs text-gray-600">from "El jardin de los presentes" (1976)</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-gray-300">
                  <h4 className="font-bold text-gray-700 mb-2">Lito Vitale & Luis Salinas - Malena</h4>
                  <p className="text-xs text-gray-600">from "Juntanto almas" (1993)</p>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-blue-600">25+</div>
                  <div className="text-blue-700">곡 (개인 취향)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">6</div>
                  <div className="text-green-700">발표자</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🌎</div>
                  <div className="text-purple-700">전 세계 음악</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-red-600">3</div>
                  <div className="text-red-700">시간 (2:30-5:30)</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제20회 My Favorites 특집 완전 복원! 
                6명의 발표자가 선사한 개인 취향의 음악적 여행이 되살아났습니다! 🎵🌍💎
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session17" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (17회)
                </Link>
                
                <Link href="/gathering/session21" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (21회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
