"use client";
import Link from "next/link";

export default function FusionOrchestraPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Fusion Orchestra</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 영국
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">활동 기간:</span> 1973년 (단명)
            </div>
            <div>
              <span className="font-semibold">구성:</span> 5인조 (트윈 기타)
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">유영재</span>
                <span className="text-sm text-blue-600">espiritu@hitel.net</span>
                <span className="text-sm text-gray-500">1993.11</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Skeleton In Amour (1973) - 단명한 영국 밴드의 유일한 걸작</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  1970년대에는 다 아시다시피 수많은 훌륭한 그룹들이 등장하여 소위 록의 르네상스 시대라는 황금기를 형성하였었다. 하지만 당시에는 실력이 있는데도 불구하고 채 꽃을 피우지 못한채 단명해 버린 그룹들도 상당히 많다.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                여기 소개하는 영국 그룹 <strong>Fusion Orchestra</strong>도 그러한 수많은 밴드들 중의 하나이다. 이들은 <strong>1973년에 본작인 "Skeleton In Amour"를 발표하고 사라지는데</strong> 이들에 대한 약력이나 해산 이후의 활동 상황은 알려져 있지 않다.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">멤버 구성 (5인조)</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• <strong>Jill Saward</strong> - Vocal, Flute, Key Boards, 12 String Guitar</li>
                  <li>• <strong>Colin Dawson</strong> - Lead Guitar</li>
                  <li>• <strong>Stan Land</strong> - 2nd Guitar, Harmonica, Synthesizer</li>
                  <li>• <strong>Dave Bell</strong> - Drums</li>
                  <li>• <strong>Dave Cowell</strong> - Bass Guitar, Harmonica, Harp</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  프로그레시브 밴드로서는 이색적으로 <strong>트윈 기타 체제</strong>를 형성하고 있으며, 여러 악기를 다양하게 다룰줄 아는 멤버들이 많다.
                </p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">핵심 멤버 - Jill Saward</h4>
                <p className="text-gray-700 leading-relaxed">
                  가장 돋보이는 인물은 밴드의 홍일점이자 가장 핵심 멤버인 <strong>Jill Saward</strong>이다. 이 여성은 앨범의 전편에 걸쳐 정열적인 보컬과 플룻, 건반등을 주무르며 종횡무진 대활약을 하고 있는데, 가창력은 말할것도 없거니와 악기 연주 솜씨 또한 상당한 경지에 있었다고 느껴진다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  그리고 여성으로서는 반드시 갖추어야할 미모까지 겸비하고 있으니 그야말로 Jill은 밴드의 핵이라 아니할 수 없다. (외지의 해설에 나온 것을 보면 굉장히 아름다운 미인이라고 표현이 되어있다.)
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">여성 보컬리스트에 대한 개인적 견해</h4>
                <p className="text-gray-700 leading-relaxed">
                  개인적으로 본인은 웬지 여성 보컬리스트가 끼어 있는 그룹에는 웬지 평소보다 마음이 끌린다. 여성에 의해 불려지는 락음악은 웬지 남성들에게서 나오는 그것과는 또다른 묘한 매력과 여성적인(?) 힘이 느껴진다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  그리고 당시 70년대의 여성 록커들은 지금의 80~90년대의 여성 록커들과는 엄청난 차이를 느낄수 있는 감성과 파워를 겸비하고 있다. 외모에서도 목소리에서도 남성인지 여성인지 조차 구별할 수 없는 최근의 대다수 여성 록커들과는 확실히 그 무엇인가가 달랐다.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                이들의 음악 스타일은 <strong>블루스와 재즈록, 하드록을 융합한 프로그레시브 록</strong>인데, 전체적으로 상당히 하드하고 사이키한 연주를 들려주고 있다.
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">앨범 재킷 이야기</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  재미있는 것은 이 앨범의 재킷 표지로 <strong>1500년대의 판화가인 Hans Holbein의 유명한 작품 'The Dance Of Death(죽음의 무도)'</strong>를 사용하고 있다는 점이다. 이 작품은 죽음의 사자가 여러 부류의 사람들을 무덤으로 끌고가는 시리즈 형식의 그림인데 여기에서 죽음의 사자는 바로 Skeleton!...해골! 이다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">수록곡 (총 9곡)</h4>
                <div className="grid grid-cols-1 gap-1 text-gray-700 text-sm">
                  <p>1. Fanfairy Suite For 1000 Trampits - Pt.1 (0'16")</p>
                  <p>2. Sonata In Z. (11'45")</p>
                  <p>3. Have I Left The Gas On? (8'38")</p>
                  <p>4. O.K. Boys, Nows's Our Big Chance (0'47")</p>
                  <p>5. Skeleton In Amour (5'12")</p>
                  <p>6. When My Mama's Not At Home (3'25")</p>
                  <p>7. Don't Be Silly Jilly (0'08")</p>
                  <p>8. Talk To Man In the Sky (11'54")</p>
                  <p>9. Fanfairy Suite For 1000 Trampits (0'14")</p>
                </div>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>특징:</strong> 8분 이상의 대곡이 3곡이나 되는 반면, 1분 이안되는 초미니 작품들도 4곡이나 되어 묘한 대조를 이루고 있다.
                </p>
              </div>

              <h4 className="text-lg font-semibold mb-3 text-gray-800">주요 트랙 리뷰</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-semibold text-gray-800">1-2. Fanfairy Suite For 1000 Trampits - Pt.1 / Sonata In Z. ⭐⭐⭐</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    1번곡은 2번곡인 'Sonata In Z'의 전주이자 앨범의 서두를 여는 팡파레와 같은 곡이다. 짧은 팡파레가 끝난후 여성의 묘한 느낌을 주는 외마디 목소리에 이어 긴박한 분위기의 기타와 드럼의 연주와 함께 <strong>이 앨범의 백미격인 'Sonata In Z'가 등장</strong>한다. 하드록적 성향이 짙은 이 곡은 전체적으로는 각멤버들의 연주력에 비중을 둔 곡인데, 그럼에도 불구하고 앞부분과 중반부에 걸쳐 등장하는 Jill의 보컬 솜씨는 일품이다.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h5 className="font-semibold text-gray-800">3. Have I Left The Gas On? ⭐⭐⭐</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    다이나믹한 트윈 기타 연주와 드럼의 연타로 문을 여는 <strong>앨범의 또 하나의 백미</strong>이다. 'Sonata In Z'와 함께 본앨범의 대표곡이라 할 수 있는 이곡은 마치 전투를 벌이는 것 같은 각 악기 파트의 연주가 돋보인다. 여기에서도 역시 Jill의 활약을 빼놓을 수 없는데 이 곡에서 그녀는 <strong>보컬 외에도 플룻과 신디사이저등 무려 4개의 악기를 다루고</strong> 있다.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h5 className="font-semibold text-gray-800">4-5. O.K. Boys, Now's Our Big Chance / Skeleton In Amour</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    4번곡은 5번곡인 타이틀곡의 전주 형식의 곡으로 Dave Cowell과 Stan Land의 경쾌한 하모니카 연주가 중심이 된 곡이다. 그리고 이어지는 곡은 앨범의 타이틀 곡인 'Skeleton In Amour'인데, <strong>Jill의 하몬드 오르간 연주로 시작</strong>된다. 들으면 들을수록 듣는 이의 마음을 끄는 곡이라고 해야할까... 암튼 본인이 지난달에 훈련소에서 훈련을 받는 기간동안 가장 귓가에 아른거렸던 노래가 바로 이 곡이었다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h5 className="font-semibold text-gray-800">6. When My Mama's Not At Home</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    이전곡들과는 달리 상당히 대중성을 띤 곡으로 Jeff Jarratt의 브라스 어레인지가 곡을 주도하고 있다. 멜로디도 앨범을 통틀어 가장 경쾌하고 신이 난다.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h5 className="font-semibold text-gray-800">7-8. Don't Be Silly Jilly / Talk To Man In The Sky</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    8초의 러닝타임...쉽사리 찾아보기 힘든 매우 짧은 곡인 7번곡은 Jill의 일렉트릭 피아노 연주곡인데 상당히 장난스럽고 유머러스하게 들린다. 그 뒤에 이어지는 본작품의 가장 대곡인 'Talk To Man In The Sky'는 전반부와 후반부에 등장하는 기타 연주가 듣는 이를 잡아 끄는 매력을 발산하고 있다.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">해산 후 근황</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  서두에서 기술했듯이 이들은 이 앨범 한장만을 발표한채 사라지게 되며 그 이후의 활동 상황은 나타나 있지 않다. 다만 밴드의 드러머인 <strong>Dave Bell</strong>이란 인물이 그룹 해산 후에 <strong>Decameron</strong>이라는 그룹의 "Mamoth Special", "Tomorrow Pantomime"의 두장의 앨범에 참가했다는 사실뿐이다.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">최종 평가</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  비록 단명한 그룹이 되고 말았지만 이들이 본 유일한 앨범을 통해 들려준 <strong>역동적인 사운드와 탄탄한 구성력과 연주력</strong> 등은 70년대의 찬란했던 브리티쉬 록의 황금기를 단적으로 보여주었던 좋은 본보기의 하나로 남을 것이다. 때문에 이 앨범 역시 브리티쉬 록의, 특히 하드한 사운드에 매력을 느끼시는 분들은 꼭 들어봐야할 가치가 있는 걸작이라고 말하고 싶다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 