export interface IApiProductDetail {
  productId: number;
  categoryId: number;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  attributes: any[];
  colors: any[];
  images: string[];
  productStatus: string;
}