"use client"

import Link from "next/link"

export default function WapassouPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Wapassou
            </h1>
            <p className="text-lg text-gray-600">
              프랑스 • 챔버 록 • 1973
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Wapassou - Same Title (1973)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">기본 정보</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>레이블:</strong> Prodisc / Crypto</div>
                  <div><strong>재발매:</strong> Si-Wan European Rock 3000 Series</div>
                  <div><strong>장르:</strong> 프랑스 전위 록, 챔버 록</div>
                  <div><strong>평점:</strong> ★★★★</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">멤버</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Freddy Brua</strong> - Piano, Organ</div>
                  <div><strong>Karin Nickerl</strong> - Guitar, Vocal</div>
                  <div><strong>Jacques Lichti</strong> - Violin</div>
                  <div>+ 게스트 연주가 다수</div>
                </div>
              </div>
            </div>
          </div>

          {/* Track List */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">트랙 리스트</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>1. Femmes-fleurs (보너스 트랙)</span>
                <span className="font-mono">2:42</span>
              </div>
              <div className="flex justify-between">
                <span>2. Borgia (보너스 트랙)</span>
                <span className="font-mono">2:22</span>
              </div>
              <div className="flex justify-between">
                <span>3. Melopee</span>
                <span className="font-mono">3:59</span>
              </div>
              <div className="flex justify-between">
                <span><strong>4. Rien (하이라이트)</strong></span>
                <span className="font-mono">10:38</span>
              </div>
              <div className="flex justify-between">
                <span>5. Musillusion</span>
                <span className="font-mono">3:54</span>
              </div>
              <div className="flex justify-between">
                <span>6. Chatiment</span>
                <span className="font-mono">6:48</span>
              </div>
              <div className="flex justify-between">
                <span>7. Trip</span>
                <span className="font-mono">13:37</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded border-l-4 border-green-500">
              <p className="text-sm text-gray-700">
                <strong>참고:</strong> 원래 LP에는 3-7번 트랙만 수록되었으며, 
                1-2번은 1년 후 싱글로 발매된 곡들을 보너스 트랙으로 추가한 것입니다.
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {/* LongDal Review */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  LongDal (전승훈)
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  예전에 사서 책상 구석에 놔뒀더니 먼지가 쌓인 앨범입니다.
                  비오는 날씨에 우연히 꺼내듣고 가슴을 찡하게 하는 뭔가가 있어 이렇게 글을 적습니다.
                </p>
                <p>
                  프랑스 록계의 여명에 묻힐 귀중한 앨범이라는 Marquee 카탈로그 설명에 
                  처음 이 앨범을 들을 때는 의문을 가졌습니다. 그리고 '이런 앨범도 나중에 다시 들을 때 
                  좋아지게 될까.' 하는 의문도 같이 가졌었습니다.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <p className="font-medium text-gray-800 mb-2">핵심 트랙 - "Rien"</p>
                  <p className="text-sm">
                    이 앨범은 1번곡부터 감상해야 되는 것이 아니라 10분짜리 Rien곡부터 
                    듣기 시작해야 합니다. 그곡을 듣고 있으면 이런 단어가 생각납니다:
                  </p>
                  <p className="text-sm mt-2 italic">
                    "슬픔. 불안. 음울. 파란색. 흰색. 한 여름날 낮잠에서 꾸었던 옛날 어린 시절의 꿈."
                  </p>
                </div>
                <p>
                  저는 거의 항상 꽉 차있는 음악을 즐겨 듣습니다. 모든 악기들이 자신이 연주할 수 있는 
                  능력을 최대한 발휘해서 낼 수 있는 가장 큰 목소리로 연주하고 있는 앨범을 좋아합니다.
                </p>
                <p>
                  그러나 예외도 가끔 있어야겠죠. 한편의 동양화, 유명한 작가가 그렸다기 보다는 
                  민화같은 이런 앨범도 가끔 비오는 날 들으면 메말라 있는 감성을 촉촉하게 비로 
                  적셔주는 것 같아서 가끔 찾아 들을 것 같습니다.
                </p>
              </div>
            </div>

            {/* Windmill Review */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  windmill (박왕근)
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  저는 사실 전에 이들의 데뷔작중에 Rien이란 곡 하나 때문에 구하려고 했지만 
                  씨디발매가 안되어서 결국 그 이후의 앨범을 구했는데 시종 늘어지는 현악기와 
                  귀신 나올 것 같은 여성 스캣때문에 결국 다른 임자를 찾아갔습니다.
                </p>
                <p>
                  그후 1집이 엘피복각되었다는 악재와 함께 구입을 포기했는데요... 
                  전 앨범위주로 음악감상을 하는 편인데 대체로 별로인데 한두곡 때문에 
                  음반을 구입하는 경우도 '왕왕' 있죠?
                </p>
              </div>
            </div>

            {/* Lennon Review */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Lennon (이강영)
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  와파소의 최고작은 D단조 미사라고들 하던데 저도 데뷔작과 살람보만 들어봤습니다. 
                  이들의 음악을 쳄버락이라고 하기에는... 글쎄요, 어떻든 이들의 음악에는 
                  불협화음은 거의 없습니다.
                </p>
                <p>
                  바이얼린등이 주도해서 말 그대로 '심포닉'하기보다는 '쳄버 뮤직'스럽기는 하지만요. 
                  그리고 너무나 여립니다... 다른 그룹들, 우리가 많이 듣고 좋아하는 음악들과는 
                  확실히 '다른' 아름다움을 들려줍니다.
                </p>
              </div>
            </div>

            {/* Orkman Review */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  orkman (장민수)
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  저는 Wapassou의 D단조 미사(Masse En Re Minor)와 살람보(Salambo)를 들어보았습니다. 
                  저도 이 그룹의 음악을 들을때면 롱달님과 강영님이 표현하신 것과 비슷한 느낌을 받습니다. 
                  매우 여리고, 공중에 떠 있는 느낌이지요. 약간 몽롱하기도 하고요.
                </p>
                <p>
                  <strong>Wapassou의 음악에 매력을 느끼신다면, D단조 미사를 꼭 권해 드리고 싶군요. 
                  처음 듣는 순간부터 귀를 사로잡는 앨범입니다.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Album Art Description */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">앨범 아트</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                표지는 앨범 가게에서 프로록 코너를 가끔 보시는 분은 많이 보셨을 겁니다. 
                모노칼라에 호수에서 머리가 아주긴 여인이 상체만 물위로 나와있고 
                기형적인 두손을 턱에 괴고 하늘을 바라보고 있는 그림입니다.
              </p>
              <p>
                meddle님의 관찰: "1집의 여인커버를 자세히 보시면 아시겠지만 
                왼쪽 가슴이 약간더 큰것 같군요. 근데... 이 여자... 무슨 생각을 하고 있을까요? '난 꽃이야'?"
              </p>
            </div>
          </div>

          {/* Technical Notes */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">기술적 특징</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>음반 복각:</strong> 이 앨범은 Musea 레코드와의 라이센스 계약으로 
                재발매했는데 Musea에서 마스터테입을 못찾아 LP를 복각했습니다.
              </p>
              <p>
                <strong>편성:</strong> 1,2번 곡에서 신나게 쿵작 쿵작하던 드럼이 없습니다. 
                Rien 곡부터는 드럼이 없어서 마치 요즘의 챔버락을 테입에 녹음시켜 
                늘어놓은 듯한 연주를 들려줍니다.
              </p>
              <p>
                <strong>보컬 스타일:</strong> 간간히 나오는 여성 보컬은 노래를 하는 건지 
                귓속말을 하는건지 구분이 안 될 정도입니다.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/w" className="text-blue-600 hover:text-blue-800 font-medium">
              ← W 폴더로 돌아가기
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