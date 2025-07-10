import BandReview from '@/components/BandReview';

export default function GunPage() {
  return (
    <BandReview
      bandName="Gun"
      albumTitle="Gun"
      reviews={[
        {
          reviewer: "Arirang/김영호",
          email: "arirang@star.gsw.re.kr",
          date: "",
          content: `Gun - 데뷔앨범

어젯밤 GUN의 데뷔앨범을 들으면서 문득 이런 생각이 들더군요. 내가 멋진 음악
을 들으며 상상하는(물론 상상이 꼭 룸싸롱 같은 데서 여자를 주물럭거리는 것만
은 아니고요.)것과 별반 다를 게 없다는 것이죠. 물론 풍부한 경험이 풍부한 상
상을 가능하게 할 수도 있지만요. Tudor Lodge의 "Forest"라는 음악을 듣고 있노
라면 전 깊은 산속의 어느 고목의 그루터기에 앉아 산뜻한 내음 속에서 물끄러미
하늘을 바로보고 있는 자신이 떠오르곤 합니다. 그러한 떠오름이 결코 저의 경험
에 못미친다는 생각이 들지않아요.

아무튼 GUN의 데뷔앨범은 한마디로 죽인다는 것이죠. 특히 "The Sad Saga of the
Boy and the Bee"와 "Rat Race"등은 제가 경험했던 그 어떤 것보다도 저에게 만
족스러운 것이었습니다. GUN의 데뷔 앨범에 대해서 이렇다 저렇다 이야기하고 싶
지가 않군요.`
        }
      ]}
    />
  );
} 