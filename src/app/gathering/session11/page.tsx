import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제11회 YBD Rush 특집 & Video 감상회 - 1996년 9월 29일 | Yebadong',
  description: '예바동 제11회 Rush 특집, Rock Musicals (Freudiana), Video 감상회 (1996년 9월 29일, 홍대앞 ohlala)',
};

export default function Session11Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0000aa] mb-4">
            제11회 YEBADONG Special Show of Prog Rock
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0000aa] mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 9월 29일 일요일 늦은 2시</p>
                  <p><strong>장소:</strong> 홍대앞 ohlala</p>
                </div>
                <div className="space-y-2">
                  <p><strong>주제:</strong> Freudiana, Rush, IQ, Yes, Roger Waters Video 감상</p>
                  <p><strong>발표자:</strong> Fish(신인철), 전승훈, 김이영</p>
                </div>
              </div>
            </div>

            {/* Video Playlist Section */}
            <div className="mb-12 p-6 bg-green-100 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
                🎬 Prog Rock Video Playlist - Fish 발표
              </h2>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-green-700 mb-2">
                    1. What god wants (MTV video clip) / What god wants (with Jeff Beck) - Roger Waters
                  </h4>
                  <p className="text-xs text-gray-600">
                    Roger Waters의 솔로 활동 시기 대표작 뮤직비디오
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-green-700 mb-2">
                    2. A Little Nonsense - Echolyn
                  </h4>
                  <p className="text-xs text-gray-600">
                    미국 네오 프로그레시브의 대표주자 Echolyn
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-green-700 mb-2">
                    3. Headlong - IQ
                  </h4>
                  <p className="text-xs text-gray-600">
                    영국 네오 프로그레시브의 선구자 IQ
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="text-lg font-bold text-green-700 mb-2">
                    4. Ritual (or The Gates of Delirium ?) - Yes
                  </h4>
                  <p className="text-xs text-gray-600">
                    Yes의 대표적인 대곡 중 하나
                  </p>
                </div>
              </div>
            </div>

            {/* Rush Special Section */}
            <div className="mb-12 p-6 bg-red-100 rounded-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
                🎸 RUSH Special - 전승훈 발표
              </h2>
              
              {/* Rush History */}
              <div className="mb-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-4">Rush 역사</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-bold text-red-600 mb-2">초기 (1968-1974)</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• 1968년 8월: Alex Lifeson(guitar), John Rutsey(drum), Jeff Jones(bass, vocal)로 시작</li>
                        <li>• "Coff-In" 커피샵에서 연주</li>
                        <li>• 교회 지하실을 하루 25$씩 빌려서 연습</li>
                        <li>• Geddy Lee(Gary Lee Weinrib)가 보컬, 베이스로 참여</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-bold text-red-600 mb-2">황금기 (1975-1981)</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• Neil Peart 가입 (lyricist & drummer)</li>
                        <li>• Terry Brown과 협업</li>
                        <li>• Fly By Night (75) - platinum 기록</li>
                        <li>• 2112 (76) - Man and Star 심볼 사용 시작</li>
                        <li>• Moving Pictures (81) - multi-platinum</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-bold text-yellow-800 mb-2">🏆 수상 및 성과</h4>
                    <p className="text-xs">
                      1982년 Grammy Award에서 Police의 "Behind my Camel"을 누르고 
                      "YYZ"가 Runner-up in Best Rock Instrumental을 수상. 
                      Geddy(bass), Alex(guitar), Neil(drum) 각각 여러 잡지에서 5회 이상 수상으로 hall of fame에 등재.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-bold text-blue-800 mb-2">🔄 음악적 변화 (1982-)</h4>
                    <p className="text-xs">
                      Signals(82)를 기점으로 그들이 자랑하는 파워있는 연주, 보컬, 곡의 구성, 가사 등을 버리고 
                      대중과 더욱 가깝게 다가옴. 하지만 prog rock fan에게 Rush의 비중도 그만큼 줄어들게 됨. 
                      1996년 9월 10일 Test For Echo를 발표하며 20장의 앨범을 낸 살아있는 rock의 전설.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rush Discography */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-700 mb-4">📀 Rush Discography</h3>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <p><strong>1-10:</strong></p>
                    <ul className="space-y-1">
                      <li>1. Rush (74)</li>
                      <li>2. Fly By Night (75)</li>
                      <li>3. Caress of Steel (76)</li>
                      <li>4. 2112 (76)</li>
                      <li>5. All the World's a Stage (76)</li>
                      <li>6. A Farewell to Kings (77)</li>
                      <li>7. Hemispheres (78)</li>
                      <li>8. Permanent Waves (80)</li>
                      <li>9. Moving Pictures (81)</li>
                      <li>10. Exit: Stage Left (81)</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p><strong>11-20:</strong></p>
                    <ul className="space-y-1">
                      <li>11. Signals (82)</li>
                      <li>12. Grace Under Pressure (84)</li>
                      <li>13. Power Windows (85)</li>
                      <li>14. Hold Your Fire (87)</li>
                      <li>15. A Show of Hands (89)</li>
                      <li>16. Presto (89)</li>
                      <li>17. Chronicles</li>
                      <li>18. Roll the Bones (91)</li>
                      <li>19. Counterparts (93)</li>
                      <li>20. Test for Echo (96)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rush Playlist */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-700 mb-4">🎵 Playing List</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-bold text-red-600">• YYZ (4:24) - Moving Pictures</h4>
                    <p className="text-xs text-gray-600">Grammy Award Runner-up 수상곡</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• What You're Doing (4:22) - Rush</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Leave That Thing Alone (4:06) - Counterparts</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• The Spirit of Radio (4:57) - Permanent Waves</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Bastille Day (4:37) - Caress of Steel</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Roll the Bones (4:30) - Roll the Bones</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Red Barchetta (6:48) - Exit...Stage Left</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• By-Tor and the Snow Dog (8:37) - Fly by Night</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Losing it (4:51) - Signal</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Anthem (4:57) - All the World's a Stage</h4>
                    </div>
                    <div className="bg-white p-3 rounded border border-red-200">
                      <h4 className="font-bold text-red-600 text-sm">• Cygnus X-1 (10:25) - A Farewell to Kings</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geddy Lee Interview */}
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">🎤 Geddy Lee Interview 발췌</h3>
                <div className="bg-white p-4 rounded text-xs italic">
                  <p className="mb-2">
                    <strong>팬들의 불만:</strong> "왜 예전 앨범을 다시 만들지 않나요? 왜 Moving Pictures나 2112 같은 소리를 내지 않나요? 
                    왜 Hemispheres처럼 연주하지 않나요?"
                  </p>
                  <p>
                    <strong>Geddy Lee의 답변:</strong> "그런 것을 설명하기는 매우 어렵습니다. 오랫동안 음반을 만들거나 음악을 써본 사람이어야 이해할 수 있죠. 
                    그것은 자연스러운 일입니다. 스튜디오에 들어가서 그냥 작곡을 시작하죠. 우리가 함께 모여서 그냥 작곡을 시작합니다. 
                    과거의 성공적인 순간을 활용해서 미래를 구축하려고 한다면 밴드로서 오래 지속될 수 없습니다. 
                    우리는 아직 최고의 앨범을 만들지 못했다고 생각합니다."
                  </p>
                </div>
              </div>
            </div>

            {/* Rock Musicals Section */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                🎭 My Favorite - Rock Musicals: Freudiana - 김이영 발표
              </h2>
              
              {/* Freudiana Introduction */}
              <div className="mb-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Freudiana 소개</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-bold text-blue-800 mb-2">📅 작품 정보</p>
                    <ul className="space-y-1 text-xs">
                      <li>• <strong>Music by:</strong> Eric Woolfson</li>
                      <li>• <strong>Produced by:</strong> Alan Parsons</li>
                      <li>• <strong>초연:</strong> 1991년 빈의 Theatre am der Wien</li>
                    </ul>
                  </div>
                  
                  <p>
                    Alan Parsons Project의 Eric Woolfson이 작곡한 록 뮤지컬입니다. 
                    프로이드의 심리학적 접근이라 할 수 있지만 한마디로 단정짓기는 어렵다고 봅니다. 
                    Eric Woolfson의 새로운 시각이 있는 것이고 가미된 재미도 있을 것이기 때문이죠.
                  </p>
                  
                  <p>
                    뮤지컬을 좋아하는 사람이나 Alan Parsons의 팬들도 이 Freudiana에 대해서는 잘 모르는데... 
                    저도 이 뮤지컬은 예바동 덕분에 CD를 구할 수 있었기때문에 더욱 애착이 갑니다.
                  </p>
                </div>
              </div>

              {/* Freudiana Story */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🎬 줄거리</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 mb-2">설정</h4>
                    <p>
                      장소는 프로이드의 박물관. 생전에 그가 쓰던 집기 도구나 소파, 책등이 전시된 곳입니다. 
                      원래의 그것과 똑같이 만들어 놓은 것입니다. 주인공인 에릭은 작곡가를 포함한 인류의 모든 남성을 상징합니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 mb-2">시작</h4>
                    <p>
                      한 무리의 미국 관람객들이 들어옵니다. 그들중에는 소심한 성격의 에릭과 아름다운 처녀 도라(Dora), 
                      그리고 과잉보호를 하는 도라의 아버지가 있었습니다. 소심한 에릭은 도라에게 말조차 제대로 건네지 못하죠... 
                      모두 박물관을 나가고, 불이 꺼지며, 문을 잠그는데... 에릭이 도라를 몰래 만나려다 그만 일행을 놓쳐 갇힌 것입니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 mb-2">꿈의 시작</h4>
                    <p>
                      에릭은 할 수 없이 프로이드의 소파에 누워 잠을 청해봅니다. 잠이 들면서 무대가 한 조각씩 뜯어져 하늘로 올라갑니다. 
                      그의 꿈속으로 이제 여행을 떠나게 된 거예요. 처음 그가 만난것은 조련사. 그녀는 에릭에게 무의식의 이야기를 들려주죠. 
                      에릭은 점점 혼란에 빠져 꿈일거야 꿈일거야 하면서 자조합니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 mb-2">자아 발견</h4>
                    <p>
                      거울사나이가 등장하여 에릭에게 거울속의 자신을 보라고 말합니다. "넌 하나가 아니라 갖가지 너의 모습이 합해진 모습이야. 
                      수많은 너의 편린들..." 에릭은 점점 스스로에 관해 자신이 없어집니다. 한편 꿈의 반대편에서는 도라가 에릭을 찾아 헤맵니다. 
                      에릭은 도라에 대한 자신의 감정에 충실치 못합니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600 mb-2">결말</h4>
                    <p>
                      에릭은 자신의 과거로 돌아가 자신의 소심한 성격이 바로 오이디푸스 컴플렉스에서 기인했다는 것을 깨닫습니다. 
                      결국 의식속의 아버지를 죽이게 되고 이로써 그는 스스로의 혁명에 성공합니다. 
                      박물관에서 구출되어 나온 에릭은 이제 어제 저녁의 그와 지금의 자신이 다르다는 것을 압니다. 
                      소심한 성격은 사라지고 도라에게 사랑한다는 말도 잊지 않죠. Freudiana - 프로이드의 세계는 그를 바꾼 것입니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Freudiana Tracklist */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🎵 Freudiana 주요 곡들</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600">• The Nirvana Principle (3:45)</h4>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600">• Freudiana (6:21)</h4>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600">• I am a Mirror (4:07)</h4>
                  </div>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <h4 className="font-bold text-purple-600">• Let Me Go Home (4:18)</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-blue-600">20+</div>
                  <div className="text-blue-700">곡 (Rush 11곡 + Video 4곡 + Freudiana)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-red-600">🇨🇦</div>
                  <div className="text-red-700">Rush (캐나다)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🎬</div>
                  <div className="text-green-700">Video 감상</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🎭</div>
                  <div className="text-purple-700">Rock Musical</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제11회 YBD Rush 특집 & 종합 감상회 완전 복원! 
                캐나다 록의 전설 Rush와 프로이드 뮤지컬의 만남이 되살아났습니다! 🇨🇦🎭
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session10" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (10회)
                </Link>
                
                <Link href="/gathering/session12" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (12회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
