Feature: Shopping Cart Functionalities

  Background:
    Given the user is on the homepage

  @checkout
  Scenario: Validate the products added to the cart on the checkout page
    When the user searches for "HP Z3600 WIRELESS MOUSE"
    And the user adds "1" quantity of the product to the cart
    And the user searches for "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES"
    And the user adds "3" quantity of the product to the cart
    And the user navigates to the checkout page
    Then the user should see "1" quantity of "HP Z3600 WIRELESS MOUSE" on checkout screen
    And the user should see "3" quantity of "BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES" on checkout screen