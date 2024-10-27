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

      // If there are no items in the cart, return an empty array
      if (totalItems === 0) {
        return cy.wrap([]);
      }

      // For each product in the cart, get the product information
      for (let i = 0; i < totalItems; i++) {
        const productResumePromise = CartTooltip.getProductFromCart(i);

        // add the product to the list of products in the cart and wrap it for the next iteration
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

  public static clickOnCheckoutButton(): void {
    cy.get(CartTooltip.locators.checkoutButton).click();
  }
}