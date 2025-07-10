import Link from 'next/link';

export default function StrangersOnATrainPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Strangers on a Train</h1>
          <p className="text-xl text-gray-300">
            The Key part II: Labrynth - Clive Nolan의 Neo-Progressive 프로젝트
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {/* Fish Review */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <p className="font-semibold text-purple-400">Fish (신인철)</p>
            <p className="text-sm text-gray-400">icshin@chiak.kaist.ac.kr</p>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Strangers on a Train / The Key part II: Labrynth</strong>
            </p>
            
            <p>
              우연히 들린 레코드가게에서 Siwan/Nices의 이 앨범을 보고 약간 놀랐읍니다. <br />
              Siwan label이 요즈음 item 선택에 약간의 어려움을 겪고 있다는 생각을 하고 있 <br />
              던차(Mellow, Vinyl Magic, Lost Vinyl 등이 워낙 요즈음 쏟아내잖아요?) 저같은 <br />
              neo-progster 조차 별로 탐탁하게 생각하지 않는 Holland의 허접한 neo-prog 를 <br />
              양산하기로 유명한 label 'S.I.' 의 item을 Siwan에서 라이센스화 하였다는 사 <br />
              실은 좀 의외더군요.
            </p>
            
            <p>
              Neo-prog를 비교적 좋게 생각하는 친구들이 많이 모인 IAPH <br />
              (IQ mailing list)에서 조차 S.I. 의 무분별한 가짜 progressive album발매는 항 <br />
              상 비난의 대상이 되어왔거든요.. 하지만 우리의 Siwan에서 selection한 만큼 뭔 <br />
              가 S.I. release 중 좋은걸 골라내지 않았을까 하는 생각에 망설이지 않고 집어 <br />
              들었읍니다(사실 S.I. 에서도 좋은 artist들 생각해보면 꽤 많아요.)
            </p>
            
            <p>
              이 앨범도 역시 Clive Nolan (저번에 review해 드렸던 Arena의 앨범에도 참여한 <br />
              Pendragon의 keyboard player)가 전곡의 작곡을 다 해낸 Clive - I play keys in <br />
              every known prog band - Nolan의 거의 solo project 입니다.. 주말에 서너번 반 <br />
              복하여 들어보았는데.. 꽤 훌륭하더군요. 여성 vocal과 남성 vocal의 조화도 괜 <br />
              찮고.. 너무 곡들을 늘인 김이 없잖아 있지만 S.I. label의 앨범 치고는 간만에 <br />
              건질만한 앨범인것 같습니다.
            </p>
            
            <p>
              아쉬운 점이 있다면 vocal이 많이 등장하는 앨범에 <br />
              가사가 누락되어 있다는 점과 sleeve design이 바뀐(Crystal Phoenix를 그린 분 <br />
              이 다시 그렸대요. ART ROCK 7호의 표지 그림이 sleeve artwork로 쓰였읍니다.) <br />
              사실이네요..
            </p>
          </div>
        </div>

        {/* Cicco Review */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4 mb-4">
            <p className="font-semibold text-purple-400">cicco (이윤직)</p>
            <p className="text-sm text-gray-400">jiklee@chiak.kaist.ac.kr</p>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              저는 오늘 우연히 Strangers On A Train의 이 앨범을 구입하여 듣게 되었습니다. <br />
              얼마전에 Fish 형님께서도 Review해주셨지만...이 앨범 정말 좋군요. Marillion <br />
              으로 Neo-prog.에 입문한지 얼마 안되어서 Geoff Mann의 'In One Era..' 에 놀라 <br />
              Neo-prog를 쭉 안들어 왔었는데, 이런 앨범이 산재해 있다면 다시금 도전해 볼 <br />
              만하다는 생각이 들 정도로 괜찮은 앨범입니다.
            </p>
            
            <p>
              시종일관 은은하게 분위기를 주도하는 Clive Nolan의 다양한 키보드... 너무나도 <br />
              Popular & Sexy한 Tracy Hitchings의 보컬... Tracy의 목소리와 절묘하게 조화를 <br />
              이루는 Alan Reed의 목소리... (교대로 등장하는 남여 보컬은 말러의 대지의 노 <br />
              래를 연상시키네요 :)) 그리고 무엇보다도 Clive Nolan의 작곡 실력은 대단하네 <br />
              요. 특히 네번째 트랙인 'The Vision Clears'는 마치 Coda의 'Faithful and Dre- <br />
              amer' (제목이 맞나..)를 연상시킬 만큼 아름다운 곡입니다.꼭 한번 들어보시길.
            </p>
          </div>
        </div>

        {/* Album Information */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">기본 정보</h3>
              <ul className="space-y-1 text-gray-300">
                <li><strong>밴드:</strong> Strangers on a Train</li>
                <li><strong>앨범:</strong> The Key part II: Labrynth</li>
                <li><strong>장르:</strong> Neo-Progressive Rock</li>
                <li><strong>레이블:</strong> S.I. (Siwan 라이센스)</li>
                <li><strong>주요 인물:</strong> Clive Nolan (Pendragon)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">핵심 멤버</h3>
              <ul className="space-y-1 text-gray-300">
                <li><strong>Clive Nolan:</strong> 키보드, 전곡 작곡</li>
                <li><strong>Tracy Hitchings:</strong> 여성 보컬</li>
                <li><strong>Alan Reed:</strong> 남성 보컬</li>
                <li><strong>특징:</strong> Clive Nolan의 솔로 프로젝트 성격</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Label Context */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">레이블 및 배경</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">S.I. 레이블의 평판</h3>
              <p>
                Holland의 S.I. 레이블은 "허접한 neo-prog 양산"으로 유명했으며, <br />
                IQ mailing list (IAPH)에서도 "무분별한 가짜 progressive album 발매"로 <br />
                비난의 대상이 되곤 했습니다. 하지만 이 앨범은 그 중에서도 건질만한 <br />
                좋은 작품으로 평가받고 있습니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Siwan의 선택</h3>
              <p>
                Siwan/Nices에서 이 앨범을 라이센스화한 것은 다소 의외였지만, <br />
                Siwan의 안목을 믿고 구입한 결과 기대를 저버리지 않는 좋은 앨범이었습니다. <br />
                당시 Mellow, Vinyl Magic, Lost Vinyl 등이 쏟아내는 상황에서 <br />
                신중한 선택이었던 것으로 보입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Musical Features */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">음악적 특징</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Clive Nolan의 역할</h3>
              <p>
                Arena 앨범에도 참여했으며 Pendragon의 키보드 플레이어인 Clive Nolan이 <br />
                전곡을 작곡한 사실상의 솔로 프로젝트입니다. "I play keys in every known prog band"라는 <br />
                농담이 있을 정도로 많은 프로그 밴드에 참여한 인물입니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">보컬의 조화</h3>
              <p>
                Tracy Hitchings의 "Popular & Sexy"한 여성 보컬과 Alan Reed의 남성 보컬이 <br />
                절묘하게 조화를 이룹니다. 교대로 등장하는 남녀 보컬은 말러의 "대지의 노래"를 <br />
                연상시킬 정도로 극적인 효과를 제공합니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">키보드의 역할</h3>
              <p>
                "시종일관 은은하게 분위기를 주도하는 Clive Nolan의 다양한 키보드"가 <br />
                앨범의 핵심적인 역할을 합니다. 화려한 기교보다는 분위기 조성에 <br />
                중점을 둔 섬세한 연주가 돋보입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Track */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">추천 트랙</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">The Vision Clears (4번 트랙)</h3>
              <p>
                Cicco의 리뷰에 따르면, 이 곡은 "Coda의 'Faithful and Dreamer'를 연상시킬 만큼 <br />
                아름다운 곡"입니다. Clive Nolan의 작곡 실력이 가장 잘 드러나는 곡으로, <br />
                "꼭 한번 들어보시길" 추천하는 하이라이트 트랙입니다.
              </p>
            </div>
          </div>
        </div>

        {/* Neo-Progressive Context */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Neo-Progressive 맥락</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">Neo-Prog에 대한 회의</h3>
              <p>
                Cicco는 "Marillion으로 Neo-prog에 입문한지 얼마 안되어서 Geoff Mann의 <br />
                'In One Era..'에 놀라 Neo-prog를 쭉 안들어 왔었는데"라고 고백하며, <br />
                Neo-Progressive에 대한 회의를 표현했습니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">장르에 대한 재평가</h3>
              <p>
                하지만 이 앨범을 듣고 "이런 앨범이 산재해 있다면 다시금 도전해 볼만하다는 <br />
                생각이 들 정도로 괜찮은 앨범"이라고 평가하며, Neo-Progressive 장르에 대한 <br />
                긍정적인 재평가를 하게 되었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Production Issues */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">아쉬운 점들</h2>
          <div className="space-y-4 text-gray-300">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">가사 누락</h3>
              <p>
                "보컬이 많이 등장하는 앨범에 가사가 누락되어 있다"는 점이 아쉬웠습니다. <br />
                남녀 보컬의 조화가 뛰어난 앨범이었기에 가사를 함께 감상할 수 없었던 것은 <br />
                큰 손실이었을 것입니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">슬리브 디자인 변경</h3>
              <p>
                "Crystal Phoenix를 그린 분이 다시 그렸다"고 하며, ART ROCK 7호의 표지 그림이 <br />
                sleeve artwork로 사용되었습니다. 원본 아트워크와 다른 디자인이 사용된 점도 <br />
                아쉬운 부분으로 언급되었습니다.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2">곡 길이의 문제</h3>
              <p>
                "너무 곡들을 늘인 김이 없잖아 있지만"이라는 평가를 받았습니다. <br />
                일부 곡들이 다소 길게 느껴질 수 있지만, 전체적으로는 <br />
                "S.I. label의 앨범 치고는 간만에 건질만한 앨범"으로 평가받았습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Link href="/review/s/stone-angel" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            ← Previous: Stone Angel
          </Link>
          <Link href="/review/s/strawbs" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Next: Strawbs →
          </Link>
        </div>
      </main>
    </div>
  );
} 