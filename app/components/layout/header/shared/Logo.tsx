import {Image} from '@shopify/hydrogen';
import CIGARS_DIRECT_LOGO_WHITE from '../../../../assets/cigar-logo-white.jpg';
import {Link} from '~/components/shared/Link';

function Logo() {
  return (
    <Link to="/">
      <Image
        data={{
          url: CIGARS_DIRECT_LOGO_WHITE,
          altText: 'CIGARS DIRECT',
        }}
        width={140}
        height={40}
        aspectRatio="3.5/1"
        fetchPriority="high"
        loading="eager"
        sizes="(min-width: 768px) 140px, 120px"
        className="object-contain w-auto h-[40px] md:h-[40px]"
      />
    </Link>
  );
}

export default Logo;
