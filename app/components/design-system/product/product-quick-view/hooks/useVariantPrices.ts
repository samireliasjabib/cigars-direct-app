import {Product} from '../types';

export const useVariantPrices = (product?: Product): Record<string, string> => {
  return (
    product?.variants?.nodes?.reduce((acc, variant) => {
      if (variant.title && variant.price?.amount) {
        acc[variant.title] = variant.price.amount;
      }
      return acc;
    }, {} as Record<string, string>) || {}
  );
};
