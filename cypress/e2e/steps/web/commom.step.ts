// Import Cypress methods and step definitions
import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

// Components
import { Navbar } from '@features/components/navbar/Navbar';

Given("the user is on the homepage", () => {
  cy.visit('/');
});

When("the user searches for {string}", (searchTerm: string) => {
  Navbar.searchProduct(searchTerm);
});