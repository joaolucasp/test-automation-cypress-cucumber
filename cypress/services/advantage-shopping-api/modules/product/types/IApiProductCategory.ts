import { IApiProduct } from '@services/advantage-shopping-api/modules/product/types/IApiProduct';

export interface IApiProductCategory {
  categoryId: number;
  categoryName: string;
  categoryImageId: string;
  products: IApiProduct[];
}
