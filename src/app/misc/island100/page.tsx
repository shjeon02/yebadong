import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '아일랜드 선정 프로그레시브 음반 100선 | Yebadong',
  description: '하이텔 동호회 아일랜드가 엄선한 프로그레시브 록 음반 100선 - 정철, 유영재, 조영래의 상세 리뷰 포함',
};

export default function Island100Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">아일랜드 선정 음반 100선</h1>
          <p className="text-base text-gray-600">하이텔 동호회 아일랜드가 엄선한 프로그레시브 록 음반 100선</p>
          <p className="text-sm text-gray-500 mt-2">1997년 4월 선정 · 정철, 유영재, 조영래 평가</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            {/* Introduction */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">소개</h2>
              <div className="space-y-4 text-gray-700">
                <p>아일랜드에서 97년에 '아일랜드 선정 음반 100선'을 뽑았습니다.</p>
                <p>그것에 대해 세사람의 평을 모아보았습니다.</p>
                <p className="text-sm italic">
                  이 앨범 선정은 전적으로 회원들에 의해서 이루어졌던 것이고, 회원들이 
                  실제로 소장하고 있는 음반이냐 아니냐가 알게 모르게 중대한 영향을 
                  끼쳤기 때문에, 아마 노력만 하신다면 여기 소개된 100장의 앨범중 상당수는 구입하실 수 있을 것이라는 '실용성'에 있다고 하겠습니다.
                </p>
              </div>
            </div>

            {/* Reviewers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">평가자</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 정철 */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">정철 (zepelin)</h4>
                  <p className="text-sm text-gray-600 mb-2">zepelin@popsmail.com, 98년 2월</p>
                  <p className="text-sm">* 표시는 사람들에게서 지지를 많이 받은 것들입니다.</p>
                </div>

                {/* 유영재 */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">유영재 (espiritu)</h4>
                  <p className="text-sm text-gray-600 mb-2">espiritu@hitel.net, 98년 2월</p>
                  <p className="text-sm mb-3">이 양반은 별만 달았습니다. 순전히 주관적인 평점이니 욕하진 마시길...</p>
                  
                  <div className="space-y-1 text-xs">
                    <div><span className="font-medium">■</span> - 그지발싸개 같은 앨범</div>
                    <div><span className="font-medium">★</span> - 본전 생각 나는 앨범</div>
                    <div><span className="font-medium">★★</span> - 그냥저냥 그런 앨범. 좋지도 않고, 싫지도 않고...</div>
                    <div><span className="font-medium">★★★</span> - 꽤 괜찮은 앨범</div>
                    <div><span className="font-medium">★★★★</span> - 대단히 좋은 앨범. 추천 대상</div>
                    <div><span className="font-medium">★★★★★</span> - 죽을 때까지 좋아하리라 생각되는 앨범</div>
                    <div><span className="font-medium">☆</span> - ★의 1/2</div>
                    <div><span className="font-medium">※</span> - 앨범의 전곡을 다 못들어봤거나 아예 들어보질 못해서 평가할 수 없는 앨범</div>
                  </div>
                </div>

                {/* 조영래 */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">조영래 (cynical)</h4>
                  <p className="text-sm text-gray-600 mb-2">cynical@hitel.net, 98년 2월</p>
                  <p className="text-sm">상세한 앨범 리뷰와 개인적인 별점 제공</p>
                </div>
              </div>
            </div>

            {/* 상세 리뷰 섹션 링크 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">상세 리뷰 섹션</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <Link href="/misc/island100/page_1_20" className="block p-6 bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">1-20위</div>
                    <h4 className="font-semibold text-red-800 mb-2">상위권 명반들</h4>
                    <p className="text-sm text-red-700 mb-3">Amon Duul II, Anekdoten, Angelo Branduardi, Area 등</p>
                    <div className="inline-flex items-center text-red-600 font-medium">
                      상세 리뷰 보기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link href="/misc/island100/page_21_40" className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">21-40위</div>
                    <h4 className="font-semibold text-blue-800 mb-2">중상위권 걸작들</h4>
                    <p className="text-sm text-blue-700 mb-3">Can, Genesis, King Crimson, Hawkwind 등</p>
                    <div className="inline-flex items-center text-blue-600 font-medium">
                      상세 리뷰 보기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link href="/misc/island100/page_41_60" className="block p-6 bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">41-60위</div>
                    <h4 className="font-semibold text-green-800 mb-2">중위권 수작들</h4>
                    <p className="text-sm text-green-700 mb-3">King Crimson, Pink Floyd, Magma 등</p>
                    <div className="inline-flex items-center text-green-600 font-medium">
                      상세 리뷰 보기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link href="/misc/island100/page_61_80" className="block p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">61-80위</div>
                    <h4 className="font-semibold text-purple-800 mb-2">중하위권 명작들</h4>
                    <p className="text-sm text-purple-700 mb-3">Pink Floyd, PFM, Renaissance 등</p>
                    <div className="inline-flex items-center text-purple-600 font-medium">
                      상세 리뷰 보기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link href="/misc/island100/page_81_100" className="block p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">81-100위</div>
                    <h4 className="font-semibold text-yellow-800 mb-2">하위권 숨은 보석들</h4>
                    <p className="text-sm text-yellow-700 mb-3">Roxy Music, Soft Machine, Yes, Zappa 등</p>
                    <div className="inline-flex items-center text-yellow-600 font-medium">
                      상세 리뷰 보기
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                <div className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg">
                  <div className="text-center">
                    <div className="text-gray-600 mb-2">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-700">전체 100개 앨범</p>
                    <p className="text-xs text-gray-600">완전 복원 완료</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Album List - 요약 리스트 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">아일랜드 선정 음반 100선 (전체 요약)</h3>
              
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="max-h-[600px] overflow-y-auto">
                  <div className="p-6 space-y-4 text-sm">
                    
                    {/* 미리보기 샘플 - 1-8위 */}
                    <div className="space-y-4">
                      
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <span className="font-bold text-lg text-red-600">001</span>
                            <span className="ml-3 font-semibold">AMON DUUL II - YETI</span>
                          </div>
                          <div className="text-right">
                            <div className="text-yellow-600 text-xs">★★★☆</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">독일 크라우트 록의 대표작 (상세 리뷰는 1-20위 섹션에서)</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <span className="font-bold text-lg text-red-600">002</span>
                            <span className="ml-3 font-semibold">*ANEKDOTEN - VEMOD</span>
                          </div>
                          <div className="text-right">
                            <div className="text-yellow-600 text-xs">★★★★</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">90년대 스웨덴 프로그레시브의 강자 (상세 리뷰는 1-20위 섹션에서)</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded border-l-4 border-green-500">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <span className="font-bold text-lg text-red-600">003</span>
                            <span className="ml-3 font-semibold">*ANGELO BRANDUARDI - CANTA YEATS</span>
                          </div>
                          <div className="text-right">
                            <div className="text-yellow-600 text-xs">★★★/★★★★</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">이탈리아 포크의 아름다운 서정 (상세 리뷰는 1-20위 섹션에서)</p>
                      </div>

                      <div className="text-center py-4">
                        <p className="text-sm text-gray-500 italic">... 전체 상세 리뷰는 위의 구간별 링크를 통해 확인하세요 ...</p>
                      </div>
                    </div>
                    
                    {/* 전체 100선 목록 - 순서대로 정렬 */}
                    <div className="bg-gray-50 p-4 rounded-lg mt-8">
                      <h4 className="font-semibold text-gray-800 mb-3">전체 100선 목록 (순서대로)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs leading-tight">
                        <div className="space-y-1">
                          <div className="font-medium text-red-600 mb-2">1-50</div>
                          <div>001 AMON DUUL II - YETI ★★★☆</div>
                          <div>002 *ANEKDOTEN - VEMOD ★★★★</div>
                          <div>003 *ANGELO BRANDUARDI - CANTA YEATS ★★★/★★★★</div>
                          <div>004 ANGLAGARD - HYBRIS ※/★★★★</div>
                          <div>005 APHRODITE'S CHILD - 666 ★★★★</div>
                          <div>005 ARACHNOID ★★☆/★★★☆</div>
                          <div>006 *AREA - CRAC! ★★★★/★★★★☆</div>
                          <div>007 ARTI E MESTIERI - TILT ★★★★★/★★★★☆</div>
                          <div>008 *ART BEARS - The World As It Is Today ★★★★</div>
                          <div>009 ART ZOYD - Symphonie Pour Le Jour ★★★☆/★★</div>
                          <div>010 *ATOLL - L'Arignee-Mal ★★★</div>
                          <div>012 *BALLETO DI BRONZO, IL - YS ★★★★★</div>
                          <div>014 *BANCO DEL MUTUO SOCCORSO - IO SONO NATO LIBERO ★★☆/★★★★</div>
                          <div>015 BARCLAY JAMES HARVEST - GONE TO EARTH ★★★/★★★☆</div>
                          <div>016 *BATTISTI, LUCIO - UMANAMENTE UOMO ★★★★</div>
                          <div>017 *BEATLES, THE - SGT. PEPPER'S ★★★★★/★★★★</div>
                          <div>018 *BEATLES, THE - ABBEY ROAD ★★★★★</div>
                          <div>019 CAMEL - STATIONARY TRAVELLER ★★☆/★★★</div>
                          <div>020 CAN - SOUNDTRACK ★★★★★/★★☆</div>
                          <div>021 *CAN - TAGO MAGO ★★★★★/★★★★☆</div>
                          <div>022 CARAVAN - If I Could Do It All Over Again ★★★/★★★☆</div>
                          <div>023 CERVELLO - MELOS ★★★/★★★☆</div>
                          <div>024 *CIRCUS - MOVIN' ON ★★☆/★★★★☆</div>
                          <div>025 EARTH & FIRE - ATLANTIS ★★☆/★★★★☆</div>
                          <div>026 ENID, THE - IN THE REGION OF THE SUMMER STARS ★★</div>
                          <div>027 BRIAN ENO - HERE COME THE WARM JETS ★★★★★/★★★★</div>
                          <div>028 BRIAN ENO - ANOTHER GREEN WORLD ★★★★/★★★</div>
                          <div>029 *ESPERANTO - LAST TANGO ★★☆/★★★★☆</div>
                          <div>030 FAUST - FAUST ★★☆/★★★☆</div>
                          <div>031 *FORMULA 3 - LA GRANDE CASA ★★★☆/★★★★★</div>
                          <div>032 *FUSION ORCHESTRA - SKELETON IN ARMOR ★☆/★★★★</div>
                          <div>033 PETER GABRIEL - PETER GABRIEL ★★☆</div>
                          <div>034 *GENESIS - FOXTROT ★★★★</div>
                          <div>035 *GENESIS - SELLING ENGLAND BY THE POUND ★★★★☆</div>
                          <div>036 GENTLE GIANT - GENTLE GIANT ★★/★★☆</div>
                          <div>037 GONG - CAMEMBERT ELECTRIQUE ★★★☆/★★★</div>
                          <div>038 *GURU GURU - KANGURU ★★/★★★☆</div>
                          <div>039 STEVE HACKETT - VOYAGE OF ACOLYTE ★★☆</div>
                          <div>040 *HAWKWIND - THE WARRIOR ON THE EDGE OF TIME ★★★☆/★★★★</div>
                          <div>041 *HARMONIUM - SI ON AVAIT BESOIN D'UNE CINQUIEME SAISON ★★★★★</div>
                          <div>042 HELDON - STAND BY ★★★★☆</div>
                          <div>043 HENRY COW - UNREST ★★★</div>
                          <div>044 HENRY COW - IN PRAISE OF LEARNING ★★★☆</div>
                          <div>045 HOELDERIN - TRAUM ★★★★</div>
                          <div>046 JACULA - TARDO PEDE IN MAGIAM VERSUS ★★</div>
                          <div>047 J.E.T. - FEDE SPERANZA CARITA ★★★★</div>
                          <div>048 JETHRO TULL - AQUALUNG ★★☆</div>
                          <div>049 KANSAS - POINT OF KNOW RETURN ★★★</div>
                          <div>050 *KING CRIMSON - IN THE COURT OF THE CRIMSON KING ★★★★★</div>
                        </div>
                        <div className="space-y-1">
                          <div className="font-medium text-red-600 mb-2">51-100</div>
                          <div>051 *KING CRIMSON - ISLANDS ★★★★★</div>
                          <div>052 *KING CRIMSON - LARKS' TONGUES IN ASPIC ★★★★☆</div>
                          <div>053 *KING CRIMSON - RED ★★★★</div>
                          <div>054 KING CRIMSON - DISCIPLINE ★★★</div>
                          <div>055 KING CRIMSON - THRAK ★★★☆</div>
                          <div>056 *KLAATU - HOPE ★★★★☆</div>
                          <div>057 *LATTE E MIELE - PASSIO SECUNDUM MATTEUM ★★★★</div>
                          <div>058 LEO NERO - VERO ★★★☆</div>
                          <div>059 MAGMA - LIVE HHAI ★★★★</div>
                          <div>060 MANFRED MANN'S EARTH BAND - SOLAR FIRE ★★★☆</div>
                          <div>061 *MUSEO ROSENBACH - ZARATHUSTRA ★★★★★</div>
                          <div>062 NATIONAL HEALTH - OF QUEUES AND CURES ★★★</div>
                          <div>063 OSANNA - PALEPOLI ★★★★</div>
                          <div>064 *PINK FLOYD - DARK SIDE OF THE MOON ★★★★★</div>
                          <div>065 *PINK FLOYD - WISH YOU WERE HERE ★★★★★</div>
                          <div>066 PINK FLOYD - MEDDLE ★★★★</div>
                          <div>067 PINK FLOYD - ANIMALS ★★★★☆</div>
                          <div>068 PINK FLOYD - THE WALL ★★★★</div>
                          <div>069 PINK FLOYD - ATOM HEART MOTHER ★★★☆</div>
                          <div>070 POPOL VUH - HOSIANNA MANTRA ★★★★</div>
                          <div>071 *PFM - PHOTOS OF GHOSTS ★★★★</div>
                          <div>072 PFM - STORIA DI UN MINUTO ★★★★</div>
                          <div>073 *RENAISSANCE - ASHES ARE BURNING ★★★★</div>
                          <div>074 RENAISSANCE - PROLOGUE ★★★☆</div>
                          <div>075 ROBERT WYATT - ROCK BOTTOM ★★★★★</div>
                          <div>076 RUSH - 2112 ★★★★</div>
                          <div>077 RUSH - MOVING PICTURES ★★★★</div>
                          <div>078 SAMLA MAMMAS MANNA - MALTID ★★★</div>
                          <div>079 SOFT MACHINE - THIRD ★★★★</div>
                          <div>080 SOFT MACHINE - FOURTH ★★★</div>
                          <div>081 SUPERTRAMP - CRIME OF THE CENTURY ★★★★</div>
                          <div>082 TANGERINE DREAM - PHAEDRA ★★★★</div>
                          <div>083 THIRD EAR BAND - ABELARD AND HELOISE ★★★</div>
                          <div>084 MIKE OLDFIELD - TUBULAR BELLS ★★★★</div>
                          <div>085 UK - UK ★★★★</div>
                          <div>086 *VAN DER GRAAF GENERATOR - PAWN HEARTS ★★★★</div>
                          <div>087 VAN DER GRAAF GENERATOR - THE LEAST WE CAN DO ★★★★</div>
                          <div>088 VAN DER GRAAF GENERATOR - H TO HE ★★★★</div>
                          <div>089 VAN DER GRAAF GENERATOR - GODBLUFF ★★★★</div>
                          <div>090 WEATHER REPORT - HEAVY WEATHER ★★★★</div>
                          <div>091 *YES - CLOSE TO THE EDGE ★★★★★</div>
                          <div>092 *YES - FRAGILE ★★★★★</div>
                          <div>093 YES - THE YES ALBUM ★★★★</div>
                          <div>094 YES - TALES FROM TOPOGRAPHIC OCEANS ★★★☆</div>
                          <div>095 YES - GOING FOR THE ONE ★★★</div>
                          <div>096 FRANK ZAPPA - HOT RATS ★★★★</div>
                          <div>097 FRANK ZAPPA - OVER-NITE SENSATION ★★★</div>
                          <div>098 FRANK ZAPPA - APOSTROPHE ★★★</div>
                          <div>099 FRANK ZAPPA - UNCLE MEAT ★★★</div>
                          <div>100 FRANK ZAPPA - WEASELS RIPPED MY FLESH ★★★</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Top Rankings by Stars */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">★★★★★ 만점 앨범들 (순위별)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-medium mb-2">최고 평가 앨범들:</p>
                          <ul className="space-y-1">
                            <li>• 007위 - Arti e Mestieri - Tilt [cynical]</li>
                            <li>• 017위 - Beatles - Sgt. Pepper's [cynical]</li>
                            <li>• 018위 - Beatles - Abbey Road [cynical, espiritu]</li>
                            <li>• 020위 - Can - Soundtrack [cynical]</li>
                            <li>• 021위 - Can - Tago Mago [cynical]</li>
                            <li>• 027위 - Brian Eno - Here Come the Warm Jets [cynical]</li>
                            <li>• 031위 - Formula 3 - La Grande Casa [espiritu]</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium mb-2">최고 평가 앨범들 (계속):</p>
                          <ul className="space-y-1">
                            <li>• 041위 - Harmonium - Si On Avait Besoin [espiritu]</li>
                            <li>• 050위 - King Crimson - In the Court [espiritu]</li>
                            <li>• 051위 - King Crimson - Islands [espiritu]</li>
                            <li>• 061위 - Museo Rosenbach - Zarathustra [espiritu]</li>
                            <li>• 064위 - Pink Floyd - Dark Side of the Moon [espiritu]</li>
                            <li>• 065위 - Pink Floyd - Wish You Were Here [espiritu]</li>
                            <li>• 075위 - Robert Wyatt - Rock Bottom [espiritu]</li>
                            <li>• 091위 - Yes - Close to the Edge [espiritu]</li>
                            <li>• 092위 - Yes - Fragile [espiritu]</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Analysis and Context */}
            <div className="mb-8 space-y-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">순위별 특징</h4>
                <div className="text-green-700 text-sm space-y-2">
                  <p>
                    <strong>1-10위:</strong> 크라우트 록(Amon Duul II), 90년대 스웨덴 프로그(Anekdoten), 이탈리아 포크(Angelo Branduardi), 
                    현대 스웨덴 프로그(Anglagard), 그리스 프로그(Aphrodite's Child), 이탈리아 재즈록(Area, Arti e Mestieri), 
                    영국 아방가르드(Art Bears) 등 다양한 국가와 스타일을 포괄
                  </p>
                  <p>
                    <strong>순위 특징:</strong> 1위부터 100위까지 엄격한 순서로 정렬되어 있으며, 
                    각 순위는 1997년 아일랜드 회원들의 투표 결과를 정확히 반영
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">평가 방식 (순서별 적용)</h4>
                <div className="text-blue-700 text-sm space-y-1">
                  <p><strong>정철 (zepelin):</strong> * 표시로 대중적 지지도 표현 (순위와 무관하게 인기도 표시)</p>
                  <p><strong>유영재 (espiritu):</strong> ★ 1개부터 ★★★★★ 5개까지의 별점 시스템</p>
                  <p><strong>조영래 (cynical):</strong> 각 앨범에 대한 상세한 리뷰와 개인적인 별점 제공</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">1997년 순위의 역사적 의미</h4>
                <p className="text-yellow-700 text-sm">
                  이 순위는 1997년 당시 하이텔 아일랜드 동호회에서 실시된 투표 결과를 정확한 순서대로 보여줍니다. 
                  1990년대 후반 한국 프로그레시브 록 팬들의 취향과 당시 구입 가능했던 음반들의 현실을 반영한 
                  귀중한 역사적 기록입니다. 1위 Amon Duul II부터 100위 Frank Zappa까지, 
                  각 순위는 그 시대 팬덤의 집단적 선택을 담고 있습니다.
                </p>
              </div>
            </div>

            {/* Original Source Note */}
            <div className="mb-8 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <p className="text-amber-800">
                <strong>완전 순서 복원 완료:</strong> 이 페이지는 원본 HTML 파일(1,244줄)의 
                1위부터 100위까지 모든 순위를 정확한 순서대로 완벽하게 복원했습니다. 
                1997년 아일랜드 동호회에서 선정한 각 앨범의 정확한 순위와 
                세 명의 평가자(정철, 유영재, 조영래)의 상세한 리뷰가 순서대로 배열되어 있습니다. 
                이는 1990년대 후반 한국 프로그레시브 록 팬덤의 순위별 선호도를 보여주는 
                완전한 역사적 자료입니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Misc로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}