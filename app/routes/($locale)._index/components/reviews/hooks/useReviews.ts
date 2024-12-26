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
    const updateHeight = () => {
      if (contentRef.current && window.innerWidth >= MOBILE_BREAKPOINT) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleReviews((prev) =>
        Math.min(prev + loadMoreCount, reviews.length),
      );
      setIsLoading(false);

      // Scroll to new content on mobile
      if (skeletonRef.current && window.innerWidth < MOBILE_BREAKPOINT) {
        const container = contentRef.current;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
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
