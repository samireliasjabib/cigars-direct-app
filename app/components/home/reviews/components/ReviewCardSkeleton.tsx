import {Skeleton} from '~/components/Skeleton';

export default function ReviewCardSkeleton() {
  return (
    <div className="break-inside-avoid-column bg-card">
      <div className="p-4 border rounded-lg">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-5 h-5 rounded-full" />
          ))}
        </div>
        <Skeleton className="w-full h-16 mt-2" />
        <div className="flex justify-between items-center mt-2">
          <Skeleton className="w-24 h-4" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>
      </div>
    </div>
  );
}
