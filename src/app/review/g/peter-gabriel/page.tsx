"use client";
import Link from "next/link";

export default function PeterGabrielPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Peter Gabriel</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 영국
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록, 아트 록
            </div>
            <div>
              <span className="font-semibold">이전 소속:</span> Genesis
            </div>
            <div>
              <span className="font-semibold">리뷰 앨범:</span> 1집, OVO
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Fish Review */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">Fish (신인철, icshin@chiak.kaist.ac.kr)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Peter Gabriel - 1집 (1977)</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                오늘은 Peter Gabriel의 첫번째 solo album을 소개드릴까 해요. Peter Gabriel의 본작과 두번째 solo album은 
                Melting face(녹는 얼굴)과 Security에 비해 별로 국내에서 평판이 좋지 않습니다. 
                저의 생각으로는 그러한 사실이 예전에 예음에서 발매된 Nursery Cryme의 해설지인가 아님 Peter Gabriel의 
                세번째 아님 네번째 앨범의 해설지에 한때 우리나라 소수 prog fan의 절대적인 신임을 얻고 있었던 
                성시완씨가 쓴 글에 기인하지 않나 싶어요... Peter Gabriel의 첫째와 둘째 앨범은 너무나 졸작이라는... :-(
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                하지만 저는 절대 그렇게 생각하지 않아요. 본 앨범에는 Gabriel의 영원한 pop classic인 
                <strong>_Solsbury Hill_</strong>도 들어있구요. 감동적인 melody의 마지막곡 <strong>_Here comes the flood_</strong>도 좋습니다. 
                그리고 정말 특이한 곡이 한곡 있습니다. <strong>_Here comes the big one_</strong>이라는 
                마치 Gabriel meets B.B. King이라는 말로밖에 표현할 수 없는 Blues Rock number가 
                7분 26초 동안 듣는이를 묘한 기분으로 이끕니다.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">참여 뮤지션</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li><strong>Producer:</strong> Bob Ezrin (당시 Alice Cooper의 producer로 한참 잘나가던)</li>
                  <li><strong>Guitar:</strong> Robert Fripp (King Crimson)</li>
                  <li><strong>Bass:</strong> Tony Levin (progressive 계의 대머리의 제왕)</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                하지만 제게 내재된 Fripp 탐지기를 최고성능으로 가동시켜서 주의깊게 들어보아도 
                Fripp의 냄새가 거의 느껴지지 않습니다. Fripp은 어느 구석에 숨어있는지.. :-) 
                Fripp은 정말 어떤때는 단 한소절의 riff만으로 그라는 것을 나타낼 때도 있지만 
                또한 어떤 앨범에서는 그가 줄창 guitar를 치고 있지만 아무리 들어보아도 잘 모를 정도로 
                자기 자신의 개성을 숨기는 능력도 가진 것 같아요.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                전체적으로 Gabriel의 fan이라면, 그리고 그의 세번째와 네번째 solo album을 좋아하시는 분이라면 
                만족하실 만한 앨범입니다. 한가지 불만족스러운 것은 CD의 음질이 별로라는 사실인데... 
                조만간 digitally remaster되겠죠...
              </p>
            </div>
          </div>

          {/* June-sik Park Review */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">June-sik Park (준식, xanadu@postech.ac.kr)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Peter Gabriel - OVO (The Millennium Show)</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                이미 몇번 바동에서도 언급되었고... 얼마전 제가 실수로 제목만 있고 아무내용도 없는 
                멜을 보냈던적도 있던... 피터 가브리엘의 밀레니엄 프로젝트인 OVO - The Millennium Show 리뷰입니다. 
                사실 글을 쓰다가 잘 안되면 그냥 없던일로 하려던 것인데... 
                아무래도 제목만 있는 포스팅이라도 보내기는 했으니만큼...
              </p>

              <div className="bg-red-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-red-800 mb-2">긴 공백기</h4>
                <p className="text-sm text-red-700">
                  사실...이게 얼마만의 가브리엘의 솔로앨범인가요... 92년 US가 발표된지 만 8년... 
                  그리고 94년 Secret World Live가 나온지도 만 6년째 입니다...--;;
                  (그에 비하면 서태지가 4년만에 컴백한 건....--;;)
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                그간 제네시스의 box set 1이나 carpet crawler 99등으로... 
                그리고 Xplora나 Eve와 같은 멀티미디어 작품을 통해 우리에게 지속적인 활동모습을 보이기는 했지만... 
                그의 새로운 작품에 관해서는 앨범 타이틀이 'Up이 될것이다'라는 소문만 무성했지 
                구체적인 것은 별로 알려지지 않았죠... 
                (Tony Levin의 인터뷰를 보면 약 100곡 정도를 작업했다고 했던거 같은데....)
              </p>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">OVO 프로젝트</h4>
                <p className="text-sm text-blue-700 mb-2">
                  이번 OVO라는 작품 역시 그의 regular 앨범은 아닙니다. 
                  올 한해동안 영국 그리니치에 있는 밀레니엄 돔에서 계속 공연중인 쇼의 사운드 트랙이라고 하네요. 
                  책자에 나오는 사진이나 cd에 포함된 동영상으로 미루어 볼때 서커스와 현대무용 같은것이 결합된 
                  그럭저럭 볼만한 쇼인거 같습니다.
                </p>
                <p className="text-sm text-blue-700">
                  타이틀인 OvO는 음반의 전체 줄거리에 나오는 인류의 미래에 대한 희망을 상징하는 아기의 이름입니다. 
                  눈동자 두개와 v모양의 눈썹을 문자로 나타낸 것이지요.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                인류의 역사를 3세대에 걸친 한 가족의 이야기로 형상화 하고 여기에 금지된 사랑 이야기를 첨가시킨... 
                어떻게 보면 좀 유치한 동화같기도 하고... 어떻게 생각하면 참 거창하다는 생각도 드는 
                그런 줄거리입니다...(그다지 맘에 드는 내용은 아닙니다...)
              </p>

              <div className="bg-purple-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-purple-800 mb-2">두 가지 버전</h4>
                <div className="text-sm text-purple-700 space-y-2">
                  <p><strong>The Millennium Show 버전:</strong> 
                    The story of OVO라는 제목의 그림 동화책 비슷한 책자와 동일한 제목의 노래가 
                    Rasco's Rap version이라고 되어있는 single-cd가 함께 들어있습니다.
                  </p>
                  <p><strong>일반 CD 버전:</strong> 
                    위의 두가지가 빠진 대신 cd의 booklet도 더 'gabriel'다운 모습을 하고 있고... 
                    가사도 들어있으며... 그림 동화책의 내용이 enhanced cd형태로 cd안에 들어있어서 
                    컴퓨터에 넣으면 그 내용을 보실수가 있습니다.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-indigo-800 mb-2">트랙 리스트</h4>
                <ol className="text-sm text-indigo-700 space-y-1">
                  <li>1. The Story of Ovo (separated as single cd in MS version)</li>
                  <li>2. Low Light</li>
                  <li>3. The Time of the Turning</li>
                  <li>4. The Man Who Loved the Earth / The Hand That Sold Shadows</li>
                  <li>5. The Time of the Turning(Reprise) / The Weavers Reel</li>
                  <li>6. Father, Son</li>
                  <li>7. The Tower That Ate People</li>
                  <li>8. Revenge</li>
                  <li>9. White Ashes</li>
                  <li>10. Downside-Up</li>
                  <li>11. The Nest That Sailed The Sky</li>
                  <li>12. The Tree That Went Up (MS version only)</li>
                  <li>13. Make Tomorrow</li>
                </ol>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                상당히 많은 세션이 기용되었고 게스트 보컬도 많아서 실제로 gabriel의 목소리를 들을수 있는곡은 몇곡 안됩니다. 
                이렇게 많은 게스트보컬을 기용한 것은 그의 정식 솔로 앨범이 아닌것에도 이유가 있겠지만 
                각각의 등장인물의 목소리를 각각 다른 보컬리스트가 맡고 있기 때문이기도 한것 같습니다.
              </p>

              <div className="bg-green-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-green-800 mb-2">주요 트랙 해설</h4>
                <div className="text-sm text-green-700 space-y-3">
                  <p><strong>The Story of OVO:</strong> 
                    Rasco라는 친구의 랩이 나옵니다. 일반 cd버전에는 Neneh Cherry라는 친구도 함께 랩을 합니다. 
                    흔히 들을수 있는 흑인음악 풍의 랩은 아니고 후렴구라고 할수있는 가브리엘의 노래나 'ovo'를 
                    주술풍의 사운드로 처리했습니다.
                  </p>
                  <p><strong>Low Light:</strong> 
                    마치 태고의 신비한 느낌을 주는 인상적인 도입으로 시작되어 중반부의 Larla O Lionaird의 
                    목소리가 환상적으로 다가옵니다. millennium show 버전에서는 이곡이 첫곡으로 되어있지요.
                  </p>
                  <p><strong>Father & Son:</strong> 
                    이제 50대로 접어든 가브리엘이 아버지와 아들간의 사랑을 노래한 곡입니다. 
                    가브리엘의 인터뷰에 의하면 이곡은 그의 다음 정식 음반이 될 'Up'에 수록하기 위해 작업한 곡이라고 합니다.
                  </p>
                  <p><strong>The Tower That Ate People:</strong> 
                    아마도 이 앨범에서 가장 예전의 가브리엘과 닮아있는 곡이 이곡이 아닐까요? 
                    가브리엘의 effect걸린 목소리는 Ion이 건설한 산업사회의 모습을 묘사합니다. 
                    "역시 가브리엘이다!"라는 생각이 드는 곡이기도 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/g" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 