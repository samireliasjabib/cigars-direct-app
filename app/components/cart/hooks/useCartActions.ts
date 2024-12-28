import {CartForm} from '@shopify/hydrogen';

export function useCartActions() {
  return {
    updateQuantity: (lineId: string, quantity: number) => ({
      route: '/cart',
      action: CartForm.ACTIONS.LinesUpdate,
      inputs: { lines: [{id: lineId, quantity}] }
    }),
    removeLine: (lineId: string) => ({
      route: '/cart',
      action: CartForm.ACTIONS.LinesRemove,
      inputs: { lineIds: [lineId] }
    }),
    updateDiscount: (discountCodes: string[]) => ({
      route: '/cart',
      action: CartForm.ACTIONS.DiscountCodesUpdate,
      inputs: { discountCodes }
    })
  };
}
