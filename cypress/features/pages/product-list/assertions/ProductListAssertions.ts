// Utils and Helpers
import { AssertionTypes } from "cypress/support/commands/cyValidate";

// Types
import { IProduct } from "@features/pages/shared/types/product/IProduct";

export class ProductListAssertions {
  constructor() {}

  public static validateIfProductListIsNotEmpty(totalItems: number): void {
    const customSuccessMessage = `[Lista de Produtos] A lista de produtos não está vazia. Total de produtos: ${totalItems}`;
    const customFailureMessage = `[Lista de Produtos] A lista de produtos está vazia, enquanto era esperado que houvesse produtos exibidos`;

    cy.expected(totalItems, AssertionTypes.GREATER_THAN, 0, customSuccessMessage, customFailureMessage);
  }

  public static validateTotalItems(totalItems: number, expectedTotalItems: number): void {
    const customSuccessMessage = `[Lista de Produtos] A quantidade de produtos exibida na lista é igual a quantidade esperada: ${expectedTotalItems}`;
    const customFailureMessage = `[Lista de Produtos] Era esperado que a quantidade de produtos exibida na lista fosse igual a ${expectedTotalItems}, mas foi exibido ${totalItems}`;

    cy.expected(totalItems, AssertionTypes.EQUAL, expectedTotalItems, customSuccessMessage, customFailureMessage);
  }

  public static validateIfProductNamesMatchSearchCriteria(product: IProduct, searchTerm: string): void {
    const customSuccessMessage = `[Lista de Produtos] O nome do produto exibido na lista corresponde ao termo de busca: '${searchTerm}'`;
    const customFailureMessage = `[Lista de Produtos] O produto '${product.productName}' não corresponde ao termo de busca: '${searchTerm}'`;

    /* Note:
      Através de testes manuais, percebi que a busca não é sensível a case senstive
      Ou seja, a busca retorna os resultados mesmo que o termo de busca esteja em caixa baixa
      Por isso, estou convertendo o nome do produto e o termo de busca para caixa baixa para fazer a comparação
    */
    const productName = product.productName.toLocaleLowerCase();

    cy.expected(productName, AssertionTypes.CONTAINS, searchTerm, customSuccessMessage, customFailureMessage);
  }

  public static validateIfNoResultsMessageIsDisplayed(message: string): void {
    const customSuccessMessage = `[Lista de Produtos] A mensagem de 'Sem resultados para a busca' foi exibida`;
    const customFailureMessage = `[Lista de Produtos] A mensagem de 'Nenhum produto encontrado' não foi exibida`;

    cy.expected(message, AssertionTypes.CONTAINS, 'No results', customSuccessMessage, customFailureMessage);
  }
}