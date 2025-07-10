"use client"

import Link from "next/link"

export default function RSCPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              RSC
            </h1>
            <p className="text-lg text-gray-600">
              폴란드 프로그레시브 • Kansas/Styx 영향의 키보드 록
            </p>
          </div>

          {/* Band Info */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">폴란드 프로그레시브의 미국적 변주</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">활동 시작</div>
                <div>1981년 Rzeszów</div>
              </div>
              <div>
                <div className="font-medium">음악적 영향</div>
                <div>Kansas, Styx</div>
              </div>
              <div>
                <div className="font-medium">데뷔 앨범</div>
                <div>Flyrock (1983)</div>
              </div>
              <div>
                <div className="font-medium">최신 앨범</div>
                <div>Parakletos (1997)</div>
              </div>
            </div>
          </div>

          {/* Band Members */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">멤버 구성</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <div className="font-medium">Wiktor Kucaj</div>
                  <div>Hammond organ, synths</div>
                </div>
                <div>
                  <div className="font-medium">Zbigniew Działa</div>
                  <div>vocal, lyrics</div>
                </div>
                <div>
                  <div className="font-medium">Michał Kochmański</div>
                  <div>drums</div>
                </div>
                <div>
                  <div className="font-medium">Krzysztof Dziuba</div>
                  <div>bass</div>
                </div>
                <div>
                  <div className="font-medium">Tom Kiersnowski</div>
                  <div>harmonica</div>
                </div>
                <div>
                  <div className="font-medium">Waldemar Rzeszut</div>
                  <div>guitar</div>
                </div>
                <div>
                  <div className="font-medium">Andrzej Balawender</div>
                  <div>violin, piano, Fender piano</div>
                </div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">밴드 히스토리</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Piotr Tucholski
                </span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`Started in 1981 in Rzeszów playing rock inspired by American groups: 
Styx and especially Kansas.
Debut album "Flyrock" appeared in 1983 containing a few-minutes songs 
from which some were really good.
In '83 they released cassette "RSC" in same vein as "Flyrock".`}
              </div>
            </div>
          </div>

          {/* Album Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 연표</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Flyrock (1983)</h3>
                <div className="text-sm text-gray-700">
                  데뷔 앨범. 몇 분짜리 곡들로 구성되었으며 그 중 일부는 정말 좋은 곡들이었다.
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">RSC Cassette (1983)</h3>
                <div className="text-sm text-gray-700">
                  Flyrock와 같은 맥락의 카세트 발매
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">해산 기간</h3>
                <div className="text-sm text-gray-700">
                  리더 Wiśniowski가 그룹을 떠나면서 RSC는 록 씬에서 사라졌다.
                </div>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-800 mb-3">재결성 시기</h3>
                <div className="text-sm text-gray-700">
                  <div className="space-y-2">
                    <div><strong>Maraton Rockowy (1995)</strong> - 재활동 첫 앨범</div>
                    <div><strong>Czas Wodnika (1996)</strong> - 록 팬들의 큰 관심을 끌지 못함</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">Parakletos (1997) ★★★★★</h3>
                <div className="text-sm text-gray-700">
                  처음부터 끝까지 훌륭한 음악을 선보인 앨범. 재즈와 블루스 방향으로 흘러가는 발전된 구성
                </div>
              </div>
            </div>
          </div>

          {/* Musical Evolution */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 발전</h2>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">초기 스타일 (1980년대)</h3>
                <div className="text-sm text-gray-700">
                  American groups, 특히 Kansas와 Styx에서 영감을 받은 록 음악. 
                  몇 분짜리 짧은 곡들로 구성되었으며, 그 중 일부는 정말 훌륭한 곡들이었다.
                </div>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Parakletos 시기의 혁신</h3>
                <div className="prose text-gray-700 text-sm">
                  Great guitar, keyboards together with trumpet, tenor sax and vocal 
                  makes the developed compositions beautiful, flowing more in jazzier 
                  and bluessier directions.
                </div>
              </div>
            </div>
          </div>

          {/* Parakletos Album Highlight */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Parakletos - 최고작</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-teal-800 mb-2">재즈와 블루스로의 진화</p>
                <p>
                  1997년에 발표된 "Parakletos"는 RSC가 처음부터 끝까지 훌륭한 음악을 
                  선보인 앨범이다. 훌륭한 기타와 키보드가 트럼펫, 테너 색소폰, 
                  그리고 보컬과 함께 어우러져 발전된 구성의 아름다운 음악을 만들어낸다. 
                  이전의 Kansas/Styx 스타일에서 벗어나 더욱 재즈적이고 블루지한 
                  방향으로 흘러가는 성숙한 음악적 발전을 보여준다.
                </p>
              </div>
            </div>
          </div>

          {/* Polish Progressive Context */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">폴란드 프로그레시브 맥락</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-gray-800 mb-2">동시대 폴란드 밴드들</p>
                <div className="text-sm">
                  <p className="mb-2">
                    Mirek Gil (Collage 기타리스트)이 "Alone" (Ars Mundi '98) 앨범을 발매했으며, 
                    두 명의 다른 Collage 뮤지션들이 녹음에 참여하여 Collage의 멜로딕 스타일에 
                    가까운 앨범을 완성했다.
                  </p>
                  <p>
                    <strong>다른 프로그레시브 포메이션들:</strong> Artrosis (gothic progressive), 
                    Mordor (prog metal), Nemezis (Albion의 Anna Batko와 협력), 
                    Annalist (프로그보다는 록에 가까움)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* International Connections */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">국제적 연결</h2>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="prose text-gray-700 text-sm">
                <p>
                  최근 소식으로는 Colin Bass가 폴란드에서 새 앨범 
                  "An outcast of the islands"를 녹음했다. 
                  Andy Latimer, Dave Steward와 함께 Quidam과 Abraxas의 뮤지션들이 참여했다. 
                  폴란드 뮤지션들이 활발하게 활동하고 있지만, 
                  앞으로 어떤 방향으로 나아갈지는 미래가 보여줄 것이다.
                </p>
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-blue-800 mb-2">폴란드 프로그레시브의 미국적 해석</p>
                <p>
                  RSC는 1980년대 초 Kansas와 Styx의 영향을 받아 시작된 폴란드 프로그레시브 밴드로, 
                  초기에는 미국식 키보드 록의 스타일을 추구했다. 
                  1990년대 재결성 후 발표한 "Parakletos"에서는 재즈와 블루스적 요소를 
                  적극 도입하여 더욱 성숙하고 발전된 음악적 모습을 보여주었다. 
                  폴란드 프로그레시브 씬에서 미국적 스타일을 성공적으로 소화한 대표적인 밴드로 평가된다.
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