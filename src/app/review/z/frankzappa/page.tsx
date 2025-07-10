"use client";
import Link from "next/link";

export default function FrankZappaReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Frank Zappa</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">Lennon 이강영</span>
              <span className="ml-2 text-sm text-gray-600">kylee@chep5.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">Frank Zappa's "We're only in it for the money"</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">앨범 입수 경위</h4>
                    <p>
                      엣날부터 탐내왔던 이 앨범이 놀랍게도 <strong>라이센스화</strong> 되어 있었읍니다.
                      <strong>Rock 레코드</strong>라는 듣도보도 못한 회사인데요, 성우진씨가 해설을 썼군요.
                    </p>
                    <p className="mt-2">
                      이 앨범 한 장이 아니라 <strong>Lumpy Gravy</strong>라는 앨범과 합본으로 <strong>2 LP on 1 CD</strong>입니다.
                      참 이 씨디의 값은 청개천에서 <strong>8000원</strong>이었읍니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">음악적 특징</h4>
                    <p>
                      글쎄요, 음악은 역시 <strong>편하지 않습니다</strong>. 샀을때 들어보고 손이 안가서 쳐박아 놨다가 다시 들어봤는데요.
                    </p>
                    <p className="mt-2">
                      곡들이 <strong>30초에서 3분정도의 대단히 짧은 곡들</strong>뿐이고, 나레이션, 구상적인 소리들이 섞여 있어서 
                      게속 긴장감이 있읍니다. 그렇다고 뭐 완전 실험음악은 아니에요.
                    </p>
                    <p className="mt-2">
                      그러나 상 쥬스뜨같은 이태리 아방가르드풍보다 확실히 <strong>멜로디감은 거의 느껴지지 않아요</strong>. 
                      그래서 어떤 곡을 특히 기억하기도 어렵군요.
                    </p>
                    <p className="mt-2">
                      전에 갖고있다 팔아버린 <strong>캡틴 비프하트의 "Trout Mask Replica"</strong>와 앨범 구성은 유사하지만 
                      그보다는 좀 더 듣기 편합니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">Lumpy Gravy</h4>
                    <p>
                      같이 수록된 <strong>Lumpy Gravy</strong>는 part 1, 2로 된 대곡입니다. 엘피의 앞, 뒷면이었겠죠.
                    </p>
                    <p className="mt-2">
                      <strong>오케스트라가 동원된 클래식 사운드</strong>입니다. 
                      We're ... 와는 극단적으로 다른 형태이지요. 듣기는 편한데 아직 판단을 내리고 싶진 않네요.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">평가</h4>
                    <p>
                      부분 부분 들을만한 곳이 있긴 하지만 추천할 만하다고는.... 하긴 자파 음악이 다 그렇지만요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">Tongkew Hah</span>
              <span className="ml-2 text-sm text-gray-600">th1@acpub.duke.edu</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">We're only in it for the money 심화 리뷰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">앨범의 의미</h4>
                    <p>
                      <strong>We're only in it for the money (WOIIFTM)</strong>는 가장 흥미로운 Frank Zappa(FZ) 앨범 중 하나입니다.
                    </p>
                    <p className="mt-2">
                      WOIIFTM은 확장된 Mothers 라인업으로 녹음되었고 그들은 놀라운 작업을 해냈습니다.
                      심지어 <strong>Eric Clapton이 "God! It's God! I see God!"</strong>라고 말하는 것도 들을 수 있어요 :-)
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">Ryko 재발매</h4>
                    <p>
                      최근 Ryko가 FZ 자신이 리마스터한 모든 FZ 공식 앨범을 재발매했습니다.
                      이는 저 같은 사람을 미치게 만들죠. 사야 하는데 요즘 거의 파산상태거든요.
                    </p>
                    <p className="mt-2">
                      하지만 이 새로운 CD들은 정말 뭔가 다릅니다. 오리지널 LP 버전에 훨씬 가깝고 
                      Ryko는 충실하게 오리지널 커버아트를 복원했습니다.
                    </p>
                    <p className="mt-2">
                      구 CD 버전 WOIIFTM의 음질은 LP 버전에 비해 악명높게 끔찍했습니다 
                      (실제로는 완전히 다른 녹음과 믹싱이었어요)
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">Hot Rats 추천</h4>
                    <p>
                      FZ 음악의 좋은 시작점 중 하나로 <strong>"Hot Rats"</strong>를 추천합니다.
                    </p>
                    <ul className="mt-2 space-y-1 text-xs">
                      <li>• FZ의 놀라운 기타 솔로, 확실한 FZ 클래식</li>
                      <li>• <strong>"Willie the Pimp"</strong>의 긴 솔로는 절대 잊을 수 없어요</li>
                      <li>• 제가 가장 좋아하는 FZ 곡 중 하나인 <strong>"Peaches En Regalia"</strong> 수록</li>
                      <li>• <strong>Jean Luc Ponty</strong>가 "It must be a camel"에서 연주</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">Tongkew Hah</span>
              <span className="ml-2 text-sm text-gray-600">th1@acpub.duke.edu</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-orange-700 mb-2">Sheik Yerbouti</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">개인적 첫 인상</h4>
                    <p>
                      이 앨범은 제가 처음 산 FZ 앨범이고 정말 놀랐다고 인정해야겠습니다.
                      <strong>70년대 후반 최고의 FZ 앨범 중 하나</strong>입니다.
                    </p>
                    <p className="mt-2">
                      대부분의 곡들이 라이브로 녹음되었지만(+ 많은 오버더빙) 음질이 너무 좋아서 
                      관중 소리를 들을 때까지는 차이를 모를 정도입니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">멤버 구성</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• <strong>Adrian Belew</strong> - 리듬 기타</li>
                      <li>• <strong>Patrick O'Hearn</strong> - 베이스</li>
                      <li>• <strong>Terry Bozzio</strong> - 드럼</li>
                    </ul>
                    <p className="mt-2 text-xs">
                      일부는 Terry Bozzio가 앨범 전체에 너무 많이 나온다고 불평하지만, 저는 좋아해요 :-)
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">주요 트랙들</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• <strong>"I have been in you"</strong> - 훌륭하고 꽤 이상한 러브송</li>
                      <li>• <strong>"Dancin' Fool"</strong> - 모의 디스코 히트</li>
                      <li>• <strong>"Yo' Mama"</strong> - 꽤 즐거운 곡</li>
                      <li>• <strong>"Jewish Princess"</strong> - 유대인들로부터 격렬한 반응을 불러일으킨 곡</li>
                      <li>• <strong>"Bobby Brown"</strong> - 개인적 최애곡, 앨범의 음악적/풍자적 클라이막스</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-center mb-2">
              <span className="bg-indigo-500 text-white px-2 py-1 rounded text-sm font-medium">Neo-Zao 김남웅</span>
              <span className="ml-2 text-sm text-gray-600">날탱이@LG전자.우면동.서울.꼬래</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-indigo-700 mb-2">Frank Zappa에 대한 질문</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-gray-50 p-3 rounded">
                    <h4 className="font-medium text-gray-800 mb-2">개인적 인상</h4>
                    <p>
                      제가 기억하는 자파는 <strong>_Drowning Witch_</strong> 정도입니다만.. 
                      제가 이 곡을 들으면서 생각하는 것은 사실 자파의 기타 플레잉 보다는 
                      <strong>멤버들간의 엄청난 스피드의 유니즌</strong>이거든요.
                    </p>
                    <p className="mt-2">
                      사실 초반부의 흥미진진하고 귀신같은 연주가 중간부분의 기타연주에서 희석되기 시작.. 
                      chaotic diverge를 하는 듯 싶더니 또 정확하게 계산된 합주가 되고 있거든요.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">고민과 질문</h4>
                    <p>
                      저는 자파의 기타 플레잉을 아주 좋아하지는 않지만(톤과 이펙팅면에서 특히..) 
                      그가 만드는 곡들의 취향이란 것이 너무나 broad해서 어떤 선택을 해야 할 지 고민스럴때가 많습니다.
                    </p>
                    <p className="mt-2">
                      특히 60년대 앨범들은 과연 그 진가를 어디서 찾아야 할지 의문스러울때가 있습니다. 
                      (회의적인 의문이 아니라.. 제가 이해를 잘 하지 못하는데서 오는 순수한 의문이에요.)
                    </p>
                    <p className="mt-2">
                      그러니까 질문의 요지는 자파의 열렬한 팬으로서 어떤 부분이 그렇게 매력적이고 들을만한 부분인지 
                      가이드를 주십사 하는 것이에요. 제가 기억하고 싶은 자파는 <strong>프리폼음악을 만들고 재즈락을 행한 기타리스트</strong>이거든요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">Tongkew Hah</span>
              <span className="ml-2 text-sm text-gray-600">th1@acpub.duke.edu</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Frank Zappa 음악의 본질</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">음악적 스펙트럼</h4>
                    <p>
                      FZ 음악이 정확히 어떤 것인지 설명하기는 매우 어렵습니다.
                    </p>
                    <p className="mt-2">
                      즉흥연주가 그의 음악에서 매우 중요하지만 FZ의 음악을 재즈 관점에서 설명하는 것은 적절하지 않다고 생각합니다.
                    </p>
                    <p className="mt-2">
                      그의 음악은 <strong>50년대 두왑, R&B, 하드록부터 복잡한 오케스트라 작품 - 심지어 브로드웨이(?) 뮤지컬</strong>까지 
                      매우 다양한 장르를 아우릅니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">핵심 특징</h4>
                    <p>
                      각 FZ 앨범은 기본적으로 다르며 FZ 음악의 전체 스펙트럼을 대표할 수 있는 단일 앨범은 찾을 수 없습니다.
                    </p>
                    <p className="mt-2">
                      요점은 그의 음악이 <strong>혼란스럽고 무질서하게 들리지만 항상 완전한 통제 하에 있다</strong>는 것입니다.
                    </p>
                    <p className="mt-2">
                      이것이 FZ가 다른 뮤지션들 사이에서 그토록 독특하고 구별되는 이유라고 생각합니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">기타리스트로서의 FZ</h4>
                    <p>
                      기타리스트로서 FZ 역시 별나고 특이합니다.
                    </p>
                    <ul className="mt-2 space-y-1 text-xs">
                      <li>• 복잡한 리듬</li>
                      <li>• 터무니없는(?) 테크닉</li>
                      <li>• 거칠고 헤비한 톤 (꽤 날것이죠?)</li>
                    </ul>
                    <p className="mt-2">
                      하지만 그는 자신이 무엇을 하고 있는지 알고 있고, 
                      <strong>FZ의 기타는 여전히 당신의 엄마를 죽이려고 합니다.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Frank Zappa 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 미국</li>
                  <li><strong>장르:</strong> 실험적 프로그레시브 록, 재즈 퓨전</li>
                  <li><strong>밴드:</strong> The Mothers of Invention</li>
                  <li><strong>특징:</strong> 극도로 다양한 음악적 스펙트럼</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>두왑 ~ 오케스트라까지 광범위</li>
                  <li>혼란스럽지만 완전한 통제</li>
                  <li>풍자적 가사와 사회 비판</li>
                  <li>즉흥연주와 작곡의 절묘한 결합</li>
                  <li>독특하고 구별되는 개성</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">추천 앨범</h4>
              <div className="space-y-1 text-xs">
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>Hot Rats</strong> - FZ 입문용, "Willie the Pimp", "Peaches En Regalia" 수록
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>Sheik Yerbouti</strong> - 70년대 후반 최고작, "Bobby Brown" 등 수록
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>We're Only in It for the Money</strong> - 실험적 작품, Lumpy Gravy와 합본
                </div>
                <div className="bg-yellow-100 p-2 rounded">
                  <strong>Strictly Commercial</strong> - 베스트 앨범, 입문자용
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 협력 뮤지션</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-1 px-2 rounded">Eric Clapton</div>
                <div className="bg-white p-1 px-2 rounded">Jean Luc Ponty</div>
                <div className="bg-white p-1 px-2 rounded">Adrian Belew</div>
                <div className="bg-white p-1 px-2 rounded">Terry Bozzio</div>
                <div className="bg-white p-1 px-2 rounded">Patrick O'Hearn</div>
                <div className="bg-white p-1 px-2 rounded">The Mothers</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">특이사항</h4>
              <div className="text-xs space-y-1">
                <p>• Ryko에서 FZ 자신이 리마스터한 앨범들 재발매</p>
                <p>• 생전에 베스트 앨범을 거부했으나 사후 "Strictly Commercial" 발매</p>
                <p>• Captain Beefheart와 유사한 실험적 접근법</p>
                <p>• 각 앨범마다 완전히 다른 스타일 추구</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/review/z" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Z 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 