// Locators
import { ProductListLocators } from '@features/pages/product-list/locators/ProductListLocators';

// Types
import { IProductResume } from '@features/pages/shared/types/product/IProductResume';

export class ProductCard {
  private readonly locators;

  constructor(index: number) {
    this.locators = ProductListLocators.productList.product(index);
  }

  public clickOnCard(): void {
    cy.get(this.locators.card).click();
  }

  private getProductName(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.name);
  }

  private getProductPrice(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.price);
  }

  public getProductResume(): Cypress.Chainable<IProductResume> {
    return this.getProductName().then((productName) => {
      return this.getProductPrice().then((productPrice) => {
        return {
          productName,
          productPrice
        }
      });
    });
  }
}
