export default function SearchToggle() {
  return (
    <div>
      <SearchIcon />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 64 64"
      width={28}
      height={28}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
        stroke="white"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
}
