import React, {useState} from 'react';
import StarRating from './StarRating';
import ReviewGoogleIcon from './ReviewGoogleIcon';
import {Review} from '../types/types';

interface ReviewCardProps {
  review: Review;
  maxLength?: number;
}

const ReviewCard = React.memo(function ReviewCard({
  review,
  maxLength = 100,
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded((prev) => !prev);

  const truncatedText =
    review.text.length > maxLength && !isExpanded
      ? `${review.text.substring(0, maxLength)}...`
      : review.text;

  return (
    <div className="break-inside-avoid-column bg-card">
      <div className="p-4 border rounded-lg">
        <StarRating rating={review.rating} />
        <p className="text-sm mt-2">
          {truncatedText}
          {review.text.length > maxLength && (
            <button
              onClick={toggleText}
              className="ml-1 text-black/60 hover:underline"
            >
              {isExpanded ? 'Less' : 'More'}
            </button>
          )}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-medium">{review.author}</span>
          {review && <ReviewGoogleIcon />}
        </div>
      </div>
    </div>
  );
});

export default ReviewCard;
