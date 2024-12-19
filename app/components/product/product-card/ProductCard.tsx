import {Image} from '@shopify/hydrogen';
import {CollectionByHandleQuery} from 'storefrontapi.generated';
import {Link} from '~/components/shared/Link';
import ProductPricing from './ProductPricing';

function ProductCard({
  product,
}: {
  product: NonNullable<
    CollectionByHandleQuery['collection']
  >['products']['edges'][0]['node'];
}) {
  console.log(product);
  const {
    variants: {edges},
    title,
    handle,
    priceRange,
  } = product;
  const productImage = edges[0].node.image;

  const price = parseFloat(priceRange.minVariantPrice.amount).toFixed(2);
  const [whole, decimals] = price.split('.');

  return (
    <Link to={`/products/${handle}`}>
      <div className="pb-4">
        <Image
          data={{
            url: productImage?.url,
            altText: productImage?.altText,
          }}
          aspectRatio="5/5"
          className="object-cover w-full h-auto"
        />
      </div>
      <h3 className="text-sm md:text-base text-center font-light tracking-wide break-words pb-2 md:px-4">
        {title}
      </h3>
      <ProductPricing whole={whole} decimals={decimals} />
    </Link>
  );
}

export default ProductCard;
