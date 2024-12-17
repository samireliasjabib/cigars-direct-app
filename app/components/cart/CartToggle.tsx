const CartToggle = ({openCart}: {openCart: () => void}) => {
  return (
    <div
      onClick={openCart}
      role="button"
      className="flex flex-row items-center gap-4"
    >
      <CartIcon />
      <p className="text-sm uppercase text-white tracking-wide">Cart</p>
    </div>
  );
};

export default CartToggle;

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className="icon icon-cart"
      viewBox="0 0 64 64"
      width={28}
      height={28}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 17.44h46.79l-7.94 25.61H20.96l-9.65-35.1H3"
        stroke="white"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      ></path>
      <circle
        cx="27"
        cy="53"
        r="2"
        stroke="white"
        fill="none"
        strokeWidth="4"
      ></circle>
      <circle
        cx="47"
        cy="53"
        r="2"
        stroke="white"
        fill="none"
        strokeWidth="4"
      ></circle>
    </svg>
  );
}
