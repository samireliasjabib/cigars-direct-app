import {CartForm} from '@shopify/hydrogen';
import {useEffect} from 'react';
import CartDrawer from '~/components/cart/CartDrawer';
import {useDrawer} from '~/components/Drawer';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {EnhancedMenu, useIsHomePath} from '~/lib/utils';
import MobileHeader from './mobile/MobileHeader';
import MenuDrawer from './mobile/MenuDrawer';
import DesktopHeader from './desktop/DesktopHeader';

function Header({title, menu}: {title: string; menu?: EnhancedMenu}) {
  const isHome = useIsHomePath();

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

  // toggle cart drawer when adding to cart
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
      <DesktopHeader menu={menu} openCart={openCart} />
      <MobileHeader openCart={openCart} openMenu={openMenu} />
    </>
  );
}

export default Header;
