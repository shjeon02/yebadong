import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Essay 2: Progressive Rock Style - 프로그레시브 록 스타일 분류 | Yebadong',
  description: '정종화가 Gibraltar Encyclopedia of Progressive Rock에서 발췌하여 번역한 프로그레시브 록 스타일 분류',
};

export default function Essay2Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">Progressive Rock Style</h1>
            <p className="text-lg text-muted">영국의 제2세대 Progressive Rock</p>
          </div>

          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <div className="mb-6">
              <p className="text-sm text-muted mb-4">[정종화, notte@hitel.net, 94.3]</p>
              <p className="mb-4">
                Gibraltar Encyclopedia of Progressive Rock 에서 발췌한 Progressive Rock Style에 대한 이야기를 어설프게 번역해서 올립니다. 
                단지 참고로만 하세요.- 에고 힘들어...
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Ambient</h3>
                <p className="mb-4">
                  다수의 전자음악(비록 항상 그런것은 아니지만)형태의 극단주의자들이 이런 형태의 보통 매우 실험적인 형태의 음악을 시도한 밴드들이다. 
                  아마도 가장 기만적으로 간단한 형태의 프로그래시브 음악이다.
                </p>
                <p className="text-sm text-muted">Eno, Cluster, 초창기 Kraftwerk, Neu 등등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Art Rock</h3>
                <p className="mb-4">
                  다양한 각도로 창조된 다소간 상업적 성향의 가장 넓은 의미의 프로그래시브 뮤직, 반드시 진보적이진 않지만..거의 그러하다.
                </p>
                <p className="text-sm text-muted">Be Bop Deluxe, early Eno, Roxy Music 등..</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Canterbury</h3>
                <p className="mb-4">
                  이 계통에 속하는 밴드들의 진원지이다. 아마 가장 초창기의 프로그래시브 음악형태일것이다. 켄터베리밴드들은 복잡성과 극단적인 영국적인 사운드속들이 뒤섞여있었다. 
                  이형태의 음악들로 부터 나온 생각들은 매우 근원적인것이었다.
                </p>
                <p className="text-sm text-muted">Caravan, Soft Machine, Hatfield & The North 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Classical Progressive</h3>
                <p className="mb-4">
                  바하나 베토벤같은 클래식음악과 록구조의 음악을 융합시켰던 The Nice에 매우 많은 영향을 받았던 그리고, 매우 과장되고 화려했지만, 그당시에 대단히 성공적이었던.., 
                  대체적으로 트리오 구성으로되어있었다.
                </p>
                <p className="text-sm text-muted">Nice, ELP, Le Orme, Ekseption, Trace, The Trip 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Dutch Euro-Rock</h3>
                <p className="mb-4">
                  확실한 네델란드출신의 어떤 공통적인 사운드를 들려준... 하지만, 명백하게 설명하기는 힘들지만, 한가지 확실한 것은 아주 대단한 기타연주가 들어있는 음악이다.
                </p>
                <p className="text-sm text-muted">Focus, Finch, Supersister, Crucis (Arg.), Earth & Fire 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Early British Progressive</h3>
                <p className="mb-4">
                  대부분의 초창기 Vertigo의 'Swirl'레이블소속의 밴드들이다. 이 종류의 음악들은 대체적으로 60년대 후반의 사이키델릭록과 프로그래시브록의 도래등을 잇는 시기의 적절히 조화된 음악이다.
                </p>
                <p className="text-sm text-muted">May Blitz, Cressida, Spring 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Electronic Progressive</h3>
                <p className="mb-4">
                  자주 New Age 음악으로 잘못 규정지워지는 음악이다. 대부분의 이 음악들은 그 끔찍한 용어(New Age)가 둘러싸고 있는 범위를 훨씬 벗어나서 둘러싸고 있다. 
                  프로그래시브 음악 쟝르중에서도 대단히 탐험적인 음악을 하며, 거의 모든 전자악기를 사용하는 음악으로 규정되어지며, 널리 열려있는 분야이다. 
                  오직 끈기있는 자만이 들을만하다.
                </p>
                <p className="text-sm text-muted">70's Tangerine Dream, Klaus Schulze, Steve Roach, Early Popol Vuh, Heldon, Pinhas 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Euro Rock</h3>
                <p className="mb-4">
                  기본적으로 가장 직설적인 형태의 진보음악들, 특히 70년대 초반의 독일의 Bellaphone Label에 속한 밴드들의 음악으로 가장 잘 나타낼수 있다. 
                  자주 'Kraut Rock(뒷부분 참조)'과 합쳐지기도 한다.
                </p>
                <p className="text-sm text-muted">Nektar, Message, Nine Days Wonder 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Euro Rock Sub Genre No 2</h3>
                <p className="mb-4">
                  거의 Euro Rock과 유사하나, 뚜렷히 드러나는 매우 풍부한 성량을 가진 여성보컬리스트를 가지고, 독일적인 사운드를 들려준다.
                </p>
                <p className="text-sm text-muted">Earth & Fire, Sandrose, Analogy 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Experimental / Industrial</h3>
                <p className="mb-4">
                  매우 기묘한 형태의 언제들어도 깜짝깜짝 놀라게 하는 매우 공포스럽고, 끔찍한 느낌을 주는 기묘한 형태의 음악이다.
                </p>
                <p className="text-sm text-muted">Nurse With Wound, Current 93 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">French Theatrical / Symphonic</h3>
                <p className="mb-4">
                  Symphonic 쟝르에 가깝지만, 명확한 프랑스 스타일의 진보음악과 연극적 감각, 피터 가브리엘이 행했던 Custome / Rock 적인 스타일이 명확하게 드러나는 쟝르이다. 
                  이점만을 제외하고는 너무나 프랑스적이라서 제네시스의 음악과는 비교를 할수가 없다.
                </p>
                <p className="text-sm text-muted">Ange, Mona Lisa, Angipatch 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Fusion</h3>
                <p className="mb-4">
                  새로운 수준의 혁신으로까지 가져다놓았던 더욱 모험적이고 실험적인 재즈록. 아마 Space Fusion보다는 점더 재즈적이다. 
                  만약 재즈를 전혀 좋아하지 않는다면, 이 분야를 멀리하는게 좋다. 특별히 설명할수는 없지만 아마 그럴것이다.
                </p>
                <p className="text-sm text-muted">Mahavishnu Orchesta, Brand X, Bruford, Arti E Mestieri</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Gentle Giant Influenced</h3>
                <p className="mb-4">
                  젠틀 자이언트는 자신들만의 독특하고 복잡한 음악을 창조한 하나의 독보적인 음악세계를 가지고 있다. 그들에게 영향을 받은 그룹들이 이에 해당한다.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Italian Progressive</h3>
                <p className="mb-4">
                  이 쟝르의 음악들은 특별히 정의하기가 어렵기 때문에 어쩔수 없이 영국의 그룹들과 비교할 수밖에 없다. 
                  이 형태의 음악들은 다이나믹하고 우아한 엑센트를 가진 이탈리아인들에 의한 음악이다.
                </p>
                <p className="text-sm text-muted">P.F.M, Banco, Nuova Era, Semiramis, Il Balleto Di Bronzo 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Kraut Rock</h3>
                <p className="mb-4">
                  70년대 초반 독일의 Ohr, Brain, Komische, Pilz등의 레이블의 그룹들이(모두 그런것은 아니지만)다. 
                  물론 이런 정의는 별로 적합하지 않고, 앞으로 더 많은 탐구가 필요할 만큼 그들은 자신들만의 뛰어난 장점과 선구자적인 역할을 해낸 그룹이다.
                </p>
                <p className="text-sm text-muted">Amon Duul II, Annexus Quam, Xhol, Can, Faust 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Neo Classical Progressive</h3>
                <p className="mb-4">
                  Bartok, Prokofiev, Satie등 20세기의 클래식 음악들과 킹 크림슨 스타일의 록음악구조에 챔버록등이 혼합된 음악이다. 
                  매우 접하기 어려운 음악이며, 큰 조류에서 벗어난 매우 다른 음악이다.
                </p>
                <p className="text-sm text-muted">Univers Zero, Art Zoyd, ZNR 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Neo Progressive</h3>
                <p className="mb-4">
                  간단하고 상업적인 형태로 만들어진 심포닉록이다. 매우 화려하지만, 예전 밴드들의 치밀하고 복잡한 느낌은 부족하다.
                </p>
                <p className="text-sm text-muted">Marillion, IQ, Pendragon, Aragon 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Oldfield Progressive</h3>
                <p className="mb-4">
                  이런 형태의 음악이 매우 혁신적인것이기에 다른 무엇이라 표현할지를 모르겠다. 믿을수 없을 정도로 놀라운 음악가이자,작곡가인 마이크 올드필드는 
                  하드록과 Celtic음악등의 모든 형태의 음악들을 결합하여, 이 음악을 만들었으며, 대단한 대중성을 얻었다. 
                  보통 심포닉 프로그래시브 같은 느낌의 곡이지만, 어느정도 과장은 되었지만, 오히려 절묘한 느낌을 준다.
                </p>
                <p className="text-sm text-muted">Mike Oldfield, Jean Pascal Boffo 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Progressive Folk</h3>
                <p className="mb-4">
                  단순한 포크음악과 대단히 새로운 무엇인가를 합쳐진 다양한 형태의 음악이다. 많은 다양한 실험적인 작품들이 있다.
                </p>
                <p className="text-sm text-muted">Emtidi, Witthuser & Westrupp, Malicorne 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Progressive Fusion</h3>
                <p className="mb-4">
                  대체적으로 록을 기반으로한 퓨젼음악이다. 완전한 재즈록은 아니고, 다른 많은 프로그래시브 쟝르-유로 록, 심포닉 & Ethnic Music등-를 섞은 음악이다.
                </p>
                <p className="text-sm text-muted">Embryo, Area, Thirsty Moon 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Progressive Space Fusion</h3>
                <p className="mb-4">
                  매우 재즈적인 형태의 무거운 록의 극단적인 형태. 이 범주의 대표적인 그룹들은 대단히 경쾌한 신디 효과음과 믿을 수 없을 정도로 리드미칼하다.
                </p>
                <p className="text-sm text-muted">'You' Era Gong, Ozric Tentacle, Neo, Carpe Diem, Djam Karet 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Space Rock</h3>
                <p className="mb-4">
                  위의 쟝르와 비슷하지만, 재즈적인 성격을 배제한 훨씬 직설적인 형태의 스페이스록이다. 
                  Hawkwind가 이 쟝르의 모든것이자, 끝일 정도로 대표적인 그룹이며, 혁신적인 음악이다.
                </p>
                <p className="text-sm text-muted">Hawkwind, Amon Dull (The English Line Up)</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Symphonic Progressive</h3>
                <p className="mb-4">
                  화려한 키보드와 신디사이져, 멜로디컬한 보컬과 보통 클래식음악과 같은 형태의 구성으로-예를 들면 'Symphonic'- 구별되어지는 음악이다. 
                  Neo-Progressive 보다는 더욱 정교하며, 특히 리듬과 스케일에서 확연히 구분이 된다.
                </p>
                <p className="text-sm text-muted">Yes, Genesis (Early), Camel, Atoll, Teru's Symphonia 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Zappa Music</h3>
                <p className="mb-4">
                  만약 Zappa의 음악을 들어봤다면, 무엇을 말하고자 하는지 알것이다. 
                  특별히 프로그래시브라고 말하긴 그렇지만, 다른 어떤 프로그래시브 음악보다 이곳에 포함되는데 충분한 자격을 가지고 있다. 매우 개인적인 생각이지만.
                </p>
                <p className="text-sm text-muted">Mother of Invention, Zappa, Beefheart, Floh De Cologne 등</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">"Zeuhl" Music</h3>
                <p className="mb-4">
                  프랑스 밴드인 마그마에 크게 영향을 받은 재즈 퓨젼형태의 음악이다. 
                  마그마는 진짜 기묘한 밴드였으며, 드러머인 Christian Vander는 그 자신의 사상적 세계를 전달하기위해 그들 자신의 언어를 창조해 내었다. 
                  이 형태의 음악은 어둡고 침울하며, 콜트레인식의 행진곡풍의 스윙감으로 이 Fusion Opera를 부르짓곤 한다.
                </p>
                <p className="text-sm text-muted">Magma, Shub Niggurath, Honeyelk, Musique Noise 등</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/fun"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Fun으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
