import {CollectionByHandleQuery} from 'storefrontapi.generated';
import ProductVitrine from '~/components/design-system/product/product-vitrine/ProductVitrine';

function RecentlyViewed({
  cigarsOfTheYear,
}: {
  cigarsOfTheYear: CollectionByHandleQuery;
}) {
  const products = cigarsOfTheYear.collection?.products;
  const handle = cigarsOfTheYear.collection?.handle;
  if (!products?.edges.length) return null;
  return (
    <section
      role="region"
      aria-label="Cigars of the Year"
      className="wrapper pb-10 md:pb-20"
    >
      <h2 className="text-xl lg:text-3xl font-bold uppercase break-words w-full text-center pb-6 md:pb-12">
        Recently Viewed
      </h2>
      <ProductVitrine products={products} />
    </section>
  );
}

export default RecentlyViewed;
