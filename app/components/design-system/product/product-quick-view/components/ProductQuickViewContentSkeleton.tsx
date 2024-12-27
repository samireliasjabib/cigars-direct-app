import {Separator} from '~/components/design-system/ui/separator';
import {Skeleton} from '~/components/Skeleton';

function ProductQuickViewContentSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full min-h-[600px] max-h-[80vh] lg:overflow-hidden">
      {/* Image Section Skeleton */}
      <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Product Details Section Skeleton */}
      <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 h-full  px-1">
        <div className="space-y-3 lg:space-y-4">
          <Skeleton className="h-8 w-3/4" /> {/* Title */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" /> {/* Rating */}
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-32" /> {/* Price */}
          </div>
        </div>

        <Separator className="hidden lg:block" />

        {/* Options Skeleton */}
        <div className="space-y-4 lg:space-y-6">
          {[1, 2].map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-4 w-24" /> {/* Option Label */}
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((_, btnIndex) => (
                  <Skeleton
                    key={btnIndex}
                    className="h-10 w-20"
                  /> /* Option Button */
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator className="hidden lg:block" />

        {/* Quantity Selector Skeleton */}
        <div className="space-y-3">
          <Skeleton className="h-4 w-16" /> {/* Quantity Label */}
          <Skeleton className="h-10 w-full" /> {/* Quantity Input */}
        </div>

        {/* Add to Cart Button Skeleton */}
        <Skeleton className="h-12 w-full" />

        {/* Benefits Section Skeleton */}
        <div className="space-y-4 pt-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <Skeleton className="h-5 w-5" /> {/* Icon */}
              <Skeleton className="h-4 w-48" /> {/* Text */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductQuickViewContentSkeleton;
