import type {CartDetailsProps} from '../types';
import {CartLines} from './CartLines';
import {CartSummary} from './CartSummary';
import {CartDiscounts} from './CartDiscounts';
import {CartCheckoutActions} from './CartCheckoutActions';

export function CartDetails({layout, cart}: CartDetailsProps) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  const container = {
    drawer: 'grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]',
    page: 'w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12',
  };

  return (
    <div className={container[layout]}>
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts discountCodes={cart.discountCodes} />
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}
