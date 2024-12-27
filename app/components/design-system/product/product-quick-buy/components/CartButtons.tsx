import {CartForm} from '@shopify/hydrogen';
import {Button} from '~/components/design-system/ui/button';
import type {CartButtonsProps} from '../types';

export function CartButtons({cartLines, onClose}: CartButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <CartForm
        route="/cart"
        inputs={{lines: cartLines}}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher) => (
          <Button
            type="submit"
            variant="outline"
            className="py-3 text-sm font-medium hover:bg-gray-50 w-full"
            disabled={fetcher.state !== 'idle'}
            onClick={() => {
              if (fetcher.state === 'idle' && onClose) {
                setTimeout(onClose, 300);
              }
            }}
          >
            {fetcher.state !== 'idle' ? 'Adding...' : 'Add to Cart'}
          </Button>
        )}
      </CartForm>

      <CartForm
        route="/cart"
        inputs={{lines: cartLines}}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher) => (
          <Button
            type="submit"
            variant="default"
            className="py-3 text-sm font-medium bg-primary hover:bg-primary/90 w-full"
            disabled={fetcher.state !== 'idle'}
            onClick={() => {
              if (fetcher.state === 'idle' && onClose) {
                setTimeout(onClose, 300);
              }
            }}
          >
            {fetcher.state !== 'idle' ? 'Processing...' : 'Buy Now'}
          </Button>
        )}
      </CartForm>
    </div>
  );
}
