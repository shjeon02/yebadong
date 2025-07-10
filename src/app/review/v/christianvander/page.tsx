"use client"

import Link from "next/link"

export default function ChristianVanderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Christian Vander</h1>
            <p className="text-lg text-gray-600">
              Magma의 리더, 전위 록의 혁신가
            </p>
          </div>

          {/* A Tous Les Enfants Album Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Tous Les Enfants (1994)</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  o r k m a n, 장민수
                </span>
                <span className="text-gray-500 text-sm ml-2">cats@gw2.hyundai.co.kr</span>
              </div>
              <div className="mb-4">
                <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                  1994, Seventh Records A XVI
                </span>
                <span className="ml-2 text-sm text-gray-600">CD + BOOK</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`어린 시절에 우리는 많은 이야기들을 마음 속에 간직하고 있었습
니다. 눈에 보이는 모든  것들은 아이들에게 이야기를 전합니다. 
모든 물건들이 아이들의 세계를  이루는 궁전의 장식품들이 됩니
다. 종이 위의 선 몇가닥이  그들의 친구가 되기도 하고... 어린 
시절의 내 세계는 지금처럼 게으르지 않았습니다.

CD 한장과 CD 케이스 크기만한  작은 동화책 한권으로 그는 우리
의 눈앞에서  세상의 베일이 벗겨지기 전  우리가 보았던 세계의 
모습을 속삭여 줍니다. 이 속삭임은 줄곧 신비와 환상을 불러 일
으키는 화성으로 일관하는데,  스텔라 반데(Stella Vander)와 쥴
리 반데(Julie Vander)와  이사벨(Isabelle Feuillebois)이 부르
는 멜로디들은 모두 이러한  신비한 푸른빛으로 둘러쌓여 있습니
다. 각곡들은 대개 짧은 동요 멜로디에 기초하고 있으며, 대부분
의 곡들은 Offering의 93년도 작품인 A Fiieh의 연장선상에 있는 
분위기를 드러내고 있습니다. 매우 '섬세하고', 감성에 호소하는 
바가 많은 음악이지요.`}
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">참여 아티스트</h3>
              <div className="space-y-2 text-gray-700">
                <div><strong>Christian Vander</strong> - 작곡, 연주</div>
                <div><strong>Stella Vander</strong> - Vocals</div>
                <div><strong>Julie Vander</strong> - Vocals</div>
                <div><strong>Isabelle Feuillebois</strong> - Vocals</div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">음악적 특징</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`크리스티앙 반데의 음악은 A Fiieh를 기점으로 새로운 음악 세계
로  들어서고 있는  듯  합니다.  A Fiieh와  함께  A Tous  Les 
Enfants는 그의 새로운 음악적 표현 방식을 접할 수 있는 뛰어난 
작품입니다. 그의 음악이 오랫동안 추구해 온 본질(그게 어떤 것
이든...)에 좀  더 다가간 성숙한 표현력,  정제된 표현 방식... 
을 간직한 작품이라고 생각됩니다.`}
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">앨범 구성</h3>
              <div className="prose text-gray-700 text-sm">
                <p>
                  이 앨범은 CD 한 장과 함께 CD 케이스 크기의 작은 동화책이 포함된 특별한 구성입니다. 
                  크리스티앙 반데가 어린이들을 위해 만든 이 작품은 동요 멜로디를 기반으로 하면서도 
                  그만의 독특한 음악 세계를 보여줍니다.
                </p>
                <p className="mt-2">
                  각 곡들은 짧은 동요의 형태를 취하고 있지만, 신비로운 화성과 환상적인 분위기로 
                  어른들에게도 깊은 감동을 전달합니다.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
              <p className="text-sm text-gray-600 italic">
                1995/7/9/o r k m a n
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/v" className="text-blue-600 hover:text-blue-800 font-medium">
              ← V 목록으로 돌아가기
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