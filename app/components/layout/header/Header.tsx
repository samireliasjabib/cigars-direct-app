import {CartForm} from '@shopify/hydrogen';
import {useEffect} from 'react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import CartDrawer from '~/components/cart/CartDrawer';
import {useDrawer} from '~/components/Drawer';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {EnhancedMenu} from '~/lib/utils';
import MobileHeader from './mobile/MobileHeader';
import MenuDrawer from './mobile/MenuDrawer';
import DesktopHeader from './desktop/DesktopHeader';

interface HeaderProps {
  title: string;
  menu?: EnhancedMenu;
}

function Header({menu}: HeaderProps) {
  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers(CartForm.ACTIONS.LinesAdd);

  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black h-[80px] flex items-center ">
        <DesktopHeader menu={menu} openCart={openCart} />
        <MobileHeader openCart={openCart} openMenu={openMenu} />
      </header>
      <div className="h-[72px] lg:h-[80px]" aria-hidden="true" />
    </>
  );
}

export default Header;
