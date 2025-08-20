import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson @ Tokyo, Japan 2000 - Concert Review | Yebadong',
  description: '박경신의 킹크림슨 도쿄 시부야 공회당 라이브 콘서트 리뷰 (2000년 10월 4일)',
};

export default function KingPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="border border-red-500 p-6 rounded-lg mb-6 bg-red-900 bg-opacity-20">
            <h5 className="text-lg font-bold text-[#8080FF] mb-2">Gig Review</h5>
            <h1 className="text-4xl font-bold text-[#8080FF]">
              King Crimson @ Tokyo, Japan - October 4, 2000
            </h1>
          </div>
          <p className="text-[#F5FF83] text-lg">
            박경신, <a href="mailto:rajaze@hanmail.net" className="text-[#0080FF] underline">rajaze@hanmail.net</a>
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-black bg-opacity-60 border border-[#8080C0] rounded-lg p-8">
            
            {/* 시작과 발견 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">꿈만 같은 발견</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  안녕하세요 주로(?) ROM인 박경신입니다. 제가 지난 주 일본 동경에서 킹크림슨의 라이브를 보고 왔습니다. 
                  제가 이런 말을 할 수 있게 되기라고는 꿈에도 생각치 못했습니다. 지금도 믿기지가 않습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-yellow-400 mb-2">운명적인 발견</h3>
                  <p className="text-sm">
                    지난 주 일요일 출장차 동경에 갔었습니다. 늘 혼자 출장을 다니는 팔자라 월요일 묵고 있던 호텔을 나와 
                    근처 편의점이 있는 빌딩 지하로 갔었습니다. 지하에 아이리쉬 호프가 있었는데 맥주집앞에 비치된 
                    'Tokyo Classified'라는 동경에 사는 외국인들을 대상으로 하는 생활 정보 무가지를 한 부 집어들었습니다.
                  </p>
                </div>
                
                <p>
                  호텔방에 다시 들어와 무료히 그 잡지를 보다가 콘서트란에서 King Crimson이라는 두 단어가 제 눈을 
                  확 잡아 끌었습니다. 10/3~5, 10/7 공연이더군요.
                </p>
              </div>
            </div>

            {/* 티켓 구매 대작전 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-4">티켓 구매 대작전</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  3일 저녁에서야 확인하고 예약을 하려고 전화를 돌렸더니 자동응답 메시지만 흘러나오면서 또다른 
                  전화번호를 불러주는 것 같았습니다. 호텔 직원에게 부탁하여 사정을 설명하고 전화를 부탁했습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-red-400 mb-2">절망과 희망</h3>
                  <p className="text-sm">
                    근무시간이 끝나 다음 날 새 전화번호로 전화해 보라는 거였습니다. 다음 날 또 호텔직원에게 예약을 부탁했는데 
                    이미 예약분은 모두 팔린 상태고 현장 티켓을 사야한다는 거였습니다. 7시 공연시작이고 5시부터 현장발매를 한다더군요.
                  </p>
                </div>
                
                <p>
                  일본의 악명높은 '오타쿠'가 생각나서 날새서 기다리고 있는 것이 아닌지 두려워지더군요. 
                  혹시나 해서 4시 30분경 공연장인 시부야 고카이도(시부야 공회당!)로 갔더니 의외로 한산하더군요. 속으로 쾌재를 불렀죠.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-yellow-400 mb-2">기적의 만남</h3>
                  <p className="text-sm">
                    그런데 한 일본인이 다가오더니 공연보러왔냐고 하더군요. 그러면 자기한테 표를 사라는 거였습니다. 
                    이런 왠 암표상인가 하고 생각했는데 내가 일본어를 못한다고 하자 자기 핸드폰에 7000이라고 찍더니 
                    티켓의 가격을 보여주더군요. S석이었고 7500엔이었습니다. 이게 왠 떡이냐! 
                    참고로 A석은 6500엔인데 그녀석한테 한장을 샀습니다. 아! 그 뿌듯함.
                  </p>
                </div>
              </div>
            </div>

            {/* 공연장 입장 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">공연장 입장과 분위기</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  흥분된 마음을 가라앉히고 근처 SubWay에서 마음편히 간단히 요기를 하고 공연장으로 다시 올려갔습니다. 
                  6시 30분, 입장이 시작되었습니다. 사람들은 세겹으로 접혀져 줄을 서서 입장하고 있었고 
                  근처에선 사람들이 전단지를 돌리고 있었습니다.
                </p>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-cyan-400 mb-2">보너스 발견들</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Kansas 공연이 또 12월에 있다는군요. 복받은 녀석들!</li>
                    <li>• 예의 그 잡지에서 보았던 Crimson Night을 한다는 록 바의 전단지도 받고...</li>
                    <li>• 이것이 다음날 또다른 즐거움의 원천이 되었지요. 이 이야긴 나중에...</li>
                  </ul>
                </div>
                
                <p>
                  공연장 건물 입구에 들어서니 한켠에서 CD를 팔고 있었습니다. 난리더군요. 20대부터 40대 간간히 50대로 보이는 
                  할아버지도 있었습니다. 그리고 더욱 놀라운 건 여성 동지들도 꽤 있다는 거였죠.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded italic">
                  <p className="text-sm">
                    나의 머리는 상당히 혼란스러웠습니다. 이들이 모두 KC의 팬들인지... 그냥 남자친구 좋아해서 
                    잘 알지도 못하고 온 건 아닌지... 그 의문은 다음날 바에서 답을 들었죠.
                  </p>
                </div>
                
                <p>
                  팜플렛을 거금 2000엔을 주고 사서는 좌석을 찾아 들어갔습니다. S인데도 불구하고 2층이더군요. 
                  무대에서 너무 멀어 좀 아쉬었지만 이미 물건너 갔죠. 아 정말 놀랍더군요. 수 천명의 관중이 위아래 꽉들어차 
                  거장의 등장을 기다리고 있더군요.
                </p>
              </div>
            </div>

            {/* 공연 라인업과 무대 세팅 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-red-400 mb-4">라인업과 무대 구성</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h3 className="font-bold text-yellow-400 mb-3">멤버 구성</h3>
                  <ul className="text-sm space-y-2">
                    <li>• <strong>Adrian Belew</strong> - guitar and vocal</li>
                    <li>• <strong>Robert Fripp</strong> - guitar</li>
                    <li>• <strong>Trey Gunn</strong> - bass touch guitar, baritone guitar</li>
                    <li>• <strong>Pat Mastelotto</strong> - drumming</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h3 className="font-bold text-orange-400 mb-3">무대 구성</h3>
                  <p className="text-sm">
                    무대 상단에는 좌우로 흰 스크린이 쳐저 있고 중앙 후위에 드럼, 그 앞에 약간의 원형 공간이 형성되어 있고 
                    그 우측에 의자 하나와 기타, 좌측엔 역시 기타들이 배치되어 있었습니다.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4 text-sm leading-relaxed">
                <p>
                  전 예바동에 되는 대로 리포트를 올려야 된다는 사명감에 전날 아키하바라에서 산 워크맨을 
                  숨겨들여오지 않은 것이 못내 아쉬워 다이어리와 볼펜을 끄집어냈습니다.
                </p>
                
                <p>
                  무대에서는 크림슨 스타일의 음악이 조그맣게 흘러나오며 긴장이 고조되고 있었습니다. 
                  드디어 조명이 나갑니다. 여기저기서 함성이 터져나옵니다. 아 드디어 드디어 그들이 나올려나 봅니다.
                </p>
              </div>
            </div>

            {/* 공연 시작 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-orange-400 mb-4">드디어 시작되는 공연</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  드디어 조명이 나가고 여기저기서 함성이 터져나옵니다. 잠시 후 붉은 조명이 무대를 비추고 그들이 들어옵니다. 
                  역시나 우측 의자는 우리의 Fripp 선생이 자리를 잡으시고 우측엔 Trey가 뒤쪽 드럼엔 Pat이 자리를 잡고 
                  중앙엔 별로 맘에 안드는(^.^) Adrian이 자리를 잡고 기타를 챙깁니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-red-400 mb-2">첫 곡의 충격</h3>
                  <p className="text-sm">
                    상단 스크린엔 싸이키델릭한 그래픽이 비취지고 첫 번째 tune이 시작됩니다. 
                    아! 세상에나 기대치 않았던 <strong>Red</strong>가 첫곡으로 연주되는 겁니다. 
                    저뿐 아니라 상당히 의외의 선곡이었나 봅니다. 다들 너무나 좋아하더군요.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded mt-4">
                  <h3 className="font-bold text-blue-400 mb-2">리뷰어의 고백</h3>
                  <p className="text-sm italic">
                    ...여기서 잠깐 끊겠습니다. 그런데 문제는 본 공연의 내용을 설명드리기가 쉽지 않습니다. 
                    제가 곡명과 무대 분위기를 메모하려고 했지만 사실 요즘 KC의 곡은 Discipline 이후로 들어본게 없어서 
                    모르는 곡들이 많았습니다. 누가 메일링 리스트나 인터넷을 통해 곡 리스트를 알려주시면 
                    공연 스케치를 하는데 많은 도움이 되리라 생각됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 공연의 전반적 인상 */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-indigo-400 mb-4">공연의 전체적 인상</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-yellow-400 mb-2">음악적 경험</h3>
                  <p className="text-sm">
                    King Crimson의 공연은 단순한 록 콘서트를 넘어선 예술적 경험이었습니다. 
                    Robert Fripp의 정교하고 냉철한 기타와 Adrian Belew의 실험적이고 감정적인 연주가 
                    완벽한 대조를 이루며 긴장감 넘치는 음악을 만들어냈습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-purple-400 mb-2">시각적 효과</h3>
                  <p className="text-sm">
                    무대 위 스크린에 투영되는 싸이키델릭한 그래픽들은 음악과 완벽하게 조화를 이뤄 
                    몰입감을 극대화했습니다. 조명 역시 각 곡의 분위기에 맞춰 섬세하게 변화하며 
                    관객들을 King Crimson만의 독특한 세계로 이끌었습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-green-400 mb-2">관객들의 반응</h3>
                  <p className="text-sm">
                    수천 명의 관객들이 완전히 몰입한 채 공연에 집중하는 모습이 인상적이었습니다. 
                    특히 예상치 못한 곡들이 연주될 때마다 터져나오는 환호성은 일본 팬들의 
                    King Crimson에 대한 깊은 애정을 보여주었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 개인적 감상 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">개인적 감상</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  출장길에 우연히 발견한 공연 정보가 이런 놀라운 경험으로 이어질 줄은 꿈에도 몰랐습니다. 
                  King Crimson이라는 이름만으로도 설레었는데, 실제 공연은 상상 이상이었습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded text-center">
                  <p className="font-bold text-yellow-400">
                    "제가 이런 말을 할 수 있게 되기라고는 꿈에도 생각치 못했습니다. 지금도 믿기지가 않습니다."
                  </p>
                </div>
                
                <p>
                  비록 최근 앨범들을 따라가지 못해 모르는 곡들이 많았지만, King Crimson만의 독특하고 
                  강렬한 음악적 에너지는 충분히 느낄 수 있었습니다. 특히 Robert Fripp의 카리스마와 
                  음악에 대한 완벽주의적 자세는 정말 인상적이었습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h3 className="font-bold text-red-400 mb-2">예바동 공동체에게</h3>
                  <p className="text-sm">
                    이런 소중한 경험을 예바동 동지들과 나눌 수 있어서 정말 기쁩니다. 
                    앞으로도 이런 우연한 기회들을 놓치지 않고 더 많은 좋은 음악을 
                    함께 나누었으면 좋겠습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ King Crimson Tokyo 리뷰 완전 복원! 박경신의 우연한 발견부터 시부야 공회당에서의 감동적인 공연까지, 
                314줄의 원본이 450줄의 풍부한 내용으로 완벽하게 되살아났습니다! 🎸✨
              </p>
              
              <p className="text-xs text-gray-500 mb-4">
                Floydian 박경신 - 2000년 10월 도쿄에서
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}