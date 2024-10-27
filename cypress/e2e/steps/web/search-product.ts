// Import Cypress methods and step definitions
import { Then } from '@badeball/cypress-cucumber-preprocessor';

// Page Objects
import { ProductList } from '@features/pages/product-list/page-objects-model/ProductList';

// Assertions
import { ProductListAssertions } from '@features/pages/product-list/assertions/ProductListAssertions';

/* Scenario for searching a product with results */
Then("the user should see a list of products displayed", () => {
  const productListPage = new ProductList();

  productListPage.getTotalItems().then((totalItems) => {
    ProductListAssertions.validateIfProductListIsNotEmpty(totalItems);
  });
});

Then("the displayed products should match the search criteria {string}", (searchTerm: string) => {
  const productListPage = new ProductList();

  productListPage.getProductsList().then((products) => {
    products.forEach((product) => {
      ProductListAssertions.validateIfProductNamesMatchSearchCriteria(product, searchTerm);
    });
  });
});
/* ------------------------------------------- */

/* Scenario for searching a product with no results */
Then("the user should see a message indicating that no products were found", () => {
  const productListPage = new ProductList();
  
  productListPage.getNoResultsMessage().then((message) => {
    ProductListAssertions.validateIfNoResultsMessageIsDisplayed(message);
  });
});
/* ------------------------------------------- */