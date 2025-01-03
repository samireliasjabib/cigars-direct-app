import { useState, useEffect } from 'react';
import { NavigationItem } from './components/NavigationItem';
import { navigationItems } from './config/menuItems';
import { useMegaMenuContext } from '../header/context/useMegaMenuContext';

function MegaMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { isOpenMegaMenu } = useMegaMenuContext();

  // Cerrar submenús cuando el menú principal se cierra
  useEffect(() => {
    if (!isOpenMegaMenu) {
      setActiveItem(null);
    }
  }, [isOpenMegaMenu]);

  return (
    <div className="relative">
      <nav className="bg-white border-b border-neutral-200">
        <div className="px-4">
          <ul className="flex items-center wrapper mx-auto whitespace-nowrap justify-center flex-wrap py-2 px-4 gap-4 tracking-wide">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.href}
                item={item}
                isActive={activeItem === item.label}
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
              />
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MegaMenu;