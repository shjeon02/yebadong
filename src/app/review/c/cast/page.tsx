import Link from 'next/link';

export default function CastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Cast</h1>
          <p className="text-lg text-green-600">멕시코의 중견 네오 프로그레시브 밴드</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-green-700">국가:</span> 멕시코</p>
              <p><span className="font-semibold text-green-700">데뷔:</span> 80년대 중반</p>
              <p><span className="font-semibold text-green-700">데뷔작:</span> "Landing in a serious mind"</p>
              <p><span className="font-semibold text-green-700">장르:</span> Neo-Progressive Rock</p>
            </div>
            <div>
              <p><span className="font-semibold text-green-700">구성:</span> 보컬+플룻, 기타... (Genesis 스타일)</p>
              <p><span className="font-semibold text-green-700">레이블:</span> Musea</p>
              <p><span className="font-semibold text-green-700">특징:</span> 남미 특유의 감각</p>
              <p><span className="font-semibold text-green-700">지위:</span> 중견을 넘어 고참 밴드</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <p className="font-semibold text-green-800">brave (안병욱)</p>
              <p className="text-sm text-green-600">anwook@brave.yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">🌎 네오 프로그의 숨은 보석</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Underrated된 멕시코 밴드</h3>
              <p className="text-green-700 mb-3">
                neo-progish한 사운드를 들으면서, Collage나 Clepsydra와 같은 팀들을 접하게 되면, 
                가끔 그 신선함에 놀라지 않을 수 없는데요... 아마도 최근들어 Collage만큼 진부한 
                neo-prog사운드에 자국(polish)의 지역적 색깔을 입혀 아름다운 사운드를 들려주는 
                팀도 드물지 않을까 하는 생각입니다...
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-green-300">
                <p className="text-green-800 font-medium">
                  실은 neo-prog밴드라는 수식어 땜에 국내에서 <strong>underated된 팀중의 하나가 
                  멕시코 출신의 CAST</strong>가 아닐까 싶은데, 가끔 'Keyboard driven neo-prog sound'라는 
                  문구땜에 이들의 사운드를 안들어 보신 분들은 Clive-Nolan류의 밴드로 오해하지 않을까도 싶어요..
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">오랜 경력과 성과</h3>
              <ul className="space-y-2 text-emerald-700">
                <li>• 이미 80년대 중반에 데뷔앨범 "Landing in a serious mind"를 발표</li>
                <li>• 지금까지 더블 CD의 2장의 라이브 앨범 포함</li>
                <li>• 99 Baja Prog 페스티발의 헤드라이너</li>
                <li>• 이미 중견을 넘어 고참의 자리를 넘보고 있는 팀</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">🎵 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Genesis 스타일의 구성</h3>
              <p className="text-green-700">
                피터 가브리엘 시절의 Genesis와 똑같은 멤버구성(보컬+플룻,기타...)에 역시 
                Genesis적인 심포닉 요소 그리고 neo-prog 스타일의 정제된 사운드를 
                <strong>남미 특유의 감각으로 입히고 있고요</strong>....
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">Iluvatar와의 비교</h3>
              <p className="text-emerald-700 mb-3">
                매우 세련된 심포닉을 구사한다는 점에서 미국출신의 Kinesis 레이블의 스타 
                Iluvatar와 비슷하다고도 할 수 있을 것 같은데,
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-emerald-300">
                <p className="text-emerald-800 font-medium">
                  Iluvatar가 미국이라는 지역적 한계를 넘고 있지 못하고 있는 반면, 
                  <strong>Cast는 오히려 그 지역적 색깔을 십분 발휘</strong>하고 있습니다...
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">핵심 멤버 - Dino Carlo Brassea</h3>
              <p className="text-green-700">
                특히, <strong>여린듯 여린듯한 Dino Carlo Brassea의 보컬과 플룻연주는 상당히 좋습니다</strong>.... 
                늘 변하지 않는 사운드를 들려준다는 점에서 더 점수를 주고 싶네요....
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">💿 "Imaginary Window" (2000)</h2>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="text-xl font-bold text-green-800 mb-3">8번째 스튜디오 앨범</h3>
            <p className="text-green-700 mb-4">
              올초에 Musea 레이블을 통해 이들의 8번째 스튜디오 앨범 "Imaginary Window"가 발매되었습니다.
            </p>
            <div className="bg-white p-4 rounded border-l-2 border-green-300">
              <p className="text-green-800 font-medium">
                이번 새앨범에 대한 평중에 "the best have ever done"이란 문구도 가끔 보이지만, 
                그만큼은 아닌 것 같구요....
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-2">앨범 구성</h3>
              <p className="text-green-700">
                대곡중심보다는 10분내외의 중편에 4-5분짜리 단편 instrumental로 연결되어 있는 구성에 
                연주도 어느 한 파트로 치우치지 않고 있고 균형있게 잘 잡혀 있구요...
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">🎧 추천 앨범들</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">입문자용</h3>
              <p className="text-green-700 mb-2">
                <strong>CAST의 사운드를 한번도 들어보시지 않은 분들께는</strong>
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-green-300">
                <p className="text-green-800 font-medium">
                  이번 앨범보다는 <strong>"Beyond Reality" (1997)</strong>를 권해 드리고 싶고요...
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">관련 추천작</h3>
              <p className="text-emerald-700">
                기타리스트 Francisco Hernandez의 솔로 앨범 
                <strong>"Whispers from the winds"</strong>도 상당히 좋습니다.....
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-4">🌟 Cast의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-green-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Genesis 스타일의 멤버 구성</li>
                <li>• 남미 특유의 감각적 사운드</li>
                <li>• 세련된 심포닉 neo-prog</li>
                <li>• 지역적 색깔의 십분 발휘</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">경력과 성과:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 80년대 중반부터 활동</li>
                <li>• 8장의 스튜디오 앨범</li>
                <li>• Baja Prog 페스티발 헤드라이너</li>
                <li>• 일관된 고품질 사운드 유지</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-green-600 text-sm">
            12/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 