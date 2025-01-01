import Hamburger from 'hamburger-react';
import {useState} from 'react';
import {Image} from '@shopify/hydrogen';

import AccountLink from '../shared/account-link/AccountLink';
import CIGARS_DIRECT_LOGO_WHITE from '../../../../assets/cigar-logo-white.jpg';
import CartToggle from '~/components/cart/CartToggle';
import SearchToggle from '~/components/search/input-search-mobile/SearchToggle';
import ActionButton from '~/components/shared/ActionButton';
import {SearchModal} from '~/components/search/input-search-mobile/SearchModal';
import {Link} from '~/components/shared/Link';

function MobileHeader({
  openCart,
  openMenu,
}: {
  openCart: () => void;
  openMenu: () => void;
}) {
  const [isOpen, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="h-[72px] bg-black flex items-center px-4 py-3 justify-between w-full lg:hidden">
        <Link to="/" className="inline-block">
          <Image
            data={{url: CIGARS_DIRECT_LOGO_WHITE, altText: 'CIGARS DIRECT'}}
            width={140}
            height={40}
            aspectRatio="1:1"
            className="object-contain"
          />
        </Link>
        {/* 
          https://web.dev/articles/accessible-tap-targets 
          I choose change a bit to make this actions buttons more clickable and it accessible
        */}
        <div className="flex items-center">
          <ActionButton onClick={() => setIsSearchOpen(true)}>
            <SearchToggle />
          </ActionButton>
          <ActionButton>
            <AccountLink variant="label-hidden" />
          </ActionButton>
          <ActionButton onClick={openCart}>
            <CartToggle variant="label-hidden" />
          </ActionButton>
          <ActionButton>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="white"
              size={20}
            />
          </ActionButton>
        </div>
      </div>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default MobileHeader;
