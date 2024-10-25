// Import Cypress methods and step definitions
import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given("the user is on the homepage", () => {
  cy.visit('/');
});