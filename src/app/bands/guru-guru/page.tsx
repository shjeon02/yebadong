import BandReview from '@/components/BandReview';

export default function GuruGuruPage() {
  return (
    <BandReview
      bandName="Guru Guru"
      albumTitle="UFO"
      reviews={[
        {
          reviewer: "유영재",
          email: "espiritu@hitel.net",
          date: "95.08",
          content: `Guru Guru - UFO

아래 두분이 이 앨범에 대한 견해를 밝혀주셨는데...
나 역시 이 앨범에 대한 느낌은 비슷하다.
두서없이 연주하는 기타와 퍼커션의 난타에는 극도의혼란함과 불안감만이 존재할
뿐이다.다 듣고나면 이런 음악 왜 들어야하는지 고개가 갸우뚱해지는데... 더 웃기는
것은 그러면서도 '좋다...'라는느낌을 받게된다는 것이다.
쓸데없는 소음과도 같고 무질서한 사운드...근데 왜 좋을까...?그럼에도
불구하고...결코 플레이어에 자주 올려질 앨범은 아니라는 확신이 든다.종잡을수
없는 앨범이다...`
        },
        {
          reviewer: "조영래",
          email: "cynical@hitel.net",
          date: "95.08",
          content: `Guru Guru - UFO

무서운 일을 초래할 수도 있는 CD... 흐흐..
진이형 말마따나 Guru Guru는 누구에게나 들어보라고 권할 수 있는 앨범은 결코
아니다. 이전에 먼저 수입되었던 Hinten에 한번 데였던 사람이라면 UFO 역시
비껴나가는 것이 좋을 것이다. 이거나, 저거나, 그야말로 뻔한 스타일,구루 구루다운
스타일이다. 말도 안되는 리듬과 어처구니 없는 기타 솔로, 녹음하기 전에 써 둔
곡이 정말 있는것이냐는 소박한 의문을 가지게하는 무절제한 연주, 그야말로 음이여
나오너라.. 나는 되는데로 집어가노라하는 수필식의 음악이라는 생각이 든다.

본작에 대해선 저희 어머니의 촌평으로 간략하게 정리하고자 한다.

"원 어느 정도껏 되야지..."`
        }
      ]}
    />
  );
} 