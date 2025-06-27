import Link from "next/link";

export default function AquarellePage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Aquarelle</h2>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[정종화, notte, 94.7]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-2"><strong>Aquarelle - Sous Un Arbre</strong></h3>
              <p>캐나다의 프랑스어권인 퀘백주 출신의 20대 초반의 7명으로 구성된 그룹이다. <strong>Pierr Bournaki</strong>의 바이올린, <strong>Poerr Lescaut</strong>의 피아노 그리고 신비스러운 목소리를 선사하는 여성 보컬 <strong>Anne-Marie Courtemanche</strong> 등으로 구성되어 있다.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">멤버 구성</h4>
              <ul className="space-y-1">
                <li>• <strong>Pierr Bournaki</strong> - 바이올린</li>
                <li>• <strong>Poerr Lescaut</strong> - 피아노</li>
                <li>• <strong>Anne-Marie Courtemanche</strong> - 여성 보컬</li>
                <li>• 드럼, 베이스, 섹소폰, 플루트, 일렉기타 (총 7인 구성)</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>본작은 아트록지 2호에도 적혀있듯이 진짜로 <strong>아름답다</strong>는게 실감이 되는 음악이다. 전율적이고 파격적인 실험성은 없지만 <strong>아름다움!</strong> 그 하나만으로 충분히 인정받을만한 좋은 앨범이다.</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">트랙별 분석</h4>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium text-blue-600">1. La Magie Des Sons</h5>
                <p>차분한 바이올린의 인트로에 이어, 박력있는 기타리프와 자극적으로 선어대는 바이올린의 공격적인 리프가 화려하게 펼쳐진다. 마치 영국의 명그룹 UK의 'Caesar's Palace Blues'나 이태리의 QVL의 'Un Giorno Un Amico'의 공격적인 연주가 연상되기도 한다.</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium text-blue-600">2. Francoise</h5>
                <p>아름답고 새벽의 깨끗하고 맑은 공기의 신선함이 느껴지는 상큼한 플루트의 연주가 인상적인 곡이다. 후반부에 펼쳐지는 환상적인 중남미의 정신없이 신나는 타악기의 출렁거림이 재즈적인 자유분방함의 피아노와 분위기만점인 섹소폰 연주와 함께 축제같은 분위기로 마무리된다.</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium text-blue-600">3. Bridge</h5>
                <p>낭만적인 느낌의 여유로운 건반터치와 역시 유유자적한 드럼비트가 무드있게 펼쳐지며, 중반부까지의 자연스럽고 자유스러운 재즈풍의 연주가 신나게 펼쳐진다. 신선한 느낌의 여성보컬의 허밍이 자유자재로 분위기를 띄우는 찐한 섹소폰 연주와 대비가 되게 차분히 펼쳐진다.</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium text-blue-600">4. Sous Un Arbre (타이틀곡)</h5>
                <p>본작의 타이틀곡이다. 너무나 아름다움만이 뭉쳐진 반짝 반짝 빛나는 트랙이다. 너무나 서정적이어서 맑은 물이 뚝뚝 떨어질듯한 바이올린 선율과 또한 너무나 선연히 푸른빛을 내는 플루트의 연주, 중반부에 잠시 등장하는 의외지만 강렬한 느낌의 디스토션 일렉기타의 충만된 연주가 인상적이다.</p>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium text-blue-600">5. Aquarelle (3부작)</h5>
                <p>이들의 그룹송 총3부작으로 이루어진 곡이다. 자신의 이름을 내건 곡인 만큼 이들의 음악의 특징이 잘 나타나있는 역시나 뛰어난 작품이라고 하겠다.</p>
                <ul className="mt-2 space-y-1">
                  <li><strong>Part I</strong> - 시냇물 흐르듯 흘러가는 피아노 선율과 서정적인 바이올린 연주</li>
                  <li><strong>Part II</strong> - 재즈적 리듬파트의 등장과 함께 바이올린의 선율이 자유분방히 확장</li>
                  <li><strong>Part III</strong> - 베이스라인의 도전적인 연주로 시작, 모든 악기가 경쟁적인 자기의 소리를 내보이는 총력적인 연주</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[이응민, hayden@hitel.net, 94.8]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2">아름답고 상큼한 '수채화' - Aquarelle</h4>
              <p>'아름다움'이 무엇인지, 아름다움을 진정으로 향유할 수 있는 사람이 누구인지, 아름다움이 소리인지, 영상인지 알 수 있게 해주는 이 작품, Aquarelle의 &lt;Sous un arbre&gt;이다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
              <h4 className="font-semibold mb-2">평가</h4>
              <p>솔직하게 밝히면 <strong>Aquarelle이 '모범답안'</strong>이라면 Harmonium의 것은 '정답'이다. 이 작품을 따스한 가슴으로 감싸안고, 세상의 모든 짜증나는 일과 고민을 떨쳐버리고 자신의 모든 감각기관을 이들이 내는 아름다운 소리에 몰입시켜보자.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 