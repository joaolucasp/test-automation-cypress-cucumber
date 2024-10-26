// Locators
import { CartTooltipLocators } from '@features/components/cart-tooltip/locators/CartTooltipLocators';

// Types
import { IProductResume } from '@features/pages/shared/types/product/IProductResume';

export class CartTooltip {
  private static readonly locators = CartTooltipLocators;

  constructor() {}

  public static getTotalItems(): Cypress.Chainable<number> {
    return cy.getValue(CartTooltip.locators.totalItems).then((totalItems) => {
      return parseInt(totalItems.split(' ')[0].replace('(', ''));
    });
  }

  public static getCartTotalPrice(): Cypress.Chainable<string> {
    return cy.getValue(CartTooltip.locators.totalPrice);
  }

  public static getAllProductsFromCart(): Cypress.Chainable<IProductResume[]> {
    return CartTooltip.getTotalItems().then((totalItems) => {
      const allProductsInCart: IProductResume[] = [];

      for (let i = 0; i < totalItems; i++) {
        const productResumePromise = CartTooltip.getProductFromCart(i);

        productResumePromise.then((productResume) => {
          allProductsInCart.push(productResume);
          cy.wrap(allProductsInCart).as('allProductsInCart');
        });
      }

      return cy.get('@allProductsInCart').then((allProductsInCart) => {
        return allProductsInCart as unknown as IProductResume[];
      });
    });
  }

  public static getProductFromCart(index: number): Cypress.Chainable<IProductResume> {
    return cy.getValue(CartTooltip.locators.product(index).productName).then((productName) => {
      return cy.getValue(CartTooltip.locators.product(index).productPrice).then((productPrice) => {
        return {
          productName,
          productPrice
        };
      });
    });
  }
}