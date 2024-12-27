import {Skeleton} from '~/components/Skeleton';

function ProductQuickBuyContentSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Price Display Skeleton */}
      <div className="flex items-center justify-between border-b pb-2">
        <Skeleton className="h-4 w-10" />
        <div className="flex flex-col items-end gap-1">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>

      {/* Count Display Skeleton */}
      <div className="flex items-center justify-between border-b pb-2">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Variant Selection Skeleton */}
      <div className="flex items-center justify-between gap-4 border-b pb-2">
        <Skeleton className="h-4 w-14" />
        <div className="flex gap-2">
          <Skeleton className="h-7 w-28 rounded-full" />
          <Skeleton className="h-7 w-28 rounded-full" />
        </div>
      </div>

      {/* Action Buttons Skeleton */}
      <div className="flex gap-2">
        <Skeleton className="flex-1 h-10" />
        <Skeleton className="flex-1 h-10" />
      </div>
    </div>
  );
}

export default ProductQuickBuyContentSkeleton;
