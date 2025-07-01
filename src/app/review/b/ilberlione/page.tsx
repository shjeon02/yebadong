"use client";
import Link from "next/link";

export default function IlBerlioneReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Il Berlione</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Japan</p>
              <p><strong>장르:</strong> RIO, Progressive Rock, Jazz Rock</p>
              <p><strong>특징:</strong> 캔터베리 사운드와 재즈락 기반</p>
            </div>
            <div>
              <p><strong>대표작:</strong> Il Berlione (Belle Antique 9229)</p>
              <p><strong>음악적 성격:</strong> 블루지 RIO, 리드미컬한 구성</p>
            </div>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">앨범: Il Berlione</h2>
          <p className="text-sm text-gray-600 mb-4">Belle Antique 9229</p>
          
          <div className="bg-white p-4 rounded border">
            <h3 className="font-bold mb-3">Track List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div>
                <p>1. Electrostatic Hotel (정전기 호텔)</p>
                <p>2. A Triple Role (일인 삼역)</p>
                <p>3. Fuseimyaku</p>
                <p>4. The Etude Composed Of All Rests Only For Drummer</p>
                <p>5. Lama</p>
                <p>6. The Stomach-ache</p>
              </div>
              <div>
                <p>7. The Engei : Rasterman Bolero</p>
                <p>8. Continuing : The Engei : Tin-Peewee</p>
                <p>9. Make You Die, Your Brain</p>
                <p>10. Kouenji, Memories In The Rain</p>
                <p>11. Battle Royal Hostess</p>
                <p>12. Dancing Rest</p>
              </div>
            </div>
          </div>
        </div>

        {/* 첫 번째 리뷰어 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">Oak-Man (장민수)</h3>
            <p className="text-sm text-gray-600 mb-4">jangms@mobi.etri.re.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3">일본 프로그레시브 록의 현황</h4>
                <p>
                  우리나라에선 아직 일본의 프로그레시브 락이 널리 알려지지 않았지만, 세계적으로 일본의 프로그레시브 락은 어느정도 인정을 받고 있고, 
                  특히 <strong>Kenso, Mugen, Providence, Ain Soph, Outer Limits, Lacrymosa</strong> 등은 수준급 프로그레시브 그룹으로서 
                  프로록 팬들의 사랑을 받고 있습니다.
                </p>
                
                <p>
                  이중 Kenso, Ain Soph, Lacrymosa는 <strong>캔터베리 사운드와 재즈락에 기반을 둔 밀도높은 연주</strong>를 들려준다고 하는데요
                  (전 아직 못 들어봤거든요!:-)), 이러한 전통에 당당히 등장한 또하나의 훌륭한 그룹이 바로 <strong>Il Berlione</strong> 입니다.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-3">음악적 특징</h4>
                <div className="space-y-3">
                  <p>
                    이들의 음악을 제 느낌으로 표현하면 <strong>'블루지 RIO'</strong> 라고나 할까요? :) 
                    그리고, 이들의 음악은 매우 재미있습니다. 한번 재미를 느끼면 아주 즐거워지지요 :)
                  </p>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">두 가지 음악적 영역</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li><strong>RIO 기반 영역:</strong> 난해하고 반복적인 프레이즈</li>
                      <li><strong>합주 영역:</strong> 블루지하고 불처럼 타오르는 연주</li>
                    </ul>
                  </div>

                  <p>
                    난해한 코드와 반복적인 리듬으로 분위기를 잡으면서 긴장감을 이끌어가다가 어느 순간 자연스레 기타의 애들립이 합주가 튀어나옵니다. 
                    또 어떤때는 분위기 그윽한 키보드가 배경을 받쳐주는 블루지한 락을 연출하기도 합니다.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">주요 트랙 분석</h4>
                <div className="space-y-4">
                  <p>모든 곡들이 나름대로 수준급이고 인상깊지만, <strong>7, 8, 10, 11번 곡</strong>은 특히 눈에 띄는 개성을 지니고 있습니다.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-bold text-orange-700 mb-2">7, 8번 곡 (The Engei 시리즈)</h5>
                      <p className="text-sm">
                        2부작 구성을 지닌 앙증맞은 곡. <strong>전통 피리와 장난감 피아노</strong> 등을 사용한 악기 편성으로 
                        일본의 전통 음악 분위기를 연출합니다.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded border">
                      <h5 className="font-bold text-orange-700 mb-2">10번 곡 (Kouenji, Memories In The Rain)</h5>
                      <p className="text-sm">
                        전반부에는 <strong>색소폰 연주</strong>가, 후반부에는 <strong>기타 연주</strong>가 리드하는 블루지한 곡. 
                        이들의 음악적 바탕을 엿볼 수 있는 곡이지요.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-l-4 border-orange-400">
                    <h5 className="font-bold text-orange-700 mb-2">11번 곡 (Battle Royal Hostess)</h5>
                    <p className="text-sm">
                      이들의 <strong>연주력이 가장 강력하게 분출</strong>하는 곡입니다. 고도의 테크닉과 와-와를 적절히 사용하는 
                      자유 분방한 기타 연주는 <strong>스티브 바이까지 생각나게</strong> 만듭니다. 
                      곡 구성 또한 RIO라는 말이 연상되는 복잡한 구성을 하고 있고, 다양한 리듬이 실로 자연스럽게 펼쳐집니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">총평 및 추천</h4>
                <div className="space-y-3">
                  <p>
                    대개 RIO계열의 음악은 쉽게 접근하기가 힘들고 또 음악적인 재미를 느끼기도 힘든 경우가 많습니다. 
                    마음먹고 구해놓은 음반을 구석에 밀어놓고 오랫동안 거들떠 보지도 않는 것이지요. :)
                  </p>

                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <p className="font-bold text-green-700">
                      그러나, Il Berlione의 음반은 예외라고 자신있게 말할 수가 있습니다. 
                      들을때마다 새록새록 새로운 재미가 펼쳐지는 것을 느낄 수 있습니다.
                    </p>
                  </div>

                  <p>
                    이 앨범은 일본제 답게 <strong>음질이 뛰어나고</strong>, 또 악기음의 어레인지가 아주 깔끔하게 처리되어 있습니다. 
                    이들의 연주력에 일조하는 중요한 요소들이지요. <strong>이 한장의 음반, 자신있게 추천하는 바입니다!</strong> ;)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 두 번째 리뷰어 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Fish (신인철)</h3>
            <p className="text-sm text-gray-600 mb-4">icshin@chiak.kaist.ac.kr</p>
            
            <div className="space-y-3 leading-relaxed">
              <div className="bg-white p-4 rounded border border-blue-200">
                <p>
                  추천하신 <strong><em>Il Berlione</em></strong>의 CD를 저도 드디어 구해서 들어보았습니다. 정말 멋있네요. 
                  여러분도 꼭 들어보세요. 후회 안하실 멋진 음악.
                </p>
                
                <p className="mt-3">
                  또 이런 멋진 RIO 계열의 음반 또 없나요? 글쎄 <em>Il Berlione</em>가 과연 RIO라고 할 수있는지는 잘 모르겠지만, 
                  Henry Cow 같은 team과는 틀린것 같던데...
                </p>

                <p className="mt-3 font-bold text-blue-700">
                  Wow! Worshipping <em>Il Berlione</em> !!!!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 