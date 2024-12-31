import {Image} from '@shopify/hydrogen';
import CIGARS_DIRECT_LOGO_WHITE from '../../../../assets/cigar-logo-white.jpg';
import {Link} from '~/components/shared/Link';

function Logo() {
  return (
    <Link to="/" prefetch="intent" className="inline-block">
      <Image
        data={{
          url: CIGARS_DIRECT_LOGO_WHITE,
          altText: 'Cigars Direct',
        }}
        width={280}
        height={80}
        aspectRatio="3.5:1"
        loading="eager"
        sizes="(min-width: 768px) 140px"
        className="object-contain w-[140px] h-[40px] md:h-[55px] transform-gpu"
      />
    </Link>
  );
}

export default Logo;
