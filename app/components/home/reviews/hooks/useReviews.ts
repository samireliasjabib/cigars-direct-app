import {useState, useRef, useEffect} from 'react';
import {reviews} from '../data/reviews';
import {UseReviewsProps} from '../types/types';

const MOBILE_BREAKPOINT = 768; // md breakpoint

export function useReviews({
  initialCount,
  loadMoreCount,
  loadingDelay,
}: UseReviewsProps) {
  const [visibleReviews, setVisibleReviews] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const skeletonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleReviews((prev) =>
        Math.min(prev + loadMoreCount, reviews.length),
      );
      setIsLoading(false);

      // Only scroll on mobile devices
      if (skeletonRef.current && window.innerWidth < MOBILE_BREAKPOINT) {
        skeletonRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, loadingDelay);
  };

  const hasMoreReviews = visibleReviews < reviews.length;

  return {
    visibleReviews,
    isLoading,
    contentHeight,
    contentRef,
    skeletonRef,
    handleLoadMore,
    hasMoreReviews,
    reviews,
  };
}
