import {cn} from '~/lib/utils';
import {Link} from '../shared/Link';

interface HeadingProps {
  title: string;
  viewAllLink?: string;
  className?: string;
}

function Heading({title, viewAllLink, className}: HeadingProps) {
  return (
    <div
      className={cn(
        'flex justify-between items-center pb-6 md:pb-12',
        className,
      )}
    >
      <h2 className="text-xl lg:text-3xl font-bold uppercase">{title}</h2>
      {viewAllLink && (
        <Link
          to={viewAllLink}
          className="text-black transition-all text-sm md:text-base font-light uppercase hover:underline hover:text-primary"
        >
          View All
        </Link>
      )}
    </div>
  );
}

export default Heading;
