import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'BAND_NAME | Yebadong',
  description: 'BAND_NAME에 대한 리뷰',
};

export default function BandPage() {
  return (
    <BandReview
      bandName="BAND_NAME"
      albumTitle="앨범 정보"
      reviews={[
        {
          reviewer: "리뷰어",
          email: "email@example.com",
          content: `리뷰 내용을 여기에 추가해주세요.`
        }
      ]}
    />
  );
}
