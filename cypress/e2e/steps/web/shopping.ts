// Import Cypress methods and step definitions
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Page Objects
import { Navbar } from '@features/components/navbar/Navbar';
import { ProductList } from '@features/pages/product-list/page-objects-model/ProductList';
import { ProductDetails } from '@features/pages/product-details/page-objects-model/ProductDetails';

// Assertions
import { ProductListAssertions } from '@features/pages/product-list/assertions/ProductListAssertions';

/* Scenario for searching a product with results */
When("the user searches for {string}", (searchTerm: string) => {
  Navbar.searchProduct(searchTerm);
});

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
})
/* ------------------------------------------- */

/* Scenario for searching a product with no results */
Then("the user should see a message indicating that no products were found", () => {
  const productListPage = new ProductList();

  productListPage.getNoResultsMessage().then((message) => {
    ProductListAssertions.validateIfNoResultsMessageIsDisplayed(message);
  });
});
/* ------------------------------------------- */
When('the user adds {string} of the first product to the cart', (quantity: string) => {
  const productListPage = new ProductList();
  productListPage.viewProduct(0);

  const ProductDetailsPage = new ProductDetails();
  ProductDetailsPage.increaseProductQuantity(parseInt(quantity));
  ProductDetailsPage.addToCart();
});