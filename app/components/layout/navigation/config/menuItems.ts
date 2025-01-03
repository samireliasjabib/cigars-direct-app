import { NavigationItem, SubMenuItem } from '../types';

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

export const fivePacksSubMenu: SubMenuItem[] = [
  {
    title: 'Cigar 5-Packs',
    links: [
      '5-Packs Under $25',
      '5-Packs From $25 – $50',
      '5-Packs From $50 – $75',
      '5-Packs From $75 – $100',
      '5-Packs Over $100',
    ],
  },
  {
    title: 'Cigar Samplers',
    links: [
      'Samplers Under $25',
      'Samplers From $25 – $50',
      'Samplers From $50 – $75',
      'Samplers From $75 – $100',
      'Samplers Over $100',
    ],
  },
  {
    title: '5-Packs By Strength',
    links: [
      '5-Packs Full',
      '5-Packs Medium-Full',
      '5-Packs Medium',
      '5-Packs Mild-Medium',
      '5-Packs Mild',
    ],
  },
  {
    title: '5-Packs By Region',
    links: [
      'Dominican 5-Packs',
      'Honduran 5-Packs',
      'Nicaraguan 5-Packs',
      'Other 5-Packs',
    ],
  },
];

export const accessoriesSubMenu: SubMenuItem[] = [
  {
    title: 'Accessories',
    links: [
      'Humidors',
      'Ashtrays',
      'Lighters',
      'Cutters',
      'Cases',
      'Humidification',
      'Lighter - Cutter Set',
      'Punches',
    ],
  },
];

export const apparelSubMenu: SubMenuItem[] = [
  {
    title: 'Apparel',
    links: [
      'Hats',
      'T-Shirts',
    ],
  },
];

export const giftsSubMenu: SubMenuItem[] = [
  {
    title: 'Gifts',
    links: [
      'Gift w/Purchase',
      'Gift Guide',
    ],
  },
];


export const navigationItems: NavigationItem[] = [
  {
    label: 'CIGARS',
    href: '/cigars',
    subMenu: cigarsSubMenu,
  },
  { label: '5-PACKS & SAMPLERS', href: '/samplers', subMenu: fivePacksSubMenu },
  { label: 'LIMITED EDITION', href: '/limited-edition' },
  { label: 'NEW ARRIVALS', href: '/new-arrivals' },
  { label: 'ACCESSORIES', href: '/accessories', subMenu: accessoriesSubMenu },
  { label: 'APPAREL', href: '/apparel', subMenu: apparelSubMenu },
  { label: 'GIFTS', href: '/gifts', subMenu: giftsSubMenu },
  { label: 'HOT DEALS', href: '/hot-deals', isHighlighted: true },
  { label: 'TRACK YOUR ORDER', href: '/track-order' },
];

