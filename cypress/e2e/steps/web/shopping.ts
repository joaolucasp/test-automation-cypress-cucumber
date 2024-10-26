// Import Cypress methods and step definitions
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Page Objects
import { Checkout } from '@features/pages/checkout/page-objects-model/Checkout';
import { ProductList } from '@features/pages/product-list/page-objects-model/ProductList';
import { ProductDetails } from '@features/pages/product-details/page-objects-model/ProductDetails';

// Components
import { Navbar } from '@features/components/navbar/Navbar';
import { CartTooltip } from '@features/components/cart-tooltip/CartTooltip';

// Assertions
import { CheckoutAssertions } from '@features/pages/checkout/assertions/CheckoutAssertions';
import { ProductListAssertions } from '@features/pages/product-list/assertions/ProductListAssertions';
import { CartTooltipAssertions } from '@features/components/cart-tooltip/assertions/CartTooltipAssertions';

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

/* Scenario for adding a product to the cart */
When('the user adds {string} quantity of the product to the cart', (quantity: string) => {
  const productListPage = new ProductList();
  productListPage.viewProduct(0);

  const ProductDetailsPage = new ProductDetails();
  ProductDetailsPage.increaseProductQuantity(parseInt(quantity));
  ProductDetailsPage.addToCart();
});

Then('the user should see {string} of {string} added to the cart', (quantity: string, productName: string) => {
  CartTooltip.getAllProductsFromCart().then((allProductsInCart) => {
    const product = {
      productName,
      quantity: parseInt(quantity)
    }

    CartTooltipAssertions.validateIfProductAddedToCart(product, allProductsInCart);
  });
});
/* ------------------------------------------- */

/* Scenario for validate the products added too the cart on the checkoutpage */
When('the user navigates to the checkout page', () => {
  Navbar.goToCheckoutPage();
});

Then('the user should see {string} quantity of {string} on checkout screen', (quantity: string, productName: string) => {
  const checkoutPage = new Checkout();

  checkoutPage.getAllProductsInCart().then((allProductsInCart) => {
    const product = {
      productName,
      quantity: parseInt(quantity)
    }

    CheckoutAssertions.validateIfProductAddedToCart(product, allProductsInCart);
  });
});
/* ------------------------------------------- */