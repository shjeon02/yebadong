import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2nd YBD Special Show of ProRock | Yebadong',
  description: '1994년 7월 23일 두 번째 예바동 감상회',
};

export default function Gig2Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">2nd YBD Special Show of ProRock</h1>
          <p className="text-base text-[#0000aa]">두 번째 예바동 프로그레시브 록 감상회</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1994년 7월 23일 토요일</p>
                  <p><strong>장소:</strong> 한국과학기술원 석향</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">참석자</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div>이훈구</div>
                <div>김성우</div>
                <div>김형석</div>
                <div>이강영</div>
                <div>최창규</div>
                <div>신인철</div>
                <div>조승모</div>
                <div>이윤직</div>
                <div>장민수</div>
                <div>엄태덕</div>
                <div>김재열</div>
                <div>이규철</div>
              </div>
            </div>

            {/* Poll Results */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">Poll 결과</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>1위:</strong> Magam / HHAI</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>1위:</strong> Outer Limits / The Scene of the Pale Blue</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>3위:</strong> Yes / Gates of Delirium</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>4위:</strong> Yes / Sound Chaser</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>4위:</strong> Yes / Close To The Edge</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Magma / Kobah</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Marillion / Grendel</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Osanna / Ora Caldo</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>6위:</strong> Osanna / Fiume</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>10위:</strong> Magma / "La" Dawotsin</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span><strong>10위:</strong> Osanna / Canzona</span>
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">프로그램</h2>
              
              {/* Yes Special Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0000aa] mb-3">I. British Super Art Rock Group Special No. YES</h3>
                <p className="text-sm mb-4"><strong>발표자:</strong> 김재열(pastel)</p>
                
                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>1) Sound Chaser</strong>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>2) And You And I</strong>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>3) Close to the Edge</strong>
                  </div>
                  <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                    <strong>4) Gates of Delirium</strong>
                  </div>
                </div>

                <div className="p-4 bg-indigo-50 rounded-lg mb-6">
                  <h4 className="font-bold mb-3 text-lg">Yes 그룹 소개</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    1969년 그룹명과 동일한 1집을 Atlantic Label로 발매하면서 등장, Beatles의 해체, 
                    Led Zeppelin, Pink Floyd의 탄생과 걸음을 같이하여 25년여 꾸준한 활동을 벌인 Yes는 
                    Progressive Rock의 큰 줄기가 되고 있다.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">멤버 변천사</h5>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>초기 라인업:</strong> Jon Anderson(voc), Chris Squire(bass), Tony Kaye(kbd), 
                      Bill Bruford(drum), Peter Banks(gtr)로 출발
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      <strong>전성기:</strong> Steve Howe(gtr)와 Rick Wakeman(kbd)을 영입하여 그룹의 전성기를 맞음
                    </p>
                    <p className="text-sm leading-relaxed">
                      <strong>후기:</strong> Alan White(drum), Patrick Moraz(kbd)를 거쳐 여러 훌륭한 앨범 제작. 
                      Going for the One을 기점으로 점차 변신, 1984년 Trevor Rabin(gtr)을 맞아 
                      대중성과 예술성 시비의 대상이 된 90125를 발매 (Owner of a Lonely Heart는 Billboard 1위 차지)
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">음악적 특징</h5>
                    <p className="text-sm leading-relaxed mb-2">
                      Yes의 멤버 중 가장 인기가 높고 그룹의 음악성에 가장 큰 기여를 한 사람들은 
                      일시 ABWH를 결성했던 Anderson, Bruford, Wakeman, Howe와 Chris Squire이다.
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      이들이 제작한 Fragile과 Close to the Edge는 Yes의 대표작이라 꼽을 수 있다. 
                      90125 이후의 후기 앨범들은 Trevor Rabin이 주도하고 있다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Yes의 음악은 Pink Floyd가 갖는 사이키델릭 또는 어두운 분위기보다는 주로 밝고, 
                      따뜻하고 강한, 때로는 공격적이기도 한 분위기가 주류를 이루고 있다. 
                      동시대에 활동한 영국 Progressive Group인 Genesis, King Crimson과도 매우 다른 
                      독특한 태도를 가지고 있다. Roger Dean의 자켓 art work 또한 Progressive Group으로서 
                      잘 어울리는 독특한 그림들로 이루어졌다.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold mb-2">Gates of Delirium / Sound Chaser</h5>
                    <p className="text-sm leading-relaxed mb-2">
                      그들의 여덟 번째 앨범 Relayer의 A면과 B면 첫곡. 자켓에는 두마리의 커다란 뱀과 
                      그 뱀을 잡으려 하는 사냥꾼들이 그려져 있으며, Gates of Delirium의 가사와 
                      음악 역시 투쟁을 묘사하고 있다.
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      특히 전투가 끝난 후의 정적에서 흘러나오는 Jon Anderson의 vocal이 아름답다. 
                      이 앨범에서만 유일하게 활동했던 Patrick Moraz의 keyboard 역시 개성이 강한 Sound를 들려준다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Sound Chaser에서는 Yes를 한번도 떠나지 않고 그룹의 기둥이 되었던 Chris Squire의 Bass가 돋보인다.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold mb-2">Close to the Edge / And You And I</h5>
                    <div className="text-sm space-y-2 mb-3">
                      <p><strong>Close to the Edge:</strong></p>
                      <p className="ml-4">a) The Solid Time of Change</p>
                      <p className="ml-4">b) Total Mass Retain</p>
                      <p className="ml-4">c) I Get Up I Get Down</p>
                      <p className="ml-4">d) Seasons of Man</p>
                      
                      <p><strong>And You And I:</strong></p>
                      <p className="ml-4">a) Cord of Life</p>
                      <p className="ml-4">b) Eclipse</p>
                      <p className="ml-4">c) The Preacher The Teacher</p>
                      <p className="ml-4">d) Apocalypse</p>
                    </div>
                    <p className="text-sm leading-relaxed mb-2">
                      Yes의 다섯번째 앨범 Close to the Edge의 동명 타이틀곡과 B면 첫곡. 
                      Close to the Edge는 대부분의 Yes 팬들로부터 그들의 최고의 앨범으로 찬사를 받고 있다.
                    </p>
                    <p className="text-sm leading-relaxed mb-2">
                      이 곡들은 교향곡의 악장과 같이 네개의 작은 부분들로 이루어져 있으며, 
                      실제로 그들은 Stravinsky등의 현대 음악에서 많은 영향을 받았다고 한다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      가사 역시 인생에 대해 노래하는, 약간은 무거운 가사이다. 
                      And You And I는 감미로운 Ballad풍의 노래이다.
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h5 className="font-semibold mb-2">추천 앨범</h5>
                    <p className="text-sm leading-relaxed">
                      여기서 소개되지 않은 앨범 중에서 가장 먼저 추천할 만한 것에는 
                      <strong>The Yes Album, Fragile, Tales from Topographic Oceans, Going for the One</strong> 등이 있으며 
                      90125 이전의 Yes에서 간추린 <strong>Classic Yes</strong>는 한장으로 Yes의 소품들을 많이 맛볼 수 있다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Zeuhl Special Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0000aa] mb-3">II. Zeuhl Special</h3>
                <p className="text-sm mb-4"><strong>발표자:</strong> 장민수</p>
                
                <div className="p-4 bg-purple-100 rounded-lg mb-6">
                  <h4 className="font-bold text-center text-lg mb-3">ZEUHL ISS DE HUNDIN!! KOBAIA ISS DE HUNDIN!! ZEBEHN ISS DE HUNDIN!</h4>
                  <p className="text-center text-sm italic">(ZEUHL IS HERE!! KOBAIA IS HERE!! ZEBEHN IS HERE!!)</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg mb-6">
                  <h5 className="font-semibold mb-2">단어풀이 (코바이아어 사전에서)</h5>
                  <p className="text-sm"><strong>Zeuhl</strong> n. 천상의 음악, 성스러운 음악. heavenly, divine, celestial music</p>
                </div>

                <div className="space-y-6">
              <div className="p-4 bg-indigo-50 rounded-lg">
                    <h5 className="font-semibold mb-3">ZEUHL - Premier Mouvement</h5>
                    <p className="text-sm leading-relaxed mb-3">
                      크리스티안 반데의 삶의 철학이 탄생시킨 음악. 바로 이것이 ZEUHL 이다.
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      몇몇 인터뷰 기사를 통해 판단해 보건대 반데는 음악의 기능적인 면을 상당히 
                      중요시하고 있는 듯하다. 그는 음악을 통해 자신의 사상을 표현하며 그의 음악으로 
                      인해 청자의 의식에 개혁이 일어나길 바란다고 말한다.
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      반데의 음악이 존 콜트레인의 음악적 사상과 진보성에 뿌리를 깊게 박고 있고 
                      칼 오르프의 힘있는 성악 오케스트라, 스트라빈스키의 원초적이고 강렬한 리듬, 
                      바그너의 서사성을 비롯하여 모타운 초기시절의 노래들, 집시 음악, 미니멀리즘, 
                      엘빈 존스 등등 많은 음악적 영양분들로 이루어져 있지만...
                    </p>
                    <p className="text-sm leading-relaxed">
                      그의 음악이 가지는 카리스마적인 향취, 즉 ZEUHL 의 향취는 바로 반데의 '사상'이 
                      가지는 향취에서 기인하는 듯 하다. 반데의 '사상'은 인간의 개조, 인간 의식의 진보, 
                      구원에 있다. 그의 3부작 서사시 Theusz Hamtaahk은 바로 이러한 구원의 과정을 
                      서사적으로 표현하고 있다. 바로 ZEUHL 의 기원이 여기에 있다.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold mb-3">ZEUHL - 2nd Mouvement (1973 ~ 1980)</h5>
                    <p className="text-sm leading-relaxed mb-3">
                      마그마에 의해 정의된 ZEUHL 은 반데의 주장과 그에 의해 탄생한 코바이아(Kobaia)와 
                      지구에 관한 픽션에 의해 그 음악적 개성이 크게 영향받았다.
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      그러나 이후 등장한 ZEUHL 의 1세대들은 (당연하게) 마그마의 음악적 개성만을 취하여 
                      '순수히 음악적인 ZEUHL' 을 개발한다. 이때부터 ZEUHL 은 반데의 사상적 문맥안에서 
                      벗어나 음악적 풍으로서 하나의 부장르(subgenre) 를 형성하게 된다.
                    </p>
                    
                    <div className="mb-3">
                      <h6 className="font-medium mb-2">ZEUHL 의 음악적 특징:</h6>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• 베이스와 드럼 사운드의 중시</li>
                        <li>• 코러스의 비중있는 활용</li>
                        <li>• 관악 섹션의 활용</li>
                        <li>• 미니멀리즘적인 기타 및 키보드 연주</li>
                        <li>• 비정상적인 언어의 사용</li>
                        <li>• 원초적인 에너지의 다량 함유</li>
                      </ul>
                    </div>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      이 시기의 ZEUHL 아티스트들은 마그마의 멤버들이 주를 이룬다. 
                      Yochk'o Seffer 와 Francois Faton Cahen 의 ZAO 를 필두로 
                      Bernard Paganotti 와 Patrick Gauthier, Jean Phillip Goude 등을 포함했던 WEIDORJE, 
                      Benoit Wiedmann, Didier Lockwood, Laurent Thibault, 그리고 NEFFESH MUSIC, 
                      PERCEPTION 등 세퍼(Seffer) 의 각종 프로젝트들이 큰 덩이를 형성하며 
                      프랑스의 락, 재즈계를 평정한다.
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      이 시기의 ZEUHL 은 마그마를 제외하고 Seffer 와 Paganotti 가 큰 음악적 줄기를 형성했다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      그 외에 체임버 락의 두 거목인 ART ZOYD 와 UNIVERS ZERO 도 마그마로부터 간접적인 
                      영향을 받은 것으로 알려져 있다. 실제로 Univers Zero 의 리더인 드러머 Daniel Denis 는 
                      70년대초에 마그마의 오프닝 밴드였던 ARKHAM 이란 그룹에서 활동했었다. 
                      그룹의 올간 연주자였던 Jean Luc Mandelier 를 마그마에 빼앗기고 난 후 Denis는 
                      마그마의 음악에 매료되어 이후 자신의 음악 형성에 상당한 영향을 받게 된다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Osanna Special Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0000aa] mb-3">III. Italian Art Rock Super Group Special No. OSANNA</h3>
                <p className="text-sm mb-4"><strong>발표자:</strong> 김성우(Libero), 이훈구(Budgie)</p>
                
                <div className="space-y-6">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h5 className="font-semibold mb-3">L'uomo/Mirror Train / L'uomo (1971)</h5>
                    <p className="text-sm leading-relaxed mb-3">
                      <strong>발표자:</strong> 김성우(Libero)
                    </p>
                    <p className="text-sm leading-relaxed mb-3">
                      1971년 이태리의 미항 나폴리에서 그룹 Osanna(갈채)는 데뷔앨범 L'uomo(인간, 남자)를 발표하였다.
                    </p>
                    
                    <div className="mb-3">
                      <h6 className="font-medium mb-2">멤버 구성 (5인조):</h6>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• <strong>Lino Vairetti</strong> - vocal, keyboards, acoustic guitar</li>
                        <li>• <strong>Danilo Rustici</strong> - lead guitar</li>
                        <li>• <strong>Lello Brandi</strong> - bass</li>
                        <li>• <strong>Massimo Guarino</strong> - drum</li>
                        <li>• <strong>Elio D'Anna</strong> - flute, saxphones</li>
                      </ul>
                    </div>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      이들은 Hard Rock을 기반으로 jazz, folk 등의 요소를 도입하여 다양한 음악을 선보이며, 
                      또한 연극적 분장, 행위를 통하여 독창성을 부여하였다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      멋진 변형 커버의 데뷔앨범에서 가장 주목할만한 것은 곳곳에 드러나는 실험성이다. 
                      더불어, 박력 넘치는 연주는 시종일관 듣는 이의 귀를 전혀 지루하지 않게 해 준다.
                    </p>
                    
                    <p className="text-sm leading-relaxed">
                      L'uomo/Mirror Train에서 Jethro Tull의 Ian Anderson을 연상시키는 플루트 연주, 
                      빠른 기타 애드립을 포함한 박력 넘치는 연주는 이후 Biglietto Per L'Inferno 등의 
                      후배 그룹들에 이들이 끼친 영향을 가히 짐작하고도 남을 것이다.
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold mb-3">Preludio/Canzona(there will be time) / Milano Calibro 9 (1972)</h5>
                    <p className="text-sm leading-relaxed mb-3">
                      New Trolls의 Concerto Grosso 나 RDM의 Contaminazione 등으로 알려진 
                      Luis Enriquez Bacalov와 함께 녹음한 영화 "Milano Calibro 9"의 사운드트랙이 
                      Osanna의 두번째 작품이다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      다소 Osanna적인 면은 적지만, 여전히 그들을 느낄 수 있는 훌륭한 앨범이라 생각된다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      시작을 알리는 첫번째 곡 Preludio에서의 점차 상승되는 오케스트레이션 연주는 
                      완전히 식지 않는 감동을 준다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      마지막 곡 Canzona(there will be time)는 아마도 국내 팬들에게 가장 많이 알려진 곡으로, 
                      정통 이태리 스타일의 허스키하면서도 처절한 보컬과 멜로디컬한 연주는 
                      누구나 쉽게 기억할 수 있는 명곡이다.
                    </p>
                    
                    <p className="text-sm leading-relaxed">
                      Bacalov가 작곡한 이유로 이 두 곡을 선곡하는 데 꽤 힘들었으나, 
                      국내 취향(예바동 여러분은 안 그러신 분이 많겠지만요..:) )이라 생각되어 골랐으니 널리 이해하시길...
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold mb-3">Ora Caldo / Palepoli (1973)</h5>
                    <p className="text-sm leading-relaxed mb-3">
                      <strong>발표자:</strong> 이훈구(Budgie)
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      데뷔작과 두번째 앨범에서의 성공을 바탕으로 Osanna는 1973년 그들의 최고작이자 
                      세번째 앨범인 Palepoli를 발표한다. 이 앨범으로 인해 Osanna는 그들만의 
                      고유한 음악성을 확립하게 된다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      즉, 데뷔작에서의 불완전한 Hard Rock과 Jazz의 융합이 확립되었고 
                      두번째 작품에서 빛을 보지 못했던 그들의 독창적인 창조력과 힘이 분출되었다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      소개하는 Ora Caldo는 이 앨범의 첫번째 수록곡으로서 매우 복잡하면서도 절제되고 
                      힘에 넘치는 Osanna 특유의 스타일을 마음껏 보여주는 대작이다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      이곡이야말로 어느 특정한 장르로 구분지을수 없는 Osanna만의 스타일을 
                      가장 잘 표현해준다고 할 수 있다.
                    </p>
                    
                    <p className="text-sm leading-relaxed">
                      특히 Elio D'Anna의 플루트 및 색스폰 연주와 Danilo Rustici의 기타연주에 
                      촛점을 맞추어 듣다보면 긴 연주시간도 전혀 지루하게 느껴지지 않는 명곡이다.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold mb-3">Fiume / Landscape Of Life (1974)</h5>
                    <p className="text-sm leading-relaxed mb-3">
                      세장의 성공적인 앨범을 발표한 Osanna는 1974년 갑자기 해산되었다. 
                      1974년 발표된 그들의 마지막 앨범은 이전의 앨범들에 비해 테마의 이어짐이 없는 
                      단편들의 모음집에 불과하고, 두곡외에 모든곡이 영어가사로 불려졌으나 
                      훌륭한 작품들을 담고 있다.
                    </p>
                    
                    <p className="text-sm leading-relaxed mb-3">
                      Fiume는 이 앨범의 마지막곡으로서 D. Rustici의 나른한 기타나 L. Varetti의 
                      보컬음색이 다소 Osanna적이지 않는 의외성을 보여주지만 중반부 이후의 연주는 
                      이들이 역시 Osanna임을 드러내 준다.
                    </p>
                    
                <p className="text-sm leading-relaxed">
                      특히 마지막 부분은 이 위대했던 그룹의 종말답게 매우 웅장하다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center space-x-4">
              <Link
                href="/gigs/1"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 1회 감상회
              </Link>
              <Link
                href="/misc/session1"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 1회 감상회
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
                href="/misc/session3"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                3회 감상회 →
              </Link>
              <Link
                href="/gigs/3"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                3회 감상회 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}