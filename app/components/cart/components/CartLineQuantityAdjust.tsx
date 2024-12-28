import {useOptimisticData, CartForm, OptimisticInput} from '@shopify/hydrogen';
import type {CartLineProps, OptimisticData} from '../types';
import {useCartActions} from '../hooks/useCartActions';

export function CartLineQuantityAdjust({line}: CartLineProps) {
  const cartActions = useCartActions();
  const optimisticData = useOptimisticData<OptimisticData>(line?.id);

  if (!line || typeof line?.quantity === 'undefined') return null;

  const optimisticQuantity = optimisticData?.quantity || line.quantity;
  const prevQuantity = Number(Math.max(0, optimisticQuantity - 1).toFixed(0));
  const nextQuantity = Number((optimisticQuantity + 1).toFixed(0));

  return (
    <>
      <label htmlFor={`quantity-${line.id}`} className="sr-only">
        Quantity, {optimisticQuantity}
      </label>
      <div className="flex items-center border rounded">
        <QuantityButton
          lineId={line.id}
          quantity={prevQuantity}
          type="decrease"
          disabled={optimisticQuantity <= 1}
          cartActions={cartActions}
        />
        <div className="px-2 text-center" data-test="item-quantity">
          {optimisticQuantity}
        </div>
        <QuantityButton
          lineId={line.id}
          quantity={nextQuantity}
          type="increase"
          cartActions={cartActions}
        />
      </div>
    </>
  );
}

interface QuantityButtonProps {
  lineId: string;
  quantity: number;
  type: 'increase' | 'decrease';
  disabled?: boolean;
  cartActions: ReturnType<typeof useCartActions>;
}

function QuantityButton({
  lineId,
  quantity,
  type,
  disabled,
  cartActions,
}: QuantityButtonProps) {
  const {route, action, inputs} = cartActions.updateQuantity(lineId, quantity);

  return (
    <CartForm route={route} action={action} inputs={inputs}>
      <button
        name={`${type}-quantity`}
        aria-label={`${type === 'increase' ? 'Increase' : 'Decrease'} quantity`}
        className="w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10"
        value={quantity}
        disabled={disabled}
      >
        <span>{type === 'increase' ? '&#43;' : '&#8722;'}</span>
        <OptimisticInput id={lineId} data={{quantity}} />
      </button>
    </CartForm>
  );
}
