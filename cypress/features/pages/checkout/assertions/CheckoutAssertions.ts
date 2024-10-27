// Utils and Helpers
import { AssertionTypes } from "cypress/support/commands/cyValidate";

// Types
import { IProduct } from "@features/pages/shared/types/product/IProduct";

export class CheckoutAssertions {
  constructor() { }

  public static validateIfProductAddedToCart(productExpected: IProduct, allProductsInCart: IProduct[]): void {
    const customSuccessMessage = `[Carrinho] O produto '${productExpected.productName}' está presente no carrinho na tela de checkout`;
    const customFailureMessage = `[Carrinho] As informações do produto '${productExpected.productName}' não estão corretas na tela de checkout`;

    const productInCart = allProductsInCart.find((productInCart) => 
      /* Note:
        Através de testes manuais, percebi que quando o nome do prodduto é muito grande
        O nome do produto exibido no componente de ORDER SUMMARY é simplificado através de reticências
        Por isso, estou fazendo a comparação utilizando includes e não equal
        Além disso, estou removendo as reticências do nome do produto para fazer a comparação
      */
        productExpected.productName.includes(productExpected.productName.replace(/\.{3}/g, "")) && productExpected.quantity === productExpected.quantity
    );

    cy.expected(productInCart, AssertionTypes.NOT_EQUAL, undefined, customSuccessMessage, customFailureMessage);
  }
};