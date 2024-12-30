import {Image, useOptimisticData} from '@shopify/hydrogen';
import {Text, Heading} from '~/components/Text';
import {Link} from '~/components/shared/Link';
import type {CartLineProps, OptimisticData} from '../types';
import {CartLineQuantityAdjust} from './CartLineQuantityAdjust';
import {ItemRemoveButton} from './ItemRemoveButton';
import {CartLinePrice} from './CartLinePrice';

export function CartLineItem({line}: CartLineProps) {
  const optimisticData = useOptimisticData<OptimisticData>(line?.id);

  if (!line?.id) return null;

  const {id, quantity, merchandise} = line;

  if (typeof quantity === 'undefined' || !merchandise?.product) return null;

  return (
    <li
      key={id}
      className="flex gap-4"
      style={{
        display: optimisticData?.action === 'remove' ? 'none' : 'flex',
      }}
    >
      <div className="flex-shrink">
        {merchandise.image && (
          <Image
            width={110}
            height={110}
            data={merchandise.image}
            className="object-cover object-center w-24 h-24 md:w-28 md:h-28"
            alt={merchandise.title}
          />
        )}
      </div>

      <div className="flex justify-between flex-grow">
        <div className="flex flex-col gap-2">
          <h3 className="text-xs font-regular text-black">
            {merchandise?.product?.handle ? (
              <Link to={`/products/${merchandise.product.handle}`}>
                {merchandise?.product?.title || ''}
              </Link>
            ) : (
              <Text>{merchandise?.product?.title || ''}</Text>
            )}
          </h3>
          <p className="text-xs font-regular text-black flex flex-row gap-2 items-center mb-2 ">
            Count:{' '}
            <span className="font-semibold">
              {merchandise.selectedOptions[0].value}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex justify-start text-copy">
              <CartLineQuantityAdjust line={line} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ItemRemoveButton lineId={id} />
          <Text>
            <CartLinePrice line={line} as="span" />
          </Text>
        </div>
      </div>
    </li>
  );
}
