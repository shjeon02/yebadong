import Link from 'next/link';

export default function AngeloBranduardiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">Angelo Branduardi</h1>
          <p className="text-lg text-amber-600">이탈리아 포크록의 천사</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-amber-700">출신:</span> 이탈리아</p>
              <p><span className="font-semibold text-amber-700">장르:</span> 포크록, 챔버록</p>
              <p><span className="font-semibold text-amber-700">활동기간:</span> 1974년 ~ 현재</p>
            </div>
            <div>
              <p><span className="font-semibold text-amber-700">특징:</span> 바이올린, 가녀린 목소리</p>
              <p><span className="font-semibold text-amber-700">대표작:</span> Alla Fiera dell'est (1977)</p>
              <p><span className="font-semibold text-amber-700">영향:</span> 이탈리아 민속음악, 동화적 서정성</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">이</span>
            </div>
            <div>
              <p className="font-semibold text-amber-800">이응민</p>
              <p className="text-sm text-amber-600">hayden@hitel.net | 1994년 6월</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">천사의 음성, Angelo Branduardi</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              선량한 사슴처럼 동그랗고 커다란 눈망울, 가느랗고 곱슬한 머리카락이 동그랗고 망태기를 엎어놓은 듯한 머리모양, 
              삐적마른 몸집의 유약한 이미지가 보호본능을 자극하는 체구의 '안젤로 브란두아르디'. 그의 목소리는 그가 연주하는 
              바이올린의 가녀리고 나긋나긋한 섬세함과 첼로의 차분하고 부드러운 슬픔을 함께 갖고 있다.
            </p>

            <p>
              슬픈 노래를 부를 때도, 흥겨운 노래를 부를 때도 그의 목소리는 절제되어 있다. 그 누구도 흉내낼 수 없는 그만의 
              이 독특한 목소리는 언제까지나 우리 모두의 가슴에 아름답게 자리하고 있을 것이다.
            </p>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-semibold text-amber-800 mb-2">디스코그래피</h3>
              <p>
                74년 그의 사랑하는 아내 Luisa 'Paco' Zappa Branduardi에게 바친 앨범 《Angelo Branduardi》('74)를 
                발표한 이래 92년 《Si può fare》까지 14장의 정규앨범을 우리 앞에 선보였다. 모든 앨범이 나름대로의 아름다움과 
                그의 고운 숨결이 숨쉬고 있다.
              </p>
            </div>

            <p>
              그의 노래에는 수많은 동식물이 등장하고 소외된 사람들에 대한 따뜻한 시선이 숨겨져 있다. 자연에 대한 그의 사랑은 
              Luisa와 그의 귀여운 자녀들에게까지 확대되고 세계에 대한, 인간에 대한 사랑으로 나타난다. 자그마한 것에 대한 
              그의 관심과 애정어린 시선이 그를 진정한 '아티스트', '휴머니스트'로 만드는 것이 아닐까?
            </p>

            <p>
              '천사'라는 이름이 전혀 어색하지 않은 동안(童顔)의 얼굴, '아름다움'을 가득가득 담고 있는 그의 노래는 세상의 
              힘겨움에 지친 우리의 어깨를 연인처럼 사랑스럽게 어루만져주고, 우리의 본원적인 외로움과 슬픔을 위로해준다.
            </p>

            <div className="text-center italic text-amber-700 py-4">
              "오늘의 음악여행은 결코 외롭지 않을 것이다. 사랑스럽고 아름다운 그의 음악과 함께 있으니..."
            </div>
          </div>
        </div>

        {/* 곡 리뷰 섹션들 */}
        <div className="space-y-6">
          {/* Forte - Si può fare */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 Forte - Si può fare (1992)</h3>
            <p className="text-gray-700 leading-relaxed">
              가장 최근에 발표된 그의 92년 앨범 《Si può fare》에 담겨 있는 곡으로 22년 전 그의 음악과 지금의 변화된 음악을 
              비교해 들어보기 위해 선곡했다. 예전 음악에서 별로 들을 수 없었던 힘차고 경쾌한 드럼밍이 어깨를 들썩이게 할 정도로 
              흥겨운 이 곡은 Zachary Richard의 아코디온연주가 독특한 매력을 발산한다. 그의 음악의 형식적인 면은 다소 변했다고 
              할 수 있지만 본질적인 면, 정겹고 사랑스러운 그의 음악 세계는 42살 중년의 나이에도 변함이 없음을 발견하고 흐뭇함을 느끼게 된다.
            </p>
          </div>

          {/* Ch'Io sia la fascia / Lentamente */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 Ch'Io sia la fascia / Lentamente - Angelo Branduardi '74</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                그의 74년 데뷔앨범에 실린 이 곡은 개인적으로 Angelo의 곡 중 가장 좋아하는 곡이고, 《Il dono dell cervo》와 더불어 
                Angelo의 음악에 헤어날 수 없는, 그렇지만 행복한 세계로 빠뜨린 곡이다.
              </p>
              <p>
                이 앨범은 다양한 형식의 곡을 담고 있어, 그의 앞으로 작품의 방향성을 설정하는데 고심한 흔적이 보이고 있다. 
                아방가르드 혹은 챔버록의 분위기가 풍기는 "Eppure chiedilo agli uccelli"가 있고, 영국 포크록의 영향을 받은 
                곡들도 담겨져있다. 심지어 60년대 후반에서 70년대 초반 시대를 풍미했던 사이키델릭의 영향을 받은 듯한 곡 
                "E domani arrivera'"가 11분이 넘는 시간 동안 몽롱한 사이키의 음향을 가득 토해내기도 한다.
              </p>
              <div className="bg-amber-50 p-3 rounded border-l-2 border-amber-300">
                <p className="italic">
                  오늘 선곡한 이 두 곡은 데뷔앨범에서 가장 감성적인 작품으로 그의 이후 작품들의 방향성으로 설정된 듯한 느낌을 갖게 한다. 
                  "Lentamente"에서의 가녀리고 섬세한 그의 목소리는 너무나도 아름답다. 바로 세상의 아름다움을 모두 담고 있는 듯한 
                  이 곡은 바로 그의 사랑하는 연인 Luisa에게 바치는 연가였다.
                </p>
              </div>
            </div>
          </div>

          {/* Confessioni di un malandrino */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 Confessioni di un malandrino - La luna</h3>
            <p className="text-gray-700 leading-relaxed">
              '산적의 고백'이라는 이 곡은, 여성의 자유와 인간의 해방을 위해 춤추었던 '맨발의 이사도라', 결혼제도를 부정하던 
              이사도라 덩컨의 최초이자 마지막이었던 20살 연하의 남편, 농촌 출신으로 기계문명에 추월당하는 농촌 공동체의 슬픔을 
              노래했던 20세기 러시아의 최고시인으로 손꼽히는 '세르게이 에세닌'의 시에 곡을 붙여 만든 곡이다. 그의 대표작 중 하나로 
              슬프지만 힘이 느껴지는 곡이다.
            </p>
          </div>

          {/* Gli alberi sono alti */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 Gli alberi sono alti - La luna</h3>
            <p className="text-gray-700 leading-relaxed">
              두번째 앨범 《La luna》부터 이태리의 거장 Maurizio Fabrizio가 참여해서 Angelo의 기타와 아름다운 화음을 이뤄낸다. 
              Angelo의 음악을 자세히 귀 기울여 들으면 영롱한 기타음이 서로 대화하듯 양 채널을 넘나드는 걸 느낄 수 있다. 
              마우리지오는 기타 뿐만 아니라 아름다운 오케스트레이션 편곡도 담당하여 Angelo가 만들어냈던 아름다움에 커다란 기여를 하게 된다. 
              이 곡은 영국의 민요로 영국의 포크록계의 거목 Pentangle의 작품으로도 유명한 작품이다.
            </p>
          </div>

          {/* Il dono dell cervo */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 Il dono dell cervo - Alla fiera dell'est</h3>
            <p className="text-gray-700 leading-relaxed">
              자신들의 장수를 위해 사슴을 살해하는 인간의 비인간적 행위를 꼬집은 이 곡은 팬플룻의 사용과 타악기의 남미리듬의 도입으로 
              경쾌하지만 슬픈 멜로디가 돋보이는 곡이다. 동물에 대한 Angelo의 사랑이 드러나는 곡으로 오늘은 《Concerto》에 담겨있는 곡, 
              "The stag(숫사슴)"를 들어보겠다. 원곡보다 남미의 냄새는 덜하지만 뛰어난 연주력을 바탕으로 더욱 화려한 음을 들려주고 있다.
            </p>
          </div>

          {/* Il funerale */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 Il funerale - Alla fiera dell'est</h3>
            <p className="text-gray-700 leading-relaxed">
              '장례식'이라는 곡 제목답게 음울한 분위기를 연출하는 곡으로 우리나라에서 특히 사랑받고 있는 곡이다. 애처럽게 울려퍼지는 
              바이올린 연주가 듣는 이를 엄숙하게 만든다. 후반부 보컬 부분에서도 눈물이 뚝뚝 떨어질 것 같은 그의 목소리는 심금을 뒤흔든다. 
              그의 곡 중 가장 어두운 분위기의 곡으로 Mauro Pelosi의 《La stagione per morire》 앨범의 분위기와 유사하다는 느낌을 받게 된다.
            </p>
          </div>

          {/* La favola degli aironi */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-400">
            <h3 className="text-xl font-bold text-amber-800 mb-3">🎵 La favola degli aironi - Alla fiera dell'est</h3>
            <p className="text-gray-700 leading-relaxed">
              '푸른 왜가리(청로) 이야기'가 뜻하는 것처럼 눈 내리는 겨울밤, 화롯불에 앉아 할머니께서 해주시는 옛날 얘기를 들으며 
              꾸벅꾸벅 졸던 어린 시절을 그리게 한다. Angelo와 Luisa의 사이에서 태어난 귀여운 딸 Sarah에게 들려주는 노래가 아닐까 
              생각될 정도로 그의 목소리와 바이올린 연주는 정겹고 따뜻하다. 이 앨범 뒤에 적혀있는 'L'album dedicato a Luisa e Sarah.'라는 
              글귀에서 보듯 "Canzone per Sarah"와 함께 귀여운 딸 사라에게 바치는 곡이라 생각되는 곡이다.
            </p>
          </div>
        </div>

        {/* 추가 앨범 정보 */}
        <div className="bg-amber-50 rounded-lg p-6 mt-8 border border-amber-200">
          <h3 className="text-xl font-bold text-amber-800 mb-4">📀 대표 앨범: Alla Fiera dell'est (1977)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700">
            <div>
              <p><strong>A면:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Alla Fiera Dell'Est</li>
                <li>La favola degli aironi</li>
                <li>Il Vecchio E la farfalla</li>
                <li>Canzone per Sarah</li>
                <li>La serie dei numeri</li>
              </ul>
            </div>
            <div>
              <p><strong>B면:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Il Dono del cervo</li>
                <li>Il funerale</li>
                <li>L'uomo E la nuvola</li>
                <li>Canzone del Rimpianto</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-amber-600 italic">
            이탈리아를 대표하는 칸타토레인 안젤로 브란두아르디는 지중해 민족음악을 그의 감각으로 처리한 메르헨적인 음악을 들려준다. 
            Pete Sinfield가 영어로 번역한 《High Down Fair》는 본작의 영어판이다.
          </p>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/b" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← B 목록으로
          </Link>
          <div className="text-amber-600 text-sm">
            19/24 완료
          </div>
        </div>
      </div>
    </div>
  );
} 