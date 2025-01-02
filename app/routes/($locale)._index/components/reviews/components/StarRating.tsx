import {Star} from 'lucide-react';
import React from 'react';

interface StarRatingProps {
  rating: number;
  singleStar?: boolean;
  size?: number;
}

const StarRating = React.memo(function StarRating({
  rating,
  singleStar = false,
  size = 20,
}: StarRatingProps) {
  const starCount = singleStar ? 1 : 5;
  const formattedRating = rating.toFixed(1);

  return (
    <div
      className="flex"
      role="img"
      aria-label={`Rating: ${formattedRating} out of 5 stars`}
      aria-valuemin={0}
      aria-valuemax={5}
      aria-valuenow={rating}
    >
      {[...Array(starCount)].map((_, i) => (
        <Star
          key={i}
          className={`${
            i < rating
              ? 'fill-yellow-500 text-yellow-500'
              : 'fill-muted text-muted-foreground border-muted-foreground'
          }`}
          width={size}
          height={size}
          aria-hidden="true"
        />
      ))}
    </div>
  );
});

export default StarRating;
