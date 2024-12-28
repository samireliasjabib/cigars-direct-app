import {Button} from '~/components/Button';

interface CartCheckoutActionsProps {
  checkoutUrl: string;
}

export function CartCheckoutActions({checkoutUrl}: CartCheckoutActionsProps) {
  if (!checkoutUrl) return null;

  return (
    <div className="flex flex-col mt-2">
      <a href={checkoutUrl} target="_self">
        <Button as="span" width="full">
          Continue to Checkout
        </Button>
      </a>
      {/* @todo: <CartShopPayButton cart={cart} /> */}
    </div>
  );
}
