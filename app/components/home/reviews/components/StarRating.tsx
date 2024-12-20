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

  return (
    <div className="flex" aria-label={`Rating: ${rating} out of 5`}>
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
