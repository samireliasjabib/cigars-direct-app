export interface Review {
  rating: number;
  text: string;
  author: string;
  isGoogle?: boolean;
}

export interface UseReviewsProps {
  initialCount: number;
  loadMoreCount: number;
  loadingDelay: number;
}
