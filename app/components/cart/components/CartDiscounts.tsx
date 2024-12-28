import {CartForm} from '@shopify/hydrogen';
import {Text} from '~/components/Text';
import {IconRemove} from '~/components/layout/ui/Icon';
import {getInputStyleClasses} from '~/lib/utils';
import type {CartDiscountProps, UpdateDiscountFormProps} from '../types';
import {useCartActions} from '../hooks/useCartActions';

export function CartDiscounts({discountCodes}: CartDiscountProps) {
  const codes = discountCodes
    ?.filter((discount) => discount.applicable)
    ?.map(({code}) => code) || [];

  return (
    <>
      <DiscountsList codes={codes} />
      <DiscountForm discountCodes={codes} />
    </>
  );
}

interface DiscountsListProps {
  codes: string[];
}

function DiscountsList({codes}: DiscountsListProps) {
  if (!codes || codes.length === 0) return null;

  return (
    <dl className="grid">
      <div className="flex items-center justify-between font-medium">
        <Text as="dt">Discount(s)</Text>
        <div className="flex items-center justify-between">
          <UpdateDiscountForm>
            <button>
              <IconRemove
                aria-hidden="true"
                style={{height: 18, marginRight: 4}}
              />
            </button>
          </UpdateDiscountForm>
          <Text as="dd">{codes.join(', ')}</Text>
        </div>
      </div>
    </dl>
  );
}

interface DiscountFormProps {
  discountCodes?: string[];
}

function DiscountForm({discountCodes}: DiscountFormProps) {
  return (
    <UpdateDiscountForm discountCodes={discountCodes}>
      <div className="flex items-center gap-4 justify-between text-copy">
        <input
          className={getInputStyleClasses()}
          type="text"
          name="discountCode"
          placeholder="Discount code"
        />
        <button className="flex justify-end font-medium whitespace-nowrap">
          Apply Discount
        </button>
      </div>
    </UpdateDiscountForm>
  );
}

function UpdateDiscountForm({
  discountCodes,
  children,
}: UpdateDiscountFormProps) {
  const cartActions = useCartActions();
  const {route, action, inputs} = cartActions.updateDiscount(discountCodes || []);

  return (
    <CartForm route={route} action={action} inputs={inputs}>
      {children}
    </CartForm>
  );
}
