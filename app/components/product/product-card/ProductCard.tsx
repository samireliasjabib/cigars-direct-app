import {Image} from '@shopify/hydrogen';
import {CollectionByHandleQuery} from 'storefrontapi.generated';
import {Link} from '~/components/shared/Link';
import ProductPricing from './ProductPricing';
import {useState} from 'react';

function ProductCard({
  product,
}: {
  product: NonNullable<
    CollectionByHandleQuery['collection']
  >['products']['edges'][0]['node'];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    variants: {edges},
    title,
    handle,
    priceRange,
    media,
  } = product;

  const productImage = edges[0].node.image;

  const firstImageMedia =
    media?.nodes?.[0]?.previewImage?.url || productImage?.url;
  const secondImageMedia =
    media?.nodes?.[1]?.previewImage?.url || firstImageMedia;

  const price = parseFloat(priceRange.minVariantPrice.amount).toFixed(2);
  const [whole, decimals] = price.split('.');

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${handle}`}>
        <div className="pb-4 relative">
          <div className="relative h-full">
            {/* First Image */}
            <div
              className={`transition-opacity duration-500 ease-in-out ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Image
                data={{
                  url: firstImageMedia,
                  altText: productImage?.altText,
                }}
                aspectRatio="5/5"
                className="object-cover w-full h-auto border border-transparent group-hover:border-gray-200 transition-all duration-700 ease-in-out"
              />
            </div>
            {/* Second Image - Absolute positioned */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                data={{
                  url: secondImageMedia,
                  altText: productImage?.altText,
                }}
                aspectRatio="5/5"
                className="object-cover w-full h-auto border border-transparent group-hover:border-gray-200 transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transform transition-transform duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transform transition-transform duration-300 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <h3 className="text-sm md:text-base text-center font-light tracking-wide break-words pb-2 md:px-4">
          {title}
        </h3>
        <ProductPricing whole={whole} decimals={decimals} />
      </Link>
    </div>
  );
}

export default ProductCard;
