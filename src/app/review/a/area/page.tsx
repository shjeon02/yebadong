import Link from "next/link";

export default function Area() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6 leading-relaxed">
        <h2 className="text-3xl font-bold text-center mb-8">Area</h2>
        
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[Notte, 정종화, z9084042@axp3400.kyungpook.ac.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-2"><strong>AREA - 이탈리아 아방가르드 록의 전설</strong></h3>
              <p>그 어떤 그룹들보다도 독특하고 개성적이고 실험적인 음악을 했었던, 그리고 전세계의 그 어떤 보컬리스트와 비교해서도 도무지 그와 비교될만한 걸물을 찾기힘든 괴물 <strong>'데미뜨리오 스트라토스(Demetrio Stratos)'</strong>가 이끌었던 슈퍼그룹이다.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">멤버 구성 (1973년 데뷰 당시)</h4>
              <ul className="space-y-1">
                <li>• <strong>Demetrio Stratos</strong> - 보컬, 올겐</li>
                <li>• <strong>Paolo Tofani</strong> - 기타, 신디사이저</li>
                <li>• <strong>Patrizio Farselli</strong> - 키보드</li>
                <li>• <strong>Patrick Dijivas</strong> - 베이스</li>
                <li>• <strong>Giulio Capiozzo</strong> - 드럼</li>
                <li>• <strong>Eddy Busneto</strong> - 섹소폰, 클라리넷</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold mb-2">음악적 특징</h4>
              <p>Area는 <strong>민속적이고 실험적인 퓨전, 재즈락 사운드</strong>를 들려주는 밴드입니다. 그 당시 이태리에서 보기 힘들었던 <strong>프리재즈적인 사운드</strong>와 독특한 민속음악스타일(발칸반도계의 민속음악)의 <strong>추가리듬</strong>이라고 불리우는 독특한 리듬패턴과 함께 절묘하게 어울어진 음악을 구사했다.</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium">[3M, eckois@plaza.snu.ac.kr]</p>
          <div className="mt-3 space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
              <h4 className="font-semibold mb-2">음악적 평가</h4>
              <p>이 그룹의 보컬은 정말 개성적이어서 듣는 이에 따라서 엄청 좋아하실 분도 계시겠고 싫어 하실 분도 있겠군요. 라이브를 제외한 Tic Tac이전의 스튜디오 앨범을 모두 들어 봤습니다만 <strong>*꽉 찬* 완성도를 가진 앨범은 하나도 없었습니다</strong>. 하지만 모든 앨범들이 뿌리치기 힘든 매력을 가지고 있습니다.</p>
            </div>
            
            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
              <h4 className="font-semibold mb-2">추천 앨범</h4>
              <ul className="space-y-1">
                <li>• <strong>훌륭한 연주력을 감상하고 싶으신 분</strong> → 2집 (먼로 사진이 조그맣게 붙어 있는 앨범)</li>
                <li>• <strong>보컬과 연주사이의 멋진 조화를 들어보고 싶으신 분</strong> → 1집 (철가면 인형의 확대 사진)</li>
              </ul>
              <p className="mt-2 text-sm italic">growing on-type이니 처음 들으실 땐 느낌이 오지 않으실 것입니다.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-lg">주요 앨범</h4>
          
          <div className="bg-gray-50 p-3 rounded">
            <h5 className="font-medium text-blue-600">1. Arbeit Macht Frei (1973)</h5>
            <p>그들의 데뷰작인 만큼 그들의 색깔이 매우 잘 채색된 앨범이다. 모두 6곡의 중편들로 이루어진 (대개가 6-7분정도) 본작은 그 당시 이태리에서 보기 힘들었던 프리재즈적인 사운드와 독특한 민속음악스타일의 추가리듬이라고 불리우는 독특한 리듬패턴과 함께 절묘하게 어울어진 앨범이다.</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded">
            <h5 className="font-medium text-blue-600">2. Caution Radiation Area (1974)</h5>
            <p>괴기한 음성과 익숙치 않은 사운드를 들려주는 아리아의 음악. Area의 앨범중 최고의 작품이라고 생각하는 앨범이며 그 당시 이탈리아 레코드 비평가상을 받은 작품이기도 하다.</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded">
            <h5 className="font-medium text-blue-600">3. Crac! (1975)</h5>
            <p>이들의 최고의 명작중의 하나. 명반 'Crac!'에 수록된 'Area 5'는 그들의 그룹명이 들어가는 그룹송으로, 아방가르드적 실험성이 극도로 발휘된 곡이다.</p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded">
            <h5 className="font-medium text-blue-600">4. Are(A)zione (라이브 앨범)</h5>
            <p>라이브의 첫부분을 장식할 만큼 Area를 대표하는 곡들이 수록된 라이브 명반.</p>
          </div>
        </div>
        
        <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
          <h4 className="font-semibold mb-2">데미뜨리오 스트라토스의 죽음</h4>
          <p>Area의 음악적인 리더이며, 카리스마적인 보컬리스트였던 데미뜨리오 스트라토스가 세상을 떠나면서, 보컬리스트를 잃어버린 Area는 더 이상 존재할 이유가 없었고 그룹은 해체되었다. <strong>Area는 단 한 단어인 '광기(Insanity)'로 특징지워졌다. 어느 누구도 Area와 같은 사운드를 만들어낼 수 없었다.</strong></p>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 