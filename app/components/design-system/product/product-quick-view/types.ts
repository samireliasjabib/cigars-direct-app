import type {ProductQuickViewQuery} from 'storefrontapi.generated';

export type ProductOption = NonNullable<
  ProductQuickViewQuery['product']
>['options'][number];

export type OptionValue = ProductOption['optionValues'][number];

export type Product = NonNullable<ProductQuickViewQuery['product']>;

export type Variant = NonNullable<
  NonNullable<ProductQuickViewQuery['product']>['variants']['nodes'][number]
>;

export type SelectedVariant = NonNullable<
  NonNullable<ProductQuickViewQuery['product']>['selectedVariant']
>;

export type ProductImage = NonNullable<
  NonNullable<ProductQuickViewQuery['product']>['selectedVariant']
>['image'];
