import {Link} from '~/components/shared/Link';
import ProductPricing from './components/ProductPricing';
import {Plus, Search} from 'lucide-react';
import {CollectionByHandleQuery} from 'storefrontapi.generated';
import {getImageMedia} from './utils';

import {useMemo} from 'react';
import ProductActionButtons from './components/ProductActionButtons';
import ProductImageSwitcher from './components/ProductImageSwitcher';

function ProductCard({
  product,
}: {
  product: NonNullable<
    CollectionByHandleQuery['collection']
  >['products']['edges'][0]['node'];
}) {
  const {
    variants: {edges},
    title,
    handle,
    priceRange,
    media,
  } = product;

  const firstImageMedia = getImageMedia(media, edges[0].node.image?.url);
  const secondImageMedia = getImageMedia(
    {nodes: media?.nodes?.slice(1)},
    firstImageMedia,
  );

  const [whole, decimals] = useMemo(() => {
    const price = parseFloat(priceRange.minVariantPrice.amount).toFixed(2);
    return price.split('.');
  }, [priceRange.minVariantPrice.amount]);

  const actionButtons = [
    {
      icon: <Search size={24} className="text-white" />,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
    {
      icon: <Plus size={24} className="text-white" />,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
      },
    },
  ];

  return (
    <div className="group relative">
      <div className="pb-4 relative">
        <ProductActionButtons productHandle={handle} />
        <Link to={`/products/${handle}`} className="block">
          <ProductImageSwitcher
            firstImage={{
              url: firstImageMedia,
              altText: edges[0].node.image?.altText || title,
            }}
            secondImage={{
              url: secondImageMedia,
              altText: edges[0].node.image?.altText || title,
            }}
          />
          <h3 className="text-sm md:text-base text-center font-light tracking-wide break-words pt-4 pb-2 md:px-4">
            {title}
          </h3>
          <ProductPricing whole={whole} decimals={decimals} />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
