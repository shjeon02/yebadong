import Link from "next/link";

export default function ReviewAbraxas() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Abraxas</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">cicco (이윤직)</span>
              <span className="ml-2 text-sm text-gray-600">jiklee@chiak.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Abraxas 새앨범 Centurie 소개</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">반가운 소식</h4>
                    <p>
                      &gt; &gt;PS. 말씀드리는 순간 폴란드에서 소포가 날아왔네요. Abraxas의 새앨범.. 멋진 디지팩에 담겨 있네요. :-)
                    </p>
                    <p>
                      &gt; 엄청나게 반가운 소식이군요. 촌평을 부탁드립니다. 아직 열심히 듣고 계실테니 중간 평가 비슷하게라도 말입니다.
                    </p>
                    <p>
                      진석님 몸 건강히 잘 다녀오셨죠? 예바동에서 다시 뵙게 되서 정말 반갑습니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">앨범 정보</h4>
                    <p>
                      Abraxas의 두번째 앨범인 'Centurie'는 아시다시피 Polish와 English의 두가지 버젼으로 발매가 되었습니다. 
                      해외 시장을 겨냥한 English-version이 정말로 돌아다니고 있는지 확인은 못 했습니다만, 어쨋든 제가 가지고 있는 건 Polish-version입니다.
                    </p>
                    <p className="mt-2">
                      비단 아트록에 국한된 얘기는 아니지만 전 자국의 언어로 불려진 노래가 진짜다라는 선입견을 가지고 있는데 여러분들은 어떠신지.. :-)
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">음악적 변화</h4>
                    <p>
                      이들의 홈페이지에도 누군가의 짤막한 리뷰가 있습니다만 첫번째 앨범과는 스타일이 상당히 다릅니다. 
                      보다 누그러지고 심지어는 popular해진 느낌이랄까요? 가사를 알아들을수는 없지만 분위기로 보아 시종일관 사랑 타령을 하고 있는 듯한 
                      아름답고 특유의 음울한 멜로디가 끊임없이 이어집니다.
                    </p>
                    <p className="mt-2">
                      하지만 오히려 절제된 연주, 더욱 세련되어진 Adam Lassa의 마치 피터 해밀을 연상시키는 처절한 보컬 등 
                      저 개인적인 생각으로는 한단계 더 발전했다는 생각이 드는 앨범입니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">리스너 취향에 따른 평가</h4>
                    <p>
                      이들의 1집을 들으시면서 '꽤 분위기는 있는데 연주와 보컬이 좀 유치하고 구태의연하다'라고 생각하셨던 분들은 만족하실 듯. 
                      반대이셨던 분들은 '이거 무늬만 아트록 아녜요?'라고 따지실지도.. :-) 하지만 몇몇곡에서는 1집의 분위기를 느끼실 수 있습니다.
                    </p>
                    <p className="mt-2">
                      특히 오늘같이 부슬부슬 비라도 내리는 날엔 정말 하루종일 들어도 좋을 것 같네요.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">추가 정보</h4>
                    <p>
                      아.. Quidam의 두번째 앨범도 발매가 되었습니다. 트레이드 파트너한테 사달라고 부탁은 했습니다만 언제나 받게 될지는 모르겠네요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">3M</span>
              <span className="ml-2 text-sm text-gray-600">freev@hanmail.net</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">Abraxas 1집 vs 99 비교 분석</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">간단한 결론</h4>
                    <p>
                      Abraxas 1집과 99를 비교해달라는 동훈님 요청에 따라 간단한 답변 올립니다.
                    </p>
                    <p className="mt-2 font-medium">
                      답변은.... 전 1집이 더 좋더라... ^^
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">1집 분석</h4>
                    <p>
                      1집: Marillion Copy란 평도 많이 올랐었는데요..전 Marillion 앨범을 들어본게 없어서리.. 
                      하지만 "Mispalced Childhood"와는 확실히 다릅니다. 이 앨범 별로 좋아하지 않는데.. Abraxas 1집은 좋네요. [Good]
                    </p>
                    <div className="mt-2 bg-white p-2 rounded border-l-2 border-green-300">
                      <p className="text-xs font-medium">
                        Kevin Rawland/Peter Hammil을 짬뽕한 보컬 + Good Melody + Mellow + Sadness + Sympho = Abraxas 1집
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">2집 Centurie 분석</h4>
                    <p>
                      발매 레이블을 메탈 어쩌구로 바꾸고 낸 작품인데.. 기타 부문에 통속적 메탈 프레이즈가 들리기도 하고... 
                      보컬이 과격한 모습을 보이기도 하고... 좋은 부분이 꽤 있네요. 
                      1집처럼 대곡이 포함되어 있긴 하지만 색깔도 많이 다르고..느낌도 팍 다가오지 않습니다. 
                      더 들어봐야 되겠습니다. [느낌 이동중]
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-medium text-green-800 mb-2">3집 분석</h4>
                    <p>
                      2집과는 또 약간 다르네요. 그렇다고 1집으로 회귀한 것은 아니고... 곡들이 짧아 졌네요. 
                      보다 대중 지향적인 느낌이 들고.. 일반(?) 하드코어 팬들도 소프트하게 즐길수 있을 것 같네요.
                    </p>
                    <p className="mt-2">
                      키보드 사운드에서 세기말적 느낌도 나고.. (이런 사운드를 어디서 들었더라...? 
                      아 Led Zeppelin의 All my love.. All my love하는 곡 있잖아요. 거기 나오는 키보드 사운드 느낌과 비슷하네요. 
                      In through the outdoor 앨범인가?)
                    </p>
                    <p className="mt-2">
                      앞쪽 반은 곡들이 좋습니다. 비장감도 나고.. 스트레스도 해소되고.. 영화 오프닝 신에 잘 어울릴 만한 곡도 있습니다. 
                      후반부 반은 아직 와 닿질 않네요. [느낌 이동중]
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded border-l-2 border-pink-300">
                    <h4 className="font-medium text-pink-800 mb-2">폴란드어에 대한 감상</h4>
                    <p>
                      덧말. Quidam을 들으면서도 느꼈던 건데.. 폴란드 말 정말 아름답네요.. 
                      세상에서 제일 아름다운 언어가 아닐까 생각되네요.. 정말 아름다워요 ^____^
                    </p>
                  </div>
                </div>
                <p className="text-sm mt-3 text-gray-600 italic">3M (Music, Movie and Money for 'em) 드림.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-center mb-2">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-medium">김진석</span>
              <span className="ml-2 text-sm text-gray-600">jindor@mmrnd.sec.samsung.co.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-purple-700 mb-2">폴란드어의 아름다움에 대한 성찰</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">언어의 아름다움</h4>
                    <p>
                      3M님의 말씀에 공감합니다. 알리체 비스콘티의 노래를 듣고 이탈리아어의 아름다움에 감동 받았듯이, 
                      거칠고 황량한것같던 폴란드어도 Quidam의 에밀라 데르코프스카의 음성을 통하니 얼마나 아름답게 들리던지요.
                    </p>
                    <p className="mt-2">
                      (게다가 에밀라가 상당한 미인이잖아요? 음대생이었다는데 졸업하고 Quidam에 계속 있을건지 궁금합니다. 
                      집안의 반대가 심할텐데....)
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">폴란드어의 특징</h4>
                    <p>
                      그래서 폴란드어는 어떻게 생겨먹은 언어일까 궁금하여 슬쩍 소개글을 들춰 보았더니 이런 구절이 있었습니다:
                    </p>
                    <blockquote className="mt-2 p-2 bg-white border-l-2 border-purple-300 italic">
                      "폴란드어는 그 언어를 공부한 적이 없는 사람에게는 많은 부가기호와 유달리 긴 명사들때문에 거의 발음할수 없는 것처럼 보인다."
                    </blockquote>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">발음의 어려움</h4>
                    <p>
                      정말 그렇더군요. 인터넷에서 본 폴란드 텍스트에서 막 튀어 나오는 
                      "wojewodow", "ostrzegawczych", "przewodniczacego" 이런 단어를 보세요. 발음할수 있나...
                    </p>
                    <p className="mt-2">
                      AR지 14호 리뷰에도 보면 주형민씨가 "이상한 이름의..." 이런 설명과 함께 한 아티스트의 이름을 원문으로 써놓았는데 
                      알고보니 그것도 폴란드 성이었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-medium text-purple-800 mb-2">제안과 결론</h4>
                    <p>
                      요즘 추세로 보면 다음 Art Rock지(언제 나올지 모르지만) 에는 "폴란드어 읽는법" 이런 기사가 한번쯤 실려도 괜찮을것 같습니다. 
                      폴란드어가 아름답게 들린다면 그냥 들리는 대로 놔둬야지, 공연히 깊이 파고 들어갔다가는 정이 뚝 떨어질것 같습니다.. ^ ^
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-center mb-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">Piotr Tucholski</span>
              <span className="ml-2 text-sm text-gray-600">폴란드 현지 정보</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-orange-700 mb-2">Abraxas 밴드 정보</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">멤버 구성</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Szymon Brzezinski</strong> - guitars</li>
                      <li><strong>Marcin Mak</strong> - drums</li>
                      <li><strong>Adam Lassa</strong> - vocals</li>
                      <li><strong>Marcin Blaszczyk</strong> - keyboards, flute</li>
                      <li><strong>Rafal Ratajczak</strong> - bass</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">밴드 히스토리</h4>
                    <p>
                      The neo-prog band founded in 1987 but, as many others formations, got bigger success a few years later after changing their crew. 
                      They released two albums. First self-titled in '96 (Ars Mundi) presents music inspired by Marillion but in their own emotional style. 
                      Mysterious atmosphere comes into dynamic music. Overall very good.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-medium text-orange-800 mb-2">두 번째 앨범과 성과</h4>
                    <p>
                      The second one ('98, Metal Mind) is different. The band "stretched the limits" and added metal and gothic influences. 
                      By some prog fans this album is called real masterpiece.
                    </p>
                    <p className="mt-2">
                      In '98 Abraxas appeared at: Progressive Rock Music Festival in Zielona Gora (Poland) - where got 3 awards; 
                      Proglive '98 in Corbigny, France or at Dutch Progressive Rock Stage, Bussum, The Netherlands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Abraxas 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 폴란드</li>
                  <li><strong>결성:</strong> 1987년</li>
                  <li><strong>장르:</strong> Neo-Progressive Rock</li>
                  <li><strong>영향:</strong> Marillion, Peter Hammill</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>Marillion 영향의 네오 프로그</li>
                  <li>신비로운 분위기의 다이나믹한 음악</li>
                  <li>Peter Hammill 스타일 보컬</li>
                  <li>메탈/고딕 요소 가미 (2집부터)</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 앨범</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>Abraxas</strong> (1996, Ars Mundi) - 데뷔작, Marillion 영향의 네오 프로그
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Centurie</strong> (1998, Metal Mind) - 메탈/고딕 요소 가미, 마스터피스로 평가
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>99</strong> - 대중 지향적 성향, 짧은 곡들로 구성
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 성과</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-blue-100 px-2 py-1 rounded">Zielona Gora 페스티벌 3개 상 수상</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Proglive '98 (프랑스)</span>
                <span className="bg-blue-100 px-2 py-1 rounded">Dutch Progressive Rock Stage</span>
              </div>
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