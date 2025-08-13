import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson @ San Francisco 2000 - Concert Review | Yebadong',
  description: 'King Crimson 샌프란시스코 콘서트 리뷰 (2000년 10월 21일)',
};

export default function King2Page() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            King Crimson @ San Francisco, USA - October 21, 2000
          </h1>
          <p className="text-base text-white">서부 투어의 또 다른 킹크림슨</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2000년 10월 21일</p>
                  <p><strong>장소:</strong> 샌프란시스코 필모어 (San Francisco Fillmore)</p>
                  <p><strong>리뷰어:</strong> 윤현식 (labsurde@yahoo.com)</p>
                </div>
                <div>
                  <p><strong>출연:</strong> King Crimson</p>
                  <p><strong>투어:</strong> 2000 US West Coast Tour</p>
                </div>
              </div>
            </div>

            {/* 공연 전 준비와 90년대 킹크림슨에 대한 솔직한 고백 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">공연 전 준비와 90년대 킹크림슨에 대한 솔직한 고백</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  10월 21일 샌프란시스코 필모어에서 있었던 킹크림슨의 공연을 보고 왔습니다. 
                  공연 내내 딴생각하느라고 공연에 집중하지 못했네요.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">한 달 전부터의 준비</h4>
                  <p>
                    사실 공연 있기 한달전에 킹크림슨의 최근 앨범들 (90년대)을 다량 구입해서 듣고 있었더랬습니다. 
                    그래야 공연 가서 더 즐길 수 있을 거 같기에 말이죠. 그런데 한 한두주 듣다가 
                    다른 음악을 듣고 싶어지는 제 자신을 발견했습니다.
                  </p>
                  <p className="mt-2">
                    씨디에는 킹크림슨이 있는데 재즈 방송을 주로 듣고 씨디 틀기가 망설여지고... 
                    잘 모르겠네요, 암튼... 90년대의 킹크림슨의 음악은 그렇게 제 혼을 쏙 빼앗지는 못했습니다. 
                    그리고 그렇게 애정이 가지도 않고...
                  </p>
                </div>
              </div>
            </div>

            {/* Camel 공연과의 비교 - 변화하는 음악적 취향 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Camel 공연과의 비교 - 변화하는 음악적 취향</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">두 달 전 Camel 공연의 충격</h4>
                  <p>
                    두달전에 본 캐멀공연의 경우, 거의 정말 제 혼을 완전 빼았겼었더랬습니다. 
                    오늘 공연을 보면서 자꾸 그 캐멀 공연이 떠올라서 도대체 왜 이럴까 하는 느낌이 자꾸 들고... 
                    제 자신이 이제는 귀에 단 음악을 찾아가고 있다는 느낌도 들고...
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">공연 후 복잡한 감정</h4>
                  <p>
                    집에 오는 차속에서는 오늘 공연에 대한 되새김질보다는 
                    '그래 몇주후에 있을 디오 공연을 보러 가자. 디오 공연이 킹크림슨 공연보다는 재미있을거야' 
                    라는 생각이 들고... 공연을 보고 나서 즐거움보다는 변한 (?) 제 자신의 모습이 너무 찌뿌둥하더군여..
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-gray-400 mb-2">킹크림슨 vs Camel - 솔직한 비교</h4>
                  <p>
                    캐멀과 킹크림슨을 자꾸 비교하게 되고 오늘 공연장에서 집중하고 즐기지 못하는 제 자신을 보면서 
                    이게 킹크림슨 탓인지 제 탓인지 주변에서 마리화나 피는 애들 탓인지 구분이 안가더군여.
                  </p>
                  <p className="mt-2">
                    리뷰들 보면... 아직도 모든 분들이 킹크림슨을 많이 좋아하시는데 저는 솔직히 90년대 것을 즐기지는 못합니다. 
                    예전곡들중 lark's tongue... 같은 곡은 정말 힘들고... 킹크림슨에 비하면 캐멀은 그래도 난해하지는 않고 
                    앨범을 사면 곡들을 거의 다 좋아하게 되는데... 킹크림슨은 앨범 사면 반은 좋아하고 반은 절대 안듣게 되더군여.
                  </p>
                </div>
              </div>
            </div>

            {/* 나이와 음악적 취향의 변화에 대한 철학적 성찰 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">나이와 음악적 취향의 변화에 대한 철학적 성찰</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">대학 시절의 나와 현재의 나</h4>
                  <div className="bg-gray-800 bg-opacity-40 p-3 rounded italic text-xs">
                    <p>
                      "음악은 공부하는 자세로 들어야 되는 거야."라고 말하면서 (대학교 댕길 때) 
                      애들에게 음악을 들려주곤 했는데 이제 나이 먹어서 그런가.. (여러 선배님들께는 죄송) 
                      어려운 곡에는 손이 안가니... 이게 어찌된 현상인지..
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 멤버별 상세 관찰 - 무대 위의 King Crimson */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">멤버별 상세 관찰 - 무대 위의 King Crimson</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>오늘 공연에서</p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Robert Fripp - 완벽주의의 독재자</h4>
                  <p>
                    프립 선생: (이 아저씨는 다들 선생이라고 하죠. 아저씨라고 안하고...) 
                    동네 훈장처럼 우측 구석에서 묵묵히 연주하고 가끔 아드리안 아저씨가 오버하거나 하면 
                    날카롭게 쳐다보는게... 완벽을 추구하는 독재적인 지배자같은 인상을 주더군여.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Adrian Belew - 나이든 아저씨의 노력</h4>
                  <p>
                    아드리안 아저씨: 나이든 아저씨가 많이 방방거리면서 공연 그래도 재밌게 해볼라고 많이 노력했습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Trey Gunn - 손으로 하는 발레</h4>
                  <p>
                    트레이 군: 연주하는 모습에서 기타를 싹 지워버리면 그야말로 손으로 하는 발레입니다. 정말 신비한 연주.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Pat Mastelotto - 묵묵한 드러밍</h4>
                  <p>
                    팻 아저씨: 묵묵하고 묵직한 드러밍.
                  </p>
                </div>
              </div>
            </div>

            {/* Discipline까지는 좋아하는 곡들 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Discipline까지는 좋아하는 곡들</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-2">일부는 즐거웠지만...</h4>
                  <p>
                    디서플린 앨범까지는 제가 좋아하거든여. 그 탓에 몇몇 곡들은 즐거웠습니다. 냠.. 
                    근데 대부분은 멍하니 자꾸 캐멀 콘서트 후유증상태에서 벗어나지 못해서...
                  </p>
                </div>
              </div>
            </div>

            {/* Three of a Perfect Pair - 유일한 하이라이트 */}
            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Three of a Perfect Pair - 유일한 하이라이트</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Adrian의 솔로 앙코르</h4>
                  <p>
                    바동분들 들으시면 좋아하실 만한 곡이, 앵콜곡으로 아드리안 아저씨 혼자 나와서 
                    통키타 메고 연주한 three of perfect pair 였습니다. 정말 재밌게 혼자 잘 불렀습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">녹음 실패의 아쉬움</h4>
                  <p>
                    으... 저는 녹음한답시고 녹음하는줄 알았는데 레코드 버튼만 눌러서 녹음이 안되었습니다. 
                    (제 MD 는 플레이도 눌러줘야 녹음이 되거든여... 누른줄 알았는데...) 
                    정말 이 곡 녹음 못한 것이 참 안타깝구여.
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-gray-400 mb-2">복잡한 감정</h4>
                  <p>
                    (사실 이 곡을 들으면서도 왜 이렇게 간결화해야지 내가 좋아할까 하는 생각이 많이 들었습니다. 쩝...)
                  </p>
                </div>
              </div>
            </div>

            {/* 녹음과 기술적 한계 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">녹음과 기술적 한계</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">집중력 부족으로 인한 아쉬움</h4>
                  <p>
                    이렇게 집중을 전혀 못한 탓에 자세한 리뷰는 올리기 힘들 거 같구여. 
                    공연 초반 74분을 녹음하기는 했는데 역시 캐멀때처럼 베이스 드럼의 퍽퍽거림은 
                    핀마이크로는 감당하기 힘든가 봅니다. 너무 퍽퍽거리네요...
                  </p>
                </div>
              </div>
            </div>

            {/* 윤현식의 솔직한 자기 성찰 */}
            <div className="mb-12 p-6 bg-red-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">윤현식의 솔직한 자기 성찰</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-800 bg-opacity-40 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-400 mb-2">음악적 취향의 변화에 대한 고민</h4>
                  <p className="italic">
                    이 리뷰는 단순한 공연 후기가 아닌, 나이가 들면서 변화하는 음악적 취향과 
                    프로그레시브 록에 대한 애정의 변화를 솔직하게 고백한 매우 개인적이고 철학적인 글입니다. 
                    윤현식이 보여준 이런 솔직함과 자기 성찰은 많은 음악 애호가들이 공감할 수 있는 
                    보편적인 경험이기도 합니다.
                  </p>
                </div>
                
                <div className="bg-gray-700 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-gray-300 mb-2">결론</h4>
                  <p>
                    King Crimson에 대한 애정은 여전하지만, 90년대 이후의 음악에 대해서는 
                    예전만큼의 열정을 느끸지 못하는 자신의 변화를 발견한 정직한 고백. 
                    이것이야말로 진정한 음악 리뷰의 한 형태라고 할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}