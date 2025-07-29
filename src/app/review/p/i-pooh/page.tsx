import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'I Pooh | Yebadong',
  description: 'I Pooh 앨범 리뷰 - 이탈리아 프로그레시브 록의 대표 그룹',
};

export default function IPOOHPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              I Pooh
            </h1>
            <p className="text-purple-300 text-lg">이탈리아 프로그레시브 록의 대표 그룹</p>
          </div>

          {/* Review Content */}
          <div className="space-y-8">
            {/* 첫 번째 리뷰 - Lennon */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  I Pooh "Un po' del Nostro Tempo Migliore"
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Lennon, 이강영, kylee@chep5.kaist.ac.kr]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <p>
                    I Pooh의 "Un po' del Nostro Tempo Migliore"에 대해 몇마디 할께요. 이 앨범은 
                    드물게 제가 CD와 LP를 모두 가지고 있을만큼 좋아하는 앨범입니다. 저는  "Par-
                    sifal"도 아주 좋아하는데 "Opera Prima"는 영 별로예요.  아뭏든 "Un po'..."는 
                    대단히 훌륭한 작품입니다. "Fantasia"를 언급하셨는데  이 앨범은 어느  한곡을 
                    꼽기보다 전체적으로 들어야 한다고 강력히 주장하는 바입니다.  구성도  그렇게 
                    되어 있어요.
                  </p>

                  <p>
                    제가 미리 준비한 글이 아니어서 수록곡들을 써드리진 못하겠군요. 
                    전체적으로 부드러운 분위기이고 곡들도 대개 비슷비슷한데도  결코 지루하지 않
                    게 앨범 한장을 다 들을 수 있는 드문 앨범입니다. 제가 주위의 여러 친구들에게 
                    추천해준 음악중 아마 가장 호평을 들은 작품이지요.이 앨범의 또하나의 매력은, 
                    LP에서만 맛볼 수 있는건데, 아름다운 자켓입니다.
                  </p>

                  <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h4 className="text-lg font-bold text-green-300 mb-3">LP 자켓의 매력</h4>
                    <p className="text-sm">
                      그 때문에 몇년전에 선배에게 부탁해서 CD를 가지고 있었지만 작년에 제네바에서 열린  The  Second Hand Disc 
                      Market에서 이 LP를 발견하고는 당장 살 수밖에 없었던 거지요. (값도 엄청 쌌거
                      든요. 8 CHF ~ 4500원 였으니깐) 10여 페이지로 되어 있는데 전체적으로 노란 톤
                      으로 된, 적당히 뭉갠듯한 (파스텔톤이라고 하나요?) 멤버들의 사진입니다. 어떤 
                      저택을 배경으로 그집 식구들과 함께 찍은듯한 분위기에요.  음악의 분위기와 너
                      무도 잘 어울립니다.
                    </p>
                  </div>

                  <p>
                    사실 이 앨범을 처음 듣게 된 것도 자켓에 혹해서 였어요. 
                    옛날에 이대앞의 LIZZY에서 이 앨범을 보고 녹음해 달래서 들었었지요.
                    이 앨범은 이태리에서는 확실히 구할 수 있읍니다. I Pooh는 상당히 거물급 그룹
                    이거든요. 그러나 이태리 이외의 나라에서는 위에 꼽아놓은 앨범들은   발견하기 
                    쉽지 않습니다. I Pooh의 앨범이 워낙 많기 때문에, 그리고 그들이 히트시킨  최
                    근 앨범도 (80년대) 많기 때문에 주로 최근 것만 갖다놓지요.  통신으로  구하실 
                    분은 참조하세요.
                  </p>

                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h4 className="text-lg font-bold text-blue-300 mb-3">"Un po'del Nostro Tempo Migliore" 수록곡</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>1. Preludio</div>
                      <div>6. Mediterraneo</div>
                      <div>2. Credo</div>
                      <div>7. Eleonora mia madre</div>
                      <div>3. Una storia che fa ridera ***** </div>
                      <div>8. 1966 (쪼금 떨어지는듯)</div>
                      <div>4. Oceano</div>
                      <div>9. Orient express</div>
                      <div>5. Fantasia</div>
                      <div>10. Il tempo una donna la citta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 두 번째 리뷰 - 이동훈 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">
                  I Pooh 디스코그래피와 전반적 평가
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [이동훈, meddle@nuri.net]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <p>
                    i pooh는 한결같은 음악성으로 코리아 쁘로그
                    팬들의 가슴속에 깊히 박혀있는 밴드입니다.
                    제 생각으론 이들의 3집인 opera prima부터
                    forse ancora poesia까지 들오보는 것이 어떨까
                    합니다. 아마도 님이 좋아하실 뿡뿡 string 사운드가
                    담긴 시절은 forse...가 마지막일 것입니다.
                  </p>

                  <p>
                    물론 중, 후반기의 pop적인 '뿌'도 굉장히 좋은
                    것이지요. 하지만 중, 후반기 작품들은 구하고
                    싶으시더라도 구하기 매우 힘드실 겁니다.
                    수입된 적도 거의 없고, 라이센스는 전혀 되지 않은
                    상태입니다.
                  </p>

                  <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                    <h4 className="text-lg font-bold text-orange-300 mb-3">I Pooh 전체 디스코그래피</h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-yellow-300">초기 앨범</h5>
                        <p>1집 : per quelli come noi<br/>
                        memorie</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-yellow-300">핵심기 (w/ string orch.)</h5>
                        <p>opera prima<br/>
                        alessandra<br/>
                        parsifal<br/>
                        un po'del nostro...<br/>
                        forse ancora poesia</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-yellow-300">중후반기</h5>
                        <p>poohlover<br/>
                        rotolando respirando<br/>
                        boomerang<br/>
                        viva<br/>
                        hurricane<br/>
                        ...stop<br/>
                        buona fortuna<br/>
                        palasport<br/>
                        tropico del nord<br/>
                        aloha<br/>
                        asia non asia<br/>
                        giorni infiniti<br/>
                        goodbye<br/>
                        il colore dei pensieri<br/>
                        oasi<br/>
                        i nostri anni senza fiato<br/>
                        uomini soli<br/>
                        il cielo e'blu sopra le nuvole</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 세 번째 리뷰 - 이응민 (Parsifal) */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  I Pooh "Parsifal" - 상세 분석
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [이응민, hayden@hitel.net, 93.7]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <p>
                    I Pooh 는 프로그레시브 록 그룹으로 소개하기에는 무리가 따
                    릅니다. 하지만 이들의 70년대 초에서 중반까지의 몇몇 앨범은
                    클래식컬 아트록의 명반으로 손꼽힐만하다고 생각됩니다. 우선
                    간략하게 그들의 초기 활동상에 대해 살펴보도록 하죠.
                  </p>

                  <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-300 mb-3">I Pooh 초기 히스토리</h4>
                    <div className="space-y-3 text-sm">
                      <p>
                        5인조 편성의 [쟈갸스](철자를 모름 죄송!!)라는 그룹명으로
                        출발하여 66년 [장미 페스티벌]에 "Brennero 66"를 가지고 참
                        가하면서 그룹명을 I Pooh 로 바꾸게 됩니다.
                      </p>
                      <p>
                        이들은 같은 해 &lt;Per Quelli Come Noi&gt;를 타이틀로 데뷰앨범
                        을 발표합니다. 이 데뷰앨범을 발표할 당시의 멤버는 현재에는
                        한사람도 남아있지 않네요.
                      </p>
                      <p>
                        새로운 멤버 (이후 그룹의 리더격 인물이 되는 키보드주자 
                        Roby Paginetti) 가입시킨 후 두번째 앨범 &lt;Memorie&gt;를 발표합
                        니다. 이 앨범은 리드보컬리스트 Ricardo의 보컬을 전면에 내
                        세운 깐쪼네와 록을 융합한 전형적인 Beat-Group계열의 음악이
                        었습니다.
                      </p>
                    </div>
                  </div>

                  <p>
                    한편 전신그룹 [쟈가스] 시절부터 그룹을 이끌어왔던 Baler
                    ino Neglini가 작사에 전념하기 위해 그룹을 탈퇴하게 됩니다. 
                    재미있는 사실은 Balerino는 그룹을 탈퇴하지만 지속적으로 
                    I Pooh의 가사를 써줌으로써 이들의 정신적 지주역할을 해나갑
                    니다. 핑크 플로이드의 Syd Barrett와 연관시켜보면 재밌겠죠?
                  </p>

                  <p>
                    71년 CDG로 이적하여 명반 &lt;Opera Prima&gt;를 발표합니다. 타
                    이틀 곡이 우리나라에서 큰 사랑을 받았었던 것으로 기억되네
                    요. 이 앨범부터 I Pooh는 웅장한 아름다운 오케스트레이션의 
                    효과적 사용으로 비트 그룹에서 탈피하게 됩니다. 물론 그 당
                    시 이태리의 음악적 상황에 큰 영향을 받았음에 틀림없겠죠.
                  </p>

                  <p>
                    72년 CBS로 이적하여 네번째 앨범 &lt;Alesandra&gt;를 발표하지만
                    그룹의 간판격인 리드보컬의 Ricardo가 돌연 탈퇴하는 위기 
                    상황을 맞이합니다. 이 위기상황을 새로운 멤버를 가입시켜 재
                    정비한 후 73년, 오늘 소개해드릴 명반 &lt;Parsifal&gt;을 발표하게
                    됩니다. 이후부터 이들은 멤버교체없이 20년이 넘은 세월 동
                    안 이태리인들의 꾸준한 사랑을 받고 현재까지도 활동하고 있습
                    니다.
                  </p>

                  <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h4 className="text-lg font-bold text-blue-300 mb-3">Parsifal 앨범 정보</h4>
                    <div className="space-y-4 text-sm">
                      <p>
                        서론이 너무 길었네요. 이 앨범은 중세의 한 기사의 사랑을
                        노래했다고 합니다. 이 앨범의 가장 큰 특징은 클래식하고 다이
                        나믹한 곡 전개와 깐쪼네풍의 감미로운 보컬하머니에 있다고 할
                        수 있습니다. 멤버와 수록곡을 살펴보도록 하죠.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-bold text-yellow-300 mb-2">앞면</h5>
                          <ul className="space-y-1">
                            <li>1. L'anno, Il posto, L'ora</li>
                            <li>2. Solo cari ricordi</li>
                            <li>3. Io e te per altri giorni</li>
                            <li>4. La locanda</li>
                            <li>5. Lei e lei</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-yellow-300 mb-2">뒷면</h5>
                          <ul className="space-y-1">
                            <li>1. Come si fa</li>
                            <li>2. Infiniti noi</li>
                            <li>3. Dialoghi</li>
                            <li>4. Parsifal(parte1,2)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-yellow-300 mb-2">멤버</h5>
                        <ul className="space-y-1">
                          <li><strong>Dody Bataria</strong> - 기타, 보컬</li>
                          <li><strong>Stefano Draccio</strong> - 드럼, 보컬</li>
                          <li><strong>Roby Paginetti</strong> - 키보드, 보컬</li>
                          <li><strong>Red</strong> - 베이스, 보컬</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p>
                    첫곡 L'anno,Il posto,L'ora(그 해, 그 곳, 그 시간)은 음악
                    적으로 두 부분으로 나뉘는데요. 기타,올갠을 중심으로 전개되
                    는 록 발라드 스타일로 진행되다가 웅장한 오케스트레이션이 등
                    장하면서 클래식컬한 분위기를 연출합니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 여러 리뷰어들의 I Pooh 리뷰를 종합했습니다. 
                  Lennon님의 "Un po' del Nostro Tempo Migliore" 상세 감상, 
                  이동훈님의 디스코그래피 정리, 이응민님의 "Parsifal" 히스토리 분석이 
                  이탈리아 프로그레시브 록의 대표 그룹 I Pooh의 전모를 잘 보여줍니다.
                  특히 90년대 중반 국내 매니아들 사이에서 이 그룹이 얼마나 사랑받았는지를 확인할 수 있습니다.
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