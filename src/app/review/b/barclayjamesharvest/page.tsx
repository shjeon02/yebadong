"use client";
import Link from "next/link";

export default function BarclayJamesHarvestReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Barclay James Harvest</h2>
        
        <div className="space-y-8 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Bigguy</span>
              <span className="ml-2 text-sm text-gray-600">김진우, cojoe@sorak.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">And Other Short Stories & Baby James Harvest 리뷰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">앨범 소개</h4>
                    <p>
                      며칠전에 받은 BJH(Barclay James Harvest)의 <strong>And Other Short Stories</strong>와 <strong>Baby James Harvest</strong>.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">1. And Other Short Stories</h4>
                    <p>
                      앨범 jacket은 왠 시골 아저씨들처럼 생긴 사람들 (바로 BJH의 member들, John, Les, Mel, Wooly)이 있고 
                      역시 그들 앨범에서 볼 수 있는 나비도 있습니다.
                    </p>
                    
                    <div className="mt-3 bg-white p-2 rounded">
                      <h5 className="font-medium text-green-700 mb-1">수록곡</h5>
                      <div className="text-xs space-y-1">
                        <p>• Medicine Man (Les)</p>
                        <p>• Someone There You Know (Wooly)</p>
                        <p>• Harry's Song (Les)</p>
                        <p>• Ursula (The Summer Song) (Wooly)</p>
                        <p>• Little Lapwing (Les)</p>
                        <p>• Song With No Meaning (Les)</p>
                        <p>• Blue John Blues (John)</p>
                        <p>• The Poet (Wooly)</p>
                        <p>• After The Day (John)</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-yellow-50 p-2 rounded">
                      <h5 className="font-medium text-yellow-700 mb-1">앨범 특징</h5>
                      <p className="text-xs">
                        전체적으로 acoustic guitar의 sound가 많이 가미된 어떻게 들으면 country song 같은 느낌도 주는 곡이 많고, 
                        제가 좋아하는 Wooly의 곡들 보다 부드럽고 아지랑이 피어오르는 듯한 sound의 Les가 주도하는 앨범인듯한 느낌을 줍니다.
                      </p>
                    </div>
                    
                    <div className="mt-3 bg-blue-50 p-2 rounded">
                      <h5 className="font-medium text-blue-700 mb-1">주요 곡들</h5>
                      <div className="text-xs space-y-2">
                        <div>
                          <strong>Medicine Man:</strong> BJH의 곡들의 특징인 message가 담긴 노래... 
                          계속해서 귓가에 속삭이는 듯한 음악들이 맴돌며 나옵니다
                        </div>
                        <div>
                          <strong>Little Lapwing:</strong> 12줄 acoustic guitar 소리가 경쾌함을 주는 곡
                        </div>
                        <div>
                          <strong>Blue John's Blues:</strong> 서두에 피아노 소리에 숨어나오는 John의 vocal과 중간의 electric guitar로의 전환
                        </div>
                        <div>
                          <strong>The Poet:</strong> violin 소리를 타고 흐르는 고독을 맛볼 수 있음
                        </div>
                        <div>
                          <strong>After The Day:</strong> guitar solo와 탁음의 harmony vocal이 들어줄만 함
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">2. Baby James Harvest</h4>
                    <p>
                      이 앨범은 BJH가 그들의 소속인 Harvest Label에서 내놓은 것이 아니라, 
                      EMI의 도움을 받아서 그들이 기획해서 내놓은 앨범으로 그들의 못다한 소리가 담긴 앨범이라고 해도 과언이 아닐 것 같군요...
                    </p>
                    
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="bg-white p-2 rounded">
                        <strong>Crazy (Over You) (Les):</strong> 긴 서두부분에 이어 힘없이 흘러나오는 Les의 vocal... 
                        점차 고조되어가는 감정을 표현하듯 sound가 격렬해지고 정말 가사대로 당신앞에서는 미쳐버릴 것 같다는 목소리
                      </div>
                      
                      <div className="bg-white p-2 rounded">
                        <strong>Delph Town Morn (Les):</strong> Les와 John의 duet을 중심으로 각 성부별로 구성된 harmony들의 조화가 돋보이고 
                        trumpet 소리도 가미되어 있음
                      </div>
                      
                      <div className="bg-red-50 p-2 rounded border-l-2 border-red-300">
                        <strong>Summer Soldier (John):</strong> 전쟁의 비극을 표현한 명곡
                        <div className="mt-1 text-xs italic">
                          종소리 → 행진하는 군대의 발자국소리 → 함성 → 총성 → 지휘관의 명령 CARE!!! SCARE!!! 
                          그 뒤를 이어 나오는 guitar 소리를 따라 흘러나오는 John의 조용하면서도 엄숙한 vocal... 
                          "I feel sorry for the soldier..."
                        </div>
                        <div className="mt-1 text-xs">
                          "The Lord God said love the neighbour..." 전장에서 철모를 괴이고 rifle을 쏘는 summer soldier... 
                          황량한 목소리와 이어지는 종소리는 전쟁의 참상과 그 뒤에 남는 공허를 들려주고 있음
                        </div>
                      </div>
                      
                      <div className="bg-white p-2 rounded">
                        <strong>Thank You (Les):</strong> 사람이름들이 잔뜩 나오는 곡... John's wife, Les's girlfriend, EMI boss, 
                        왜 이렇게 감사할 사람이 많은지...
                      </div>
                      
                      <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                        <strong>Moonwater (Wooly):</strong> 이 앨범의 마지막을 장식하는 대곡
                        <div className="mt-1 text-xs">
                          전직 Royal Phil Harmony의 member들로 구성된 60 piece BJH orchestra의 반주로 조용히 그리고 서서히 
                          달이 떠오르는 듯이 시작됩니다. "Moon is making the patterns on the water..."
                        </div>
                        <div className="mt-1 text-xs italic">
                          천천히 흘러나오는 vocal의 엄숙함을 orchestra의 연주가 아름다운 전원을 연상시키는 평화로움으로 이끌고 
                          다시 강한 반전... 이런 반복으로 이어지며 이 앨범의 climax를 이루고 대미를 장식합니다
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">Neo-Zao</span>
              <span className="ml-2 text-sm text-gray-600">김남웅</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-orange-700 mb-2">Barclay James Harvest - Time Honoured Ghost</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">음악사회학적 관점에서의 BJH</h4>
                    <p>
                      일전에 친구와의 대화중에 BJH에 대해 언급할 기회가 있었다. 
                      그 친구는 음악사회학 쪽에 기울이는 관심이 큰 것이었다. 
                      결국 음악을 이야기하는 주제가 가사쪽에서는 문예보다는 반향을, 사운드 쪽에서는 은유나 암시보다는 직설 쪽을 선호한다고 하겠다.
                    </p>
                    <p className="mt-2">
                      그 친구의 음악의 사회적 측면에 대한 선호에 대해 내가 반론으로 제시한 밴드가 BJH였다. 
                      "Sex Pistols식으로 평론하는 것은 무리가 있다고 생각지 않니?"
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">BJH의 서정과 서경</h4>
                    <p>
                      BJH의 음악을 들으며 느껴지는 감정은 대부분의 사람들과 공유되는 바, 바로 '서정'이다. 
                      외국인으로서 느낄 수 있는 가사에 대한 멜로디의 선점유를 고려한다면 이러한 느낌은 더욱 절실히 다가온다. 
                      한가지 덧붙일 수 있다면, 음악에 깔려져 있는 '서경'을 들 수 있을 것이다.
                    </p>
                    <p className="mt-2">
                      초기 Harvest에서 발매한 4장의 앨범에서 보여주는 <strong>R. J. Godfrey</strong>와 <strong>Martyn Ford</strong>에 의한 
                      관현악 편곡은 '서경'의 느낌을 더욱 자연스럽게 하는 요소였다.
                    </p>
                    <p className="mt-2">
                      특히 Godfrey에 의한 관악파트는 많은 대중 음악에서 상투적으로 규정되어 있는 현악-여성적, 관악-남성적이라는 
                      범주를 넘어서 아련한 느낌으로 서정을 서경으로 구체화시켜간다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">Polydor 이적과 관현악 편곡의 아쉬움</h4>
                    <p>
                      BJH의 음악이 재정상의 이유로 Polydor로 이적하면서 관현악 편곡을 아끼게 된 것은 심히 유감스런 일이라 아니 할 수 없다.
                    </p>
                    <p className="mt-2">
                      그런데 이러한 BJH의 서정적인 멜로디에 강한 어조는 아니지만 애잔하게 호소하는 사회적 메시지가 상당량 숨어 있었다는 것은 흥미로운 일이다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">BJH가 '속삭인' 메시지 분류</h4>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-2 rounded">
                        <h5 className="font-medium text-red-700 mb-1">1. 반전, 평화 주제</h5>
                        <div className="text-xs space-y-1">
                          <p>• Song For Dying (OA)</p>
                          <p>• Summer Soldier (BJH)</p>
                          <p>• For No One (EIEE)</p>
                          <p>• Cold War (CitL)</p>
                        </div>
                        <div className="mt-2 text-xs italic bg-gray-50 p-2 rounded">
                          "Please lay down your pistols and your rifles<br/>
                          Please lay down your colours and your creeds<br/>
                          Please lay down your thoughts of being no-one<br/>
                          Concentrate on what you ought to be<br/>
                          .......<br/>
                          Everyone's a loner 'till he needs a helping hand<br/>
                          Everyone is everybody else<br/>
                          Everyone's a no-one 'till he wants to make a stand<br/>
                          God alone knows how we will survive"
                          <br/><br/>
                          - 누구를 위해서? (Everyone Is Everybody Else 중에서)
                        </div>
                      </div>
                      
                      <div className="bg-white p-2 rounded">
                        <h5 className="font-medium text-blue-700 mb-1">2. 인종, 어린이 문제</h5>
                        <div className="text-xs space-y-1">
                          <p>• Child Of The Universe (EIEE)</p>
                          <p>• Hymn For The Children (THG)</p>
                          <p>• Copii Romania (CitL)</p>
                        </div>
                        <div className="mt-2 text-xs italic bg-gray-50 p-2 rounded">
                          "I'm a child of South Africa<br/>
                          I'm a child of Vietnam<br/>
                          I'm a child of Northern Ireland<br/>
                          I'm a small boy with blood on his hands<br/>
                          Yes I'm a child of the universe<br/>
                          <br/>
                          ......<br/>
                          <br/>
                          Always there to join in someone else's fight<br/>
                          I didn't ask to be born and I don't ask to die<br/>
                          <br/>
                          ......<br/>
                          <br/>
                          I'm the child next door three thousand miles away"
                          <br/><br/>
                          - 우리들의 아이 (Everyone Is Everybody Else 중에서)
                        </div>
                      </div>
                      
                      <div className="bg-white p-2 rounded">
                        <h5 className="font-medium text-green-700 mb-1">3. 리얼리즘, 정치적 주제</h5>
                        <div className="text-xs space-y-1">
                          <p>• The Great 1974 Mining Disaster (EIEE) - '74년 영국 광부들의 Strike와 정부의 안이하고 보수적인 태도</p>
                          <p>• May Day (Octoberon)</p>
                          <p>• Berlin (XII) - 동/서 베를린 문제</p>
                          <p>• African (FtF) - 남아 공화국 인종, 정치문제</p>
                        </div>
                        <div className="mt-2 text-xs italic bg-gray-50 p-2 rounded">
                          "I stopped a man in the street today<br/>
                          And I asked him 'Sir, is it night or day?'<br/>
                          He just stared (smiled) in disbelief<br/>
                          I asked again but he walked away<br/>
                          He said 'Don't you know?'<br/>
                          I said 'Can't you say? Is there something inbetween?<br/>
                          <br/>
                          Is it something I've not seen?<br/>
                          Did it change so fast or was it just a dream?'<br/>
                          Time and time again I've tried to recreate the past few days<br/>
                          Evaluate the constants from the haze<br/>
                          But every time I think I'm right, they say I'm wrong<br/>
                          'This day is night and night is day -<br/>
                          It's there in black and white'<br/>
                          Night is light and dark is day<br/>
                          If I disagree they say I'm insane<br/>
                          And the treatment will begin<br/>
                          If I say that the day is light<br/>
                          They just point my eyes to the blinding night, saying<br/>
                          'We can't set you free if you always disagree,<br/>
                          So the State is going to pay your doctor's fee'"
                          <br/><br/>
                          - May Day (Octoberon중에서)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Barclay James Harvest 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 영국</li>
                  <li><strong>장르:</strong> Progressive Rock, Symphonic Rock</li>
                  <li><strong>멤버:</strong> John, Les, Mel, Wooly</li>
                  <li><strong>상징:</strong> 나비 (Butterfly)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>서정적인 멜로디</li>
                  <li>관현악 편곡 (초기 작품)</li>
                  <li>사회적 메시지</li>
                  <li>어쿠스틱 기타 중심</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>And Other Short Stories</strong> - Les 주도의 어쿠스틱 중심 앨범
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Baby James Harvest</strong> - EMI 기획 앨범, 60 piece orchestra 참여
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Everyone Is Everybody Else</strong> (EIEE) - 사회적 메시지 담은 명작
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Time Honoured Ghost</strong> (THG)
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Octoberon</strong> - 정치적 주제 포함
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">편곡자</h4>
              <div className="text-xs space-y-1">
                <p>• <strong>R. J. Godfrey:</strong> 관악파트 편곡, 아련한 서경 연출</p>
                <p>• <strong>Martyn Ford:</strong> 관현악 편곡</p>
                <p>• <strong>Royal Philharmonic:</strong> 60 piece BJH orchestra (Baby James Harvest)</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 곡</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 px-2 py-1 rounded">Medicine Man</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Summer Soldier</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Moonwater</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Child Of The Universe</span>
                <span className="bg-blue-100 px-2 py-1 rounded">The Poet</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">메시지 테마</h4>
              <div className="text-xs space-y-1">
                <p>• <strong>반전/평화:</strong> Summer Soldier, Song For Dying, For No One, Cold War</p>
                <p>• <strong>인종/어린이:</strong> Child Of The Universe, Hymn For The Children, Copii Romania</p>
                <p>• <strong>정치/사회:</strong> The Great 1974 Mining Disaster, May Day, Berlin, African</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">특이사항</h4>
              <div className="text-xs space-y-1">
                <p>• 초기 Harvest 레이블에서 관현악 편곡 적극 활용</p>
                <p>• Polydor 이적 후 관현악 편곡 감소</p>
                <p>• 서정적 멜로디에 사회적 메시지 은밀히 삽입</p>
                <p>• 전원적 평화로움과 정치적 메시지의 조화</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/b" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 