"use client"

import Link from "next/link"

export default function SalemHillPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Salem Hill</h1>
            <p className="text-lg text-gray-600">미국 • 네오 프로그레시브 록</p>
          </div>

          {/* Album Review */}
          <div className="mb-8">
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-3">Not Everybody's Gold</h2>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fish
                </span>
                <span className="text-gray-500">incheol.shin@vanderbilt.edu</span>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  오랜만에 리뷰를 쓰네요. 그동안 별로 산 앨범도 없었고.. 냅스터에서 추억의 팝송 
                  다운받느라 너무 정력을 허비해서 새 앨범들을 들을만한 여유가 없었던것도 사실이네요.
                </p>
                
                <p>
                  미국의.. 그것도 <strong>컨트리 음악으로 유명한 테네시 주 출신</strong>의 프로그레시브 락 
                  그룹 이라면 벌써 접어줄만큼 접어주고 들어가야겠죠?
                </p>
                
                <p>
                  하지만 제가 이 테네시주 레바논에 본거지를 틀고있는 그룹 Salem Hill의 씨디를 
                  선듯 주문하게 된건 결코.. 제가 살고 있는 테네시 고장 사랑(??) 등의 
                  지역감정에서 출발한것은 절대 아닙니다.
                </p>
              </div>
            </div>

            {/* 배경 정보 */}
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">테네시의 음악 환경</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  테네시주는 남부라고 하기도 뭐하고.. 그렇다고 중부/북부는 절대 아닌 지역정서를 
                  가지고 있는 곳이죠. 잘 아시는 '테네시 왈츠'라는 곡으로 짐작할수 있는 분위기의 
                  목장/골프장/등등이 대부분을 차지하고 있고..
                </p>
                <p>
                  컨트리 음악으로 유명한 <strong>내쉬빌</strong>과 엘비스 프레슬리의 
                  <strong>그레이스랜드</strong>로 유명한 멤피스가 각각 '컨트리의 본고장'과 
                  '락큰롤의 발상지' 라는 슬로건으로 '뮤직 스테이트' 내쉬빌의 음악 문화를 
                  양분하고 있습니다.
                </p>
                <p>
                  하지만 프로그레시브락은... 그렇게 쉽게 찾아볼수가 없었죠. Salem Hill의 
                  멤버들과도 몇마디 이메일로 대화를 나누었는데.. 내쉬빌에서야말로 자기들은.. 
                  <strong>Total Alien</strong>이라고 하더군요.
                </p>
              </div>
            </div>

            {/* 앨범 분석 */}
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">앨범 분석</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  이들이 연주해내는 프로그레시브 락은.. 결코.. 프로그레시브락의 고전적인 의미인 
                  락+재즈+클래식의 하이브리드의 변형인 락+컨트리+블루스 라고는 절대 볼수 없는 !! 
                  <strong>전형적인 심포닉 프로그레시브락</strong>을 들려줍니다.
                </p>
                
                <p>
                  올해 나온 이들의 다섯번째 앨범 (처음 두 앨범은 카셋트 온리 릴리스) 
                  <strong>Not Everybody's Gold</strong>는 우선 그 탁월한 자켓 디자인 (^^;)으로 
                  구매자를 감동시켰습니다.
                </p>
                
                <p>
                  90년대 초반에 프로그레시브, 아니 네오-네오프로그레시브의 새로운 부흥..에 
                  떠밀려 나온 B급 네오 프록 그룹들의 앨범 자켓을 연상시키는 조악한 
                  '프로그레시브적으로 보이고 싶은' 앨범 디자인.. 정말 너무나 오랫만에 보는 
                  허접한 'wannabee Paul Whitehead' 'wannabee prog-album design'은 정말 
                  오랫만에 신선한 충격이었습니다.
                </p>
                
                <p><strong>하지만 내용만큼은 무척이나 충실합니다.</strong></p>
              </div>
            </div>

            {/* 트랙 리스트 */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">트랙 리스트</h3>
              <div className="space-y-2 text-gray-700">
                <div>1. Prelude (4:21)</div>
                <div>2. Riding the Fence (6:23)</div>
                <div>3. The Last Enemy (7:49)</div>
                <div>4. January (5:56)</div>
                <div>5. Let Loose the Arrow (7:04)</div>
                <div>6. We Don't Know (4:43)</div>
                <div>7. <strong>Sweet Hope Suite (27:54)</strong></div>
              </div>
            </div>

            {/* 주요 곡 리뷰 */}
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">주요 곡 분석</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong>Prelude:</strong> 이번 앨범부터 새로 가입한 키보드 주자 Michael Ayers의 
                  곡으로 좀 유치할정도로 상큼한 연주로 시작되어 스캣과 IQ나 Geoff Downes식의 
                  키보드 연주가 버무림되어 짧은 타악기 액센트까지 삽입되어 발랄한 분위기로 
                  앨범을 열어나갑니다.
                </div>
                
                <div>
                  <strong>Riding the Fence:</strong> 역시 미국밴드 답게 Kansas를 연상시키는 
                  스태디엄 락 넘버입니다. 무척 바쁘게 연주하는 기타가 들을만 합니다.
                </div>
                
                <div>
                  <strong>The Last Enemy:</strong> 아름다운 심포닉 발라드입니다. 
                  국내 FM방송에 어필할만한.. ^^;
                </div>
                
                <div>
                  <strong>Sweet Hope Suite:</strong> 이 앨범의 마지막 곡이자 (히든트랙을 제외한) 
                  이들 살렘 힐이 뭔가 보여주려고 애쓴 27분 54초짜리 대곡입니다. 
                  <strong>Kansas의 바이올린 주자였던 David Ragsdale이 참여</strong>한 이 대곡은.. 
                  정말 오랜만에 꽉차고 들을만한 심포닉 락입니다.
                </div>
                
                <div>
                  특별히 세번째 파트에서 연주되는 Ragsdale의 바리톤 바이얼린에 어우러지는 
                  아름다운 멜러디는 오랜만에 어린시절.. 프록의 대곡에 감동하던 시절..의 
                  추억을 되살리게 해줍니다.
                </div>
              </div>
            </div>

            {/* 총평 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">총평</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  물론 이 앨범은 앨범 타이틀대로.. <strong>Not Everybody's Gold</strong> 
                  모든 프록팬들이 좋아할만한 앨범은 아닙니다.
                </p>
                
                <p>
                  하지만 Kansas의 바이얼린을 좋아했었고.. 네오프록이라는 선입관을 
                  탐탁하지 않게 생각하시는 분들에겐 괜찮은 앨범일것 같습니다.
                </p>
                
                <p>
                  개인적으로는 SMPTe의 All of the above보다 Salem Hill의 
                  <strong>Sweet Hope Suite가 더 마음에 드는 2000년도의 Epic</strong>입니다. ^^;
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/s" className="text-blue-600 hover:text-blue-800 font-medium">
              ← S 폴더로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 