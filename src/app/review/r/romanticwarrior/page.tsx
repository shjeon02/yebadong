"use client"

import Link from "next/link"

export default function RomanticWarriorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Romantic Warrior</h1>
            <p className="text-lg text-gray-600">Battlefield - Vinyl Magic '90 New Prog Series</p>
          </div>

          {/* Review */}
          <div className="space-y-8">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <div className="flex items-center mb-4">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">Fish 신인철</span>
                <span className="ml-3 text-sm text-gray-600">icshin@chiak.kaist.ac.kr</span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Romantic Warrior / Battlefield</h3>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Vinyl Magic '90 New Prog Series</h4>
                      <p>
                        잘아시는 <strong>Vinyl Magic</strong>에서 Calliope등과 함께 <strong>'90 new prog series</strong>의 일환으로 발매한 앨범입니다. 
                        똑같은 모양의 jewel case만 계속 보아온 터라 저는 <strong>Digipack style의 CD</strong>에는 이상하게 호감이 가는데요.
                      </p>
                      <p className="mt-2">
                        이 앨범 역시 속의 내용을 궁금하게 만드는 <strong>multiple gatefolder digipack</strong>으로 되어있더군요. 
                        또 CD의 크기에 딱 맞는 알록달록한 이쁘게 그려진 <strong>기타들고 달리는 기사의 그림</strong>.. 
                        아마 조금 비싼 가격에 신세대 음악 그래도 나라도 사주어야지.. 하는 기분에 집어들었읍니다.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">One Man Project의 한계</h4>
                      <p>
                        우... <strong>Italy 3류 Mafia의 퇴물 똘마니 아저씨?</strong> 같은 분위기를 풍기는 이름이 잘 기억 안나는 아저씨의 <strong>one man project</strong> 더군요.. 
                        <strong>Anthony Quinn 닮은 할아버지</strong>.. 이런저런 개성이 별로 없어보이는 군상들을 긁어모아 앨범을 만든듯한 분위기 였읍니다.
                      </p>
                      <p className="mt-2">
                        음악도 그 Anthony Quinn닮은 할아버지가 연주하는 <strong>acordion소리가 독특한 곡</strong>을 제외하면 대부분이.. 
                        언젠가 누군가 연주했던 스타일을 흉내내는듯한 <strong>재미없는 스타일</strong>이더군요..
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">현대 이탈리아 음악의 아쉬움</h4>
                      <p>
                        요즘의 Italy음악들은 나름대로 전통을 잘 살리는 팀도 있지만:
                      </p>
                      <ul className="mt-2 space-y-1">
                        <li>• <strong>Marillion을 닮기 위해</strong> 팀 이름에서부터 노력하는 Black Jester, Jester' Joke 등</li>
                        <li>• 켄 굴덴 아저씨의 광고처럼 Il Balletto Di Bronzo 등의 전통을 살리기 보다는</li>
                        <li>• <strong>미국의 neo-prog fanatic을 노리는 듯한</strong> sound의 Il Trono Dei Ricordi</li>
                        <li>• 또 이 Romantic Warrior 등등..</li>
                      </ul>
                      <p className="mt-2">
                        <strong>이태리의 독특한 냄새를 가지고 있지 못한 친구들</strong>이 좀 많은것 같아 섭섭하네요..
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 mb-2">개인적 소감</h4>
                      <p className="italic">
                        Just my 200 won,
                      </p>
                      <p className="mt-2 text-xs text-gray-600">
                        - Fish의 솔직한 리뷰 -
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Context */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">앨범 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>레이블:</strong> Vinyl Magic
                </div>
                <div>
                  <strong>시리즈:</strong> '90 New Prog Series
                </div>
                <div>
                  <strong>패키지:</strong> Multiple Gatefolder Digipack
                </div>
                <div>
                  <strong>국가:</strong> 이탈리아
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                함께 발매된 시리즈: Calliope 등과 함께 90년대 신진 프로그레시브 록 시리즈로 기획됨
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 폴더로 돌아가기
            </Link>
            <div className="text-gray-500 text-sm">
              이탈리아 Neo-Prog - 전통을 잃어버린 아쉬움
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 