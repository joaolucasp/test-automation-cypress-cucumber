// Core Services
import { IApiResponseData } from "@services/advantage-shopping-api/AdvantageShoppingApi";
import { ProductService } from "@services/advantage-shopping-api/modules/product/ProductService";

// Core Types
import { IApiProductCategory } from "@services/advantage-shopping-api/modules/product/types/IApiProductCategory";

export class ProductManager {
  constructor() {}

  public searchProducts(searchTerm: string): Cypress.Chainable<IApiResponseData<IApiProductCategory[] | null>> {
    return new ProductService().searchProducts(searchTerm);
  }
};