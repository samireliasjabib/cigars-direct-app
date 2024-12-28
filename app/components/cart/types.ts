import type {
  Cart as CartType,
  CartCost,
  CartLine,
  CartLineUpdateInput,
} from '@shopify/hydrogen/storefront-api-types';
import type {CartReturn} from '@shopify/hydrogen';

export type Layouts = 'page' | 'drawer';

export type OptimisticData = {
  action?: string;
  quantity?: number;
};

export interface CartProps {
  layout: Layouts;
  onClose?: () => void;
  cart: CartReturn | null;
}

export interface CartDetailsProps {
  layout: Layouts;
  cart: CartType | null;
}

export interface CartLineProps {
  line: CartLine;
}

export interface CartSummaryProps {
  children?: React.ReactNode;
  cost: CartCost;
  layout: Layouts;
}

export interface CartEmptyProps {
  hidden: boolean;
  layout?: Layouts;
  onClose?: () => void;
}

export interface UpdateDiscountFormProps {
  discountCodes?: string[];
  children: React.ReactNode;
}

export interface CartDiscountProps {
  discountCodes: CartType['discountCodes'];
}
