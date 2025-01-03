import Header from './Header';
import MegaMenu from '../navigation/MegaMenu';
import { type EnhancedMenu } from '~/lib/utils';
import { useMegaMenuContext } from './context/useMegaMenuContext';

type HeaderWithMegaMenuProps = {
  title: string;
  menu: EnhancedMenu;
};

export function HeaderWithMegaMenu({ title, menu }: HeaderWithMegaMenuProps) {
  const { isScrolled, isOpenMegaMenu } = useMegaMenuContext();

  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Header title={title} menu={menu} />
        <div
          className="fixed w-full"
          style={{
            transform: (isScrolled && !isOpenMegaMenu) ? 'translateY(-100%)' : 'translateY(0)',
            transition: 'transform 0.3s ease'
          }}
        >
          <MegaMenu />
        </div>
      </div>
    </div>
  );
}

export default HeaderWithMegaMenu;
