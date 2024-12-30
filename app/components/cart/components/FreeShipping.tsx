interface FreeShippingProps {
  totalAmount: number | string;
}

export default function FreeShipping({totalAmount}: FreeShippingProps) {
  const THRESHOLD = 99.99;
  const remaining = THRESHOLD - Number(totalAmount);

  return (
    <div className="bg-pink-50 px-6 py-4 max-w-md mx-auto rounded-full my-4">
      <p className="text-center text-xs">
        {remaining <= 0 ? (
          <span>
            🎉 <span className="font-bold">FREE SHIPPING</span> has been applied
            to your order!
          </span>
        ) : (
          <span>
            Spend ${remaining.toFixed(2)} more and get{' '}
            <span className="font-bold">FREE SHIPPING!</span>
          </span>
        )}
      </p>
    </div>
  );
}
