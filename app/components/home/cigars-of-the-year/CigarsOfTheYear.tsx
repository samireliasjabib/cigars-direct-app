import {HeroCollectionContentQuery} from 'storefrontapi.generated';
import Heading from '~/components/design-system/Heading';
import ProductVitrine from '~/components/product/product-vitrine/ProductVitrine';

function CigarsOfTheYear({
  cigarsOfTheYear,
}: {
  cigarsOfTheYear: HeroCollectionContentQuery;
}) {
  const products = cigarsOfTheYear.hero?.products;
  if (!products?.edges.length) return null;
  return (
    <section role="region">
      <Heading
        title="Cigars of the Year"
        viewAllLink={`/collections/${cigarsOfTheYear.hero?.handle}`}
      />
      <ProductVitrine products={products} />
    </section>
  );
}

export default CigarsOfTheYear;
