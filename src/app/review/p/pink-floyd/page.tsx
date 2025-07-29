import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd | Yebadong',
  description: 'Pink Floyd - The Division Bell 및 다양한 앨범에 대한 상세한 리뷰',
};

export default function PinkFloydPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd
            </h1>
            <p className="text-purple-300 text-lg">프로그레시브 록의 전설적인 밴드</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [Fish, 신인철, icshin@chiak.kaist.ac.kr]
              </p>
              
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                [Review] Pink Floyd - The Division Bell
              </h3>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  이 앨범에 대한 저의 의견은 한마디로 <strong>Great !!!</strong> 입니다. 저는 사실 엄청난 Floyd 
                  fan임에도 불구하고 87년도 앨범 A momentary lapse of Reason 은 별로 좋아하지 
                  않았읍니다.. 사실 저는 Pink Floyd fan이라기 보다는 Roger Waters 의 fan이니
                  까요.. 하지만 Gilmour나 Wright의 solo stuff들도 저는 무척 즐겨 들었읍니다.
                  근데 _A momentary lapse..._는 Floyd가, 아니 David Gilmour와 Bob Ezrin이 너
                  무 Floydian하게 만들려고 노력한 점이 어색하게 드러나 여러가지 sound의 무리
                  가 많았죠... 특히 _A new machine_이나 _Dogs of War_. 하지만 이 앨범은 Gilm-
                  our와 Wright, Mason 등이 Waters의 그늘을 완전히 벗고 새로운 sound 를 들려줍
                  니다..
                </p>

                {/* Track List */}
                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Track List</h4>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>1. Cluster One</div>
                    <div>2. What do you want from me</div>
                    <div>3. Poles Apart</div>
                    <div>4. Marooned</div>
                    <div>5. A great day for freedom</div>
                    <div>6. Wearing the inside out</div>
                    <div>7. Take it back</div>
                    <div>8. Coming back to life</div>
                    <div>9. Keep talking</div>
                    <div>10. Lost for Words</div>
                    <div>11. High Hopes</div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">
                    Produced by Bob Ezrin and David Gilmour
                  </p>
                </div>

                {/* Guest Musicians */}
                <div className="mt-6 p-4 bg-black/20 rounded-lg">
                  <h5 className="font-semibold text-purple-300 mb-3">Guest Musicians</h5>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-yellow-300">Guy Pratt</strong> : bass
                      <br />
                      <span className="text-gray-400">
                        → The Delicate sound of thunder video의 방방뛰며 _Run like Hell_을 부르던, 
                        굉장히 실력있는 젊은 친구입니다.
                      </span>
                    </div>
                    <div>
                      <strong className="text-yellow-300">Tim Renwick</strong> : additional guitar
                      <br />
                      <span className="text-gray-400">
                        → 역시 _the delicate..._ video에 나오는 친구죠.. 
                        Wish you were here 의 intro를 대신 치던...
                      </span>
                    </div>
                    <div>
                      <strong className="text-yellow-300">Dick Parry</strong> : Sax
                      <br />
                      <span className="text-gray-400">
                        → _the Dark side of the moon_ _Wish you were here_ 
                        시절부터 함께하던 영원한 Floydian!!!
                      </span>
                    </div>
                    <div>
                      <strong className="text-yellow-300">Michael Kamen</strong> : Orchestral arrangement
                      <br />
                      <span className="text-gray-400">
                        → _The Wall_의 30 % 는 이 친구가 만들었다해도 과언은 아니죠...
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  사실 저는 Roger Waters가 떠난 후의 Pink Floyd에 대해서는 회의적이었읍니다.
                  하지만 이 앨범을 들으면서 그런 생각이 많이 바뀌었읍니다. David Gilmour의 
                  기타와 보컬, Rick Wright의 키보드, Nick Mason의 드럼이 Waters 없이도 
                  충분히 훌륭한 Pink Floyd의 음악을 만들어낼 수 있다는 것을 보여주었기 때문입니다.
                </p>

                <p>
                  특히 이 앨범에서 가장 인상깊은 곡은 'High Hopes'입니다. Gilmour의 애절한 
                  기타 솔로와 Wright의 아름다운 키보드가 어우러져 Pink Floyd다운 장대한 
                  서사시를 완성했습니다. 'Marooned'의 경우 완전한 인스트루멘탈 곡으로 
                  Gilmour의 기타 실력을 마음껏 감상할 수 있습니다.
                </p>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 평가</h4>
                  <p className="text-gray-200">
                    The Division Bell은 Roger Waters 이후 Pink Floyd의 새로운 가능성을 보여준 
                    의미있는 작품입니다. Waters의 강렬한 개념적 접근보다는 Gilmour의 멜로디컬하고 
                    서정적인 접근이 돋보이는 앨범으로, Pink Floyd의 또 다른 면모를 발견할 수 있습니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-6">
                  ※ Pink Floyd의 다른 앨범들에 대한 리뷰도 곧 추가될 예정입니다.
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
