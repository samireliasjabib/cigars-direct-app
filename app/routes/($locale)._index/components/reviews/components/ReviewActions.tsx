import React from 'react';
import StarRating from './StarRating';

interface ReviewActionsProps {
  totalReviews: number;
  averageRating: number;
  onWriteReview: () => void;
}

const ReviewActions: React.FC<ReviewActionsProps> = ({
  totalReviews,
  averageRating,
  onWriteReview,
}) => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pb-8"
      role="region"
      aria-label="Customer Reviews Summary"
    >
      <div className="flex flex-col gap-3 md:gap-2 w-full md:w-auto text-center md:text-left">
        <h3 className="text-lg md:text-base font-bold text-gray-900">
          Real Reviews from Cigar Enthusiasts
        </h3>
        <p className="text-sm text-gray-700 max-w-[500px]">
          Your satisfaction is our greatest reward, and we're proud to share
          these experiences with you.
        </p>
        <div
          className="flex items-center gap-2 justify-center md:justify-start"
          aria-label={`Average rating ${averageRating} out of 5 based on ${totalReviews} reviews`}
        >
          <span className="font-bold text-3xl text-gray-900">5.0</span>
          <StarRating rating={averageRating} singleStar size={30} />
          <span className="text-3xl text-gray-300" aria-hidden="true">
            |
          </span>
          <span className="text-sm text-gray-700">{totalReviews} reviews</span>
        </div>
      </div>
      <button
        onClick={onWriteReview}
        className="w-full md:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Write a product review"
      >
        Write a Review
      </button>
    </div>
  );
};

export default ReviewActions;
