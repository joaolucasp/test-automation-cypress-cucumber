// Locators
import { ProductListLocators } from '@features/pages/product-list/locators/ProductListLocators';

export class ProductList {
  private readonly locators = ProductListLocators;

  constructor() { }

  public getTotalItems(): Cypress.Chainable<number> {
    return cy.getValue(this.locators.filterSection.totalItems).then((totalItems) => {
      return parseInt(totalItems.split(' ')[0]);
    });
  }

  public getSearchedTitle(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.productList.searchTitle).then((searchTitle) => {
      return searchTitle.split(':')[1].trim().replaceAll('"', '');
    });
  }
};