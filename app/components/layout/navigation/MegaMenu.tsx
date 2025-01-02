import {useState} from 'react';
import {NavigationItem} from './components/NavigationItem';
import {navigationItems} from './config/menuItems';

function MegaMenu() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="relative">
      <nav
        className="w-full bg-white border-b border-gray-200 relative z-10"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-between whitespace-nowrap py-2 -mx-4 px-4 gap-6 tracking-wide">
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
