import {
  HeroCollectionContentQuery,
  ProductCardFragment,
} from 'storefrontapi.generated';

function ProductCard({
  product,
}: {
  product: NonNullable<
    HeroCollectionContentQuery['hero']
  >['products']['edges'][0]['node'];
}) {
  return <div>{product.title}</div>;
}

export default ProductCard;
