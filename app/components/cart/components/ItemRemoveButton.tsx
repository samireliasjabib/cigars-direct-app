import {CartForm, OptimisticInput} from '@shopify/hydrogen';
import {IconRemove} from '~/components/layout/ui/Icon';
import type {CartLine} from '@shopify/hydrogen/storefront-api-types';
import {useCartActions} from '../hooks/useCartActions';
import {Trash} from 'lucide-react';

interface ItemRemoveButtonProps {
  lineId: CartLine['id'];
}

export function ItemRemoveButton({lineId}: ItemRemoveButtonProps) {
  const cartActions = useCartActions();
  const {route, action, inputs} = cartActions.removeLine(lineId);

  return (
    <CartForm route={route} action={action} inputs={inputs}>
      <button
        className="flex items-center justify-center w-6 h-6"
        type="submit"
      >
        <span className="sr-only">Remove</span>
        <Trash
          aria-hidden="true"
          className="text-black/80 hover:text-black"
          size={14}
        />
      </button>
      <OptimisticInput id={lineId} data={{action: 'remove'}} />
    </CartForm>
  );
}
