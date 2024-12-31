import ProductCard from '~/components/design-system/product/product-card/ProductCard';

export const mockTopSearchedProducts = Array.from({length: 6}, () => ({
  decimals: '14',
  handle: '',
  title: '',
  whole: '99',
  firstImageMedia: {
    url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/padron-1926-anniversary-no-48-maduro-ca-2023-ranking-2_280x_7974420d-aca7-4fbb-b040-389502b88137.jpg?v=1734537576',
    altText: 'second image media',
  },
  secondImageMedia: {
    url: 'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/alec-bradley-prensado-torpedo-5pack_360x_cbfa6aa9-34de-489f-bd35-f062c13a20c2.jpg?v=1734577574',
    altText: 'second image media',
  },
}));

export function TopSearchedProducts() {
  return (
    <div className="py-8 w-full">
      <h2 className="text-2xl font-bold mb-6">Top searched</h2>
      <div className="grid grid-cols-6 gap-4 w-full">
        {mockTopSearchedProducts.map((product, index) => {
          const hasSoldOut = Math.random() < 0.5;
          return (
            <ProductCard
              key={index}
              decimals={product.decimals}
              handle={product.handle}
              soldOut={hasSoldOut}
              disabledActions
              secondImageMedia={product.secondImageMedia}
              title={product.title}
              whole={product.whole}
              firstImageMedia={product.firstImageMedia}
            />
          );
        })}
      </div>
    </div>
  );
}
