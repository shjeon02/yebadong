"use client"

import Link from "next/link"

export default function RealeAccademiaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Reale Accademia Di Musica
            </h1>
            <p className="text-lg text-gray-600">
              이탈리아 프로그레시브 • 1st Album
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">목가적 이탈리아 프로그레시브</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">특징</div>
                <div>"목가적인" 사운드</div>
              </div>
              <div>
                <div className="font-medium">뿌리</div>
                <div>Hard Rock 기반</div>
              </div>
              <div>
                <div className="font-medium">평가</div>
                <div>8/10 (희귀성으로 과대평가된 면 있음)</div>
              </div>
              <div>
                <div className="font-medium">추천 청중</div>
                <div>서정적/전원적 음악 추구자에게는 비추천</div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">리뷰</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  이동훈
                </span>
                <span className="text-gray-500 text-sm ml-2">meddle@nuri.net</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`reale accademia di musica - 1st   8/10
이 앨범에 대한 수식어 중에서 가장 빈번하게 사용되는
단어는 아마도 "목가적인"일 것입니다. 하지만 근본적
으로  hard rock에 뿌리를 두고 있기 때문에 서정적이고
전원적인 음악을 원하시는 분들에게 내놓고 추천할 수
있는 음반은 절대 아닙니다.`}
              </div>
            </div>
          </div>

          {/* Critical Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">비판적 평가</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">과대평가 논란</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`또한 Italian progressive rock의 전반적인 수준을 고려한다면 '명반'이란 칭호가
아까운, 역시 희귀성으로 인해서 overrated된 작품이기도
합니다.
전 사실 전영혁의 음악세계, 성시완의 디스크쇼, 음악이
흐르는 밤의... 등등의 프로그 라디오 방송의 거의(전혀)
들어본 일이 없기 때문에 padre에 대한 '추억'은 없습니다.
따라서 연장자들의 reale accademia di musica에 대한
추억이 저에게는 무의미하게 다가옵니다. ^^`}
              </div>
            </div>
          </div>

          {/* Key Tracks */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">주요 곡</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">Padre</h3>
                <div className="text-sm text-gray-700">
                  들을 만한 곡이지만, 라디오 방송을 통한 '추억'이 없어 객관적 평가 가능
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Il Mattino (가장 인상적인 곡)</h3>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`padre도 들을만한 곡이지만 가장 인상적인 곡은 2번째
il mattino입니다. 초반부의 서정적인 어쿠스틱 피아노와
나른한 보컬, 후반부의 힘찬 연주가 전혀 어색하지 않게
혼합된 곡입니다.`}
                </div>
              </div>
            </div>
          </div>

          {/* Italian Progressive Context */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">이탈리아 프로그레시브 맥락</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">1급 밴드들과의 비교</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`이태리 프로그레시브록에는 reale accademia... 보다
훌륭한 작품들이 많이 존재하며, 저를 비롯한 초심자들은
banco, pfm, le orme, area, stormy six등의 1급 밴드들의
음악을 먼저 접해야 한다고 생각합니다.`}
              </div>
              
              <div className="mt-4 p-4 bg-white rounded border-l-4 border-red-500">
                <div className="text-sm text-gray-600">
                  <strong>추천 이탈리아 프로그 밴드:</strong> Banco, PFM, Le Orme, Area, Stormy Six
                </div>
              </div>
            </div>
          </div>

          {/* Additional Review - Japanese Compilation */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">부가 리뷰</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">70's West Japanese Rock Scene (7/10)</h3>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`made in japan에 의해서 91년에, belle antique에 의해서
94년에 재발매된 japanese hard/prog 앨범입니다.
원 제작자인 made in japan의 구미에 맞는 novela풍의
하드록이 대부분을 차지하고 있습니다. 따라서 가사가
많고, 웬지 모르게 허풍떠는 듯한 사운드와 허술한 연주가
듣는이의 가슴을 아프게 하는 - 돈생각 나서 ^^ - 짜증나는
컴파일레이션입니다. 그나마 좀 한다는 scheherazade의
연주 역시 2류 melodic symph에 머무르고 있습니다.
이제까지 구입한 일본 프록 앨범 중에서 최악~`}
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-orange-800 mb-2">객관적 평가</p>
                <p>
                  희귀성과 라디오 방송을 통한 추억으로 과대평가된 면이 있지만, 
                  "Il Mattino" 같은 곡에서는 어쿠스틱 피아노와 나른한 보컬, 
                  그리고 후반부의 힘찬 연주가 조화를 이룬 수작을 보여준다. 
                  다만 이탈리아 프로그레시브의 1급 밴드들에 비해서는 아쉬운 작품이다.
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