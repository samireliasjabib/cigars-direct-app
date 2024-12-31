import {CollectionByHandleQuery} from 'storefrontapi.generated';
import ProductCard from '../product-card/ProductCard';
import {getImageMedia} from '../product-card/utils';

function ProductVitrine({
  products,
}: {
  products: NonNullable<CollectionByHandleQuery['collection']>['products'];
}) {
  if (!products?.edges.length) return null;

  return (
    <div className="grid grid-cols-2 gap-6 md:gap-12 md:grid-cols-4">
      {products.edges.map(({node}) => {
        const firstImageMedia = getImageMedia(
          node.media,
          node.variants.edges[0]?.node.image?.url,
        );

        const secondImageMedia = getImageMedia(
          {nodes: node.media?.nodes?.slice(1)},
          firstImageMedia,
        );

        const [whole, decimals] = (() => {
          const price = parseFloat(
            node.priceRange.minVariantPrice.amount,
          ).toFixed(2);
          return price.split('.');
        })();

        return (
          <ProductCard
            decimals={decimals}
            whole={whole}
            key={node.id}
            handle={node.handle}
            title={node.title}
            firstImageMedia={{
              url: firstImageMedia,
            }}
            secondImageMedia={{
              url: secondImageMedia,
            }}
          />
        );
      })}
    </div>
  );
}

export default ProductVitrine;
