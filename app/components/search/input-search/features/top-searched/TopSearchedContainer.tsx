import {TopSearchedProducts} from '../../components/top-searched/TopSearchedProducts';

interface TopSearchedContainerProps {
  isVisible: boolean;
}

export function TopSearchedContainer({isVisible}: TopSearchedContainerProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-lg rounded-b-lg overflow-hidden">
      <div className="max-h-[calc(100vh-200px)] overflow-auto p-4">
        <TopSearchedProducts />
      </div>
    </div>
  );
}
