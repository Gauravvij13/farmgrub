import { ProductType } from './products';

export type SubCategoryType = {
  id: string;
  name: string;
  products: ProductType[];
};
