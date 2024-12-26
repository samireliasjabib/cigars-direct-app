import {Button} from '~/components/design-system/ui/button';
import {REVIEWS_COPY} from '../constants/constants';

interface LoadMoreButtonProps {
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function LoadMoreButton({
  isLoading,
  hasMore,
  onLoadMore,
}: LoadMoreButtonProps) {
  return (
    <div className="sticky bottom-0 flex justify-center pt-8 bg-gradient-to-t from-background to-transparent">
      {hasMore ? (
        <Button variant="outline" onClick={onLoadMore} disabled={isLoading}>
          {isLoading ? REVIEWS_COPY.LOADING : REVIEWS_COPY.LOAD_MORE}
        </Button>
      ) : (
        <Button variant="outline" disabled>
          {REVIEWS_COPY.NO_MORE}
        </Button>
      )}
    </div>
  );
}
