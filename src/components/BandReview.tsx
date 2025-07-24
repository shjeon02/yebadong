import React from 'react';

interface Review {
  reviewer: string;
  email: string;
  content: string;
}

interface BandReviewProps {
  bandName: string;
  albumTitle: string;
  description?: string;
  reviews: Review[];
}

export default function BandReview({ bandName, albumTitle, description, reviews }: BandReviewProps) {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* 4-column grid layout as per 9UI */}
        <div className="grid grid-cols-4 gap-4">
          {/* Header Section - spans full width */}
          <div className="col-span-4 mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-primary">
              {bandName}
            </h1>
            <h2 className="text-xl text-secondary mb-4">
              {albumTitle}
            </h2>
            {description && (
              <p className="text-base text-muted max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Reviews Section - responsive columns */}
          <div className="col-span-4 space-y-6">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-surface-subtle border border-muted rounded-md p-4 hover:border-primary/20 transition-colors"
              >
                {/* Reviewer Info */}
                <div className="mb-4 pb-4 border-b border-muted">
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {review.reviewer}
                  </h3>
                  {review.email && (
                    <p className="text-sm text-secondary">
                      {review.email}
                    </p>
                  )}
                </div>

                {/* Review Content - structured paragraphs as per rules */}
                <div className="space-y-4">
                  <div className="text-primary leading-relaxed">
                    {review.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-2 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA - spans full width */}
          <div className="col-span-4 mt-12 text-center">
            <a 
              href="/review" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              목록으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 