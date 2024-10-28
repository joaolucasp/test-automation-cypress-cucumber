// Locators
import { CheckoutLocators } from '@features/pages/checkout/locators/CheckoutLocators';

// Types
import { IProduct } from '@features/pages/shared/types/product/IProduct';

export class Checkout {
  private locators = CheckoutLocators;
    
  constructor() {}

  public getTotalItemsFromOrder(): Cypress.Chainable<number> {
    return cy.get(this.locators.productRow).then(($products) => {
      return $products.length;
    });
  }

  public getAllProducts(): Cypress.Chainable<IProduct[]> {
    return this.getTotalItemsFromOrder().then((totalItems) => {
      const allProductsInCart: IProduct[] = [];

      // If there are no items in the cart, return an empty array
      if (totalItems === 0) {
        return cy.wrap([]);
      }

      // For each product in the cart, get the product information
      for (let i = 0; i < totalItems; i++) {
        const productResumePromise = this.getProductFromOrderSummary(i);

        // add the product to the list of products in the cart and wrap it for the next iteration
        productResumePromise.then((productResume) => {
          allProductsInCart.push(productResume);
          cy.wrap(allProductsInCart).as('allProductsInOrderSummary');
        });
      }

      return cy.get('@allProductsInOrderSummary').then((allProductsInCart) => {
        return allProductsInCart as unknown as IProduct[];
      });
    });
  }

  public getProductFromOrderSummary(index: number): Cypress.Chainable<IProduct> {
    return cy.getValue(this.locators.product(index).productName).then((productName) => {
      return cy.getValue(this.locators.product(index).productPrice).then((productPrice) => {
        return cy.getValue(this.locators.product(index).productQuantity).then((productQuantity) => {
          return {
            productName,
            productPrice,
            quantity: parseInt(productQuantity.split(' ')[1].trim()),
          };
        });
      });
    });
  }
};