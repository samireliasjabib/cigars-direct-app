import {Link} from '~/components/shared/Link';
import {Flame} from 'lucide-react';
import {NavigationItem as NavItemType} from '../types';
import {SubMenu} from './SubMenu';

interface NavigationItemProps {
  item: NavItemType;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function NavigationItem({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavigationItemProps) {
  return (
    <li className="group" onMouseEnter={onMouseEnter}>
      <Link
        to={item.href}
        className={`text-base font-normal transition-colors inline-flex items-center gap-2 ${
          item.isHighlighted
            ? 'bg-primary text-white p-2 hover:bg-primary/90'
            : 'text-gray-900'
        }`}
        prefetch="intent"
      >
        {item.isHighlighted && (
          <div className="bg-red-600 rounded-full w-4 h-4 flex items-center justify-center">
            <Flame size={12} className="text-white" />
          </div>
        )}
        {item.label}
      </Link>

      {item.subMenu && isActive && (
        <SubMenu subMenu={item.subMenu} onMouseLeave={onMouseLeave} />
      )}
    </li>
  );
}
