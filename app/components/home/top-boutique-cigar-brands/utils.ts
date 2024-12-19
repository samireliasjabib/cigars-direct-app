import {GetCollectionTopBoutiqueBrandsQuery} from 'storefrontapi.generated';
import {BrandInfo} from './types';

export function formatBrandsData(
  data: GetCollectionTopBoutiqueBrandsQuery,
): BrandInfo[] {
  const edges = data.collection?.metafields[0]?.references?.edges || [];
  return edges
    .map((edge) => {
      const node = edge.node;
      if (node.__typename !== 'Collection') return null;
      return {
        handle: node.handle,
        title: node.title,
        imageUrl: node.image?.url || '',
        imageAlt: node.image?.altText,
      };
    })
    .filter(Boolean) as BrandInfo[];
}
