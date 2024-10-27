// Core
import { AdvantageShoppingApi, IRequestDefinition, IApiResponseData } from '@services/advantage-shopping-api/AdvantageShoppingApi';

// Product Types
import { IApiProductCategory } from '@services/advantage-shopping-api/modules/product/types/IApiProductCategory';

export class ProductService extends AdvantageShoppingApi {
  public searchProducts(searchTerm: string): Cypress.Chainable<IApiResponseData<IApiProductCategory[] | null>> {
    const requestDefinition: IRequestDefinition = {
      method: 'GET',
      url: `${this.apiUrl}/catalog/api/v1/products/search?name=${searchTerm}`,
    };

    /* Note: através de testes manuais, percebi que quando a busca não retorna resultados, o response.data é vazio
      Portanto, tive que traduzir este comportamento para o código, retornando null quando não há resultados.
      Estranhei tal comportamento, pois geralmente é retornado um array vazio, mas a API retorna null.
    */
    return this.executeRequest<IApiProductCategory[] | null>(requestDefinition).then(responseData => {
      if (!responseData.data) {
        return {
          data: null,
          statusCode: responseData.statusCode,
        }
      }
      return responseData as unknown as IApiResponseData<IApiProductCategory[]>;
    });
  }
};