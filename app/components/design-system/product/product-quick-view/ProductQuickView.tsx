import {useFetcher} from '@remix-run/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '../../ui/dialog';
import ActionButton from '~/components/shared/ActionButton';
import {Search} from 'lucide-react';
import {useState} from 'react';
import {useSearchParams} from '@remix-run/react';
import ProductQuickViewContent from './ProductQuickViewContent';

export function ProductQuickView({productHandle}: {productHandle: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      // Clear all search parameters dynamically
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.forEach((_, key) => newSearchParams.delete(key)); // Remove all params
      setSearchParams(newSearchParams, {
        preventScrollReset: true,
        replace: true,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <ActionButton
          aria-label="Quick view product"
          className="bg-primary p-2 rounded-full shadow-md hover:bg-primary/90 transform transition-transform duration-300 hover:scale-110"
        >
          <Search size={24} className="text-white" />
        </ActionButton>
      </DialogTrigger>
      <DialogContent
        className="p-6 shadow-lg"
        aria-describedby="quick-view-modal"
        aria-label={`Quick view ${productHandle}`}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Quick view {productHandle}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          This is a quick view of the product details for {productHandle}.
        </DialogDescription>
        {isOpen && <ProductQuickViewContent productHandle={productHandle} />}
      </DialogContent>
    </Dialog>
  );
}
