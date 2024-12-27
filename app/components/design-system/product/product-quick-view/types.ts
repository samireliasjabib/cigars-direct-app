import type {ProductQuickViewQuery} from 'storefrontapi.generated';

export type ProductOption = NonNullable<
  ProductQuickViewQuery['product']
>['options'][number];

export type OptionValue = ProductOption['optionValues'][number];

export type Product = NonNullable<ProductQuickViewQuery['product']>;
