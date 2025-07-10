"use client";
import Link from "next/link";

export default function GenesisPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Genesis</h1>
        
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
              <span className="font-semibold">결성:</span> 1967년 (Charterhouse 공립학교)
            </div>
            <div>
              <span className="font-semibold">주요 멤버:</span> Peter Gabriel, Phil Collins, Tony Banks, Mike Rutherford, Steve Hackett
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* 최문호 Review */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">최문호 (gene132, 92.7)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Genesis와 Phil Collins</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                며칠전에 전영혁씨가 한말중에 요즘 유러피언 프로그래시브가 워낙 강세라, 
                한때 프로그래시브 3대 그룹이니, 4두 마차니 하던 영국의 대 그룹들이 찬밥이된(?) 
                현상이 나타나고 있다고 하더군요.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                그때 갑자기 제너시스생각이 나더군요. 모두 아시다시피 방코의 거구 보컬리스트 프란시스코가 
                자기들이 제네시스와 젠틀 자이언트에 영향을 받았다고 한것은 주지의 사실이고, 
                그밖에 이태리는 물론이고 그쪽의 그룹 대부분은 제너시스를 비롯한 영국그룹의 모방으로 
                음악생활을 시작했다고 고백했다고 합니다.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">밴드 결성 배경</h4>
                <p className="text-sm text-yellow-700">
                  제너시스는 영국의 한 공립학교인 Charterhouse의 The Anon(Anthony Phillips, Michael Rutherford 재적)과 
                  Garden Wall(Tony Banks, Peter Gabriel, Chris Stewart)이라는 두 그룹이 연합하여 탄생하게 된다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">주요 앨범 해설</h4>
                <div className="text-sm text-blue-700 space-y-3">
                  <div>
                    <strong>6집 - Selling England by the Pound (73.9):</strong> 라이선스 발매
                    <div className="ml-4 mt-1">
                      <div>A.1. Dancing with the Moonlight Knight</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;2. I Know What I Like (In Your Wardrobe)</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;3. Firth of Fifth</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;4. More Fool Me</div>
                      <div>B.1. The Battle of Epping Forest</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;2. After the Ordeal</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;3. The Cinema Show</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;4. Aisle of Plenty</div>
                    </div>
                  </div>
                  
                  <div>
                    <strong>7집 - The Lamb Lies Down on Broadway:</strong> 
                    이앨범을 끝으로 가브리엘이 탈퇴하는 초기제네시스의 마지막 앨범. 
                    더블앨범이지만 구성력은 절대 떨어지지 않는 그들 최후(?)의 명반. 
                    초기제네시스의 주목할 명반가운데 유일하게 라이센스화 되지 않아 상당히 안타까운 앨범.
                    The Colony of Slippermen이란 곡과 The Waiting Room이 상당함.
                  </div>

                  <div>
                    <strong>8집 - A Trick of the Tail (76.3):</strong> 
                    흔히들 제너시스의 명반을 대라면 2,3,4집중 하나를 택하는데, 
                    7집을 끝으로 피터가 나가자 필이 주도권을 잡으려는 과도기에 나온것인데 
                    상당히 평가절하당한 앨범이라고 생각됩니다. 아주 객관적으로 봐서도 
                    초기작들과 손색이 없고 정말 멋진 앨범이라고 생각됩니다. 
                    <strong>Mad Man Moon</strong>이라는 아름다운 한곡으로 이 앨범의 가치는 충분하다고 봅니다.
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-purple-800 mb-2">Phil Collins에 대하여</h4>
                <p className="text-sm text-purple-700 mb-2">
                  그는 사람들이 workaholic(일벌래)라고 부를 만큼 노력하는 형의 뮤지션이라고 합니다. 
                  사실 외모로 보면 어디한군데 스타같게 생기지 않았고, 팔을 걷어붙이고 노래하는 모습은 
                  꼭 동네 아저씨 같죠. 너무도 음악을 열심히 하다보니, 1979년에는 부인에게 이혼당하기까지한 
                  불쌍한(?) 사람이기도 하죠.
                </p>
                <p className="text-sm text-purple-700 mb-2">
                  그는 보험회사직원인 아버지와 아동극단의 대리인인 어머니사이에서, 
                  런던 근교의 중산층가족에서 태어났다고 합니다. 열살때 처음으로 드럼셋을 가졌고 
                  14살때 처음으로 세션연주를 했다니 노력도 노력이지만, 천재성을 타고났나봐요.
                </p>
                <p className="text-sm text-purple-700">
                  1970년에 그는 대학가에서 조직된 밴드가 드러머를 찾고 있다는 소문에 오디션을 봐서 합격했고, 
                  그때 19살이었다고 합니다. 그후 필이 75년에 솔로로 독립하자, 결국 필이 싱어를 맡음으로서 
                  새롭게 태어난다.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-red-800 mb-2">후기 활동</h4>
                <p className="text-sm text-red-700 mb-2">
                  11집 이후에 그는 한편으로 Brand-X라는 재즈록풍의 project를 만드는데 
                  멤버는 Percy Jones(bass), Morris Pert(Percussion), Chuck Burgi(Dr), 
                  Peter Robinson(Keyboard), John Goodsall(guitar)로서 6매의 앨범을 남긴다.
                </p>
                <p className="text-sm text-red-700">
                  또 81년 3월 첫 솔로앨범 Face Value 이후 Hello I Must Be Going, No Jacket Required와 
                  제너시스명의로 Abacab(phil의 솔로앨범과 비슷), Duke 등 그룹과 솔로를 병행하며, 
                  최근에는 완전한 anti-progressive앨범(We Can't Dance)을 내서 확실히 시대조류에 맞춰가는 
                  그의 면모를 보여줬다.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                하지만 필은 난해한연주와 복잡한 리프에서뿐만 아니라 서정적이고 아름다운감정을 
                아주 단순한 메로디에서도 만들어 내는 전천후 아티스트임에 그 또다른 매력이 있다. 
                Against All Odds나 Another Day in Paradise, One More Night 등등...
              </p>
            </div>
          </div>

          {/* 남장우 Review */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">남장우 (beta1, 95.12)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">From Genesis to Revelation (1969)</h3>
            <div className="prose max-w-none">
              <div className="bg-indigo-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-indigo-800 mb-2">트랙 리스트</h4>
                <div className="text-sm text-indigo-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <div>1. Where The Sour Turns To Sweet</div>
                    <div>2. In The Beginning</div>
                    <div>3. Fireside Song</div>
                    <div>4. The Serpent</div>
                    <div>5. Am I Very Wrong?</div>
                    <div>6. In The Wilderness</div>
                    <div>7. The Conqueror</div>
                    <div>8. In Hiding</div>
                  </div>
                  <div>
                    <div>9. One Day</div>
                    <div>10. Window</div>
                    <div>11. In Limbo</div>
                    <div>12. Silent Sun</div>
                    <div>13. A Place To Call My Own</div>
                    <div>14. A Winter's Tale</div>
                    <div>15. One Eyed Hound</div>
                    <div>16. That's Me</div>
                  </div>
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