import { IApiProduct } from "./IApiProduct";

export interface IApiProductCategory {
  categoryId: number;
  categoryName: string;
  categoryImageId: string;
  products: IApiProduct[];
}
