import {Image} from '@shopify/hydrogen';
import {Link} from '~/components/shared/Link';
import {ArticleCardProps} from './types.ts/types';

function ArticleCard({article}: ArticleCardProps) {
  const {link, image, alt, title, date, source, description} = article;

  return (
    <article className="group flex flex-col space-y-4">
      <Link to={link} className="relative block overflow-hidden">
        <Image
          src={image}
          alt={alt}
          className="object-cover w-full h-full duration-500 transition-transform group-hover:scale-105"
          width={600}
          height={400}
        />
      </Link>
      <div className="space-y-2">
        <h3 className="group-hover:text-primary transition-colors duration-500 text-xl font-bold leading-tight hover:text-gray-700">
          <Link to={link}>{title}</Link>
        </h3>
        <p className="text-sm text-gray-500">
          {source ? <span className="font-medium">{source}</span> : null} ·{' '}
          {date}
        </p>
        <p className="text-gray-600 line-clamp-3">{description}</p>
      </div>
    </article>
  );
}

export default ArticleCard;
