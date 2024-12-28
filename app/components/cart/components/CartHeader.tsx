import {ShoppingBag, X} from 'lucide-react';

function CartHeader({
  totalAmount,
  itemCount,
  onClose,
}: {
  totalAmount: number | string;
  itemCount: number;
  onClose: () => void;
}) {
  return (
    <header className="sticky top-0 flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2  justify-between w-full">
        <ShoppingBag size={20} className="text-black/80" />
        <h2 className="text-base font-normal items-center flex flex-row gap-2">
          Your Cart <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="font-semibold">
            ${totalAmount} {itemCount ? `(${itemCount} Items)` : '(0  Items)'}
          </span>
        </h2>
        <button
          onClick={onClose}
          className="p-2 -m-2 transition text-gray-500 hover:text-gray-800"
        >
          <X size={20} className="text-black/80 hover:text-black" />
        </button>{' '}
      </div>
    </header>
  );
}

export default CartHeader;
