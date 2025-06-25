import Link from 'next/link';

export default function BloquePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Bloque</h1>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>[o r k m a n, 장민수, cats@gw2.hyundai.co.kr]</strong>
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800 text-center">
            <strong>Bloque - El Hijo Del Alba</strong><br/>
            <strong>(재발매: 1995, Si-Wan SRMC-3021, CD)</strong>
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            널리 알려지지 못한 까닭에 전설적인 소문들만 무성했던 스페인의 수많은
            프로록 앨범들이 요즘은 우루루 재발매되면서 그 생김생김이 하나하나 드러나고
            있습니다. 초기의 Fonomusic과 최근의 Lost Vinyl이 스페인 록음반 발굴에 큰몫을
            했구요, 여기에 시완 레코드도 한몫 끼워져야 겠지요. Crack, Bloque, Nu, Los
            Canarios, Mezquita, Tarantula, Iceberg로 계속 이어지고 있는 그럴싸한 스페인
            앨범 재발매 목록... 여기에 가장 최근 추가된 항목이 바로 본작, Bloque의 세번째
            앨범 'El Hijo Del Alba'입니다. :-) (휴우~~ 이렇게 말꺼내기가 힘들어서야....:))
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            본 앨범의 전체적인 음색은 'Hombre Tierra y Alma'에서도 들을 수 있었던 
            따스한 인간미 넘치는 하드 심포닉인데요, 좀처럼 복잡한 편곡이나 곡구성을 
            꾀하지 않고 총체적인(!) 악기군들의 음향적인 조화에 충실하고 있다는 인상을 
            받았습니다. 이런 인상은 중반기 Camel과 Anyone's Daughter의 음악에서 풍기는 
            이미지이기도 합니다. 단지 Bloque는 기타 연주와 보컬이 좀 더 강한 인상을 
            준다는 점이 다르지요. 참고로 Bloque 의 키보드는 스페이시한 음색으로 음악을 
            풍성하게 뒷받침해 주는 역할을 주로 수행하고 있습니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            앨범의 시작은 예상외로 매우 독일적인 전자 키보드 연주곡으로 시작되고 
            있구요, 이 첫곡부터 세번째 곡까지는 마치 연관성 있는 곡들인 것처럼 자연스레 
            연결되고 있습니다. 키보드 솔로 연주, 보컬곡, (Full-Blown)심포닉 락으로 연결되는 
            이 앨범의 초두는 구성면에서나 감성을 자극하는 면에서나 여러모로 매우 
            뛰어납니다. 세번째 곡에서는 부분적으로 현악기군이 채용되고 있는데 효과 
            만점이구요. 제 생각에는 이 부분만으로 이 앨범의 가치는 충분한 듯 합니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            후반부에는 여섯번째 곡으로부터 마지막 열번째 곡까지 이어지는 장편 구성의 곡이 
            자리하고 있는데, 아무래도 이태리의 유수한 하드 심포닉 락에 비해 약간 허전함을 
            금할 수 없습니다. 단 기타 연주 만큼은 기대 이상으로 불에 타오르고 있고, 
            곡 자체도 열기는 충만합니다. 곡 후반부에서는 곡구성도 살아나고 있구요... :) 
            이 두개의 구조물 사이에는 멜로디감 좋은 타이틀 곡이 자리하고 있다는
            사실도 빼놓을 수 없겠네요. My 추천 앨범입니다! :)
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            1995/7/14/o r k m a n
          </p>
        </div>

        <div className="mt-6">
          <Link href="/review/b" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
} 