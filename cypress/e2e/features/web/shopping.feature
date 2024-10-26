Feature: Shopping Cart Functionalities

  Background:
    Given the user is on the homepage

  @search-product
  Scenario Outline: User searches for a product and sees relevant results
    When the user searches for "<productName>"
    Then the user should see a list of products displayed
    And the displayed products should match the search criteria "<productName>"

  Examples:
    | productName |
    | tablet      |
    | laptop      |
    | speaker     |

  @search-product
  Scenario: User searches for a product that does not exist
    When the user searches for "ABCDEFGH!@#$%^&*()"
    Then the user should see a message indicating that no products were found

  @add-product-to-cart
  Scenario Outline: Add a product to the cart with a specific quantity
    When the user searches for "<productName>"
    And the user adds "<quantity>" quantity of the product to the cart
    Then the user should see "<quantity>" of "<productName>" added to the cart

  Examples:
    | productName                           | quantity |
    | HP STREAM - 11-D020NR LAPTOP          | 1        |
    | HP S9500 BLUETOOTH WIRELESS SPEAKER   | 2        |
    | HP PRO TABLET 608 G1                  | 3        |

  @checkout
  Scenario: Validate the products added to the cart on the checkout page
    When the user searches for "HP Z3600 WIRELESS MOUSE"
    And the user adds "1" quantity of the product to the cart
    And the user searches for "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES"
    And the user adds "3" quantity of the product to the cart
    And the user navigates to the checkout page
    Then the user should see "1" quantity of "HP Z3600 WIRELESS MOUSE" on checkout screen
    And the user should see "3" quantity of "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" on checkout screen