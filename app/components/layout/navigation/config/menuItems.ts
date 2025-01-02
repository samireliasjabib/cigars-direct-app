import {NavigationItem, SubMenuItem} from '../types';

export const cigarsSubMenu: SubMenuItem[] = [
  {
    title: 'All Cigars',
    links: [
      'Shop by Brand',
      'Cigar Samplers',
      'Weekly Specials',
      'Hot Deals',
      'Flavored Cigars',
      'Handmade Cigars',
      'Best Sellers',
      'Cigars of the Year',
    ],
  },
  {
    title: 'Top Cigar Brands',
    links: [
      'Arturo Fuente',
      'Padron',
      'Drew Estate',
      'Ashton',
      'My Father',
      'Tatuaje',
      'Rocky Patel',
      'Oliva',
      'Davidoff',
      'E.P. Carrillo',
    ],
  },
  {
    title: 'Cigars By Price',
    links: [
      'Cigars Under $10',
      'Cigars From $10 - $25',
      'Cigars From $25 - $50',
      'Cigars From $50 - $75',
      'Cigars From $75 - $100',
      'Cigars From $100 - $200',
      'Cigars Over $200',
    ],
  },
  {
    title: 'Cigars By Shape',
    links: [
      'Churchill',
      'Corona Gorda',
      'Diadema',
      'Double Corona',
      'Double Robusto',
      'Gordo',
      'Lancero',
      'Lonsdale',
      'Perfecto',
      'Presidente',
      'Robusto',
      'Rothschild',
      'Salomon',
      'Toro',
    ],
  },
  {
    title: 'Cigars By Wrapper',
    links: [
      'Candela',
      'Connecticut',
      'Connecticut Broadleaf',
      'Corojo',
      'Criollo',
      'Habano',
      'Maduro',
      'Cameroon',
    ],
  },
  {
    title: 'Cigars By Strength',
    links: ['Full', 'Medium-Full', 'Medium', 'Mild-Medium', 'Mild'],
  },
  {
    title: 'Cigars By Origin',
    links: ['Dominican', 'Honduran', 'Nicaraguan', 'Mexican', 'American'],
  },
];

export const navigationItems: NavigationItem[] = [
  {
    label: 'CIGARS',
    href: '/cigars',
    subMenu: cigarsSubMenu,
  },
  {label: '5-PACKS & SAMPLERS', href: '/samplers'},
  {label: 'LIMITED EDITION', href: '/limited-edition'},
  {label: 'NEW ARRIVALS', href: '/new-arrivals'},
  {label: 'ACCESSORIES', href: '/accessories'},
  {label: 'APPAREL', href: '/apparel'},
  {label: 'GIFTS', href: '/gifts'},
  {label: 'HOT DEALS', href: '/hot-deals', isHighlighted: true},
  {label: 'TRACK YOUR ORDER', href: '/track-order'},
];
