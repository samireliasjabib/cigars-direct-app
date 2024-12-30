import {useOptimisticData, CartForm, OptimisticInput} from '@shopify/hydrogen';
import type {CartLineProps, OptimisticData} from '../types';
import {useCartActions} from '../hooks/useCartActions';
import {Minus, Plus} from 'lucide-react';

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
      <div className="flex items-center border-black border">
        <QuantityButton
          lineId={line.id}
          quantity={prevQuantity}
          type="decrease"
          disabled={optimisticQuantity <= 1}
          cartActions={cartActions}
        />
        <div className="w-8 text-center" data-test="item-quantity">
          <span className="text-sm tabular-nums">{optimisticQuantity}</span>
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
        className="text-black/80 hover:text-black flex items-center justify-center w-9 h-9 transition-colors duration-150"
        value={quantity}
        disabled={disabled}
      >
        <span className="flex items-center justify-center w-full h-full">
          {type === 'increase' ? <Plus size={16} /> : <Minus size={16} />}
        </span>
        <OptimisticInput id={lineId} data={{quantity}} />
      </button>
    </CartForm>
  );
}
