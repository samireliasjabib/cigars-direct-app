import {Plus, Search} from 'lucide-react';
import ActionButton from '~/components/shared/ActionButton';
import {ProductQuickBuy} from '../../product-quick-buy/ProductQuickBuy';
import {ProductQuickView} from '../../product-quick-view/ProductQuickView';

function ProductActionButtons({productHandle}: {productHandle: string}) {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out z-30">
      <ProductQuickView productHandle={productHandle} />
      <ProductQuickBuy productHandle={productHandle} />
    </div>
  );
}

export default ProductActionButtons;
