import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pell Mell | Yebadong',
  description: 'Pell Mell - Marburg 앨범 리뷰 - 독일 프로그레시브 록 그룹',
};

export default function pellmellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pell Mell
            </h1>
            <p className="text-purple-300 text-lg">독일 출신의 프로그레시브 록 그룹</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                Pell Mell " Marburg "
              </h3>
              
              <p className="text-sm text-gray-400 mb-6">
                [정종화, notte@hitel.net, 93.12]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  독일 출신의 그룹인 Pell Mell은 모두 5명의 멤버들로 이루어져 있다.
                  멤버들중에서는 기타를 연주하는 이가 없는것 같고, 게스트 뮤지션을
                  사용하고 있는데, 전반적으로 사이키델릭한 사운드가 주류를 이룬다.
                  하지만, 곳곳에 보이는 클래시컬한 분위기를 연출하는 심포닉적인 사
                  운드도 만만찮게 들려온다. 앨범 자켓은 상당히 독특한데, 아마 모든 
                  생명의 탄생과 어지럽게 뻣어나가는 성장과 발전, 혹은 타락등을 나
                  타내려는 의도가 느껴진다. 아무튼 상당히 상징적이고, 인상적인 자
                  켓이랄수 있겠다. 본작은 그들의 데뷰앨범으로, 특이할 만한 곡은 
                  다른 곡들과는 상당히 다른 분위기로 연주되고 있는 본작의 백미랄
                  수 있는 스메타나의 클래식 작품 "Moldau"랄수 있겠다.
                </p>

                <p>
                  클래식작품을 아름답게 표현한 이들의 연주는 매우 인상적이다. 이후의 이들의 작품
                  인 두번째 앨범 'From The New World'에는 타이틀이랄수 있는 드보르
                  작의 신세계 교향곡과 바하의 토카타와 푸가를 그들의 스타일로 연주
                  하여, 아마 클래식 작품의 편곡에 상당한 관심이 있었던 것으로 생각
                  된다. 아무튼 이들은 모두 4개의 앨범을 발표했는데, 본작인 데뷰앨
                  범이 72년작이며, 두번째 앨범은 72년, 세번째 앨범인 Rhapsody와 네
                  번째 앨범인 'Only A Star'를 각각 76년과 78년에 발표했다.
                </p>

                <p>
                  그럼 일단 본작 " Marburg " 의 면모를 하나하나 살펴보자.
                  멤버는 앞서 언급한 바와 같이 모두 5명으로 이루어져 있는데, 리더로
                  생각되는 보컬과 바이올린 플룻 멜로트론등 진보그룹의 특징적인 주요
                  악기를 모두 담당하고 있는 Thomas Schmitt를 비롯하여, Piano,Organ
                  을 담당하고 있는 Otto Pusch, 퍼커션과 리더보컬의 Rudolf Schon,베
                  이스를 담당하는 Jorg Gotzfried, Drum을 담당하는 Mitch Kniesmeijer
                  등이며, 앞서 말한바와 같이 기타는 게스트 뮤지션인 Andy Kirnberger
                  가 담당하고 있다.
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">보컬에 대한 솔직한 평가</h4>
                  <p className="text-sm leading-relaxed">
                    솔직하게 말해서 개인적으로는 그룹 Pell Mell의
                    보컬파트가 상당히 마음에 들지 않는다. 자신의 능력을 인지하지 못한
                    채, 마구잡이로 감정을 오버하면서 토해내는 별로 설득력없는 보컬이
                    라는 생각이다.(물론, 개인적인 느낌이니...) 아무튼 본작은 전반적으로
                    기본바탕은 사이키델릭한 사운드이다.(특히 하몬드올겐등의...) 그속을 
                    비집고 눈이 부시게, 혹은 백열전구의 온화한 빛처럼 부드럽게 감싸안고
                    있는 클래시컬한 분위기를 자아내는 바이올린과 플륫등의 연주가 무척 
                    인상적이다.
                  </p>
                </div>

                <p>
                  그럼 일단 첫곡부터 살펴보자...
                </p>

                {/* 곡별 분석 */}
                <div className="mt-8 space-y-8">
                  <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">The Crown And The Queen</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        챠이니즈벨소리를 연상케 하는 타격음과 함께 사이키델릭한 향취가 물씬
                        풍기는 올겐연주로 시작되는데, 보컬파트역시 사이키델릭한(?) 향취에 
                        너무 취해서인지, 왠지 모를 불안감을 가득 느끼게 한다. 반복적인 하먼
                        드 올겐의 선율이 대단히 힘차게 느껴지는 중반부의 키보드 솔로와 이어
                        지는 멜로트론의 온화한 배경위에 펼쳐지는 약간은 정신을 차린듯한 보컬
                        리스트의 안정된 자연스런 톤의 보컬이 초반부에 느꼈던 불안감을 조금
                        씻어주는듯하다가, 갑자기 다시 고조되는 감정에 도취가 되어 고음으로 
                        치솟아 버리는 불안한 보컬이..마치 신들린듯이 너무 감정에 덜떠있는 듯
                        하여, 좋은 느낌을 주지는 않지만, 인상적인 파트임에는 틀림없는 듯하다.
                      </p>
                      <p>
                        다시 처음의 벨소리와 함께 펼쳐지는(주도하지는 않고 뒤편에서) 일렉트릭
                        기타연주와 반복적인 올겐연주가 수미상관의 구조를 이뤄가며(솔직히 적당
                        히 반분되는 스타일같기도 하다. 1절..2절..) 특별한 특징없이 펼쳐지는 
                        일렉트릭 기타연주와 불안하기 짝이없는 보컬이 리턴매치로 사이키한 키보
                        드연주와 경합을 해보지만, 시종 분위기를 이끌고 주도하는것은 역시 매력
                        적이며, 환상적인 하먼드올겐을 위시한 키보드 사운드이다. 끝부분의 완전
                        히 이성을 잃어버린듯한 고도로 도취된 보컬의 격정에 지나칠정도로 치우친
                        기성으로 마무리된다. 전반적으로 훌륭한 곡이지만, 보컬의 감정의 자제가
                        힘들었으면, 좀더 뛰어난 보컬을 들려주었다면(카리스마적인!) 대단히 훌
                        륭한 역작이 되었을 것같은 느낌이다. 하지만, 그런 결점을 커버할 만한
                        전반적으로 뛰어난 작품이랄수 있겠다.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h4 className="text-xl font-bold text-green-300 mb-4">Moldau</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        본작의 백미...무엇보다도 이런 표현이 가능하게 한 요인중에 이 곡이 연주
                        곡이라는 요인도 상당히 작용했을것이다. 보컬의 거북살스러운 목소리가 
                        빠져있는 이곡은 너무나 아름다우며, 사랑스럽고, 애상적인 곡이다.
                        몰다우강.. 강물이 흘러가는 소리와 산새소리의 아름다운 효과음으로 시작
                        되어, 너무나 아름다워 가슴이 씨큰한 훌륫연주에 이어지는 멜로트론과 바
                        이올린 선율은 너무나 아름답다. 리더인 Thomas Schmitt의 거의 독무대랄수
                        있는 악기구성인데, 아마 다중녹음을 한것인지? 중반부의 격정적인 바이올린
                        과 멜로트론의 연주는 가슴이 녹아내릴 정도로 감동적이며, 뛰어나다. 원곡
                        도 몇번 들어봤지만, 나름대로 필적할 만한 감동을 선사한다. 격정적인 중반
                        부를 장엄한 챠이니즈벨의 타격으로 다시 영롱하고 아름다운 훌륫연주가 이어
                        지며..Fade Out된다. 너무너무 좋은 곡이다.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h4 className="text-xl font-bold text-blue-300 mb-4">Friend</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        박진감넘치는 드럼연주와 역시 박진감넘치는 하먼드올겐연주로 질주하듯 시
                        작되어 어느정도 리드 보컬의 목소리가 감춰진채(멤버들의 합창) 활기차기 
                        펼쳐지는 초반부에 이어지는 중반부의 아름다운 훌륫소리는 전율을 느끼게
                        할 만큼 충격적인 반전을 이루어낸다. 어쩌면 억지스럽게 곡의 분위기의 급
                        전환이 일어났지만, 그 전환이 너무나 자연스럽게 느껴지는것은 아름다운 훌
                        륫연주에 쉽게 강하게 이끌리기 때문일것이다. 이어지는 허밍...? 어느정도
                        질서있게 펼쳐지는 백 보컬의 목소리위에 겉도는듯이만 느껴지는 리드보컬의
                        튀는(?) 목소리...이어지는 드럼비트에 맞춰서 펼쳐지는 한바탕의 혼란스런
                        소동(?) 글쎄, 어차피 아름다운.. 보컬 하모니.. 이런것을 기대할 수 없는
                        목소리를 가진 보컬이면, 그냥 포기하고 들어주는것도 괜찮겠지만, 솔직히
                        말해서, 닭살 돗는다. 쩝.. '친구'..흠..그냥 어릴적의 치기..! 장난..! 그
                        정도로 봐주자..하지만! 뒤어어 지는 압도적인 하먼드 올겐 연주는 대단히
                        인상적이며, 파워가 넘친다! 대단히 뛰어나다! 그렇다. 급전환의 전환이 이
                        루어 지는 곡의 흐름에 너무나 아름다운 목소리의 보컬이나, 그런건 필요
                        없었겠지, 하지만 억지라는 느낌은 안 느낄 정도였으면 싶었는데...
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                    <h4 className="text-xl font-bold text-orange-300 mb-4">City Monster</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        뒷면의 서두를 장식하는 곡은 'City Monster'이다. 도발적인 드럼비트와 정
                        돈되지 않고 공격적이며 격정적인 바이올린 선율의 도입부와 재즈적이면서
                        아방가르드적인 느낌까지 연출해준다. 여전히 그저 그런 하지만, 한풀꺾인
                        듯한 최소한 마구잡이는 아닌 너무 평범한 보컬에 이어지는 다시금 격정적인
                        바이올린 선율에 이어 약간 고무된 보컬, 재즈적인 선율의 피아노연주, 고음
                        역은 아니지만 어느정도 내지른다는 느낌이 드는 보컬의 외침등이 반복적으로
                        이어지는 중반부에 이어, 잔잔하지만, 왠지 음침한 분위기를 느끼게 하는 
                        피아노연주와 정교한 드럼연주에 이어 펼쳐지는 매우 처량하게 느껴지는 바이
                        올린 연주는 가슴을 파고든다. 뒤에 합세하는 하먼드 올겐의 풍부한 사운드와
                        의 바이올린의 협연은 강한 인상을 남겨주며, 점점 고조되어 간다!, 다시 
                        등장하는 보컬의 에코... 바이올린 선율은 점점 고조되어 반복적이며, 공격
                        적인 연주를 계속하며, 후반부가 마무리된다. 비교적 보컬이 주가되는 비중이
                        적은 곡이며, 아름다우면서도 자유분방하고 공격적인 바이올린 선율이 곡의
                        전반을 주도 하는 멋진 곡이다.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">Alone</h4>
                    <div className="text-sm leading-relaxed space-y-3">
                      <p>
                        소란스런(마치 리허설에서 악기 테스팅하는듯한) 분위기의 도입부는 아방가르
                        드한 분위기를 연출하면서 시작된다. 이어지는 웅장한 드럼연주와 공격적인 
                        바이올린 선율... 완전히! 이성을 잃어버린 자기도취적인 보컬리스트의 무절
                        제한 소리의 내지름, 이어지는 아름다운 바이올린 선율과 멤버들의 코러스,
                        언제들어도 매력적인 힘이 느껴지는 하먼드올겐연주의 정렬적인 연주, 재즈적인
                        느낌의 드럼, 드럼의 사릇이 사라지는 듯한 느낌을 뒤이어 펼쳐지는 영롱한
                        피아노와 서정성이 담뿍 베여져있는 바이올린 사운드, 평범하지만, 리더 보컬
                        의 제정신 아닌 보컬보다는 훨씬 정감있게 들리는 멤버들의 코러스가 뒤를 잇고
                        은은히 시작되어 강하게 펼쳐지는 멜로트론 사운드의 등장! 애잔하게 연주되는
                        바이올린, 아! 하는 느낌이 강하게 오는 너무나 아름다운 부분이다. 점점 감정
                        이 고조되어 가면서, 이를 고조시키는 드럼과 장엄한 아름다움을 느끼게 해주는
                        멜로트론, 바이올린 선율, 이어 아름다운 백코러스의 등장!을 기대했으나, 최소
                        한 정신이 나간듯한 리더보컬의 목소리가 빠진 멤버들의 다소곳한 코러스로서
                        이어지며, 마지막 바이올린의 격정적인 연주로 마무리되는곡이다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 전체 평가 */}
                <div className="mt-8 p-6 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                  <h4 className="text-xl font-bold text-yellow-300 mb-4">전체 평가</h4>
                  <p className="text-sm leading-relaxed">
                    전반적으로 7-8분대를 상회하는 대곡위주의 구성이라서, 자칫 구성의 산만함이나
                    지루함을 느끼게 될수도 있으나, 대단히 뛰어난 멤버각자의 연주력이 빛을 발하는
                    앨범이다. 단지 개인적으로 느끼기에 너무 수준 이하로 느껴지는 리더보컬의 
                    안하무인격의 자기도취적 보컬은 너무 듣기 고역이었지만, 어쩌면 전반적으로 
                    무질서함을 느끼게하는데, 필요악적인 요소인것 같기도하다. 전반적으로 무척 
                    훌륭한 앨범이라는 느낌이다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 정종화님(notte@hitel.net, 93.12)의 Pell Mell "Marburg" 리뷰입니다. 
                  독일 프로그레시브 록 그룹의 데뷔 앨범에 대한 매우 상세하고 솔직한 분석이 
                  돋보입니다. 특히 "보컬의 자기도취적 스타일"에 대한 비판적 시각과 함께 
                  각 악기 연주자들의 뛰어난 실력을 인정하는 균형잡힌 관점이 인상적입니다. 
                  스메타나의 "Moldau" 연주를 "본작의 백미"로 평가한 부분이 특히 기억에 남습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}