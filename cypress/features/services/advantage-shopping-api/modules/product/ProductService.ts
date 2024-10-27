// Core
import { AdvantageShoppingApi, IRequestDefinition } from '@features/services/advantage-shopping-api/AdvantageShoppingApi';

// Product Types
import { IApiProduct } from '@features/services/advantage-shopping-api/modules/product/types/IApiProduct';
import { IApiProductList } from '@features/services/advantage-shopping-api/modules/product/types/IApiProductList';
import { IApiProductUpdated } from '@features/services/advantage-shopping-api/modules/product/types/IApiProductUpdated';

export class ProductService extends AdvantageShoppingApi {
  public searchProducts(searchTerm: string): Cypress.Chainable<IApiProduct[]> {
    const requestDefinition: IRequestDefinition = {
      method: 'GET',
      url: `${this.apiUrl}/catalog/api/v1/products/search?name=${searchTerm}`,
    };

    return this.executeRequest<IApiProductList>(requestDefinition).then(listOfProducts => {
      return cy.wrap(listOfProducts.products);
    });
  }
};