// Core
import { AdvantageShoppingApi, IRequestDefinition, IApiResponseData } from '@services/advantage-shopping-api/AdvantageShoppingApi';

// Product Types
import { IApiProductCategory } from '@services/advantage-shopping-api/modules/product/types/IApiProductCategory';
import { IApiProductUpdated } from '@services/advantage-shopping-api/modules/product/types/IApiProductUpdated';

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

  public updateProductImage(productId: string, source: string, color: string, accessToken: string): Cypress.Chainable<IApiResponseData<IApiProductUpdated>> {
    const formData = new FormData();

    cy.fixture('images/example.jpg', 'binary').then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file, 'image/jpeg'); // Converte o arquivo para Blob
      formData.append('file', blob, 'image.jpg'); // Adiciona o arquivo ao FormData
    });
        
    const requestDefinition: IRequestDefinition = {
      method: 'POST',
      url: `${this.apiUrl}/catalog/api/v1/product/image/${productId}/${source}/${color}?product_id=${productId}`,
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    return this.executeRequest<IApiProductUpdated>(requestDefinition);
  }
};