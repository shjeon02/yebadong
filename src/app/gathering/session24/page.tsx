'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Session24Page() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#FF9900] mb-4">
            제24회 YBD Special Show of ProgRock Music
          </h1>
          <h2 className="text-2xl text-cyan-400 mb-2">이탈리아 슈퍼밴드 라이브 특집</h2>
          <p className="text-lg text-cyan-300">2000년 8월 12일 (토) 오후 2:30 at Man+</p>
          <p className="text-sm text-gray-400 italic">감상회가 성공리에 끝났습니다.</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8">
            
            {/* Attendees */}
            <div className="mb-12 p-6 bg-gray-800 rounded-lg border border-cyan-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">참석자 명단 (15명)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-cyan-200">
                <div className="space-y-1">
                  <p>• 강창우 (chaw@dreamwiz.com)</p>
                  <p>• 권재륜 (jazznine@intizen.com)</p>
                  <p>• 김남웅 (zao@lge.co.kr)</p>
                  <p>• 김홍대 (actor@hanbat.cnu.ac.kr)</p>
                  <p>• 안병욱 (brave@hdec.co.kr)</p>
                  <p>• 도태영 (kikimomo@hitel.net)</p>
                  <p>• 이석진 (stjiny@mail.taegu.net)</p>
                  <p>• 이창식 (iaramusic@yahoo.com)</p>
                </div>
                <div className="space-y-1">
                  <p>• 이승욱 (marte@intizen.com)</p>
                  <p>• 이강영 (kylee@kias.re.kr)</p>
                  <p>• 이규희 (abraxas@provin.kyonggi.kr) 내외분</p>
                  <p>• 전승훈 (shjeon@yebadong.kaist.ac.kr)</p>
                  <p>• 전혜정 (ponte@freechal.com)</p>
                  <p>• 정영수 (shuai@daeyu.com)</p>
                  <p>• 홍성하 (vail025@samsung.com)</p>
                </div>
              </div>
            </div>

            {/* Track Listing */}
            <div className="space-y-12">
              
              {/* 전승훈 */}
              <div className="border border-blue-400 rounded-lg p-6 bg-blue-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
                  🎹 전승훈 - The Flower Kings & Gnidrolog
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <p className="text-blue-100">
                      <span className="font-bold text-blue-200">1.</span> The Judas Kiss - The Flower Kings 
                      <br />
                      <span className="ml-4 text-blue-300 italic">from "Alive on Planet Earth" (15:43)</span>
                    </p>
                  </div>
                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <p className="text-blue-100">
                      <span className="font-bold text-blue-200">2.</span> Time and Space - Gnidrolog 
                      <br />
                      <span className="ml-4 text-blue-300 italic">from "In Spite of Harry's Toenail" (7:30)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 도태영 */}
              <div className="border border-green-400 rounded-lg p-6 bg-green-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
                  🌟 도태영 - 현대 프로그레시브 3대장
                </h3>
                <div className="space-y-6">
                  
                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌊 Transatlantic</h4>
                    <ul className="text-green-100 space-y-1">
                      <li>1. My New World</li>
                      <li>2. In Held(Twas) In I</li>
                    </ul>
                  </div>

                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌸 The Flower Kings - Space Revolver</h4>
                    <ul className="text-green-100 space-y-1">
                      <li>1. I'm the Sun (part One)</li>
                      <li>2. Rumble Fish Twist</li>
                    </ul>
                  </div>

                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌲 Porcupine Tree</h4>
                    <ul className="text-green-100 space-y-1">
                      <li>Waiting Phase I, II</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 이강영 - Italian Super Bands */}
              <div className="border border-red-400 rounded-lg p-6 bg-red-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">
                  🇮🇹 이강영 - A few live tracks of Italian Super Bands
                </h3>
                <div className="space-y-6">
                  
                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🎸 PFM (Premiata Forneria Marconi)</h4>
                    <p className="text-red-100">
                      My God (6:24) - from "A Celebration Live"
                    </p>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🎹 Banco del Mutuo Soccorso</h4>
                    <p className="text-red-100">
                      750.000 anni fa ... l'amore? (or L'evoluzione) - from "Nudo"
                    </p>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🎵 I Pooh - "Palasport"</h4>
                    <ul className="text-red-100 space-y-1">
                      <li>• Parsifal part I (4:47)</li>
                      <li>• Tanta Voglia di lei (2:10)</li>
                      <li>• Pensiero (2:35)</li>
                      <li>• Noi Due nel Mondo e nell'Anima (1:44)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 김남웅 */}
              <div className="border border-purple-400 rounded-lg p-6 bg-purple-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
                  🎵 김남웅 - 영국 포크 프로그레시브
                </h3>
                <div className="space-y-4">
                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <p className="text-purple-100">
                      <span className="font-bold text-purple-200">1.</span> The Shepherd's Song - Strawbs 
                      <br />
                      <span className="ml-4 text-purple-300 italic">from "From The Witehwood"</span>
                    </p>
                  </div>
                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <p className="text-purple-100">
                      <span className="font-bold text-purple-200">2.</span> The Smancipation of Mr. X
                    </p>
                  </div>
                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <p className="text-purple-100">
                      <span className="font-bold text-purple-200">3.</span> Sun Stroke
                    </p>
                  </div>
                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <p className="text-purple-100">
                      <span className="font-bold text-purple-200">4.</span> The Ark - Chad & Jeremy
                    </p>
                  </div>
                </div>
              </div>

              {/* 이창식 */}
              <div className="border border-yellow-400 rounded-lg p-6 bg-yellow-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
                  🎼 이창식 - La Tulipe Noire 자작곡
                </h3>
                <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-yellow-200 mb-3">🌹 La Tulipe Noire from "Shattered Image"</h4>
                  <ul className="text-yellow-100 space-y-1">
                    <li>1. Image I (A glimpse on the Mirror) (4:00)</li>
                    <li>2. Shattered Ego (8:10)</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Lennon's Detailed Italian Review */}
            <div className="mt-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg border border-orange-500">
              <h2 className="text-2xl font-bold text-orange-300 mb-6 text-center">
                📝 Lennon의 이탈리아 슈퍼밴드 상세 해설
              </h2>
              <div className="space-y-6 text-orange-100 leading-relaxed text-sm">
                
                <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-orange-200 mb-3">🎸 PFM - My God (6:24)</h4>
                  <p>
                    제스로 툴의 My God을 PFM이 부릅니다. 70년대의 라이브 트랙을 묶어서 
                    1998년 발매한 "A celebration live" 앨범에 실려있습니다. 1971년 10월 
                    밀라노에서 연주되었다는군요.
                  </p>
                </div>

                <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-orange-200 mb-3">🎹 Banco - 750.000 anni fa ... l'amore? (7:32)</h4>
                  <p className="mb-3">
                    <span className="font-bold">7십5만년전... 사랑인가?</span> - Banco "Nudo"
                  </p>
                  <p>
                    방코의 걸작중 하나인 2집 "Darwin" 에 실린 곡입니다. 1997년 발매된 신작 
                    "Nudo"는 일본에서 먼저 발매된 라이브 앨범을 업데이트하여 이태리에서 
                    발매됐다고 합니다. 첫곡인 Nudo 는 이 앨범을 위하여 마련된 신곡으로 
                    15분 정도 의 조곡이고 나머지는 모두 라이브 트랙인 모양입니다. 
                    (사실 아직 뜯지도 않았습니다. ^^ 감상회 자리에서 개봉할 예정.)
                  </p>
                </div>

                <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-orange-200 mb-3">🎵 I Pooh - "Palasport" (1981)</h4>
                  <div className="space-y-3">
                    <p><strong>• Parsifal part I 파르지팔 (4:47)</strong></p>
                    <p><strong>• Tanta Voglia di lei 그녀를 너무나 원하며 (2:10)</strong></p>
                    <p><strong>• Pensiero 생각 (2:35)</strong></p>
                    <p><strong>• Noi Due nel Mondo e nell'Anima 세상과 영혼 사이에 우리 둘뿐 (1:44)</strong></p>
                  </div>
                  <div className="mt-4 space-y-2 text-xs">
                    <p>
                      I Pooh 의 첫 라이브 앨범, 1981년작 "Palasport"에 담긴 몇 곡입니다. 
                      익숙한 파르지팔의 곡조가 흘러나오자 관객들의 환성이 터집니다.
                    </p>
                    <p>
                      "Opera prima" 앨범에 실린 너무나 아름다운 곡 Tanta Voglia di lei 에서는 
                      잔잔히 청중들이 따라부르기 시작하는군요. 가슴이 뭉클해집니다.
                    </p>
                    <p>
                      이 곡과 "Allessandra" 앨범의 명곡인 Noi Due nel Mondo e nell'Anima, 
                      이 두 곡이 그 많은 Pooh의 노래중 가장 아름다운 곡들이 아닐까 합니다.
                    </p>
                    <p>
                      Pooh를 탈퇴하고 솔로로 나서서 대 성공을 거둔 리까르도 폴리도 
                      자신의 앨범에서 이 곡들을 다시 불렀지요. Noi Due nel Mondo e nell'Anima를 
                      다 부르지 않고 짧게 끊는 것이 너무 안타깝습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-orange-200 mb-3">💭 Lennon의 소감</h4>
                  <p>
                    다른 분들이 활발하게 오늘의 신보들과 새로운 밴드들을 소개해주시기에 
                    저는 늘 하던대로 ^^ 옛날 곡들이나 들려드립니다. 
                    편안한 시간 되시길...
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-600">
              <h3 className="text-2xl font-bold text-gray-200 mb-6 text-center">📸 감상회 사진 갤러리</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/01.jpg" 
                      alt="이강영, 권재륜"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00001.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">이강영, 권재륜</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/02.jpg" 
                      alt="강창우"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00002.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">강창우</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/03.jpg" 
                      alt="전혜정, 전승훈, 강창우"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00003.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">전혜정, 전승훈, 강창우</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/04.jpg" 
                      alt="김남웅, 정영수"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00004.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">김남웅, 정영수</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/05.jpg" 
                      alt="안병욱, 도태영"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00005.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">안병욱, 도태영</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/06.jpg" 
                      alt="김남웅, 안병욱, 도태영"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00006.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">김남웅, 안병욱, 도태영</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/07.jpg" 
                      alt="김남웅, 안병욱, 도태영"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00007.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">김남웅, 안병욱, 도태영</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/08.jpg" 
                      alt="모두"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00008.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">모두</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/09.jpg" 
                      alt="모두"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00009.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">모두</p>
                </div>

                <div className="text-center">
                  <div className="relative w-full h-40 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src="/images/roger-waters/000813/10.jpg" 
                      alt="모두"
                      fill
                      className="object-cover rounded border border-gray-500"
                      onClick={() => window.open('/images/roger-waters/000813/DSC00010.JPG', '_blank')}
                    />
                  </div>
                  <p className="text-sm text-gray-300">모두</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-700 rounded">
                <p className="text-sm text-gray-300 text-center">
                  💡 <strong>사진 클릭하면 고해상도 원본을 볼 수 있습니다!</strong>
                  <br />
                  <span className="text-xs text-gray-400">
                    썸네일 (.jpg) → 클릭 → 고해상도 원본 (.JPG)
                  </span>
                </p>
              </div>
            </div>

            {/* Session Analysis */}
            <div className="mt-12 p-6 bg-purple-100 bg-opacity-10 rounded-lg border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎼 Session 24의 음악적 특징</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🇮🇹 이탈리아 프로그 3대장</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• PFM:</strong> Jethro Tull "My God" 커버 (1971 밀라노)</li>
                    <li><strong>• Banco:</strong> "Darwin" 걸작 + 1997 신작 "Nudo"</li>
                    <li><strong>• I Pooh:</strong> 1981 "Palasport" 라이브의 감동</li>
                    <li><strong>• 라이브 중심:</strong> 70-80년대 현장감 생생</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🌟 현대 프로그 3대장</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• Transatlantic:</strong> 슈퍼그룹의 대서사</li>
                    <li><strong>• The Flower Kings:</strong> 스웨덴 네오 프로그 대표</li>
                    <li><strong>• Porcupine Tree:</strong> Steven Wilson의 혁신</li>
                    <li><strong>• 도태영:</strong> 현대 프로그 트렌드 소개</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🎵 다양한 스펙트럼</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 영국 포크:</strong> Strawbs, Chad & Jeremy</li>
                    <li><strong>• 한국 창작:</strong> 이창식 "La Tulipe Noire"</li>
                    <li><strong>• 스웨덴 프로그:</strong> The Flower Kings 집중</li>
                    <li><strong>• 영국 프로그:</strong> Gnidrolog 희귀곡</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">📸 특별한 기록</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 15명 참석:</strong> 대규모 모임</li>
                    <li><strong>• 사진 갤러리:</strong> 10장의 현장 사진</li>
                    <li><strong>• Lennon 해설:</strong> 이탈리아 음악 전문 해설</li>
                    <li><strong>• Man+ 장소:</strong> 새로운 감상회 공간</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-cyan-400">15+</div>
                  <div className="text-cyan-300">곡 (5명 발표자)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-red-400">🇮🇹</div>
                  <div className="text-red-300">이탈리아 특집</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-400">📸</div>
                  <div className="text-green-300">10장 사진</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-400">15</div>
                  <div className="text-purple-300">명 참석</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-cyan-400 mb-4">
                ✅ 제24회 이탈리아 슈퍼밴드 특집 완전 복원! 
                PFM, Banco, I Pooh의 감동적인 라이브와 Lennon의 전문 해설, 그리고 15명이 함께한 소중한 순간들이 되살아났습니다! 🇮🇹🎵📸
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0A0C30] border border-cyan-400 text-cyan-400 font-medium rounded-md hover:bg-cyan-900 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session23" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  ← 이전 (23회)
                </Link>
                
                <Link href="/gathering/session25" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  다음 (25회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
