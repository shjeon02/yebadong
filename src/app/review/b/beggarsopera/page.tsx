import Link from 'next/link';

export default function BeggarsOperaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">BEGGAR'S OPERA</h1>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>[김영훈, YSTAZO, 94.10]</strong>
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>BEGGAR'S OPERA Pathfinder</strong>
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            이 그룹은 이름만 들어봤었는데,곧 라이센스로 나온다는 신보 안내코너에서...
            무척 궁금했던 차에... 구입을 하게 되었네요.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            우선 이 앨범의 자켓을 살펴보면, 6면 포스터 커버로 되어 있고, 물론 그래서 
            가격도 비싸지만...
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            펼쳐보면 우주복을 입은 기사(?)가 말을 타고 있는 모습이며, 그 뒤에 보이는 
            배경은 황량해 보이기까지 하고... 공상 과학 만화를 연상케 합니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            이들은 영국 그룹으로 글래스고우 출신이고, 처음에는 The System이라는 이름
            으로 활동을 하다가 70년에 데뷔 앨범인 <i>Act One</i>을 발표했다고 합니다. 초기
            에는 단순히 ELP 를 모방한 듯한 음악으로 인해 사람들의 관심을 끌지 못했다
            고... 그러다가 71년에 2집인 <i>Water Of Change</i>를 발표, 전작에서 들려주었던 
            ELP사운드에서 탈피하여 그들 자신의 개성을 보여주었다고 합니다. 다시 1년뒤 
            72년에 바로 이 앨범인 <i>Pathfinder</i>를 발표하는데, 독특한 커버와 함께 좀 더 
            진전된 사운드로 구매욕구를 자극했다고...
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            이들은 5인조로 다음과 같이 구성되어 있습니다.
            Martin Griffiths(vocals), Alan Park(keyboards),
            Ricky Gardiner(guitar,vocals), Gordon Sellar(bass,vocals),
            Ray Wilson(drums)
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            앨범 해설지에도 쓰여져 있지만, 이들의 음악은 듣기 쉽고 아름다운 것이 특징
            이라 할수 있습니다. 정말 어디선가 들어본 듯한 그런 멜로디도 들리고...
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            총 7곡이 수록되어 있는데, 그 중 특이하다고 생각되는 곡들은...
            우선 첫곡인 Hobo는 해설지에 따르면 죽어가는 한 방랑자에 대한 이야기를 담
            고 있다고 하는데, 안타깝게도 가사가 실려 있지 않아서 확인을 할 길이... 
            (흐... 들리는 것으로는 좀.. 힘들더라고요... You're losing your faith.. 뭐 
            이렇게 들리던데... 쩝...) 멋진 곡입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            그리고 두번째 곡인 MacCarthur Park는 Jim Webb이라는 작곡가에 의해 68년에 
            만들어진 노래로 리차드 해리스, 글렌 캠블, 토니 버넷, 프랭크 시나트라, 포
            탑스 등 많은 가수가 불렀지만 디스코의 여왕이라 불리던 Donna Summer가 가장 
            큰 인기를 얻었던 곡입니다. 극적이고 아름다운 멜로디 때문에 많은 사랑을 받
            았는데, 긴 연주시간 때문에 줄여서 부르는 경우가 많았다고 합니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            이 그룹도 화려한 사운드로 이 노래를 들려주고 있는데, 키보드 연주가 좋게 
            들리는군요...
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            그리고 6번째 곡인 Stretcher는 이 앨범에 있는 유일한 연주곡인데, 피아노와 
            기타 연주가 어루러지면서 반복되는 주제가 무척 아름답습니다.
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            저도 처음 들어본 음악이었는데, 아트락 그룹 치고는 듣기가 편안하고 부답없
            는 음악을 들려주고 있는 것 같습니다.
          </p>
        </div>

        <div className="mt-6">
          <Link href="/review/b" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
} 