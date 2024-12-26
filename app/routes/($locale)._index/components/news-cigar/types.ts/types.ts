export interface Article {
  link: string;
  image: string;
  alt: string;
  title: string;
  date: string;
  source?: string; // Optional field
  description: string;
}

export interface ArticleCardProps {
  article: Article;
}
