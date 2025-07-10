"use client"

import Link from "next/link"

export default function RedJasperPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Red Jasper
            </h1>
            <p className="text-lg text-gray-600">
              영국 프로그레시브 • A Midsummer Night's Dream & A Winter's Tale
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">90년대 Medieval Progressive</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">리더</div>
                <div>David Dodds (보컬리스트)</div>
              </div>
              <div>
                <div className="font-medium">장르</div>
                <div>Progressive Rock</div>
              </div>
              <div>
                <div className="font-medium">특징</div>
                <div>Medieval 사운드</div>
              </div>
              <div>
                <div className="font-medium">앨범</div>
                <div>3집, 4집 (A Midsummer Night's Dream, A Winter's Tale)</div>
              </div>
            </div>
          </div>

          {/* Discovery Story */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">발견 과정</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Fish (신인철)
                </span>
                <span className="text-gray-500 text-sm ml-2">icshin@chiak.kaist.ac.kr</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`얼마전 Marillion ML에서 만난 친구가 입에 거품을 물고 칭찬하는 팀이 있었읍니
다.. "야 !! Red Jasper라고 들어 봤니 ? 정말 끝내준다 !!" "그렇게 좋아 ? 누
구는 그냥 허접한 Marillion clone이라고 하든데 뭐 Galahad나 Aragon 같은 애들 
말야.." "음.. 나의 의견은 틀려 .. Red Jasper는 말이지.. Jethro Tull의 '90년
대 version이라고 할까.. 하여튼 그 medieval 적 sound가 거의 환상적이다.. "`}
              </div>
            </div>
          </div>

          {/* Album Purchase */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 구매와 기대</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`또 귀가 얇은 나는 그 친구의 말에 혹해서 Red Jasper의 세 번째 앨범 'A midsu-
mmer night's dream '과 네번째 앨범 'A Winter's Tale' 두 장의 앨범을 속는 셈 
치고 얼마전 구했읍니다. 배달이 되기를 기다리는 동안 ArtRock지를 사보니 신보
안내인가 하는 구석에 전정기 씨던가 이춘식 씨던가의 비교적 호의적인 review로 
본 앨범이 올라있더군요..`}
              </div>
            </div>
          </div>

          {/* First Impressions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">첫 인상과 음악적 특징</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Fish + David Bowie 스타일</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`CD를 player에 올려놓는 순간 저는 탄성을 질렀죠.. 정말 Artrock 지에서 말한것 
처럼 Fish + David Bowie 네 ... " 마치 Egoband의 Alessandro의 vocal을 듣는것 
처럼 적당히 무게있고 편안한 vocal이 좀 단순하다 싶은 반주를 배경으로 펼쳐지
구요.. 'Crest of a Knave' 시절의 Jethro Tull의 음악이 자꾸 생각나더군요.`}
              </div>
            </div>
          </div>

          {/* Musical Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 분석</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">보컬 특징</h3>
                <div className="prose text-gray-700 text-sm">
                  이 영국의 David Dodds라는 신생 prog group Red Jasper의 vocalist는 Fish나 Bowie와는 달리 high pitch가 자연스럽지 못하고 좀 어색한 느낌을 준다.
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">기타 연주</h3>
                <div className="prose text-gray-700 text-sm">
                  David Gilmour나 Marillion의 Steven Rothery를 닮은 guitar play는 좀 구태의연한 면이 없지않아 있지만 전체적으로 무척 훌륭하다.
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with Other Bands */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">다른 밴드와의 비교</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">논란의 여지</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• "허접한 Marillion clone" 의견도 존재</li>
                    <li>• Galahad, Aragon과 같은 평가</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">긍정적 비교</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Jethro Tull의 90년대 버전</li>
                    <li>• Fish + David Bowie 조합</li>
                    <li>• Egoband의 Alessandro 보컬과 유사</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Influences */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 영향</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">Jethro Tull</h3>
                  <div className="text-sm text-gray-700">
                    "Crest of a Knave" 시절의 스타일
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">David Gilmour</h3>
                  <div className="text-sm text-gray-700">
                    기타 연주 스타일의 영향
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-800 mb-2">Steven Rothery</h3>
                  <div className="text-sm text-gray-700">
                    Marillion 기타리스트의 연주법
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Albums */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">리뷰된 앨범들</h2>
            
            <div className="space-y-4">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-pink-800 mb-3">A Midsummer Night's Dream (3집)</h3>
                <div className="text-sm text-gray-700">
                  셰익스피어의 "한여름 밤의 꿈"을 테마로 한 앨범
                </div>
              </div>
              
              <div className="bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-cyan-800 mb-3">A Winter's Tale (4집)</h3>
                <div className="text-sm text-gray-700">
                  겨울 이야기를 다룬 컨셉트 앨범
                </div>
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-gray-800 mb-2">Medieval Progressive의 새로운 시도</p>
                <p>
                  90년대 프로그레시브 씬에서 Jethro Tull의 medieval 사운드를 현대적으로 재해석한 시도작이다. 
                  David Dodds의 보컬이 Fish나 Bowie만큼 자연스럽지는 않지만, 
                  전체적으로 훌륭한 기타 연주와 함께 환상적인 medieval 분위기를 선사한다. 
                  Marillion clone 논란은 있지만, 독창적인 접근법을 보여주는 수작이다.
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