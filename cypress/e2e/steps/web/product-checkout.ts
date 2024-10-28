// Import Cypress methods and step definitions
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Page Objects
import { Checkout } from '@features/pages/checkout/page-objects-model/Checkout';

// Components
import { Navbar } from '@features/components/navbar/Navbar';

// Assertions
import { CheckoutAssertions } from '@features/pages/checkout/assertions/CheckoutAssertions';

/* Scenario for validate the products added too the cart on the checkoutpage */
When('the user navigates to the checkout page', () => {
  Navbar.goToCheckoutPage();
});

Then('the user should see {string} quantity of {string} on checkout screen', (quantity: string, productName: string) => {
  const checkoutPage = new Checkout();  

  checkoutPage.getAllProducts().then(allProductsInCart => {
    const product = {
      productName,
      quantity: parseInt(quantity)
    };  

    CheckoutAssertions.validateIfProductAddedToCart(product, allProductsInCart);
  });
  }
);
/* ------------------------------------------- */
