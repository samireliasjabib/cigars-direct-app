import {CollectionByHandleQuery} from 'storefrontapi.generated';
import Heading from '~/components/design-system/heading/Heading';
import ProductVitrine from '~/components/design-system/product/product-vitrine/ProductVitrine';

function CigarsOfTheYear({
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
      className="wrapper pb-16 md:pb-20"
    >
      <Heading
        title="2023 Cigars of the Year"
        viewAllLink={`/collections/${handle}`}
      />
      <ProductVitrine products={products} />
    </section>
  );
}

export default CigarsOfTheYear;
