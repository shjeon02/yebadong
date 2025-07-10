import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Garmarna - 가르마나 | Yebadong',
  description: '가르마나(Garmarna)의 음악과 앨범에 대한 리뷰',
};

export default function GarmarnaPage() {
  return (
    <BandReview
      bandName="Garmarna"
      koreanName="가르마나"
      description="스웨덴 출신의 포크 록 밴드 가르마나에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "Pollen",
          email: "pollen@inote.com",
          content: `<< 신보 >>
SRMC 4055 GARMARNA-GUDS SPELEMAN(CD/13,000원)
스웨덴 출신 가르마나의 두 번째 앨범. 세련되고 강렬한 이미지의 여성 보컬과 민속 음악을 현대 감각으로 소화해내는 연주 기법이 독특하다.

스웨덴이라면 북구 쪽에 있는 나라 맞죠? 저 세계지리 공부 안해서 잘 몰라요. 라그나뤽이 생각납니다. 스웨덴이 맞는지 아닌지는 모르지만. 얼마 전 Bo Hansson의 'Sagam Om Ringen'을 우연찮게 들을 기회가 있었는데 Bo Hansson도 북구에서 온 옛사람들인가요? 비슷하게 맞아 떨어지던데. Ragnaro(+umraut)k의 A면 마지막 곡과 Bo Hansson의 단편 꼴라쥬들 중에서 한 곡이 분위기가 참 비슷하더군요. 제 삐삐의 인사음악이 지금 Bo Hansson의 곡으로 되어 있습니다. 겨울이니까요. 겨울에 잘 맞지요. Garmana는 어떨지 모르겠군요. "연주 기법이 독특하다"고 쓰셨는데, 어떤 악기들을 쓰나요. 듣도 보도 못한 그런 미지의 민속악기들?`
        },
        {
          reviewer: "LongDal",
          email: "shjeon@gaia.kaist.ac.kr",
          content: `저는 Garmarna를 연합감상회에서 ARC 회원중 한분이 소개하는 것을 듣고 1집을 구입했습니다. 스웨덴하면 축구잘하는 나라로 밖에, 더 이상 아는 게 하나도 없습니다. 다만, Ragnarok, Bo Hansson, Anglargard, Anekdoten, Samla Mammas Manna, Kaipa 등의 많은 밴드들과 프로록 이외에 팝에서도 독특한 개성을 가지고 있는 밴드들이 많이 나왔다는 것만 압니다. 그래서인지 Sweden 출신 밴드라는 소개에는 뭔가 있겠구나 하는 선입관도 작용하기도 합니다.

연합감상회에서 처음들은 Garmarna는 포크라기보다 다른 쟝르(사이키+하드락) 에 영향을 많이 받은 것 같은 느낌을 받았습니다. 무지 큰 볼륨으로 들었기 때문인지 드럼, 타악기 연주가 크게 들려서였는지 몰라도 좋아하지 않는 포크락 앨범을 사야겠다는 결심을 하게 되었습니다. 그러나, 일단 사서 들어보니까.

역시 민속풍의 포크였습니다. 제가 그리 좋아하지 않는 그러나 많은분들이 좋아하는 민속적인 색채가 물씬 풍겨나옵니다. 유럽의 한 동네 어귀에서 늙은 아저씨 아줌마들이 모여서 춤을 출때 나옴직한 Jews Harp(?), Viola, Violin 연주가 전면에 깔려있어서 헤드폰을 끼고 들을 때는 웅장한 느낌은 훨씬 적어집니다. Jews Harp는 유태인들이 즐겨 연주하는 하프의 일종인가보죠? 그러니까, 라그나뤽과는 전혀 느낌이 다릅니다. 저는 라그나뤽의 flute 연주를 정말 좋아합니다. 절제된 기타, 키보드 연주도 좋죠.

감상회때 들었던 제가 얼핏 착각하고 들었던 뒷쪽에서 들리던 전자기타 소리도 사실 그게 아니었고, 베이스 연주도 없습니다. 그래서인지 전체적으로 긴장감이 있거나 강력한 사운드는 아니었고, 경쾌한 듯하지만, 템포도 조금 느립니다. 보컬도 차분한 느낌이 전혀 없는 약간의 가성이 들어간 듯한 여성 보컬로, 경쾌하고 약간은 슬픈 민속풍을 한층 더하고 있습니다. 저에게는 설상가상이죠. 헤헤.`
        }
      ]}
    />
  );
} 