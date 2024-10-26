Feature: Add product to cart

  Background:
    Given the user is on the homepage

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