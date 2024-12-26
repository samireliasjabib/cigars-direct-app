import {useState} from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
      <DialogTrigger asChild>
        <ActionButton className="bg-primary p-2 rounded-full shadow-md hover:bg-primary/90 transform transition-transform duration-300 hover:scale-110">
          <Plus size={24} className="text-white" />
        </ActionButton>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className="shadow-lg">
          <ProductQuickBuyContent productHandle={productHandle} />
        </DialogContent>
      )}
    </Dialog>
  );
}
