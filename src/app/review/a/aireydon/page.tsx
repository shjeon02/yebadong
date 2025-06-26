import Link from "next/link";

export default function ReviewAireyDon() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Don Airey</h2>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">[남장우, beta1, 95.12]</p>
        </div>

        <div className="space-y-4 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">[DON AIREY] - K2 (TALES OF TRIUMPH AND TRAGEDY) (1986) MCA</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">SIDE A</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>OVERTURE</li>
                  <li>SEA OF DREAMS (part1~2)</li>
                  <li>VOICE OF THE MOUNTAIN</li>
                  <li>SONG FOR AL (inst)</li>
                  <li>BALTI LAMENT</li>
                  <li>ASCENT TO CAMP 4</li>
                  <li>SONG FOR AL (reprise)</li>
                </ol>
              </div>
              <div>
                <p className="font-medium">SIDE B</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>CAN'T MAKE UP YOUR MIND</li>
                  <li>SUMMIT FEVER</li>
                  <li>CLOSE TO THE SKY</li>
                  <li>BLUES FOR J.T</li>
                  <li>JULIE (If you leave me)</li>
                  <li>DEATH ZONE/WHITE OUT</li>
                </ol>
              </div>
            </div>
          </div>

          <p>주지하다시피 Don Airey는 헤비메틀계를 대표하는 대표적 건반주자이다. 그의 화려한 건반연주는 그가 예전 몸담고 있던 그룹들인 <strong>"RAINBOW"</strong> 와 <strong>"OZZY OSBOURNE BAND"</strong> 등에서 그 진가가 들어나는데.... (ex: REVELATION (OZZY OSBOURNE), SPOTLIGHT KID (RAINBOW))</p>

          <p>특히 OZZY의 REVELATION (mother earth)에서 보여준 그의 아름다운 건반연주는 필자의 뇌리에서 떠나지 않았었다.</p>

          <p>그런 그가 밴드생활을 청산하고 솔로활동에 들어갔는데...... 그의 솔로작품으로서 본 엘범은 주목할만한 멋진 작품이다. 이유는... 본 엘범을 듣는순간부터 엘범이 끝나는 순간까지 시종일관 한눈을 팔지 못할 탄탄한 구성력과 엘범의 완성도를 느낄 수 있기 때문이다.</p>

          <p>아쉬운점은 본인의 판에는 이 엘범을 완성한 멤버들의 소개가 없는것이 아쉬울뿐이다.</p>

          <h3 className="text-xl font-semibold mt-8 mb-4">앨범 해설</h3>

          <p>Don Airey는 그간의 헤비메틀적인 이미지에도 불구하고 본 엘범을 프로그레시브엘범으로서도 전혀 손색이 없는 진보적인 작품을 완성한것이다.</p>

          <p>첫곡 <strong>Overture</strong>에서의 나레이터의 k2소개 부분부터 이 음반은 시작한다. 첫곡의 웅장한서주와 함께 등장하는 두번째부분 <strong>Sea of dreams(1~2)</strong>에서의 보컬의 넙품 <strong>Balti lament</strong>의 음산한 분위기가 지나가면 주목할만한 Don Airey의 건반연주가 돋보이는 <strong>Ascent to camp4</strong>가 이어진다. 다양한 건반연주를 들을 수 있는 곡.</p>

          <p>B면의 첫곡으로 앞서 소개한바있는... <strong>Can't make up your mind</strong>는 팝 그룹 "포리너"의 연주를 연상시키는 파퓰러한 곡이며, 뒤이어 나오는 3개의 소품들의 아기자기한 연주가 끝이나면 이 엘범의 하일라이트인 <strong>Julie</strong>와 <strong>Death zone / White out</strong>이 이어진다.</p>

          <p><strong>Julie</strong>는 fm심야프로에서도 간간히 소개했던 감미로운 슬로우 넘버이다. 너무나도 사랑스러운곡........ 뒤이어 나오는 <strong>Death zone /White out</strong>은 이 엘범에서 유일하게 헤비메틀적인 곡인데 화려한 연주에 실린 보컬의 열창이 빛나다.</p>

          <p>이 두곡의 화려한 선율들을 뒤로한채 마지막 곡은 A면의 연주곡이었던 <strong>Song for Al</strong>로서 이번에는 보컬의 음성이 포함되어 다시 재현하고 있다.</p>

          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <p className="font-semibold text-center mb-2">추천의 글</p>
            <p>헤비메틀팬과 아트록팬들을 동시에 사로잡을수 있는 멋진엘범 k2....... 필자가 자신있게 권하는 몇 않되는 음반중의 하나이다.</p>
            <p className="text-right text-sm italic mt-2">추운방에서 손가락을 비비며......</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 