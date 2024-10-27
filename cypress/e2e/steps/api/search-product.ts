// Import Cypress methods and step definitions
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Service
import { ProductService } from '@services/advantage-shopping-api/modules/product/ProductService';

When("the user searches for {string}  through the API", (searchTerm: string) => {
});