const AccountToggle = ({
  variant = 'default',
}: {
  variant?: 'default' | 'label-hidden';
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <UserIcon />
      {variant !== 'label-hidden' && (
        <p className="text-sm uppercase text-white tracking-wide">Account</p>
      )}
    </div>
  );
};

export default AccountToggle;

// User Icon Component/page-in-development"
function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className="icon icon-user"
      viewBox="0 0 64 64"
      width={28}
      height={28}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.42 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.76 2.7 9.51 6 11.42v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"
        stroke="white"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
}
