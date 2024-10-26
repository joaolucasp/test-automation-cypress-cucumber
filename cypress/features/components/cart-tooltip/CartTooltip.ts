// Locators
import { CartTooltipLocators } from '@features/components/cart-tooltip/locators/CartTooltipLocators';

// Types
import { IProduct } from '@features/pages/shared/types/product/IProduct';

export class CartTooltip {
  private static readonly locators = CartTooltipLocators;

  constructor() {}

  public static getTotalItems(): Cypress.Chainable<number> {
    return cy.get(CartTooltip.locators.productRow).then(($products) => {
      return $products.length;
    });
  }

  public static getCartTotalPrice(): Cypress.Chainable<string> {
    return cy.getValue(CartTooltip.locators.totalPrice);
  }

  public static getAllProductsFromCart(): Cypress.Chainable<IProduct[]> {
    return CartTooltip.getTotalItems().then((totalItems) => {
      const allProductsInCart: IProduct[] = [];

      for (let i = 0; i < totalItems; i++) {
        const productResumePromise = CartTooltip.getProductFromCart(i);

        productResumePromise.then((productResume) => {
          allProductsInCart.push(productResume);
          cy.wrap(allProductsInCart).as('allProductsInCart');
        });
      }

      return cy.get('@allProductsInCart').then((allProductsInCart) => {
        return allProductsInCart as unknown as IProduct[];
      });
    });
  }

  public static getProductFromCart(index: number): Cypress.Chainable<IProduct> {
    return cy.getValue(CartTooltip.locators.product(index).productName).then((productName) => {
      return cy.getValue(CartTooltip.locators.product(index).productPrice).then((productPrice) => {
        return cy.getValue(CartTooltip.locators.product(index).productQuantity).then((productQuantity) => {
          return {
            productName,
            productPrice,
            quantity: parseInt(productQuantity.split(' ')[1].trim()),
          };
        });
      });
    });
  }
}