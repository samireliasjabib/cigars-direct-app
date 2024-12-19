// Fallback logic for images
export const getImageMedia = (
  media: {nodes: any},
  fallback: string | undefined,
) => media?.nodes?.[0]?.previewImage?.url || fallback;
