import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Jackson Heights | Yebadong',
  description: 'Nice의 Lee Jackson이 결성한 그룹 Jackson Heights에 대한 리뷰',
};

export default function JacksonHeightsPage() {
  return (
    <BandReview
      bandName="Jackson Heights"
      description="Nice의 Lee Jackson이 보다 대중적인 음악을 위해 결성한 그룹"
      reviews={[
        {
          reviewer: "Arirang (김영호)",
          email: "arirang@star.gsw.re.kr",
          content: `Jackson Heights의 멤버는 다음과 같습니다.
Lee Jackson /Bass, Vocals, Acoustic Guitars, Congas, Electric Cello
John McBurne /6 & 12 String Acoustic Guitars, Vocal,
              Assorted Latin American Percussion
Brian Chatton /Piano, Organ, Mellotron, Vocals

이 앨범에는 이들이외에도 어쿠스틱기타, 피아노 등을 담당하는 여러명의 뮤지션
이 참여했더군요.Lee Jackson이 Nice의 Virtuoso한 스타일에서 벗어나 조금은 대
중적인 음악을 만들기 위해서 조직한 그룹이라고 합니다.  

그래서인지 전곡이 어쿠스틱 기타와 피아노, 그리고 가벼운 터치의 콩고를 바탕으로한 그저 편하게 들을 수 있는 분위기 입니다. 그래도 제일 괜찮은 곡은 4번째 곡인 Sweet Hill Tunnel입니다. 스산한 바람소리로 시작하여 먼가 구슬픈듯한 그런 곡일것 같으면서 중간에 가면 춤을 추는 듯한 피아노 소리가 아주 좋군요. 그위에 콩고 소리도 덧붙여져서 아주 흥겹고 리듬감이 있습니다. 

많이 들어본 어떤 리듬을 연주하는 부분이 나오고요. 길거리는 지나는 차들의 소리로 시작하는 첫곡 Tramp를 포함하여 대체적으로 듣기 편합니다. 머 16,000의 가치가 있느냐는 잘 모르겠구요.`
        }
      ]}
    />
  );
} 