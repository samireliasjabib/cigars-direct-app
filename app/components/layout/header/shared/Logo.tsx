import {Image} from '@shopify/hydrogen';
import CIGARS_DIRECT_LOGO_WHITE from '../../../../assets/cigar-logo-white.jpg';
import {Link} from '~/components/shared/Link';

function Logo() {
  return (
    <Link to="/">
      <Image
        data={{url: CIGARS_DIRECT_LOGO_WHITE, altText: 'CIGARS DIRECT'}}
        width={140}
        height={40}
        aspectRatio="1:1"
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;
