import {ProductQuickBuyQuery} from 'storefrontapi.generated';
import type {CartLineInput} from '@shopify/hydrogen/storefront-api-types';

export interface ProductQuickBuyResponse {
  product: ProductQuickBuyQuery['product'];
  status: number;
}

export interface ProductQuickBuyProps {
  productHandle: string;
  onClose?: () => void;
}

export interface VariantSelectorProps {
  variants: Array<{
    id: string;
    title: string;
    price: {
      amount: string;
    };
  }>;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export interface PriceDisplayProps {
  price: {
    amount: string;
  };
  compareAtPrice?: {
    amount: string;
  } | null;
}

export interface CartButtonsProps {
  cartLines: CartLineInput[];
  onClose?: () => void;
}
