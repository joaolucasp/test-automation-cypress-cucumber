// Import Cypress methods and step definitions
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Page Objects
import { ProductList } from '@features/pages/product-list/page-objects-model/ProductList';
import { ProductDetails } from '@features/pages/product-details/page-objects-model/ProductDetails';

// Components
import { CartTooltip } from '@features/components/cart-tooltip/CartTooltip';

// Assertions
import { CartTooltipAssertions } from '@features/components/cart-tooltip/assertions/CartTooltipAssertions';


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