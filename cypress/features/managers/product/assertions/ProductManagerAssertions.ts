// Utils and Helpers
import { AssertionTypes } from "cypress/support/commands/cyValidate";

// Types
import { IApiProduct } from "@services/advantage-shopping-api/modules/product/types/IApiProduct";
import { IApiProductDetail } from "@services/advantage-shopping-api/modules/product/types/IApiProductDetail";

export class ProductManagerAssertions {
  constructor() { }

  public static validateIfProductNamesMatchSearchCriteria(product: IApiProduct, searchTerm: string): void {
    const customSuccessMessage = `[Service - Busca por produtos] O nome do produto exibido na lista corresponde ao termo de busca: '${searchTerm}'`;
    const customFailureMessage = `[Service - Busca por produtos] O produto '${product.productName}' não corresponde ao termo de busca: '${searchTerm}'`;

    /* Note:
      Através de testes manuais, percebi que a busca não é sensível a case senstive
      Ou seja, a busca retorna os resultados mesmo que o termo de busca esteja em caixa baixa
      Por isso, estou convertendo o nome do produto e o termo de busca para caixa baixa para fazer a comparação
    */
    const productName = product.productName.toLocaleLowerCase();

    cy.expected(productName, AssertionTypes.CONTAINS, searchTerm, customSuccessMessage, customFailureMessage);
  }

  public static validateIfProductListIsEmpty(listOfProducts: any): void {
    const customSuccessMessage = `[Service - Busca por produtos] A lista de produtos está vazia`;
    const customFailureMessage = `[Service - Busca por produtos] Há produtos exibidos na lista, enquanto era esperado que a lista estivesse vazia`;

    cy.expected(listOfProducts, AssertionTypes.EQUAL, null, customSuccessMessage, customFailureMessage);
  }

  public static validateIfProductImageWasUpdated(productDetail: IApiProductDetail, source: string, color: string): void {
    const customSuccessMessage = `[Service - Atualização de imagem] A imagem do produto foi atualizada com sucesso`;
    const customFailureMessage = `[Service - Atualização de imagem] A imagem do produto não foi atualizada`;

    const updatedImage = productDetail.images.find(image => image.includes(`${color}##custom_image_${source}`));

    cy.expected(updatedImage, AssertionTypes.NOT_EQUAL, null, customSuccessMessage, customFailureMessage);
  }
};