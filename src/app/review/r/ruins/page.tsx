"use client"

import Link from "next/link"

export default function RuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ruins
            </h1>
            <p className="text-lg text-gray-600">
              일본 Zeuhl • Tatsuya Yoshida의 드럼/베이스 듀오
            </p>
          </div>

          {/* Band Info */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">Punk Zeuhl의 대표주자</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">결성</div>
                <div>1985년경 (첫 EP 1986년)</div>
              </div>
              <div>
                <div className="font-medium">중심 멤버</div>
                <div>Tatsuya Yoshida (드러머)</div>
              </div>
              <div>
                <div className="font-medium">음악적 영향</div>
                <div>Magma, Zeuhl</div>
              </div>
              <div>
                <div className="font-medium">스타일</div>
                <div>Punk Zeuhl</div>
              </div>
            </div>
          </div>

          {/* Tatsuya Yoshida */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tatsuya Yoshida - 일본 전방위 락의 대부</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  orkman (장민수)
                </span>
                <span className="text-gray-500 text-sm ml-2">jangminsu@yahoo.com</span>
              </div>
              <div className="prose text-gray-700">
                <p>
                  RUINS는 드러머인 Tatsuya Yoshida가 만든 드럼/베이스 듀오 그룹입니다.
                  1986년에 첫 EP를 냈으니 아마 그 일이년 전부터 활동하지 않았을까 싶습니다.
                </p>
                <p>
                  Tatsuya Yoshida는 이제 일본 전방위 락계의 대부가 된 듯 싶은데요, 
                  일단 이 사람의 개인 프로젝트만도 그 수가 꽤 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* Projects & Collaborations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tatsuya Yoshida의 프로젝트들</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">개인 프로젝트</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• YBO2</div>
                  <div>• Akaten</div>
                  <div>• Koenjihyakkei</div>
                  <div>• Zubi Zuva</div>
                  <div>• Korekyojin</div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">서양 뮤지션과의 협연</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• John Zorn</div>
                  <div>• Derek Bailey</div>
                  <div>• 기타 다수 음악가들</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bass Players History */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">베이시스트 변천사</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <strong>첫 EP (1986):</strong> Kimoto Kazuyoshi (키모토 카츠요시)
                </div>
                <div>
                  <strong>이후 협력:</strong> Masuda Ryuichi (마스다 류이치), 
                  Kawamoto Hideki (카와모토 히데키), 
                  Sasaki Hisashi (사사키 히사시) 등 여러 베이시스트
                </div>
              </div>
            </div>
          </div>

          {/* Magma Connection */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Magma와의 연결</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-orange-800 mb-2">열렬한 Magma 팬</p>
                <p>
                  RUINS와 Tatsuya Yoshida의 음악은 한번 들어보면 단번에 프랑스의 마그마에
                  뿌리가 있음을 알 수 있죠. 그 광폭한 베이스 울림 말예요. 
                  거기에 코바이아어를 흉내낸 듯 한 의사 언어를 사용한다는 점도 말이죠.
                </p>
                <p>
                  실제로 Tatsuya Yoshida는 마그마의 열렬 팬입니다. 
                  이년 전인가엔 일본 쥴/RIO 계열 밴드 멤버들을 규합해서
                  마그마 카피 공연을 하기도 했지요. 또 마뀌(Marquee)지에 마그마 관련 기사들을
                  쓰기도 한 것으로 알고 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Musical Differences from Magma */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Magma와의 차이점</h2>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-cyan-800 mb-2">Punk Zeuhl의 탄생</p>
                <p>
                  Koenjihyakkei의 곡명들을 보면 또한 마그마의 단서를 잡아낼 수 있죠. 
                  Ioss, Zhess 등. 하지만 Tatsuya와 RUINS의 음악은 마그마의 음악과 
                  외형은 비슷할 지 모르나 내용은 별로 공유되는 면이 없습니다.
                </p>
                <p>
                  마그마의 음악은 절제와 승화를 목적지로 삼고 열심히 달리는
                  음악인데 반해 RUINS의 음악은 전적으로 발산하고 공격하는 음악입니다. 
                  그래서 RUINS의 음악을 들어 펑크 줄(Punk Zeuhl)이라 부르기도 하지요.
                </p>
              </div>
            </div>
          </div>

          {/* Musical Evolution */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 발전</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-teal-800 mb-2">90년대 중반 이후의 변화</p>
                <p>
                  하지만 최근에 발표된 Tatsuya와 RUINS의 앨범들을 들어보면 
                  90년대 초반보다 풍부해진 무엇인가를 느낄 수가 있습니다. 
                  곡의 구성미, 울림의 풍부함. 
                  95년에 발표된 HYDEROMASTGRONINGEM 앨범부터 보인 모습이죠.
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">최근 활동</h2>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Derek Bailey와의 협연</h3>
                <div className="text-sm text-gray-700">
                  실험적 기타리스트 Derek Bailey와의 자유 즉흥 협연
                </div>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Korekyojin</h3>
                <div className="text-sm text-gray-700">
                  Bondage Fruit의 기타 주자인 키도 나츠키(Kido Natsuki)와 함께 
                  Korekyjin이란 밴드명으로 앨범 발표
                </div>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-3">RUINS Symphonica</h3>
                <div className="text-sm text-gray-700">
                  겐조(Kenso)의 키보디스트였던 오구치 겐이치(Oguchi Kenichi)와 
                  두명의 여성 보컬을 영입한 놀라운 라인업의 RUINS로 
                  Symphonica라는 앨범을 발표
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Albums */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">추천 앨범</h2>
            
            <div className="bg-emerald-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">장민수 추천 목록</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div><strong>RUINS:</strong></div>
                <div>• HYDEROMASTGRONINGEM</div>
                <div>• SYMPHONICA</div>
                <div>• VRRESTO</div>
                <div className="mt-3"><strong>KOENJIHYAKKEI:</strong></div>
                <div>• I</div>
                <div>• II</div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">관련 링크</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-sm text-gray-700">
                <a href="http://www.geocities.co.jp/Hollywood-Kouen/9347/ruins.html" 
                   className="text-blue-600 hover:text-blue-800 underline">
                  http://www.geocities.co.jp/Hollywood-Kouen/9347/ruins.html
                </a>
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-blue-800 mb-2">일본 Zeuhl의 독창적 해석</p>
                <p>
                  Ruins는 Tatsuya Yoshida를 중심으로 한 일본의 대표적 Zeuhl 밴드로, 
                  Magma에서 영감을 받았지만 완전히 다른 접근법을 보여준다. 
                  절제와 승화를 추구하는 Magma와 달리 발산과 공격성에 중점을 둔 
                  "Punk Zeuhl"이라는 독특한 스타일을 창조했다. 
                  Tatsuya Yoshida는 일본 전방위 락계의 대부로서 수많은 프로젝트를 통해 
                  실험적 음악의 경계를 확장하고 있으며, 
                  Derek Bailey, John Zorn 등 서양 뮤지션들과의 협연을 통해 
                  국제적으로도 인정받는 혁신적 아티스트다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 목록으로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 