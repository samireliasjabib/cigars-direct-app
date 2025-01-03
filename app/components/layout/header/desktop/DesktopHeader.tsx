import { Menu } from 'lucide-react';
import { EnhancedMenu } from '~/lib/utils';
import { useMegaMenuContext } from '../context/useMegaMenuContext';
import HeaderSearchInput from '../../../search/input-search/InputSearch';
import CartToggle from '~/components/cart/CartToggle';
import AccountLink from '../shared/account-link/AccountLink';
import Logo from '../shared/Logo';
import ActionButton from '~/components/shared/ActionButton';
import Hamburger from 'hamburger-react';

interface DesktopHeaderProps {
  openCart: () => void;
  menu?: EnhancedMenu;
}

function DesktopHeader({ menu, openCart }: DesktopHeaderProps) {
  const { isScrolled, isOpenMegaMenu, toggleMegaMenu } = useMegaMenuContext();

  return (
    <div className="bg-black w-full hidden lg:block">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center gap-12 w-full">
          <div className='flex flex-row items-center gap-2'>
            <div
              className="overflow-hidden transition-[width] duration-300 ease-in-out"
              style={{ width: isScrolled ? '40px' : '0' }}
            >
              <div className="relative right-3">
                <ActionButton
                  ariaLabel='Close Menu'
                  onClick={toggleMegaMenu}
                >
                  <Hamburger
                    toggled={isOpenMegaMenu}
                    size={20}
                    color="white"
                  />
                </ActionButton>
              </div>
            </div>
            <Logo />
          </div>
          <HeaderSearchInput />
        </div>
        <div className="flex items-center gap-8">
          <AccountLink variant="default" />
          <CartToggle openCart={openCart} />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
