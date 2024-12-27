import {Suspense} from 'react';
import {Drawer} from '../Drawer';
import {CartLoading} from './CartLoading';
import {Await, useRouteLoaderData} from '@remix-run/react';
import {RootLoader} from '~/root';
import {Cart} from './Cart';

function CartDrawer({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  const rootData = useRouteLoaderData<RootLoader>('root');
  if (!rootData) return null;

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div>
        <Suspense fallback={<CartLoading />}>
          <Await resolve={rootData?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}
export default CartDrawer;
