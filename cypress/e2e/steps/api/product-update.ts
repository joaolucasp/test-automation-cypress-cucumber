// Import Cypress methods and step definitions
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Managers
import { AccountManager } from '@features/managers/account/AccountManager';
import { ProductManager } from '@features/managers/product/ProductManager';

// Helpers
import { DataGenerator } from '@helpers/data-generator';
import { IApiSession } from '@services/advantage-shopping-api/modules/account/types/IApiSession';

// Assertions
import { ProductManagerAssertions } from '@features/managers/product/assertions/ProductManagerAssertions';

Given("an admin user is created and logged in", () => {
  const userDto = DataGenerator.generateUser();

  AccountManager.createAccount(userDto).then((response) => {
    const loginDto = {
      email: userDto.email,
      loginPassword: userDto.password,
      loginUser: userDto.loginName,
    };

    AccountManager.loginAccount(loginDto).then((response) => {
      cy.wrap(response).as('accessToken');
    });

    cy.wrap(response.data.response).as('userData');
  });
});

Given("a random product ID is obtained from the product list", () => {
  const productManager = new ProductManager();  

  // Search for all products (empty search term)
  productManager.searchProducts('').then((responseData) => {
    const randomProduct = productManager.getRandomProductFromList(responseData.data);

    cy.wrap(randomProduct.productId).as('randomProductId');
  });
});

When("the user updates the image of the product with ID {string} with source {string} and color {string}", (productId: string, source: string, color: string) => {
  const productManager = new ProductManager();

  cy.get('@randomProductId').then((productId) => {
    cy.get('@accessToken').then((accessToken) => {
      const productIdToUpdate = productId as unknown as string;
      const accessTokenTyped = accessToken as unknown as IApiSession;

      productManager.updateProductImage(accessTokenTyped.userId, productIdToUpdate, source, color, accessTokenTyped.accessToken).then((response) => {
        cy.wrap(response).as('responseData');
      });
    });
  });
});

Then("the product image with source {string} and color {string} should be updated successfully", (source: string, color: string) => {
  const productManager = new ProductManager();

  cy.get('@randomProductId').then((productId) => {
    productManager.getProductDetails(productId as unknown as string).then((response) => {
      ProductManagerAssertions.validateIfProductImageWasUpdated(response.data, source, color);
    });
  });
});