import React from 'react';

interface Review {
  reviewer: string;
  email?: string;
  date?: string;
  content: string;
}

interface BandReviewProps {
  bandName: string;
  koreanName?: string;
  albumTitle?: string;
  description?: string;
  reviews: Review[];
}

const BandReview: React.FC<BandReviewProps> = ({ 
  bandName, 
  koreanName, 
  albumTitle, 
  description, 
  reviews 
}) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            {bandName}
            {koreanName && <span className="text-3xl ml-4 text-gray-300">({koreanName})</span>}
          </h1>
          {albumTitle && (
            <p className="text-xl text-gray-300">{albumTitle}</p>
          )}
          {description && (
            <p className="text-lg text-gray-400 mt-2">{description}</p>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              {bandName} {albumTitle && `- ${albumTitle}`}
            </h2>
            <div className="border-l-4 border-purple-500 pl-4 mb-4">
              <p className="font-semibold text-purple-400">
                {review.reviewer}
                {review.email && (
                  <span className="text-gray-400 ml-2">({review.email})</span>
                )}
                {review.date && (
                  <span className="text-gray-400 ml-2">[{review.date}]</span>
                )}
              </p>
            </div>
            <div className="space-y-4 text-gray-300">
              {review.content.split('\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BandReview; 