import Link from 'next/link';

export default function BuonVecchioCharliePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Buon Vecchio Charlie</h1>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>[김웅규, ledzep1, 92.7]</strong>
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800 text-center">
            <strong>이태리 헤비심포니의 신호탄,</strong><br/>
            <strong>BUON VECCHIO CHARLIE</strong><br/>
            <strong>그들의 유일한 앨범 B.V.C</strong>
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            71년도에 녹음된 이앨범은 그동안 마스터 테잎으로만 존재해 왔다합니다.
            ( BELIEVE IT OR NOT )
            하지만 그들의 음악성은 당시 이태리 음악계에 파문을 일으키리만큼 독특한
            색깔이 있어 OSANNA, R.D.M, SEMIRAMIS, Q.V.L 등의 그룹에 상당한 영향을
            끼쳤읍니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            1970년, 기타 LUGI CALABRO를 주축으로 테너색스폰&플륫 SANDRO 'CICERO'
            CESARONR,금관악기 PAOLO DAMIANI, 드럼 RINO SANGIORGIO, 건반 SANDRO
            CENTOFANTI, 기타 RICHARD BENSON (이름으로 추측컨데 이사람만 이태리인이
            아닌것 같아요) 이렇게 5인으로 결성됐읍니다. 그리고 71년에 앨범발표,
            그런다음에 해산, 그리고나서 LIRRA란 그룹을 결성. 이것이 제 지식의 한계
            입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            곡소개를 하기앞서 쟈켓 디자인을보면 앞면은 피카소의 게르니카를 연상케
            해주는 황소 쌍판대기가 재수털리게 그려져있고, 뒷면은 달리 화풍을 모방
            한것 같이 몽땅벗은 여자(엉덩이가 토실토실하게 그려져 있음) 위로 핏물이
            뚝뚝 떨어지는 기묘하고 괴기스런 그림이 그려져 있읍니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            자 그럼 첫곡을 살펴보면 그리그의 유명한 페르귄트 조곡을 멋드러지게
            편곡한 VENITE GIU AL FIUME가 화려한 애드립 기교로 펼쳐짐니다.
            장장 13분이라는 긴시간속을 정신없이 종횡무진, 혼비백산, 인사불성...
            무아지경으로 몰입시킴니다. 재즈의 묘미도 느끼게 해주는 곡이죠.
            이앨범의 압권이자 백미인 이곡은 강력한 ROCK 그자체입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            두번째곡 EVVIVA LA CONTEA DI LANE 는 첫곡때문에 맛이 약간 간 정신을
            회복하라는 의미처럼 서정성이 짙은 곡입니다. 중간 중간 플륫의 간주는
            웬지모를 고독감을 자아내지만 후반부의 색스폰 소리는 또다시 이성을
            상실케 합니다.
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            마지막곡 ALL'UMO CHE RACCOGLIE I CARTONI 역시 15분 의 대곡으로
            색스폰의 기교가 돋보입니다. 강과 유를 적절히 대비시킴으로해서 곡자체에
            무게가 실려있고 이곡역시 재즈적 체취가 풍기는 연주로 메워져 있습니다.
          </p>
        </div>

        <div className="mt-6">
          <Link href="/review/b" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
} 