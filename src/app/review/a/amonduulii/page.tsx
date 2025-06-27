import Link from "next/link";

export default function AmonDuulIIPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Amon Duul II</h2>
        
        <div className="space-y-6 leading-relaxed">
          {/* 첫 번째 리뷰어 */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-600 mb-3">[Ork-Man, 장민수, jangms@mobi.etri.re.kr]</p>
            
            <h3 className="text-xl font-semibold mb-3">Kosmiche Musik. Amon Duul II - Tanz Der Lemminge</h3>
            
            <div className="space-y-3">
              <p>독일의 프로그레시브 락은 참 촌시럽고 둔탁하다. 전 이런 생각을 가졌었습니다. Amon Duul II의 <strong>Phallus Dei</strong>, <strong>Yeti</strong>, <strong>Tanz Der Lemminge</strong>, Wallenstein의 <strong>Mother Universe</strong>, Grobschnitt의 <strong>Solar Music Live</strong> 등이 그런 생각을 갖게 한 주범들이지요. 특히 그 독일어 발음의 자유분방한(?) 보컬은 참으로 듣기 민망할 정도. :-)</p>
              
              <p>어쨌든 그러던 차에 구색 맞추기의 일환으로 구한 Ash Ra Tempel의 데뷔 앨범과 Agitation Free의 <strong>Last</strong>는 독일 음악에 대한 새로운 흥미거리를 제공해 주었습니다. 바로 <strong>Cosmic Trip & Inner-Space Trip</strong> 입니다.</p>
              
              <div className="bg-white p-3 rounded border-l-2 border-green-500">
                <p className="font-medium">특징적 사운드</p>
                <p>20분이 넘게 공간을 부유하는 신디사이저, 드럼, 전기 기타의 음향은 말 그대로 듣는 이의 정신을 '공간'에 머물게 합니다. 또 드믄드믄 터져 나오는 불같은 합주는 듣는 기쁨을 배가시켜 주지요.</p>
              </div>
              
              <p>그런데 구석 자리를 차지하고 있던 Amon Duul II의 <strong>Tanz Der Lemminge</strong>에 이런 곡이 수록되어 있을 줄은 몰랐지요. 3, 4, 5번 곡이 바로 여행객을 위한 곡들입니다.</p>
            </div>
          </div>

          {/* 두 번째 리뷰어 */}
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-sm text-gray-600 mb-3">[이상현, amondull, 93.8]</p>
            
            <h3 className="text-xl font-semibold mb-3">밴드의 역사와 배경</h3>
            
            <div className="space-y-3">
              <p>88년 9월25일 그 당시 '한시의 데이트'에서는 그룹 '아몽듈 쯔바이'의 최고 걸작중에 하나로 평가되는, 앨범 <strong>Wolf City</strong> 전곡 감상 특집이 방송되었습니다. 그 후로 90년 12월 초와 중순에 걸쳐 새로 이름을 바꾼 'FM 25시'에서 다시 한번 '아몽듈 쯔바이'의 앨범 전곡 감상 특집을 하므로써 국내에서도 '아몽듈'이라는 이름이 낯설지 않게 되었으며, 그들을 아끼고 사랑하는 Art Rock 매니아들이 폭발적으로 증가하게 되었습니다.</p>
              
              <div className="bg-white p-3 rounded border-l-2 border-blue-500">
                <p className="font-medium">결성 배경 (1967년 뮌헨)</p>
                <p>아몽듈은 1967년 뮌헨에서 결성된 음악공동체로서 11명의 어른들과 2명의 아이들로 구성되어 있었습니다. 이들은 음악뿐만이 아니라, 생활 그 자체를 함께 꾸려 나가는 가족화 집단으로 지속되기를 원했으나, 음악을 통한 현실참여와 순수 예술을 위한 음악 행위라는 예술과 문학에 있어 가장 첨예하게 대립되는 명제에 부딪혀 결국 두개의 그룹으로 나뉘어지게 됩니다.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-700">Amon Duul I</h4>
                  <p className="text-sm">음악을 정치 도구화해야 하며 궁극적으로는 더 나은 세상을 위해 인민들을 계몽하는데 사용되어야 한다고 주장하던 Rainer Bauer와 Leopold 형제들을 주축으로 하는 그룹. 단 두장의 앨범을 남기고 우리들의 기억속에서 멀어져감.</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-700">Amon Duul II</h4>
                  <p className="text-sm">단지 음악은 음악일뿐 사회 변혁을 위한 도구가 되어서는 안된다는 예술 지상주의를 옹호하던 'Chris Karrer'를 중심으로 결성. 81년까지 14장의 공식앨범을 발표하며 아트락을 사랑하는 만인의 가슴속에서 영원히 살아 숨쉬는 그룹으로 남게 됨.</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded border-l-2 border-yellow-500 mt-4">
                <p className="font-medium">음악적 성과</p>
                <p>그들식의 음악을 행하던 대부분의 그룹들이 단지 한두장의 앨범을 가지고 있는데 반해서 '아몽듈 쯔바이'는 무려 22장이라는 많은 앨범을 발표했으며 몇몇 앨범들은 어느 정도 상업적인 성공을 거두기도 했습니다.</p>
              </div>
            </div>
          </div>

          {/* 앨범 분석 */}
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
            <h3 className="text-xl font-semibold mb-3">Phallus Dei (데뷔 앨범, 1969)</h3>
            
            <div className="space-y-3">
              <p>락음악사에서 가장 중요한 위치를 차지하게 되는 앨범들이 유독 많이 쏟아졌던 1969년에 독일 그룹 '아몽듈 쯔바이'는 그들의 또다른 그룹 '아몽듈 아인스'와의 차별성을 분명히 드러낸 데뷔 걸작 <strong>Phallus Dei</strong>를 발표하게 됩니다.</p>
              
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold mb-2">음악적 특징</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>독일 Rock계에서도 가장 먼저 락 음악에 재즈를 도입한 그룹</li>
                  <li>영미권의 락음악을 가장 먼저 탈피한 그룹</li>
                  <li>프랑스 그룹인 'Gong'과 'Magma'와 견줄 수 있는 풍부한 실험성</li>
                  <li>싸이키델릭과 프리 재즈의 영향을 받은 현란한 연주</li>
                  <li>아프리카의 토속 리듬을 받아들인 원시적인 분위기</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-500">
                <p className="font-medium">타이틀 곡 'Phallus Dei' (20분 45초)</p>
                <p>보컬의 발성법은 일반적으로 우리들에게 들려지는 방식에서 많이 벗어나 있으며 - 특정나라의 언어로 불려지고 있는것 같지는 않으며 이들의 외침은 마치 동물의 울음소리와 흡사하다 - 한번 듣으면 쉽게 잊혀지지 않는 마력을 지니고 있는 멋진 곡입니다.</p>
              </div>
            </div>
          </div>

          {/* Tanz der Lemminge 앨범 */}
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold mb-3">Tanz der Lemminge (나그네 쥐의 춤, 1971)</h3>
            
            <div className="space-y-3">
              <p>71년도에 더블 앨범으로 발표된 아몽듈 쯔바이(Amon Duul II)의 세번째 앨범입니다. 이 앨범으로 아몽듈 쯔바이는 평론가들로부터 뜨거운 찬사를 받아왔던, 그들의 음악안에 담으려 노력했던 '새로움과 독창성'이라는 그들 나름대로의 음악정신에 가장 강렬한 빛을 발하게 됩니다.</p>
              
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold mb-2">평론가 반응</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Melody Maker</strong>: "세계의 음악 무대를 점유한 최초의 독일 그룹"</li>
                  <li><strong>New Musical Express</strong>: "독일 Rock을 빛내는 것들 중에서도 가장 훌륭한 것"</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded mt-3">
                <h4 className="font-semibold mb-2">그룹명의 유래</h4>
                <p>옛 이집트의 태양신인 <strong>Amon</strong>과 터키어로 'fiction'을 나타내는 명사를 합성해서 얻은 그룹명을 사용했던 아몽듈 쯔바이는 69년도에 그들의 데뷔 앨범인 'Phallus Dei'가 발표되었을때 '독일의 옛 서정시를 인용한 가사를 삽입, 독일인의 낭만을 잘 표현했다'는 평가를 받게 됩니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 