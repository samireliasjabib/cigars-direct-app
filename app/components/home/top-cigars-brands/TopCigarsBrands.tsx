import Heading from '~/components/design-system/heading/Heading';
import BrandGrid from './components/BrandGrid';

const mockBrands = [
  {
    id: 'arturo-fuente',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/arturo-fuente.avif?v=1734492654',
    altText: 'Arturo Fuente',
  },
  {
    id: 'padron',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/padron-logo.avif?v=1734492703',
    altText: 'Padron',
  },
  {
    id: 'drew-estate',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/drew-logo.avif?v=1734492715',
    altText: 'Drew Estate',
  },
  {
    id: 'ashton',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/asthon-logo.avif?v=1734493736',
    altText: 'Ashton',
  },
  {
    id: 'oliva',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/oliva-logo.webp?v=1734492934',
    altText: 'Oliva',
  },
  {
    id: 'my-father',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/my-father-logo.avif?v=1734492888',
    altText: 'My Father',
  },
  {
    id: 'tatuaje',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/tatuaje-logo.webp?v=1734492912',
    altText: 'Tatuaje',
  },
  {
    id: 'ep-carrillo',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/ep-carrillo-logo.avif?v=1734492899',
    altText: 'E.P. Carrillo',
  },
  {
    id: 'plasencia',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/plasencia-logo.avif?v=1734493846',
    altText: 'Plasencia',
  },
  {
    id: 'rp',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/rp-logo.webp?v=1734492923',
    altText: 'RP',
  },
];

function TopCigarsBrands() {
  return (
    <section
      className="wrapper pb-10 md:pb-20"
      role="region"
      aria-label="Top Cigars By Brands"
    >
      <Heading title="Top Cigars Brands" viewAllLink="/" />
      <BrandGrid brands={mockBrands} />
    </section>
  );
}

export default TopCigarsBrands;
