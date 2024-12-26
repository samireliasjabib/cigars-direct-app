import type {GetCollectionTopBoutiqueBrandsQuery} from 'storefrontapi.generated';

export interface BrandInfo {
  handle: string;
  title: string;
  imageUrl: string;
  imageAlt: string | null;
}

export interface TopBoutiqueCigarBrandsProps {
  topBoutiqueCigarsBrands: GetCollectionTopBoutiqueBrandsQuery;
}
