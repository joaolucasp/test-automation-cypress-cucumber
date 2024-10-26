// Locators
import { ProductListLocators } from '@features/pages/product-list/locators/ProductListLocators';

// Component Objects
import { ProductCard } from '@features/pages/product-list/component-objects/ProductCard.component';

// Types
import { IProduct } from '@features/pages/shared/types/product/IProduct';
import { IProductResume } from '@features/pages/shared/types/product/IProductResume';

export class ProductList {
  private readonly locators = ProductListLocators;

  constructor() { }

  public viewProduct(index: number): void {
    const productCard = new ProductCard(index);
    productCard.clickOnCard();
  }

  public getTotalItems(): Cypress.Chainable<number> {
    return cy.get(this.locators.searchPage.section).then(($noResults) => {
      const noResultsTitle = $noResults.find(this.locators.searchPage.noResults);
      // If message "No products found" is displayed, return 0
      if (noResultsTitle.length > 0) {
        return cy.wrap(0);
      }

      return cy.getValue(this.locators.filterSection.totalItems).then((totalItems) => {
        return parseInt(totalItems.split(' ')[0]);
      });
    });
  }

  public getSearchedTitle(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.searchPage.searchTitle).then((searchTitle) => {
      return searchTitle.split(':')[1].trim().replaceAll('"', '');
    });
  }

  public getNoResultsMessage(): Cypress.Chainable<string> {
    return cy.getValue(this.locators.searchPage.noResults);
  }

  public getProductsList(): Cypress.Chainable<IProduct[]> {
    return this.getTotalItems().then((totalItems) => {
      const allProducts: IProductResume[] = [];

      cy.log(`The total items fetched are: ${totalItems}`);

      // If there are not products, return an empty array
      if (totalItems === 0) {
        return cy.wrap([]);
      }

      // For each product displayed on page, get the product resume
      for (let i = 0; i < totalItems; i++) {
        const productCard = new ProductCard(i);
        const productResumePromise = productCard.getProductResume();

        // Add the product resume to the allProducts array and wrap it for the next iteration
        productResumePromise.then((productResume: IProductResume) => {
          allProducts.push(productResume);
          cy.wrap(allProducts).as('allProducts');
        });
      }

      return cy.get('@allProducts').then((allProducts) => {
        return allProducts as unknown as IProductResume[];
      });
    });
  }
};