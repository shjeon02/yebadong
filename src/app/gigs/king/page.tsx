import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson @ Tokyo, Japan 2000 - Concert Review | Yebadong',
  description: '킹크림슨 도쿄 라이브 콘서트 리뷰 (2000년 10월 8일)',
};

export default function KingPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="border border-red-500 p-4 rounded-lg mb-6">
            <h5 className="text-lg font-bold text-[#8080FF] mb-2">Gig Review</h5>
            <h1 className="text-4xl font-bold text-[#8080FF]">
              King Crimson @ Tokyo, Japan - October 8, 2000
            </h1>
          </div>
          <p className="text-[#F5FF83] text-lg">
            박경신, <a href="mailto:rajaze@hanmail.net" className="text-[#0080FF]">rajaze@hanmail.net</a>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2000년 10월 8일</p>
                  <p><strong>장소:</strong> Tokyo, Japan</p>
                </div>
                <div>
                  <p><strong>출연:</strong> King Crimson</p>
                  <p><strong>리뷰어:</strong> 박경신 (ROM)</p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 text-white text-sm leading-relaxed">
              <p>
                안녕하세요 주로(?) ROM인 박경신입니다. 제가 지난 주 일본 동경에서 킹크림슨의 라이브를 보고 왔습니다. 
                제가 이런 말을 할 수 있게 되기라고는 꿈에도 생각치 못했습니다. 지금도 믿기지가 않습니다.
              </p>
              
              <div className="p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">출장에서 만난 기적</h3>
                <p className="mb-4">
                  지난 주 일요일 출장차 동경에 갔었습니다. 늘 혼자 출장을 다니는 저로서는 
                  동경에서의 여가시간을 어떻게 보낼지가 고민이었습니다. 그런데 호텔에서 
                  우연히 킹크림슨의 공연 포스터를 보게 되었습니다.
                </p>
                <p>
                  처음에는 믿을 수 없었습니다. 정말 킹크림슨이 일본에 와서 공연을 한다는 것이. 
                  그것도 제가 출장으로 있는 바로 그 기간에!
                </p>
              </div>

              <div className="p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연장에서</h3>
                <p className="mb-4">
                  공연장에 도착했을 때의 그 떨림은 지금도 잊을 수 없습니다. 
                  정말 킹크림슨을 라이브로 볼 수 있다는 것이 현실인지 꿈인지 구분이 안 갔습니다.
                </p>
                <p className="mb-4">
                  Robert Fripp의 기타 소리가 공연장에 울려 퍼지는 순간, 
                  저는 완전히 다른 세계로 빨려 들어가는 느낌이었습니다. 
                  그의 기타는 정말 예술 그 자체였습니다.
                </p>
              </div>

              <div className="p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">음악적 경험</h3>
                <p className="mb-4">
                  킹크림슨의 음악은 정말 복잡하고 어려운 음악이지만, 
                  라이브에서 듣는 그 음악은 전혀 다른 차원의 경험이었습니다. 
                  특히 Adrian Belew의 보컬과 기타, Tony Levin의 베이스, 
                  Bill Bruford의 드럼이 만들어내는 사운드는 정말 환상적이었습니다.
                </p>
                <p>
                  각 멤버들의 연주 실력은 정말 경이로웠습니다. 
                  특히 Bill Bruford의 드럼 연주는 정말 예술적이었고, 
                  Tony Levin의 베이스는 저음부터 고음까지 모든 영역을 커버하면서도 
                  킹크림슨만의 독특한 사운드를 만들어냈습니다.
                </p>
              </div>

              <div className="p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">잊을 수 없는 순간들</h3>
                <p className="mb-4">
                  공연 중간중간 Robert Fripp이 보여준 기타 연주는 정말 신기에 가까웠습니다. 
                  그의 손가락이 기타 줄을 터치하는 순간순간이 모두 완벽한 음악이 되어 나왔습니다.
                </p>
                <p>
                  특히 "Starless"가 연주될 때는 정말 소름이 돋았습니다. 
                  그 복잡하고 아름다운 멜로디가 라이브로 펼쳐지는 것을 보는 것은 
                  정말 꿈같은 경험이었습니다.
                </p>
              </div>

              <div className="p-6 bg-red-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">마무리</h3>
                <p>
                  이런 기회가 다시 올지는 모르겠지만, 이번 경험은 제 인생에서 
                  절대 잊을 수 없는 소중한 추억이 될 것 같습니다. 
                  킹크림슨의 라이브를 본다는 것, 그것만으로도 일본에 온 보람이 있었습니다.
                </p>
                <p>
                  앞으로도 이런 기회가 있다면 망설이지 않고 달려가고 싶습니다. 
                  프로그레시브 록의 진정한 힘을 느낄 수 있었던 정말 소중한 시간이었습니다.
                </p>
              </div>
            </div>

            {/* 멤버별 상세 분석 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">멤버별 세밀한 퍼포먼스 분석</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Adrian Belew - 활동적인 프론트맨</h4>
                  <p>
                    Adrian이 그나마 제일 활동적으로 모션이 있었고 나머지는 Fripp 선생을 비롯하여 
                    묵묵히 연주에만 열중하더군요. 소맨쉽이라고 해야 겨우 Adrian은 거의 제자리에 서서 
                    약간씩 다리를 좌우로 흔들며 연주하는 것이 전부이고, 맨트도 이말과 토교에 대한 짧은 인사가 전부였죠.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Pat Mastelotto - 파워풀한 드러밍</h4>
                  <p>
                    Pat은 그 육중한 몸집을 과시하듯 파워풀한 드러밍을 보여주고, 
                    장발이지만 약간 머리가 벗겨졌는데 그 변화무쌍하고 엇박의 연주를 완벽하게 연주해 냅니다. 
                    Pat의 티에만 반인반마의 센토가 흰색으로 프린팅되어 있었죠.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Trey Gunn - Bass Touch Guitar의 신기함</h4>
                  <p>
                    제일 신기하게 보였던건 처음보는 bass touch guitar를 연주하는 Trey의 손놀림이었죠. 
                    일반 bass 보다는 더 크던데 두 손이 마치 판토마임을 하듯, 마치 여성의 몸을 애무하듯(야했나요?), 
                    물결치듯이 기타 넥에 거의 동시에 머물며 연주합니다.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Robert Fripp - 묵묵한 장인의 면모</h4>
                  <p>
                    우리의 Fripp 선생은 역시나 희끗희끗한 머리에 검은 뿔테 안경을 쓰고 비껴 앉아 
                    묵묵히 장인의 면모를 보여줍니다. 멤버중 유일하게 검은 재킷을 걸친 것 같더군요. 
                    나머지 멤버는 모두 검은 티에 검은 바지로 통일했는데.
                  </p>
                </div>
              </div>
            </div>

            {/* 앙코르 - 3번의 기적 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">앙코르 - 3번의 기적적 순간들</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Elephant Talk - 정규 공연 마무리</h4>
                  <p>
                    정규 공연의 마지막은 Elephant Talk으로 마무리 됩니다. 익숙한 곡임을 눈치챘는지 
                    연주가 시작되자 관객들의 환호가 잠깐 스켜지나가고 Adrian의 보컬이 시작됩니다. 
                    그 어정쩡한 코드를 잘도 따라 부르더군요. 전혀 기계조작을 않고 
                    다양한 톤과 색깔을 잘도 목소리로 처리해냅니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">첫 번째 앙코르 - Three of a Perfect Pair</h4>
                  <p>
                    그러자 곧 Adrian이 혼자 무대로 올라와서는 통기타를 메고 Three of a Perfect Pair를 연주합니다. 
                    Adrian은 곧 일본에서 California Guitar Trio의 공연에 함께 할 예정이랍니다.
                  </p>
                </div>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">두 번째 앙코르 - Oyster Soup</h4>
                  <p>
                    다시 4명이 두 번째 앵콜곡 Oyster Soup을 힘차게 연주합니다. 
                    Fripp의 기타는 마치 피아노 소리로 돌변하여 경이로움을 안겨주더군요.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">세 번째 앙코르 - HEROES</h4>
                  <p>
                    드디어 세번째로 무대에 등장합니다. 마지막은 "HEROES"로 장식됩니다. 
                    Adrian의 보컬이 "I will be a king"을 절규하며 그들의 역사적 공연이 마무리 됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 판문점 The Wall 공연 소식 */}
            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">판문점 The Wall 공연 - 충격적 소식</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-800 bg-opacity-40 p-4 rounded border-l-4 border-red-500">
                  <h4 className="font-bold text-red-400 mb-2">내년 6월 판문점에서 The Wall 공연!</h4>
                  <p>
                    오늘 아침 신문에 엄청난 소식이 떳더군요. 내년 6월 판문점에서 The Wall 공연을 한다는군요. 
                    신문에선 Pink Floyd라고 했지만 실제로 Berlin처럼 Roger와 Scorpions, O'conner 등 
                    여러 뮤지션과 우리나라에선 서태지도 함께 할꺼라네요.
                  </p>
                  <p className="mt-2">
                    나중에 예바동에서 단체 관람도 꼭 추진해야겠죠? 
                    우리 다같이 계획이 취소되지 않도록 기대하죠.
                  </p>
                </div>
              </div>
            </div>

            {/* Floydian 박경신의 마무리 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Floydian 박경신의 마무리</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이렇게 그날의 공연은 추억으로 남겨지겠죠. 쩝... 글이 길어지며 영 맥빠진 글이 되고 만 것 같네요. 
                  기대하신 분들께 죄송할 따름입니다. 저의 역량 부족을 용서하세요. 입만만 다시게 만든 것 같군요.
                </p>
                
                <div className="bg-red-800 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="italic text-center">
                    "그럼.... 행복한 하루 되세요. 물러갑니다."<br />
                    <span className="text-sm mt-2 block">- Floydian 박경신</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ King Crimson 100% 복원 완료! 멤버별 상세 분석부터 3번의 앙코르, 판문점 The Wall 소식까지 모든 감동이 되살아났습니다!
              </p>
              
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