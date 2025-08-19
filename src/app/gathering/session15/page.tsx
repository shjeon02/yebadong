import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제15회 YBD 스페인 록 특집 - 1997년 12월 20일 | Yebadong',
  description: '예바동 제15회 스페인 록 특집 감상회 (1997년 12월 20일, Eis Zeit)',
};

export default function Session15Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <hr className="w-3/4 mx-auto mb-4 border-gray-400" />
          <h1 className="text-4xl font-bold text-black mb-4">
            제15회 예바동 감상회
          </h1>
          <p className="text-lg text-gray-700">1997. 12. 20 Eis Zeit</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-8">
            
            {/* Part 1 Header */}
            <div className="mb-8 text-center p-6 bg-red-100 rounded-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-4">
                &lt;1부: Spanish Rock Special&gt;
              </h2>
              <p className="text-lg text-red-700">발표자: 김성우</p>
            </div>

            {/* Introduction */}
            <div className="mb-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">🇪🇸 스페인 음악 문화의 이해</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  유럽의 나라 중에 스페인만큼 이민족의 침략과 지배를 많이 겪었고, 문화적으로도 다양하게 혼합된 나라도 별로 없다. 
                  카를로스 푸엔테스(Carlos Fuentes)가 서술한 것처럼, 고대와 중세 시대를 거쳐오면서, 스페인에는 켈트-이베리아 문화, 
                  가톨릭/유대교 문화, 이슬람 문화가 융화된 독특한 문화를 형성하였고, 
                  현대에 와서는 오랜 프랑코 독재 정권 하에서도 자국의 문화를 꾸준히 영속시켰다.
                </p>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 mb-2">🗺️ 스페인의 지역별 문화</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• <strong>안달루시아(Andalusia):</strong> 남부 지방</li>
                    <li>• <strong>까스띠야(Castilla):</strong> 중·서부 지방</li>
                    <li>• <strong>까딸루냐(Cataluna):</strong> 동부 해안</li>
                    <li>• <strong>아스투리아스(Asturias):</strong> 북부</li>
                    <li>• <strong>바스크(Basque):</strong> 북부</li>
                    <li>• <strong>갈리시아(Galicia):</strong> 북부</li>
                  </ul>
                </div>
                
                <p>
                  이처럼 유럽, 아시아, 아프리카의 문명을 골고루 받아들인 스페인에서는 음악에도 이런 영향이 크게 반영되어 
                  다른 지역에서는 볼 수 없는 다채로운 특성을 갖추었다. 
                  스페인의 민속음악은 플라멩코(flamenco), 판당고(fandango), 호타(jota), 세기딜랴(seguidillas) 등의 수많은 형태로 전해 내려왔으며, 
                  심지어 라틴 아메리카의 음악에도 큰 영향을 끼쳤다.
                </p>
                
                <p>
                  1975년 프랑코 총통 사망 전후로 스페인에서 음악, 그 중에서도 특히 락이 융성하게 되는 밑거름이 되었다. 
                  뿐만 아니라, 그들 자신의 풍부한 지역적/문화적 자원을 음악에 자연스레 도입하게 되어, 다양한 장르의 음악을 발생시켰다. 
                  (이를 프로그레시브 락이라고 한정해서 부르기보다는 그저 스페인의 락이라고 부르고 싶다.)
                </p>
                
                <div className="bg-white p-4 rounded border border-yellow-200">
                  <h4 className="font-bold text-yellow-700 mb-2">🎸 대표적인 스페인 록 그룹들</h4>
                  <p className="text-xs">
                    Los Canarios, Fusioon, Triana, Granada, Neuronium, Gotic, Crack, Mezquita, Bloque, Itoiz 등 헤아릴 수 없이 많다. 
                    90년대 들어서도 Galadriel이나 Kozmic Muffin 등의 소수 그룹이 그 명맥을 유지해오고 있다.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening */}
            <div className="mb-8 p-6 bg-purple-100 rounded-lg">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                🎵 Opening: Fons vitae/Dementia praecox angelorum/Supra solfamireut (6'01)
              </h3>
              <h4 className="font-bold text-purple-600 mb-2">
                Atrium Musicae de Madrid (dir. Gregorio Paniagua)
              </h4>
              <p className="text-xs text-gray-600 mb-3">from "La Folia De La Spagna" (1983)</p>
              <p className="text-sm">
                Folia는 이베리아 반도의 3박자계의 무곡으로 포르투갈 기원의 시끄러운 춤이었다고 한다. 
                그 이후, 다성 음악 중심의 바로크 시대를 넘어오면서 장중한 취향으로 변해갔다. 
                (샤콘느나 사라방드도 비슷한 과정을 거쳤다) 이 앨범은 스페인의 고음악 제조 및 연주를 전문으로 하는 단체가 
                폴리아를 상당히 현대적으로 작·편곡하여 만든 앨범이다. 
                앨범 전체가 하나의 테마로 묶여서 주제 멜로디가 여러 형태로 편곡되어 간간히 나온다.
              </p>
            </div>

            {/* Andalusia Section */}
            <div className="mb-12 p-6 bg-orange-100 rounded-lg">
              <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">
                🏛️ 안달루시아의 음악
              </h2>
              
              <div className="mb-6 p-4 bg-white rounded border border-orange-200">
                <h3 className="font-bold text-orange-700 mb-2">🕌 역사적 배경</h3>
                <p className="text-sm">
                  서기 711년 스페인을 침략한 무어인이 그 후 1492년 완전히 물러날 때까지 무려 8세기에 걸쳐서 
                  이슬람과 기독교 간에 전쟁이 끊이지 않았는데, 이 때 이슬람의 전통을 대표적으로 이어받은 곳이 남부의 안달루시아 지방이다. 
                  이 지역은 위도가 우리나라와 비슷하며, 스페인의 여러 지역 중 가장 문화적으로 융성한데, 
                  플라멩코로 대표되는 이 지방의 민속 음악은 아랍의 영향을 많이 받아 꾸밈음이 많은 것이 특징이다.
                </p>
              </div>

              <div className="space-y-6">
                
                {/* Track 1 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">
                    1. Al Hakim... Otro Lugar (4:32) / La Guitarra (4:36)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">Medina Azahara from "..en Al-Hakim" (1989)</p>
                  <p className="text-sm mb-3">
                    꼬르도바 외곽에 세워졌던 일천여개의 기둥을 갖는 대궁전 유적의 이름을 딴 그룹 Medina Azahara의 후반기 앨범에서 한 곡을 골랐다. 
                    첫곡은 아랍의 영향이 짙게 배어 있는 곡이고, 다음 곡은 애들립으로 등장하는 플라멩코적인 빠른 기타 리프가 인상적인 곡이다.
                  </p>
                  <div className="bg-orange-50 p-3 rounded text-xs">
                    <p><strong>🏛️ 역사적 배경:</strong></p>
                    <p>
                      페데리코 가르시아 로르까(Federico Garcia Lorca)가 '멀고 고적한 곳'이라고 얘기했던 꼬르도바(Cordoba)는 
                      기독교도와의 전쟁에서 패퇴해 세비야(Sevilla)로 물러날 때까지 711년부터 1010년까지 정확하게 300년 동안 
                      스페인을 통치했던 최고의 이슬람 도시였다. 
                      대모스크(이슬람교 사원)인 Mezquita와 아브드 알 라흐만 3세가 부인을 기리기 위해 세운 대궁전인 
                      지금은 폐허만 남은 Medina Azahara가 대표적인 유적이다.
                    </p>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">2. Luz De Invierno (4'08)</h4>
                  <p className="text-xs text-gray-600 mb-2">Gualberto from "Vericuetos" (1976)</p>
                  <p className="text-sm">
                    Gualberto의 2번째 앨범에 수록된 곡으로, 시타르를 사용해서 동양적인 분위기를 풍기며, 
                    그 밖에 멜로트론, 바이올린의 심포닉한 사운드를 들을 수 있다.
                  </p>
                </div>

                {/* Track 3 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">3. Ebusus (Suite) (18'50)</h4>
                  <p className="text-xs text-gray-600 mb-2">Fusioon from "Minorisa" (1974)</p>
                  <p className="text-sm">
                    오랫동안 재발매되지 않았었던 Fusioon의 최고작으로 알려진 3집 Minorisa에 실린 대곡 Ebusus는 
                    동부 지중해의 이비자(Ibiza) 섬에 관한 곡이다. 
                    18여분 동안, 심포닉, 재즈, 포크적인 요소가 골고루 등장하는 다채로운 곡구성을 가지며, 
                    쉴새없이 리듬을 변화하는 곡이다. 섬을 나타내는 갖가지 단어 등을 읊조리는 목소리도 재미있다.
                  </p>
                </div>

                {/* Track 4 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">
                    4. Preludi i record (2'14) / Nova (Musica de la llum) (8'56)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">Iceberg from "Coses Nostres" (1976)</p>
                  <p className="text-sm mb-3">
                    스페인에는 기타의 종주국답게, Mezquita, Iman, Granada, Musica Urbana 등의 굉장히 높은 기교의 퓨전 락 그룹들이 존재하는 데, 
                    Iceberg도 그 중의 하나로 꼽힌다. 일부에서 Iceberg의 최고작으로 꼽히는 2번째 앨범 Coses Nostres의 
                    높은 긴장감을 유지하는 첫곡과 두번째 곡을 골랐다. 
                    재미있는 것은, 본 앨범의 마지막 곡의 제목이 곡의 11/8박자를 나타낸다는 것이다.
                  </p>
                  <div className="bg-orange-50 p-3 rounded text-xs">
                    <p><strong>🎵 Self-referential Songs:</strong></p>
                    <p>
                      몇년전에 r.m.p.에서 자기를 스스로 지칭하는 곡(self-referential song)으로 많은 곡들이 꼽혔는데, 
                      Camel의 데뷔 앨범에 실린 Six Ate과 Pablo의 Illusion on Seven-Eighths가 언뜻 생각납니다. 
                      Gentle Giant의 Knots, Cogs In Cogs, On Reflection도 조금 다른 개념이지만 역시 이에 해당하지 않습니까? 
                      최근에 본 영화 압바스 키아로스타미(Abbas Kiarostami) 감독의 올리브 나무 사이로나 
                      보르헤스(Jorge Luis Borges)의 단편들은 또 어떤지?
                    </p>
                  </div>
                </div>

                {/* Track 5 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">5. "Pasacalle" De Nit (3'05)</h4>
                  <p className="text-xs text-gray-600 mb-2">Musica Urbana from "Iberia" (1978)</p>
                  <p className="text-sm">
                    스페인에서 드물게 브라스를 많이 사용한 재즈락을 행했던 그룹이다. 
                    그들의 2번째 앨범인 Iberia에는 높은 기교의 플룻, 섹소폰, 클라리넷 및 여러 타악기들로 
                    - 일견 Maneige등과 유사한 - 다양한 사운드를 들을 수 있다. 
                    이 앨범에는 힌데미트, 스트라빈스키, 파야 등의 작곡가들의 음악에 영향을 받은 곡들이 실려 있는데, 
                    이 곡에는 스트라빈스키의 크레딧이 나와 있다. 
                    참고로, 이 그룹은 전 Gotic의 멤버 Joan Albert Amargos 중심으로 결성되었으며, 
                    베이시스트 Carlos Benavent는 그룹 해산 후 칙 코리아 밴드에 참여했다고 한다.
                  </p>
                </div>

                {/* Track 6 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">6. Senshi (9'16)</h4>
                  <p className="text-xs text-gray-600 mb-2">Galadriel from "Chasing The Dragonfly" (1991)</p>
                  <p className="text-sm">
                    80년대 후반 Musea 레이블로부터 발매된 스페인의 네오 프로그레시브 락 그룹인 Galadriel은 
                    올해까지 총 3장의 앨범을 발매하였다. 본 앨범은 이들의 두 번째 앨범으로, 
                    마릴리온 등의 네오 프로그레시브 사운드의 영향을 받았다.
                  </p>
                </div>

                {/* Track 7 */}
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-2">7. Andrew (3'52)</h4>
                  <p className="text-xs text-gray-600 mb-2">Kozmic Muffin from "Nautilus" (1994)</p>
                  <p className="text-sm">
                    스페인의 신세대 프로그레시브 락 밴드인 Kozmic Muffin의 1994년 앨범의 타이틀 곡. 
                    스페인적인 음색은 크게 드러나지 않지만, 탄탄한 연주력을 바탕으로 하드/사이키델릭 록 사운드를 보여주고 있다.
                  </p>
                </div>
              </div>
            </div>

            {/* Basque Section */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                🏔️ 바스크의 음악
              </h2>
              
              <div className="mb-6 p-4 bg-white rounded border border-green-200">
                <h3 className="font-bold text-green-700 mb-2">🗣️ 바스크 문화</h3>
                <p className="text-sm">
                  유럽에서 가장 오래된 종족으로 알려진 바스크는 고유의 언어를 가지고 있다. 
                  지역적으로는 스페인 북부의 프랑스와 칸타브리아 해협을 경계로 스페인/프랑스에 걸쳐 있으며, 
                  대표적인 도시는 빌바오(Bilbao)이다. 
                  이 지역의 민속 음악은 일반적으로 스페인 북부, 프랑스 남서부의 지역적 영향을 받아 단선율의 즉흥적인 가사가 특징이다.
                </p>
                <div className="mt-3 bg-green-50 p-3 rounded">
                  <h4 className="font-bold text-green-600 text-sm mb-2">🎼 바스크 민속음악 특징</h4>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>소르지코(Zorziko):</strong> 5박자계의 대표적인 민요</li>
                    <li>• <strong>툰툰(Ttun Ttun):</strong> 6현의 현악기</li>
                    <li>• <strong>치스투/치룰라(Chistu, Chirula):</strong> 3구멍의 플룻</li>
                    <li>• <strong>아코디온</strong> 등이 흔히 사용</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                
                {/* Track 8 */}
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">8. Katebegiak (17'15)</h4>
                  <p className="text-xs text-gray-600 mb-2">Enbor from "Katebegiak" (1980)</p>
                  <p className="text-sm">
                    Itoiz, Enbor, Errobi 등으로 대표되는 바스크의 프로그레시브 락은 다른 지방보다 더욱 정감있는 음악을 들려준다. 
                    본 앨범은 Enbor의 2집으로 대곡인 타이틀곡을 포함한 서정적인 곡들로 구성되어 있다.
                  </p>
                </div>

                {/* Track 9 */}
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-bold text-green-600 mb-2">
                    9. Gateau Basque (4'44) / In Illo Tempore (5'09)
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">Ganbara from "Ganbara-tik" (1989)</p>
                  <p className="text-sm">
                    흔히, 바스크의 포크 그룹으로 Oskorri가 대중적으로 널리 알려져 있으나, 
                    Haizea, Izugarri는 물론 여기서 소개되는 Ganbara 등 그 저변이 꽤 넓은 것 같다. 
                    Ganbara는 1980년대 초에 결성되어, 현재까지 총 5장의 앨범을 발표하였는데, 
                    해체 후 재결성하여 발매한 5집 이후로는 아직 소식이 없다. 
                    본 앨범은 이들의 3집 앨범으로, 전체적으로 쉬운 멜로디의 고른 곡들로 구성되어 있는데, 
                    귀엽고 아름다운 고음역의 M. Eugenia Etxeberria의 목소리와 다양한 민속악기들의 조화가 참신하게 들린다.
                  </p>
                </div>
              </div>
            </div>

            {/* Closing */}
            <div className="mb-12 p-6 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                🎵 Closing: Negra Sombra (4'44)
              </h3>
              <h4 className="font-bold text-blue-600 mb-2">Milladoiro</h4>
              <p className="text-xs text-gray-600 mb-3">from "Castellum Honesti" (1989)</p>
              <p className="text-sm">
                스페인 북동부의 갈리시아 지방은 북부의 켈트 문화의 영향을 받아, 켈틱 포크적인 요소가 짙다. 
                이 지방의 대표적인 포크 그룹 Milladoiro는 아코디온, 켈틱 하프(celtic harp), 피들(fiddle) 등을 주로 사용하며, 
                켈틱 포크 특유의 깊고 슬픈 서정성을 지닌 음악을 연주한다.
              </p>
              <p className="text-sm text-blue-600 mt-3 italic">
                끝까지 들어주셔서 감사합니다. 모두들 올해를 마감하며 즐거운 크리스마스와 연말 보내시길..
              </p>
            </div>

            {/* References */}
            <div className="mb-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">📚 참고자료</h3>
              <div className="text-xs space-y-1">
                <p>1. 까를로스 푸엔테스(Carlos Fuentes) 저, 라틴 아메리카의 역사, 까치글방, 1993</p>
                <p>2. 음악용어사전, 현대음악사, 1997 중판</p>
                <p>3. 브루노 네틀(Bruno Nettle) 저, 서양의 민속음악, 삼호출판사, 1989</p>
                <p>4. 김진석 역, Marquee's Encyclopedia of European-Rock, 1990 2판</p>
                <p>5. 아트락 메거진, 시완레코드</p>
                <p>6. Gibraltar's Encyclopedia of Progressive Rock Homepage<br/>
                   http://www.ari.net:80/prog/GEPR/gepr.html</p>
                <p>7. Milladoiro Homepage<br/>
                   http://www.clip.dia.fi.upm.es/~boris/galgroups/node2.html</p>
              </div>
            </div>

            {/* Part 2 */}
            <div className="mb-8 p-6 bg-purple-100 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
                🎵 2부: 추가 발표
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h3 className="font-bold text-purple-600 mb-2">김기태 발표</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Kestrel - August Carol (7분 14초)</li>
                    <li>• Los Jaivas - La Conquistada (7분 15초)</li>
                    <li>• MATIA BAZAR - CAVALLO BIANCO (4:55)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h3 className="font-bold text-purple-600 mb-2">박재현 발표</h3>
                  <ul className="text-sm space-y-1">
                    <li>• New England - "Shall I Run Away"</li>
                    <li>• Maneige - [Libre Service]의 마지막곡</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-orange-600">9</div>
                  <div className="text-orange-700">스페인 곡 (1부)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-blue-600">5</div>
                  <div className="text-blue-700">추가 곡 (2부)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🇪🇸</div>
                  <div className="text-green-700">지역별 분석</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">📚</div>
                  <div className="text-purple-700">학술적 접근</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제15회 스페인 록 특집 완전 복원! 
                이베리아 반도의 풍부한 문화와 음악적 다양성이 되살아났습니다! 🇪🇸🎭🎵
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session14" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (14회)
                </Link>
                
                <Link href="/gathering/session16" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (16회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
