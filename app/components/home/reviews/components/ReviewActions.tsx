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
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 pb-8">
      <div className="flex flex-col gap-3 md:gap-2 w-full md:w-auto text-center md:text-left">
        <h3 className="text-lg md:text-base font-bold">
          Real Reviews from Cigar Enthusiasts
        </h3>
        <p className="text-sm text-gray-600 max-w-[500px]">
          Your satisfaction is our greatest reward, and we're proud to share
          these experiences with you.
        </p>
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <span className="font-bold text-3xl">5.0</span>
          <StarRating rating={averageRating} singleStar size={30} />
          <span className="text-3xl text-gray-200">|</span>
          <span className="text-sm text-black/60">{totalReviews} reviews</span>
        </div>
      </div>
      <button
        onClick={onWriteReview}
        className="w-full md:w-auto px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg hover:bg-primary/90 transition-colors text-sm md:text-base font-medium"
      >
        Write a Review
      </button>
    </div>
  );
};

export default ReviewActions;
