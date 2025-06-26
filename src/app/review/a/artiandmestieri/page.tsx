import Link from "next/link";

export default function ArtiAndMestieriPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Arti & Mestieri</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Arti & Mestieri - Tilt</h3>
            <p className="text-sm text-gray-600 mt-2">[광월인, 이동훈, Meddle@nuri.net]</p>
          </div>

          <div className="space-y-4">
            <p>다들 잘 아시는 앨범입니다. 저는 최근에 구입해서 들었는데요... 내용 없이 흐르는 테크니컬한 연주가 아닌 정말 알찬 음악이더군요. area 의 crac! 과 함께 이태리 재즈록을 대표하는 앨범인것은 분명합니다. 직접 들어보세요. :-)</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">마뀌님의 리뷰</h3>
            <p className="text-sm text-gray-600 mb-4">[마뀌]</p>
            
            <div className="space-y-4 text-sm">
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold mb-2">Arti E Mestieri / Tilt (1974, W.Pioneer)</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-medium">A면:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Gravita 9.81</li>
                      <li>Strips</li>
                      <li>Corrosione</li>
                      <li>Positivo/Negativo</li>
                      <li>In cammino</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">B면:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Farenheit</li>
                      <li>Articolazioni</li>
                      <li>Tilt (?)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>스스로를 '예술가와 직업인'이라고 여기는 아르띠 에 메스띠에리 의 데뷔앨범.</p>
              
              <p>그 내용은 그 이름대로 높은 예술성과 확실한 기술로 뒷받침된 최고수준의 것이다. 엄밀히 계산된 구성미를 기본으로 하고 재즈의 즉흥성도 그 요소로서 첨가해, 철두철미하게 긴장감넘치는 음악을 창조해내고 있다. <span className="font-bold text-red-600">(불멸의 명작)</span></p>
              
              <p>이들은 75년에 두번째 앨범[Giro di valzer per domani]를 발표했다. 거의 재즈록 색을 강화하여, 보다 투명해진 음색은 첫번째 앨범에 뒤지지 않은 걸작이었다. 그러나, 대표적인 멤버교체후 79년에 발표된 3번째[Quinto stato]에서는, 높은 기술만으로는 음악을 할수 없다는 것을 증명이라도하듯 시종일관하고 있다.</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">조영래님의 리뷰</h3>
            <p className="text-sm text-gray-600 mb-4">[조영래, cynical@hitel.net, 94.12]</p>
            
            <div className="space-y-4 text-sm">
              <div className="text-center">
                <p className="font-bold text-lg">Arti e Mestieri - Tilt ★★★★★</p>
              </div>
              
              <p className="font-medium text-blue-600">개인적으로 생각하는 이태리 재즈 록의 마스터피스!</p>
              
              <p>재즈록이라고는 하지만 심포닉 록 팬들에게 더 어필하리라고 생각된다. Furio Chirico를 중심으로한 6인의 화려한 연주 실력과 다채로운 곡구성, 그리고 드라마틱한 전개는 이태리 록이 배출해낸 최고의 산물중의 하나이다.</p>
              
              <p>보컬 파트가 다소 딸린다는 지적도 받고 있긴 하지만, 나로서는 전혀 그런 느낌을 받지 못한다.</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">유영재님의 상세 리뷰</h3>
            <p className="text-sm text-gray-600 mb-4">[유영재, espiritu@hitel.net, 93.2]</p>
            
            <div className="space-y-4 text-sm">
              <p>이탈리안록하면 흔히 떠올리게 되는 것이 대개 웅장한 심포니록이지만, 여기 소개할 앨범은 흔치 않게 재즈적인 요소가 짙은 프로그레시브록으로서 명반으로 꼽히는 작품이다.</p>
              
              <p>바로 1974년 Cramps 레이블에서 발매된 Arti E Mestieri의 데뷔 앨범 [Tilt]이다.</p>

              <div className="bg-white p-3 rounded border-l-4 border-green-400">
                <h4 className="font-semibold mb-2">Cramps 레이블</h4>
                <p>Cramps 레이블은 당시 고도의 테크닉과 뛰어난 즉흥 연주력으로 유명했던, 이탈리안 코뮤니즘록의 대명사인 그룹 Area를 데뷰하도록 이끈 회사로서, John Cage나 Derek Bailey등의 전위음악 아티스트들의 음반 발매권을 가질 정도로 강한 영향력을 지니고 있었으며, 이탈리안 민속 음악의 대가(?)인 Canzoniere Del Lazio나 아방가르드 음악을 추구하는 Tony Esposito등의 아티스트들과도 음반을 계약, 발표하여 명성을 떨친 레이블이다.</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <h4 className="font-semibold mb-2">밴드 결성 배경</h4>
                <p>이 밴드를 결성한 드러머 Furio Chirico 는 그룹 Trip의 세번째 앨범 [Atlantide]에서 수준 높은 드럼 연주를 보여주었었다. 하지만 이 앨범을 발표한 후 Trip에서 탈퇴한 뒤, 자신이 직접 실력있는 뮤지션들을 모아 2년후인 1974년에 재즈록 지향의 아트록 밴드인 Arti E Mestieri라는 이름으로 데뷰 음반을 발표한다.</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                <h4 className="font-semibold mb-2">멤버 구성</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Furio Chirico</strong> (드럼)</li>
                  <li><strong>Bepe Crovella</strong> (키보드)</li>
                  <li><strong>Arturo Vitale</strong> (색서폰, 클라리넷)</li>
                  <li><strong>Giovanni Vigliar</strong> (바이올린, 보컬)</li>
                  <li><strong>Marco Gallesi</strong> (베이스)</li>
                </ul>
                <p className="mt-2">5명의 멤버 모두가 연주력에 있어서만큼은 어느 하나 나무랄데가 없을 정도로 뛰어난 연주를 구사하고 있다. 특히 드러머인 Furio Chirico의 연주는 마치 팔이 4개는 달린 사람이 아닐까 의심할 정도이다.</p>
              </div>

              <div className="bg-white p-3 rounded border-l-4 border-red-400">
                <h4 className="font-semibold mb-2">수록곡 구성</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Side 1</p>
                    <ol className="list-decimal list-inside text-xs">
                      <li>Gravita 9.81</li>
                      <li>Strips</li>
                      <li>Corrosione</li>
                      <li>Positivo / Negativo</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-medium">Side 2</p>
                    <ol className="list-decimal list-inside text-xs">
                      <li>Farenheit</li>
                      <li>Articolazioni</li>
                      <li>Tilt</li>
                      <li>In Cammino</li>
                      <li>Scacco Matto</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-3 rounded">
                <h4 className="font-semibold mb-2 text-orange-700">압권의 명곡들</h4>
                <p>이중에서 가장 앨범의 압권이라 할 수 있는 곡은 음반의 제일 앞에 위치하고 있는 <strong>'Gravita 9.81'과 'Strips'의 두곡의 접속곡</strong>이다.</p>
                
                <p className="mt-2">갑작스레 튀어나오는 바이올린과 드럼의 어그레시브한 연주, 잠시후 길게 늘어지는 바이올린 연주가 흐른뒤 웅장하게 터져나오는 키보드음과 뛰어난 테크닉의 드러밍, 그위에 드리워지는 바이올린과 색서폰의 향연은 듣는 이로 하여금 감탄을 자아내게 한다.</p>
                
                <p className="mt-2">밑에 깔리는 피아노와 베이스의 어시스트도 훌륭하다. 4분여동안 손에 땀을 쥐게 하는 연주가 흐른뒤 드럼 터치와 키보드 연주로 자연히 이어지는 다음곡 'Strips'. 멜로트론을 백으로 울려퍼지는 현란한 드럼 연주와 그 뒤를 잇는 바이올린과 색서폰의 합주는 한숨이 나올 정도이다.</p>
                
                <p className="mt-2">보컬 파트는 그리 훌륭하다고 할 수는 없지만 나름대로 매력적으로 들린다. 4번째곡인 'Positivo / Negativo'도 바이올린, 기타, 드럼의 능숙한 연주가 듣는 이를 만족시켜 준다.</p>
                
                <p className="mt-2">그 뒤의 곡들은..... 연주력을 중시하시는 분이라면 좋게 들리시겠지만, 멜로디를 중시하시는 분이라면 다소...</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 