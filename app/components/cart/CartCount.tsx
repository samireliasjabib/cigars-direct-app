import {Suspense} from 'react';
import CartBadge from './CartBadge';
import {Await, useRouteLoaderData} from '@remix-run/react';
import {RootLoader} from '~/root';

function CartCount({
  isHome,
  openCart,
}: {
  isHome: boolean;
  openCart: () => void;
}) {
  const rootData = useRouteLoaderData<RootLoader>('root');
  if (!rootData) return null;

  return (
    <Suspense
      fallback={<CartBadge count={0} dark={isHome} openCart={openCart} />}
    >
      <Await resolve={rootData?.cart}>
        {(cart) => (
          <CartBadge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

export default CartCount;
