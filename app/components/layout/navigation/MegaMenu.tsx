import {Link} from '~/components/shared/Link';
import {Flame} from 'lucide-react';

const navigationItems = [
  {label: 'CIGARS', href: '/cigars'},
  {label: '5-PACKS & SAMPLERS', href: '/samplers'},
  {label: 'LIMITED EDITION', href: '/limited-edition'},
  {label: 'NEW ARRIVALS', href: '/new-arrivals'},
  {label: 'ACCESSORIES', href: '/accessories'},
  {label: 'APPAREL', href: '/apparel'},
  {label: 'GIFTS', href: '/gifts'},
  {label: 'HOT DEALS', href: '/hot-deals', isHighlighted: true},
  {label: 'TRACK YOUR ORDER', href: '/track-order'},
];

function MegaMenu() {
  return (
    <nav
      className="w-full bg-white border-b border-gray-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center justify-between whitespace-nowrap py-2 -mx-4 px-4 gap-6 tracking-wide">
          {navigationItems.map((item) => (
            <li key={item.href}>
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
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MegaMenu;
