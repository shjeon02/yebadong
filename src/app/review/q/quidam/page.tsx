"use client";
import Link from "next/link";

export default function QuidamReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Quidam</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-400">
            <div className="flex items-center mb-2">
              <span className="bg-teal-500 text-white px-2 py-1 rounded text-sm font-medium">cicco 이윤직</span>
              <span className="ml-2 text-sm text-gray-600">jiklee@chiak.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-teal-700 mb-2">Quidam / Sny Aniolow</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-400">
                    <h4 className="font-medium text-blue-800 mb-2">앨범 정보</h4>
                    <p>
                      <strong>[1998 Rock-Serwis 발매(RSCD-050), Poland]</strong>
                    </p>
                    <p className="mt-2">
                      Ars Mundi label에서의 debut album으로 Collage, Abraxas 등과 함께 
                      <strong>'Polish invasion'</strong>이라는 조금은 과장된 말이 나오게까지 만들었던 
                      Quidam의 두번째 앨범이 드디어 발매되었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">멤버 변화</h4>
                    <p>
                      1집에서 아름다운 flute 연주를 들려주었던 <strong>Ewa Smarzynska가 탈퇴</strong>하고 
                      대신 <strong>Jacek Zasada</strong>라는 새로운 멤버를 맞이하여 6인조를 그대로 유지하고 있습니다.
                    </p>
                    <p className="mt-2">
                      1집과 마찬가지로 총 9개의 트랙을 수록하고 있지만 전체적으로 곡 길이가 줄어든 것을 알 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">재킷과 음악적 변화</h4>
                    <p>
                      뭔가 좀 촌스럽지만 그래도 progressive rock 앨범이라는 걸 느낄 수 있었던 1집의 artwork에 비해 
                      2집의 재킷은 Quidam의 로고만 없다면 <strong>windham hill record의 sampler CD</strong>라고 
                      오해할 정도로 조금 다른 각도에서 촌스러움을 유지하고 있습니다.
                    </p>
                    <p className="mt-2">
                      몇번 반복 감상해본 결과 음악 역시 <strong>딱 재킷의 변화만큼 변해있다</strong>는 느낌입니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">1집과의 비교</h4>
                    <p>
                      아름답고 때로는 힘있는 <strong>Emila의 보컬</strong>과 수려한 기타 프레이즈가 인상적이었던 
                      데뷰 앨범과는 달리 전체적으로 <strong>좀더 여려지고 에너지가 감소한 듯한 사운드</strong>를 들려주고 있습니다.
                    </p>
                    <p className="mt-2">
                      아름다운 멜로디는 여전하지만 Emila의 보컬은 힘이 빠진듯 나긋나긋한 목소리로 일관하고 있고 
                      기타, 드럼, 베이스, 플룻 등의 연주도 누구 하나 앞으로 나서는 일 없이 
                      <strong>절제와 조화만을 고집</strong>하고 있습니다.
                    </p>
                    <p className="mt-2">
                      전체적으로 튀는 곡 없이 비슷한 분위기로 유지되다 보니 분명 아름다운 symphonic rock 앨범임에는 
                      동의하지만 저에겐 <strong>좀 지루하다</strong>고 고백하지 않을 수 없네요.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">앨범의 백미</h4>
                    <p>
                      <strong>14분으로 가장 긴 running time을 자랑하는 일곱번째 트랙</strong>은 
                      '그래도 역시 Quidam은 재능있는 그룹이다'라는 것을 느끼게 해주는 이 앨범의 백미라고 할 수 있습니다.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded border-l-2 border-gray-400">
                    <h4 className="font-medium text-gray-800 mb-2">최종 평가</h4>
                    <p>
                      사실 이 정도 수준의 앨범이 <strong>21세기를 바라보는 시대에 발매되고 있다는 건 즐거운 일</strong>임에 틀림없습니다만 
                      우리가 'Quidam'에게 기대하고 있는 것에는 조금 못 미치는 게 아닌가 하는 아쉬움에 주절거려 봤습니다.
                    </p>
                    <p className="mt-2">
                      하지만 이 앨범에 대한 평가는 Abraxas의 두번째 앨범과 마찬가지로 
                      <strong>'완성도'보다는 듣는 사람의 '취향'에 따라 달라질</strong> 거라는 생각이 드네요...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">Piotr Tucholski</span>
              <span className="ml-2 text-sm text-gray-600">Polish Rock Review</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">Quidam 밴드 정보</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">현재 멤버 구성</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• <strong>Emilia Derkowska</strong> - vocal, chorus, cello, guitar</li>
                      <li>• <strong>Zbyszek Florek</strong> - keyboards</li>
                      <li>• <strong>Rafał Jermakow</strong> - drums & percussion</li>
                      <li>• <strong>Maciek Meller</strong> - guitars</li>
                      <li>• <strong>Radek Scholl</strong> - bass guitar</li>
                      <li>• <strong>Jacek Zasada</strong> - flutes, keyboards, sax</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">밴드 역사</h4>
                    <p>
                      밴드는 1991년 <strong>Deep River</strong>로 결성되었습니다. 
                      1995년에 이름을 <strong>Quidam</strong> (라틴어로 '누군가'를 의미)으로 변경했습니다.
                    </p>
                    <p className="mt-2">
                      처음에는 hard rock과 soul의 혼합으로 시작했지만 
                      <strong>Ewa Smarzyńska (flute)</strong>가 합류한 후 곧 
                      Camel, Pink Floyd, early King Crimson, Genesis 등과 같은 
                      <strong>더 세련된 록으로 변화</strong>하기 시작했습니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">1집 성공과 활동</h4>
                    <p>
                      1996년 첫 앨범 <strong>"Quidam" (Ars Mundi)</strong>를 발표했습니다. 
                      세션 뮤지션으로 Collage의 세 멤버(Szadkowski, Gil, Palczewski)가 참여했습니다.
                    </p>
                    <p className="mt-2">
                      <strong>Emilia의 섬세한 보컬</strong>과 함께하는 아름답고 향수어린, 파스텔 톤의 작품들은 
                      neo-prog의 경계를 훨씬 넘어서는 음악을 만들어냅니다.
                    </p>
                    <p className="mt-2">
                      이 앨범은 국내외 록 잡지에서 훌륭한 리뷰를 받았고 국제 아트록 빌보드에서 높은 순위를 기록했습니다 
                      (프랑스 "Big Bang"에서 5위).
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">국제적 활동</h4>
                    <p>
                      1997년 Quidam은 첫 해외 콘서트를 가졌습니다 ("Day of Dreams" festival).
                    </p>
                    <p className="mt-2">
                      폴란드에서 열린 Camel의 콘서트 중에 <strong>Derkowska와 Smarzyńska는 Andy Latimer에 의해 
                      "Harbour of Tears" 모음곡에 참여하도록 초청</strong>받았습니다.
                    </p>
                    <p className="mt-2">
                      그룹은 몇 차례 더 페스티벌에서 공연했으며 Proglive'97 in Corbigny, 
                      Rotherham의 "Awards Night" (모두 영국)에서 스타 연주자로 활동했고, 
                      Classic Rock Society (그리고 Rick Wakeman)에 의해 초청받았습니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded">
                    <h4 className="font-medium text-red-800 mb-2">2집과 현재</h4>
                    <p>
                      1998년 Quidam은 두 번째 앨범 <strong>"Sny Aniołów" (Rock Serwis)</strong>를 녹음했습니다. 
                      멤버 구성에서 한 가지 변화가 있었습니다 (Jacek Zasada가 Ewa Smarzyńska를 대체).
                    </p>
                    <p className="mt-2">
                      안타깝게도, 이 앨범의 음악은 데뷔작보다 조금 덜 흥미롭고, 
                      <strong>더 상업적이고 팝적인 스타일</strong>로 향하고 있습니다.
                    </p>
                    <p className="mt-2">
                      이 앨범의 국제 유통은 Musea가 담당했습니다. 
                      Zielona Góra(폴란드)의 Progressive Rock Music Festival에서 
                      (Abraxas와 마찬가지로) 3개 부문에서 상을 받았습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Quidam 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 폴란드</li>
                  <li><strong>결성:</strong> 1991년 (as Deep River)</li>
                  <li><strong>개명:</strong> 1995년 (Quidam)</li>
                  <li><strong>장르:</strong> Symphonic Progressive Rock</li>
                  <li><strong>의미:</strong> Quidam = 라틴어로 '누군가'</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>아름다운 향수어린 파스텔 톤</li>
                  <li>Emilia의 섬세한 보컬</li>
                  <li>Neo-prog 경계를 넘어서는 음악</li>
                  <li>절제와 조화 중심</li>
                  <li>Camel, Pink Floyd 영향</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-xs">
                <div className="bg-teal-100 p-2 rounded border-l-2 border-teal-400">
                  <strong>Quidam</strong> (1996, Ars Mundi) - 데뷔작, 프랑스 Big Bang 5위
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Sny Aniołów</strong> (1998, Rock-Serwis) - 2집, 상업적 스타일로 변화
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">멤버 변화</h4>
              <div className="text-xs space-y-1">
                <div className="bg-yellow-100 p-1 px-2 rounded">1집: Ewa Smarzyńska (flute)</div>
                <div className="bg-white p-1 px-2 rounded">2집: Jacek Zasada (flutes, keyboards, sax)</div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 성과</h4>
              <div className="text-xs space-y-1">
                <p>• 'Polish invasion'의 주역</p>
                <p>• Andy Latimer (Camel)과 협연</p>
                <p>• 영국 Classic Rock Society 초청</p>
                <p>• Progressive Rock Music Festival 3개 부문 수상</p>
                <p>• Musea 국제 유통</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">관련 밴드</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-purple-100 px-2 py-1 rounded">Collage</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Abraxas</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Camel</span>
                <span className="bg-purple-100 px-2 py-1 rounded">Pink Floyd</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/review/q" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Q 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 