"use client"

import Link from "next/link"

export default function SagradoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sagrado Coração Da Terra
            </h1>
            <p className="text-lg text-gray-600">
              브라질 • 프로그레시브 록 • 바이올린 중심
            </p>
          </div>

          {/* Band Overview */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              "땅의 심장" - Sagrado Coração Da Terra
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sagrado Coração Da Terra는 "땅의 심장"이라는 뜻의 브라질 그룹으로, 
                바이올린 주자이자 리더인 Marcus Vianna에 의해 만들어진 
                신세대 프로그레시브 계열의 대표적인 밴드입니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>리더:</strong> Marcus Vianna (바이올린, 작곡)<br/>
                  <strong>결성:</strong> 1980년대<br/>
                  <strong>국가:</strong> 브라질<br/>
                  <strong>장르:</strong> 프로그레시브 록, 신포니 록
                </p>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                이동훈 (meddle)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-4">음악적 특징</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sagrado는 브라질 80년대 프로그레시브 록을 대표하는 선두주자입니다. 
                2, 3, 4집 모두가 수준작이며, 특히 3집을 최고의 추천작으로 꼽고 있습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">사운드 특징</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Marcus Vianna의 대지를 가르는 바이올린</li>
                    <li>• 시원스런 코러스</li>
                    <li>• 이국적인 분위기</li>
                    <li>• 영어 가사로 접근성 증대</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">비교 대상</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Outer Limits와 유사한 바이올린</li>
                    <li>• 하지만 더 클래식 지향적</li>
                    <li>• 독창성과 음악성이 뛰어남</li>
                    <li>• 아름다운 앨범 커버로도 유명</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Discography */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">디스코그래피</h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">정규 앨범</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• S/T (1집)</li>
                    <li>• Flecha (2집, 1987)</li>
                    <li>• Farol da Liberdade (3집, 추천작)</li>
                    <li>• Grande Espirito (4집, 대중적)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Marcus Vianna 솔로</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Pantanal (Suite Sinfonica)</li>
                    <li>• Trilhas & Temas</li>
                    <li>• Idade da Loba</li>
                    <li>• Fantasia de Natal</li>
                    <li>• Cancoes do Eden</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Flecha Album Review */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                양재성 (sagrado)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-amber-800 mb-4">Flecha 앨범 심층 리뷰</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Flecha는 인간의 우주에 대한 꿈, 희망, 그러나 좌절에 대해 그린 컨셉 앨범입니다. 
                앨범 재킷도 한 여자가 별에 대고 화살을 쏘는 컴퓨터 그래픽으로 
                '우주'스러움을 한층 더 살려주고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-3">개인적 만남</h3>
                <p className="text-sm text-gray-600">
                  군복무 시절 가장 암울했던 시기에 이 앨범을 접하게 되었고, 
                  침체되어 있던 생활에 파격으로 다가온 이 선율들은 
                  언제나 뇌리 속에서 맴돌고 있다고 합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Track Analysis */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">Flecha 트랙별 분석</h2>
            <div className="space-y-4 text-gray-700">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">1. Flecha (서곡)</h3>
                  <p className="text-sm text-gray-600">
                    서곡답게 장엄하게 시작되는 키보드와 드럼으로 점점 고조되어 가는 
                    인간의 꿈을 그리고 있습니다. 중반부터 흘러나오는 코러스와 
                    바이올린 연주가 정말 압권입니다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">2. Manhã Dos 33</h3>
                  <p className="text-sm text-gray-600">
                    아주 서정적인 곡으로, 중간중간 튀어나오는 여성 보컬이 아주 귀엽습니다. 
                    우주로 날아오른 뒤의 평온함을 그리고 있는 듯 아주 편안한 곡입니다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">3. Paz</h3>
                  <p className="text-sm text-gray-600">
                    잠시의 휴식을 알리는 것처럼 아주 짧은 연주 속에서 
                    마치 창문 밖으로 우주가 보이는 분위기를 연출합니다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">4. Seres Humanos</h3>
                  <p className="text-sm text-gray-600">
                    웅장함과 서정적인 면이 어우러지는 곡으로, 
                    우주로의 여행에서 인간 자신에게의 회귀를 표현합니다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">5. Carinhos Quentes</h3>
                  <p className="text-sm text-gray-600">
                    초반부에 우주와의 대화처럼 인간의 질문과 우주의 심오한 대답으로 
                    엮어진 곡으로, 여성 보컬과의 멋진 어울림이 돋보입니다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">6. Tocatta</h3>
                  <p className="text-sm text-gray-600">
                    키보드가 주축이 된 연주곡으로, 이 앨범에서 가장 무거운 분위기를 
                    연출합니다. 항해 도중 만난 엄청난 시련을 표현하는 것 같습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Masterpiece Track */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">백미 - Cosmos x Caos</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                일곱 번째 곡 "Cosmos x Caos"는 이 앨범의 가장 백미이자 
                Marcus의 신들린 듯한 바이올린 연주를 감상할 수 있는 곡입니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">곡의 의미</h3>
                <p className="text-sm text-gray-600">
                  "Cosmos x Caos" - 우주 x 혼돈. 여기서 'x'는 주로 '알 수 없음'을 나타낼 때 사용됩니다. 
                  꿈을 찾아 우주로 떠나기는 했지만 그 속에서 만나는 무지로 인해 
                  결국 혼돈 속에 빠져버리고 눈물을 머금고 좌절해야만 하는 인간을 
                  너무 멋있게 표현했습니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">음악적 구성</h3>
                <p className="text-sm text-gray-600">
                  첫 번째 곡 "Flecha"의 도입부와 똑같이 시작되지만, 
                  시간이 지날수록 전곡들의 평온함은 사라지고 날뛰는 바이올린 연주가 
                  혼돈 자체를 표현해냅니다. 후반부에 조용히 페이드아웃되면서 
                  애절한 보컬이 꿈을 이루지 못함을 나타냅니다.
                </p>
              </div>
            </div>
          </div>

          {/* Final Track */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">마지막 곡 - O Futuro Da Terra</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                마지막 곡 "O Futuro Da Terra"는 애잔함이 깔려있는 박력 있는 연주곡입니다. 
                결국 땅으로 돌아왔지만 좌절만 하고 있을 수는 없지 않겠습니까? 
                하지만 끝부분의 바이올린 연주는 너무 슬픕니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <p className="text-sm italic text-gray-600">
                  "말이 필요 없습니다. 들어보시면 압니다..."
                </p>
              </div>
            </div>
          </div>

          {/* Album Covers */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">아름다운 앨범 커버</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sagrado의 음반은 아름다운 커버로도 유명합니다. 
                특히 동화적인 분위기의 2집과 시원스런 4집의 커버가 일품입니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Flecha (2집)</h3>
                  <p className="text-sm text-gray-600">
                    한 여자가 별에 대고 화살을 쏘는 컴퓨터 그래픽으로 
                    우주적 분위기를 완벽하게 표현했습니다.
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Grande Espirito (4집)</h3>
                  <p className="text-sm text-gray-600">
                    시원스런 폭포와 토인 커버로 자연의 웅장함을 
                    시각적으로 표현했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acquisition Information */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">구입 정보 (당시)</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                당시 마이도스에서 2, 3, 4집을 수입했다고 알려져 있습니다. 
                소량이라 이미 다 팔렸을 가능성이 컸지만, 조만간 또 수입할 예정이었습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-rose-500">
                <h3 className="font-medium text-gray-800 mb-3">Marcus Vianna 솔로</h3>
                <p className="text-sm text-gray-600">
                  예전 0시의 리퀘스트에서 Marcus Viana의 "Fantasia"라는 곡을 들었는데 
                  매우 좋았다고 합니다. 그의 솔로 작품들도 상당한 수준을 자랑합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Legacy */}
          <div className="bg-teal-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-teal-800 mb-4">음악적 유산</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sagrado Coração Da Terra는 브라질 프로그레시브 록 씬에서 
                가장 중요한 밴드 중 하나로 평가받습니다. 
                Marcus Vianna의 바이올린을 중심으로 한 독특한 사운드는 
                많은 후배 음악가들에게 영향을 미쳤습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                <p className="text-sm italic">
                  "음악은 역시 좋은 거야요. 부족하지만 나름대로 열심히 써봤어요."
                </p>
                <p className="text-sm text-gray-600 mt-2">- 양재성 (sagrado)</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/s" className="text-blue-600 hover:text-blue-800 font-medium">
              ← S 폴더로 돌아가기
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