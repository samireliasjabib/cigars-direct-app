import {Await, useRouteLoaderData} from '@remix-run/react';
import {Suspense} from 'react';
import {Link} from '~/components/shared/Link';
import {RootLoader} from '~/root';
import {IconAccount, IconLogin} from '../../../ui/Icon';
import AccountToggle from './AccountToggle';

function AccountLink() {
  const rootData = useRouteLoaderData<RootLoader>('root');
  const isLoggedIn = rootData?.isLoggedIn;

  return (
    <Link to="/account">
      <Suspense fallback={<IconLogin />}>
        <Await resolve={isLoggedIn} errorElement={<AccountToggle />}>
          {(isLoggedIn) => (isLoggedIn ? <IconAccount /> : <AccountToggle />)}
        </Await>
      </Suspense>
    </Link>
  );
}

export default AccountLink;
