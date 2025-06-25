import Link from 'next/link';

export default function BudkaSufleraPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Budka Suflera - Budka W Operze</h1>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>[Fish, 신인철, icshin@bioneer.kaist.ac.kr]</strong>
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            이 그룹이 27년이나 되는 역사를 가졌다는 사실에 우선 놀랐읍니다.
            본 앨범은 몇년전 이들이 북부 폴랜드에서 가졌던 실황공연을 
            녹음한 일종의 Best앨범인데요.. 지금 9번 트랙을 넘어가고 있읍니다.
            정말 감동적인 멜로디군요.. 차마 곡목을 베끼기는 귀찮네요
            어떻게 동구권의 스펠링은 자음모음이 그렇게 자유분방하게
            조합하고 있는지.. :-)
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            장황한 심포닉 락도 아니구요. 화려한 키보드가 넘실거리거나
            중후한 멜로트론이 청자를 붙잡아 놓는 그런 스타일도 아닙니다.
            리드 보컬리스트 Krzysztof Lugowski의 처절한 성량있는 목소리와
            담백한 기타리프가 꾸준한 감동을 주네요..
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            첫곡은 재미있게도 Pop classic 'Ain't no Sunshine'의 커버송입니다.
            Triteoariga Kriget (30년 전쟁)의 사운드와 비슷하다고나 할까요 ?
            프로그레시브락을 하다가 80년대를 거치면서 좀더 straightforward
            한 Rock으로 전향했다는 이 그룹은 얼마전 발표한 Cisza라는 앨범으로
            다시 화려하게 prog로 복귀했답니다.. 이 앨범도 빨리 들을 수 
            있었으면 좋겠는데.. 음비법.. 어떻게 되어가고 있는건가요 ?
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            영 불안해서.. 며칠전 전보가 날아왔읍니다..
            Federal Express의 한국 지점에서 왔는데..
            통관에 약간의 문제가 발생한 듯 해요..
            배달은 되겠지만 관세를 물어야 한다는데.. 얼만지는 잘 
            모르겠다더군요..
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            사실은 그동안 가끔 양이 많을경우에는 독수리표 
            페데랄 익스프레스를 즐겨 이용했는데.. 이경우는 
            엘피다섯장에 씨디 일곱장 비됴 두개를 한꺼번에 
            주문했어도 세관에서 뜯어보긴 커녕 아무런 타치 없이
            배달이 되었었거든요 ?
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            하지만 지금은 그저 씨디 네장에 비디오 두개밖에 
            안되는데도 믿었던 Federal Express인데도 덜컥 걸리고
            말았군요..쩝..
            쩝.. 밥먹을 시간이네요.. 저희 회사는 밥시간이 
            굉장히 짧아서.. 그럼..
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            NP: Budka W Operze - Budka Suflera
          </p>

          <div className="mb-4 text-blue-800 text-center font-mono">
            <p>                    o               </p>
            <p>                  o  It was a wedding ring,</p>
            <p>  \  __\\___    o    Destined to be found in a cheap hotel,</p>     
            <p>   \/     o \ o      Lost in a kitchen sink,</p>
            <p>   /\_&lt;_____/ or thrown in a wishing well.</p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/review/b" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
} 