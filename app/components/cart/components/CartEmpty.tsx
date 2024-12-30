import {ShoppingCart} from 'lucide-react';
import {Button} from '~/components/Button';
import type {CartEmptyProps} from '../types';
import {Link} from '~/components/shared/Link';

export function CartEmpty({
  hidden = false,
  layout = 'drawer',
  onClose,
}: CartEmptyProps) {
  return (
    <div
      className="flex flex-col items-center justify-center py-12 px-4"
      hidden={hidden}
    >
      <div className="mb-6">
        <ShoppingCart size={84} />
      </div>
      <h2 className="text-xl font-medium text-gray-900 mb-8">
        Your cart is currently empty.
      </h2>
      <Link
        to="/collections"
        onClick={onClose}
        className="w-full py-4 px-8 text-center text-sm rounded-md bg-primary hover:bg-primary/90 text-white font-medium"
      >
        SHOP OUR PRODUCTS
      </Link>
    </div>
  );
}
