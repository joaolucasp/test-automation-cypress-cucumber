// Locators
import { ProductDetailsLocators } from '@features/pages/product-details/locators/ProductDetailsLocators';

// Types
import { IProduct } from '@features/pages/shared/types/product/IProduct';

export class ProductDetails {
  private readonly locators = ProductDetailsLocators;

  constructor() {}

  public increaseProductQuantity(quantity: number = 1): void {
    while (quantity > 0) {
      cy.get(this.locators.quantityActions.increase).click();
      quantity--;
    }
  }

  public decreaseProductQuantity(quantity: number = 1): void {
    while (quantity > 0) {
      this.getProductQuantity().then(currentQuantity => {
        if (currentQuantity > 1) {
          cy.get(this.locators.quantityActions.decrease).click();
        }
      });
    }
  }

  private getProductName(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.productName);
  }

  private getProductPrice(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.productPrice);
  }

  private getProductDescription(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.productDescription);
  }

  private getProductQuantity(): Cypress.Chainable<number> {
    return cy.getValue(this.locators.quantity).then(quantity => parseInt(quantity));
  }

  public getProductDetails(): Cypress.Chainable<IProduct> {
    return this.getProductName().then(productName => {
      return this.getProductPrice().then(productPrice => {
        return this.getProductDescription().then(productDescription => {
          return this.getProductQuantity().then(quantity => {
            return {
              productName,
              productPrice,
              productDescription,
              quantity
            }
          });
        });
      });
    });
  }
}
