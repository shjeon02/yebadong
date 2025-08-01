import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'T2 - 밴드 리뷰 | Yebadong',
  description: 'T2의 음악과 앨범에 대한 상세한 리뷰',
};

export default function T2Page() {
  const reviews = [
    {
      reviewer: "Oak-Man, 장민수",
      email: "jangms@mobi.etri.re.kr",
      content: `T2 의 _It'll All Work Out In Boomland_ 는 아트락지와 시완 레코드를 통해서 그 유명세를 톡톡하게 치른 앨범이지요. 저도 자자한 칭찬에 이끌리어 T2의 CD를 구입했는데 몇번 들으면서 그저 좋구나... 하고 말았답니다. 그러던 중, 어제 오후 대전으로 향한 고속 버스 안에서 CDP 에 T2 의 CD 를 집어넣고 플레이! 와! 달리는 고속버스의 속도감. 깨끗한 하늘과 눈앞에 쫙 펼쳐진 경치. 그리고 헤드폰에서 흘러나오는 경쾌한 리듬과 기타 소리. 심벌즈 소리가 그리도 살랑살랑하게 들리더라구요 :-) 한시간 동안의 멋진 여행이었습니다!`
    },
    {
      reviewer: "Budgie, 이훈구",
      email: "hglee@fdcl.kaist.ac.kr",
      content: `T2 비스무레한 걸 찾으신다고 하셨는데.. arirang 이 Cressida 와 GUN 을 권했지요? :) 그 외에도 제가 권하고 싶은것은.. Birth Control 의 _Operation_ 과 Bakerloo 그리고 Tractor 정도입니다. 

Birth Control 은 많은 분들이 아시겠지만.. 프로록 밴드라고 하기보다는 독일의 대표적인 하드락 밴드로 생각되고.. 실려 있는 곡들도 나무랄데 없이 훌륭한 하드락 stuff 입니다. 특히 이 _Operation_ 앨범은 정말 너무너무 멋집니다!!! 특히 두번째곡 _Just Before The Sun Will Rise_ 이곡은 아주 멋집니다. 너무 신나요~~

Bakerloo 는 머 제가 전에 글을 한번 올렸었고..

Tractor 는 얼마전에 구입했는데..정말 특이하게도 가장 뛰어난 트랙이 보너스로 들어있는 마지막 곡이더군요.. 도입부부터 들려오는 어쿠스틱/일렉 기타 그리고 환상적인 드럼연주.. _overture_ 란 이 곡은 크게 두부분 그리고 첫부분은 Peterloo part 1/2 로 두부분으로 이루어져 있는데.. 요란하지 않으면서도 꽉 차는 사운드. T2 와는 좀 거리감이 있지만.. 리듬섹션의 일치감과 연주 능력은 T2 못지 않습니다. 더욱 놀라운 것이 이 모든 곡을 두사람이 오버더빙에 의해 모든 악기를 연주해낸.. two man band 라는 사실:)`
    }
  ];

  return (
    <BandReview 
      bandName="T2"
      albumTitle="It'll All Work Out In Boomland"
      description="경쾌한 리듬과 기타 사운드가 특징인 그룹. 아트락지와 시완 레코드를 통해 유명해진 앨범으로 유명하다."
      reviews={reviews}
    />
  );
}