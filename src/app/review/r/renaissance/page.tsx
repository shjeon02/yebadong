"use client"

import Link from "next/link"

export default function RenaissancePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Renaissance
            </h1>
            <p className="text-lg text-gray-600">
              영국 프로그레시브 • 애니 해슬램의 천상의 목소리
            </p>
          </div>

          {/* Band Info */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">클래시컬 프로그레시브의 정수</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">핵심 인물</div>
                <div>Annie Haslam (애니 해슬램)</div>
              </div>
              <div>
                <div className="font-medium">특징</div>
                <div>클래시컬한 하모니와 아름다운 보컬</div>
              </div>
              <div>
                <div className="font-medium">대표작</div>
                <div>Novella, Ashes Are Burning</div>
              </div>
              <div>
                <div className="font-medium">스타일</div>
                <div>어쿠스틱 기타와 오케스트레이션</div>
              </div>
            </div>
          </div>

          {/* Main Review - Novella */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Novella 앨범 리뷰</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  정영수
                </span>
                <span className="text-gray-500 text-sm ml-2">SHUAI@chollian.net</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`집에서 음악을 들을 때에는 보통 책을 읽거나, 다른 일을 하는게
습관이 되어서  음악에 집중하려는 마음이 별로 생기지 않습니다. 
그저 한쪽 귀만 열어 놓은채 다른 일에 몰두합니다.

어쩌다 정말로 큰 맘을 먹고 음악에 관심을 갖고 한곡, 한곡
음악의 차이를 느끼게 되는 곡들은 나중에 대충 들어도 각 곡
의 느낌을 자연스레 음미하게 되지만 대충 한 두번 듣고 꽂아
둔 음악들은 그저 비스무레하게 한 뮤지션들의 색깔만을 묻어두고
말게 되지요... 나중을 기약하면서,..`}
              </div>
            </div>
          </div>

          {/* Personal Connection */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">개인적 연결고리</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">첫 만남 - "오션집시"</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`제가 가장 먼저 만난 르네상스의 음악은 '오션집시'입니다.
팝음악을 열심히 듣던 제가 라디오를 통해 들을 수 있었던 영원한
팝의 명곡(?)이지요.. 물론 이 앨범에는 없습니다.
SCHEHERAZADE AND OTHER STORIES 앨범에 있을거예요.아마??`}
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`다들 그렇겠지만 이들의 음악하면 먼저 애니해슬램의 아름다운
목소리가 떠오르죠.. 그리고 인상적인 것이 그 보컬 뒤로 깔리는
어쿠스틱 기타 소리, 그리고 여러 악기가 어우러져 아름다운 
하모니를 이루면서 클래식한 느낌이 사방으로 깔린다는 점이죠.`}
              </div>
            </div>
          </div>

          {/* Novella Track Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Novella 수록곡 분석</h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">총 5곡 구성</h3>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`이 앨범에는 모두 5곡의 음악이 들어있죠. 개인적으로 제가 좋아하는
곡 수이고(3~5곡), 대체적으로 긴 곡들입니다.
대부분의 곡들이 다 와 닿지만, 두번째 곡 'The sister', 네번째 곡 
'The Captive Heart'등의 서정적인 곡이 참 아름답다고 생각이 들고,`}
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">웅장한 곡들</h3>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`첫 곡 'Can You Hear Me?',과 마지막 곡 'Touching Once'은 스케일이
크고 웅장한 긴 곡들인데 앨범 해설지에서 명곡이라고 표시한 첫 곡
보다는 긴장감과 고요함을 오가는 가운데 후반부 애니해슬램의 보컬이 
멋지게 클라이막스를 장식하는 마지막 곡이 더 마음에 와닿습니다.`}
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Midas Man</h3>
                <div className="prose text-gray-700 text-sm">
                  3번째 곡은 마이다스 왕의 전설을 노래했다는 'Midas Man'이라는 곡입니다. 애니해슬램이 담담한 어조로 이 곡을 부르고 있습니다.
                </div>
              </div>
            </div>
          </div>

          {/* The Sisters - Special Memory */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">특별한 기억 - "The Sisters"</h2>
            
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`제가 이 앨범을 들으면서 너무나도 놀랍고 반가왔던 것은 두번째 곡 
'The Sisters'때문인데 그 이유는 9년전 아트락을 틀어주던 모 심야
방송에서 녹음해서 곡명도 모르고 눈물 찍, 콧물 찍 하면서 엄청 
감동하며 들었던 곡이 이 앨범의 두번 째 곡이었기 때문이죠.
다시한번 그 때의 감동으로 되돌아 가게 만들어 주었던 앨범이라
더 애착이 가는군요..`}
              </div>
            </div>
          </div>

          {/* Album Comparison */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 비교</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`개인적으로 2집보다는 노벨라 앨범이 더 좋습니다. 다른 앨범은 안들어
봐서 비교하지 못하겠구요. 여러분은 어떠신지요?
2집에서는 너무나 멋진 타이틀곡이 압권이고요 짧으면서 서정적인
'Let it Grow'는 제가 프로그 록을 모르는 친구들에게 녹음해주는
대중적인 프로그 보급 Tape에 빠지지 않는 레파토리 랍니다. ^^;`}
              </div>
            </div>
          </div>

          {/* Other Reviewers' Opinions */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">다른 리뷰어들의 의견</h2>
            
            <div className="space-y-4">
              <div className="bg-cyan-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    김진석
                  </span>
                  <span className="text-gray-500 text-sm ml-2">jindor@mmrnd.sec.samsung.co.kr</span>
                </div>
                <div className="prose text-gray-700 whitespace-pre-line">
{`처절하게 공감합니다 :::: 저역시 노벨라가 _Ashes are Burning_보다 
20배가량 좋습니다. 

마찬가지로 오래전 전영혁님 프로에서 녹음해놓은 The Sisters를 들으며
앨범 구입의 결의를 불태웠었죠.

shuai님과 차이가 있다면 저는 돈을 쳐들여서 일본 재발매 씨디를 샀다는
거고, 몇개월후에 워너에서 재발매되었다는 소식을 듣고, 씨디를 붙들고
부르르 떨었다는 겁니다.`}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    이강영 (Lennon)
                  </span>
                  <span className="text-gray-500 text-sm ml-2">kylee@ctp.snu.ac.kr</span>
                </div>
                <div className="prose text-gray-700 whitespace-pre-line">
{`저도 르네상스 앨범중 하나를 꼽으라면 노벨라를 꼽을 가능성이
젤 높습니다. 저는 1,2집은 합본으로 가지고 있어서 '어느 씨디를
택할 것인가'로 질문이 바뀌면 좀 당혹스럽겠습니다만.

저는 빽판을 들으며, 성시완씨가 월간팝송에 쓴 글 속에 있는 자켓사진을
보며 원판 구입을 맹세했었고...

슈아이님, 아직 르네상스 다른 앨범을 안들어보셨다면 저도 거의 모든
앨범을 추천할 용의가 있습니다. 아, 전 Time Line과 Camera Camera는
안들어 봤어요.`}
                </div>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    박준식
                  </span>
                  <span className="text-gray-500 text-sm ml-2">xanadu@postech.ac.kr</span>
                </div>
                <div className="prose text-gray-700 whitespace-pre-line">
{`The Sisters는 정말 괜찮은 곡입니다. 하지만 저는 르네상스 엘범중 하나를 
꼽으라면 노벨라를 꼽지는 않을것 같네요...
저는 아마 카네기홀 라이브를 꼽을것 같습니다.

특히 두번째 cd에 수록된 Song of Scheherazade (음... 철자가 맞나요??)랑  
Ashes Are Burning에서의 르네상스적(?)인 긴장감이
좋더군요.... 중간에 베이스 솔로가 나오지요??? 우와....!!!!`}
                </div>
              </div>
            </div>
          </div>

          {/* Album Purchase Stories */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 구매 비화</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">일본 재발매의 역전현상</h3>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`강도높은 역전현상덕에 르네상스 앨범은 _Time Line_만 아직 안 사고 
남겨둔 상태입니다. 저는 _Camera Camera_도 좋아요 :)

마침내 원판을 구입했음에도 시대의 변화를 한탄하며 씨디를 구입하였는데
진석님과 같이 그것은 일본발매였고 한달쯤 후 절반가격이 붙은 라이센스를
보고는 피를 토했습니다. 8-)`}
              </div>
            </div>
          </div>

          {/* Azure d'or Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">첫 경험의 실망 - Azure d'or</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`아주 옛날에 오아시스 레코드사에서 Azure d'or (다시한번 철자가 맞나요??? -_-;;;;)
를 라이센스로 발매한적이 있지요... 그게
아마 제가 구한 첫번째 르네상스의 엘범일 겁니다. 그리고 저는 그 엘범에 무척 
실망을 해서 한동안 르네상스와는 담쌓고 지낸적도 있습니다....`}
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-blue-800 mb-2">프로그레시브 록의 클래시컬 아름다움</p>
                <p>
                  Renaissance는 애니 해슬램의 천상의 목소리와 클래시컬한 편곡이 조화를 이룬 
                  프로그레시브 록의 보석이다. 특히 "Novella" 앨범은 대부분의 리뷰어들이 
                  최고작으로 꼽으며, "The Sisters"는 감동적인 명곡으로 평가받는다. 
                  어쿠스틱 기타와 오케스트레이션의 조화, 그리고 서정적이면서도 웅장한 
                  곡 구성은 프로그레시브 록의 서정적 측면을 대표하는 수작이다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 목록으로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 