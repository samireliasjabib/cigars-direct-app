import {CartForm, OptimisticInput} from '@shopify/hydrogen';
import {IconRemove} from '~/components/layout/ui/Icon';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';
import {useCartActions} from '../hooks/useCartActions';

interface ItemRemoveButtonProps {
  lineId: CartLine['id'];
}

export function ItemRemoveButton({lineId}: ItemRemoveButtonProps) {
  const cartActions = useCartActions();
  const {route, action, inputs} = cartActions.removeLine(lineId);

  return (
    <CartForm route={route} action={action} inputs={inputs}>
      <button
        className="flex items-center justify-center w-10 h-10 border rounded"
        type="submit"
      >
        <span className="sr-only">Remove</span>
        <IconRemove aria-hidden="true" />
      </button>
      <OptimisticInput id={lineId} data={{action: 'remove'}} />
    </CartForm>
  );
}
