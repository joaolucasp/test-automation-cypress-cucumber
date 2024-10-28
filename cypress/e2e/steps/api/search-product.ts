// Import Cypress methods and step definitions
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Managers
import { ProductManager } from '@features/managers/product/ProductManager';

// Core Service Types
import { IApiResponseData } from '@services/advantage-shopping-api/AdvantageShoppingApi';
import { IApiProductCategory } from '@services/advantage-shopping-api/modules/product/types/IApiProductCategory';

// Assertions
import { ProductManagerAssertions } from '@features/managers/product/assertions/ProductManagerAssertions';

When("the user searches for {string} through the API", (searchTerm: string) => {
  const productManager = new ProductManager();

  productManager.searchProducts(searchTerm).then((responseData) => {
    cy.wrap(responseData).as('responseData');
  });
});

Then("the API response should contain products matching {string}", (searchTerm: string) => {
  cy.get('@responseData').then((responseData) => {
    const typedResponseData = responseData as unknown as IApiResponseData<IApiProductCategory[]>;

    // For each category
    typedResponseData.data.forEach((productCategory) => {

      // For each product in the category
      productCategory.products.forEach((product) => {
        ProductManagerAssertions.validateIfProductNamesMatchSearchCriteria(product, searchTerm);
      });
    });
  });
});

Then("the API response should indicate that no products were found, empty list", () => {
  cy.get('@responseData').then((responseData) => {
    const typedResponseData = responseData as unknown as IApiResponseData<IApiProductCategory[]>;
    
    cy.log(JSON.stringify(typedResponseData.data));
    
    ProductManagerAssertions.validateIfProductListIsEmpty(typedResponseData.data);
  });
});
