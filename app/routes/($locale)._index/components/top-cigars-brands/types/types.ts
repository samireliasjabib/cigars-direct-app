export interface BrandCardProps {
  imageUrl: string;
  altText: string;
}

export interface BrandGridProps {
  brands: Array<{
    imageUrl: string;
    altText: string;
    id: string;
  }>;
}
