// Import Cypress methods and step definitions
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

// Core Service Types
import { IApiResponseData } from '@services/advantage-shopping-api/AdvantageShoppingApi';

// Commom Assertions
import { CommomAssertions } from '@features/managers/shared/assertions/CommomAssertions';

Given("the user is not logged in", () => {
  // This step is merely to represent that no action needs to be done for logged out user
});

Then("the API should return a status code of 200", () => {
  cy.get('@responseData').then((responseData) => {
    const typedResponseData = responseData as unknown as IApiResponseData<any>;

    CommomAssertions.validateIfResponseIsOk(typedResponseData.statusCode);
  });
});