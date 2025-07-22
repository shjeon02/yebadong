import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Jon and Vangelis | Yebadong',
  description: 'Yes의 보컬 Jon Anderson과 Vangelis의 협업 프로젝트에 대한 리뷰',
};

export default function JonAndVangelisPage() {
  return (
    <BandReview
      bandName="Jon and Vangelis"
      description="천상의 목소리 Jon Anderson과 천상의 키보드손 Vangelis의 멋진 조화"
      reviews={[
        {
          reviewer: "shuai (정영수)",
          email: "SHUAI@chollian.net",
          content: `시디를 사게 된 이후, 자연히 앨피에는 손이 안가게 되지요. 편
리함이 가져다 주는 게으름이란...

무지 좋아하면서도 앨피로 구입한 앨범이란 이유로 나의 버림을 
받는 앨범중에서 시디로 업그레이드 하고픈 앨범이 있는데 그건 
바로 Jon&Vangelis의 앨범들입니다. 그렇다고 새로운 판들을 제
쳐두고 옛음악을 시디화 시킬 엄두는 못내고 입맛만  다시고 있
지요. 천상의 목소리 존 앤더슨과  천상의 키보드손(?)반겔리스
의 멋진 조화가 만들어 낸 이들의 음악이  아트락으로 분류되는
지는 잘 모르겠지만 감히 바동에 이 들의  이름을 올려 봅니다.

Yes의 보컬 Jon이 Tormato앨범후 탈퇴하고 반겔리스와 조인트가 
시작되었습니다. 남은 Yes는 Drama앨범에 착수하게 되었죠.

저는 이들의 두 번째 조인트앨범인 The Friends  of Mr.Cairo와 
세 번째의 Private Collection이 있는데 개인적으로는  세 번째 
앨범이 좋습니다. 제가 꼭 시디로 갖고 싶은 앨범이기도 하구..

앨범 속지에 유일하게 가사가 빠진 Italian Song은  그 당시 나
의 마음을 왠지 모를 슬픔으로 빠지게 한  곡이고, 제목과 가사
가 에로(?)적인 듯 하지만 아름답게만 들리는  섹서폰이 인상적
인'And when the night comes'와 성경에 나오는  사사 드보라와 
이름이 꼭 같은 사랑(?) 발라드인 Debora, 팝음악으로  널리 잘 
알려진 폴로네이즈도 이 앨범에 수록되어 있고, 예전 모 복사기
의 CM으로 실렸던 가장 진보적인 He is  sailing과 뒷면 전체를 
장식하고 있는 자장가(?) Horizon이 있습니다.

이 들의 두 번째 앨범의 타이틀곡이 가장  프로그레시브에 가까
운 음악이라는 생각이 드는데, 제가 어렸을 때 보려다가 말았던 
추리소설 '말타의 매'는 나중에 영화화 된 모양인데  제가 아직 
못보았습니다. 이 음악이 바로 영화 '말타의 매'와 관련이 있는  
음악입니다. 이 음악을 알게 된 직접적인 계기는 성시완의 디스
크쇼에서 소개해 주었기 때문이죠.. 

총 4부분으로 나뉘어진 이 곡은 많은 의미를  담고있고, 환상적
이고 마지막부분은 서정적이면서  아름답기 까지 합니다.

P.s 전에 용산 신나라에서 존앤더슨의 솔로앨범 무척 많이 있는
것을 보았는데 저는 뭐가 좋은지 모르겠더군요. 존 앤더슨을 좋
아하시거나, 솔로앨범을 접해 보시고 추천앨범이 계시는 분들은
제게 좀 알려 주시지 않으실런지요.

shuai 였습니다.`
        }
      ]}
    />
  );
} 