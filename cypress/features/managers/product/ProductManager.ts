// Core Services
import { IApiResponseData } from '@services/advantage-shopping-api/AdvantageShoppingApi';
import { ProductService } from '@services/advantage-shopping-api/modules/product/ProductService';

// Product Service Types
import { IApiProduct } from '@services/advantage-shopping-api/modules/product/types/IApiProduct';
import { IApiProductDetail } from '@services/advantage-shopping-api/modules/product/types/IApiProductDetail';
import { IApiProductCategory } from '@services/advantage-shopping-api/modules/product/types/IApiProductCategory';
import { IApiProductUpdated } from '@services/advantage-shopping-api/modules/product/types/IApiProductUpdated';

export class ProductManager {
  constructor() {}

  public searchProducts(searchTerm: string): Cypress.Chainable<IApiResponseData<IApiProductCategory[] | null>> {
    return new ProductService().searchProducts(searchTerm);
  }

  public updateProductImage(userId: number, productId: string, source: string, color: string, accessToken: string): Cypress.Chainable<IApiResponseData<IApiProductUpdated>> {
    return new ProductService().updateProductImage(userId, productId, source, color, accessToken);
  }

  public getRandomProductFromList(listOfProducts: IApiProductCategory[]): IApiProduct {
    const randomCategoryIndex = Math.floor(Math.random() * listOfProducts.length);
    const randomProductIndex = Math.floor(Math.random() * listOfProducts[randomCategoryIndex].products.length);

    return listOfProducts[randomCategoryIndex].products[randomProductIndex];
  }

  public getProductDetails(productId: string): Cypress.Chainable<IApiResponseData<IApiProductDetail>> {
    return new ProductService().getProductDetails(productId);
  }
};