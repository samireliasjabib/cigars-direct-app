import {Image} from '@shopify/hydrogen';
import CIGARS_DIRECT_LOGO_WHITE from '../../../../assets/cigar-logo-white.jpg';

function Logo() {
  return (
    <Image
      data={{url: CIGARS_DIRECT_LOGO_WHITE, altText: 'CIGARS DIRECT'}}
      width={140}
      height={40}
      aspectRatio="1:1"
      className="object-contain"
    />
  );
}

export default Logo;
