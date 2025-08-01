import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Urban Sax - 밴드 리뷰 | Yebadong',
  description: 'Urban Sax 밴드에 대한 상세한 리뷰',
};

export default function UrbanSaxReviewPage() {
  const reviews = [
    {
      id: 1,
      author: "orkman, 장민수",
      email: "cats@gw2.hyundai.co.kr",
      date: "",
      content: `이제 Urban Sax의 'Spiral'에 대해 몇마디: Urban Sax는 70년대 초중반에 Lard Free를 이끌었던 쥘베르 아르망(Gilbert Artman)의 컨셉트에 따라 70년대 후반에 조직된 일종의 퍼포먼스 음악 집단입니다. 단순히 음악을 전달하는데 그치지 않고 의상과 음향에 대해 가능한 실험을 다양하게 시도했지요. 예를 들면, 지하철 역마다 색소폰 연주자들을 몇명씩 배치해 놓고 무선 통신으로 싱크를 맞추면서 연주를 합니다. 지하 터널을 통해 울리는 색서폰 소리들이 역과 역을 이으면서 이루어내는 음향.... 실제로 처음 Urban Sax의 컨셉트는 한 소도시에서 열리는 예술 행사의 개막 행사로 도시 전체를 부우웅~ 울리게 하는 프로젝트에서 시작되었다고 합니다. 이 프로젝트를 쥘베르가 맡았던 거죠. 다수의 색서폰을 통해 만들어질 수 있는 음향과 울림에 대한 실험이 Urban Sax의 초기 컨셉트가 아니었을까 하는 생각이 드네요.

예전에 성시완씨가 텔레비전에 나와서 프로그레시브 락을 소개한 적이 있는데, 그때 Urban Sax의 비디오 클립이 소개되었었죠. 우주복같은 의상을 입은 수십명의 색서폰 연주자들이 별 의미없어 보이는 음들을 주욱주욱 내뱉던 모습이었슴니다. 이쯤 되면 Urban Sax의 앨범에서 기대하는 음악이란 것이 어떤 것일지 상상이 가죠? :) 근데 이 네번째 앨범에서 들리는 Urban Sax의 음악은 그렇게 아방가르드한 것이 아니었슴니다. 자주 사용되는 미니멀한 구조, 색스군과 코러스가 만들어내는 인간적이고 푸근한 음향, Lard Free와 Heldon에 뿌리를 둔 음악성(후기 Art Zoyd를 연상시키기도 하고요...) 때문에 친근감이 느껴지더군요. 

참, 이 앨범에는 30여명의 색스 주자들 외에 30여명의 합창단과 여러명의 퍼커션 주자들이 참여하고 있슴니다. 초기에는 색스 주자들로만 이루어져 있었는데 이후 합창단과 퍼커션군이 추가되었다는군요. 그에 따라서 음악도 좀 더 리듬이 풍부하고 인간적인 형태로 변한 듯 합니다. :)

클라우스 슐쩨, 필립 글래스, Heldon 등등...  이런 음악에 푸욱 빠져서 유영할 줄 아시는 분이라면 Jasun Martz나 Urban Sax를 자알 즐기실 수 있을 거 같군요.:) 만족스런 음반 구입이였네요. 헐헐~ :)

orkman`
    }
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Urban Sax</h1>
          <p className="text-base text-muted">프랑스의 실험적 퍼포먼스 음악 집단</p>
        </div>
        
        <div className="space-y-8">
          {reviews.map((review) => (
            <article key={review.id} className="bg-surface-subtle border border-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-primary">{review.author}</span>
                  {review.email && (
                    <a href={`mailto:${review.email}`} className="text-sm text-blue-600 hover:underline">
                      {review.email}
                    </a>
                  )}
                  {review.date && <span className="text-sm text-muted">{review.date}</span>}
                </div>
              </div>
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {review.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}