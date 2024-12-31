import {Link} from '~/components/shared/Link';
import ProductPricing from './components/ProductPricing';
import ProductActionButtons from './components/ProductActionButtons';
import ProductImageSwitcher from './components/ProductImageSwitcher';

type ProductCardProps = {
  handle: string;
  title: string;
  firstImageMedia: {url: string; altText?: string};
  secondImageMedia: {url: string; altText?: string};
  whole: string;
  decimals: string;
  disabledActions?: boolean;
  soldOut?: boolean;
};

function ProductCard({
  handle,
  title,
  firstImageMedia,
  secondImageMedia,
  whole,
  disabledActions,
  decimals,
  soldOut,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="pb-4 relative">
        {!disabledActions && <ProductActionButtons productHandle={handle} />}
        <Link to={`/products/${handle}`} className="block">
          <ProductImageSwitcher
            firstImage={{
              url: firstImageMedia.url,
              altText: firstImageMedia.altText || title,
            }}
            secondImage={{
              url: secondImageMedia.url,
              altText: secondImageMedia.altText || title,
            }}
            soldOut={soldOut}
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
