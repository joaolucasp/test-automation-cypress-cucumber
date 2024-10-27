// Core
import { AdvantageShoppingApi, IRequestDefinition } from '@features/services/advantage-shopping-api/AdvantageShoppingApi';

// Product Types
import { IApiProductCategory } from '@features/services/advantage-shopping-api/modules/product/types/IApiProductCategory';

export class ProductService extends AdvantageShoppingApi {
  public searchProducts(searchTerm: string): Cypress.Chainable<IApiProductCategory[]> {
    const requestDefinition: IRequestDefinition = {
      method: 'GET',
      url: `${this.apiUrl}/catalog/api/v1/products/search?name=${searchTerm}`,
    };

    return this.executeRequest<IApiProductCategory[]>(requestDefinition);
  }
};