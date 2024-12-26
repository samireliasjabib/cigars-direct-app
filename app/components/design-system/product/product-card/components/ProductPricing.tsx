function ProductPricing({whole, decimals}: {whole: string; decimals: string}) {
  return (
    <p className="flex justify-center items-center">
      <span className="text-black font-semibold text-xs lowercase mr-2">
        from
      </span>
      <span className="font-bold text-lg leading-none flex">
        ${whole}
        <sup className="text-xs text-[10px] relative top-[-0.2em] left-[0.2em]">
          {decimals}
        </sup>
      </span>
    </p>
  );
}

export default ProductPricing;
