import {useRef} from 'react';
import useScroll from 'react-use/esm/useScroll';
import {flattenConnection} from '@shopify/hydrogen';
import clsx from 'clsx';
import type {CartType} from '@shopify/hydrogen/storefront-api-types';
import {CartLineItem} from './CartLineItem';
import type {Layouts} from '../types';

interface CartLinesProps {
  layout: Layouts;
  lines: CartType['lines'] | undefined;
}

export function CartLines({
  layout = 'drawer',
  lines: cartLines,
}: CartLinesProps) {
  const currentLines = cartLines ? flattenConnection(cartLines) : [];
  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);

  const className = clsx([
    y > 0 ? 'border-t' : '',
    layout === 'page'
      ? 'flex-grow md:translate-y-4'
      : 'px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12',
  ]);

  return (
    <section
      ref={scrollRef}
      aria-labelledby="cart-contents"
      className={className}
    >
      <ul className="grid gap-6 md:gap-10">
        {currentLines.map((line) => (
          <CartLineItem key={line.id} line={line} />
        ))}
      </ul>
    </section>
  );
}
