import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Galaxy Lin - 갤럭시 린 | Yebadong',
  description: '갤럭시 린(Galaxy Lin)의 음악과 앨범에 대한 리뷰',
};

export default function GalaxyLinPage() {
  return (
    <BandReview
      bandName="Galaxy Lin"
      koreanName="갤럭시 린"
      description="갤럭시 린에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "정보 필요",
          email: "",
          content: "Galaxy Lin에 대한 상세한 리뷰 내용이 필요합니다."
        }
      ]}
    />
  );
} 