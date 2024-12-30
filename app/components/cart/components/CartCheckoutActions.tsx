import {Button} from '~/components/design-system/ui/button';

interface CartCheckoutActionsProps {
  checkoutUrl: string;
}

export function CartCheckoutActions({checkoutUrl}: CartCheckoutActionsProps) {
  if (!checkoutUrl) return null;

  return (
    <div className="flex flex-col mt-2">
      <a href={checkoutUrl} target="_self">
        <Button className="w-full text-white rounded-md" variant="default">
          Continue to Checkout
        </Button>
      </a>
      {/* @todo: <CartShopPayButton cart={cart} /> */}
    </div>
  );
}
