import {cn} from '~/lib/utils';
import {Link} from '../../shared/Link';

interface HeadingProps {
  title: string;
  viewAllLink?: string;
  className?: string;
  variant?: 'default' | 'centered';
}

function Heading({
  title,
  viewAllLink,
  className,
  variant = 'default',
}: HeadingProps) {
  const isCentered = variant === 'centered';

  return (
    <div
      className={cn(
        'flex flex-wrap pb-6 md:pb-12',
        isCentered ? 'justify-center' : 'justify-between items-center',
        className,
      )}
    >
      <h2
        className={cn(
          'text-xl lg:text-3xl font-bold uppercase break-words',
          isCentered
            ? 'w-full text-center md:text-start'
            : 'max-w-[70%] md:max-w-none',
        )}
      >
        {title}
      </h2>
      {viewAllLink && !isCentered && (
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
