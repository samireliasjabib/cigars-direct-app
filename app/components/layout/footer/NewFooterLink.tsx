import {Link} from '~/components/shared/Link';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({href, children}: FooterLinkProps) {
  return (
    <Link
      to={href}
      prefetch="intent"
      className="text-gray-300 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

export default FooterLink;
