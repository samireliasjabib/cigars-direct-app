import Heading from '~/components/design-system/heading/Heading';
import ArticleCard from './ArticleCard';
import {Article} from './types.ts/types';

const articles: Article[] = [
  {
    link: '/article-1',
    image:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/vacation-friend-thumbnail_720x_38a63b3e-602d-4172-adbf-be2f14e403a0.webp?v=1734666642https://cdn.shopify.com/s/files/1/0724/4899/9675/files/vacation-friend-thumbnail_720x_38a63b3e-602d-4172-adbf-be2f14e403a0.webp?v=1734666642',
    alt: 'People enjoying beach vacation',
    title:
      'Top Cigar-Friendly Travel Destinations to Visit During the 2024 Holiday Season: Where to Smoke, Relax, and Explore',
    date: 'DEC 02, 2024',
    description:
      "As 2024 comes to a close, the holiday season offers the perfect opportunity to take a well-deserved vacation. But if you're a cigar enthusiast, you're probably wondering where you can...",
  },
  {
    link: '/article-2',
    image:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/cigar-session-1_720x_1b8bf566-116f-49d7-a574-29e4d0f8eefd.webp?v=1734666642',
    alt: 'People enjoying cigars at outdoor party',
    title:
      'Cigar Rituals from Around the World: Unique Traditions You Should Try',
    date: 'DEC 02, 2024',
    source: 'Bloggle',
    description:
      "Cigars have been a part of human culture for centuries, enjoyed by people all over the world. But cigars aren't just about lighting up and puffing away—they're wrapped in deep-rooted...",
  },
  {
    link: '/article-3',
    image:
      'https://cdn.shopify.com/s/files/1/0724/4899/9675/files/cool-woman-smoking-cigar_720x_5004ac01-727f-49b4-8585-dad98f460439.webp?v=1734666642',
    alt: 'Concert scene with purple lighting',
    title: 'Cigars as a Gift for Women: Really? It is a Thoughtful Choice',
    date: 'NOV 04, 2024',
    description:
      'When you think of cigars, you might automatically envision them as a "man\'s gift"—an accessory for a poker night or a celebration with the boys. But in reality, cigars are...',
  },
];

export default function NewsCigar() {
  return (
    <section className="wrapper pb-10 md:pb-20">
      <Heading title="News & Cigar" viewAllLink="/articles" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
