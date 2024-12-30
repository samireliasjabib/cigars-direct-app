import {CartReturn} from '@shopify/hydrogen';
import {CartDetails} from './components/CartDetails';
import {CartEmpty} from './components/CartEmpty';
import CartHeader from './components/CartHeader';
import FreeShipping from './components/FreeShipping';

type Layouts = 'page' | 'drawer';

export function Cart({
  layout,
  onClose,
  cart,
}: {
  layout: Layouts;
  onClose: () => void;
  cart: CartReturn | null;
}) {
  const linesCount = Boolean(cart?.lines?.edges?.length || 0);
  const totalAmount = cart?.cost?.subtotalAmount?.amount || 0;
  const itemCount = cart?.totalQuantity || 0;

  return (
    <div className="relative">
      <CartHeader
        totalAmount={totalAmount}
        itemCount={itemCount}
        onClose={onClose}
      />
      {linesCount && <FreeShipping totalAmount={totalAmount} />}
      {linesCount ? (
        <CartDetails cart={cart} layout={layout} />
      ) : (
        <CartEmpty layout={layout} onClose={onClose} hidden={linesCount} />
      )}
    </div>
  );
}
