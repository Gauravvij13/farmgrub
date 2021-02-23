export type ProductImageType = {
  id: string;
  url: string;
};

export type ProductType = {
  id: string;
  name: string;
  amount: string;
  description?: string;
  images: ProductImageType[];
  metaTitle?: string;
};
export type ProductListItemType = Pick<
  ProductType,
  'id' | 'name' | 'amount' | 'description' | 'images'
>;
