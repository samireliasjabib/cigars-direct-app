import { Link } from '~/components/shared/Link';
import { SubMenuItem } from '../types';

interface SubMenuProps {
  subMenu: SubMenuItem[];
  onMouseLeave: () => void;
}

function SubMenuMultiple({ subMenu, onMouseLeave }: SubMenuProps) {
  return (
    <div
      className="absolute left-0 right-0 h-80 overflow-y-auto bg-white border-t border-gray-200 shadow-lg z-20 top-full"
    >
      <div className="wrapper px-4" onMouseLeave={onMouseLeave}>
        <div className="flex gap-6 py-8 flex-wrap justify-center">
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

export default SubMenuMultiple;