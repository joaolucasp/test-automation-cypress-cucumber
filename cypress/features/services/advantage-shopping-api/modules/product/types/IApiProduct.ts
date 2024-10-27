export interface IApiProduct {
  productId: number;
  categoryId: number;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  attributes: IApiProductAttribute[];
  colors: IProductColor[];
  images: string[];
  productStatus: string;
}

export interface IApiProductAttribute {
  attributeName: string;
  attributeValue: string;
}

export interface IProductColor {
  code: string;
  name: string;
  inStock: number;
}
