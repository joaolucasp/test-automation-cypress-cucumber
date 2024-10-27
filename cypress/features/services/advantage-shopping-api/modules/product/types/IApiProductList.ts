import { IApiProduct } from '@features/services/advantage-shopping-api/modules/product/types/IApiProduct';

export interface IApiProductList {
  products: IApiProduct[];
  colors: string[];
  minPrice: string;
  maxPrice: string;
};