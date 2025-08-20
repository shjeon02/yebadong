import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '4th YBD Special Show of ProRock | Yebadong',
  description: '1995년 3월 25일 네 번째 예바동 감상회 - King Crimson and Related',
};

export default function Gig4Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">4th YBD Special Show of ProRock</h1>
          <p className="text-base text-[#0000aa]">King Crimson and Related</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1995년 3월 25일 토요일 오후 1시</p>
                  <p><strong>장소:</strong> Doors (신촌)</p>
                  <p><strong>주제:</strong> King Crimson and Related</p>
                </div>
                <div>
                  <p><strong>발표자:</strong> 'Lennon' Lee, Kang Young (이강영)</p>
                  <p><strong>특징:</strong> King Crimson 관련 아티스트 특집</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">참석자</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div>이훈구</div>
                <div>김성우</div>
                <div>김영호</div>
                <div>이강영</div>
                <div>심우현</div>
                <div>신인철</div>
                <div>김이영</div>
                <div>장민수</div>
                <div>김남웅</div>
                <div>전승훈</div>
                <div>서윤득</div>
                <div>김재열</div>
                <div>이상민</div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4 text-center">*** YeBaDong Special - King Crimson and Related ***</h2>
              
              {/* King Crimson Set by Lee, Kang Young */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-center mb-6 text-[#0000aa]">'Lennon' Lee, Kang Young</h3>
                
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded border-l-4 border-red-500">
                    <h4 className="font-bold mb-2">1. Prelude: Song of the Gulls (4:15)</h4>
                    <p className="text-sm text-gray-600">from the Album "Island"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                    <h4 className="font-bold mb-2">2. In the Wake of Poseidon (about 8:00)</h4>
                    <p className="text-sm text-gray-600">from the Album "In the Wake of Poseidon"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-green-500">
                    <h4 className="font-bold mb-2">3. Exiles (7:40)</h4>
                    <p className="text-sm text-gray-600">from the Album "Larks' tongues in aspic"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-yellow-500">
                    <h4 className="font-bold mb-2">4. Prince Rupert Awakes from Lizards suite (4:36)</h4>
                    <p className="text-sm text-gray-600">from the Album "Lizards"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                    <h4 className="font-bold mb-2">5. Lament</h4>
                    <p className="text-sm text-gray-600">from the Album "USA", originally from "Starless and Bible Black"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-indigo-500">
                    <h4 className="font-bold mb-2">6. .....(not decided yet)</h4>
                    <p className="text-sm text-gray-600">from Robert Fripp and Brian Eno's Album "No Pussyfooting"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-pink-500">
                    <h4 className="font-bold mb-2">7. The Song of the Sea Goat</h4>
                    <p className="text-sm text-gray-600">from Pete Sinfield's Album "Still"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-orange-500">
                    <h4 className="font-bold mb-2">8. Starless (12:18)</h4>
                    <p className="text-sm text-gray-600">from the Album "Red"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-teal-500">
                    <h4 className="font-bold mb-2">9. Elephant Talk (is it exact?)</h4>
                    <p className="text-sm text-gray-600">from the Album "Discipline"</p>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-gray-500">
                    <h4 className="font-bold mb-2">10. Epitaph</h4>
                    <p className="text-sm text-gray-600">from the Album "In the Court of Crimson King"</p>
                  </div>
                </div>
              </div>

              {/* Other Artists Sets */}
              <div className="space-y-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-[#0000aa]">'Shimrox' Shim, Woo Hyon</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>1. Suite Madame Blue</strong> - Styx</p>
                    <p><strong>2. The Duke of Beaufoot</strong> - Spyrogyra</p>
                    <p className="text-xs text-gray-600">shim@stein.kaist.ac.kr SPIROGYRA@HITEL</p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-[#0000aa]">'Neo Zao' Kim, Nam Woong</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>1. Psycho / Warning</strong> - BiKyoRan</p>
                    <p><strong>2. Masai Morning / Dreamweaver</strong> - Jade Warrior</p>
                    <p><strong>3. Classical Gas</strong> - Manheim Steamroller</p>
                    <p><strong>4. Renaissance</strong> - Kryzler & Kompany</p>
                    <p className="text-xs text-gray-600">zao@jean.iml.goldstar.ac.kr</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-[#0000aa]">'Pastel' Jazz Time</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>1. India</strong> - John Coltrane</p>
                    <p><strong>2. Bemsha Swing</strong> - Thelonious Monk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interview Special */}
            <div className="mb-8 p-6 bg-indigo-50 rounded-lg">
              <h2 className="text-2xl font-bold text-center text-[#0000aa] mb-6">Interview Special</h2>
              
              <div className="mb-6 p-4 bg-white rounded-lg">
                <p className="text-sm leading-relaxed mb-4">
                  그동안 YBD에서 internet을 통하여 interview를 하였던 팀들의 음악을 들어보고 싶다는 분들이 
                  계셔서 interview special을 갖게 되었습니다. 우리 YBD의 존재를 알고 있는 친구들의 음악을 
                  들어보는 것도 재미있는 일인것 같네요.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold mb-3">1. As the World / My Dear Wormwood - Echolyn</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    작년 Progfest '94에서 무척 좋은 평가를 받은 Philadelphia 출신 그룹입니다. 
                    요즘 우후죽순 격으로 생겨나는 미국의 Neo-Neo Prog 그룹과는 다른 아주 훌륭한 sound를 
                    들려주는 team인것 같아요.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    Yes의 Rhythm과 Gentle Giant의 harmony, 그리고 미국그룹 특유의 Kansas나 Boston을 
                    연상시키는 명쾌함이 잘 갖춰진, 그러나 과거의 그룹들의 모방에 그치지 않고 
                    자기들만의 독특한 색채를 가지고 있는 team입니다.
                  </p>
                  <p className="text-sm leading-relaxed">
                    그들의 가능성을 인정한 major label인 Sony/Epic에서 바로 조금전(3월7일) 새 앨범 
                    'As the World'가 발매 되었습니다. 그 앨범에 수록된 곡 중 'As the World'와 
                    'My Dear Wormwood'의 접속곡을 promotional CD single에 담긴 version으로 듣겠습니다.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold mb-3">2. Dans Le Parc Du Chateau Noir - IQ</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    영국의 중견 그룹 IQ의 EP 'Barbell'에 수록된 곡입니다. 제목은 'In the Park of the Black Castle'이라는 뜻이구요. 
                    후반부의 Mike Holmes의 guitar solo가 무척 감동적입니다.
                  </p>
                  <p className="text-sm leading-relaxed mb-3">
                    이 곡은 IQ의 특색을 잘 나타내는 대표곡이라고 할 수 없겠지만 제가 항상 누군가 IQ의 음악을 
                    소개해달라는 부탁을 받았을때 항상 제일 먼저 떠오르는 곡입니다.
                  </p>
                  <p className="text-sm leading-relaxed">
                    시간이 많다면 'The Last Human Gateway'를 들을텐데...:-)
                  </p>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-bold mb-3">3. Sista Somrar - Anglagard</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    작년 11월에 발표된 Anglagard의 어쩌면 마지막이 될지도 모르는 앨범 'Epilog'의 highlight입니다. 
                    'Epilog'앨범은 'Hybris'처럼 쉽게 와닿고 금방 친해질 수 있는 스타일의 앨범은 아니지만 
                    들으면 들을수록 매번 새로운 감동을 느끼게 되는 앨범입니다.
                  </p>
                  <p className="text-sm leading-relaxed">
                    본 앨범에서는 Anglagard 여섯명의 member외에 string quartet이 같이 참여하여 
                    아주 풍부한 sound를 들려줍니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Henry Cow/Slapp Happy Section */}
            <div className="mb-8 p-6 bg-pink-50 rounded-lg">
              <h2 className="text-2xl font-bold text-center text-[#0000aa] mb-6">Henry Cow/Slapp Happy</h2>
              
              <div className="text-center mb-6 p-4 bg-white rounded-lg">
                <h3 className="text-lg font-bold mb-2">War by Anthony Moore/Peter Blegvad</h3>
                <h3 className="text-lg font-bold mb-2">Living In The Heart Of Beast by Tim Hodgekinson</h3>
                <p className="text-sm text-gray-600 mb-2">(앨범 In the Praise of Learning 중에서. 총길이는 17분 49초입니다)</p>
                <p className="text-sm font-bold text-red-600">Their Motto: "Music is not a mirror. Music is Hammer !"</p>
              </div>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Henry Cow와 Slapp Happy가 결합하여 만든 두번째 앨범. In the Praise of Learning에서 두곡을 골랐다. 
                  Chris Cutler에 의하면 Henry Cow 초기 시절에 이들(H.C. 멤버들)은 자신들이 습득한 음악적 역량을 최대한 발휘하여 
                  좋은 음악을 만들고 연주하면 대중들이 '깨어날' 것이라고 생각했다고 한다.
                </p>
                
                <p>
                  깨어남이란 즉, 상업적인 목적으로 충만하여 대중과 시대의 음악이 되지 못하고 획일화된 상품으로 전락한 음악들로부터 떠나는 것을 말한다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-pink-500">
                  <p className="italic">
                    "여기에 창조와 실험, 숙고와 노력으로 충만한 음악이 있다. 우리 시대의 문화와 기술을 반영한 음악, 
                    바로 당신들의 내면의 소리인 음악이 여기에 있다. 우리의 뿌리로부터 태어난 음악, 
                    당신들을 소외시키지 않는 음악이 여기에 있다. 대중들이여, 설마 이런 음악을 듣고 외면할 수야 없겠지.."
                  </p>
                </div>
                
                <p>
                  음..이런 순수한 열정과 믿음으로 출발한 Henry Cow의 여정이 순탄했을리만무하다.
                </p>
                
                <p>
                  그들은 고민에 고민을 거듭하게 된다. 왜 대중들은 음악 산업의 속임수에 넘어가고만 있는가? 
                  왜 대중들은 획일화를, 소외를 보지 못하는가... Henry Cow의 멤버들은 음악 산업에 뛰어 들어 쟁탈전을 벌이기를 거부하는 대신, 
                  자신들이 추구하는 음악의 방식을 정당화하고, 자본주의 사회에서 음악 산업의 정체가 무엇인지 파악하며, 
                  또한 대중 음악을 통해 성취될 수 있는 것은 무엇이며 그 성취를 위해 무엇을 해야 할 것인지 등을 고민하여 
                  나름대로의 철학을 발전시키게 된다.
                </p>
                
                <p>
                  이러한 철학적 바탕 위에 이들의 정치적 입장이 정립되었으며 이는 곧바로 이들이 추구하는 음악에 영향을 미치게 되었다. 
                  후에 R.I.O. 및 Recommended Records를 추진하게 된 추진력도 이에서 출발한 것이다.
                </p>
                
                <p>
                  Henry Cow는 Slapp Happy와 결합을 통해 정치적인 면에서 좀 더 진보적인 국면을 맞이하게 되는데, 
                  이 시기에 나온 음반이 바로 In The Praise of Learning이다. Henry Cow와 Art Bears의 중간자적인 음악성을 표출하고 있는 본작은 
                  이전 Henry Cow의 앨범들보다 좀 더 단순하고 직선적인 어조로 메시지를 전달하고 있다. 
                  이는 Dagmar Krause의 단호한 어조의 보컬과 Slapp Happy의 음악적 영향력에 의한 것인 듯 하다.
                </p>
                
                <p>
                  War는 Slapp Happy의 두 핵심 멤버인 Anthony Moore와 Peter Blegvad가 작곡한 곡이며, 
                  Living In The Heart Of Beast는 Tim Hodgekinson이 작곡한 곡이다.
                </p>
              </div>
            </div>

            {/* Magma M.D.K. Section */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-bold text-center text-[#0000aa] mb-6">MAGMA - M.D.K. (Mekanik Destruktiw Kommandoh)</h2>
              
              <div className="text-center mb-6 p-4 bg-white rounded-lg">
                <p className="text-sm font-bold text-gray-600 mb-2">orkman 장민수 cats@super5.hyundai.co.kr</p>
                <p className="text-sm text-gray-600">1995년 3월 21일</p>
              </div>

              <div className="space-y-6">
                {/* 신화 섹션 */}
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="text-xl font-bold text-center text-[#0000aa] mb-4">신화</h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      M.D.K.는 Christian Vander가 구상한 Kobaja 신화의 첫번째 부분인 THEUSZ HAMTAAHK의 세번째 장이다. 
                      그 내용은 다음과 같다.
                    </p>
                    
                    <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                      <p className="italic">
                        "지구인들 중에 선지자 Nebehr Gudahtt가 있어 지구인들에게 정화(Purification)를 촉구하다. 
                        하지만 지구인들은 Nebehr Gudahht를 독재자로 몰아세우다. 일단의 사람들은 Nebehr Gudahtt에 대항하기 위해 
                        성난 노도처럼 행진하다. 하지만 이들은 어느새 우주의 영(The Spirit of Universe)에 의해 인도되어 깨달음을 얻게 되다. 
                        이들은 빛을 보고 깨달음을 얻고 나서는 Nebehr Gudahtt와 함께 영원히 계속되는 정화의 행진(Celestial March)을 하게 되다. 
                        천사의 축복속에서 이들은 죽음과 함께 우주와 한몸이 되다. 그리하여, The State of Grace is achieved."
                      </p>
                    </div>
                    
                    <p>
                      M.D.K.는 총 일곱개의 부분으로 이루어져 있는데, Nebehr Gudahtt의 예언 및 성난 군중들의 행진(Hortz Fur Dehn Stekehn West), 
                      빛을 보다(Ima Suri Dondai), 우주의 영이 군중을 깨우치고 군중은 Nebehr Gudahtt와 함께 행진하다
                      (Kobaja Iss de Hundin, Da Zeuhl Wortz Mekanik, Nebehr Gudahtt, Mekanik Kommandoh), 
                      우주의 영 Kreuhn Kormahn 과 일체가 되다(Kreuhn Kohrmahn Iss De Hundin)와 같이 내용이 전개된다.
                    </p>
                  </div>
                </div>

                {/* 음악 섹션 */}
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-center text-[#0000aa] mb-4">음악</h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                      <p className="font-semibold mb-2">Chris Cutler가 말하다:</p>
                      <p>
                        M.D.K.는 C.Vander가 이룩한 가장 방대하고 견실한 작품일 것이다. M.D.K.의 연주는 절대로 지나치거나 
                        테크닉에 치우치는 법이 없이 음악 자체에 종사한다. M.D.K.는 서서히 그리고 총체적인 진행을 보여주는데 
                        이는 러시아 영화에서 볼 수 있는 전개 방식과 유사하다.
                      </p>
                    </div>
                    
                    <p>
                      M.D.K.는 빈번한 곡 형태의 변화를 통해서보다는 '청자를 포함하는 광대한 스케일', 
                      '긴장감 및 곡 전개의 치밀한(우아한) 조절', '눈에 띄지 않는 세밀한 요소들의 적절한 활용'을 통해 
                      청자의 주의를 집중시킨다. 그리고, 이런 측면에서 기타 주자인 Claude Olmos는 돋보이는 활약을 하고 있다.
                    </p>
                    
                    <p>
                      앞에서도 언급한 바와 같이 M.D.K.는 Magma의 이전 작품들과는 달리 락과 현대음악의 결합이라는 측면에서 이해되는 작품이다. 
                      (Magma의 첫 두 앨범 및 Uniweria Zekt의 앨범은 Soft Machine을 연상케 하는 재즈락 스타일의 작품이었다.) 
                      따라서, M.D.K.는 이전 작품들과는 확연히 다른 음악 분위기를 보여준다.
                    </p>
                    
                    <div className="p-3 bg-white rounded">
                      <h4 className="font-semibold mb-2">M.D.K.의 특징적 요소:</h4>
                      <ul className="space-y-1 ml-4">
                        <li>• 리듬 형태의 혁신</li>
                        <li>• 강렬한 역동성</li>
                        <li>• 오페라풍의 지칠줄 모르는(Manic) 합창</li>
                        <li>• Stravinsky 음악의 영향이 드러나는 직선적이고 강한 리듬</li>
                        <li>• 규칙적인 리듬(2/4)과 다양한 리듬의 결합으로 만들어지는 폴리리듬(Poly-Rhythm)</li>
                      </ul>
                    </div>
                    
                    <p>
                      강박과 약박이 서로 교차하면서 만들어내는 얽히고 풀리는 미묘한 역동성은 참으로 놀랍기 그지 없다. 
                      Christian Vander 만큼 역동성을 천재적으로 응용하는 음악인이 또 있을까. 지루한 듯 한 반복 속에서 
                      긴장과 이완이 밀물과 썰물처럼 밀고 당기기를 계속하는 역동성의 완벽한 조절은 M.D.K.에서 여지없이 드러나고 있다. 
                      이를 통해 그의 작품이 갖는 서사성과 드라마틱함이 극적으로 전달된다.
                    </p>
                  </div>
                </div>

                {/* 연주 섹션 */}
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-bold text-center text-[#0000aa] mb-4">연주</h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      M.D.K.에 참가한 멤버들은 Magma를 거쳐간 많은 음악인들 중에서도 특히 뛰어났던 이들이다. 
                      기타주자 Claude Olmos와 올간 주자 Jean-Luc Mandelier, 그리고 베이스 주자 Janik Top이 M.D.K.에 참여하고 있다.
                    </p>
                    
                    <p>
                      M.D.K.의 내용은 위에서 언급한 바와 같이 우주의 영과 하나가 되기 위한 투쟁과 깨달음의 '행진(March)'이다. 
                      이 행진에 앞장서는 것은 Christian Vander의 드럼과 Christian Vander, Klaus Blasquiz, Stella Vander, 
                      Rene Garber등을 포함하는 합창이다.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-white rounded">
                        <h4 className="font-semibold mb-2">각 악기의 역할:</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>드럼:</strong> 행진의 발걸음을 표현</li>
                          <li><strong>합창:</strong> 행진하는 이들의 분노, 깨달음, 기원을 대변</li>
                          <li><strong>베이스:</strong> 행진하는 군중들의 내면을 반영</li>
                          <li><strong>기타:</strong> 행진에 섬세함을 심고 조화로운 힘을 북돋움</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-white rounded">
                        <h4 className="font-semibold mb-2">참고 사실들:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Klaus Blasquiz는 스페인 바스크 지방에 뿌리를 두고 있음</li>
                          <li>• M.D.K.는 Stella Vander가 최초로 참여한 Magma 앨범</li>
                          <li>• M.D.K.는 여러개의 버전이 존재함</li>
                          <li>• 1981년 Retrospektiw Vol.1 & 2에 가장 완성된 형태 수록</li>
                        </ul>
                      </div>
                    </div>
                    
                    <p>
                      Janik Top의 우뢰와 같은 베이스 소리는 행진하는 군중들의 내면을 반영한다. 그들의 내면은 때로는 외면에 강하게 동조하기도 하고 
                      또는 무거운 잠재 에너지를 화산 활동처럼 운동시키기도 한다. Claude Olmos의 기타소리는 몽환적인 행진에 섬세함을 심는다. 
                      선동하는 브라스와 무아지경이 된 Christian Vander의 목소리, 그리고 그 뒤를 군중들의 행렬 속에 지독히도 끈질기게 변주를 심는다.
                    </p>
                    
                    <p>
                      Claude Olmos의 기타는 마치 행진을 바라보는 제3자의 시선같기도 하고, 또는 행진에 조화로운 힘을 계속 북돋워 주는 
                      천사와도 같은 역할을 하고 있다.
                    </p>
                  </div>
                </div>

                {/* 배경 설명 */}
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="text-xl font-bold text-center text-[#0000aa] mb-4">작품 배경</h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <p>
                      Christian Vander는 John Coltrane의 A Love Supreme을 듣고 크게 감명받았다고 한다. 
                      그는 Coltrane의 음악이 갖는 종교적 깊이와 혁신성에 매료되어 자신만의 음악 세계를 구축하기 시작했다.
                    </p>
                    
                    <p>
                      M.D.K.는 이러한 영향과 Carl Orff의 웅장한 성악(Carmina Burana), Stravinsky의 원시적인 리듬을 결합한 것이었다. 
                      여기에 Christian Vander 특유의 반복적이고 역동적인 작곡 패턴이 어우러져서 그야말로 놀라운 밀도와 힘을 표출하는, 
                      그리고 몰입적이며 지극히 종교적인 작품 M.D.K.가 탄생하게 된다.
                    </p>
                    
                    <p>
                      Kobaja 어의 원시적이고 웅장한 음운 효과는 M.D.K.의 음악적 상승 곡선을 더욱 가파르게 만들어 주고 있다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center space-x-4">
              <Link
                href="/misc/session3"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 3회 감상회
              </Link>
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
              <Link
                href="/misc/session5"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                5회 감상회 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}