import Heading from '~/components/design-system/heading/Heading';
import ReviewCard from './components/ReviewCard';
import ReviewCardSkeleton from './components/ReviewCardSkeleton';
import {ScrollArea} from '~/components/design-system/ui/scroll-area';
import {Separator} from '~/components/design-system/ui/separator';
import LoadMoreButton from './components/LoadMoreButton';
import {useReviews} from './hooks/useReviews';
import {REVIEWS_CONFIG, REVIEWS_COPY} from './constants/constants';
import ReviewActions from './components/ReviewActions';

type ReviewsProps = {
  initialReviewCount?: number;
  loadMoreCount?: number;
  loadingDelay?: number;
};

export default function Reviews({
  initialReviewCount = REVIEWS_CONFIG.INITIAL_COUNT,
  loadMoreCount = REVIEWS_CONFIG.LOAD_MORE_COUNT,
  loadingDelay = REVIEWS_CONFIG.LOADING_DELAY,
}: ReviewsProps = {}) {
  const {
    visibleReviews,
    isLoading,
    contentHeight,
    contentRef,
    skeletonRef,
    handleLoadMore,
    hasMoreReviews,
    reviews,
  } = useReviews({
    initialCount: initialReviewCount,
    loadMoreCount,
    loadingDelay,
  });

  return (
    <section className="w-full py-12 md:py-16 wrapper">
      <Heading
        title="WHAT OUR CUSTOMERS ARE SAYING ABOUT US﻿"
        variant="centered"
      />
      <div className="w-full md:px-8">
        <ReviewActions
          totalReviews={reviews.length}
          averageRating={4.5}
          onWriteReview={() => {
            // Handle write review action
          }}
        />
        <div className="relative">
          <ScrollArea
            style={{height: contentHeight ? `${contentHeight}px` : 'auto'}}
            className="w-full"
          >
            <div ref={contentRef}>
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-4 pb-8">
                {reviews.slice(0, visibleReviews).map((review, i) => (
                  <ReviewCard key={i} review={review} />
                ))}
                {isLoading && (
                  <div ref={skeletonRef} className="space-y-4">
                    {[...Array(loadMoreCount)].map((_, i) => (
                      <ReviewCardSkeleton key={`skeleton-${i}`} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollArea>
          <Separator />
          <LoadMoreButton
            isLoading={isLoading}
            hasMore={hasMoreReviews}
            onLoadMore={handleLoadMore}
          />
        </div>
      </div>
    </section>
  );
}
