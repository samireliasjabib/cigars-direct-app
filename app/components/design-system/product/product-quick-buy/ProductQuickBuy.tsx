import {useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '../../ui/dialog';
import {ReactNode} from 'react';
import ActionButton from '~/components/shared/ActionButton';
import {Plus} from 'lucide-react';
import ProductQuickBuyContent from './components/ProductQuickBuyContent';

interface QuickViewModalProps {
  title?: string;
  productHandle: string;
}

export function ProductQuickBuy({
  title,
  productHandle,
  ...props
}: QuickViewModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild aria-label={`Quick buy ${productHandle}`}>
        <ActionButton className="bg-primary p-2 rounded-full shadow-md hover:bg-primary/90 transform transition-transform duration-300 hover:scale-110">
          <Plus size={24} className="text-white" />
        </ActionButton>
      </DialogTrigger>
      {isOpen && (
        <DialogContent
          className="shadow-lg"
          aria-describedby="quick-buy-modal"
          aria-label={`Quick buy ${productHandle}`}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{productHandle}</DialogTitle>
          </DialogHeader>

          <DialogDescription className="sr-only">
            This is a product quick buy for {productHandle}
          </DialogDescription>
          <ProductQuickBuyContent
            productHandle={productHandle}
            onClose={() => setIsOpen(false)}
          />
        </DialogContent>
      )}
    </Dialog>
  );
}
