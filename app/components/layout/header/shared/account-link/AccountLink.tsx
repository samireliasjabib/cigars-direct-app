import {Await, useRouteLoaderData} from '@remix-run/react';
import {Suspense} from 'react';
import {Link} from '~/components/shared/Link';
import {RootLoader} from '~/root';
import {IconAccount, IconLogin} from '../../../ui/Icon';
import AccountToggle from './AccountToggle';

function AccountLink({
  variant = 'default',
}: {
  variant: 'default' | 'label-hidden';
}) {
  const rootData = useRouteLoaderData<RootLoader>('root');
  const isLoggedIn = rootData?.isLoggedIn;

  return (
    <Suspense
      fallback={
        <Link
          to="/page-in-development"
          className="inline-flex items-center justify-center"
          aria-label="Account loading"
        >
          <IconLogin />
        </Link>
      }
    >
      <Await
        resolve={isLoggedIn}
        errorElement={
          <Link
            to="/page-in-development"
            className="inline-flex items-center justify-center"
            aria-label="Sign in to your account"
          >
            <AccountToggle variant={variant} />
          </Link>
        }
      >
        {(isLoggedIn) => (
          <Link
            to="/page-in-development"
            className="inline-flex items-center justify-center"
            aria-label={
              isLoggedIn ? 'View your account' : 'Sign in to your account'
            }
          >
            {isLoggedIn ? <IconAccount /> : <AccountToggle variant={variant} />}
          </Link>
        )}
      </Await>
    </Suspense>
  );
}

export default AccountLink;
