import {Link} from '~/components/shared/Link';
import {SubMenuItem} from '../types';

interface SubMenuProps {
  subMenu: SubMenuItem[];
  onMouseLeave: () => void;
}

export function SubMenu({subMenu, onMouseLeave}: SubMenuProps) {
  const getGridCols = (count: number) => {
    const maxCols = 12;
    return `lg:grid-cols-${Math.min(count, maxCols)}`;
  };

  return (
    <div
      className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-20"
      style={{top: '100%'}}
    >
      <div className="max-w-[1400px] mx-auto px-6" onMouseLeave={onMouseLeave}>
        <div
          className={`grid gap-6 py-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${getGridCols(
            subMenu.length,
          )}`}
        >
          {subMenu.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={`/cigars/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
