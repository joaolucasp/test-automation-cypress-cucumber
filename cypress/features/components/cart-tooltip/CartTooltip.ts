// Locators
import { CartTooltipLocators } from '@features/components/cart-tooltip/locators/CartTooltipLocators';

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

}