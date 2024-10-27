// Utils and Helpers
import { AssertionTypes } from "cypress/support/commands/cyValidate";

// Types
import { IProduct } from "@features/pages/shared/types/product/IProduct";

export class CartTooltipAssertions {
  constructor() {}

  public static validateIfProductAddedToCart(productExpected: IProduct, allProductsInCart: IProduct[]): void {
    const customSuccessMessage = `[Tooltip do Carrinho] O produto '${productExpected.productName}' foi adicionado ao carrinho`;
    const customFailureMessage = `[Tooltip do Carrinho] O produto '${productExpected.productName}' não foi adicionado ao carrinho`;

    const productFound = allProductsInCart.find(product => 
      /* Note:
        Através de testes manuais, percebi que quando o nome do prodduto é muito grande
        O nome do produto exibido no tooltip do carrinho é simplificado através de reticências
        Por isso, estou fazendo a comparação utilizando includes e não equal
        Além disso, estou removendo as reticências do nome do produto para fazer a comparação
      */
      productExpected.productName.includes(product.productName.replace(/\.{3}/g, "")) && productExpected.quantity === product.quantity
    );
    cy.expected(productFound, AssertionTypes.NOT_EQUAL, undefined, customSuccessMessage, customFailureMessage);
  }
};